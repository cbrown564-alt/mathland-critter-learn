
import { ArrowRight, BookOpen, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { SimpleCourseTimeline } from "@/components/SimpleCourseTimeline";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Simple Course Timeline */}
        <SimpleCourseTimeline />

        {/* Learning Path - First Three Modules */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Start Your Journey</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Begin with the foundational modules and progress through carefully designed lessons with expert character guides
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Module 0 - Prerequisites & Refresher */}
              <Card className="relative overflow-hidden border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <img 
                        src="/lovable-uploads/e267cdea-bbbc-487c-b7e9-5c91fe5a6555.png" 
                        alt="Ollie the Otter"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">Prerequisites & Refresher</h3>
                      <p className="text-sm text-slate-600">with Ollie & Felix</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">
                    Master algebraic foundations, equations, functions, and coordinate geometry to prepare for advanced topics
                  </p>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                    <BookOpen className="w-4 h-4" />
                    <span>8 lessons • 4-5 hours</span>
                  </div>
                  <Link to="/module-0">
                    <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                      Start Module
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Module 1 - Vectors & Vector Spaces */}
              <Card className="relative overflow-hidden border-2 border-red-200 bg-gradient-to-br from-red-50 to-orange-50 opacity-75">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-4 border-white shadow-lg opacity-50">
                      <img 
                        src="/lovable-uploads/187f4ef7-dd45-4280-8f5d-626062d22c43.png" 
                        alt="Vera the Vector"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">Vectors & Vector Spaces</h3>
                      <p className="text-sm text-slate-600">with Vera the Vector</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">
                    Learn about vectors, vector operations, and the mathematical foundations of data representation
                  </p>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                    <BookOpen className="w-4 h-4" />
                    <span>Complete Module 0 to unlock</span>
                  </div>
                  <Button className="w-full bg-gray-300 cursor-not-allowed" disabled>
                    Complete Module 0 First
                  </Button>
                </CardContent>
              </Card>

              {/* Module 2 - Matrices & Linear Mappings */}
              <Card className="relative overflow-hidden border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-75">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-4 border-white shadow-lg opacity-50">
                      <img 
                        src="/lovable-uploads/c18b892c-e964-45c1-9958-ae19c36dd3e7.png" 
                        alt="Matrix Max"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">Matrices & Linear Mappings</h3>
                      <p className="text-sm text-slate-600">with Matrix Max</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">
                    Explore matrix operations, transformations, and their applications in data science and machine learning
                  </p>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                    <BookOpen className="w-4 h-4" />
                    <span>Complete Module 1 to unlock</span>
                  </div>
                  <Button className="w-full bg-gray-300 cursor-not-allowed" disabled>
                    Complete Module 1 First
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
