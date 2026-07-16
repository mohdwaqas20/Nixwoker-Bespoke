import bg1 from '../assets/bg5.jpeg';

export default function AboutHero() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="hidden md:flex-1 md:block h-1 bg-black"></div>
          <h2 className="text-4xl sm:text-3xl md:text-3xl lg:text-5xl font-black tracking-widest whitespace-normal sm:whitespace-nowrap leading-tight" style={{ letterSpacing: '0.05em' }}>
              HANDMADE LEATHER JACKETS BY NIXWOKER BESPOKE
            </h2>
          <div className="hidden md:flex-1 md:block h-1 bg-black"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-stretch">
          {/* Left Content - 6 columns */}
          <div className="md:col-span-6 space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed md:leading-relaxed text-gray-700 md:text-gray-800">
            <p>
              <span className="font-semibold">Every Nixwoker Bespoke leather jacket is hand-crafted on our premises here in India by our highly experienced team.</span> 
            </p>

            <p>
              As enthusiasts are only too aware, many original pieces of vintage clothing have become collector's items, with museum-quality pieces now fetching prices that preclude everyday wear. What is not so well known is that many of these classic items are still available new today – some have been in almost continuous production, whilst others have been lovingly and painstakingly re-created using authentic materials. Since the earliest days of Nixwoker Bespoke, it has been our policy to offer only the very best of these rare gems. Our handmade leather jackets are renowned worldwide for their quality, authenticity and timeless style.
            </p>

            <p>
              Though we are best known for our hand-crafted leather clothing, we've recently added a range of heritage pieces to our collection. We specialize in premium full-grain leather jackets, vegetable-tanned leather goods, military-inspired canvas jackets and bags, hand-stitched wallets, and authentic vintage reproductions. Our products are crafted using traditional methods combined with modern quality standards. We are committed to offering unique, authentic pieces that reflect true craftsmanship and heritage.
            </p>
          </div>

          {/* Right Image - 6 columns */}
          <div className="md:col-span-6 flex justify-end h-full">
            <div className="overflow-hidden bg-white p-4 sm:p-5 md:p-6 w-full h-full" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)' }}>
              <img
                src={bg1}
                alt="Handmade Leather Jackets"
                className="w-full h-full object-cover block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}