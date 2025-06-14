import { AnimatedSection } from '@/hooks/useIntersectionObserver';
import { useLanguage } from '../contexts/LanguageContext';

const BrandImportance = () => {
  const { t } = useLanguage();

  const brandPoints = [
    {
      title: t('brandIdentity'),
      description: t('brandIdentityDesc'),
      details: [t('brandDetail1'), t('brandDetail2'), t('brandDetail3')]
    },
    {
      title: t('brandExperience'),
      description: t('brandExperienceDesc'),
      details: [t('experienceDetail1'), t('experienceDetail2'), t('experienceDetail3')]
    },
    {
      title: t('brandGrowth'),
      description: t('brandGrowthDesc'),
      details: [t('growthDetail1'), t('growthDetail2'), t('growthDetail3')]
    }
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-black via-[#0a0e13] to-black">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-lynx-gray via-transparent to-transparent"></div>
      </div>

      {/* Visual elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-[#95A0A2]/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-2 h-32 bg-gradient-to-t from-[#95A0A2]/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection animationType="fade-in" className="text-center mb-20">
          <span className="text-lynx-gray font-space text-sm tracking-widest uppercase mb-4 block">{t('whyYourBrand')}</span>
          <h2 className="text-5xl md:text-7xl font-space font-bold text-white mb-8 leading-tight">
            {t('brandMatters')}
            <span className="block text-lynx-gray">{t('brandMattersSubtitle')}</span>
          </h2>
          <p className="text-xl text-lynx-gray max-w-3xl mx-auto font-inter leading-relaxed">
            {t('brandImportanceDesc')}
          </p>
        </AnimatedSection>

        <div className="space-y-24 sm:space-y-16">
          {brandPoints.map((point, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 sm:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''} py-8 sm:py-0`}>
              <AnimatedSection
                animationType={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}
                delay={index * 0.3}
                className="transform transition-all duration-800 ease-out"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="text-6xl font-space font-bold text-lynx-gray/30">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="w-16 h-px bg-gradient-to-r from-lynx-gray to-transparent"></div>
                  </div>

                  <h3 className="text-4xl font-space font-bold text-white">
                    {point.title}
                  </h3>

                  <p className="text-xl text-lynx-gray font-inter leading-relaxed">
                    {point.description}
                  </p>

                  <div className="space-y-3">
                    {point.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-lynx-gray rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-lynx-gray font-inter text-base leading-relaxed">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection
                animationType={index % 2 === 0 ? "slide-in-right" : "slide-in-left"}
                delay={index * 0.3 + 0.2}
                className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} transform transition-all duration-800 ease-out`}
              >
                <div className="relative aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-br from-lynx-gray/10 to-transparent rounded-2xl backdrop-blur-sm border border-lynx-gray/10">
                    <div className="absolute inset-8 bg-gradient-to-br from-white/5 to-transparent rounded-xl flex items-center justify-center overflow-hidden">
                      <div className="w-24 h-24 bg-gradient-to-br from-lynx-gray/30 to-white/20 rounded-full flex items-center justify-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-white/40 to-lynx-gray/40 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Floating animation elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-lynx-gray/15 to-transparent rounded-full blur-xl animate-float"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tl from-white/15 to-transparent rounded-full blur-lg animate-float" style={{animationDelay: '2s'}}></div>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandImportance;