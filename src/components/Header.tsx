
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">Mathland</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-orange-600 transition-colors">Home</Link>
            <a href="#courses" className="text-gray-600 hover:text-orange-600 transition-colors">Courses</a>
            <a href="#characters" className="text-gray-600 hover:text-orange-600 transition-colors">Characters</a>
            <a href="#about" className="text-gray-600 hover:text-orange-600 transition-colors">About</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-orange-600">
              Login
            </Button>
            <Link to="/module-0">
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
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
          <div className="md:hidden py-4 border-t border-orange-100">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-600 hover:text-orange-600 transition-colors">Home</Link>
              <a href="#courses" className="text-gray-600 hover:text-orange-600 transition-colors">Courses</a>
              <a href="#characters" className="text-gray-600 hover:text-orange-600 transition-colors">Characters</a>
              <a href="#about" className="text-gray-600 hover:text-orange-600 transition-colors">About</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="text-gray-600">Login</Button>
                <Link to="/module-0">
                  <Button className="bg-gradient-to-r from-orange-500 to-red-500 text-white w-full">
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
