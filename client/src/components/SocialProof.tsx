import { AnimatedSection } from '@/hooks/useIntersectionObserver';

const SocialProof = () => {
  const testimonials = [
    {
      quote: "Lynx didn't just redesign our brand—they completely transformed how we think about our market position. The strategic insights were game-changing.",
      author: "Sarah Chen",
      position: "CEO",
      company: "TechVision Corp",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "The level of creativity and strategic thinking exceeded all expectations. Lynx delivered a brand that truly represents our vision for the future.",
      author: "Michael Rodriguez",
      position: "Founder",
      company: "Luxury Dynamics",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "Working with Lynx was transformative. They understand that great design isn't just beautiful—it's strategic, purposeful, and results-driven.",
      author: "Emma Thompson",
      position: "CMO",
      company: "Global Innovations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "From concept to execution, Lynx delivered exceptional results. Their attention to detail and commitment to excellence set them apart in the industry.",
      author: "David Park",
      position: "Creative Director",
      company: "Digital Ventures",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const clients = [
    "TechVision", "Luxury Dynamics", "Global Innovations", "Urban Studios", 
    "Quantum Labs", "Meridian Group", "Atlas Ventures", "Neural Networks"
  ];

  return (
    <section className="pt-16 pb-16 px-6 relative overflow-hidden bg-black">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/banner2.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/10 to-black/90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/8 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 fade-in">
          <span className="text-lynx-gray font-space text-sm tracking-widest uppercase mb-4 block">Testimonials</span>
          <h2 className="text-5xl md:text-7xl font-space font-bold text-white mb-8 leading-tight">
            Trusted By
            <span className="block text-lynx-gray">Visionaries</span>
          </h2>
          <p className="text-xl text-lynx-gray max-w-3xl mx-auto font-inter leading-relaxed">
            Hear from the leaders who've transformed their brands with Lynx.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-lynx-gray/5 to-transparent border border-lynx-gray/10 hover:border-lynx-gray/30 transition-all duration-300 scale-in backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lynx-gray text-xs">•</span>
                      <div className="font-space font-semibold text-white text-lg">
                        {testimonial.author}
                      </div>
                    </div>
                    <div className="text-lynx-gray font-inter text-sm">
                      {testimonial.position} at {testimonial.company}
                    </div>
                  </div>
                </div>

                <blockquote className="text-lg font-inter text-lynx-gray leading-relaxed group-hover:text-white transition-colors duration-300">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default SocialProof;