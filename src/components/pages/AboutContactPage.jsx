import React, { useState } from 'react';
import { SHOWROOM_LOCATIONS, FAQS_DATA } from '../../data/cars';
import { useCars } from '../../context/CarContext';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Send, 
  Sparkles,
  Building2,
  Calendar,
  CheckCircle2
} from 'lucide-react';

export default function AboutContactPage() {
  const { openTestDrive, showToast } = useCars();
  const [activeShowroom, setActiveShowroom] = useState(SHOWROOM_LOCATIONS[0].id);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [faqCategory, setFaqCategory] = useState('All');

  // Contact form state
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactSubject, setContactSubject] = useState('acquisition');
  const [contactMessage, setContactMessage] = useState('');
  const [isContactSent, setIsContactSent] = useState(false);

  const selectedShowroom = SHOWROOM_LOCATIONS.find(s => s.id === activeShowroom) || SHOWROOM_LOCATIONS[0];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) {
      showToast('Please fill out all required enquiry fields', 'info');
      return;
    }
    setIsContactSent(true);
    showToast('Your confidential enquiry has been transmitted to our Chief Curator', 'gold');
    setTimeout(() => {
      setContactName('');
      setContactEmail('');
      setContactPhone('');
      setContactMessage('');
      setIsContactSent(false);
    }, 4000);
  };

  const faqCategories = ['All', 'Acquisition & Booking', 'Bharat NCAP & Safety', 'Financing & Leasing', 'Pan-India Delivery'];
  
  const filteredFaqs = faqCategory === 'All' 
    ? FAQS_DATA 
    : FAQS_DATA.filter(f => f.category === faqCategory);

  return (
    <section id="about-section" className="py-20 relative bg-dark-950 border-t border-white/5 space-y-24">
      
      {/* 1. About Us Heritage & Philosophy */}
      <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Est. 2012 • Pan-Bharat Atelier</span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight leading-[1.1]">
              The Benchmark of <br />
              <span className="text-gold-gradient">Indian Automotive Excellence</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Conceived in Mumbai and Pune by competitive Indian motorsport champions and automotive industrialists, <strong className="text-white">APEX MOTORS</strong> curates the nation's most formidable indigenous supercars, tough 4x4 thoroughbreds, and prestigious royal fleet under one roof.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              We operate as a specialized automotive atelier and private wealth vehicle advisor. Every vehicle in our fleet represents the pinnacle of Indian engineering tailored for our terrain—backed by full Bharat NCAP 5-Star safety certification, verified ARAI credentials, and seamless pan-India covered flatbed delivery.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div>
                <div className="font-heading font-black text-2xl text-gold-400">14+</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">Years of Distinction</div>
              </div>
              <div>
                <div className="font-heading font-black text-2xl text-white">3,800+</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">Deliveries Completed</div>
              </div>
              <div>
                <div className="font-heading font-black text-2xl text-cyan-400">28 States</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">& 8 UTs Covered</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative group rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-dark-900 aspect-[4/3] car-image-container">
              <div className="car-aura-glow" />
              <img
                src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80"
                alt="Apex Motors Flagship Atelier"
                className="w-full h-full object-cover car-image-lux"
              />
              <div className="car-image-sheen" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-80 pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-dark-950/85 backdrop-blur-md border border-white/10 z-20">
                <span className="text-[10px] uppercase font-mono tracking-wider text-gold-400 block">Flagship Atelier</span>
                <span className="font-heading font-bold text-white text-sm">One BKC, Bandra Kurla Complex Mumbai</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 2. Global Showroom Network */}
      <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">Global Presence</span>
          <h3 className="font-heading font-black text-3xl text-white">Our Flagship Ateliers</h3>
          <p className="text-xs sm:text-sm text-slate-400">
            Visit our private salons in the world's most prestigious automotive hubs.
          </p>
        </div>

        {/* Showroom Pills */}
        <div className="flex justify-center gap-2 overflow-x-auto pb-2">
          {SHOWROOM_LOCATIONS.map(s => (
            <button
              key={s.id}
              onClick={() => setActiveShowroom(s.id)}
              className={`px-5 py-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeShowroom === s.id
                  ? 'bg-gold-500 text-dark-950 border-gold-500 shadow-glow-gold'
                  : 'bg-dark-900 text-slate-300 border-white/10 hover:border-gold-500/40'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>{s.city}</span>
            </button>
          ))}
        </div>

        {/* Active Showroom Display Card */}
        <div className="rounded-3xl bg-glass-card border border-white/10 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 group">
          <div className="lg:col-span-6 h-64 lg:h-auto relative car-image-container">
            <img
              key={selectedShowroom.id}
              src={selectedShowroom.image}
              alt={selectedShowroom.city}
              className="w-full h-full object-cover car-image-lux animate-image-reveal"
            />
            <div className="car-image-sheen" />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-dark-950 via-dark-950/40 to-transparent pointer-events-none" />
          </div>

          <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[11px] text-gold-400 font-mono uppercase tracking-widest">
                Curator in Residence: {selectedShowroom.curator}
              </span>
              <h4 className="font-heading font-black text-2xl sm:text-3xl text-white">
                {selectedShowroom.city} Flagship Atelier
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Featuring our climate-controlled vault, private client boardroom, bespoke spec customizer studio, and private helicopter rooftop liaison.
              </p>

              <div className="space-y-2.5 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <span>{selectedShowroom.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>{selectedShowroom.phone}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-rose-400 flex-shrink-0" />
                  <span>{selectedShowroom.email}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{selectedShowroom.hours}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => openTestDrive()}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-dark-950 font-bold text-xs uppercase tracking-wider shadow-glow-gold transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment at {selectedShowroom.city}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. Interactive FAQ Accordion */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Collector Questions</span>
          </div>
          <h3 className="font-heading font-black text-3xl text-white">Frequently Asked Questions</h3>
          <p className="text-xs sm:text-sm text-slate-400">
            Clear insights regarding vehicle acquisition, international delivery, warranty, and bespoke financing.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-2 flex-wrap">
          {faqCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFaqCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                faqCategory === cat 
                  ? 'bg-gold-500 text-dark-950 font-bold' 
                  : 'bg-dark-900 text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion Items */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-dark-900/80 border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-white/5 transition-colors"
                >
                  <span className="font-heading font-bold text-sm sm:text-base text-white">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Confidential Enquiry / Contact Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-glass-card border border-white/10 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">
                Private Advisory
              </span>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
                Initiate Confidential Enquiry
              </h3>
              <p className="text-xs text-slate-400">
                Direct communication with our Chief Acquisitions Officer for vehicle inquiries, bespoke factory allocations, or private collection appraisals.
              </p>
            </div>

            {isContactSent ? (
              <div className="py-8 text-center space-y-3 animate-fade-in">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-heading font-bold text-lg text-white">Enquiry Received</h4>
                <p className="text-xs text-slate-300">
                  Your confidential transmission has been delivered. A member of our Senior Advisory team will reach out within 2 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] text-slate-400 font-semibold uppercase">Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Vikramaditya Oberoi"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-xs focus:outline-none focus:border-gold-500/60"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] text-slate-400 font-semibold uppercase">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="v.oberoi@capitalpartners.in"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-xs focus:outline-none focus:border-gold-500/60"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] text-slate-400 font-semibold uppercase">Direct Telephone</label>
                    <input
                      type="tel"
                      placeholder="+91 98200 12345"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-xs focus:outline-none focus:border-gold-500/60 font-mono"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] text-slate-400 font-semibold uppercase">Subject of Enquiry</label>
                    <select
                      value={contactSubject}
                      onChange={(e) => setContactSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-slate-200 text-xs focus:outline-none focus:border-gold-500/60"
                    >
                      <option value="acquisition">Vehicle Acquisition / Priority Allotment</option>
                      <option value="bh-series">Bharat Series (BH Series) RTO Registration</option>
                      <option value="corporate-lease">Corporate Fleet Leasing (HDFC/ICICI Wealth)</option>
                      <option value="bic-track-day">Buddh International Circuit (BIC) Track Session</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] text-slate-400 font-semibold uppercase">Message Details *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Specify model configurations (Thar ROXX, Safari Red Dark, Curvv EV), BH series preferences, or private viewing dates..."
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-xs focus:outline-none focus:border-gold-500/60"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-amber-500 text-dark-950 font-bold text-xs uppercase tracking-wider shadow-glow-gold hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Confidential Enquiry</span>
                </button>
              </form>
            )}

          </div>

        </div>
      </div>

    </section>
  );
}
