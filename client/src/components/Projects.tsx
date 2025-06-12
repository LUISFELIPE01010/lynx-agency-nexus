import { AnimatedSection } from '@/hooks/useIntersectionObserver';
import { ScrollAnimatedSection } from '@/hooks/useScrollAnimations';
import { useLanguage } from '../contexts/LanguageContext';
import CSSAnimatedOverlay from './CSSAnimatedOverlay';

const Projects = () => {
  const { t } = useLanguage();
  
  const projects = [
    {
      id: 1,
      title: "Elite Business Services",
      category: t('techStartupBranding'),
      description: "Professional corporate identity featuring clean lines and sophisticated branding for premium business consultancy.",
      image: "/bb1.jpg",
      tags: ["Corporate", "Business", "Professional"]
    },
    {
      id: 2,
      title: "Luxury Automotive Brand",
      category: t('luxuryBrandIdentity'),
      description: "High-end automotive branding with sleek design elements and premium visual identity for luxury vehicle dealership.",
      image: "/bb2.jpg",
      tags: ["Automotive", "Luxury", "Premium"]
    },
    {
      id: 3,
      title: "Modern Fashion Label",
      category: t('digitalExperienceProject'),
      description: "Contemporary fashion brand identity with minimalist aesthetics and modern typography for trendy clothing line.",
      image: "/bb3.jpg",
      tags: ["Fashion", "Modern", "Trendy"]
    },
    {
      id: 4,
      title: "Artisan Food & Beverage",
      category: t('corporateRebrand'),
      description: "Authentic artisanal brand featuring warm colors and handcrafted elements for gourmet food products.",
      image: "/bb4.jpg",
      tags: ["Food", "Artisan", "Gourmet"]
    },
    {
      id: 5,
      title: "Tech Innovation Company",
      category: t('healthcareInnovation'),
      description: "Cutting-edge technology brand with futuristic design elements and bold visual identity for innovation leader.",
      image: "/bb5.jpg",
      tags: ["Technology", "Innovation", "Future"]
    },
    {
      id: 6,
      title: "Creative Design Studio",
      category: t('sustainabilityPlatform'),
      description: "Dynamic creative studio branding with vibrant colors and artistic elements showcasing design excellence.",
      image: "/bb6.jpg",
      tags: ["Creative", "Design", "Studio"]
    }
  ];

  return (
    <section 
      id="projects" 
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/banner2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay escuro com 85% de opacidade */}
      <div className="absolute inset-0 bg-black/85 z-10"></div>
      
      {/* Animated overlay apenas nesta seção */}
      <div className="absolute inset-0 z-20">
        <CSSAnimatedOverlay />
      </div>

      <div className="max-w-7xl mx-auto relative z-30">
        <AnimatedSection animationType="fade-in" className="text-center mb-12 sm:mb-16 lg:mb-20">
          <span className="text-lynx-gray font-space text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4 block">{t('portfolioLabel')}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-space font-bold text-white mb-6 sm:mb-8 leading-tight px-2">
            {t('portfolioTitle')}
            <span className="block text-lynx-gray">{t('portfolioTitle2')}</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-lynx-gray max-w-3xl mx-auto font-inter leading-relaxed px-4">
            {t('portfolioSubtitle')}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animationType="scale-in"
              delay={Math.min(index + 1, 6)}
            >
              <div className="group relative cursor-pointer overflow-hidden rounded-2xl bg-lynx-gray/5 border border-lynx-gray/10 hover:border-lynx-gray/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl section-transition">
                <div className="aspect-square overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-space text-lynx-gray bg-white/10 rounded-full backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg sm:text-xl lg:text-2xl font-space font-bold text-white mb-1.5 sm:mb-2">
                    {project.title}
                  </h3>

                  <p className="text-lynx-gray font-inter text-xs sm:text-sm mb-1">
                    {project.category}
                  </p>

                  <p className="text-lynx-gray font-inter text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3 lg:mb-4">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 mt-3 sm:mt-4 text-white">
                    <span className="text-xs sm:text-sm font-space">{t('viewProject')}</span>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute top-4 right-4 w-8 h-8 border border-white/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animationType="fade-in" className="text-center mt-16">
          <button className="group relative px-8 py-4 border border-lynx-gray text-lynx-gray font-space font-semibold rounded-lg hover:border-white hover:text-white transition-all duration-500 btn-glow">
            <span className="relative z-10">{t('viewAllProjects')}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
          </button>
        </AnimatedSection>
      </div>
      
      </section>
  );
};

export default Projects;