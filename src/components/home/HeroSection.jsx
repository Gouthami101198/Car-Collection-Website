import React, { useState, useEffect } from 'react';
import { useCars } from '../../context/CarContext';
import { CARS_DATA } from '../../data/cars';
import { formatPrice } from '../../utils/formatters';
import { playEngineRev } from '../../utils/engineAudio';
import { 
  Volume2, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  Zap, 
  Gauge, 
  Flame, 
  ArrowUpRight,
  ShieldAlert,
  Play
} from 'lucide-react';
import CarPaintCanvas from '../common/CarPaintCanvas';

export default function HeroSection() {
  const { currency, openCarDetails, openTestDrive } = useCars();
  
  // Select top 5 marquee Indian hero cars
  const heroCars = [
    CARS_DATA.find(c => c.id === 'vazirani-shul') || CARS_DATA[0],
    CARS_DATA.find(c => c.id === 'range-rover-sv-bespoke') || CARS_DATA[1],
    CARS_DATA.find(c => c.id === 'mahindra-thar-roxx') || CARS_DATA[2],
    CARS_DATA.find(c => c.id === 'pravaig-defy') || CARS_DATA[3],
    CARS_DATA.find(c => c.id === 'tata-safari-red-dark') || CARS_DATA[4],
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevving, setIsRevving] = useState(false);
  const [rpmVal, setRpmVal] = useState(1200);

  const activeCar = heroCars[currentIndex] || heroCars[0] || CARS_DATA[0];
  const [activeHeroColor, setActiveHeroColor] = useState(activeCar ? activeCar.colors[0] : null);

  useEffect(() => {
    if (activeCar) {
      setActiveHeroColor(activeCar.colors[0]);
    }
  }, [activeCar?.id]);

  if (!activeCar) return null;

  // Auto-advance slides every 8 seconds unless revving
  useEffect(() => {
    if (isRevving) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroCars.length);
    }, 8500);
    return () => clearInterval(interval);
  }, [isRevving, heroCars.length]);

  const handleRevEngine = () => {
    if (isRevving) return;
    setIsRevving(true);
    playEngineRev(activeCar.specs.soundType || 'v8-turbo', 2.5);

    // RPM animation
    let start = Date.now();
    const duration = 2500;
    const peakRpm = activeCar.specs.soundType === 'hyper-electric' ? 18000 : 8800;
    
    const anim = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = elapsed / duration;
      if (progress >= 1) {
        clearInterval(anim);
        setRpmVal(1200);
        setIsRevving(false);
      } else if (progress < 0.45) {
        // Ramping up
        const factor = progress / 0.45;
        setRpmVal(Math.round(1200 + (peakRpm - 1200) * factor));
      } else {
        // Throttle let off
        const factor = (progress - 0.45) / 0.55;
        setRpmVal(Math.round(peakRpm - (peakRpm - 1200) * factor));
      }
    }, 40);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % heroCars.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + heroCars.length) % heroCars.length);
  };

  return (
    <section className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      
      {/* Background Cinematic Backdrop with Ken Burns Drifting and Reveal */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          key={`${activeCar.id}-${activeHeroColor?.image || activeCar.images.main}`}
          src={activeHeroColor?.image || activeCar.images.main}
          alt={activeCar.name}
          className="w-full h-full object-cover object-center animate-ken-burns-lux animate-image-reveal transition-all duration-1000 filter brightness-[0.38] contrast-125"
        />
        {/* Luxury Vignettes and Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/60 to-dark-950/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/70 to-transparent" />
        
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-accent-crimson/10 rounded-full blur-[160px] pointer-events-none" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1750px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Typography, Tag, Specs, Buttons */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{activeCar.badge} • Edition {activeCar.year}</span>
            </div>

            {/* Title & Tagline */}
            <div className="space-y-1.5">
              <p className="text-slate-400 uppercase tracking-[0.25em] text-[10px] sm:text-xs font-semibold">
                {activeCar.brand} Masterpiece
              </p>
              <h1 className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.08]">
                {activeCar.name.split(' ')[0]}{' '}
                <span className="text-gold-gradient">
                  {activeCar.name.split(' ').slice(1).join(' ')}
                </span>
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl font-normal leading-relaxed line-clamp-3">
                {activeCar.description}
              </p>
            </div>

            {/* Performance Telemetry HUD */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 py-1.5 max-w-2xl">
              <div className="p-3 rounded-2xl bg-dark-900/80 border border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-1.5 text-slate-400 text-[11px] uppercase tracking-wider mb-1">
                  <Zap className="w-3 h-3 text-gold-400" />
                  <span>0-100 KM/H</span>
                </div>
                <div className="font-heading font-black text-lg sm:text-xl text-white">
                  {activeCar.specs.acceleration}
                </div>
                <span className="text-[10px] text-slate-500">Acceleration</span>
              </div>

              <div className="p-3 rounded-2xl bg-dark-900/80 border border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-1.5 text-slate-400 text-[11px] uppercase tracking-wider mb-1">
                  <Flame className="w-3 h-3 text-rose-500" />
                  <span>Max Power</span>
                </div>
                <div className="font-heading font-black text-lg sm:text-xl text-white">
                  {activeCar.specs.horsepower} <span className="text-[10px] text-rose-400 font-normal">HP</span>
                </div>
                <span className="text-[10px] text-slate-500">Peak Output</span>
              </div>

              <div className="p-3 rounded-2xl bg-dark-900/80 border border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-1.5 text-slate-400 text-[11px] uppercase tracking-wider mb-1">
                  <Gauge className="w-3 h-3 text-cyan-400" />
                  <span>Top Speed</span>
                </div>
                <div className="font-heading font-black text-lg sm:text-xl text-white">
                  {activeCar.specs.topSpeed.split(' ')[0]} <span className="text-[10px] text-cyan-400 font-normal">KM/H</span>
                </div>
                <span className="text-[10px] text-slate-500">ARAI Tested</span>
              </div>

              <div className="p-3 rounded-2xl bg-dark-900/80 border border-gold-500/30 backdrop-blur-md shadow-glow-gold/40">
                <div className="text-slate-400 text-[11px] uppercase tracking-wider mb-1">
                  Price Guide
                </div>
                <div className="font-heading font-black text-base sm:text-lg text-gold-400">
                  {formatPrice(activeCar.price, currency)}
                </div>
                <span className="text-[10px] text-slate-500">Ex-Showroom India</span>
              </div>
            </div>

            {/* Interactive Rev Engine Tachometer HUD */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-dark-900/90 via-dark-850/90 to-dark-900/90 border border-white/10 backdrop-blur-xl flex flex-wrap items-center justify-between gap-4 max-w-xl">
              <div className="flex items-center gap-3">
                <button
                  onClick={handleRevEngine}
                  disabled={isRevving}
                  className={`relative px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all ${
                    isRevving
                      ? 'bg-rose-600 text-white shadow-glow-crimson animate-pulse'
                      : 'bg-white/10 hover:bg-gold-500 hover:text-dark-950 text-slate-200 border border-white/15'
                  }`}
                  title="Click to rev the engine acoustics"
                >
                  <Volume2 className={`w-4 h-4 ${isRevving ? 'animate-bounce' : ''}`} />
                  <span>{isRevving ? 'Revving...' : 'Rev Acoustics'}</span>
                </button>

                <div>
                  <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">
                    Engine Profile
                  </div>
                  <div className="text-xs font-semibold text-white capitalize">
                    {activeCar.specs.soundType.replace('-', ' ')}
                  </div>
                </div>
              </div>

              {/* Dynamic Tachometer Readout */}
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-sm font-mono font-black text-gold-400">
                    {rpmVal.toLocaleString()} <span className="text-[10px] text-slate-400 font-sans">RPM</span>
                  </div>
                  <div className="w-28 sm:w-36 h-2 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-white/10">
                    <div 
                      className={`h-full rounded-full transition-all duration-75 ${
                        rpmVal > 6000 
                          ? 'bg-gradient-to-r from-amber-500 to-rose-600 shadow-glow-crimson' 
                          : 'bg-gradient-to-r from-cyan-400 to-gold-400'
                      }`}
                      style={{ width: `${Math.min(100, Math.max(10, (rpmVal / (activeCar.specs.soundType === 'hyper-electric' ? 18000 : 9000)) * 100))}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => openCarDetails(activeCar, activeHeroColor)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-pink-500 text-dark-950 font-bold text-sm uppercase tracking-wider shadow-glow-gold hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 pink-shimmer-btn"
              >
                <span>Inspect Specifications</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => openTestDrive(activeCar)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-dark-900/90 hover:bg-white/10 border border-white/15 text-white font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 hover:border-gold-500/50"
              >
                <span>Request Private Drive</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase & Carousel Thumbnails */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center space-y-4">
            
            {/* Visual Preview Glass Card with Gentle Floating Levitation & Real-Time Paint Shader */}
            <div className="relative group w-full max-w-md rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-dark-900/70 backdrop-blur-xl animate-float-card hover:border-gold-500/50 transition-all duration-500">
              <div className="aspect-[16/10] overflow-hidden relative">
                <CarPaintCanvas
                  car={activeCar}
                  activeColor={activeHeroColor}
                  defaultColor={activeCar.colors[0]}
                  showColorBadge={true}
                  className="w-full h-full"
                />

                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-dark-950/80 backdrop-blur-md border border-white/10 text-[11px] font-mono font-bold text-gold-400 z-20">
                  {activeCar.categoryName}
                </div>

                <div className="absolute bottom-3 left-3 text-xs text-slate-300 z-20">
                  <span className="font-mono">{activeCar.year} Model Year</span>
                </div>

                {/* Color dots on Hero preview card */}
                <div 
                  className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-dark-950/85 backdrop-blur-md px-2 py-1 rounded-full border border-white/15 shadow-xl z-20"
                  onClick={(e) => e.stopPropagation()}
                >
                  {activeCar.colors.map((col, idx) => {
                    const isSelected = activeHeroColor?.name === col.name;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveHeroColor(col);
                        }}
                        onMouseEnter={() => setActiveHeroColor(col)}
                        className={`w-3.5 h-3.5 rounded-full border transition-all duration-300 ${
                          isSelected
                            ? 'border-gold-300 ring-2 ring-gold-400/80 scale-125 z-10'
                            : 'border-white/40 hover:scale-110 opacity-75 hover:opacity-100'
                        }`}
                        style={{ backgroundColor: col.hex }}
                        title={`${col.name} ${col.price > 0 ? `(+${col.price})` : '(Included)'}`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Carousel Navigation Strip */}
            <div className="flex items-center gap-2 bg-dark-900/80 p-2 rounded-2xl border border-white/10 backdrop-blur-md max-w-full overflow-x-auto scrollbar-none">
              <button
                onClick={prevSlide}
                className="p-2 rounded-xl bg-white/5 hover:bg-gold-500 hover:text-dark-950 text-slate-300 transition-colors flex-shrink-0"
                title="Previous Car"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 px-1 overflow-x-auto scrollbar-none">
                {heroCars.map((car, idx) => (
                  <button
                    key={car.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`group/thumb relative transition-all duration-300 rounded-lg overflow-hidden border flex-shrink-0 ${
                      idx === currentIndex
                        ? 'w-14 h-9 border-gold-500 shadow-glow-gold scale-105'
                        : 'w-9 h-9 border-white/15 opacity-55 hover:opacity-100 hover:scale-105'
                    }`}
                  >
                    <img 
                      src={car.images.main} 
                      alt={car.name} 
                      className="w-full h-full object-cover group-hover/thumb:scale-120 transition-transform duration-500 ease-out"
                    />
                    {idx === currentIndex && (
                      <span className="absolute inset-0 bg-gold-400/15 pointer-events-none" />
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-2 rounded-xl bg-white/5 hover:bg-gold-500 hover:text-dark-950 text-slate-300 transition-colors flex-shrink-0"
                title="Next Car"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Key Atelier Stats Bar - Responsive 2x2 grid on mobile, 4-col bar on tablet & desktop */}
      <div className="mt-10 md:mt-0 md:absolute md:bottom-0 md:left-0 md:right-0 border-t border-white/10 bg-dark-950/85 backdrop-blur-xl py-3 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-0 md:divide-x md:divide-white/10 text-center">
            <div className="p-2.5 md:p-0 bg-dark-900/60 md:bg-transparent rounded-xl md:rounded-none border border-white/5 md:border-none">
              <div className="font-heading font-black text-lg md:text-xl text-white">50+</div>
              <div className="text-[10px] md:text-[11px] text-slate-400 uppercase tracking-widest">Flagship Models</div>
            </div>
            <div className="p-2.5 md:p-0 bg-dark-900/60 md:bg-transparent rounded-xl md:rounded-none border border-white/5 md:border-none">
              <div className="font-heading font-black text-lg md:text-xl text-gold-400">₹500+ Cr</div>
              <div className="text-[10px] md:text-[11px] text-slate-400 uppercase tracking-widest">Fleet Valuation</div>
            </div>
            <div className="p-2.5 md:p-0 bg-dark-900/60 md:bg-transparent rounded-xl md:rounded-none border border-white/5 md:border-none">
              <div className="font-heading font-black text-lg md:text-xl text-white">4 Indian Metros</div>
              <div className="text-[10px] md:text-[11px] text-slate-400 uppercase tracking-widest">Mumbai • Delhi • BLR • HYD</div>
            </div>
            <div className="p-2.5 md:p-0 bg-dark-900/60 md:bg-transparent rounded-xl md:rounded-none border border-white/5 md:border-none">
              <div className="font-heading font-black text-lg md:text-xl text-cyan-400">100% Bharat NCAP</div>
              <div className="text-[10px] md:text-[11px] text-slate-400 uppercase tracking-widest">5-Star Safety & BH RTO</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
