import Navbar from '@/components/Navbar';
import { useLanguage } from '../contexts/LanguageContext';

const Gallery = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: "Elite Business Services",
      category: "Corporate Branding",
      description: "Professional corporate identity featuring clean lines and sophisticated branding for premium business consultancy.",
      image: "/bb1.jpg",
      tags: ["Corporate", "Business", "Professional"]
    },
    {
      id: 2,
      title: "Luxury Automotive Brand",
      category: "Luxury Brand Identity",
      description: "High-end automotive branding with sleek design elements and premium visual identity for luxury vehicle dealership.",
      image: "/bb2.jpg",
      tags: ["Automotive", "Luxury", "Premium"]
    },
    {
      id: 3,
      title: "Modern Fashion Label",
      category: "Digital Experience",
      description: "Contemporary fashion brand identity with minimalist aesthetics and modern typography for trendy clothing line.",
      image: "/bb3.jpg",
      tags: ["Fashion", "Modern", "Trendy"]
    },
    {
      id: 4,
      title: "Artisan Food & Beverage",
      category: "Corporate Rebrand",
      description: "Authentic artisanal brand featuring warm colors and handcrafted elements for gourmet food products.",
      image: "/bb4.jpg",
      tags: ["Food", "Artisan", "Gourmet"]
    },
    {
      id: 5,
      title: "Tech Innovation Company",
      category: "Healthcare Innovation",
      description: "Cutting-edge technology brand with futuristic design elements and bold visual identity for innovation leader.",
      image: "/bb5.jpg",
      tags: ["Technology", "Innovation", "Future"]
    },
    {
      id: 6,
      title: "Premium Real Estate",
      category: "Real Estate Branding",
      description: "Sophisticated real estate brand with elegant design elements and luxury positioning for high-end properties.",
      image: "/bb6.jpg",
      tags: ["Real Estate", "Luxury", "Premium"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Portfolio Header */}
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-space font-bold text-white mb-8 leading-tight">
            Portfolio
            <span className="block text-lynx-gray">Showcase</span>
          </h1>
          <p className="text-lg text-lynx-gray max-w-3xl mx-auto leading-relaxed">
            Explore our curated collection of premium brand identities and innovative design solutions
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
                    fetchpriority="low"
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