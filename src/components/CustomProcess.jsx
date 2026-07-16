import p0Image from '../assets/custom/p1.jpeg';
import p1Image from '../assets/custom/p0.jpeg';
import p2Image from '../assets/custom/p2.jpeg';
import p3Image from '../assets/custom/p3.jpeg';
import p4Image from '../assets/custom/p4.jpeg';
import p5Image from '../assets/custom/p5.jpeg';
import p6Image from '../assets/custom/p6.jpeg';
import p7Image from '../assets/custom/p7.jpeg';
import { Underline } from 'lucide-react';

export default function CustomProcess() {
  const steps = [
    {
      number: '01',
      title: 'Share Reference',
      description: 'Send us a reference image of the leather jacket style you want to customize',
      image: p0Image
    },
    {
      number: '02',
      title: 'Submit Measurements',
      description: 'Provide your precise body measurements in inches for perfect fit',
      image: p1Image
    },
    {
      number: '03',
      title: 'Choose Leather',
      description: 'Select your preferred leather type: Full grain or Top grain. Buffalo Cow Goat Sheep.',
      image: p2Image
    },
    {
      number: '04',
      title: 'Select Color',
      description: 'Pick from our range of premium leather colors and finishes',
      image: p3Image
    },
    {
      number: '05',
      title: 'Confirm Details',
      description: 'Review and finalize all customization specifications',
      image: p4Image
    },
    {
      number: '06',
      title: 'Pay Advance',
      description: 'Submit 50% advance payment to begin production',
      image: p5Image
    },
    {
      number: '07',
      title: 'Production Starts',
      description: 'Our craftsmen begin handcrafting your bespoke jacket',
      image: p6Image
    },
    {
      number: '08',
      title: 'Ready For Shipment',
      description: 'Your custom jacket is completed and ready for shipment',
      image: p7Image
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="max-w-7xl mb-16 md:mb-20 animate-fade-in-up">
          <p className="eyebrow mb-4 text-black font-black uppercase tracking-widest text-4xl">Made to Order</p>
          <h2 className="text-black text-7xl">Leather Jacket customisation Process</h2>
          
          <p className="mt-6 text-black/70 text-base md:text-lg">
            From your vision to your wrist in 8 carefully crafted steps. We believe in transparency and quality at every stage.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="border border-black p-6 md:p-8 animate-fade-in-up relative overflow-hidden min-h-[300px]"
              style={{
                animationDelay: `${index * 0.05}s`,
                backgroundImage: `url(${step.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Faded Dark Overlay for text readability */}
              <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

              {/* Content - positioned relative to overlay */}
              <div className="relative z-10">
                {/* Step Number */}
                <div className="mb-6">
                  <div className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center">
                    <span className="font-black text-base">{step.number}</span>
                  </div>
                </div>

                {/* Title and Description */}
                <div>
                  <h3 className="text-lg md:text-xl font-black text-white mb-3 uppercase tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-white text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
         {/* Welcome Description Section */}
      <section className="py-2 md:py-2 bg-white">
        <div className="space-y-8 text-lg text-primary-black/90 leading-relaxed mt-8">
              <div className="bg-primary-black/5 border border-primary-black/20 p-8 my-8">
                <p className="text-4xl text-center font-semibold mb-4 text-primary-black font"><span className="font-black"> Important Note </span></p>
                <p className="text-lg text-center font-semibold mb-4 text-primary-black"><span className="font-black">Limited Monthly Commissions</span></p>
                <p className="text-lg text-center font-semibold mb-4 text-primary-black"><span className="font-black">By Appointment Only</span></p>
                <p className="text-lg text-center font-semibold mb-4 text-primary-black"><span className="font-black">Made One At A Time</span></p>
                <p className="text-lg text-center font-semibold mb-4 text-primary-black"><span className="font-black">Small Batch Craftsmanship</span></p>
                <p className="text-2lg text-center font-semibold mb-4 text-primary-black"><span className="font-black">After everything is finalized and you pay 50% advance, it will take 4 to 6 weeks for your leather jacket to be ready.</span></p>
              </div>
              </div>
      </section>

        {/* CTA */}
        <div className="mt-16 md:mt-20 text-center">
          <a
            href="https://wa.me/9179099656?text=Hello,%20I'd%20like%20to%20start%20the%20custom%20jacket%20process."
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-3 bg-black border-2 border-black text-white hover:bg-white hover:text-black transition-all duration-300 font-black tracking-widest uppercase text-lg inline-block"
          >
            Start Your Customization
          </a>
        </div>
      </div>
    </section>
  );
}