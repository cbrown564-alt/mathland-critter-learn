import { useState, useEffect, useRef } from "react";
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
  console.log('characters:', characters);
  console.log('lesson.characterId:', lesson.characterId);
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

  const handleAudioLoaded = () => {
    const duration = audioRef.current?.audio?.current?.duration || 0;
    setAudioDuration(duration);
  };

  // Attach timeupdate event for smooth transcript sync
  useEffect(() => {
    const audioEl = audioRef.current?.audio?.current;
    if (!audioEl) return;
    const update = () => handleAudioTimeUpdate();
    audioEl.addEventListener('timeupdate', update);
    return () => audioEl.removeEventListener('timeupdate', update);
  }, [audioRef.current, lesson.hearTranscript, audioDuration]);

  // Helper: calculate word-based time windows for transcript
  function getTranscriptTimeWindows(transcript, audioDuration) {
    if (!transcript || transcript.length === 0 || audioDuration === 0) return [];
    const wordCounts = transcript.map(p => p.split(/\s+/).length);
    const totalWords = wordCounts.reduce((a, b) => a + b, 0);
    let acc = 0;
    return wordCounts.map((count, i) => {
      const start = (acc / totalWords) * audioDuration;
      acc += count;
      const end = (acc / totalWords) * audioDuration;
      return { start, end };
    });
  }

  const handleAudioTimeUpdate = () => {
    if (!audioRef.current || !lesson.hearTranscript) return;
    const currentTime = audioRef.current?.audio?.current?.currentTime || 0;
    const transcript = lesson.hearTranscript;
    const windows = getTranscriptTimeWindows(transcript, audioDuration);
    const idx = windows.findIndex(w => currentTime >= w.start && currentTime < w.end);
    setCurrentTranscriptIdx(idx === -1 ? transcript.length - 1 : idx);
  };

  function LiveTranscript({ transcript, audioRef }) {
    const windows = getTranscriptTimeWindows(transcript, audioDuration);
    const paraRefs = useRef([]);
    useEffect(() => {
      if (paraRefs.current[currentTranscriptIdx]) {
        paraRefs.current[currentTranscriptIdx].scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, [currentTranscriptIdx]);
    return (
      <div className="space-y-2 max-h-64 overflow-y-auto">
        {transcript.map((para, i) => (
          <p
            key={i}
            ref={el => paraRefs.current[i] = el}
            className={`transition-all duration-300 px-2 py-1 rounded-md ${i === currentTranscriptIdx ? 'bg-blue-100 text-blue-900 font-semibold shadow' : 'text-slate-700 opacity-70'}`}
          >
            {para}
          </p>
        ))}
      </div>
    );
  }

  const renderCurrentSection = () => {
    const isCompleted = completedSections.has(currentSection);

    switch (currentSection) {
      case "narrative":
        return (
          <NarrativeHook 
            lesson={lesson} 
            character={character}
            onComplete={() => handleSectionComplete(currentSection)}
            isCompleted={isCompleted}
          />
        );
      case "memory":
        return (
          <MemoryAids 
            memoryAids={lesson.memoryAids}
            character={character}
            onComplete={() => handleSectionComplete(currentSection)}
            isCompleted={isCompleted}
          />
        );
      case "concept":
        // Use EnhancedConceptCheck for lesson 1.1 and 1.2, fallback to ConceptCheck otherwise
        if (lesson.id === '1.1') {
          return (
            <EnhancedConceptCheck
              conceptCheck={EXAMPLE_CONCEPT_CHECKS['vera-vectors']}
              onComplete={() => handleSectionComplete(currentSection)}
              isCompleted={isCompleted}
              onNext={handleNextSection}
            />
          );
        } else if (lesson.id === '1.2') {
          return (
            <EnhancedConceptCheck
              conceptCheck={EXAMPLE_CONCEPT_CHECKS['vera-addition-scenario']}
              onComplete={() => handleSectionComplete(currentSection)}
              isCompleted={isCompleted}
              onNext={handleNextSection}
            />
          );
        } else {
          return (
            <ConceptCheck 
              conceptCheck={lesson.conceptCheck}
              character={character}
              onComplete={() => handleSectionComplete(currentSection)}
              isCompleted={isCompleted}
            />
          );
        }
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
            <ReadSection
              content={lesson.readContent}
              analogy={lesson.readAnalogy}
              keyPoints={lesson.readKeyPoints}
              digDeeper={lesson.readDigDeeper}
              whyMatters={lesson.readWhyMatters}
            />
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
            <SeeSection lesson={lesson} character={character} />
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
            <div className="text-slate-700 leading-relaxed mb-8">{lesson.hearContent}</div>
            {lesson.hearAudioUrl && (
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={character.avatar}
                  alt={character.name}
                  className="w-16 h-16 rounded-full shadow-lg border-2 border-slate-200 bg-white object-cover"
                  style={{ flexShrink: 0 }}
                />
                <div className="flex-1">
                  <AudioPlayer
                    src={lesson.hearAudioUrl}
                    ref={audioRef}
                    onLoadedMetaData={handleAudioLoaded}
                    showJumpControls={false}
                    customAdditionalControls={[]}
                    layout="horizontal"
                    style={{ borderRadius: '0.75rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
                  />
                </div>
              </div>
            )}
            {/* Live Transcript */}
            {lesson.hearTranscript && lesson.hearTranscript.length > 0 && (
              <div className="mt-4 bg-slate-50 rounded-lg p-4 border border-slate-200">
                <h4 className="text-base font-semibold text-slate-700 mb-2">Transcript</h4>
                <LiveTranscript transcript={lesson.hearTranscript} audioRef={audioRef} />
              </div>
            )}
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
            <DoSection lesson={lesson} />
            <SectionCompletion
              onComplete={() => handleSectionComplete(currentSection)}
              onNext={handleNextSection}
              isCompleted={isCompleted}
              isLastSection={isLastSection}
            />
          </div>
        );
      default:
        return null;
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
