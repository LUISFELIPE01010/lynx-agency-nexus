
import Navbar from '@/components/Navbar';
import { useLanguage } from '../contexts/LanguageContext';

const Gallery = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: t('eliteBusinessServices'),
      category: t('techStartupBranding'),
      description: t('eliteBusinessDesc'),
      image: "/bb1.jpg",
      tags: ['corporate', 'business', 'professional']
    },
    {
      id: 2,
      title: t('boltinEyewear'),
      category: t('luxuryBrandIdentity'),
      description: t('boltinEyewearDesc'),
      image: "/bb2.jpg",
      tags: ['eyewear', 'luxury', 'premium']
    },
    {
      id: 3,
      title: t('modernArchitecture'),
      category: t('digitalExperienceProject'),
      description: t('modernArchitectureDesc'),
      image: "/bb3.jpg",
      tags: ['architecture', 'modern', 'design']
    },
    {
      id: 4,
      title: t('momusSnackBar'),
      category: t('snackBarBranding'),
      description: t('momusSnackBarDesc'),
      image: "/bb4.jpg",
      tags: ['food', 'snackbar', 'urban']
    },
    {
      id: 5,
      title: t('saucesBranding'),
      category: t('sauceBranding'),
      description: t('saucesBrandingDesc'),
      image: "/bb6.jpg",
      tags: ['food', 'sauces', 'premium']
    },
    {
      id: 6,
      title: t('modernBarbershop'),
      category: t('barbershopBranding'),
      description: t('modernBarbershopDesc'),
      image: "/nova1.png",
      tags: ['barbershop', 'modern', 'grooming']
    },
    {
      id: 7,
      title: t('constructionCompany'),
      category: t('constructionBranding'),
      description: t('constructionCompanyDesc'),
      image: "/nova2.png",
      tags: ['construction', 'industrial', 'professional']
    },
    {
      id: 8,
      title: t('luxuryJewelry'),
      category: t('jewelryBranding'),
      description: t('luxuryJewelryDesc'),
      image: "/nova3.png",
      tags: ['jewelry', 'luxury', 'elegant']
    },
    {
      id: 9,
      title: t('sportsWear'),
      category: t('sportsbranding'),
      description: t('sportsWearDesc'),
      image: "/nova4.png",
      tags: ['sports', 'athletic', 'performance']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Portfolio Header */}
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-space font-bold text-white mb-8 leading-tight">
            <span className="block text-lynx-gray">{t('portfolioShowcase')}</span>
          </h1>
          <p className="text-lg text-lynx-gray max-w-3xl mx-auto leading-relaxed">
            {t('explorePortfolio')}
          </p>
        </div>
      </div>

      {/* Portfolio Grid */}
      <main className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-lynx-gray/5 border border-lynx-gray/10 hover:border-lynx-gray/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-lynx-gray/20 backdrop-blur-sm text-xs font-space tracking-wider rounded-full border border-lynx-gray/30">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-space font-bold mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-white/10 backdrop-blur-sm text-xs rounded border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gallery;
