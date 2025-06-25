import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CharacterAvatar } from "@/components/CharacterAvatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Users, CheckCircle } from "lucide-react";
import { characters } from "../utils/characterData";

const getCharacterAvatar = (characterName) => {
  if (characterName === "Ollie & Felix" || characterName === "Ollie the Otter") {
    const ollie = characters.find(c => c.id === "ollie");
    return ollie?.avatar;
  }
  if (characterName === "All Characters") {
    return null;
  }
  const char = characters.find(c => c.name === characterName || c.fullName === characterName);
  return char ? char.avatar : null;
};

const CourseStructure = () => {
  const modules = [
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
        avatar: getCharacterAvatar("Ollie the Otter")
      },
      concepts: [
        "Order-of-operations", "Factorising & expanding", "Linear & quadratic equations", 
        "Inequalities", "Function notation", "Domain/Range", "Graphing lines/quadratics/exponentials", 
        "Coordinate geometry (distance, midpoint)", "Basic vector notation", "Greek symbols", "Σ / Π conventions"
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
      status: "coming-soon",
      color: "from-red-600 to-orange-600",
      character: {
        name: "Vera the Vector",
        avatar: getCharacterAvatar("Vera the Vector")
      },
      concepts: [
        "Vector addition/scalar multiplication", "Dot product & norm", "Unit vectors", 
        "Linear combination & span", "Linear independence", "Basis & dimension", 
        "Row/column picture", "Subspace & null space"
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
        avatar: getCharacterAvatar("Matrix Max")
      },
      concepts: [
        "Matrix addition/multiplication", "Identity & inverse", "Determinant & rank", 
        "Elementary row ops", "Matrix-vector product as transformation", "Composition of linear maps", 
        "Change of basis", "Block matrices"
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
        avatar: "👸"
      },
      concepts: [
        "Characteristic equation", "Algebraic vs geometric multiplicity", "Diagonalisation", 
        "Spectral decomposition", "SVD (teaser)", "Power iteration", 
        "Real-world uses: PCA, PageRank, vibration modes"
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
        avatar: "🧮"
      },
      concepts: [
        "Limits in ℝ²/ℝ³", "Continuity surfaces", "Partial derivatives", 
        "Gradient vector", "Directional derivative", "Jacobian matrix"
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
        avatar: "📈"
      },
      concepts: [
        "Critical points & Hessian", "Second-derivative test", "Convex vs non-convex", 
        "Gradient-descent algorithm (step size, convergence)", "Momentum & learning-rate scheduling (teaser)"
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
        avatar: "🎲"
      },
      concepts: [
        "Sample space/events", "Conditional probability & independence", "Random variables", 
        "Bernoulli, Binomial, Poisson, Uniform, Exponential, Normal", "Expectation & variance", 
        "LLN & CLT", "PDF vs CDF", "Sampling variability"
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
        avatar: "🦢"
      },
      concepts: [
        "Sampling distribution & standard error", "Confidence intervals", "Null/alt hypotheses", 
        "Test statistics & p-values", "t-tests, χ², ANOVA (teaser)", "Type I/II error", "Statistical power"
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
        avatar: "🦊"
      },
      concepts: [
        "Prior, likelihood, posterior", "Conjugate priors (β-Binomial, normal-normal)", 
        "Posterior predictive", "MAP vs MLE", "Bayes factors", 
        "Real-world cases: medical diagnosis, spam filtering"
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
        name: "All Characters",
        avatar: "🎓"
      },
      concepts: [
        "End-to-end workflow: data wrangling → dimensionality reduction → model fitting → diagnostic inference → presentation"
      ],
      prerequisites: "Modules 1-8"
    }
  ];

  // Attach character object to each module if possible
  const modulesWithCharacter = modules.map(module => {
    let characterObj = null;
    if (module.character && module.character.name && typeof module.character.name === 'string') {
      characterObj = characters.find(c => c.name === module.character.name);
    }
    return {
      ...module,
      characterObj
    };
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">
              Complete <span className="text-blue-600">Course Structure</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Your comprehensive journey through the mathematical foundations of data science
            </p>
          </div>

          {/* Course Timeline */}
          <div className="space-y-8">
            {modulesWithCharacter.map((module) => (
              <Card key={module.id} className={`${module.status === 'available' ? 'border-2 border-blue-200 bg-blue-50/30' : 'opacity-90'} hover:shadow-lg transition-all duration-300`}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    {/* Module number */}
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${module.color} flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-lg`}>
                      {module.id}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-800 mb-2">
                            Module {module.id}: {module.title}
                          </h3>
                          <p className="text-lg text-blue-600 font-medium mb-2">{module.subtitle}</p>
                          <p className="text-slate-600 mb-4">{module.description}</p>
                          
                          <div className="flex items-center gap-6 text-sm text-slate-500 mb-4">
                            <div className="flex items-center gap-2">
                              <BookOpen className="w-4 h-4" />
                              <span>{module.lessons} lesson{module.lessons !== 1 ? 's' : ''}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              <span>{module.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4" />
                              <span>Prerequisites: {module.prerequisites}</span>
                            </div>
                          </div>
                        </div>
                        
                        <Badge variant={module.status === 'available' ? 'default' : 'secondary'} className="text-sm">
                          {module.status === 'available' ? 'Available Now' : 'Coming Soon'}
                        </Badge>
                      </div>

                      {/* Character */}
                      <div className="flex items-center gap-3 mb-6">
                        <Users className="w-5 h-5 text-slate-500" />
                        <span className="font-medium text-slate-700">Your Guide: </span>
                        <div className="flex items-center gap-2">
                          {module.characterObj && module.characterObj.avatar ? (
                            <CharacterAvatar 
                              src={module.characterObj.avatar}
                              alt={module.characterObj.name}
                              size="sm"
                            />
                          ) : (
                            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-lg">
                              {module.character && module.character.avatar}
                            </div>
                          )}
                          <span className="text-slate-600">{module.character && module.character.name}</span>
                        </div>
                      </div>

                      {/* Concepts */}
                      <div>
                        <h4 className="font-semibold text-slate-700 mb-3">Key Concepts You'll Master</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {module.concepts.map((concept, idx) => (
                            <div key={idx} className="flex items-center text-sm text-slate-600">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                              {concept}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-16 bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">10</div>
                <div className="text-slate-600 font-medium">Modules</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">97</div>
                <div className="text-slate-600 font-medium">Total Lessons</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-slate-600 font-medium">Hours Content</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">9</div>
                <div className="text-slate-600 font-medium">Expert Guides</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseStructure;
