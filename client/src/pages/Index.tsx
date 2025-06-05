import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Process from '@/components/Process';
import ClientCarousel from '@/components/ClientCarousel';
import BrandImportance from '@/components/BrandImportance';
import SocialProof from '@/components/SocialProof';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .scale-in, .slide-in-left, .slide-in-right').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Process />
      <ClientCarousel />
      <BrandImportance />
      <SocialProof />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;