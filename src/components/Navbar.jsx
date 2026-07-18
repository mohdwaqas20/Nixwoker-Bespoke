import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, X, Menu } from 'lucide-react';
import logo from '../assets/logo.png';
import { products } from '../data/products';

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const socialLinks = [
    { icon: 'whatsapp', url: 'https://wa.me/9179099656', label: 'WhatsApp' },
    { icon: 'instagram', url: 'https://www.instagram.com/nixwokerleatherco?igsh=MTZjczgxcmVjazh0cg==', label: 'Instagram' },
    { icon: 'facebook', url: 'https://www.facebook.com/share/1HTzAxBzau/', label: 'Facebook' },
    { icon: 'youtube', url: 'https://youtube.com/@nixwokerbespokeleatherco', label: 'YouTube' },
  ];

  const mainCategories = [
    { label: 'JACKETS (MADE TO ORDER)', id: 'leather-jacket', productId: 'leather-jacket' },
    { label: 'MILITARY JACKETS', id: 'military-jacket', productId: 'military-jacket' },
    { label: 'MILITARY BAGS', id: 'military-bags', productId: 'military-bags' },
    { label: 'LEATHER WALLET', id: 'leather-wallet', productId: 'leather-wallet' },
  ];

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setShowDropdown(true);

    if (query.trim().length > 0) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
      setShowDropdown(false);
    }
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
    setSearchQuery('');
    setSearchResults([]);
    setShowDropdown(false);
    setIsSearchOpen(false);
  };

  const handleCategoryClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <nav className="relative">
      {/* LAYER 1: Social Media + Logo (BLACK) */}
      <div className="sticky top-0 z-40 bg-primary-black border-b border-primary-black">
        {/* MOBILE: Two Layer Layout */}
        <div className="md:hidden w-full">
          <div className="w-full px-6 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-primary-white hover:text-leather-brown transition-colors duration-300 hover:scale-110 transform"
                >
                  {social.icon === 'whatsapp' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.52 3.48C18.25 1.23 15.3 0 12 0 5.48 0 0 5.48 0 12c0 2.15.59 4.26 1.71 6.1L0 24l6.35-1.93C8.2 23.38 10.07 24 12 24c6.52 0 12-5.48 12-12 0-3.3-1.23-6.25-3.48-8.52zM12 22c-1.79 0-3.54-.48-5.07-1.39L6.28 21l-1.93-6.24C3.52 13.22 3 12.62 3 11.99 3 7.04 7.04 3 12 3c2.63 0 5.1.99 6.97 2.81 1.87 1.82 2.97 4.29 2.97 6.97 0 4.95-4.04 9-9 9zm5-9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-3 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-3 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"/>
                    </svg>
                  )}
                  {social.icon === 'instagram' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.646.069 4.85 0 3.204-.012 3.584-.07 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                    </svg>
                  )}
                  {social.icon === 'facebook' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  )}
                  {social.icon === 'youtube' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="text-primary-white font-black text-xs tracking-widest">Excellent</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="bg-green-500 w-4 h-4 flex items-center justify-center">
                    <span className="text-white text-xs leading-none">★</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full px-6 py-4 flex items-center justify-center border-t border-primary-black/30">
            <Link to="/" className="flex items-center justify-center flex-shrink-0">
              <img src={logo} alt="Nixwoker Bespoke" className="h-16 w-auto hover:opacity-80 transition-opacity" />
            </Link>
          </div>
        </div>

        {/* DESKTOP: Single Row Layout */}
        <div className="hidden md:block w-full px-6 md:px-10 lg:px-14 py-6 md:py-6 lg:py-8 relative">
          <div className="flex justify-between items-center gap-4 md:gap-6 lg:gap-8">
            <div className="flex items-center space-x-4 md:space-x-5 lg:space-x-6 z-20">
              <div className="flex items-center space-x-3 md:space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.icon}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-primary-white hover:text-leather-brown transition-colors duration-300 hover:scale-110 transform"
                  >
                    {social.icon === 'whatsapp' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.52 3.48C18.25 1.23 15.3 0 12 0 5.48 0 0 5.48 0 12c0 2.15.59 4.26 1.71 6.1L0 24l6.35-1.93C8.2 23.38 10.07 24 12 24c6.52 0 12-5.48 12-12 0-3.3-1.23-6.25-3.48-8.52zM12 22c-1.79 0-3.54-.48-5.07-1.39L6.28 21l-1.93-6.24C3.52 13.22 3 12.62 3 11.99 3 7.04 7.04 3 12 3c2.63 0 5.1.99 6.97 2.81 1.87 1.82 2.97 4.29 2.97 6.97 0 4.95-4.04 9-9 9zm5-9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-3 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-3 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"/>
                      </svg>
                    )}
                    {social.icon === 'instagram' && (
                      <svg className="w-5 h-5 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.646.069 4.85 0 3.204-.012 3.584-.07 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                      </svg>
                    )}
                    {social.icon === 'facebook' && (
                      <svg className="w-5 h-5 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    )}
                    {social.icon === 'youtube' && (
                      <svg className="w-5 h-5 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>

              <div className="flex items-center space-x-2 md:space-x-3">
                <span className="text-primary-white font-black text-xs md:text-sm tracking-widest">Excellent</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="bg-green-500 w-5 h-5 md:w-5 md:h-5 flex items-center justify-center">
                      <span className="text-white text-xs md:text-sm leading-none">★</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/" className="flex items-center justify-center flex-shrink-0 absolute left-1/2 transform -translate-x-1/2 z-10">
              <img src={logo} alt="Nixwoker Bespoke" className="h-14 md:h-16 lg:h-20 w-auto hover:opacity-80 transition-opacity" />
            </Link>

            <div className="hidden md:flex items-center space-x-8 md:space-x-10 lg:space-x-14 justify-end">
              <a href="/contact" className="flex flex-col items-center space-y-1 text-primary-white hover:text-leather-brown transition-colors duration-300 group">
                <svg className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span className="text-xs md:text-xs font-sans tracking-wide">Contact</span>
              </a>

              <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="flex flex-col items-center space-y-1 text-primary-white hover:text-leather-brown transition-colors duration-300 group">
                {isSearchOpen ? <X className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" /> : <Search className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" />}
                <span className="text-xs md:text-xs font-sans tracking-wide">Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SEARCH BAR - DESKTOP */}
      {isSearchOpen && (
        <div className="hidden md:block bg-white border-b border-gray-200 relative z-30">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6">
            <div className="flex relative">
              <input
                type="text"
                placeholder="Search by keyword / product description ..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="flex-1 px-4 py-3 bg-white text-black placeholder-gray-500 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                autoFocus
              />
              <button className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* DESKTOP DROPDOWN - FIXED POSITIONING */}
          {showDropdown && (searchResults.length > 0 || searchQuery.trim().length > 0) && (
            <div className="fixed left-0 right-0 top-auto bg-white border border-gray-300 border-t border-gray-300 max-h-96 overflow-y-auto z-50" style={{ top: '220px' }}>
              <div className="max-w-7xl mx-auto px-4 md:px-8">
                {searchResults.length > 0 ? (
                  searchResults.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => handleProductClick(product.id)}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 border-b border-gray-200 last:border-b-0 flex items-center gap-3 transition-colors group"
                    >
                      <img src={product.image} alt={product.name} className="w-12 h-16 object-cover" />
                      <div className="flex-1">
                        <p className="font-semibold text-black group-hover:text-leather-brown">{product.name}</p>
                        <p className="text-sm text-gray-600">{product.price}</p>
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="px-4 py-3 text-gray-500">No products found for "{searchQuery}"</div>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* MAIN NAVIGATION */}
      <div className="bg-white border-b border-primary-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* DESKTOP NAV - NOW CLICKABLE */}
          <div className="hidden lg:flex items-center justify-center space-x-8">
            {mainCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.productId)}
                className="px-4 py-4 text-xs md:text-sm font-sans font-black tracking-widest text-black hover:text-leather-brown border-b-2 border-transparent hover:border-leather-brown transition-all duration-300 uppercase cursor-pointer"
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* MOBILE TOGGLE */}
          <div className="lg:hidden flex items-center justify-between p-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center text-black hover:text-leather-brown transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="flex items-center text-black hover:text-leather-brown transition-colors"
              aria-label="Toggle search"
            >
              {isSearchOpen ? <X className="w-6 h-6" /> : <Search className="w-6 h-6" />}
            </button>
          </div>

          {/* MOBILE SEARCH */}
          {isSearchOpen && (
            <div className="lg:hidden bg-white border-t border-b border-gray-200 px-4 py-4">
              <div className="flex gap-0">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="flex-1 px-4 py-3 bg-white text-black placeholder-gray-500 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                  autoFocus
                />
                <button className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>

              {/* MOBILE DROPDOWN */}
              {showDropdown && (searchResults.length > 0 || searchQuery.trim().length > 0) && (
                <div className="mt-2 bg-white border border-gray-300 max-h-80 overflow-y-auto">
                  {searchResults.length > 0 ? (
                    searchResults.map((product) => (
                      <button
                        key={product.id}
                        onClick={() => handleProductClick(product.id)}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50 border-b border-gray-200 last:border-b-0 flex items-center gap-3 transition-colors group"
                      >
                        <img src={product.image} alt={product.name} className="w-12 h-16 object-cover" />
                        <div className="flex-1">
                          <p className="font-semibold text-black group-hover:text-leather-brown">{product.name}</p>
                          <p className="text-sm text-gray-600">{product.price}</p>
                        </div>
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-gray-500">No products found for "{searchQuery}"</div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* MOBILE MENU - NOW CLICKABLE */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white pb-4 space-y-0 border-t border-gray-200">
              {mainCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.productId)}
                  className="block w-full text-left px-4 py-4 text-xs md:text-sm font-sans font-black text-black hover:bg-gray-50 transition-colors uppercase tracking-widest border-b border-gray-200 last:border-b-0 cursor-pointer"
                >
                  {cat.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* BRAND LINE */}
      <div className="bg-primary-black border-b border-primary-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-1 md:py-3">
          <p className="text-xs md:text-sm font-sans tracking-tight md:tracking-widest text-primary-white text-center leading-tight md:leading-relaxed font-semibold" style={{ fontSize: "14px", marginBottom: "0" }}>
            Your Story Deserves More Than Ordinary.Handcrafted Just for You — Experience the Timeless Elegance of True Bespoke Craftsmanship.
          </p>
        </div>
      </div>
    </nav>
  );
}