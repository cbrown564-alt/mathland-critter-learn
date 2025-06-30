import { LessonData } from "@/types/lesson";

// Module 0: Prerequisites & Refresher
// Copy and paste module 0 lesson data here

export const module0Lessons: { [key: string]: LessonData } = {
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
    hearAudioUrl: "/audio/0.1.mp3",
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
    hearAudioUrl: "/audio/0.2.mp3",
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
    hearAudioUrl: "/audio/0.3.mp3",
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
    hearAudioUrl: "/audio/0.4.mp3",
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
    hearAudioUrl: "/audio/0.5.mp3",
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
    hearAudioUrl: "/audio/0.6.mp3",
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
    hearAudioUrl: "/audio/0.7.mp3",
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
    hearAudioUrl: "/audio/0.8.mp3",
    doContent: "Practice with Greek symbol matching games, build sigma notation expressions, and explore interactive vector representations to prepare for Module 1."
  }
};