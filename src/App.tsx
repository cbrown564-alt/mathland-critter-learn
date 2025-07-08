import { Toaster as Sonner } from "@/core/components/ui/sonner";
import { TooltipProvider } from "@/core/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./core/pages/Index";
import ModulePage from "./core/pages/ModulePage";
import LessonPage from "./core/pages/LessonPage";
import NotFound from "./core/pages/NotFound";
import Course from "./core/pages/Course";
import ModuleDetail from "./core/pages/ModuleDetail";
import Experience from "./core/pages/Experience";
import Tier2Gallery from "./core/pages/Tier2Gallery";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/module/:moduleId" element={<ModulePage />} />
          <Route path="/lesson/:lessonId" element={<LessonPage />} />
          <Route path="/course" element={<Course />} />
          <Route path="/module-detail/:id" element={<ModuleDetail />} />
          <Route path="/tier2-gallery" element={<Tier2Gallery />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
