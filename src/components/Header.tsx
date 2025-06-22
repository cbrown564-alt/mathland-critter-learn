
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-2xl font-bold text-slate-800">Mathland</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-600 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/module-0" className="text-slate-600 hover:text-blue-600 transition-colors">Lessons</Link>
            <Link to="/characters" className="text-slate-600 hover:text-blue-600 transition-colors">Characters</Link>
            <Link to="/course-structure" className="text-slate-600 hover:text-blue-600 transition-colors">Course</Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/module-0">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Start Learning
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-slate-600 hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/module-0" className="text-slate-600 hover:text-blue-600 transition-colors">Lessons</Link>
              <Link to="/characters" className="text-slate-600 hover:text-blue-600 transition-colors">Characters</Link>
              <Link to="/course-structure" className="text-slate-600 hover:text-blue-600 transition-colors">Course</Link>
              <div className="pt-4">
                <Link to="/module-0">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                    Start Learning
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
