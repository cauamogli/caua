import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import Portfolio from "./pages/Portfolio";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Shipping from "./pages/Shipping";
import Warranty from "./pages/Warranty";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="*" element={<Layout><Routes>
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:productId" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/warranty" element={<Warranty />} />
            <Route path="*" element={<NotFound />} />
          </Routes></Layout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
