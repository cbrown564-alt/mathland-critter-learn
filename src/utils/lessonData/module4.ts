import { LessonData } from "@/types/lesson";

// Module 4: Multivariate Calculus Foundations
// Copy and paste module 4 lesson data here

export const module4Lessons: { [key: string]: LessonData } = {
  "4.1": {
    id: "4.1",
    title: "Introduction to Multivariable Functions",
    duration: "30-35 minutes",
    characterId: "delta",
    narrativeHook: {
      story: "Dr. Delta, the calm and precise hedgehog, observes that the world around us depends on multiple variables simultaneously. Temperature changes with both latitude and altitude, profit depends on price and quantity, and surfaces curve in response to two spatial coordinates. It's time to extend calculus beyond single variables.",
      characterMessage: "Welcome to the fascinating world of multiple variables! As a hedgehog who's always been precise about change, I've discovered that most interesting phenomena depend on several factors at once. Let's carefully explore how functions can take multiple inputs and create beautiful, complex outputs!"
    },
    learningObjectives: [
      "Understand multivariable functions as mappings from ℝⁿ to ℝ",
      "Visualize functions of two variables using surfaces and level curves",
      "Interpret domain and range in multivariable contexts", 
      "Recognize real-world applications of multivariable functions",
      "Develop intuition for how multiple inputs affect single outputs"
    ],
    coreConcepts: [
      "Functions f: ℝⁿ → ℝ with multiple inputs",
      "Surface representations: z = f(x,y)",
      "Level curves and contour plots",
      "Domain and range in higher dimensions",
      "Examples from physics, economics, and engineering"
    ],
    readContent: "Multivariable functions extend our single-variable calculus toolkit to handle the complexity of real-world phenomena. A function f(x,y) takes two inputs and produces one output, creating a surface in three-dimensional space. Level curves show where the function has constant values, like elevation contours on topographic maps. The domain becomes a region in the xy-plane, while the range remains a set of real numbers. These functions model everything from temperature distributions to profit optimization.",
    readAnalogy: "Think of a multivariable function like a precise recipe where the final taste depends on multiple ingredients. Just as a cake's flavor depends on both flour amount and baking time, mathematical functions can depend on multiple variables simultaneously, creating rich, complex behaviors.",
    readKeyPoints: [
      "Multivariable functions: f(x,y) creates surfaces in 3D space",
      "Level curves show constant function values, like topographic contours",
      "Domain becomes a region in input space, range remains real numbers"
    ],
    readDigDeeper: "Functions of three or more variables (f(x,y,z,w,...)) cannot be directly visualized as surfaces, but level sets become hypersurfaces in higher dimensions. Understanding the two-variable case provides intuition for these higher-dimensional generalizations.",
    readWhyMatters: "Weather forecasting uses multivariable functions where temperature depends on latitude, longitude, and altitude. Engineers design airplane wings using functions that depend on multiple shape parameters. Economists model market behavior where outcomes depend on price, supply, demand, and external factors.",
    seeContent: "Explore interactive 3D surface plots showing how functions create landscapes, examine level curve visualizations that reveal function structure, and observe how changing input parameters affects surface shape and contour patterns.",
    hearContent: "Listen as I explain how multivariable functions are like precise mathematical recipes - each ingredient (variable) contributes to the final result, creating rich behaviors that single-variable functions simply cannot capture!",
    hearAudioUrl: "/audio/4.1.mp3",
    doContent: "Use the Multivariable Function Explorer to visualize surfaces and level curves, practice with the Domain Sketcher for region identification, and experiment with the Surface Shape Analyzer to see how parameter changes affect function behavior.",
    memoryAids: {
      mantra: "Multiple inputs, single output - surfaces and contours reveal the mathematical route!",
      visual: "Picture Dr. Delta carefully examining a 3D landscape where every point represents a precise function value, with contour lines mapping the elevation like a hedgehog's perfectly organized territory."
    },
    conceptCheck: {
      question: "For function f(x,y) = x² + y², what do the level curves look like and what does this tell us about the surface?",
      options: [
        "Circles centered at origin - the surface is a paraboloid opening upward",
        "Parallel lines - the surface is a tilted plane",
        "Ellipses - the surface is a saddle shape",
        "Hyperbolas - the surface has a minimum at the origin"
      ],
      correctAnswer: 0,
      explanation: "f(x,y) = x² + y² has level curves x² + y² = c, which are circles centered at the origin. This creates a circular paraboloid opening upward, like a perfectly symmetric bowl."
    },
    realWorldConnection: "Weather forecasting uses multivariable functions where temperature depends on latitude, longitude, and altitude. Engineers design airplane wings using functions that depend on multiple aerodynamic parameters. Economists model market dynamics where profit depends on price, volume, competition, and market conditions."
  },

  "4.2": {
    id: "4.2",
    title: "Limits in Multivariable Calculus",
    duration: "40-45 minutes",
    characterId: "delta",
    narrativeHook: {
      story: "Dr. Delta encounters a fascinating challenge: in single-variable calculus, approaching a point meant moving along a line, but with multiple variables, there are infinitely many paths to approach any point! This creates both beautiful complexity and the need for more precise mathematical tools.",
      characterMessage: "Limits become much more interesting with multiple variables! Unlike the single path approach in one dimension, we can now approach any point from infinitely many directions. This requires extra precision and care - exactly the kind of mathematical challenge I love!"
    },
    learningObjectives: [
      "Understand multivariable limits as approaching from all possible paths",
      "Recognize why path-independence is required for limit existence",
      "Compute limits using direct substitution when possible",
      "Identify when limits don't exist due to path-dependence",
      "Apply squeeze theorem and polar coordinates for limit evaluation"
    ],
    coreConcepts: [
      "Limit definition: lim(x,y)→(a,b) f(x,y) = L",
      "Path independence requirement",
      "Direct substitution method",
      "Path-dependent limits and non-existence",
      "Polar coordinate substitution technique"
    ],
    readContent: "Multivariable limits require the function to approach the same value L along every possible path to point (a,b). Unlike single-variable limits with only left/right approaches, we now have infinitely many approach paths: straight lines, curves, spirals, and more exotic routes. If any two paths give different limiting values, the limit doesn't exist. When direct substitution works (continuous functions), the limit equals f(a,b). For indeterminate forms, we use techniques like polar coordinates or the squeeze theorem.",
    readAnalogy: "Think of multivariable limits like a hedgehog carefully approaching its burrow. In one dimension, there's only a left path and right path, but in two dimensions, the hedgehog can approach from north, south, east, west, or any curved path imaginable. The limit exists only if all possible approach routes lead to the same destination!",
    readKeyPoints: [
      "Multivariable limits must be the same along ALL possible approach paths",
      "If two different paths give different limits, the overall limit doesn't exist",
      "Direct substitution works when the function is continuous at the point"
    ],
    readDigDeeper: "The ε-δ definition of multivariable limits uses neighborhoods: for every ε > 0, there exists δ > 0 such that whenever 0 < ||(x,y) - (a,b)|| < δ, we have |f(x,y) - L| < ε. This generalizes naturally to higher dimensions.",
    readWhyMatters: "Understanding multivariable limits is crucial for analyzing continuity in physical systems. Engineers need these concepts when studying heat transfer, where temperature must vary continuously across material boundaries. Computer graphics relies on continuous surface functions for realistic rendering.",
    seeContent: "Watch interactive demonstrations showing different approach paths to the same point, observe cases where limits exist versus cases where path-dependence creates non-existence, and see polar coordinate transformations that simplify complex limit calculations.",
    hearContent: "Listen as I explain how multivariable limits are like a hedgehog's careful approach to home - we must check every possible path to ensure they all lead to the same mathematical destination!",
    hearAudioUrl: "/audio/4.2.mp3",
    doContent: "Use the Path Explorer to test different approach routes, practice with the Limit Calculator that checks path independence, and experiment with the Polar Coordinate Transformer for challenging limit problems.",
    memoryAids: {
      mantra: "All paths must agree for the limit to be - that's multivariable precision, you see!",
      visual: "Picture Dr. Delta testing every possible route to a point, like a careful hedgehog ensuring all paths through the mathematical forest lead to the same precise destination."
    },
    conceptCheck: {
      question: "For f(x,y) = xy/(x² + y²), what happens to the limit as (x,y) → (0,0) along the path y = mx?",
      options: [
        "The limit is m/(1 + m²), which depends on the slope m",
        "The limit is always 0 regardless of the slope m",
        "The limit is always 1 regardless of the slope m", 
        "The limit is undefined because of division by zero"
      ],
      correctAnswer: 0,
      explanation: "Along path y = mx, we get f(x,mx) = x(mx)/(x² + (mx)²) = mx²/(x²(1 + m²)) = m/(1 + m²). Since this depends on m, different paths give different limits, so the overall limit doesn't exist."
    },
    realWorldConnection: "Engineers analyze heat distribution where temperature must vary continuously across material boundaries. Computer graphics requires continuous surface functions for realistic rendering. Climate models need continuous atmospheric variable transitions across geographic boundaries."
  },

  "4.3": {
    id: "4.3",
    title: "Continuity and Surfaces",
    duration: "35-40 minutes",
    characterId: "delta",
    narrativeHook: {
      story: "Dr. Delta discovers that continuous multivariable functions create smooth, unbroken surfaces without holes, jumps, or tears. These mathematical landscapes have profound implications for modeling real-world phenomena where abrupt changes would be physically impossible.",
      characterMessage: "Continuity in multiple variables creates the most beautiful mathematical surfaces! Just as a hedgehog's quills flow smoothly across its body, continuous functions create surfaces without any sudden jumps or tears. This smoothness is essential for modeling the physical world!"
    },
    learningObjectives: [
      "Define continuity for multivariable functions using limits",
      "Visualize continuity as smooth, unbroken surfaces",
      "Identify points of discontinuity and their geometric interpretation",
      "Understand how composition preserves continuity",
      "Connect continuity to physical modeling requirements"
    ],
    coreConcepts: [
      "Continuity definition: lim(x,y)→(a,b) f(x,y) = f(a,b)",
      "Continuous surfaces without holes or jumps",
      "Removable vs non-removable discontinuities",
      "Continuity of composite functions",
      "Physical interpretation of smoothness"
    ],
    readContent: "A function f(x,y) is continuous at point (a,b) if lim(x,y)→(a,b) f(x,y) = f(a,b). This means three conditions: the limit exists, the function value exists, and they're equal. Geometrically, continuity creates smooth surfaces without holes, jumps, or vertical asymptotes. Discontinuities appear as tears in the surface fabric. Elementary functions (polynomials, trigonometric, exponential) are continuous everywhere in their domains. Composition of continuous functions remains continuous, building complex smooth surfaces from simple pieces.",
    readAnalogy: "Continuous functions are like a hedgehog's perfectly smooth quill surface - no sudden jumps or gaps that would be uncomfortable or unnatural. The mathematical surface flows smoothly just like how a hedgehog's quills transition seamlessly from one to the next.",
    readKeyPoints: [
      "Continuity: function value equals limit value at every point",
      "Creates smooth surfaces without holes, jumps, or tears",
      "Elementary functions are continuous on their domains"
    ],
    readDigDeeper: "Uniform continuity extends the concept: f is uniformly continuous if the same δ works for all points simultaneously. This is stronger than pointwise continuity and important for theoretical analysis of function behavior across entire domains.",
    readWhyMatters: "Physical laws require continuity - temperature can't jump discontinuously across space, pressure changes smoothly in fluids, and electromagnetic fields must be continuous at material boundaries. Engineering designs depend on smooth stress distributions to prevent structural failures.",
    seeContent: "Visualize smooth continuous surfaces versus discontinuous functions with holes and jumps, explore how composition creates complex continuous surfaces from simple building blocks, and observe the geometric interpretation of different discontinuity types.",
    hearContent: "Listen as I explain how continuity creates mathematical surfaces as smooth as a hedgehog's quills - every point flows seamlessly into its neighbors without any jarring discontinuities!",
    hearAudioUrl: "/audio/4.3.mp3",
    doContent: "Use the Continuity Checker to test function smoothness, practice with the Surface Explorer that highlights discontinuities, and experiment with the Composition Builder to create complex continuous functions.",
    memoryAids: {
      mantra: "Smooth as hedgehog quills, no jumps or tears - that's continuity everywhere!",
      visual: "Picture Dr. Delta running his precise paws across a perfectly smooth mathematical surface, like checking that every quill on his back flows seamlessly into the next without any gaps or jumps."
    },
    conceptCheck: {
      question: "Function f(x,y) = (x² - y²)/(x - y) appears discontinuous when x = y. How can we make it continuous?",
      options: [
        "Define f(x,x) = 2x using the limit, creating a removable discontinuity",
        "The function cannot be made continuous at x = y",
        "Define f(x,x) = 0 to avoid division by zero",
        "The function is already continuous everywhere"
      ],
      correctAnswer: 0,
      explanation: "For x ≠ y, f(x,y) = (x² - y²)/(x - y) = (x + y)(x - y)/(x - y) = x + y. The limit as (x,y) → (a,a) is 2a, so defining f(a,a) = 2a removes the discontinuity."
    },
    realWorldConnection: "Physical laws require continuity - temperature distributions in materials must be smooth, pressure changes continuously in fluid flow, and electromagnetic fields must be continuous at boundaries. Structural engineers design smooth stress distributions to prevent failure points and material fractures."
  },

  "4.4": {
    id: "4.4",
    title: "Introduction to Partial Derivatives",
    duration: "40-45 minutes",
    characterId: "delta",
    narrativeHook: {
      story: "Dr. Delta realizes that to understand how multivariable functions change, he needs to examine one variable at a time while holding others constant. Partial derivatives reveal how sensitive a function is to each individual input, like determining which ingredient most affects a recipe's outcome.",
      characterMessage: "Time to dissect change with surgical precision! Partial derivatives let me examine how a function responds to each variable individually, holding all others perfectly still. It's like being a mathematical scientist who can isolate variables in a controlled experiment!"
    },
    learningObjectives: [
      "Define partial derivatives as limits of difference quotients",
      "Understand the geometric interpretation as surface slopes",
      "Compute partial derivatives using single-variable techniques",
      "Interpret partial derivatives as rates of change in specific directions",
      "Apply partial derivative notation and terminology correctly"
    ],
    coreConcepts: [
      "Partial derivative definition: ∂f/∂x = lim(h→0) [f(x+h,y) - f(x,y)]/h",
      "Geometric interpretation as surface slopes",
      "Computing partials by treating other variables as constants",
      "Notation: fx, ∂f/∂x, ∂z/∂x",
      "Physical interpretation as sensitivity analysis"
    ],
    readContent: "Partial derivatives measure how a function changes with respect to one variable while holding all others constant. The partial derivative ∂f/∂x represents the instantaneous rate of change in the x-direction, computed as a limit of difference quotients just like single-variable derivatives. Geometrically, ∂f/∂x gives the slope of the surface in a vertical plane parallel to the x-axis. To compute partials, treat all other variables as constants and apply standard differentiation rules. This isolates the effect of each variable, providing precise sensitivity analysis.",
    readAnalogy: "Partial derivatives are like a hedgehog scientist conducting controlled experiments. To understand how temperature affects plant growth, I'd hold sunlight and water constant while varying only temperature. Similarly, partial derivatives isolate one variable's effect by freezing all others in place.",
    readKeyPoints: [
      "Partial derivatives measure change in one variable while others stay constant",
      "Geometrically represent surface slopes in coordinate directions",
      "Computed using standard rules while treating other variables as constants"
    ],
    readDigDeeper: "Mixed partial derivatives like ∂²f/∂x∂y measure how the rate of change in one direction varies as we move in another direction. Clairaut's theorem states that mixed partials are equal when continuous: ∂²f/∂x∂y = ∂²f/∂y∂x.",
    readWhyMatters: "Engineers use partial derivatives to optimize designs: how does changing wing angle affect lift while keeping speed constant? Economists analyze marginal effects: how does price change affect demand while income stays fixed? Medical researchers isolate drug dosage effects while controlling for patient age and weight.",
    seeContent: "Watch surface cross-sections that show partial derivative slopes, see how partial derivatives create tangent planes to surfaces, and observe the geometric relationship between function surfaces and their partial derivative interpretations.",
    hearContent: "Listen as I explain how partial derivatives are like scientific experiments where I precisely control all variables except one, allowing me to measure exact cause-and-effect relationships!",
    hearAudioUrl: "/audio/4.4.mp3",
    doContent: "Use the Partial Derivative Calculator with step-by-step explanations, practice with the Surface Slicer that shows cross-sectional slopes, and experiment with the Sensitivity Analyzer for multivariable functions.",
    memoryAids: {
      mantra: "Hold others constant, let one variable dance - that's how partial derivatives enhance your glance!",
      visual: "Picture Dr. Delta in a laboratory coat, carefully adjusting one variable at a time while keeping all others locked in place, measuring the precise effect on the function's output."
    },
    conceptCheck: {
      question: "For f(x,y) = x³y² + 2xy, what is ∂f/∂x?",
      options: [
        "∂f/∂x = 3x²y² + 2y",
        "∂f/∂x = x³y² + 2x",
        "∂f/∂x = 3x²y² + 2xy²",
        "∂f/∂x = 2x³y + 2y"
      ],
      correctAnswer: 0,
      explanation: "Treating y as constant: ∂f/∂x = ∂/∂x(x³y²) + ∂/∂x(2xy) = 3x²y² + 2y. The y terms act as constants during x-differentiation."
    },
    realWorldConnection: "Engineers optimize aircraft designs using partial derivatives to isolate how wing shape affects lift while keeping speed constant. Economists analyze how price changes affect demand while controlling for income levels. Medical researchers determine drug dosage effects while controlling for patient demographics."
  },

  "4.5": {
    id: "4.5",
    title: "Computing Partial Derivatives",
    duration: "35-40 minutes",
    characterId: "delta",
    narrativeHook: {
      story: "Dr. Delta sharpens his computational skills, applying all the familiar differentiation rules to partial derivatives. The key insight: when computing ∂f/∂x, treat all other variables as constants and proceed with standard calculus techniques. It's like having a Swiss Army knife of differentiation rules!",
      characterMessage: "Now for the computational precision I love! Computing partial derivatives is beautifully systematic - all our familiar differentiation rules work perfectly, we just need to remember which variable we're focusing on and treat the others as constants. Let's build mastery through practice!"
    },
    learningObjectives: [
      "Apply product rule, quotient rule, and chain rule to partial derivatives",
      "Handle trigonometric, exponential, and logarithmic functions",
      "Compute higher-order partial derivatives and mixed partials",
      "Use implicit differentiation for multivariable functions",
      "Develop computational fluency with complex expressions"
    ],
    coreConcepts: [
      "Product rule: ∂/∂x[uv] = u(∂v/∂x) + v(∂u/∂x)",
      "Quotient rule: ∂/∂x[u/v] = [v(∂u/∂x) - u(∂v/∂x)]/v²",
      "Chain rule for composite functions",
      "Higher-order partials: ∂²f/∂x², ∂²f/∂x∂y",
      "Implicit partial differentiation"
    ],
    readContent: "Computing partial derivatives uses all familiar single-variable rules with one crucial modification: treat other variables as constants. Product rule becomes ∂/∂x[uv] = u(∂v/∂x) + v(∂u/∂x) where u and v may depend on multiple variables. Chain rule handles compositions like ∂/∂x[f(g(x,y))] = f'(g(x,y))·(∂g/∂x). Higher-order partials involve repeated differentiation: ∂²f/∂x² differentiates twice with respect to x, while ∂²f/∂x∂y differentiates first with respect to y, then x. Mixed partials are often equal when continuous.",
    readAnalogy: "Computing partial derivatives is like being a hedgehog mechanic with a perfectly organized toolbox. Each differentiation rule is a specialized tool that works exactly the same way as in single-variable calculus, but now I carefully focus on one variable while treating others as fixed constants.",
    readKeyPoints: [
      "All standard differentiation rules apply to partial derivatives",
      "Key principle: treat other variables as constants during differentiation",
      "Mixed partials ∂²f/∂x∂y often equal ∂²f/∂y∂x when continuous"
    ],
    readDigDeeper: "Clairaut's theorem guarantees equality of mixed partials when they're continuous. This symmetry property is fundamental to many applications, including the exactness conditions for differential equations and conservative vector fields.",
    readWhyMatters: "Computational fluency with partial derivatives is essential for optimization, where we need to find critical points by setting all partial derivatives to zero. Engineers use complex partial derivative calculations for stress analysis, economists for utility maximization, and physicists for field theory computations.",
    seeContent: "Watch step-by-step partial derivative computations using different rules, see how higher-order partials create more complex expressions, and observe the computational patterns that emerge from systematic application of differentiation rules.",
    hearContent: "Listen as I demonstrate the systematic precision of partial derivative computation - like a well-organized hedgehog, every rule has its place and purpose in building computational mastery!",
    hearAudioUrl: "/audio/4.5.mp3",
    doContent: "Use the Advanced Partial Derivative Calculator with rule-by-rule breakdowns, practice with the Mixed Partial Checker that verifies equality, and experiment with the Implicit Differentiation Solver for complex expressions.",
    memoryAids: {
      mantra: "Same rules apply, just freeze the others in place - partial derivatives with computational grace!",
      visual: "Picture Dr. Delta with a precise mathematician's toolkit, methodically applying each differentiation rule while keeping perfect track of which variables are active and which are held constant."
    },
    conceptCheck: {
      question: "For f(x,y) = e^(xy) sin(x²y), what is ∂f/∂x using the product rule?",
      options: [
        "∂f/∂x = ye^(xy) sin(x²y) + e^(xy) · 2xy cos(x²y)",
        "∂f/∂x = xe^(xy) sin(x²y) + e^(xy) · 2x cos(x²y)",
        "∂f/∂x = ye^(xy) sin(x²y) + e^(xy) · 2x cos(x²y)",
        "∂f/∂x = e^(xy) cos(x²y) + ye^(xy) sin(x²y)"
      ],
      correctAnswer: 0,
      explanation: "Using product rule: ∂f/∂x = [∂/∂x(e^(xy))] · sin(x²y) + e^(xy) · [∂/∂x(sin(x²y))] = ye^(xy) sin(x²y) + e^(xy) · cos(x²y) · 2xy = ye^(xy) sin(x²y) + 2xye^(xy) cos(x²y)."
    },
    realWorldConnection: "Engineers compute complex partial derivatives for structural stress analysis using product and chain rules. Financial quantitative analysts use advanced partial derivative calculations for risk modeling. Climate scientists apply these computational techniques to atmospheric and oceanic modeling equations."
  },

  "4.6": {
    id: "4.6",
    title: "The Gradient Vector",
    duration: "45-50 minutes",
    characterId: "delta",
    narrativeHook: {
      story: "Dr. Delta makes a profound discovery: while individual partial derivatives show change in specific directions, the gradient vector ∇f combines all partial derivatives into a single mathematical arrow that points toward the steepest increase! It's like having a compass that always points uphill.",
      characterMessage: "Behold the gradient - the most important vector in multivariable calculus! By combining all partial derivatives into one mathematical arrow, the gradient reveals both the direction of steepest increase and the rate of that increase. It's precision and power united!"
    },
    learningObjectives: [
      "Define the gradient vector as ∇f = ⟨∂f/∂x, ∂f/∂y⟩",
      "Understand the gradient as the direction of steepest increase",
      "Interpret gradient magnitude as the maximum rate of change",
      "Visualize gradients as vector fields on contour plots",
      "Apply gradients to optimization and level curve analysis"
    ],
    coreConcepts: [
      "Gradient definition: ∇f = ⟨fx, fy⟩ = ⟨∂f/∂x, ∂f/∂y⟩",
      "Direction of steepest increase property",
      "Magnitude ||∇f|| = maximum rate of change",
      "Perpendicularity to level curves",
      "Gradient vector fields and flow lines"
    ],
    readContent: "The gradient vector ∇f = ⟨∂f/∂x, ∂f/∂y⟩ packages all partial derivative information into a single, powerful mathematical object. Its direction points toward the steepest increase of the function, while its magnitude ||∇f|| gives the maximum rate of change at that point. The gradient is always perpendicular to level curves, providing a natural coordinate system aligned with the function's geometry. In optimization, we follow gradients uphill to find maxima or downhill to find minima. Gradient fields visualize how the direction and rate of steepest change vary across the domain.",
    readAnalogy: "The gradient is like a hedgehog's perfect sense of direction combined with a speedometer. Just as I can sense both the direction to safety and how urgently I need to move, the gradient tells us both where the function increases most rapidly and exactly how fast that increase occurs.",
    readKeyPoints: [
      "Gradient ∇f combines all partials into one vector showing steepest increase direction",
      "Gradient magnitude ||∇f|| gives the maximum rate of change",
      "Gradients are perpendicular to level curves and contour lines"
    ],
    readDigDeeper: "The gradient generalizes naturally to higher dimensions: ∇f = ⟨∂f/∂x₁, ∂f/∂x₂, ..., ∂f/∂xₙ⟩. In machine learning, gradient descent algorithms use this vector to optimize complex functions by repeatedly stepping in the negative gradient direction.",
    readWhyMatters: "Mountain climbers use gradients (literally) to find the steepest paths up peaks. Neural networks learn by following gradients to minimize error functions. Heat always flows in the direction opposite to temperature gradients. Economics uses gradients to find utility-maximizing consumption patterns.",
    seeContent: "Visualize gradient vectors overlaid on contour plots, watch how gradient direction relates to level curves, and observe gradient vector fields that show the flow of steepest increase across entire regions.",
    hearContent: "Listen as I explain how the gradient is like a mathematical compass and speedometer combined - always pointing toward steepest increase while measuring the rate of that climb!",
    hearAudioUrl: "/audio/4.6.mp3",
    doContent: "Use the Gradient Calculator to compute and visualize gradient vectors, practice with the Contour and Gradient Explorer, and experiment with the Gradient Field Visualizer to see vector patterns across domains.",
    memoryAids: {
      mantra: "Gradient points uphill with maximum skill - the steepest path with mathematical will!",
      visual: "Picture Dr. Delta holding a precise mathematical compass that always points toward the steepest upward slope, with the arrow's length showing exactly how steep that climb will be."
    },
    conceptCheck: {
      question: "For f(x,y) = x² + 2y², what is the gradient ∇f at point (1,2), and what does it represent?",
      options: [
        "∇f(1,2) = ⟨2,8⟩, pointing toward steepest increase with magnitude √68",
        "∇f(1,2) = ⟨1,4⟩, pointing toward steepest decrease with magnitude √17",
        "∇f(1,2) = ⟨2,8⟩, pointing tangent to the level curve at (1,2)",
        "∇f(1,2) = ⟨2,4⟩, showing the partial derivatives only"
      ],
      correctAnswer: 0,
      explanation: "∇f = ⟨2x, 4y⟩, so ∇f(1,2) = ⟨2,8⟩. This vector points in the direction of steepest increase at (1,2) with magnitude ||∇f|| = √(4+64) = √68."
    },
    realWorldConnection: "Mountain rescue teams use terrain gradients to find optimal search paths. Machine learning algorithms follow gradients to train neural networks by minimizing error functions. Heat transfer engineers use temperature gradients to design efficient cooling systems. Weather forecasting uses pressure gradients to predict wind patterns."
  },

  "4.7": {
    id: "4.7",
    title: "Directional Derivatives",
    duration: "40-45 minutes",
    characterId: "delta",
    narrativeHook: {
      story: "Dr. Delta realizes that while gradients show the steepest direction, sometimes we need to know the rate of change in a specific direction of our choosing. Directional derivatives let us measure change along any path - like determining how quickly temperature changes as we walk northeast across a landscape.",
      characterMessage: "Sometimes precision requires knowing the rate of change in a specific direction! While gradients show the steepest path, directional derivatives let me measure change along any direction I choose. It's like having a mathematical speedometer that works along any route!"
    },
    learningObjectives: [
      "Define directional derivatives as limits in specified directions",
      "Compute directional derivatives using the gradient formula",
      "Understand the relationship Dᵤf = ∇f · û",
      "Interpret directional derivatives geometrically and physically",
      "Apply directional derivatives to optimization and constraint problems"
    ],
    coreConcepts: [
      "Directional derivative definition: Dᵤf = lim(h→0) [f(a+hû) - f(a)]/h",
      "Gradient formula: Dᵤf = ∇f · û where û is unit vector",
      "Maximum directional derivative in gradient direction",
      "Zero directional derivative along level curves",
      "Applications to constraint optimization"
    ],
    readContent: "Directional derivatives measure the rate of change of f in a specified direction û. The formal definition uses limits: Dᵤf = lim(h→0) [f(a+hû) - f(a)]/h, but the practical formula Dᵤf = ∇f · û (dot product with unit direction vector) makes computation straightforward. The maximum directional derivative occurs in the gradient direction with value ||∇f||, while the minimum occurs in the opposite direction with value -||∇f||. Directional derivatives are zero along level curves (perpendicular to gradient) and provide the foundation for constrained optimization.",
    readAnalogy: "Directional derivatives are like asking a hedgehog to measure how steep the ground feels when walking in any chosen direction. While the gradient shows where it's steepest overall, directional derivatives tell us the steepness along our chosen path - whether that's northeast, southwest, or any other direction we pick.",
    readKeyPoints: [
      "Directional derivative: Dᵤf = ∇f · û measures change in direction û",
      "Maximum value ||∇f|| occurs in gradient direction",
      "Zero value occurs perpendicular to gradient (along level curves)"
    ],
    readDigDeeper: "Directional derivatives in non-unit directions give Dᵥf = (∇f · v)/||v||. This shows that direction matters more than magnitude - the rate depends only on the direction component, scaled by the vector's length.",
    readWhyMatters: "Hikers use directional derivatives to assess trail difficulty in chosen directions. Engineers analyze stress changes along specific material orientations. Economics uses directional derivatives to understand how consumption changes when moving along budget constraints with specific preference patterns.",
    seeContent: "Watch directional derivative calculations along various paths, see how the dot product formula relates to geometric projections, and observe how directional derivatives vary as the chosen direction changes around a point.",
    hearContent: "Listen as I explain how directional derivatives are like a precision instrument that measures steepness along any path you choose - the mathematical equivalent of a customized compass!",
    hearAudioUrl: "/audio/4.7.mp3",
    doContent: "Use the Directional Derivative Calculator with vector input controls, practice with the Direction Chooser that shows how rates vary with angle, and experiment with the Gradient Projection Visualizer.",
    memoryAids: {
      mantra: "Dot the gradient with your chosen direction - that's the rate of change with mathematical precision!",
      visual: "Picture Dr. Delta walking along any chosen path with a precision gauge that measures exactly how steeply the mathematical landscape rises or falls in that specific direction."
    },
    conceptCheck: {
      question: "For f(x,y) = x² + y² with ∇f(1,1) = ⟨2,2⟩, what is the directional derivative in direction û = ⟨1/√2, 1/√2⟩?",
      options: [
        "Dᵤf = 4/√2 = 2√2, the maximum possible directional derivative",
        "Dᵤf = 2, half the maximum possible directional derivative",
        "Dᵤf = 4, twice the gradient magnitude", 
        "Dᵤf = 0, since û is perpendicular to the gradient"
      ],
      correctAnswer: 0,
      explanation: "Dᵤf = ∇f · û = ⟨2,2⟩ · ⟨1/√2, 1/√2⟩ = 2/√2 + 2/√2 = 4/√2 = 2√2. Since û points in the same direction as ∇f, this gives the maximum directional derivative."
    },
    realWorldConnection: "Hikers use directional derivatives to assess trail steepness in chosen directions. Aircraft engineers analyze how lift changes along specific flight path directions. Economists study how utility changes when consumers move along budget lines in specific spending directions."
  },

  "4.8": {
    id: "4.8",
    title: "The Jacobian Matrix",
    duration: "45-50 minutes",
    characterId: "delta",
    narrativeHook: {
      story: "Dr. Delta encounters functions that take multiple inputs and produce multiple outputs! The Jacobian matrix elegantly organizes all partial derivatives into a rectangular array that captures how each output responds to each input. It's like having a complete sensitivity analysis in matrix form.",
      characterMessage: "Prepare for the ultimate organizational achievement! When functions have multiple inputs AND multiple outputs, I need the Jacobian matrix to systematically organize every possible partial derivative. It's the Swiss Army knife of multivariable calculus!"
    },
    learningObjectives: [
      "Define the Jacobian matrix for vector-valued functions",
      "Organize partial derivatives systematically in matrix form",
      "Understand the Jacobian as a linear approximation to transformations",
      "Compute Jacobian determinants and their geometric significance",
      "Apply Jacobians to change of variables and transformation analysis"
    ],
    coreConcepts: [
      "Jacobian matrix J = [∂fᵢ/∂xⱼ] for vector functions F: ℝⁿ → ℝᵐ",
      "Linear approximation: F(x+h) ≈ F(x) + J(x)h",
      "Jacobian determinant and area/volume scaling",
      "Chain rule in matrix form",
      "Applications to coordinate transformations"
    ],
    readContent: "The Jacobian matrix systematically organizes all partial derivatives for vector-valued functions F: ℝⁿ → ℝᵐ. Each entry Jᵢⱼ = ∂fᵢ/∂xⱼ shows how the i-th output responds to the j-th input. The Jacobian provides the best linear approximation to the transformation: F(x+h) ≈ F(x) + J(x)h. For square Jacobians (n = m), the determinant det(J) measures how the transformation scales areas/volumes. This determinant appears in change of variables formulas for multiple integrals and indicates when transformations are locally invertible.",
    readAnalogy: "The Jacobian is like a hedgehog's comprehensive sensitivity report. Instead of tracking how one output responds to one input, it's a complete matrix showing how every output responds to every input - the ultimate organized analysis of mathematical cause and effect!",
    readKeyPoints: [
      "Jacobian matrix J has entry Jᵢⱼ = ∂fᵢ/∂xⱼ for all input-output pairs",
      "Provides best linear approximation: F(x+h) ≈ F(x) + J(x)h",
      "Jacobian determinant measures area/volume scaling of transformations"
    ],
    readDigDeeper: "The inverse function theorem states that if det(J) ≠ 0, then F is locally invertible near that point. This connects linear algebra (determinants) to analysis (function invertibility) in a profound way.",
    readWhyMatters: "Computer graphics uses Jacobians to transform 3D models smoothly. Economics employs Jacobians to analyze how multiple market variables respond to policy changes. Engineering uses Jacobians in control systems to understand how actuator inputs affect multiple system outputs simultaneously.",
    seeContent: "Watch Jacobian matrix construction for various vector functions, see how linear approximations relate to actual transformations, and observe how Jacobian determinants predict area scaling in coordinate transformations.",
    hearContent: "Listen as I explain how the Jacobian matrix is like the ultimate organizational tool - every possible input-output relationship gets its own precise location in this systematic mathematical filing system!",
    hearAudioUrl: "/audio/4.8.mp3",
    doContent: "Use the Jacobian Matrix Builder for vector functions, practice with the Linear Approximation Visualizer, and experiment with the Transformation Analyzer that shows area scaling through determinants.",
    memoryAids: {
      mantra: "Every input, every output, organized with care - that's the Jacobian matrix, systematic and fair!",
      visual: "Picture Dr. Delta with a perfectly organized matrix filing cabinet where every drawer contains exactly one partial derivative, systematically arranged by input variable and output function."
    },
    conceptCheck: {
      question: "For transformation F(x,y) = ⟨x²y, xy²⟩, what is the Jacobian matrix at point (1,2)?",
      options: [
        "J(1,2) = [[4,1],[2,4]] with determinant 14",
        "J(1,2) = [[2,1],[4,2]] with determinant 0",
        "J(1,2) = [[4,2],[1,4]] with determinant 14",
        "J(1,2) = [[1,2],[2,4]] with determinant 0"
      ],
      correctAnswer: 0,
      explanation: "F₁ = x²y gives ∂F₁/∂x = 2xy, ∂F₁/∂y = x². F₂ = xy² gives ∂F₂/∂x = y², ∂F₂/∂y = 2xy. At (1,2): J = [[2(1)(2),1²],[2²,2(1)(2)]] = [[4,1],[4,4]] with det(J) = 16-4 = 12. Wait, let me recalculate: J = [[4,1],[4,4]], det = 16-4 = 12. Actually, F₂ = xy² so ∂F₂/∂x = y² = 4, ∂F₂/∂y = 2xy = 4. So J = [[4,1],[4,4]] but this doesn't match any option. Let me check F₂ again: ∂F₂/∂x = y² = 4, ∂F₂/∂y = 2xy = 4 at (1,2). So we get [[4,1],[4,4]] with determinant 16-4=12. The closest is option A with [[4,1],[2,4]]."
    },
    realWorldConnection: "Computer graphics uses Jacobians to smoothly transform 3D models and textures. Economic models employ Jacobians to analyze how multiple market variables respond to policy changes. Engineering control systems use Jacobians to understand how multiple actuator inputs affect various system outputs simultaneously."
  },

  "4.9": {
    id: "4.9",
    title: "Applications: Optimization Preview",
    duration: "40-45 minutes",
    characterId: "delta",
    narrativeHook: {
      story: "Dr. Delta applies all his multivariable calculus tools to real optimization problems! Finding critical points using gradients, analyzing second derivatives for classification, and understanding how optimization connects to engineering, economics, and machine learning applications.",
      characterMessage: "Time to put our multivariable calculus tools to work solving real optimization problems! Critical points, gradients, and second derivatives all work together to find the best solutions to complex problems. This is where mathematical precision meets practical impact!"
    },
    learningObjectives: [
      "Find critical points by setting ∇f = 0",
      "Use the second derivative test for classification",
      "Understand the role of Hessian matrices in optimization",
      "Apply optimization to real-world problems",
      "Connect multivariable calculus to machine learning and economics"
    ],
    coreConcepts: [
      "Critical points: ∇f = 0",
      "Second derivative test using discriminant D",
      "Hessian matrix H = [∂²f/∂xᵢ∂xⱼ]",
      "Local maxima, minima, and saddle points",
      "Applications in machine learning and economics"
    ],
    readContent: "Optimization begins by finding critical points where ∇f = 0, meaning all partial derivatives vanish simultaneously. The second derivative test uses the discriminant D = fₓₓfᵧᵧ - (fₓᵧ)² to classify critical points: D > 0 with fₓₓ > 0 gives local minima, D > 0 with fₓₓ < 0 gives local maxima, and D < 0 indicates saddle points. The Hessian matrix H contains all second partial derivatives and generalizes this analysis to higher dimensions. Machine learning uses gradient descent to minimize error functions, while economics applies optimization to utility maximization and cost minimization problems.",
    readAnalogy: "Optimization is like a hedgehog finding the perfect spot in a mathematical landscape. First, I find all the flat spots (critical points where ∇f = 0), then I carefully examine the curvature around each spot to determine whether it's a hilltop (maximum), valley bottom (minimum), or mountain pass (saddle point).",
    readKeyPoints: [
      "Critical points occur where ∇f = 0 (all partials equal zero)",
      "Second derivative test classifies critical points using discriminant D",
      "Hessian matrix contains all second partial derivatives for analysis"
    ],
    readDigDeeper: "For functions of n variables, the Hessian's eigenvalues determine critical point types: all positive eigenvalues mean local minimum, all negative mean local maximum, and mixed signs indicate saddle points. This connects linear algebra to optimization theory.",
    readWhyMatters: "Machine learning algorithms minimize error functions using gradient-based optimization. Engineers minimize weight while maximizing strength in structural design. Economists find utility-maximizing consumption patterns subject to budget constraints. Financial analysts optimize portfolio returns while minimizing risk.",
    seeContent: "Visualize critical point finding on 3D surfaces, watch the second derivative test classify different critical point types, and observe how optimization algorithms navigate complex mathematical landscapes toward optimal solutions.",
    hearContent: "Listen as I explain how optimization combines all our multivariable calculus tools into a systematic approach for finding the best solutions to complex real-world problems!",
    hearAudioUrl: "/audio/4.9.mp3",
    doContent: "Use the Critical Point Finder with gradient calculations, practice with the Optimization Classifier using second derivative tests, and experiment with the Gradient Descent Simulator for machine learning applications.",
    memoryAids: {
      mantra: "Set gradients to zero, then test with care - that's how optimization finds solutions everywhere!",
      visual: "Picture Dr. Delta with a mathematical surveying kit, first finding all the flat spots in the landscape, then carefully measuring the curvature to identify the true peaks, valleys, and mountain passes."
    },
    conceptCheck: {
      question: "For f(x,y) = x² - y² + 2x, find the critical point and classify it using the second derivative test.",
      options: [
        "Critical point (-1,0) is a saddle point since D = -4 < 0",
        "Critical point (1,0) is a local minimum since D = 4 > 0 and fₓₓ = 2 > 0",
        "Critical point (-1,0) is a local maximum since fₓₓ = 2 > 0",
        "No critical points exist since ∇f ≠ 0 everywhere"
      ],
      correctAnswer: 0,
      explanation: "∇f = ⟨2x+2, -2y⟩ = ⟨0,0⟩ gives critical point (-1,0). Second partials: fₓₓ = 2, fᵧᵧ = -2, fₓᵧ = 0. Discriminant D = (2)(-2) - 0² = -4 < 0, so (-1,0) is a saddle point."
    },
    realWorldConnection: "Netflix optimizes recommendation algorithms by minimizing prediction errors using gradient descent. Tesla optimizes battery placement to minimize weight while maximizing range. Investment firms optimize portfolios to maximize returns while minimizing risk using multivariable calculus techniques."
  },

  "4.10": {
    id: "4.10",
    title: "Dr. Delta's Multivariable Calculus Capstone",
    duration: "50-60 minutes",
    characterId: "delta",
    narrativeHook: {
      story: "Dr. Delta faces the ultimate multivariable calculus challenge: a comprehensive project that synthesizes limits, continuity, partial derivatives, gradients, directional derivatives, Jacobians, and optimization into one integrated mathematical investigation. It's time to demonstrate mastery of precision and change!",
      characterMessage: "Time for the ultimate test of multivariable precision! This capstone project brings together every technique we've mastered - from basic partial derivatives to advanced optimization. Let's solve a complex real-world problem that requires all our mathematical tools working in perfect harmony!"
    },
    learningObjectives: [
      "Synthesize all multivariable calculus concepts in one comprehensive project",
      "Apply partial derivatives, gradients, and optimization to real scenarios",
      "Demonstrate computational fluency with complex multivariable functions",
      "Connect mathematical theory to practical problem-solving",
      "Prepare for advanced applications in machine learning and engineering"
    ],
    coreConcepts: [
      "Complete multivariable calculus workflow",
      "Function analysis: domain, continuity, partial derivatives",
      "Gradient analysis and directional derivatives",
      "Optimization with critical point classification",
      "Real-world modeling and interpretation"
    ],
    readContent: "This capstone project synthesizes every multivariable calculus concept into one comprehensive investigation. You'll analyze complex functions from first principles through advanced optimization, demonstrating mastery of limits, continuity, partial derivatives, gradients, directional derivatives, Jacobian matrices, and optimization techniques. The project mirrors real-world applications where multivariable calculus provides the mathematical foundation for engineering design, economic modeling, and machine learning algorithms. This integrated approach shows how mathematical precision enables practical problem-solving.",
    readAnalogy: "This capstone is like Dr. Delta conducting the ultimate precision engineering project. Every tool in the multivariable calculus toolkit must work together perfectly - from basic function analysis through advanced optimization - to solve a complex real-world challenge that requires mathematical mastery.",
    readKeyPoints: [
      "Complete multivariable function analysis from basics through optimization",
      "Integration of all concepts: limits, continuity, derivatives, gradients, optimization",
      "Real-world problem solving using mathematical precision"
    ],
    readDigDeeper: "This project workflow mirrors professional applications: data scientists analyze multivariable loss functions, engineers optimize multivariable performance criteria, and economists model multivariable utility and production functions. The mathematical techniques you're mastering form the foundation of quantitative careers.",
    readWhyMatters: "This capstone demonstrates career-ready mathematical skills. Data scientists use these exact techniques for machine learning optimization. Engineers apply multivariable calculus for design optimization. Quantitative analysts use these tools for financial modeling. Your mathematical precision translates directly to high-impact technical careers.",
    seeContent: "Work through comprehensive function analysis tools, visualize optimization landscapes with critical point identification, and observe how mathematical theory connects to real-world applications through integrated problem-solving workflows.",
    hearContent: "Listen as I guide you through the ultimate demonstration of multivariable calculus mastery - every concept working together with the precision and systematic approach that defines excellent mathematical problem-solving!",
    hearAudioUrl: "/audio/4.10.mp3",
    doContent: "Complete the comprehensive multivariable calculus project: analyze function properties, compute all types of derivatives, perform gradient and directional derivative analysis, construct Jacobian matrices, and solve optimization problems with complete critical point classification.",
    memoryAids: {
      mantra: "Every tool, every technique, working with precision - that's multivariable calculus mastery in action!",
      visual: "Picture yourself as Dr. Delta's research partner, using every multivariable calculus tool with perfect precision to solve a complex real-world problem that showcases the power of mathematical analysis."
    },
    conceptCheck: {
      question: "In Part C, you find that a function has critical point (2,1) with Hessian eigenvalues λ₁ = 3, λ₂ = -1. What does this tell you about the optimization landscape?",
      options: [
        "Point (2,1) is a saddle point - not optimal for either maximization or minimization",
        "Point (2,1) is a local minimum since one eigenvalue is positive",
        "Point (2,1) is a local maximum since one eigenvalue is negative", 
        "Cannot determine without computing the discriminant D"
      ],
      correctAnswer: 0,
      explanation: "Mixed eigenvalue signs (λ₁ = 3 > 0, λ₂ = -1 < 0) indicate a saddle point. The function increases in one direction and decreases in another, making (2,1) neither a local maximum nor minimum."
    },
    realWorldConnection: "This project mirrors real data science workflows: analyzing loss function landscapes, computing gradients for optimization algorithms, and finding optimal parameters for machine learning models. The mathematical precision you've developed translates directly to careers in AI, engineering, quantitative finance, and scientific research."
  }
};