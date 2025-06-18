
import { useState } from "react";
import { Play, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CharacterAvatar } from "@/components/CharacterAvatar";
import { LessonData } from "@/types/lesson";

interface NarrativeHookProps {
  lesson: LessonData;
  onComplete: () => void;
  isCompleted: boolean;
}

export const NarrativeHook = ({ lesson, onComplete, isCompleted }: NarrativeHookProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <Card className="mb-6 border-l-4 border-l-orange-400 shadow-sm">
      <CardHeader 
        className="cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <CardTitle className="flex items-center justify-between text-lg">
          <span className="flex items-center gap-2">
            🎭 Story Introduction
            {isCompleted && <CheckCircle className="w-5 h-5 text-green-500" />}
          </span>
        </CardTitle>
      </CardHeader>
      
      {isExpanded && (
        <CardContent className="space-y-4">
          <div className="flex items-start gap-4">
            <CharacterAvatar 
              src={lesson.character.avatar} 
              alt={lesson.character.name}
              size="xl"
            />
            <div className="flex-1 space-y-3">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 leading-relaxed">{lesson.narrativeHook.story}</p>
              </div>
              <div className={`bg-gradient-to-r ${lesson.character.color} bg-opacity-10 rounded-lg p-4 border-l-4 border-orange-300`}>
                <p className="font-medium text-gray-800 mb-2">{lesson.character.name} says:</p>
                <p className="text-gray-700 italic">"{lesson.narrativeHook.characterMessage}"</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 pt-2">
            <Button
              onClick={onComplete}
              className={`${isCompleted ? 'bg-green-500 hover:bg-green-600' : `bg-gradient-to-r ${lesson.character.color} hover:opacity-90`} text-white`}
              size="sm"
            >
              {isCompleted ? 'Completed' : 'Continue'}
            </Button>
          </div>
        </CardContent>
      )}
    </Card>
  );
};
