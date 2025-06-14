import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Gallery = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleHomeClick = () => {
    // Navegação imediata sem recarregar a página
    navigate('/', { replace: true });
  };

  const images = Array.from({ length: 10 }, (_, i) => `/fotos-slide/${i + 1}.png`);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header com navegação */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-lynx-gray hover:text-white transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span>Voltar</span>
          </button>

          <h1 className="text-2xl font-space font-bold">Gallery</h1>

          <button
            onClick={handleHomeClick}
            className="flex items-center gap-2 px-4 py-2 bg-lynx-gray/10 hover:bg-lynx-gray/20 rounded-lg text-lynx-gray hover:text-white transition-all duration-200 border border-lynx-gray/20 hover:border-lynx-gray/40"
          >
            <Home size={18} />
            <span>Home</span>
          </button>
        </div>
      </header>

      {/* Galeria */}
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((src, index) => (
              <div
                key={index}
                className="relative aspect-square bg-gray-900 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium">Ver imagem</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gallery;