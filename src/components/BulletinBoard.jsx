import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import product1 from '../assets/product/p0.jpeg';
import product2 from '../assets/product/p1.jpeg';
import product3 from '../assets/product/p2.jpeg';
import product4 from '../assets/product/p3.jpeg';

export default function BulletinBoard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('ready-to-buy');
  const scrollContainerRef = useRef(null);

  const productImages = [product1, product2, product3, product4];

  const bulletinProducts = {
    'ready-to-buy': [
      { id: 'leather-jacket', name: 'Jacket (MADE TO ORDER)', price: '$350.00', image: productImages[0], badge: 'NEW' },
      { id: 'military-jacket', name: 'Military Jacket (MADE TO ORDER)', price: '$96.00', image: productImages[1], badge: 'NEW' },
      { id: 'military-bags', name: 'Military Bags (MADE TO ORDER)', price: '$62.00', image: productImages[2], badge: 'NEW' },
      { id: 'leather-wallet', name: 'Leather Wallet (MADE TO ORDER)', price: '$45.00', image: productImages[3], badge: 'NEW' }
    ],
    
  };

 

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const currentProducts = bulletinProducts[activeTab];

  return (
    <section id="bulletin-board" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="mb-12 md:mb-14">
          {/* Title with side lines */}
          <div className="flex items-center justify-center gap-6 sm:gap-8 mb-12 md:mb-14">
            <div className="flex-1 h-1 bg-black"></div>
            <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-widest whitespace-nowrap" style={{ letterSpacing: '0.05em' }}>
              BULLETIN BOARD
            </h2>
            <div className="flex-1 h-1 bg-black"></div>
          </div>

         
        </div>

        {/* Products Carousel */}
        <div className="relative px-8 sm:px-12 md:px-0">
          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-4 scroll-smooth"
            style={{
              scrollBehavior: 'smooth',
              scrollbarWidth: 'thin'
            }}
          >
            {currentProducts.map((product, index) => (
              <div
                key={product.id}
                onClick={() => handleProductClick(product.id)}
                className="flex-shrink-0 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 group cursor-pointer"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Product Card */}
                <div className="bg-white border border-gray-200 overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-500">
                  {/* Image Container */}
                  <div className="relative overflow-hidden aspect-[3/4] bg-gray-100">
                    {product.badge && (
                      <div className="absolute top-3 right-3 z-10 bg-black text-white px-2 py-1 text-xs font-bold">
                        {product.badge}
                      </div>
                    )}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl sm:text-xl text-gray-800 mb-2 line-clamp-2 group-hover:text-black transition-colors leading-snug">
                        {product.name}
                      </h3>
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-bold text-gray-900">
                        {product.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Mobile Inside, Desktop Outside */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center text-gray-600 hover:text-black transition-colors active:text-black sm:left-auto sm:-left-12 md:-left-20 w-10 h-10 sm:w-10 sm:h-10 bg-white sm:bg-transparent border sm:border-0 rounded sm:rounded-none"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center text-gray-600 hover:text-black transition-colors active:text-black sm:right-auto sm:translate-x-12 md:translate-x-20 w-10 h-10 sm:w-10 sm:h-10 bg-white sm:bg-transparent border sm:border-0 rounded sm:rounded-none"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        div::-webkit-scrollbar {
          height: 4px;
        }

        div::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        div::-webkit-scrollbar-thumb {
          background: #888;
        }

        div::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </section>
  );
}