
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Home, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LessonData } from "@/types/lesson";
import { NarrativeHook } from "./lesson/NarrativeHook";
import { LearningObjectives } from "./lesson/LearningObjectives";
import { MemoryAids } from "./lesson/MemoryAids";
import { ConceptCheck } from "./lesson/ConceptCheck";
import { RealWorldConnection } from "./lesson/RealWorldConnection";

interface LessonTemplateProps {
  lesson: LessonData;
  previousLessonId?: string;
  nextLessonId?: string;
}

export const LessonTemplate = ({ lesson, previousLessonId, nextLessonId }: LessonTemplateProps) => {
  const navigate = useNavigate();
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set());
  const [currentSection, setCurrentSection] = useState<string>("narrative");

  const sections = [
    { id: "narrative", title: "Story Hook", component: "narrative" },
    { id: "objectives", title: "Learning Goals", component: "objectives" },
    { id: "read", title: "Read", component: "read" },
    { id: "see", title: "See", component: "see" },
    { id: "hear", title: "Hear", component: "hear" },
    { id: "do", title: "Do", component: "do" },
    { id: "memory", title: "Memory Aids", component: "memory" },
    { id: "concept", title: "Concept Check", component: "concept" },
    { id: "realworld", title: "Real World", component: "realworld" }
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
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate("/")}
                className="border-slate-300 text-slate-700 hover:bg-slate-50"
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate("/module-0")}
                className="border-slate-300 text-slate-700 hover:bg-slate-50"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Module 0
              </Button>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-slate-600">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{lesson.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-600">Progress</span>
                <div className="w-24">
                  <Progress value={progressPercentage} className="h-2" />
                </div>
                <span className="text-sm text-slate-600">{Math.round(progressPercentage)}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-32">
              <CardContent className="p-6">
                {/* Character */}
                <div className="flex items-center gap-3 mb-6">
                  <img 
                    src={lesson.character.avatar} 
                    alt={lesson.character.fullName}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-lg"
                  />
                  <div>
                    <h3 className="font-semibold text-slate-800">{lesson.character.name}</h3>
                    <p className="text-sm text-slate-600">{lesson.character.personality}</p>
                  </div>
                </div>

                {/* Section Navigation */}
                <div className="space-y-2">
                  <h4 className="font-medium text-slate-800 mb-3">Lesson Sections</h4>
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setCurrentSection(section.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg text-sm transition-colors ${
                        currentSection === section.id
                          ? "bg-blue-50 text-blue-700 border border-blue-200"
                          : "hover:bg-slate-50 text-slate-700"
                      }`}
                    >
                      <span>{section.title}</span>
                      <div className="flex items-center gap-2">
                        {completedSections.has(section.id) && (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        )}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleSection(section.id);
                          }}
                          className={`w-4 h-4 rounded border-2 ${
                            completedSections.has(section.id)
                              ? "bg-green-500 border-green-500"
                              : "border-slate-300 hover:border-slate-400"
                          }`}
                        />
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
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

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              {previousLessonId ? (
                <Button
                  variant="outline"
                  onClick={() => navigate(`/lesson/${previousLessonId}`)}
                  className="border-slate-300 text-slate-700 hover:bg-slate-50"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous Lesson
                </Button>
              ) : (
                <div />
              )}

              {nextLessonId ? (
                <Button
                  onClick={() => navigate(`/lesson/${nextLessonId}`)}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Next Lesson
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={() => navigate("/module-0")}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Back to Module
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
