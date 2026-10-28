import React from 'react';
import { useCars } from '../../context/CarContext';
import { CARS_DATA } from '../../data/cars';
import { formatPrice } from '../../utils/formatters';
import { 
  X, 
  Trash2, 
  Heart, 
  Layers, 
  Calendar, 
  ArrowRight, 
  Sparkles,
  Zap,
  Flame,
  Gauge
} from 'lucide-react';

export default function WishlistModal() {
  const { 
    isWishlistModalOpen, 
    setIsWishlistModalOpen, 
    wishlist, 
    toggleWishlist, 
    currency, 
    openCarDetails, 
    openTestDrive,
    addToCompare,
    compareList,
    showToast
  } = useCars();

  if (!isWishlistModalOpen) return null;

  const wishlistedCars = CARS_DATA.filter(car => wishlist.includes(car.id));
  const totalValuation = wishlistedCars.reduce((acc, c) => acc + c.price, 0);

  const handleCompareAll = () => {
    let addedCount = 0;
    wishlistedCars.slice(0, 4).forEach(car => {
      if (!compareList.includes(car.id) && compareList.length + addedCount < 4) {
        addToCompare(car.id);
        addedCount++;
      }
    });
    showToast('Wishlist cars sent to Comparison Matrix', 'gold');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-dark-950/90 backdrop-blur-2xl flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fade-in">
      
      <div className="relative w-full max-w-4xl rounded-3xl bg-dark-900 border border-white/15 shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 bg-dark-950/90 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
              <h2 className="font-heading font-black text-xl sm:text-2xl text-white">
                Saved Collector Wishlist
              </h2>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              {wishlistedCars.length} luxury models saved in your private portfolio
            </p>
          </div>

          <button
            onClick={() => setIsWishlistModalOpen(false)}
            className="p-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500 text-rose-400 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Portfolio Valuation Ribbon */}
        {wishlistedCars.length > 0 && (
          <div className="px-6 py-3 bg-gradient-to-r from-dark-950 via-gold-500/10 to-dark-950 border-b border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div>
              <span className="text-slate-400">Total Portfolio Valuation: </span>
              <span className="font-heading font-black text-base text-gold-400 font-mono ml-1">
                {formatPrice(totalValuation, currency)}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCompareAll}
                className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500 text-cyan-400 hover:text-dark-950 font-semibold text-xs transition-colors flex items-center gap-1.5"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Compare Portfolio</span>
              </button>
            </div>
          </div>
        )}

        {/* Wishlist Items List */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {wishlistedCars.length === 0 ? (
            <div className="text-center py-16 space-y-4 max-w-sm mx-auto">
              <div className="w-16 h-16 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center mx-auto text-rose-400">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white">Your Wishlist is Empty</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Click the heart icon on any vehicle in the collection to bookmark it for private inspection, comparison, and showroom test drives.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {wishlistedCars.map(car => (
                <div
                  key={car.id}
                  className="group p-4 rounded-2xl bg-dark-950/70 border border-white/10 hover:border-gold-500/40 transition-all flex flex-col sm:flex-row items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <div className="relative w-24 h-18 sm:w-28 sm:h-20 rounded-xl overflow-hidden bg-dark-900 flex-shrink-0 border border-white/10 car-image-container">
                      <img 
                        src={car.images.main} 
                        alt={car.name} 
                        className="w-full h-full object-cover car-image-lux" 
                        loading="lazy" 
                      />
                      <div className="car-image-sheen" />
                    </div>

                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">{car.brand} • {car.year}</span>
                      <h4 className="font-heading font-black text-sm sm:text-base text-white">
                        {car.name}
                      </h4>
                      <div className="flex items-center gap-3 text-xs text-slate-400 mt-1 font-mono">
                        <span className="text-gold-400 font-bold">{car.specs.acceleration} (0-100)</span>
                        <span>•</span>
                        <span className="text-rose-400 font-bold">{car.specs.horsepower} HP</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto border-t sm:border-t-0 pt-2 sm:pt-0 border-white/5">
                    <div className="text-left sm:text-right">
                      <span className="text-[9px] text-slate-500 uppercase block">Investment</span>
                      <span className="font-heading font-black text-base text-gold-400 font-mono">
                        {formatPrice(car.price, currency)}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => {
                          setIsWishlistModalOpen(false);
                          openTestDrive(car);
                        }}
                        className="p-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-dark-950 text-xs font-bold transition-all shadow-glow-gold"
                        title="Book VIP Drive"
                      >
                        <Calendar className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => {
                          setIsWishlistModalOpen(false);
                          openCarDetails(car);
                        }}
                        className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all"
                        title="Inspect Specs"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => toggleWishlist(car.id)}
                        className="p-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500 text-rose-400 hover:text-white transition-all"
                        title="Remove from Wishlist"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
