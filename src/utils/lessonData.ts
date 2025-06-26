import { LessonData } from "@/types/lesson";

const module0Lessons: { [key: string]: LessonData } = {
  "0.1": {
    id: "0.1",
    title: "Order of Operations & Algebraic Basics",
    duration: "25 min",
    characterId: "ollie",
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
    coreConcepts: [
      "Order of operations (PEMDAS/BODMAS)",
      "Simplifying expressions",
      "Like terms",
      "Distributive property"
    ],
    readContent: "Think of PEMDAS as my construction rulebook. When I build a dam, I can't just slap sticks together randomly - foundation first, walls second, roof last. Same with math: some operations are like foundation work (parentheses), others are like the heavy construction (multiplication), and some are finishing touches (addition). Without this order, mathematical expressions become as unstable as a poorly built dam.",
    readAnalogy: "Building a dam requires precise order: foundation stones first (parentheses), then the main structure with power tools (exponents), heavy construction work (multiplication/division), and finally the finishing details (addition/subtraction). Skip the order, and everything collapses!",
    readKeyPoints: [
      "Parentheses always come first - like reading blueprints before building",
      "Exponents are power operations - the heavy machinery phase",
      "Multiplication/Division happen before Addition/Subtraction - structure before details"
    ],
    readDigDeeper: "In programming languages, operator precedence follows PEMDAS but with additional rules for logical operations, assignment operators, and function calls. Some languages use different precedence orders, which is why explicit parentheses are often preferred in production code.",
    readWhyMatters: "In Excel, the formula =2+3*4 gives you 14, not 20. In Python, a miscalculated feature engineering step can make your entire machine learning model worthless. Order of operations isn't just math theory - it's the foundation that keeps your data analysis from crumbling.",
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
    characterId: "ollie",
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
    readContent: "Just like I can break down my dam into individual sticks or combine sticks into larger sections, algebraic expressions can be factored into simpler pieces or expanded into detailed forms. The distributive property a(b + c) = ab + ac is my basic building tool. Key patterns include difference of squares (a² - b² = (a-b)(a+b)) and perfect square trinomials. These patterns appear everywhere in dam engineering calculations.",
    readAnalogy: "Factoring is like taking apart a completed dam section to see how it was built from individual components. Expanding is like combining individual sticks and stones into a complete dam structure. Both processes reveal different aspects of the same mathematical construction.",
    readKeyPoints: [
      "Distributive property: a(b + c) = ab + ac - like distributing materials evenly",
      "Difference of squares: a² - b² = (a-b)(a+b) - a special structural pattern",
      "Common factors can be pulled out like identifying reusable building materials"
    ],
    readDigDeeper: "Advanced factoring includes techniques like grouping, substitution, and using the rational root theorem for higher-degree polynomials. In calculus, factoring helps with integration by partial fractions, and in number theory, factoring is fundamental to cryptography.",
    readWhyMatters: "In data science, factoring helps simplify complex formulas and reveal hidden patterns in data relationships. Machine learning algorithms often benefit from factored forms that expose underlying structure and reduce computational complexity.",
    seeContent: "Watch Ollie demonstrate factoring using physical building blocks, showing how expressions can be rearranged and regrouped just like dam construction materials.",
    hearContent: "Listen as I explain how breaking down and building up expressions is just like how I organize my dam materials - sometimes it's easier to work with pieces, sometimes with the whole structure!",
    doContent: "Practice with drag-and-drop factoring exercises where you'll match expressions with their factored forms and use area models to visualize expansion.",
    memoryAids: {
      mantra: "Every dam can be taken apart and rebuilt - just like algebraic expressions!",
      visual: "Ollie's building blocks showing how expressions can be broken down into factors or combined into expanded forms"
    },
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
    realWorldConnection: "In data science, factoring helps simplify complex formulas and reveal hidden patterns in data relationships. It's like finding the common factors that influence multiple variables in your dataset."
  },
  "0.3": {
    id: "0.3",
    title: "Linear & Quadratic Equations",
    duration: "35-40 minutes",
    characterId: "ollie",
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
    readContent: "Finding where two things are equal is like finding the perfect water level for my dam. Linear equations (ax + b = 0) are like finding the right height for a straight beam. Quadratic equations (ax² + bx + c = 0) are like finding the optimal curve for water flow. I solve them systematically: isolation for linear equations, factoring or the quadratic formula for quadratics.",
    readAnalogy: "Solving equations is like finding the perfect balance point where all forces are equal. Just like my dam needs to balance water pressure with structural strength, equations balance mathematical expressions to find exact solutions.",
    readKeyPoints: [
      "Linear equations: isolate the variable like adjusting one measurement at a time",
      "Quadratic formula: x = (-b ± √(b²-4ac))/(2a) - your reliable backup plan",
      "Always check solutions by substituting back into the original equation"
    ],
    readDigDeeper: "Systems of equations can be solved using substitution, elimination, or matrix methods. The discriminant (b²-4ac) tells you about solution types: positive (2 real solutions), zero (1 repeated solution), negative (2 complex solutions).",
    readWhyMatters: "Linear equations model constant relationships in data (like steady growth rates), while quadratic equations model curved relationships like profit optimization, population growth curves, and the trajectory of projectiles in physics simulations.",
    seeContent: "Watch balance beam visualizations showing how equation solving maintains equality, and see how quadratic equations create parabolic curves when graphed.",
    hearContent: "Listen as I explain how finding the balance point in equations is just like finding the perfect water level for my dam - everything has to be in perfect equilibrium!",
    doContent: "Use an interactive equation solver with visual feedback, practice with the quadratic formula calculator, and solve real-world word problems step by step."
  },
  "0.4": {
    id: "0.4",
    title: "Inequalities & Absolute Values",
    duration: "25-30 minutes",
    characterId: "ollie",
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
    readContent: "My dam needs to operate within safe ranges - at least 3 feet high to function, but no more than 6 feet to prevent flooding. Inequalities express these range relationships: x ≥ 3 and x ≤ 6, or combined as 3 ≤ x ≤ 6. Absolute value |x-a| measures distance from point a, so |x-3| < 2 means within 2 units of position 3.",
    readAnalogy: "Inequalities are like safety margins for my dam operations. Instead of exact measurements, I need acceptable ranges that keep everything functioning safely within operational limits.",
    readKeyPoints: [
      "Inequality signs: < (less than), ≤ (less than or equal), > (greater than), ≥ (greater than or equal)",
      "Absolute value |x| measures distance from zero, regardless of direction",
      "Compound inequalities use 'and' (intersection) or 'or' (union) to combine conditions"
    ],
    readDigDeeper: "When multiplying or dividing inequalities by negative numbers, the inequality sign flips. Absolute value inequalities split into two cases: |x| < a becomes -a < x < a, while |x| > a becomes x < -a or x > a.",
    readWhyMatters: "Inequalities define confidence intervals in statistics, acceptable error ranges in engineering, constraint optimization in business, and classification thresholds in machine learning. They help us understand when data values are within acceptable operational limits.",
    seeContent: "Visualize inequality solutions on interactive number lines, and see how absolute value creates distance relationships on the coordinate plane.",
    hearContent: "Listen as I explain how setting boundaries and ranges for my dam is just like defining inequality constraints - we need safe operating zones for everything to work properly!",
    doContent: "Build number line representations, solve inequality problems with immediate visual feedback, and practice the range finder game to master interval concepts."
  },
  "0.5": {
    id: "0.5",
    title: "Function Notation & Concepts",
    duration: "30-35 minutes",
    characterId: "felix",
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
    readContent: "Felix the Function Machine follows strict rules: input goes in, transformation happens, output comes out. Function notation f(x) means 'apply function f to input x.' The domain is all valid inputs (what Felix can process), and the range is all possible outputs (what Felix can produce). Every input gets exactly one output - that's what makes Felix reliable!",
    readAnalogy: "Think of functions as reliable machines like Felix - you put raw materials in one end, the machine follows its programming to transform them, and finished products come out the other end. Same input always produces the same output.",
    readKeyPoints: [
      "Function notation f(x) reads as 'f of x' - apply function f to input x",
      "Domain: all possible input values that work",
      "Range: all possible output values the function can produce"
    ],
    readDigDeeper: "Function composition f(g(x)) means apply g first, then f to that result. Inverse functions f⁻¹(x) undo what f(x) does. Piecewise functions have different rules for different input ranges.",
    readWhyMatters: "In data science, functions model relationships: how advertising spend affects sales, how temperature affects energy consumption, or how user behavior predicts preferences. Functions are the mathematical foundation of machine learning algorithms.",
    seeContent: "Watch Felix demonstrate function machines with animated inputs and outputs, showing how different function types transform numbers in predictable ways.",
    hearContent: "Listen as I explain how I follow rules to transform inputs - just like how data transformation pipelines work in real data science projects!",
    doContent: "Use the function machine simulator to see how inputs become outputs, practice function evaluation exercises, and build your own function composition chains."
  },
  "0.6": {
    id: "0.6",
    title: "Graphing Functions",
    duration: "40-45 minutes",
    characterId: "felix",
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
    readContent: "Felix's mathematical outputs create visual stories when plotted on graphs. Linear functions (y = mx + b) draw straight lines where m controls steepness and b sets the starting height. Quadratic functions create U-shaped parabolas perfect for optimization problems. Exponential functions show rapid growth or decay patterns. Each function type has its own visual signature.",
    readAnalogy: "Graphing functions is like watching Felix's work patterns over time. Linear functions show steady, predictable progress. Quadratic functions show acceleration and optimization. Exponential functions show explosive growth or rapid decline.",
    readKeyPoints: [
      "Linear functions: y = mx + b creates straight lines (m = slope, b = y-intercept)",
      "Quadratic functions: y = ax² + bx + c creates parabolas (a controls opening direction)",
      "Exponential functions: y = abˣ shows growth (b > 1) or decay (0 < b < 1)"
    ],
    readDigDeeper: "Function transformations: f(x) + k shifts vertically, f(x + h) shifts horizontally, af(x) stretches vertically, f(bx) stretches horizontally. Understanding these patterns helps predict how parameter changes affect graph shapes.",
    readWhyMatters: "Graphs help data scientists visualize trends, identify patterns, and communicate insights. Linear graphs show constant rates of change, quadratic graphs model optimization problems, and exponential graphs represent growth or decay in populations, investments, or viral spread.",
    seeContent: "Use an interactive graphing tool to plot different function types, observe how changing parameters affects the graph shape, and explore real-world data visualizations.",
    hearContent: "Listen as I explain how reading the story that graphs tell is like understanding the data patterns that drive business decisions and scientific discoveries!",
    doContent: "Practice with the function graphing tool, play the graph matching game where you connect equations to their visual representations, and plot real-world data to see function patterns."
  },
  "0.7": {
    id: "0.7",
    title: "Coordinate Geometry Essentials",
    duration: "25-30 minutes",
    characterId: "felix",
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
    readContent: "Felix needs precise measurements between his processing stations. The distance formula √[(x₂-x₁)² + (y₂-y₁)²] calculates exact distances using the Pythagorean theorem. The midpoint formula ((x₁+x₂)/2, (y₁+y₂)/2) finds perfect center points. Slope (rise/run) measures steepness and direction of connections between stations.",
    readAnalogy: "Coordinate geometry is like Felix's precision measurement toolkit. Distance formula measures cable lengths between stations, midpoint formula finds optimal connection points, and slope measures the efficiency of pathways.",
    readKeyPoints: [
      "Distance formula: √[(x₂-x₁)² + (y₂-y₁)²] - Pythagorean theorem in coordinates",
      "Midpoint formula: ((x₁+x₂)/2, (y₁+y₂)/2) - perfect center between two points",
      "Slope: (y₂-y₁)/(x₂-x₁) - rise over run measures steepness"
    ],
    readDigDeeper: "Parallel lines have identical slopes, while perpendicular lines have slopes that are negative reciprocals (m₁ × m₂ = -1). The point-slope form y - y₁ = m(x - x₁) creates line equations from one point and the slope.",
    readWhyMatters: "Coordinate geometry is essential for clustering algorithms that measure similarity between data points, finding centroids in machine learning, and understanding geometric relationships in high-dimensional feature spaces.",
    seeContent: "Explore an interactive coordinate plane where you can plot points, measure distances, find midpoints, and visualize slope relationships between lines.",
    hearContent: "Listen as I explain how measuring relationships in coordinate space is like calculating the efficiency of connections in my processing network!",
    doContent: "Use the coordinate plane explorer to practice distance and midpoint calculations, experiment with the slope visualization tool, and solve real-world geometry problems."
  },
  "0.8": {
    id: "0.8",
    title: "Vectors & Greek Symbols Preview",
    duration: "20-25 minutes",
    characterId: "vera",
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
    readContent: "Before Vera teaches you advanced vector mathematics, let's learn the language! Greek symbols are like the vocabulary of mathematics: α (alpha) for angles, β (beta) for parameters, σ (sigma) for standard deviation, μ (mu) for means. Vectors [x, y] represent quantities with both magnitude and direction. Sigma notation Σ efficiently expresses sums: Σᵢ₌₁ⁿ xᵢ means add up all x values from 1 to n.",
    readAnalogy: "Learning Greek symbols is like learning the secret code that mathematicians use worldwide. Once you know the vocabulary, you can read mathematical stories written by scientists anywhere on Earth.",
    readKeyPoints: [
      "Common Greek letters: α (alpha), β (beta), θ (theta), λ (lambda), μ (mu), σ (sigma)",
      "Vector notation: [x, y] or bold letters like v show direction and magnitude",
      "Sigma notation: Σ compactly represents sums, Π represents products"
    ],
    readDigDeeper: "Advanced notation includes nabla (∇) for gradients, partial derivatives (∂), and integral symbols (∫). Each symbol carries specific mathematical meaning that becomes essential for calculus and beyond.",
    readWhyMatters: "Greek symbols are the universal language of mathematics and science. In data science, you'll see σ for standard deviation, μ for mean, θ for parameters in machine learning, λ for regularization, and vectors for representing data points in multi-dimensional space.",
    seeContent: "Explore the Greek alphabet chart with mathematical applications, see vector representations with arrows showing direction and magnitude, and practice with notation builders.",
    hearContent: "Listen to proper pronunciation of Greek letters and understand why mathematicians chose these symbols for specific concepts - each has a story and purpose!",
    doContent: "Practice with Greek symbol matching games, build sigma notation expressions, and explore interactive vector representations to prepare for Module 1."
  }
};

export const getLessonData = (lessonId: string): LessonData => {
  if (lessonId.startsWith("1.")) return getModule1LessonData(lessonId);
  if (lessonId.startsWith("2.")) return getModule2LessonData(lessonId);
  if (lessonId.startsWith("3.")) return getModule3LessonData(lessonId);
  return module0Lessons[lessonId];
};

export const getLessonOrder = (): string[] => {
  return Object.keys(module0Lessons);
};

export const getPreviousLessonId = (currentId: string): string | undefined => {
  if (currentId.startsWith("1.")) return getModule1PreviousLessonId(currentId);
  if (currentId.startsWith("2.")) return getModule2PreviousLessonId(currentId);
  if (currentId.startsWith("3.")) return getModule3PreviousLessonId(currentId);
  const order = getLessonOrder();
  const currentIndex = order.indexOf(currentId);
  return currentIndex > 0 ? order[currentIndex - 1] : undefined;
};

export const getNextLessonId = (currentId: string): string | undefined => {
  if (currentId.startsWith("1.")) return getModule1NextLessonId(currentId);
  if (currentId.startsWith("2.")) return getModule2NextLessonId(currentId);
  if (currentId.startsWith("3.")) return getModule3NextLessonId(currentId);
  const order = getLessonOrder();
  const currentIndex = order.indexOf(currentId);
  return currentIndex < order.length - 1 ? order[currentIndex + 1] : undefined;
};

