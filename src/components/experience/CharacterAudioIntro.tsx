import { Card, CardContent } from "@/components/ui/card";
import { EnhancedAudioPlayer } from "../lesson/EnhancedAudioPlayer";
import { characters } from "../../utils/characterData";

// Transcript for the intro audio
const introTranscript = [
  "Welcome, fellow explorers, to the magical realm of Mathland! I'm Sage the Visionary Eagle, your guide through this extraordinary mathematical journey. Here, abstract concepts come alive through the wisdom and personalities of our remarkable cast of mathematical mentors.",
  "Hey there, builders! Ollie the Otter here. I believe in taking everything step by step, building SOLID mathematical foundations that support every advanced concept you'll encounter.",
  "Input processed successfully! Felix the Function Machine reporting. I transform inputs into outputs following logical rules. Functions are the foundation of all computational thinking!",
  "Hey there! I'm Vera the Vector, and I think in terms of direction and magnitude! Whether we're navigating through space or organizing data, I'll show you how vectors give everything purpose and direction.",
  "Greetings! Matrix Max here, master of systematic organization. I arrange worlds row by row, column by column, transforming chaos into elegant mathematical structure!",
  "Eileen Eigen, detective of hidden patterns. I uncover the secret structures lurking within any mathematical transformation. Every matrix has mysteries, and I'm here to solve them!",
  "Dr. Delta at your service. I study the mathematics of change with scientific precision. When you need to understand how things transform and evolve, calculus is our answer!",
  "Gradient Greta here! I climb mathematical mountains to find optimal solutions. Whether it's machine learning or business optimization, I'll guide you to the peak!",
  "Hello, magical mathematicians! Probability Pippa speaking! I make the unpredictable predictable through the beautiful patterns of chance and randomness.",
  "Sigmund the Swan, master of statistical elegance. I distinguish the truly significant from mere coincidence, bringing dignity to data analysis and hypothesis testing.",
  "Bayes the Fox, detective of evolving evidence. In my world, we update beliefs systematically as new clues emerge. Every case changes the story.",
  "Together, we represent the complete mathematical toolkit for data science mastery. From Ollie's foundational building blocks through Bayes' sophisticated inference techniques, each character brings unique wisdom to your learning adventure."
];

interface AudioIntroProps {
  audioUrl?: string;
}

export const CharacterAudioIntro = ({ 
  audioUrl = "/audio/Intro.mp3"
}: AudioIntroProps) => {
  // Find Sage character for the intro
  const sageCharacter = characters.find(c => c.id === 'sage');

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Meet Your Mathematical Companions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Listen to our characters introduce themselves and discover how they'll guide your mathematical journey
          </p>
        </div>

        <Card className="max-w-3xl mx-auto shadow-lg border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
          <CardContent className="p-8">
            {sageCharacter && (
              <EnhancedAudioPlayer
                audioUrl={audioUrl}
                character={sageCharacter}
                transcript={introTranscript}
                showTranscript={true}
              />
            )}
          </CardContent>
        </Card>

        {/* Visual Feedback */}
        <div className="mt-8 text-center">
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-8 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-6 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-10 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-4 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
            <div className="w-2 h-8 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}; 