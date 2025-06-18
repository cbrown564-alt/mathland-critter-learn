
import { useState } from "react";
import { Play, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LessonData } from "@/types/lesson";

interface NarrativeHookProps {
  lesson: LessonData;
  onComplete: () => void;
  isCompleted: boolean;
}

export const NarrativeHook = ({ lesson, onComplete, isCompleted }: NarrativeHookProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <Card className="mb-8 border-l-4 border-l-orange-400">
      <CardHeader 
        className="cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            🎭 Story Introduction
            {isCompleted && <CheckCircle className="w-5 h-5 text-green-500" />}
          </span>
          <span className="text-sm font-normal text-gray-500">
            {isExpanded ? 'Click to collapse' : 'Click to expand'}
          </span>
        </CardTitle>
      </CardHeader>
      
      {isExpanded && (
        <CardContent className="space-y-4">
          <div className="flex items-start gap-4">
            <img 
              src={lesson.character.avatar} 
              alt={lesson.character.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg flex-shrink-0"
            />
            <div className="flex-1">
              <div className="bg-gray-50 rounded-lg p-4 mb-3">
                <p className="text-gray-700 leading-relaxed">{lesson.narrativeHook.story}</p>
              </div>
              <div className={`bg-gradient-to-r ${lesson.character.color} bg-opacity-10 rounded-lg p-4 border-l-4 border-opacity-50`}>
                <div className="flex items-start gap-3">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${lesson.character.color} mt-2 flex-shrink-0`}></div>
                  <div>
                    <p className="font-medium text-gray-800 mb-1">{lesson.character.name} says:</p>
                    <p className="text-gray-700 italic">"{lesson.narrativeHook.characterMessage}"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 pt-2">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <Play className="w-4 h-4" />
              Play Audio (Coming Soon)
            </Button>
            <Button
              onClick={onComplete}
              className={`${isCompleted ? 'bg-green-500' : `bg-gradient-to-r ${lesson.character.color}`}`}
              size="sm"
            >
              {isCompleted ? 'Completed' : 'Mark as Read'}
            </Button>
          </div>
        </CardContent>
      )}
    </Card>
  );
};
