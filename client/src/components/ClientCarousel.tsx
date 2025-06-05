import { useEffect } from 'react';

const ClientCarousel = () => {
  const logos = [
    '/fotos-slide/1.png',
    '/fotos-slide/2.png',
    '/fotos-slide/3.png',
    '/fotos-slide/4.png',
    '/fotos-slide/5.png',
    '/fotos-slide/6.png',
    '/fotos-slide/7.png',
    '/fotos-slide/8.png',
    '/fotos-slide/9.png',
    '/fotos-slide/10.png'
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-16 px-6 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-lynx-gray font-space text-sm tracking-widest uppercase">Trusted Partners</span>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="carousel-container">
            <div className="carousel-track">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="carousel-item flex-shrink-0 w-32 h-20 md:w-40 md:h-24 mx-8 flex items-center justify-center"
                >
                  <img
                    src={logo}
                    alt={`Client logo ${(index % logos.length) + 1}`}
                    className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;