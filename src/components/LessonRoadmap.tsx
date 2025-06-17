
import { Lock, CheckCircle, PlayCircle, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Lesson {
  id: string;
  title: string;
  character: string;
  duration: string;
  status: "available" | "locked" | "completed" | "current";
  description: string;
}

interface LessonRoadmapProps {
  lessons: Lesson[];
}

const getCharacterColor = (character: string) => {
  switch (character) {
    case "Ollie":
      return "from-amber-400 to-yellow-500";
    case "Felix":
      return "from-blue-400 to-indigo-500";
    case "Vera":
      return "from-red-400 to-orange-500";
    default:
      return "from-gray-400 to-slate-500";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle className="w-6 h-6 text-green-500" />;
    case "current":
      return <PlayCircle className="w-6 h-6 text-orange-500" />;
    case "available":
      return <PlayCircle className="w-6 h-6 text-blue-500" />;
    default:
      return <Lock className="w-6 h-6 text-gray-400" />;
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case "completed":
      return "Completed";
    case "current":
      return "Continue";
    case "available":
      return "Start Lesson";
    default:
      return "Locked";
  }
};

export const LessonRoadmap = ({ lessons }: LessonRoadmapProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-6">
        {lessons.map((lesson, index) => {
          const isInteractive = lesson.status === "available" || lesson.status === "current";
          const characterColor = getCharacterColor(lesson.character);
          
          return (
            <div key={lesson.id} className="relative">
              {/* Lesson Card */}
              <div className={`relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 ${
                isInteractive ? "hover:shadow-xl hover:-translate-y-1 cursor-pointer" : "opacity-75"
              }`}>
                {/* Lesson Header */}
                <div className={`h-16 bg-gradient-to-r ${characterColor} flex items-center justify-between px-6 text-white`}>
                  <div className="flex items-center gap-4">
                    <div className="text-lg font-bold">{lesson.id}</div>
                    <div>
                      <div className="text-sm opacity-90">with {lesson.character}</div>
                      <div className="text-xs opacity-75">{lesson.duration}</div>
                    </div>
                  </div>
                  {getStatusIcon(lesson.status)}
                </div>

                {/* Lesson Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{lesson.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{lesson.description}</p>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-gray-500">
                      {lesson.character === "Vera" ? "Preview for Module 1" : `Part of algebraic foundations`}
                    </div>
                    <Button
                      size="sm"
                      className={`${
                        isInteractive
                          ? `bg-gradient-to-r ${characterColor} hover:opacity-90`
                          : "bg-gray-300 cursor-not-allowed"
                      } text-white`}
                      disabled={!isInteractive}
                    >
                      {getStatusText(lesson.status)}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Connection Arrow */}
              {index < lessons.length - 1 && (
                <div className="flex justify-center py-4">
                  <ArrowDown className="w-6 h-6 text-gray-300" />
                </div>
              )}

              {/* Character Transition Marker */}
              {index === 3 && (
                <div className="flex justify-center py-6">
                  <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                    🤖 Switching to Felix the Function Machine
                  </div>
                </div>
              )}
              {index === 6 && (
                <div className="flex justify-center py-6">
                  <div className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
                    🐾 Preview with Vera the Vector
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Assessment Section */}
      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Module 0 Assessment</h3>
          <p className="mb-6 opacity-90">
            Complete all lessons to unlock your comprehensive assessment and earn your Module 0 completion badge!
          </p>
          <Button 
            variant="outline" 
            className="bg-white/20 border-white/30 text-white hover:bg-white/30"
            disabled
          >
            Assessment Locked
          </Button>
        </div>
      </div>
    </div>
  );
};
