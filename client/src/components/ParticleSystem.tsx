import { useEffect, useRef } from 'react';

interface ParticleSystemProps {
  particleCount?: number;
  color?: string;
  speed?: number;
  size?: number;
}

const ParticleSystem = ({ 
  particleCount = 20, 
  color = '#95A0A2', 
  speed = 1,
  size = 2 
}: ParticleSystemProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles: HTMLDivElement[] = [];

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const particleSize = Math.random() * size + 1;
      const opacity = Math.random() * 0.6 + 0.2;
      const duration = Math.random() * 8 + 6;
      const delay = Math.random() * 5;
      
      particle.style.cssText = `
        position: absolute;
        left: ${Math.random() * 100}%;
        width: ${particleSize}px;
        height: ${particleSize}px;
        background: radial-gradient(circle, ${color}, transparent);
        border-radius: 50%;
        pointer-events: none;
        opacity: ${opacity};
        animation: particleFloat ${duration}s linear infinite ${delay}s;
        z-index: 1;
      `;
      
      return particle;
    };

    // Create initial particles
    for (let i = 0; i < particleCount; i++) {
      const particle = createParticle();
      particles.push(particle);
      container.appendChild(particle);
    }

    // Recreate particles periodically
    const interval = setInterval(() => {
      if (particles.length < particleCount) {
        const particle = createParticle();
        particles.push(particle);
        container.appendChild(particle);
        
        setTimeout(() => {
          if (container.contains(particle)) {
            container.removeChild(particle);
            const index = particles.indexOf(particle);
            if (index > -1) particles.splice(index, 1);
          }
        }, 14000); // Remove after animation completes
      }
    }, 2000);

    return () => {
      clearInterval(interval);
      particles.forEach(particle => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
      });
    };
  }, [particleCount, color, speed, size]);

  return <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" />;
};

export default ParticleSystem;