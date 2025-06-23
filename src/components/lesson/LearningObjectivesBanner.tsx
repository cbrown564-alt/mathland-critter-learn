
import { Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface LearningObjectivesBannerProps {
  objectives: string[];
}

export const LearningObjectivesBanner = ({ objectives }: LearningObjectivesBannerProps) => {
  return (
    <Card className="mb-6 border-l-4 border-l-blue-400 bg-blue-50/50">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <Target className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-blue-900 mb-2">Learning Objectives</h3>
            <ul className="space-y-1 text-sm text-blue-800">
              {objectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
