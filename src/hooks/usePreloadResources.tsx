import { useEffect } from 'react';

interface PreloadResource {
  href: string;
  as: 'image' | 'font' | 'script' | 'style';
  type?: string;
  crossOrigin?: 'anonymous' | 'use-credentials';
}

export const usePreloadResources = (resources: PreloadResource[]) => {
  useEffect(() => {
    const preloadLinks: HTMLLinkElement[] = [];

    resources.forEach(({ href, as, type, crossOrigin }) => {
      // Check if resource is already preloaded
      const existingLink = document.querySelector(`link[href="${href}"]`);
      if (existingLink) return;

      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = as;
      
      if (type) link.type = type;
      if (crossOrigin) link.crossOrigin = crossOrigin;

      document.head.appendChild(link);
      preloadLinks.push(link);
    });

    // Cleanup function
    return () => {
      preloadLinks.forEach(link => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      });
    };
  }, [resources]);
};

// Hook for critical resource preloading
export const useCriticalResourcePreload = () => {
  useEffect(() => {
    // Preload critical images that appear above the fold
    const criticalImages = [
      '/banner1.png',
      '/banner2.png',
      '/banner3.png'
    ];

    criticalImages.forEach(src => {
      const img = new Image();
      img.loading = 'eager';
      img.src = src;
    });

    // Preload critical fonts
    const fontPreload = document.createElement('link');
    fontPreload.rel = 'preconnect';
    fontPreload.href = 'https://fonts.gstatic.com';
    fontPreload.crossOrigin = 'anonymous';
    document.head.appendChild(fontPreload);

    return () => {
      if (document.head.contains(fontPreload)) {
        document.head.removeChild(fontPreload);
      }
    };
  }, []);
};