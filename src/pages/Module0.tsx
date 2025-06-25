import { Clock, Play, ArrowRight, Home, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModuleCharacterCard } from "@/components/ModuleCharacterCard";
import { LessonRoadmap } from "@/components/LessonRoadmap";
import { useNavigate } from "react-router-dom";
import { getLessonOrder, getLessonData } from "../utils/lessonData";
import { useEffect, useState } from "react";
import { characters } from "../utils/characterData";
import { Header } from "@/components/Header";

// Utility to get lesson progress from localStorage
const getStoredProgress = (lessonId: string) => {
  if (typeof window === 'undefined') return { completedSections: new Set(), currentSection: "narrative" };
  const stored = localStorage.getItem(`lesson-progress-${lessonId}`);
  if (stored) {
    const parsed = JSON.parse(stored);
    return {
      completedSections: new Set(parsed.completedSections || []),
      currentSection: parsed.currentSection || "narrative"
    };
  }
  return { completedSections: new Set(), currentSection: "narrative" };
};

const module0Characters = [
  (() => { const c = characters.find(c => c.id === "ollie"); return c ? { ...c, gradientClass: "bg-gradient-ollie", lessons: ["0.1", "0.2", "0.3", "0.4"] } : null; })(),
  (() => { const c = characters.find(c => c.id === "felix"); return c ? { ...c, gradientClass: "bg-gradient-felix", lessons: ["0.5", "0.6", "0.7"] } : null; })()
].filter(Boolean);

const getDynamicLessons = () => {
  const lessonOrder = getLessonOrder();
  let foundFirstIncomplete = false;
  return lessonOrder.map((id) => {
    const data = getLessonData(id);
    const progress = getStoredProgress(id);
    // Consider a lesson completed if all sections are completed (8 sections in LessonTemplate)
    const isCompleted = progress.completedSections && progress.completedSections.size >= 8;
    let status: 'locked' | 'available' | 'completed' | 'current' = 'locked';
    if (isCompleted) {
      status = 'completed';
    } else if (!foundFirstIncomplete) {
      status = 'available';
      foundFirstIncomplete = true;
    }
    // Map characterId to character name for LessonRoadmap
    const charObj = characters.find(c => c.id === data.characterId);
    return {
      id: data.id,
      title: data.title,
      character: charObj ? charObj.name.split(' ')[0] : '',
      duration: data.duration,
      status,
      description: data.narrativeHook?.story || data.readContent || ""
    };
  });
};

const Module0 = () => {
  const navigate = useNavigate();
  const [lessons, setLessons] = useState(getDynamicLessons());

  useEffect(() => {
    const handle = () => setLessons(getDynamicLessons());
    window.addEventListener('storage', handle);
    // Also update on mount
    handle();
    return () => window.removeEventListener('storage', handle);
  }, []);

  // Determine if Felix should be locked (all Ollie lessons must be completed)
  const ollieLessonIds = module0Characters.find(c => c.id === 'ollie')?.lessons || [];
  const allOllieCompleted = ollieLessonIds.every(id => {
    const progress = getStoredProgress(id);
    return progress.completedSections && progress.completedSections.size >= 8;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto py-12">
          {/* HERO SECTION - Soft background, no card, clear hierarchy */}
          <section className="pt-12 pb-8 bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-2xl mx-auto text-center">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold mb-2">Module 0</span>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">Prerequisites & Refresher</h1>
              <div className="text-lg text-slate-600 mb-2">Building Your Mathematical Foundation</div>
              <div className="flex justify-center gap-6 text-sm text-slate-500 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 3.5-4 hours</span>
                <span className="flex items-center gap-1"><Play className="w-4 h-4" /> 8 Lessons</span>
              </div>
              <Button size="lg" className="px-8 py-3 text-lg bg-blue-600 hover:bg-blue-700 text-white" onClick={() => navigate("/lesson/0.1")}>Start with Lesson 0.1 <ArrowRight className="ml-2 h-5 w-5" /></Button>
              <div className="text-xs text-gray-400 mt-2">All lessons must be completed in order. Start with Ollie's first lesson to unlock the rest!</div>
            </div>
          </section>

          {/* LEARNING JOURNEY SECTION - Stepper with dots, compact cards, no arrows */}
          <section className="max-w-2xl mx-auto pt-8">
            <h2 className="text-2xl font-bold mb-2">Your Learning <span className="text-blue-600">Journey</span></h2>
            <div className="text-gray-600 mb-6">Complete each lesson in order to unlock the next.</div>
            <div className="relative">
              {/* Vertical line for stepper */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-100" />
              <div>
                {lessons.map((lesson, i) => {
                  // Highlight current/next lesson
                  const isCurrent = lesson.status === 'available';
                  return (
                    <div key={lesson.id} className="relative flex items-center mb-4">
                      {/* Stepper dot */}
                      <div className={`w-3 h-3 rounded-full absolute left-0 top-1/2 -translate-y-1/2 ${isCurrent ? 'bg-blue-500' : 'bg-blue-200'}`} />
                      <div className={`ml-8 flex-1 rounded-lg p-4 border ${isCurrent ? 'border-blue-400 bg-blue-50' : 'border-gray-200 bg-white'} transition-all`}> 
                        {/* lesson content */}
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-blue-700">{lesson.id}</span>
                          <span className="text-xs text-gray-500">with {lesson.character}</span>
                          <span className="text-xs text-gray-400">{lesson.duration}</span>
                        </div>
                        <div className="font-bold text-slate-800 mb-1">{lesson.title}</div>
                        <div className="text-sm text-slate-600 mb-1">{lesson.description}</div>
                        {lesson.status === 'completed' && <span className="text-xs text-green-600 font-semibold">Completed</span>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Module0;
