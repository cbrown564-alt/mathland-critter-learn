
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CharacterAvatar } from "@/components/CharacterAvatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Users, Target } from "lucide-react";

const CourseStructure = () => {
  const modules = [
    {
      id: 0,
      title: "Algebraic Foundations",
      description: "Master the mathematical foundations needed for data science",
      duration: "4-5 hours",
      lessons: 8,
      status: "available",
      color: "from-amber-500 to-orange-500",
      characters: [
        {
          name: "Ollie the Otter",
          avatar: "/lovable-uploads/2371fa94-e340-47aa-b1ed-5670d33066a8.png",
          lessons: "0.1-0.4"
        },
        {
          name: "Felix the Function Machine", 
          avatar: "/lovable-uploads/3972307e-38ad-4120-a059-7785ae6a8516.png",
          lessons: "0.5-0.7"
        },
        {
          name: "Vera the Vector",
          avatar: "/lovable-uploads/228d1d3a-e74e-4db9-b5ff-632d454e4bb6.png",
          lessons: "0.8"
        }
      ],
      topics: [
        "Order of Operations & Algebraic Basics",
        "Factoring & Expanding Expressions", 
        "Linear & Quadratic Equations",
        "Inequalities & Absolute Values",
        "Function Notation & Concepts",
        "Graphing Functions",
        "Coordinate Geometry Essentials",
        "Vectors & Greek Symbols Preview"
      ]
    },
    {
      id: 1,
      title: "Linear Algebra",
      description: "Vectors, matrices, and transformations for data science",
      duration: "6-8 hours",
      lessons: 12,
      status: "coming-soon",
      color: "from-red-600 to-orange-600",
      characters: [
        {
          name: "Vera the Vector",
          avatar: "/lovable-uploads/228d1d3a-e74e-4db9-b5ff-632d454e4bb6.png",
          lessons: "All"
        }
      ],
      topics: [
        "Vector Operations & Properties",
        "Matrix Fundamentals",
        "Matrix Multiplication", 
        "Systems of Linear Equations",
        "Determinants & Inverses",
        "Eigenvalues & Eigenvectors",
        "Linear Transformations",
        "Vector Spaces & Basis",
        "Principal Component Analysis",
        "Singular Value Decomposition",
        "Applications in Machine Learning",
        "Data Science Case Studies"
      ]
    },
    {
      id: 2,
      title: "Statistics & Probability",
      description: "Descriptive stats, distributions, and hypothesis testing",
      duration: "8-10 hours", 
      lessons: 15,
      status: "coming-soon",
      color: "from-green-600 to-emerald-600",
      characters: [
        {
          name: "Statistics Guide",
          avatar: "📊",
          lessons: "All"
        }
      ],
      topics: [
        "Descriptive Statistics",
        "Probability Fundamentals",
        "Random Variables",
        "Common Distributions",
        "Central Limit Theorem",
        "Confidence Intervals",
        "Hypothesis Testing",
        "Chi-Square Tests",
        "ANOVA",
        "Correlation & Regression",
        "Bayesian Statistics",
        "A/B Testing",
        "Time Series Basics",
        "Statistical Modeling",
        "Real-World Applications"
      ]
    }
  ];

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
          <div className="relative mb-16">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-300"></div>
            
            {modules.map((module, index) => (
              <div key={module.id} className="relative flex items-start mb-12">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${module.color} flex items-center justify-center text-white font-bold text-xl relative z-10`}>
                  {module.id}
                </div>
                
                <Card className={`ml-8 flex-1 ${module.status === 'available' ? 'border-2 border-blue-200' : 'opacity-75'}`}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">
                          Module {module.id}: {module.title}
                        </h3>
                        <p className="text-slate-600 mb-4">{module.description}</p>
                        
                        <div className="flex items-center gap-6 text-sm text-slate-500 mb-4">
                          <div className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4" />
                            <span>{module.lessons} lessons</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{module.duration}</span>
                          </div>
                        </div>
                      </div>
                      
                      <Badge variant={module.status === 'available' ? 'default' : 'secondary'}>
                        {module.status === 'available' ? 'Available' : 'Coming Soon'}
                      </Badge>
                    </div>

                    {/* Characters */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-700 mb-2">Your Guides</h4>
                      <div className="flex gap-4">
                        {module.characters.map((character, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            {character.avatar.startsWith('/') ? (
                              <CharacterAvatar 
                                src={character.avatar}
                                alt={character.name}
                                size="sm"
                              />
                            ) : (
                              <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-lg">
                                {character.avatar}
                              </div>
                            )}
                            <div className="text-sm">
                              <div className="font-medium text-slate-700">{character.name}</div>
                              <div className="text-slate-500">Lessons {character.lessons}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Topics */}
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-2">Topics Covered</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {module.topics.map((topic, idx) => (
                          <div key={idx} className="flex items-center text-sm text-slate-600">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 flex-shrink-0"></span>
                            {topic}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-white rounded-lg p-6 shadow-sm">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
              <div className="text-slate-600">Modules</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">35</div>
              <div className="text-slate-600">Total Lessons</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">18-23</div>
              <div className="text-slate-600">Hours Content</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
              <div className="text-slate-600">Character Guides</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseStructure;
