import React from 'react';
import VeraVectorPlayground from './components/vera_vector_playground';
import MaxMatrixTransformer from './components/max_matrix_transformer';
import BayesMedicalDiagnosis from './components/bayes_medical_diagnosis';
import EileenEigenvalueDetective from './components/eileen_eigenvalue_detective';
import DeltaPartialDerivativeExplorer from './components/delta_partial_derivative_explorer';
import GretaGradientDescentClimber from './components/greta_gradient_descent_climber';
import PippaProbabilityMagic from './components/pippa_probability_magic';
import SigmundHypothesisArena from './components/sigmund_hypothesis_arena';
import OllieFoundationBuilder from './components/ollie_foundation_builder';
import SageDataSynthesizer from './components/sage_data_synthesizer';
import { LessonData } from '@/core/types/lesson';

interface CustomComponentProps {
  lesson: LessonData;
}

// Wrapper for MaxMatrixTransformer to match interface
const MaxMatrixTransformerWrapper: React.ComponentType<CustomComponentProps> = () => {
  return React.createElement(MaxMatrixTransformer, { isPreview: false });
};

// Wrapper for BayesMedicalDiagnosis to match interface
const BayesMedicalDiagnosisWrapper: React.ComponentType<CustomComponentProps> = () => {
  return React.createElement(BayesMedicalDiagnosis, { isPreview: false });
};

// Wrapper for EileenEigenvalueDetective to match interface
const EileenEigenvalueDetectiveWrapper: React.ComponentType<CustomComponentProps> = () => {
  return React.createElement(EileenEigenvalueDetective, { isPreview: false });
};

// Wrapper for DeltaPartialDerivativeExplorer to match interface
const DeltaPartialDerivativeExplorerWrapper: React.ComponentType<CustomComponentProps> = () => {
  return React.createElement(DeltaPartialDerivativeExplorer, { isPreview: false });
};

// Wrapper for GretaGradientDescentClimber to match interface
const GretaGradientDescentClimberWrapper: React.ComponentType<CustomComponentProps> = () => {
  return React.createElement(GretaGradientDescentClimber, { isPreview: false });
};

// Wrapper for PippaProbabilityMagic to match interface
const PippaProbabilityMagicWrapper: React.ComponentType<CustomComponentProps> = () => {
  return React.createElement(PippaProbabilityMagic, { isPreview: false });
};

// Wrapper for SigmundHypothesisArena to match interface
const SigmundHypothesisArenaWrapper: React.ComponentType<CustomComponentProps> = () => {
  return React.createElement(SigmundHypothesisArena, { isPreview: false });
};

// Wrapper for OllieFoundationBuilder to match interface
const OllieFoundationBuilderWrapper: React.ComponentType<CustomComponentProps> = () => {
  return React.createElement(OllieFoundationBuilder, { isPreview: false });
};

// Wrapper for SageDataSynthesizer to match interface
const SageDataSynthesizerWrapper: React.ComponentType<CustomComponentProps> = () => {
  return React.createElement(SageDataSynthesizer, { isPreview: false });
};

export const customDoComponents: Record<string, React.ComponentType<CustomComponentProps>> = {
  vera_vector_playground: VeraVectorPlayground,
  max_matrix_transformer: MaxMatrixTransformerWrapper,
  bayes_medical_diagnosis: BayesMedicalDiagnosisWrapper,
  eileen_eigenvalue_detective: EileenEigenvalueDetectiveWrapper,
  delta_partial_derivative_explorer: DeltaPartialDerivativeExplorerWrapper,
  greta_gradient_descent_climber: GretaGradientDescentClimberWrapper,
  pippa_probability_magic: PippaProbabilityMagicWrapper,
  sigmund_hypothesis_arena: SigmundHypothesisArenaWrapper,
  ollie_foundation_builder: OllieFoundationBuilderWrapper,
  sage_data_synthesizer: SageDataSynthesizerWrapper,
}; 