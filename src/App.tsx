
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Class10 from "./pages/Class10";
import History from "./pages/History";
import HistoryChapters from "./pages/HistoryChapters";
import Chapter1Topics from "./pages/Chapter1Topics";
import WorldWarOne from "./pages/WorldWarOne";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/class/10" element={<Class10 />} />
          <Route path="/class/10/history" element={<History />} />
          <Route path="/class/10/history/chapters" element={<HistoryChapters />} />
          <Route path="/class/10/history/chapter-1" element={<Chapter1Topics />} />
          <Route path="/class/10/history/chapter-1/world-war-one" element={<WorldWarOne />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;