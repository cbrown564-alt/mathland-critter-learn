
import { Lock, CheckCircle, PlayCircle, Star } from "lucide-react";
import { ModuleCard } from "./ModuleCard";

const modules = [
  {
    id: 0,
    title: "Prerequisites & Refresher",
    subtitle: "Build Your Foundation",
    character: null,
    topics: ["Algebra basics", "Functions", "Graphing"],
    status: "available" as const,
    description: "Strengthen your mathematical foundation with essential algebra and function concepts.",
    color: "from-gray-400 to-slate-500",
    prerequisites: []
  },
  {
    id: 1,
    title: "Vectors & Vector Spaces",
    subtitle: "Direction and Magnitude",
    character: "Vera the Vector",
    topics: ["Vector operations", "Linear combinations", "Basis vectors"],
    status: "locked" as const,
    description: "Learn the fundamentals of vectors with Vera as your guide.",
    color: "from-red-400 to-orange-500",
    prerequisites: [0]
  },
  {
    id: 2,
    title: "Matrices & Linear Mappings",
    subtitle: "Structure and Transformation",
    character: "Matrix Max",
    topics: ["Matrix operations", "Transformations", "Rank and nullity"],
    status: "locked" as const,
    description: "Discover the power of matrices with wise Max's guidance.",
    color: "from-blue-400 to-indigo-500",
    prerequisites: [1]
  },
  {
    id: 3,
    title: "Eigenvalues & Eigenvectors",
    subtitle: "Hidden Patterns",
    character: "Eileen Eigen",
    topics: ["Characteristic equations", "PCA applications", "Diagonalization"],
    status: "locked" as const,
    description: "Uncover hidden patterns in data with Eileen's expertise.",
    color: "from-purple-400 to-pink-500",
    prerequisites: [2]
  },
  {
    id: 4,
    title: "Multivariate Calculus Foundations",
    subtitle: "Understanding Change",
    character: "Dr. Delta",
    topics: ["Partial derivatives", "Gradients", "Jacobians"],
    status: "locked" as const,
    description: "Master the calculus of change with Dr. Delta's patient teaching.",
    color: "from-green-400 to-emerald-500",
    prerequisites: [2]
  },
  {
    id: 5,
    title: "Optimization & Gradient Descent",
    subtitle: "Finding the Best Path",
    character: "Gradient Greta",
    topics: ["Critical points", "Convexity", "Optimization algorithms"],
    status: "locked" as const,
    description: "Learn to find optimal solutions with Greta's mountain climbing wisdom.",
    color: "from-teal-400 to-cyan-500",
    prerequisites: [4]
  },
  {
    id: 6,
    title: "Probability & Distributions",
    subtitle: "Embracing Uncertainty",
    character: "Probability Pippa",
    topics: ["Random variables", "Common distributions", "Central limit theorem"],
    status: "locked" as const,
    description: "Navigate uncertainty with Pippa's magical probability insights.",
    color: "from-pink-400 to-rose-500",
    prerequisites: [0]
  },
  {
    id: 7,
    title: "Hypothesis Testing & Inference",
    subtitle: "Making Statistical Decisions",
    character: "Sigmund the Swan",
    topics: ["p-values", "Confidence intervals", "Type I & II errors"],
    status: "locked" as const,
    description: "Test hypotheses with Sigmund's elegant statistical approach.",
    color: "from-slate-400 to-gray-500",
    prerequisites: [6]
  },
  {
    id: 8,
    title: "Bayesian Inference",
    subtitle: "Smart Reasoning",
    character: "Bayes the Fox",
    topics: ["Prior and posterior", "Bayes' theorem", "MCMC methods"],
    status: "locked" as const,
    description: "Master Bayesian reasoning with Bayes' clever insights.",
    color: "from-amber-400 to-orange-500",
    prerequisites: [6]
  },
  {
    id: 9,
    title: "Capstone Project",
    subtitle: "Real-World Application",
    character: "All Characters",
    topics: ["End-to-end data science", "Model building", "Results presentation"],
    status: "locked" as const,
    description: "Apply everything you've learned in a comprehensive data science project.",
    color: "from-violet-400 to-purple-500",
    prerequisites: [1, 2, 3, 4, 5, 6, 7, 8]
  }
];

export const CourseRoadmap = () => {
  return (
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Your Learning{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Journey
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow our carefully crafted learning path from mathematical foundations 
            to advanced data science concepts, guided by your character companions.
          </p>
        </div>

        {/* Progress Overview */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Your Progress</h3>
              <p className="text-gray-600">Start your mathematical adventure today</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-orange-500">0%</div>
              <div className="text-sm text-gray-500">Complete</div>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full" style={{ width: "0%" }}></div>
          </div>
        </div>

        {/* Module Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <ModuleCard key={module.id} module={module} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <Star className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Begin?</h3>
            <p className="text-gray-600 mb-6">
              Start with Module 0 or take our placement assessment to find your perfect starting point.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-all">
                Start Module 0
              </button>
              <button className="border-2 border-green-400 text-green-600 hover:bg-green-50 px-8 py-3 rounded-lg font-semibold transition-all">
                Take Placement Test
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