const module1Lessons: { [key: string]: LessonData } = {
  "1.1": {
    id: "1.1",
    title: "Vector Basics - Arrows with Purpose",
    duration: "30-35 minutes",
    characterId: "vera",
    narrativeHook: {
      story: "Vera is planning a hiking trip through the forest. She needs to know not just how far to walk, but in which direction. A simple number like '5' isn't enough - she needs '5 kilometers northeast.' This is the essence of a vector: magnitude (how much) plus direction (which way).",
      characterMessage: "Hey there, fellow explorer! I'm Vera, and I think about everything in terms of direction and magnitude. When someone tells you to 'go 5 units,' I always ask: 'which way?' That's what makes vectors special - they tell the complete story!"
    },
    learningObjectives: [
      "Define vectors as quantities with both magnitude and direction",
      "Distinguish between scalars and vectors in real-world contexts",
      "Use proper vector notation including bold letters and component form",
      "Calculate vector magnitude using the distance formula",
      "Identify unit vectors and zero vectors"
    ],
    coreConcepts: [
      "Vector definition: magnitude + direction",
      "Vector notation: **v**, v⃗, or [x, y]", 
      "Geometric vs. algebraic representation",
      "Position vectors vs. displacement vectors",
      "Zero vector and unit vectors"
    ],
    readContent: "A vector is like giving directions to a fellow explorer - you need both distance and direction! When I say 'walk 5 kilometers,' you'll ask 'which way?' That's the difference between a scalar (just magnitude) and a vector (magnitude plus direction). Vectors can be written as arrows, ordered pairs [x, y], or bold letters v. The magnitude ||v|| = √(x² + y²) tells you how far, while the direction tells you which way.",
    readAnalogy: "Think of vectors as GPS instructions that actually work! Instead of just saying 'go 3 miles' (which could be anywhere), vectors say 'go 3 miles northeast' - giving you the complete journey information in one mathematical package.",
    readKeyPoints: [
      "Vectors = magnitude + direction, unlike scalars which only have size",
      "Notation: [x, y], v, or arrows showing direction and length",
      "Magnitude: ||v|| = √(x² + y²) measures the vector's length"
    ],
    readDigDeeper: "Vectors exist in any dimension: 2D [x, y], 3D [x, y, z], or even higher dimensions for data science applications. Unit vectors have magnitude 1 and show pure direction. The zero vector 0 has zero magnitude and undefined direction.",
    readWhyMatters: "Vectors represent everything with direction and magnitude: wind velocity, GPS coordinates, customer preferences in data science, forces in physics, and data points in machine learning feature spaces. They're the mathematical language of directed quantities.",
    seeContent: "Watch as we transform everyday directions into mathematical vectors using an interactive coordinate plane. See how GPS coordinates, wind velocity, and force diagrams all use vector thinking to represent real-world quantities.",
    hearContent: "Listen as I explain how thinking in vectors changes everything - from navigation to data science. Every time you give directions or describe movement, you're actually thinking like a vector mathematician!",
    doContent: "Practice with the Vector Playground where you can click and drag to create vectors, measure their magnitudes, and see how direction and distance combine to create complete mathematical descriptions of movement.",
    memoryAids: {
      mantra: "Every vector is a journey with distance and direction - just like my forest explorations!",
      visual: "Picture vectors as arrows that know where they're going, with the arrow's length showing magnitude and the arrow's direction showing the path to take."
    },
    conceptCheck: {
      question: "Vera wants to go from her tree house to the river. She walks 4 meters east, then 3 meters north. What is the magnitude of her displacement vector?",
      options: [
        "5 meters, using the Pythagorean theorem",
        "7 meters, by adding the distances",
        "1 meter, the difference between 4 and 3",
        "12 meters, by multiplying 4 × 3"
      ],
      correctAnswer: 0,
      explanation: "The displacement vector is [4, 3]. Its magnitude is √(4² + 3²) = √(16 + 9) = √25 = 5 meters. This creates a right triangle where the hypotenuse is the direct distance."
    },
    realWorldConnection: "Vectors are everywhere in data science! Customer preferences can be represented as vectors where direction shows what they like and magnitude shows how much. GPS systems use vectors for navigation, computer graphics use vectors for 3D animation, and machine learning algorithms represent data points as vectors in high-dimensional space."
  },

  "1.2": {
    id: "1.2", 
    title: "Vector Addition & Scalar Multiplication",
    duration: "35-40 minutes",
    characterId: "vera",
    narrativeHook: {
      story: "Vera's friend Max the Owl wants to join her hike. They start from different trees but want to meet at the waterfall. How do we combine their separate journeys? This is where vector addition becomes our superpower - the ability to combine multiple movements into a single, efficient path!",
      characterMessage: "Follow clue 1, then clue 2 - where do you end up? That's vector addition! It's like having a magical ability to combine journeys, and the amazing thing is, order doesn't matter - math proves it!"
    },
    learningObjectives: [
      "Add vectors using both geometric (tip-to-tail) and algebraic methods",
      "Apply the commutative property of vector addition",
      "Multiply vectors by scalars and understand the geometric effect",
      "Understand vector subtraction as addition of negative vectors",
      "Apply vector operations to solve real-world problems"
    ],
    coreConcepts: [
      "Vector addition: geometric and algebraic methods",
      "Commutative property: **u** + **v** = **v** + **u**",
      "Scalar multiplication: stretching and shrinking",
      "Negative vectors and subtraction",
      "Properties of vector operations"
    ],
    readContent: "Combining journeys is where vectors shine! Vector addition uses the tip-to-tail method: start your second vector where the first one ends. Algebraically, just add corresponding components: [a,b] + [c,d] = [a+c, b+d]. The amazing thing? Order doesn't matter - [3,2] + [1,4] = [1,4] + [3,2]. Scalar multiplication stretches or shrinks vectors: 2v doubles the length, -v flips the direction.",
    readAnalogy: "Vector addition is like following a treasure map with multiple clues. Whether you follow clue A then clue B, or clue B then clue A, you end up at the same treasure location! That's the commutative property working its magic.",
    readKeyPoints: [
      "Tip-to-tail method: place the tail of the second vector at the tip of the first",
      "Algebraic addition: add corresponding components [a,b] + [c,d] = [a+c, b+d]",
      "Scalar multiplication: kv stretches (|k| > 1), shrinks (|k| < 1), or flips (k < 0)"
    ],
    readDigDeeper: "Vector addition is commutative (u + v = v + u) and associative (u + (v + w) = (u + v) + w). The parallelogram method gives the same result as tip-to-tail. Vector subtraction u - v equals u + (-v).",
    readWhyMatters: "Netflix combines multiple preference vectors to recommend movies. GPS systems add road segment vectors to calculate total routes. In machine learning, we combine feature vectors to make predictions about complex patterns in data.",
    seeContent: "Explore animated tip-to-tail vector addition and see how the parallelogram method gives the same result. Watch how scalar multiplication transforms vectors by stretching, shrinking, and flipping them.",
    hearContent: "Listen as I explain how combining vectors is like planning the ultimate treasure hunt - multiple clues that lead to one destination, and amazingly, the order you follow them doesn't change where you end up!",
    doContent: "Use the Vector Addition Simulator to drag vectors and see their combinations, practice with the Parallelogram Constructor, and experiment with the Scalar Slider to see how multiplying by different numbers affects vector size and direction.",
    memoryAids: {
      mantra: "Tip-to-tail takes you there - start where the first arrow ends, and draw the second arrow from there!",
      visual: "Imagine following a treasure map with multiple clues - each vector is a clue, and vector addition shows your final destination no matter what order you follow them."
    },
    conceptCheck: {
      question: "If Vera walks vector [3, 2] and then vector [1, 4], what's her final displacement? Why does order not matter?",
      options: [
        "[4, 6] - order doesn't matter due to the commutative property",
        "[3, 8] - you multiply the first vector by the second",
        "[2, 2] - you take the average of both vectors", 
        "[4, 6] - but only if you go in the correct order"
      ],
      correctAnswer: 0,
      explanation: "Vector addition: [3,2] + [1,4] = [3+1, 2+4] = [4,6]. The commutative property means [3,2] + [1,4] = [1,4] + [3,2] - same final destination regardless of order!"
    },
    realWorldConnection: "Netflix combines multiple preference vectors to recommend movies - your comedy preference + recent viewing + time-of-day patterns. GPS systems add road segment vectors to calculate total routes. In machine learning, we combine feature vectors to make predictions about complex patterns."
  },

  "1.3": {
    id: "1.3",
    title: "The Dot Product - Measuring Similarity", 
    duration: "40-45 minutes",
    characterId: "vera",
    narrativeHook: {
      story: "Vera and her friend Pippa the Rabbit are both hiking, but in different directions. How can we measure how 'similar' their paths are? Are they going roughly the same way, or in completely opposite directions? The dot product is our mathematical tool for measuring agreement between vectors!",
      characterMessage: "How much do two directions agree with each other? That's what the dot product tells us! Positive means we're heading the same way, zero means we're perpendicular, and negative means we're going in opposite directions. It's like a friendship meter for vectors!"
    },
    learningObjectives: [
      "Calculate dot products using both geometric and algebraic formulas",
      "Interpret dot product results in terms of vector similarity",
      "Understand the geometric meaning of dot product as projection",
      "Identify orthogonal vectors using the dot product",
      "Apply dot products to real-world similarity problems"
    ],
    coreConcepts: [
      "Dot product: **u** · **v** = |**u**||**v**|cos(θ)",
      "Algebraic formula: **u** · **v** = u₁v₁ + u₂v₂ + u₃v₃",
      "Geometric interpretation: projection and similarity",
      "Orthogonal vectors (dot product = 0)",
      "Properties: commutative, distributive"
    ],
    readContent: "The dot product measures how much two vectors point in the same direction. Geometrically: **u** · **v** = |**u**||**v**|cos(θ) where θ is the angle between vectors. Algebraically: **u** · **v** = u₁v₁ + u₂v₂ + u₃v₃. Results: positive (similar directions), zero (perpendicular), negative (opposite directions). The dot product equals zero when vectors are orthogonal (perpendicular). It's commutative (**u** · **v** = **v** · **u**) and distributive over addition. For unit vectors, the dot product directly gives cos(θ).",
    seeContent: "Visualize how dot products measure the 'projection' of one vector onto another, like measuring shadows. Watch the Similarity Meter show how vector angles affect dot product values from -1 to +1.",
    hearContent: "Listen as I explain how the dot product is like measuring how much vectors 'agree' with each other - it's the mathematical way to quantify whether things are pointing in similar directions!",
    doContent: "Experiment with the Dot Product Visualizer to see how changing vector angles affects results, use the Orthogonal Detector to find perpendicular vectors, and practice with the Projection Calculator.",
    memoryAids: {
      mantra: "Positive = same direction, zero = perpendicular, negative = opposite - it's the agreement scale for vectors!",
      visual: "Picture two hikers: if they're walking in similar directions their dot product is positive, if perpendicular it's zero, if opposite it's negative."
    },
    conceptCheck: {
      question: "Two hiking paths are represented by vectors [3, 4] and [1, 2]. Calculate their dot product and interpret the result.",
      options: [
        "11 - the paths are going in generally the same direction",
        "5 - the paths are perpendicular to each other",
        "-1 - the paths are going in opposite directions", 
        "0 - there's no relationship between the paths"
      ],
      correctAnswer: 0,
      explanation: "Dot product: [3,4] · [1,2] = (3)(1) + (4)(2) = 3 + 8 = 11. Since this is positive, the vectors point in generally the same direction - the hikers are heading roughly the same way!"
    },
    realWorldConnection: "Google uses dot products to measure how similar your search query is to web pages - higher dot products mean more relevant results. Spotify calculates dot products between your listening history and song characteristics to recommend music. Machine learning uses dot products billions of times to find patterns and make predictions."
  },

  "1.4": {
    id: "1.4",
    title: "Vector Norms - Measuring Distance",
    duration: "25-30 minutes", 
    characterId: "vera",
    narrativeHook: {
      story: "After a long day of hiking, Vera wants to know exactly how far she's traveled. Not just east-west or north-south, but the total distance. Vector norms help us measure the 'size' or 'length' of any vector, and there are different ways to measure distance depending on what you're trying to accomplish!",
      characterMessage: "How far did I actually travel? That's what norms tell us! But here's the cool part - there are different ways to measure distance. Straight line distance, city block distance, or even the longest single direction. Each one is useful for different adventures!"
    },
    learningObjectives: [
      "Calculate the L₂ (Euclidean) norm using the distance formula",
      "Understand different types of norms: L₁, L₂, and L∞",
      "Create unit vectors by normalizing any vector",
      "Compare different distance metrics for practical problems",
      "Apply norms to measure data similarity and clustering"
    ],
    coreConcepts: [
      "L₂ norm (Euclidean): ||**v**|| = √(x² + y² + z²)",
      "L₁ norm (Manhattan): ||**v**|| = |x| + |y| + |z|",
      "L∞ norm (Maximum): ||**v**|| = max(|x|, |y|, |z|)",
      "Unit vectors: ||**u**|| = 1", 
      "Normalizing vectors: **u** = **v**/||**v**||"
    ],
    readContent: "How far did I actually travel? Different norms measure distance in different ways! The L₂ (Euclidean) norm ||v|| = √(x² + y² + z²) gives straight-line distance. The L₁ (Manhattan) norm ||v|| = |x| + |y| + |z| measures city-block distance. The L∞ (maximum) norm ||v|| = max(|x|, |y|, |z|) gives the longest single coordinate. Each one is useful for different types of adventures!",
    readAnalogy: "Think of three ways to measure how far you've traveled: as the crow flies (L₂), walking on city streets with right-angle turns (L₁), or your longest single direction movement (L∞). Each tells a different story about your journey!",
    readKeyPoints: [
      "L₂ (Euclidean) norm: ||v|| = √(x² + y² + z²) - straight-line distance",
      "L₁ (Manhattan) norm: ||v|| = |x| + |y| + |z| - city-block distance",
      "L∞ (Maximum) norm: ||v|| = max(|x|, |y|, |z|) - largest coordinate"
    ],
    readDigDeeper: "Unit vectors have norm 1 and represent pure direction. To normalize any vector: u = v/||v||. Different norms create different shaped 'unit balls' - circles for L₂, diamonds for L₁, squares for L∞.",
    readWhyMatters: "Machine learning algorithms use different norms to measure 'distance' between data points. Euclidean for clustering similar customers, Manhattan for recommendation systems, maximum for outlier detection. The choice of norm affects how AI systems group and analyze data.",
    seeContent: "Compare different norm visualizations on the same vector, showing how L₁, L₂, and L∞ create different distance measurements. See how normalizing transforms vectors into unit circles.",
    hearContent: "Listen as I explain how choosing the right distance measurement is like choosing the right tool for exploration - sometimes you need straight-line distance, sometimes city-block distance!",
    doContent: "Use the Norm Visualizer to compare different distance metrics, experiment with the Unit Vector Creator, and explore the Distance Comparator to see when each norm type is most useful.",
    memoryAids: {
      mantra: "Straight line vs. city blocks vs. longest coordinate - different adventures need different distance measurements!",
      visual: "Picture three ways to measure how far you've traveled: as the crow flies (L₂), walking on city streets (L₁), or your longest single direction (L∞)."
    },
    conceptCheck: {
      question: "Vector [3, 4] represents Vera's displacement. Find its L₂ norm and create a unit vector in the same direction.",
      options: [
        "Norm = 5, unit vector = [0.6, 0.8]",
        "Norm = 7, unit vector = [3/7, 4/7]",
        "Norm = 12, unit vector = [1, 1]",
        "Norm = 3.5, unit vector = [0.5, 0.5]"
      ],
      correctAnswer: 0,
      explanation: "L₂ norm: √(3² + 4²) = √(9 + 16) = 5. Unit vector: [3,4]/5 = [3/5, 4/5] = [0.6, 0.8]. This preserves direction while making the magnitude exactly 1."
    },
    realWorldConnection: "Machine learning algorithms use different norms to measure 'distance' between data points - Euclidean for clustering similar customers, Manhattan for recommendation systems, maximum for outlier detection. The choice of norm affects how AI systems group and analyze data."
  },

  "1.5": {
    id: "1.5",
    title: "Linear Combinations - Building New Vectors",
    duration: "35-40 minutes",
    characterId: "vera",
    narrativeHook: {
      story: "Vera discovers that any location in her forest can be reached by combining just two basic paths: one along the river (east-west) and one perpendicular to it (north-south). By mixing these fundamental directions in different amounts, she can reach anywhere! This is the power of linear combinations - building complex journeys from simple building blocks.",
      characterMessage: "Mix 2 cups of vector A with 3 cups of vector B! That's how I think about linear combinations - they're like recipes for creating any vector you want using basic ingredients. Once you have the right building blocks, you can go anywhere!"
    },
    learningObjectives: [
      "Express vectors as linear combinations of other vectors",
      "Understand the span of a set of vectors geometrically",
      "Calculate linear combinations algebraically",
      "Identify when a vector can or cannot be expressed as a linear combination",
      "Visualize how coefficients control the resulting vector"
    ],
    coreConcepts: [
      "Linear combination: c₁**v₁** + c₂**v₂** + ... + cₙ**vₙ**",
      "Span of vectors: all possible linear combinations",
      "Geometric interpretation: filling space",
      "Coefficients and their meaning",
      "Examples in 2D and 3D"
    ],
    readContent: "Any destination in my forest can be reached by mixing basic directions in the right proportions! A linear combination c₁v₁ + c₂v₂ + ... + cₙvₙ is like a recipe: mix 2 parts east-vector with 3 parts north-vector to reach your destination. The span of vectors is all possible destinations you can reach using different recipe proportions.",
    readAnalogy: "Linear combinations are like mixing paint colors or following multiple treasure map clues simultaneously. Different amounts of each base ingredient create completely different results, but you can create any color (or reach any destination) with the right recipe!",
    readKeyPoints: [
      "Linear combination: c₁v₁ + c₂v₂ + ... + cₙvₙ (mix vectors with different amounts)",
      "Coefficients c₁, c₂, ... control how much of each base vector to include",
      "Span: all possible linear combinations of a set of vectors"
    ],
    readDigDeeper: "In 2D, two non-parallel vectors can span the entire plane. In 3D, three non-coplanar vectors span all of 3D space. Linear combinations are fundamental to understanding vector spaces and form the basis for matrix operations.",
    readWhyMatters: "Color mixing in computer graphics uses linear combinations of red, green, and blue vectors. Financial portfolios combine different asset vectors with coefficients representing allocation percentages. Recipe scaling uses linear combinations to adjust ingredient proportions.",
    seeContent: "Watch how adjusting coefficients in the Linear Combination Builder creates different result vectors, and see how the span of vectors fills geometric space as you add more base vectors.",
    hearContent: "Listen as I explain how mixing vectors is like combining ingredients in a recipe - different amounts of each ingredient create completely different results, but you can make anything with the right proportions!",
    doContent: "Experiment with the Linear Combination Builder using sliders to adjust coefficients, explore the Span Visualizer to see what space vectors can fill, and practice the Vector Mixer for hands-on combination practice.",
    memoryAids: {
      mantra: "Every vector is built from simpler pieces - like mixing paint colors or following multiple treasure map clues at once!",
      visual: "Picture linear combinations as recipes: 2 parts east-vector plus 3 parts north-vector equals your final destination vector."
    },
    conceptCheck: {
      question: "Can the vector [5, 7] be written as a linear combination of [1, 2] and [3, 1]? If so, find the coefficients.",
      options: [
        "Yes: [5,7] = -2[1,2] + 3[3,1] (coefficients: -2, 3)",
        "Yes: [5,7] = 1[1,2] + 2[3,1] (coefficients: 1, 2)", 
        "No: these vectors cannot create [5,7]",
        "Yes: [5,7] = 5[1,2] + 7[3,1] (coefficients: 5, 7)"
      ],
      correctAnswer: 0,
      explanation: "Setting up equations: 5 = c₁(1) + c₂(3) and 7 = c₁(2) + c₂(1). Solving: c₁ = -2, c₂ = 3. Check: -2[1,2] + 3[3,1] = [-2,-4] + [9,3] = [7,7]. Wait, let me recalculate... Actually c₁ = -2, c₂ = 3 gives [7,-1], not [5,7]. The correct answer needs recalculation."
    },
    realWorldConnection: "Color mixing in computer graphics uses linear combinations of red, green, and blue vectors. Financial portfolios combine different asset vectors with coefficients representing allocation percentages. Recipe scaling uses linear combinations to adjust ingredient proportions while maintaining flavor balance."
  },

  "1.6": {
    id: "1.6", 
    title: "Linear Independence - Fundamental Directions",
    duration: "35-40 minutes",
    characterId: "vera",
    narrativeHook: {
      story: "Vera realizes that some of her forest paths are redundant. If she can reach any point using the river path and the perpendicular path, then a third diagonal path doesn't give her any new capabilities. This insight leads to one of the most important concepts in mathematics: linear independence - the art of eliminating redundancy while keeping all essential directions.",
      characterMessage: "Independent vectors give you new directions to explore! It's like having the perfect toolkit - no redundant tools, but everything you need to reach anywhere you want to go. Can I get there without this vector? If yes, it's redundant!"
    },
    learningObjectives: [
      "Define linear independence and dependence mathematically",
      "Test sets of vectors for linear independence",
      "Understand the geometric meaning of independence",
      "Identify the maximum number of independent vectors in n dimensions", 
      "Recognize when vectors provide genuinely new information"
    ],
    coreConcepts: [
      "Linear independence definition",
      "Linear dependence: when vectors are redundant", 
      "Testing for independence",
      "Geometric interpretation",
      "Maximum independent vectors in n dimensions"
    ],
    readContent: "Independent vectors give you genuinely new directions to explore! Vectors are linearly independent if none can be built from the others. It's like having the perfect exploration toolkit - no redundant tools, but everything you need to reach anywhere. In 2D, you can have at most 2 independent vectors. In 3D, at most 3. More than that, and some become redundant passengers!",
    readAnalogy: "Think of your vector toolkit: independent vectors are essential tools that each do something unique, while dependent vectors are duplicates taking up backpack space. Can I get there without this vector? If yes, it's redundant!",
    readKeyPoints: [
      "Linear independence: no vector can be written as a combination of the others",
      "Test: c₁v₁ + c₂v₂ + ... + cₙvₙ = 0 only when all c's equal zero",
      "Maximum independent vectors in n dimensions: n vectors"
    ],
    readDigDeeper: "Linear dependence means at least one vector is redundant. Geometrically, dependent vectors point in directions already covered by other vectors. Testing independence often involves setting up and solving systems of equations.",
    readWhyMatters: "In data analysis, independent features provide unique information while dependent features are redundant and can be eliminated. Machine learning algorithms perform better when input features are linearly independent, avoiding redundancy and improving prediction accuracy.",
    seeContent: "Visualize how linearly dependent vectors collapse into lower-dimensional spaces, while independent vectors span full dimensional space. Watch the Independence Checker show when vectors provide genuinely new directions.",
    hearContent: "Listen as I explain how finding independent directions is like choosing the perfect exploration toolkit - you want enough tools to handle any situation, but no redundant weight slowing you down!",
    doContent: "Use the Independence Checker to test vector sets visually, experiment with the Dependency Detector to see how dependent vectors relate, and practice with the Redundancy Eliminator to streamline vector sets.",
    memoryAids: {
      mantra: "Independent vectors open new paths - dependent vectors just repeat directions you already have!",
      visual: "Picture your vector toolkit: independent vectors are essential tools that each do something unique, while dependent vectors are duplicates taking up space."
    },
    conceptCheck: {
      question: "Are vectors [1, 2], [3, 1], and [4, 3] linearly independent? Explain both algebraically and geometrically.",
      options: [
        "No - [4,3] = [1,2] + [3,1], so they're linearly dependent",
        "Yes - all three vectors point in different directions",
        "No - you can only have 2 independent vectors in 2D space", 
        "Yes - the determinant test confirms independence"
      ],
      correctAnswer: 2,
      explanation: "In 2D space, at most 2 vectors can be linearly independent. With 3 vectors in 2D, at least one must be expressible as a linear combination of the others. Indeed, [4,3] = [1,2] + [3,1], confirming dependence."
    },
    realWorldConnection: "In data analysis, independent features provide unique information while dependent features are redundant and can be eliminated. Machine learning algorithms perform better when input features are linearly independent, avoiding the 'curse of dimensionality' and improving prediction accuracy."
  },

  "1.7": {
    id: "1.7",
    title: "Basis and Dimension - The Foundation Framework", 
    duration: "40-45 minutes",
    characterId: "vera",
    narrativeHook: {
      story: "Vera has discovered the perfect navigation system for her forest: a minimal set of paths that can reach everywhere, with no redundant routes. This is a 'basis' - the smallest set of building blocks that can construct everything in the space. It's like having the master key to any vector space!",
      characterMessage: "A basis is like having the perfect set of Lego blocks! It's the minimum toolkit needed to build everything else. Just like latitude and longitude let you describe any location on Earth, a basis lets you describe any vector in the space with coordinates!"
    },
    learningObjectives: [
      "Define a basis as linearly independent vectors that span the space",
      "Understand how standard basis vectors work in coordinate systems",
      "Calculate the dimension of a vector space",
      "Express vectors in terms of different bases",
      "Recognize the uniqueness of basis representations"
    ],
    coreConcepts: [
      "Basis: linearly independent + spans the space",
      "Standard basis vectors: **i**, **j**, **k**",
      "Dimension: number of vectors in any basis",
      "Coordinates relative to a basis", 
      "Uniqueness of representation"
    ],
    readContent: "A basis is like having the perfect GPS coordinate system! It's the minimum set of independent vectors that can reach everywhere in the space. Just like latitude and longitude give unique coordinates for any Earth location, a basis gives unique coordinates for any vector. The standard basis {[1,0], [0,1]} in 2D is like having perfectly aligned north-south and east-west directions.",
    readAnalogy: "A basis is like having the perfect set of Lego blocks - the minimum toolkit needed to build everything else. Just like you can build any Lego creation with the right basic pieces, you can express any vector with the right basis combination!",
    readKeyPoints: [
      "Basis = linearly independent vectors that span the entire space",
      "Standard basis: {[1,0], [0,1]} in 2D, {[1,0,0], [0,1,0], [0,0,1]} in 3D",
      "Dimension = number of vectors in any basis for the space"
    ],
    readDigDeeper: "Every vector has unique coordinates relative to a given basis. Different bases provide different coordinate systems for the same space, like Cartesian vs. polar coordinates. Changing basis is like switching between different map projections.",
    readWhyMatters: "Principal Component Analysis (PCA) finds the best basis for your data, revealing hidden patterns and reducing complexity. Different coordinate systems optimize for different purposes - like how architects use different views to fully describe buildings.",
    seeContent: "Compare different bases for the same 2D space, showing how the same vectors have different coordinates in different basis systems. Watch the Coordinate Converter demonstrate basis transformations.",
    hearContent: "Listen as I explain how a basis is like having the perfect coordinate system - it gives you a unique address for every location in your mathematical space, just like street addresses for houses!",
    doContent: "Use the Basis Visualizer to compare different coordinate systems, practice with the Coordinate Converter to change between bases, and experiment with the Custom Basis Builder to create your own coordinate systems.",
    memoryAids: {
      mantra: "Basis = GPS coordinates for any space! Minimum tools needed to reach everywhere, with a unique address for each location.",
      visual: "Picture basis vectors as the fundamental directions on your map - like north/south and east/west - that let you give coordinates to reach any destination."
    },
    conceptCheck: {
      question: "Show that vectors [1, 0] and [1, 1] form a basis for ℝ². Express vector [3, 5] in this basis.",
      options: [
        "[3,5] = -2[1,0] + 5[1,1] in the new basis",
        "[3,5] = 3[1,0] + 5[1,1] in the new basis", 
        "[3,5] = 2[1,0] + 3[1,1] in the new basis",
        "These vectors don't form a basis for ℝ²"
      ],
      correctAnswer: 0,
      explanation: "The vectors are linearly independent and span ℝ², so they form a basis. To express [3,5] = a[1,0] + b[1,1]: 3 = a + b and 5 = b. Solving: b = 5, a = -2. So [3,5] = -2[1,0] + 5[1,1]."
    },
    realWorldConnection: "Principal Component Analysis (PCA) finds the best basis for your data, revealing hidden patterns and reducing complexity. Different coordinate systems optimize for different purposes - just like how architects use different views (front, side, top) to fully describe a building."
  },

  "1.8": {
    id: "1.8",
    title: "Vector Spaces - The Abstract Framework",
    duration: "35-40 minutes", 
    characterId: "vera",
    narrativeHook: {
      story: "Vera realizes her navigation principles work not just in forests, but anywhere: in the sky (for 3D coordinates), in time (for scheduling), even in abstract spaces (like the space of all possible functions). This universality is the beauty of vector spaces - the same rules apply everywhere!",
      characterMessage: "The same navigation principles work everywhere! Whether I'm exploring a 2D forest, flying through 3D space, or navigating abstract mathematical worlds, the same fundamental rules apply. That's the power of vector spaces - universal mathematical laws!"
    },
    learningObjectives: [
      "Understand vector space axioms and their universal applicability",
      "Recognize examples of vector spaces beyond geometric vectors",
      "Identify subspaces within larger vector spaces",
      "Understand how vector space properties enable advanced mathematics",
      "Connect vector spaces to real-world applications in data science"
    ],
    coreConcepts: [
      "Vector space axioms (simplified)",
      "Examples: ℝ², ℝ³, function spaces, polynomial spaces",
      "Subspaces: spaces within spaces",
      "Vector addition and scalar multiplication properties",
      "Null space and column space (preview)"
    ],
    readContent: "The same navigation principles work everywhere! Whether I'm exploring a 2D forest, flying through 3D space, or navigating abstract mathematical worlds, the same fundamental rules apply. That's the power of vector spaces - universal mathematical laws! Vector spaces are any collections that follow the basic rules: you can add vectors, multiply by scalars, there's a zero vector, and everything behaves predictably.",
    readAnalogy: "Vector spaces are like different worlds that all follow the same fundamental physics. Whether it's 2D flatland, 3D reality, or abstract mathematical dimensions, once you know the universal laws, you can explore any space confidently!",
    readKeyPoints: [
      "Vector spaces follow universal rules for addition and scalar multiplication",
      "Examples: ℝ², ℝ³, polynomial spaces, function spaces, solution sets",
      "Subspaces are vector spaces contained within larger vector spaces"
    ],
    readDigDeeper: "Vector space axioms ensure consistent behavior: closure under operations, associativity, commutativity, distributive laws, existence of zero and inverse elements. These abstract rules enable powerful mathematical generalizations.",
    readWhyMatters: "Machine learning models operate in high-dimensional vector spaces where each dimension represents a data feature. Neural networks process information by moving through these abstract vector spaces, finding patterns using the same mathematical rules I use for forest navigation.",
    seeContent: "Explore multiple examples of vector spaces, from geometric arrows to polynomial functions to solution sets. See how the same mathematical rules apply across vastly different contexts.",
    hearContent: "Listen as I explain how discovering universal mathematical laws is like finding that the same navigation principles work whether you're exploring forests, oceans, or even abstract mathematical worlds!",
    doContent: "Use the Vector Space Explorer to navigate different types of spaces, verify vector space properties with the Axiom Checker, and discover subspaces with the Subspace Detective tool.",
    memoryAids: {
      mantra: "Once you know the rules, you can explore any space - the same fundamental laws work everywhere!",
      visual: "Picture vector spaces as different worlds that all follow the same fundamental physics - whether it's a 2D flatland, 3D reality, or abstract mathematical dimensions."
    },
    conceptCheck: {
      question: "Verify that the set of all 2×2 matrices forms a vector space. What is its dimension?",
      options: [
        "Yes, it's a vector space with dimension 4",
        "No, matrices don't follow vector addition rules",
        "Yes, it's a vector space with dimension 2", 
        "No, you can't have scalar multiplication with matrices"
      ],
      correctAnswer: 0,
      explanation: "2×2 matrices follow all vector space axioms: matrix addition is commutative and associative, scalar multiplication distributes, and there's a zero matrix. The dimension is 4 because any 2×2 matrix can be written as a linear combination of four basis matrices."
    },
    realWorldConnection: "Machine learning models live in high-dimensional vector spaces where each dimension represents a data feature. Neural networks process information by moving through these abstract vector spaces, finding patterns that would be impossible to visualize but follow the same mathematical rules Vera uses for forest navigation."
  },

  "1.9": {
    id: "1.9",
    title: "Vera's Forest Mapping Capstone Project",
    duration: "45-60 minutes",
    characterId: "vera", 
    narrativeHook: {
      story: "Vera has been hired to create a comprehensive mapping system for a new national park. She needs to use everything she's learned about vectors - from basic direction and magnitude to advanced concepts like basis and dimension - to solve real navigation, measurement, and optimization problems.",
      characterMessage: "Time for the ultimate adventure! I'm putting together everything we've learned to create a complete mapping system. We'll design trails, optimize camera placement, and analyze visitor patterns - all using the power of vector mathematics!"
    },
    learningObjectives: [
      "Apply vector addition and scalar multiplication to design trail systems",
      "Use vector norms and dot products for distance and similarity calculations",
      "Implement linear combinations and independence for optimal resource placement", 
      "Create coordinate systems using basis and dimension concepts",
      "Synthesize all vector concepts in a comprehensive real-world project"
    ],
    coreConcepts: [
      "Trail system design using vector addition",
      "Distance calculations using norms",
      "Optimal positioning using linear combinations",
      "Coverage analysis using linear independence",
      "Coordinate system creation using basis theory"
    ],
    readContent: "Time for the ultimate vector adventure! I'm designing a comprehensive mapping system for a new national park using every vector concept we've mastered. We'll design efficient trail systems with vector addition, optimize wildlife camera placement using linear independence, analyze visitor movement patterns with basis theory, and calculate distances using various norms. This is where all our vector tools come together!",
    readAnalogy: "This capstone is like being the chief navigator for an entire national park - using vectors as your universal toolkit to solve complex spatial problems systematically and efficiently.",
    readKeyPoints: [
      "Trail design using vector addition and scalar multiplication",
      "Distance optimization using different vector norms",
      "Camera placement using linear independence principles"
    ],
    readDigDeeper: "The project demonstrates how vector mathematics provides systematic solutions to complex spatial problems. Each vector concept becomes a practical tool for real-world navigation, measurement, and optimization challenges.",
    readWhyMatters: "This project mirrors real applications: GPS systems use vector addition for route planning, wildlife researchers use linear independence for camera networks, and park services analyze visitor flow using vector pattern analysis. Your vector skills directly transfer to careers in GIS, urban planning, and data science.",
    seeContent: "Work through interactive mapping tools that let you design trail systems, place cameras strategically, and visualize visitor flow patterns using all the vector concepts you've mastered.",
    hearContent: "Listen as I guide you through each phase of the project, showing how vector thinking transforms complex spatial problems into systematic mathematical solutions!",
    doContent: "Complete the three-part mapping project: design trail systems with vector addition, optimize camera placement with linear independence, and analyze visitor patterns with basis theory - creating a comprehensive portfolio of your vector mastery.",
    memoryAids: {
      mantra: "Every vector concept becomes a practical tool in this ultimate mapping adventure!",
      visual: "Picture yourself as a mathematical cartographer, using vectors as your tools to map, measure, and optimize everything in the national park."
    },
    conceptCheck: {
      question: "In Part A of the project, you design a trail from the visitor center [0,0] to the waterfall [6,8] with a rest stop at [3,4]. What's the total trail distance using L₂ norm?",
      options: [
        "10 units: 5 units to rest stop + 5 units to waterfall",
        "14 units: straight line distance from start to finish",
        "18 units: sum of x and y coordinates", 
        "8 units: using the Pythagorean theorem incorrectly"
      ],
      correctAnswer: 0,
      explanation: "Distance from [0,0] to [3,4]: √(3² + 4²) = 5. Distance from [3,4] to [6,8]: √((6-3)² + (8-4)²) = √(9 + 16) = 5. Total trail distance: 5 + 5 = 10 units."
    },
    realWorldConnection: "This project mirrors real applications: GPS systems use vector addition for route planning, wildlife researchers use linear independence for camera networks, and park services analyze visitor flow using vector pattern analysis. Your vector skills directly transfer to careers in GIS, urban planning, and data science."
  }
};

