import React from 'react';
import { CAR_BRANDS } from '../../data/cars';

export default function BrandMarquee({ onSelectBrand, selectedBrand }) {
  const brandsList = CAR_BRANDS.filter(b => b.id !== 'all');

  return (
    <div className="py-8 border-y border-white/10 bg-dark-900/50 backdrop-blur-md overflow-hidden">
      <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 mb-4 flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.25em] text-slate-400 font-semibold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-gold-500 animate-ping" />
          Certified Factory Alliances & Heritage Marques
        </span>
        <span className="text-xs text-gold-400 font-mono hidden sm:block">
          Select marque to filter collection
        </span>
      </div>

      {/* Brand Pills / Buttons */}
      <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => onSelectBrand('all')}
            className={`flex-shrink-0 px-4 py-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95 flex items-center gap-2 ${
              selectedBrand === 'all'
                ? 'bg-gold-500 text-dark-950 border-gold-500 shadow-glow-gold'
                : 'bg-dark-850/80 text-slate-300 border-white/10 hover:border-gold-500/50 hover:text-white hover:shadow-glow-gold/30'
            }`}
          >
            <span className="text-sm">🇮🇳</span>
            <span>All Marques</span>
          </button>

          {brandsList.map((brand) => {
            const isSelected = selectedBrand === brand.id;
            return (
              <button
                key={brand.id}
                onClick={() => onSelectBrand(brand.id)}
                className={`flex-shrink-0 px-4 py-2.5 rounded-xl border text-xs font-semibold tracking-wider transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95 flex items-center gap-2.5 ${
                  isSelected
                    ? 'bg-gold-500 text-dark-950 border-gold-500 shadow-glow-gold font-bold'
                    : 'bg-dark-850/80 text-slate-300 border-white/10 hover:border-gold-500/50 hover:text-white hover:shadow-glow-gold/30'
                }`}
              >
                <span className="text-sm group-hover:scale-125 transition-transform">{brand.logo}</span>
                <span>{brand.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
