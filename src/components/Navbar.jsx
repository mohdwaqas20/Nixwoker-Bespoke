import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, ChevronDown, Menu } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState('leather-jacket');

  // Social media links
  const socialLinks = [
    { icon: 'instagram', url: 'https://www.instagram.com/nixwokerleatherco?igsh=MTZjczgxcmVjazh0cg==', label: 'Instagram' },
    { icon: 'facebook', url: 'https://www.facebook.com/share/1HTzAxBzau/', label: 'Facebook' },
    { icon: 'youtube', url: 'https://youtube.com/@nixwokerbespokeleatherco', label: 'YouTube' },
  ];

  // Main product categories
  const mainCategories = [
    { label: 'JACKETS (MADE TO ORDER)', id: 'leather-jacket'},
    { label: 'MILITARY JACKETS', id: 'canvas-jackets' },
    { label: 'MILITARY BAGS', id: 'canvas-bags' },
    { label: 'LEATHER WALLET', id: 'edc-wallet' },
  ];

  

  return (
    <nav>
      {/* ===== LAYER 1: Social Media + Logo (BLACK) ===== */}
      <div className="sticky top-0 z-50 bg-primary-black border-b border-primary-black">
        {/* MOBILE: Two Layer Layout */}
        <div className="md:hidden w-full">
          {/* Layer 1: Social Media Icons + Rating */}
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
            {/* Rating Display - Mobile Right */}
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

          {/* Layer 2: Logo Only */}
          <div className="w-full px-6 py-4 flex items-center justify-center border-t border-primary-black/30">
            <Link to="/" className="flex items-center justify-center flex-shrink-0">
              <img
                src={logo}
                alt="Nixwoker Bespoke"
                className="h-16 w-auto hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>
        </div>

        {/* DESKTOP: Single Row Layout */}
        <div className="hidden md:block w-full px-6 md:px-10 lg:px-14 py-6 md:py-6 lg:py-8 relative">
          <div className="flex justify-between items-center gap-4 md:gap-6 lg:gap-8">
            {/* Left: Small Social Media Icons + Rating */}
            <div className="flex items-center space-x-4 md:space-x-5 lg:space-x-6 z-20">
              {/* Social Media Icons */}
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

              {/* Rating Display - After Social Icons */}
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

            {/* Center: Logo */}
            <Link to="/" className="flex items-center justify-center flex-shrink-0 absolute left-1/2 transform -translate-x-1/2 z-10">
              <img
                src={logo}
                alt="Nixwoker Bespoke"
                className="h-14 md:h-16 lg:h-20 w-auto hover:opacity-80 transition-opacity"
              />
            </Link>

            {/* Right: Actions - HIDDEN ON MOBILE */}
            <div className="hidden md:flex items-center space-x-8 md:space-x-10 lg:space-x-14 justify-end">
              {/* Contact with Label */}
              <a
                href="/contact"
                className="flex flex-col items-center space-y-1 text-primary-white hover:text-leather-brown transition-colors duration-300 group"
              >
                <svg className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span className="text-xs md:text-xs font-sans tracking-wide">Contact</span>
              </a>

              {/* Search with Label */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="flex flex-col items-center space-y-1 text-primary-white hover:text-leather-brown transition-colors duration-300 group"
              >
                {isSearchOpen ? <X className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" /> : <Search className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" />}
                <span className="text-xs md:text-xs font-sans tracking-wide">Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== LAYER 2: Desktop Search Bar ===== */}
      {isSearchOpen && (
        <div className="hidden md:block bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6">
            {/* Search Input */}
            <div className="flex">
              <input
                type="text"
                placeholder="Search by keyword / product description ..."
                className="flex-1 px-4 py-3 bg-white text-black placeholder-gray-500 border border-gray-300 rounded-none focus:outline-none focus:border-black transition-colors"
              />
              <button className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== LAYER 4: Main Navigation (WHITE BACKGROUND) ===== */}
      <div className="bg-white border-b border-primary-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center space-x-8">
            {mainCategories.map((cat) => (
              <div key={cat.id} className="relative group">
                <button
                  className="px-4 py-4 text-xs md:text-sm font-sans font-black tracking-widest text-black hover:text-leather-brown border-b-2 border-transparent hover:border-leather-brown transition-all duration-300 flex items-center gap-2 uppercase"
                >
                  {cat.label}
                  {cat.hasSubcategories && <ChevronDown className="w-4 h-4" />}
                </button>

                {/* Desktop Dropdown */}
                {cat.hasSubcategories && mainCategorySubcategories[cat.id] && (
                  <div className="absolute left-0 top-full mt-0 w-48 bg-primary-black border border-leather-brown rounded shadow-lg z-20 hidden group-hover:block">
                    {mainCategorySubcategories[cat.id].map((subcat, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="block px-4 py-3 text-sm font-sans text-primary-white hover:text-leather-brown hover:bg-primary-white/5 transition-colors border-b border-primary-white/10 last:border-b-0"
                      >
                        {subcat}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Toggle - Hamburger and Search Icons */}
          <div className="lg:hidden flex items-center justify-between p-4">
            {/* Hamburger Menu Icon */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center text-black hover:text-leather-brown transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Mobile Search Icon */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="flex items-center text-black hover:text-leather-brown transition-colors"
              aria-label="Toggle search"
            >
              {isSearchOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Search className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Search Dialog - Opens Below Navigation */}
          {isSearchOpen && (
            <div className="lg:hidden bg-white border-t border-b border-gray-200 px-4 py-4 md:py-6">
              {/* Search Input */}
              <div className="flex gap-0">
                <input
                  type="text"
                  placeholder="Search by keyword / product description ..."
                  className="flex-1 px-4 py-3 bg-white text-black placeholder-gray-500 border border-gray-300 rounded-none focus:outline-none focus:border-black transition-colors"
                />
                <button className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* Mobile Menu - WHITE BACKGROUND */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white pb-4 space-y-0 border-t border-gray-200">
              {mainCategories.map((cat) => (
                <div key={cat.id} className="border-b border-gray-200">
                  <button
                    onClick={() => setExpandedCategory(expandedCategory === cat.id ? null : cat.id)}
                    className="block w-full text-left px-4 py-4 text-xs md:text-sm font-sans font-black text-black hover:bg-gray-50 transition-colors flex justify-between items-center uppercase tracking-widest"
                  >
                    <span>{cat.label}</span>
                    {cat.hasSubcategories && (
                      <ChevronDown
                        className={`w-5 h-5 text-gray-600 transform transition-transform duration-300 ${expandedCategory === cat.id ? 'rotate-180' : ''
                          }`}
                      />
                    )}
                  </button>

                  {/* Mobile Subcategories - Expanded State */}
                  {cat.hasSubcategories && mainCategorySubcategories[cat.id] && expandedCategory === cat.id && (
                    <div className="bg-gray-50">
                      {mainCategorySubcategories[cat.id].map((subcat, idx) => (
                        <a
                          key={idx}
                          href="#"
                          className="block px-8 py-3 text-sm font-sans text-black hover:text-leather-brown hover:bg-white transition-colors border-b border-gray-200 last:border-b-0"
                        >
                          {subcat}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ===== LAYER 5: Brand Line (BLACK) ===== */}
      <div className="bg-primary-black border-b border-primary-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-1 md:py-3">
          <p className="text-xs md:text-sm font-sans tracking-tight md:tracking-widest text-primary-white  text-center leading-tight md:leading-relaxed font-semibold" style={{ fontSize: "14px", marginBottom: "0" }}>
            Your Story Deserves More Than Ordinary.Handcrafted Just for You — Experience the Timeless Elegance of True Bespoke Craftsmanship.
          </p>
        </div>
      </div>

      {/* Animation for dropdown */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
}