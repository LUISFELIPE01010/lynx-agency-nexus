
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-black flex flex-col justify-center items-center relative px-6">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-space font-bold text-white mb-6 animate-fade-in tracking-tight">
          LYNX
        </h1>
        <p className="text-xl md:text-2xl font-inter text-lynx-gray mb-12 animate-fade-in max-w-2xl mx-auto leading-relaxed">
          Premium branding and design solutions for visionary companies
        </p>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-float">
        <ArrowDown className="text-lynx-gray w-6 h-6 animate-glow" />
      </div>
    </section>
  );
};

export default Hero;
