import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  fadeDirection: number;
}

interface Sparkle {
  x: number;
  y: number;
  life: number;
  maxLife: number;
  size: number;
}

const AnimatedOverlay = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const sparklesRef = useRef<Sparkle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      // Reduzir número de partículas para performance
      const particleCount = Math.min(30, Math.floor(window.innerWidth / 40));
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.3 + 0.1,
          fadeDirection: Math.random() > 0.5 ? 1 : -1
        });
      }
      return particles;
    };

    const createSparkle = () => {
      if (Math.random() > 0.995) { // Muito raro para ser sutil
        sparklesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          life: 0,
          maxLife: 60,
          size: Math.random() * 2 + 1
        });
      }
    };

    const updateParticles = () => {
      particlesRef.current.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Fade in and out
        particle.opacity += particle.fadeDirection * 0.003;
        if (particle.opacity <= 0.05 || particle.opacity >= 0.4) {
          particle.fadeDirection *= -1;
        }

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });
    };

    const updateSparkles = () => {
      sparklesRef.current = sparklesRef.current.filter(sparkle => {
        sparkle.life++;
        return sparkle.life < sparkle.maxLife;
      });
    };

    const drawParticles = () => {
      particlesRef.current.forEach(particle => {
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.beginPath();
        
        // Gradiente radial para efeito glow sutil
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
    };

    const drawSparkles = () => {
      sparklesRef.current.forEach(sparkle => {
        const progress = sparkle.life / sparkle.maxLife;
        const opacity = Math.sin(progress * Math.PI) * 0.6;
        
        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.fillStyle = '#ffffff';
        ctx.translate(sparkle.x, sparkle.y);
        
        // Desenhar estrela simples
        ctx.beginPath();
        for (let i = 0; i < 4; i++) {
          ctx.rotate(Math.PI / 4);
          ctx.moveTo(0, 0);
          ctx.lineTo(0, sparkle.size);
        }
        ctx.stroke();
        ctx.restore();
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      updateParticles();
      updateSparkles();
      createSparkle();
      
      drawParticles();
      drawSparkles();
      
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    particlesRef.current = createParticles();
    animate();

    const handleResize = () => {
      resizeCanvas();
      particlesRef.current = createParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ 
        background: 'transparent',
        mixBlendMode: 'screen'
      }}
    />
  );
};

export default AnimatedOverlay;