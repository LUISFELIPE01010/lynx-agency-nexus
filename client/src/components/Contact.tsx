
import { MessageCircle, Mail, Instagram } from 'lucide-react';
import { AnimatedSection } from '@/hooks/useIntersectionObserver';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-[#95A0A2]/5 via-black to-black">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/banner3.png')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-[#95A0A2]/15 to-black/90"></div>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#95A0A2]/8 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#95A0A2]/15 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-l from-[#95A0A2]/10 to-transparent rounded-full blur-2xl"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <AnimatedSection animationType="fade-in">
          <span className="text-lynx-gray font-space text-sm tracking-widest uppercase mb-4 block">{t('contactLabel')}</span>
          <h2 className="text-4xl md:text-6xl font-space font-bold text-white mb-8 leading-tight">
            {t('contactTitle')}
            <span className="block text-lynx-gray">{t('contactTitle2')}</span>
            <span className="block">{t('contactTitle3')}</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-lynx-gray mb-16 font-inter max-w-3xl mx-auto leading-relaxed">
            {t('contactSubtitle')}
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
                {t('startConversation')}
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
                {t('followInstagram')}
              </span>
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 pt-16">
            <a 
              href="mailto:hello@lynxagency.com"
              className="text-center group cursor-pointer"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-lynx-gray/20 to-transparent rounded-full flex items-center justify-center mx-auto border border-white/20 group-hover:border-white/40 transition-all duration-300">
                <Mail className="w-5 h-5 text-white" />
              </div>
            </a>
            
            <a 
              href="https://wa.me/17329276563"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center group cursor-pointer"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-lynx-gray/20 to-transparent rounded-full flex items-center justify-center mx-auto border border-white/20 group-hover:border-white/40 transition-all duration-300">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
            </a>
            
            <a 
              href="https://instagram.com/lynx.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center group cursor-pointer"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-lynx-gray/20 to-transparent rounded-full flex items-center justify-center mx-auto border border-white/20 group-hover:border-white/40 transition-all duration-300">
                <Instagram className="w-5 h-5 text-white" />
              </div>
            </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
