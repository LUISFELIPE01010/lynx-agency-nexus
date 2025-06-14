
import React from 'react';

const ProductCarousel = () => {
  const products = [
    {
      id: 1,
      title: "SNOW",
      subtitle: "Whitening Toothpaste",
      description: "Premium dental care",
      image: "/bb1.jpg",
      color: "from-purple-400 to-blue-400"
    },
    {
      id: 2,
      title: "OSN",
      subtitle: "Complete Package",
      description: "Business solution",
      image: "/bb2.jpg",
      color: "from-cyan-400 to-blue-500"
    },
    {
      id: 3,
      title: "VEDGE",
      subtitle: "Plant Protein",
      description: "Organic nutrition",
      image: "/bb3.jpg",
      color: "from-green-400 to-emerald-500"
    },
    {
      id: 4,
      title: "BRAND",
      subtitle: "Ice Cream",
      description: "Premium dessert",
      image: "/bb4.jpg",
      color: "from-orange-400 to-red-400"
    },
    {
      id: 5,
      title: "LUXURY",
      subtitle: "Premium Collection",
      description: "Exclusive design",
      image: "/bb5.jpg",
      color: "from-pink-400 to-purple-500"
    },
    {
      id: 6,
      title: "TECH",
      subtitle: "Innovation",
      description: "Future ready",
      image: "/bb6.jpg",
      color: "from-indigo-400 to-purple-500"
    }
  ];

  // Duplicate products for seamless infinite scroll
  const infiniteProducts = [...products, ...products, ...products];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-black relative overflow-hidden">

      <div className="relative overflow-hidden">
        <div className="flex animate-product-scroll">
          {infiniteProducts.map((product, index) => (
            <div
              key={`product-${index}`}
              className="flex-shrink-0 w-80 h-96 mx-4 group"
            >
              <div className="relative h-full bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-lynx-gray/20 hover:border-lynx-gray/40 transition-all duration-500 hover:scale-105">
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Product image */}
                <div className="relative h-3/5 overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Product content */}
                <div className="relative p-6 h-2/5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-space font-bold text-white mb-2 group-hover:text-lynx-gray transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-lynx-gray font-inter text-lg mb-2">
                      {product.subtitle}
                    </p>
                    <p className="text-gray-400 font-inter text-sm">
                      {product.description}
                    </p>
                  </div>

                  {/* Hover effect line */}
                  <div className="w-0 h-px bg-gradient-to-r from-lynx-gray to-white group-hover:w-full transition-all duration-500 mt-4"></div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-lynx-gray rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlays for seamless edges */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
    </section>
  );
};

export default ProductCarousel;
