import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CharacterAvatar } from "@/components/CharacterAvatar";
import { Card, CardContent } from "@/components/ui/card";
import { characters } from "../utils/characterData";

const Characters = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">
              Meet Your <span className="text-blue-600">Character Guides</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Each character brings their unique personality and expertise to guide you through different mathematical concepts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {characters.map((character) => (
              <Card key={character.name} className="overflow-hidden border-2 hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-8 flex flex-col h-full text-center">
                  <div className="mb-6">
                    <div className="flex justify-center mb-4">
                      <CharacterAvatar 
                        src={character.avatar}
                        alt={character.fullName}
                        size="xl"
                        className="w-24 h-24 border-4 border-white shadow-lg"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{character.fullName}</h3>
                    <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${character.color} text-white text-sm font-medium mb-4`}>
                      {character.expertise}
                    </div>
                    <p className="text-lg font-medium text-blue-600 mb-4 italic">"{character.catchphrase}"</p>
                  </div>
                  
                  <div className="space-y-4 flex-1">
                    <div>
                      <p className="text-sm text-slate-600 leading-relaxed">{character.description}</p>
                    </div>
                    
                    <div className="mt-auto pt-4 border-t border-slate-200">
                      <h4 className="font-semibold text-slate-700 text-sm mb-2">Guides You Through</h4>
                      <ul className="text-sm text-slate-600">
                        {character.modules.map((module, index) => (
                          <li key={index} className="flex items-center justify-center">
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

          {/* Character Philosophy Section */}
          <div className="mt-16 bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Our Character-Driven Learning Philosophy</h2>
              <p className="text-slate-600 max-w-4xl mx-auto">
                Each character is carefully designed to embody the essence of their mathematical domain. From Vera's adventurous spirit 
                reflecting the directional nature of vectors, to Dr. Delta's precise methodology mirroring the exactness of calculus, 
                our characters make abstract concepts tangible and memorable.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">9</div>
                <div className="text-slate-600 font-medium">Expert Characters</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">Unique</div>
                <div className="text-slate-600 font-medium">Voice & Personality</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">Memorable</div>
                <div className="text-slate-600 font-medium">Learning Experience</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Characters;
