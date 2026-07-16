import { useEffect } from 'react';
import { products } from '../data/products';

export default function Jackets() {
  useEffect(() => {
    document.title = 'Leather Jackets - Nixwoker Bespoke';
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Handcrafted premium leather jackets in iconic silhouettes. Café racer, biker, bomber, and military styles.');
    window.scrollTo(0, 0);
  }, []);

  const jacketProducts = products.filter(p => p.category === 'jackets');

  return (
    <div>
      {/* Page Header */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="animate-fade-in-up">
            <p className="eyebrow mb-4">Leather Collection</p>
            <h1 className="text-primary-black mb-6">Leather Jackets</h1>
            <p className="text-xl text-primary-black/70 max-w-2xl">
              Each jacket is handcrafted from premium full grain leather, made-to-measure to your exact specifications. Built to age beautifully and last a lifetime.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid-cols-product">
            {jacketProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in-up"
                style={{
                  animationDelay: `${(index % 3) * 0.1}s`
                }}
              >
                <div className="card-premium card-hover group flex flex-col h-full">
                  <div className="relative overflow-hidden aspect-[3/4] bg-cream">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col h-full">
                    <p className="eyebrow mb-3">{product.category}</p>
                    <h3 className="font-display text-lg md:text-xl font-bold text-primary-black mb-3">
                      {product.name}
                    </h3>
                    <p className="text-leather-brown font-serif text-lg mb-4">{product.price}</p>
                    <p className="text-sm text-primary-black/70 mb-6 flex-grow">{product.description}</p>
                    
                    {/* Features */}
                    <div className="mb-6 pb-6 border-b border-primary-black/10">
                      <p className="text-xs tracking-widest uppercase text-dark-tan mb-3">Features</p>
                      <ul className="space-y-2 text-sm text-primary-black/70">
                        {product.features?.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-leather-brown rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="space-y-3">
                      <a
                        href={`https://wa.me/9179099656?text=${encodeURIComponent(`Hello, I'm interested in the ${product.name}. Please share available leather options, colors, and pricing.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center btn-primary text-sm"
                      >
                        Customize on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leather Info Section */}
      <section className="section-padding bg-cream">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="animate-fade-in-up">
            <h2 className="mb-8">Leather Specifications</h2>
            <div className="grid-cols-feature gap-8">
              <div>
                <h4 className="text-dark-tan mb-4">Premium Materials</h4>
                <p className="text-primary-black/70 mb-4">
                  Every Nixwoker jacket uses full grain leather that develops character with age. We source from the finest tanneries and work exclusively with ethically produced hides.
                </p>
              </div>
              <div>
                <h4 className="text-dark-tan mb-4">Custom Made Process</h4>
                <p className="text-primary-black/70 mb-4">
                  Share your reference image, send measurements, choose your leather type and color. We'll craft your jacket to your exact specifications in approximately 4 weeks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-black text-primary-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-primary-white mb-8">Ready for Your Custom Jacket?</h2>
          <p className="text-lg text-primary-white/90 mb-12 max-w-2xl mx-auto">
            Contact us to discuss your perfect jacket. Share your style preferences and we'll guide you through the custom-made process.
          </p>
          <a
            href="https://wa.me/9179099656?text=Hello, I'd like to explore custom jacket options."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-primary-white text-primary-black font-semibold text-lg tracking-wide hover:bg-cream transition-all duration-300 inline-block"
          >
            Start Your Custom Order
          </a>
        </div>
      </section>
    </div>
  );
}