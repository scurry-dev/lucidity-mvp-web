import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Setup from "./pages/Setup";
import Platforms from "./pages/Platforms";
import FocusAreas from "./pages/FocusAreas";
import ColorPalette from "./pages/ColorPalette";
import Results from "./pages/Results";
import AgencySetup from "./pages/AgencySetup";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/welcome" element={<Index />} />
          <Route path="/setup" element={<Setup />} />
          <Route path="/platforms" element={<Platforms />} />
          <Route path="/focus-areas" element={<FocusAreas />} />
          <Route path="/color-palette" element={<ColorPalette />} />
          <Route path="/results" element={<Results />} />
          <Route path="/agency-setup" element={<AgencySetup />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
