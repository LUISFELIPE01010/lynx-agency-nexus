import { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Switch } from "wouter";
import { LanguageProvider } from "./contexts/LanguageContext";
import LoadingScreen from "./components/LoadingScreen";
import VideoPreloader from "./components/VideoPreloader";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [videoPreloading, setVideoPreloading] = useState(true);

  const handleVideoLoadingComplete = () => {
    setVideoPreloading(false);
  };

  if (videoPreloading) {
    return <VideoPreloader onLoadingComplete={handleVideoLoadingComplete} videoSrc="/wallp.mp4" />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Switch>
            <Route path="/" component={Index} />
            <Route path="/gallery" component={Gallery} />
            <Route component={NotFound} />
          </Switch>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;