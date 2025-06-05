const Stats = () => {
  const stats = [
    {
      number: "150+",
      label: "Projects Delivered",
      description: "Successful brand transformations across industries"
    },
    {
      number: "50+",
      label: "Global Clients",
      description: "Trusted by companies in 25+ countries"
    },
    {
      number: "8+",
      label: "Years of Excellence",
      description: "Consistent delivery of exceptional results"
    },
    {
      number: "95%",
      label: "Client Retention",
      description: "Long-term partnerships built on trust"
    }
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background image with dark overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/banner3.png')" }}
      ></div>
      <div className="absolute inset-0 bg-black/96"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lynx-gray/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 fade-in">
          <span className="text-lynx-gray font-space text-sm tracking-widest uppercase mb-4 block">Impact</span>
          <h2 className="text-5xl md:text-7xl font-space font-bold text-white mb-8 leading-tight">
            Numbers That
            <span className="block text-lynx-gray">Speak</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <div className="text-6xl md:text-7xl font-space font-bold text-white mb-4 group-hover:text-lynx-gray transition-colors duration-500">
                  {stat.number}
                </div>

                <div className="w-16 h-px bg-gradient-to-r from-lynx-gray to-transparent mx-auto mb-4"></div>

                <h3 className="text-xl font-space font-semibold text-lynx-gray mb-2 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </h3>

                <p className="text-lynx-gray font-inter text-sm leading-relaxed max-w-xs mx-auto">
                  {stat.description}
                </p>

                {/* Hover effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-lynx-gray/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;