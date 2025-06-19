
import { useParams } from "react-router-dom";
import { LessonTemplate } from "@/components/LessonTemplate";
import { getLessonData, getPreviousLessonId, getNextLessonId } from "@/utils/lessonData";

const LessonPage = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const lesson = getLessonData(lessonId || "0.1");

  return (
    <LessonTemplate
      lesson={lesson}
      previousLessonId={getPreviousLessonId(lesson.id)}
      nextLessonId={getNextLessonId(lesson.id)}
    />
  );
};

export default LessonPage;
