import React, { useState } from 'react';
import { useCars } from '../../context/CarContext';
import { CARS_DATA, SHOWROOM_LOCATIONS } from '../../data/cars';
import { 
  X, 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  Mail, 
  Phone, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck,
  Compass,
  Wine
} from 'lucide-react';
import CarPaintCanvas from '../common/CarPaintCanvas';

export default function TestDriveModal() {
  const { 
    isTestDriveOpen, 
    closeTestDrive, 
    selectedCarForTestDrive, 
    showToast,
    currentUser
  } = useCars();

  const [selectedCarId, setSelectedCarId] = useState(
    selectedCarForTestDrive ? selectedCarForTestDrive.id : CARS_DATA[0].id
  );
  const [selectedColor, setSelectedColor] = useState(
    selectedCarForTestDrive?.colors?.[0] || CARS_DATA[0].colors[0]
  );
  const [showroomLocation, setShowroomLocation] = useState('mumbai');
  const [experienceType, setExperienceType] = useState('track-day');
  const [preferredDate, setPreferredDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 2);
    return tomorrow.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('sunset-vip');
  
  // Client details
  const [fullName, setFullName] = useState(currentUser?.name || '');
  const [email, setEmail] = useState(currentUser?.email || '');
  const [phone, setPhone] = useState(currentUser?.phone || '');
  const [conciergeNotes, setConciergeNotes] = useState('');
  const [hasValidLicense, setHasValidLicense] = useState(true);

  // Sync when selectedCarForTestDrive or selectedCarId changes
  React.useEffect(() => {
    if (selectedCarForTestDrive) {
      setSelectedCarId(selectedCarForTestDrive.id);
      setSelectedColor(selectedCarForTestDrive.colors?.[0] || null);
    }
  }, [selectedCarForTestDrive]);

  React.useEffect(() => {
    const found = CARS_DATA.find(c => c.id === selectedCarId);
    if (found) {
      setSelectedColor(found.colors[0]);
    }
  }, [selectedCarId]);

  // Auto-sync with logged in user
  React.useEffect(() => {
    if (currentUser) {
      if (!fullName) setFullName(currentUser.name || '');
      if (!email) setEmail(currentUser.email || '');
      if (!phone) setPhone(currentUser.phone || '');
    }
  }, [currentUser, isTestDriveOpen]);

  // Success state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [reservationCode, setReservationCode] = useState('');

  if (!isTestDriveOpen) return null;

  const currentCar = CARS_DATA.find(c => c.id === selectedCarId) || CARS_DATA[0];
  const currentShowroom = SHOWROOM_LOCATIONS.find(s => s.id === showroomLocation) || SHOWROOM_LOCATIONS[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !email || !phone) {
      showToast('Please complete all required VIP client details', 'info');
      return;
    }
    const code = `APEX-TRIAL-${Math.floor(100000 + Math.random() * 900000)}`;
    setReservationCode(code);
    setIsSubmitted(true);
    showToast(`Trial Drive Confirmed: ${code}`, 'gold');
  };

  const handleReset = () => {
    setIsSubmitted(false);
    closeTestDrive();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-dark-950/90 backdrop-blur-2xl flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fade-in">
      
      <div className="relative w-full max-w-2xl rounded-3xl bg-dark-900 border border-white/15 shadow-2xl overflow-hidden my-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-dark-950/90 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gold-500/20 text-gold-400 flex items-center justify-center border border-gold-500/30">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-heading font-black text-lg sm:text-xl text-white">
                Book a Trial Drive & Atelier Experience
              </h2>
              <p className="text-[11px] text-slate-400">
                Formula 1 circuit track session, home trial, or private showroom salon
              </p>
            </div>
          </div>

          <button
            onClick={closeTestDrive}
            className="p-2 rounded-xl bg-rose-500/10 hover:bg-rose-500 text-rose-400 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          
          {isSubmitted ? (
            /* Confirmation Screen */
            <div className="py-8 text-center space-y-6 animate-fade-in">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-400 shadow-glow-gold animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-mono font-bold uppercase">
                  Reservation Code: {reservationCode}
                </span>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
                  Reservation Confirmed
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-bold text-white">{fullName}</span>. Our private concierge from the {currentShowroom.city} Atelier will contact you within 2 hours to confirm vehicle preparation and escorted logistics.
                </p>
              </div>

              {/* Booking Summary Box */}
              <div className="p-4 rounded-2xl bg-dark-950/80 border border-white/10 max-w-md mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Vehicle:</span>
                  <span className="font-bold text-gold-400 text-right">{currentCar.name}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Atelier Location:</span>
                  <span className="text-white text-right">{currentShowroom.city} Flagship</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Date & Slot:</span>
                  <span className="text-white text-right">{preferredDate} • {timeSlot.replace('-', ' ').toUpperCase()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Experience:</span>
                  <span className="text-cyan-400 capitalize text-right">{experienceType.replace('-', ' ')}</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-xl bg-gold-500 text-dark-950 font-bold text-xs uppercase tracking-wider shadow-glow-gold hover:bg-gold-400 transition-all"
              >
                Return to Collection
              </button>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step 1: Car Selection */}
              <div className="space-y-3">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center justify-between">
                  <span>Selected Exotic Vehicle</span>
                  <span className="text-[11px] font-mono text-gold-400">
                    {currentCar.specs.horsepower} HP • {currentCar.specs.acceleration} (0-100)
                  </span>
                </label>

                {/* Dynamic Vehicle Preview Banner with Real-Time Paint Shader */}
                <div className="relative h-28 w-full rounded-2xl overflow-hidden bg-dark-950 border border-white/10 group">
                  <CarPaintCanvas
                    car={currentCar}
                    activeColor={selectedColor}
                    defaultColor={currentCar.colors[0]}
                    className="w-full h-full"
                    showColorBadge={true}
                  />
                  <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-xs z-20">
                    <span className="font-heading font-black text-white">{currentCar.name}</span>
                    <span className="font-mono text-gold-400 text-[11px] font-bold">
                      {currentCar.specs.horsepower} HP • {currentCar.specs.acceleration}
                    </span>
                  </div>
                </div>

                {/* Color dots in test drive modal */}
                <div className="flex items-center justify-between px-1">
                  <span className="text-[11px] text-slate-400 font-mono">
                    Paint: <span className="text-white font-bold">{selectedColor?.name}</span>
                  </span>
                  <div className="flex items-center gap-1.5">
                    {currentCar.colors.map((col, idx) => {
                      const isSelected = selectedColor?.name === col.name;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedColor(col)}
                          className={`w-4 h-4 rounded-full border transition-all duration-300 ${
                            isSelected
                              ? 'border-gold-300 ring-2 ring-gold-400/80 scale-125 z-10'
                              : 'border-white/30 hover:scale-110 opacity-70 hover:opacity-100'
                          }`}
                          style={{ backgroundColor: col.hex }}
                          title={col.name}
                        />
                      );
                    })}
                  </div>
                </div>

                <select
                  value={selectedCarId}
                  onChange={(e) => setSelectedCarId(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-xl bg-dark-950 border border-white/10 text-slate-200 text-xs font-semibold focus:outline-none focus:border-gold-500/60"
                >
                  {CARS_DATA.map(c => (
                    <option key={c.id} value={c.id}>
                      {c.name} — {c.brand} ({c.year})
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 2: Showroom & Experience Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gold-400" />
                    <span>Showroom Flagship</span>
                  </label>
                  <select
                    value={showroomLocation}
                    onChange={(e) => setShowroomLocation(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl bg-dark-950 border border-white/10 text-slate-200 text-xs focus:outline-none focus:border-gold-500/60"
                  >
                    {SHOWROOM_LOCATIONS.map(s => (
                      <option key={s.id} value={s.id}>
                        {s.city} ({s.curator})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Experience Protocol</span>
                  </label>
                  <select
                    value={experienceType}
                    onChange={(e) => setExperienceType(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl bg-dark-950 border border-white/10 text-slate-200 text-xs focus:outline-none focus:border-gold-500/60"
                  >
                    <option value="track-day">Buddh International Circuit (BIC) Track Session</option>
                    <option value="scenic-cruiser">Mumbai-Pune Expressway & Western Ghats Route</option>
                    <option value="salon-walkthrough">Atelier Private Salon & Specification Walkthrough</option>
                  </select>
                </div>
              </div>

              {/* Step 3: Date & Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-rose-500" />
                    <span>Preferred Date</span>
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl bg-dark-950 border border-white/10 text-slate-200 text-xs focus:outline-none focus:border-gold-500/60 font-mono"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-gold-400" />
                    <span>VIP Time Slot</span>
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl bg-dark-950 border border-white/10 text-slate-200 text-xs focus:outline-none focus:border-gold-500/60"
                  >
                    <option value="morning-executive">Morning Executive (10:00 AM)</option>
                    <option value="midday-prestige">Midday Prestige (2:00 PM)</option>
                    <option value="sunset-vip">Sunset Golden Hour (5:30 PM)</option>
                    <option value="night-salon">Private Night Salon (8:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Step 4: Client Contact Information */}
              <div className="space-y-3 pt-2 border-t border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-400 block">
                  VIP Client Information
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <label className="text-[11px] text-slate-400">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Vikramaditya Oberoi"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-dark-950 border border-white/10 text-white text-xs focus:outline-none focus:border-gold-500/60"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] text-slate-400">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="v.oberoi@capitalpartners.in"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-dark-950 border border-white/10 text-white text-xs focus:outline-none focus:border-gold-500/60"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] text-slate-400">Telephone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98200 12345"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-dark-950 border border-white/10 text-white text-xs focus:outline-none focus:border-gold-500/60 font-mono"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] text-slate-400 flex items-center gap-1.5">
                    <Wine className="w-3.5 h-3.5 text-gold-400" />
                    <span>Atelier Hospitality & Concierge Notes (Optional)</span>
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Specific refreshments, valet coordinates, or RTO Bharat Series (BH series) queries..."
                    value={conciergeNotes}
                    onChange={(e) => setConciergeNotes(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-dark-950 border border-white/10 text-white text-xs focus:outline-none focus:border-gold-500/60"
                  />
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="license"
                    checked={hasValidLicense}
                    onChange={(e) => setHasValidLicense(e.target.checked)}
                    className="rounded accent-gold-500"
                  />
                  <label htmlFor="license" className="text-[11px] text-slate-400 cursor-pointer">
                    I confirm possession of a valid driver's license suitable for high-performance exotics.
                  </label>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-pink-500 text-dark-950 font-bold text-xs uppercase tracking-wider shadow-glow-gold hover:shadow-2xl hover:scale-101 active:scale-99 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Confirm VIP Reservation Request</span>
              </button>

            </form>
          )}

        </div>

      </div>

    </div>
  );
}
