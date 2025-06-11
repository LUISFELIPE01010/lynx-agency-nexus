import Navbar from '../components/Navbar';

const Gallery = () => {
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
      title: "Creative Design Studio",
      category: "Sustainability Platform",
      description: "Dynamic creative studio branding with vibrant colors and artistic elements showcasing design excellence.",
      image: "/bb6.jpg",
      tags: ["Creative", "Design", "Studio"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white" style={{ marginTop: 0, paddingTop: 0 }}>
      {/* Use original navbar */}
      <Navbar />

      {/* Gallery Content */}
      <div className="pt-20 px-6 py-12" style={{ marginTop: 0 }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-space font-bold text-white mb-4">
              Project Gallery
            </h2>
            <p className="text-xl text-lynx-gray font-inter">
              Explore our portfolio of brand transformations
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="group relative aspect-video bg-lynx-gray/10 rounded-lg overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 text-xs font-space text-lynx-gray bg-white/10 rounded-full backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-white font-space font-semibold text-lg mb-1">{project.title}</h3>
                  <p className="text-lynx-gray font-inter text-sm">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;