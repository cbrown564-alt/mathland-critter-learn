import { LessonData } from "@/types/lesson";
import { module0Lessons } from "./lessonData/module0";
import { module1Lessons } from "./lessonData/module1";
import { module2Lessons } from "./lessonData/module2";
import { module3Lessons } from "./lessonData/module3";
import { module4Lessons } from "./lessonData/module4";
import { module5Lessons } from "./lessonData/module5";
import { module6Lessons } from "./lessonData/module6";
import { module7Lessons } from "./lessonData/module7";
import { module8Lessons } from "./lessonData/module8";
import { module9Lessons } from "./lessonData/module9";



















// Map of all module lessons for generic access
export const allModuleLessons: { [moduleId: string]: { [lessonId: string]: LessonData } } = {
  "0": module0Lessons,
  "1": module1Lessons,
  "2": module2Lessons,
  "3": module3Lessons,
  "4": module4Lessons,
  "5": module5Lessons,
  "6": module6Lessons,
  "7": module7Lessons,
  "8": module8Lessons,
  "9": module9Lessons,
  // Add more modules as needed
};

// Generic lesson order function
export function getLessonOrderForModule(moduleId: string): string[] {
  return Object.keys(allModuleLessons[moduleId] || {});
}

// Generic lesson data function
export function getLessonDataForModule(moduleId: string, lessonId: string): LessonData | undefined {
  return allModuleLessons[moduleId]?.[lessonId];
}

// Deprecated: old per-module functions (to be removed after migration)
// export const getLessonOrder = ...
// export const getLessonData = ...
// export const getModule1LessonOrder = ...
// export const getModule1LessonData = ...
// export const getModule2LessonOrder = ...
// export const getModule2LessonData = ...