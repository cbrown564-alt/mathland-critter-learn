import { Clock, Play, ArrowRight, Home, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModuleCharacterCard } from "@/components/ModuleCharacterCard";
import { LessonRoadmap } from "@/components/LessonRoadmap";
import { useNavigate } from "react-router-dom";
import { getLessonOrder, getLessonData } from "../utils/lessonData";
import { useEffect, useState } from "react";

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
  {
    id: "ollie",
    name: "Ollie the Otter",
    animal: "Otter",
    concept: "Algebraic Foundations",
    tagline: "Let's build this step by step!",
    description: "Patient and methodical, Ollie guides you through algebraic basics with clear explanations and encouraging support.",
    gradientClass: "bg-gradient-ollie",
    image: "/lovable-uploads/2371fa94-e340-47aa-b1ed-5670d33066a8.png",
    lessons: ["0.1", "0.2", "0.3", "0.4"]
  },
  {
    id: "felix",
    name: "Felix the Function Machine",
    animal: "Robot",
    concept: "Functions & Graphing",
    tagline: "Input processed successfully!",
    description: "Logical and systematic, Felix helps you understand functions and graphing with tech-savvy precision and analytical thinking.",
    gradientClass: "bg-gradient-felix",
    image: "/lovable-uploads/3972307e-38ad-4120-a059-7785ae6a8516.png",
    lessons: ["0.5", "0.6", "0.7"]
  }
];

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
    return {
      id: data.id,
      title: data.title,
      character: typeof data.character === "string" ? data.character : data.character?.name || "",
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header Section */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <Button
              variant="outline"
              onClick={() => navigate("/")}
              className="border-slate-300 text-slate-700 hover:bg-slate-50"
            >
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Module 0
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Prerequisites & Refresher
            </h1>
            <p className="text-xl text-slate-600 mb-6 max-w-3xl mx-auto">
              Building Your Mathematical Foundation
            </p>
            <div className="flex items-center justify-center gap-6 text-slate-500 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>3.5-4 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                <span>8 Interactive Lessons</span>
              </div>
            </div>
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
                onClick={() => navigate("/lesson/0.1")}
              >
                Start with Lesson 0.1
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-slate-500">
                All lessons must be completed in order. Start with Ollie's first lesson to unlock the rest!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Character Introductions */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Meet Your Learning{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Guides
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Two dedicated characters will guide you through foundational concepts. 
              You'll start with Ollie for algebra basics, then progress to Felix for functions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {module0Characters.map((character) => (
              <div key={character.id} className="relative">
                <ModuleCharacterCard character={character} />
                {character.id === "felix" && !allOllieCompleted && (
                  <div className="absolute inset-0 bg-slate-200/50 rounded-2xl flex items-center justify-center">
                    <div className="bg-white rounded-lg p-4 shadow-lg flex items-center gap-2">
                      <Lock className="w-5 h-5 text-slate-500" />
                      <span className="text-slate-700 font-medium">Unlocks after Ollie's lessons</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Learning Pathway */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Your Learning{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Journey
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Follow our carefully crafted sequential path. Each lesson unlocks the next one.
            </p>
          </div>

          <LessonRoadmap lessons={lessons} />
        </section>

        {/* Module Overview */}
        <section>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
              What You'll Master
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold">±</span>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Algebra Basics</h4>
                <p className="text-sm text-slate-600">Operations, expressions, and equations</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold">f(x)</span>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Functions</h4>
                <p className="text-sm text-slate-600">Notation, concepts, and applications</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold">📈</span>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Graphing</h4>
                <p className="text-sm text-slate-600">Coordinate systems and visualization</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold">→</span>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Vector Preview</h4>
                <p className="text-sm text-slate-600">Introduction for Module 1</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Module0;
