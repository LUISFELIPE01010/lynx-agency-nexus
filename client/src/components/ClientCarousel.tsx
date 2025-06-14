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

  // Double logos for perfect seamless infinite scroll
  const infiniteLogos = [...logos, ...logos];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-black relative overflow-hidden">
      <div className="w-full">
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-40 h-24 sm:w-48 sm:h-28 md:w-56 md:h-32 lg:w-64 lg:h-36 mx-4 sm:mx-6 lg:mx-8 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  className="max-w-full max-h-full object-contain opacity-50 hover:opacity-80 transition-opacity duration-500 filter grayscale hover:grayscale-0"
                  loading="lazy"
                />
              </div>
            ))}
            {/* Second set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-40 h-24 sm:w-48 sm:h-28 md:w-56 md:h-32 lg:w-64 lg:h-36 mx-4 sm:mx-6 lg:mx-8 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  className="max-w-full max-h-full object-contain opacity-50 hover:opacity-80 transition-opacity duration-500 filter grayscale hover:grayscale-0"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;