import { Instagram, MessageCircle } from 'lucide-react';
import logoPng from '@/logop.png';
import { AnimatedSection } from '@/hooks/useIntersectionObserver';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-16 px-6 bg-gradient-to-t from-gray-900 via-black to-gray-900 border-t border-lynx-gray/10 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-t from-lynx-gray/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src={logoPng} 
                alt="Lynx Agency" 
                className="w-10 h-10 opacity-80"
              />
              <span className="font-space font-bold text-2xl text-white">LYNX</span>
            </div>

            <p className="text-lynx-gray font-inter leading-relaxed max-w-xs">
              {t('footerDescription')}
            </p>

            <div className="flex items-center gap-4">
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
          <div>
            <h3 className="font-space font-semibold text-white mb-6">{t('services')}</h3>
            <ul className="space-y-3">
              {[t('brandStrategy'), t('visualIdentity'), t('digitalExperience'), t('creativeDirection')].map((service) => (
                <li key={service} className="flex items-center gap-2">
                  <span className="text-lynx-gray text-xs">•</span>
                  <a href="#" className="text-lynx-gray hover:text-white transition-colors duration-300 font-inter text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-space font-semibold text-white mb-6">{t('contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-lynx-gray text-xs">•</span>
                <p className="text-lynx-gray font-inter text-sm">
                  hello@lynxagency.com
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lynx-gray text-xs">•</span>
                <p className="text-lynx-gray font-inter text-sm">
                  +1 (732) 927-6563
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lynx-gray text-xs">•</span>
                <p className="text-lynx-gray font-inter text-sm">
                  {t('globalRemote')}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-lynx-gray/10">
          <div className="flex justify-center items-center">
            <p className="text-lynx-gray text-sm font-inter">
              © 2025 Lynx Agency. {t('allRightsReserved')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;