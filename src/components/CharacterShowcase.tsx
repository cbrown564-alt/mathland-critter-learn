
import { ArrowRight } from "lucide-react";
import { CharacterCard } from "./CharacterCard";

const characters = [
  {
    id: "vera",
    name: "Vera the Vector",
    animal: "Red Panda",
    concept: "Vectors & Direction",
    tagline: "Discover direction and magnitude",
    description: "Join Vera as she explores the world of vectors, teaching you how mathematical direction and magnitude work together in perfect harmony.",
    color: "from-red-400 to-orange-500",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: "max",
    name: "Matrix Max",
    animal: "Owl", 
    concept: "Matrices & Structure",
    tagline: "Master structure and transformations",
    description: "Wise Max will guide you through the organized world of matrices, showing how mathematical structures can transform and reshape data.",
    color: "from-blue-400 to-indigo-500",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: "eileen",
    name: "Eileen Eigen",
    animal: "Cat",
    concept: "Eigenvalues & Patterns",
    tagline: "Uncover hidden patterns",
    description: "Curious Eileen has a knack for finding hidden patterns and essential characteristics in complex mathematical systems.",
    color: "from-purple-400 to-pink-500",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: "delta",
    name: "Dr. Delta",
    animal: "Hedgehog",
    concept: "Calculus & Change",
    tagline: "Understand change and rates",
    description: "Professor Delta specializes in understanding how things change, making calculus concepts approachable and intuitive.",
    color: "from-green-400 to-emerald-500",
    image: "https://images.unsplash.com/photo-1452960962994-acf4fd70b632?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: "greta",
    name: "Gradient Greta",
    animal: "Mountain Goat",
    concept: "Optimization",
    tagline: "Climb to optimal solutions",
    description: "Adventurous Greta knows how to find the best path up any mountain, teaching you optimization and gradient descent techniques.",
    color: "from-teal-400 to-cyan-500",
    image: "https://images.unsplash.com/photo-1438565434616-3ef039228b15?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: "pippa",
    name: "Probability Pippa",
    animal: "Rabbit",
    concept: "Probability & Chance",
    tagline: "Navigate uncertainty with magic",
    description: "Lucky Pippa helps you understand probability and statistics, making uncertainty feel less scary and more manageable.",
    color: "from-pink-400 to-rose-500",
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: "bayes",
    name: "Bayes the Fox",
    animal: "Fox",
    concept: "Bayesian Inference",
    tagline: "Make smart inferences",
    description: "Clever Bayes teaches you how to update your beliefs with new evidence, mastering the art of Bayesian reasoning.",
    color: "from-amber-400 to-orange-500",
    image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: "sigmund",
    name: "Sigmund the Swan",
    animal: "Swan",
    concept: "Hypothesis Testing",
    tagline: "Test hypotheses elegantly",
    description: "Graceful Sigmund guides you through hypothesis testing, helping you make confident statistical decisions with elegance.",
    color: "from-slate-400 to-gray-500",
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=400&h=400&fit=crop&crop=face"
  }
];

export const CharacterShowcase = () => {
  return (
    <section id="characters" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Meet Your Mathematical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
              Guides
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each mathematical concept comes to life through our delightful character guides, 
            making complex topics approachable and memorable for adult learners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 text-lg font-semibold text-green-600 hover:text-green-700 transition-colors">
            Explore All Characters
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
