import { useParams, useNavigate } from "react-router-dom";
import { modulesData } from "../utils/modulesData";
import { characters } from "../utils/characterData";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Clock, Users } from "lucide-react";

export default function ModuleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const moduleId = Number(id);
  const module = modulesData.find((m) => m.id === moduleId);
  const character = module && characters.find(c => c.name === module.character.name || c.fullName === module.character.name);

  if (!module) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Module Not Found</h2>
          <Button onClick={() => navigate("/course")}>Back to Roadmap</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
      <Header />
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Button variant="outline" className="mb-8" onClick={() => navigate("/course")}> <ArrowLeft className="w-4 h-4 mr-2" /> Back to Roadmap</Button>
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center gap-6 mb-6">
                <div className={`w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0 bg-gradient-to-br ${module.color}`}>
                  {character && character.avatar ? (
                    <img src={character.avatar} alt={character.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-3xl flex items-center justify-center w-full h-full">{module.character.name[0]}</span>
                  )}
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-slate-800 mb-1">{module.title}</h1>
                  <p className="text-lg text-slate-600">{module.subtitle}</p>
                  <div className="flex items-center gap-4 mt-2 text-slate-500 text-sm">
                    <span className="flex items-center gap-1"><BookOpen className="w-4 h-4" /> {module.lessons} lessons</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {module.duration}</span>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-slate-700 mb-2">Module Overview</h2>
                <p className="text-slate-700 leading-relaxed">{module.description}</p>
              </div>
              <div className="mb-6">
                <h3 className="font-semibold text-slate-700 mb-2">Key Concepts You'll Master</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {module.concepts.map((concept, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                      {concept}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="font-semibold text-slate-700 mb-2">Prerequisites</h3>
                <p className="text-slate-600">{module.prerequisites}</p>
              </div>
              {character && (
                <div className="mt-8 p-6 bg-blue-50 rounded-xl flex gap-6 items-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-blue-200 shadow-lg flex-shrink-0">
                    <img src={character.avatar} alt={character.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-blue-700 mb-1">Meet Your Guide: {character.name}</h4>
                    <p className="text-slate-700 mb-1">{character.tagline}</p>
                    <p className="text-slate-600 text-sm mb-1">{character.description}</p>
                    <span className="inline-block text-xs text-blue-600 bg-blue-100 rounded px-2 py-1 mt-1">{character.concept}</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
} 