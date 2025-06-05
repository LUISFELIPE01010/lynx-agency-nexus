import logo1 from '@/fotos slide/1.png';
import logo2 from '@/fotos slide/2.png';
import logo3 from '@/fotos slide/3.png';
import logo4 from '@/fotos slide/4.png';
import logo5 from '@/fotos slide/5.png';
import logo6 from '@/fotos slide/6.png';
import logo7 from '@/fotos slide/7.png';
import logo8 from '@/fotos slide/8.png';
import logo9 from '@/fotos slide/9.png';
import logo10 from '@/fotos slide/10.png';

const ClientCarousel = () => {
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-8 px-6 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
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