import { Target, Sparkles, Monitor, Palette, Play, Lightbulb } from 'lucide-react';
import { AnimatedSection } from '@/hooks/useIntersectionObserver';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('brandStrategy'),
      description: t('brandStrategyDesc'),
      icon: "target",
      features: [t('brandStrategyFeature1'), t('brandStrategyFeature2'), t('brandStrategyFeature3'), t('brandStrategyFeature4')]
    },
    {
      title: t('visualIdentity'),
      description: t('visualIdentityDesc'),
      icon: "sparkles",
      features: [t('visualIdentityFeature1'), t('visualIdentityFeature2'), t('visualIdentityFeature3'), t('visualIdentityFeature4')]
    },
    {
      title: t('digitalExperience'),
      description: t('digitalExperienceDesc'),
      icon: "monitor",
      features: [t('digitalExperienceFeature1'), t('digitalExperienceFeature2'), t('digitalExperienceFeature3'), t('digitalExperienceFeature4')]
    },
    {
      title: t('creativeDirection'),
      description: t('creativeDirectionDesc'),
      icon: "palette",
      features: [t('creativeDirectionFeature1'), t('creativeDirectionFeature2'), t('creativeDirectionFeature3'), t('creativeDirectionFeature4')]
    },
    {
      title: t('motionGraphics'),
      description: t('motionGraphicsDesc'),
      icon: "play",
      features: [t('motionGraphicsFeature1'), t('motionGraphicsFeature2'), t('motionGraphicsFeature3'), t('motionGraphicsFeature4')]
    },
    {
      title: t('brandConsulting'),
      description: t('brandConsultingDesc'),
      icon: "lightbulb",
      features: [t('brandConsultingFeature1'), t('brandConsultingFeature2'), t('brandConsultingFeature3'), t('brandConsultingFeature4')]
    }
  ];

  return (
    <section className="py-20 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-12 relative overflow-hidden bg-gradient-to-b from-black via-[#0f1419] to-black">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-lynx-gray via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection animationType="fade-in" className="text-center mb-12 sm:mb-16 lg:mb-20">
          <span className="text-lynx-gray font-space text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4 block">{t('servicesLabel')}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-space font-bold text-white mb-6 sm:mb-8 leading-tight px-2">
            {t('servicesTitle')}
            <span className="block text-lynx-gray">{t('servicesTitle2')}</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-lynx-gray max-w-3xl mx-auto font-inter leading-relaxed px-4">
            {t('servicesSubtitle')}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative p-4 sm:p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-lynx-gray/5 to-transparent border border-lynx-gray/10 hover:border-lynx-gray/30 transition-all duration-700 hover:scale-105 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon === 'target' && <Target className="w-6 h-6 sm:w-8 sm:h-8 text-lynx-gray" />}
                    {service.icon === 'sparkles' && <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-lynx-gray" />}
                    {service.icon === 'monitor' && <Monitor className="w-6 h-6 sm:w-8 sm:h-8 text-lynx-gray" />}
                    {service.icon === 'palette' && <Palette className="w-6 h-6 sm:w-8 sm:h-8 text-lynx-gray" />}
                    {service.icon === 'play' && <Play className="w-6 h-6 sm:w-8 sm:h-8 text-lynx-gray" />}
                    {service.icon === 'lightbulb' && <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-lynx-gray" />}
                  </div>

                  <h3 className="text-lg sm:text-xl lg:text-2xl font-space font-semibold text-white mb-3 sm:mb-4 group-hover:text-lynx-gray transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-lynx-gray font-inter leading-relaxed mb-4 sm:mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 sm:gap-3">
                        <div className="w-1.5 h-1.5 bg-lynx-gray rounded-full group-hover:bg-white transition-colors duration-300 flex-shrink-0"></div>
                        <span className="text-xs sm:text-sm text-lynx-gray font-inter group-hover:text-white transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
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