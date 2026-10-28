import React from 'react';
import { useCars } from '../../context/CarContext';
import { CARS_DATA } from '../../data/cars';
import { formatPrice } from '../../utils/formatters';
import { 
  X, 
  Trash2, 
  Plus, 
  Zap, 
  Gauge, 
  Flame, 
  Calendar, 
  Check, 
  Trophy,
  ArrowRight
} from 'lucide-react';

export default function CompareModal() {
  const { 
    isCompareModalOpen, 
    setIsCompareModalOpen, 
    compareList, 
    removeFromCompare, 
    clearCompare, 
    addToCompare, 
    currency, 
    openCarDetails, 
    openTestDrive 
  } = useCars();

  if (!isCompareModalOpen) return null;

  const comparedCars = CARS_DATA.filter(car => compareList.includes(car.id));

  // Determine winners among compared cars
  let fastestAccel = 999;
  let highestHp = 0;
  let fastestTopSpeed = 0;

  comparedCars.forEach(car => {
    if (car.specs.accelRaw < fastestAccel) fastestAccel = car.specs.accelRaw;
    if (car.specs.horsepower > highestHp) highestHp = car.specs.horsepower;
    if (car.specs.topSpeedRaw > fastestTopSpeed) fastestTopSpeed = car.specs.topSpeedRaw;
  });

  const availableToAdd = CARS_DATA.filter(car => !compareList.includes(car.id));

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-dark-950/90 backdrop-blur-2xl flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fade-in">
      
      <div className="relative w-full max-w-6xl rounded-3xl bg-dark-900 border border-white/15 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-dark-950/90 border-b border-white/10">
          <div>
            <h2 className="font-heading font-black text-xl sm:text-2xl text-white flex items-center gap-2">
              <span className="text-gold-gradient">Vehicle Comparison Matrix</span>
            </h2>
            <p className="text-xs text-slate-400">
              Comparing {comparedCars.length} of 4 exotic vehicles side-by-side
            </p>
          </div>

          <div className="flex items-center gap-3">
            {comparedCars.length > 0 && (
              <button
                onClick={clearCompare}
                className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 border border-white/10 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Clear All</span>
              </button>
            )}

            <button
              onClick={() => setIsCompareModalOpen(false)}
              className="p-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500 text-rose-400 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Comparison Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {comparedCars.length === 0 ? (
            <div className="text-center py-16 space-y-4 max-w-md mx-auto">
              <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-400">
                <Gauge className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white">No Vehicles Selected for Comparison</h3>
              <p className="text-xs text-slate-400">
                Add up to 4 models from the collection gallery to benchmark their performance metrics, engine power, and acquisition pricing side-by-side.
              </p>
              
              <div className="pt-2">
                <span className="text-xs text-slate-300 font-semibold block mb-2">Quick Add Flagship Supercars:</span>
                <div className="flex flex-wrap justify-center gap-2">
                  {CARS_DATA.slice(0, 3).map(c => (
                    <button
                      key={c.id}
                      onClick={() => addToCompare(c.id)}
                      className="px-3 py-1.5 rounded-lg bg-dark-950 border border-white/10 text-xs text-gold-400 hover:border-gold-500/50 flex items-center gap-1.5"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>{c.name.split(' ')[0]} {c.name.split(' ')[1]}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              
              {/* Quick Add Bar if less than 4 */}
              {comparedCars.length < 4 && availableToAdd.length > 0 && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-dark-950/70 border border-white/10 text-xs">
                  <span className="text-slate-400 flex-shrink-0">Add another car to matrix:</span>
                  <select
                    onChange={(e) => {
                      if (e.target.value) {
                        addToCompare(e.target.value);
                        e.target.value = '';
                      }
                    }}
                    defaultValue=""
                    className="flex-1 bg-dark-900 border border-white/10 rounded-lg px-2.5 py-1.5 text-slate-200 text-xs focus:outline-none"
                  >
                    <option value="" disabled>Select vehicle...</option>
                    {availableToAdd.map(car => (
                      <option key={car.id} value={car.id}>
                        {car.name} ({formatPrice(car.price, currency)})
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Table / Grid */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left text-xs min-w-[650px]">
                  <thead>
                    <tr>
                      <th className="p-3 w-40 text-slate-400 uppercase font-mono tracking-wider bg-dark-950/60 rounded-tl-xl border-b border-white/10">
                        Feature / Metric
                      </th>
                      {comparedCars.map(car => (
                        <th key={car.id} className="p-4 bg-dark-950/80 border-b border-white/10 align-top">
                          <div className="relative group space-y-2">
                            <button
                              onClick={() => removeFromCompare(car.id)}
                              className="absolute top-0 right-0 p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500 text-rose-400 hover:text-white transition-colors"
                              title="Remove car"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>

                            <div className="relative w-full h-28 rounded-xl overflow-hidden bg-dark-900 border border-white/10 car-image-container">
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
                              <div className="font-heading font-black text-sm text-white line-clamp-1">
                                {car.name}
                              </div>
                            </div>

                            <div className="font-heading font-black text-base text-gold-400">
                              {formatPrice(car.price, currency)}
                            </div>

                            <div className="flex items-center gap-1.5 pt-1">
                              <button
                                onClick={() => {
                                  setIsCompareModalOpen(false);
                                  openCarDetails(car);
                                }}
                                className="flex-1 py-1.5 rounded-lg bg-white/10 hover:bg-gold-500 hover:text-dark-950 font-bold text-[10px] uppercase text-center transition-all"
                              >
                                Specs
                              </button>
                              <button
                                onClick={() => {
                                  setIsCompareModalOpen(false);
                                  openTestDrive(car);
                                }}
                                className="flex-1 py-1.5 rounded-lg bg-gold-500 text-dark-950 font-bold text-[10px] uppercase text-center shadow-glow-gold hover:bg-gold-400 transition-all"
                              >
                                Test Drive
                              </button>
                            </div>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-white/5">
                    
                    {/* 0-60 MPH */}
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-3 font-semibold text-slate-300 flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-gold-400" />
                        <span>0-100 KM/H Accel</span>
                      </td>
                      {comparedCars.map(car => {
                        const isWinner = car.specs.accelRaw === fastestAccel && comparedCars.length > 1;
                        return (
                          <td key={car.id} className="p-3 font-mono font-bold text-sm">
                            <div className="flex items-center gap-2">
                              <span className={isWinner ? 'text-emerald-400 font-black' : 'text-slate-200'}>
                                {car.specs.acceleration}
                              </span>
                              {isWinner && (
                                <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[9px] font-sans font-bold flex items-center gap-1">
                                  <Trophy className="w-2.5 h-2.5" /> Best
                                </span>
                              )}
                            </div>
                          </td>
                        );
                      })}
                    </tr>

                    {/* Max Horsepower */}
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-3 font-semibold text-slate-300 flex items-center gap-1.5">
                        <Flame className="w-3.5 h-3.5 text-rose-500" />
                        <span>Horsepower</span>
                      </td>
                      {comparedCars.map(car => {
                        const isWinner = car.specs.horsepower === highestHp && comparedCars.length > 1;
                        return (
                          <td key={car.id} className="p-3 font-mono font-bold text-sm">
                            <div className="flex items-center gap-2">
                              <span className={isWinner ? 'text-rose-400 font-black' : 'text-slate-200'}>
                                {car.specs.horsepower} HP
                              </span>
                              {isWinner && (
                                <span className="px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-400 text-[9px] font-sans font-bold flex items-center gap-1">
                                  <Trophy className="w-2.5 h-2.5" /> Highest
                                </span>
                              )}
                            </div>
                          </td>
                        );
                      })}
                    </tr>

                    {/* Top Speed */}
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-3 font-semibold text-slate-300 flex items-center gap-1.5">
                        <Gauge className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Top Speed</span>
                      </td>
                      {comparedCars.map(car => {
                        const isWinner = car.specs.topSpeedRaw === fastestTopSpeed && comparedCars.length > 1;
                        return (
                          <td key={car.id} className="p-3 font-mono font-bold text-sm">
                            <div className="flex items-center gap-2">
                              <span className={isWinner ? 'text-cyan-400 font-black' : 'text-slate-200'}>
                                {car.specs.topSpeed}
                              </span>
                              {isWinner && (
                                <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-400 text-[9px] font-sans font-bold flex items-center gap-1">
                                  <Trophy className="w-2.5 h-2.5" /> Fastest
                                </span>
                              )}
                            </div>
                          </td>
                        );
                      })}
                    </tr>

                    {/* Powertrain */}
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-3 font-semibold text-slate-300">Powertrain</td>
                      {comparedCars.map(car => (
                        <td key={car.id} className="p-3 text-slate-300 text-xs">
                          {car.specs.engine}
                        </td>
                      ))}
                    </tr>

                    {/* Torque */}
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-3 font-semibold text-slate-300">Peak Torque</td>
                      {comparedCars.map(car => (
                        <td key={car.id} className="p-3 font-mono text-slate-300 text-xs">
                          {car.specs.torque}
                        </td>
                      ))}
                    </tr>

                    {/* Transmission */}
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-3 font-semibold text-slate-300">Transmission</td>
                      {comparedCars.map(car => (
                        <td key={car.id} className="p-3 text-slate-300 text-xs">
                          {car.specs.transmission}
                        </td>
                      ))}
                    </tr>

                    {/* Drivetrain */}
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-3 font-semibold text-slate-300">Drivetrain</td>
                      {comparedCars.map(car => (
                        <td key={car.id} className="p-3 text-slate-300 text-xs">
                          {car.specs.drivetrain}
                        </td>
                      ))}
                    </tr>

                    {/* Curb Weight */}
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-3 font-semibold text-slate-300">Curb Weight</td>
                      {comparedCars.map(car => (
                        <td key={car.id} className="p-3 text-slate-300 text-xs">
                          {car.specs.weight}
                        </td>
                      ))}
                    </tr>

                    {/* Fuel Type */}
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-3 font-semibold text-slate-300">Fuel / Energy</td>
                      {comparedCars.map(car => (
                        <td key={car.id} className="p-3 text-slate-300 text-xs">
                          {car.specs.fuelType}
                        </td>
                      ))}
                    </tr>

                  </tbody>
                </table>
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}
