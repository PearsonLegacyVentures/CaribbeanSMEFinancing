import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import SMEs from "./pages/About";
import Investors from "./pages/Services";
import Institutions from "./pages/Work";
import HowItWorks from "./pages/HowItWorks";
import RiskTrust from "./pages/RiskTrust";
import MarketOpportunity from "./pages/MarketOpportunity";
import Contact from "./pages/Contact";
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
          <Route path="/for-smes" element={<SMEs />} />
          <Route path="/for-investors" element={<Investors />} />
          <Route path="/for-institutions" element={<Institutions />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/risk-and-trust" element={<RiskTrust />} />
          <Route path="/market-opportunity" element={<MarketOpportunity />} />
          <Route path="/request-access" element={<Contact />} />
          <Route path="/contact" element={<Navigate to="/request-access" replace />} />
          <Route path="/about" element={<Navigate to="/for-smes" replace />} />
          <Route path="/services" element={<Navigate to="/for-investors" replace />} />
          <Route path="/work" element={<Navigate to="/for-institutions" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
