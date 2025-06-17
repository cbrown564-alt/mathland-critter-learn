
import { ArrowRight, Star, BookOpen } from "lucide-react";
import { CharacterShowcase } from "@/components/CharacterShowcase";
import { CourseRoadmap } from "@/components/CourseRoadmap";
import { HeroSection } from "@/components/HeroSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-green-50 to-blue-50">
      <Header />
      <main>
        <HeroSection />
        <CharacterShowcase />
        <CourseRoadmap />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
