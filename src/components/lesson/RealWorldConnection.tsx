import { Globe, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionCompletion } from "./SectionCompletion";

interface RealWorldConnectionProps {
  connection: string;
  onComplete: () => void;
  isCompleted: boolean;
}

export const RealWorldConnection = ({ connection, onComplete, isCompleted }: RealWorldConnectionProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-xl font-semibold text-slate-800">
        <Globe className="w-6 h-6 text-orange-500" />
        <h3>Real-World Connection</h3>
      </div>
      
      <div className="pl-8 border-l-4 border-orange-200">
        <h4 className="font-semibold text-slate-700 mb-2">Why This Matters in Data Science</h4>
        <p className="text-slate-600 leading-relaxed">{connection}</p>
      </div>

      <SectionCompletion
        onComplete={onComplete}
        onNext={() => {}} // Navigation is handled by LessonTemplate
        isCompleted={isCompleted}
        isLastSection={false}
      />
    </div>
  );
};
