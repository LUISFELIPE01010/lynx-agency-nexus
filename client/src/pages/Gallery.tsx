
import Navbar from '@/components/Navbar';
import { useLanguage } from '../contexts/LanguageContext';

const Gallery = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: t('eliteBusinessServices'),
      category: t('corporateRebrand'),
      description: t('eliteBusinessDesc'),
      image: "/bb1.jpg",
      tags: [t('corporate'), t('business'), t('professional')]
    },
    {
      id: 2,
      title: t('luxuryAutomotiveBrand'),
      category: t('luxuryBrandIdentity'),
      description: t('luxuryAutomotiveDesc'),
      image: "/bb2.jpg",
      tags: [t('automotive'), t('luxury'), t('premium')]
    },
    {
      id: 3,
      title: t('modernFashionLabel'),
      category: t('digitalExperienceProject'),
      description: t('modernFashionDesc'),
      image: "/bb3.jpg",
      tags: [t('fashion'), t('modern'), t('trendy')]
    },
    {
      id: 4,
      title: t('artisanFoodBeverage'),
      category: t('corporateRebrand'),
      description: t('artisanFoodDesc'),
      image: "/bb4.jpg",
      tags: [t('food'), t('artisan'), t('gourmet')]
    },
    {
      id: 5,
      title: t('techInnovationCompany'),
      category: t('healthcareInnovation'),
      description: t('techInnovationDesc'),
      image: "/bb5.jpg",
      tags: [t('technology'), t('innovation'), t('future')]
    },
    {
      id: 6,
      title: t('premiumRealEstate'),
      category: t('realEstateBranding'),
      description: t('premiumRealEstateDesc'),
      image: "/bb6.jpg",
      tags: [t('realEstate'), t('luxury'), t('premium')]
    },
    {
      id: 7,
      title: t('modernBarbershop'),
      category: t('barbershopBranding'),
      description: t('modernBarbershopDesc'),
      image: "/nova1.png",
      tags: ["Barbershop", "Modern", "Grooming"]
    },
    {
      id: 8,
      title: t('constructionCompany'),
      category: t('constructionBranding'),
      description: t('constructionCompanyDesc'),
      image: "/nova2.png",
      tags: ["Construction", "Industrial", "Professional"]
    },
    {
      id: 9,
      title: t('luxuryJewelry'),
      category: t('jewelryBranding'),
      description: t('luxuryJewelryDesc'),
      image: "/nova3.png",
      tags: ["Jewelry", "Luxury", "Elegant"]
    },
    {
      id: 10,
      title: t('sportsWear'),
      category: t('sportsbranding'),
      description: t('sportsWearDesc'),
      image: "/nova4.png",
      tags: ["Sports", "Athletic", "Performance"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Portfolio Header */}
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-space font-bold text-white mb-8 leading-tight">
            {t('portfolioLabel')}
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
