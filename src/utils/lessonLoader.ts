import { LessonData } from "@/types/lesson";

// Cache for loaded lessons to avoid repeated fetches
const lessonCache: { [key: string]: LessonData } = {};

// Module index cache
let moduleIndex: { [moduleId: string]: string[] } | null = null;

/**
 * Load the module index that maps module IDs to lesson IDs
 */
async function loadModuleIndex(): Promise<{ [moduleId: string]: string[] }> {
  if (moduleIndex) {
    return moduleIndex;
  }

  try {
    const response = await fetch('/lessons/index.json');
    if (!response.ok) {
      throw new Error(`Failed to load module index: ${response.statusText}`);
    }
    
    const rawIndex = await response.json();
    
    // Sort lesson IDs properly (handle cases like 2.10 vs 2.2)
    moduleIndex = {};
    for (const [moduleId, lessonIds] of Object.entries(rawIndex as Record<string, string[]>)) {
      moduleIndex[moduleId] = lessonIds.sort((a, b) => {
        const [aMod, aLesson] = a.split('.').map(Number);
        const [bMod, bLesson] = b.split('.').map(Number);
        
        if (aMod !== bMod) return aMod - bMod;
        return aLesson - bLesson;
      });
    }
    
    return moduleIndex;
  } catch (error) {
    console.error('Error loading module index:', error);
    return {};
  }
}

/**
 * Load a single lesson by ID
 */
export async function loadLesson(lessonId: string): Promise<LessonData | undefined> {
  // Check cache first
  if (lessonCache[lessonId]) {
    return lessonCache[lessonId];
  }

  try {
    const response = await fetch(`/lessons/${lessonId}.json`);
    if (!response.ok) {
      if (response.status === 404) {
        console.warn(`Lesson ${lessonId} not found`);
        return undefined;
      }
      throw new Error(`Failed to load lesson ${lessonId}: ${response.statusText}`);
    }

    const lessonData: LessonData = await response.json();
    
    // Cache the lesson
    lessonCache[lessonId] = lessonData;
    
    return lessonData;
  } catch (error) {
    console.error(`Error loading lesson ${lessonId}:`, error);
    return undefined;
  }
}

/**
 * Load all lessons for a specific module
 */
export async function loadModuleLessons(moduleId: string): Promise<{ [lessonId: string]: LessonData }> {
  const index = await loadModuleIndex();
  const lessonIds = index[moduleId] || [];
  
  const lessons: { [lessonId: string]: LessonData } = {};
  
  // Load lessons in parallel
  const loadPromises = lessonIds.map(async (lessonId) => {
    const lesson = await loadLesson(lessonId);
    if (lesson) {
      lessons[lessonId] = lesson;
    }
  });
  
  await Promise.all(loadPromises);
  
  return lessons;
}

/**
 * Get the lesson order for a module
 */
export async function getLessonOrderForModule(moduleId: string): Promise<string[]> {
  const index = await loadModuleIndex();
  return index[moduleId] || [];
}

/**
 * Load all lessons for all modules
 */
export async function loadAllLessons(): Promise<{ [moduleId: string]: { [lessonId: string]: LessonData } }> {
  const index = await loadModuleIndex();
  const allLessons: { [moduleId: string]: { [lessonId: string]: LessonData } } = {};
  
  // Load all modules in parallel
  const modulePromises = Object.keys(index).map(async (moduleId) => {
    allLessons[moduleId] = await loadModuleLessons(moduleId);
  });
  
  await Promise.all(modulePromises);
  
  return allLessons;
}

/**
 * Preload lessons for better performance
 */
export async function preloadModule(moduleId: string): Promise<void> {
  await loadModuleLessons(moduleId);
}

/**
 * Clear the lesson cache (useful for development)
 */
export function clearLessonCache(): void {
  Object.keys(lessonCache).forEach(key => delete lessonCache[key]);
  moduleIndex = null;
}