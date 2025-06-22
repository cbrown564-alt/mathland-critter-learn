
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CharacterAvatar } from "@/components/CharacterAvatar";
import { Card, CardContent } from "@/components/ui/card";

const Characters = () => {
  const characters = [
    {
      name: "Vera",
      fullName: "Vera the Vector",
      personality: "Curious, optimistic, encouraging",
      catchphrase: "Direction and strength—that's my whole personality!",
      avatar: "/lovable-uploads/228d1d3a-e74e-4db9-b5ff-632d454e4bb6.png",
      color: "from-red-600 to-orange-600",
      expertise: "Vectors & Vector Spaces",
      description: "Cheerful and adventurous explorer, equipped with a compass and a small backpack. Vera thinks in multiple dimensions and helps you navigate the world of vectors, matrices, and linear transformations with confidence and enthusiasm.",
      modules: ["Module 1: Vectors & Vector Spaces"],
      tone: "Curious, optimistic, encouraging",
      voice: "Warm, engaging, clear, slightly excited",
      useCase: "Teaching vectors, directions, and magnitudes through real-world navigation and movement metaphors.",
      visualIdentity: "Cheerful and adventurous explorer, equipped with a compass and a small backpack, dressed in bright, bold colors."
    },
    {
      name: "Matrix Max",
      fullName: "Matrix Max",
      personality: "Enthusiastic, structured, supportive",
      catchphrase: "I organize worlds—row by row, column by column!",
      avatar: "🔢",
      color: "from-blue-600 to-indigo-600",
      expertise: "Matrices & Linear Mappings",
      description: "Energetic mathematician with hints of architectural elements; wears grid-patterned clothing, sports a calculator watch. Max helps you understand how matrices organize and transform mathematical worlds.",
      modules: ["Module 2: Matrices & Linear Mappings"],
      tone: "Enthusiastic, structured, supportive",
      voice: "Bright, articulate, encouraging",
      useCase: "Illustrating matrices as organized systems, emphasizing matrix arithmetic, transformations, and basis changes.",
      visualIdentity: "Energetic mathematician with hints of architectural elements; wears grid-patterned clothing, sports a calculator watch, featuring vibrant greens and yellows."
    },
    {
      name: "Eileen",
      fullName: "Eileen Eigen",
      personality: "Clever, thoughtful, slightly enigmatic",
      catchphrase: "Discovering hidden directions—that's the Eileen Eigen way!",
      avatar: "👸",
      color: "from-purple-600 to-pink-600",
      expertise: "Eigenvalues & Eigenvectors",
      description: "Quirky detective-explorer hybrid, characterized by a detective hat and exploration gear in purple and deep blue hues. Eileen uncovers hidden directions in data and transformations.",
      modules: ["Module 3: Eigenvalues & Eigenvectors"],
      tone: "Clever, thoughtful, slightly enigmatic",
      voice: "Playful yet intelligent, quick-thinking",
      useCase: "Introducing eigenvalues and eigenvectors, uncovering hidden directions in data and transformations.",
      visualIdentity: "Quirky detective-explorer hybrid, characterized by a detective hat and exploration gear in purple and deep blue hues, hinting at hidden insights."
    },
    {
      name: "Dr. Delta",
      fullName: "Dr. Delta",
      personality: "Logical, authoritative, calm",
      catchphrase: "Calculus is just watching how fast things change—and nobody does it better than Dr. Delta!",
      avatar: "🧮",
      color: "from-green-600 to-emerald-600",
      expertise: "Multivariate Calculus",
      description: "Thoughtful, precise scientist with subtle engineering elements; dressed in a lab coat, wears glasses, carries a clipboard. Dr. Delta clarifies concepts of derivatives, partial derivatives, and gradients.",
      modules: ["Module 4: Multivariate Calculus Foundations"],
      tone: "Logical, authoritative, calm",
      voice: "Professional, measured, slightly deeper pitch",
      useCase: "Clarifying concepts of derivatives, partial derivatives, gradients, and rates of change with clear, structured explanations.",
      visualIdentity: "Thoughtful, precise scientist with subtle engineering elements; dressed in a lab coat, wears glasses, carries a clipboard, using calm blues and whites."
    },
    {
      name: "Gradient Greta",
      fullName: "Gradient Greta",
      personality: "Motivational, determined, supportive",
      catchphrase: "Climb with me step by step—we'll find the lowest point together!",
      avatar: "📈",
      color: "from-orange-600 to-red-600",
      expertise: "Optimization & Gradient Descent",
      description: "Determined climber and hiker, equipped with hiking gear, ropes, and earthy, natural-colored clothing. Greta teaches optimization through relatable analogies of climbing towards optimal solutions.",
      modules: ["Module 5: Optimization & Gradient Descent"],
      tone: "Motivational, determined, supportive",
      voice: "Energetic, motivating, upbeat",
      useCase: "Teaching gradient descent and optimization algorithms through relatable analogies of climbing or hiking towards optimal solutions.",
      visualIdentity: "Determined climber and hiker, equipped with hiking gear, ropes, and earthy, natural-colored clothing."
    },
    {
      name: "Probability Pippa",
      fullName: "Probability Pippa",
      personality: "Playful, whimsical, engaging",
      catchphrase: "Magic or math? Probability Pippa knows it's both!",
      avatar: "🎲",
      color: "from-pink-600 to-rose-600",
      expertise: "Probability & Distributions",
      description: "Quirky magician in playful, whimsical attire, featuring a magician's hat, wand, and costumes in rich purples and golds. Pippa explains probability using playful magic metaphors.",
      modules: ["Module 6: Probability & Distributions"],
      tone: "Playful, whimsical, engaging",
      voice: "Animated, lively, fun",
      useCase: "Explaining core probability concepts, distributions, and randomness using playful magic metaphors.",
      visualIdentity: "Quirky magician in playful, whimsical attire, featuring a magician's hat, wand, and costumes in rich purples and golds."
    },
    {
      name: "Sigmund",
      fullName: "Sigmund the Swan",
      personality: "Calm, understated, wise",
      catchphrase: "One black swan can change everything—Sigmund helps you understand why!",
      avatar: "🦢",
      color: "from-teal-600 to-cyan-600",
      expertise: "Hypothesis Testing & Inference",
      description: "Elegant black swan with simple, iconic imagery, presented in clean black-and-white contrast. Sigmund teaches hypothesis testing using the powerful black swan metaphor.",
      modules: ["Module 7: Hypothesis Testing & Inference"],
      tone: "Calm, understated, wise",
      voice: "Gentle, thoughtful, reassuring",
      useCase: "Used specifically for teaching hypothesis testing, drawing on the powerful and memorable black swan metaphor.",
      visualIdentity: "Elegant black swan with simple, iconic imagery, presented in clean black-and-white contrast."
    },
    {
      name: "Bayes",
      fullName: "Bayes the Fox",
      personality: "Sharp, quick-thinking, playful",
      catchphrase: "When you're uncertain, follow Bayes the Fox to sniff out the truth!",
      avatar: "🦊",
      color: "from-indigo-600 to-purple-600",
      expertise: "Bayesian Inference",
      description: "Clever detective fox character, characterized by a detective's hat and magnifying glass, using warm orange and earthy tones. Bayes introduces Bayesian inference through detective narratives.",
      modules: ["Module 8: Bayesian Inference"],
      tone: "Sharp, quick-thinking, playful",
      voice: "Witty, engaging, quick-paced",
      useCase: "Introducing Bayesian inference, probability reasoning, and hypothesis testing through detective narratives and mysteries.",
      visualIdentity: "Clever detective fox character, characterized by a detective's hat and magnifying glass, using warm orange and earthy tones."
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {characters.map((character) => (
              <Card key={character.name} className="overflow-hidden border-2 hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="text-center mb-4">
                    <div className="flex justify-center mb-3">
                      {character.avatar.startsWith('/') ? (
                        <CharacterAvatar 
                          src={character.avatar}
                          alt={character.fullName}
                          size="lg"
                        />
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center text-3xl border-4 border-white shadow-lg">
                          {character.avatar}
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-1">{character.fullName}</h3>
                    <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${character.color} text-white text-xs font-medium mb-2`}>
                      {character.expertise}
                    </div>
                    <p className="text-sm font-medium text-blue-600 mb-3">"{character.catchphrase}"</p>
                  </div>
                  
                  <div className="space-y-3 flex-1">
                    <div>
                      <h4 className="font-semibold text-slate-700 text-sm mb-1">Visual Identity</h4>
                      <p className="text-xs text-slate-600">{character.visualIdentity}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-700 text-sm mb-1">Teaching Style</h4>
                      <p className="text-xs text-slate-600">{character.useCase}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-700 text-sm mb-1">Voice & Tone</h4>
                      <p className="text-xs text-slate-600">{character.tone} • {character.voice}</p>
                    </div>
                    
                    <div className="mt-auto pt-3 border-t border-slate-200">
                      <h4 className="font-semibold text-slate-700 text-sm mb-1">Guides You Through</h4>
                      <ul className="text-xs text-slate-600">
                        {character.modules.map((module, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
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
                <div className="text-2xl font-bold text-blue-600 mb-2">8</div>
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
