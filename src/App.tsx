
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PlaywrightBlog from "./pages/PlaywrightBlog";
import AiTestingBlog from "./pages/AiTestingBlog";
import GenAiBlog from "./pages/GenAiBlog";
import JiraCloudBlog from "./pages/JiraCloudBlog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/playwright-blog" element={<PlaywrightBlog />} />
          <Route path="/ai-testing-blog" element={<AiTestingBlog />} />
          <Route path="/genai-blog" element={<GenAiBlog />} />
          <Route path="/jira-cloud-blog" element={<JiraCloudBlog />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
