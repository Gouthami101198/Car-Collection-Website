import React, { useState } from 'react';
import { useCars } from '../../context/CarContext';
import { 
  Sparkles, 
  Send, 
  Mail, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  CheckCircle2,
  ArrowUp
} from 'lucide-react';

export default function Footer() {
  const { setActiveTab, showToast } = useCars();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      showToast('Please enter a valid email address', 'info');
      return;
    }
    setSubscribed(true);
    showToast('Subscribed to Private Off-Market Allocations Dispatch', 'gold');
    setTimeout(() => {
      setNewsletterEmail('');
      setSubscribed(false);
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      
      {/* Subtle Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-12 relative z-10">
        
        {/* Top Newsletter & Dispatch Banner */}
        <div className="rounded-3xl bg-glass-card border border-white/10 p-8 sm:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl text-center lg:text-left">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold-400 font-semibold flex items-center justify-center lg:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Private Gazette Dispatch</span>
            </span>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
              Stay Informed on Off-Market Allocations
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Receive confidential dispatches regarding rare hypercar consignments, factory allocation openings, and closed-circuit track day invitations.
            </p>
          </div>

          <div className="w-full lg:w-auto flex-1 max-w-md">
            {subscribed ? (
              <div className="px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Private subscription active. Dispatches arrive fortnightly.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  required
                  placeholder="Enter your private email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full sm:flex-1 px-4 py-3 rounded-xl bg-dark-900 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-gold-500/60"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-dark-950 font-bold text-xs uppercase tracking-wider shadow-glow-gold transition-all flex items-center justify-center gap-1.5 flex-shrink-0 pink-shimmer-btn"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4 Column Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-amber-600 flex items-center justify-center shadow-glow-gold">
                <span className="font-heading font-black text-dark-950 text-xl">A</span>
              </div>
              <div>
                <span className="font-heading font-black tracking-widest text-lg text-white">APEX</span>{' '}
                <span className="text-gold-500 font-heading font-bold text-lg tracking-widest">MOTORS</span>
                <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400 font-medium">Automotive Atelier</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              India's premier destination for indigenous hypercars, tough 4x4 icons, and sovereign luxury fleet.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>All 4 Indian Flagship Ateliers Online</span>
            </div>
          </div>

          {/* Col 2: Showroom Locations */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Flagship Ateliers
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <strong className="text-slate-200 block">Mumbai (BKC):</strong>
                One BKC, G Block, Bandra Kurla Complex
              </li>
              <li>
                <strong className="text-slate-200 block">New Delhi:</strong>
                Worldmark 1, Aerocity, New Delhi
              </li>
              <li>
                <strong className="text-slate-200 block">Bengaluru:</strong>
                The Collection, UB City, Vittal Mallya Rd
              </li>
              <li>
                <strong className="text-slate-200 block">Hyderabad:</strong>
                Road No. 36, Jubilee Hills
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Curation & Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button 
                  onClick={() => {
                    setActiveTab('collection');
                    const el = document.getElementById('collection-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }} 
                  className="hover:text-gold-400 transition-colors"
                >
                  Flagship Car Collection
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    setActiveTab('brands');
                    const el = document.getElementById('brands-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }} 
                  className="hover:text-gold-400 transition-colors"
                >
                  Heritage Marques & Categories
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const el = document.getElementById('about-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }} 
                  className="hover:text-gold-400 transition-colors"
                >
                  Private Circuit Track Days
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const el = document.getElementById('about-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }} 
                  className="hover:text-gold-400 transition-colors"
                >
                  White-Glove Air Cargo Delivery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const el = document.getElementById('about-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }} 
                  className="hover:text-gold-400 transition-colors"
                >
                  150-Point Factory Inspection
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Assurance & Protocol */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Legal & Verification
            </h4>
            <div className="p-4 rounded-xl bg-dark-900 border border-white/5 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 text-gold-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Provenance Guarantee</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                All vehicles accompanied by factory chassis records, clean titles, and verified odometer logs.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} APEX MOTORS ATELIER S.A. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Privacy & Discretion</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Allocation</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-dark-900 border border-white/10 text-slate-300 hover:text-gold-400 hover:border-gold-500/40 transition-colors flex items-center gap-1"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
