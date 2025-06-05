import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eye, Shield, Star, Gem, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const BrandImportance = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const brandPoints = [
    {
      title: "Instant Recognition",
      description: "A strong brand creates immediate market identification, allowing consumers to recognize your products or services in seconds.",
      number: "01",
      icon: Eye
    },
    {
      title: "Trust & Credibility",
      description: "Well-established brands convey security and professionalism, increasing customer confidence in doing business with you.",
      number: "02",
      icon: Shield
    },
    {
      title: "Customer Loyalty",
      description: "A consistent and engaging brand creates lasting emotional connections, transforming customers into brand advocates.",
      number: "03",
      icon: Heart
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
        scrub: 6,
        pin: true,
        anticipatePin: 1,
      }
    });

    // Calculate timing with proper intervals for readability
    const totalAnimationTime = 1;
    const pauseBetweenSlides = 0.35; // Longer pause to read each slide
    const transitionTime = 0.6; // Much slower transition duration
    
    // Create staggered timeline
    brandPoints.forEach((_, index) => {
      if (index > 0) {
        const currentSlide = content.querySelector(`[data-slide="${index}"]`);
        const previousSlide = content.querySelector(`[data-slide="${index - 1}"]`);

        if (currentSlide && previousSlide) {
          // Calculate timing: pause + transition for each slide
          const slideStartTime = (index - 1) * (pauseBetweenSlides + transitionTime);
          
          // Fade out previous slide
          tl.to(previousSlide, {
            opacity: 0,
            y: -20,
            scale: 0.95,
            duration: transitionTime,
            ease: "power2.inOut"
          }, slideStartTime + pauseBetweenSlides)

          // Fade in current slide with slight delay for smoother transition
          .to(currentSlide, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: transitionTime,
            ease: "power2.inOut"
          }, slideStartTime + pauseBetweenSlides + 0.05);
        }
      }
    });

    // Smooth exit for the last slide
    const lastSlide = content.querySelector(`[data-slide="${brandPoints.length - 1}"]`);
    if (lastSlide) {
      const finalTime = (brandPoints.length - 1) * (pauseBetweenSlides + transitionTime) + 0.2;
      tl.to(lastSlide, {
        opacity: 0.9,
        scale: 0.98,
        duration: 0.2,
        ease: "power1.out"
      }, finalTime);
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full bg-gradient-to-b from-black via-[#95A0A2]/10 to-black overflow-hidden"
      style={{ 
        height: `120vh`,
        scrollMarginBottom: '-20vh',
        paddingTop: '8vh',
        paddingBottom: '2vh'
      }}
    >
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/banner1.png')" }}
      ></div>
      <div className="absolute inset-0 bg-black/95"></div>

      {/* Subtle gradient overlay with lynx-gray */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#95A0A2]/5 to-black/80"></div>

      {/* Content container */}
      <div 
        ref={contentRef}
        className="relative z-10 flex items-center justify-center h-screen px-6"
      >
        {brandPoints.map((point, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={index}
              data-slide={index}
              className={`absolute inset-0 flex items-center justify-center ${
                index === 0 ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="max-w-7xl w-full mx-auto">
                {/* Header - only show on first slide */}
                {index === 0 && (
                  <div className="text-center space-y-4 mb-20">
                    <span className="text-[#95A0A2] font-space text-sm tracking-widest uppercase">
                      Why Your Brand Matters
                    </span>
                    <div className="w-24 h-px bg-gradient-to-r from-[#95A0A2] to-transparent mx-auto"></div>
                  </div>
                )}

                <div className="grid grid-cols-12 gap-8 items-center">
                  {/* Content side */}
                  <div className={`col-span-12 lg:col-span-5 ${
                    isLeft ? 'lg:order-1' : 'lg:order-3'
                  }`}>
                    <div className={`space-y-6 ${isLeft ? 'lg:text-left' : 'lg:text-right'}`}>
                      {/* Icon and Number */}
                      <div className={`flex items-center gap-4 ${
                        isLeft ? 'lg:justify-start' : 'lg:justify-end'
                      } justify-center`}>
                        <div className="p-4 rounded-full border border-[#95A0A2]/30 bg-[#95A0A2]/5">
                          <point.icon size={32} className="text-[#95A0A2]" />
                        </div>
                        <div className="text-5xl md:text-6xl font-space font-bold text-[#95A0A2]/40">
                          {point.number}
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-space font-bold text-white leading-tight ${
                        isLeft ? 'lg:text-left' : 'lg:text-right'
                      } text-center`}>
                        {point.title}
                      </h2>

                      {/* Description */}
                      <p className={`text-lg md:text-xl text-[#95A0A2] leading-relaxed font-inter max-w-md ${
                        isLeft ? 'lg:text-left lg:ml-0 lg:mr-auto' : 'lg:text-right lg:mr-0 lg:ml-auto'
                      } text-center mx-auto`}>
                        {point.description}
                      </p>

                      {/* Decorative line */}
                      <div className={`w-16 h-px bg-gradient-to-r from-[#95A0A2] to-transparent ${
                        isLeft ? 'lg:ml-0 lg:mr-auto' : 'lg:mr-0 lg:ml-auto'
                      } mx-auto`}></div>
                    </div>
                  </div>

                  {/* Center line - only visible on larger screens */}
                  <div className="hidden lg:flex lg:col-span-2 lg:order-2 justify-center">
                    <div className="relative">
                      {/* Vertical line */}
                      <div className="w-px h-64 bg-gradient-to-b from-transparent via-[#95A0A2]/40 to-transparent"></div>
                      {/* Center dot */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#95A0A2] rounded-full"></div>
                    </div>
                  </div>

                  {/* Empty side for alternating layout */}
                  <div className={`col-span-12 lg:col-span-5 ${
                    isLeft ? 'lg:order-3' : 'lg:order-1'
                  } hidden lg:block`}>
                    {/* Empty space for alternating layout */}
                  </div>
                </div>

                {/* Progress indicator */}
                <div className="flex justify-center mt-16 space-x-4">
                  {brandPoints.map((_, dotIndex) => (
                    <div
                      key={dotIndex}
                      className={`h-px transition-all duration-500 ${
                        dotIndex === index 
                          ? 'w-12 bg-[#95A0A2]' 
                          : 'w-6 bg-[#95A0A2]/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BrandImportance;