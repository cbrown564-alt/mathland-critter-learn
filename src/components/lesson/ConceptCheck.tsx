
import { useState } from "react";
import { CheckCircle, X, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CharacterAvatar } from "@/components/CharacterAvatar";
import { SectionCompletion } from "./SectionCompletion";

interface ConceptCheckProps {
  conceptCheck: {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  };
  character: {
    name: string;
    color: string;
    avatar: string;
  };
  onComplete: () => void;
  isCompleted: boolean;
}

export const ConceptCheck = ({ conceptCheck, character, onComplete, isCompleted }: ConceptCheckProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
    setShowResult(true);
    if (index === conceptCheck.correctAnswer) {
      setTimeout(() => {
        onComplete();
      }, 1000);
    }
  };

  const resetQuiz = () => {
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const isCorrect = selectedAnswer === conceptCheck.correctAnswer;

  return (
    <div className="space-y-6">
      <Card className="border-l-4 border-l-green-400 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            ✅ Concept Check
            {isCompleted && <CheckCircle className="w-5 h-5 text-green-500" />}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-gray-800 font-medium mb-4">{conceptCheck.question}</p>
            
            <div className="space-y-2">
              {conceptCheck.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !showResult && handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    showResult
                      ? index === conceptCheck.correctAnswer
                        ? 'bg-green-100 border-green-400 text-green-800'
                        : selectedAnswer === index
                        ? 'bg-red-100 border-red-400 text-red-800'
                        : 'bg-gray-100 border-gray-300 text-gray-600'
                      : selectedAnswer === index
                      ? 'bg-blue-100 border-blue-400 text-blue-800'
                      : 'bg-white border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-sm">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    <span>{option}</span>
                    {showResult && index === conceptCheck.correctAnswer && (
                      <CheckCircle className="w-5 h-5 text-green-600 ml-auto" />
                    )}
                    {showResult && selectedAnswer === index && index !== conceptCheck.correctAnswer && (
                      <X className="w-5 h-5 text-red-600 ml-auto" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {showResult && (
            <>
              <div className={`rounded-lg p-4 ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                <div className="flex items-start gap-3">
                  {isCorrect ? (
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p className={`font-medium mb-2 ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                      {isCorrect ? 'Correct!' : 'Not quite right.'}
                    </p>
                    <p className={`text-sm ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                      {conceptCheck.explanation}
                    </p>
                  </div>
                </div>
                
                {!isCorrect && (
                  <Button
                    onClick={resetQuiz}
                    variant="outline"
                    size="sm"
                    className="mt-3"
                  >
                    Try Again
                  </Button>
                )}
              </div>

              {isCorrect && (
                <div className={`bg-gradient-to-r ${character.color} bg-opacity-10 rounded-lg p-4`}>
                  <div className="flex items-center gap-3">
                    <CharacterAvatar 
                      src={character.avatar} 
                      alt={character.name}
                      size="md"
                    />
                    <div>
                      <p className="font-medium text-gray-800">{character.name} says:</p>
                      <p className="text-gray-700">"Excellent work! You've got this concept down."</p>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </CardContent>
      </Card>

      {/* Only show completion button if quiz is completed successfully */}
      {!showResult || isCorrect ? (
        <SectionCompletion
          onComplete={onComplete}
          onNext={() => {}} // Navigation is handled by LessonTemplate
          isCompleted={isCompleted}
          isLastSection={false}
        />
      ) : null}
    </div>
  );
};