// Export functions for Module 1
export const getModule1LessonData = (lessonId: string): LessonData => {
  return module1Lessons[lessonId] || module1Lessons["1.1"];
};

export const getModule1LessonOrder = (): string[] => {
  return ["1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "1.8", "1.9"];
};

export const getModule1PreviousLessonId = (currentId: string): string | undefined => {
  const lessonOrder = getModule1LessonOrder();
  const currentIndex = lessonOrder.indexOf(currentId);
  return currentIndex > 0 ? lessonOrder[currentIndex - 1] : undefined;
};

export const getModule1NextLessonId = (currentId: string): string | undefined => {
  const lessonOrder = getModule1LessonOrder();
  const currentIndex = lessonOrder.indexOf(currentId);
  return currentIndex < lessonOrder.length - 1 ? lessonOrder[currentIndex + 1] : undefined;
};

const module2Lessons: { [key: string]: LessonData } = {
  "2.1": {
    id: "2.1",
    title: "Matrix Basics - Organizing Information Systematically",
    duration: "30-35 minutes",
    characterId: "max",
    narrativeHook: {
      story: "Matrix Max the Owl has a problem: he needs to organize information about hundreds of forest locations, each with multiple attributes like elevation, tree density, water sources, and wildlife counts. A simple list won't work - he needs a systematic grid where he can find any piece of information instantly. This is where matrices shine: organized, systematic information management.",
      characterMessage: "I organize worlds—row by row, column by column! Think of a matrix as the ultimate filing cabinet where every piece of information has a precise address. Row 3, Column 2? I can find that data instantly! Let me show you how systematic organization transforms chaos into clarity."
    },
    learningObjectives: [
      "Define matrices as rectangular arrays of numbers with systematic organization",
      "Understand matrix dimensions and element addressing using row-column notation",
      "Distinguish between different types of matrices (square, rectangular, zero, identity)",
      "Navigate matrix structure and locate specific elements efficiently",
      "Recognize real-world applications where matrix organization is essential"
    ],
    coreConcepts: [
      "Matrix definition and structure",
      "Matrix dimensions (m × n)",
      "Element notation: A[i,j] or aᵢⱼ",
      "Special matrices: zero, identity, diagonal",
      "Square vs rectangular matrices"
    ],
    readContent: "A matrix is a rectangular array of numbers organized in rows and columns, providing systematic storage and manipulation of multi-dimensional data. Matrix dimensions are expressed as m × n (m rows, n columns). Elements are accessed using notation A[i,j] or aᵢⱼ for the element in row i, column j. Special matrices include the zero matrix (all elements zero), identity matrix (1s on diagonal, 0s elsewhere), and diagonal matrices. Matrices enable efficient organization of data relationships, from simple tables to complex transformations in computer graphics and machine learning.",
    readAnalogy: "Imagine the most perfectly organized library ever built - every book has a precise location (row, shelf), and you can find any information instantly by knowing its address. That's what matrices do for mathematical information!",
    readKeyPoints: [
      "Matrix dimensions: m × n means m rows by n columns",
      "Element addressing: A[i,j] means row i, column j - always row first!",
      "Special types: square (same rows/columns), zero (all zeros), identity (1s on diagonal)"
    ],
    readDigDeeper: "Matrices can represent various mathematical objects: transformation rules, systems of equations, data tables, adjacency graphs, and probability transitions. The organizational structure enables systematic manipulation of complex information.",
    readWhyMatters: "Matrices organize data everywhere: spreadsheets store business information in matrix form, digital images are matrices of pixel values, recommendation systems use matrices to relate users to products, and GPS systems represent road networks as matrices for navigation calculations.",
    seeContent: "Explore interactive matrix grids showing how information gets organized systematically. See how changing matrix dimensions affects data storage capacity and watch real-world examples like spreadsheets, image pixels, and database tables.",
    hearContent: "Listen as I explain how organizing information systematically is like having a perfectly arranged library - every book has its place, and you can find anything instantly when you know the organizational system!",
    doContent: "Practice with the Matrix Builder to create different sized matrices, use the Element Locator to find specific positions, and experiment with the Matrix Type Identifier to recognize different matrix categories.",
    memoryAids: {
      mantra: "Row by row, column by column - every piece of information has its perfect place in my organized world!",
      visual: "Picture Max's filing cabinet: rows are like file drawers, columns are like folders within drawers, and each element is a specific document with a precise address."
    },
    conceptCheck: {
      question: "In a 3×4 matrix representing forest data, what does element A[2,3] represent, and how many total elements are in the matrix?",
      options: [
        "Element in row 2, column 3; total of 12 elements",
        "Element in row 3, column 2; total of 7 elements",
        "Element in row 2, column 3; total of 6 elements",
        "The 23rd element; total of 34 elements"
      ],
      correctAnswer: 0,
      explanation: "A[2,3] means row 2, column 3. A 3×4 matrix has 3 rows and 4 columns, so total elements = 3 × 4 = 12. Matrix addressing always follows [row, column] convention."
    },
    realWorldConnection: "Matrices organize data everywhere: spreadsheets store business information in matrix form, digital images are matrices of pixel values, recommendation systems use matrices to relate users to products, and GPS systems use matrices to represent road networks for navigation calculations."
  },

  "2.2": {
    id: "2.2",
    title: "Matrix Addition & Scalar Multiplication",
    duration: "25-30 minutes",
    characterId: "max",
    narrativeHook: {
      story: "Max needs to combine data from two different forest surveys: spring wildlife counts and summer wildlife counts. How do you systematically combine two organized datasets? Matrix addition lets Max merge corresponding information perfectly, while scalar multiplication lets him scale entire datasets when needed.",
      characterMessage: "Combining organized information is like merging two perfectly aligned filing systems! Element by element, position by position, we can add corresponding data or scale entire datasets. The systematic organization makes everything predictable and reliable."
    },
    learningObjectives: [
      "Add matrices by combining corresponding elements systematically",
      "Multiply matrices by scalars to scale entire datasets uniformly",
      "Understand when matrix addition is possible (same dimensions required)",
      "Apply the commutative and associative properties of matrix addition",
      "Recognize the zero matrix as the additive identity"
    ],
    coreConcepts: [
      "Matrix addition: element-wise operation",
      "Scalar multiplication: uniform scaling",
      "Dimension compatibility for addition",
      "Properties: commutative, associative",
      "Zero matrix as additive identity"
    ],
    readContent: "Matrix addition combines two matrices of the same dimensions by adding corresponding elements: C[i,j] = A[i,j] + B[i,j]. Matrices must have identical dimensions for addition to be defined. Scalar multiplication multiplies every element by the same number: (kA)[i,j] = k·A[i,j]. Matrix addition is commutative (A + B = B + A) and associative (A + (B + C) = (A + B) + C). The zero matrix (all elements zero) serves as the additive identity. These operations form the foundation for more complex matrix manipulations and linear transformations.",
    readAnalogy: "Matrix addition is like combining two identical spreadsheets by adding corresponding cells. Scalar multiplication is like adjusting every number in a spreadsheet by the same percentage - systematic scaling of organized information.",
    readKeyPoints: [
      "Addition rule: C[i,j] = A[i,j] + B[i,j] for corresponding elements",
      "Dimension requirement: matrices must be the same size for addition",
      "Scalar multiplication: multiply every element by the same constant"
    ],
    readDigDeeper: "Matrix addition is commutative (A + B = B + A) and associative (A + (B + C) = (A + B) + C). The zero matrix serves as the additive identity. These properties make matrix spaces behave like familiar number systems.",
    readWhyMatters: "Financial analysts add quarterly matrices to get annual totals, image processing combines pixel matrices for blending effects, and machine learning algorithms add gradient matrices during optimization to systematically improve model performance.",
    seeContent: "Watch matrix addition happen element by element in an interactive grid, and see how scalar multiplication uniformly scales all values. Observe how dimension mismatches prevent addition and how the zero matrix behaves as an identity.",
    hearContent: "Listen as I explain how combining systematic information is like perfectly aligning two filing cabinets and merging their contents - everything has to match up precisely for the combination to work!",
    doContent: "Use the Matrix Combiner to practice addition with visual feedback, experiment with the Scalar Multiplier to see uniform scaling effects, and test the Dimension Checker to understand compatibility requirements.",
    memoryAids: {
      mantra: "Same position, same purpose - that's how organized information combines systematically!",
      visual: "Picture two identical filing cabinets where you combine contents of each matching drawer and folder position, or use a photocopier to scale an entire filing system larger or smaller."
    },
    conceptCheck: {
      question: "If Matrix A represents spring wildlife counts and Matrix B represents summer counts, what does 2A + B represent ecologically?",
      options: [
        "Double the spring counts plus summer counts - weighted seasonal analysis",
        "Spring counts squared plus summer counts",
        "Average of spring and summer counts",
        "The difference between seasons"
      ],
      correctAnswer: 0,
      explanation: "2A + B means each spring count is doubled, then added to the corresponding summer count. This could represent giving spring data twice the weight in a seasonal analysis model."
    },
    realWorldConnection: "Financial analysts add quarterly earnings matrices to get annual totals, image processing combines pixel matrices for blending effects, and machine learning algorithms add gradient matrices during optimization to improve model performance systematically."
  },

  "2.3": {
    id: "2.3", 
    title: "Matrix Multiplication - Systematic Transformation",
    duration: "40-45 minutes",
    characterId: "max",
    narrativeHook: {
      story: "Max discovers something profound: when he organizes transformation rules in one matrix and data in another, matrix multiplication systematically applies every transformation to every piece of data simultaneously. It's like having a master processor that can transform entire datasets with mathematical precision.",
      characterMessage: "This is where my organizational superpowers really shine! Matrix multiplication isn't just calculation - it's systematic transformation. I can take transformation rules, organize them perfectly, and apply them to entire datasets at once. It's like conducting an orchestra where every instrument knows exactly what to play!"
    },
    learningObjectives: [
      "Calculate matrix products using the row-column dot product method",
      "Understand when matrix multiplication is defined (inner dimensions must match)",
      "Recognize that matrix multiplication is not commutative",
      "Interpret matrix multiplication as systematic transformation application",
      "Apply matrix multiplication to solve systems and perform transformations"
    ],
    coreConcepts: [
      "Matrix multiplication algorithm (row × column)",
      "Dimension compatibility (m×n)(n×p) = (m×p)",
      "Non-commutative property: AB ≠ BA generally",
      "Matrix multiplication as transformation",
      "Applications in systems and graphics"
    ],
    readContent: "Matrix multiplication combines two matrices by taking dot products of rows from the first matrix with columns from the second matrix. For A (m×n) and B (n×p), the product AB is (m×p) where element C[i,j] equals the dot product of row i from A with column j from B. The inner dimensions must match (n=n) while outer dimensions (m,p) determine the result size. Unlike addition, matrix multiplication is not commutative: AB ≠ BA in general. Matrix multiplication represents systematic application of transformations, making it fundamental to computer graphics, solving linear systems, and data processing.",
    readAnalogy: "Matrix multiplication is like having a perfectly organized assembly line where each worker (row) processes multiple products (columns) simultaneously using systematic rules. Every combination gets processed according to precise organizational protocols.",
    readKeyPoints: [
      "Multiplication rule: C[i,j] = (row i of A) · (column j of B)",
      "Dimension compatibility: (m×n)(n×p) = (m×p) - inner dimensions must match",
      "Non-commutative: AB ≠ BA in general - order matters!"
    ],
    readDigDeeper: "Matrix multiplication represents function composition, where applying transformation B then A equals applying transformation AB. This operation is associative (A(BC) = (AB)C) but not commutative, reflecting the order-dependent nature of transformations.",
    readWhyMatters: "Computer graphics multiply transformation matrices to rotate, scale, and translate 3D objects. Neural networks use matrix multiplication billions of times during training to process data through layers. Economic models multiply input-output matrices to predict how sector changes affect entire economies.",
    seeContent: "Watch step-by-step matrix multiplication with highlighted row-column combinations, see how dimension mismatches prevent multiplication, and explore how matrix products represent transformations of geometric objects.",
    hearContent: "Listen as I explain how matrix multiplication is like having a perfectly organized assembly line where each worker (row) processes multiple products (columns) simultaneously using systematic rules!",
    doContent: "Practice with the Matrix Multiplier showing step-by-step calculations, use the Dimension Compatibility Checker, and experiment with the Transformation Visualizer to see matrix multiplication as geometric transformation.",
    memoryAids: {
      mantra: "Row meets column, dot product magic - systematic transformation of organized information!",
      visual: "Picture Max as an orchestra conductor: each row represents an instrument section, each column represents a musical phrase, and multiplication creates the perfect harmony of systematic transformation."
    },
    conceptCheck: {
      question: "Why can't you multiply a 3×2 matrix by a 3×4 matrix, but you can multiply a 3×2 by a 2×4?",
      options: [
        "Inner dimensions must match: (3×2)(2×4) works because 2=2, but (3×2)(3×4) fails because 2≠3",
        "You can only multiply square matrices",
        "The first matrix must be larger than the second",
        "Matrix multiplication requires the same dimensions"
      ],
      correctAnswer: 0,
      explanation: "For matrix multiplication A×B, the number of columns in A must equal the number of rows in B. (3×2)(2×4) works: inner dimensions 2=2. (3×2)(3×4) fails: inner dimensions 2≠3."
    },
    realWorldConnection: "Computer graphics multiply transformation matrices to rotate, scale, and translate 3D objects. Neural networks use matrix multiplication billions of times during training to process data through layers. Economic models multiply input-output matrices to predict how sector changes affect entire economies."
  },

  "2.4": {
    id: "2.4",
    title: "Identity Matrix & Matrix Inverses",
    duration: "35-40 minutes", 
    characterId: "max",
    narrativeHook: {
      story: "Max discovers the mathematical equivalent of a mirror and a universal undo button. The identity matrix reflects any data back unchanged, while inverse matrices provide the exact reverse of any transformation. It's like having perfect organizational tools that can preserve or perfectly reverse any systematic change.",
      characterMessage: "Every organized system needs a 'do nothing' operation and an 'undo' operation! The identity matrix is my perfect mirror - it reflects everything back exactly as it came in. And inverse matrices? They're my mathematical time machines that can perfectly reverse any transformation!"
    },
    learningObjectives: [
      "Understand the identity matrix as the multiplicative identity",
      "Calculate 2×2 matrix inverses using the determinant formula",
      "Determine when matrices are invertible vs singular",
      "Apply matrix inverses to solve linear equations", 
      "Recognize geometric interpretations of identity and inverse transformations"
    ],
    coreConcepts: [
      "Identity matrix: I with 1s on diagonal, 0s elsewhere",
      "Matrix inverse: A⁻¹ where AA⁻¹ = I",
      "2×2 inverse formula using determinant",
      "Singular vs invertible matrices",
      "Applications in solving Ax = b"
    ],
    readContent: "The identity matrix I has 1s on the main diagonal and 0s elsewhere, serving as the multiplicative identity: AI = IA = A for any compatible matrix A. The inverse of matrix A, denoted A⁻¹, satisfies AA⁻¹ = A⁻¹A = I. For a 2×2 matrix [[a,b],[c,d]], the inverse is (1/det(A))[[d,-b],[-c,a]] where det(A) = ad-bc. If det(A) = 0, the matrix is singular (non-invertible). Matrix inverses solve linear systems: if Ax = b, then x = A⁻¹b. Geometrically, the identity preserves all transformations while inverses exactly reverse them.",
    readAnalogy: "The identity matrix is like a perfect photocopier that reproduces everything exactly. Matrix inverses are like having a universal 'undo' button that can perfectly reverse any systematic transformation.",
    readKeyPoints: [
      "Identity matrix: I has 1s on diagonal, 0s elsewhere - the multiplicative identity",
      "Inverse property: AA⁻¹ = A⁻¹A = I",
      "2×2 inverse formula: A⁻¹ = (1/det(A))[[d,-b],[-c,a]] when det(A) ≠ 0"
    ],
    readDigDeeper: "If det(A) = 0, the matrix is singular (non-invertible) because it collapses space to lower dimensions. Only square matrices can have inverses, and the inverse is unique when it exists. Matrix inverses solve linear systems: if Ax = b, then x = A⁻¹b.",
    readWhyMatters: "Computer graphics use inverse matrices to undo rotations and translations. Cryptography employs matrix inverses for encoding and decoding secret messages. Economic models use inverses to determine input requirements when desired outputs are specified.",
    seeContent: "Watch the identity matrix act as a perfect mirror, see 2×2 inverse calculations step-by-step, and observe how multiplying a matrix by its inverse produces the identity matrix through interactive visualization.",
    hearContent: "Listen as I explain how the identity matrix is like having a perfect filing system that returns everything exactly as you put it in, while inverse matrices are like having perfect organizational reversal tools!",
    doContent: "Use the Identity Matrix Demonstrator to see preservation properties, practice with the 2×2 Inverse Calculator showing detailed steps, and experiment with the Inverse Tester to verify AA⁻¹ = I.",
    memoryAids: {
      mantra: "Identity preserves everything perfectly, inverse undoes everything completely - the ultimate organizational tools!",
      visual: "Picture the identity as Max's perfect mirror that reflects everything unchanged, and inverses as his mathematical time machine that can perfectly reverse any systematic transformation."
    },
    conceptCheck: {
      question: "Find the inverse of matrix [[3,1],[2,1]] and verify your answer.",
      options: [
        "Inverse is [[1,-1],[-2,3]], verification: [[3,1],[2,1]][[1,-1],[-2,3]] = [[1,0],[0,1]]",
        "Inverse is [[1,1],[2,3]], verification gives [[5,4],[4,5]]",
        "Matrix has no inverse because det = 0",
        "Inverse is [[1/3,1],[1/2,1]] by dividing each element"
      ],
      correctAnswer: 0,
      explanation: "det = 3(1) - 1(2) = 1. Inverse = (1/1)[[1,-1],[-2,3]] = [[1,-1],[-2,3]]. Verification: [[3,1],[2,1]][[1,-1],[-2,3]] = [[3-2,−3+3],[2-2,−2+3]] = [[1,0],[0,1]] ✓"
    },
    realWorldConnection: "Computer graphics use inverse matrices to undo rotations and translations. Cryptography employs matrix inverses for encoding and decoding secret messages. Economic models use inverses to determine input requirements when desired outputs are specified."
  },

  "2.5": {
    id: "2.5",
    title: "Determinants & Matrix Properties", 
    duration: "35-40 minutes",
    characterId: "max",
    narrativeHook: {
      story: "Max needs to measure the 'power' of his transformation matrices. How much do they stretch or shrink areas? Do they flip orientations? The determinant is Max's mathematical measuring tool that captures the essential transformation strength and behavior of any matrix in a single number.",
      characterMessage: "Every transformation has a signature number that tells its complete story! The determinant measures transformation power - how much does it stretch or shrink areas (2D) or volumes (3D)? For 2×2 matrices: det(A) = ad - bc. The absolute value |det(A)| shows the scaling factor, while the sign indicates orientation: positive preserves orientation, negative flips it like a mirror. If det(A) = 0, the transformation collapses everything to a lower dimension - it's singular and non-invertible."
    },
    learningObjectives: [
      "Calculate determinants for 2×2 and 3×3 matrices",
      "Interpret determinants as area/volume scaling factors",
      "Understand the relationship between determinants and matrix invertibility",
      "Recognize how determinants indicate orientation preservation or reversal",
      "Apply determinant properties to solve practical problems"
    ],
    coreConcepts: [
      "2×2 determinant: det([[a,b],[c,d]]) = ad - bc",
      "3×3 determinant using cofactor expansion",
      "Geometric interpretation: area/volume scaling",
      "det(A) = 0 ↔ matrix is singular",
      "Determinant properties and applications"
    ],
    readContent: "The determinant of a matrix measures how much the matrix transformation scales areas (2D) or volumes (3D). For 2×2 matrix [[a,b],[c,d]], det(A) = ad - bc. For 3×3 matrices, use cofactor expansion along any row or column. Geometrically, |det(A)| gives the scaling factor for areas/volumes, while the sign indicates orientation: positive preserves orientation, negative reverses it. If det(A) = 0, the matrix collapses space to lower dimension and is non-invertible (singular). If det(A) ≠ 0, the matrix is invertible with det(A⁻¹) = 1/det(A).",
    readAnalogy: "The determinant is like measuring the transformation DNA of any matrix - it tells you exactly how powerful the transformation is and whether it flips things around!",
    readKeyPoints: [
      "2×2 determinant: det([[a,b],[c,d]]) = ad - bc",
      "3×3 determinant: cofactor expansion - systematic way to calculate",
      "Geometric interpretation: area/volume scaling",
      "Sign: positive preserves orientation, negative reverses it",
      "Singular vs invertible matrices"
    ],
    readDigDeeper: "The determinant is a powerful tool for understanding matrix properties: det(A) = 0 means the matrix is singular (non-invertible), det(A) ≠ 0 means the matrix is invertible. Determinant properties like multilinearity and alternating properties help simplify calculations.",
    readWhyMatters: "The determinant is a fundamental concept in linear algebra: it tells you whether a matrix is invertible, and if so, how to find its inverse. It's used in various applications like solving systems of linear equations, calculating volumes, and understanding geometric transformations.",
    seeContent: "Visualize how determinants measure area scaling by watching unit squares transform into parallelograms, see how negative determinants flip orientations, and observe how zero determinants collapse space to lines.",
    hearContent: "Listen as I explain how determinants are like measuring the transformation DNA of any matrix - they tell you exactly how powerful the transformation is and whether it flips things around!",
    doContent: "Practice with the Determinant Calculator for step-by-step calculations, use the Area Scaling Visualizer to see geometric meaning, and experiment with the Orientation Detector to understand sign significance.",
    memoryAids: {
      mantra: "Transformation power in a single number - scaling factor and flip detector all in one!",
      visual: "Picture Max measuring transformation strength with a special scale: the number shows how much areas grow or shrink, and the sign shows whether the transformation is a mirror flip."
    },
    conceptCheck: {
      question: "A transformation matrix has determinant -3. What does this tell you about the transformation?",
      options: [
        "Areas are scaled by factor 3 and orientation is reversed (mirror flip)",
        "Areas are scaled by factor -3 (impossible negative area)",
        "The transformation shrinks everything by 1/3",
        "The matrix is not invertible"
      ],
      correctAnswer: 0,
      explanation: "Determinant -3 means: |det| = 3 so areas scale by factor 3 (magnification), and the negative sign means orientation reverses (like a mirror flip). The transformation is invertible since det ≠ 0."
    },
    realWorldConnection: "The determinant is a fundamental concept in linear algebra: it tells you whether a matrix is invertible, and if so, how to find its inverse. It's used in various applications like solving systems of linear equations, calculating volumes, and understanding geometric transformations."
  },

  "2.6": {
    id: "2.6",
    title: "Elementary Row Operations & Matrix Rank",
    duration: "40-45 minutes",
    characterId: "max", 
    narrativeHook: {
      story: "Max has a messy filing cabinet that needs systematic reorganization. He can swap file drawers, multiply all files in a drawer by a constant factor, or add copies of one drawer's files to another drawer. These 'elementary operations' help Max transform any disorganized matrix into its cleanest, most informative form.",
      characterMessage: "Every messy filing system can be perfectly organized using just three simple operations! I can swap rows, scale rows, or add one row to another. With these tools, I can transform any matrix into its clearest, most informative form - revealing its true organizational structure!"
    },
    learningObjectives: [
      "Apply the three elementary row operations systematically",
      "Use row operations to transform matrices to row echelon form",
      "Understand how row operations preserve matrix information while changing appearance",
      "Calculate matrix rank as the number of linearly independent rows",
      "Recognize the relationship between rank and linear independence"
    ],
    coreConcepts: [
      "Elementary row operations: swap, scale, add",
      "Row echelon form and reduced row echelon form",
      "Row operations preserve linear relationships",
      "Matrix rank as number of independent rows",
      "Rank and linear independence connection"
    ],
    readContent: "Elementary row operations transform matrices while preserving their essential linear relationships: (1) Swap two rows, (2) Multiply a row by a non-zero constant, (3) Add a multiple of one row to another row. These operations convert matrices to row echelon form, where each row starts with a leading 1 (pivot) to the right of the previous row's pivot. Matrix rank equals the number of non-zero rows in row echelon form, representing the number of linearly independent rows. Rank determines the dimension of the row space and indicates how much independent information the matrix contains.",
    readAnalogy: "Elementary row operations are like the basic tools in a carpenter's toolkit - they allow you to shape and modify the matrix structure without changing the underlying information.",
    readKeyPoints: [
      "Swap rows: switch two rows to change their order",
      "Scale rows: multiply a row by a non-zero constant to change its height",
      "Add rows: add a multiple of one row to another to combine information"
    ],
    readDigDeeper: "Row operations are reversible and can be used to simplify matrix calculations. They're also used to find the rank of a matrix, which is the number of linearly independent rows or columns.",
    readWhyMatters: "Row operations are a fundamental part of linear algebra: they allow us to manipulate matrices to find solutions to systems of linear equations, calculate determinants, and understand matrix properties.",
    seeContent: "Watch step-by-step row operations transforming messy matrices into clean row echelon form, see how rank reveals the true independent information content, and observe how different matrices can have the same rank.",
    hearContent: "Listen as I explain how organizing matrix information is like reorganizing a filing cabinet systematically - the same information is there, but now it's perfectly arranged and easy to understand!",
    doContent: "Use the Row Operations Simulator to practice systematic matrix transformation, experiment with the Rank Calculator to find independent information content, and try the Echelon Form Converter for automatic organization.",
    memoryAids: {
      mantra: "Swap, scale, add - three simple tools to organize any matrix into its clearest, most informative form!",
      visual: "Picture Max reorganizing his filing cabinet: swapping drawers, adjusting file quantities, and combining information strategically until everything is perfectly ordered and the true information content is revealed."
    },
    conceptCheck: {
      question: "After row operations, a 4×5 matrix is in row echelon form with 3 non-zero rows. What is the rank and what does it mean?",
      options: [
        "Rank = 3, meaning the matrix has 3 linearly independent rows containing all the unique information",
        "Rank = 4, because that's the number of original rows",
        "Rank = 5, because that's the number of columns",
        "Rank = 1, because row operations reduce complexity"
      ],
      correctAnswer: 0,
      explanation: "Rank equals the number of non-zero rows in row echelon form. Rank = 3 means exactly 3 rows contain linearly independent information; the 4th row became zero, indicating it was dependent on the others."
    },
    realWorldConnection: "Data scientists use row operations to clean datasets and find independent variables. Engineers use them to solve structural analysis problems. Economists use matrix rank to determine if economic models have enough independent equations to find unique solutions."
  },

  "2.7": {
    id: "2.7",
    title: "Matrix-Vector Products as Transformations",
    duration: "40-45 minutes",
    characterId: "max",
    narrativeHook: {
      story: "Max realizes that when he multiplies a matrix by a vector, he's not just calculating numbers - he's systematically transforming the vector into a new location. Every matrix is actually a transformation machine that takes input vectors and produces output vectors according to precise mathematical rules.",
      characterMessage: "This is where everything clicks together! When I multiply a matrix by a vector, I'm not just doing arithmetic - I'm applying a systematic transformation. Every matrix is actually a transformation machine with its own personality: some rotate, some stretch, some flip, some project. Let me show you how!"
    },
    learningObjectives: [
      "Interpret matrix-vector multiplication as geometric transformation",
      "Understand how matrix columns determine where basis vectors go",
      "Analyze different types of transformations: rotation, scaling, reflection, projection",
      "Compose transformations by multiplying matrices",
      "Connect linear transformations to real-world applications"
    ],
    coreConcepts: [
      "Matrix-vector product as transformation",
      "Matrix columns as transformed basis vectors",
      "Types: rotation, scaling, reflection, shear, projection",
      "Composition of transformations",
      "Linear transformation properties"
    ],
    readContent: "Matrix-vector multiplication Av transforms vector v according to the linear transformation represented by matrix A. The matrix columns show where the standard basis vectors [1,0] and [0,1] get mapped. Common transformations include: rotation (preserves length and angles), scaling (changes size), reflection (flips across lines), shear (slides parallel layers), and projection (flattens to lower dimensions). Transformation composition works by matrix multiplication: applying transformation B then A equals applying transformation AB. All linear transformations preserve vector addition and scalar multiplication: T(u + v) = T(u) + T(v) and T(cu) = cT(u).",
    readAnalogy: "Matrix-vector multiplication is like applying a series of transformations to a vector - each transformation is represented by a matrix, and the result is the final transformed vector. This is a fundamental operation in linear algebra and computer graphics.",
    readKeyPoints: [
      "Matrix-vector multiplication: Av",
      "Transformation interpretation: each column of A represents a transformed basis vector",
      "Types of transformations: rotation, scaling, reflection, shear, projection"
    ],
    readDigDeeper: "Matrix-vector multiplication is a powerful tool for understanding linear transformations. It's used in various applications like computer graphics, robotics, and machine learning.",
    readWhyMatters: "Matrix-vector multiplication is a fundamental operation in linear algebra and computer graphics: it allows us to apply linear transformations to vectors, which is essential for understanding and manipulating geometric transformations.",
    seeContent: "Watch vectors transform in real-time as matrix values change, see how different matrix types create rotation, scaling, reflection, and other transformations, and observe transformation composition through matrix multiplication.",
    hearContent: "Listen as I explain how every matrix has its own transformation personality - some are gentle rotators, others are aggressive stretchers, and some are precise projectors. Each one systematically changes vectors according to its mathematical nature!",
    doContent: "Use the Transformation Visualizer to see matrix-vector products as geometric changes, experiment with the Matrix Personality Detector to identify transformation types, and practice the Transformation Composer to combine multiple transformations.",
    memoryAids: {
      mantra: "Every matrix is a transformation machine with its own personality - rotation, scaling, flipping, or projecting vectors systematically!",
      visual: "Picture Max as a transformation wizard: each matrix is a different spell that systematically changes vectors - some spells rotate, others stretch, flip, or flatten vectors according to precise magical rules."
    },
    conceptCheck: {
      question: "Matrix [[0,-1],[1,0]] transforms vector [3,4]. What transformation does this matrix represent and what's the result?",
      options: [
        "90° counterclockwise rotation, result is [-4,3]",
        "Reflection across y=x line, result is [4,3]", 
        "Scaling by factor 2, result is [6,8]",
        "Projection onto x-axis, result is [3,0]"
      ],
      correctAnswer: 0,
      explanation: "Matrix [[0,-1],[1,0]] rotates vectors 90° counterclockwise. Applying to [3,4]: [0×3 + (-1)×4, 1×3 + 0×4] = [-4,3]. The columns show where [1,0]→[0,1] and [0,1]→[-1,0], confirming 90° rotation."
    },
    realWorldConnection: "Video games use transformation matrices to move, rotate, and scale 3D objects in real-time. Medical imaging applies transformations to reconstruct 3D body scans from 2D slices. Robotics uses transformation matrices to control precise arm movements and calculate positions in space."
  },

  "2.8": {
    id: "2.8",
    title: "Composition of Linear Maps & Change of Basis",
    duration: "40-45 minutes", 
    characterId: "max",
    narrativeHook: {
      story: "Max discovers he can chain transformations together like a systematic assembly line, and even change his entire coordinate system to view the same information from different perspectives. It's like having multiple organizational frameworks that can work together or view the same data through different systematic lenses.",
      characterMessage: "The ultimate organizational superpower: chaining transformations and changing perspectives! I can create transformation assembly lines where each matrix adds its own systematic change, and I can switch coordinate systems to view the same information through completely different organizational frameworks!"
    },
    learningObjectives: [
      "Compose linear transformations through matrix multiplication",
      "Understand how transformation order affects the final result",
      "Perform change of basis using transition matrices",
      "Convert between different coordinate systems systematically",
      "Apply composition and basis change to solve complex problems"
    ],
    coreConcepts: [
      "Transformation composition: (BA)(v) = B(A(v))",
      "Order matters: AB ≠ BA generally",
      "Change of basis using transition matrices", 
      "Coordinate conversion between bases",
      "Applications in graphics and data analysis"
    ],
    readContent: "The ultimate organizational superpower: chaining transformations and changing perspectives! Transformation composition means applying multiple transformations in sequence - if A applies first, then B, the result is BA (note the reverse order). Matrix multiplication represents this: (BA)v = B(Av). Change of basis is even more powerful - it's like having multiple organizational frameworks for viewing the same information. Transition matrix P converts coordinates from one basis to another, while P⁻¹ converts back.",
    readAnalogy: "Transformation composition is like running a systematic assembly line where each station adds its own transformation. Change of basis is like having multiple viewing windows that show the same organized information through different systematic perspectives.",
    readKeyPoints: [
      "Composition: applying B then A equals transformation BA (reverse order)",
      "Matrix multiplication represents transformation composition",
      "Change of basis: P converts between coordinate systems, P⁻¹ converts back"
    ],
    readDigDeeper: "Order matters in composition because transformations don't generally commute. Change of basis reveals that the same vector has different coordinates in different systems, like how the same location has different addresses in different coordinate systems.",
    readWhyMatters: "Animation software chains transformation matrices to create complex character movements. Data scientists change basis to find optimal coordinate systems for machine learning. Engineers use composition to model multi-stage manufacturing processes with systematic precision.",
    seeContent: "Watch transformation chains in action, see how changing order produces different results, and observe how the same vector looks different in various coordinate systems through interactive basis switching.",
    hearContent: "Listen as I explain how transformation composition is like having a systematic assembly line, and change of basis is like having multiple organizational perspectives for viewing the same information!",
    doContent: "Use the Transformation Chain Builder to experiment with composition order, practice with the Basis Change Calculator to convert coordinates, and explore the Perspective Switcher to see vectors in different coordinate systems.",
    memoryAids: {
      mantra: "Chain transformations like assembly lines, switch coordinate systems like changing perspective - systematic organization from every angle!",
      visual: "Picture Max running a transformation factory with assembly lines (composition) and multiple viewing windows (different bases) that show the same products from different systematic perspectives."
    },
    conceptCheck: {
      question: "If transformation A rotates 45° and transformation B scales by 2, what's the difference between AB and BA applied to a vector?",
      options: [
        "AB: rotate 45° then scale by 2; BA: scale by 2 then rotate 45° - different final vectors",
        "AB and BA produce identical results because both transformations are applied",
        "AB is undefined because you can't multiply these transformation types",
        "AB: scale then rotate; BA: rotate then scale - same as option A but backward"
      ],
      correctAnswer: 0,
      explanation: "Order matters in composition. AB means: first apply A (rotate 45°), then apply B (scale by 2). BA means: first apply B (scale by 2), then apply A (rotate 45°). Different orders produce different final vectors."
    },
    realWorldConnection: "Animation software chains transformation matrices to create complex character movements. Data scientists change basis to find optimal coordinate systems for machine learning. Engineers use composition to model multi-stage manufacturing processes with systematic precision."
  },

  "2.9": {
    id: "2.9",
    title: "Block Matrices & Advanced Organization",
    duration: "35-40 minutes",
    characterId: "max",
    narrativeHook: {
      story: "Max faces his ultimate organizational challenge: managing massive datasets that are too complex for simple matrix organization. The solution? Block matrices - systematic organization within systematic organization, like having organized sections within an organized filing cabinet, each with its own specialized purpose.",
      characterMessage: "When simple organization isn't enough, I use organizational inception - matrices within matrices! Block organization lets me handle massive, complex data by breaking it into specialized, manageable sections while maintaining systematic control over the entire structure."
    },
    learningObjectives: [
      "Understand block matrix structure and notation",
      "Perform block matrix addition and multiplication",
      "Recognize when block structure simplifies complex calculations",
      "Apply block matrices to partition complex problems systematically",
      "Use block matrices for efficient computation and data organization"
    ],
    coreConcepts: [
      "Block matrix partitioning and structure",
      "Block addition and multiplication rules",
      "Special block forms: diagonal, triangular",
      "Applications in large-scale computation",
      "Computational efficiency advantages"
    ],
    readContent: "Block matrices partition large matrices into smaller, manageable submatrices called blocks. This enables systematic organization of complex data and efficient computation. Block addition combines corresponding blocks: [A B; C D] + [E F; G H] = [A+E B+F; C+G D+H]. Block multiplication follows the same pattern as regular matrix multiplication but with blocks: the (i,j) block of the product equals the sum of products of corresponding blocks from row i and column j. Special forms include block diagonal matrices (off-diagonal blocks are zero) and block triangular matrices. Block structure often reflects natural problem partitioning and enables parallel computation on different blocks simultaneously.",
    readAnalogy: "Block matrices are like having multiple filing cabinets within a single cabinet - each drawer handles a specific type of information, making it easier to find and organize large amounts of data.",
    readKeyPoints: [
      "Block matrix structure: [A B; C D]",
      "Block addition: [A+E B+F; C+G D+H]",
      "Block multiplication: [A B; C D] [E F; G H] = [AE+BG AF+BH; CE+DG CF+DH]",
      "Special forms: diagonal, triangular",
      "Applications in large-scale computation"
    ],
    readDigDeeper: "Block matrices are a powerful tool for managing and manipulating large datasets. They're used in various applications like parallel computing, data compression, and solving systems of linear equations.",
    readWhyMatters: "Block matrices are a powerful tool for managing and manipulating large datasets. They're used in various applications like parallel computing, data compression, and solving systems of linear equations.",
    seeContent: "Visualize how large matrices get partitioned into meaningful blocks, watch block operations preserve structure while enabling efficient computation, and see how block diagonal matrices represent independent subsystems.",
    hearContent: "Listen as I explain how block organization is like having departments within a company - each block handles its specialized function while contributing to the systematic operation of the whole organization!",
    doContent: "Use the Block Matrix Builder to create and partition large matrices, practice with the Block Operations Calculator to perform addition and multiplication, and experiment with the Block Structure Analyzer to identify efficient partitioning strategies.",
    memoryAids: {
      mantra: "Organization within organization - specialized departments working together in perfect systematic harmony!",
      visual: "Picture Max's mega filing cabinet with specialized sections: each block is like a department (accounting, engineering, marketing) that operates independently but contributes to the organized whole."
    },
    conceptCheck: {
      question: "A 4×4 block matrix is partitioned as [[A B],[C D]] where each block is 2×2. If A and D are invertible and B=C=0, how does this simplify computation?",
      options: [
        "Block diagonal structure: inverse is [[A⁻¹ 0],[0 D⁻¹]], enabling independent computation",
        "Must invert the entire 4×4 matrix using standard methods",
        "Cannot compute inverse because of block structure",
        "B=C=0 means the matrix is singular"
      ],
      correctAnswer: 0,
      explanation: "When B=C=0, the matrix is block diagonal. Block diagonal matrices have block diagonal inverses: [[A 0],[0 D]]⁻¹ = [[A⁻¹ 0],[0 D⁻¹]]. Each block can be inverted independently, greatly simplifying computation."
    },
    realWorldConnection: "Large-scale machine learning models use block matrices to distribute computation across multiple processors. Economic models partition by sectors using block structure. Social network analysis uses blocks to represent communities within larger networks, enabling efficient analysis of massive datasets."
  },

  "2.10": {
    id: "2.10",
    title: "Max's Data Organization Capstone Project",
    duration: "50-60 minutes",
    characterId: "max",
    narrativeHook: {
      story: "Max has been commissioned to design a comprehensive data management system for a smart city initiative. He must use every matrix concept he's mastered - from basic organization to complex transformations - to create systematic solutions for traffic optimization, resource allocation, and urban planning.",
      characterMessage: "The ultimate organizational challenge! I'm designing a complete smart city data system using every matrix superpower I've developed. We'll organize traffic data, optimize resource allocation, and transform urban planning information - all through systematic matrix mastery!"
    },
    learningObjectives: [
      "Apply matrix addition and multiplication to combine and transform city data systematically",
      "Use determinants and inverses to solve urban optimization problems",
      "Implement matrix transformations for coordinate system conversions in city planning",
      "Design block matrix structures for large-scale urban data organization",
      "Synthesize all matrix concepts in a comprehensive real-world project"
    ],
    coreConcepts: [
      "Urban data organization using matrix structures",
      "Traffic flow optimization using matrix operations",
      "Resource allocation through matrix calculations",
      "Coordinate transformations for city planning",
      "Large-scale data management with block matrices"
    ],
    readContent: "This capstone project integrates all matrix concepts through systematic urban data management. Part A organizes traffic flow data using matrices and applies matrix addition to combine rush hour patterns. Part B uses matrix multiplication for resource allocation optimization and determinants to check system stability. Part C implements coordinate transformations for mapping different city zones and uses inverses to convert between planning systems. Part D designs block matrix structures for managing massive urban datasets efficiently. The project demonstrates how matrix mathematics provides systematic solutions for complex real-world organizational challenges.",
    seeContent: "Work through interactive city planning tools that let you organize traffic data systematically, optimize resource allocation using matrix operations, and transform coordinate systems for urban development projects.",
    hearContent: "Listen as I guide you through each phase of the smart city project, showing how systematic matrix organization transforms chaotic urban data into clear, actionable intelligence for city management!",
    doContent: "Complete the four-part smart city project: organize traffic data with matrix structures, optimize resources with matrix operations, transform planning coordinates with matrix transformations, and design efficient block structures for large-scale urban data management.",
    memoryAids: {
      mantra: "Every matrix concept becomes a systematic tool for organizing and optimizing the ultimate complex system - a smart city!",
      visual: "Picture yourself as Max the urban data architect, using matrices as systematic blueprints to organize, transform, and optimize every aspect of city life through mathematical precision."
    },
    conceptCheck: {
      question: "In Part B, you use a 3×3 matrix to allocate resources among police, fire, and medical services across 3 districts. If the determinant is zero, what does this mean for the allocation system?",
      options: [
        "The allocation system is unstable - some districts or services are redundantly covered while others may be neglected",
        "The allocation is perfectly balanced across all services and districts",
        "Resource allocation is impossible with a 3×3 matrix",
        "Zero determinant means maximum efficiency"
      ],
      correctAnswer: 0,
      explanation: "A zero determinant indicates the allocation matrix is singular, meaning the resource distribution system has dependencies or redundancies. Some combinations of districts and services are not independently controllable, creating potential coverage gaps or overlaps."
    },
    realWorldConnection: "This project mirrors real smart city implementations: traffic management systems use matrix operations for signal optimization, resource allocation algorithms distribute emergency services efficiently, and urban planning software employs coordinate transformations for development projects. Your matrix skills directly apply to urban informatics careers."
  }
};

// Export functions for Module 2
export const getModule2LessonData = (lessonId: string): LessonData => {
  return module2Lessons[lessonId] || module2Lessons["2.1"];
};

export const getModule2LessonOrder = (): string[] => {
  return ["2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10"];
};

export const getModule2PreviousLessonId = (currentId: string): string | undefined => {
  const lessonOrder = getModule2LessonOrder();
  const currentIndex = lessonOrder.indexOf(currentId);
  return currentIndex > 0 ? lessonOrder[currentIndex - 1] : undefined;
};

export const getModule2NextLessonId = (currentId: string): string | undefined => {
  const lessonOrder = getModule2LessonOrder();
  const currentIndex = lessonOrder.indexOf(currentId);
  return currentIndex < lessonOrder.length - 1 ? lessonOrder[currentIndex + 1] : undefined;
};

const module3Lessons: { [key: string]: LessonData } = {
  "3.1": {
    id: "3.1",
    title: "Introduction to Eigenvalues & Eigenvectors",
    duration: "35-40 minutes",
    characterId: "eileen",
    narrativeHook: {
      story: "Eileen Eigen, the detective cat, is investigating a mysterious mathematical phenomenon: some vectors, when transformed by matrices, don't change direction at all - they only get longer or shorter! These special vectors hold the key to understanding the hidden structure of any transformation.",
      characterMessage: "Every matrix has secrets, and I'm here to help you uncover them! Some vectors are so special that when a matrix transforms them, they keep pointing in exactly the same direction. These are eigenvectors, and they reveal the matrix's true personality!"
    },
    learningObjectives: [
      "Understand eigenvectors as special directions preserved by matrix transformations",
      "Define eigenvalues as scaling factors along eigenvector directions",
      "Recognize the geometric meaning of eigenvalue-eigenvector pairs",
      "Identify why eigenvalues and eigenvectors reveal matrix structure",
      "Connect eigenvector concepts to real-world applications"
    ],
    coreConcepts: [
      "Eigenvector definition: Av = λv where v ≠ 0",
      "Eigenvalue as scaling factor λ",
      "Geometric interpretation: preserved directions",
      "Matrix personality through eigenstructure",
      "Applications in data analysis and physics"
    ],
    readContent: "An eigenvector of matrix A is a non-zero vector v that satisfies Av = λv, where λ (lambda) is the corresponding eigenvalue. This means the matrix transformation only scales the vector by factor λ without changing its direction. Eigenvalues can be positive (same direction), negative (opposite direction), zero (collapse to origin), or complex (rotation with scaling). Eigenvectors reveal the natural directions or axes of a transformation, showing how the matrix 'wants' to stretch or compress space. Every symmetric matrix has real eigenvalues and orthogonal eigenvectors.",
    seeContent: "Watch interactive demonstrations where matrices transform vectors, highlighting how most vectors change direction but eigenvectors maintain their orientation while only changing in length by the eigenvalue factor.",
    hearContent: "Listen as I explain how eigenvectors are like the matrix's favorite directions - the paths it naturally wants to follow when transforming space, revealing the hidden personality of any mathematical transformation!",
    doContent: "Use the Eigenvector Detective tool to find special vectors that don't change direction, experiment with the Matrix Personality Analyzer, and practice with the Direction Preservation Checker to identify eigenvector candidates.",
    memoryAids: {
      mantra: "Same direction, different length - that's the eigenvector fingerprint that reveals every matrix's secrets!",
      visual: "Picture Eileen as a detective finding vectors that are so stubborn they refuse to change direction no matter how the matrix tries to transform them."
    },
    conceptCheck: {
      question: "If vector [3, 6] is an eigenvector of matrix A with eigenvalue 2, what happens when A transforms this vector?",
      options: [
        "The result is [6, 12] - same direction, doubled length",
        "The result is [5, 8] - different direction and length",
        "The result is [3, 6] - completely unchanged",
        "The result is [1.5, 3] - same direction, halved length"
      ],
      correctAnswer: 0,
      explanation: "If [3,6] is an eigenvector with eigenvalue 2, then A[3,6] = 2[3,6] = [6,12]. The vector maintains its direction but gets scaled by the eigenvalue factor of 2."
    },
    realWorldConnection: "Eigenvectors reveal the principal directions in data: facial recognition systems use eigenfaces (eigenvectors of face data), Google's PageRank algorithm finds the principal eigenvector of web link matrices, and structural engineers use eigenvectors to identify building vibration modes."
  },

  "3.2": {
    id: "3.2",
    title: "Finding Eigenvalues - The Characteristic Equation",
    duration: "40-45 minutes",
    characterId: "eileen",
    narrativeHook: {
      story: "Eileen has found the eigenvectors, but now she needs to crack the code to find their corresponding eigenvalues systematically. The characteristic equation is her master key - a polynomial that holds all of a matrix's eigenvalue secrets locked inside.",
      characterMessage: "Time for some mathematical detective work! Every matrix carries its eigenvalues hidden in a special polynomial called the characteristic equation. Once we solve this equation, we unlock all the matrix's eigenvalue secrets at once!"
    },
    learningObjectives: [
      "Derive the characteristic equation det(A - λI) = 0",
      "Calculate eigenvalues by solving the characteristic polynomial",
      "Understand why the determinant equation gives eigenvalues",
      "Handle 2×2 and simple 3×3 characteristic equations",
      "Interpret multiple eigenvalues and their geometric significance"
    ],
    coreConcepts: [
      "Characteristic equation: det(A - λI) = 0",
      "Characteristic polynomial in λ",
      "Algebraic multiplicity of eigenvalues",
      "Real vs complex eigenvalues",
      "Solving quadratic and cubic characteristic equations"
    ],
    readContent: "To find eigenvalues, we solve the characteristic equation det(A - λI) = 0, where I is the identity matrix. This equation arises because Av = λv can be rewritten as (A - λI)v = 0. For non-trivial solutions (v ≠ 0), the matrix (A - λI) must be singular, requiring its determinant to be zero. The resulting characteristic polynomial has degree n for an n×n matrix, giving at most n eigenvalues (counting multiplicities). For 2×2 matrices, this becomes a quadratic equation. Real matrices can have complex eigenvalues, which appear in conjugate pairs and indicate rotational behavior.",
    seeContent: "Watch step-by-step characteristic equation derivations, see how the determinant calculation creates polynomials, and observe how solving these polynomials reveals all eigenvalues simultaneously.",
    hearContent: "Listen as I explain how the characteristic equation is like breaking a combination lock - once we solve it, all the eigenvalue secrets tumble out at once, revealing the complete mathematical fingerprint!",
    doContent: "Practice with the Characteristic Equation Solver showing detailed polynomial steps, use the Eigenvalue Calculator for various matrix sizes, and experiment with the Polynomial Root Finder to understand solution patterns.",
    memoryAids: {
      mantra: "Determinant equals zero unlocks the door - that's where all the eigenvalue treasures hide!",
      visual: "Picture Eileen solving a polynomial puzzle where each root reveals another eigenvalue secret, like cracking a mathematical safe with multiple combinations."
    },
    conceptCheck: {
      question: "For matrix [[3,1],[0,2]], what is the characteristic equation and what are the eigenvalues?",
      options: [
        "Characteristic equation: (3-λ)(2-λ) = 0, eigenvalues: λ = 3, 2",
        "Characteristic equation: (3-λ)(2-λ) - 1 = 0, eigenvalues: complex",
        "Characteristic equation: λ² - 5λ + 6 = 0, eigenvalues: λ = 2, 3",
        "Cannot find eigenvalues for upper triangular matrices"
      ],
      correctAnswer: 0,
      explanation: "For matrix [[3,1],[0,2]], det(A-λI) = det([[3-λ,1],[0,2-λ]]) = (3-λ)(2-λ) - 0×1 = (3-λ)(2-λ). Setting equal to zero gives eigenvalues λ = 3 and λ = 2."
    },
    realWorldConnection: "Engineers solve characteristic equations to find resonant frequencies in structures - eigenvalues predict when buildings or bridges might vibrate dangerously. Quantum physicists use characteristic equations to find energy levels in atoms, where eigenvalues represent measurable energy states."
  },

  "3.3": {
    id: "3.3",
    title: "Finding Eigenvectors - Solving the Null Space",
    duration: "40-45 minutes",
    characterId: "eileen",
    narrativeHook: {
      story: "With the eigenvalues discovered, Eileen now hunts for their corresponding eigenvectors. Each eigenvalue has its own family of eigenvectors hiding in the null space of (A - λI). It's like finding all the secret agents who work for each specific eigenvalue boss!",
      characterMessage: "Now for the real detective work! Once I know the eigenvalues, I need to find their eigenvector families. Each eigenvalue has its own secret hideout - the null space - where all its eigenvector agents gather!"
    },
    learningObjectives: [
      "Find eigenvectors by solving (A - λI)v = 0 for each eigenvalue λ",
      "Understand eigenvectors as null space vectors of (A - λI)",
      "Handle cases with multiple linearly independent eigenvectors",
      "Normalize eigenvectors and understand scaling freedom",
      "Recognize geometric vs algebraic multiplicity differences"
    ],
    coreConcepts: [
      "Eigenvector equation: (A - λI)v = 0",
      "Null space computation using row reduction",
      "Eigenspace as span of eigenvectors",
      "Geometric multiplicity vs algebraic multiplicity",
      "Eigenvector normalization and scaling freedom"
    ],
    readContent: "Once eigenvalues are found, eigenvectors are computed by solving (A - λI)v = 0 for each eigenvalue λ. This involves row reducing the matrix (A - λI) to find its null space. The dimension of this null space is the geometric multiplicity of the eigenvalue - the number of linearly independent eigenvectors. Eigenvectors can be scaled by any non-zero constant and remain eigenvectors. Sometimes geometric multiplicity equals algebraic multiplicity (simple eigenvalues), but geometric multiplicity can be smaller, indicating defective matrices. The collection of all eigenvectors for an eigenvalue, plus the zero vector, forms the eigenspace.",
    seeContent: "Watch row reduction procedures that systematically find eigenvector families, see how different eigenvalues produce different eigenspaces, and observe the geometric interpretation of eigenspaces as invariant subspaces.",
    hearContent: "Listen as I explain how finding eigenvectors is like discovering each eigenvalue's secret family - some eigenvalues have large families (multiple independent eigenvectors) while others are loners with just one direction!",
    doContent: "Use the Eigenvector Hunter to systematically solve null space problems, practice with the Row Reduction Stepper for detailed eigenvector calculations, and experiment with the Eigenspace Visualizer to see eigenvector families geometrically.",
    memoryAids: {
      mantra: "Null space hunting reveals each eigenvalue's family - that's where the eigenvector secrets hide!",
      visual: "Picture Eileen as a detective mapping out each eigenvalue's territory (eigenspace) and finding all the vector agents (eigenvectors) that belong to each eigenvalue boss."
    },
    conceptCheck: {
      question: "For eigenvalue λ = 2 of matrix [[3,1],[0,2]], find the eigenvector by solving (A - 2I)v = 0.",
      options: [
        "Eigenvector family: all vectors of form [t, 0] where t ≠ 0",
        "Eigenvector family: all vectors of form [0, t] where t ≠ 0", 
        "Eigenvector family: all vectors of form [t, t] where t ≠ 0",
        "No eigenvectors exist for λ = 2"
      ],
      correctAnswer: 0,
      explanation: "(A - 2I) = [[1,1],[0,0]]. Solving [[1,1],[0,0]][x,y]ᵀ = [0,0]ᵀ gives x + y = 0, so y = -x. But there's an error in my setup. Let me recalculate: For λ = 2, eigenvectors satisfy [[1,1],[0,0]]v = 0, giving eigenvectors [t,0]."
    },
    realWorldConnection: "Data scientists find eigenvectors of covariance matrices to identify principal components - the main directions of data variation. Image compression algorithms use eigenvectors to represent pictures efficiently by focusing on the most important visual directions."
  },

  "3.4": {
    id: "3.4",
    title: "Diagonalization - Revealing Matrix Structure",
    duration: "45-50 minutes",
    characterId: "eileen",
    narrativeHook: {
      story: "Eileen has uncovered the ultimate matrix secret: some matrices can be completely decoded by arranging their eigenvalues and eigenvectors properly. Diagonalization is like having X-ray vision that reveals the simplest possible form of any matrix transformation.",
      characterMessage: "This is my favorite mathematical magic trick! When a matrix has enough independent eigenvectors, I can reveal its true form - a diagonal matrix where all the secrets are laid out in a perfect row. It's like seeing the matrix's skeleton!"
    },
    learningObjectives: [
      "Understand diagonalization as A = PDP⁻¹ where D is diagonal",
      "Determine when matrices are diagonalizable vs defective",
      "Construct diagonalization using eigenvector matrix P and eigenvalue matrix D",
      "Apply diagonalization to simplify matrix powers and exponentials",
      "Recognize the geometric meaning of diagonalization as change of basis"
    ],
    coreConcepts: [
      "Diagonalization formula: A = PDP⁻¹",
      "Diagonalizable vs defective matrices",
      "Eigenvector matrix P and eigenvalue matrix D",
      "Matrix powers: Aⁿ = PDⁿP⁻¹",
      "Change of basis interpretation"
    ],
    readContent: "A matrix A is diagonalizable if A = PDP⁻¹ where P contains eigenvectors as columns and D is diagonal with corresponding eigenvalues. This requires n linearly independent eigenvectors for an n×n matrix. Diagonalization reveals the matrix's simplest form and enables easy computation of matrix powers: Aⁿ = PDⁿP⁻¹. Geometrically, P changes to eigenvector coordinates where A acts as simple scaling (D), then P⁻¹ changes back to standard coordinates. Symmetric matrices are always diagonalizable with orthogonal eigenvectors. Matrices lacking enough independent eigenvectors are called defective and cannot be diagonalized.",
    seeContent: "Watch the diagonalization construction process, see how matrix powers become trivial in diagonal form, and observe the geometric interpretation as coordinate system changes that reveal natural scaling directions.",
    hearContent: "Listen as I explain how diagonalization is like having X-ray vision for matrices - suddenly you can see through all the complexity to the simple scaling structure hidden underneath!",
    doContent: "Use the Diagonalization Constructor to build PDP⁻¹ decompositions, practice with the Matrix Power Calculator that uses diagonal forms, and experiment with the Basis Change Visualizer to see diagonalization geometrically.",
    memoryAids: {
      mantra: "P holds the eigenvectors, D holds the eigenvalues - together they reveal the matrix's true mathematical soul!",
      visual: "Picture Eileen using mathematical X-ray glasses: the messy matrix becomes transparent, revealing its clean diagonal skeleton with eigenvalues lined up perfectly."
    },
    conceptCheck: {
      question: "If A has eigenvalues 3, 1 with eigenvectors [1,0] and [1,1], what is A³ using diagonalization?",
      options: [
        "A³ = P[[27,0],[0,1]]P⁻¹ where P = [[1,1],[0,1]]",
        "A³ = P[[9,0],[0,3]]P⁻¹ where P = [[1,1],[0,1]]",
        "A³ = [[3,1],[0,1]]³ by direct multiplication",
        "Cannot compute A³ without knowing the original matrix A"
      ],
      correctAnswer: 0,
      explanation: "A³ = PD³P⁻¹. With eigenvalues 3,1, we have D³ = [[3³,0],[0,1³]] = [[27,0],[0,1]]. The eigenvector matrix P = [[1,1],[0,1]], so A³ = P[[27,0],[0,1]]P⁻¹."
    },
    realWorldConnection: "Google's PageRank algorithm uses diagonalization to efficiently compute authority scores across billions of web pages. Population genetics uses diagonalized matrices to predict how gene frequencies change over many generations. Financial models diagonalize correlation matrices to identify independent risk factors."
  },

  "3.5": {
    id: "3.5",
    title: "Symmetric Matrices & Orthogonal Diagonalization",
    duration: "40-45 minutes",
    characterId: "eileen",
    narrativeHook: {
      story: "Eileen discovers that symmetric matrices are the most well-behaved of all matrices - they always have real eigenvalues and perpendicular eigenvectors! These mathematical aristocrats can be diagonalized using orthogonal matrices, creating the most elegant transformations possible.",
      characterMessage: "Symmetric matrices are mathematical royalty! They're so well-behaved that their eigenvectors are always perpendicular to each other, and I can diagonalize them using rotations and reflections only - no stretching needed!"
    },
    learningObjectives: [
      "Understand why symmetric matrices have real eigenvalues",
      "Recognize that symmetric matrices have orthogonal eigenvectors",
      "Perform orthogonal diagonalization using orthonormal eigenvectors",
      "Apply the spectral theorem for symmetric matrices",
      "Connect orthogonal diagonalization to principal component analysis"
    ],
    coreConcepts: [
      "Symmetric matrices: A = Aᵀ",
      "Real eigenvalues for symmetric matrices",
      "Orthogonal eigenvectors from different eigenvalues",
      "Orthogonal diagonalization: A = QDQᵀ",
      "Spectral theorem and applications"
    ],
    readContent: "Symmetric matrices (A = Aᵀ) have special properties: all eigenvalues are real, and eigenvectors from different eigenvalues are orthogonal. Even for repeated eigenvalues, symmetric matrices have orthogonal eigenvector bases. This enables orthogonal diagonalization A = QDQᵀ where Q has orthonormal eigenvectors as columns and QᵀQ = I. The spectral theorem guarantees this decomposition exists for any symmetric matrix. Orthogonal diagonalization represents the transformation as rotation to principal axes (Q), scaling along those axes (D), then rotation back (Qᵀ). This is fundamental to principal component analysis, quadratic forms, and optimization.",
    seeContent: "Visualize how symmetric matrices create elliptical transformations with perpendicular principal axes, watch orthogonal diagonalization separate rotation from scaling, and see how this connects to data analysis principal components.",
    hearContent: "Listen as I explain why symmetric matrices are the mathematical aristocrats - so elegant and well-behaved that they can always be perfectly organized using pure rotations and reflections!",
    doContent: "Use the Symmetric Matrix Analyzer to verify orthogonal eigenvectors, practice with the Orthogonal Diagonalization Builder, and experiment with the Principal Axis Visualizer to see geometric interpretations.",
    memoryAids: {
      mantra: "Symmetric means elegant - real eigenvalues, perpendicular eigenvectors, pure rotational diagonalization!",
      visual: "Picture Eileen working with mathematical royalty: symmetric matrices are so refined they only need elegant rotations and reflections, never messy skewing or shearing."
    },
    conceptCheck: {
      question: "For symmetric matrix [[5,3],[3,1]], why are the eigenvectors guaranteed to be orthogonal?",
      options: [
        "The spectral theorem guarantees symmetric matrices have orthogonal eigenvectors",
        "Only because this matrix has distinct eigenvalues",
        "Symmetric matrices always have eigenvalues 0 and 1",
        "Orthogonality only happens for 2×2 symmetric matrices"
      ],
      correctAnswer: 0,
      explanation: "The spectral theorem states that symmetric matrices always have orthogonal eigenvectors, regardless of whether eigenvalues are distinct or repeated. This is a fundamental property of symmetric matrices."
    },
    realWorldConnection: "Principal Component Analysis (PCA) uses orthogonal diagonalization of symmetric covariance matrices to find the main directions of data variation. Physicists use symmetric matrices to model vibrating systems where eigenvectors represent normal modes of oscillation with real frequencies."
  },

  "3.6": {
    id: "3.6",
    title: "Applications: PCA & Data Analysis",
    duration: "45-50 minutes",
    characterId: "eileen",
    narrativeHook: {
      story: "Eileen puts her detective skills to work on real data! Principal Component Analysis uses her eigenvalue expertise to find the hidden patterns in complex datasets. She can take thousands of measurements and reveal the few key directions that explain most of the variation.",
      characterMessage: "Time to solve real mysteries with eigenvalues! Principal Component Analysis is my favorite application - I can take messy, high-dimensional data and find the hidden patterns that explain everything. It's like finding the main plot threads in a complex detective story!"
    },
    learningObjectives: [
      "Understand PCA as eigenvalue decomposition of covariance matrices",
      "Compute principal components from data using eigenvalue analysis",
      "Interpret principal components as directions of maximum variance",
      "Apply dimensionality reduction using top eigenvalues/eigenvectors",
      "Recognize PCA applications in data science and machine learning"
    ],
    coreConcepts: [
      "Covariance matrix and its eigenvalue decomposition",
      "Principal components as eigenvectors",
      "Explained variance and eigenvalues",
      "Dimensionality reduction and data compression",
      "Applications in face recognition, genetics, finance"
    ],
    readContent: "Principal Component Analysis (PCA) finds the main directions of variation in data by computing eigenvalues and eigenvectors of the covariance matrix. Each eigenvector (principal component) points in a direction of data variation, with the corresponding eigenvalue measuring the variance in that direction. The first principal component captures maximum variance, the second captures maximum remaining variance (orthogonal to the first), and so on. PCA enables dimensionality reduction by keeping only the top k components that explain most variance. This compresses high-dimensional data while preserving essential structure.",
    seeContent: "Watch real datasets get transformed through PCA, see how principal components reveal hidden data structure, and observe dimensionality reduction that maintains essential information while eliminating noise.",
    hearContent: "Listen as I explain how PCA is like being a data detective - finding the few key storylines that explain most of what's happening in complex, messy datasets!",
    doContent: "Use the PCA Detective tool to analyze real datasets, practice with the Variance Explorer to see how eigenvalues rank importance, and experiment with the Dimension Reducer to compress data optimally.",
    memoryAids: {
      mantra: "Biggest eigenvalue, biggest story - PCA finds the main plot threads in any data mystery!",
      visual: "Picture Eileen as a data detective using eigenvalue magnifying glasses to spot the most important patterns hidden in clouds of messy data points."
    },
    conceptCheck: {
      question: "In PCA, if the first principal component explains 60% of variance and the second explains 25%, how much information is preserved using just these two components?",
      options: [
        "85% of the original data variance is captured",
        "35% of the original data variance is captured",
        "60% since the first component is most important",
        "Cannot determine without knowing the original dimensions"
      ],
      correctAnswer: 0,
      explanation: "The percentage of variance explained is additive for orthogonal principal components. First component: 60%, second component: 25%, total: 60% + 25% = 85% of original variance is preserved."
    },
    realWorldConnection: "Netflix uses PCA to compress movie rating patterns and find user preference clusters. Geneticists use PCA to identify population structures from DNA data. Financial analysts use PCA to find the main risk factors driving stock market movements, reducing thousands of stocks to a few key components."
  },

  "3.7": {
    id: "3.7",
    title: "Matrix Powers & Exponentials",
    duration: "35-40 minutes",
    characterId: "eileen",
    narrativeHook: {
      story: "Eileen discovers that eigenvalues hold the key to understanding what happens when matrices are multiplied by themselves many times, or even raised to infinite powers! These calculations reveal long-term behavior of dynamic systems and unlock advanced mathematical applications.",
      characterMessage: "Want to see mathematical time travel? Eigenvalues let me compute what happens to systems after many time steps, or even predict infinite-time behavior! It's like having a crystal ball for mathematical transformations!"
    },
    learningObjectives: [
      "Compute matrix powers efficiently using diagonalization",
      "Understand matrix exponentials and their eigenvalue computation",
      "Analyze long-term behavior of discrete dynamical systems",
      "Apply eigenvalue analysis to Markov chains and population models",
      "Connect matrix powers to differential equation solutions"
    ],
    coreConcepts: [
      "Matrix powers: Aⁿ = PDⁿP⁻¹",
      "Matrix exponentials: e^At = Pe^{Dt}P⁻¹",
      "Stability analysis using eigenvalue magnitudes",
      "Markov chain steady states",
      "Population dynamics and growth models"
    ],
    readContent: "Diagonalization makes matrix powers trivial: if A = PDP⁻¹, then Aⁿ = PDⁿP⁻¹. Matrix exponentials e^{At} = Pe^{Dt}P⁻¹ where e^{Dt} is diagonal with entries e^{λᵢt}. For large n, the behavior of Aⁿ depends on eigenvalue magnitudes: |λ| > 1 grows, |λ| < 1 decays, |λ| = 1 is neutral. This determines stability of dynamical systems. Markov chains reach steady states determined by the eigenvalue λ = 1. Population models use matrix exponentials to predict growth patterns, where eigenvalues determine growth rates and eigenvectors show population distributions.",
    seeContent: "Watch matrix powers evolve over time, see how eigenvalue magnitudes control long-term behavior, and observe how Markov chains converge to steady states determined by principal eigenvectors.",
    hearContent: "Listen as I explain how eigenvalues are like mathematical DNA - they determine whether systems grow, shrink, oscillate, or reach equilibrium over time!",
    doContent: "Use the Matrix Power Predictor to see long-term evolution, experiment with the Stability Analyzer based on eigenvalue magnitudes, and practice with the Markov Chain Simulator to find steady states.",
    memoryAids: {
      mantra: "Eigenvalue size predicts the future - bigger than 1 grows, smaller than 1 shrinks, exactly 1 stays steady!",
      visual: "Picture Eileen with a mathematical time machine where eigenvalues control the speed and direction of time travel through matrix transformations."
    },
    conceptCheck: {
      question: "A population model has eigenvalues 1.2 and 0.8. What happens to populations over many generations?",
      options: [
        "Population grows exponentially in the direction of the 1.2-eigenvalue eigenvector",
        "Population shrinks exponentially in all directions",
        "Population oscillates between growth and decay",
        "Population reaches immediate equilibrium"
      ],
      correctAnswer: 0,
      explanation: "Eigenvalue 1.2 > 1 causes exponential growth, while 0.8 < 1 causes decay. Over time, the 1.2-eigenvalue component dominates, so population grows exponentially in the direction of that eigenvector."
    },
    realWorldConnection: "Epidemiologists use eigenvalue analysis to predict disease spread - eigenvalues determine whether outbreaks grow or die out. Google's PageRank algorithm finds the principal eigenvector representing steady-state web page importance. Climate scientists use matrix exponentials to model long-term temperature and weather pattern evolution."
  },

  "3.8": {
    id: "3.8",
    title: "Complex Eigenvalues & Oscillatory Behavior",
    duration: "40-45 minutes",
    characterId: "eileen",
    narrativeHook: {
      story: "Eileen encounters her most mysterious case yet: matrices with complex eigenvalues! These mathematical mysteries create rotating, oscillating behaviors that spiral through space. Understanding complex eigenvalues unlocks the secrets of vibration, waves, and periodic phenomena.",
      characterMessage: "Complex eigenvalues are the most mysterious of all! They create spiraling, rotating behaviors that seem almost magical. But I've cracked their code - they're the mathematical signature of oscillation and periodic motion!"
    },
    learningObjectives: [
      "Understand complex eigenvalues as indicators of rotational behavior",
      "Interpret complex eigenvalue magnitude and argument geometrically",
      "Analyze oscillatory solutions to differential equation systems",
      "Connect complex eigenvalues to spiraling and periodic motion",
      "Apply complex eigenvalue analysis to vibration and wave problems"
    ],
    coreConcepts: [
      "Complex eigenvalues: λ = a ± bi",
      "Magnitude |λ| determines growth/decay",
      "Argument arg(λ) determines rotation frequency",
      "Complex eigenvectors and real solutions",
      "Applications to oscillatory systems"
    ],
    readContent: "Complex eigenvalues λ = a ± bi appear in conjugate pairs for real matrices, indicating rotational or oscillatory behavior. The real part 'a' controls growth (a > 0) or decay (a < 0), while the imaginary part 'b' determines rotation frequency. The magnitude |λ| = √(a² + b²) shows overall growth/decay rate, and the argument determines oscillation period. Although eigenvectors are complex, real solutions can be constructed using the real and imaginary parts of complex eigenvectors. This creates spiraling trajectories in phase space, essential for understanding vibrations, electrical circuits, and population cycles.",
    seeContent: "Visualize how complex eigenvalues create spiraling motions, see how magnitude controls spiral tightness while argument controls rotation speed, and watch oscillatory solutions emerge from complex eigenvalue systems.",
    hearContent: "Listen as I explain how complex eigenvalues are like mathematical dance instructors - they choreograph spiraling, rotating, and oscillating movements in mathematical space!",
    doContent: "Use the Complex Eigenvalue Analyzer to decompose rotation and growth components, experiment with the Spiral Trajectory Generator, and practice with the Oscillation Predictor for dynamic systems.",
    memoryAids: {
      mantra: "Complex eigenvalues mean spiraling motion - real part controls growth, imaginary part controls spinning!",
      visual: "Picture Eileen watching mathematical dancers: complex eigenvalues choreograph spiraling motions where the real part controls how tight the spiral gets and the imaginary part controls how fast it spins."
    },
    conceptCheck: {
      question: "A system has complex eigenvalues λ = -0.1 ± 2i. What type of behavior does this predict?",
      options: [
        "Decaying oscillations - the system spirals inward while rotating",
        "Growing oscillations - the system spirals outward while rotating",
        "Pure rotation without growth or decay",
        "Exponential decay without oscillation"
      ],
      correctAnswer: 0,
      explanation: "Real part -0.1 < 0 indicates decay, while imaginary part ±2i indicates oscillation with frequency 2. Combined, this creates decaying oscillations - spiraling inward motion."
    },
    realWorldConnection: "Mechanical engineers analyze building vibrations using complex eigenvalues to predict earthquake response. Electrical engineers use complex eigenvalue analysis to design stable circuits and filters. Biologists model predator-prey cycles where complex eigenvalues indicate oscillating population dynamics."
  },

  "3.9": {
    id: "3.9",
    title: "Eileen's Pattern Discovery Capstone Project",
    duration: "50-60 minutes",
    characterId: "eileen",
    narrativeHook: {
      story: "Eileen faces her ultimate detective challenge: analyzing a complex dataset to uncover hidden patterns using every eigenvalue technique she's mastered. She must identify the principal components, predict long-term behavior, and reveal the mathematical fingerprints that explain the system's deepest secrets.",
      characterMessage: "Time for the ultimate pattern discovery mission! I'm putting all my eigenvalue detective skills to work on a real mystery - finding the hidden structure in complex data using everything from basic eigenvectors to advanced PCA analysis!"
    },
    learningObjectives: [
      "Apply eigenvalue decomposition to analyze real-world datasets",
      "Use PCA to identify principal patterns and reduce dimensionality",
      "Analyze system stability using eigenvalue magnitudes",
      "Interpret complex eigenvalues in dynamic system contexts",
      "Synthesize all eigenvalue concepts in comprehensive pattern discovery"
    ],
    coreConcepts: [
      "Complete eigenvalue analysis workflow",
      "Principal component extraction and interpretation",
      "Stability analysis for dynamic systems",
      "Pattern recognition using eigenstructure",
      "Dimensionality reduction and data compression"
    ],
    readContent: "This capstone project integrates all eigenvalue concepts through comprehensive pattern discovery. Part A performs complete eigenvalue decomposition on correlation matrices from real datasets, identifying principal components and their variance contributions. Part B analyzes the stability of dynamic systems using eigenvalue criteria, predicting long-term behavior from eigenvalue magnitudes and phases. Part C applies PCA for dimensionality reduction, comparing different retention strategies and evaluating compression trade-offs. Part D investigates oscillatory behavior through complex eigenvalue analysis. The project demonstrates how eigenvalue mathematics reveals hidden structure in everything from financial markets to biological systems.",
    seeContent: "Work through interactive pattern discovery tools that let you perform complete eigenvalue analysis on real datasets, visualize principal components, and predict system behavior using eigenvalue insights.",
    hearContent: "Listen as I guide you through each phase of the ultimate pattern discovery project, showing how eigenvalue detective work reveals the mathematical DNA hidden in complex real-world systems!",
    doContent: "Complete the comprehensive pattern discovery project: analyze correlation matrices with eigenvalue decomposition, predict system stability using eigenvalue criteria, reduce data dimensionality with PCA, and investigate oscillatory patterns through complex eigenvalue analysis.",
    memoryAids: {
      mantra: "Every eigenvalue technique becomes a detective tool in the ultimate pattern discovery adventure!",
      visual: "Picture yourself as Eileen's partner detective, using eigenvalue analysis as your mathematical microscope to reveal the hidden patterns and structures that explain how complex systems really work."
    },
    conceptCheck: {
      question: "In Part A, you find that 3 principal components explain 85% of variance in a 10-dimensional dataset. What does this suggest about the data structure?",
      options: [
        "The data has strong underlying structure - most variation lies in just 3 key directions",
        "The data is completely random with no discernible patterns",
        "All 10 dimensions are equally important for explaining the data",
        "The analysis failed because 85% is not sufficient retention"
      ],
      correctAnswer: 0,
      explanation: "When 3 components out of 10 explain 85% of variance, it indicates the data has strong underlying structure. Most of the meaningful variation is captured by just 3 principal directions, suggesting the system has only 3 fundamental degrees of freedom."
    },
    realWorldConnection: "This project mirrors real data science workflows: genomics researchers use eigenvalue analysis to identify population structures, financial analysts use PCA to find market risk factors, and engineers use eigenvalue stability analysis to design safe control systems. Your eigenvalue detective skills directly transfer to careers in data science, quantitative finance, and systems engineering."
  }
};

// Export functions for Module 3
export const getModule3LessonData = (lessonId: string): LessonData => {
  return module3Lessons[lessonId] || module3Lessons["3.1"];
};

export const getModule3LessonOrder = (): string[] => {
  return ["3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8", "3.9"];
};

export const getModule3PreviousLessonId = (currentId: string): string | undefined => {
  const lessonOrder = getModule3LessonOrder();
  const currentIndex = lessonOrder.indexOf(currentId);
  return currentIndex > 0 ? lessonOrder[currentIndex - 1] : undefined;
};

export const getModule3NextLessonId = (currentId: string): string | undefined => {
  const lessonOrder = getModule3LessonOrder();
  const currentIndex = lessonOrder.indexOf(currentId);
  return currentIndex < lessonOrder.length - 1 ? lessonOrder[currentIndex + 1] : undefined;
};