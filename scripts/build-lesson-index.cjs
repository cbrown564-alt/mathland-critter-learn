const fs = require('fs');
const path = require('path');

/**
 * Build the lesson index from JSON files in public/lessons
 * This script automatically discovers all lesson files and creates the index.json
 */

const lessonsDir = path.join(__dirname, '..', 'public', 'lessons');
const indexFile = path.join(lessonsDir, 'index.json');

function buildLessonIndex() {
  console.log('Building lesson index...');
  
  // Read all JSON files in the lessons directory
  const files = fs.readdirSync(lessonsDir)
    .filter(file => file.endsWith('.json') && file !== 'index.json')
    .sort();
  
  console.log(`Found ${files.length} lesson files`);
  
  // Group lessons by module
  const moduleIndex = {};
  
  for (const file of files) {
    const lessonId = file.replace('.json', '');
    const [moduleId] = lessonId.split('.');
    
    if (!moduleIndex[moduleId]) {
      moduleIndex[moduleId] = [];
    }
    
    moduleIndex[moduleId].push(lessonId);
  }
  
  // Sort lesson IDs properly within each module
  for (const moduleId in moduleIndex) {
    moduleIndex[moduleId].sort((a, b) => {
      const [aMod, aLesson] = a.split('.').map(Number);
      const [bMod, bLesson] = b.split('.').map(Number);
      
      if (aMod !== bMod) return aMod - bMod;
      return aLesson - bLesson;
    });
  }
  
  // Sort modules by ID
  const sortedModuleIndex = {};
  Object.keys(moduleIndex)
    .sort((a, b) => Number(a) - Number(b))
    .forEach(moduleId => {
      sortedModuleIndex[moduleId] = moduleIndex[moduleId];
    });
  
  // Write the index file
  fs.writeFileSync(indexFile, JSON.stringify(sortedModuleIndex, null, 2));
  
  console.log(`Index written to ${indexFile}`);
  
  // Print summary
  console.log('\nModule Summary:');
  for (const [moduleId, lessons] of Object.entries(sortedModuleIndex)) {
    console.log(`  Module ${moduleId}: ${lessons.length} lessons (${lessons[0]} - ${lessons[lessons.length - 1]})`);
  }
  
  const totalLessons = Object.values(sortedModuleIndex)
    .reduce((sum, lessons) => sum + lessons.length, 0);
  
  console.log(`\nTotal: ${Object.keys(sortedModuleIndex).length} modules, ${totalLessons} lessons`);
  console.log('Lesson index build complete!');
}

// Validate lesson files
function validateLessonFiles() {
  console.log('\nValidating lesson files...');
  
  const files = fs.readdirSync(lessonsDir)
    .filter(file => file.endsWith('.json') && file !== 'index.json');
  
  let validCount = 0;
  let errorCount = 0;
  
  for (const file of files) {
    try {
      const filePath = path.join(lessonsDir, file);
      const content = fs.readFileSync(filePath, 'utf8');
      const lesson = JSON.parse(content);
      
      // Basic validation
      if (!lesson.id || !lesson.title || !lesson.characterId) {
        console.error(`❌ ${file}: Missing required fields (id, title, characterId)`);
        errorCount++;
      } else if (lesson.id !== file.replace('.json', '')) {
        console.error(`❌ ${file}: ID mismatch (expected ${file.replace('.json', '')}, got ${lesson.id})`);
        errorCount++;
      } else {
        validCount++;
      }
    } catch (error) {
      console.error(`❌ ${file}: Invalid JSON - ${error.message}`);
      errorCount++;
    }
  }
  
  console.log(`Validation complete: ${validCount} valid, ${errorCount} errors`);
  return errorCount === 0;
}

// Main execution
if (require.main === module) {
  try {
    const isValid = validateLessonFiles();
    if (isValid) {
      buildLessonIndex();
    } else {
      console.error('Validation failed. Please fix errors before building index.');
      process.exit(1);
    }
  } catch (error) {
    console.error('Error building lesson index:', error);
    process.exit(1);
  }
}

module.exports = { buildLessonIndex, validateLessonFiles };