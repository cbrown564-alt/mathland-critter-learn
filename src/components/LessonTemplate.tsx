import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LessonData } from "@/types/lesson";
import { LessonHeader } from "./lesson/LessonHeader";
import { LessonSidebar } from "./lesson/LessonSidebar";
import { LessonNavigation } from "./lesson/LessonNavigation";
import { NarrativeHook } from "./lesson/NarrativeHook";
import { LearningObjectivesBanner } from "./lesson/LearningObjectivesBanner";
import { MemoryAids } from "./lesson/MemoryAids";
import { ConceptCheck } from "./lesson/ConceptCheck";
import { RealWorldConnection } from "./lesson/RealWorldConnection";
import { BreadcrumbNavigation } from "./Breadcrumb";
import { SectionCompletion } from "./lesson/SectionCompletion";

interface LessonTemplateProps {
  lesson: LessonData;
  previousLessonId?: string;
  nextLessonId?: string;
}

// Simple localStorage utility for progress persistence
const getStoredProgress = (lessonId: string) => {
  if (typeof window === 'undefined') return { completedSections: new Set<string>(), currentSection: "narrative" };
  const stored = localStorage.getItem(`lesson-progress-${lessonId}`);
  if (stored) {
    const parsed = JSON.parse(stored);
    return {
      completedSections: new Set<string>((parsed.completedSections || []) as string[]),
      currentSection: parsed.currentSection || "narrative"
    };
  }
  return { completedSections: new Set<string>(), currentSection: "narrative" };
};

const storeProgress = (lessonId: string, completedSections: Set<string>, currentSection: string) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(`lesson-progress-${lessonId}`, JSON.stringify({
    completedSections: Array.from(completedSections),
    currentSection
  }));
};

export const LessonTemplate = ({ lesson, previousLessonId, nextLessonId }: LessonTemplateProps) => {
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set());
  const [currentSection, setCurrentSection] = useState<string>("narrative");

  const sections = [
    { id: "narrative", title: "Story Hook" },
    { id: "read", title: "Read" },
    { id: "see", title: "See" },
    { id: "hear", title: "Hear" },
    { id: "do", title: "Do" },
    { id: "memory", title: "Memory Aids" },
    { id: "concept", title: "Concept Check" },
    { id: "realworld", title: "Real World" }
  ];

  // Load progress when lesson changes
  useEffect(() => {
    const stored = getStoredProgress(lesson.id);
    setCompletedSections(stored.completedSections);
    setCurrentSection(stored.currentSection);
  }, [lesson.id]);

  // Store progress whenever it changes
  useEffect(() => {
    storeProgress(lesson.id, completedSections, currentSection);
  }, [lesson.id, completedSections, currentSection]);

  const toggleSection = (sectionId: string) => {
    const newCompleted = new Set(completedSections);
    if (newCompleted.has(sectionId)) {
      newCompleted.delete(sectionId);
    } else {
      newCompleted.add(sectionId);
    }
    setCompletedSections(newCompleted);
  };

  const handleSectionComplete = (sectionId: string) => {
    const newCompleted = new Set(completedSections);
    newCompleted.add(sectionId);
    setCompletedSections(newCompleted);
    
    // Auto-advance to next section
    const currentIndex = sections.findIndex(s => s.id === sectionId);
    if (currentIndex < sections.length - 1) {
      setCurrentSection(sections[currentIndex + 1].id);
    }
  };

  const handleNextSection = () => {
    const currentIndex = sections.findIndex(s => s.id === currentSection);
    if (currentIndex < sections.length - 1) {
      setCurrentSection(sections[currentIndex + 1].id);
    }
  };

  const progressPercentage = Math.min((completedSections.size / sections.length) * 100, 100);
  const currentSectionIndex = sections.findIndex(s => s.id === currentSection);
  const isLastSection = currentSectionIndex === sections.length - 1;

  const renderCurrentSection = () => {
    const isCompleted = completedSections.has(currentSection);

    switch (currentSection) {
      case "narrative":
        return (
          <NarrativeHook 
            lesson={lesson} 
            onComplete={() => handleSectionComplete(currentSection)}
            isCompleted={isCompleted}
          />
        );
      case "memory":
        return (
          <MemoryAids 
            memoryAids={lesson.memoryAids}
            character={lesson.character}
            onComplete={() => handleSectionComplete(currentSection)}
            isCompleted={isCompleted}
          />
        );
      case "concept":
        return (
          <ConceptCheck 
            conceptCheck={lesson.conceptCheck}
            character={lesson.character}
            onComplete={() => handleSectionComplete(currentSection)}
            isCompleted={isCompleted}
          />
        );
      case "realworld":
        return (
          <RealWorldConnection 
            connection={lesson.realWorldConnection}
            onComplete={() => handleSectionComplete(currentSection)}
            isCompleted={isCompleted}
          />
        );
      case "read":
        return (
          <div className="prose max-w-none">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">📖 Read</h3>
            <div className="text-slate-700 leading-relaxed mb-8">{lesson.readContent}</div>
            <SectionCompletion
              onComplete={() => handleSectionComplete(currentSection)}
              onNext={handleNextSection}
              isCompleted={isCompleted}
              isLastSection={isLastSection}
            />
          </div>
        );
      case "see":
        return (
          <div className="prose max-w-none">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">👁️ See</h3>
            <div className="text-slate-700 leading-relaxed mb-8">{lesson.seeContent}</div>
            <SectionCompletion
              onComplete={() => handleSectionComplete(currentSection)}
              onNext={handleNextSection}
              isCompleted={isCompleted}
              isLastSection={isLastSection}
            />
          </div>
        );
      case "hear":
        return (
          <div className="prose max-w-none">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">👂 Hear</h3>
            <div className="text-slate-700 leading-relaxed mb-8">{lesson.hearContent}</div>
            <SectionCompletion
              onComplete={() => handleSectionComplete(currentSection)}
              onNext={handleNextSection}
              isCompleted={isCompleted}
              isLastSection={isLastSection}
            />
          </div>
        );
      case "do":
        return (
          <div className="prose max-w-none">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">✋ Do</h3>
            <div className="text-slate-700 leading-relaxed mb-8">{lesson.doContent}</div>
            <SectionCompletion
              onComplete={() => handleSectionComplete(currentSection)}
              onNext={handleNextSection}
              isCompleted={isCompleted}
              isLastSection={isLastSection}
            />
          </div>
        );
      default:
        return (
          <NarrativeHook 
            lesson={lesson} 
            onComplete={() => handleSectionComplete(currentSection)}
            isCompleted={isCompleted}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-1">
      <LessonHeader progressPercentage={progressPercentage} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Learning Objectives Banner - Always Visible */}
        <LearningObjectivesBanner objectives={lesson.learningObjectives} />

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <LessonSidebar 
              character={lesson.character}
              sections={sections}
              currentSection={currentSection}
              completedSections={completedSections}
              onSectionChange={setCurrentSection}
              onToggleSection={toggleSection}
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <BreadcrumbNavigation 
              lessonId={lesson.id}
              lessonTitle={lesson.title}
            />
            
            <div className="mb-8">
              <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                Lesson {lesson.id}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                {lesson.title}
              </h1>
            </div>

            <Card>
              <CardContent className="p-8">
                {renderCurrentSection()}
              </CardContent>
            </Card>

            <LessonNavigation 
              previousLessonId={previousLessonId}
              nextLessonId={nextLessonId}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
