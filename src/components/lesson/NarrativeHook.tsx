import { Play, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CharacterAvatar } from "@/components/CharacterAvatar";
import { LessonData } from "@/types/lesson";
import { SectionCompletion } from "./SectionCompletion";

interface NarrativeHookProps {
  lesson: LessonData;
  character: {
    name: string;
    fullName: string;
    personality: string;
    avatar: string;
  };
  onComplete: () => void;
  isCompleted: boolean;
}

export const NarrativeHook = ({ lesson, character, onComplete, isCompleted }: NarrativeHookProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-xl font-semibold text-slate-800">
        <Play className="w-6 h-6 text-orange-500" />
        <h3>Story Introduction</h3>
      </div>

      <div className="flex items-start gap-4">
        <CharacterAvatar 
          src={character.avatar} 
          alt={character.fullName}
          size="xl"
          className="mt-1"
        />
        <div className="flex-1 space-y-3">
          <div className="bg-slate-50 rounded-lg p-4">
            <p className="text-slate-700 leading-relaxed">{lesson.narrativeHook.story}</p>
          </div>
          <div className="rounded-lg p-4 border-l-4 border-orange-200 bg-orange-50/50">
            <p className="font-medium text-slate-800 mb-2">{character.name} says:</p>
            <p className="text-slate-700 italic">"{lesson.narrativeHook.characterMessage}"</p>
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
