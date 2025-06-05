import { AnimatedSection } from '@/hooks/useIntersectionObserver';
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();
  
  const projects = [
    {
      id: 1,
      title: "Urban Fashion Collective",
      category: t('techStartupBranding'),
      description: "Modern streetwear brand identity with bold typography and contemporary visual elements that resonate with urban culture.",
      image: "/brand/b1.jpg",
      tags: ["Branding", "Fashion", "Urban"]
    },
    {
      id: 2,
      title: "Artisan Coffee House",
      category: t('luxuryBrandIdentity'),
      description: "Sophisticated coffee brand with premium packaging design and warm color palette reflecting artisanal quality.",
      image: "/brand/b2.jpg",
      tags: ["Luxury", "F&B", "Packaging"]
    },
    {
      id: 3,
      title: "Tech Innovation Hub",
      category: t('digitalExperienceProject'),
      description: "Cutting-edge technology company branding with minimalist design and futuristic visual identity system.",
      image: "/brand/b3.jpg",
      tags: ["Digital", "Tech", "Innovation"]
    },
    {
      id: 4,
      title: "Wellness Retreat Center",
      category: t('corporateRebrand'),
      description: "Holistic wellness brand with natural elements and calming aesthetics promoting health and mindfulness.",
      image: "/brand/b4.jpg",
      tags: ["Wellness", "Health", "Lifestyle"]
    },
    {
      id: 5,
      title: "Creative Studio Agency",
      category: t('healthcareInnovation'),
      description: "Dynamic creative agency branding featuring vibrant colors and experimental typography for artistic expression.",
      image: "/brand/b5.jpg",
      tags: ["Creative", "Agency", "Design"]
    },
    {
      id: 6,
      title: "Sustainable Living Co.",
      category: t('sustainabilityPlatform'),
      description: "Eco-conscious brand identity with organic shapes and earth tones promoting sustainable lifestyle choices.",
      image: "/brand/b6.jpg",
      tags: ["Sustainability", "Eco", "Lifestyle"]
    }
  ];

  return (
    <section 
      id="projects" 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/banner2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >

      <div className="max-w-7xl mx-auto">
        <AnimatedSection animationType="fade-in" className="text-center mb-20">
          <span className="text-lynx-gray font-space text-sm tracking-widest uppercase mb-4 block">{t('portfolioLabel')}</span>
          <h2 className="text-5xl md:text-7xl font-space font-bold text-white mb-8 leading-tight">
            {t('portfolioTitle')}
            <span className="block text-lynx-gray">{t('portfolioTitle2')}</span>
          </h2>
          <p className="text-xl text-lynx-gray max-w-3xl mx-auto font-inter leading-relaxed">
            {t('portfolioSubtitle')}
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animationType="scale-in"
              delay={Math.min(index + 1, 6)}
            >
              <div className="group relative cursor-pointer overflow-hidden rounded-2xl bg-lynx-gray/5 border border-lynx-gray/10 hover:border-lynx-gray/30 transition-all duration-300 hover-lift">
                <div className="aspect-square overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-space text-lynx-gray bg-white/10 rounded-full backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-space font-bold text-white mb-2">
                    {project.title}
                  </h3>

                  <p className="text-lynx-gray font-inter text-sm mb-1">
                    {project.category}
                  </p>

                  <p className="text-lynx-gray font-inter text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 mt-4 text-white">
                    <span className="text-sm font-space">View Project</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <button className="group relative px-8 py-4 border border-lynx-gray text-lynx-gray font-space font-semibold rounded-lg hover:border-white hover:text-white transition-all duration-500 hover-scale">
            <span className="relative z-10">View All Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;