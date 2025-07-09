import React from 'react';
import VeraVectorPlayground from '../components/vera_vector_playground';
import VeraVectorArithmetic from '../components/vera_vector_arithmetic';
import VeraLinearCombination from '../components/vera_linear_combination';
import MaxMatrixTransformer from '../components/max_matrix_transformer';
import MaxDeterminantExplorer from '../components/max_determinant_explorer';
import BayesMedicalDiagnosis from '../components/bayes_medical_diagnosis';
import EileenEigenvalueDetective from '../components/eileen_eigenvalue_detective';
import EileenDiagonalizationExplorer from '../components/eileen_diagonalization_explorer';
import EileenPCADimensionReducer from '../components/eileen_pca_dimension_reducer';
import DeltaPartialDerivativeExplorer from '../components/delta_partial_derivative_explorer';
import DeltaGradientExplorer from '../components/delta_gradient_explorer';
import DeltaConstrainedOptimization from '../components/delta_constrained_optimization';
import GretaGradientDescentClimber from '../components/greta_gradient_descent_climber';
import PippaProbabilityMagic from '../components/pippa_probability_magic';
import SigmundHypothesisArena from '../components/sigmund_hypothesis_arena';
import OllieFoundationBuilder from '../components/ollie_foundation_builder';
import SageDataSynthesizer from '../components/sage_data_synthesizer';

// Placeholder component for demos in development
const PlaceholderDemo: React.ComponentType<{
  onComplete?: () => void;
  onProgress?: (progress: number) => void;
  isPreview?: boolean;
}> = () => {
  return React.createElement('div', {
    className: 'flex items-center justify-center h-64 bg-slate-100 rounded-lg border-2 border-dashed border-slate-300',
    children: React.createElement('div', {
      className: 'text-center text-slate-500',
      children: [
        React.createElement('div', { key: 'title', className: 'text-lg font-semibold mb-2' }, 'Coming Soon!'),
        React.createElement('div', { key: 'desc', className: 'text-sm' }, 'This interactive demo is currently in development.')
      ]
    })
  });
};

export interface InteractiveDemo {
  id: string;
  characterId: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  learningObjectives: string[];
  component: React.ComponentType<{
    onComplete?: () => void;
    onProgress?: (progress: number) => void;
    isPreview?: boolean;
  }>;
  status: 'ready' | 'in-development' | 'planned';
  tags: string[];
}

