import { LessonData } from "@/types/lesson";
import { 
  loadLesson, 
  loadModuleLessons, 
  getLessonOrderForModule as getAsyncLessonOrder,
  loadAllLessons,
  preloadModule 
} from "./lessonLoader";

// Cache for synchronous access - populated by async loaders
let allModuleLessons: { [moduleId: string]: { [lessonId: string]: LessonData } } = {};
let moduleIndices: { [moduleId: string]: string[] } = {};
let isInitialized = false;
let initializationPromise: Promise<void> | null = null;

/**
 * Initialize the lesson data system by loading all lessons
 * This should be called early in the app lifecycle
 */
export async function initializeLessonData(): Promise<void> {
  if (isInitialized) return;
  
  if (initializationPromise) {
    await initializationPromise;
    return;
  }

  initializationPromise = (async () => {
    try {
      // Load all lessons and indices
      const [allLessons, moduleOrderPromises] = await Promise.all([
        loadAllLessons(),
        Promise.all([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(async (moduleId) => {
          const order = await getAsyncLessonOrder(moduleId.toString());
          return { moduleId: moduleId.toString(), order };
        }))
      ]);

      // Populate the synchronous cache
      allModuleLessons = allLessons;
      
      // Populate module indices
      for (const { moduleId, order } of moduleOrderPromises) {
        moduleIndices[moduleId] = order;
      }

      isInitialized = true;
      console.log('Lesson data initialized successfully');
    } catch (error) {
      console.error('Failed to initialize lesson data:', error);
      // Initialize with empty data to prevent errors
      allModuleLessons = {};
      moduleIndices = {};
      isInitialized = true;
    }
  })();

  await initializationPromise;
}

/**
 * Lazy initialization for backward compatibility
 */
async function ensureInitialized(): Promise<void> {
  if (!isInitialized) {
    await initializeLessonData();
  }
}

// =============================
// BACKWARD COMPATIBLE SYNC API
// =============================

/**
 * Get lesson order for a module (synchronous, for backward compatibility)
 * Note: May return empty array if data isn't loaded yet
 */
export function getLessonOrderForModule(moduleId: string): string[] {
  // Try to initialize async in background if not done
  if (!isInitialized) {
    ensureInitialized().catch(console.error);
  }
  
  return moduleIndices[moduleId] || [];
}

/**
 * Get lesson data for a specific lesson (synchronous, for backward compatibility)
 * Note: May return undefined if data isn't loaded yet
 */
export function getLessonDataForModule(moduleId: string, lessonId: string): LessonData | undefined {
  // Try to initialize async in background if not done
  if (!isInitialized) {
    ensureInitialized().catch(console.error);
  }
  
  return allModuleLessons[moduleId]?.[lessonId];
}

// Export the allModuleLessons for backward compatibility
// Note: This will be empty until initialization is complete
export { allModuleLessons };

// =============================
// NEW ASYNC API
// =============================

/**
 * Get lesson order for a module (async, preferred for new code)
 */
export async function getLessonOrderForModuleAsync(moduleId: string): Promise<string[]> {
  await ensureInitialized();
  return moduleIndices[moduleId] || [];
}

/**
 * Get lesson data for a specific lesson (async, preferred for new code)
 */
export async function getLessonDataForModuleAsync(moduleId: string, lessonId: string): Promise<LessonData | undefined> {
  await ensureInitialized();
  return allModuleLessons[moduleId]?.[lessonId];
}

/**
 * Get all lessons for a module (async)
 */
export async function getModuleLessonsAsync(moduleId: string): Promise<{ [lessonId: string]: LessonData }> {
  await ensureInitialized();
  return allModuleLessons[moduleId] || {};
}

/**
 * Load a single lesson dynamically (bypasses cache)
 */
export async function loadLessonDynamic(lessonId: string): Promise<LessonData | undefined> {
  return await loadLesson(lessonId);
}

/**
 * Preload a specific module for better performance
 */
export async function preloadModuleData(moduleId: string): Promise<void> {
  await preloadModule(moduleId);
  
  // Update the synchronous cache
  if (!allModuleLessons[moduleId]) {
    const moduleLessons = await loadModuleLessons(moduleId);
    allModuleLessons[moduleId] = moduleLessons;
    
    const order = await getAsyncLessonOrder(moduleId);
    moduleIndices[moduleId] = order;
  }
}

/**
 * Check if the lesson data system is ready
 */
export function isLessonDataReady(): boolean {
  return isInitialized;
}

/**
 * Get initialization status and progress
 */
export function getLessonDataStatus(): { 
  initialized: boolean; 
  moduleCount: number; 
  lessonCount: number; 
} {
  const moduleCount = Object.keys(allModuleLessons).length;
  const lessonCount = Object.values(allModuleLessons)
    .reduce((total, module) => total + Object.keys(module).length, 0);
  
  return {
    initialized: isInitialized,
    moduleCount,
    lessonCount
  };
}

// =============================
// DEPRECATED FUNCTIONS
// =============================
// These are kept for compatibility with existing migration scripts

/**
 * @deprecated Use getLessonOrderForModuleAsync instead
 */
export function getModule1LessonOrder(): string[] {
  return getLessonOrderForModule("1");
}

/**
 * @deprecated Use getLessonDataForModuleAsync instead
 */
export function getModule1LessonData(lessonId: string): LessonData | undefined {
  return getLessonDataForModule("1", lessonId);
}

// Initialize on module load for immediate availability
initializeLessonData().catch(console.error);