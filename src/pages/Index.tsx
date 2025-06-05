
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Process from '@/components/Process';
import SocialProof from '@/components/SocialProof';
import Stats from '@/components/Stats';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Smooth scroll setup
    const lenis = async () => {
      const { default: Lenis } = await import('@studio-freight/lenis');
      const lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        smoothTouch: false,
      });

      function raf(time: number) {
        lenisInstance.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      // Connect GSAP ScrollTrigger with Lenis
      lenisInstance.on('scroll', ScrollTrigger.update);
    };

    lenis();

    // Global animations
    gsap.set('.fade-in', { opacity: 0, y: 60 });
    gsap.set('.slide-in-left', { opacity: 0, x: -60 });
    gsap.set('.slide-in-right', { opacity: 0, x: 60 });
    gsap.set('.scale-in', { opacity: 0, scale: 0.8 });

    // Scroll-triggered animations
    gsap.utils.toArray('.fade-in').forEach((element: any) => {
      gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    gsap.utils.toArray('.slide-in-left').forEach((element: any) => {
      gsap.to(element, {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    gsap.utils.toArray('.slide-in-right').forEach((element: any) => {
      gsap.to(element, {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    gsap.utils.toArray('.scale-in').forEach((element: any) => {
      gsap.to(element, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Process />
      <Stats />
      <SocialProof />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
