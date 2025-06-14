import { Link } from 'wouter';
import { ArrowLeft, Home } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Gallery = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: "Identidade Visual Corporativa",
      description: "Desenvolvimento completo de identidade visual para empresa de tecnologia",
      image: "/fotos-slide/1.png",
      category: "Branding"
    },
    {
      id: 2,
      title: "Campanha Publicitária Digital",
      description: "Criação de campanha multiplataforma para lançamento de produto",
      image: "/fotos-slide/2.png",
      category: "Marketing Digital"
    },
    {
      id: 3,
      title: "Website Responsivo",
      description: "Design e desenvolvimento de site institucional moderno",
      image: "/fotos-slide/3.png",
      category: "Web Design"
    },
    {
      id: 4,
      title: "Embalagem Premium",
      description: "Design de embalagem para linha premium de cosméticos",
      image: "/fotos-slide/4.png",
      category: "Design de Produto"
    },
    {
      id: 5,
      title: "Aplicativo Mobile",
      description: "Interface e experiência de usuário para app de delivery",
      image: "/fotos-slide/5.png",
      category: "UX/UI Design"
    },
    {
      id: 6,
      title: "Material Impresso",
      description: "Catálogo institucional e materiais promocionais",
      image: "/fotos-slide/6.png",
      category: "Design Gráfico"
    },
    {
      id: 7,
      title: "E-commerce Completo",
      description: "Loja virtual com sistema de pagamento integrado",
      image: "/fotos-slide/7.png",
      category: "E-commerce"
    },
    {
      id: 8,
      title: "Rebranding Corporativo",
      description: "Renovação completa da identidade visual empresarial",
      image: "/fotos-slide/8.png",
      category: "Rebranding"
    },
    {
      id: 9,
      title: "Campanha Social Media",
      description: "Estratégia e conteúdo para redes sociais",
      image: "/fotos-slide/9.png",
      category: "Social Media"
    },
    {
      id: 10,
      title: "Dashboard Analytics",
      description: "Interface de administração com visualização de dados",
      image: "/fotos-slide/10.png",
      category: "Dashboard"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header com navegação */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-lynx-gray hover:text-white transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span>Voltar</span>
          </button>

          <h1 className="text-2xl font-space font-bold">Portfolio</h1>

          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-2 bg-lynx-gray/10 hover:bg-lynx-gray/20 rounded-lg text-lynx-gray hover:text-white transition-all duration-200 border border-lynx-gray/20 hover:border-lynx-gray/40"
          >
            <Home size={18} />
            <span>Home</span>
          </Link>
        </div>
      </header>

      {/* Portfolio */}
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-900/50 rounded-lg overflow-hidden group cursor-pointer hover:scale-[1.02] transition-all duration-300 border border-gray-800/50 hover:border-lynx-gray/30"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black/70 text-white text-xs rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-space font-semibold mb-2 text-white group-hover:text-lynx-gray transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
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