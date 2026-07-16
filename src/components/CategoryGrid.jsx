import { Link } from 'react-router-dom';

export default function CategoryGrid({ categories }) {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-20 animate-fade-in-up">
          <p className="eyebrow mb-4">Featured Collections</p>
          <h2>Explore Our Heritage Craftsmanship</h2>
          <p className="mt-6 text-primary-black/70">
            Each collection represents years of craftsmanship expertise and attention to detail.
          </p>
        </div>

        {/* Grid */}
        <div className="grid-cols-product">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/${category.id.split('-')[0]}`}
              className="group card-hover"
              style={{
                animation: `fade-in-up 0.8s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3] bg-cream mb-6">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-primary-black mb-3 group-hover:text-leather-brown transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-primary-black/70 mb-4">
                  {category.description}
                </p>
                <span className="inline-block text-xs font-sans tracking-widest uppercase text-primary-black group-hover:text-leather-brown transition-colors">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}