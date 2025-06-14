import { Eye, Shield, Heart } from 'lucide-react';
import { AnimatedSection } from '@/hooks/useIntersectionObserver';
import { useLanguage } from '../contexts/LanguageContext';

const BrandImportance = () => {
  const { t } = useLanguage();
  
  const brandPoints = [
    {
      title: t('instantRecognition'),
      description: t('instantRecognitionDesc'),
      number: "01",
      icon: Eye
    },
    {
      title: t('trustCredibility'), 
      description: t('trustCredibilityDesc'),
      number: "02",
      icon: Shield
    },
    {
      title: t('customerLoyalty'),
      description: t('customerLoyaltyDesc'),
      number: "03", 
      icon: Heart
    }
  ];

  return (
    <section className="py-32 sm:py-32 pt-48 sm:pt-32 px-6 relative overflow-hidden bg-gradient-to-b from-black via-[#95A0A2]/10 to-black">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/banner1.png')" }}
      ></div>
      <div className="absolute inset-0 bg-black/95"></div>

      {/* Subtle gradient overlay with lynx-gray */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#95A0A2]/5 to-black/80"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <AnimatedSection animationType="fade-in" className="text-center mb-20">
          <span className="text-[#95A0A2] font-space text-sm tracking-widest uppercase mb-4 block">
            {t('whyBrandMatters')}
          </span>
          <div className="w-24 h-px bg-gradient-to-r from-[#95A0A2] to-transparent mx-auto mb-8"></div>
          <h2 className="text-5xl md:text-7xl font-space font-bold text-white mb-8 leading-tight">
            {t('brandPower')}
            <span className="block text-[#95A0A2]">{t('unleashed')}</span>
          </h2>
          <p className="text-xl text-[#95A0A2] max-w-3xl mx-auto font-inter leading-relaxed">
            {t('brandPowerSubtitle')}
          </p>
        </AnimatedSection>

        {/* Brand Points Grid */}
        <div className="space-y-32 sm:space-y-24">
          {brandPoints.map((point, index) => {
            const isLeft = index % 2 === 0;
            return (
              <AnimatedSection 
                key={index}
                animationType={isLeft ? "slide-in-left" : "slide-in-right"}
                delay={index * 0.3}
                className="group py-8 sm:py-0 brand-point-fade"
              >
                <div className="grid grid-cols-12 gap-8 sm:gap-8 items-center">
                  {/* Content side */}
                  <div className={`col-span-12 lg:col-span-5 ${
                    isLeft ? 'lg:order-1' : 'lg:order-3'
                  } px-4 sm:px-0`}>
                    <div className={`space-y-8 sm:space-y-6 ${isLeft ? 'lg:text-left' : 'lg:text-right'} text-center hover:scale-105 transition-transform duration-500`}>
                      {/* Icon and Number */}
                      <div className={`flex items-center gap-4 ${
                        isLeft ? 'lg:justify-start' : 'lg:justify-end'
                      } justify-center`}>
                        <div className="p-4 rounded-full border border-[#95A0A2]/30 bg-[#95A0A2]/5 group-hover:border-[#95A0A2]/60 group-hover:bg-[#95A0A2]/10 transition-all duration-300">
                          <point.icon size={32} className="text-[#95A0A2] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div className="text-5xl md:text-6xl font-space font-bold text-[#95A0A2]/40 group-hover:text-[#95A0A2]/60 transition-colors duration-300">
                          {point.number}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className={`text-3xl md:text-4xl lg:text-5xl font-space font-bold text-white leading-tight ${
                        isLeft ? 'lg:text-left' : 'lg:text-right'
                      } group-hover:text-[#95A0A2] transition-colors duration-300`}>
                        {point.title}
                      </h3>

                      {/* Description */}
                      <p className={`text-lg md:text-xl text-[#95A0A2] leading-relaxed font-inter max-w-md ${
                        isLeft ? 'lg:text-left lg:ml-0 lg:mr-auto' : 'lg:text-right lg:mr-0 lg:ml-auto'
                      } mx-auto group-hover:text-white transition-colors duration-300`}>
                        {point.description}
                      </p>

                      {/* Decorative line */}
                      <div className={`w-16 h-px bg-gradient-to-r from-[#95A0A2] to-transparent ${
                        isLeft ? 'lg:ml-0 lg:mr-auto' : 'lg:mr-0 lg:ml-auto'
                      } mx-auto group-hover:from-white transition-colors duration-300`}></div>
                    </div>
                  </div>

                  {/* Center line - only visible on larger screens */}
                  <div className="hidden lg:flex lg:col-span-2 lg:order-2 justify-center">
                    <div className="relative">
                      {/* Vertical line */}
                      <div className="w-px h-64 bg-gradient-to-b from-transparent via-[#95A0A2]/40 to-transparent group-hover:via-[#95A0A2]/60 transition-colors duration-300"></div>
                      {/* Center dot */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#95A0A2] rounded-full group-hover:bg-white transition-colors duration-300"></div>
                    </div>
                  </div>

                  {/* Empty side for alternating layout */}
                  <div className={`col-span-12 lg:col-span-5 ${
                    isLeft ? 'lg:order-3' : 'lg:order-1'
                  } hidden lg:block`}>
                    {/* Empty space for alternating layout */}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BrandImportance;