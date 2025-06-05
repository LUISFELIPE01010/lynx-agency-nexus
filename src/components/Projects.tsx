
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Quantum Dynamics",
      category: "Tech Startup Branding",
      description: "Complete brand identity and digital platform for a cutting-edge quantum computing company.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=800&fit=crop",
      tags: ["Branding", "Web Design", "Tech"]
    },
    {
      id: 2,
      title: "Meridian Luxury",
      category: "Luxury Brand Identity",
      description: "Sophisticated brand ecosystem for a premium lifestyle and hospitality group.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=800&fit=crop",
      tags: ["Luxury", "Identity", "Hospitality"]
    },
    {
      id: 3,
      title: "Neural Networks Co.",
      category: "Digital Experience",
      description: "Immersive web platform showcasing AI capabilities through interactive storytelling.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=800&fit=crop",
      tags: ["Digital", "AI", "Interactive"]
    },
    {
      id: 4,
      title: "Atlas Ventures",
      category: "Corporate Rebrand",
      description: "Strategic repositioning and visual transformation for a global investment firm.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=800&fit=crop",
      tags: ["Strategy", "Finance", "Corporate"]
    },
    {
      id: 5,
      title: "Synapse Health",
      category: "Healthcare Innovation",
      description: "Brand identity and digital ecosystem for next-generation healthcare solutions.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=800&fit=crop",
      tags: ["Healthcare", "Innovation", "Digital"]
    },
    {
      id: 6,
      title: "Carbon Zero",
      category: "Sustainability Platform",
      description: "Comprehensive brand strategy for a leading carbon offset technology platform.",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=800&h=800&fit=crop",
      tags: ["Sustainability", "Platform", "Tech"]
    }
  ];

  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 fade-in">
          <span className="text-lynx-gray font-space text-sm tracking-widest uppercase mb-4 block">Portfolio</span>
          <h2 className="text-5xl md:text-7xl font-space font-bold text-white mb-8 leading-tight">
            Selected
            <span className="block text-lynx-gray">Works</span>
          </h2>
          <p className="text-xl text-lynx-gray max-w-3xl mx-auto font-inter leading-relaxed">
            Discover how we've helped visionary brands transform their presence and accelerate their growth through strategic design.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-lynx-gray/5 border border-lynx-gray/10 hover:border-lynx-gray/30 transition-all duration-700 scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
          ))}
        </div>
        
        <div className="text-center mt-16 fade-in">
          <button className="group relative px-8 py-4 border border-lynx-gray text-lynx-gray font-space font-semibold rounded-lg hover:border-white hover:text-white transition-all duration-500 hover:scale-105">
            <span className="relative z-10">View All Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
