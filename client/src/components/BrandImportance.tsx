import { Target, Users, TrendingUp } from 'lucide-react';
import { AnimatedSection } from '@/hooks/useIntersectionObserver';
import { TextReveal } from '@/hooks/useTextReveal';
import { useLanguage } from '../contexts/LanguageContext';

const BrandImportance = () => {
  const { t } = useLanguage();
  
  const brandPoints = [
    {
      title: "Brand Recognition",
      description: "A strong brand creates instant recognition in the marketplace, making your business memorable and easily identifiable among competitors.",
      number: "01",
      icon: Target,
      color: "from-blue-500/20 to-purple-500/20",
      iconColor: "text-blue-400"
    },
    {
      title: "Trust & Credibility", 
      description: "Professional branding builds trust with customers, establishing credibility that converts prospects into loyal clients who believe in your value.",
      number: "02",
      icon: Users,
      color: "from-green-500/20 to-teal-500/20",
      iconColor: "text-green-400"
    },
    {
      title: "Business Growth",
      description: "Effective branding drives business growth by creating emotional connections, commanding premium pricing, and fostering customer loyalty.",
      number: "03", 
      icon: TrendingUp,
      color: "from-orange-500/20 to-red-500/20",
      iconColor: "text-orange-400"
    }
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-black via-[#0f1419] to-black">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-lynx-gray via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <AnimatedSection animationType="fade-in" className="text-center mb-20">
          <span className="text-lynx-gray font-space text-sm tracking-widest uppercase mb-4 block">
            Why Brand Matters
          </span>
          <div className="w-24 h-px bg-gradient-to-r from-lynx-gray to-transparent mx-auto mb-8"></div>
          <TextReveal 
            as="h2" 
            className="text-5xl md:text-7xl font-space font-bold text-white mb-8 leading-tight"
          >
            The Power of
            <span className="block text-lynx-gray">Strategic Branding</span>
          </TextReveal>
          <p className="text-xl text-lynx-gray max-w-3xl mx-auto font-inter leading-relaxed">
            Discover why professional branding is essential for business success in today's competitive landscape
          </p>
        </AnimatedSection>

        {/* Brand Points with Connecting Line */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-lynx-gray/30 to-transparent"></div>
          
          {/* Mobile Connecting Line */}
          <div className="lg:hidden absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-lynx-gray/30 to-transparent"></div>

          <div className="space-y-32">
            {brandPoints.map((point, index) => {
              const isLeft = index % 2 === 0;
              return (
                <AnimatedSection 
                  key={index}
                  animationType={isLeft ? "slide-in-left" : "slide-in-right"}
                  delay={index * 0.3}
                  className="relative"
                >
                  <div className={`grid lg:grid-cols-12 gap-8 items-center ${
                    !isLeft ? 'lg:grid-flow-col-dense' : ''
                  }`}>
                    
                    {/* Content */}
                    <div className={`lg:col-span-5 ${
                      isLeft ? 'lg:pr-16' : 'lg:pl-16 lg:col-start-8'
                    } relative z-10`}>
                      
                      {/* Mobile Icon */}
                      <div className="lg:hidden absolute -left-12 top-0 w-8 h-8 bg-black rounded-full border border-lynx-gray/30 flex items-center justify-center">
                        <point.icon size={16} className={point.iconColor} />
                      </div>

                      <div className="space-y-6">
                        {/* Number */}
                        <div className="flex items-center gap-4">
                          <span className="text-6xl font-space font-bold text-lynx-gray/20">
                            {point.number}
                          </span>
                          <div className="w-12 h-px bg-gradient-to-r from-lynx-gray/50 to-transparent"></div>
                        </div>

                        {/* Title */}
                        <h3 className="text-3xl md:text-4xl font-space font-bold text-white leading-tight">
                          {point.title}
                        </h3>

                        {/* Description */}
                        <p className="text-lg text-lynx-gray font-inter leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>

                    {/* Desktop Icon Circle */}
                    <div className={`hidden lg:block lg:col-span-2 ${
                      isLeft ? 'lg:order-2' : 'lg:order-1 lg:col-start-6'
                    } relative z-20`}>
                      <div className="flex justify-center">
                        <div className="relative">
                          {/* Connection dot */}
                          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-lynx-gray rounded-full"></div>
                          
                          {/* Icon container */}
                          <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${point.color} backdrop-blur-sm border border-lynx-gray/20 flex items-center justify-center relative z-10`}>
                            <point.icon size={32} className={point.iconColor} />
                          </div>

                          {/* Glow effect */}
                          <div className={`absolute inset-0 w-20 h-20 rounded-full bg-gradient-to-br ${point.color} blur-xl opacity-50`}></div>
                        </div>
                      </div>
                    </div>

                    {/* Empty space for layout */}
                    <div className={`hidden lg:block lg:col-span-5 ${
                      isLeft ? 'lg:order-3' : 'lg:order-2 lg:col-start-1'
                    }`}>
                      {/* Empty for alternating layout */}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div className="mt-24 flex justify-center">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-lynx-gray/30 to-transparent"></div>
        </div>
      </div>

      {/* Floating background elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-lynx-gray/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
    </section>
  );
};

export default BrandImportance;