import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Privacy() {
  useEffect(() => {
    document.title = 'Privacy Policy - Nixwoker Bespoke';
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Read Nixwoker Bespoke privacy policy. We protect your personal data and privacy with transparency and security.');
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>

      {/* Breadcrumb */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="text-sm text-gray-700">
            <Link to="/" className="hover:text-primary-black transition-colors">Home</Link>
            <span className="mx-2"></span>
            <span className="text-gray-900 font-medium">Privacy Policy</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black tracking-wider text-primary-black">
              NIXWOKER BESPOKE – PRIVACY POLICY
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <div>
              <h3 className="text-2xl md:text-1xl font-black text-primary-black mb-6">INTRODUCTION</h3>
              <div className="space-y-4 text-sm md:text-base text-gray-800 leading-7">
                <p>
                  Welcome to Nixwoker Bespoke Leather Clothing Co. ("Nixwoker", "we", "our", or "us").
                </p>
                <p>
                  We are committed to protecting your privacy and handling your personal information responsibly. This Privacy Policy explains how we collect, use, store, and protect your personal data when you visit our website, place an order, communicate with us, or use any of our services.
                </p>
                <p>
                  This Privacy Policy is intended to comply with applicable Indian privacy and data protection laws.
                </p>
                <p className="font-semibold">Effective Date: July 15, 2026</p>
              </div>
            </div>

            {/* Company Information */}
            <div>
              <h3 className="text-2xl md:text-1xl font-black text-primary-black mb-6">COMPANY INFORMATION</h3>
              <div className="space-y-4 text-sm md:text-base text-gray-800 leading-7">
                <p className="font-semibold">Nixwoker Bespoke Leather Clothing Co.</p>
                <p>India</p>
                <p>Email: <a href="mailto:support@nixwoker.com" className="text-primary-black font-semibold hover:underline">support@nixwoker.com</a></p>
                <p>Website: <a href="http://www.nixwoker.com" className="text-primary-black font-semibold hover:underline">www.nixwoker.com</a></p>
              </div>
            </div>

            {/* Section 3 - Information We Collect */}
            <div>
              <h3 className="text-2xl md:text-1xl font-black text-primary-black mb-6">3. INFORMATION WE COLLECT</h3>
              <div className="space-y-4 text-sm md:text-base text-gray-800 leading-7">
                <p>Depending on your interaction with us, we may collect the following information:</p>
                <ul className="ml-4 space-y-2 list-disc list-inside">
                  <li>Full Name</li>
                  <li>Email Address</li>
                  <li>Mobile Number</li>
                  <li>Shipping Address</li>
                  <li>Billing Address</li>
                  <li>Country and Postal Code</li>
                  <li>Order Details</li>
                  <li>Jacket Measurements and Custom Sizing Information</li>
                  <li>Payment Information (Payment details are processed securely by our payment partners. We do not store your debit or credit card information.)</li>
                  <li>Company Name (Optional)</li>
                  <li>Any notes or customization instructions you voluntarily provide</li>
                  <li>Communications exchanged through email, WhatsApp, social media, or customer support</li>
                </ul>
              </div>
            </div>

            {/* Section 4 - How We Use Your Information */}
            <div>
              <h3 className="text-2xl md:text-1xl font-black text-primary-black mb-6">4. HOW WE USE YOUR INFORMATION</h3>
              <div className="space-y-4 text-sm md:text-base text-gray-800 leading-7">
                <p>We use your information to:</p>
                <ul className="ml-4 space-y-2 list-disc list-inside">
                  <li>Process and fulfill your orders</li>
                  <li>Manufacture customized leather garments</li>
                  <li>Deliver products</li>
                  <li>Process payments</li>
                  <li>Provide customer support</li>
                  <li>Respond to enquiries</li>
                  <li>Improve our products and services</li>
                  <li>Send order updates</li>
                  <li>Prevent fraud and unauthorized transactions</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </div>

            {/* Section 5 - Cookies and Website Analytics */}
            <div>
              <h3 className="text-2xl md:text-1xl font-black text-primary-black mb-6">5. COOKIES AND WEBSITE ANALYTICS</h3>
              <div className="space-y-4 text-sm md:text-base text-gray-800 leading-7">
                <p>Our website may use cookies and similar technologies to:</p>
                <ul className="ml-4 space-y-2 list-disc list-inside">
                  <li>Improve website functionality</li>
                  <li>Remember your preferences</li>
                  <li>Measure website traffic</li>
                  <li>Analyze visitor behavior</li>
                  <li>Improve user experience</li>
                </ul>
                <p>
                  You may disable cookies through your browser settings, although some website features may not function properly.
                </p>
              </div>
            </div>

            {/* Section 6 - Marketing Communications */}
            <div>
              <h3 className="text-2xl md:text-1xl font-black text-primary-black mb-6">6. MARKETING COMMUNICATIONS</h3>
              <div className="space-y-4 text-sm md:text-base text-gray-800 leading-7">
                <p>With your permission, we may occasionally send:</p>
                <ul className="ml-4 space-y-2 list-disc list-inside">
                  <li>New product launches</li>
                  <li>Exclusive offers</li>
                  <li>Leather care guides</li>
                  <li>Brand stories</li>
                  <li>Promotional campaigns</li>
                  <li>Event announcements</li>
                </ul>
                <p>
                  You may unsubscribe at any time by clicking the "Unsubscribe" link in our emails or by contacting us directly.
                </p>
              </div>
            </div>

            {/* Section 7 - Sharing of Information */}
            <div>
              <h3 className="text-2xl md:text-1xl font-black text-primary-black mb-6">7. SHARING OF INFORMATION</h3>
              <div className="space-y-4 text-sm md:text-base text-gray-800 leading-7">
                <p>We do not sell or rent your personal information.</p>
                <p>We may share your information only with trusted service providers when necessary, including:</p>
                <ul className="ml-4 space-y-2 list-disc list-inside">
                  <li>Shipping and courier companies</li>
                  <li>Payment gateway providers</li>
                  <li>Website hosting providers</li>
                  <li>Marketing and email service providers</li>
                  <li>Government authorities when legally required</li>
                </ul>
                <p>
                  These service providers are required to protect your information and use it only for authorized purposes.
                </p>
              </div>
            </div>

            {/* Section 8 - Data Security */}
            <div>
              <h3 className="text-2xl md:text-1xl font-black text-primary-black mb-6">8. DATA SECURITY</h3>
              <div className="space-y-4 text-sm md:text-base text-gray-800 leading-7">
                <p>We take appropriate technical and organizational measures to protect your personal information against:</p>
                <ul className="ml-4 space-y-2 list-disc list-inside">
                  <li>Unauthorized access</li>
                  <li>Loss</li>
                  <li>Misuse</li>
                  <li>Disclosure</li>
                  <li>Alteration</li>
                  <li>Destruction</li>
                </ul>
                <p>
                  Our website uses SSL encryption to help secure information transmitted online.
                </p>
                <p>
                  However, no method of electronic transmission or storage is completely secure, and therefore absolute security cannot be guaranteed.
                </p>
              </div>
            </div>

            {/* Section 9 - Your Rights */}
            <div>
              <h3 className="text-2xl md:text-1xl font-black text-primary-black mb-6">9. YOUR RIGHTS</h3>
              <div className="space-y-4 text-sm md:text-base text-gray-800 leading-7">
                <p>You may request to:</p>
                <ul className="ml-4 space-y-2 list-disc list-inside">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Update your details</li>
                  <li>Delete your personal information (subject to applicable legal obligations)</li>
                  <li>Withdraw consent for marketing communications</li>
                </ul>
                <p>To exercise these rights, please contact us at:</p>
                <p className="ml-4 font-semibold">
                  <a href="mailto:support@nixwoker.com" className="text-primary-black hover:underline">support@nixwoker.com</a>
                </p>
              </div>
            </div>

            {/* Section 10 - Customized Garments */}
            <div>
              <h3 className="text-2xl md:text-1xl  font-black text-primary-black mb-6">10. CUSTOMIZED GARMENTS</h3>
              <div className="space-y-4 text-sm md:text-base text-gray-800 leading-7">
                <p>
                  Nixwoker specializes in bespoke leather clothing.
                </p>
                <p>
                  Measurements, customization details, design preferences, embroidery specifications, and artwork submitted by customers are collected solely for the purpose of manufacturing customized products and maintaining order records.
                </p>
              </div>
            </div>

            {/* Section 11 - International Customers */}
            <div>
              <h3 className="text-2xl md:text-1xl font-black text-primary-black mb-6">11. INTERNATIONAL CUSTOMERS</h3>
              <div className="space-y-4 text-sm md:text-base text-gray-800 leading-7">
                <p>
                  If you place an order from outside India, your information may be processed in India for order fulfillment, customer support, and production purposes.
                </p>
                <p>
                  By placing an order, you consent to such processing.
                </p>
              </div>
            </div>

            {/* Section 12 - Third-Party Links */}
            <div>
              <h3 className="text-2xl md:text-1xl font-black text-primary-black mb-6">12. THIRD-PARTY LINKS</h3>
              <div className="space-y-4 text-sm md:text-base text-gray-800 leading-7">
                <p>
                  Our website may contain links to third-party websites.
                </p>
                <p>
                  We are not responsible for the privacy practices, content, or security of those websites. We encourage users to review their respective privacy policies.
                </p>
              </div>
            </div>

            {/* Section 13 - Fraud Prevention */}
            <div>
              <h3 className="text-2xl md:text-1xl font-black text-primary-black mb-6">13. FRAUD PREVENTION</h3>
              <div className="space-y-4 text-sm md:text-base text-gray-800 leading-7">
                <p>
                  To protect our customers and business, we may use personal information to investigate suspected fraud, unauthorized transactions, chargebacks, or unlawful activities.
                </p>
                <p>
                  Where legally required, information may be shared with law enforcement agencies or financial institutions.
                </p>
              </div>
            </div>

            {/* Section 14 - Children's Privacy */}
            <div>
              <h3 className="text-2xl md:text-1xl font-black text-primary-black mb-6">14. CHILDREN'S PRIVACY</h3>
              <div className="space-y-4 text-sm md:text-base text-gray-800 leading-7">
                <p>
                  Our website and products are intended for individuals aged 18 years or older.
                </p>
                <p>
                  We do not knowingly collect personal information from children.
                </p>
              </div>
            </div>

            {/* Section 15 - Changes to this Privacy Policy */}
            <div>
              <h3 className="text-2xl md:text-1xl font-black text-primary-black mb-6">15. CHANGES TO THIS PRIVACY POLICY</h3>
              <div className="space-y-4 text-sm md:text-base text-gray-800 leading-7">
                <p>
                  We may update this Privacy Policy from time to time.
                </p>
                <p>
                  Any revisions will be posted on this page with the updated Effective Date.
                </p>
                <p>
                  Continued use of our website constitutes acceptance of the revised Privacy Policy.
                </p>
              </div>
            </div>

            {/* Section 16 - Contact Us */}
            <div>
              <h3 className="text-2xl md:text-1xl font-black text-primary-black mb-6">16. CONTACT US</h3>
              <div className="space-y-4 text-sm md:text-base text-gray-800 leading-7">
                <p>If you have any questions regarding this Privacy Policy or your personal information, please contact:</p>
                <p className="font-semibold">Nixwoker Bespoke Leather Clothing Co.</p>
                <p>India</p>
                <p>Email: <a href="mailto:7oceansimpexinternational@gmail.com" className="text-primary-black font-semibold hover:underline">7oceansimpexinternational@gmail.com</a></p>
                <p>Website: <a href="http://www.nixwokerleatherco.com" className="text-primary-black font-semibold hover:underline">www.nixwokerleatherco.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}