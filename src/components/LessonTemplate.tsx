
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LessonData } from "@/types/lesson";
import { LessonHeader } from "./lesson/LessonHeader";
import { LessonSidebar } from "./lesson/LessonSidebar";
import { LessonNavigation } from "./lesson/LessonNavigation";
import { NarrativeHook } from "./lesson/NarrativeHook";
import { LearningObjectives } from "./lesson/LearningObjectives";
import { MemoryAids } from "./lesson/MemoryAids";
import { ConceptCheck } from "./lesson/ConceptCheck";
import { RealWorldConnection } from "./lesson/RealWorldConnection";
import { Button } from "@/components/ui/button";

interface LessonTemplateProps {
  lesson: LessonData;
  previousLessonId?: string;
  nextLessonId?: string;
}

export const LessonTemplate = ({ lesson, previousLessonId, nextLessonId }: LessonTemplateProps) => {
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set());
  const [currentSection, setCurrentSection] = useState<string>("narrative");

  const sections = [
    { id: "narrative", title: "Story Hook" },
    { id: "objectives", title: "Learning Goals" },
    { id: "read", title: "Read" },
    { id: "see", title: "See" },
    { id: "hear", title: "Hear" },
    { id: "do", title: "Do" },
    { id: "memory", title: "Memory Aids" },
    { id: "concept", title: "Concept Check" },
    { id: "realworld", title: "Real World" }
  ];

  // Reset completed sections when lesson changes
  useEffect(() => {
    setCompletedSections(new Set());
    setCurrentSection("narrative");
  }, [lesson.id]);

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
  };

  const progressPercentage = Math.min((completedSections.size / sections.length) * 100, 100);

  const renderCurrentSection = () => {
    const isCompleted = completedSections.has(currentSection);
    const onComplete = () => handleSectionComplete(currentSection);

    switch (currentSection) {
      case "narrative":
        return <NarrativeHook lesson={lesson} onComplete={onComplete} isCompleted={isCompleted} />;
      case "objectives":
        return (
          <LearningObjectives 
            objectives={lesson.learningObjectives}
            completed={lesson.learningObjectives.map(() => false)}
            onToggle={() => {}}
            onComplete={onComplete}
            isCompleted={isCompleted}
          />
        );
      case "memory":
        return (
          <MemoryAids 
            memoryAids={lesson.memoryAids}
            character={lesson.character}
            onComplete={onComplete}
            isCompleted={isCompleted}
          />
        );
      case "concept":
        return (
          <ConceptCheck 
            conceptCheck={lesson.conceptCheck}
            character={lesson.character}
            onComplete={onComplete}
            isCompleted={isCompleted}
          />
        );
      case "realworld":
        return (
          <RealWorldConnection 
            connection={lesson.realWorldConnection}
            onComplete={onComplete}
            isCompleted={isCompleted}
          />
        );
      case "read":
        return (
          <div className="space-y-4">
            <div className="prose max-w-none">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">📖 Read</h3>
              <p className="text-slate-700 leading-relaxed">{lesson.readContent}</p>
            </div>
            <Button onClick={onComplete} className={isCompleted ? 'bg-green-500' : 'bg-blue-500'}>
              {isCompleted ? 'Completed' : 'Mark as Read'}
            </Button>
          </div>
        );
      case "see":
        return (
          <div className="space-y-4">
            <div className="prose max-w-none">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">👁️ See</h3>
              <p className="text-slate-700 leading-relaxed">{lesson.seeContent}</p>
            </div>
            <Button onClick={onComplete} className={isCompleted ? 'bg-green-500' : 'bg-blue-500'}>
              {isCompleted ? 'Completed' : 'Mark as Seen'}
            </Button>
          </div>
        );
      case "hear":
        return (
          <div className="space-y-4">
            <div className="prose max-w-none">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">👂 Hear</h3>
              <p className="text-slate-700 leading-relaxed">{lesson.hearContent}</p>
            </div>
            <Button onClick={onComplete} className={isCompleted ? 'bg-green-500' : 'bg-blue-500'}>
              {isCompleted ? 'Completed' : 'Mark as Heard'}
            </Button>
          </div>
        );
      case "do":
        return (
          <div className="space-y-4">
            <div className="prose max-w-none">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">✋ Do</h3>
              <p className="text-slate-700 leading-relaxed">{lesson.doContent}</p>
            </div>
            <Button onClick={onComplete} className={isCompleted ? 'bg-green-500' : 'bg-blue-500'}>
              {isCompleted ? 'Completed' : 'Mark as Done'}
            </Button>
          </div>
        );
      default:
        return <NarrativeHook lesson={lesson} onComplete={onComplete} isCompleted={isCompleted} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <LessonHeader 
        lessonId={lesson.id}
        lessonTitle={lesson.title}
        duration={lesson.duration}
        progressPercentage={progressPercentage}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
