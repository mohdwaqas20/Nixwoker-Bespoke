import { Link, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import bg1 from '../assets/img1.jpeg';
import bg2 from '../assets/img2.jpeg';
import bg3 from '../assets/img3.jpeg';

export default function AeroInfo() {
  const navigate = useNavigate();

  const handleFAQClick = useCallback(() => {
    navigate('/faq');
    setTimeout(() => {
      const heroRef = document.querySelector('[data-faq-hero]');
      if (heroRef) {
        heroRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
  }, [navigate]);

  const items = [
    {
      title: 'OUR STORY',
      image: bg1,
      link: '/about',
      isButton: false
    },
    {
      title: 'OUR PROCESS',
      image: bg2,
      link: '/process',
      isButton: false
    },
    {
      title: 'FAQ SECTION',
      image: bg3,
      link: '/faq',
      isButton: true
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header with lines */}
        <div className="flex items-center justify-center gap-8 mb-16">
          <div className="flex-1 h-1 bg-black"></div>
           <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center tracking-widest whitespace-nowrap" style={{ letterSpacing: '0.05em' }}>
                NIXWOKER BESPOKE SINCE 1912
              </h2>
          <div className="flex-1 h-1 bg-black"></div>
        </div>

        {/* 3 Image Grid - Wide and Short */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            item.isButton ? (
              <button
                key={index}
                onClick={handleFAQClick}
                className="group relative overflow-hidden bg-black border-2 border-black hover:border-gray-400 transition-all duration-300 cursor-pointer"
              >
                <div
                  className="w-full aspect-video bg-cover bg-center group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl md:text-4xl font-black text-white tracking-wider text-center group-hover:text-gray-300 transition-colors duration-300 px-4">
                    {item.title}
                  </h3>
                </div>
              </button>
            ) : (
              <Link
                key={index}
                to={item.link}
                className="group relative overflow-hidden bg-black border-2 border-black hover:border-gray-400 transition-all duration-300"
              >
                <div
                  className="w-full aspect-video bg-cover bg-center group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl md:text-4xl font-black text-white tracking-wider text-center group-hover:text-gray-300 transition-colors duration-300 px-4">
                    {item.title}
                  </h3>
                </div>
              </Link>
            )
          ))}
        </div>
      </div>
    </section>
  );
}