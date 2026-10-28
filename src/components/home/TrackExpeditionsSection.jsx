import React, { useState } from 'react';
import { TRACK_EXPEDITIONS_DATA } from '../../data/cars';
import { useCars } from '../../context/CarContext';
import { 
  Flag, 
  Compass, 
  Gauge, 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Zap
} from 'lucide-react';

export default function TrackExpeditionsSection() {
  const { openTestDrive, showToast } = useCars();
  const [selectedExpedition, setSelectedExpedition] = useState(TRACK_EXPEDITIONS_DATA[0]);

  const handleBookSlot = (expedition) => {
    openTestDrive();
    showToast(`Inquiring slot for ${expedition.title}`, 'gold');
  };

  return (
    <section id="track-section" className="py-24 relative bg-dark-950 border-t border-white/5 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[500px] h-[500px] bg-accent-crimson/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest">
            <Flag className="w-3.5 h-3.5" />
            <span>Apex Motorsport & Overland Atelier</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            F1 Grand Prix Track Days & <br />
            <span className="text-gold-gradient">Himalayan Overland Expeditions</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Ownership at APEX MOTORS transcends the showroom floor. Experience full-throttle F1 track sessions at Buddh International Circuit or conquer high-altitude Spiti mountain passes with military-grade convoy support.
          </p>
        </div>

        {/* Expeditions 3-Card Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TRACK_EXPEDITIONS_DATA.map((item) => {
            const isSelected = selectedExpedition.id === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedExpedition(item)}
                className={`group cursor-pointer rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between shadow-2xl bg-dark-900/90 card-lift shine-sweep ${
                  isSelected 
                    ? 'border-gold-500 shadow-glow-gold/40' 
                    : 'border-white/10 hover:border-gold-500/50'
                }`}
              >
                {/* Visual Header with Luxury Animation & Sheen */}
                <div className="relative aspect-[16/10] overflow-hidden bg-dark-950 car-image-container">
                  <div className="car-aura-glow" />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover car-image-lux"
                    loading="lazy"
                  />
                  <div className="car-image-sheen" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent pointer-events-none" />
                  
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-dark-950/80 backdrop-blur-md text-[10px] font-mono text-gold-400 font-bold border border-gold-500/30 z-20">
                    {item.tag}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300 z-20">
                    <span className="font-mono text-[11px] text-emerald-400 flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      {item.circuitLength}
                    </span>
                    <span className="font-mono text-[11px] text-amber-400">
                      {item.topSpeedZone}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                      {item.subtitle}
                    </span>
                    <h3 className="font-heading font-black text-xl text-white group-hover:text-gold-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Highlights list */}
                  <div className="space-y-2 py-3 border-t border-white/5">
                    {item.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Strip */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase block">Tariff</span>
                      <span className="font-heading font-black text-sm text-gold-400 font-mono">
                        {item.pricePerSession}
                      </span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBookSlot(item);
                      }}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-400 hover:to-amber-500 text-dark-950 font-heading font-black text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-glow-gold hover:scale-105 active:scale-95 gold-shimmer-btn group/btn"
                    >
                      <span>Reserve Slot</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Telemetry & Coaching Standards Ribbon */}
        <div className="p-8 rounded-3xl bg-glass-card border border-white/10 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="font-heading font-black text-3xl text-gold-400">FIA Grade 1</div>
            <div className="text-xs text-slate-300 font-semibold">Track Certification</div>
            <div className="text-[11px] text-slate-500">Buddh International Circuit F1 Spec</div>
          </div>
          <div className="space-y-1">
            <div className="font-heading font-black text-3xl text-white">5,359 m</div>
            <div className="text-xs text-slate-300 font-semibold">Peak High Altitude</div>
            <div className="text-[11px] text-slate-500">Khardung La Extreme Pass</div>
          </div>
          <div className="space-y-1">
            <div className="font-heading font-black text-3xl text-cyan-400">100%</div>
            <div className="text-xs text-slate-300 font-semibold">Convoy Recovery</div>
            <div className="text-[11px] text-slate-500">Hydraulic Winch & Mobile Workshop</div>
          </div>
          <div className="space-y-1">
            <div className="font-heading font-black text-3xl text-amber-400">1-on-1</div>
            <div className="text-xs text-slate-300 font-semibold">National Racing Mentors</div>
            <div className="text-[11px] text-slate-500">Formula 4 & Rally Champions</div>
          </div>
        </div>

      </div>
    </section>
  );
}
