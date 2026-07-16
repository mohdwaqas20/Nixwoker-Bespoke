export const leatherData = {
  chromexcel: {
    id: 'chromexcel',
    name: 'Chromexcel ®',
    brand: "Horween",
    hero: "Chromexcel ®",
    heroSubtitle: "The original pullup leather from Chicago's world-famous Horween Leather Company",
    description: `From Chicago's world famous Horween Leather Company, 'Chromexcel' is the original pullup leather, still made using time honored techniques and formulas that have remained largely unchanged since they were first developed nearly 100 years ago.

'Chromexcel' is a truly beautiful heavy leather with depth of colour and a luxurious feel. Although its natural full grain nature means each hide is different, it usually has initial shiny, smooth, firm, and relatively uniform characteristics. But with wear, the leather softens up or "breaks in", developing its own grain/patina and light brown undertones showing through the coloured top coat (sometimes referred to as "Teacore"), which along with the pull up nature of the leather (dynamic changes in colour tone/character under stress), means every 'Chromexcel' jacket is increasingly unique.`,
    production: `Horween's complex and proprietary 'Chromexcel' production process includes combination tanning (an initial chrome base tannage with a heavy vegetable retannage), "hot stuffing" the hides with oils, waxes, and greases and even hand staining with several hand-rubbed coats of full aniline (non-pigmented) finish.`,
    variants: `Chromexcel Front Quarter Horsehide (CXFQHH) and Chromexcel Steerhide (CXSH) follow the same production process and share similar features. However, CXFQHH has a denser fibre structure which results in sharper crease marks, a longer break in period and generally less grain than CXSH. CXSH is also generally a bit thicker and heavier than CXFQHH.`,
    tumbled: `"Tumbled" options: Exactly the same Chromexcel FQHH that we have put through an additional dry-tumbling procedure which speeds up the breaking in process, knocks off some shine and can bring out substantial grain – end results can be quite unpredictable with each hide being unique.`,
    specifications: {
      cxfqhh: {
        name: 'CXFQHH',
        weight: '3oz',
        thickness: '1.4mm',
        description: 'Chromexcel Front Quarter Horsehide - Denser fiber structure, sharper crease marks, longer break-in'
      },
      cxsh: {
        name: 'CXSH',
        weight: '4oz',
        thickness: '1.7mm',
        description: 'Chromexcel Steerhide - Slightly thicker and heavier than CXFQHH'
      }
    },
    colors: [
      'BLACK CXFQHH',
      'BROWN CXFQHH',
      'CORDOVAN CXFQHH',
      'NATURAL CXFQHH',
      'TUMBLED BLACK CXFQHH',
      'TUMBLED BROWN CXFQHH',
      'TUMBLED CORDOVAN CXFQHH',
      'BLACK CX STEERHIDE',
      'BROWN CX STEERHIDE',
      'CORDOVAN CX STEERHIDE'
    ]
  },
  vicenza: {
    id: 'vicenza',
    name: 'Vicenza Horsehide',
    hero: 'Vicenza Horsehide',
    heroSubtitle: 'Premium Italian-tanned horsehide with natural character',
    description: `Vicenza horsehide represents the pinnacle of Italian leather craftsmanship. This premium full-grain horsehide is vegetable-tanned using traditional methods that have been perfected over generations.

Horsehide is renowned for its exceptional durability and unique grain pattern. With wear, Vicenza develops a rich patina that tells the story of your adventures. The natural grain variations and character marks make each jacket completely unique.`,
    characteristics: [
      'Exceptional durability and longevity',
      'Develops beautiful natural patina over time',
      'Unique grain patterns and character marks',
      'Premium Italian vegetable tanning',
      'Breaks in to mold perfectly to your body',
      'Improved suppleness with extended wear'
    ],
    weight: '3.5-4oz',
    finish: 'Full aniline',
    benefits: 'Vicenza offers a perfect balance between durability and comfort. It breaks in beautifully while maintaining its structural integrity, making it ideal for serious leather enthusiasts who appreciate the development of natural patina.'
  },
  pinnacle: {
    id: 'pinnacle',
    name: 'Pinnacle Horsehide',
    hero: 'Pinnacle Horsehide',
    heroSubtitle: 'The ultimate choice for uncompromising quality',
    description: `Pinnacle horsehide represents our commitment to sourcing only the finest full-grain leather available. This premium grade horsehide is selected from the finest hides and tanned to exact specifications.

Pinnacle is engineered for those who demand the very best. Its dense fiber structure provides exceptional durability while maintaining the suppleness that makes horsehide so desirable. Every jacket ages beautifully, developing a unique character that reflects its owner's experiences.`,
    characteristics: [
      'Finest grade horsehide available',
      'Exceptional durability and longevity',
      'Dense fiber structure for superior performance',
      'Breaks in while maintaining structure',
      'Develops distinctive patina patterns',
      'Premium full-grain finish'
    ],
    weight: '3.8-4.2oz',
    finish: 'Full aniline',
    benefits: 'Pinnacle is for those who accept nothing less than excellence. Superior aging properties and durability make it the choice of leather connoisseurs.'
  },
  jerky: {
    id: 'jerky',
    name: 'Jerky Horsehide',
    hero: 'Jerky Horsehide',
    heroSubtitle: 'Raw, authentic horsehide with bold character',
    description: `Jerky horsehide is our unfinished offering for leather purists who want complete control over their jacket's development. This raw, vegetable-tanned horsehide provides a blank canvas for natural aging and patina formation.

Without any protective finish, Jerky horsehide is highly responsive to environmental conditions - picking up water stains, scratches, and marks that contribute to its one-of-a-kind character. Each jacket tells a completely unique story based on how it's worn and cared for.`,
    characteristics: [
      'Raw, unfinished vegetable-tanned horsehide',
      'Maximum development of patina',
      'Ultra-responsive to environmental wear',
      'Highly individual aging patterns',
      'Authentic, no-compromise leather',
      'Requires more care and maintenance'
    ],
    weight: '3.5-4oz',
    finish: 'Unfinished - raw vegetable tanning',
    benefits: 'Jerky is for the committed enthusiast. The unfinished nature means faster patina development and complete individuality. Expect dramatic transformation with proper care.',
    care: 'Regular conditioning recommended. Will develop water marks and scars that become part of its unique character.'
  },
  unfinished: {
    id: 'unfinished',
    name: 'Unfinished Horsehide',
    hero: 'Unfinished Horsehide',
    heroSubtitle: 'Vegetable-tanned raw leather for maximum personalization',
    description: `Unfinished horsehide starts as a blank slate - pure vegetable-tanned leather with no protective topcoat. This authentic approach allows the leather to age exactly as you want it to.

This is working leather that evolves through use. Water stains, scratches, and natural wear become distinguishing features. No two unfinished horsehide jackets age identically, making each one truly one-of-a-kind.`,
    characteristics: [
      'Pure vegetable-tanned horsehide',
      'No protective finish applied',
      'Rapid, dramatic patina development',
      'Water responsive - develops character marks',
      'Completely unique aging journey',
      'Requires intentional care'
    ],
    weight: '3.5-4oz',
    finish: 'Unfinished vegetable-tanned',
    benefits: 'Perfect for leather lovers who want to guide their jacket\'s transformation. The lack of finish means authentic, rapid aging and maximum individuality.',
    care: 'Regular oiling and conditioning essential. Water marks and scratches are features, not defects.'
  },
  badalassi: {
    id: 'badalassi',
    name: 'Badalassi Steerhide',
    hero: 'Badalassi Steerhide',
    heroSubtitle: 'Legendary Italian steerhide with decades of heritage',
    description: `Badalassi steerhide comes from the storied tanneries of Tuscany, Italy. This full-grain steerhide represents centuries of Italian leather-working tradition combined with modern expertise.

Badalassi leather is prized for its consistent quality, beautiful natural grain, and exceptional aging properties. The combination of careful sourcing and traditional vegetable tanning creates leather that improves dramatically with age. Each jacket develops a rich, warm patina that deepens over years of use.`,
    characteristics: [
      'Authentic Italian vegetable tanning',
      'Consistent, beautiful natural grain',
      'Exceptional durability and longevity',
      'Ages beautifully to warm, rich tones',
      'Softer initial feel than horsehide',
      'Molds perfectly to body with wear'
    ],
    weight: '3.5-4oz',
    finish: 'Full grain with aniline finish',
    benefits: 'Badalassi offers Italian heritage and reliability. It\'s easier to break in than horsehide while delivering exceptional durability and that coveted warm patina development.',
    variants: 'Available in several natural color variations that develop differently over time.'
  },
  other_steerhides: {
    id: 'other_steerhides',
    name: 'Other Midweight Steerhides',
    hero: 'Other Midweight Steerhides',
    heroSubtitle: 'Premium selections from trusted international tanneries',
    description: `Beyond our signature leathers, we source exceptional midweight steerhides from select premium tanneries worldwide. Each selection meets our rigorous standards for quality, durability, and aesthetic character.

These leathers offer distinct personalities and aging characteristics. Some break in quickly while others take longer to reveal their beauty. All are chosen for their ability to develop meaningful patina and their suitability for serious everyday wear.`,
    characteristics: [
      'Carefully curated from premium tanneries',
      'Consistent full-grain quality',
      'Excellent durability ratings',
      'Varied aging personalities',
      'Beautiful natural variations',
      'Reliable break-in properties'
    ],
    weight: '3.5-4.5oz',
    finish: 'Full grain - aniline or semi-aniline',
    benefits: 'Our additional steerhide selections provide options for different preferences and budgets while maintaining our quality standards. Each offers unique character development.',
    note: 'Availability and specific options vary. Contact us for current selections and recommendations.'
  },
  goatskin: {
    id: 'goatskin',
    name: 'Goatskin',
    hero: 'Premium Goatskin',
    heroSubtitle: 'Soft, supple leather with exceptional comfort',
    description: `Goatskin represents a lighter alternative to our heavier horsehide and steerhide options. Despite its softness, goatskin is remarkably durable and develops a beautiful, subtle patina over time.

Premium goatskin is prized for its suppleness and comfort. It breaks in immediately and molds to your body from the first wear. For those who value comfort without sacrificing quality and durability, goatskin is an excellent choice.`,
    characteristics: [
      'Naturally soft and supple',
      'Immediate break-in and comfort',
      'Excellent comfort for extended wear',
      'Develops subtle, refined patina',
      'Lighter weight than steerhide',
      'Premium full-grain quality',
      'Beautiful natural grain texture'
    ],
    weight: '2.5-3oz',
    finish: 'Full grain with protective aniline finish',
    benefits: 'Goatskin is perfect for those who want quality and durability without the heavy, stiff break-in period. It\'s comfortable from day one while still developing character with age.',
    ideal_for: 'Ideal for daily wear, warmer climates, or anyone who prioritizes comfort without compromising on quality.'
  }
};

export const leatherList = Object.values(leatherData);