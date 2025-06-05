
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

    // Create smooth ScrollTrigger animation with slower transitions
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: `+=${window.innerHeight * (brandPoints.length * 2)}`, // Doubled for slower scroll
      scrub: 1.2, // Slower scrub for smoother transitions
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
          duration: 0.3,
          ease: "power2.out"
        });

        // Smoother content transitions with better timing
        contents.forEach((content, index) => {
          let opacity = 0;
          let y = 60;
          let scale = 0.95;

          if (index === currentIndex) {
            // Current slide stays longer and fades out slower
            opacity = Math.max(0.2, 1 - slideProgress * 0.8);
            y = slideProgress * -20;
            scale = 1 - slideProgress * 0.03;
          } else if (index === currentIndex + 1 && slideProgress > 0.3) {
            // Next slide appears only after 30% of transition
            const adjustedProgress = (slideProgress - 0.3) / 0.7;
            opacity = adjustedProgress;
            y = 60 - adjustedProgress * 60;
            scale = 0.95 + adjustedProgress * 0.05;
          }

          gsap.to(content, {
            opacity: Math.max(0, opacity),
            y: y,
            scale: scale,
            duration: 0.6,
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

      {/* Main content container - perfectly centered */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-8">
        
        {/* Content wrapper with proper vertical centering */}
        <div className="w-full max-w-5xl text-center">
          
          {/* Fixed header section */}
          <div className="mb-20">
            <div className="flex items-center justify-center gap-6 mb-10">
              <div className="w-20 h-px bg-[#95A0A2]/50" />
              <span className="text-[#95A0A2] font-inter text-xs tracking-[0.4em] uppercase font-light">
                Why Your Brand Matters
              </span>
              <div className="w-20 h-px bg-[#95A0A2]/50" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-space font-extralight text-white leading-[0.9] tracking-tight mb-6">
              The Power of
            </h2>
            <h3 className="text-3xl md:text-5xl font-space font-light text-[#95A0A2] leading-[0.9] tracking-tight">
              Brand Identity
            </h3>
          </div>

          {/* Dynamic content slides - properly centered */}
          <div className="relative w-full min-h-[400px] flex items-center justify-center">
            {brandPoints.map((point, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) contentRefs.current[index] = el;
                }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                {/* Icon container */}
                <div className="mb-12">
                  <div className="w-20 h-20 rounded-full border border-[#95A0A2]/20 bg-[#95A0A2]/5 backdrop-blur-sm flex items-center justify-center">
                    <point.icon size={32} className="text-[#95A0A2]" strokeWidth={1} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-space font-extralight text-white leading-[1.1] tracking-tight mb-10 max-w-4xl">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="text-base md:text-lg text-[#95A0A2] leading-[1.6] font-inter font-light max-w-3xl mb-12 px-4">
                  {point.description}
                </p>

                {/* Counter */}
                <div className="flex items-center justify-center gap-6 text-[#95A0A2]/40">
                  <div className="w-8 h-px bg-[#95A0A2]/20" />
                  <span className="text-xl font-space font-extralight tabular-nums">
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
      </div>
    </section>
  );
};

export default BrandImportance;
