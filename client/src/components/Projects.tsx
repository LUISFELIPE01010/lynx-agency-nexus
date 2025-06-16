import { ScrollTriggerWrapper } from '@/hooks/useScrollTrigger';
import { TextReveal } from '@/hooks/useTextReveal';
import { useLanguage } from '../contexts/LanguageContext';
import CSSAnimatedOverlay from './CSSAnimatedOverlay';
import { Link } from 'wouter';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: t('eliteBusinessServices'),
      category: t('techStartupBranding'),
      description: t('eliteBusinessDesc'),
      image: "/bb1.jpg",
      tags: ["Agriculture", "Business", "Professional"]
    },
    {
      id: 2,
      title: t('boltinEyewear'),
      category: t('luxuryBrandIdentity'),
      description: t('boltinEyewearDesc'),
      image: "/bb2.jpg",
      tags: ["Eyewear", "Luxury", "Premium"]
    },
    {
      id: 3,
      title: t('modernArchitecture'),
      category: t('digitalExperienceProject'),
      description: t('modernArchitectureDesc'),
      image: "/bb3.jpg",
      tags: ["Architecture", "Modern", "Design"]
    },
    {
      id: 4,
      title: t('momusSnackBar'),
      category: t('snackBarBranding'),
      description: t('momusSnackBarDesc'),
      image: "/bb4.jpg",
      tags: ["Food", "Snackbar", "Urban"]
    },
    {
      id: 5,
      title: t('saucesBranding'),
      category: t('sauceBranding'),
      description: t('saucesBrandingDesc'),
      image: "/bb6.jpg",
      tags: ["Food", "Sauces", "Premium"]
    },
    {
      id: 6,
      title: t('modernBarbershop'),
      category: t('barbershopBranding'),
      description: t('modernBarbershopDesc'),
      image: "/nova1.png",
      tags: ["Barbershop", "Modern", "Grooming"]
    },
    {
      id: 7,
      title: t('constructionCompany'),
      category: t('constructionBranding'),
      description: t('constructionCompanyDesc'),
      image: "/nova2.png",
      tags: ["Construction", "Industrial", "Professional"]
    },
    {
      id: 8,
      title: t('luxuryJewelry'),
      category: t('jewelryBranding'),
      description: t('luxuryJewelryDesc'),
      image: "/nova3.png",
      tags: ["Jewelry", "Luxury", "Elegant"]
    },
    {
      id: 9,
      title: t('sportsWear'),
      category: t('sportsbranding'),
      description: t('sportsWearDesc'),
      image: "/nova4.png",
      tags: ["Sports", "Athletic", "Performance"]
    }
  ];

  return (
    <section id="projects" className="py-20 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-12 relative overflow-hidden bg-black">
      {/* Background with animated overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/5 to-black"></div>
      <div className="absolute inset-0 opacity-30">
        <CSSAnimatedOverlay />
      </div>

      <div className="max-w-7xl mx-auto relative z-30">
        <ScrollTriggerWrapper animationType="fade-in" className="text-center mb-16 sm:mb-24 lg:mb-32">
          <span className="text-lynx-gray font-space text-sm sm:text-base tracking-widest uppercase mb-6 sm:mb-8 block">{t('portfolioLabel')}</span>
          <TextReveal 
            as="h2" 
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-space font-bold text-white mb-8 sm:mb-12 leading-tight"
          >
            {t('portfolioTitle')}
            <span className="block text-lynx-gray">{t('portfolioTitle2')}</span>
          </TextReveal>
          <p className="text-base sm:text-lg lg:text-xl text-lynx-gray max-w-3xl mx-auto font-inter leading-relaxed px-4">
            {t('portfolioSubtitle')}
          </p>
        </ScrollTriggerWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ScrollTriggerWrapper
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
                  decoding="async"
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

                  <TextReveal 
                    as="h2" 
                    className="text-lg sm:text-xl lg:text-2xl font-space font-bold text-white mb-1.5 sm:mb-2"
                    animationType="slide-up"
                    staggerDelay={0.06}
                  >
                    {project.title}
                  </TextReveal>

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
            </ScrollTriggerWrapper>
          ))}
        </div>

        <ScrollTriggerWrapper animationType="fade-in" className="text-center mt-20 sm:mt-24 lg:mt-32">
          <Link 
            to="/gallery"
            className="group relative inline-block px-8 py-4 border border-lynx-gray text-lynx-gray font-space font-semibold rounded-lg hover:border-white hover:text-white transition-all duration-500 btn-glow touch-manipulation"
          >
            <span className="relative z-10">{t('viewAllProjects')}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
          </Link>
        </ScrollTriggerWrapper>
      </div>

      </section>
  );
};

export default Projects;