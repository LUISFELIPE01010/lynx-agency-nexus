
const SocialProof = () => {
  const testimonials = [
    {
      quote: "Lynx transformed our brand completely. Their attention to detail and strategic thinking is unmatched.",
      author: "Sarah Chen",
      company: "TechVision Corp"
    },
    {
      quote: "Working with Lynx was a game-changer. They understood our vision and brought it to life perfectly.",
      author: "Michael Rodriguez",
      company: "Luxury Dynamics"
    },
    {
      quote: "The team at Lynx doesn't just design - they solve business problems through exceptional creativity.",
      author: "Emma Thompson",
      company: "Global Innovations"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-lynx-gray/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-space font-bold text-white mb-16">
          Trusted by Visionaries
        </h2>
        
        <div className="space-y-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="max-w-3xl mx-auto">
              <blockquote className="text-xl md:text-2xl font-inter text-lynx-gray italic leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-white font-space">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-lynx-gray text-sm">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
