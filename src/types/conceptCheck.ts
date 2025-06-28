export interface CharacterConfig {
  id: string;
  name: string;
  color: string; // Tailwind color name like 'orange', 'purple'
  icon: any; // LucideIcon or similar
  reactionVerb: string; // "celebrates", "deduces", "calculates"
  explainVerb: string; // "explains", "investigates", "analyzes"
  avatar: string; // path to character image
}

export interface ScenarioConfig {
  description: string;
  successMessage: string;
}

export interface StepConfig {
  question: string;
  placeholder: string;
  inputType: 'number' | 'text' | 'select';
  correctAnswer: string;
  feedback: string;
  hint?: string;
  validation?: (value: string) => boolean;
}

export interface VisualConfig {
  title: string;
  component: React.ReactNode | ((progress: Record<string, string>) => React.ReactNode);
}

export interface ChallengeConfig {
  title: string;
  type: string; // "Navigation Challenge", "Detective Investigation", etc.
  description: string;
}

export interface ApproachConfig {
  id: string;
  title: string;
  description: string;
  correct: boolean;
  explanation: string;
} 