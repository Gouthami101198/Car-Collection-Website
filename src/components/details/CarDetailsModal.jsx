import React, { useState } from 'react';
import { useCars } from '../../context/CarContext';
import { formatPrice } from '../../utils/formatters';
import { playEngineRev } from '../../utils/engineAudio';
import { 
  X, 
  Heart, 
  Layers, 
  Volume2, 
  Zap, 
  Gauge, 
  Flame, 
  Compass, 
  Calendar, 
  Calculator, 
  ShieldCheck, 
  Sparkles, 
  ChevronRight,
  Printer,
  CheckCircle2,
  Share2
} from 'lucide-react';
import CarPaintCanvas from '../common/CarPaintCanvas';

export default function CarDetailsModal() {
  const { 
    selectedCarForDetails, 
    selectedCarInitialColor,
    closeCarDetails, 
    currency, 
    isInWishlist, 
    toggleWishlist, 
    compareList, 
    addToCompare, 
    removeFromCompare, 
    openTestDrive,
    showToast
  } = useCars();

  const car = selectedCarForDetails;

  const [activeImageKey, setActiveImageKey] = useState('main');
  const [selectedColor, setSelectedColor] = useState(null);
  const [activeTab, setActiveTab] = useState('specs'); // 'specs' | 'finance' | 'heritage'
  const [isRevving, setIsRevving] = useState(false);
  const [rpmVal, setRpmVal] = useState(1200);

  // Finance Calculator States (Indian Auto Loan Standards)
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [loanTermMonths, setLoanTermMonths] = useState(60);
  const [interestRate, setInterestRate] = useState(8.75);

  // Reset to the exact same card image and selected color whenever car changes
  React.useEffect(() => {
    if (selectedCarForDetails) {
      setActiveImageKey('main');
      setSelectedColor(selectedCarInitialColor || selectedCarForDetails.colors?.[0] || null);
      setActiveTab('specs');
      setIsRevving(false);
      setRpmVal(1200);
    }
  }, [selectedCarForDetails?.id, selectedCarInitialColor]);

  if (!selectedCarForDetails) return null;

  const activeColor = selectedColor || car.colors[0];
  const isLiked = isInWishlist(car.id);
  const isCompared = compareList.includes(car.id);

  // Financial calculations
  const totalPrice = car.price + (activeColor ? activeColor.price : 0);
  const downPaymentAmount = Math.round(totalPrice * (downPaymentPct / 100));
  const principalAmount = totalPrice - downPaymentAmount;
  const monthlyRate = interestRate / 100 / 12;
  const monthlyPayment = Math.round(
    (principalAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTermMonths)) /
    (Math.pow(1 + monthlyRate, loanTermMonths) - 1)
  );
  const totalLoanRepayment = monthlyPayment * loanTermMonths;
  const totalInterest = totalLoanRepayment - principalAmount;

  const handleRevEngine = () => {
    if (isRevving) return;
    setIsRevving(true);
    playEngineRev(car.specs.soundType || 'v8-turbo', 2.5);

    let start = Date.now();
    const duration = 2500;
    const peakRpm = car.specs.soundType === 'hyper-electric' ? 18000 : 8800;

    const anim = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = elapsed / duration;
      if (progress >= 1) {
        clearInterval(anim);
        setRpmVal(1200);
        setIsRevving(false);
      } else if (progress < 0.45) {
        setRpmVal(Math.round(1200 + (peakRpm - 1200) * (progress / 0.45)));
      } else {
        setRpmVal(Math.round(peakRpm - (peakRpm - 1200) * ((progress - 0.45) / 0.55)));
      }
    }, 40);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Spec sheet link copied to clipboard', 'gold');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const galleryImages = [
    { key: 'main', label: 'Collection Showcase', desc: 'Identical to Car Card', url: activeColor?.image || car.images.main },
    { key: 'front', label: 'Front Perspective', desc: 'Sculpted Fascia', url: car.images.front || car.images.main },
    { key: 'side', label: 'Side Silhouette', desc: 'Full Stance', url: car.images.side || car.images.main },
    { key: 'rear', label: 'Aero Tailgate', desc: 'Exhaust & Tail Lamps', url: car.images.rear || car.images.main },
    { key: 'interior', label: 'Executive Cockpit', desc: 'Cabin Lounge', url: car.images.interior || car.images.main },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-dark-950/90 backdrop-blur-2xl flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fade-in">
      
      <div className="relative w-full max-w-6xl rounded-3xl bg-dark-900 border border-white/15 shadow-2xl overflow-hidden my-auto">
        
        {/* Top Floating Control Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-3 sm:px-6 py-3 sm:py-4 bg-dark-950/90 backdrop-blur-xl border-b border-white/10">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="px-2.5 sm:px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 font-mono text-[10px] sm:text-xs font-bold uppercase">
              {car.categoryName}
            </span>
            <span className="text-slate-400 text-xs hidden md:inline">
              VIN Reference: {car.id.toUpperCase()}-2025
            </span>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={handleShare}
              className="p-2 sm:p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              title="Share Link"
            >
              <Share2 className="w-4 h-4" />
            </button>

            <button
              onClick={handlePrint}
              className="hidden sm:flex p-2 sm:p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              title="Print Specification"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={() => toggleWishlist(car.id)}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-rose-500 transition-colors"
              title="Save to Wishlist"
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'text-rose-500 fill-rose-500' : ''}`} />
            </button>

            <button
              onClick={() => isCompared ? removeFromCompare(car.id) : addToCompare(car.id)}
              className={`p-2.5 rounded-xl transition-colors ${
                isCompared 
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40' 
                  : 'bg-white/5 hover:bg-white/10 text-slate-300'
              }`}
              title="Compare Vehicle"
            >
              <Layers className="w-4 h-4" />
            </button>

            <button
              onClick={closeCarDetails}
              className="p-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500 text-rose-400 hover:text-white transition-all ml-2"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[82vh] overflow-y-auto">
          
          {/* Main Visual & Gallery Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Active Big Picture View */}
            <div className="lg:col-span-8 space-y-4">
              <div className="relative group aspect-[16/10] rounded-2xl overflow-hidden bg-dark-950 border border-white/10 shadow-2xl">
                <CarPaintCanvas
                  car={car}
                  activeColor={activeColor}
                  defaultColor={car.colors[0]}
                  imageSrc={activeImageKey === 'main' ? (activeColor?.image || car.images.main) : (car.images[activeImageKey] || car.images.main)}
                  showColorBadge={true}
                  className="w-full h-full"
                  imgClassName="cursor-zoom-in"
                />

                {/* Top Badge: Indicating Same Image as Card */}
                {activeImageKey === 'main' ? (
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-dark-950/90 backdrop-blur-md border border-gold-500/50 text-xs font-semibold text-gold-400 flex items-center gap-1.5 shadow-xl z-20">
                    <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                    <span>Exact Collection Card Image</span>
                  </div>
                ) : (
                  <button
                    onClick={() => setActiveImageKey('main')}
                    className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-dark-950/90 backdrop-blur-md border border-white/20 hover:border-gold-500 text-xs font-semibold text-slate-200 hover:text-white flex items-center gap-1.5 transition-all shadow-xl z-20"
                  >
                    <span>← Return to Card Image</span>
                  </button>
                )}

                {/* Status & Sound Button Overlay */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 z-20 pointer-events-none">
                  <div className="flex items-center gap-1.5 sm:gap-2 pointer-events-auto">
                    <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-dark-950/85 backdrop-blur-md border border-white/10 text-[10px] sm:text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      {car.status}
                    </span>
                    <span className="hidden xs:flex px-2 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-dark-950/85 backdrop-blur-md border border-white/10 text-[10px] sm:text-xs font-mono text-slate-300 items-center gap-1.5 truncate max-w-[130px] sm:max-w-none">
                      <span className="w-2.5 h-2.5 rounded-full border border-white/40 flex-shrink-0" style={{ backgroundColor: activeColor.hex }} />
                      <span className="truncate">{activeColor.name}</span>
                    </span>
                  </div>

                  <button
                    onClick={handleRevEngine}
                    disabled={isRevving}
                    className={`pointer-events-auto px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-md flex items-center gap-1.5 transition-all ${
                      isRevving
                        ? 'bg-rose-600 text-white shadow-glow-crimson animate-pulse'
                        : 'bg-dark-950/85 hover:bg-gold-500 hover:text-dark-950 text-gold-400 border border-gold-500/40'
                    }`}
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>{isRevving ? `${rpmVal.toLocaleString()} RPM` : 'Rev Acoustic'}</span>
                  </button>
                </div>
              </div>

              {/* Thumbnail Selector with Micro-interactions */}
              <div className="grid grid-cols-5 gap-2 sm:gap-3">
                {galleryImages.map((img) => (
                  <button
                    key={img.key}
                    onClick={() => setActiveImageKey(img.key)}
                    className={`group/thumb relative rounded-xl overflow-hidden aspect-[16/10] border transition-all duration-300 ${
                      activeImageKey === img.key
                        ? 'border-gold-500 shadow-glow-gold scale-105 ring-2 ring-gold-400/50'
                        : 'border-white/10 opacity-60 hover:opacity-100 hover:scale-102 hover:border-gold-500/40'
                    }`}
                  >
                    <CarPaintCanvas
                      car={car}
                      activeColor={activeColor}
                      defaultColor={car.colors[0]}
                      imageSrc={img.url}
                      showSheen={false}
                      className="w-full h-full pointer-events-none"
                      imgClassName="group-hover/thumb:scale-115 transition-transform duration-500 ease-out"
                    />
                    {activeImageKey === img.key && (
                      <span className="absolute inset-0 bg-gold-400/10 pointer-events-none" />
                    )}
                    <span className="absolute bottom-1 left-1 right-1 text-[9px] bg-dark-950/85 backdrop-blur-sm px-1 py-0.5 rounded text-center text-slate-300 font-medium truncate group-hover/thumb:text-gold-300 transition-colors z-20">
                      {img.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Acquisition Summary & Color Customizer */}
            <div className="lg:col-span-4 space-y-6">
              
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-slate-400 font-semibold">{car.brand} • {car.year}</span>
                <h1 className="font-heading font-black text-2xl sm:text-3xl text-white mt-1">
                  {car.name}
                </h1>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {car.description}
                </p>
              </div>

              {/* Pricing Box */}
              <div className="p-4 rounded-2xl bg-dark-950/80 border border-gold-500/30 shadow-glow-gold/20 space-y-1">
                <div className="flex items-center justify-between text-xs text-slate-400 uppercase">
                  <span>Ex-Showroom Price (India)</span>
                  <span className="text-emerald-400 font-semibold">Immediate Allotment</span>
                </div>
                <div className="font-heading font-black text-3xl text-gold-400">
                  {formatPrice(totalPrice, currency)}
                </div>
                {selectedColor.price > 0 && (
                  <div className="text-[11px] text-slate-400 font-mono">
                    Includes {selectedColor.name} bespoke paint (+{formatPrice(selectedColor.price, currency)})
                  </div>
                )}
              </div>

              {/* Bespoke Exterior Paint Selector */}
              <div className="space-y-3 p-4 rounded-2xl bg-dark-950/60 border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-semibold text-slate-300">Bespoke Exterior Finish</span>
                  <span className="text-xs font-mono text-gold-400 font-bold">{selectedColor.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  {car.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => {
                        setSelectedColor(c);
                        setActiveImageKey('main');
                      }}
                      className={`relative w-8 h-8 rounded-full border-2 transition-all ${
                        selectedColor.name === c.name
                          ? 'border-gold-400 scale-110 shadow-glow-gold'
                          : 'border-white/20 hover:scale-105'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={`${c.name} (${c.price === 0 ? 'Standard' : '+$' + c.price.toLocaleString()})`}
                    >
                      {selectedColor.name === c.name && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-white absolute inset-0 m-auto drop-shadow-md" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Primary Call to Actions */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={() => {
                    closeCarDetails();
                    openTestDrive(car);
                  }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-pink-500 text-dark-950 font-bold text-xs uppercase tracking-wider shadow-glow-gold hover:shadow-2xl hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Private Test Drive</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => isCompared ? removeFromCompare(car.id) : addToCompare(car.id)}
                    className="py-2.5 rounded-xl bg-dark-950 border border-white/10 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>{isCompared ? 'In Compare' : 'Compare Specs'}</span>
                  </button>

                  <button
                    onClick={() => toggleWishlist(car.id)}
                    className="py-2.5 rounded-xl bg-dark-950 border border-white/10 hover:border-rose-500/50 text-slate-300 hover:text-rose-400 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Heart className={`w-3.5 h-3.5 ${isLiked ? 'text-rose-500 fill-rose-500' : ''}`} />
                    <span>{isLiked ? 'Saved' : 'Add Wishlist'}</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Tab Navigation (Specs, Finance, Highlights) */}
          <div className="border-t border-white/10 pt-6">
            <div className="flex items-center gap-2 border-b border-white/10 pb-3 overflow-x-auto scrollbar-none">
              <button
                onClick={() => setActiveTab('specs')}
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 sm:gap-2 whitespace-nowrap flex-shrink-0 ${
                  activeTab === 'specs'
                    ? 'bg-gold-500 text-dark-950 shadow-glow-gold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Gauge className="w-4 h-4" />
                <span className="hidden sm:inline">Technical Specifications</span>
                <span className="sm:hidden">Specifications</span>
              </button>

              <button
                onClick={() => setActiveTab('finance')}
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 sm:gap-2 whitespace-nowrap flex-shrink-0 ${
                  activeTab === 'finance'
                    ? 'bg-gold-500 text-dark-950 shadow-glow-gold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Calculator className="w-4 h-4" />
                <span className="hidden sm:inline">Financing & Lease Calculator</span>
                <span className="sm:hidden">Financing</span>
              </button>

              <button
                onClick={() => setActiveTab('heritage')}
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 sm:gap-2 whitespace-nowrap flex-shrink-0 ${
                  activeTab === 'heritage'
                    ? 'bg-gold-500 text-dark-950 shadow-glow-gold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span className="hidden sm:inline">Provenance & Warranty</span>
                <span className="sm:hidden">Provenance</span>
              </button>
            </div>

            {/* TAB CONTENT 1: SPECS */}
            {activeTab === 'specs' && (
              <div className="py-6 space-y-6 animate-fade-in">
                
                {/* 6 Key Telemetry Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  <div className="p-3.5 rounded-2xl bg-dark-950/80 border border-white/10">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <Zap className="w-3 h-3 text-gold-400" /> 0-100 KM/H
                    </span>
                    <div className="font-heading font-black text-xl text-white mt-1">
                      {car.specs.acceleration}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-dark-950/80 border border-white/10">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <Gauge className="w-3 h-3 text-cyan-400" /> Top Speed
                    </span>
                    <div className="font-heading font-black text-xl text-white mt-1">
                      {car.specs.topSpeed}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-dark-950/80 border border-white/10">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <Flame className="w-3 h-3 text-rose-500" /> Max Power
                    </span>
                    <div className="font-heading font-black text-xl text-white mt-1">
                      {car.specs.horsepower} HP
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-dark-950/80 border border-white/10">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                      Torque
                    </span>
                    <div className="font-heading font-black text-base text-white mt-1 truncate">
                      {car.specs.torque}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-dark-950/80 border border-white/10">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                      Curb Weight
                    </span>
                    <div className="font-heading font-black text-base text-white mt-1 truncate">
                      {car.specs.weight}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-dark-950/80 border border-white/10">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                      Fuel / Energy
                    </span>
                    <div className="font-heading font-black text-base text-white mt-1">
                      {car.specs.fuelType}
                    </div>
                  </div>
                </div>

                {/* Detailed Technical Table */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-dark-950/60 border border-white/10 space-y-3">
                    <h4 className="font-heading font-bold text-sm text-gold-400 uppercase tracking-wider">
                      Powertrain & Architecture
                    </h4>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between py-1.5 border-b border-white/5">
                        <span className="text-slate-400">Combustion / Electric Motor:</span>
                        <span className="text-slate-200 font-medium text-right">{car.specs.engine}</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-white/5">
                        <span className="text-slate-400">Transmission:</span>
                        <span className="text-slate-200 font-medium text-right">{car.specs.transmission}</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-white/5">
                        <span className="text-slate-400">Drivetrain:</span>
                        <span className="text-slate-200 font-medium text-right">{car.specs.drivetrain}</span>
                      </div>
                      <div className="flex justify-between py-1.5">
                        <span className="text-slate-400">Efficiency / Range:</span>
                        <span className="text-slate-200 font-medium text-right">{car.specs.efficiency}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-dark-950/60 border border-white/10 space-y-3">
                    <h4 className="font-heading font-bold text-sm text-gold-400 uppercase tracking-wider">
                      Bespoke Atelier Highlights
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {car.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            )}

            {/* TAB CONTENT 2: FINANCING CALCULATOR */}
            {activeTab === 'finance' && (
              <div className="py-6 space-y-6 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  
                  {/* Sliders Input */}
                  <div className="md:col-span-7 space-y-5 p-5 rounded-2xl bg-dark-950/80 border border-white/10">
                    <h4 className="font-heading font-bold text-base text-white flex items-center gap-2">
                      <Calculator className="w-4 h-4 text-gold-400" />
                      <span>Indian Bank Auto Loan & Monthly EMI Estimator</span>
                    </h4>

                    {/* Down payment */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-400">Down Payment ({downPaymentPct}%):</span>
                        <span className="font-mono font-bold text-gold-400">
                          {formatPrice(downPaymentAmount, currency)}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="60"
                        step="5"
                        value={downPaymentPct}
                        onChange={(e) => setDownPaymentPct(Number(e.target.value))}
                        className="w-full accent-gold-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                        <span>10% ({formatPrice(Math.round(totalPrice * 0.1), currency)})</span>
                        <span>30%</span>
                        <span>60%</span>
                      </div>
                    </div>

                    {/* Term */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-400">Loan Tenure:</span>
                        <span className="font-mono font-bold text-white">{loanTermMonths} Months ({(loanTermMonths / 12).toFixed(1)} Years)</span>
                      </div>
                      <div className="grid grid-cols-6 gap-2">
                        {[24, 36, 48, 60, 72, 84].map((term) => (
                          <button
                            key={term}
                            onClick={() => setLoanTermMonths(term)}
                            className={`py-2 rounded-xl text-xs font-bold font-mono transition-all border ${
                              loanTermMonths === term
                                ? 'bg-gold-500 text-dark-950 border-gold-500 shadow-glow-gold'
                                : 'bg-dark-900 text-slate-300 border-white/10 hover:border-white/30'
                            }`}
                          >
                            {term}M
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Interest Rate */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-400">Bank Interest Rate (APR):</span>
                        <span className="font-mono font-bold text-cyan-400">{interestRate}% p.a.</span>
                      </div>
                      <input
                        type="range"
                        min="7.5"
                        max="14.0"
                        step="0.25"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-full accent-cyan-400 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                        <span>7.5% (SBI/HDFC)</span>
                        <span>10.5%</span>
                        <span>14.0%</span>
                      </div>
                    </div>
                  </div>

                  {/* Payment Output Card */}
                  <div className="md:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950 border border-gold-500/40 shadow-glow-gold/20 flex flex-col justify-between space-y-4">
                    <div>
                      <span className="text-[11px] text-slate-400 uppercase tracking-widest font-semibold">
                        Estimated Monthly EMI
                      </span>
                      <div className="font-heading font-black text-3xl sm:text-4xl text-gold-400 mt-1">
                        {formatPrice(monthlyPayment, currency)}
                        <span className="text-xs text-slate-400 font-normal"> / month</span>
                      </div>
                    </div>

                    <div className="space-y-2.5 py-3 border-y border-white/10 text-xs">
                      <div className="flex justify-between text-slate-400">
                        <span>Principal Financed:</span>
                        <span className="text-white font-mono">{formatPrice(principalAmount, currency)}</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Total Bank Interest:</span>
                        <span className="text-white font-mono">{formatPrice(totalInterest, currency)}</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Total Outflow (On-Road):</span>
                        <span className="text-white font-mono">{formatPrice(totalLoanRepayment + downPaymentAmount, currency)}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        closeCarDetails();
                        openTestDrive(car);
                      }}
                      className="w-full py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-dark-950 font-bold text-xs uppercase tracking-wider text-center shadow-glow-gold"
                    >
                      Inquire for HDFC / ICICI Auto Loan
                    </button>
                  </div>

                </div>
              </div>
            )}

            {/* TAB CONTENT 3: PROVENANCE */}
            {activeTab === 'heritage' && (
              <div className="py-6 space-y-4 animate-fade-in text-xs text-slate-300">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-dark-950/60 border border-white/10 space-y-2">
                    <ShieldCheck className="w-6 h-6 text-emerald-400" />
                    <h5 className="font-heading font-bold text-white text-sm">150-Point Atelier Inspection</h5>
                    <p className="text-slate-400 leading-relaxed">
                      Every mechanical component, electronic harness, suspension damper, and carbon monocoque integrity is tested to manufacturer tolerances.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-dark-950/60 border border-white/10 space-y-2">
                    <Sparkles className="w-6 h-6 text-gold-400" />
                    <h5 className="font-heading font-bold text-white text-sm">Official Factory Books & Keys</h5>
                    <p className="text-slate-400 leading-relaxed">
                      Delivered with original leather presentation box, serialized build plaque, master keys, and stamped maintenance passport.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-dark-950/60 border border-white/10 space-y-2">
                    <Compass className="w-6 h-6 text-cyan-400" />
                    <h5 className="font-heading font-bold text-white text-sm">Worldwide White-Glove Transit</h5>
                    <p className="text-slate-400 leading-relaxed">
                      Climate-controlled enclosed transport and private air cargo arrangements directly to your private hangar or residential showroom.
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}
