import { createContext, useContext, useState } from 'react';

interface LanguageContextType {
  language: 'en' | 'pt';
  setLanguage: (lang: 'en' | 'pt') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Navigation
    home: 'Home',
    gallery: 'Gallery',
    
    // Hero Section
    heroSubtitle1: 'Redefining brand excellence through',
    heroSubtitle2: 'strategic innovation & design mastery',
    exploreWork: 'Explore Our Work',
    startProject: 'Start a Project',
    
    // About Section
    aboutLabel: 'About Lynx',
    aboutTitle: 'Crafting',
    aboutTitle2: 'Tomorrow\'s',
    aboutTitle3: 'Brands',
    aboutParagraph1: 'We are a collective of strategists, designers, and visionaries who believe that great brands are born from the intersection of purpose and possibility.',
    aboutParagraph2: 'Our approach transcends traditional boundaries, combining data-driven insights with intuitive creativity to forge brands that don\'t just exist in the market—they define it.',
    aboutParagraph3: 'Every project is a journey toward excellence, where your vision meets our expertise to create something extraordinary.',
    
    // Services Section
    servicesLabel: 'Services',
    servicesTitle: 'Comprehensive',
    servicesTitle2: 'Solutions',
    servicesSubtitle: 'From strategic foundation to creative execution, we deliver end-to-end solutions that transform brands and accelerate growth.',
    
    // Service Items
    brandStrategy: 'Brand Strategy',
    brandStrategyDesc: 'Comprehensive market analysis, positioning, and strategic roadmaps that establish your brand\'s foundation for long-term success.',
    brandStrategyFeature1: 'Market Research',
    brandStrategyFeature2: 'Brand Positioning',
    brandStrategyFeature3: 'Competitive Analysis',
    brandStrategyFeature4: 'Strategic Planning',
    
    visualIdentity: 'Visual Identity',
    visualIdentityDesc: 'Distinctive visual systems that capture your essence through logos, typography, color palettes, and comprehensive brand guidelines.',
    visualIdentityFeature1: 'Logo Design',
    visualIdentityFeature2: 'Typography',
    visualIdentityFeature3: 'Color Systems',
    visualIdentityFeature4: 'Brand Guidelines',
    
    digitalExperience: 'Digital Experience',
    digitalExperienceDesc: 'User-centered web platforms and digital experiences that engage audiences and drive meaningful interactions with your brand.',
    digitalExperienceFeature1: 'Web Design',
    digitalExperienceFeature2: 'UI/UX Design',
    digitalExperienceFeature3: 'Interactive Prototypes',
    digitalExperienceFeature4: 'Digital Platforms',
    
    creativeDirection: 'Creative Direction',
    creativeDirectionDesc: 'End-to-end creative oversight ensuring consistency and excellence across all brand touchpoints and communications.',
    creativeDirectionFeature1: 'Art Direction',
    creativeDirectionFeature2: 'Campaign Development',
    creativeDirectionFeature3: 'Content Strategy',
    creativeDirectionFeature4: 'Brand Consistency',
    
    motionGraphics: 'Motion Graphics',
    motionGraphicsDesc: 'Dynamic visual storytelling through animation, bringing your brand to life across digital and traditional media channels.',
    motionGraphicsFeature1: 'Brand Animation',
    motionGraphicsFeature2: 'Video Content',
    motionGraphicsFeature3: 'Motion Design',
    motionGraphicsFeature4: 'Interactive Media',
    
    brandConsulting: 'Brand Consulting',
    brandConsultingDesc: 'Strategic guidance and expert consultation to navigate complex brand challenges and maximize market opportunities.',
    brandConsultingFeature1: 'Brand Audits',
    brandConsultingFeature2: 'Growth Strategy',
    brandConsultingFeature3: 'Market Expansion',
    brandConsultingFeature4: 'Brand Evolution',
    
    // Projects Section
    portfolioLabel: 'Portfolio',
    portfolioTitle: 'Selected',
    portfolioTitle2: 'Works',
    portfolioSubtitle: 'Discover how we\'ve helped visionary brands transform their presence and accelerate their growth through strategic design.',
    
