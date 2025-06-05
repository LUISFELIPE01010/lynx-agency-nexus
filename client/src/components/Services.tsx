
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
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background image with dark overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/banner1.png')" }}
      ></div>
      <div className="absolute inset-0 bg-black/95"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lynx-gray/5 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection animationType="fade-in" className="text-center mb-20">
          <span className="text-lynx-gray font-space text-sm tracking-widest uppercase mb-4 block">{t('servicesLabel')}</span>
          <h2 className="text-5xl md:text-7xl font-space font-bold text-white mb-8 leading-tight">
            {t('servicesTitle')}
            <span className="block text-lynx-gray">{t('servicesTitle2')}</span>
          </h2>
          <p className="text-xl text-lynx-gray max-w-3xl mx-auto font-inter leading-relaxed">
            {t('servicesSubtitle')}
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection 
              key={index}
              animationType="scale-in"
              delay={Math.min(index + 1, 6)}
            >
              <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-lynx-gray/5 to-transparent border border-lynx-gray/10 hover:border-lynx-gray/30 transition-all duration-700 hover-lift backdrop-blur-sm">
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


                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
