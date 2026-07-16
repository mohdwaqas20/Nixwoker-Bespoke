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
      <div className="bg-cream border-b border-primary-black/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <div className="flex items-center gap-4 text-sm">
            <button
              onClick={() => navigate('/')}
              className="text-leather-brown hover:text-primary-black transition-colors"
            >
              Home
            </button>
            <span className="text-primary-black/40">/</span>
            <button
              onClick={() => navigate(`/${product.category}`)}
              className="text-leather-brown hover:text-primary-black transition-colors capitalize"
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
                <div className="relative aspect-[3/4] bg-cream overflow-hidden">
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
                <p className="eyebrow mb-4">{product.category}</p>
                <h1 className="text-primary-black mb-4">{product.name}</h1>
                <p className="text-leather-brown font-serif text-2xl font-semibold">
                  {product.price}
                </p>
              </div>

              <p className="text-lg text-primary-black/70 mb-8 pb-8 border-b border-primary-black/10">
                {product.description}
              </p>

              {/* Leather Types */}
              <div className="mb-8 pb-8 border-b border-primary-black/10">
                <h4 className="text-dark-tan font-semibold mb-4">Available Leather Types</h4>
                <div className="flex flex-wrap gap-3">
                  {product.leatherType?.map((leather, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 border border-primary-black/20 text-sm text-primary-black/70 hover:border-primary-black/50 transition-colors"
                    >
                      {leather}
                    </span>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div className="mb-8 pb-8 border-b border-primary-black/10">
                <h4 className="text-dark-tan font-semibold mb-4">Available Colors</h4>
                <div className="flex flex-wrap gap-3">
                  {product.colors?.map((color, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 border border-primary-black/20 text-sm text-primary-black/70 hover:border-primary-black/50 transition-colors"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8 pb-8 border-b border-primary-black/10">
                <h4 className="text-dark-tan font-semibold mb-4">Key Features</h4>
                <ul className="space-y-3">
                  {product.features?.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-leather-brown rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-primary-black/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

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
              <div className="p-6 bg-cream border border-primary-black/10">
                <p className="text-sm text-primary-black/70">
                  <span className="font-semibold text-dark-tan">Custom Made Process:</span> Each jacket is handcrafted to order. Typical production time is 4 weeks. 50% advance payment required to begin production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products 
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-12">
            <h2 className="mb-6">Related Products</h2>
            <p className="text-primary-black/70">
              Explore more from our collection.
            </p>
          </div>

          <div className="grid-cols-product">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct, index) => (
                <div
                  key={relatedProduct.id}
                  className="animate-fade-in-up"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="card-premium card-hover group cursor-pointer h-full flex flex-col hover:shadow-2xl transition-all duration-500">
                    <div className="relative overflow-hidden aspect-[3/4] bg-cream">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                      <p className="eyebrow mb-3">{relatedProduct.category}</p>
                      <h3 className="font-display text-lg md:text-xl font-bold text-primary-black mb-3">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-leather-brown font-serif text-lg mb-4">
                        {relatedProduct.price}
                      </p>
                      <p className="text-sm text-primary-black/70 mb-6 flex-grow">
                        {relatedProduct.description}
                      </p>
                      <a
                        href={`/product/${relatedProduct.id}`}
                        className="btn-ghost text-sm inline-block"
                      >
                        View Details →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>*/}

      {/* Customization Process */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-6">The Custom Process</h2>
            <p className="text-lg text-primary-black/70">
              How we bring your vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-premium p-10">
              <div className="w-12 h-12 bg-leather-brown text-primary-white rounded-full flex items-center justify-center font-display font-bold mb-4 text-lg">
                1
              </div>
              <h4 className="text-dark-tan font-semibold mb-3 text-lg">Share Your Vision</h4>
              <p className="text-primary-black/70">
                Send reference images or describe your ideal jacket. Discuss style, fit preferences, and any custom details.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-12 h-12 bg-leather-brown text-primary-white rounded-full flex items-center justify-center font-display font-bold mb-4 text-lg">
                2
              </div>
              <h4 className="text-dark-tan font-semibold mb-3 text-lg">Measurements</h4>
              <p className="text-primary-black/70">
                We send a detailed measurement guide. Work with a tailor to ensure precise fit for your body.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-12 h-12 bg-leather-brown text-primary-white rounded-full flex items-center justify-center font-display font-bold mb-4 text-lg">
                3
              </div>
              <h4 className="text-dark-tan font-semibold mb-3 text-lg">Leather & Color</h4>
              <p className="text-primary-black/70">
                Choose from premium leather types (Buffalo, Cow, Goat, Vegetable-Tanned) and available colors.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-12 h-12 bg-leather-brown text-primary-white rounded-full flex items-center justify-center font-display font-bold mb-4 text-lg">
                4
              </div>
              <h4 className="text-dark-tan font-semibold mb-3 text-lg">Production</h4>
              <p className="text-primary-black/70">
                Pay 50% advance. Your jacket is handcrafted to specs. Approximately 4 weeks of artisanal work.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-12 h-12 bg-leather-brown text-primary-white rounded-full flex items-center justify-center font-display font-bold mb-4 text-lg">
                5
              </div>
              <h4 className="text-dark-tan font-semibold mb-3 text-lg">Final Payment</h4>
              <p className="text-primary-black/70">
                Pay remaining balance. We prepare your jacket for shipping with premium packaging.
              </p>
            </div>

            <div className="card-premium p-8">
              <div className="w-12 h-12 bg-leather-brown text-primary-white rounded-full flex items-center justify-center font-display font-bold mb-4 text-lg">
                6
              </div>
              <h4 className="text-dark-tan font-semibold mb-3 text-lg">Delivery</h4>
              <p className="text-primary-black/70">
                Your handcrafted jacket arrives. Now begins its lifetime journey with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary-black text-primary-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-primary-white mb-8">Ready to Order Your {product.name}?</h2>
          <p className="text-lg text-primary-white/90 mb-12">
            Connect with us to discuss customization, measurements, and pricing.
          </p>
          <a
            href={`https://wa.me/9179099656?text=${encodeURIComponent(`Hello, I'm interested in the ${product.name}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-primary-white text-primary-black font-semibold text-lg tracking-wide hover:bg-cream transition-all duration-300 inline-block"
          >
            Start Your Order
          </a>
        </div>
      </section>
    </div>
  );
}