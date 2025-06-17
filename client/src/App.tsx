
import { Router, Route, Switch } from 'wouter';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LanguageProvider } from './contexts/LanguageContext';
import { useState } from 'react';
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import VideoPreloader from "./components/VideoPreloader";
import ErrorBoundary from "./components/ErrorBoundary";

const queryClient = new QueryClient();

const App = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoLoadingComplete = () => {
    setIsVideoLoaded(true);
  };

  if (!isVideoLoaded) {
    return <VideoPreloader 
      videoSrc="/wallp.mp4" 
      onLoadingComplete={handleVideoLoadingComplete} 
    />;
  }

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <LanguageProvider>
            <Toaster />
            <Router>
              <ScrollToTop />
              <Switch>
                <Route path="/" component={Index} />
                <Route path="/gallery" component={Gallery} />
                <Route component={NotFound} />
              </Switch>
            </Router>
          </LanguageProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
