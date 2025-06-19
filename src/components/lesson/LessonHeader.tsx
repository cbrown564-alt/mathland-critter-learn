
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Home, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface LessonHeaderProps {
  lessonId: string;
  lessonTitle: string;
  duration: string;
  progressPercentage: number;
}

export const LessonHeader = ({ lessonId, lessonTitle, duration, progressPercentage }: LessonHeaderProps) => {
  const navigate = useNavigate();

  return (
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
              <span className="text-sm">{duration}</span>
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
  );
};
