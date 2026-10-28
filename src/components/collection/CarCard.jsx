import React, { useState } from 'react';
import { useCars } from '../../context/CarContext';
import { formatPrice } from '../../utils/formatters';
import { playEngineRev } from '../../utils/engineAudio';
import { 
  Heart, 
  Layers, 
  Zap, 
  Gauge, 
  Flame, 
  ArrowRight, 
  Volume2, 
  Calendar,
  Sparkles,
  Check
} from 'lucide-react';
import CarPaintCanvas from '../common/CarPaintCanvas';

export default function CarCard({ car, viewMode = 'grid' }) {
  const { 
    isInWishlist, 
    toggleWishlist, 
    compareList, 
    addToCompare, 
    removeFromCompare, 
    currency, 
    openCarDetails, 
    openTestDrive 
  } = useCars();

  const [activeColor, setActiveColor] = useState(car.colors[0]);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlayingSound, setIsPlayingSound] = useState(false);

  const isLiked = isInWishlist(car.id);
  const isCompared = compareList.includes(car.id);

  const handleSound = (e) => {
    e.stopPropagation();
    if (isPlayingSound) return;
    setIsPlayingSound(true);
    playEngineRev(car.specs.soundType || 'v8-turbo', 2.0);
    setTimeout(() => {
      setIsPlayingSound(false);
    }, 2000);
  };

  const handleCompareToggle = (e) => {
    e.stopPropagation();
    if (isCompared) {
      removeFromCompare(car.id);
    } else {
      addToCompare(car.id);
    }
  };

  const handleWishlistToggle = (e) => {
    e.stopPropagation();
    toggleWishlist(car.id);
  };

  if (viewMode === 'list') {
    return (
      <div 
        onClick={() => openCarDetails(car, activeColor)}
        className="group cursor-pointer rounded-2xl bg-glass-card border border-white/10 card-lift shine-sweep p-4 transition-all duration-300 flex flex-col md:flex-row items-center gap-6 shadow-card-dark relative"
      >
        {/* Image Container with Dynamic Paint Shader */}
        <div className="relative w-full md:w-72 h-48 rounded-xl overflow-hidden flex-shrink-0 bg-dark-900">
          <CarPaintCanvas
            car={car}
            activeColor={activeColor}
            defaultColor={car.colors[0]}
            showColorBadge={true}
            className="w-full h-full"
          />
          <div className="absolute top-2 left-2 px-2.5 py-1 rounded-md bg-dark-950/80 backdrop-blur-md text-[10px] font-mono text-gold-400 font-bold border border-white/10 z-20">
            {car.categoryName}
          </div>
          <button
            onClick={handleWishlistToggle}
            className="absolute top-2 right-2 p-2 rounded-lg bg-dark-950/80 backdrop-blur-md text-slate-300 hover:text-rose-500 hover:scale-110 active:scale-90 border border-white/10 transition-all z-20"
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'text-rose-500 fill-rose-500' : ''}`} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 w-full space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="text-[11px] text-slate-400 uppercase tracking-widest font-semibold">{car.brand} • {car.year}</span>
              <h3 className="font-heading font-black text-xl text-white group-hover:text-gold-400 transition-colors">
                {car.name}
              </h3>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-slate-400 uppercase">Starting at</span>
              <div className="font-heading font-black text-2xl text-gold-400">
                {formatPrice(car.price + (activeColor?.price || 0), currency)}
              </div>
            </div>
          </div>

          {/* Quick Specs */}
          <div className="grid grid-cols-3 gap-3 py-2 border-y border-white/5 max-w-lg">
            <div>
              <span className="text-[10px] text-slate-400 uppercase flex items-center gap-1">
                <Zap className="w-3 h-3 text-gold-400" /> 0-100
              </span>
              <span className="font-heading font-bold text-sm text-white">{car.specs.acceleration}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase flex items-center gap-1">
                <Flame className="w-3 h-3 text-rose-500" /> Power
              </span>
              <span className="font-heading font-bold text-sm text-white">{car.specs.horsepower} HP</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase flex items-center gap-1">
                <Gauge className="w-3 h-3 text-cyan-400" /> Top Speed
              </span>
              <span className="font-heading font-bold text-sm text-white">{car.specs.topSpeed}</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="flex items-center gap-2">
              <button
                onClick={handleSound}
                className="p-2 rounded-lg bg-white/5 hover:bg-gold-500 hover:text-dark-950 text-slate-300 text-xs flex items-center gap-1.5 transition-colors"
                title="Play Engine Rev"
              >
                <Volume2 className={`w-3.5 h-3.5 ${isPlayingSound ? 'text-amber-400 animate-bounce' : ''}`} />
                <span className="hidden sm:inline">Engine Rev</span>
              </button>

              <button
                onClick={handleCompareToggle}
                className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  isCompared 
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40' 
                    : 'bg-white/5 hover:bg-white/10 text-slate-300'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{isCompared ? 'In Compare' : 'Compare'}</span>
              </button>

              {/* Color swatches in List View */}
              <div 
                className="flex items-center gap-1 bg-dark-950/80 px-2 py-1 rounded-full border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                {car.colors.map((col, idx) => {
                  const isSelected = activeColor?.name === col.name;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveColor(col);
                      }}
                      onMouseEnter={() => setActiveColor(col)}
                      className={`w-3 h-3 rounded-full border transition-all ${
                        isSelected 
                          ? 'border-gold-300 ring-2 ring-gold-400/80 scale-125' 
                          : 'border-white/30 hover:scale-110 opacity-75 hover:opacity-100'
                      }`}
                      style={{ backgroundColor: col.hex }}
                      title={`${col.name}`}
                    />
                  );
                })}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  openTestDrive(car);
                }}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold uppercase tracking-wider text-white"
              >
                Book Drive
              </button>
              <button
                onClick={() => openCarDetails(car, activeColor)}
                className="px-4 py-2 rounded-xl bg-gold-500 hover:bg-gold-400 text-dark-950 text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-glow-gold"
              >
                <span>Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid Card View (Default)
  return (
    <div 
      onClick={() => openCarDetails(car, activeColor)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer rounded-2xl bg-glass-card border border-white/10 card-lift shine-sweep flex flex-col overflow-hidden shadow-card-dark relative"
    >
      {/* Visual Header with Real-Time Automotive Paint Shader & Sheen */}
      <div className="relative aspect-[16/10] overflow-hidden bg-dark-900">
        <CarPaintCanvas
          car={car}
          activeColor={activeColor}
          defaultColor={car.colors[0]}
          showColorBadge={true}
          className="w-full h-full"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 z-20">
          <span className="px-2.5 py-1 rounded-md bg-dark-950/80 backdrop-blur-md text-[10px] font-mono text-gold-400 font-bold border border-white/10">
            {car.categoryName}
          </span>
          {car.featured && (
            <span className="px-2 py-0.5 rounded-md bg-rose-600/90 text-white text-[9px] font-bold uppercase tracking-wider shadow-glow-crimson flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" />
              Flagship
            </span>
          )}
        </div>

        {/* Action icons: Sound & Wishlist */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 z-20">
          <button
            onClick={handleSound}
            className={`p-2 rounded-xl backdrop-blur-md hover:scale-110 active:scale-90 transition-all ${
              isPlayingSound 
                ? 'bg-rose-500 text-white shadow-glow-crimson animate-pulse' 
                : 'bg-dark-950/80 text-slate-300 hover:text-gold-400 hover:bg-dark-900 border border-white/10'
            }`}
            title="Hear Engine Sound"
          >
            <Volume2 className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={handleWishlistToggle}
            className="p-2 rounded-xl bg-dark-950/80 backdrop-blur-md text-slate-300 hover:text-rose-500 hover:scale-110 active:scale-90 hover:bg-dark-900 border border-white/10 transition-all"
            title="Save to Wishlist"
          >
            <Heart className={`w-3.5 h-3.5 ${isLiked ? 'text-rose-500 fill-rose-500' : ''}`} />
          </button>
        </div>

        {/* Live Status indicator */}
        <div className="absolute bottom-3 left-3 text-[11px] font-medium flex items-center gap-1.5 text-slate-300 z-20">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>{car.status}</span>
        </div>

        {/* Interactive Color Palette Swatches - Click ANY color to change car's paint in real time */}
        <div 
          className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-dark-950/85 backdrop-blur-md px-2 py-1 rounded-full border border-white/15 shadow-xl z-20"
          onClick={(e) => e.stopPropagation()}
        >
          {car.colors.map((col, idx) => {
            const isSelected = activeColor?.name === col.name;
            return (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveColor(col);
                }}
                onMouseEnter={() => setActiveColor(col)}
                className={`relative w-3.5 h-3.5 rounded-full border transition-all duration-300 ${
                  isSelected 
                    ? 'border-gold-300 ring-2 ring-gold-400/80 shadow-glow-gold scale-125 z-10' 
                    : 'border-white/40 hover:scale-110 hover:border-white opacity-75 hover:opacity-100'
                }`}
                style={{ backgroundColor: col.hex }}
                title={`${col.name} ${col.price > 0 ? `(+${col.price})` : '(Included)'}`}
              >
                {isSelected && (
                  <span className="absolute inset-0 rounded-full border border-white/60 pointer-events-none" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        <div>
          <div className="text-[11px] text-slate-400 uppercase tracking-widest font-semibold flex items-center justify-between">
            <span>{car.brand}</span>
            <span className="font-mono text-slate-500">{car.year}</span>
          </div>
          
          <h3 className="font-heading font-black text-lg text-white group-hover:text-gold-400 transition-colors line-clamp-1 mt-0.5">
            {car.name}
          </h3>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-dark-900/80 border border-white/5">
          <div className="text-center">
            <span className="text-[10px] text-slate-400 uppercase flex items-center justify-center gap-1">
              <Zap className="w-2.5 h-2.5 text-gold-400" /> 0-100
            </span>
            <div className="font-heading font-black text-sm text-white mt-0.5">
              {car.specs.acceleration}
            </div>
          </div>

          <div className="text-center border-x border-white/5">
            <span className="text-[10px] text-slate-400 uppercase flex items-center justify-center gap-1">
              <Flame className="w-2.5 h-2.5 text-rose-500" /> Output
            </span>
            <div className="font-heading font-black text-sm text-white mt-0.5">
              {car.specs.horsepower} <span className="text-[10px] font-normal text-slate-400">HP</span>
            </div>
          </div>

          <div className="text-center">
            <span className="text-[10px] text-slate-400 uppercase flex items-center justify-center gap-1">
              <Gauge className="w-2.5 h-2.5 text-cyan-400" /> Top Spd
            </span>
            <div className="font-heading font-black text-sm text-white mt-0.5">
              {car.specs.topSpeed.split(' ')[0]} <span className="text-[10px] font-normal text-slate-400">KM/H</span>
            </div>
          </div>
        </div>

        {/* Price & Action Footer */}
        <div className="pt-2 border-t border-white/5 flex items-center justify-between gap-2">
          <div>
            <div className="text-[10px] text-slate-400 uppercase font-mono">Ex-Showroom</div>
            <div className="font-heading font-black text-xl text-gold-400">
              {formatPrice(car.price + (activeColor?.price || 0), currency)}
            </div>
            {activeColor?.price > 0 && (
              <span className="text-[9px] text-gold-300/80 font-mono block truncate max-w-[130px]">
                +{formatPrice(activeColor.price, currency)} {activeColor.name.split(' ')[0]}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleCompareToggle}
              className={`p-2.5 rounded-xl text-xs hover:scale-110 active:scale-90 transition-all border ${
                isCompared
                  ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50 shadow-glow-cyan'
                  : 'bg-white/5 text-slate-400 hover:text-white border-white/10 hover:border-white/20'
              }`}
              title={isCompared ? 'Remove from Comparison' : 'Add to Comparison'}
            >
              <Layers className="w-4 h-4" />
            </button>

            <button
              onClick={() => openCarDetails(car, activeColor)}
              className="px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-pink-500 hover:from-gold-300 hover:to-pink-400 text-dark-950 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-glow-gold hover:shadow-xl hover:scale-105 active:scale-95 transition-all pink-shimmer-btn group/btn"
            >
              <span>Inspect</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
