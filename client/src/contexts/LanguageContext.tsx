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
    eliteBusinessDesc: 'Comprehensive brand strategy and digital transformation for agricultural services, enhancing their market position and operational efficiency.',
    luxuryAutomotiveDesc: 'Premium brand identity and showroom experience for a luxury automotive dealership, elevating customer engagement and brand prestige.',
    modernFashionDesc: 'Innovative architectural branding project featuring modern residential design concepts and visual identity systems.',
    artisanFoodDesc: 'Complete brand development for premium sauce company, including packaging design and market positioning strategy.',
    premiumRealEstateDesc: 'Luxury real estate brand transformation focusing on high-end property marketing and client experience enhancement.',
    modernBarbershopDesc: 'Contemporary barbershop rebrand featuring modern aesthetics and elevated customer service experience.',
    sustainabilityPlatformDesc: 'Environmental consulting brand focused on sustainable business practices and green technology solutions.',
    healthcareInnovationDesc: 'Medical technology brand development emphasizing innovation in patient care and healthcare solutions.',
    corporateServicesDesc: 'Professional services rebrand targeting corporate clients with emphasis on reliability and expertise.',
    
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
    viewAllProjects: 'View All Projects',
    
    // Process Section
    ourProcess: 'Our Process',
    fromVision: 'From Vision',
    toReality: 'To Reality',
    processSubtitle: 'Our proven methodology ensures every project delivers exceptional results through strategic thinking and meticulous execution.',
    
    // Process Steps
    discoveryStrategy: 'Discovery & Strategy',
    discoveryDesc: 'Deep dive into your brand, market, and objectives to establish a solid strategic foundation.',
    discoveryDetail1: 'Brand audit',
    discoveryDetail2: 'Market research',
    discoveryDetail3: 'Stakeholder interviews',
    discoveryDetail4: 'Strategic framework',
    
    creativeDevelopment: 'Creative Development',
    creativeDevDesc: 'Conceptual exploration and creative development aligned with your strategic goals.',
    creativeDetail1: 'Creative concepts',
    creativeDetail2: 'Design exploration',
    creativeDetail3: 'Prototype development',
    creativeDetail4: 'Iterative refinement',
    
    designExecution: 'Design & Execution',
    designExecDesc: 'Meticulous execution of approved concepts with attention to every detail.',
    designDetail1: 'Visual design',
    designDetail2: 'Technical development',
    designDetail3: 'Quality assurance',
    designDetail4: 'Performance optimization',
    
    launchGrowth: 'Launch & Growth',
    launchDesc: 'Strategic launch planning and ongoing optimization for sustained success.',
    launchDetail1: 'Launch strategy',
    launchDetail2: 'Performance monitoring',
    launchDetail3: 'Continuous optimization',
    launchDetail4: 'Growth planning',
    
    // Brand Importance Section
    whyBrandMatters: 'Why Your Brand Matters',
    brandPower: 'The Power of',
    unleashed: 'Strategic Branding',
    brandPowerSubtitle: 'Discover why professional branding is essential for business success in today\'s competitive landscape',
    
    brandRecognition: 'Brand Recognition',
    brandRecognitionDesc: 'A strong brand creates instant recognition in the marketplace, making your business memorable and easily identifiable among competitors.',
    
    trustCredibility: 'Trust & Credibility',
    trustCredibilityDesc: 'Professional branding builds trust with customers, establishing credibility that converts prospects into loyal clients who believe in your value.',
    
    businessGrowth: 'Business Growth',
    businessGrowthDesc: 'Effective branding drives business growth by creating emotional connections, commanding premium pricing, and fostering customer loyalty.',
    
    // Portfolio project descriptions
    eliteBusinessDesc: 'Professional corporate identity featuring clean lines and sophisticated branding for premium business consultancy.',
    luxuryAutomotiveDesc: 'High-end automotive branding with sleek design elements and premium visual identity for luxury vehicle dealership.',
    modernFashionDesc: 'Contemporary fashion brand identity with minimalist aesthetics and modern typography for trendy clothing line.',
    artisanFoodDesc: 'Authentic artisanal brand featuring warm colors and handcrafted elements for gourmet food products.',
    techInnovationDesc: 'Cutting-edge technology brand with futuristic design elements and bold visual identity for innovation leader.',
    premiumRealEstateDesc: 'Sophisticated real estate brand with elegant design elements and luxury positioning for high-end properties.',
    
    // Testimonials content
    testimonial1: 'Lynx didn\'t just redesign our brand—they completely transformed how we think about our market position. The strategic insights were game-changing.',
    testimonial2: 'The level of creativity and strategic thinking exceeded all expectations. Lynx delivered a brand that truly represents our vision for the future.',
    testimonial3: 'Working with Lynx was transformative. They understand that great design isn\'t just beautiful—it\'s strategic, purposeful, and results-driven.',
    testimonial4: 'From concept to execution, Lynx delivered exceptional results. Their attention to detail and commitment to excellence set them apart in the industry.',
    
    // Brand Video Section
    brandVideoTitle1: 'More than brands,',
    brandVideoTitle2: 'we create movements.',
    brandMovementSubtitle: 'Every brand has a story. We craft narratives that resonate, inspire, and transform audiences into communities.',
    
    // Footer
    globalRemote: 'Global Remote',
    
    // Real Estate Project Category  
    realEstateBranding: 'Real Estate Branding',
    
    // New Portfolio Projects
    modernBarbershop: 'Modern Barbershop',
    constructionCompany: 'Construction Company', 
    luxuryJewelry: 'Luxury Jewelry',
    sportsWear: 'Sports Wear',
    
    // New Project Categories
    barbershopBranding: 'Barbershop Branding',
    constructionBranding: 'Construction Branding',
    jewelryBranding: 'Jewelry Branding', 
    sportsbranding: 'Sports Branding',
    
    // New Project Descriptions
    modernBarbershopDesc: 'Contemporary barbershop brand identity featuring bold typography and premium grooming aesthetics for the modern gentleman.',
    constructionCompanyDesc: 'Professional construction company branding with strong industrial elements and trustworthy design for reliable building solutions.',
    luxuryJewelryDesc: 'Elegant jewelry brand identity with sophisticated design elements and premium aesthetics for exclusive luxury pieces.',
    sportsWearDesc: 'Dynamic sports brand identity with energetic design elements and athletic aesthetics for performance-driven activewear.',
    
    // Additional UI elements
    loading: 'Loading...',
    learnMore: 'Learn More',
    getStarted: 'Get Started',
    readMore: 'Read More',
    backToTop: 'Back to Top',
    menu: 'Menu',
    close: 'Close',
    
    // Error messages
    pageNotFound: 'Page Not Found',
    errorOccurred: 'An error occurred',
    
    // Common actions
    submit: 'Submit',
    cancel: 'Cancel',
    save: 'Save',
    edit: 'Edit',
    delete: 'Delete',
    confirm: 'Confirm',
    
    // Product Carousel Section
    ourClients: 'Our Clients',
    trustedByLeaders: 'Trusted by Industry Leaders',
    clientsSubtitle: 'We\'ve had the privilege of working with amazing companies and individuals who trust us with their brand vision.',
    
    // Gallery Page
    portfolioShowcase: 'Portfolio Showcase',
    explorePortfolio: 'Explore our curated collection of premium brand identities and innovative design solutions',
    
    // Project titles and categories - keeping original names but making categories translatable
    eliteBusinessServices: 'Elite Business Services',
    luxuryAutomotiveBrand: 'Luxury Automotive Brand',
    modernFashionLabel: 'Modern Fashion Label',
    artisanFoodBeverage: 'Artisan Food & Beverage',
    techInnovationCompany: 'Tech Innovation Company',
    premiumRealEstate: 'Premium Real Estate',
    
    // Project tags
    corporate: 'Corporate',
    business: 'Business',
    professional: 'Professional',
    automotive: 'Automotive',
    luxury: 'Luxury',
    premium: 'Premium',
    fashion: 'Fashion',
    modern: 'Modern',
    trendy: 'Trendy',
    food: 'Food',
    artisan: 'Artisan',
    gourmet: 'Gourmet',
    technology: 'Technology',
    innovation: 'Innovation',
    future: 'Future',
    realEstate: 'Real Estate'
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
    eliteBusinessDesc: 'Estratégia de marca abrangente e transformação digital para serviços agrícolas, aprimorando sua posição no mercado e eficiência operacional.',
    luxuryAutomotiveDesc: 'Identidade de marca premium e experiência de showroom para concessionária de automóveis de luxo, elevando o engajamento do cliente e prestígio da marca.',
    modernFashionDesc: 'Projeto inovador de branding arquitetônico apresentando conceitos de design residencial moderno e sistemas de identidade visual.',
    artisanFoodDesc: 'Desenvolvimento completo de marca para empresa de molhos premium, incluindo design de embalagem e estratégia de posicionamento no mercado.',
    premiumRealEstateDesc: 'Transformação de marca imobiliária de luxo focando em marketing de propriedades de alto padrão e aprimoramento da experiência do cliente.',
    modernBarbershopDesc: 'Rebrand contemporâneo de barbearia apresentando estética moderna e experiência elevada de atendimento ao cliente.',
    sustainabilityPlatformDesc: 'Marca de consultoria ambiental focada em práticas empresariais sustentáveis e soluções de tecnologia verde.',
    healthcareInnovationDesc: 'Desenvolvimento de marca de tecnologia médica enfatizando inovação no cuidado ao paciente e soluções de saúde.',
    corporateServicesDesc: 'Rebrand de serviços profissionais direcionado a clientes corporativos com ênfase em confiabilidade e expertise.',
    
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
    viewAllProjects: 'Ver Todos os Projetos',
    
    // Process Section
    ourProcess: 'Nosso Processo',
    fromVision: 'Da Visão',
    toReality: 'À Realidade',
    processSubtitle: 'Nossa metodologia comprovada garante que cada projeto entregue resultados excepcionais através de pensamento estratégico e execução meticulosa.',
    
    // Process Steps
    discoveryStrategy: 'Descoberta & Estratégia',
    discoveryDesc: 'Mergulho profundo na sua marca, mercado e objetivos para estabelecer uma base estratégica sólida.',
    discoveryDetail1: 'Auditoria da marca',
    discoveryDetail2: 'Pesquisa de mercado',
    discoveryDetail3: 'Entrevistas com stakeholders',
    discoveryDetail4: 'Framework estratégico',
    
    creativeDevelopment: 'Desenvolvimento Criativo',
    creativeDevDesc: 'Exploração conceitual e desenvolvimento criativo alinhado com seus objetivos estratégicos.',
    creativeDetail1: 'Conceitos criativos',
    creativeDetail2: 'Exploração de design',
    creativeDetail3: 'Desenvolvimento de protótipo',
    creativeDetail4: 'Refinamento iterativo',
    
    designExecution: 'Design & Execução',
    designExecDesc: 'Execução meticulosa de conceitos aprovados com atenção a cada detalhe.',
    designDetail1: 'Design visual',
    designDetail2: 'Desenvolvimento técnico',
    designDetail3: 'Garantia de qualidade',
    designDetail4: 'Otimização de performance',
    
    launchGrowth: 'Lançamento & Crescimento',
    launchDesc: 'Planejamento estratégico de lançamento e otimização contínua para sucesso sustentado.',
    launchDetail1: 'Estratégia de lançamento',
    launchDetail2: 'Monitoramento de performance',
    launchDetail3: 'Otimização contínua',
    launchDetail4: 'Planejamento de crescimento',
    
    // Brand Importance Section
    whyBrandMatters: 'Por Que Sua Marca Importa',
    brandPower: 'O Poder do',
    unleashed: 'Branding Estratégico',
    brandPowerSubtitle: 'Descubra por que o branding profissional é essencial para o sucesso empresarial no cenário competitivo de hoje',
    
    brandRecognition: 'Reconhecimento da Marca',
    brandRecognitionDesc: 'Uma marca forte cria reconhecimento instantâneo no mercado, tornando seu negócio memorável e facilmente identificável entre os concorrentes.',
    
    trustCredibility: 'Confiança & Credibilidade',
    trustCredibilityDesc: 'Branding profissional constrói confiança com clientes, estabelecendo credibilidade que converte prospects em clientes fiéis que acreditam no seu valor.',
    
    businessGrowth: 'Crescimento do Negócio',
    businessGrowthDesc: 'Branding eficaz impulsiona o crescimento dos negócios criando conexões emocionais, comandando preços premium e fomentando a fidelidade do cliente.',
    
    // Portfolio project descriptions
    eliteBusinessDesc: 'Identidade corporativa profissional com linhas limpas e branding sofisticado para consultoria empresarial premium.',
    luxuryAutomotiveDesc: 'Branding automotivo de alto padrão com elementos de design elegante e identidade visual premium para concessionária de veículos de luxo.',
    modernFashionDesc: 'Identidade de marca de moda contemporânea com estética minimalista e tipografia moderna para linha de roupas trendy.',
    artisanFoodDesc: 'Marca artesanal autêntica com cores quentes e elementos artesanais para produtos gourmet.',
    techInnovationDesc: 'Marca de tecnologia de ponta com elementos de design futurista e identidade visual ousada para líder em inovação.',
    premiumRealEstateDesc: 'Marca imobiliária sofisticada com elementos de design elegante e posicionamento de luxo para propriedades de alto padrão.',
    
    // Testimonials content
    testimonial1: 'A Lynx não apenas redesenhou nossa marca—eles transformaram completamente como pensamos sobre nossa posição no mercado. Os insights estratégicos foram revolucionários.',
    testimonial2: 'O nível de criatividade e pensamento estratégico superou todas as expectativas. A Lynx entregou uma marca que realmente representa nossa visão para o futuro.',
    testimonial3: 'Trabalhar com a Lynx foi transformador. Eles entendem que um ótimo design não é apenas bonito—é estratégico, proposital e focado em resultados.',
    testimonial4: 'Do conceito à execução, a Lynx entregou resultados excepcionais. Sua atenção aos detalhes e compromisso com a excelência os distingue na indústria.',
    
    // Brand Video Section
    brandVideoTitle1: 'Mais que marcas,',
    brandVideoTitle2: 'criamos movimentos.',
    brandMovementSubtitle: 'Toda marca tem uma história. Criamos narrativas que ressoam, inspiram e transformam audiências em comunidades.',
    
    // Footer
    globalRemote: 'Remoto Global',
    
    // Real Estate Project Category
    realEstateBranding: 'Branding Imobiliário',
    
    // New Portfolio Projects
    modernBarbershop: 'Barbearia Moderna',
    constructionCompany: 'Construtora',
    luxuryJewelry: 'Joias de Luxo',
    sportsWear: 'Marca Esportiva',
    
    // New Project Categories
    barbershopBranding: 'Branding para Barbearia',
    constructionBranding: 'Branding para Construtora',
    jewelryBranding: 'Branding para Joias',
    sportsbranding: 'Branding Esportivo',
    
    // New Project Descriptions
    modernBarbershopDesc: 'Identidade de marca contemporânea para barbearia com tipografia ousada e estética premium de cuidados masculinos para o cavalheiro moderno.',
    constructionCompanyDesc: 'Branding profissional para construtora com elementos industriais fortes e design confiável para soluções de construção seguras.',
    luxuryJewelryDesc: 'Identidade elegante para marca de joias com elementos de design sofisticados e estética premium para peças de luxo exclusivas.',
    sportsWearDesc: 'Identidade dinâmica para marca esportiva com elementos de design energéticos e estética atlética para roupas de alto desempenho.',
    
    // Additional UI elements
    loading: 'Carregando...',
    learnMore: 'Saiba Mais',
    getStarted: 'Começar',
    readMore: 'Ler Mais',
    backToTop: 'Voltar ao Topo',
    menu: 'Menu',
    close: 'Fechar',
    
    // Error messages
    pageNotFound: 'Página Não Encontrada',
    errorOccurred: 'Ocorreu um erro',
    
    // Common actions
    submit: 'Enviar',
    cancel: 'Cancelar',
    save: 'Salvar',
    edit: 'Editar',
    delete: 'Excluir',
    confirm: 'Confirmar',
    
    // Product Carousel Section
    ourClients: 'Nossos Clientes',
    trustedByLeaders: 'Confiado por Líderes da Indústria',
    clientsSubtitle: 'Tivemos o privilégio de trabalhar com empresas e indivíduos incríveis que confiam em nós com sua visão de marca.',
    
    // Gallery Page
    portfolioShowcase: 'Mostruário do Portfólio',
    explorePortfolio: 'Explore nossa coleção curada de identidades de marca premium e soluções de design inovadoras',
    
    // Project titles and categories - keeping original names but translating categories
    eliteBusinessServices: 'Elite Business Services',
    luxuryAutomotiveBrand: 'Luxury Automotive Brand',
    modernFashionLabel: 'Modern Fashion Label',
    artisanFoodBeverage: 'Artisan Food & Beverage',
    techInnovationCompany: 'Tech Innovation Company',
    premiumRealEstate: 'Premium Real Estate',
    
    // Project tags
    corporate: 'Corporativo',
    business: 'Negócios',
    professional: 'Profissional',
    automotive: 'Automotivo',
    luxury: 'Luxo',
    premium: 'Premium',
    fashion: 'Moda',
    modern: 'Moderno',
    trendy: 'Tendência',
    food: 'Alimentação',
    artisan: 'Artesanal',
    gourmet: 'Gourmet',
    technology: 'Tecnologia',
    innovation: 'Inovação',
    future: 'Futuro',
    realEstate: 'Imobiliário'
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