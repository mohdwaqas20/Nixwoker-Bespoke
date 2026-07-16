export default function WhyChooseUs() {
  const reasons = [
    {
      icon: '✋',
      title: 'Custom Made',
      description: 'Every jacket is made to order, built specifically for you and your measurements.'
    },
    {
      icon: '🔨',
      title: 'No Mass Production',
      description: 'We handcraft each piece individually, never rushing quality for quantity.'
    },
    {
      icon: '👨‍🔧',
      title: 'Handcrafted',
      description: 'Experienced artisans craft every detail, every stitch, every edge with precision.'
    },
    {
      icon: '🐂',
      title: 'Premium Leather',
      description: 'Only full grain leather is used. The highest quality, most durable choice available.'
    },
    {
      icon: '🌍',
      title: 'Worldwide Shipping',
      description: 'We ship to customers globally. Your jacket finds you, wherever you are.'
    },
    {
      icon: '📏',
      title: 'Made to Measure',
      description: 'Perfect fit guaranteed. Your measurements ensure comfort and style alignment.'
    },
    {
      icon: '⏰',
      title: 'Built to Last',
      description: 'These jackets are designed for decades of wear, not seasonal trends.'
    },
    {
      icon: '✨',
      title: 'Lifetime Character',
      description: 'Your jacket develops unique patina and character with every wear.'
    }
  ];

  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16 md:mb-20 animate-fade-in-up">
          <p className="eyebrow mb-4">Why Choose Nixwoker</p>
          <h2>Heritage Craftsmanship Redefined</h2>
          <p className="mt-6 text-primary-black/70">
            We believe in slow fashion, quality over quantity, and building relationships that last a lifetime.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="text-center animate-fade-in-up"
              style={{
                animationDelay: `${(index % 4) * 0.1}s`
              }}
            >
              {/* Icon */}
              <div className="text-5xl md:text-6xl mb-4 block">
                {reason.icon}
              </div>

              {/* Title */}
              <h3 className="font-display text-lg md:text-xl font-bold text-primary-black mb-3">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-primary-black/70 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-16 md:mt-20 text-center max-w-2xl mx-auto">
          <p className="tagline text-lg md:text-xl text-primary-black mb-6">
            "Built Slow. Worn Forever."
          </p>
          <p className="text-primary-black/70 text-base md:text-lg leading-relaxed">
            Each Nixwoker jacket is an investment in quality, style, and heritage. We're not just making jackets; we're creating heirlooms that tell your story.
          </p>
        </div>
      </div>
    </section>
  );
}