
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Luxury Brand Identity",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Tech Startup Visual System",
      category: "Design System",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Premium Web Experience",
      category: "Digital",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=600&fit=crop"
    },
    {
      id: 4,
      title: "Corporate Rebrand",
      category: "Strategy",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=600&fit=crop"
    }
  ];

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-space font-bold text-white mb-16 text-center">
          Selected Works
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group cursor-pointer relative overflow-hidden rounded-lg bg-lynx-gray/5 border border-lynx-gray/10"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-space font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-lynx-gray font-inter">
                    {project.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
