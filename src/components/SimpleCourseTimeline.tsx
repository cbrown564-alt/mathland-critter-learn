
import { ChevronRight } from "lucide-react";

const SimpleCourseTimeline = () => {
  const modules = [
    { id: 0, title: "Prerequisites & Refresher", status: "available", color: "bg-amber-500", image: "/lovable-uploads/e267cdea-bbbc-487c-b7e9-5c91fe5a6555.png" },
    { id: 1, title: "Vectors & Vector Spaces", status: "locked", color: "bg-red-500", image: "/lovable-uploads/187f4ef7-dd45-4280-8f5d-626062d22c43.png" },
    { id: 2, title: "Matrices & Linear Mappings", status: "locked", color: "bg-blue-500", image: "/lovable-uploads/c18b892c-e964-45c1-9958-ae19c36dd3e7.png" },
    { id: 3, title: "Eigenvalues & Eigenvectors", status: "locked", color: "bg-purple-500", image: "/lovable-uploads/cd4be045-5470-40af-8be9-d32ee3e9258a.png" },
    { id: 4, title: "Multivariate Calculus", status: "locked", color: "bg-green-500", image: "/lovable-uploads/8ce908b7-0c65-464e-9eea-35e40714b0cd.png" },
    { id: 5, title: "Optimization & Gradient Descent", status: "locked", color: "bg-orange-500", image: "/lovable-uploads/e942438f-5319-4038-a87a-81ec3cb17c87.png" },
    { id: 6, title: "Probability & Distributions", status: "locked", color: "bg-pink-500", image: "/lovable-uploads/05977652-4008-4b5b-aa0d-f95ce287d3c8.png" },
    { id: 7, title: "Hypothesis Testing", status: "locked", color: "bg-teal-500", image: "/lovable-uploads/86febada-e78e-48ec-9d4b-015896eac929.png" },
    { id: 8, title: "Bayesian Inference", status: "locked", color: "bg-indigo-500", image: "/lovable-uploads/ae438bc6-bcec-4fc5-a53f-53ee53055ba8.png" },
    { id: 9, title: "Capstone Project", status: "locked", color: "bg-slate-600", image: "/lovable-uploads/f1feea0f-0da6-45f5-a1aa-e0e8b5deab65.png" },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Your Learning Path</h2>
          <p className="text-lg text-slate-600">Progress through 10 comprehensive modules</p>
        </div>
        
        {/* Desktop Timeline */}
        <div className="hidden lg:flex items-center justify-between relative">
          <div className="absolute top-6 left-6 right-6 h-0.5 bg-slate-200"></div>
          <div className="absolute top-6 left-6 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-500 transition-all duration-1000" style={{ width: '10%' }}></div>
          
          {modules.map((module, index) => (
            <div key={module.id} className="flex flex-col items-center relative z-10">
              <div className={`w-12 h-12 rounded-full ${module.status === 'locked' ? 'opacity-50' : ''} flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 overflow-hidden border-4 border-white`}>
                <img 
                  src={module.image} 
                  alt={module.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-3 text-center max-w-32">
                <div className={`text-sm font-medium ${module.status === 'locked' ? 'text-slate-400' : 'text-slate-700'} leading-tight`}>
                  {module.title}
                </div>
              </div>
              {module.status === 'available' && (
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-4">
          {modules.map((module, index) => (
            <div key={module.id} className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-full ${module.status === 'locked' ? 'opacity-50' : ''} flex items-center justify-center shadow-lg flex-shrink-0 overflow-hidden border-2 border-white`}>
                <img 
                  src={module.image} 
                  alt={module.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className={`font-medium ${module.status === 'locked' ? 'text-slate-400' : 'text-slate-700'}`}>
                  {module.title}
                </div>
              </div>
              {module.status === 'available' && (
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              )}
              {index < modules.length - 1 && (
                <ChevronRight className="w-4 h-4 text-slate-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { SimpleCourseTimeline };
