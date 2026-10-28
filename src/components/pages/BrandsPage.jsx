import React, { useState } from 'react';
import { CAR_BRANDS, CAR_CATEGORIES, CARS_DATA } from '../../data/cars';
import { useCars } from '../../context/CarContext';
import { 
  Sparkles, 
  ArrowRight, 
  MapPin, 
  Calendar, 
  Gauge, 
  Flame, 
  Zap, 
  Crown, 
  Compass, 
  Wind 
} from 'lucide-react';

export default function BrandsPage({ onSelectBrand }) {
  const { openCarDetails, currency } = useCars();
  const [activeBrandFilter, setActiveBrandFilter] = useState(null);

  const categoryIcons = {
    Sparkles: Sparkles,
    Flame: Flame,
    Gauge: Gauge,
    Crown: Crown,
    Compass: Compass,
    Wind: Wind,
    Zap: Zap,
  };

  const brandsList = CAR_BRANDS.filter(b => b.id !== 'all');

  return (
    <section id="brands-section" className="py-20 relative bg-dark-900/40 border-t border-white/5">
      
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest">
            <Crown className="w-3.5 h-3.5" />
            <span>Curated Heritage Marques</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            Distinguished Marques & <br />
            <span className="text-gold-gradient">Vehicle Classifications</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From the indigenous micro-turbine hypercars of Mumbai and tough ladder-frame 4x4s of Pune and Chakan to sovereign executive salons, explore by Indian classification and marque pedigree.
          </p>
        </div>

        {/* 1. Category Classifications Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-heading font-bold text-xl text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400" />
              <span>Explore by Vehicle Classification</span>
            </h3>
            <span className="text-xs text-slate-400">
              {CAR_CATEGORIES.length - 1} Distinct Classes
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAR_CATEGORIES.filter(c => c.id !== 'all').map((cat) => {
              const count = CARS_DATA.filter(car => car.category === cat.id).length;
              const IconComp = categoryIcons[cat.icon] || Sparkles;

              return (
                <div
                  key={cat.id}
                  onClick={() => {
                    const el = document.getElementById('collection-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group cursor-pointer p-6 rounded-2xl bg-glass-card border border-white/10 hover:border-gold-500/50 transition-all duration-300 flex flex-col justify-between space-y-4 shadow-card-dark hover:-translate-y-1"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-dark-950 transition-colors shadow-glow-gold/40">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h4 className="font-heading font-black text-xl text-white group-hover:text-gold-400 transition-colors">
                      {cat.name}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                    <span className="font-mono text-gold-400 font-semibold">{count} Models in Fleet</span>
                    <span className="text-slate-400 group-hover:text-white flex items-center gap-1 font-semibold">
                      <span>Browse</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Brand Directory Cards */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center justify-between">
            <h3 className="font-heading font-bold text-xl text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>World-Renowned Manufacturers</span>
            </h3>
            <span className="text-xs text-slate-400 font-mono">10 Certified Partners</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandsList.map((brand) => {
              const brandCars = CARS_DATA.filter(c => c.brandId === brand.id);

              return (
                <div
                  key={brand.id}
                  className="rounded-2xl bg-dark-950/70 border border-white/10 hover:border-gold-500/40 p-6 flex flex-col justify-between space-y-5 transition-all shadow-card-dark"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl p-2 rounded-xl bg-dark-900 border border-white/10">{brand.logo}</span>
                        <div>
                          <h4 className="font-heading font-black text-xl text-white">
                            {brand.name}
                          </h4>
                          <div className="flex items-center gap-1 text-[11px] text-slate-400">
                            <MapPin className="w-3 h-3 text-gold-400" />
                            <span>{brand.origin}</span>
                          </div>
                        </div>
                      </div>

                      <span className="text-xs font-mono text-slate-500">
                        Est. {brand.founded}
                      </span>
                    </div>

                    {/* Preview of Models */}
                    <div className="space-y-1.5 pt-2">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">
                        Featured in Collection:
                      </span>
                      <div className="space-y-1">
                        {brandCars.map(car => (
                          <button
                            key={car.id}
                            onClick={() => openCarDetails(car)}
                            className="w-full text-left p-2 rounded-lg bg-dark-900/60 hover:bg-gold-500/10 border border-white/5 hover:border-gold-500/30 flex items-center justify-between text-xs transition-all text-slate-300 hover:text-white"
                          >
                            <span className="truncate font-medium">{car.name}</span>
                            <span className="font-mono text-gold-400 font-bold ml-2 flex-shrink-0">
                              {car.specs.horsepower} HP
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      if (onSelectBrand) onSelectBrand(brand.id);
                      const el = document.getElementById('collection-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-gold-500 hover:text-dark-950 text-slate-300 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 border border-white/10 hover:border-gold-500"
                  >
                    <span>View All {brand.name} Exotics</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </section>
  );
}
