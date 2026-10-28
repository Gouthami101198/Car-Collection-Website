import React from 'react';
import { TESTIMONIALS_DATA } from '../../data/cars';
import { Star, Quote, Sparkles } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-20 relative bg-dark-900/40 border-t border-white/5">
      <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Collector Testimonials</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            Trusted by the World’s Leading <br />
            <span className="text-gold-gradient">Automotive Connoisseurs</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From Beverly Hills estates to Monaco harbors and Dubai penthouses, read what our distinguished patrons say about our discreet advisory and curation.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-glass-card border border-white/10 hover:border-gold-500/40 transition-all flex flex-col justify-between space-y-6 shadow-card-dark relative"
            >
              <Quote className="w-10 h-10 text-gold-500/20 absolute top-6 right-6" />

              <div className="space-y-4">
                {/* 5-star rating */}
                <div className="flex items-center gap-1 text-gold-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400" />
                  ))}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{item.comment}"
                </p>

                <div className="inline-block px-3 py-1 rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-400 text-[11px] font-mono">
                  Acquired: {item.carAcquired}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold-500/40 group-hover:scale-110 group-hover:border-gold-400 group-hover:shadow-glow-gold transition-all duration-500"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-heading font-bold text-white text-sm">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    {item.role} • {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
