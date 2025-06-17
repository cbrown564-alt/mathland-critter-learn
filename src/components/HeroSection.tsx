
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-orange-400 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-green-400 transform rotate-45"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-blue-400 rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-12 h-12 border-2 border-red-400 transform rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6">
            Master Math for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Data Science
            </span>{" "}
            Through Stories & Characters
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Build confidence in algebra, calculus, and statistics with our character-driven 
            learning experience designed for adult learners
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg font-semibold"
            >
              Start Your Mathematical Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-green-400 text-green-600 hover:bg-green-50 px-8 py-4 text-lg"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-orange-100">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">8</div>
              <div className="text-gray-600">Character Guides</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">9</div>
              <div className="text-gray-600">Learning Modules</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">100+</div>
              <div className="text-gray-600">Interactive Lessons</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
