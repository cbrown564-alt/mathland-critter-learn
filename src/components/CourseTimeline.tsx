
import { Badge } from "@/components/ui/badge";

const CourseTimeline = () => {
  const modules = [
    {
      id: 0,
      title: "Algebraic Foundations",
      status: "available",
      color: "bg-amber-500",
      lessons: 8
    },
    {
      id: 1,
      title: "Linear Algebra", 
      status: "coming-soon",
      color: "bg-red-500",
      lessons: 12
    },
    {
      id: 2,
      title: "Statistics & Probability",
      status: "coming-soon", 
      color: "bg-green-500",
      lessons: 15
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Your Learning Path</h2>
          <p className="text-slate-600">Complete course structure at a glance</p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 transform -translate-y-1/2"></div>
          
          {/* Modules */}
          <div className="relative flex justify-between items-center">
            {modules.map((module, index) => (
              <div key={module.id} className="flex flex-col items-center">
                {/* Circle */}
                <div className={`w-12 h-12 rounded-full ${module.color} ${module.status === 'available' ? '' : 'opacity-50'} flex items-center justify-center text-white font-bold text-lg relative z-10 bg-white border-4 border-current`}>
                  {module.id}
                </div>
                
                {/* Module info */}
                <div className="mt-4 text-center max-w-32">
                  <h3 className="font-semibold text-slate-800 text-sm mb-1">
                    Module {module.id}
                  </h3>
                  <p className="text-xs text-slate-600 mb-2">{module.title}</p>
                  <div className="text-xs text-slate-500 mb-2">{module.lessons} lessons</div>
                  <Badge 
                    variant={module.status === 'available' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {module.status === 'available' ? 'Available' : 'Coming Soon'}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { CourseTimeline };
