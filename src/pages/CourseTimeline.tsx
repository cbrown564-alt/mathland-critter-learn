
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CharacterAvatar } from "@/components/CharacterAvatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Lock } from "lucide-react";

const courseModules = [
  {
    id: "module-0",
    title: "Module 0: Algebraic Foundations",
    description: "Master order of operations, equations, functions, and coordinate geometry",
    duration: "4-5 hours",
    lessons: 8,
    status: "available",
    characters: [
      {
        name: "Ollie the Otter",
        avatar: "/lovable-uploads/ollie-the-otter.png"
      },
      {
        name: "Felix the Function Machine", 
        avatar: "/lovable-uploads/felix-the-function-machine.png"
      }
    ],
    color: "from-amber-100 to-yellow-100",
    borderColor: "border-amber-300"
  },
  {
    id: "module-1",
    title: "Module 1: Linear Algebra",
    description: "Vectors, matrices, and transformations for data science",
    duration: "6-7 hours",
    lessons: 10,
    status: "locked",
    characters: [
      {
        name: "Vera the Vector",
        avatar: "/lovable-uploads/vera-the-vector.png"
      },
      {
        name: "Max the Matrix",
        avatar: "/lovable-uploads/max-the-matrix.png"
      }
    ],
    color: "from-red-100 to-orange-100",
    borderColor: "border-red-300"
  },
  {
    id: "module-2", 
    title: "Module 2: Statistics & Probability",
    description: "Descriptive stats, distributions, and hypothesis testing",
    duration: "7-8 hours",
    lessons: 12,
    status: "locked",
    characters: [
      {
        name: "Stella the Stat",
        avatar: "/lovable-uploads/stella-the-stat.png"
      },
      {
        name: "Penny the Probability",
        avatar: "/lovable-uploads/penny-the-probability.png"
      }
    ],
    color: "from-blue-100 to-indigo-100",
    borderColor: "border-blue-300"
  },
  {
    id: "module-3",
    title: "Module 3: Calculus Essentials",
    description: "Derivatives, integrals, and optimization for data science",
    duration: "8-9 hours", 
    lessons: 14,
    status: "locked",
    characters: [
      {
        name: "Carl the Calculator",
        avatar: "/lovable-uploads/carl-the-calculator.png"
      },
      {
        name: "Ada the Algorithm",
        avatar: "/lovable-uploads/ada-the-algorithm.png"
      }
    ],
    color: "from-green-100 to-teal-100",
    borderColor: "border-green-300"
  }
];

const CourseTimeline = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">
              Complete Course Timeline
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Your complete journey through the mathematical foundations for data science, guided by expert characters at every step.
            </p>
          </div>

          <div className="space-y-8">
            {courseModules.map((module, index) => (
              <div key={module.id} className="relative">
                {/* Timeline connector */}
                {index < courseModules.length - 1 && (
                  <div className="absolute left-8 top-full w-0.5 h-8 bg-slate-300 z-0"></div>
                )}
                
                <Card className={`${module.color} ${module.borderColor} border-2 relative z-10`}>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      {/* Module indicator */}
                      <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center border-4 border-slate-300 shadow-lg">
                        <span className="text-2xl font-bold text-slate-700">{index}</span>
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h2 className="text-2xl font-bold text-slate-800 mb-2">{module.title}</h2>
                            <p className="text-slate-600 mb-4">{module.description}</p>
                          </div>
                          
                          <div className="flex items-center gap-4 mb-4 md:mb-0">
                            {module.characters.map((character) => (
                              <CharacterAvatar
                                key={character.name}
                                src={character.avatar}
                                alt={character.name}
                                size="md"
                              />
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <div className="flex items-center gap-6 text-sm text-slate-600 mb-4 sm:mb-0">
                            <div className="flex items-center gap-1">
                              <BookOpen className="w-4 h-4" />
                              <span>{module.lessons} lessons</span>
                            </div>
                            <span>{module.duration}</span>
                          </div>

                          {module.status === "available" ? (
                            <Link to={`/${module.id}`}>
                              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                                Start Module
                              </Button>
                            </Link>
                          ) : (
                            <Button disabled className="bg-gray-300 cursor-not-allowed">
                              <Lock className="w-4 h-4 mr-2" />
                              Locked
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseTimeline;
