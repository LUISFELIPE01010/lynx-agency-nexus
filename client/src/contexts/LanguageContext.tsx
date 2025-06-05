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
    home: 'Home',
    gallery: 'Gallery',
    heroSubtitle1: 'Redefining brand excellence through',
    heroSubtitle2: 'strategic innovation & design mastery',
    exploreWork: 'Explore Our Work',
    startProject: 'Start a Project'
  },
  pt: {
    home: 'Início',
    gallery: 'Galeria',
    heroSubtitle1: 'Redefinindo a excelência da marca através de',
    heroSubtitle2: 'inovação estratégica e maestria em design',
    exploreWork: 'Explore Nosso Trabalho',
    startProject: 'Iniciar um Projeto'
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