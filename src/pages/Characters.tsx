
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CharacterAvatar } from "@/components/CharacterAvatar";
import { Card, CardContent } from "@/components/ui/card";

const Characters = () => {
  const characters = [
    {
      name: "Ollie",
      fullName: "Ollie the Otter",
      personality: "Methodical, Step-by-step",
      catchphrase: "Let's take this step by step!",
      avatar: "/lovable-uploads/2371fa94-e340-47aa-b1ed-5670d33066a8.png",
      color: "from-amber-500 to-orange-500",
      expertise: "Algebraic Foundations",
      description: "Ollie loves building things systematically, just like solving mathematical problems. He guides you through the fundamentals of algebra with patience and precision.",
      modules: ["Module 0: Lessons 0.1-0.4"]
    },
    {
      name: "Felix",
      fullName: "Felix the Function Machine",
      personality: "Logical, Systematic",
      catchphrase: "Input processed successfully!",
      avatar: "/lovable-uploads/3972307e-38ad-4120-a059-7785ae6a8516.png",
      color: "from-blue-600 to-indigo-600",
      expertise: "Functions & Graphing",
      description: "Felix processes information like a well-oiled machine, helping you understand how functions transform inputs into outputs with mathematical precision.",
      modules: ["Module 0: Lessons 0.5-0.7"]
    },
    {
      name: "Vera",
      fullName: "Vera the Vector",
      personality: "Adventurous, Forward-thinking",
      catchphrase: "Direction and magnitude matter!",
      avatar: "/lovable-uploads/228d1d3a-e74e-4db9-b5ff-632d454e4bb6.png",
      color: "from-red-600 to-orange-600",
      expertise: "Linear Algebra & Vectors",
      description: "Vera thinks in multiple dimensions and helps you navigate the world of vectors, matrices, and linear transformations with confidence and enthusiasm.",
      modules: ["Module 0: Lesson 0.8", "Module 1: Linear Algebra"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">
              Meet Your <span className="text-blue-600">Character Guides</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Each character brings their unique personality and expertise to guide you through different mathematical concepts
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {characters.map((character) => (
              <Card key={character.name} className="overflow-hidden border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="flex justify-center mb-4">
                      <CharacterAvatar 
                        src={character.avatar}
                        alt={character.fullName}
                        size="xl"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{character.fullName}</h3>
                    <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${character.color} text-white text-sm font-medium mb-3`}>
                      {character.expertise}
                    </div>
                    <p className="text-lg font-medium text-blue-600 mb-4">"{character.catchphrase}"</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-2">Personality</h4>
                      <p className="text-slate-600">{character.personality}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-2">Teaching Style</h4>
                      <p className="text-slate-600">{character.description}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-2">Guides You Through</h4>
                      <ul className="text-slate-600">
                        {character.modules.map((module, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            {module}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Characters;
