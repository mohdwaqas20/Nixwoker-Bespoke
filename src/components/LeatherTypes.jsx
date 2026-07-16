export default function LeatherTypes({ leathers }) {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16 md:mb-20 animate-fade-in-up">
          <p className="eyebrow mb-4">Premium Materials</p>
          <h2>Our Leather Collections</h2>
          <p className="mt-6 text-primary-black/70">
            Each leather type is selected for its quality, character, and ability to develop a beautiful patina over time.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {leathers.map((leather, index) => (
            <div
              key={leather.id}
              className="card-premium p-8 md:p-10 animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Header */}
              <div className="mb-6">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-black mb-2">
                  {leather.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-sans tracking-widest uppercase text-leather-brown">
                    Weight: {leather.weight}
                  </span>
                  <span className="text-xs font-sans tracking-widest uppercase text-dark-tan">
                    Best for: {leather.ideal}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="divider mb-6"></div>

              {/* Description */}
              <p className="text-primary-black/70 mb-8 leading-relaxed text-lg">
                {leather.description}
              </p>

              {/* Characteristics */}
              <div>
                <p className="text-xs font-sans tracking-widest uppercase text-primary-black/60 mb-4">
                  Key Characteristics
                </p>
                <ul className="space-y-2">
                  {leather.characteristics.map((char, idx) => (
                    <li key={idx} className="text-sm text-primary-black/70 flex items-start">
                      <span className="text-leather-brown mr-3 mt-1">▸</span>
                      <span>{char}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 md:mt-20 p-8 md:p-12 bg-primary-black text-primary-white rounded">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
            All Leathers Are Full Grain
          </h3>
          <p className="text-primary-white/80 leading-relaxed mb-4">
            We exclusively use full grain leather, the highest quality leather available. This means the natural grain, scars, and character marks are visible, making each jacket unique. As you wear your jacket, it develops a beautiful patina that tells the story of your adventures.
          </p>
          <p className="text-primary-white/60 text-sm">
            Full grain leather improves with age. Scratches and marks become character, and your jacket becomes more distinctive and valuable over time.
          </p>
        </div>
      </div>
    </section>
  );
}