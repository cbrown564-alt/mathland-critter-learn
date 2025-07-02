import React from 'react';
import VeraVectorPlayground from './vera_vector_playground';
import MaxMatrixTransformer from './max_matrix_transformer';
import BayesMedicalDiagnosis from './bayes_medical_diagnosis';
import { LessonData } from '@/types/lesson';

interface CustomComponentProps {
  lesson: LessonData;
}

// Wrapper for MaxMatrixTransformer to match interface
const MaxMatrixTransformerWrapper: React.ComponentType<CustomComponentProps> = ({ lesson }) => {
  return React.createElement(MaxMatrixTransformer, { isPreview: false });
};

// Wrapper for BayesMedicalDiagnosis to match interface
const BayesMedicalDiagnosisWrapper: React.ComponentType<CustomComponentProps> = ({ lesson }) => {
  return React.createElement(BayesMedicalDiagnosis, { isPreview: false });
};

export const customDoComponents: Record<string, React.ComponentType<CustomComponentProps>> = {
  vera_vector_playground: VeraVectorPlayground,
  max_matrix_transformer: MaxMatrixTransformerWrapper,
  bayes_medical_diagnosis: BayesMedicalDiagnosisWrapper,
}; 