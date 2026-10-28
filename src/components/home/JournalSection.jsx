import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Clock, Calendar, User, ArrowRight, X, Share2, Check, Bookmark, Sparkles } from 'lucide-react';
import { JOURNAL_ARTICLES_DATA } from '../../data/cars';

const ARTICLE_FULL_CONTENT = {
  'bharat-ncap-revolution': {
    lead: 'How domestic R&D, high-strength boron steel, and rigorous crash test regimes transformed Indian automobiles into global safety benchmarks.',
    sections: [
      {
        heading: 'The Paradigm Shift in Indian Automotive Engineering',
        body: 'For decades, Indian automobiles were often stereotyped as prioritizing fuel economy over structural integrity. The formal inauguration of the Bharat New Car Assessment Programme (Bharat NCAP) in late 2023 completely upended this narrative. Indian giants Tata Motors and Mahindra & Mahindra took the lead, designing indigenous platforms built on over 75% advanced high-strength steel and ultra-rigid boron steel hot-stamped passenger cells.'
      },
      {
        heading: 'Land Rover D8 Pedigree Meets Indian Manufacturing',
        body: 'The Tata Safari and Harrier, constructed on the OMEGARC architecture derived from Jaguar Land Rover\'s D8 platform, scored unprecedented 33.05 out of 34 points in adult occupant protection and 45.00 out of 49 in child occupant safety. Mahindra\'s Thar ROXX matched this historic benchmark, proving that high-ground-clearance off-roaders can provide limousine-grade roll-over protection and ADAS Level 2 collision mitigation on Indian expressways.'
      },
      {
        heading: 'Why This Matters to Indian Luxury Car Buyers',
        body: 'Discerning Indian buyers no longer need to pay exorbitant import customs duties to guarantee world-class survival envelopes for their families. Indian luxury vehicles are now natively tuned to survive chaotic highway cattle crossings, unmapped road diversions, and high-speed monsoon aquaplaning conditions with cutting-edge radar-camera sensor fusion.'
      }
    ],
    takeaways: [
      'Bharat NCAP crash tests adhere strictly to updated UNECE global crash assessment methodologies.',
      'Both Tata Safari / Harrier and Mahindra Thar ROXX secured unconditional 5-Star ratings for adult and child occupants.',
      'Active safety systems including Autonomous Emergency Braking (AEB) are now standard or optional across top Indian trims.'
    ]
  },
  'bh-series-tax-guide': {
    lead: 'The ultimate executive roadmap to Bharat Series (BH) registration: saving ₹4-15 Lakh in upfront road taxes and ending interstate NOC nightmares.',
    sections: [
      {
        heading: 'The Genesis of Bharat Series Registration',
        body: 'Prior to the introduction of the BH Series under Section 47 of the Motor Vehicles Act, an individual relocating between Indian states had to navigate agonizing bureaucratic hurdles: obtaining a No Objection Certificate (NOC) from the parent RTO, re-registering the vehicle within 12 months, and filing tedious road tax refund claims that took years to materialize.'
      },
      {
        heading: 'The Financial Advantage: Pay-As-You-Go Taxation',
        body: 'Unlike conventional state RTO registrations (which mandate paying 13% to 19% lifetime road tax upfront for 15 years), BH Series splits the road tax into manageable 2-year installments. For a ₹25 Lakh luxury SUV like the Tata Safari or Mahindra Scorpio-N, the upfront road tax drops from ~₹4.5 Lakh in Karnataka to a mere ₹30,000 for the first two years. This preserves critical liquidity and enables smart capital allocation for business owners and executives.'
      },
      {
        heading: 'Eligibility Criteria & Essential Documentation',
        body: 'To qualify for BH Series allocation at Apex Motors, the buyer must be employed in the Defense forces, Central or State Government departments, or in a private enterprise with registered corporate offices in four or more Indian states or Union Territories (proven via Form 60 and corporate HR employment certificate).'
      }
    ],
    takeaways: [
      'BH Series road tax is calculated bi-annually: 8% (<₹10L), 10% (₹10L-₹20L), and 12% (>₹20L).',
      'EVs registered under BH Series enjoy a further 2% concession on base tax rates.',
      'Completely eliminates state transfer re-registration fees and RTO agent intermediation.'
    ]
  },
  'vazirani-turbine-story': {
    lead: 'Inside the aerodynamic wind tunnels and computational workshops that brought India\'s 1,020 hp micro-turbine Shul hypercar to life.',
    sections: [
      {
        heading: 'The Vision of Chunky Vazirani',
        body: 'Having trained at the ArtCenter College of Design in California and worked with Rolls-Royce, Jaguar, and Land Rover, Chunky Vazirani returned to Mumbai with a singular mission: build an Indian hypercar that does not blindly imitate European V12s or battery-heavy EV sleds, but pioneers an entirely distinct propulsion paradigm.'
      },
      {
        heading: 'Micro-Turbines: The Aerospace Solution to Electric Range Anxiety',
        body: 'Instead of cramming a massive, 700 kg battery pack that blunts dynamic cornering, the Vazirani Shul utilizes a lightweight aeronautical micro-turbine running on standard petrol. The turbine operates at continuous optimal RPM, acting as an onboard power generator that rapidly recharges a compact 32 kWh lithium-ion battery. The wheels are driven by four independent electric hub motors providing individual corner torque vectoring.'
      },
      {
        heading: 'Formula 1 & Michelin Validation',
        body: 'Aerodynamics were refined in collaboration with Sahara Force India F1 engineers in Silverstone, ensuring low drag with exceptional high-speed downforce. Michelin specifically developed custom compound tires tested on the Buddh International Circuit in Greater Noida, allowing the Shul to pull over 1.4G in lateral acceleration while maintaining high-speed composure.'
      }
    ],
    takeaways: [
      'Produces 1,020 combined horsepower with a curb weight kept under 1,550 kg.',
      'Micro-turbine can operate on petrol, ethanol blends, or sustainable aviation fuel (SAF).',
      'Monocoque chassis crafted entirely from aerospace-grade structural carbon-fiber in India.'
    ]
  },
  'black-pink-atelier-trend': {
    lead: 'How high-contrast deep Noir Black and radiant Light Pink accents became the definitive visual language of modern high-performance luxury automotive commissions.',
    sections: [
      {
        heading: 'The Rejection of Monotony: High-Fashion Meets Automotive Design',
        body: 'For decades, the high-end exotic space was dominated by uniform silver, British racing green, or triple-black stealth configurations. Today, a new generation of Indian venture founders, entertainment moguls, and discerning collectors are commissioning bespoke colorways that juxtapose deep obsidian noir surfaces with luminous, neon-infused light pink and rose accents.'
      },
      {
        heading: 'Atelier Engineering: Anodized Titanium & Contrast Carbon Weave',
        body: 'At Apex Motors and specialized Indian coachbuilders like DC2 and Vazirani, the Black & Light Pink aesthetic is not merely a surface wrap. It encompasses hand-painted brake calipers in radiant light pink, rose-anodized billet titanium shift paddles, bespoke Connolly leather piped in pastel blush, and exposed carbon fiber tinted with pink iridescent flake lacquer.'
      },
      {
        heading: 'Resale Premium and Collector Valuation',
        body: 'Far from harming auction liquidity, individually authenticated factory one-off bespoke commissions in contrasting black and pink hues have demonstrated a 18% higher collector retention premium on secondary private exchanges, reflecting growing demand for audacious, signature individuality.'
      }
    ],
    takeaways: [
      'Black and Light Pink aesthetic blends high-fashion haute couture with aggressive aerodynamics.',
      'Includes bespoke interior details like contrast rose stitching, ambient LED profiles, and tinted carbon.',
      'Factory bespoke commissions retain strong collector demand across private Indian garages.'
    ]
  },
  'umling-la-ev-conquest': {
    lead: 'At 19,024 feet where internal combustion engines lose 50% power due to oxygen starvation, dual-motor electric torque rewrites high-altitude expedition records.',
    sections: [
      {
        heading: 'The Thin Air Dilemma: Atmospheric Oxygen vs Combustion',
        body: 'Climbing beyond 17,000 feet in Ladakh poses severe challenges for internal combustion engines. With atmospheric pressure dropping by more than half, turbocharged diesels and petrol V8s experience severe turbo lag, elevated exhaust gas temperatures, and significant horsepower loss as fuel-air mixtures choke.'
      },
      {
        heading: 'Electric Superiority on the World’s Highest Motorable Pass',
        body: 'Dual permanent-magnet electric motors do not require air to combust fuel. The Pravaig Defy and Tata Sierra EV prototypes conquered the switchbacks of Umling La delivering 100% of their rated 620 Nm torque instantaneously from 0 RPM, effortlessly walking up 32-degree loose scree gradients without clutch slippage or thermal throttling.'
      },
      {
        heading: 'Regenerative Braking: The Ultimate Mountain Descent Safety Asset',
        body: 'On treacherous 50 km descents down mountain passes, conventional brake pads can overheat to failure. High-output bidirectional regenerative braking systems converted gravitational potential energy back into battery charge, regaining up to 28% state of charge while keeping mechanical friction brakes completely cold and ready for emergency stops.'
      }
    ],
    takeaways: [
      'Zero altitude power drop: electric motors maintain full torque at 19,000+ feet.',
      'Regenerative braking prevents mountain brake pad glazing and captures significant descent energy.',
      'Liquid-thermal battery pre-conditioning ensures optimal cell chemistry in -20°C Himalayan cold.'
    ]
  }
};

