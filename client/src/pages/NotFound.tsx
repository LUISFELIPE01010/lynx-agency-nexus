import { useLocation } from "wouter";
import { Link } from "wouter";
import { useEffect } from "react";
import { useLanguage } from '../contexts/LanguageContext';

const NotFound = () => {
  const { t } = useLanguage();
  const [location] = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location
    );
  }, [location]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">{t('pageNotFound')}</p>
        <Link to="/" className="text-blue-500 hover:text-blue-700 underline">
          {t('home')}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;