export const interactiveDemos: InteractiveDemo[] = [
  {
    id: 'vera-vector-playground',
    characterId: 'vera',
    title: 'Vector Playground',
    description: 'Explore vectors interactively - drag, scale, and discover magnitude and direction!',
    difficulty: 'beginner',
    estimatedTime: '5-10 minutes',
    learningObjectives: [
      'Understand vector magnitude and direction',
      'Visualize vector operations graphically',
      'Explore coordinate system relationships',
      'Practice vector manipulation skills'
    ],
    component: VeraVectorPlayground,
    status: 'ready',
    tags: ['vectors', 'coordinates', 'interactive', 'visualization']
  },
  {
    id: 'vera-vector-arithmetic',
    characterId: 'vera',
    title: 'Vector Arithmetic Adventure',
    description: 'Master vector addition, subtraction, and dot products with interactive exploration!',
    difficulty: 'beginner',
    estimatedTime: '8-12 minutes',
    learningObjectives: [
      'Understand vector addition and subtraction geometrically',
      'Calculate and visualize dot products',
      'Explore scalar multiplication effects',
      'Connect algebraic operations to geometric interpretations'
    ],
    component: VeraVectorArithmetic,
    status: 'ready',
    tags: ['vectors', 'arithmetic', 'dot-product', 'geometric']
  },
  {
    id: 'vera-linear-combination',
    characterId: 'vera',
    title: 'Linear Combination Laboratory',
    description: 'Explore how vectors combine to span spaces and understand linear independence!',
    difficulty: 'intermediate',
    estimatedTime: '10-15 minutes',
    learningObjectives: [
      'Understand linear combinations geometrically',
      'Visualize vector span and linear independence',
      'Explore coefficient effects on vector combinations',
      'Distinguish between dependent and independent vectors'
    ],
    component: VeraLinearCombination,
    status: 'ready',
    tags: ['vectors', 'linear-combination', 'span', 'independence']
  },
  {
    id: 'max-matrix-transformer',
    characterId: 'max',
    title: 'Matrix Transformation Studio',
    description: 'Watch matrices transform geometric shapes in real-time with smooth animations!',
    difficulty: 'intermediate',
    estimatedTime: '8-12 minutes',
    learningObjectives: [
      'Visualize matrix transformations geometrically',
      'Understand determinant effects on area',
      'Explore common transformation types',
      'Connect algebraic operations to visual results'
    ],
    component: MaxMatrixTransformer,
    status: 'ready',
    tags: ['matrices', 'transformations', 'geometry', 'determinant']
  },
  {
    id: 'max-determinant-explorer',
    characterId: 'max',
    title: 'Determinant Detective Agency',
    description: 'Investigate how matrices transform shapes and discover the geometric meaning of determinants!',
    difficulty: 'intermediate',
    estimatedTime: '12-18 minutes',
    learningObjectives: [
      'Understand determinants as area scaling factors',
      'Visualize matrix transformations geometrically',
      'Recognize singular vs invertible matrices',
      'Explore orientation preservation and reversal'
    ],
    component: MaxDeterminantExplorer,
    status: 'ready',
    tags: ['determinant', 'geometry', 'transformations', 'area']
  },
  {
    id: 'bayes-medical-diagnosis',
    characterId: 'bayes',
    title: 'Medical Mystery Solver',
    description: 'Solve medical mysteries using Bayes\' theorem and understand why base rates matter!',
    difficulty: 'intermediate',
    estimatedTime: '10-15 minutes',
    learningObjectives: [
      'Apply Bayes\' theorem to real scenarios',
      'Understand the impact of base rates',
      'Interpret medical test results correctly',
      'Recognize common probability misconceptions'
    ],
    component: BayesMedicalDiagnosis,
    status: 'ready',
    tags: ['probability', 'bayes', 'medical', 'real-world']
  },
  {
    id: 'eileen-eigenvalue-explorer',
    characterId: 'eileen',
    title: 'Eigenvalue Detective',
    description: 'Uncover hidden directions in matrices and discover the secrets of eigenvalues!',
    difficulty: 'advanced',
    estimatedTime: '12-18 minutes',
    learningObjectives: [
      'Visualize eigenvalue and eigenvector concepts',
      'Understand characteristic equations',
      'Explore principal component analysis basics',
      'Connect linear algebra to data science'
    ],
    component: EileenEigenvalueDetective,
    status: 'ready',
    tags: ['eigenvalues', 'eigenvectors', 'linear-algebra', 'pca']
  },
  {
    id: 'eileen-diagonalization-explorer',
    characterId: 'eileen',
    title: 'Diagonalization Detective Lab',
    description: 'Investigate how matrices can be diagonalized and discover the power of eigenvalue decomposition!',
    difficulty: 'advanced',
    estimatedTime: '18-25 minutes',
    learningObjectives: [
      'Understand matrix diagonalization A = PDP⁻¹',
      'Visualize eigenspaces and eigenvector relationships',
      'Explore the process of constructing P and D matrices',
      'Connect diagonalization to matrix powers and applications'
    ],
    component: EileenDiagonalizationExplorer,
    status: 'ready',
    tags: ['diagonalization', 'eigenvalues', 'matrix-decomposition', 'linear-algebra']
  },
  {
    id: 'eileen-pca-dimension-reducer',
    characterId: 'eileen',
    title: 'PCA Dimension Reducer',
    description: 'Discover hidden patterns in data and reduce dimensions while preserving variance!',
    difficulty: 'advanced',
    estimatedTime: '20-30 minutes',
    learningObjectives: [
      'Understand PCA as eigenvalue decomposition of covariance matrices',
      'Compute principal components from real data',
      'Visualize dimensionality reduction and variance preservation',
      'Apply PCA to different types of datasets'
    ],
    component: EileenPCADimensionReducer,
    status: 'ready',
    tags: ['pca', 'eigenvalues', 'data-analysis', 'dimensionality-reduction']
  },
  {
    id: 'delta-derivative-explorer',
    characterId: 'delta',
    title: 'Calculus Change Tracker',
    description: 'Visualize how functions change with interactive partial derivative exploration!',
    difficulty: 'advanced',
    estimatedTime: '15-20 minutes',
    learningObjectives: [
      'Understand partial derivatives visually',
      'Explore multivariable function behavior',
      'Connect calculus to optimization',
      'Practice gradient interpretation'
    ],
    component: DeltaPartialDerivativeExplorer,
    status: 'ready',
    tags: ['calculus', 'derivatives', 'gradients', 'optimization']
  },
  {
    id: 'delta-gradient-explorer',
    characterId: 'delta',
    title: 'Gradient Direction Laboratory',
    description: 'Explore directional derivatives and discover how gradients point in the direction of steepest ascent!',
    difficulty: 'advanced',
    estimatedTime: '15-20 minutes',
    learningObjectives: [
      'Understand gradients as direction of steepest ascent',
      'Explore directional derivatives in different directions',
      'Visualize contour lines and gradient fields',
      'Connect partial derivatives to directional derivatives'
    ],
    component: DeltaGradientExplorer,
    status: 'ready',
    tags: ['gradients', 'directional-derivatives', 'contours', 'optimization']
  },
  {
    id: 'delta-constrained-optimization',
    characterId: 'delta',
    title: 'Constrained Optimization Lab',
    description: 'Master Lagrange multipliers and solve optimization problems with real-world constraints!',
    difficulty: 'advanced',
    estimatedTime: '25-35 minutes',
    learningObjectives: [
      'Understand Lagrange multipliers for constrained optimization',
      'Solve optimization problems with equality constraints',
      'Visualize constraint curves and objective contours',
      'Apply optimization to real-world problems'
    ],
    component: DeltaConstrainedOptimization,
    status: 'ready',
    tags: ['optimization', 'lagrange-multipliers', 'constraints', 'real-world']
  },
  {
    id: 'greta-gradient-climber',
    characterId: 'greta',
    title: 'Mountain Peak Optimizer',
    description: 'Climb mathematical mountains using gradient descent to find optimal solutions!',
    difficulty: 'advanced',
    estimatedTime: '12-16 minutes',
    learningObjectives: [
      'Understand gradient descent visually',
      'Explore learning rate effects',
      'Identify local vs global optima',
      'Connect optimization to machine learning'
    ],
    component: GretaGradientDescentClimber,
    status: 'ready',
    tags: ['optimization', 'gradient-descent', 'machine-learning', 'algorithms']
  },
  {
    id: 'pippa-probability-magic',
    characterId: 'pippa',
    title: 'Probability Magic Show',
    description: 'Discover the magic of probability distributions with interactive tricks and games!',
    difficulty: 'intermediate',
    estimatedTime: '10-14 minutes',
    learningObjectives: [
      'Understand common discrete probability distributions',
      'Explore Bernoulli, Binomial, and Poisson distributions',
      'Visualize expected value and variance',
      'Connect theory to simulation results'
    ],
    component: PippaProbabilityMagic,
    status: 'ready',
    tags: ['probability', 'distributions', 'discrete', 'simulation']
  },
  {
    id: 'sigmund-hypothesis-tester',
    characterId: 'sigmund',
    title: 'Black Swan Investigator',
    description: 'Test hypotheses elegantly and discover the power of statistical inference!',
    difficulty: 'advanced',
    estimatedTime: '15-20 minutes',
    learningObjectives: [
      'Understand hypothesis testing framework and logic',
      'Explore null vs alternative hypotheses',
      'Visualize Type I and Type II errors in context',
      'Apply statistical testing to real scenarios'
    ],
    component: SigmundHypothesisArena,
    status: 'ready',
    tags: ['statistics', 'hypothesis-testing', 'inference', 'black-swan']
  },
  {
    id: 'ollie-foundation-builder',
    characterId: 'ollie',
    title: 'Mathematical Foundation Builder',
    description: 'Build strong mathematical foundations step by step with interactive exercises!',
    difficulty: 'beginner',
    estimatedTime: '8-12 minutes',
    learningObjectives: [
      'Master expanding and factoring algebraic expressions',
      'Apply distributive property and FOIL method',
      'Recognize common algebraic patterns',
      'Build mathematical confidence step by step'
    ],
    component: OllieFoundationBuilder,
    status: 'ready',
    tags: ['algebra', 'foundations', 'factoring', 'expanding']
  },
  {
    id: 'sage-data-integrator',
    characterId: 'sage',
    title: 'Data Science Synthesizer',
    description: 'Bring together all mathematical concepts in a real data science project!',
    difficulty: 'advanced',
    estimatedTime: '20-30 minutes',
    learningObjectives: [
      'Synthesize all mathematical concepts into integrated workflows',
      'Apply complete data science pipeline from preprocessing to validation',
      'Experience character collaboration across mathematical domains',
      'Achieve master-level mathematical integration and real-world impact'
    ],
    component: SageDataSynthesizer,
    status: 'ready',
    tags: ['data-science', 'synthesis', 'capstone', 'integration']
  }
];

export const getDemosByCharacter = (characterId: string): InteractiveDemo[] => {
  return interactiveDemos.filter(demo => demo.characterId === characterId);
};

export const getDemoById = (id: string): InteractiveDemo | undefined => {
  return interactiveDemos.find(demo => demo.id === id);
};

export const getReadyDemos = (): InteractiveDemo[] => {
  return interactiveDemos.filter(demo => demo.status === 'ready');
};

export const getDemosByDifficulty = (difficulty: InteractiveDemo['difficulty']): InteractiveDemo[] => {
  return interactiveDemos.filter(demo => demo.difficulty === difficulty);
};

export const getDemosByTag = (tag: string): InteractiveDemo[] => {
  return interactiveDemos.filter(demo => demo.tags.includes(tag));
}; 