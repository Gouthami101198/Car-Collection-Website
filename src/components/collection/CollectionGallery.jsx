import React, { useState, useMemo } from 'react';
import { useCars } from '../../context/CarContext';
import { CARS_DATA, CAR_CATEGORIES, CAR_BRANDS } from '../../data/cars';
import { formatPrice } from '../../utils/formatters';
import CarCard from './CarCard';
import { 
  Search, 
  SlidersHorizontal, 
  Grid, 
  List, 
  RotateCcw, 
  Flame, 
  Sparkles, 
  Filter, 
  X,
  Gauge
} from 'lucide-react';

export default function CollectionGallery({ initialBrand = 'all' }) {
  const { currency } = useCars();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState(initialBrand || 'all');
  const [maxPrice, setMaxPrice] = useState(150000000);
  const [minHorsepower, setMinHorsepower] = useState(100);
  const [fuelType, setFuelType] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Sync initialBrand if passed from parent marquee
  React.useEffect(() => {
    if (initialBrand) {
      setSelectedBrand(initialBrand);
    }
  }, [initialBrand]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedBrand('all');
    setMaxPrice(150000000);
    setMinHorsepower(100);
    setFuelType('all');
    setSortBy('featured');
  };

  const filteredCars = useMemo(() => {
    return CARS_DATA.filter((car) => {
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = car.name.toLowerCase().includes(q);
        const matchBrand = car.brand.toLowerCase().includes(q);
        const matchDesc = car.description.toLowerCase().includes(q);
        const matchEngine = car.specs.engine.toLowerCase().includes(q);
        if (!matchName && !matchBrand && !matchDesc && !matchEngine) return false;
      }

      // Category
      if (selectedCategory !== 'all' && car.category !== selectedCategory) {
        return false;
      }

      // Brand
      if (selectedBrand !== 'all' && car.brandId !== selectedBrand) {
        return false;
      }

      // Price
      if (car.price > maxPrice) {
        return false;
      }

      // Horsepower
      if (car.specs.horsepower < minHorsepower) {
        return false;
      }

      // Fuel Type
      if (fuelType !== 'all') {
        if (fuelType === 'Electric' && car.specs.fuelType !== 'Electric') return false;
        if (fuelType === 'Hybrid' && !car.specs.fuelType.includes('Hybrid')) return false;
        if (fuelType === 'Petrol' && !car.specs.fuelType.includes('Petrol')) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'hp-desc') return b.specs.horsepower - a.specs.horsepower;
      if (sortBy === 'accel-asc') return a.specs.accelRaw - b.specs.accelRaw;
      if (sortBy === 'year-desc') return b.year - a.year;
      // Default: featured first
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [searchQuery, selectedCategory, selectedBrand, maxPrice, minHorsepower, fuelType, sortBy]);

  const hasActiveFilters = 
    searchQuery || 
    selectedCategory !== 'all' || 
    selectedBrand !== 'all' || 
    maxPrice < 150000000 || 
    minHorsepower > 100 || 
    fuelType !== 'all' || 
    sortBy !== 'featured';

  return (
    <section id="collection-section" className="py-20 relative bg-dark-950">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-crimson/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Showroom Portfolio</span>
          </div>

          <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
            The World’s Most Desirable <br />
            <span className="text-gold-gradient">Automotive Icons</span>
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Filter through our peerless collection of hypercars, mid-engine thoroughbreds, whisper-quiet sovereign sedans, and track-engineered supercars.
          </p>
        </div>

        {/* Categories Tab Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8">
          {CAR_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex-shrink-0 px-4 py-2.5 rounded-xl border text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95 flex items-center gap-2 ${
                  isActive
                    ? 'bg-gold-500 text-dark-950 border-gold-500 shadow-glow-gold font-bold'
                    : 'bg-dark-900/80 text-slate-300 border-white/10 hover:border-gold-500/50 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Filter Bar & Controls */}
        <div className="p-4 rounded-2xl bg-dark-900/80 border border-white/10 backdrop-blur-xl shadow-xl space-y-4 mb-8">
          
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
              {/* Search Input */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Indian models (e.g. Thar ROXX, Safari, Curvv EV, mHawk, 4x4)..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-dark-950/80 border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-gold-500/70 transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

            {/* Quick Dropdowns & Buttons */}
            <div className="flex flex-wrap items-center gap-2.5">
              
              {/* Brand Selector */}
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="px-3 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-slate-200 text-xs font-semibold focus:outline-none focus:border-gold-500/50"
              >
                {CAR_BRANDS.map(b => (
                  <option key={b.id} value={b.id}>
                    {b.name}
                  </option>
                ))}
              </select>

              {/* Fuel Type */}
              <select
                value={fuelType}
                onChange={(e) => setFuelType(e.target.value)}
                className="px-3 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-slate-200 text-xs font-semibold focus:outline-none focus:border-gold-500/50"
              >
                <option value="all">All Powertrains</option>
                <option value="Diesel">Turbo-Diesel (mHawk/Kryotec)</option>
                <option value="Petrol">Turbo-Petrol (mStallion/TGDi)</option>
                <option value="Electric">Pure Electric (EV)</option>
                <option value="Hybrid">Strong Hybrid</option>
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-slate-200 text-xs font-semibold focus:outline-none focus:border-gold-500/50"
              >
                <option value="featured">Sort: Featured Collection</option>
                <option value="price-desc">Price: Highest to Lowest</option>
                <option value="price-asc">Price: Lowest to Highest</option>
                <option value="hp-desc">Power: Highest Horsepower</option>
                <option value="accel-asc">0-100 KM/H: Quickest First</option>
                <option value="year-desc">Year: Newest Release</option>
              </select>

              {/* View Toggle */}
              <div className="flex items-center rounded-xl bg-dark-950 border border-white/10 p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-gold-500 text-dark-950 shadow-glow-gold' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Grid View"
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-gold-500 text-dark-950 shadow-glow-gold' : 'text-slate-400 hover:text-white'
                  }`}
                  title="List View"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-gold-400 flex items-center gap-1.5 text-xs font-semibold"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Ranges</span>
              </button>
            </div>

          </div>

          {/* Extended Sliders (Always visible on desktop, expandable on mobile) */}
          <div className={`${showMobileFilters ? 'block' : 'hidden'} lg:block pt-3 border-t border-white/10`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
              
              {/* Max Price Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-slate-300">
                  <span className="text-slate-400">Max Ex-Showroom Budget:</span>
                  <span className="font-mono font-bold text-gold-400">
                    {formatPrice(maxPrice, currency)}
                  </span>
                </div>
                <input
                  type="range"
                  min="1400000"
                  max="150000000"
                  step="500000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-gold-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>₹14 Lakh</span>
                  <span>₹5 Crore</span>
                  <span>₹15 Crore</span>
                </div>
              </div>

              {/* Min Horsepower Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-slate-300">
                  <span className="text-slate-400">Minimum Output:</span>
                  <span className="font-mono font-bold text-rose-400">{minHorsepower} HP</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="1250"
                  step="25"
                  value={minHorsepower}
                  onChange={(e) => setMinHorsepower(Number(e.target.value))}
                  className="w-full accent-gold-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>100 HP</span>
                  <span>500 HP</span>
                  <span>1,200+ HP</span>
                </div>
              </div>

              {/* Reset & Status Count */}
              <div className="flex items-center justify-between lg:justify-end gap-3 pt-2 lg:pt-0">
                <span className="text-xs text-slate-400 font-mono">
                  Showing <span className="font-bold text-white">{filteredCars.length}</span> of {CARS_DATA.length} models
                </span>

                {hasActiveFilters && (
                  <button
                    onClick={resetFilters}
                    className="px-3 py-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset</span>
                  </button>
                )}
              </div>

            </div>
          </div>

        </div>

        {/* Cars Results Grid / List */}
        {filteredCars.length > 0 ? (
          <div className={
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8' 
              : 'space-y-4'
          }>
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} viewMode={viewMode} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center rounded-3xl bg-dark-900/40 border border-white/5 backdrop-blur-md p-8 max-w-md mx-auto space-y-4">
            <div className="w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mx-auto text-gold-400">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-bold text-xl text-white">No Matching Vehicles Found</h3>
            <p className="text-xs text-slate-400">
              No vehicles matched your active filters. Try adjusting your price threshold, horsepower slider, or search term.
            </p>
            <button
              onClick={resetFilters}
              className="px-5 py-2.5 rounded-xl bg-gold-500 text-dark-950 font-bold text-xs uppercase tracking-wider shadow-glow-gold hover:bg-gold-400 transition-all"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
