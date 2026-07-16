import { Link, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleReturnsClick = useCallback(() => {
    navigate('/faq?tab=returns');
  }, [navigate]);

  const handleSizingClick = useCallback(() => {
    navigate('/faq?tab=sizing');
  }, [navigate]);

  const socials = [
    { name: 'Instagram', url: 'https://www.instagram.com/nixwokerleatherco?igsh=MTZjczgxcmVjazh0cg==', icon: FaInstagram },
    { name: 'Facebook', url: 'https://www.facebook.com/share/1HTzAxBzau/', icon: FaFacebookF },
    { name: 'YouTube', url: 'https://youtube.com/@nixwokerbespokeleatherco', icon: FaYoutube }
  ];

  return (
    <footer className="bg-[#343330]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Address - Hidden on mobile */}
          <div className="hidden md:block">
            <h4 className="text-lg font-semibold leading-6 text-white mb-4 text-center md:text-left">Address</h4>
            <div className="text-sm font-normal leading-tight text-gray-300 space-y-0 text-center md:text-left">
              <div className="text-white transition-colors duration-300 font-semibold">Nixwoker Bespoke</div>
              <div className="text-white transition-colors duration-300 font-semibold">Leather Co.</div>
              <div>C/25 EWS JDA</div>
              <div>JABALPUR</div>
              <div>MADHYA PRADESH</div>
              <div>INDIA - 482002</div>
              <div className="pt-3">GST No. - 23AQCPP0753B1ZF</div>
            </div>
          </div>

          {/* Column 2: Contact Us */}
          <div>
            <h4 className="text-lg font-semibold leading-6 text-white mb-4 text-center md:text-left">Contact Us</h4>
            <div className="text-sm font-normal leading-tight text-gray-300 space-y-1 text-center md:text-left">
              <div>
                <span className="text-gray-300">Tel: </span>
                <a 
                  href="tel:+917999665228" 
                  className="text-white transition-colors duration-300 font-semibold"
                >
                  +917999665228
                </a>
              </div>
              <div>
                <a 
                  href="mailto:7oceansimpexinternational@gmail.com" 
                  className="text-white transition-colors duration-300 font-semibold break-all"
                >
                  7oceansimpexinternational@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <h4 className="text-lg font-semibold leading-6 text-white mb-4 text-center md:text-left"></h4>
            <ul className="space-y-2 mb-6 text-center md:text-left">
              <li className="leading-none py-0">
                <Link 
                  to="/process" 
                  className="text-sm font-semibold text-white transition-colors duration-300 block"
                >
                  Our Process
                </Link>
              </li>
              <li className="leading-none py-0">
                <Link 
                  to="/about" 
                  className="text-sm font-semibold text-white transition-colors duration-300 block"
                >
                  Our Story
                </Link>
              </li>
              <li className="leading-none py-0">
                <Link 
                  to="/faq" 
                  className="text-sm font-semibold text-white transition-colors duration-300 block"
                >
                  FAQs
                </Link>
              </li>
              <li className="leading-none py-0">
                <Link 
                  to="/leathers" 
                  className="text-sm font-semibold text-white transition-colors duration-300 block"
                >
                  Our Leathers
                </Link>
              </li>
              <li className="leading-none py-0">
                <a 
                  href="#" 
                  className="text-sm font-semibold text-white transition-colors duration-300 block"
                >
                  Our Linings
                </a>
              </li>
              <li className="leading-none py-0">
                <button 
                  onClick={handleReturnsClick} 
                  className="text-sm font-semibold text-white transition-colors duration-300 bg-none border-none p-0 cursor-pointer block w-full md:text-left"
                >
                  Returns
                </button>
              </li>
              <li className="leading-none py-0">
                <button 
                  onClick={handleSizingClick} 
                  className="text-sm font-semibold text-white transition-colors duration-300 bg-none border-none p-0 cursor-pointer block w-full md:text-left"
                >
                  Sizing
                </button>
              </li>
              <li className="leading-none py-0">
                <Link 
                  to="/gallery" 
                  className="text-sm font-semibold text-white transition-colors duration-300 block"
                >
                  Gallery
                </Link>
              </li>
            </ul>

            {/* Follow Us - Mobile/Tablet */}
            <div className="lg:hidden">
              <h4 className="text-lg font-semibold leading-6 text-white mb-3 text-center md:text-left">Follow Us</h4>
              <div className="flex gap-4 justify-center md:justify-start">
                {socials.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="text-white transition-colors duration-300"
                      title={social.name}
                    >
                      <IconComponent size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 4: Hours */}
          <div>
            <h4 className="text-lg font-semibold leading-6 text-white mb-4 text-center md:text-left">Office Opening Hours</h4>
            <div className="text-sm font-normal leading-tight text-gray-300 space-y-0 mb-4 text-center md:text-left">
              <div>Monday to Saturday</div>
              <div>10:00 am - 10:00 pm</div>
            </div>
            
            {/* Follow Us - Desktop */}
            <div className="hidden lg:block mt-6">
              <h4 className="text-lg font-semibold leading-6 text-white mb-3">Follow Us</h4>
              <div className="flex gap-4">
                {socials.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="text-white transition-colors duration-300"
                      title={social.name}
                    >
                      <IconComponent size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-[#2B2A27] border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
          <div className="flex flex-col gap-3 text-center md:grid md:grid-cols-2 md:gap-6">
            {/* Left: Copyright */}
            <div className="text-sm font-normal leading-tight text-gray-300">
              &copy; Copyright Nixwoker Bespoke {currentYear} | All Rights Reserved
            </div>

            {/* Right: Footer Links */}
            <div className="text-sm font-normal leading-tight text-center">
              <Link to="/privacy" className="text-gray-300 transition-colors duration-300">Privacy</Link>
              <span className="text-gray-400 mx-1.5">|</span>
              <Link to="/terms" className="text-gray-300 transition-colors duration-300">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}