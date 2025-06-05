
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import SocialProof from '@/components/SocialProof';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
      <Services />
      <SocialProof />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
