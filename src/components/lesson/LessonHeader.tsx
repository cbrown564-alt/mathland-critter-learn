import { Progress } from "@/components/ui/progress";

interface LessonHeaderProps {
  progressPercentage: number;
}

export const LessonHeader = ({ progressPercentage }: LessonHeaderProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50">
      <Progress value={progressPercentage} className="h-full rounded-none" />
    </div>
  );
};
