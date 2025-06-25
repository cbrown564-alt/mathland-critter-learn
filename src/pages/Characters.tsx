
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CharacterAvatar } from "@/components/CharacterAvatar";
import { Card, CardContent } from "@/components/ui/card";

const Characters = () => {
  const characters = [
    {
      name: "Vera",
      fullName: "Vera the Vector",
      catchphrase: "Direction and strength—that's my whole personality!",
      avatar: "/lovable-uploads/187f4ef7-dd45-4280-8f5d-626062d22c43.png",
      color: "from-red-600 to-orange-600",
      expertise: "Vectors & Vector Spaces",
      description: "Cheerful and adventurous explorer, equipped with a compass and a small backpack. Vera thinks in multiple dimensions and helps you navigate the world of vectors, matrices, and linear transformations with confidence and enthusiasm.",
      modules: ["Module 1: Vectors & Vector Spaces"]
    },
    {
      name: "Matrix Max",
      fullName: "Matrix Max",
      catchphrase: "I organize worlds—row by row, column by column!",
      avatar: "/lovable-uploads/c18b892c-e964-45c1-9958-ae19c36dd3e7.png",
      color: "from-blue-600 to-indigo-600",
      expertise: "Matrices & Linear Mappings",
      description: "Energetic mathematician with hints of architectural elements; wears grid-patterned clothing, sports a calculator watch. Max helps you understand how matrices organize and transform mathematical worlds.",
      modules: ["Module 2: Matrices & Linear Mappings"]
    },
    {
      name: "Eileen",
      fullName: "Eileen Eigen",
      catchphrase: "Discovering hidden directions—that's the Eileen Eigen way!",
      avatar: "/lovable-uploads/cd4be045-5470-40af-8be9-d32ee3e9258a.png",
      color: "from-purple-600 to-pink-600",
      expertise: "Eigenvalues & Eigenvectors",
      description: "Quirky detective-explorer hybrid, characterized by a detective hat and exploration gear in purple and deep blue hues. Eileen uncovers hidden directions in data and transformations.",
      modules: ["Module 3: Eigenvalues & Eigenvectors"]
    },
    {
      name: "Dr. Delta",
      fullName: "Dr. Delta",
      catchphrase: "Calculus is just watching how fast things change—and nobody does it better than Dr. Delta!",
      avatar: "/lovable-uploads/8ce908b7-0c65-464e-9eea-35e40714b0cd.png",
      color: "from-green-600 to-emerald-600",
      expertise: "Multivariate Calculus",
      description: "Thoughtful, precise scientist with subtle engineering elements; dressed in a lab coat, wears glasses, carries a clipboard. Dr. Delta clarifies concepts of derivatives, partial derivatives, and gradients.",
      modules: ["Module 4: Multivariate Calculus Foundations"]
    },
    {
      name: "Gradient Greta",
      fullName: "Gradient Greta",
      catchphrase: "Climb with me step by step—we'll find the lowest point together!",
      avatar: "/lovable-uploads/e942438f-5319-4038-a87a-81ec3cb17c87.png",
      color: "from-orange-600 to-red-600",
      expertise: "Optimization & Gradient Descent",
      description: "Determined climber and hiker, equipped with hiking gear, ropes, and earthy, natural-colored clothing. Greta teaches optimization through relatable analogies of climbing towards optimal solutions.",
      modules: ["Module 5: Optimization & Gradient Descent"]
    },
    {
      name: "Probability Pippa",
      fullName: "Probability Pippa",
      catchphrase: "Magic or math? Probability Pippa knows it's both!",
      avatar: "/lovable-uploads/05977652-4008-4b5b-aa0d-f95ce287d3c8.png",
      color: "from-pink-600 to-rose-600",
      expertise: "Probability & Distributions",
      description: "Quirky magician in playful, whimsical attire, featuring a magician's hat, wand, and costumes in rich purples and golds. Pippa explains probability using playful magic metaphors.",
      modules: ["Module 6: Probability & Distributions"]
    },
    {
      name: "Sigmund",
      fullName: "Sigmund the Swan",
      catchphrase: "One black swan can change everything—Sigmund helps you understand why!",
      avatar: "/lovable-uploads/86febada-e78e-48ec-9d4b-015896eac929.png",
      color: "from-teal-600 to-cyan-600",
      expertise: "Hypothesis Testing & Inference",
      description: "Elegant black swan with simple, iconic imagery, presented in clean black-and-white contrast. Sigmund teaches hypothesis testing using the powerful black swan metaphor.",
      modules: ["Module 7: Hypothesis Testing & Inference"]
    },
    {
      name: "Bayes",
      fullName: "Bayes the Fox",
      catchphrase: "When you're uncertain, follow Bayes the Fox to sniff out the truth!",
      avatar: "/lovable-uploads/ae438bc6-bcec-4fc5-a53f-53ee53055ba8.png",
      color: "from-indigo-600 to-purple-600",
      expertise: "Bayesian Inference",
      description: "Clever detective fox character, characterized by a detective's hat and magnifying glass, using warm orange and earthy tones. Bayes introduces Bayesian inference through detective narratives.",
      modules: ["Module 8: Bayesian Inference"]
    },
    {
      name: "Sage",
      fullName: "Sage the Synthesis Owl",
      catchphrase: "Turning insight into impact—that's the Sage way!",
      avatar: "/lovable-uploads/f1feea0f-0da6-45f5-a1aa-e0e8b5deab65.png",
      color: "from-slate-600 to-gray-600",
      expertise: "Capstone Project",
      description: "Wise and thoughtful owl character who guides students through synthesizing all their learning into practical applications. Sage helps bring together knowledge from all previous modules.",
      modules: ["Module 9: Capstone Project"]
    }
  ];

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
