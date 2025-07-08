import { Header } from "@/core/components/Header";
import { Footer } from "@/core/components/Footer";
import { HeroSection } from "@/core/components/HeroSection";
import { SimpleCourseTimeline } from "@/core/components/SimpleCourseTimeline";


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
