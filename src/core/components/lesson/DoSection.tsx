import { LessonData } from "@/core/types/lesson";
import { customDoComponents } from "@/interactive";

interface DoSectionProps {
  lesson: LessonData;
}

export const DoSection = ({ lesson }: DoSectionProps) => {
  const { doType, doEmbedUrl, doComponent, doInstructions } = lesson;

  let content = null;

  if (doType === "desmos" || doType === "geogebra") {
    content = (
      <div className="w-full flex justify-center my-6">
        <iframe
          src={doEmbedUrl}
          title="Interactive Math Tool"
          className="w-full max-w-2xl aspect-video rounded-lg border"
          allowFullScreen
        />
      </div>
    );
  } else if (doType === "custom" && doComponent && customDoComponents[doComponent]) {
    const CustomComponent = customDoComponents[doComponent];
    content = (
      <div className="my-6">
        <CustomComponent lesson={lesson} />
      </div>
    );
  } else {
    content = <div className="text-slate-500 italic">No interactive activity available for this lesson.</div>;
  }

  return (
    <div>
      {doInstructions && (
        <div className="mb-4 text-slate-700">{doInstructions}</div>
      )}
      {content}
    </div>
  );
}; 