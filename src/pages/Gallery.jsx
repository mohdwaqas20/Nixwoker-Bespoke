import bg1 from '../assets/bg1.jpeg';
import bg2 from '../assets/bg2.jpeg';
import bg3 from '../assets/bg3.jpeg';
import bg4 from '../assets/bg4.jpeg';

export default function Gallery() {
  const galleryImages = [
    {
      id: 1,
      src: bg1,
      alt: 'Customer wearing leather jacket with yellow hood'
    },
    {
      id: 2,
      src: bg2,
      alt: 'Customer on motorcycle wearing dark leather jacket'
    },
    {
      id: 3,
      src: bg3,
      alt: 'Customer in mountains wearing sherpa leather jacket'
    },
    {
      id: 4,
      src: bg4,
      alt: 'Customer wearing burgundy leather jacket by bicycle'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <div className="bg-black text-white py-16 md:py-24 px-4 md:px-8 text-center" data-gallery-hero>
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
          LEATHER JACKET GALLERY
        </h1>
      </div>

      {/* ===== BREADCRUMB NAVIGATION ===== */}
      <div className="bg-primary-white border-b border-gray-200 px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 text-sm md:text-base">
            <a href="/" className="text-primary-black hover:text-black transition-colors font-medium">
              Home
            </a>
            <span className="text-gray-400">/</span>
            <span className="text-primary-black font-semibold">Gallery</span>
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        {/* Section Title */}
        <div className="flex items-center justify-center mb-12 md:mb-16">
          <div className="flex-1 h-1 bg-neutral-900"></div>
          <h2 className="px-6 text-4xl md:text-5xl font-bold text-neutral-900 text-center flex-shrink-0">
            NIXWOKER BESPOKE CUSTOMER GALLERY
          </h2>
          <div className="flex-1 h-1 bg-neutral-900"></div>
        </div>

        {/* Description */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto">
            Here are some photos of our customers wearing their hand-crafted leather jackets and other Aero products.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {galleryImages.map((image) => (
            <div key={image.id} className="overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-96 md:h-80 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div className="text-center py-8 md:py-12 border-t border-neutral-200">
          <p className="text-neutral-700 text-base md:text-lg">
            If you'd like to be featured on this page, please email{' '}
            <a
              href="mailto:7oceansimpexinternational@gmail.com"
              className="font-semibold text-neutral-900 hover:text-neutral-600 transition-colors underline"
            >
              7oceansimpexinternational@gmail.com
            </a>
            {' '}with your details and a photograph.
          </p>
        </div>
      </div>
    </div>
  );
}