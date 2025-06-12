import { AnimatedSection } from '@/hooks/useIntersectionObserver';
import { useLanguage } from '../contexts/LanguageContext';

const Process = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: "01",
      title: t('discoveryStrategy'),
      description: t('discoveryDesc'),
      details: [t('discoveryDetail1'), t('discoveryDetail2'), t('discoveryDetail3'), t('discoveryDetail4')]
    },
    {
      number: "02",
      title: t('creativeDevelopment'),
      description: t('creativeDevDesc'),
      details: [t('creativeDetail1'), t('creativeDetail2'), t('creativeDetail3'), t('creativeDetail4')]
    },
    {
      number: "03",
      title: t('designExecution'),
      description: t('designExecDesc'),
      details: [t('designDetail1'), t('designDetail2'), t('designDetail3'), t('designDetail4')]
    },
    {
      number: "04",
      title: t('launchGrowth'),
      description: t('launchDesc'),
      details: [t('launchDetail1'), t('launchDetail2'), t('launchDetail3'), t('launchDetail4')]
    }
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-[#0f1419] via-[#0f1419] to-black">
      {/* Gradiente de transição suave no topo */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 via-[#0f1419]/80 to-transparent z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#95A0A2]/10 via-transparent to-transparent"></div>

      {/* Visual elements to break up text */}
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-[#95A0A2]/5 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 right-1/4 w-2 h-40 bg-gradient-to-b from-[#95A0A2]/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection animationType="fade-in" className="text-center mb-20">
          <span className="text-lynx-gray font-space text-sm tracking-widest uppercase mb-4 block">{t('ourProcess')}</span>
          <h2 className="text-5xl md:text-7xl font-space font-bold text-white mb-8 leading-tight">
            {t('fromVision')}
            <span className="block text-lynx-gray">{t('toReality')}</span>
          </h2>
          <p className="text-xl text-lynx-gray max-w-3xl mx-auto font-inter leading-relaxed">
            {t('processSubtitle')}
          </p>
        </AnimatedSection>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <AnimatedSection
              key={index}
              animationType={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}
              delay={Math.min(index + 1, 6)}
              className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              <div>
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="text-6xl font-space font-bold text-lynx-gray/30">
                      {step.number}
                    </div>
                    <div className="w-16 h-px bg-gradient-to-r from-lynx-gray to-transparent"></div>
                  </div>

                  <h3 className="text-4xl font-space font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="text-xl text-lynx-gray font-inter leading-relaxed">
                    {step.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-lynx-gray rounded-full"></div>
                        <span className="text-lynx-gray font-inter text-sm">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} slide-in-${index % 2 === 0 ? 'right' : 'left'}`}>
                <div className="relative aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-br from-lynx-gray/10 to-transparent rounded-2xl backdrop-blur-sm border border-lynx-gray/10">
                    <div className="absolute inset-8 bg-gradient-to-br from-white/5 to-transparent rounded-xl flex items-center justify-center overflow-hidden">
                      <img 
                        src={`/foto${index + 1}.png`}
                        alt={`Process ${step.number} illustration`}
                        className="w-full h-full object-contain opacity-80"
                      />
                    </div>
                  </div>

                  {/* Floating animation elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-lynx-gray/10 to-transparent rounded-full blur-xl animate-float"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tl from-white/10 to-transparent rounded-full blur-lg animate-float" style={{animationDelay: '1.5s'}}></div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;