import { useParams } from "react-router-dom";
import { LessonTemplate } from "@/components/LessonTemplate";
import { LessonData } from "@/types/lesson";

const getLessonData = (lessonId: string): LessonData => {
  const characterImages = {
    "Ollie the Otter": "/lovable-uploads/2371fa94-e340-47aa-b1ed-5670d33066a8.png",
    "Felix the Function Machine": "/lovable-uploads/3972307e-38ad-4120-a059-7785ae6a8516.png",
    "Vera the Vector": "/lovable-uploads/228d1d3a-e74e-4db9-b5ff-632d454e4bb6.png"
  };

  const lessons: { [key: string]: LessonData } = {
    "0.1": {
      id: "0.1",
      title: "Order of Operations & Algebraic Basics",
      duration: "25 min",
      character: {
        name: "Ollie",
        fullName: "Ollie the Otter",
        color: "from-amber-500 to-orange-500",
        avatar: characterImages["Ollie the Otter"]
      },
      narrativeHook: {
        story: "Ollie is building a dam and needs to calculate materials precisely. Each measurement must follow the correct order, just like mathematical operations!",
        characterMessage: "Hey there! I'm Ollie, and I love building things step by step. Math is just like construction - you need to follow the right order, or everything falls apart! Let's learn how to tackle any mathematical expression with confidence."
      },
      learningObjectives: [
        "Apply the order of operations (PEMDAS/BODMAS) correctly",
        "Simplify complex algebraic expressions",
        "Identify and work with like terms",
        "Understand the distributive property"
      ],
      readContent: "The order of operations is fundamental to all mathematics. Think of it as the grammar of math - without it, expressions become ambiguous. PEMDAS (Parentheses, Exponents, Multiplication/Division, Addition/Subtraction) gives us a universal language for solving expressions consistently.",
      seeContent: "Watch as we break down complex expressions step by step, highlighting each operation as we apply PEMDAS rules.",
      hearContent: "Listen as I walk you through each step, explaining why we choose each operation and how it builds toward our final answer.",
      doContent: "Practice with interactive problems that let you drag and drop operations in the correct order, with immediate feedback on your choices.",
      memoryAids: {
        mantra: "Please Excuse My Dear Aunt Sally - she always follows the rules!",
        visual: "Picture a construction site where Ollie builds from the foundation up: first the frame (parentheses), then the roof (exponents), then the walls (multiplication/division), and finally the finishing touches (addition/subtraction)."
      },
      conceptCheck: {
        question: "What is the result of: 3 + 4 × 2²?",
        options: ["28", "19", "196", "49"],
        correctAnswer: 1,
        explanation: "Following PEMDAS: First 2² = 4, then 4 × 4 = 16, finally 3 + 16 = 19."
      },
      realWorldConnection: "Order of operations appears everywhere in data science: from calculating statistical measures to programming algorithms. Machine learning models rely on precise mathematical calculations where order matters - a misplaced operation can completely change your model's predictions!"
    },
    "0.2": {
      id: "0.2",
      title: "Factoring & Expanding Expressions",
      duration: "30-35 minutes",
      character: {
        name: "Ollie",
        fullName: "Ollie the Otter",
        personality: "Methodical, Step-by-step",
        catchphrase: "Let's take this step by step!",
        color: "from-amber-600 to-yellow-600",
        avatar: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop&crop=face"
      },
      narrativeHook: {
        story: "Ollie's dam can be built in sections, then combined - or taken apart and rebuilt. Algebraic expressions work the same way: we can expand them into parts or factor them back together.",
        characterMessage: "Every dam can be taken apart and rebuilt! Just like how I can break down my dam into individual sticks or combine sticks into larger sections, we can factor and expand algebraic expressions."
      },
      learningObjectives: [
        "Apply the distributive property to expand expressions",
        "Factor out common terms from algebraic expressions",
        "Recognize and factor difference of squares patterns",
        "Use the FOIL method for multiplying binomials"
      ],
      coreConcepts: [
        "Distributive property",
        "Factoring common terms",
        "Difference of squares",
        "Perfect square trinomials",
        "FOIL method"
      ],
      memoryAids: {
        mantra: "Every dam can be taken apart and rebuilt - just like algebraic expressions!",
        visual: "Ollie's building blocks showing how expressions can be broken down into factors or combined into expanded forms"
      },
      realWorldConnection: "In data science, factoring helps simplify complex formulas and reveal hidden patterns in data relationships. It's like finding the common factors that influence multiple variables in your dataset.",
      conceptCheck: {
        question: "Factor the expression: x² - 9. What pattern does this represent?",
        options: [
          "(x - 3)(x + 3), a difference of squares",
          "(x - 9)(x + 1), a linear factorization",
          "x(x - 9), factoring out x",
          "Cannot be factored further"
        ],
        correctAnswer: 0,
        explanation: "x² - 9 is a difference of squares pattern (a² - b²) where a = x and b = 3. It factors as (x - 3)(x + 3). This pattern appears frequently in data science optimization problems."
      },
      readContent: "Factoring and expanding are inverse operations that help us work with algebraic expressions in different forms. The distributive property a(b + c) = ab + ac allows us to expand expressions, while factoring reverses this process. Key patterns include difference of squares (a² - b² = (a-b)(a+b)), perfect square trinomials, and factoring out common terms. The FOIL method (First, Outer, Inner, Last) helps multiply binomials systematically.",
      seeContent: "Watch Ollie demonstrate factoring using physical building blocks, showing how expressions can be rearranged and regrouped just like dam construction materials.",
      hearContent: "Listen as I explain how breaking down and building up expressions is just like how I organize my dam materials - sometimes it's easier to work with pieces, sometimes with the whole structure!",
      doContent: "Practice with drag-and-drop factoring exercises where you'll match expressions with their factored forms and use area models to visualize expansion."
    },
    "0.3": {
      id: "0.3",
      title: "Linear & Quadratic Equations",
      duration: "35-40 minutes",
      character: {
        name: "Ollie",
        fullName: "Ollie the Otter",
        personality: "Methodical, Step-by-step",
        catchphrase: "Let's take this step by step!",
        color: "from-amber-600 to-yellow-600",
        avatar: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop&crop=face"
      },
      narrativeHook: {
        story: "Sometimes Ollie needs to find the perfect spot where the water level meets his dam height. This is like solving equations - finding where two things are equal.",
        characterMessage: "Finding the balance point is like solving equations! Just like I need to find where my dam height meets the water level perfectly, we solve equations to find where expressions are equal."
      },
      learningObjectives: [
        "Solve linear equations with one variable systematically",
        "Apply the quadratic formula and factoring to solve quadratic equations",
        "Solve simple systems of linear equations",
        "Check solutions and identify extraneous solutions"
      ],
      coreConcepts: [
        "Solving linear equations",
        "Quadratic formula",
        "Factoring quadratic equations",
        "Systems of linear equations",
        "Checking solutions"
      ],
      memoryAids: {
        mantra: "What you do to one side, do to the other - just like keeping my dam balanced!",
        visual: "Balance beam showing how equations stay equal when the same operations are applied to both sides"
      },
      realWorldConnection: "Linear equations help us understand trends in data, while quadratic equations model curved relationships like population growth, profit optimization, or the trajectory of projectiles in physics simulations.",
      conceptCheck: {
        question: "Solve for x: 2x + 5 = 13. What principle keeps the equation balanced?",
        options: [
          "x = 4, using the balance principle",
          "x = 9, by adding 5 to both sides",
          "x = 6.5, by dividing everything by 2",
          "x = 8, by subtracting 5 from the left side only"
        ],
        correctAnswer: 0,
        explanation: "Subtract 5 from both sides: 2x = 8, then divide by 2: x = 4. The balance principle means whatever we do to one side, we must do to the other to maintain equality."
      },
      readContent: "Solving equations means finding the value that makes both sides equal. For linear equations, we isolate the variable using inverse operations while maintaining balance. Quadratic equations (ax² + bx + c = 0) can be solved by factoring, completing the square, or using the quadratic formula. Systems of equations find values that satisfy multiple equations simultaneously. Always check your solutions by substituting back into the original equation.",
      seeContent: "Watch balance beam visualizations showing how equation solving maintains equality, and see how quadratic equations create parabolic curves when graphed.",
      hearContent: "Listen as I explain how finding the balance point in equations is just like finding the perfect water level for my dam - everything has to be in perfect equilibrium!",
      doContent: "Use an interactive equation solver with visual feedback, practice with the quadratic formula calculator, and solve real-world word problems step by step."
    },
    "0.4": {
      id: "0.4",
      title: "Inequalities & Absolute Values",
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
        story: "Ollie's dam needs to be at least 3 feet high to work properly, but no more than 6 feet to avoid flooding. This is like mathematical inequalities - values within a range.",
        characterMessage: "The water level must be between these marks! Just like my dam has safe operating ranges, inequalities help us define acceptable ranges of values in mathematics and data science."
      },
      learningObjectives: [
        "Solve linear inequalities and represent solutions on number lines",
        "Work with compound inequalities and intersection/union concepts",
        "Solve absolute value equations and inequalities",
        "Use interval notation to express solution sets"
      ],
      coreConcepts: [
        "Linear inequalities",
        "Compound inequalities",
        "Absolute value equations",
        "Absolute value inequalities",
        "Interval notation"
      ],
      memoryAids: {
        mantra: "The water level must be between these marks - just like inequality ranges!",
        visual: "Number line with highlighted ranges showing safe operating zones for Ollie's dam"
      },
      realWorldConnection: "Inequalities are everywhere in data science: confidence intervals, acceptable error ranges, constraint optimization, and defining thresholds for classification algorithms. They help us understand when data values are within acceptable limits.",
      conceptCheck: {
        question: "Solve the inequality: |x - 3| < 5. What does this represent?",
        options: [
          "-2 < x < 8, values within 5 units of 3",
          "x < -2 or x > 8, values outside the range",
          "x = 3 ± 5, two specific solutions",
          "-5 < x < 5, symmetric around zero"
        ],
        correctAnswer: 0,
        explanation: "The absolute value inequality |x - 3| < 5 means the distance from x to 3 is less than 5, giving us -5 < x - 3 < 5, which simplifies to -2 < x < 8."
      },
      readContent: "Inequalities express relationships where values are greater than, less than, or within ranges rather than exactly equal. Linear inequalities follow similar solving rules as equations, except multiplying or dividing by negative numbers flips the inequality sign. Absolute value represents distance from zero, so |x| = 5 means x = ±5. Compound inequalities combine multiple conditions using 'and' (intersection) or 'or' (union). Interval notation provides a concise way to express solution sets.",
      seeContent: "Visualize inequality solutions on interactive number lines, and see how absolute value creates distance relationships on the coordinate plane.",
      hearContent: "Listen as I explain how setting boundaries and ranges for my dam is just like defining inequality constraints - we need safe operating zones for everything to work properly!",
      doContent: "Build number line representations, solve inequality problems with immediate visual feedback, and practice the range finder game to master interval concepts."
    },
    "0.5": {
      id: "0.5",
      title: "Function Notation & Concepts",
      duration: "30-35 minutes",
      character: {
        name: "Felix",
        fullName: "Felix the Function Machine",
        personality: "Logical, Systematic",
        catchphrase: "Input processed successfully!",
        color: "from-blue-600 to-indigo-600",
        avatar: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=400&fit=crop&crop=face"
      },
      narrativeHook: {
        story: "Meet Felix, a helpful robot who takes inputs and produces outputs following specific rules. Felix represents what we call 'functions' - mathematical machines that transform numbers.",
        characterMessage: "Input processed successfully! I follow rules to transform inputs into outputs. Every input gets exactly one output - that's what makes me a function!"
      },
      learningObjectives: [
        "Understand function notation f(x) and its meaning",
        "Identify domain and range of functions",
        "Evaluate functions at specific values",
        "Understand function composition basics",
        "Distinguish between one-to-one and many-to-one functions"
      ],
      coreConcepts: [
        "Function notation f(x)",
        "Domain and range",
        "Evaluating functions",
        "Function composition",
        "One-to-one vs many-to-one"
      ],
      memoryAids: {
        mantra: "Input → Rule → Output - that's how I process everything!",
        visual: "Felix as a machine with input slot, processing unit, and output slot, showing the function transformation process"
      },
      realWorldConnection: "In data science, functions help us model relationships: how advertising spend affects sales, how temperature affects energy consumption, or how user behavior predicts preferences. Functions are the foundation of machine learning algorithms.",
      conceptCheck: {
        question: "If f(x) = 2x + 3, what is f(4) and what does this notation mean?",
        options: [
          "f(4) = 11, meaning input 4 gives output 11",
          "f(4) = 7, meaning multiply 4 by 2 then subtract 3",
          "f(4) = 2x + 7, meaning add 4 to the function",
          "f(4) = 8, meaning only multiply by 2"
        ],
        correctAnswer: 0,
        explanation: "f(4) means substitute 4 for x in the function: f(4) = 2(4) + 3 = 8 + 3 = 11. Function notation tells us what output we get when we input a specific value."
      },
      readContent: "Functions are mathematical relationships where each input has exactly one output. Function notation f(x) reads as 'f of x' and represents the output when x is the input. The domain is all possible input values, while the range is all possible output values. Function composition f(g(x)) means applying g first, then f to that result. Understanding functions is crucial for modeling real-world relationships in data science.",
      seeContent: "Watch Felix demonstrate function machines with animated inputs and outputs, showing how different function types transform numbers in predictable ways.",
      hearContent: "Listen as I explain how I follow rules to transform inputs - just like how data transformation pipelines work in real data science projects!",
      doContent: "Use the function machine simulator to see how inputs become outputs, practice function evaluation exercises, and build your own function composition chains."
    },
    "0.6": {
      id: "0.6",
      title: "Graphing Functions",
      duration: "40-45 minutes",
      character: {
        name: "Felix",
        fullName: "Felix the Function Machine",
        personality: "Logical, Systematic",
        catchphrase: "Input processed successfully!",
        color: "from-blue-600 to-indigo-600",
        avatar: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=400&fit=crop&crop=face"
      },
      narrativeHook: {
        story: "Felix's outputs can be visualized as a path on a graph. Different function types create different shapes - lines, curves, and more complex patterns that tell stories about data relationships.",
        characterMessage: "Input processed successfully! When I plot my outputs on a graph, they create beautiful patterns. Each function type has its own signature shape - let me show you!"
      },
      learningObjectives: [
        "Graph linear functions and identify slope and y-intercept",
        "Graph quadratic functions and identify vertex and axis of symmetry",
        "Graph exponential functions and understand growth patterns",
        "Interpret graphs to understand function behavior",
        "Connect algebraic and graphical representations"
      ],
      coreConcepts: [
        "Coordinate plane basics",
        "Linear functions (y = mx + b)",
        "Quadratic functions (parabolas)",
        "Exponential functions",
        "Graph interpretation"
      ],
      memoryAids: {
        mantra: "Each function type has its own shape signature - I can recognize them all!",
        visual: "Felix's graph gallery showing the characteristic shapes of different function families"
      },
      realWorldConnection: "Graphs help data scientists visualize trends, identify patterns, and communicate insights. Linear graphs show constant rates of change, quadratic graphs model optimization problems, and exponential graphs represent growth or decay in populations, investments, or viral spread.",
      conceptCheck: {
        question: "What does the graph of y = x² look like, and what does the vertex represent?",
        options: [
          "A U-shaped parabola with vertex at (0,0), the minimum point",
          "A straight line through the origin with slope 2",
          "An exponential curve growing rapidly",
          "A horizontal line at y = 0"
        ],
        correctAnswer: 0,
        explanation: "y = x² creates a U-shaped parabola opening upward. The vertex at (0,0) represents the minimum point where the function reaches its lowest value. This shape is fundamental in optimization problems."
      },
      readContent: "Graphing functions reveals their behavior visually. Linear functions y = mx + b create straight lines where m is the slope and b is the y-intercept. Quadratic functions create parabolas that open up or down depending on the coefficient of x². Exponential functions show rapid growth or decay. The coordinate plane allows us to see domain restrictions, range limitations, and important features like intercepts, vertices, and asymptotes.",
      seeContent: "Use an interactive graphing tool to plot different function types, observe how changing parameters affects the graph shape, and explore real-world data visualizations.",
      hearContent: "Listen as I explain how reading the story that graphs tell is like understanding the data patterns that drive business decisions and scientific discoveries!",
      doContent: "Practice with the function graphing tool, play the graph matching game where you connect equations to their visual representations, and plot real-world data to see function patterns."
    },
    "0.7": {
      id: "0.7",
      title: "Coordinate Geometry Essentials",
      duration: "25-30 minutes",
      character: {
        name: "Felix",
        fullName: "Felix the Function Machine",
        personality: "Logical, Systematic",
        catchphrase: "Input processed successfully!",
        color: "from-blue-600 to-indigo-600",
        avatar: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=400&fit=crop&crop=face"
      },
      narrativeHook: {
        story: "Felix needs to calculate distances and find midpoints between his processing stations. These geometric calculations are fundamental to understanding spatial relationships in data.",
        characterMessage: "Distance calculations processed successfully! Just like I need to measure connections between my processing stations, coordinate geometry helps us quantify spatial relationships in data science."
      },
      learningObjectives: [
        "Apply the distance formula to find distances between points",
        "Use the midpoint formula to find centers of line segments",
        "Calculate slope to measure steepness and direction",
        "Identify parallel and perpendicular line relationships"
      ],
      coreConcepts: [
        "Distance formula",
        "Midpoint formula",
        "Slope calculation",
        "Parallel and perpendicular lines"
      ],
      memoryAids: {
        mantra: "Distance is like measuring cable length between my processing stations!",
        visual: "Felix's coordinate system showing processing stations connected by measured distances and calculated midpoints"
      },
      realWorldConnection: "Coordinate geometry is essential in data science for clustering algorithms, measuring similarity between data points, finding centroids, and understanding geometric relationships in machine learning feature spaces.",
      conceptCheck: {
        question: "Find the distance between points (3, 4) and (6, 8). What formula do we use?",
        options: [
          "5 units, using the distance formula √[(x₂-x₁)² + (y₂-y₁)²]",
          "7 units, by adding the coordinate differences",
          "3 units, using only the x-coordinate difference",
          "12 units, by multiplying the coordinates"
        ],
        correctAnswer: 0,
        explanation: "Using the distance formula: √[(6-3)² + (8-4)²] = √[3² + 4²] = √[9 + 16] = √25 = 5 units. This formula comes from the Pythagorean theorem applied to coordinate geometry."
      },
      readContent: "Coordinate geometry combines algebra and geometry to analyze spatial relationships. The distance formula √[(x₂-x₁)² + (y₂-y₁)²] finds the straight-line distance between any two points. The midpoint formula ((x₁+x₂)/2, (y₁+y₂)/2) finds the center point of a line segment. Slope (rise over run) measures steepness and direction. Parallel lines have equal slopes, while perpendicular lines have slopes that are negative reciprocals.",
      seeContent: "Explore an interactive coordinate plane where you can plot points, measure distances, find midpoints, and visualize slope relationships between lines.",
      hearContent: "Listen as I explain how measuring relationships in coordinate space is like calculating the efficiency of connections in my processing network!",
      doContent: "Use the coordinate plane explorer to practice distance and midpoint calculations, experiment with the slope visualization tool, and solve real-world geometry problems."
    },
    "0.8": {
      id: "0.8",
      title: "Vectors & Greek Symbols Preview",
      duration: "20-25 minutes",
      character: {
        name: "Vera",
        fullName: "Vera the Vector",
        personality: "Adventurous, Forward-thinking",
        catchphrase: "Direction and magnitude matter!",
        color: "from-red-600 to-orange-600",
        avatar: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=400&h=400&fit=crop&crop=face"
      },
      narrativeHook: {
        story: "Before we dive deeper with Vera in Module 1, let's meet her briefly and learn the language of mathematics - Greek symbols and basic vector notation that will be essential for advanced data science.",
        characterMessage: "Direction and magnitude matter! I'm excited to work with you in Module 1, but first, let's learn the mathematical language we'll need - Greek symbols are like the vocabulary of advanced mathematics!"
      },
      learningObjectives: [
        "Recognize and pronounce common Greek symbols used in mathematics",
        "Understand basic vector notation and representation",
        "Use sigma (Σ) notation for sums",
        "Understand pi (Π) notation for products",
        "Familiarize with mathematical conventions and notation"
      ],
      coreConcepts: [
        "Greek alphabet in mathematics",
        "Basic vector notation",
        "Sigma (Σ) notation",
        "Pi (Π) notation",
        "Mathematical conventions"
      ],
      memoryAids: {
        mantra: "Each Greek letter has a special mathematical meaning - I'll teach you more about vectors soon!",
        visual: "Greek symbol reference chart showing common uses: α (alpha) for angles, β (beta) for parameters, σ (sigma) for standard deviation"
      },
      realWorldConnection: "Greek symbols are the universal language of mathematics and science. In data science, you'll see σ for standard deviation, μ for mean, θ for parameters in machine learning, λ for regularization, and vectors for representing data points in multi-dimensional space.",
      conceptCheck: {
        question: "What does the notation Σ(xi) from i=1 to n represent?",
        options: [
          "The sum of all x values from x₁ to xₙ",
          "The product of all x values",
          "The average of x values",
          "The Greek letter sigma only"
        ],
        correctAnswer: 0,
        explanation: "Σ(xi) from i=1 to n means sum all x values starting from x₁ up to xₙ. This notation is fundamental in statistics and data science for expressing sums concisely."
      },
      readContent: "Greek symbols provide a concise way to express mathematical concepts. Common symbols include α (alpha) for angles or significance levels, β (beta) for coefficients, θ (theta) for parameters, λ (lambda) for eigenvalues, μ (mu) for means, and σ (sigma) for standard deviation. Vectors represent quantities with both magnitude and direction, written as bold letters or with arrows. Sigma notation Σ expresses sums efficiently, while pi notation Π represents products.",
      seeContent: "Explore the Greek alphabet chart with mathematical applications, see vector representations with arrows showing direction and magnitude, and practice with notation builders.",
      hearContent: "Listen to proper pronunciation of Greek letters and understand why mathematicians chose these symbols for specific concepts - each has a story and purpose!",
      doContent: "Practice with Greek symbol matching games, build sigma notation expressions, and explore interactive vector representations to prepare for Module 1."
    }
  };

  return lessons[lessonId] || lessons["0.1"];
};

const LessonPage = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const lesson = getLessonData(lessonId || "0.1");

  const getPreviousLessonId = (currentId: string): string | undefined => {
    const lessonOrder = ["0.1", "0.2", "0.3", "0.4", "0.5", "0.6", "0.7", "0.8"];
    const currentIndex = lessonOrder.indexOf(currentId);
    return currentIndex > 0 ? lessonOrder[currentIndex - 1] : undefined;
  };

  const getNextLessonId = (currentId: string): string | undefined => {
    const lessonOrder = ["0.1", "0.2", "0.3", "0.4", "0.5", "0.6", "0.7", "0.8"];
    const currentIndex = lessonOrder.indexOf(currentId);
    return currentIndex < lessonOrder.length - 1 ? lessonOrder[currentIndex + 1] : undefined;
  };

  return (
    <LessonTemplate
      lesson={lesson}
      previousLessonId={getPreviousLessonId(lesson.id)}
      nextLessonId={getNextLessonId(lesson.id)}
    />
  );
};

export default LessonPage;
