import { useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Canvas() {
  const canvasProducts = products.filter(p => p.category === 'canvas');

  useEffect(() => {
    document.title = 'Canvas Collection - Nixwoker Bespoke';
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Military-grade canvas jackets and bags with premium leather accents. Durable, heritage-inspired designs.');
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] flex items-center justify-center overflow-hidden bg-primary-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1600&q=80)',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-8 text-center animate-fade-in">
          <p className="eyebrow mb-6 text-primary-white/80">Military Heritage</p>
          <h1 className="text-primary-white mb-6">Canvas Collection</h1>
          <p className="text-lg text-primary-white/90">
            Heavy-duty military canvas with genuine leather accents. Built for adventure.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-12 md:mb-16 max-w-2xl">
            <p className="text-primary-black/70 text-lg mb-4">
              Our canvas collection combines authentic military-grade materials with heritage craftsmanship. These pieces are designed for those who demand durability and authentic style.
            </p>
          </div>

          <div className="grid-cols-product">
            {canvasProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in-up"
                style={{
                  animationDelay: `${(index % 3) * 0.1}s`
                }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Canvas */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h2 className="mb-8">Why Canvas?</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-xl font-bold text-primary-black mb-2">
                  Military Heritage
                </h3>
                <p className="text-primary-black/70">
                  Canvas has been the material of choice for military and outdoor gear for over a century. We honor that heritage.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-primary-black mb-2">
                  Durability
                </h3>
                <p className="text-primary-black/70">
                  Military-grade canvas is renowned for its exceptional strength and longevity. It improves with age and use.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-primary-black mb-2">
                  Weather Resistance
                </h3>
                <p className="text-primary-black/70">
                  Our canvas is naturally weather-resistant, perfect for outdoor enthusiasts and adventurers.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-primary-black mb-2">
                  Authentic Aesthetics
                </h3>
                <p className="text-primary-black/70">
                  Canvas pieces develop character and patina, telling the story of your journeys.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-black text-primary-white">
        <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-primary-white mb-6">Ready for Adventure?</h2>
          <p className="text-lg text-primary-white/90 mb-8">
            Explore our canvas collection or customize your own piece.
          </p>
          <a
            href="https://wa.me/9179099656?text=I'm%20interested%20in%20the%20canvas%20collection.%20Can%20we%20discuss%20customization%20options?"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block bg-primary-white text-primary-black hover:bg-cream"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}