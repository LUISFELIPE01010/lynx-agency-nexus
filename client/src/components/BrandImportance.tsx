
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eye, Shield, Star, Gem, Heart } from 'lucide-react';

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

    if (!section || !contents.length || !progress) return;

    // Set initial states
    contents.forEach((content, index) => {
      if (index === 0) {
        gsap.set(content, { opacity: 1, y: 0 });
      } else {
        gsap.set(content, { opacity: 0, y: 50 });
      }
    });

    // Create ScrollTrigger for the section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${window.innerHeight * brandPoints.length}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          const currentIndex = Math.floor(self.progress * brandPoints.length);
          const clampedIndex = Math.min(currentIndex, brandPoints.length - 1);
          
          // Update progress bar
          gsap.to(progress, {
            scaleX: self.progress,
            duration: 0.1,
            ease: "none"
          });

          // Show/hide content based on scroll position
          contents.forEach((content, index) => {
            if (index === clampedIndex) {
              gsap.to(content, {
                opacity: 1,
                y: 0,
                duration: 0.3,
                ease: "power2.out"
              });
            } else {
              gsap.to(content, {
                opacity: 0,
                y: index < clampedIndex ? -50 : 50,
                duration: 0.3,
                ease: "power2.out"
              });
            }
          });
        }
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
      {/* Background image with dark overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/banner1.png')" }}
      ></div>
      <div className="absolute inset-0 bg-black/96"></div>

      {/* Progress bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/10 z-20">
        <div 
          ref={progressRef}
          className="h-full bg-lynx-gray origin-left transform scale-x-0"
        ></div>
      </div>

      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-lynx-gray via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header - always visible */}
          <div className="mb-16">
            <span className="text-lynx-gray font-space text-sm tracking-widest uppercase mb-4 block">
              Why Your Brand Matters
            </span>
            <h2 className="text-4xl md:text-6xl font-space font-bold text-white mb-6 leading-tight">
              The Power of
              <span className="block text-lynx-gray">Brand Identity</span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-lynx-gray to-transparent mx-auto"></div>
          </div>

          {/* Content slides */}
          <div className="relative">
            {brandPoints.map((point, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) contentRefs.current[index] = el;
                }}
                className="absolute inset-0 flex flex-col items-center text-center space-y-8"
              >
                {/* Icon */}
                <div className="p-6 rounded-full border border-lynx-gray/30 bg-lynx-gray/10 backdrop-blur-sm">
                  <point.icon size={48} className="text-lynx-gray" />
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-5xl font-space font-bold text-white leading-tight">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="text-xl md:text-2xl text-lynx-gray leading-relaxed font-inter max-w-3xl">
                  {point.description}
                </p>

                {/* Counter */}
                <div className="flex items-center space-x-4 text-lynx-gray/60">
                  <span className="text-4xl font-space font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="w-16 h-px bg-lynx-gray/40"></div>
                  <span className="text-sm font-space tracking-wider">
                    {String(brandPoints.length).padStart(2, '0')}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA - always visible */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
            <p className="text-lynx-gray/80 font-inter text-sm">
              Scroll to explore each benefit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandImportance;
