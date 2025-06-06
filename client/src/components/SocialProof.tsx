import { AnimatedSection } from '@/hooks/useIntersectionObserver';
import { useLanguage } from '../contexts/LanguageContext';

const SocialProof = () => {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      quote: t('testimonial1'),
      author: "Sarah Chen",
      position: "ecommerceOwner",
      company: "Fashion Store Online",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: t('testimonial2'),
      author: "Michael Rodriguez",
      position: "lawyer",
      company: "Rodriguez Advocacia",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: t('testimonial3'),
      author: "Emma Thompson",
      position: "restaurantOwner",
      company: "Bistrô Gourmet",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: t('testimonial4'),
      author: "David Park",
      position: "clinicOwner",
      company: "Clínica Wellness",
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
          <span className="text-lynx-gray font-space text-sm tracking-widest uppercase mb-4 block">{t('testimonialsLabel')}</span>
          <h2 className="text-5xl md:text-7xl font-space font-bold text-white mb-8 leading-tight">
            {t('testimonialsTitle')}
            <span className="block text-lynx-gray">{t('testimonialsTitle2')}</span>
          </h2>
          <p className="text-xl text-lynx-gray max-w-3xl mx-auto font-inter leading-relaxed">
            {t('testimonialsSubtitle')}
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
                      {t(testimonial.position)} at {testimonial.company}
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