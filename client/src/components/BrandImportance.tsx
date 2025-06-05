import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eye, Shield, Star, Gem, Heart } from 'lucide-react';
import { AnimatedSection } from '@/hooks/useIntersectionObserver';

gsap.registerPlugin(ScrollTrigger);

const BrandImportance = () => {
  const brandPoints = [
    {
      title: "Instant Recognition",
      description: "A strong brand creates immediate market identification, allowing consumers to recognize your products or services in seconds.",
      icon: Eye
    },
    {
      title: "Trust & Credibility",
      description: "Well-established brands convey security and professionalism, increasing customer confidence in doing business with you.",
      icon: Shield
    },
    {
      title: "Competitive Differentiation",
      description: "In saturated markets, a unique and memorable brand is what separates your company from competition and attracts specific customers.",
      icon: Star
    },
    {
      title: "Superior Perceived Value",
      description: "Strong brands can charge premium prices because consumers associate quality and value with the company name.",
      icon: Gem
    },
    {
      title: "Customer Loyalty",
      description: "A consistent and engaging brand creates lasting emotional connections, transforming customers into brand advocates.",
      icon: Heart
    }
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <AnimatedSection animationType="fade-in" className="text-center mb-20">
          <span className="text-lynx-gray font-space text-sm tracking-widest uppercase mb-4 block">
            Why Your Brand Matters
          </span>
          <h2 className="text-5xl md:text-7xl font-space font-bold text-white mb-8 leading-tight">
            The Power of
            <span className="block text-lynx-gray">Brand Identity</span>
          </h2>
          <p className="text-xl text-lynx-gray max-w-3xl mx-auto font-inter leading-relaxed">
            Understanding why a strong brand is essential for sustainable business growth and market positioning.
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-lynx-gray to-transparent mx-auto mt-8"></div>
        </AnimatedSection>

        {/* Brand points with connecting line */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central connecting line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-lynx-gray/40 to-transparent hidden lg:block"></div>

          {/* Brand points */}
          <div className="space-y-24">
            {brandPoints.map((point, index) => {
              const isLeft = index % 2 === 0;
              return (
                <AnimatedSection 
                  key={index}
                  animationType="slide-in-up"
                  delay={index + 1}
                  className="relative"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left content */}
                    <div className={`lg:col-span-5 ${
                      isLeft ? 'lg:order-1' : 'lg:order-3'
                    }`}>
                      <div className={`space-y-6 ${
                        isLeft ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'
                      } text-center lg:text-left`}>
                        {/* Icon */}
                        <div className={`flex items-center gap-4 ${
                          isLeft ? 'lg:justify-end' : 'lg:justify-start'
                        } justify-center`}>
                          <div className="p-4 rounded-full border border-lynx-gray/30 bg-lynx-gray/10 backdrop-blur-sm">
                            <point.icon size={28} className="text-lynx-gray" />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-3xl md:text-4xl font-space font-bold text-white leading-tight">
                          {point.title}
                        </h3>

                        {/* Description */}
                        <p className="text-lg text-lynx-gray leading-relaxed font-inter">
                          {point.description}
                        </p>

                        {/* Decorative line */}
                        <div className={`w-16 h-px bg-gradient-to-r from-lynx-gray to-transparent ${
                          isLeft ? 'lg:ml-auto lg:mr-0' : 'lg:mr-auto lg:ml-0'
                        } mx-auto`}></div>
                      </div>
                    </div>

                    {/* Center connector - only visible on larger screens */}
                    <div className="hidden lg:flex lg:col-span-2 lg:order-2 justify-center items-center">
                      <div className="relative">
                        {/* Connection dot */}
                        <div className="w-4 h-4 bg-lynx-gray rounded-full border-4 border-black relative z-10"></div>
                        {/* Horizontal line to content */}
                        <div className={`absolute top-1/2 transform -translate-y-1/2 h-px bg-gradient-to-r from-lynx-gray/60 to-transparent ${
                          isLeft ? 'right-4 w-12' : 'left-4 w-12'
                        }`}></div>
                      </div>
                    </div>

                    {/* Right content (empty space for alternating layout) */}
                    <div className={`lg:col-span-5 ${
                      isLeft ? 'lg:order-3' : 'lg:order-1'
                    } hidden lg:block`}>
                      {/* Empty space for alternating layout */}
                    </div>
                  </div>

                  {/* Mobile connector line */}
                  <div className="lg:hidden flex justify-center mt-12 mb-12">
                    {index < brandPoints.length - 1 && (
                      <div className="w-px h-16 bg-gradient-to-b from-lynx-gray/60 to-transparent"></div>
                    )}
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* Bottom section */}
        <AnimatedSection 
          animationType="fade-in" 
          delay={brandPoints.length + 1}
          className="text-center mt-32"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-2xl md:text-3xl font-space font-bold text-white">
              Ready to Build Your Brand?
            </h3>
            <p className="text-lg text-lynx-gray font-inter leading-relaxed">
              Let's create a brand identity that not only stands out but drives real business results.
            </p>
            <div className="w-24 h-px bg-gradient-to-r from-lynx-gray to-transparent mx-auto"></div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BrandImportance;