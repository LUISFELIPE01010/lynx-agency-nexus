import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BrandImportance = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const brandPoints = [
    {
      title: "Reconhecimento Instantâneo",
      description: "Uma marca forte cria identificação imediata no mercado, permitindo que os consumidores reconheçam seus produtos ou serviços em segundos.",
      icon: "👁️"
    },
    {
      title: "Confiança e Credibilidade",
      description: "Marcas bem estabelecidas transmitem segurança e profissionalismo, aumentando a confiança dos clientes em fazer negócios com você.",
      icon: "🛡️"
    },
    {
      title: "Diferenciação Competitiva",
      description: "Em mercados saturados, uma marca única e memorável é o que separa sua empresa da concorrência e atrai clientes específicos.",
      icon: "⭐"
    },
    {
      title: "Valor Percebido Superior",
      description: "Marcas fortes podem cobrar preços premium porque os consumidores associam qualidade e valor ao nome da empresa.",
      icon: "💎"
    },
    {
      title: "Fidelização de Clientes",
      description: "Uma marca consistente e envolvente cria conexões emocionais duradouras, transformando clientes em defensores da marca.",
      icon: "❤️"
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    
    if (!section || !content) return;

    // Set initial state for all slides except the first one
    brandPoints.forEach((_, index) => {
      if (index > 0) {
        const slideElement = content.querySelector(`[data-slide="${index}"]`);
        if (slideElement) {
          gsap.set(slideElement, { opacity: 0, y: 50, scale: 0.9 });
        }
      }
    });

    // Create timeline for the scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2,
        pin: true,
        anticipatePin: 1,
        refreshPriority: -1,
      }
    });

    // Animate each slide transition
    brandPoints.forEach((_, index) => {
      if (index > 0) {
        const currentSlide = content.querySelector(`[data-slide="${index}"]`);
        const previousSlide = content.querySelector(`[data-slide="${index - 1}"]`);
        
        if (currentSlide && previousSlide) {
          const startTime = (index - 1) * 0.8;
          const transitionDuration = 0.6;
          
          // Fade out and scale down previous slide
          tl.to(previousSlide, {
            opacity: 0,
            y: -30,
            scale: 0.9,
            duration: transitionDuration,
            ease: "power2.inOut"
          }, startTime)
          
          // Fade in and scale up current slide
          .to(currentSlide, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: transitionDuration,
            ease: "power2.inOut"
          }, startTime + 0.1);
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden"
      style={{ height: `${brandPoints.length * 100}vh` }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
      </div>

      {/* Content container */}
      <div 
        ref={contentRef}
        className="relative z-10 flex items-center justify-center h-screen px-4 md:px-8"
      >
        {brandPoints.map((point, index) => (
          <div
            key={index}
            data-slide={index}
            className={`absolute inset-0 flex items-center justify-center ${
              index === 0 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="max-w-4xl mx-auto text-center">
              {/* Icon */}
              <div className="text-6xl md:text-8xl lg:text-9xl mb-6 md:mb-8">
                {point.icon}
              </div>
              
              {/* Title */}
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight px-4">
                {point.title}
              </h2>
              
              {/* Description */}
              <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-4">
                {point.description}
              </p>
              
              {/* Progress indicator */}
              <div className="flex justify-center mt-12 space-x-3">
                {brandPoints.map((_, dotIndex) => (
                  <div
                    key={dotIndex}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      dotIndex === index 
                        ? 'bg-white scale-125' 
                        : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm font-medium">Role para descobrir</span>
          <div className="w-px h-12 bg-white/30 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default BrandImportance;