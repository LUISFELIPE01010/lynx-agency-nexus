
const Services = () => {
  const services = [
    {
      title: "Brand Strategy",
      description: "Comprehensive brand positioning and strategic direction for market leadership.",
      icon: "🎯"
    },
    {
      title: "Visual Identity",
      description: "Distinctive logos, typography, and visual systems that capture your essence.",
      icon: "✨"
    },
    {
      title: "Digital Experience",
      description: "User-centered web and digital platforms that drive engagement.",
      icon: "💻"
    },
    {
      title: "Creative Direction",
      description: "Art direction and creative oversight for all brand touchpoints.",
      icon: "🎨"
    }
  ];

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-space font-bold text-white mb-16 text-center">
          Our Expertise
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-lg bg-lynx-gray/5 border border-lynx-gray/10 hover:border-lynx-gray/30 transition-all duration-500 hover:transform hover:scale-105"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-space font-semibold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-lynx-gray font-inter leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
