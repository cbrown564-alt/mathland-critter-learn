export const modulesData = [
  {
    id: 0,
    title: "Prerequisites & Refresher",
    subtitle: "Build Your Foundation",
    description: "Master the mathematical foundations needed for data science",
    duration: "4-5 hours",
    lessons: 8,
    status: "available",
    color: "from-amber-500 to-orange-500",
    character: {
      name: "Ollie the Otter",
      avatar: "/lovable-uploads/ollie.png"
    },
    concepts: [
      "Order-of-operations", "Factorising & expanding", "Linear & quadratic equations", 
      "Inequalities", "Function notation", "Domain/Range", "Graphing lines/quadratics/exponentials", 
      "Coordinate geometry (distance, midpoint)", "Basic vector notation", "Greek symbols", "Σ / Π conventions"
    ],
    roadmapConcepts: [
      "Algebraic foundations",
      "Equations & inequalities",
      "Functions & graphing"
    ],
    prerequisites: "None - Start here!"
  },
  {
    id: 1,
    title: "Vectors & Vector Spaces",
    subtitle: "Direction and Magnitude",
    description: "Understanding vectors, linear combinations, and vector spaces",
    duration: "5-6 hours",
    lessons: 10,
    status: "available",
    color: "from-red-600 to-orange-600",
    character: {
      name: "Vera the Vector",
      avatar: "/lovable-uploads/vera.png"
    },
    concepts: [
      "Vector addition/scalar multiplication", "Dot product & norm", "Unit vectors", 
      "Linear combination & span", "Linear independence", "Basis & dimension", 
      "Row/column picture", "Subspace & null space"
    ],
    roadmapConcepts: [
      "Vector operations",
      "Linear combinations & span",
      "Vector spaces & subspaces"
    ],
    prerequisites: "Module 0"
  },
  {
    id: 2,
    title: "Matrices & Linear Mappings",
    subtitle: "Transforming Spaces",
    description: "Matrix operations, transformations, and their properties",
    duration: "6-7 hours",
    lessons: 12,
    status: "coming-soon",
    color: "from-blue-600 to-indigo-600",
    character: {
      name: "Matrix Max",
      avatar: "/lovable-uploads/max.png"
    },
    concepts: [
      "Matrix addition/multiplication", "Identity & inverse", "Determinant & rank", 
      "Elementary row ops", "Matrix-vector product as transformation", "Composition of linear maps", 
      "Change of basis", "Block matrices"
    ],
    roadmapConcepts: [
      "Matrix operations",
      "Linear transformations",
      "Determinants & inverses"
    ],
    prerequisites: "Module 1"
  },
  {
    id: 3,
    title: "Eigenvalues & Eigenvectors",
    subtitle: "Special Directions",
    description: "Understanding eigenvalues, eigenvectors, and their applications",
    duration: "4-5 hours",
    lessons: 8,
    status: "coming-soon",
    color: "from-purple-600 to-pink-600",
    character: {
      name: "Eileen Eigen",
      avatar: "/lovable-uploads/eileen.png"
    },
    concepts: [
      "Characteristic equation", "Algebraic vs geometric multiplicity", "Diagonalisation", 
      "Spectral decomposition", "SVD (teaser)", "Power iteration", 
      "Real-world uses: PCA, PageRank, vibration modes"
    ],
    roadmapConcepts: [
      "Eigenvalues & eigenvectors",
      "Diagonalisation & spectral decomposition",
      "Real-world applications (PCA, PageRank, SVD)"
    ],
    prerequisites: "Module 2"
  },
  {
    id: 4,
    title: "Multivariate Calculus Foundations",
    subtitle: "Multiple Variables",
    description: "Calculus with multiple variables for optimization",
    duration: "5-6 hours",
    lessons: 10,
    status: "coming-soon",
    color: "from-green-600 to-emerald-600",
    character: {
      name: "Dr. Delta",
      avatar: "/lovable-uploads/delta.png"
    },
    concepts: [
      "Limits in ℝ²/ℝ³", "Continuity surfaces", "Partial derivatives", 
      "Gradient vector", "Directional derivative", "Jacobian matrix"
    ],
    roadmapConcepts: [
      "Partial derivatives & gradients",
      "Multivariable functions",
      "Jacobian & rates of change"
    ],
    prerequisites: "Module 2"
  },
  {
    id: 5,
    title: "Optimisation & Gradient Descent",
    subtitle: "Finding the Best",
    description: "Optimization techniques and gradient-based algorithms",
    duration: "4-5 hours",
    lessons: 9,
    status: "coming-soon",
    color: "from-orange-600 to-red-600",
    character: {
      name: "Gradient Greta",
      avatar: "/lovable-uploads/greta.png"
    },
    concepts: [
      "Critical points & Hessian", "Second-derivative test", "Convex vs non-convex", 
      "Gradient-descent algorithm (step size, convergence)", "Momentum & learning-rate scheduling (teaser)"
    ],
    roadmapConcepts: [
      "Critical points & convexity",
      "Gradient descent algorithms",
      "Optimization in practice"
    ],
    prerequisites: "Module 4"
  },
  {
    id: 6,
    title: "Probability & Distributions",
    subtitle: "Understanding Uncertainty",
    description: "Probability theory and common probability distributions",
    duration: "6-7 hours",
    lessons: 11,
    status: "coming-soon",
    color: "from-pink-600 to-rose-600",
    character: {
      name: "Probability Pippa",
      avatar: "/lovable-uploads/pippa.png"
    },
    concepts: [
      "Sample space/events", "Conditional probability & independence", "Random variables", 
      "Bernoulli, Binomial, Poisson, Uniform, Exponential, Normal", "Expectation & variance", 
      "LLN & CLT", "PDF vs CDF", "Sampling variability"
    ],
    roadmapConcepts: [
      "Probability theory & random variables",
      "Common distributions",
      "Expectation, variance & sampling"
    ],
    prerequisites: "Module 0"
  },
  {
    id: 7,
    title: "Hypothesis Testing & Inference",
    subtitle: "Making Decisions",
    description: "Statistical inference and hypothesis testing methods",
    duration: "5-6 hours",
    lessons: 10,
    status: "coming-soon",
    color: "from-teal-600 to-cyan-600",
    character: {
      name: "Sigmund the Swan",
      avatar: "/lovable-uploads/sigmund.png"
    },
    concepts: [
      "Sampling distribution & standard error", "Confidence intervals", "Null/alt hypotheses", 
      "Test statistics & p-values", "t-tests, χ², ANOVA (teaser)", "Type I/II error", "Statistical power"
    ],
    roadmapConcepts: [
      "Statistical inference",
      "Hypothesis testing",
      "Confidence intervals & errors"
    ],
    prerequisites: "Module 6"
  },
  {
    id: 8,
    title: "Bayesian Inference",
    subtitle: "Updating Beliefs",
    description: "Bayesian statistics and probabilistic reasoning",
    duration: "4-5 hours",
    lessons: 8,
    status: "coming-soon",
    color: "from-indigo-600 to-purple-600",
    character: {
      name: "Bayes the Fox",
      avatar: "/lovable-uploads/bayes.png"
    },
    concepts: [
      "Prior, likelihood, posterior", "Conjugate priors (β-Binomial, normal-normal)", 
      "Posterior predictive", "MAP vs MLE", "Bayes factors", 
      "Real-world cases: medical diagnosis, spam filtering"
    ],
    roadmapConcepts: [
      "Bayesian reasoning",
      "Priors, likelihoods & posteriors",
      "Real-world Bayesian applications"
    ],
    prerequisites: "Module 6"
  },
  {
    id: 9,
    title: "Capstone Project",
    subtitle: "Real-World Application",
    description: "Apply all concepts in a comprehensive data science project",
    duration: "8-10 hours",
    lessons: 1,
    status: "coming-soon",
    color: "from-slate-600 to-gray-600",
    character: {
      name: "Sage the Synthesis Owl",
      avatar: "/lovable-uploads/sage.png"
    },
    concepts: [
      "End-to-end workflow: data wrangling → dimensionality reduction → model fitting → diagnostic inference → presentation"
    ],
    roadmapConcepts: [
      "End-to-end data science workflow",
      "Modeling & inference",
      "Presentation & synthesis"
    ],
    prerequisites: "Modules 1-8"
  }
  // Add more modules here as needed
]; 