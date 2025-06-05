
import logoPng from '@/logop.png';

const About = () => {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Background image with dark overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/banner1.png')" }}
      ></div>
      <div className="absolute inset-0 bg-black/96"></div>
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-lynx-gray via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 slide-in-left">
            <div className="space-y-4">
              <span className="text-lynx-gray font-space text-sm tracking-widest uppercase">About Lynx</span>
              <h2 className="text-5xl md:text-7xl font-space font-bold text-white leading-tight">
                Crafting
                <span className="block text-lynx-gray">Tomorrow's</span>
                <span className="block">Brands</span>
              </h2>
            </div>
            
            <div className="w-24 h-px bg-gradient-to-r from-lynx-gray to-transparent"></div>
            
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

            <div className="flex flex-wrap gap-8 pt-8">
              <div className="flex items-center gap-2">
                <span className="text-lynx-gray text-xs">•</span>
                <div>
                  <div className="text-3xl font-space font-bold text-white">50+</div>
                  <div className="text-lynx-gray text-sm font-inter">Brands Transformed</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lynx-gray text-xs">•</span>
                <div>
                  <div className="text-3xl font-space font-bold text-white">8+</div>
                  <div className="text-lynx-gray text-sm font-inter">Years of Excellence</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lynx-gray text-xs">•</span>
                <div>
                  <div className="text-3xl font-space font-bold text-white">25+</div>
                  <div className="text-lynx-gray text-sm font-inter">Countries Reached</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative slide-in-right">
            <div className="relative aspect-square">
              {/* Main image container with full coverage */}
              <div className="absolute inset-0 bg-gradient-to-br from-lynx-gray/20 to-transparent rounded-2xl backdrop-blur-sm border border-lynx-gray/10 overflow-hidden">
                <img 
                  src={logoPng} 
                  alt="Lynx Agency Vision" 
                  className="w-full h-full object-cover opacity-100 transition-opacity duration-500"
                  loading="lazy"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-lynx-gray/10 to-transparent rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-tl from-white/10 to-transparent rounded-full blur-lg animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
