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

        {/* Learning Path */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Start Your Journey</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Begin with Module 0 and progress through carefully designed lessons with expert character guides
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Module 0 */}
              <Card className="relative overflow-hidden border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src="/lovable-uploads/2371fa94-e340-47aa-b1ed-5670d33066a8.png" 
                      alt="Ollie the Otter"
                      className="w-16 h-16 rounded-full object-cover border-3 border-white shadow-lg"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">Module 0</h3>
                      <p className="text-sm text-slate-600">with Ollie & Felix</p>
                    </div>
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">Algebraic Foundations</h4>
                  <p className="text-sm text-slate-600 mb-4">
                    Master order of operations, equations, functions, and coordinate geometry
                  </p>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                    <BookOpen className="w-4 h-4" />
                    <span>8 lessons • 4-5 hours</span>
                  </div>
                  <Link to="/module-0">
                    <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                      Start Module 0
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Module 1 */}
              <Card className="relative overflow-hidden border-2 border-red-200 bg-gradient-to-br from-red-50 to-orange-50 opacity-75">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src="/lovable-uploads/228d1d3a-e74e-4db9-b5ff-632d454e4bb6.png" 
                      alt="Vera the Vector"
                      className="w-16 h-16 rounded-full object-cover border-3 border-white shadow-lg grayscale"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">Module 1</h3>
                      <p className="text-sm text-slate-600">with Vera the Vector</p>
                    </div>
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">Linear Algebra</h4>
                  <p className="text-sm text-slate-600 mb-4">
                    Vectors, matrices, and transformations for data science
                  </p>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                    <BookOpen className="w-4 h-4" />
                    <span>Coming Soon</span>
                  </div>
                  <Button className="w-full bg-gray-300 cursor-not-allowed" disabled>
                    Complete Module 0 First
                  </Button>
                </CardContent>
              </Card>

              {/* Module 2 */}
              <Card className="relative overflow-hidden border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 opacity-75">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-green-200 flex items-center justify-center">
                      <span className="text-2xl">📊</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">Module 2</h3>
                      <p className="text-sm text-slate-600">with Statistics Guide</p>
                    </div>
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">Statistics & Probability</h4>
                  <p className="text-sm text-slate-600 mb-4">
                    Descriptive stats, distributions, and hypothesis testing
                  </p>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                    <BookOpen className="w-4 h-4" />
                    <span>Coming Soon</span>
                  </div>
                  <Button className="w-full bg-gray-300 cursor-not-allowed" disabled>
                    Complete Module 1 First
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-100">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
                <div className="text-slate-600">Character Guides</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                <div className="text-slate-600">Core Modules</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">35</div>
                <div className="text-slate-600">Interactive Lessons</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
