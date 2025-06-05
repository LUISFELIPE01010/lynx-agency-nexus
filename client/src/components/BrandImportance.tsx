
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eye, Shield, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const BrandImportance = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<HTMLDivElement[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);

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
      title: "Customer Loyalty",
      description: "A consistent and engaging brand creates lasting emotional connections, transforming customers into brand advocates.",
      icon: Heart
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const contents = contentRefs.current;
    const progress = progressRef.current;

    if (!section || !contents.length || !progress) return;

    // Set initial states
    gsap.set(progress, { scaleX: 0 });

    contents.forEach((content, index) => {
      if (index === 0) {
        gsap.set(content, { opacity: 1, y: 0, scale: 1 });
      } else {
        gsap.set(content, { opacity: 0, y: 50, scale: 0.9 });
      }
    });

    // Create smooth ScrollTrigger animation
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: `+=${window.innerHeight * (brandPoints.length + 1)}`,
      scrub: 0.8,
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
          duration: 0.2,
          ease: "power2.out"
        });

        // Smooth content transitions
        contents.forEach((content, index) => {
          let opacity = 0;
          let y = 50;
          let scale = 0.9;

          if (index === currentIndex) {
            opacity = 1 - slideProgress * 0.4;
            y = slideProgress * -30;
            scale = 1 - slideProgress * 0.05;
          } else if (index === currentIndex + 1 && slideProgress > 0) {
            opacity = slideProgress;
            y = 50 - slideProgress * 50;
            scale = 0.9 + slideProgress * 0.1;
          }

          gsap.to(content, {
            opacity: Math.max(0, opacity),
            y: y,
            scale: scale,
            duration: 0.4,
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
      className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center"
    >
      {/* Background with proper overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/banner1.png')" }}
      />
      <div className="absolute inset-0 bg-black/90" />

      {/* Progress indicator */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/10 z-20">
        <div 
          ref={progressRef}
          className="h-full bg-gradient-to-r from-[#95A0A2] to-white origin-left transform scale-x-0"
        />
      </div>

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-8">
        
        {/* Fixed header section */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-20 h-px bg-[#95A0A2]/50" />
            <span className="text-[#95A0A2] font-inter text-xs tracking-[0.4em] uppercase font-light">
              Why Your Brand Matters
            </span>
            <div className="w-20 h-px bg-[#95A0A2]/50" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-space font-extralight text-white leading-[0.9] tracking-tight mb-4">
            The Power of
          </h2>
          <h3 className="text-4xl md:text-6xl font-space font-light text-[#95A0A2] leading-[0.9] tracking-tight">
            Brand Identity
          </h3>
        </div>

        {/* Dynamic content slides */}
        <div className="relative">
          {brandPoints.map((point, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) contentRefs.current[index] = el;
              }}
              className="absolute inset-0 flex flex-col items-center text-center"
            >
              {/* Icon container */}
              <div className="mb-12">
                <div className="w-20 h-20 rounded-full border border-[#95A0A2]/20 bg-[#95A0A2]/5 backdrop-blur-sm flex items-center justify-center">
                  <point.icon size={32} className="text-[#95A0A2]" strokeWidth={1} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-4xl md:text-5xl font-space font-extralight text-white leading-[1.1] tracking-tight mb-8 max-w-4xl">
                {point.title}
              </h3>

              {/* Description */}
              <p className="text-lg md:text-xl text-[#95A0A2] leading-[1.7] font-inter font-light max-w-4xl mb-12 px-4">
                {point.description}
              </p>

              {/* Counter */}
              <div className="flex items-center justify-center gap-6 text-[#95A0A2]/30">
                <div className="w-8 h-px bg-[#95A0A2]/20" />
                <span className="text-2xl font-space font-extralight tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-xs font-inter tracking-[0.3em] uppercase opacity-60">
                  OF {String(brandPoints.length).padStart(2, '0')}
                </span>
                <div className="w-8 h-px bg-[#95A0A2]/20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandImportance;
