
import { Clock, Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModuleCharacterCard } from "@/components/ModuleCharacterCard";
import { LessonRoadmap } from "@/components/LessonRoadmap";

const module0Characters = [
  {
    id: "ollie",
    name: "Ollie the Otter",
    animal: "Otter",
    concept: "Algebraic Foundations",
    tagline: "Let's take this step by step!",
    description: "Methodical and encouraging, Ollie guides you through algebraic basics with patience and clear explanations.",
    color: "from-amber-600 to-yellow-600",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop&crop=face",
    lessons: ["0.1", "0.2", "0.3", "0.4"]
  },
  {
    id: "felix",
    name: "Felix the Function Machine",
    animal: "Robot",
    concept: "Functions & Graphing",
    tagline: "Input processed successfully!",
    description: "Logical and systematic, Felix helps you understand functions and graphing with tech-savvy precision.",
    color: "from-blue-600 to-indigo-600",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=400&fit=crop&crop=face",
    lessons: ["0.5", "0.6", "0.7"]
  }
];

const lessons = [
  {
    id: "0.1",
    title: "Order of Operations & Algebraic Basics",
    character: "Ollie",
    duration: "25 min",
    status: "available" as const,
    description: "Master PEMDAS and fundamental algebraic operations"
  },
  {
    id: "0.2",
    title: "Factoring & Expanding Expressions",
    character: "Ollie",
    duration: "30 min",
    status: "locked" as const,
    description: "Learn to factor and expand algebraic expressions"
  },
  {
    id: "0.3",
    title: "Linear & Quadratic Equations",
    character: "Ollie",
    duration: "35 min",
    status: "locked" as const,
    description: "Solve linear and quadratic equations systematically"
  },
  {
    id: "0.4",
    title: "Inequalities & Absolute Values",
    character: "Ollie",
    duration: "25 min",
    status: "locked" as const,
    description: "Work with inequalities and absolute value expressions"
  },
  {
    id: "0.5",
    title: "Function Notation & Concepts",
    character: "Felix",
    duration: "30 min",
    status: "locked" as const,
    description: "Understand function notation and basic concepts"
  },
  {
    id: "0.6",
    title: "Graphing Functions",
    character: "Felix",
    duration: "35 min",
    status: "locked" as const,
    description: "Learn to graph and interpret various functions"
  },
  {
    id: "0.7",
    title: "Coordinate Geometry Essentials",
    character: "Felix",
    duration: "30 min",
    status: "locked" as const,
    description: "Master coordinate plane and geometric relationships"
  },
  {
    id: "0.8",
    title: "Vectors & Greek Symbols Preview",
    character: "Vera",
    duration: "20 min",
    status: "locked" as const,
    description: "Preview of vectors and mathematical notation for Module 1"
  }
];

const Module0 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header Section */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-amber-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
              Module 0
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Prerequisites & Refresher
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              Building Your Mathematical Foundation
            </p>
            <div className="flex items-center justify-center gap-6 text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>3.5-4 hours of engaging learning</span>
              </div>
              <div className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                <span>8 Interactive Lessons</span>
              </div>
            </div>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 text-lg"
            >
              Start Module 0
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Character Introductions */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet Your Learning{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                Guides
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Two dedicated characters will guide you through the foundational concepts, 
              making math approachable and engaging for your data science journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {module0Characters.map((character) => (
              <ModuleCharacterCard key={character.id} character={character} />
            ))}
          </div>
        </section>

        {/* Learning Pathway */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Your Learning{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">
                Journey
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow our carefully crafted path from basic algebra to function concepts, 
              building the foundation you need for advanced data science mathematics.
            </p>
          </div>

          <LessonRoadmap lessons={lessons} />
        </section>

        {/* Module Overview */}
        <section>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              What You'll Master in Module 0
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold">±</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Algebra Basics</h4>
                <p className="text-sm text-gray-600">Operations, expressions, and equation solving</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold">f(x)</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Functions</h4>
                <p className="text-sm text-gray-600">Notation, concepts, and applications</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold">📈</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Graphing</h4>
                <p className="text-sm text-gray-600">Coordinate systems and function visualization</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold">→</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Vector Preview</h4>
                <p className="text-sm text-gray-600">Introduction to vectors for Module 1</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Module0;
