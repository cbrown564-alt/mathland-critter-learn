import { CheckCircle, ArrowRight, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SectionCompletionProps {
  onComplete: () => void;
  onNext: () => void;
  isCompleted: boolean;
  isLastSection: boolean;
}

export const SectionCompletion = ({ onComplete, onNext, isCompleted, isLastSection }: SectionCompletionProps) => {
  const handleContinue = () => {
    if (!isCompleted) {
      onComplete();
    }
    if (!isLastSection) {
      onNext();
    }
  };

  return (
    <div className="flex items-center justify-between pt-6 border-t border-slate-200 mt-6">
      <div className="flex items-center gap-2 text-sm text-slate-600">
        <button
          onClick={handleContinue}
          className="focus:outline-none flex items-center gap-2 group"
          aria-label={isCompleted ? 'Section completed' : 'Mark section as complete'}
        >
          {isCompleted ? (
            <CheckCircle className="w-6 h-6 text-green-500 transition-transform group-active:scale-90" />
          ) : (
            <Circle className="w-6 h-6 text-slate-400 transition-transform group-active:scale-90" />
          )}
          <span className={isCompleted ? 'text-green-600 font-semibold' : ''}>
            {isCompleted ? 'Completed' : 'Mark as completed'}
          </span>
        </button>
      </div>
    </div>
  );
};
