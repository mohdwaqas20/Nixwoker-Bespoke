import { useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Wallets() {
  const wallets = products.filter(p => p.category === 'wallets');

  useEffect(() => {
    document.title = 'Leather Wallets - Nixwoker Bespoke';
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Hand-stitched full grain leather wallets that age beautifully. Premium craftsmanship in every detail.');
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] flex items-center justify-center overflow-hidden bg-primary-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1600&q=80)',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-8 text-center animate-fade-in">
          <p className="eyebrow mb-6 text-primary-white/80">Everyday Essentials</p>
          <h1 className="text-primary-white mb-6">Leather Wallets</h1>
          <p className="text-lg text-primary-white/90">
            Hand-stitched wallets in full grain leather. Timeless design for daily use.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-12 md:mb-16 max-w-2xl">
            <p className="text-primary-black/70 text-lg mb-4">
              Our wallets are as meticulously crafted as our jackets. Hand-stitched from premium full grain leather, each wallet develops unique character and patina with time.
            </p>
          </div>

          <div className="grid-cols-product">
            {wallets.map((wallet, index) => (
              <div
                key={wallet.id}
                className="animate-fade-in-up"
                style={{
                  animationDelay: `${(index % 3) * 0.1}s`
                }}
              >
                <ProductCard product={wallet} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: 'Hand-Stitched Excellence',
                description: 'Every seam is hand-stitched with waxed thread for durability and beauty. No machine shortcuts.',
                icon: '✌️'
              },
              {
                title: 'Full Grain Leather',
                description: 'Premium full grain leather that develops a beautiful patina unique to your use and lifestyle.',
                icon: '🐂'
              },
              {
                title: 'Lifetime Investment',
                description: 'These wallets are built to last for decades. A daily companion that improves with age.',
                icon: '⏰'
              },
              {
                title: 'Slim, Functional Design',
                description: 'Elegant minimalism meets practical functionality. Card slots, coin pocket, and money compartment.',
                icon: '💼'
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="animate-fade-in-up"
                style={{
                  animationDelay: `${idx * 0.1}s`
                }}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="font-display text-2xl font-bold text-primary-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-primary-black/70 text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Guide */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h2 className="mb-12">Care Your Wallet</h2>
          <div className="space-y-8">
            {[
              {
                title: 'Daily Use',
                description: 'Your wallet develops character through use. Scratches and marks are part of its story and beauty.'
              },
              {
                title: 'Conditioning',
                description: 'Every 6-12 months, condition your wallet with quality leather conditioner to maintain suppleness.'
              },
              {
                title: 'Patina Development',
                description: 'Over time, your wallet will darken and develop a unique patina that reflects your lifestyle.'
              },
              {
                title: 'Storage',
                description: 'Keep in a cool, dry place. Avoid excessive heat and humidity which can damage the leather.'
              }
            ].map((item, idx) => (
              <div key={idx} className="border-b border-primary-black/10 pb-8 last:border-0">
                <h3 className="font-display text-xl font-bold text-primary-black mb-3">
                  {item.title}
                </h3>
                <p className="text-primary-black/70 text-lg">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-black text-primary-white">
        <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-primary-white mb-6">Choose Your Perfect Wallet</h2>
          <p className="text-lg text-primary-white/90 mb-8">
            Select a wallet or discuss custom options that match your style.
          </p>
          <a
            href="https://wa.me/9179099656?text=I'm%20interested%20in%20a%20custom%20leather%20wallet.%20What%20are%20the%20customization%20options?"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block bg-primary-white text-primary-black hover:bg-cream"
          >
            Order Wallet
          </a>
        </div>
      </section>
    </div>
  );
}