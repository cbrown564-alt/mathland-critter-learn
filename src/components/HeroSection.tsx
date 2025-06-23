
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-orange-400 to-red-400 transform rotate-45 animate-bounce"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 transform rotate-45 animate-bounce delay-500"></div>
        
        {/* Mathematical symbols */}
        <div className="absolute top-16 right-32 text-6xl text-blue-200 animate-float">∑</div>
        <div className="absolute bottom-40 left-32 text-4xl text-purple-200 animate-float delay-300">∇</div>
        <div className="absolute top-60 left-1/2 text-5xl text-orange-200 animate-float delay-700">∫</div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border border-blue-300"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-800 mb-6 border border-blue-200">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Interactive Character-Guided Learning
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gray-800">Master Math for</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 animate-gradient-x">
              Data Science
            </span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl text-gray-600 font-normal">
              Through Stories & Characters
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Build confidence in algebra, calculus, and statistics with our character-driven 
            learning experience designed for adult learners
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start Your Mathematical Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-blue-400 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Interactive Stats with hover effects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-blue-100">
            <div className="group text-center p-6 rounded-xl hover:bg-white/50 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">9</div>
              <div className="text-gray-600 font-medium">Character Guides</div>
            </div>
            <div className="group text-center p-6 rounded-xl hover:bg-white/50 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">10</div>
              <div className="text-gray-600 font-medium">Learning Modules</div>
            </div>
            <div className="group text-center p-6 rounded-xl hover:bg-white/50 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">97</div>
              <div className="text-gray-600 font-medium">Interactive Lessons</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
