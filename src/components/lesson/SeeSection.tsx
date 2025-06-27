import { CharacterAvatar } from "@/components/CharacterAvatar";
import { LessonData } from "@/types/lesson";

interface SeeSectionProps {
  lesson: LessonData;
  character: {
    name: string;
    fullName: string;
    personality: string;
    avatar: string;
  };
}

export const SeeSection = ({ lesson, character }: SeeSectionProps) => {
  return (
    <>
      <div className="flex items-center gap-2 text-xl font-semibold text-slate-800 mb-4">
        <span role="img" aria-label="See">👁️</span>
        <h3>See</h3>
      </div>
      {lesson.seePreQuote && (
        <div className="flex items-start gap-4 mb-4">
          <CharacterAvatar src={character.avatar} alt={character.fullName} size="lg" />
          <div className="flex-1">
            <div className="rounded-lg p-4 border-l-4 border-orange-200 bg-orange-50/50">
              <p className="text-slate-700 italic text-sm">{lesson.seePreQuote}</p>
            </div>
          </div>
        </div>
      )}
      <div className="w-full">
        <div className="flex justify-center w-full mb-4">
          <div className="aspect-video max-w-2xl w-full rounded-lg overflow-hidden mx-auto">
            <iframe
              className="w-full h-full"
              src={lesson.seeVideoUrl?.includes('youtube.com/watch?v=')
                ? lesson.seeVideoUrl.replace('watch?v=', 'embed/')
                : lesson.seeVideoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}; 