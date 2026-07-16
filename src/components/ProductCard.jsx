import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const whatsappMessage = `Hello, I'm interested in ordering the ${product.name}. Please share available leather options, colors, and pricing.`;
  const whatsappUrl = `https://wa.me/9179099656?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="card-premium card-hover group">
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[3/4] bg-cream">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col h-full">
        {/* Eyebrow */}
        <p className="eyebrow mb-3">{product.category.replace('-', ' ')}</p>

        {/* Title */}
        <h3 className="font-display text-lg md:text-xl font-bold text-primary-black mb-3 line-clamp-2">
          {product.name}
        </h3>

        {/* Price */}
        <p className="text-leather-brown font-serif text-lg mb-4">
          {product.price}
        </p>

        {/* Description */}
        <p className="text-sm text-primary-black/70 mb-6 line-clamp-3 flex-grow">
          {product.description}
        </p>

        {/* Leather Types */}
        {product.leatherType && (
          <div className="mb-6 pb-6 border-t border-primary-black/10">
            <p className="text-xs font-sans tracking-widest uppercase text-primary-black/60 mb-2">
              Available in
            </p>
            <div className="flex flex-wrap gap-2">
              {product.leatherType.map((leather) => (
                <span
                  key={leather}
                  className="text-xs bg-cream text-primary-black px-3 py-1 rounded"
                >
                  {leather}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="space-y-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center btn-primary text-sm"
          >
            Buy Now
          </a>
          <Link
            to={`/product/${product.id}`}
            className="block text-center text-sm font-sans tracking-wide text-primary-black hover:text-leather-brown transition-colors py-2"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}