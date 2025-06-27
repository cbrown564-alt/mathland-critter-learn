import { useParams } from "react-router-dom";
import { LessonTemplate } from "@/components/LessonTemplate";
import { getLessonDataForModule, getLessonOrderForModule } from "@/utils/lessonData";

const LessonPage = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const id = lessonId || "0.1";
  const moduleId = id.split(".")[0];
  const lesson = getLessonDataForModule(moduleId, id);
  const lessonOrder = getLessonOrderForModule(moduleId);
  const currentIndex = lessonOrder.indexOf(id);
  const previousLessonId = currentIndex > 0 ? lessonOrder[currentIndex - 1] : undefined;
  const nextLessonId = currentIndex < lessonOrder.length - 1 ? lessonOrder[currentIndex + 1] : undefined;

  if (!lesson) return <div className="p-8 text-center">Lesson not found.</div>;

  return (
    <LessonTemplate
      lesson={lesson}
      previousLessonId={previousLessonId}
      nextLessonId={nextLessonId}
    />
  );
};

export default LessonPage;
