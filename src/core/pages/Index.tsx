import { ArrowRight, BookOpen, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/core/components/ui/button";
import { Card, CardContent } from "@/core/components/ui/card";
import { Header } from "@/core/components/Header";
import { Footer } from "@/core/components/Footer";
import { HeroSection } from "@/core/components/HeroSection";
import { SimpleCourseTimeline } from "@/core/components/SimpleCourseTimeline";
import { characters } from "@/utils/characterData";

const ollie = characters.find(c => c.id === "ollie");
const vera = characters.find(c => c.id === "vera");
const max = characters.find(c => c.id === "max");

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Simple Course Timeline */}
        <SimpleCourseTimeline />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
