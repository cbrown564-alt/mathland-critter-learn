# Lesson Data Refactoring Documentation

## Overview

The lesson data structure has been refactored from large TypeScript files to a modular JSON-based system. This change reduces file sizes, improves maintainability, and enables dynamic loading of lesson content.

## Old Structure

Previously, lesson data was stored in TypeScript files:
```
src/utils/lessonData/
  module0.ts (400+ lines)
  module1.ts (500+ lines)
  ...
  module9.ts (600+ lines)
```

Each file exported a large object containing all lessons for that module.

## New Structure

Lesson data is now stored as individual JSON files:
```
src/lessons/
  module0/
    index.json          # Module metadata
    lesson-0.1.json     # Individual lesson data
    lesson-0.2.json
    ...
  module1/
    index.json
    lesson-1.1.json
    ...
```

### Benefits

1. **Smaller Files**: Each lesson is in its own file (typically 50-100 lines)
2. **Better Organization**: Clear folder structure for each module
3. **Easier Updates**: Edit individual lessons without touching others
4. **Dynamic Loading**: Load only needed lessons, improving performance
5. **JSON Format**: Easier to edit, validate, and process

## Migration Process

1. Run the migration script to convert existing TypeScript data to JSON:
   ```bash
   npx tsx scripts/migrate-lessons-typescript.ts
   ```

2. The script creates:
   - Individual JSON files for each lesson
   - Module index files with lesson lists
   - Proper folder structure

## Usage

### Async Loading (Recommended)

```typescript
import { getLessonDataForModuleAsync, getLessonOrderForModuleAsync } from '@/utils/lessonData';

// Load a specific lesson
const lesson = await getLessonDataForModuleAsync('0', '0.1');

// Get lesson order for a module
const lessonOrder = await getLessonOrderForModuleAsync('0');
```

### Synchronous Loading (Backward Compatibility)

For existing code that expects synchronous access:

```typescript
import { getLessonDataForModule, getLessonOrderForModule, ensureInitialized } from '@/utils/lessonData';

// Initialize once at app startup
await ensureInitialized();

// Then use synchronously
const lesson = getLessonDataForModule('0', '0.1');
const lessonOrder = getLessonOrderForModule('0');
```

### Direct JSON Import

You can also import JSON files directly:

```typescript
import lessonData from '@/lessons/module0/lesson-0.1.json';
```

## Module Index Format

Each module has an `index.json` file:

```json
{
  "moduleId": 0,
  "moduleTitle": "Prerequisites & Refresher",
  "lessons": ["0.1", "0.2", "0.3", ...],
  "lessonCount": 8
}
```

## Lesson JSON Format

Each lesson follows the `LessonData` interface:

```json
{
  "id": "0.1",
  "title": "Order of Operations & Algebraic Basics",
  "duration": "25 min",
  "characterId": "ollie",
  "narrativeHook": { ... },
  "learningObjectives": [...],
  "coreConcepts": [...],
  "readContent": "...",
  "seeContent": "...",
  "hearContent": "...",
  "doContent": "...",
  "memoryAids": { ... },
  "conceptCheck": { ... },
  "realWorldConnection": "..."
}
```

## Adding New Lessons

1. Create a new JSON file in the appropriate module folder:
   ```
   src/lessons/module{X}/lesson-{X.Y}.json
   ```

2. Follow the LessonData structure (see TypeScript interface)

3. Update the module's `index.json` to include the new lesson ID

## Performance Considerations

- Lessons are loaded on-demand by default
- Use `preloadAllModules()` to cache all lessons at startup if needed
- The system includes built-in caching to avoid re-loading

## Future Improvements

1. **Content Management System**: Build a UI for editing lessons
2. **Validation**: Add JSON schema validation for lesson data
3. **Compression**: Consider gzipping large lesson files
4. **CDN Support**: Move lessons to a CDN for faster loading
5. **Incremental Loading**: Load lesson content as users progress

## Cleanup

After verifying the new system works:

1. Remove old TypeScript lesson files from `src/utils/lessonData/`
2. Delete the migration scripts if no longer needed
3. Update any remaining imports to use the new system