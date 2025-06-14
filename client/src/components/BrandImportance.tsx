import { AnimatedSection } from '@/hooks/useIntersectionObserver';
import { useLanguage } from '../contexts/LanguageContext';

const BrandImportance = () => {
  const { t } = useLanguage();

  const brandPoints = [
    {
      title: t('instantRecognition'),
      description: t('instantRecognitionDesc')
    },
    {
      title: t('trustCredibility'),
      description: t('trustCredibilityDesc')
    },
    {
      title: t('customerLoyalty'),
      description: t('customerLoyaltyDesc')
    }
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-black via-[#95A0A2]/10 to-black">
      {/* Background texture */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/banner1.png')"}}></div>
      <div className="absolute inset-0 bg-black/95"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#95A0A2]/5 to-black/80"></div>

      <div className="max-w-7xl mx-auto relative z-10">
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

        <div className="space-y-32 sm:space-y-24">
          {brandPoints.map((point, index) => {
            const isEven = index % 2 === 0;
            return (
              <AnimatedSection
                key={index}
                animationType={isEven ? "slide-in-left" : "slide-in-right"}
                delay={index * 0.4}
                className="group py-8 sm:py-0 brand-point-fade transform transition-all duration-800 ease-out"
              >
                <div className="grid grid-cols-12 gap-8 sm:gap-8 items-center">
                  <div className={`col-span-12 ${isEven ? 'lg:col-span-6 lg:order-1' : 'lg:col-span-6 lg:order-2'} space-y-6`}>
                    <div className="flex items-center gap-6">
                      <div className="text-6xl font-space font-bold text-[#95A0A2]/30">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="w-16 h-px bg-gradient-to-r from-[#95A0A2] to-transparent"></div>
                    </div>

                    <h3 className="text-4xl font-space font-bold text-white">
                      {point.title}
                    </h3>

                    <p className="text-xl text-[#95A0A2] font-inter leading-relaxed">
                      {point.description}
                    </p>
                  </div>

                  <div className={`col-span-12 ${isEven ? 'lg:col-span-6 lg:order-2' : 'lg:col-span-6 lg:order-1'} relative`}>
                    <div className="relative h-64 sm:h-80 lg:h-96 flex items-center justify-center">
                      {/* Decorative elements */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#95A0A2]/10 to-transparent rounded-2xl backdrop-blur-sm border border-[#95A0A2]/20"></div>
                      <div className="absolute top-4 right-4 w-20 h-20 bg-[#95A0A2]/20 rounded-full blur-xl"></div>
                      <div className="absolute bottom-6 left-6 w-12 h-12 bg-white/10 rounded-full blur-lg"></div>

                      {/* Central decorative element */}
                      <div className="relative z-10 w-24 h-24 bg-gradient-to-br from-[#95A0A2]/30 to-white/20 rounded-full flex items-center justify-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-white/40 to-[#95A0A2]/40 rounded-full"></div>
                      </div>
                    </div>
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