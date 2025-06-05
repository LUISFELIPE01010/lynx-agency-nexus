
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    // Remove fade-in from title, just show it immediately
    gsap.set(titleRef.current, { opacity: 1 });
    gsap.set(logoRef.current, { opacity: 1 });
    
    tl.fromTo(subtitleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    )
    .fromTo(arrowRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
      '-=0.5'
    );

    // Floating animation for arrow
    gsap.to(arrowRef.current, {
      y: -15,
      duration: 2,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
    });

    // Parallax effect for hero content
    gsap.to(heroRef.current, {
      yPercent: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
      {/* Background image with dark overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/lovable-uploads/167201f2-2e02-42f4-ba72-ed031527a0e6.png')" }}
      ></div>
      <div className="absolute inset-0 bg-black/80"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-lynx-gray/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-l from-white/5 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Title and Logo Layout */}
        <div className="flex items-center justify-between mb-16 gap-8">
          <h1 
            ref={titleRef}
            className="text-6xl md:text-8xl lg:text-[10rem] font-space font-bold text-white tracking-tighter leading-none"
          >
            LYNX
          </h1>
          
          <img 
            ref={logoRef}
            src="/lovable-uploads/0027b985-2546-4aa4-8fcd-215f7e6d9ee8.png" 
            alt="Lynx Agency Logo" 
            className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain opacity-90"
          />
        </div>
        
        <div className="text-center">
          <p 
            ref={subtitleRef}
            className="text-2xl md:text-4xl lg:text-5xl font-inter text-lynx-gray mb-4 max-w-4xl mx-auto leading-tight font-light"
          >
            Redefining brand excellence through
          </p>
          
          <p 
            ref={subtitleRef}
            className="text-2xl md:text-4xl lg:text-5xl font-inter text-white mb-16 max-w-4xl mx-auto leading-tight font-light"
          >
            strategic innovation & design mastery
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 bg-white text-black font-space font-semibold rounded-lg hover:bg-lynx-gray transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10">Explore Our Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white to-lynx-gray rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            
            <button className="group relative px-8 py-4 border border-lynx-gray text-lynx-gray font-space font-semibold rounded-lg hover:border-white hover:text-white transition-all duration-500 hover:scale-105">
              Start a Project
            </button>
          </div>
        </div>
      </div>
      
      <div 
        ref={arrowRef}
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer group"
      >
        <div className="p-4 rounded-full border border-lynx-gray/30 group-hover:border-white transition-all duration-300 group-hover:bg-white/5">
          <ArrowDown className="text-lynx-gray group-hover:text-white w-6 h-6 transition-colors duration-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
