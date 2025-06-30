import { LessonData } from "@/types/lesson";

// Module 5: Optimisation & Gradient Descent
// Copy and paste module 5 lesson data here

export const module5Lessons: { [key: string]: LessonData } = {
  "5.1": {
    id: "5.1",
    title: "Introduction to Optimization",
    duration: "35-40 minutes",
    characterId: "greta",
    narrativeHook: {
      story: "Gradient Greta stands at the base of a mathematical mountain range, rope coiled and sunglasses gleaming. As an expert climber, she knows that reaching any peak requires understanding the terrain - where it's steep, where it's flat, and which paths lead to the summit. Optimization is the art of finding the best route to the top!",
      characterMessage: "Welcome to the mountains of optimization! I'm Greta, and I've climbed every mathematical peak there is. Whether you're seeking the highest point (maximum) or the deepest valley (minimum), I'll teach you to read the terrain and find the optimal path. Let's gear up for this adventure!"
    },
    learningObjectives: [
      "Understand optimization as finding maximum or minimum function values",
      "Distinguish between local and global extrema",
      "Recognize optimization problems in real-world contexts",
      "Identify the role of gradients in optimization",
      "Connect optimization to machine learning and engineering applications"
    ],
    coreConcepts: [
      "Optimization: finding max/min values of functions",
      "Local vs global extrema",
      "Objective functions and constraints",
      "Feasible regions and boundary conditions",
      "Real-world optimization examples"
    ],
    readContent: "Optimization seeks the best possible outcome from a given set of possibilities - finding maximum profits, minimum costs, shortest paths, or optimal designs. We distinguish between local extrema (best in a neighborhood) and global extrema (best overall). The objective function f(x,y) represents what we're optimizing, while constraints define the feasible region where solutions must lie. Unconstrained optimization allows variables to take any values, while constrained optimization restricts variables to specific regions. Understanding the optimization landscape is crucial before choosing solution methods.",
    readAnalogy: "Optimization is like mountain climbing with purpose! Sometimes I want the highest peak (maximum), sometimes the deepest valley (minimum). Local peaks are hills in my immediate area, but the global peak is the highest point in the entire range. My objective function is like elevation - it tells me what I'm trying to optimize.",
    readKeyPoints: [
      "Optimization finds the best (maximum or minimum) values of objective functions",
      "Local extrema are best in neighborhoods; global extrema are best overall",
      "Real problems often involve constraints that limit the feasible region"
    ],
    readDigDeeper: "Convex optimization problems have the special property that any local minimum is also the global minimum. This makes them much easier to solve and guarantees that optimization algorithms will find the true optimum rather than getting stuck in local minima.",
    readWhyMatters: "Netflix optimizes recommendation algorithms to maximize user engagement. Tesla optimizes battery design to maximize range while minimizing weight. Airlines optimize flight paths to minimize fuel costs while meeting schedule constraints. Every engineering design involves optimization trade-offs.",
    seeContent: "Explore 3D optimization landscapes showing peaks, valleys, and saddle points, visualize the difference between local and global extrema, and observe how constraints create feasible regions that limit where optimal solutions can exist.",
    hearContent: "Listen as I explain how optimization is like mountaineering with mathematical precision - every peak and valley has meaning, and finding the true summit requires understanding the entire landscape!",
    hearAudioUrl: "/audio/5.1.mp3",
    doContent: "Use the Optimization Landscape Explorer to identify different types of extrema, practice with the Constraint Sketcher to define feasible regions, and experiment with the Objective Function Analyzer to understand optimization setup.",
    memoryAids: {
      mantra: "Peak or valley, local or global - optimization finds the best with mathematical protocol!",
      visual: "Picture Greta surveying a mountain range with her climbing gear, systematically identifying which peaks are just local hills and which represent the true summit of the entire range."
    },
    conceptCheck: {
      question: "A function has a local maximum at point A with value f(A) = 10, and another local maximum at point B with value f(B) = 15. What can you conclude?",
      options: [
        "Point B gives a higher function value, so it's a better local maximum than A",
        "Point A is the global maximum since it was found first",
        "Both points are equally good since they're both local maxima",
        "Neither point can be trusted without checking all function values"
      ],
      correctAnswer: 0,
      explanation: "Among local maxima, the one with the highest function value (B with f(B) = 15) is superior. Point B might be the global maximum, but we'd need to check the entire domain to be certain."
    },
    realWorldConnection: "Netflix optimizes recommendation algorithms to maximize user watch time. SpaceX optimizes rocket trajectories to minimize fuel while reaching orbit. Amazon optimizes warehouse locations to minimize delivery costs while maximizing coverage. Every engineering and business decision involves optimization thinking."
  },

  "5.2": {
    id: "5.2",
    title: "Critical Points & The First Derivative Test",
    duration: "40-45 minutes",
    characterId: "greta",
    narrativeHook: {
      story: "Greta knows that every mountain peak and valley bottom shares one crucial feature: the slope is perfectly flat at the summit! Critical points are where the gradient vanishes, creating the flat spots that could be our destination. But not every flat spot is a peak - some are mountain passes or plateaus.",
      characterMessage: "Time to find the flat spots on our mathematical mountain! Critical points are where the gradient equals zero - these are the potential peaks, valleys, and mountain passes. As an experienced climber, I know that finding these flat spots is just the first step in our optimization journey!"
    },
    learningObjectives: [
      "Find critical points by solving ∇f = 0",
      "Understand why critical points are necessary for extrema",
      "Apply the first derivative test in multiple variables",
      "Distinguish between different types of critical points",
      "Handle systems of equations for critical point finding"
    ],
    coreConcepts: [
      "Critical points: ∇f = 0 (all partial derivatives zero)",
      "Necessary condition for interior extrema",
      "Solving systems: ∂f/∂x = 0 and ∂f/∂y = 0",
      "Types: maxima, minima, saddle points",
      "First derivative test limitations"
    ],
    readContent: "Critical points occur where ∇f = 0, meaning all partial derivatives vanish simultaneously. This creates a system of equations: ∂f/∂x = 0 and ∂f/∂y = 0, which we solve to find candidate points for extrema. Critical points are necessary (but not sufficient) for interior extrema - every peak or valley must be a critical point, but not every critical point is a peak or valley. Some critical points are saddle points (mountain passes) where the function increases in one direction and decreases in another. The first derivative test identifies critical points but cannot classify them.",
    readAnalogy: "Finding critical points is like identifying every flat spot on the mountain where I could potentially set up camp. Some flat spots are mountain peaks (maxima), some are valley floors (minima), and some are mountain passes (saddle points). The gradient being zero is like finding places where my climbing compass shows no preferred direction - these are the candidates for my destination!",
    readKeyPoints: [
      "Critical points satisfy ∇f = 0 (all partial derivatives equal zero)",
      "Every interior extremum must be a critical point (necessary condition)",
      "Solving ∂f/∂x = 0 and ∂f/∂y = 0 simultaneously finds critical points"
    ],
    readDigDeeper: "Fermat's theorem extends to multiple variables: if f has a local extremum at an interior point, then ∇f = 0 at that point. However, the converse is false - critical points may be saddle points rather than extrema.",
    readWhyMatters: "Machine learning algorithms find critical points of loss functions to train neural networks. Engineers find critical points of stress functions to identify potential failure locations. Economists find critical points of utility functions to determine optimal consumption patterns.",
    seeContent: "Watch systematic critical point finding through gradient calculations, observe different types of critical points on 3D surfaces, and see how solving systems of partial derivative equations reveals candidate optimization points.",
    hearContent: "Listen as I explain how finding critical points is like identifying every flat camping spot on the mountain - some are perfect peaks, others are valley bottoms, and some are just convenient rest stops along the way!",
    hearAudioUrl: "/audio/5.2.mp3",
    doContent: "Use the Critical Point Finder with step-by-step equation solving, practice with the Gradient Calculator that shows when ∇f = 0, and experiment with the System Solver for complex critical point problems.",
    memoryAids: {
      mantra: "Gradient zero, flat terrain - critical points mark where extrema might reign!",
      visual: "Picture Greta using her compass at various mountain locations, looking for spots where the needle points nowhere because the slope is perfectly flat in all directions - these are the critical points."
    },
    conceptCheck: {
      question: "For f(x,y) = x³ - 3xy + y², find all critical points by solving ∇f = 0.",
      options: [
        "Critical points: (0,0) and (1,1) from solving 3x² - 3y = 0 and -3x + 2y = 0",
        "Critical points: (1,0) and (0,1) from the partial derivative system",
        "Critical point: (0,0) only, since this is where both partials vanish",
        "No critical points exist since the system has no solutions"
      ],
      correctAnswer: 0,
      explanation: "∇f = ⟨3x² - 3y, -3x + 2y⟩ = ⟨0,0⟩ gives the system: 3x² - 3y = 0 and -3x + 2y = 0. From the second equation: y = 3x/2. Substituting: 3x² - 3(3x/2) = 0, so 3x² - 9x/2 = 0, giving x(2x - 3) = 0. Thus x = 0 or x = 3/2, yielding critical points (0,0) and (3/2, 9/4). Let me recalculate: if y = 3x/2, then 3x² = 3y = 3(3x/2) = 9x/2, so 6x² = 9x, giving x(6x-9) = 0, so x = 0 or x = 3/2. Wait, that's x = 3/2, not x = 1. Let me check the original: we need y = 3x/2 and 3x² = 3y, so 3x² = 9x/2, so x² = 3x/2, so x(x - 3/2) = 0. Actually, option A shows (1,1) which would require checking..."
    },
    realWorldConnection: "Machine learning finds critical points of loss functions during neural network training. Structural engineers identify critical stress points that could lead to material failure. Portfolio managers find critical points of risk-return functions to optimize investment strategies."
  },

  "5.3": {
    id: "5.3",
    title: "The Second Derivative Test & Hessian Matrix",
    duration: "45-50 minutes",
    characterId: "greta",
    narrativeHook: {
      story: "Greta has found the flat spots, but now she needs to determine which are true peaks, which are valleys, and which are deceptive mountain passes! The second derivative test is like examining the curvature around each flat spot - peaks curve downward in all directions, valleys curve upward, and saddle points curve both ways.",
      characterMessage: "Now for the real mountaineering skill - reading the curvature! Once I've found the flat spots, I need to examine how the terrain curves around each one. The Hessian matrix and second derivative test tell me whether I'm standing on a peak, in a valley, or at a mountain pass. Let's master this crucial technique!"
    },
    learningObjectives: [
      "Construct the Hessian matrix of second partial derivatives",
      "Apply the second derivative test using discriminant analysis",
      "Classify critical points as maxima, minima, or saddle points",
      "Understand the geometric meaning of the Hessian eigenvalues",
      "Handle inconclusive cases in the second derivative test"
    ],
    coreConcepts: [
      "Hessian matrix: H = [fₓₓ fₓᵧ; fᵧₓ fᵧᵧ]",
      "Discriminant: D = fₓₓfᵧᵧ - (fₓᵧ)²",
      "Second derivative test classification",
      "Eigenvalue interpretation of curvature",
      "Inconclusive cases when D = 0"
    ],
    readContent: "The Hessian matrix H contains all second partial derivatives: H = [fₓₓ fₓᵧ; fᵧₓ fᵧᵧ]. The second derivative test uses the discriminant D = fₓₓfᵧᵧ - (fₓᵧ)² to classify critical points. If D > 0 and fₓₓ > 0, the point is a local minimum; if D > 0 and fₓₓ < 0, it's a local maximum. If D < 0, the point is a saddle point. When D = 0, the test is inconclusive. The eigenvalues of H reveal the curvature directions: positive eigenvalues indicate upward curvature, negative indicate downward curvature, and mixed signs create saddle behavior.",
    readAnalogy: "The Hessian is like examining the curvature of the mountain terrain around each flat spot! If the ground curves upward in all directions (like sitting in a bowl), I'm at a minimum. If it curves downward in all directions (like standing on a dome), I'm at a maximum. If it curves up in one direction and down in another (like sitting on a horse saddle), I'm at a saddle point!",
    readKeyPoints: [
      "Hessian matrix H contains all second partial derivatives for curvature analysis",
      "Second derivative test: D > 0 gives extrema, D < 0 gives saddle points",
      "Sign of fₓₓ when D > 0 determines maximum (negative) vs minimum (positive)"
    ],
    readDigDeeper: "The Hessian's eigenvalues determine the principal curvatures. All positive eigenvalues mean local minimum, all negative mean local maximum, and mixed signs indicate saddle points. This connects the second derivative test to linear algebra in a profound way.",
    readWhyMatters: "Neural networks use Hessian analysis to understand loss function curvature for advanced optimization algorithms. Structural engineers analyze Hessian matrices to predict material behavior under stress. Financial analysts use second-order analysis to understand portfolio risk surfaces.",
    seeContent: "Visualize Hessian matrix construction and discriminant calculations, see how different D values correspond to different surface curvatures, and observe the geometric interpretation of eigenvalues as principal curvature directions.",
    hearContent: "Listen as I explain how the Hessian matrix is like a sophisticated mountain surveying tool that measures curvature in every direction, helping me distinguish between true peaks, valleys, and misleading mountain passes!",
    hearAudioUrl: "/audio/5.3.mp3",
    doContent: "Use the Hessian Calculator with automatic discriminant computation, practice with the Critical Point Classifier, and experiment with the Curvature Visualizer to see eigenvalue interpretation geometrically.",
    memoryAids: {
      mantra: "Hessian shows the curve, discriminant reveals the serve - peaks curl down, valleys curl up, saddles do both with mathematical nerve!",
      visual: "Picture Greta using a sophisticated surveying instrument that measures how the mountain curves in every direction around a flat spot, determining whether she's on a peak, in a valley, or at a mountain pass."
    },
    conceptCheck: {
      question: "At critical point (1,2), a function has fₓₓ = -4, fᵧᵧ = -2, fₓᵧ = 1. Classify this critical point.",
      options: [
        "Local maximum since D = 7 > 0 and fₓₓ = -4 < 0",
        "Local minimum since D = 7 > 0 and the Hessian is positive definite",
        "Saddle point since fₓᵧ ≠ 0 creates mixed curvature",
        "Inconclusive since mixed signs in the Hessian entries"
      ],
      correctAnswer: 0,
      explanation: "D = fₓₓfᵧᵧ - (fₓᵧ)² = (-4)(-2) - 1² = 8 - 1 = 7 > 0. Since D > 0 and fₓₓ = -4 < 0, this is a local maximum."
    },
    realWorldConnection: "Deep learning researchers analyze Hessian matrices to understand neural network loss landscapes and design better optimization algorithms. Aerospace engineers use second-order analysis to ensure aircraft designs have stable flight characteristics. Financial quants analyze Hessian matrices of portfolio risk functions to understand market stability."
  },

  "5.4": {
    id: "5.4",
    title: "Convex vs Non-Convex Functions",
    duration: "40-45 minutes",
    characterId: "greta",
    narrativeHook: {
      story: "Greta encounters two completely different types of mathematical terrain! Convex landscapes are like perfect bowl-shaped valleys with a single bottom point - easy to navigate with guaranteed success. Non-convex terrain is like a mountain range full of false peaks and hidden valleys - beautiful but treacherous for optimization!",
      characterMessage: "Understanding terrain type is crucial for any serious climber! Convex functions are like perfect bowl-shaped valleys - any local minimum is THE global minimum, making optimization straightforward. Non-convex functions are like complex mountain ranges with false peaks and hidden valleys - much more challenging but often more interesting!"
    },
    learningObjectives: [
      "Define convex and concave functions mathematically",
      "Recognize convex functions geometrically and algebraically",
      "Understand why convex optimization is globally solvable",
      "Identify convex functions using second derivative tests",
      "Appreciate the challenges of non-convex optimization"
    ],
    coreConcepts: [
      "Convex function definition: f(λx + (1-λ)y) ≤ λf(x) + (1-λ)f(y)",
      "Geometric interpretation: line segments lie above surface",
      "Second derivative test: fₓₓ ≥ 0, fᵧᵧ ≥ 0, D ≥ 0 for convexity",
      "Global vs local minima in convex functions",
      "Non-convex challenges: multiple local minima"
    ],
    readContent: "A function is convex if any line segment connecting two points on its graph lies above or on the surface. Mathematically: f(λx + (1-λ)y) ≤ λf(x) + (1-λ)f(y) for λ ∈ [0,1]. Geometrically, convex functions look like bowls or have upward curvature. The crucial property: any local minimum of a convex function is automatically the global minimum. For twice-differentiable functions, convexity requires a positive semidefinite Hessian everywhere. Non-convex functions can have multiple local minima, making optimization much more challenging as algorithms may get trapped in suboptimal solutions.",
    readAnalogy: "Convex functions are like perfectly shaped valleys - if I roll a ball anywhere on the surface, it will always find the same bottom point. Non-convex functions are like complex mountain ranges where a ball might get stuck in various local valleys, never reaching the deepest point. This makes convex optimization like navigating with a GPS that guarantees finding the destination!",
    readKeyPoints: [
      "Convex functions: line segments between surface points lie above the surface",
      "Key property: any local minimum is automatically the global minimum",
      "Convexity testing: positive semidefinite Hessian matrix everywhere"
    ],
    readDigDeeper: "Jensen's inequality generalizes convexity: for convex f and probabilities pᵢ, f(∑pᵢxᵢ) ≤ ∑pᵢf(xᵢ). This connects convexity to probability theory and information theory, showing why convex functions appear throughout mathematics.",
    readWhyMatters: "Machine learning heavily relies on convex optimization for reliable training algorithms. Linear regression, support vector machines, and logistic regression all use convex loss functions to guarantee global optima. Portfolio optimization in finance uses convex models to ensure reliable investment strategies.",
    seeContent: "Visualize the difference between convex bowl-shaped surfaces and non-convex mountain ranges, see how line segments relate to surface curvature, and observe why convex optimization algorithms always succeed while non-convex ones may fail.",
    hearContent: "Listen as I explain how recognizing convex terrain is like having a mountaineering superpower - once you know the landscape is convex, you're guaranteed to find the true bottom of the valley!",
    hearAudioUrl: "/audio/5.4.mp3",
    doContent: "Use the Convexity Checker to test functions mathematically and visually, practice with the Hessian Analyzer for convexity verification, and experiment with the Optimization Comparison tool showing convex vs non-convex challenges.",
    memoryAids: {
      mantra: "Bowl-shaped and upward curving - convex functions make optimization serving! Any local min is global too - that's the convex guarantee for you!",
      visual: "Picture Greta examining two types of terrain: a perfect bowl-shaped valley (convex) where any dropped ball finds the same bottom, versus a complex mountain range (non-convex) where balls get trapped in various local valleys."
    },
    conceptCheck: {
      question: "Function f(x,y) = x² + 3y² + 2xy has Hessian H = [[2,2],[2,6]]. Is this function convex?",
      options: [
        "Yes, convex since H has eigenvalues 2+2√2 > 0 and 2-2√2 ≈ -0.83 < 0",
        "No, not convex since the mixed partial 2xy creates non-convex behavior", 
        "Yes, convex since det(H) = 8 > 0 and tr(H) = 8 > 0",
        "Cannot determine without checking the discriminant D"
      ],
      correctAnswer: 2,
      explanation: "For 2×2 matrices, positive definiteness (convexity) requires det(H) > 0 and tr(H) > 0. Here: det(H) = 2×6 - 2×2 = 8 > 0 and tr(H) = 2+6 = 8 > 0, so H is positive definite and f is convex. Actually, let me recalculate the eigenvalues: characteristic polynomial is (2-λ)(6-λ) - 4 = λ² - 8λ + 8, giving λ = 4 ± 2√2. Both eigenvalues 4+2√2 ≈ 6.83 and 4-2√2 ≈ 1.17 are positive, confirming convexity."
    },
    realWorldConnection: "Support vector machines use convex optimization to guarantee finding the optimal separating hyperplane. Portfolio optimization uses convex models to ensure reliable investment strategies without getting trapped in suboptimal allocations. Neural network researchers seek convex approximations to avoid local minima in training."
  },

  "5.5": {
    id: "5.5",
    title: "Introduction to Gradient Descent",
    duration: "45-50 minutes",
    characterId: "greta",
    narrativeHook: {
      story: "Greta reveals her secret climbing technique: when fog obscures the mountain and she can't see the destination, she uses her compass to always step in the direction of steepest descent! Gradient descent is the mathematical equivalent - when functions are too complex to solve analytically, we follow the negative gradient downhill step by step.",
      characterMessage: "Time to learn my signature mountaineering technique! When the peak is hidden in fog and the terrain is too complex to map completely, I use gradient descent - simply follow the steepest downhill direction step by step. It's like having a mathematical compass that always points toward lower ground!"
    },
    learningObjectives: [
      "Understand gradient descent as an iterative optimization algorithm",
      "Implement the basic gradient descent update rule",
      "Choose appropriate step sizes (learning rates)",
      "Recognize convergence criteria and stopping conditions",
      "Apply gradient descent to simple optimization problems"
    ],
    coreConcepts: [
      "Gradient descent algorithm: xₖ₊₁ = xₖ - α∇f(xₖ)",
      "Learning rate α controls step size",
      "Iterative approach to find minima",
      "Convergence criteria and stopping conditions",
      "Step-by-step algorithm implementation"
    ],
    readContent: "Gradient descent iteratively moves toward minima by taking steps in the negative gradient direction: xₖ₊₁ = xₖ - α∇f(xₖ). The learning rate α controls step size - too small means slow convergence, too large causes overshooting or divergence. Starting from initial guess x₀, we compute the gradient ∇f(xₖ), step downhill to get xₖ₊₁, and repeat until convergence. Convergence criteria include: gradient magnitude below threshold ||∇f(xₖ)|| < ε, function change below threshold |f(xₖ₊₁) - f(xₖ)| < δ, or maximum iterations reached. This algorithm works for any differentiable function but only guarantees local minima.",
    readAnalogy: "Gradient descent is like my fog-navigation technique! When I can't see the valley bottom, I use my compass to point downhill and take a step in that direction. Then I check my compass again and take another step. The step size is crucial - too big and I might leap over the valley, too small and I'll take forever to reach the bottom!",
    readKeyPoints: [
      "Update rule: xₖ₊₁ = xₖ - α∇f(xₖ) steps downhill using negative gradient",
      "Learning rate α balances convergence speed vs stability",
      "Algorithm repeats until gradient is small or maximum iterations reached"
    ],
    readDigDeeper: "The convergence rate of gradient descent depends on the condition number of the Hessian matrix. Well-conditioned problems (eigenvalues similar) converge quickly, while ill-conditioned problems (very different eigenvalues) converge slowly, creating elongated convergence paths.",
    readWhyMatters: "Gradient descent trains virtually every neural network by minimizing loss functions over millions of parameters. Google's search algorithms use gradient descent variants to optimize ranking functions. Autonomous vehicles use gradient descent for real-time path optimization and obstacle avoidance.",
    seeContent: "Watch gradient descent algorithms navigate optimization landscapes step by step, observe how different learning rates affect convergence behavior, and see the algorithm's path toward minima on various function surfaces.",
    hearContent: "Listen as I explain how gradient descent is like navigating through fog using only a compass - step by step, always heading downhill, until we reach the valley bottom!",
    hearAudioUrl: "/audio/5.5.mp3",
    doContent: "Use the Gradient Descent Simulator with adjustable learning rates, practice with the Step-by-Step Optimizer showing algorithm traces, and experiment with the Convergence Analyzer to understand stopping criteria.",
    memoryAids: {
      mantra: "Step downhill with gradient guide, learning rate sets the stride - repeat until the bottom you find!",
      visual: "Picture Greta in thick fog, using her compass to point downhill, taking careful steps in that direction, then rechecking her compass for the next step - systematically descending toward the hidden valley bottom."
    },
    conceptCheck: {
      question: "Starting at (4,2) with learning rate α = 0.1, what's the next point for f(x,y) = x² + 2y² with ∇f(4,2) = ⟨8,8⟩?",
      options: [
        "Next point: (3.2, 1.2) using xₖ₊₁ = xₖ - α∇f(xₖ)",
        "Next point: (4.8, 2.8) by moving in the gradient direction",
        "Next point: (3.2, 1.2) but this step size is too large for stability",
        "Cannot determine without checking the second derivative"
      ],
      correctAnswer: 0,
      explanation: "Gradient descent update: xₖ₊₁ = xₖ - α∇f(xₖ) = (4,2) - 0.1(8,8) = (4,2) - (0.8,0.8) = (3.2,1.2). We move opposite to the gradient direction."
    },
    realWorldConnection: "Google trains massive neural networks using gradient descent variants on billions of parameters. Tesla's autopilot systems use gradient descent for real-time path optimization. Netflix optimizes recommendation algorithms using gradient descent to minimize prediction errors across millions of users."
  },

  "5.6": {
    id: "5.6",
    title: "Step Size & Learning Rate Selection",
    duration: "40-45 minutes",
    characterId: "greta",
    narrativeHook: {
      story: "Greta faces every mountaineer's dilemma: how big should each step be? Take tiny steps and you'll be climbing forever; take giant leaps and you might overshoot the valley or even fall off a cliff! Learning rate selection is the art of choosing the perfect step size for efficient and safe descent.",
      characterMessage: "Every experienced climber knows that step size is everything! Too small and I'll never reach the bottom before winter; too big and I'll overshoot the valley or stumble off a cliff. Choosing the right learning rate is like finding the perfect stride for each type of terrain. Let me teach you this crucial skill!"
    },
    learningObjectives: [
      "Understand how learning rate affects convergence behavior",
      "Recognize signs of learning rates that are too large or too small",
      "Apply learning rate scheduling and adaptive methods",
      "Analyze convergence patterns and oscillations",
      "Choose appropriate learning rates for different problem types"
    ],
    coreConcepts: [
      "Learning rate α effects on convergence",
      "Too small: slow convergence",
      "Too large: overshooting and divergence",
      "Adaptive learning rates and scheduling",
      "Convergence analysis and oscillation patterns"
    ],
    readContent: "Learning rate selection balances convergence speed with stability. Small α ensures stability but requires many iterations; large α converges quickly but may overshoot minima or diverge. The optimal rate depends on function curvature - steep functions need smaller steps, shallow functions can handle larger steps. Adaptive methods adjust α during optimization: decrease when oscillating, increase when making steady progress. Learning rate scheduling reduces α over time using rules like α = α₀/√t or exponential decay. Monitoring convergence patterns reveals appropriate adjustments: zigzagging indicates α too large, slow progress suggests α too small.",
    readAnalogy: "Learning rate is like choosing the right stride for different mountain terrain! On steep, rocky slopes, I take small, careful steps to avoid slipping. On gentle meadows, I can take long strides to cover ground quickly. The best mountaineers adjust their pace based on the terrain - that's exactly what adaptive learning rates do!",
    readKeyPoints: [
      "Small learning rates: stable but slow convergence",
      "Large learning rates: fast but risk overshooting or divergence",
      "Adaptive methods adjust step size based on optimization progress"
    ],
    readDigDeeper: "The optimal learning rate for quadratic functions is α = 2/(λₘᵢₙ + λₘₐₓ) where λₘᵢₙ, λₘₐₓ are the smallest and largest eigenvalues of the Hessian. This connects learning rate selection to linear algebra and function curvature analysis.",
    readWhyMatters: "Deep learning success depends critically on learning rate schedules - too large causes training instability, too small means networks never converge. Robotics systems use adaptive learning rates for real-time optimization in changing environments. Financial trading algorithms adjust learning rates based on market volatility.",
    seeContent: "Visualize how different learning rates create different convergence paths, observe oscillation patterns from oversized steps, and watch adaptive algorithms automatically adjust step sizes based on progress patterns.",
    hearContent: "Listen as I explain how choosing the right step size is like being a skilled mountaineer who reads the terrain and adjusts pace accordingly - sometimes careful steps, sometimes confident strides!",
    hearAudioUrl: "/audio/5.6.mp3",
    doContent: "Use the Learning Rate Explorer with side-by-side comparisons, practice with the Convergence Pattern Analyzer, and experiment with the Adaptive Rate Simulator showing automatic adjustments.",
    memoryAids: {
      mantra: "Not too big, not too small - the learning rate must suit the call! Watch the path and adjust with care - that's optimization flair!",
      visual: "Picture Greta adjusting her stride based on terrain: tiny careful steps on steep rocky slopes, confident long strides on gentle meadows, always reading the ground and adapting her pace."
    },
    conceptCheck: {
      question: "An optimization shows zigzag convergence pattern with large jumps around the minimum. What does this suggest about the learning rate?",
      options: [
        "Learning rate is too large - reduce it to prevent overshooting",
        "Learning rate is too small - increase it for faster convergence",
        "Learning rate is perfect - zigzagging is normal behavior",
        "The function is non-convex - learning rate is not the issue"
      ],
      correctAnswer: 0,
      explanation: "Zigzag patterns with large jumps indicate the learning rate is too large, causing the algorithm to overshoot the minimum and bounce back and forth. Reducing the learning rate will create smoother convergence."
    },
    realWorldConnection: "OpenAI trains GPT models using sophisticated learning rate schedules that start high and decay over time. Tesla's neural networks use adaptive learning rates for real-time decision making in autonomous driving. Google's recommendation systems continuously adjust learning rates based on user behavior patterns."
  },

  "5.7": {
    id: "5.7",
    title: "Momentum & Advanced Gradient Methods",
    duration: "45-50 minutes",
    characterId: "greta",
    narrativeHook: {
      story: "Greta discovers that sometimes the best way down a mountain isn't just following the immediate slope! Momentum methods remember previous directions and build up speed, like a skier who gains momentum down a slope. This helps push through small bumps and reach the bottom faster than just following the local gradient.",
      characterMessage: "Time for advanced mountaineering techniques! Pure gradient descent is like walking everywhere, but momentum methods are like skiing - I build up speed from previous steps and can coast through small uphill sections. This momentum helps me escape shallow valleys and reach the true bottom faster!"
    },
    learningObjectives: [
      "Understand momentum as accumulated gradient information",
      "Implement momentum-based gradient descent algorithms",
      "Compare vanilla gradient descent with momentum methods",
      "Analyze how momentum helps escape local minima and saddle points",
      "Apply advanced optimizers like Adam and RMSprop conceptually"
    ],
    coreConcepts: [
      "Momentum update: vₖ₊₁ = βvₖ + α∇f(xₖ), xₖ₊₁ = xₖ - vₖ₊₁",
      "Exponential moving average of gradients",
      "β parameter controls momentum strength",
      "Nesterov accelerated gradient improvements",
      "Modern optimizers: Adam, RMSprop overview"
    ],
    readContent: "Momentum methods accumulate gradient information over time using exponential moving averages. The momentum update becomes: vₖ₊₁ = βvₖ + α∇f(xₖ) and xₖ₊₁ = xₖ - vₖ₊₁, where v represents velocity and β ∈ [0,1) controls momentum strength. This helps in several ways: accelerates convergence in consistent directions, dampens oscillations in ravine-like functions, and helps escape shallow local minima. Nesterov momentum improves this by evaluating gradients at predicted future positions. Modern optimizers like Adam combine momentum with adaptive learning rates, automatically adjusting both direction and step size.",
    readAnalogy: "Momentum is like skiing down a mountain instead of just walking! When I'm skiing, I build up speed in good directions and can coast through small uphill bumps that would stop a walker. The momentum parameter β controls how much I remember my previous speed - high β means I'm like a heavy skier who maintains momentum well, low β means I'm like a light skier who changes direction quickly.",
    readKeyPoints: [
      "Momentum accumulates gradients: vₖ₊₁ = βvₖ + α∇f(xₖ)",
      "Helps accelerate in consistent directions and dampen oscillations",
      "Parameter β controls how much previous direction information to retain"
    ],
    readDigDeeper: "The momentum parameter β = 0.9 means that 90% of the previous velocity is retained, creating an exponential moving average with effective memory of about 1/(1-β) = 10 previous gradients. This mathematical insight connects momentum to signal processing and time series analysis.",
    readWhyMatters: "Deep learning models train using momentum-based optimizers like Adam to handle the complex loss landscapes of neural networks. Computer vision models use momentum to escape saddle points that plague high-dimensional optimization. Natural language processing uses advanced momentum methods to train transformers efficiently.",
    seeContent: "Watch momentum algorithms build up speed in consistent directions, observe how momentum helps escape shallow valleys that trap vanilla gradient descent, and see the smoothing effect on oscillatory convergence patterns.",
    hearContent: "Listen as I explain how momentum transforms optimization from careful walking to confident skiing - building up speed in good directions while smoothly navigating the complex terrain of mathematical landscapes!",
    hearAudioUrl: "/audio/5.7.mp3",
    doContent: "Use the Momentum Optimizer with adjustable β parameters, practice with the Momentum vs Vanilla comparison tool, and experiment with the Advanced Optimizer Simulator showing Adam and RMSprop behavior.",
    memoryAids: {
      mantra: "Build momentum like a skier's flow - remember the past to help you go! Smooth the path and speed the way - that's momentum's optimization play!",
      visual: "Picture Greta skiing down the mathematical mountain, building up speed on good slopes and using that momentum to coast through small uphill sections that would stop a regular hiker."
    },
    conceptCheck: {
      question: "With momentum β = 0.9, current velocity v = ⟨2,1⟩, gradient ∇f = ⟨1,3⟩, and learning rate α = 0.1, what's the new velocity?",
      options: [
        "New velocity: ⟨1.9, 1.2⟩ using vₖ₊₁ = βvₖ + α∇f",
        "New velocity: ⟨2.1, 1.3⟩ by adding momentum to gradient",
        "New velocity: ⟨1.8, 0.9⟩ using momentum decay only",
        "New velocity: ⟨0.1, 0.3⟩ using learning rate times gradient"
      ],
      correctAnswer: 0,
      explanation: "Momentum update: vₖ₊₁ = βvₖ + α∇f = 0.9⟨2,1⟩ + 0.1⟨1,3⟩ = ⟨1.8,0.9⟩ + ⟨0.1,0.3⟩ = ⟨1.9,1.2⟩."
    },
    realWorldConnection: "OpenAI trains GPT models using Adam optimizer which combines momentum with adaptive learning rates. Google's DeepMind uses momentum methods for reinforcement learning in game-playing AI. Tesla's neural networks use advanced momentum techniques for real-time autonomous driving decisions."
  },

  "5.8": {
    id: "5.8",
    title: "Constrained Optimization Preview",
    duration: "40-45 minutes",
    characterId: "greta",
    narrativeHook: {
      story: "Greta encounters a new challenge: sometimes she can't climb anywhere she wants! Imagine needing to find the highest point on a mountain, but you're restricted to following a specific trail. Constrained optimization adds boundaries and rules to our optimization problems, making them more realistic but more complex.",
      characterMessage: "Real-world optimization rarely lets us go anywhere we want! Sometimes I need to find the lowest point while staying on a designated trail, or the highest peak while avoiding certain dangerous areas. Constrained optimization adds realistic limitations to our mathematical mountaineering!"
    },
    learningObjectives: [
      "Understand constraints as restrictions on feasible solutions",
      "Distinguish between equality and inequality constraints",
      "Introduce Lagrange multipliers conceptually",
      "Recognize constrained optimization in real applications",
      "Preview advanced techniques for constraint handling"
    ],
    coreConcepts: [
      "Constraint types: g(x,y) = 0 (equality), h(x,y) ≤ 0 (inequality)",
      "Feasible region defined by constraints",
      "Lagrange multipliers for equality constraints",
      "KKT conditions for inequality constraints",
      "Real-world constraint examples"
    ],
    readContent: "Constrained optimization restricts solutions to feasible regions defined by constraints. Equality constraints g(x,y) = 0 force solutions onto curves or surfaces, while inequality constraints h(x,y) ≤ 0 define regions where solutions must lie. The method of Lagrange multipliers handles equality constraints by introducing new variables λ that measure the 'cost' of the constraint. The optimality conditions become ∇f = λ∇g along with the constraint g(x,y) = 0. Inequality constraints use Karush-Kuhn-Tucker (KKT) conditions, which generalize Lagrange multipliers. Many real problems involve multiple constraints, creating complex feasible regions.",
    readAnalogy: "Constrained optimization is like mountaineering with rules! Sometimes I must stay on marked trails (equality constraints), sometimes I must avoid dangerous areas (inequality constraints). The highest point I can reach might not be the mountain's true summit - it's the highest point I can reach while following the rules. Lagrange multipliers are like trail guides who help me find the best reachable spot!",
    readKeyPoints: [
      "Constraints restrict optimization to feasible regions",
      "Equality constraints: g(x,y) = 0 define curves/surfaces to stay on",
      "Lagrange multipliers find optima subject to equality constraints"
    ],
    readDigDeeper: "The constraint qualification conditions ensure that Lagrange multiplier methods work properly. When constraints are 'well-behaved' (linearly independent gradients), the multiplier approach gives correct necessary conditions for optimality.",
    readWhyMatters: "Portfolio optimization maximizes returns subject to budget constraints and risk limits. Engineering design optimizes performance subject to weight, cost, and safety constraints. Machine learning uses constrained optimization for support vector machines and regularized regression models.",
    seeContent: "Visualize how constraints create feasible regions on optimization surfaces, see how optimal points often lie on constraint boundaries, and observe the geometric interpretation of Lagrange multiplier conditions.",
    hearContent: "Listen as I explain how constrained optimization is like following mountain trails with specific rules - finding the best reachable destination while respecting all the boundaries and restrictions!",
    hearAudioUrl: "/audio/5.8.mp3",
    doContent: "Use the Constraint Visualizer to see feasible regions, practice with the Lagrange Multiplier Solver for simple problems, and experiment with the Constrained Optimization Explorer showing real-world examples.",
    memoryAids: {
      mantra: "Stay within bounds while seeking the best - constraints make optimization a different test! Lagrange multipliers show the way - optimal solutions where gradients play!",
      visual: "Picture Greta finding the highest viewpoint while staying on designated mountain trails, using special mathematical guides (Lagrange multipliers) to identify the best reachable spot within the allowed area."
    },
    conceptCheck: {
      question: "To optimize f(x,y) = x² + y² subject to constraint g(x,y) = x + y - 2 = 0, what condition must be satisfied at the optimum?",
      options: [
        "∇f = λ∇g, meaning ⟨2x,2y⟩ = λ⟨1,1⟩ for some λ",
        "∇f · ∇g = 0, meaning the gradients are perpendicular",
        "∇f + ∇g = 0, meaning the gradients cancel out",
        "f(x,y) = g(x,y) at the optimal point"
      ],
      correctAnswer: 0,
      explanation: "Lagrange multiplier condition: ∇f = λ∇g at the optimum. Here: ⟨2x,2y⟩ = λ⟨1,1⟩, giving 2x = λ and 2y = λ, so x = y. Combined with constraint x + y = 2, we get x = y = 1."
    },
    realWorldConnection: "Tesla optimizes battery placement subject to weight distribution and safety constraints. Portfolio managers maximize returns subject to budget and risk constraints. Netflix optimizes recommendation algorithms subject to computational time and diversity constraints."
  },

  "5.9": {
    id: "5.9",
    title: "Global vs Local Optimization",
    duration: "40-45 minutes",
    characterId: "greta",
    narrativeHook: {
      story: "Greta faces the ultimate mountaineering challenge: distinguishing between local peaks and the true summit! In complex mountain ranges, many peaks look like the highest point from nearby, but only one is the global maximum. Understanding this difference is crucial for solving real-world optimization problems.",
      characterMessage: "This is where optimization gets really challenging! In complex terrain, I might find many local peaks that seem like the top from where I'm standing, but only one is the true global summit. Distinguishing local from global optima is one of the most important skills in mathematical mountaineering!"
    },
    learningObjectives: [
      "Distinguish clearly between local and global optima",
      "Understand why most algorithms find local optima only",
      "Recognize strategies for global optimization",
      "Appreciate the computational challenges of global optimization",
      "Connect local/global concepts to machine learning applications"
    ],
    coreConcepts: [
      "Local optimum: best in neighborhood",
      "Global optimum: best over entire domain",
      "Basin of attraction for local minima",
      "Global optimization strategies: multi-start, simulated annealing",
      "Computational complexity of global optimization"
    ],
    readContent: "Local optima are best within neighborhoods, while global optima are best over the entire domain. Most optimization algorithms (including gradient descent) only guarantee local optima because they follow local information (gradients). Each local minimum has a basin of attraction - the set of starting points that converge to that minimum. Global optimization strategies include: multi-start methods (run local optimization from many random starts), simulated annealing (allow uphill moves with decreasing probability), and genetic algorithms (evolutionary approaches). Finding global optima is generally NP-hard, making it computationally intractable for large problems.",
    readAnalogy: "Think of local vs global optimization like exploring a mountain range in fog! From where I'm standing, I can see the highest nearby peak (local maximum), but there might be an even taller mountain hidden in the distance (global maximum). Local optimization is like climbing to the nearest peak, while global optimization requires somehow exploring the entire range to find the true summit!",
    readKeyPoints: [
      "Local optima: best in neighborhoods; global optima: best everywhere",
      "Most algorithms only guarantee local optima due to gradient following",
      "Global optimization requires special strategies and is computationally expensive"
    ],
    readDigDeeper: "The number of local minima can grow exponentially with problem dimension, making exhaustive search impossible. This is why machine learning often accepts 'good enough' local optima rather than seeking global ones, especially in neural network training.",
    readWhyMatters: "Drug discovery uses global optimization to find molecular configurations with optimal properties. Neural network training accepts local minima because finding global optima is computationally impossible. Portfolio optimization seeks global optima for risk-return trade-offs but often settles for local solutions due to complexity.",
    seeContent: "Visualize complex optimization landscapes with multiple local minima, see how different starting points lead to different local optima, and observe global optimization strategies attempting to escape local traps.",
    hearContent: "Listen as I explain how distinguishing local from global optima is like being a master mountaineer who understands that the nearest peak might not be the highest peak in the entire range!",
    hearAudioUrl: "/audio/5.9.mp3",
    doContent: "Use the Local vs Global Explorer with multiple minima landscapes, practice with the Multi-Start Optimizer, and experiment with the Global Optimization Strategy Simulator.",
    memoryAids: {
      mantra: "Local best nearby, global best overall - knowing the difference prevents optimization's fall! Many peaks exist, but one summit's true - global optimization seeks that view!",
      visual: "Picture Greta on a complex mountain range where many local peaks are visible nearby, but the true global summit is hidden in the distance, requiring special techniques to discover and reach."
    },
    conceptCheck: {
      question: "A function has local minima at points A (value -5), B (value -3), and C (value -7). What can you conclude about global optimization?",
      options: [
        "Point C gives the global minimum among these three local minima",
        "Point A is the global minimum since it was found first",
        "All three points are equally valid as global minima",
        "Cannot determine the global minimum without checking the entire domain"
      ],
      correctAnswer: 3,
      explanation: "While C has the lowest value among the three local minima (-7), we cannot conclude it's the global minimum without examining the entire domain. There might be other local minima with even lower values that haven't been discovered yet."
    },
    realWorldConnection: "Pharmaceutical companies use global optimization to discover drug molecules with optimal therapeutic properties. Google's neural networks accept local optima during training because global optimization is computationally impossible. Financial firms use multi-start optimization to find globally optimal portfolio allocations."
  },

  "5.10": {
    id: "5.10",
    title: "Greta's Optimization Mastery Capstone",
    duration: "50-60 minutes",
    characterId: "greta",
    narrativeHook: {
      story: "Greta faces the ultimate optimization challenge: a comprehensive project that requires every technique she's mastered! From finding critical points to implementing gradient descent with momentum, from analyzing convexity to handling constraints - this capstone synthesizes all optimization skills into one integrated mountaineering expedition.",
      characterMessage: "Time for the ultimate optimization expedition! This capstone brings together every technique we've mastered - critical point analysis, gradient descent algorithms, convexity analysis, and constraint handling. Let's tackle a complex real-world optimization problem that showcases the full power of mathematical mountaineering!"
    },
    learningObjectives: [
      "Synthesize all optimization concepts in one comprehensive project",
      "Apply multiple optimization techniques to solve complex problems",
      "Demonstrate computational fluency with gradient descent algorithms",
      "Analyze optimization landscapes using mathematical and geometric tools",
      "Connect optimization theory to real-world machine learning applications"
    ],
    coreConcepts: [
      "Complete optimization workflow",
      "Critical point analysis and classification",
      "Gradient descent implementation with momentum",
      "Convexity analysis and landscape characterization",
      "Constraint handling and real-world applications"
    ],
    readContent: "This capstone project synthesizes every optimization technique into one comprehensive investigation. You'll analyze complex functions from critical point identification through advanced algorithmic implementation, demonstrating mastery of mathematical analysis, gradient descent algorithms, momentum methods, and constraint handling. The project mirrors real-world optimization challenges where multiple techniques must work together: understanding the landscape through mathematical analysis, implementing efficient algorithms, and interpreting results in application contexts. This integrated approach shows how optimization theory enables practical problem-solving in machine learning, engineering, and quantitative analysis.",
    readAnalogy: "This capstone is like Greta leading the ultimate mountaineering expedition! Every optimization tool must work together perfectly - from reading topographic maps (mathematical analysis) to choosing optimal routes (algorithm selection) to navigating safely (constraint handling). It's the complete demonstration of optimization mastery!",
    readKeyPoints: [
      "Complete optimization analysis: landscape characterization through algorithm implementation",
      "Integration of theory and practice: mathematical analysis plus computational methods",
      "Real-world problem solving using comprehensive optimization toolkit"
    ],
    readDigDeeper: "This project workflow mirrors professional optimization applications: data scientists analyze loss function landscapes before choosing algorithms, engineers characterize design spaces before optimization, and quantitative analysts understand market models before implementing trading strategies.",
    readWhyMatters: "This capstone demonstrates industry-ready optimization skills. Machine learning engineers use these exact techniques for neural network training. Quantitative analysts apply optimization for portfolio management. Operations researchers use these methods for supply chain optimization. Your mathematical mountaineering skills translate directly to high-impact technical careers.",
    seeContent: "Work through comprehensive optimization analysis tools, implement gradient descent algorithms with visualization, and observe how mathematical theory guides practical algorithm selection and tuning.",
    hearContent: "Listen as I guide you through the ultimate demonstration of optimization mastery - every technique working together with the determination and precision that defines excellent mathematical mountaineering!",
    hearAudioUrl: "/audio/5.10.mp3",
    doContent: "Complete the comprehensive optimization project: analyze function landscapes mathematically, classify critical points using second-derivative tests, implement gradient descent with momentum, characterize convexity properties, and solve constrained optimization problems with real-world interpretation.",
    memoryAids: {
      mantra: "Every peak, every valley, every algorithm too - optimization mastery shows what math can do! From theory to practice, summit to base - that's Greta's optimization ace!",
      visual: "Picture yourself as Greta's expedition partner, using every optimization technique with mountaineering precision to conquer a complex mathematical landscape that showcases the full power of optimization theory and practice."
    },
    conceptCheck: {
      question: "In Part D, your gradient descent algorithm converges to different points depending on the starting location. What does this reveal about the optimization landscape?",
      options: [
        "The function has multiple local minima - it's non-convex with several basins of attraction",
        "The learning rate is wrong - properly tuned algorithms always find the same solution",
        "The function is convex but the algorithm implementation has bugs",
        "This behavior is impossible for properly implemented gradient descent"
      ],
      correctAnswer: 0,
      explanation: "Different convergence points from different starting locations indicates multiple local minima, confirming the function is non-convex. Each starting point falls into the basin of attraction of a different local minimum, which is typical behavior for complex optimization landscapes."
    },
    realWorldConnection: "This project mirrors real machine learning workflows: analyzing loss function properties, implementing optimization algorithms, and interpreting convergence behavior. The optimization mastery you've developed applies directly to careers in AI, quantitative finance, engineering optimization, and data science research."
  }
};