    // Project Categories
    techStartupBranding: 'Tech Startup Branding',
    luxuryBrandIdentity: 'Luxury Brand Identity',
    digitalExperienceProject: 'Digital Experience',
    corporateRebrand: 'Corporate Rebrand',
    healthcareInnovation: 'Healthcare Innovation',
    sustainabilityPlatform: 'Sustainability Platform',
    
    // Project Descriptions
    quantumDynamicsDesc: 'Complete brand identity and digital platform for a cutting-edge quantum computing company.',
    meridianLuxuryDesc: 'Sophisticated brand ecosystem for a premium lifestyle and hospitality group.',
    neuralNetworksDesc: 'Immersive web platform showcasing AI capabilities through interactive storytelling.',
    atlasVenturesDesc: 'Strategic repositioning and visual transformation for a global investment firm.',
    synapseHealthDesc: 'Brand identity and digital ecosystem for next-generation healthcare solutions.',
    carbonZeroDesc: 'Comprehensive brand strategy for a leading carbon offset technology platform.',
    
    // Contact Section
    contactLabel: 'Contact',
    contactTitle: 'Let\'s Create',
    contactTitle2: 'Something',
    contactTitle3: 'Extraordinary',
    contactSubtitle: 'Ready to transform your brand? Let\'s start a conversation about your vision and how we can bring it to life through strategic design and innovation.',
    startConversation: 'Start a Conversation',
    followInstagram: 'Follow on Instagram',
    email: 'Email',
    whatsapp: 'WhatsApp',
    instagram: 'Instagram',
    
