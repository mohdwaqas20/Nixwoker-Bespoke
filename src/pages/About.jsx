import { useEffect } from 'react';
import img1 from '../assets/about/img1.jpeg';
import img2 from '../assets/about/img2.jpeg';
import img3 from '../assets/about/img3.jpeg';
import img4 from '../assets/about/img4.jpeg';
import img5 from '../assets/about/img5.jpeg';

export default function About() {
  useEffect(() => {
    document.title = 'About Nixwoker Bespoke - Premium Handcrafted Leather Goods';
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Learn about Nixwoker Bespoke, premier manufacturer of handcrafted leather jackets, wallets, and accessories from India. Premium full grain leather, military-grade canvas, and exceptional craftsmanship.');
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-black h-[110px] md:h-[220px] flex items-center justify-center border-b border-primary-black/10">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wider text-primary-white">
            ABOUT US
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
            <span className="text-primary-black font-semibold">About Us</span>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="bg-white pt-6 pb-20 md:pt-8 md:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-2/3 space-y-8 text-lg text-primary-black/90 leading-relaxed">
                <p>
                  True craftsmanship cannot be created overnight. It is shaped by generations of knowledge, dedication, and respect for the material itself.
                </p>

                <p>
                  Although Nixwoker Bespoke Leather Co. was founded in 2021, the spirit behind the brand dates back more than a century. Before the name Nixwoker ever existed, our family's ancestors were already master leather craftsmen, producing handcrafted horse saddles long before 1912. Their work demanded precision, patience, and an uncompromising commitment to quality—values that continue to define everything we create today.
                </p>

                <p>
                  Growing up surrounded by this heritage, our founder developed a deep admiration for genuine leather and traditional craftsmanship. Rather than allowing this legacy to fade with time, he chose to carry it forward with a new vision.
                </p>

                <p className="italic text-primary-black">
                  During years of research, one question continued to arise:
                  <br />
                  <span className="font-semibold">Why wasn't there an Indian brand dedicated to creating truly bespoke vintage leather jackets using only the world's finest Full-Grain and Top-Grain Cowhide and Buffalo Leather?</span>
                </p>

                <p>
                  That question became the beginning of Nixwoker.
                </p>

                <p>
                  Our vision was never to produce ordinary leather jackets. Instead, we set out to recreate the timeless character of the golden era of leather craftsmanship—from 1912 to 1950—when every jacket was built with purpose, durability, and remarkable attention to detail.
                </p>

                <p>
                  Each Nixwoker jacket is handcrafted as a bespoke garment, individually made to the customer's preferences while remaining faithful to the proportions, silhouettes, and construction methods that defined authentic vintage outerwear.
                </p>

                <p>
                  We believe that exceptional leather deserves exceptional components. Every detail is carefully selected—from premium Full-Grain and Top-Grain leather to vintage-inspired brass hardware, authentic metal zippers, durable stitching, luxurious linings, and precision finishing. Nothing is chosen by accident. Every element contributes to a jacket that is built to last for decades and develop a character uniquely its own.
                </p>
              </div>
              <div className="md:w-1/3 flex-shrink-0">
                <div className="border-8 border-white shadow-lg">
                  <img src={img1} alt="Nixwoker heritage and legacy - master leathercraft" className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>

            <div className="space-y-8 text-lg text-primary-black/90 leading-relaxed mt-8">
              <div className="bg-primary-black/5 border border-primary-black/20 p-8 my-8">
                <p className="text-xl font-bold text-center mb-6 text-primary-black">Our philosophy is simple:</p>
                <p className="text-lg text-center font-semibold mb-4 text-primary-black">We do not chase fashion.</p>
                <p className="text-lg text-center font-semibold text-primary-black">We preserve craftsmanship.</p>
              </div>

              <p>
                Every crease, every mark, and every patina tells a story. As your jacket ages, it becomes a reflection of your own journey, growing more beautiful with every passing year.
              </p>

              <p>
                At Nixwoker Bespoke Leather Clothing Co., we are not merely manufacturing leather jackets. We are preserving a family legacy, honoring traditional craftsmanship, and creating heirloom-quality garments for those who appreciate authenticity over trends.
              </p>

              <p className="text-center font-bold text-primary-black mt-12">
                Our heritage began long before our name.
                <br />
                Our journey has only just begun.
              </p>

              <p className="text-center mt-8 text-xl font-bold text-primary-black">
                NIXWOKER BESPOKE LEATHER CO.
                <br />
                <span className="text-lg font-semibold">Heritage Crafted. Bespoke Made. Built for Generations</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="bg-white py-20 md:py-24 border-b border-primary-black/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="flex-1 h-1 bg-black hidden md:block"></div>
              <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wider text-primary-black whitespace-nowrap">
                Craftsmanship
              </h2>
              <div className="flex-1 h-1 bg-black hidden md:block"></div>
            </div>
            <div className="space-y-8 text-lg text-primary-black/90 leading-relaxed">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <p>
                    At Nixwoker Bespoke Leather Co., craftsmanship is at the heart of everything we create. Each piece is meticulously handcrafted by skilled artisans who combine generations of traditional leatherworking expertise with uncompromising attention to detail. Every creation reflects our commitment to authenticity, precision, and timeless elegance.
                  </p>

                  <div className="space-y-6 mt-8">
                    <div>
                      <h3 className="text-3xl font-bold text-primary-black mb-3">Hand-Cut Precision</h3>
                      <p>
                        Every product begins with the careful selection of the finest full-grain leather. Our artisans hand-cut each pattern with exceptional accuracy, ensuring the natural beauty, strength, and character of the leather are preserved while minimizing waste.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-3xl font-bold text-primary-black mb-3">Hand-Stitched Excellence</h3>
                      <p>
                        Using traditional hand-stitching techniques, every seam is crafted with precision and durability. This meticulous process not only enhances the product's strength but also gives each piece a distinctive artisanal character that cannot be replicated by mass production.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-3xl font-bold text-primary-black mb-3">Hand-Finished Perfection</h3>
                      <p>
                        Each creation is individually hand-finished through edge burnishing, polishing, conditioning, and detailed quality inspection. The result is a refined finish, exceptional durability, and a luxurious feel that improves beautifully with age.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3 flex-shrink-0">
                  <div className="border-8 border-white shadow-lg">
                    <img src={img5} alt="Craftsmanship - Hand-stitched leather work" className="w-full h-auto object-cover" />
                  </div>
                </div>
              </div>

              <div className="bg-primary-black/5 border border-primary-black/20 p-8 my-8">
                <h3 className="text-3xl font-bold text-primary-black mb-4">Bespoke (Made-to-Order)</h3>
                <p className="text-primary-black/90">
                  Every Nixwoker creation is made exclusively for its owner. Our bespoke process allows customers to personalize every detail—from leather selection and color to dimensions, hardware, monograms, and finishing touches. Once your preferences are finalized, our master artisans begin crafting your piece by hand, ensuring that every product is one of a kind and tailored to your exact vision.
                </p>
              </div>

              <p className="text-center font-bold text-primary-black mt-8">
                Crafted to Last. Designed for You.
                <br />
                <span className="text-base font-semibold">A Nixwoker creation is more than a leather product—it is a timeless expression of craftsmanship, individuality, and enduring luxury, handcrafted to be cherished for generations.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="flex-1 h-1 bg-black hidden md:block"></div>
              <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wider text-primary-black whitespace-nowrap">
                Values
              </h2>
              <div className="flex-1 h-1 bg-black hidden md:block"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold text-primary-black mb-4">Authenticity</h3>
                <p className="text-lg text-primary-black/90 leading-relaxed">
                  We believe in creating genuine leather goods that celebrate traditional craftsmanship, premium materials, and honest design. Every piece reflects our commitment to originality and excellence.
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary-black mb-4">Integrity</h3>
                <p className="text-lg text-primary-black/90 leading-relaxed">
                  Integrity is the foundation of everything we do. From responsibly sourcing fine leather to maintaining transparent practices and uncompromising quality, we strive to earn and uphold our customers' trust.
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary-black mb-4">Craftsmanship</h3>
                <p className="text-lg text-primary-black/90 leading-relaxed">
                  Our skilled artisans bring years of expertise to every creation. Through meticulous hand cutting, hand stitching, and hand finishing, each product is crafted with precision, passion, and exceptional attention to detail.
                </p>
                <div className="flex justify-center mt-6">
                  <div className="border-8 border-white shadow-lg w-full max-w-xs">
                    <img src={img3} alt="Craftsmanship - Hand-stitched leather work" className="w-full h-100 object-cover" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary-black mb-4">Durability</h3>
                <p className="text-lg text-primary-black/90 leading-relaxed">
                  We design products to stand the test of time. By combining premium materials with expert craftsmanship, every piece is made to deliver lasting performance and become more beautiful with age.
                </p>
                <div className="flex justify-center mt-6">
                  <div className="border-8 border-white shadow-lg w-full max-w-xs">
                    <img src={img4} alt="Durability - Premium leather craftsmanship" className="w-full h-100 object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Nixwoker Section */}
      <section className="bg-white py-20 md:py-24 border-b border-primary-black/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="flex-1 h-1 bg-primary-black"></div>
              <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wider text-primary-black whitespace-nowrap">
                Why Choose Nixwoker?
              </h2>
              <div className="flex-1 h-1 bg-primary-black"></div>
            </div>
            <div className="space-y-8 text-lg text-primary-black/90 leading-relaxed">
              <p>
                At Nixwoker Bespoke Leather Co., we don't simply create leather goods—we craft timeless pieces that embody luxury, authenticity, and exceptional craftsmanship. Every product is designed for those who appreciate quality over quantity and value true artisanal excellence.
              </p>

              <div className="space-y-6 mt-8">
                <div>
                  <h3 className="text-3xl font-bold text-primary-black mb-3">No Mass Production</h3>
                  <p>
                    We believe that true luxury cannot be mass-produced. Every Nixwoker creation is handcrafted in limited quantities or made to order, ensuring each piece receives the time, precision, and individual attention it deserves. Our focus is on quality, not volume.
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-primary-black mb-3">Premium Materials</h3>
                  <p>
                    Only the finest full-grain and top-quality genuine leathers are selected for our collections. We carefully source premium materials known for their natural beauty, strength, and rich character. Every leather hide is chosen for its unique texture and ability to age gracefully over time.
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-primary-black mb-3">Handmade Quality</h3>
                  <p>
                    Every product is meticulously handcrafted by skilled artisans using traditional techniques, including hand cutting, hand stitching, edge finishing, and detailed quality inspection. This hands-on approach ensures superior durability, flawless construction, and a level of craftsmanship that machine production simply cannot match.
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-primary-black mb-3">The Lifetime Character of Leather</h3>
                  <p>
                    Premium leather is a living material that develops a rich patina with time and use. Rather than wearing out, it becomes more beautiful with age, telling the unique story of its owner. Each Nixwoker piece evolves over the years, making it truly personal and one of a kind.
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-primary-black mb-3">International Luxury Standards</h3>
                  <p>
                    Our commitment to excellence is reflected in every detail. From material selection and precision craftsmanship to finishing and quality control, every Nixwoker product is created to meet the expectations of the world's finest luxury leather brands. We combine traditional artistry with modern refinement to deliver products of exceptional quality and timeless appeal.
                  </p>
                </div>
              </div>

              <div className="bg-primary-black/5 border border-primary-black/20 p-8 my-8">
                <h3 className="text-3xl font-bold text-primary-black mb-4">An Investment in Timeless Luxury</h3>
                <p className="text-primary-black/90">
                  Choosing Nixwoker means investing in more than a leather accessory. It means owning a handcrafted masterpiece that represents authenticity, enduring style, unmatched craftsmanship, and lasting value. Every piece is created to accompany you for years, becoming more distinctive and meaningful with every journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8 text-lg text-primary-black/90 leading-relaxed">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3 flex-shrink-0 order-2 md:order-1">
                <div className="border-8 border-white shadow-lg">
                  <img src={img2} alt="Nixwoker heritage and craftsmanship" className="w-full h-auto object-cover rounded-lg shadow-lg" />
                  </div>
                </div>
                <div className="md:w-2/3 order-1 md:order-2">
                  <p>
                    At Nixwoker Bespoke Leather Co., we believe true luxury is never rushed. It is measured in patience, perfected through craftsmanship, and defined by character rather than trends.
                  </p>

                  <p>
                    Our journey began with a simple purpose—to create leather jackets that stand apart from mass production. In a world filled with disposable fashion, we chose a different path: to craft timeless leather garments that become more personal and more beautiful with every passing year.
                  </p>

                  <p>
                    Every Nixwoker jacket is built from carefully selected premium full-grain leather—the strongest and most authentic part of the hide. Instead of hiding the leather's natural character, we celebrate it. Every grain, mark, and texture tells a story, ensuring that no two jackets are ever exactly alike.
                  </p>

                  <p>
                    Bespoke is more than a service; it is our philosophy. Every customer has a unique personality, and every jacket should reflect that individuality. From measurements and fit to leather selection, hardware, lining, and finishing details, every piece is handcrafted specifically for its owner.
                  </p>

                  <p>
                    Our artisans combine traditional leather-working techniques with uncompromising attention to detail. Every cut, every stitch, and every finish is completed with precision, creating garments designed not only for today but for decades to come.
                  </p>

                  <p>
                    We do not chase seasonal trends. We create timeless silhouettes inspired by classic aviation, military heritage, workwear, and gentleman's style—designs that remain relevant generation after generation.
                  </p>
                </div>
              </div>

              <div className="bg-primary-black/5 border border-primary-black/20 p-8 my-8">
                <h3 className="text-3xl font-bold text-primary-black mb-6">Our Values</h3>
                <div className="grid md:grid-cols-2 gap-4 text-primary-black/90">
                  <p className="font-semibold">Timeless Design</p>
                  <p className="font-semibold">Bespoke Craftsmanship</p>
                  <p className="font-semibold">Premium Full-Grain Leather</p>
                  <p className="font-semibold">Honest Materials</p>
                  <p className="font-semibold">Lasting Quality</p>
                  <p className="font-semibold">Attention to Every Detail</p>
                </div>
              </div>

              <p>
                Every jacket that leaves our workshop represents patience, authenticity, and pride in traditional craftsmanship. It is made to age beautifully, developing a rich patina that reflects the journey of its owner.
              </p>

              <p>
                Our commitment is simple: exceptional materials, exceptional craftsmanship, and an uncompromising dedication to quality.
              </p>

              <p className="text-center font-bold text-primary-black mt-12 text-lg">
                At Nixwoker Bespoke Leather Co., we do not simply make leather jackets.
                <br />
                We create heirlooms—crafted to be worn, admired, and passed from one generation to the next.
              </p>

              <p className="text-center text-xl font-bold text-primary-black mt-8">
                Built Slow. Worn Forever.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}