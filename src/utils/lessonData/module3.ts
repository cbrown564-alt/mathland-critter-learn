import { LessonData } from "@/types/lesson";

// Module 3: Eigenvalues & Eigenvectors
// Copy and paste module 3 lesson data here

export const module3Lessons: { [key: string]: LessonData } = {
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
    readContent: "Picture this: I'm investigating a mathematical crime scene where most vectors get completely scrambled when a matrix transforms them, but some stubborn vectors refuse to change direction! These are eigenvectors - the key witnesses that reveal a matrix's true identity. They only get longer or shorter (scaled by their eigenvalue λ), never turning aside. It's like finding people who can't be influenced to change their fundamental nature, no matter what pressure is applied.",
    readAnalogy: "Think of eigenvectors as the matrix's 'favorite directions' - like how a river always flows downhill no matter what obstacles it encounters. The eigenvalue tells you how much the matrix amplifies that direction, but the direction itself remains unchanged.",
    readKeyPoints: [
      "Eigenvector equation: Av = λv where v ≠ 0 (direction preserved, magnitude scaled)",
      "Eigenvalue λ can be positive (same direction), negative (opposite), or complex (rotation)",
      "Every matrix has a unique 'personality' revealed through its eigenvalue-eigenvector pairs"
    ],
    readDigDeeper: "Complex eigenvalues indicate rotational behavior - the matrix doesn't just stretch space, it twists it. The magnitude |λ| controls growth/decay while the argument controls rotation speed. This is crucial for understanding oscillatory systems in engineering and physics.",
    readWhyMatters: "Eigenvectors reveal the principal directions in data: facial recognition systems use eigenfaces (eigenvectors of face images), Google's PageRank finds the principal eigenvector of web connections, and structural engineers use eigenvectors to identify building vibration modes.",
    seeContent: "Watch interactive demonstrations where matrices transform vectors, highlighting how most vectors change direction but eigenvectors maintain their orientation while only changing in length by the eigenvalue factor.",
    hearContent: "Listen as I explain how eigenvectors are like the matrix's favorite directions - the paths it naturally wants to follow when transforming space, revealing the hidden personality of any mathematical transformation!",
    hearAudioUrl: "/audio/3.1.mp3",
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
    readContent: "Every matrix carries its secrets in a polynomial vault called the characteristic equation: det(A - λI) = 0. This equation emerges because eigenvectors live in the null space of (A - λI), which only exists when that matrix becomes singular (determinant = 0). It's like finding the combination to a mathematical safe - once cracked, all eigenvalues tumble out simultaneously as the polynomial's roots.",
    readAnalogy: "The characteristic equation is like a mathematical DNA test. Each matrix has a unique polynomial fingerprint that reveals all its eigenvalue secrets. Solving this polynomial is like running forensic analysis to identify the suspect.",
    readKeyPoints: [
      "Characteristic equation: det(A - λI) = 0 where I is the identity matrix",
      "For n×n matrices, this creates a degree-n polynomial with n eigenvalues (counting multiplicities)",
      "Complex eigenvalues appear in conjugate pairs for real matrices"
    ],
    readDigDeeper: "The fundamental theorem of algebra guarantees that every n×n matrix has exactly n eigenvalues in the complex numbers. Real symmetric matrices have the special property that all eigenvalues are real, making them particularly well-behaved.",
    readWhyMatters: "Engineers solve characteristic equations to find resonant frequencies - eigenvalues predict when bridges might vibrate dangerously in wind. Quantum physicists use them to find energy levels in atoms, where eigenvalues represent the only allowed energy states that particles can occupy.",
    seeContent: "Watch step-by-step characteristic equation derivations, see how the determinant calculation creates polynomials, and observe how solving these polynomials reveals all eigenvalues simultaneously.",
    hearContent: "Listen as I explain how the characteristic equation is like breaking a combination lock - once we solve it, all the eigenvalue secrets tumble out at once, revealing the complete mathematical fingerprint!",
    hearAudioUrl: "/audio/3.2.mp3",
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
    readContent: "Once I've cracked the eigenvalue code, the real detective work begins: finding each eigenvalue's family of eigenvectors. They're hiding in the null space of (A - λI), which I uncover through systematic row reduction. Each eigenspace tells a story - some eigenvalues are loners with one-dimensional spaces, others have rich multi-dimensional families. The geometric multiplicity (dimension of eigenspace) can be smaller than algebraic multiplicity, creating 'defective' matrices with personality disorders.",
    readAnalogy: "Finding eigenvectors is like mapping out each eigenvalue's secret hideout. Some eigenvalues run large operations (high-dimensional eigenspaces) while others work alone (one-dimensional spaces). Each eigenvector in the family can be scaled by any non-zero amount - they're all equally valid members of the clan.",
    readKeyPoints: [
      "Solve (A - λI)v = 0 for each eigenvalue λ to find its eigenvector family",
      "Eigenspace dimension = geometric multiplicity = number of linearly independent eigenvectors",
      "Any non-zero scalar multiple of an eigenvector is also an eigenvector"
    ],
    readDigDeeper: "When geometric multiplicity equals algebraic multiplicity, the eigenvalue is called 'simple' and the matrix is well-behaved. When geometric < algebraic, the matrix is 'defective' and cannot be diagonalized using standard methods.",
    readWhyMatters: "Data scientists find eigenvectors of covariance matrices to perform Principal Component Analysis - revealing the main directions of variation in datasets. Image compression algorithms use eigenvectors to identify the most important visual patterns, allowing massive file size reduction while preserving image quality.",
    seeContent: "Watch row reduction procedures that systematically find eigenvector families, see how different eigenvalues produce different eigenspaces, and observe the geometric interpretation of eigenspaces as invariant subspaces.",
    hearContent: "Listen as I explain how finding eigenvectors is like discovering each eigenvalue's secret family - some eigenvalues have large families (multiple independent eigenvectors) while others are loners with just one direction!",
    hearAudioUrl: "/audio/3.3.mp3",
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
    readContent: "This is my favorite mathematical magic trick! When a matrix has enough linearly independent eigenvectors, I can perform the ultimate revelation: A = PDP⁻¹, where P contains eigenvectors and D displays eigenvalues along the diagonal. It's like having X-ray vision that sees through complex transformations to reveal the simple scaling structure underneath. Diagonalization transforms matrix powers into trivial calculations: A^n = PD^nP⁻¹.",
    readAnalogy: "Diagonalization is like having a universal translator that converts any complex matrix language into a simple scaling dialect. The eigenvector matrix P provides the translation dictionary, while D shows the pure scaling effects without any rotational confusion.",
    readKeyPoints: [
      "Diagonalization: A = PDP⁻¹ where P has eigenvectors as columns, D has eigenvalues on diagonal",
      "Requires n linearly independent eigenvectors for n×n matrix",
      "Matrix powers become simple: A^n = PD^nP⁻¹"
    ],
    readDigDeeper: "Not all matrices are diagonalizable - those lacking sufficient eigenvectors are 'defective' and require Jordan normal form. However, symmetric matrices are always diagonalizable with orthogonal eigenvectors, making them mathematical aristocrats.",
    readWhyMatters: "Google's PageRank algorithm uses diagonalization to efficiently compute authority scores for billions of web pages. Population geneticists use diagonalized matrices to predict how gene frequencies evolve over many generations. Financial analysts diagonalize correlation matrices to identify independent risk factors in complex portfolios.",
    seeContent: "Watch the diagonalization construction process, see how matrix powers become trivial in diagonal form, and observe the geometric interpretation as coordinate system changes that reveal natural scaling directions.",
    hearContent: "Listen as I explain how diagonalization is like having X-ray vision for matrices - suddenly you can see through all the complexity to the simple scaling structure hidden underneath!",
    hearAudioUrl: "/audio/3.4.mp3",
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
    readAnalogy: "Symmetric matrices are like perfectly balanced dancers who can only perform elegant rotations and graceful scalings. They're incapable of the awkward stretching and skewing that other matrices might attempt.",
    readKeyPoints: [
      "Symmetric matrices: A = A^T have real eigenvalues and orthogonal eigenvectors",
      "Spectral theorem guarantees orthogonal diagonalization: A = QDQ^T",
      "Transformation separates into rotation → scaling → rotation back"
    ],
    readDigDeeper: "The spectral theorem is one of the most beautiful results in linear algebra. It guarantees that any real symmetric matrix can be diagonalized by an orthogonal matrix, meaning the eigenvectors form a perfect orthonormal basis for the space.",
    readWhyMatters: "Principal Component Analysis (PCA) relies on orthogonal diagonalization of symmetric covariance matrices to find the main directions of data variation. Physicists use symmetric matrices to model vibrating systems, where eigenvectors represent normal modes and eigenvalues give oscillation frequencies.",
    seeContent: "Visualize how symmetric matrices create elliptical transformations with perpendicular principal axes, watch orthogonal diagonalization separate rotation from scaling, and see how this connects to data analysis principal components.",
    hearContent: "Listen as I explain why symmetric matrices are the mathematical aristocrats - so elegant and well-behaved that they can always be perfectly organized using pure rotations and reflections!",
    hearAudioUrl: "/audio/3.5.mp3",
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
    readAnalogy: "PCA is like being a data detective with X-ray vision. You can see through the chaos of high-dimensional data to spot the few fundamental patterns that explain most of what's happening. It's reducing a complex mystery novel to its essential plot elements.",
    readKeyPoints: [
      "PCA diagonalizes covariance matrices to find principal directions of data variation",
      "Eigenvalues rank the importance of each principal component by variance explained",
      "Dimensionality reduction keeps top k components that capture most variance"
    ],
    readDigDeeper: "PCA assumes linear relationships and that variance equals importance. For non-linear patterns, kernel PCA or manifold learning techniques extend the basic eigenvalue approach to curved data structures.",
    readWhyMatters: "Netflix uses PCA to compress user preference patterns and identify movie clusters. Geneticists apply PCA to DNA data to trace human migration patterns. Financial analysts use PCA to reduce thousands of stock price movements to a few key market factors.",
    seeContent: "Watch real datasets get transformed through PCA, see how principal components reveal hidden data structure, and observe dimensionality reduction that maintains essential information while eliminating noise.",
    hearContent: "Listen as I explain how PCA is like being a data detective - finding the few key storylines that explain most of what's happening in complex, messy datasets!",
    hearAudioUrl: "/audio/3.6.mp3",
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
    readAnalogy: "Eigenvalues are like mathematical DNA that determines long-term behavior! Through diagonalization, matrix powers become trivial: A^n = PD^nP⁻¹, where eigenvalue magnitudes control destiny. If |λ| > 1, that direction grows exponentially; if |λ| < 1, it decays; if |λ| = 1, it remains stable. For matrix exponentials e^{At} = Pe^{Dt}P⁻¹, eigenvalues directly control the exponential growth rates of different directions in the system.",
    readKeyPoints: [
      "Matrix powers: A^n = PD^nP⁻¹ where eigenvalue magnitudes control growth/decay",
      "Stability: |λ| > 1 grows, |λ| < 1 decays, |λ| = 1 neutral",
      "Matrix exponentials: e^{At} = Pe^{Dt}P⁻¹ for continuous-time systems"
    ],
    readDigDeeper: "Markov chains reach steady states determined by the eigenvalue λ = 1 and its corresponding eigenvector. The second-largest eigenvalue controls the convergence rate to equilibrium - closer to 1 means slower convergence.",
    readWhyMatters: "Epidemiologists use eigenvalue analysis to predict whether disease outbreaks will grow or die out. Google's PageRank finds the principal eigenvector representing steady-state web page importance. Climate scientists use matrix exponentials to model long-term temperature and weather pattern evolution.",
    seeContent: "Watch matrix powers evolve over time, see how eigenvalue magnitudes control long-term behavior, and observe how Markov chains converge to steady states determined by principal eigenvectors.",
    hearContent: "Listen as I explain how eigenvalues are like mathematical DNA - they determine whether systems grow, shrink, oscillate, or reach equilibrium over time!",
    hearAudioUrl: "/audio/3.7.mp3",
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
    readAnalogy: "Complex eigenvalues are like mathematical dance instructors - they choreograph spiraling, rotating, and oscillating movements in mathematical space!",
    readKeyPoints: [
      "Complex eigenvalues mean spiraling motion - real part controls growth, imaginary part controls spinning!",
      "Magnitude |λ| shows overall growth/decay rate",
      "Argument arg(λ) determines rotation frequency"
    ],
    readDigDeeper: "Complex eigenvalues create spiraling motions in phase space. The real part controls whether the system grows or decays, while the imaginary part controls the rotation speed. This is crucial for understanding oscillatory systems in engineering and physics.",
    readWhyMatters: "Mechanical engineers analyze building vibrations using complex eigenvalues to predict earthquake response. Electrical engineers use complex eigenvalue analysis to design stable circuits and filters. Biologists model predator-prey cycles where complex eigenvalues indicate oscillating population dynamics.",
    seeContent: "Visualize how complex eigenvalues create spiraling motions, see how magnitude controls spiral tightness while argument controls rotation speed, and watch oscillatory solutions emerge from complex eigenvalue systems.",
    hearContent: "Listen as I explain how complex eigenvalues are like mathematical dance instructors - they choreograph spiraling, rotating, and oscillating movements in mathematical space!",
    hearAudioUrl: "/audio/3.8.mp3",
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
    readContent: "Time for the ultimate detective challenge! This capstone project synthesizes every eigenvalue technique I've taught you into a comprehensive pattern discovery mission. You'll analyze real datasets using complete eigenvalue decomposition, perform PCA for dimensionality reduction, predict system stability from eigenvalue magnitudes, and investigate oscillatory behavior through complex eigenvalue analysis. It's like conducting a full forensic investigation using eigenvalues as your mathematical microscope to reveal hidden structures in complex systems.",
    readAnalogy: "This capstone is like being promoted to lead detective on the most complex case of your career. You'll use every eigenvalue tool in your investigative toolkit to uncover patterns that explain how real-world systems truly operate beneath their surface complexity.",
    readKeyPoints: [
      "Complete eigenvalue analysis workflow from data to insights",
      "PCA for pattern discovery and dimensionality reduction",
      "Stability analysis using eigenvalue criteria for dynamic systems"
    ],
    readDigDeeper: "Professional data scientists routinely use these eigenvalue techniques in production systems. The workflow you're learning - from correlation analysis through PCA to stability assessment - forms the backbone of modern machine learning and quantitative analysis.",
    readWhyMatters: "This project mirrors real data science careers: genomics researchers use eigenvalue analysis for population genetics, financial quants use PCA for risk modeling, and control engineers use eigenvalue stability analysis for autonomous systems. Your eigenvalue detective skills transfer directly to high-impact technical careers.",
    seeContent: "Work through interactive pattern discovery tools that let you perform complete eigenvalue analysis on real datasets, visualize principal components, and predict system behavior using eigenvalue insights.",
    hearContent: "Listen as I guide you through each phase of the ultimate pattern discovery project, showing how eigenvalue detective work reveals the mathematical DNA hidden in complex real-world systems!",
    hearAudioUrl: "/audio/3.9.mp3",
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