
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import Module0 from "./pages/Module0";
import LessonPage from "./pages/LessonPage";
import NotFound from "./pages/NotFound";

const Characters = lazy(() => import('./pages/Characters'));
const CourseTimeline = lazy(() => import('./pages/CourseTimeline'));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/module-0" element={<Module0 />} />
            <Route path="/lesson/:lessonId" element={<LessonPage />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/course-timeline" element={<CourseTimeline />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
