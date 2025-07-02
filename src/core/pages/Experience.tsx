import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ExperienceHero } from "@/components/experience/ExperienceHero";
import { CharacterAudioIntro } from "@/components/experience/CharacterAudioIntro";
import { CharacterPreviewCarousel } from "@/components/experience/CharacterPreviewCarousel";
import { JourneyTransformation } from "@/components/experience/JourneyTransformation";
import { ExperienceCTA } from "@/components/experience/ExperienceCTA";

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