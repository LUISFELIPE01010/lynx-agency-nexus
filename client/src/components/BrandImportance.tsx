
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eye, Shield, Heart } from 'lucide-react';

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
        gsap.set(content, { opacity: 0, y: 40, scale: 0.95 });
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
          let y = 40;
          let scale = 0.95;

          if (index === currentIndex) {
            opacity = 1 - slideProgress * 0.3;
            y = slideProgress * -20;
            scale = 1 - slideProgress * 0.02;
          } else if (index === currentIndex + 1 && slideProgress > 0) {
            opacity = slideProgress;
            y = 40 - slideProgress * 40;
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

      <div className="relative z-10 h-full flex items-center justify-center px-12">
        <div className="max-w-6xl mx-auto w-full">
          
          {/* Header Section - Always visible with improved spacing */}
          <div ref={titleRef} className="text-center mb-24">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#95A0A2] to-transparent" />
              <span className="text-[#95A0A2] font-inter text-xs tracking-[0.3em] uppercase font-light">
                Why Your Brand Matters
              </span>
              <div className="w-16 h-px bg-gradient-to-r from-[#95A0A2] via-transparent to-transparent" />
            </div>
            
            <h2 className="text-6xl md:text-8xl font-space font-extralight text-white mb-6 leading-[0.85] tracking-tight">
              The Power of
              <span className="block text-[#95A0A2] font-light mt-4">Brand Identity</span>
            </h2>
          </div>

          {/* Content slides container with improved spacing */}
          <div className="relative h-96 flex items-center justify-center">
            {brandPoints.map((point, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) contentRefs.current[index] = el;
                }}
                className="absolute inset-0 flex flex-col items-center text-center justify-center space-y-12"
              >
                {/* Icon with improved spacing and design */}
                <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-full border border-[#95A0A2]/15 bg-[#95A0A2]/3 backdrop-blur-sm flex items-center justify-center">
                    <point.icon size={40} className="text-[#95A0A2]" strokeWidth={1.2} />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#95A0A2]/8 to-transparent" />
                </div>

                {/* Title with refined typography and better spacing */}
                <h3 className="text-5xl md:text-6xl font-space font-extralight text-white leading-[1.1] tracking-tight max-w-4xl mb-8">
                  {point.title}
                </h3>

                {/* Description with improved spacing and typography */}
                <p className="text-xl md:text-2xl text-[#95A0A2] leading-[1.6] font-inter font-light max-w-5xl tracking-wide px-8">
                  {point.description}
                </p>

                {/* Elegant counter with better spacing */}
                <div className="flex items-center space-x-8 text-[#95A0A2]/40 mt-12">
                  <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#95A0A2]/20" />
                  <span className="text-4xl font-space font-extralight tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-inter tracking-[0.2em] opacity-50 font-light">
                    OF {String(brandPoints.length).padStart(2, '0')}
                  </span>
                  <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#95A0A2]/20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandImportance;
