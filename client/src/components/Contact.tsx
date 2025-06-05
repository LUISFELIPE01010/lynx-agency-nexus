
import { MessageCircle, Mail, Instagram } from 'lucide-react';
import { AnimatedSection } from '@/hooks/useIntersectionObserver';

const Contact = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Rich textured background */}
      <div className="absolute inset-0 bg-gradient-to-bl from-gray-800 via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-transparent to-gray-800/50"></div>
      {/* Wave pattern overlay */}
      <div className="absolute inset-0 opacity-[0.025]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 40c20-20 60-20 80 0v40H0z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>
      {/* Dramatic lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-lynx-gray/15 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-radial from-white/10 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-radial from-lynx-gray/8 to-transparent rounded-full blur-xl"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <AnimatedSection animationType="fade-in">
          <span className="text-lynx-gray font-space text-sm tracking-widest uppercase mb-4 block">Contact</span>
          <h2 className="text-5xl md:text-8xl font-space font-bold text-white mb-8 leading-tight">
            Let's Create
            <span className="block text-lynx-gray">Something</span>
            <span className="block">Extraordinary</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-lynx-gray mb-16 font-inter max-w-3xl mx-auto leading-relaxed">
            Ready to transform your brand? Let's start a conversation about your vision and how we can bring it to life through strategic design and innovation.
          </p>
        </AnimatedSection>
        
        <AnimatedSection animationType="scale-in" delay={1}>
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="https://wa.me/17329276563"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-white text-black font-space font-semibold rounded-lg hover:bg-lynx-gray transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <MessageCircle className="w-5 h-5" />
                Start a Conversation
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white to-lynx-gray opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
            
            <a 
              href="https://instagram.com/lynx.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 border border-lynx-gray text-lynx-gray font-space font-semibold rounded-lg hover:border-white hover:text-white transition-all duration-500 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Instagram className="w-5 h-5" />
                Follow on Instagram
              </span>
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 pt-16">
            <a 
              href="mailto:hello@lynxagency.com"
              className="text-center group cursor-pointer"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-lynx-gray/20 to-transparent rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20 group-hover:border-white/40 transition-all duration-300">
                <Mail className="w-5 h-5 text-black" style={{ filter: 'drop-shadow(0 0 2px white)' }} />
              </div>
              <h3 className="font-space font-semibold text-white mb-2 group-hover:text-lynx-gray transition-colors duration-300">Email</h3>
              <p className="text-lynx-gray font-inter text-sm">hello@lynxagency.com</p>
            </a>
            
            <a 
              href="https://wa.me/17329276563"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center group cursor-pointer"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-lynx-gray/20 to-transparent rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20 group-hover:border-white/40 transition-all duration-300">
                <MessageCircle className="w-5 h-5 text-black" style={{ filter: 'drop-shadow(0 0 2px white)' }} />
              </div>
              <h3 className="font-space font-semibold text-white mb-2 group-hover:text-lynx-gray transition-colors duration-300">WhatsApp</h3>
              <p className="text-lynx-gray font-inter text-sm">+1 (732) 927-6563</p>
            </a>
            
            <a 
              href="https://instagram.com/lynx.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center group cursor-pointer"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-lynx-gray/20 to-transparent rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20 group-hover:border-white/40 transition-all duration-300">
                <Instagram className="w-5 h-5 text-black" style={{ filter: 'drop-shadow(0 0 2px white)' }} />
              </div>
              <h3 className="font-space font-semibold text-white mb-2 group-hover:text-lynx-gray transition-colors duration-300">Instagram</h3>
              <p className="text-lynx-gray font-inter text-sm">@lynx.com.br</p>
            </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
