import { AnimatedSection } from '@/hooks/useIntersectionObserver';

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
      {/* Pure black with sophisticated lighting */}
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/30 via-black to-gray-800/20"></div>
      {/* Dotted pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='15' cy='15' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      {/* Spotlight effects */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-64 bg-gradient-to-b from-lynx-gray/8 to-transparent blur-2xl"></div>
      <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-gradient-radial from-white/6 to-transparent rounded-full blur-3xl"></div>

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