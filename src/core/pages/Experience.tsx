import { Header } from "@/core/components/Header";
import { Footer } from "@/core/components/Footer";
import { ExperienceHero } from "@/core/components/experience/ExperienceHero";
import { CharacterAudioIntro } from "@/core/components/experience/CharacterAudioIntro";
import { CharacterPreviewCarousel } from "@/core/components/experience/CharacterPreviewCarousel";
import { JourneyTransformation } from "@/core/components/experience/JourneyTransformation";
import { ExperienceCTA } from "@/core/components/experience/ExperienceCTA";

const Experience = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      <main>
        {/* Hero Section */}
        <ExperienceHero />

        {/* Character Audio Introduction */}
        <CharacterAudioIntro />

        {/* Interactive Preview Carousel */}
        <CharacterPreviewCarousel />

        {/* Journey Transformation Section */}
        <JourneyTransformation />

        {/* Call-to-Action Section */}
        <ExperienceCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Experience; 