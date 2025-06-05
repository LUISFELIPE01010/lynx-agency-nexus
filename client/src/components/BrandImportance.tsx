
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eye, Shield, Star, Gem, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const BrandImportance = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<HTMLDivElement[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const brandPoints = [
    {
      title: "Instant Recognition",
      description: "A strong brand creates immediate market identification, allowing consumers to recognize your products or services in seconds.",
      icon: Eye
    },
    {
      title: "Trust & Credibility",
      description: "Well-established brands convey security and professionalism, increasing customer confidence in doing business with you.",
      icon: Shield
    },
    {
      title: "Competitive Differentiation",
      description: "In saturated markets, a unique and memorable brand is what separates your company from competition and attracts specific customers.",
      icon: Star
    },
    {
      title: "Superior Perceived Value",
      description: "Strong brands can charge premium prices because consumers associate quality and value with the company name.",
      icon: Gem
    },
    {
      title: "Customer Loyalty",
      description: "A consistent and engaging brand creates lasting emotional connections, transforming customers into brand advocates.",
      icon: Heart
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const contents = contentRefs.current;
    const progress = progressRef.current;
    const title = titleRef.current;

    if (!section || !contents.length || !progress || !title) return;

    // Set initial states
    gsap.set(title, { opacity: 1, y: 0 });
    gsap.set(progress, { scaleX: 0 });

    contents.forEach((content, index) => {
      if (index === 0) {
        gsap.set(content, { opacity: 1, y: 0, scale: 1 });
      } else {
        gsap.set(content, { opacity: 0, y: 30, scale: 0.95 });
      }
    });

    // Create smooth ScrollTrigger animation
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: `+=${window.innerHeight * (brandPoints.length + 1)}`,
      scrub: 0.5,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        const totalSlides = brandPoints.length;
        const progress = self.progress;
        const currentIndex = Math.floor(progress * totalSlides);
        const slideProgress = (progress * totalSlides) % 1;
        
        // Smooth progress bar animation
        gsap.to(progressRef.current, {
          scaleX: progress,
          duration: 0.1,
          ease: "none"
        });

        // Smooth content transitions
        contents.forEach((content, index) => {
          let opacity = 0;
          let y = 30;
          let scale = 0.95;

          if (index === currentIndex) {
            opacity = 1 - slideProgress * 0.3;
            y = slideProgress * -15;
            scale = 1 - slideProgress * 0.02;
          } else if (index === currentIndex + 1 && slideProgress > 0) {
            opacity = slideProgress;
            y = 30 - slideProgress * 30;
            scale = 0.95 + slideProgress * 0.05;
          }

          gsap.to(content, {
            opacity: Math.max(0, opacity),
            y: y,
            scale: scale,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [brandPoints.length]);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-screen bg-black overflow-hidden"
    >
      {/* Background with subtle gradient */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/banner1.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/97 to-black/95" />

      {/* Smooth progress indicator */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-white/5 z-20">
        <div 
          ref={progressRef}
          className="h-full bg-gradient-to-r from-[#95A0A2] to-white origin-left transform scale-x-0"
        />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center px-8">
        <div className="max-w-5xl mx-auto w-full">
          
          {/* Header Section - Always visible */}
          <div ref={titleRef} className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#95A0A2] to-transparent" />
              <span className="text-[#95A0A2] font-inter text-xs tracking-[0.2em] uppercase font-light">
                Why Your Brand Matters
              </span>
              <div className="w-12 h-px bg-gradient-to-r from-[#95A0A2] via-transparent to-transparent" />
            </div>
            
            <h2 className="text-5xl md:text-7xl font-space font-light text-white mb-4 leading-[0.9] tracking-tight">
              The Power of
              <span className="block text-[#95A0A2] font-normal">Brand Identity</span>
            </h2>
          </div>

          {/* Content slides container */}
          <div className="relative h-80 flex items-center justify-center">
            {brandPoints.map((point, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) contentRefs.current[index] = el;
                }}
                className="absolute inset-0 flex flex-col items-center text-center justify-center space-y-8"
              >
                {/* Icon with smooth entrance */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-full border border-[#95A0A2]/20 bg-[#95A0A2]/5 backdrop-blur-sm flex items-center justify-center">
                    <point.icon size={36} className="text-[#95A0A2]" strokeWidth={1.5} />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#95A0A2]/10 to-transparent" />
                </div>

                {/* Title with refined typography */}
                <h3 className="text-4xl md:text-5xl font-space font-light text-white leading-tight tracking-tight max-w-3xl">
                  {point.title}
                </h3>

                {/* Description with better spacing */}
                <p className="text-xl md:text-2xl text-[#95A0A2] leading-relaxed font-inter font-light max-w-4xl tracking-wide">
                  {point.description}
                </p>

                {/* Elegant counter */}
                <div className="flex items-center space-x-6 text-[#95A0A2]/50">
                  <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#95A0A2]/30" />
                  <span className="text-3xl font-space font-light tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-inter tracking-widest opacity-60">
                    OF {String(brandPoints.length).padStart(2, '0')}
                  </span>
                  <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#95A0A2]/30" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom indicator */}
          <div className="text-center mt-16">
            <p className="text-[#95A0A2]/60 font-inter text-sm font-light tracking-wide">
              Continue scrolling to explore
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandImportance;