    // Footer
    footerDescription: 'Redefining brand excellence through strategic innovation and design mastery.',
    quickLinks: 'Quick Links',
    services: 'Services',
    projects: 'Projects',
    contact: 'Contact',
    followUs: 'Follow Us',
    allRightsReserved: 'All rights reserved.'
  },
  pt: {
    // Navigation
    home: 'Início',
    gallery: 'Galeria',
    
    // Hero Section
    heroSubtitle1: 'Redefinindo a excelência da marca através de',
    heroSubtitle2: 'inovação estratégica e maestria em design',
    exploreWork: 'Explore Nosso Trabalho',
    startProject: 'Iniciar um Projeto',
    
    // About Section
    aboutLabel: 'Sobre a Lynx',
    aboutTitle: 'Criando',
    aboutTitle2: 'as Marcas',
    aboutTitle3: 'do Amanhã',
    aboutParagraph1: 'Somos um coletivo de estrategistas, designers e visionários que acreditam que grandes marcas nascem da interseção entre propósito e possibilidade.',
    aboutParagraph2: 'Nossa abordagem transcende fronteiras tradicionais, combinando insights baseados em dados com criatividade intuitiva para forjar marcas que não apenas existem no mercado—elas o definem.',
    aboutParagraph3: 'Cada projeto é uma jornada em direção à excelência, onde sua visão encontra nossa expertise para criar algo extraordinário.',
    
    // Services Section
    servicesLabel: 'Serviços',
    servicesTitle: 'Soluções',
    servicesTitle2: 'Abrangentes',
    servicesSubtitle: 'Desde a base estratégica até a execução criativa, entregamos soluções completas que transformam marcas e aceleram o crescimento.',
    
    // Service Items
    brandStrategy: 'Estratégia de Marca',
    brandStrategyDesc: 'Análise abrangente de mercado, posicionamento e roteiros estratégicos que estabelecem a base da sua marca para o sucesso a longo prazo.',
    brandStrategyFeature1: 'Pesquisa de Mercado',
    brandStrategyFeature2: 'Posicionamento de Marca',
    brandStrategyFeature3: 'Análise Competitiva',
    brandStrategyFeature4: 'Planejamento Estratégico',
    
    visualIdentity: 'Identidade Visual',
    visualIdentityDesc: 'Sistemas visuais distintivos que capturam sua essência através de logos, tipografia, paletas de cores e diretrizes abrangentes de marca.',
    visualIdentityFeature1: 'Design de Logo',
    visualIdentityFeature2: 'Tipografia',
    visualIdentityFeature3: 'Sistemas de Cores',
    visualIdentityFeature4: 'Manual da Marca',
    
    digitalExperience: 'Experiência Digital',
    digitalExperienceDesc: 'Plataformas web centradas no usuário e experiências digitais que envolvem audiências e geram interações significativas com sua marca.',
    digitalExperienceFeature1: 'Web Design',
    digitalExperienceFeature2: 'UI/UX Design',
    digitalExperienceFeature3: 'Protótipos Interativos',
    digitalExperienceFeature4: 'Plataformas Digitais',
    
    creativeDirection: 'Direção Criativa',
    creativeDirectionDesc: 'Supervisão criativa completa garantindo consistência e excelência em todos os pontos de contato e comunicações da marca.',
    creativeDirectionFeature1: 'Direção de Arte',
    creativeDirectionFeature2: 'Desenvolvimento de Campanhas',
    creativeDirectionFeature3: 'Estratégia de Conteúdo',
    creativeDirectionFeature4: 'Consistência de Marca',
    
    motionGraphics: 'Motion Graphics',
    motionGraphicsDesc: 'Narrativa visual dinâmica através de animação, dando vida à sua marca em canais de mídia digital e tradicional.',
    motionGraphicsFeature1: 'Animação de Marca',
    motionGraphicsFeature2: 'Conteúdo em Vídeo',
    motionGraphicsFeature3: 'Design de Movimento',
    motionGraphicsFeature4: 'Mídia Interativa',
    
    brandConsulting: 'Consultoria de Marca',
    brandConsultingDesc: 'Orientação estratégica e consultoria especializada para navegar desafios complexos de marca e maximizar oportunidades de mercado.',
    brandConsultingFeature1: 'Auditoria de Marca',
    brandConsultingFeature2: 'Estratégia de Crescimento',
    brandConsultingFeature3: 'Expansão de Mercado',
    brandConsultingFeature4: 'Evolução da Marca',
    
    // Projects Section
    portfolioLabel: 'Portfólio',
    portfolioTitle: 'Trabalhos',
    portfolioTitle2: 'Selecionados',
    portfolioSubtitle: 'Descubra como ajudamos marcas visionárias a transformar sua presença e acelerar seu crescimento através de design estratégico.',
    
    // Project Categories
    techStartupBranding: 'Branding para Startup de Tech',
    luxuryBrandIdentity: 'Identidade de Marca de Luxo',
    digitalExperienceProject: 'Experiência Digital',
    corporateRebrand: 'Rebranding Corporativo',
    healthcareInnovation: 'Inovação em Saúde',
    sustainabilityPlatform: 'Plataforma de Sustentabilidade',
    
    // Project Descriptions
    quantumDynamicsDesc: 'Identidade de marca completa e plataforma digital para uma empresa de computação quântica de ponta.',
    meridianLuxuryDesc: 'Ecossistema de marca sofisticado para um grupo premium de estilo de vida e hospitalidade.',
    neuralNetworksDesc: 'Plataforma web imersiva mostrando capacidades de IA através de narrativa interativa.',
    atlasVenturesDesc: 'Reposicionamento estratégico e transformação visual para uma empresa global de investimentos.',
    synapseHealthDesc: 'Identidade de marca e ecossistema digital para soluções de saúde de próxima geração.',
    carbonZeroDesc: 'Estratégia de marca abrangente para uma plataforma líder de tecnologia de compensação de carbono.',
    
    // Contact Section
    contactLabel: 'Contato',
    contactTitle: 'Vamos Criar',
    contactTitle2: 'Algo',
    contactTitle3: 'Extraordinário',
    contactSubtitle: 'Pronto para transformar sua marca? Vamos começar uma conversa sobre sua visão e como podemos dar vida a ela através de design estratégico e inovação.',
    startConversation: 'Iniciar uma Conversa',
    followInstagram: 'Seguir no Instagram',
    email: 'Email',
    whatsapp: 'WhatsApp',
    instagram: 'Instagram',
    
    // Footer
    footerDescription: 'Redefinindo a excelência da marca através de inovação estratégica e maestria em design.',
    quickLinks: 'Links Rápidos',
    services: 'Serviços',
    projects: 'Projetos',
    contact: 'Contato',
    followUs: 'Siga-nos',
    allRightsReserved: 'Todos os direitos reservados.'
  }
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<'en' | 'pt'>('pt');

  const t = (key: string) => translations[language][key as keyof typeof translations.en] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};