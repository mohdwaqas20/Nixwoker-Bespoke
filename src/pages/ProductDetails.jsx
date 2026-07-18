import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(p => p.id === id);

  useEffect(() => {
    if (product) {
      document.title = `${product.name} - Nixwoker Bespoke`;
      document.querySelector('meta[name="description"]')?.setAttribute('content', product.description);
    }
    window.scrollTo(0, 0);
  }, [product, id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Product Not Found</h2>
          <p className="text-primary-black/70 mb-8">The product you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/')}
            className="btn-primary"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-primary-black/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <div className="flex items-center gap-4 text-sm">
            <button
              onClick={() => navigate('/')}
              className="text-black hover:text-primary-black transition-colors"
            >
              Home
            </button>
            <span className="text-primary-black/40">/</span>
            <button
              onClick={() => navigate(`/${product.category}`)}
              className="text-black hover:text-primary-black transition-colors capitalize"
            >
              {product.category}
            </button>
            <span className="text-primary-black/40">/</span>
            <span className="text-primary-black">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Image */}
            <div className="animate-fade-in-left">
              <div className="sticky top-24">
                <div className="relative aspect-[3/4] bg-white overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="animate-fade-in-right">
              <div className="mb-6">
                <p className="eyebrow text-primary-black mb-4">{product.category}</p>
                <h1 className="text-primary-black mb-4">{product.name}</h1>
                <p className="text-leather-black font-serif text-2xl font-semibold">
                  {product.price}
                </p>
              </div>

              <p className="text-lg text-primary-black/70 mb-8 pb-8 border-b border-primary-black/10">
                {product.description}
              </p>

              {/* Leather Types */}
              {product.leatherType && product.leatherType.length > 0 && (
                <div className="mb-8 pb-8 border-b border-primary-black/10">
                  <h4 className="text-black font-semibold mb-4">Available Leather Types</h4>
                  <div className="flex flex-wrap gap-3">
                    {product.leatherType.map((leather, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 border border-primary-black/20 text-sm text-primary-black/70 hover:border-primary-black/50 transition-colors"
                      >
                        {leather}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Colors */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-8 pb-8 border-b border-primary-black/10">
                  <h4 className="text-black font-semibold mb-4">Available Colors</h4>
                  <div className="flex flex-wrap gap-3">
                    {product.colors.map((color, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 border border-primary-black/20 text-sm text-primary-black/70 hover:border-primary-black/50 transition-colors"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div className="mb-8 pb-8 border-b border-primary-black/10">
                  <h4 className="text-black font-semibold mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-primary-black/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="space-y-4 mb-8">
                <a
                  href={`https://wa.me/9179099656?text=${encodeURIComponent(`Hello, I'm very interested in the ${product.name}. Please share available leather options, colors, and pricing details. I would love to customize this piece.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center btn-primary text-lg"
                >
                  Customize on WhatsApp
                </a>
                <a
                  href={`mailto:7oceansimpexinternational@gmail.com?subject=${encodeURIComponent(`Inquiry: ${product.name}`)}&body=${encodeURIComponent(`Hello,\n\nI'm interested in the ${product.name} (${product.price}).\n\nPlease share more details about customization options, leather types, colors, and pricing.\n\nThank you!`)}`}
                  className="block w-full text-center btn-secondary text-lg"
                >
                  Email Inquiry
                </a>
              </div>

              {/* Info Box */}
              <div className="p-6 bg-white border border-primary-black/10">
                <p className="text-sm text-primary-black/70">
                  <span className="font-semibold text-black">Custom Made Process:</span> Each product is handcrafted to order. Typical production time is 4 weeks. 50% advance payment required to begin production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-white text-primary-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-primary-black mb-8">Ready to Order Your {product.name}?</h2>
          <p className="text-lg text-primary-black/90 mb-12">
            Connect with us to discuss customization, measurements, and pricing.
          </p>
          <a
            href={`https://wa.me/9179099656?text=${encodeURIComponent(`Hello, I'm interested in the ${product.name}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-primary-black text-primary-white font-semibold text-lg tracking-wide hover:bg-white hover:text-primary-black border border-primary-black transition-all duration-300 inline-block"
          >
            Start Your Order
          </a>
        </div>
      </section>
    </div>
  );
}