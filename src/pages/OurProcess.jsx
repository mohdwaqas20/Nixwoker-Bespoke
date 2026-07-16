import { useEffect } from 'react';
import bg1 from '../assets/process/process1.jpg';
import bg2 from '../assets/process/process2.jpg';
import bg3 from '../assets/process/process3.jpg';
import bg4 from '../assets/process/process4.jpg';
import bg5 from '../assets/process/process5.jpg';
import bg6 from '../assets/process/process6.jpeg';
import bg7 from '../assets/process/process7.jpg';

export default function OurProcess() {
  useEffect(() => {
    document.title = 'Our Process - Nixwoker Bespoke';
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Discover the Nixwoker Bespoke leather jacket creation process - from custom design to handcrafted excellence.');
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-black h-[110px] md:h-[220px] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wider text-white">
            OUR PROCESS
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
            <span className="text-primary-black font-semibold">Our Process</span>
          </div>
        </div>
      </div>


      {/* Introduction */}
      <section className="bg-white pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4">
            <p className="text-base md:text-lg text-black font-semibold leading-relaxed">
              At any given time, we have a wide selection of amazing 'ready to wear' leather jackets which can be purchased and dispatched to you the next working day. However, if you want the full Nixwoker experience, there really is no substitute for getting your own Nixwoker jacket made to order. That way, we can truly make your dream jacket — one that fits you correctly and is made from the exact materials you want, right down to the hardware.
            </p>
            <p className="text-base md:text-lg text-black font-semibold leading-relaxed">
              Below, we've outlined the process of creating your own Nixwoker, from starting as perhaps a vaguely formed idea in your mind to finally seeing yourself wearing your dream jacket in front of a mirror for the first time.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-white pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Step 1: Before Ordering */}
          <div className="mb-16 md:mb-24 py-8 md:py-12">
            <div className="flex items-center justify-center mb-8 md:mb-12">
              <div className="flex-1 h-1 bg-black hidden md:block"></div>
              <h2 className="text-4xl md:text-5xl font-black tracking-wider px-6 md:px-8 whitespace-nowrap">BEFORE ORDERING</h2>
              <div className="flex-1 h-1 bg-black hidden md:block"></div>
            </div>
            
            <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
              {/* Image */}
              <div className="md:col-span-5">
                <div className="overflow-hidden bg-white p-3" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                  <img src={bg1} alt="Before Ordering" className="w-full h-auto object-cover block" />
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-7">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">Understanding Your Purchase</h3>
                    <p className="text-base md:text-lg text-black font-semibold leading-relaxed">
                      We understand that buying your own Nixwoker jacket (especially your first) is a considered purchase, especially with so many choices to make. Which style should you choose? Which leather will work best? How do you get the right fit?
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">Visit Our Showroom</h3>
                    <p className="text-base md:text-lg text-black font-semibold leading-relaxed">
                      If you're able to make the journey, we'd be delighted to book you in for an appointment to visit our factory/showroom. That way, we can have a chat about your options and take your measurements in person, plus you can see and try on many examples of our styles and leathers in the flesh.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">Online Experience</h3>
                    <p className="text-base md:text-lg text-black font-semibold leading-relaxed">
                      While this is the ideal way to make your selections, we understand that this journey is not possible for many of customers who are further afield, so we've made sure the online Nixwoker experience is as close to being here as possible. We have placed as much information as we can on our website (both within the product listings and within the personalisation pages that follow), to inform you about our styles and materials and let you know how to provide us with accurate measurements.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">Expert Guidance</h3>
                    <p className="text-base md:text-lg text-black font-semibold leading-relaxed">
                      If you can't find the information you're looking for on our website or you are having trouble deciding, our experienced and friendly customer service team are always on hand to help in any way we can. We can send leather samples and photos of jackets/materials and use the knowledge and experience we've built over decades to guide you through each decision and advise you what we think will work best until you're happy with what you've ordered. Over the years we've helped thousands of customers create their dream jacket, so please don't hesitate to get in touch - it's our favourite part of the job!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Ordering Your Jacket */}
          <div className="mb-16 md:mb-24 py-8 md:py-12">
            <div className="flex items-center justify-center mb-8 md:mb-12">
              <div className="flex-1 h-1 bg-black hidden md:block"></div>
              <h2 className="text-4xl md:text-5xl font-black tracking-wider px-6 md:px-8 whitespace-nowrap">ORDERING YOUR JACKET</h2>
              <div className="flex-1 h-1 bg-black hidden md:block"></div>
            </div>

            <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
              {/* Content */}
              <div className="md:col-span-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">Getting Started</h3>
                    <p className="text-base md:text-lg text-black font-semibold leading-relaxed">
                      The best way to order a jacket from Nixwoker is via our whatsapp – we've done lot of work to provide you with all the information you'll need to make your decision, but if you need any help, our team is on hand via whatsapp/phone to assist you.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">Choose Your Style</h3>
                    <p className="text-base md:text-lg text-black font-semibold leading-relaxed">
                      The first decision to make is which style you'd like from our wide range of early 20th century designs in our Made to Order and Military departments. We have over 100 to choose from, but you can easily dial in on the type of jacket you're looking for by using the product filters on the left-hand side of the screen. You can find a summary of each jacket's features and a wider contextual description within the jacket listings. Please note: the jackets pictured in each listing are just examples – you will be able to choose your own leather options etc later in the process.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">Select Your Size</h3>
                    <p className="text-base md:text-lg text-black font-semibold leading-relaxed">
                      Once you have chosen a style, you can select which size you want within the product listing. This may not always be the size you are used to ordering depending the style you've chosen, but there is a sizing information summary within the product listing as well as further information on sizing available in our FAQ section to help guide you. Don't worry, our team of sizing experts are also on hand to assist and will check over the measurements you provide later in the process against your size and let you know if there any issues.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">Personalization</h3>
                    <p className="text-base md:text-lg text-black font-semibold leading-relaxed">
                      Once you have ordered your style and size, you will be taken through to the personalisation pages to select your leather, lining, hardware and extra options (such as inside pockets). We have a wide selection of options in each category and provide pictures and information on each to assist you in picking the options that are right for the jacket you're creating. If you're still unsure about your selections at this point – don't worry! We'll check over your order and then re-confirm all your selections later in the process before going into production. We won't put your jacket into production until you're sure about your selections.
                    </p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="md:col-span-6">
                <div className="overflow-hidden bg-white p-3" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                  <img src={bg2} alt="Ordering Your Jacket" className="w-full h-auto object-cover block" />
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Pre-production */}
          <div className="mb-16 md:mb-24 py-8 md:py-12">
            <div className="flex items-center justify-center mb-8 md:mb-12">
              <div className="flex-1 h-1 bg-black hidden md:block"></div>
              <h2 className="text-4xl md:text-5xl font-black tracking-wider px-6 md:px-8 whitespace-nowrap">PRE-PRODUCTION</h2>
              <div className="flex-1 h-1 bg-black hidden md:block"></div>
            </div>

            <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
              {/* Image */}
              <div className="md:col-span-5">
                <div className="overflow-hidden bg-white p-3 h-full" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                  <img src={bg3} alt="Pre-Production" className="w-full h-auto object-cover block" />
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-7">
                <div className="space-y-4">
                  <p className="text-base md:text-lg text-black font-semibold leading-relaxed">
                    A week or two after placing your order, one of our production assistants will check over the measurements you've supplied against your selected size and your material selections. If there are any issues, we will contact you back to advise you and suggest an alternative sizing option/material selection. Otherwise, we will send you an whatsapp message to confirm your order has been accepted, give you an estimated completion date for your jacket and that we will be in touch after 14 days for final confirmation of these specifications.
                  </p>

                  <p className="text-base md:text-lg text-black font-semibold leading-relaxed">
                    After 14 days, we will send you another whatsapp message to confirm your final jacket specifications. Once you have confirmed these your jacket will enter the production queue, awaiting a production slot in our factory. Once a slot becomes available, we will send you an email to confirm when your jacket has entered production.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: Cutting */}
          <div className="mb-16 md:mb-24 py-8 md:py-12">
            <div className="flex items-center justify-center mb-8 md:mb-12">
              <div className="flex-1 h-1 bg-black hidden md:block"></div>
              <h2 className="text-4xl md:text-5xl font-black tracking-wider px-6 md:px-8 whitespace-nowrap">CUTTING</h2>
              <div className="flex-1 h-1 bg-black hidden md:block"></div>
            </div>

            <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
              {/* Content */}
              <div className="md:col-span-6">
                <div className="space-y-4">
                  <p className="text-base md:text-lg text-black font-semibold leading-relaxed">
                    The first stage of your jacket's production is cutting. We never cut batches of leather panels in a production line style run. Even though it's a much more economical way to work, the risk of mismatched panels is high when compared to a jacket where each panel is matched to the next during cutting.
                  </p>

                  <p className="text-base md:text-lg text-black font-semibold leading-relaxed">
                    Our specialist leather technicians have decades of experience working with a vast range of quality leathers. They select and quality-inspect each hide before skilfully hand-cutting every panel individually for your jacket – matching colour, grain, weight, and characteristics with expert precision. These panels, alongside your lining which is hand cut to your measurements by our lining/pattern technician, are then quality checked by our production manager before being passed on to your jacket's machinist.
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="md:col-span-6">
                <div className="overflow-hidden bg-white p-3 h-full" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                  <img src={bg4} alt="Cutting" className="w-full h-auto object-cover block" />
                </div>
              </div>
            </div>
          </div>

          {/* Step 5: Machining */}
          <div className="mb-16 md:mb-24 py-8 md:py-12">
            <div className="flex items-center justify-center mb-8 md:mb-12">
              <div className="flex-1 h-1 bg-black hidden md:block"></div>
              <h2 className="text-4xl md:text-5xl font-black tracking-wider px-6 md:px-8 whitespace-nowrap">MACHINING</h2>
              <div className="flex-1 h-1 bg-black hidden md:block"></div>
            </div>

            <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
              {/* Image */}
              <div className="md:col-span-5">
                <div className="overflow-hidden bg-white p-3 h-full" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                  <img src={bg5} alt="Machining" className="w-full h-auto object-cover block" />
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-7">
                <div className="space-y-4">
                  <p className="text-base md:text-lg text-black font-semibold leading-relaxed">
                    Again, we don't adopt a time-saving production line style approach to sewing – your Nixwoker jacket is made on a traditional walking foot machine by one experienced and highly skilled craftsperson. Making an Nixwoker demands craftmanship of the highest calibre – many of our machinists have several decades of experience in their craft and work.
                  </p>

                  <p className="text-base md:text-lg text-black font-semibold leading-relaxed">
                    Over the course of many hours, one of our skilled artisans will stitch together your jacket from start to finish with painstaking attention to detail and enormous care, using heavy duty cotton thread with a poly core for extra strength and the optimum stitch size for the type and weight of leather being used.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 6: Quality Check */}
          <div className="mb-16 md:mb-24 py-8 md:py-12">
            <div className="flex items-center justify-center mb-8 md:mb-12">
              <div className="flex-1 h-1 bg-black hidden md:block"></div>
              <h2 className="text-4xl md:text-5xl font-black tracking-wider px-6 md:px-8 whitespace-nowrap">QUALITY CHECK</h2>
              <div className="flex-1 h-1 bg-black hidden md:block"></div>
            </div>

            <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
              {/* Content */}
              <div className="md:col-span-6">
                <div className="space-y-4">
                  <p className="text-base md:text-lg text-black font-semibold leading-relaxed">
                    After your jacket is finished, it heads over for its final quality check. The most experienced member of our team (who has been with 30 year of Experience) alongside our production manager carry out a rigorous 28-point inspection on your jacket, including alignments, stitch quality and matching to ensure the jacket's craftsmanship has met the quality standards that are expected of an Nixwoker Label. If your jacket doesn't meet one of these high standards, we will remake your jacket.
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="md:col-span-6">
                <div className="overflow-hidden bg-white p-3 h-full" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                  <img src={bg6} alt="Quality Check" className="w-full h-auto object-cover block" />
                </div>
              </div>
            </div>
          </div>

          {/* Step 7: Dispatch */}
          <div className="mb-16 md:mb-24 py-8 md:py-12">
            <div className="flex items-center justify-center mb-8 md:mb-12">
              <div className="flex-1 h-1 bg-black hidden md:block"></div>
              <h2 className="text-2xl md:text-5xl font-black tracking-wider px-6 md:px-8 whitespace-nowrap">YOUR JACKET IS READY FOR DISPATCH!</h2>
              <div className="flex-1 h-1 bg-black hidden md:block"></div>
            </div>

            <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
              {/* Image */}
              <div className="md:col-span-5">
                <div className="overflow-hidden bg-white p-3" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                  <img src={bg7} alt="Ready for Dispatch" className="w-full h-auto object-cover block" />
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-7">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">Ready for Dispatch</h3>
                    <p className="text-base md:text-lg text-black font-semibold leading-relaxed">
                      We will contact you as soon as your jacket has left the factory to let you know that your jacket is ready for dispatch and request any remaining balance. Once this has been paid, a member of our dispatch team will carefully pack your jacket and it will be en-route to you via courier within a day! Our selected courier will contact you to let you know a delivery time.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">A Jacket for Life</h3>
                    <p className="text-base md:text-lg text-black font-semibold leading-relaxed">
                      Then, all you need to do is sit tight and wait for your package to arrive! The wait is nearly over — soon, you'll be opening a box to get the first glimpse of your very own Nixwoker jacket. You'll get to enjoy that unmatchable experience of trying it on and seeing yourself in your dream jacket for the very first time in the mirror. And as amazing as it looks new, this is just the beginning of a life-long journey with your Nixwoker where it looks better with every wear as the leather breaks in and starts to patina.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantee Section */}
          <div className="p-6 md:p-12">
            <div className="flex items-center justify-center mb-8 md:mb-12">
              <div className="flex-1 h-1 bg-black hidden md:block"></div>
              <h2 className="text-4xl md:text-5xl font-black tracking-wider px-6 md:px-8 whitespace-nowrap">OUR GUARANTEE:</h2>
              <div className="flex-1 h-1 bg-black hidden md:block"></div>
            </div>

            <div className="max-w-7xl mx-auto">
              <p className="text-base md:text-lg text-black font-semibold leading-relaxed">
                We don't want anyone to own an Nixwoker that they don't love. If we've made a mistake with your jacket outwith our stated measurement tolerances, we will remake it for you at no additional cost. If we've made the jacket to your specifications but you're still not happy with jacket, unless we have advised you during production that heavy customisations have made the jacket non-returnable, we will still remake your jacket, but it may be subject to a 20% restocking charge if we incur additional costs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}