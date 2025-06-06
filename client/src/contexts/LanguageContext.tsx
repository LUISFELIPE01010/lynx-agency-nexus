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
    brandStrategy: 'Brand Positioning',
    brandStrategyDesc: 'Strategic market positioning and brand architecture that establishes your unique value proposition and competitive advantage.',
    brandStrategyFeature1: 'Market Analysis',
    brandStrategyFeature2: 'Brand Positioning',
    brandStrategyFeature3: 'Value Proposition',
    brandStrategyFeature4: 'Brand Architecture',
    
    visualIdentity: 'Branding Planning',
    visualIdentityDesc: 'Comprehensive brand strategy development including visual identity, messaging framework, and brand guidelines for consistent market presence.',
    visualIdentityFeature1: 'Visual Identity',
    visualIdentityFeature2: 'Brand Guidelines',
    visualIdentityFeature3: 'Messaging Framework',
    visualIdentityFeature4: 'Brand Strategy',
    
    digitalExperience: 'Web Development',
    digitalExperienceDesc: 'Custom web development solutions that combine cutting-edge technology with intuitive design to create powerful digital experiences.',
    digitalExperienceFeature1: 'Custom Development',
    digitalExperienceFeature2: 'Responsive Design',
    digitalExperienceFeature3: 'E-commerce Solutions',
    digitalExperienceFeature4: 'Performance Optimization',
    
    creativeDirection: 'Paid Traffic',
    creativeDirectionDesc: 'Strategic paid advertising campaigns across digital platforms to drive targeted traffic, increase conversions, and maximize ROI.',
    creativeDirectionFeature1: 'Google Ads',
    creativeDirectionFeature2: 'Social Media Ads',
    creativeDirectionFeature3: 'Campaign Optimization',
    creativeDirectionFeature4: 'Analytics & Reporting',
    
    motionGraphics: 'Business Automation',
    motionGraphicsDesc: 'Streamlined business processes through intelligent automation solutions that increase efficiency and reduce operational overhead.',
    motionGraphicsFeature1: 'Process Automation',
    motionGraphicsFeature2: 'CRM Integration',
    motionGraphicsFeature3: 'Workflow Optimization',
    motionGraphicsFeature4: 'Data Analytics',
    
    brandConsulting: 'Strategic Consulting',
    brandConsultingDesc: 'Expert consultation and strategic guidance to accelerate business growth through digital transformation and market optimization.',
    brandConsultingFeature1: 'Business Strategy',
    brandConsultingFeature2: 'Digital Transformation',
    brandConsultingFeature3: 'Growth Planning',
    brandConsultingFeature4: 'Market Optimization',
    
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
    
    // Testimonials Section
    testimonialsLabel: 'Testimonials',
    testimonialsTitle: 'Trusted By',
    testimonialsTitle2: 'Visionaries',
    testimonialsSubtitle: 'Hear from the leaders who\'ve transformed their brands with Lynx.',
    
    // Testimonial Professions
    ecommerceOwner: 'E-commerce Owner',
    lawyer: 'Lawyer',
    restaurantOwner: 'Restaurant Owner',
    clinicOwner: 'Clinic Owner',
    
    // Footer
    footerDescription: 'Redefining brand excellence through strategic innovation and design mastery.',
    quickLinks: 'Quick Links',
    services: 'Services',
    projects: 'Projects',
    contact: 'Contact',
    followUs: 'Follow Us',
    allRightsReserved: 'All rights reserved.',
    
    // Additional project text
    viewProject: 'View Project',
    viewAllProjects: 'View All Projects'
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
    brandStrategy: 'Posicionamento de Marca',
    brandStrategyDesc: 'Posicionamento estratégico de mercado e arquitetura de marca que estabelece sua proposta de valor única e vantagem competitiva.',
    brandStrategyFeature1: 'Análise de Mercado',
    brandStrategyFeature2: 'Posicionamento de Marca',
    brandStrategyFeature3: 'Proposta de Valor',
    brandStrategyFeature4: 'Arquitetura de Marca',
    
    visualIdentity: 'Planejamento de Branding',
    visualIdentityDesc: 'Desenvolvimento abrangente de estratégia de marca incluindo identidade visual, framework de mensagens e diretrizes para presença consistente no mercado.',
    visualIdentityFeature1: 'Identidade Visual',
    visualIdentityFeature2: 'Manual da Marca',
    visualIdentityFeature3: 'Framework de Mensagens',
    visualIdentityFeature4: 'Estratégia de Marca',
    
    digitalExperience: 'Desenvolvimento Web',
    digitalExperienceDesc: 'Soluções personalizadas de desenvolvimento web que combinam tecnologia de ponta com design intuitivo para criar experiências digitais poderosas.',
    digitalExperienceFeature1: 'Desenvolvimento Personalizado',
    digitalExperienceFeature2: 'Design Responsivo',
    digitalExperienceFeature3: 'Soluções E-commerce',
    digitalExperienceFeature4: 'Otimização de Performance',
    
    creativeDirection: 'Tráfego Pago',
    creativeDirectionDesc: 'Campanhas estratégicas de publicidade paga em plataformas digitais para gerar tráfego direcionado, aumentar conversões e maximizar ROI.',
    creativeDirectionFeature1: 'Google Ads',
    creativeDirectionFeature2: 'Anúncios em Redes Sociais',
    creativeDirectionFeature3: 'Otimização de Campanhas',
    creativeDirectionFeature4: 'Analytics e Relatórios',
    
    motionGraphics: 'Automação do Negócio',
    motionGraphicsDesc: 'Processos empresariais otimizados através de soluções inteligentes de automação que aumentam a eficiência e reduzem custos operacionais.',
    motionGraphicsFeature1: 'Automação de Processos',
    motionGraphicsFeature2: 'Integração CRM',
    motionGraphicsFeature3: 'Otimização de Fluxo',
    motionGraphicsFeature4: 'Análise de Dados',
    
    brandConsulting: 'Consultoria Estratégica',
    brandConsultingDesc: 'Consultoria especializada e orientação estratégica para acelerar o crescimento empresarial através de transformação digital e otimização de mercado.',
    brandConsultingFeature1: 'Estratégia Empresarial',
    brandConsultingFeature2: 'Transformação Digital',
    brandConsultingFeature3: 'Planejamento de Crescimento',
    brandConsultingFeature4: 'Otimização de Mercado',
    
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
    
    // Testimonials Section
    testimonialsLabel: 'Depoimentos',
    testimonialsTitle: 'Confiado por',
    testimonialsTitle2: 'Visionários',
    testimonialsSubtitle: 'Ouça dos líderes que transformaram suas marcas com a Lynx.',
    
    // Testimonial Professions
    ecommerceOwner: 'Dona de E-commerce',
    lawyer: 'Advogado',
    restaurantOwner: 'Dona de Restaurante',
    clinicOwner: 'Dono de Clínica',
    
    // Footer
    footerDescription: 'Redefinindo a excelência da marca através de inovação estratégica e maestria em design.',
    quickLinks: 'Links Rápidos',
    services: 'Serviços',
    projects: 'Projetos',
    contact: 'Contato',
    followUs: 'Siga-nos',
    allRightsReserved: 'Todos os direitos reservados.',
    
    // Additional project text
    viewProject: 'Ver Projeto',
    viewAllProjects: 'Ver Todos os Projetos'
  }
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<'en' | 'pt'>('en');

  const t = (key: string) => translations[language][key as keyof typeof translations.en] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};