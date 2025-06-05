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
      number: "01"
    },
    {
      title: "Confiança e Credibilidade",
      description: "Marcas bem estabelecidas transmitem segurança e profissionalismo, aumentando a confiança dos clientes em fazer negócios com você.",
      number: "02"
    },
    {
      title: "Diferenciação Competitiva",
      description: "Em mercados saturados, uma marca única e memorável é o que separa sua empresa da concorrência e atrai clientes específicos.",
      number: "03"
    },
    {
      title: "Valor Percebido Superior",
      description: "Marcas fortes podem cobrar preços premium porque os consumidores associam qualidade e valor ao nome da empresa.",
      number: "04"
    },
    {
      title: "Fidelização de Clientes",
      description: "Uma marca consistente e envolvente cria conexões emocionais duradouras, transformando clientes em defensores da marca.",
      number: "05"
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
      className="relative w-full bg-black overflow-hidden"
      style={{ height: `${brandPoints.length * 100}vh` }}
    >
      {/* Background image with dark overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/banner1.png')" }}
      ></div>
      <div className="absolute inset-0 bg-black/98"></div>
      
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-lynx-gray via-transparent to-transparent"></div>
      </div>

      {/* Content container */}
      <div 
        ref={contentRef}
        className="relative z-10 flex items-center justify-center h-screen px-6"
      >
        {brandPoints.map((point, index) => (
          <div
            key={index}
            data-slide={index}
            className={`absolute inset-0 flex items-center justify-center ${
              index === 0 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="max-w-6xl mx-auto text-center">
              {/* Header */}
              <div className="space-y-4 mb-12">
                <span className="text-lynx-gray font-space text-sm tracking-widest uppercase">
                  {index === 0 ? 'Por que sua marca' : 'Importância da marca'}
                </span>
                <div className="w-24 h-px bg-gradient-to-r from-lynx-gray to-transparent mx-auto"></div>
              </div>

              {/* Number */}
              <div className="text-8xl md:text-9xl font-space font-bold text-lynx-gray/20 mb-8">
                {point.number}
              </div>
              
              {/* Title */}
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-space font-bold text-white mb-8 leading-tight">
                {point.title}
              </h2>
              
              {/* Description */}
              <p className="text-xl md:text-2xl text-lynx-gray max-w-4xl mx-auto leading-relaxed font-inter">
                {point.description}
              </p>
              
              {/* Progress indicator */}
              <div className="flex justify-center mt-16 space-x-4">
                {brandPoints.map((_, dotIndex) => (
                  <div
                    key={dotIndex}
                    className={`h-px transition-all duration-500 ${
                      dotIndex === index 
                        ? 'w-12 bg-lynx-gray' 
                        : 'w-6 bg-lynx-gray/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-lynx-gray/60">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm font-space tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-lynx-gray/30"></div>
        </div>
      </div>
    </section>
  );
};

export default BrandImportance;