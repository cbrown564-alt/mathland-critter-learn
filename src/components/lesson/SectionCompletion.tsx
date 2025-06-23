
import { CheckCircle, ArrowRight } from "lucide-react";
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
        {isCompleted && (
          <>
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Section completed</span>
          </>
        )}
      </div>
      
      <Button 
        onClick={handleContinue}
        className={`${isCompleted ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
      >
        {isCompleted ? (
          isLastSection ? (
            "Lesson Complete"
          ) : (
            <>
              Next Section
              <ArrowRight className="w-4 h-4 ml-2" />
            </>
          )
        ) : (
          <>
            Complete & Continue
            <ArrowRight className="w-4 h-4 ml-2" />
          </>
        )}
      </Button>
    </div>
  );
};
