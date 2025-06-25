import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Module0 from "./pages/Module0";
import LessonPage from "./pages/LessonPage";
import Characters from "./pages/Characters";
import CourseStructure from "./pages/CourseStructure";
import NotFound from "./pages/NotFound";
import Course from "./pages/Course";
import ModuleDetail from "./pages/ModuleDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/module-0" element={<Module0 />} />
          <Route path="/lesson/:lessonId" element={<LessonPage />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/course-structure" element={<CourseStructure />} />
          <Route path="/course" element={<Course />} />
          <Route path="/module/:id" element={<ModuleDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
