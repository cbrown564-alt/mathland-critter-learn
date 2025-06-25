const fs = require('fs');
const path = require('path');

// Import the lesson data (require with .js extension if using transpiled output, or adjust as needed)
const lessonData = require('../src/utils/lessonData');

const lessonOrder = lessonData.getModule1LessonOrder();
const getLesson = lessonData.getModule1LessonData;

function sectionFromLesson(lesson) {
  const sections = [];

  // Narrative hook
  if (lesson.narrativeHook?.story) {
    sections.push({ type: 'text', content: lesson.narrativeHook.story });
  }
  if (lesson.narrativeHook?.characterMessage) {
    sections.push({ type: 'text', content: lesson.narrativeHook.characterMessage });
  }

  // Learning objectives
  if (lesson.learningObjectives?.length) {
    sections.push({ type: 'text', content: 'Learning Objectives: ' + lesson.learningObjectives.join('; ') });
  }

  // Core concepts
  if (lesson.coreConcepts?.length) {
    sections.push({ type: 'text', content: 'Core Concepts: ' + lesson.coreConcepts.join('; ') });
  }

  // Memory aids
  if (lesson.memoryAids?.mantra) {
    sections.push({ type: 'text', content: 'Memory Aid (Mantra): ' + lesson.memoryAids.mantra });
  }
  if (lesson.memoryAids?.visual) {
    sections.push({ type: 'text', content: 'Memory Aid (Visual): ' + lesson.memoryAids.visual });
  }

  // Real world connection
  if (lesson.realWorldConnection) {
    sections.push({ type: 'text', content: 'Real World Connection: ' + lesson.realWorldConnection });
  }

  // Concept check (quiz)
  if (lesson.conceptCheck?.question) {
    sections.push({
      type: 'quiz',
      question: lesson.conceptCheck.question,
      options: lesson.conceptCheck.options,
      answer: lesson.conceptCheck.options[lesson.conceptCheck.correctAnswer],
      explanation: lesson.conceptCheck.explanation
    });
  }

  // Read/see/hear/do content
  if (lesson.readContent) sections.push({ type: 'text', content: lesson.readContent });
  if (lesson.seeContent) sections.push({ type: 'text', content: 'See: ' + lesson.seeContent });
  if (lesson.hearContent) sections.push({ type: 'text', content: 'Hear: ' + lesson.hearContent });
  if (lesson.doContent) sections.push({ type: 'text', content: 'Do: ' + lesson.doContent });

  return sections;
}

const out = [];
out.push('import type { Lesson } from "./module0";');
out.push('');
out.push('const module1Lessons: Lesson[] = [');

for (const id of lessonOrder) {
  const lesson = getLesson(id);
  out.push('  {');
  out.push(`    id: "${lesson.id}",`);
  out.push(`    title: ${JSON.stringify(lesson.title)},`);
  out.push('    sections: [');
  for (const section of sectionFromLesson(lesson)) {
    out.push('      ' + JSON.stringify(section) + ',');
  }
  out.push('    ]');
  out.push('  },');
}
out.push('];');
out.push('');
out.push('export default module1Lessons;');

fs.writeFileSync(
  path.join(__dirname, '../src/lessons/module1.ts'),
  out.join('\n'),
  'utf8'
);

console.log('Migration complete! Check src/lessons/module1.ts'); 