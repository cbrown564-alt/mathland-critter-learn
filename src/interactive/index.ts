import React from 'react';
import VeraVectorPlayground from './components/vera_vector_playground';
import MaxMatrixTransformer from './components/max_matrix_transformer';
import BayesMedicalDiagnosis from './components/bayes_medical_diagnosis';
import { LessonData } from '@/core/types/lesson';

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