// Utility functions for mobile video autoplay compatibility

export const enableMobileVideoAutoplay = (videoElement: HTMLVideoElement): (() => void) => {
  // Essential mobile video attributes
  videoElement.muted = true;
  videoElement.playsInline = true;
  videoElement.setAttribute('webkit-playsinline', 'true');
  videoElement.setAttribute('playsinline', 'true');
  
  // Try to play immediately
  const tryPlay = async () => {
    try {
      await videoElement.play();
    } catch (error) {
      console.log('Video autoplay prevented, waiting for user interaction');
    }
  };

  // Handle user interaction to start video
  const handleInteraction = () => {
    if (videoElement.paused) {
      videoElement.play().catch(console.log);
    }
  };

  // Try to play when metadata is loaded
  videoElement.addEventListener('loadedmetadata', tryPlay);
  videoElement.addEventListener('canplay', tryPlay);

  // Add touch/click listeners for mobile
  document.addEventListener('touchstart', handleInteraction, { once: true, passive: true });
  document.addEventListener('click', handleInteraction, { once: true, passive: true });
  
  // Cleanup function
  return () => {
    document.removeEventListener('touchstart', handleInteraction);
    document.removeEventListener('click', handleInteraction);
    videoElement.removeEventListener('loadedmetadata', tryPlay);
    videoElement.removeEventListener('canplay', tryPlay);
  };
};

// Global mobile video setup for all videos on page
export const setupMobileVideoCompatibility = (): void => {
  const videos = document.querySelectorAll('video[autoplay]');
  
  videos.forEach((video) => {
    const videoEl = video as HTMLVideoElement;
    enableMobileVideoAutoplay(videoEl);
  });

  // Handle dynamically added videos
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          const element = node as Element;
          const videos = element.querySelectorAll('video[autoplay]');
          videos.forEach((video) => {
            const videoEl = video as HTMLVideoElement;
            enableMobileVideoAutoplay(videoEl);
          });
        }
      });
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
};

// Check if device is mobile
export const isMobileDevice = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
         ('maxTouchPoints' in navigator && navigator.maxTouchPoints > 2);
};

// Force video play with all mobile compatibility fixes
export const forceVideoPlay = async (videoElement: HTMLVideoElement): Promise<void> => {
  // Apply all mobile-friendly settings
  videoElement.muted = true;
  videoElement.playsInline = true;
  videoElement.setAttribute('webkit-playsinline', 'true');
  videoElement.setAttribute('playsinline', 'true');
  
  try {
    await videoElement.play();
  } catch (error) {
    // If autoplay fails, set up interaction handlers
    const playOnInteraction = () => {
      videoElement.play().catch(console.log);
      document.removeEventListener('touchstart', playOnInteraction);
      document.removeEventListener('click', playOnInteraction);
    };
    
    document.addEventListener('touchstart', playOnInteraction, { once: true, passive: true });
    document.addEventListener('click', playOnInteraction, { once: true, passive: true });
  }
};