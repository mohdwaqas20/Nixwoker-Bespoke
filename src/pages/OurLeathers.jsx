import { useState, useEffect } from 'react';
import img1 from '../assets/leather/img1.jpeg';
import img2 from '../assets/leather/img2.jpeg';

export default function OurLeathers() {
  const [expandedLeather, setExpandedLeather] = useState(null);

  useEffect(() => {
    document.title = 'Our Leathers | Nixwoker Bespoke - Premium Leather Jackets';
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Discover the finest full grain leathers used in Nixwoker Bespoke jackets. Learn about our carefully selected cow and buffalo leather materials.');
    window.scrollTo(0, 0);
  }, []);

  const toggleLeather = (leatherId) => {
    setExpandedLeather(expandedLeather === leatherId ? null : leatherId);
  };

  const leatherTypes = [
    {
      id: 'cow',
      name: 'Full Grain Cow Leather',
      description: 'Full Grain Cow Leather is the highest grade of leather available. It is crafted from the outermost layer of the hide, where the natural grain remains completely untouched. Unlike corrected or sanded leather, full grain leather retains its authentic texture, natural markings, and unique character.',
      details: [
        'The strongest and most durable part of the hide.',
        'Naturally breathable for lasting comfort.',
        'Develops a rich patina that becomes more beautiful with age.',
        'Softens over time while maintaining exceptional strength.',
        'Every hide is unique, ensuring no two jackets are exactly alike.',
        'Built to last for decades with proper care.'
      ],
      image: img1,
      altText: 'Full Grain Cow Leather Texture'
    },
    {
      id: 'buffalo',
      name: 'Full Grain Buffalo Leather',
      description: 'Full Grain Buffalo Leather is known for its bold character and rugged strength. It features a naturally deeper grain pattern, making every jacket distinctive with a powerful vintage appearance. This leather is perfect for those seeking a statement piece with heritage-inspired aesthetics.',
      details: [
        'Thicker and tougher than many standard leathers.',
        'Naturally textured with a rich, masculine look.',
        'Highly resistant to wear and everyday use.',
        'Ages beautifully, developing a deep and unique patina.',
        'Ideal for heritage-inspired and adventure-ready jackets.'
      ],
      image: img2,
      altText: 'Full Grain Buffalo Leather Texture'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="bg-primary-black h-[110px] md:h-[220px] flex items-center justify-center">
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-5xl font-extrabold uppercase tracking-widest text-white mb-4">
            Our Leathers
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-4 font-light">
            Wondering what leathers we use to make our world-famous leather jackets?
          </p>
          <p className="text-base md:text-lg text-white/80 font-light">
            Scroll down to read all about Nixwoker's high-quality leathers.
          </p>
        </div>
      </section>

      {/* Leathers Accordion Section */}
      <section className="py-8 md:py-12 px-4 md:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          {leatherTypes.map((leather) => (
            <div key={leather.id} className="mb-4 overflow-hidden border border-gray-200 rounded">
              {/* Header Button */}
              <button
                onClick={() => toggleLeather(leather.id)}
                className="w-full bg-primary-black text-white px-6 md:px-8 py-6 md:py-8 flex items-center justify-between hover:bg-primary-black/90 transition-colors"
              >
                <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide">
                  {leather.name}
                </h2>
                <span className="text-4xl font-light flex-shrink-0 ml-4">
                  {expandedLeather === leather.id ? '−' : '+'}
                </span>
              </button>

              {/* Expanded Content */}
              {expandedLeather === leather.id && (
                <div className="bg-white px-6 md:px-8 py-8 md:py-12 border-t border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8">
                    {/* Image */}
                    <div className="flex items-center justify-center">
                      <img 
                        src={leather.image} 
                        alt={leather.altText}
                        className="w-full h-auto rounded object-cover max-h-96"
                      />
                    </div>

                    {/* Description and Details */}
                    <div>
                      <p className="text-lg text-primary-black/80 leading-relaxed mb-8 font-light">
                        {leather.description}
                      </p>

                      <h3 className="text-xl font-bold text-primary-black mb-6 uppercase tracking-wide">
                        Why {leather.id === 'cow' ? 'We Choose' : ''} {leather.name} Stands Apart
                      </h3>

                      <ul className="space-y-4">
                        {leather.details.map((detail, index) => (
                          <li key={index} className="flex items-start text-primary-black/80">
                            <span className="text-leather-brown mr-4 mt-1 text-lg font-bold flex-shrink-0">▸</span>
                            <span className="text-base font-light leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* How Full Grain Leather Is Made Section */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-8 uppercase tracking-wide">
            How Full Grain Leather Is Made
          </h2>
          
          <p className="text-lg text-primary-black/80 leading-relaxed mb-8 font-light">
            Creating full grain leather is a process that values quality over speed. Every step is carefully executed to ensure we deliver nothing but the finest materials for your Nixwoker jacket.
          </p>

          <ul className="space-y-4 mb-12">
            <li className="flex items-start text-primary-black/80">
              <span className="text-leather-brown mr-4 mt-1 text-lg font-bold flex-shrink-0">▸</span>
              <span className="text-base font-light">Premium hides are carefully selected for their strength and natural quality.</span>
            </li>
            <li className="flex items-start text-primary-black/80">
              <span className="text-leather-brown mr-4 mt-1 text-lg font-bold flex-shrink-0">▸</span>
              <span className="text-base font-light">The hides are cleaned and preserved immediately after sourcing to maintain integrity.</span>
            </li>
            <li className="flex items-start text-primary-black/80">
              <span className="text-leather-brown mr-4 mt-1 text-lg font-bold flex-shrink-0">▸</span>
              <span className="text-base font-light">They are expertly tanned to stabilize the leather while maintaining its natural fiber structure.</span>
            </li>
            <li className="flex items-start text-primary-black/80">
              <span className="text-leather-brown mr-4 mt-1 text-lg font-bold flex-shrink-0">▸</span>
              <span className="text-base font-light">Unlike lower-grade leathers, the surface is never sanded or buffed, preserving the original grain.</span>
            </li>
            <li className="flex items-start text-primary-black/80">
              <span className="text-leather-brown mr-4 mt-1 text-lg font-bold flex-shrink-0">▸</span>
              <span className="text-base font-light">The leather is dyed and finished using premium techniques that protect its natural beauty rather than hiding it.</span>
            </li>
            <li className="flex items-start text-primary-black/80">
              <span className="text-leather-brown mr-4 mt-1 text-lg font-bold flex-shrink-0">▸</span>
              <span className="text-base font-light">Each hide is individually inspected before being handcrafted into a Nixwoker jacket.</span>
            </li>
            <li className="flex items-start text-primary-black/80">
              <span className="text-leather-brown mr-4 mt-1 text-lg font-bold flex-shrink-0">▸</span>
              <span className="text-base font-light">Because the grain remains untouched, the leather retains its original strength, natural texture, and ability to develop a beautiful patina over time.</span>
            </li>
          </ul>

          {/* Crafted to Last a Lifetime */}
          <div className="bg-leather-brown/10 p-8 md:p-12 rounded-lg border-l-4 border-leather-brown">
            <h3 className="text-3xl md:text-4xl font-bold text-primary-black mb-6 uppercase tracking-wide">
              Crafted to Last a Lifetime
            </h3>
            <p className="text-lg text-primary-black/80 leading-relaxed font-light">
              A Nixwoker jacket is not made for a season—it is made for a lifetime. Every crease, every mark, and every shade that develops through years of wear tells a story uniquely yours. This is the enduring beauty of genuine Full Grain Leather: authentic, timeless, and built to be passed from one generation to the next.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-black py-16 md:py-24 mt-12">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-wider">
            Ready to Order Your Jacket?
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto font-light">
            Explore our collection of handcrafted leather jackets made with premium materials and customize your perfect piece.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="/jackets"
              className="px-8 py-4 bg-leather-brown text-white font-bold uppercase tracking-wider hover:bg-leather-brown/90 transition-all rounded"
            >
              View Collections
            </a>
            <a
              href="/contact"
              className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-primary-black transition-all rounded"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}