import logoPng from '@/logop.png';
import { AnimatedSection } from '@/hooks/useIntersectionObserver';

const About = () => {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Rich gradient background with texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v20h40V20H20z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      {/* Subtle light accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-lynx-gray/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-radial from-white/5 to-transparent rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <AnimatedSection animationType="slide-in-left">
              <div className="space-y-4">
                <span className="text-lynx-gray font-space text-sm tracking-widest uppercase">About Lynx</span>
                <h2 className="text-5xl md:text-7xl font-space font-bold text-white leading-tight">
                  Crafting
                  <span className="block text-lynx-gray">Tomorrow's</span>
                  <span className="block">Brands</span>
                </h2>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="fade-in" delay={1}>
              <div className="w-24 h-px bg-gradient-to-r from-lynx-gray to-transparent"></div>
            </AnimatedSection>

            <AnimatedSection animationType="fade-in" delay={2}>
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-lynx-gray font-inter">
                  We are a collective of strategists, designers, and visionaries who believe that great brands are born from the intersection of purpose and possibility.
                </p>
                <p className="text-lynx-gray font-inter">
                  Our approach transcends traditional boundaries, combining data-driven insights with intuitive creativity to forge brands that don't just exist in the market—they define it.
                </p>
                <p className="text-white font-inter font-medium">
                  Every project is a journey toward excellence, where your vision meets our expertise to create something extraordinary.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="slide-in-up" delay={3}>
              <div className="flex flex-wrap gap-8 pt-8">
                <div className="flex items-center gap-2 hover-scale">
                  <span className="text-lynx-gray text-xs">•</span>
                  <div>
                    <div className="text-3xl font-space font-bold text-white">50+</div>
                    <div className="text-lynx-gray text-sm font-inter">Brands Transformed</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 hover-scale">
                  <span className="text-lynx-gray text-xs">•</span>
                  <div>
                    <div className="text-3xl font-space font-bold text-white">8+</div>
                    <div className="text-lynx-gray text-sm font-inter">Years of Excellence</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 hover-scale">
                  <span className="text-lynx-gray text-xs">•</span>
                  <div>
                    <div className="text-3xl font-space font-bold text-white">25+</div>
                    <div className="text-lynx-gray text-sm font-inter">Countries Reached</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animationType="slide-in-right" className="relative">
            <div className="relative aspect-square">
              {/* Main image container with full coverage */}
              <div className="absolute inset-0 bg-gradient-to-br from-lynx-gray/20 to-transparent rounded-2xl backdrop-blur-sm border border-lynx-gray/10 overflow-hidden hover-lift">
                <img 
                  src={logoPng} 
                  alt="Lynx Agency Vision" 
                  className="w-full h-full object-cover opacity-100 transition-opacity duration-500"
                  loading="lazy"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-lynx-gray/10 to-transparent rounded-full blur-xl animate-float"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-tl from-white/10 to-transparent rounded-full blur-lg animate-float" style={{animationDelay: '1.5s'}}></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;