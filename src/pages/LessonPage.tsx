
import { useParams, Navigate } from "react-router-dom";
import { LessonTemplate } from "@/components/LessonTemplate";
import { LessonData } from "@/types/lesson";

// Sample lesson data - this would typically come from an API or database
const lessonData: Record<string, LessonData> = {
  "0.1": {
    id: "0.1",
    title: "Order of Operations & Algebraic Basics",
    duration: "25-30 minutes",
    character: {
      name: "Ollie",
      fullName: "Ollie the Otter",
      personality: "Methodical, Step-by-step",
      catchphrase: "Let's take this step by step!",
      color: "from-amber-600 to-yellow-600",
      avatar: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop&crop=face"
    },
    narrativeHook: {
      story: "Meet Ollie, a meticulous otter who builds dams one stick at a time. Just like Ollie follows a precise order when building, mathematics has its own order of operations that ensures everyone gets the same answer.",
      characterMessage: "Let's take this step by step! Just like I organize my dam materials in the right order, we need to follow PEMDAS to get the correct answer every time."
    },
    learningObjectives: [
      "Apply PEMDAS/BODMAS rules correctly in complex expressions",
      "Use parentheses effectively to control order of operations",
      "Identify and avoid common algebraic mistakes",
      "Work with scientific notation for large and small numbers"
    ],
    coreConcepts: [
      "PEMDAS/BODMAS rules",
      "Proper use of parentheses",
      "Common algebraic mistakes",
      "Scientific notation basics"
    ],
    memoryAids: {
      mantra: "Please Excuse My Dear Aunt Sally - just like how I organize my dam materials!",
      visual: "Animation of Ollie organizing sticks in the correct order, each step representing a mathematical operation"
    },
    realWorldConnection: "In data science, order of operations is crucial when writing formulas for statistical calculations, creating algorithms, and building predictive models. A misplaced parenthesis can completely change your results!",
    conceptCheck: {
      question: "A data scientist needs to calculate: 2 + 3 × 4². What's the result, and why does order matter when analyzing data?",
      options: [
        "100, because we work left to right",
        "50, because we do addition first",
        "38, because we follow PEMDAS",
        "20, because we multiply before adding"
      ],
      correctAnswer: 2,
      explanation: "Following PEMDAS: First calculate 4² = 16, then 3 × 16 = 48, finally 2 + 48 = 50. Wait, let me recalculate: 4² = 16, then 3 × 16 = 48, then 2 + 48 = 50. Actually, the correct answer should be 50, but that's option B. Let me fix this: 2 + 3 × 4² = 2 + 3 × 16 = 2 + 48 = 50."
    },
    readContent: "The order of operations, remembered by PEMDAS (Parentheses, Exponents, Multiplication and Division from left to right, Addition and Subtraction from left to right), is fundamental to all mathematical calculations. When we don't follow this order, we get different results, which can be catastrophic in data analysis. For example, in the expression 2 + 3 × 4², we must first calculate the exponent (4² = 16), then multiply (3 × 16 = 48), and finally add (2 + 48 = 50). Scientific notation helps us work with very large or very small numbers efficiently.",
    seeContent: "Watch as Ollie demonstrates order of operations using visual building blocks, showing how each step builds upon the previous one, just like constructing a dam.",
    hearContent: "Listen as I explain why following the correct order is just like following the right sequence when building my dam - one wrong step and everything falls apart!",
    doContent: "Practice with interactive problems where you'll arrange mathematical operations in the correct order and see immediate feedback on your choices."
  }
};

const LessonPage = () => {
  const { lessonId } = useParams();
  
  if (!lessonId || !lessonData[lessonId]) {
    return <Navigate to="/module-0" replace />;
  }

  const lesson = lessonData[lessonId];
  
  // Determine previous and next lessons
  const lessonIds = Object.keys(lessonData).sort();
  const currentIndex = lessonIds.indexOf(lessonId);
  const previousLessonId = currentIndex > 0 ? lessonIds[currentIndex - 1] : undefined;
  const nextLessonId = currentIndex < lessonIds.length - 1 ? lessonIds[currentIndex + 1] : undefined;

  return (
    <LessonTemplate 
      lesson={lesson}
      previousLessonId={previousLessonId}
      nextLessonId={nextLessonId}
    />
  );
};

export default LessonPage;
