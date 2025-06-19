
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CharacterAvatar } from "@/components/CharacterAvatar";
import { Card, CardContent } from "@/components/ui/card";

const characters = [
  {
    name: "Ollie the Otter",
    personality: "Methodical, Step-by-step",
    catchphrase: "Let's take this step by step!",
    speciality: "Algebraic Foundations",
    color: "from-amber-500 to-orange-500",
    avatar: "/lovable-uploads/ollie-the-otter.png"
  },
  {
    name: "Felix the Function Machine",
    personality: "Logical, Systematic",
    catchphrase: "Input processed successfully!",
    speciality: "Functions & Graphing",
    color: "from-blue-600 to-indigo-600",
    avatar: "/lovable-uploads/felix-the-function-machine.png"
  },
  {
    name: "Vera the Vector",
    personality: "Adventurous, Forward-thinking",
    catchphrase: "Direction and magnitude matter!",
    speciality: "Linear Algebra",
    color: "from-red-600 to-orange-600",
    avatar: "/lovable-uploads/vera-the-vector.png"
  },
  {
    name: "Ada the Algorithm",
    personality: "Efficient, Problem-solver",
    catchphrase: "There's always a pattern!",
    speciality: "Computational Thinking",
    color: "from-purple-600 to-pink-600",
    avatar: "/lovable-uploads/ada-the-algorithm.png"
  },
  {
    name: "Carl the Calculator",
    personality: "Precise, Reliable",
    catchphrase: "Let's crunch those numbers!",
    speciality: "Arithmetic & Calculations",
    color: "from-green-600 to-teal-600",
    avatar: "/lovable-uploads/carl-the-calculator.png"
  },
  {
    name: "Stella the Stat",
    personality: "Analytical, Insightful",
    catchphrase: "The data tells a story!",
    speciality: "Statistics & Probability",
    color: "from-indigo-600 to-blue-600",
    avatar: "/lovable-uploads/stella-the-stat.png"
  },
  {
    name: "Max the Matrix",
    personality: "Organized, Structured",
    catchphrase: "Everything has its place!",
    speciality: "Matrix Operations",
    color: "from-gray-600 to-slate-600",
    avatar: "/lovable-uploads/max-the-matrix.png"
  },
  {
    name: "Penny the Probability",
    personality: "Curious, Question-asker",
    catchphrase: "What are the odds?",
    speciality: "Probability Theory",
    color: "from-yellow-600 to-amber-600",
    avatar: "/lovable-uploads/penny-the-probability.png"
  }
];

const Characters = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">
              Meet Your Learning Guides
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Each character specializes in different areas of mathematics, bringing their unique personality and expertise to guide you through your learning journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {characters.map((character) => (
              <Card key={character.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <CharacterAvatar 
                      src={character.avatar}
                      alt={character.name}
                      size="xl"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{character.name}</h3>
                  <p className="text-sm text-slate-600 mb-2">{character.personality}</p>
                  <p className="text-xs font-medium text-blue-600 mb-3">{character.speciality}</p>
                  <div className="bg-slate-100 rounded-lg p-3">
                    <p className="text-sm italic text-slate-700">"{character.catchphrase}"</p>
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
