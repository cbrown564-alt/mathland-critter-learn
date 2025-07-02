import { Globe, CheckCircle } from "lucide-react";
import { Button } from "@/core/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/core/components/ui/card";
import { SectionCompletion } from "./SectionCompletion";

interface RealWorldConnectionProps {
  connection: string;
  onComplete: () => void;
  isCompleted: boolean;
}

export const RealWorldConnection = ({ connection, onComplete, isCompleted }: RealWorldConnectionProps) => {
  return (
    <div className="space-y-6">
      {/* Real-world content follows here */}
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
