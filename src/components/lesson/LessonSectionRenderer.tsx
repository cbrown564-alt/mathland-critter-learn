import * as React from "react";
import { LessonData } from "@/types/lesson";
import { Character } from "@/types/character";
import { NarrativeHook } from "./NarrativeHook";
import { MemoryAids } from "./MemoryAids";
import { ConceptCheck } from "./ConceptCheck";
import { RealWorldConnection } from "./RealWorldConnection";
import { ReadSection } from "./ReadSection";
import { SeeSection } from "./SeeSection";
import { DoSection } from "./DoSection";
import { SectionCompletion } from "./SectionCompletion";
import { EnhancedConceptCheck } from './conceptCheck/EnhancedConceptCheck';
import { EXAMPLE_CONCEPT_CHECKS } from '@/data/exampleConceptChecks';
import { EnhancedAudioPlayer } from './EnhancedAudioPlayer';

interface LessonSectionRendererProps {
  lesson: LessonData;
  character: Character;
  currentSection: string;
  completedSections: Set<string>;
  onSectionComplete: (sectionId: string) => void;
  onNextSection: () => void;
  isLastSection: boolean;
}

export const LessonSectionRenderer: React.FC<LessonSectionRendererProps> = ({
  lesson,
  character,
  currentSection,
  completedSections,
  onSectionComplete,
  onNextSection,
  isLastSection
}) => {
  const isCompleted = completedSections.has(currentSection);

  const handleSectionComplete = () => onSectionComplete(currentSection);

  switch (currentSection) {
    case "narrative":
      return (
        <NarrativeHook 
          lesson={lesson} 
          character={character}
          onComplete={handleSectionComplete}
          isCompleted={isCompleted}
        />
      );
      
    case "memory":
      return (
        <MemoryAids 
          memoryAids={lesson.memoryAids}
          character={character}
          onComplete={handleSectionComplete}
          isCompleted={isCompleted}
        />
      );
      
    case "concept":
      // Use EnhancedConceptCheck for lesson 1.1 and 1.2, fallback to ConceptCheck otherwise
      if (lesson.id === '1.1') {
        return (
          <EnhancedConceptCheck
            conceptCheck={EXAMPLE_CONCEPT_CHECKS['vera-vectors']}
            onComplete={handleSectionComplete}
            isCompleted={isCompleted}
            onNext={onNextSection}
          />
        );
      } else if (lesson.id === '1.2') {
        return (
          <EnhancedConceptCheck
            conceptCheck={EXAMPLE_CONCEPT_CHECKS['vera-addition-scenario']}
            onComplete={handleSectionComplete}
            isCompleted={isCompleted}
            onNext={onNextSection}
          />
        );
      } else {
        return (
          <ConceptCheck 
            conceptCheck={lesson.conceptCheck}
            character={character}
            onComplete={handleSectionComplete}
            isCompleted={isCompleted}
          />
        );
      }
      
    case "realworld":
      return (
        <RealWorldConnection 
          connection={lesson.realWorldConnection}
          onComplete={handleSectionComplete}
          isCompleted={isCompleted}
        />
      );
      
    case "read":
      return (
        <div className="prose max-w-none">
          <ReadSection
            content={lesson.readContent}
            analogy={lesson.readAnalogy}
            keyPoints={lesson.readKeyPoints}
            digDeeper={lesson.readDigDeeper}
            whyMatters={lesson.readWhyMatters}
          />
          <SectionCompletion
            onComplete={handleSectionComplete}
            onNext={onNextSection}
            isCompleted={isCompleted}
            isLastSection={isLastSection}
          />
        </div>
      );
      
    case "see":
      return (
        <div className="prose max-w-none">
          <SeeSection lesson={lesson} character={character} />
          <SectionCompletion
            onComplete={handleSectionComplete}
            onNext={onNextSection}
            isCompleted={isCompleted}
            isLastSection={isLastSection}
          />
        </div>
      );
      
          case "hear":
        return (
          <div className="prose max-w-none">
            <div className="text-slate-700 leading-relaxed mb-8">{lesson.hearContent}</div>
            {lesson.hearAudioUrl && (
              <EnhancedAudioPlayer
                audioUrl={lesson.hearAudioUrl}
                character={character}
                transcript={lesson.hearTranscript}
              />
            )}
            <SectionCompletion
              onComplete={handleSectionComplete}
              onNext={onNextSection}
              isCompleted={isCompleted}
              isLastSection={isLastSection}
            />
          </div>
        );
      
    case "do":
      return (
        <div className="prose max-w-none">
          <DoSection lesson={lesson} />
          <SectionCompletion
            onComplete={handleSectionComplete}
            onNext={onNextSection}
            isCompleted={isCompleted}
            isLastSection={isLastSection}
          />
        </div>
      );
      
    default:
      return null;
  }
};