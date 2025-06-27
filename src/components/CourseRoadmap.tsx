import { Lock, CheckCircle, PlayCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { ModuleCard } from "./ModuleCard";
import { useEffect, useState } from "react";
import { modulesData } from "../utils/modulesData";
import { Header } from "./Header";
import { Footer } from "./Footer";

function getStoredProgress(lessonId) {
  if (typeof window === 'undefined') return { completedSections: new Set(), currentSection: "narrative" };
  const stored = localStorage.getItem(`lesson-progress-${lessonId}`);
  if (stored) {
    const parsed = JSON.parse(stored);
    return {
      completedSections: new Set(parsed.completedSections || []),
      currentSection: parsed.currentSection || "narrative"
    };
  }
  return { completedSections: new Set(), currentSection: "narrative" };
}

export const CourseRoadmap = () => {
  const [modules, setModules] = useState([]);
  const [overallProgress, setOverallProgress] = useState(0);

  useEffect(() => {
    // Compute module progress and status
    let prevModuleComplete = true;
    let totalLessons = 0;
    let totalCompleted = 0;
    const computedModules = modulesData.map((mod, idx) => {
      // For testing: unlock all modules
      let status = 'available';
      let completedLessons = 0;
      totalLessons += mod.lessons;
      return {
        ...mod,
        status,
        progress: mod.lessons > 0 ? completedLessons / mod.lessons : 0,
        completedLessons,
        totalLessons: mod.lessons,
        prerequisites: mod.prerequisites || []
      };
    });
    setModules(computedModules);
    setOverallProgress(totalLessons > 0 ? Math.round((0 / totalLessons) * 100) : 0);
    // Listen for localStorage changes (cross-tab)
    const handle = () => {
      setModules([]);
    };
    window.addEventListener('storage', handle);
    return () => window.removeEventListener('storage', handle);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
      <Header />
      <main className="flex-1">
        <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Your Learning {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                  Journey
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Follow our carefully crafted learning path from mathematical foundations 
                to advanced data science concepts, guided by your character companions.
              </p>
            </div>

            {/* Progress Overview */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Your Progress</h3>
                  <p className="text-gray-600">Start your mathematical adventure today</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-orange-500">{overallProgress}%</div>
                  <div className="text-sm text-gray-500">Complete</div>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full" style={{ width: `${overallProgress}%` }}></div>
              </div>
            </div>

            {/* Module Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {modules.map((mod, idx) => (
                <Link key={mod.id} to={`/module-detail/${mod.id}`} style={{ textDecoration: 'none' }}>
                  <ModuleCard module={mod} index={idx} />
                </Link>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
                <Star className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Begin?</h3>
                <p className="text-gray-600 mb-6">
                  Start with Module 0 or take our placement assessment to find your perfect starting point.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/module-0">
                    <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-all">
                      Start Module 0
                    </button>
                  </Link>
                  <button className="border-2 border-green-400 text-green-600 hover:bg-green-50 px-8 py-3 rounded-lg font-semibold transition-all">
                    Take Placement Test
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
