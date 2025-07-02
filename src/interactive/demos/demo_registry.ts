import React from 'react';
import { Character } from '@/core/types/character';
import VeraVectorPlayground from '../components/vera_vector_playground';
import MaxMatrixTransformer from '../components/max_matrix_transformer';
import BayesMedicalDiagnosis from '../components/bayes_medical_diagnosis';

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
    component: PlaceholderDemo,
    status: 'in-development',
    tags: ['eigenvalues', 'eigenvectors', 'linear-algebra', 'pca']
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
    component: PlaceholderDemo,
    status: 'in-development',
    tags: ['calculus', 'derivatives', 'gradients', 'optimization']
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
    component: PlaceholderDemo,
    status: 'planned',
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
      'Understand common probability distributions',
      'Visualize expected value and variance',
      'Practice probability calculations',
      'Connect probability to real-world scenarios'
    ],
    component: PlaceholderDemo,
    status: 'planned',
    tags: ['probability', 'distributions', 'statistics', 'games']
  },
  {
    id: 'sigmund-hypothesis-tester',
    characterId: 'sigmund',
    title: 'Black Swan Investigator',
    description: 'Test hypotheses elegantly and discover the power of statistical inference!',
    difficulty: 'advanced',
    estimatedTime: '15-20 minutes',
    learningObjectives: [
      'Understand hypothesis testing concepts',
      'Visualize p-values and confidence intervals',
      'Explore Type I and Type II errors',
      'Apply statistical thinking to real problems'
    ],
    component: PlaceholderDemo,
    status: 'planned',
    tags: ['statistics', 'hypothesis-testing', 'inference', 'p-values']
  },
  {
    id: 'ollie-foundation-builder',
    characterId: 'ollie',
    title: 'Mathematical Foundation Builder',
    description: 'Build strong mathematical foundations step by step with interactive exercises!',
    difficulty: 'beginner',
    estimatedTime: '8-12 minutes',
    learningObjectives: [
      'Strengthen algebraic manipulation skills',
      'Practice equation solving systematically',
      'Build mathematical confidence',
      'Develop step-by-step problem solving'
    ],
    component: PlaceholderDemo,
    status: 'planned',
    tags: ['algebra', 'foundations', 'equations', 'problem-solving']
  },
  {
    id: 'sage-data-integrator',
    characterId: 'sage',
    title: 'Data Science Synthesizer',
    description: 'Bring together all mathematical concepts in a real data science project!',
    difficulty: 'advanced',
    estimatedTime: '20-30 minutes',
    learningObjectives: [
      'Apply multiple mathematical concepts together',
      'Understand data science workflow',
      'Practice real-world problem solving',
      'Synthesize learning across domains'
    ],
    component: PlaceholderDemo,
    status: 'planned',
    tags: ['data-science', 'integration', 'real-world', 'synthesis']
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