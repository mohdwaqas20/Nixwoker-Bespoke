import { useState } from 'react';
import bg1 from '../assets/bg1.jpeg';
import bg2 from '../assets/bg2.jpeg';
import bg3 from '../assets/bg3.jpeg';
import bg4 from '../assets/bg4.jpeg';

export default function NewsAndInstagram() {
  const [newsItems] = useState([
    {
      id: 1,
      date: 'Jun 17 | 2026',
      title: "Nixwoker's Signature Jacket: The Heritage of Our Craftsmanship",
      excerpt: 'First designed with traditional methods, our signature jacket has been our best-selling piece every year...',
      link: '#'
    },
    {
      id: 2,
      date: 'Mar 18 | 2026',
      title: 'New Full Grain Leather Collection Release',
      excerpt: 'As we enter the new season here in India, our workshop is expanding our collection with premium leather goods...',
      link: '#'
    },
    {
      id: 3,
      date: 'Mar 04 | 2026',
      title: 'How to Care for Your Nixwoker Leather Jacket',
      excerpt: "Nixwoker's full grain leather jackets already have natural oils, so proper care ensures they develop beautiful patina...",
      link: '#'
    }
  ]);

  const [instagramPosts] = useState([
    {
      id: 1,
      image: bg1,
      alt: 'Leather jacket detail'
    },
    {
      id: 2,
      image: bg2,
      alt: 'Premium leather showcase'
    },
    {
      id: 3,
      image: bg3,
      alt: 'Craft collection display'
    },
    {
      id: 4,
      image: bg4,
      alt: 'Leather goods collection'
    }
  ]);

  return (
    <section className="py-14 md:py-18 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          {/* Latest News Section */}
          <div>
            <div className=" padding mb-20">
              <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center tracking-widest whitespace-nowrap" style={{ letterSpacing: '0.05em' }}>
                LATEST NEWS
              </h2>
            </div>
            <div className="space-y-8 md:space-y-10">
              {newsItems.map((item) => (
                <article key={item.id} className="border-b border-gray-200 pb-7 md:pb-8 last:border-b-0">
                  <div className="text-xs sm:text-sm font-semibold text-gray-600 mb-2">
                    {item.date}
                  </div>
                  <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed md:leading-relaxed mb-3">
                    {item.excerpt}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* Latest Instagram Section */}
          <div>
            <div className=" padding mb-20">
              <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center tracking-widest whitespace-nowrap" style={{ letterSpacing: '0.05em' }}>
                LATEST INSTAGRAM
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-4">
              {instagramPosts.map((post) => (
                <a
                  key={post.id}
                  href="#"
                  className="group relative aspect-square overflow-hidden bg-gray-200 hover:opacity-90 transition-opacity"
                >
                  <img
                    src={post.image}
                    alt={post.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}