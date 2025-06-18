
import { useState } from "react";
import { Brain, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CharacterAvatar } from "@/components/CharacterAvatar";

interface MemoryAidsProps {
  memoryAids: {
    mantra: string;
    visual: string;
  };
  character: {
    name: string;
    color: string;
    avatar: string;
  };
  onComplete: () => void;
  isCompleted: boolean;
}

export const MemoryAids = ({ memoryAids, character, onComplete, isCompleted }: MemoryAidsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="mb-6 border-l-4 border-l-purple-400 shadow-sm">
      <CardHeader 
        className="cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <CardTitle className="flex items-center justify-between text-lg">
          <span className="flex items-center gap-2">
            🧠 Memory Aids
            {isCompleted && <CheckCircle className="w-5 h-5 text-green-500" />}
          </span>
        </CardTitle>
      </CardHeader>
      
      {isExpanded && (
        <CardContent className="space-y-4">
          <div className={`bg-gradient-to-r ${character.color} bg-opacity-10 rounded-lg p-6`}>
            <div className="flex items-center gap-3 mb-4">
              <CharacterAvatar 
                src={character.avatar} 
                alt={character.name}
                size="md"
              />
              <div>
                <p className="font-semibold text-gray-800">{character.name}'s Memory Helper</p>
                <p className="text-sm text-gray-600">Easy ways to remember this concept</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4">
                <p className="text-gray-700 font-medium italic text-center">"{memoryAids.mantra}"</p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Visual Memory:</p>
                    <p className="text-gray-600">{memoryAids.visual}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Button
            onClick={onComplete}
            className={`${isCompleted ? 'bg-green-500 hover:bg-green-600' : 'bg-purple-500 hover:bg-purple-600'} text-white`}
            size="sm"
          >
            {isCompleted ? 'Memory Aids Reviewed' : 'Got It!'}
          </Button>
        </CardContent>
      )}
    </Card>
  );
};
