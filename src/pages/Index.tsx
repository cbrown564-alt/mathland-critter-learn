
import { ArrowRight, BookOpen, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CharacterAvatar } from "@/components/CharacterAvatar";

const Index = () => {
  const modulePreview = [
    {
      id: 0,
      title: "Algebraic Foundations",
      character: "/lovable-uploads/ollie-the-otter.png",
      status: "available"
    },
    {
      id: 1, 
      title: "Linear Algebra",
      character: "/lovable-uploads/vera-the-vector.png",
      status: "locked"
    },
    {
      id: 2,
      title: "Statistics & Probability", 
      character: "/lovable-uploads/stella-the-stat.png",
      status: "locked"
    },
    {
      id: 3,
      title: "Calculus Essentials",
      character: "/lovable-uploads/carl-the-calculator.png", 
      status: "locked"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Learn Math for{" "}
              <span className="text-blue-600">Data Science</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Master the mathematical foundations you need for data science through character-guided lessons
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/module-0">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
                >
                  Start Module 0
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link to="/course-timeline">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg"
                >
                  View Full Timeline
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Course Preview Timeline */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Your Learning Path</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Four comprehensive modules designed to build your mathematical foundation step by step
              </p>
            </div>

            <div className="space-y-4">
              {modulePreview.map((module, index) => (
                <div key={module.id} className="relative">
                  {index < modulePreview.length - 1 && (
                    <div className="absolute left-8 top-full w-0.5 h-4 bg-slate-300"></div>
                  )}
                  
                  <div className={`flex items-center gap-4 p-4 rounded-lg border-2 ${
                    module.status === "available" 
                      ? "bg-blue-50 border-blue-200" 
                      : "bg-gray-50 border-gray-200"
                  }`}>
                    <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center border-4 border-slate-300 shadow-sm">
                      <span className="text-xl font-bold text-slate-700">{module.id}</span>
                    </div>
                    
                    <CharacterAvatar 
                      src={module.character}
                      alt={`Module ${module.id} character`}
                      size="md"
                    />
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-800">{module.title}</h3>
                    </div>
                    
                    {module.status === "available" ? (
                      <Link to="/module-0">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                          Start
                        </Button>
                      </Link>
                    ) : (
                      <Button size="sm" disabled className="bg-gray-300 cursor-not-allowed">
                        Locked
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link to="/course-timeline">
                <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                  View Complete Timeline
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Character Preview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Meet Your Guides</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Each character brings their unique expertise and personality to make learning engaging and memorable
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {[
                { name: "Ollie the Otter", avatar: "/lovable-uploads/ollie-the-otter.png" },
                { name: "Felix the Function Machine", avatar: "/lovable-uploads/felix-the-function-machine.png" },
                { name: "Vera the Vector", avatar: "/lovable-uploads/vera-the-vector.png" },
                { name: "Stella the Stat", avatar: "/lovable-uploads/stella-the-stat.png" }
              ].map((character) => (
                <div key={character.name} className="text-center">
                  <CharacterAvatar 
                    src={character.avatar}
                    alt={character.name}
                    size="lg"
                    className="mx-auto mb-2"
                  />
                  <p className="text-sm text-slate-600">{character.name}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/characters">
                <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                  Meet All Characters
                  <Users className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
