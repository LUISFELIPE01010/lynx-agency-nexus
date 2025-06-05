import Navbar from '../components/Navbar';
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

const Gallery = () => {
  const projects = [
    logo1, logo2, logo3, logo4, logo5,
    logo6, logo7, logo8, logo9, logo10
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Use original navbar */}
      <Navbar />

      {/* Gallery Content */}
      <div className="pt-20 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-space font-bold text-white mb-4">
              Project Gallery
            </h2>
            <p className="text-xl text-lynx-gray font-inter">
              Explore our portfolio of brand transformations
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative aspect-video bg-lynx-gray/10 rounded-lg overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500"
              >
                <img
                  src={project}
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-space font-semibold">Project {index + 1}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;