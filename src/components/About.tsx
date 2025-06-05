
const About = () => {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-space font-bold text-white mb-8">
            Redefining Brand Excellence
          </h2>
          <p className="text-lg text-lynx-gray leading-relaxed font-inter">
            At Lynx, we craft exceptional brand experiences that resonate with your audience and drive meaningful connections. Our approach combines strategic thinking with cutting-edge design to create brands that stand the test of time.
          </p>
          <p className="text-lg text-lynx-gray leading-relaxed font-inter">
            We believe in the power of minimalism, where every element serves a purpose and every detail matters. Your brand deserves nothing less than perfection.
          </p>
        </div>
        
        <div className="relative">
          <div className="aspect-square bg-gradient-to-br from-lynx-gray/20 to-transparent rounded-lg backdrop-blur-sm border border-lynx-gray/10 flex items-center justify-center">
            <img 
              src="/lovable-uploads/c49b6884-7702-4b51-bbd3-43e415faffff.png" 
              alt="Lynx Agency Logo" 
              className="w-32 h-32 object-contain opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
