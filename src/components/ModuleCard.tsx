
import { Lock, CheckCircle, PlayCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Module {
  id: number;
  title: string;
  subtitle: string;
  character: string | null;
  topics: string[];
  status: "available" | "locked" | "completed" | "current";
  description: string;
  color: string;
  prerequisites: number[];
}

interface ModuleCardProps {
  module: Module;
  index: number;
}

export const ModuleCard = ({ module, index }: ModuleCardProps) => {
  const getStatusIcon = () => {
    switch (module.status) {
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

  const getStatusText = () => {
    switch (module.status) {
      case "completed":
        return "Completed";
      case "current":
        return "Continue";
      case "available":
        return "Start Module";
      default:
        return "Locked";
    }
  };

  const isInteractive = module.status === "available" || module.status === "current";

  return (
    <div className={`relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 ${
      isInteractive ? "hover:shadow-xl hover:-translate-y-1 cursor-pointer" : "opacity-75"
    }`}>
      {/* Module Header */}
      <div className={`h-20 bg-gradient-to-r ${module.color} flex items-center justify-between px-6 text-white`}>
        <div>
          <h3 className="text-lg font-bold">Module {module.id}</h3>
          <p className="text-sm opacity-90">{module.subtitle}</p>
        </div>
        {getStatusIcon()}
      </div>

      {/* Module Content */}
      <div className="p-6">
        <div className="mb-4">
          <h4 className="text-xl font-bold text-gray-800 mb-2">{module.title}</h4>
          {module.character && (
            <p className="text-sm text-gray-500 font-medium">
              Guided by {module.character}
            </p>
          )}
        </div>

        <p className="text-gray-600 mb-4 leading-relaxed">{module.description}</p>

        {/* Topics */}
        <div className="mb-6">
          <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Topics:</h5>
          <div className="flex flex-wrap gap-2">
            {module.topics.map((topic, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Prerequisites */}
        {module.prerequisites.length > 0 && (
          <div className="mb-6">
            <h5 className="text-sm font-semibold text-gray-700 mb-2">Prerequisites:</h5>
            <div className="flex flex-wrap gap-2">
              {module.prerequisites.map((prereq) => (
                <span
                  key={prereq}
                  className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded"
                >
                  Module {prereq}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Action Button */}
        <Button
          className={`w-full ${
            isInteractive
              ? `bg-gradient-to-r ${module.color} hover:opacity-90`
              : "bg-gray-300 cursor-not-allowed"
          } text-white`}
          disabled={!isInteractive}
        >
          {getStatusText()}
          {isInteractive && <ArrowRight className="ml-2 h-4 w-4" />}
        </Button>
      </div>

      {/* Connection Line for Flow */}
      {index < 9 && (
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-gray-300 to-transparent"></div>
      )}
    </div>
  );
};
