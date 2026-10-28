import React, { useState, useEffect } from 'react';
import { CARS_DATA } from '../../data/cars';
import { useCars } from '../../context/CarContext';
import { formatPrice } from '../../utils/formatters';
import { Search, X, Zap, Flame, ArrowRight, CornerDownLeft } from 'lucide-react';

export default function QuickSearchModal({ isOpen, onClose }) {
  const { openCarDetails, currency } = useCars();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = query.trim()
    ? CARS_DATA.filter((car) => {
        const q = query.toLowerCase();
        return (
          car.name.toLowerCase().includes(q) ||
          car.brand.toLowerCase().includes(q) ||
          car.categoryName.toLowerCase().includes(q) ||
          car.specs.engine.toLowerCase().includes(q)
        );
      })
    : CARS_DATA.slice(0, 5);

  const handleSelectCar = (car) => {
    onClose();
    openCarDetails(car);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-dark-950/85 backdrop-blur-xl flex items-start justify-center pt-20 p-4 animate-fade-in">
      
      <div className="relative w-full max-w-2xl rounded-2xl bg-dark-900 border border-white/15 shadow-2xl overflow-hidden">
        
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 bg-dark-950/80">
          <Search className="w-5 h-5 text-gold-400 mr-3 flex-shrink-0" />
          <input
            autoFocus
            type="text"
            placeholder="Search Indian models by marque or engine (e.g. Thar ROXX, Safari, Curvv EV, mHawk)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-white placeholder-slate-500 text-sm focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="ml-2 text-xs font-mono text-slate-400 hover:text-white border border-white/10 px-2 py-1 rounded"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-3 space-y-1.5">
          <div className="text-[10px] uppercase font-mono tracking-wider text-slate-500 px-3 py-1">
            {query.trim() ? `Search Results (${results.length})` : 'Popular Flagship Models'}
          </div>

          {results.length > 0 ? (
            results.map((car) => (
              <div
                key={car.id}
                onClick={() => handleSelectCar(car)}
                className="group cursor-pointer p-3 rounded-xl hover:bg-gold-500/10 border border-transparent hover:border-gold-500/30 transition-all flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="relative w-14 h-10 rounded-lg overflow-hidden bg-dark-950 flex-shrink-0 border border-white/10 car-image-container">
                    <img 
                      src={car.images.main} 
                      alt={car.name} 
                      className="w-full h-full object-cover car-image-lux" 
                      loading="lazy" 
                    />
                    <div className="car-image-sheen" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">{car.brand}</span>
                    <h4 className="font-heading font-bold text-sm text-white group-hover:text-gold-400 transition-colors">
                      {car.name}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-right">
                  <div>
                    <span className="text-xs font-mono font-bold text-gold-400 block">
                      {formatPrice(car.price, currency)}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {car.specs.horsepower} HP • {car.specs.acceleration}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-gold-400 group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-xs text-slate-400">
              No exotic models found matching "{query}".
            </div>
          )}
        </div>

        {/* Keyboard hint */}
        <div className="px-4 py-2 bg-dark-950/80 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <span>Click any vehicle to view full specifications</span>
          <span className="flex items-center gap-1">
            <CornerDownLeft className="w-3 h-3" /> Select
          </span>
        </div>

      </div>

    </div>
  );
}
