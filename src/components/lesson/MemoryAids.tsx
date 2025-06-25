import { Brain, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CharacterAvatar } from "@/components/CharacterAvatar";
import { SectionCompletion } from "./SectionCompletion";

interface MemoryAidsProps {
  memoryAids: {
    mantra: string;
    visual: string;
  };
  character: {
    name: string;
    personality: string;
    color: string;
    avatar: string;
  };
  onComplete: () => void;
  isCompleted: boolean;
}

export const MemoryAids = ({ memoryAids, character, onComplete, isCompleted }: MemoryAidsProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-xl font-semibold text-slate-800">
        <Brain className="w-6 h-6 text-purple-500" />
        <h3>Memory Aids</h3>
      </div>

      <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-slate-200">
        <div className="flex items-center gap-3 mb-4">
          <CharacterAvatar 
            src={character.avatar} 
            alt={character.name}
            size="md"
          />
          <div>
            <p className="font-semibold text-slate-800">{character.name}'s Memory Helper</p>
            <p className="text-sm text-slate-600">Easy ways to remember this concept</p>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="bg-white rounded-lg p-4">
            <p className="text-slate-700 font-medium italic text-center">"{memoryAids.mantra}"</p>
          </div>
          
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Brain className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-slate-700 mb-1">Visual Memory:</p>
                <p className="text-slate-600">{memoryAids.visual}</p>
              </div>
            </div>
          </div>
        </div>
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
