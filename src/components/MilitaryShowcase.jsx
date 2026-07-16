import bg1 from '../assets/main/img3.jpeg';
import bg2 from '../assets/main/img1.jpeg';
import bg3 from '../assets/main/img2.jpeg';
import bg4 from '../assets/main/img4.jpeg';

export default function MilitaryShowcase() {
  const showcaseImages = [
    { id: 1, image: bg1 },
    { id: 2, image: bg2 },
    { id: 3, image: bg3 },
    { id: 4, image: bg4 },
  ];

  return (
    <>
      {/* 4 Product Showcase Grid - With proper margins */}
      <section className="py-8 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {showcaseImages.map((item, index) => (
              <div 
                key={item.id}
                className="group overflow-hidden bg-gray-200 cursor-pointer"
                style={{
                  aspectRatio: '1',
                  animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`
                }}
              >
                <img
                  src={item.image}
                  alt={`Product ${item.id}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Description Section */}
      <section className="py-2 md:py-2 bg-white">
        <div className="space-y-8 text-lg text-primary-black/90 leading-relaxed mt-8">
              <div className="bg-primary-black/5 border border-primary-black/20 p-8 my-8">
                <p className="text-sm text-center font-semibold mb-4 text-primary-black font">"In a world full of trends,</p>
                <p className="text-sm text-center font-semibold mb-4 text-primary-black">some men choose legacy.</p>
                <p className="text-sm text-center font-semibold mb-4 text-primary-black"><span className="font-black">Nixwoker Bespoke</span> was built for those men.</p>
                <p className="text-sm text-center font-semibold mb-4 text-primary-black">Men who walk differently.</p>
                <p className="text-sm text-center font-semibold mb-4 text-primary-black">Speak less.</p>
                <p className="text-sm text-center font-semibold mb-4 text-primary-black">Stand taller.</p>
                <p className="text-sm text-center font-semibold mb-4 text-primary-black">Every jacket carries character, scars, craftsmanship, and soul.</p>
                <p className="text-sm text-center font-semibold mb-4 text-primary-black">Not mass produced.</p>
                <p className="text-sm text-center font-semibold mb-4 text-primary-black">Not made for everyone.</p>
                <p className="text-sm text-center font-semibold mb-4 text-primary-black">Built slowly.</p>
                <p className="text-sm text-center font-semibold mb-4 text-primary-black">Built carefully.</p>
                <p className="text-sm text-center font-semibold mb-4 text-primary-black">Built to be remembered.”</p>
              </div>
              </div>
      </section>
      <section className="py-2 md:py-2 bg-white">
        
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-xl md:text-2xl leading-relaxed text-primary-black text-center font-sans">
            Welcome to the home of the world-famous <span className="font-black">Nixwoker Bespoke Leather Co.</span> Based in India, we are the manufacturers of what many would call the best and toughest leather jackets on the World. On this website, you can view our <span className="font-black">Custom Made</span> extensive range of high-grade full Grain front quarter Bufflow and Cow, vegetable-tanned full grain leather for Wallets, goat skin jackets. We also offer military Grade Canvas jacket and Bag.
          </p>
        </div>
      </section>

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
      `}</style>
    </>
  );
}