import logoPng from '@/logop.png';
import { AnimatedSection } from '@/hooks/useIntersectionObserver';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
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
          <div className="space-y-8">
            <AnimatedSection animationType="slide-in-left">
              <div className="space-y-4">
                <span className="text-lynx-gray font-space text-sm tracking-widest uppercase">{t('aboutLabel')}</span>
                <h2 className="text-5xl md:text-7xl font-space font-bold text-white leading-tight">
                  {t('aboutTitle')}
                  <span className="block text-lynx-gray">{t('aboutTitle2')}</span>
                  <span className="block">{t('aboutTitle3')}</span>
                </h2>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="fade-in" delay={1}>
              <div className="w-24 h-px bg-gradient-to-r from-lynx-gray to-transparent"></div>
            </AnimatedSection>

            <AnimatedSection animationType="fade-in" delay={2}>
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-lynx-gray font-inter">
                  {t('aboutParagraph1')}
                </p>
                <p className="text-lynx-gray font-inter">
                  {t('aboutParagraph2')}
                </p>
                <p className="text-white font-inter font-medium">
                  {t('aboutParagraph3')}
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