import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { LessonData } from '../src/types/lesson';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import all module lessons
import { module0Lessons } from '../src/utils/lessonData/module0';
import { module1Lessons } from '../src/utils/lessonData/module1';
import { module2Lessons } from '../src/utils/lessonData/module2';
import { module3Lessons } from '../src/utils/lessonData/module3';
import { module4Lessons } from '../src/utils/lessonData/module4';
import { module5Lessons } from '../src/utils/lessonData/module5';
import { module6Lessons } from '../src/utils/lessonData/module6';
import { module7Lessons } from '../src/utils/lessonData/module7';
import { module8Lessons } from '../src/utils/lessonData/module8';
import { module9Lessons } from '../src/utils/lessonData/module9';

const moduleData = [
  { id: 0, lessons: module0Lessons, title: 'Prerequisites & Refresher' },
  { id: 1, lessons: module1Lessons, title: 'Introduction to Vectors & Linear Combinations' },
  { id: 2, lessons: module2Lessons, title: 'Matrix Operations & Transformations' },
  { id: 3, lessons: module3Lessons, title: 'Eigenvalues, Eigenvectors & Matrix Decomposition' },
  { id: 4, lessons: module4Lessons, title: 'Calculus Fundamentals' },
  { id: 5, lessons: module5Lessons, title: 'Optimization & Gradient Methods' },
  { id: 6, lessons: module6Lessons, title: 'Probability Fundamentals' },
  { id: 7, lessons: module7Lessons, title: 'Statistical Inference & Hypothesis Testing' },
  { id: 8, lessons: module8Lessons, title: 'Advanced Topics' },
  { id: 9, lessons: module9Lessons, title: 'Integration & Synthesis' },
];

function migrateModule(moduleInfo: typeof moduleData[0]) {
  const { id, lessons, title } = moduleInfo;
  const outputDir = path.join(__dirname, `../src/lessons/module${id}`);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const lessonIds = Object.keys(lessons || {});
  console.log(`\nProcessing module ${id}: ${title}`);
  console.log(`Found ${lessonIds.length} lessons`);

  // Save each lesson as JSON
  lessonIds.forEach((lessonId) => {
    const lesson = lessons[lessonId];
    const outputPath = path.join(outputDir, `lesson-${lessonId}.json`);
    
    try {
      fs.writeFileSync(outputPath, JSON.stringify(lesson, null, 2));
      console.log(`✓ Created lesson-${lessonId}.json`);
    } catch (error) {
      console.error(`✗ Failed to save lesson ${lessonId}:`, error);
    }
  });

  // Create module index
  const indexPath = path.join(outputDir, 'index.json');
  const moduleIndex = {
    moduleId: id,
    moduleTitle: title,
    lessons: lessonIds.sort(),
    lessonCount: lessonIds.length
  };
  
  fs.writeFileSync(indexPath, JSON.stringify(moduleIndex, null, 2));
  console.log(`✓ Created module index`);
}

// Run migration
console.log('Starting TypeScript-based lesson migration...');
moduleData.forEach(migrateModule);
console.log('\n✅ Migration complete!');