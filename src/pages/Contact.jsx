import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    telephone: '',
    enquiry: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    document.title = 'Contact - Nixwoker Bespoke';
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Contact Nixwoker Bespoke for custom leather jackets, military bags, and accessories. Email, phone, or visit our showroom.');
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { firstName, surname, email, telephone, enquiry } = formData;
    const mailtoLink = `mailto:7oceansimpexinternational@gmail.com?subject=Contact Form Submission - ${firstName} ${surname}&body=${encodeURIComponent(`Name: ${firstName} ${surname}\\nEmail: ${email}\\nTelephone: ${telephone}\\n\\nEnquiry:\\n${enquiry}`)}`;
    window.location.href = mailtoLink;

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-primary-black h-[110px] md:h-[180px] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wider text-white">
            Contact US
          </h1>
        </div>
      </section>

      {/* ===== BREADCRUMB NAVIGATION ===== */}
      <div className="bg-primary-white border-b border-gray-200 px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 text-sm md:text-base">
            <a href="/" className="text-primary-black hover:text-black transition-colors font-medium">
              Home
            </a>
            <span className="text-gray-400">/</span>
            <span className="text-primary-black font-semibold">Contact Us</span>
          </div>
        </div>
      </div>

      {/* ===== MAIN CONTACT SECTION ===== */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-primary-white">
        <div className="max-w-7xl mx-auto">

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">

            {/* LEFT COLUMN - CONTACT INFO */}
            <div className="space-y-10">

              {/* Section Title */}
              <div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-primary-black mb-8" style={{ letterSpacing: '0.05em' }}>
                  CONTACT NIXWOKER BESPOKE
                </h2>
              </div>

              {/* Address Section */}
              <div>
                <h3 className="text-2xl md:text-2xl font-black tracking-tight text-primary-black mb-6 uppercase" style={{ letterSpacing: '0.05em' }}>
                  Address
                </h3>
                <div className="space-y-1 text-primary-black/80 leading-relaxed font-medium">
                  <p className="font-bold text-primary-black text-base">Nixwoker Bespoke Leather Co.</p>
                  <p>C/25 EWS JDA,</p>
                  <p>JABALPUR,</p>
                  <p>MADHYA PRADESH</p>
                  <p>INDIA - 482002</p>
                </div>

                {/* Contact Details */}
                <div className="mt-8 space-y-4">
                  <a
                    href="tel:+917999665228"
                    className="flex items-center space-x-3 text-primary-black hover:text-leather-brown transition-colors font-bold text-base"
                  >
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    <span>+917999665228</span>
                  </a>
                  <a
                    href="mailto:7oceansimpexinternational@gmail.com"
                    className="flex items-center space-x-3 text-primary-black hover:text-leather-brown transition-colors font-bold text-base"
                  >
                    <Mail className="w-5 h-5 flex-shrink-0" />
                    <span>7oceansimpexinternational@gmail.com</span>
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div>
                <h4 className="text-3xl font-black tracking-tight text-primary-black mb-5 uppercase" style={{ letterSpacing: '0.05em' }}>
                  Office Opening Hours
                </h4>
                <div className="space-y-2 text-primary-black/85 font-medium">
                  <p><span className="font-bold">Monday to Saturday : </span> 10:00am - 10:00 pm</p>
                </div>
              </div>

              {/* Social Media / Follow Us */}
              <div>
                <h4 className="text-2xl font-black tracking-tight text-primary-black mb-5 uppercase" style={{ letterSpacing: '0.05em' }}>
                  Follow Us
                </h4>
                <div className="flex items-center space-x-6">
                  <a
                    href="https://www.instagram.com/nixwokerleatherco?igsh=MTZjczgxcmVjazh0cg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-black hover:text-leather-brown hover:scale-110 transition-all"
                    aria-label="Instagram"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.646.069 4.85 0 3.204-.012 3.584-.07 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                      <path d="M5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/share/1HTzAxBzau/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-black hover:text-leather-brown hover:scale-110 transition-all"
                    aria-label="Facebook"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </div>

             
            </div>

            {/* RIGHT COLUMN - CONTACT FORM */}
            <div>
              {/* Form Header */}
              <div className="mb-10">
                <div className="flex items-start space-x-3 mb-4">
                  <Mail className="w-6 h-6 text-primary-black flex-shrink-0 mt-1" />
                  <h3 className="text-3xl md:text-4xl font-black tracking-tight text-primary-black" style={{ letterSpacing: '0.05em' }}>
                    EMAIL US A QUESTION
                  </h3>
                </div>
                <p className="text-primary-black/70 text-sm leading-relaxed ml-9">
                  Before you contact us, please check our <a href="/faq" className="font-bold text-leather-brown hover:underline">Frequently Asked Questions</a> in case we have already answered your question there.
                </p>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* First Name */}
                <div>
                  <label htmlFor="firstName" className="block text-sm font-bold text-primary-black mb-3">
                    First Name<span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your first name"
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary-black focus:outline-none transition-colors bg-white placeholder-gray-400 text-primary-black font-medium"
                  />
                </div>

                {/* Surname */}
                <div>
                  <label htmlFor="surname" className="block text-sm font-bold text-primary-black mb-3">
                    Surname<span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    required
                    placeholder="Enter your surname"
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary-black focus:outline-none transition-colors bg-white placeholder-gray-400 text-primary-black font-medium"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-primary-black mb-3">
                    Email Address<span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary-black focus:outline-none transition-colors bg-white placeholder-gray-400 text-primary-black font-medium"
                  />
                </div>

                {/* Telephone Number */}
                <div>
                  <label htmlFor="telephone" className="block text-sm font-bold text-primary-black mb-3">
                    Telephone Number<span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    required
                    placeholder="Your phone number"
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary-black focus:outline-none transition-colors bg-white placeholder-gray-400 text-primary-black font-medium"
                  />
                </div>

                {/* Enquiry / Ask a Question */}
                <div>
                  <label htmlFor="enquiry" className="block text-sm font-bold text-primary-black mb-3">
                    Your Enquiry / Ask Us A Question<span className="text-red-500 ml-1">*</span>
                  </label>
                  <textarea
                    id="enquiry"
                    name="enquiry"
                    value={formData.enquiry}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Please describe your enquiry in detail..."
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary-black focus:outline-none transition-colors bg-white placeholder-gray-400 text-primary-black font-medium resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-primary-black text-primary-white font-black tracking-widest uppercase text-sm md:text-base hover:bg-gray-900 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                >
                  {isSubmitting ? 'SENDING...' : 'SEND ENQUIRY'}
                </button>

                {/* Success Message */}
                {submitMessage && (
                  <div className="p-4 bg-green-50 border-2 border-green-500 text-green-700 text-sm font-medium rounded">
                    {submitMessage}
                  </div>
                )}
              </form>

              {/* Additional Info */}
              <div className="mt-8 p-5 bg-gray-50 border-l-4 border-leather-brown">
                <p className="text-xs text-primary-black/70 leading-relaxed">
                  <span className="font-bold">Note:</span> We typically respond to enquiries within 24-48 hours during business days. For urgent matters, please call us directly at the number above.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}