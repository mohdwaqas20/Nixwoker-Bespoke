import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { faqData } from '../data/faqData';

export default function FAQ() {
  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState(tabParam || 'orders');
  const [expandedId, setExpandedId] = useState(null);
  const tabsRef = useRef(null);

  // Update active tab when URL query parameter changes and scroll to tabs
  useEffect(() => {
    if (tabParam) {
      setActiveTab(tabParam);
      setExpandedId(null);
      // Scroll to tabs section with smooth behavior
      setTimeout(() => {
        if (tabsRef.current) {
          tabsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 0);
    }
  }, [tabParam]);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const tabs = [
    { id: 'orders', label: 'Orders' },
    { id: 'postage', label: 'Postage' },
    { id: 'returns', label: 'Returns' },
    { id: 'payment', label: 'Payment' },
    { id: 'sizing', label: 'Sizing' },
    { id: 'leather', label: 'Leather' }
  ];

  const currentFaqs = faqData[activeTab] || [];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <div className="bg-neutral-900 text-white py-12 md:py-16" data-faq-hero>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h1>
        </div>
      </div>

      {/* ===== BREADCRUMB NAVIGATION ===== */}
      <div className="bg-primary-white border-b border-gray-200 px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 text-sm md:text-base">
            <a href="/" className="text-primary-black hover:text-black transition-colors font-medium">
              Home
            </a>
            <span className="text-gray-400">/</span>
            <span className="text-primary-black font-semibold">FAQs</span>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12" ref={tabsRef} data-faq-tabs>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setExpandedId(null);
              }}
              className={`py-3 px-3 md:px-4 font-bold text-sm md:text-base transition-all border-2 ${
                activeTab === tab.id
                  ? 'bg-neutral-900 text-white border-neutral-900'
                  : 'bg-white text-neutral-900 border-neutral-300 hover:border-neutral-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Section Title */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex-1 h-1 bg-neutral-900"></div>
          <h2 className="px-6 text-4xl md:text-5xl font-bold text-neutral-900 text-center flex-shrink-0">
            {tabs.find(t => t.id === activeTab)?.label}
          </h2>
          <div className="flex-1 h-1 bg-neutral-900"></div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6 mb-16">
          {currentFaqs.map((faq) => (
            <div key={faq.id} className="border-b-2 border-neutral-200 pb-6">
              <button
                onClick={() => toggleExpand(faq.id)}
                className="w-full flex items-start justify-between gap-4 text-left hover:text-neutral-600 transition-colors"
              >
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 flex-1">
                  {faq.question}
                </h3>
                <span
                  className={`text-2xl flex-shrink-0 transition-transform duration-300 ${
                    expandedId === faq.id ? 'transform rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>

              {/* Expandable Answer */}
              {expandedId === faq.id && (
                <div className="mt-4 text-neutral-700 leading-relaxed space-y-4 animate-in">
                  {faq.answer.split('\n\n').map((paragraph, idx) => (
                    <div key={idx}>
                      {paragraph.split('\n').map((line, lineIdx) => (
                        <p key={lineIdx}>{line}</p>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-neutral-100 rounded-lg p-8 md:p-12 text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Can't find the answer?
          </h3>
          <p className="text-neutral-700 mb-6">
            Get in touch with our team directly for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917999665228"
              className="inline-block bg-neutral-900 text-white px-6 py-3 font-bold hover:bg-neutral-800 transition-colors"
            >
              Call Us: +917999665228
            </a>
            <a
              href="mailto:7oceansimpexinternational@gmail.com"
              className="inline-block bg-white text-neutral-900 px-6 py-3 font-bold border-2 border-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}