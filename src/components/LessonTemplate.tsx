import React, { useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { LessonData } from "@/types/lesson";
import { LessonHeader } from "./lesson/LessonHeader";
import { LessonSidebar } from "./lesson/LessonSidebar";
import { LessonNavigation } from "./lesson/LessonNavigation";
import { LearningObjectivesBanner } from "./lesson/LearningObjectivesBanner";
import { BreadcrumbNavigation } from "./Breadcrumb";
import { characters } from "../utils/characterData";
import { ReadSection } from "./lesson/ReadSection";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { CharacterAvatar } from "@/components/CharacterAvatar";
import { SeeSection } from "./lesson/SeeSection";
import { DoSection } from "./lesson/DoSection";
import { EnhancedConceptCheck } from './lesson/conceptCheck/EnhancedConceptCheck';
import { EXAMPLE_CONCEPT_CHECKS } from '@/data/exampleConceptChecks';
import { useLessonProgress } from '@/hooks/useLessonProgress';
import { LessonSectionRenderer } from './lesson/LessonSectionRenderer';

interface LessonTemplateProps {
  lesson: LessonData;
  previousLessonId?: string;
  nextLessonId?: string;
}

export const LessonTemplate = ({ lesson, previousLessonId, nextLessonId }: LessonTemplateProps) => {
  const {
    completedSections,
    currentSection,
    toggleSection,
    completeSection,
    setCurrentSection,
    getCompletionPercentage
  } = useLessonProgress(lesson.id);

  const audioRef = useRef<any>(null);
  const [audioDuration, setAudioDuration] = useState(0);
  const [currentTranscriptIdx, setCurrentTranscriptIdx] = useState(0);
  const sections = [
    { id: "narrative", title: "Introduction" },
    { id: "read", title: "Read" },
    { id: "see", title: "See" },
    { id: "hear", title: "Hear" },
    { id: "do", title: "Do" },
    { id: "memory", title: "Memory Aids" },
    { id: "concept", title: "Concept Check" },
    { id: "realworld", title: "Real World" }
  ];

  const handleSectionComplete = (sectionId: string) => {
    completeSection(sectionId);
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

  const progressPercentage = getCompletionPercentage(sections.length);
  const currentSectionIndex = sections.findIndex(s => s.id === currentSection);
  const isLastSection = currentSectionIndex === sections.length - 1;

  // Look up the full character object using characterId
  const character = characters.find(c => c.id === lesson.characterId);

  // If character is not found, show a fallback UI or return null for critical components
  if (!character) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Character Not Found</h2>
          <p className="text-slate-700 mb-4">The character for this lesson could not be found. Please check your lesson data or characterData.ts.</p>
        </div>
      </div>
    );
  }

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
              character={character}
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
                <LessonSectionRenderer
                  lesson={lesson}
                  character={character}
                  currentSection={currentSection}
                  completedSections={completedSections}
                  onSectionComplete={handleSectionComplete}
                  onNextSection={handleNextSection}
                  isLastSection={isLastSection}
                />
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
