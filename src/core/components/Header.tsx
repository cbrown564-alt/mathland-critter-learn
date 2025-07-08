import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/core/components/ui/button";
import { getLessonOrderForModule } from "@/utils/lessonData";
import { getLessonProgress, isLessonCompleted } from "@/core/hooks/useLessonProgress";

function getNextLessonId() {
  const lessonOrder = getLessonOrderForModule("0");
  for (const id of lessonOrder) {
    if (!isLessonCompleted(id, 8)) {
      return id;
    }
  }
  return lessonOrder[lessonOrder.length - 1]; // fallback to last lesson if all complete
}

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [nextLessonId, setNextLessonId] = useState("0.1");
  const [isNew, setIsNew] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const lessonOrder = getLessonOrderForModule("0");
    let found = false;
    for (const id of lessonOrder) {
      if (!isLessonCompleted(id, 8)) {
        setNextLessonId(id);
        setIsNew(id === lessonOrder[0]);
        found = true;
        break;
      }
    }
    if (!found) {
      setNextLessonId(lessonOrder[lessonOrder.length - 1]);
      setIsNew(false);
    }
  }, []);

  const handleContinue = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(`/lesson/${nextLessonId}`);
  };

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
            <Link to="/experience" className="text-slate-600 hover:text-blue-600 transition-colors">Experience</Link>
            <Link to="/course" className="text-slate-600 hover:text-blue-600 transition-colors">Roadmap</Link>
            <Link to="/tier2-gallery" className="text-slate-600 hover:text-blue-600 transition-colors">Gallery</Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={handleContinue}>
              {isNew ? "Start Learning" : "Continue Learning"}
            </Button>
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
              <Link to="/experience" className="text-slate-600 hover:text-blue-600 transition-colors">Experience</Link>
              <Link to="/course" className="text-slate-600 hover:text-blue-600 transition-colors">Roadmap</Link>
              <Link to="/tier2-gallery" className="text-slate-600 hover:text-blue-600 transition-colors">Gallery</Link>
              <div className="pt-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full" onClick={handleContinue}>
                  {isNew ? "Start Learning" : "Continue Learning"}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