export default function JournalSection() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [subscribedEmail, setSubscribedEmail] = useState('');
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);

  const handleToggleSave = (articleId, e) => {
    e.stopPropagation();
    if (savedArticles.includes(articleId)) {
      setSavedArticles(savedArticles.filter(id => id !== articleId));
    } else {
      setSavedArticles([...savedArticles, articleId]);
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!subscribedEmail || !subscribedEmail.includes('@')) return;
    setSubscriptionSuccess(true);
    setTimeout(() => {
      setSubscriptionSuccess(false);
      setSubscribedEmail('');
    }, 4000);
  };

  return (
    <section id="journal-section" className="py-24 relative overflow-hidden bg-gradient-to-b from-charcoal-900 via-charcoal-950 to-black">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <BookOpen className="w-3.5 h-3.5 text-gold-400" />
              Apex Motoring Atelier Dispatches
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
              Indian Automotive <span className="text-gold-gradient">Chronicles</span>
            </h2>
            <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
              In-depth engineering analyses, Bharat NCAP safety dissections, BH-Series road tax advisory, and the extraordinary narratives behind Bharat’s indigenous automotive revolution.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-400 bg-charcoal-800/60 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/5 self-start md:self-auto">
            <span className="flex items-center gap-1.5 text-gold-400 font-semibold">
              <Sparkles className="w-4 h-4" /> Peer Reviewed
            </span>
            <span className="text-charcoal-600">•</span>
            <span>RTO Compliant</span>
            <span className="text-charcoal-600">•</span>
            <span>Updated Monthly</span>
          </div>
        </div>

        {/* Articles 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {JOURNAL_ARTICLES_DATA.map((article, idx) => {
            const isSaved = savedArticles.includes(article.id);
            return (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                onClick={() => setSelectedArticle(article)}
                className="group cursor-pointer flex flex-col h-full rounded-2xl bg-gradient-to-b from-charcoal-800/80 to-charcoal-900/90 border border-white/10 card-lift shine-sweep transition-all duration-300 overflow-hidden"
              >
                {/* Article Image Container with Luxury Animation & Sheen */}
                <div className="relative h-56 w-full overflow-hidden bg-charcoal-950 car-image-container">
                  <div className="car-aura-glow" />
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover object-center car-image-lux"
                    loading="lazy"
                  />
                  <div className="car-image-sheen" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/40 to-transparent pointer-events-none" />

                  {/* Category & Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 z-20">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md border border-white/10 text-gold-300">
                      {article.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-gold-500/90 text-black">
                      {article.badge}
                    </span>
                  </div>

                  {/* Bookmark Button */}
                  <button
                    onClick={(e) => handleToggleSave(article.id, e)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white hover:text-gold-400 transition-colors z-20"
                    title={isSaved ? 'Remove bookmark' : 'Bookmark article'}
                  >
                    <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-gold-400 text-gold-400' : ''}`} />
                  </button>

                  {/* Metadata Bar on Image */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-300 z-20">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-gold-400" />
                      {article.readTime}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gold-400" />
                      {article.date}
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-gold-300 transition-colors line-clamp-2 leading-snug">
                      {article.title}
                    </h3>
                    <p className="mt-3 text-slate-400 text-sm leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Author & Read Action Footer */}
                  <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 font-bold text-xs">
                        <User className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-white">{article.author}</div>
                        <div className="text-[11px] text-slate-400 truncate max-w-[150px]">{article.authorRole}</div>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-400 group-hover:translate-x-1 transition-transform">
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* VIP Dispatch Newsletter Banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-charcoal-900 via-charcoal-800 to-charcoal-900 border border-gold-500/20 p-8 sm:p-10 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <span className="text-xs uppercase font-bold tracking-widest text-gold-400">Exclusive Briefings</span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                Subscribe to the Apex Private Dispatches
              </h3>
              <p className="text-slate-400 text-sm mt-2">
                Receive confidential RTO policy updates, upcoming high-altitude expedition dates, and private track day allocations directly from our automotive directors.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex-1 max-w-md">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={subscribedEmail}
                  onChange={(e) => setSubscribedEmail(e.target.value)}
                  placeholder="Enter your VIP email address..."
                  required
                  className="flex-1 px-4 py-3 rounded-xl bg-charcoal-950/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-gold-gradient text-charcoal-950 font-bold text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-lg shadow-gold-500/20"
                >
                  {subscriptionSuccess ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-800" />
                      Subscribed!
                    </>
                  ) : (
                    <>
                      Join Atelier
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
              <p className="text-[11px] text-slate-500 mt-2 text-center sm:text-left">
                Zero spam. Strict client confidentiality guaranteed under Apex Privacy Charter.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Full Article Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-charcoal-900 border border-gold-500/30 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
            >
              {/* Header Image with Ken Burns Drifting */}
              <div className="relative h-64 sm:h-72 w-full bg-charcoal-950 shrink-0 overflow-hidden car-image-container">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover animate-ken-burns-lux animate-image-reveal filter brightness-[0.85] contrast-110"
                />
                <div className="car-image-sheen" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/60 to-transparent pointer-events-none" />

                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-black/70 border border-white/20 text-white hover:text-gold-400 transition-colors z-20"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6 right-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gold-500 text-charcoal-950">
                      {selectedArticle.category}
                    </span>
                    <span className="text-xs text-slate-300 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gold-400" />
                      {selectedArticle.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                    {selectedArticle.title}
                  </h3>
                </div>
              </div>

              {/* Scrollable Article Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300">
                {/* Author Info */}
                <div className="flex items-center justify-between pb-6 border-b border-white/10 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 font-bold">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{selectedArticle.author}</div>
                      <div className="text-xs text-slate-400">{selectedArticle.authorRole}</div>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400">{selectedArticle.date}</div>
                </div>

                {/* Lead Summary */}
                {ARTICLE_FULL_CONTENT[selectedArticle.id] && (
                  <>
                    <p className="text-base sm:text-lg font-serif italic text-gold-200/90 leading-relaxed bg-gold-500/5 p-4 rounded-xl border-l-4 border-gold-500">
                      "{ARTICLE_FULL_CONTENT[selectedArticle.id].lead}"
                    </p>

                    {/* Detailed Sections */}
                    <div className="space-y-6 pt-2">
                      {ARTICLE_FULL_CONTENT[selectedArticle.id].sections.map((sec, i) => (
                        <div key={i} className="space-y-2">
                          <h4 className="text-lg font-semibold text-white tracking-wide">
                            {sec.heading}
                          </h4>
                          <p className="text-sm leading-relaxed text-slate-300">
                            {sec.body}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Key Takeaways Box */}
                    <div className="bg-charcoal-800/80 rounded-xl p-5 border border-white/10 space-y-3">
                      <h5 className="text-xs uppercase font-bold tracking-wider text-gold-400 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" /> Key Executive Takeaways
                      </h5>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                        {ARTICLE_FULL_CONTENT[selectedArticle.id].takeaways.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-gold-400 font-bold">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}

                {/* Article Footer Actions */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs text-slate-400">
                    Published under Apex Motors Automotive Research & Advisory Wing
                  </div>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="px-5 py-2.5 rounded-xl bg-gold-gradient text-charcoal-950 font-semibold text-xs hover:brightness-110 transition-all"
                  >
                    Close Briefing
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
