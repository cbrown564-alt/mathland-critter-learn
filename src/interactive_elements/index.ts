import VeraVectorPlayground from './vera_vector_playground';
import { LessonData } from '@/types/lesson';

interface CustomComponentProps {
  lesson: LessonData;
}

export const customDoComponents: Record<string, React.ComponentType<CustomComponentProps>> = {
  vera_vector_playground: VeraVectorPlayground,
}; 