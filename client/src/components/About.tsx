import logoPng from '@/logop.png';
import { ScrollTriggerWrapper } from '@/hooks/useScrollTrigger';
import { useLanguage } from '../contexts/LanguageContext';
import { useState, useEffect, useRef } from 'react';

const CountUp = ({ target, duration = 2000, suffix = "" }: { target: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);

          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(target * easeOutQuart));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { 
        threshold: 0.5,
        rootMargin: '50px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration, hasStarted]);

  return (
    <div ref={elementRef} className="text-2xl sm:text-3xl lg:text-4xl font-space font-bold text-white">
      {count}{suffix}
    </div>
  );
};

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      {/* Background image with dark overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/banner1.png')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/96 via-[#0f1419]/90 to-black/96"></div>
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-lynx-gray via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 sm:gap-20 lg:gap-24 items-center">
          <div className="space-y-10 sm:space-y-12">
            <ScrollTriggerWrapper animationType="slide-in-left">
              <div className="space-y-6 sm:space-y-8">
                <span className="text-lynx-gray font-space text-sm sm:text-base tracking-widest uppercase">{t('aboutLabel')}</span>
                <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-space font-bold text-white leading-tight">
                  {t('aboutTitle')}
                  <span className="block text-lynx-gray">{t('aboutTitle2')}</span>
                  <span className="block">{t('aboutTitle3')}</span>
                </h2>
              </div>
            </ScrollTriggerWrapper>

            <ScrollTriggerWrapper animationType="fade-in" delay={2}>
              <div className="w-24 h-px bg-gradient-to-r from-lynx-gray to-transparent"></div>
            </ScrollTriggerWrapper>

            <ScrollTriggerWrapper animationType="fade-in" delay={4}>
              <div className="space-y-6 sm:space-y-8 text-base sm:text-lg lg:text-xl leading-relaxed">
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
            </ScrollTriggerWrapper>

            <ScrollTriggerWrapper animationType="slide-in-up" delay={6}>
              <div className="flex flex-wrap gap-6 sm:gap-8 lg:gap-12 pt-8 sm:pt-12">
                <div className="flex items-center gap-3 hover-scale">
                  <span className="text-lynx-gray text-sm">•</span>
                  <div>
                    <CountUp target={50} suffix="+" duration={2500} />
                    <div className="text-lynx-gray text-sm sm:text-base font-inter">{t('brandsTransformed')}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 hover-scale">
                  <span className="text-lynx-gray text-sm">•</span>
                  <div>
                    <CountUp target={8} suffix="+" duration={2000} />
                    <div className="text-lynx-gray text-sm sm:text-base font-inter">{t('yearsExcellence')}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 hover-scale">
                  <span className="text-lynx-gray text-sm">•</span>
                  <div>
                    <CountUp target={25} suffix="+" duration={2200} />
                    <div className="text-lynx-gray text-sm sm:text-base font-inter">{t('countriesReached')}</div>
                  </div>
                </div>
              </div>
            </ScrollTriggerWrapper>
          </div>

          <ScrollTriggerWrapper animationType="slide-in-right" className="relative">
            <div className="relative aspect-square">
              {/* Main video container with full coverage */}
              <div className="absolute inset-2 sm:inset-12 bg-gradient-to-br from-lynx-gray/20 to-transparent rounded-2xl backdrop-blur-sm overflow-hidden hover-lift">
                <video 
                  src="/globo.mp4" 
                  className="w-full h-full object-cover opacity-100 transition-opacity duration-500"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  controls={false}
                  disablePictureInPicture
                  style={{ pointerEvents: 'none' }}
                  onLoadStart={() => {
                    const video = document.querySelector('video');
                    if (video) {
                      video.currentTime = 0;
                    }
                  }}
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-lynx-gray/10 to-transparent rounded-full blur-xl animate-float"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-tl from-white/10 to-transparent rounded-full blur-lg animate-float" style={{animationDelay: '1.5s'}}></div>
            </div>
          </ScrollTriggerWrapper>
        </div>
      </div>
    </section>
  );
};

export default About;