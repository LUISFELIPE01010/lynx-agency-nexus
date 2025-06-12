import { Instagram, MessageCircle } from 'lucide-react';
import logoPng from '@/logop.png';
import { AnimatedSection } from '@/hooks/useIntersectionObserver';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 sm:py-16 px-6 bg-gradient-to-t from-black via-[#050505] to-black border-t border-lynx-gray/10 relative overflow-hidden">
      {/* Background texture para leveza */}
      <div className="absolute inset-0 bg-gradient-to-t from-lynx-gray/3 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lynx-gray/2 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-6 sm:mb-12">
          {/* Logo and Description */}
          <div className="space-y-4 sm:space-y-6 text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <img 
                src={logoPng} 
                alt="Lynx Agency" 
                className="w-8 h-8 sm:w-10 sm:h-10 opacity-80"
              />
              <span className="font-space font-bold text-xl sm:text-2xl text-white">LYNX</span>
            </div>

            <p className="text-lynx-gray font-inter leading-relaxed text-sm sm:text-base max-w-xs mx-auto md:mx-0">
              {t('footerDescription')}
            </p>

            <div className="flex items-center gap-4 justify-center md:justify-start">
              <a 
                href="https://instagram.com/lynx.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 bg-lynx-gray/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 border border-white/20"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-lynx-gray group-hover:text-black transition-colors duration-300" style={{ filter: 'drop-shadow(0 0 1px white)' }} />
              </a>
              <a 
                href="https://wa.me/17329276563"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 bg-lynx-gray/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 border border-white/20"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-lynx-gray group-hover:text-black transition-colors duration-300" style={{ filter: 'drop-shadow(0 0 1px white)' }} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h3 className="font-space font-semibold text-white mb-4 sm:mb-6 text-sm sm:text-base">{t('services')}</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[t('brandStrategy'), t('visualIdentity'), t('digitalExperience'), t('creativeDirection')].map((service) => (
                <li key={service} className="flex items-center gap-2 justify-center md:justify-start">
                  <span className="text-lynx-gray text-xs">•</span>
                  <a href="#" className="text-lynx-gray hover:text-white transition-colors duration-300 font-inter text-xs sm:text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="font-space font-semibold text-white mb-4 sm:mb-6 text-sm sm:text-base">{t('contact')}</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <span className="text-lynx-gray text-xs">•</span>
                <p className="text-lynx-gray font-inter text-xs sm:text-sm">
                  hello@lynxagency.com
                </p>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <span className="text-lynx-gray text-xs">•</span>
                <p className="text-lynx-gray font-inter text-xs sm:text-sm">
                  +1 (732) 927-6563
                </p>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <span className="text-lynx-gray text-xs">•</span>
                <p className="text-lynx-gray font-inter text-xs sm:text-sm">
                  {t('globalRemote')}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 sm:pt-8">
          <div className="flex justify-center items-center">
            <p className="text-lynx-gray text-xs sm:text-sm font-inter">
              © 2025 Lynx Agency. {t('allRightsReserved')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;