
import { Target, Sparkles, Monitor, Palette, Play, Lightbulb } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Brand Strategy",
      description: "Comprehensive market analysis, positioning, and strategic roadmaps that establish your brand's foundation for long-term success.",
      icon: "target",
      features: ["Market Research", "Brand Positioning", "Competitive Analysis", "Strategic Planning"]
    },
    {
      title: "Visual Identity",
      description: "Distinctive visual systems that capture your essence through logos, typography, color palettes, and comprehensive brand guidelines.",
      icon: "sparkles",
      features: ["Logo Design", "Typography", "Color Systems", "Brand Guidelines"]
    },
    {
      title: "Digital Experience",
      description: "User-centered web platforms and digital experiences that engage audiences and drive meaningful interactions with your brand.",
      icon: "monitor",
      features: ["Web Design", "UI/UX Design", "Interactive Prototypes", "Digital Platforms"]
    },
    {
      title: "Creative Direction",
      description: "End-to-end creative oversight ensuring consistency and excellence across all brand touchpoints and communications.",
      icon: "palette",
      features: ["Art Direction", "Campaign Development", "Content Strategy", "Brand Consistency"]
    },
    {
      title: "Motion Graphics",
      description: "Dynamic visual storytelling through animation, bringing your brand to life across digital and traditional media channels.",
      icon: "play",
      features: ["Brand Animation", "Video Content", "Motion Design", "Interactive Media"]
    },
    {
      title: "Brand Consulting",
      description: "Strategic guidance and expert consultation to navigate complex brand challenges and maximize market opportunities.",
      icon: "lightbulb",
      features: ["Brand Audits", "Growth Strategy", "Market Expansion", "Brand Evolution"]
    }
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background image with dark overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/banner2.png')" }}
      ></div>
      <div className="absolute inset-0 bg-black/90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lynx-gray/5 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 fade-in">
          <span className="text-lynx-gray font-space text-sm tracking-widest uppercase mb-4 block">Our Expertise</span>
          <h2 className="text-5xl md:text-7xl font-space font-bold text-white mb-8 leading-tight">
            Services That
            <span className="block text-lynx-gray">Drive Impact</span>
          </h2>
          <p className="text-xl text-lynx-gray max-w-3xl mx-auto font-inter leading-relaxed">
            From strategic foundation to creative execution, we offer comprehensive solutions that transform brands and accelerate growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-lynx-gray/5 to-transparent border border-lynx-gray/10 hover:border-lynx-gray/30 transition-all duration-700 hover:transform hover:scale-105 scale-in backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon === 'target' && <Target className="w-8 h-8 text-lynx-gray" />}
                  {service.icon === 'sparkles' && <Sparkles className="w-8 h-8 text-lynx-gray" />}
                  {service.icon === 'monitor' && <Monitor className="w-8 h-8 text-lynx-gray" />}
                  {service.icon === 'palette' && <Palette className="w-8 h-8 text-lynx-gray" />}
                  {service.icon === 'play' && <Play className="w-8 h-8 text-lynx-gray" />}
                  {service.icon === 'lightbulb' && <Lightbulb className="w-8 h-8 text-lynx-gray" />}
                </div>
                
                <h3 className="text-2xl font-space font-semibold text-white mb-4 group-hover:text-lynx-gray transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-lynx-gray font-inter leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-lynx-gray rounded-full group-hover:bg-white transition-colors duration-300"></div>
                      <span className="text-sm text-lynx-gray font-inter group-hover:text-white transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 border border-lynx-gray rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-lynx-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
