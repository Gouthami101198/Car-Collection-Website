import React, { useState } from 'react';
import { CARS_DATA, RTO_STATE_TAX_DATA } from '../../data/cars';
import { formatPrice, formatIndianNumber } from '../../utils/formatters';
import { useCars } from '../../context/CarContext';
import { 
  Calculator, 
  ShieldCheck, 
  Percent, 
  HelpCircle, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  FileText,
  Building2,
  TrendingUp,
  CreditCard
} from 'lucide-react';

export default function FinanceTaxSection() {
  const { currency, openTestDrive, showToast } = useCars();

  const [selectedCarId, setSelectedCarId] = useState(CARS_DATA[1].id); // default: Thar ROXX
  const [selectedState, setSelectedState] = useState(RTO_STATE_TAX_DATA[0].state); // default: BH Series
  
  // Custom finance options
  const [downPaymentPct, setDownPaymentPct] = useState(25);
  const [loanTenureMonths, setLoanTenureMonths] = useState(60);
  const [interestRate, setInterestRate] = useState(8.85);

  const car = CARS_DATA.find(c => c.id === selectedCarId) || CARS_DATA[0];
  const stateObj = RTO_STATE_TAX_DATA.find(s => s.state === selectedState) || RTO_STATE_TAX_DATA[0];

  // Calculations
  const exShowroom = car.price;
  const rtoTaxRate = stateObj.rate / 100;
  const rtoTaxAmount = Math.round(exShowroom * rtoTaxRate);
  const tcsAmount = exShowroom > 1000000 ? Math.round(exShowroom * 0.01) : 0; // 1% TCS over 10 Lakh
  const insuranceAmount = Math.round(exShowroom * 0.038); // 3.8% Comprehensive Zero-Dep
  const fastagAndHandling = 8500;
  const totalOnRoadPrice = exShowroom + rtoTaxAmount + tcsAmount + insuranceAmount + fastagAndHandling;

  // Compare with highest state tax (Karnataka 18%) to show BH savings
  const karnatakaTax = Math.round(exShowroom * 0.18);
  const bhTax = Math.round(exShowroom * 0.08);
  const bhSavings = karnatakaTax - bhTax;

  // Monthly Loan EMI
  const downPaymentAmt = Math.round(totalOnRoadPrice * (downPaymentPct / 100));
  const loanPrincipal = totalOnRoadPrice - downPaymentAmt;
  const monthlyRate = interestRate / 100 / 12;
  const monthlyEmi = Math.round(
    (loanPrincipal * monthlyRate * Math.pow(1 + monthlyRate, loanTenureMonths)) /
    (Math.pow(1 + monthlyRate, loanTenureMonths) - 1)
  );

  return (
    <section id="finance-section" className="py-24 relative bg-dark-900/60 border-t border-white/5">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5" />
            <span>Bharat RTO & Wealth Advisory</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            Indian On-Road Pricing & <br />
            <span className="text-gold-gradient">BH Series Tax Simulator</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Model transparent on-road acquisition costs across Indian states, calculate Bharat Series (BH) road tax savings, and structure corporate depreciation with HDFC and ICICI Wealth Banking.
          </p>
        </div>

        {/* Interactive Dual-Panel Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Panel: Vehicle & State Selectors */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-dark-950/90 border border-white/10 shadow-2xl space-y-8">
            
            {/* Step 1: Vehicle Selector */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between">
                <span>1. Select Fleet Model</span>
                <span className="text-gold-400 font-mono text-xs font-normal">Ex-Showroom: {formatPrice(car.price, currency)}</span>
              </label>

              <select
                value={selectedCarId}
                onChange={(e) => setSelectedCarId(e.target.value)}
                className="w-full p-3.5 rounded-xl bg-dark-900 border border-white/15 text-white font-semibold text-sm focus:outline-none focus:border-gold-500 transition-colors"
              >
                {CARS_DATA.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name} — {formatPrice(c.price, currency)}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 2: State / RTO Jurisdiction */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                2. Select Registration Jurisdiction / RTO
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {RTO_STATE_TAX_DATA.map((st) => {
                  const isSelected = selectedState === st.state;
                  return (
                    <button
                      key={st.state}
                      type="button"
                      onClick={() => setSelectedState(st.state)}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'bg-gold-500/15 border-gold-500 text-white shadow-glow-gold/30'
                          : 'bg-dark-900 border-white/10 text-slate-300 hover:border-white/30'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-heading font-bold text-sm">{st.state}</span>
                        <span className="text-xs font-mono font-bold text-gold-400">{st.rate}% Tax</span>
                      </div>
                      <p className="text-[10px] text-slate-400 mt-1 line-clamp-2">
                        {st.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Financing Terms Slider */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-cyan-400" />
                <span>Auto Loan & EMI Settings (HDFC / ICICI Wealth)</span>
              </h4>

              <div className="space-y-4 text-xs">
                <div>
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span>Down Payment Percentage</span>
                    <span className="text-white font-bold">{downPaymentPct}% ({formatPrice(downPaymentAmt, currency)})</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="60"
                    step="5"
                    value={downPaymentPct}
                    onChange={(e) => setDownPaymentPct(Number(e.target.value))}
                    className="w-full accent-gold-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span>Loan Tenure</span>
                    <span className="text-white font-bold">{loanTenureMonths} Months ({loanTenureMonths / 12} Years)</span>
                  </div>
                  <input
                    type="range"
                    min="24"
                    max="84"
                    step="12"
                    value={loanTenureMonths}
                    onChange={(e) => setLoanTenureMonths(Number(e.target.value))}
                    className="w-full accent-gold-500"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Right Panel: On-Road Breakdown & BH Savings */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Detailed Cost Summary Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-glass-card border border-gold-500/30 shadow-2xl space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center border border-gold-500/30 font-heading font-black text-xl">
                  ₹
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold block">Estimated Indian On-Road</span>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
                    {formatPrice(totalOnRoadPrice, currency)}
                  </h3>
                </div>
              </div>

              {/* Itemized Breakdown Table */}
              <div className="space-y-2.5 text-xs pt-4 border-t border-white/10">
                <div className="flex justify-between text-slate-300">
                  <span>Ex-Showroom Price</span>
                  <span className="font-mono font-semibold">{formatPrice(exShowroom, currency)}</span>
                </div>

                <div className="flex justify-between text-slate-300">
                  <span className="flex items-center gap-1">
                    <span>RTO Road Tax ({selectedState})</span>
                    <span className="text-slate-500 font-mono text-[10px]">({stateObj.rate}%)</span>
                  </span>
                  <span className="font-mono font-semibold text-gold-400">
                    +{formatPrice(rtoTaxAmount, currency)}
                  </span>
                </div>

                <div className="flex justify-between text-slate-300">
                  <span>TCS (1% on vehicles &gt; ₹10 Lakh)</span>
                  <span className="font-mono font-semibold">+{formatPrice(tcsAmount, currency)}</span>
                </div>

                <div className="flex justify-between text-slate-300">
                  <span>Comprehensive Zero-Dep Insurance (1 Yr + 3 Yr TP)</span>
                  <span className="font-mono font-semibold">+{formatPrice(insuranceAmount, currency)}</span>
                </div>

                <div className="flex justify-between text-slate-300">
                  <span>Fastag, Registration & Number Plate</span>
                  <span className="font-mono font-semibold">+{formatPrice(fastagAndHandling, currency)}</span>
                </div>
              </div>

              {/* Monthly EMI Estimate Highlight */}
              <div className="p-4 rounded-2xl bg-dark-950/80 border border-cyan-500/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase block">Monthly EMI Estimate</span>
                  <span className="font-heading font-black text-xl text-cyan-400 font-mono">
                    ₹{formatIndianNumber(monthlyEmi)} / mo
                  </span>
                </div>
                <div className="text-right text-[11px] text-slate-400 font-mono">
                  {loanTenureMonths} Mo @ {interestRate}%
                </div>
              </div>

              {/* BH Series Savings Callout Banner */}
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-emerald-400">
                  <Sparkles className="w-4 h-4" />
                  <span>Bharat Series (BH) Tax Advantage</span>
                </div>
                <p className="text-[11px] leading-relaxed text-emerald-200/90">
                  Choosing BH Series over state-level taxes (e.g. Karnataka 18%) reduces your immediate upfront outlay by approximately <strong className="text-white">{formatPrice(bhSavings, currency)}</strong> with zero interstate transfer hassle.
                </p>
              </div>

              <button
                onClick={() => {
                  openTestDrive(car);
                  showToast('Connecting with Wealth Advisor for bespoke finance structure', 'gold');
                }}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-400 hover:to-amber-500 text-dark-950 font-heading font-black text-xs uppercase tracking-wider shadow-glow-gold transition-all flex items-center justify-center gap-2"
              >
                <span>Structure Vehicle Finance</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

            {/* Corporate Section 32 Tax Note */}
            <div className="p-6 rounded-2xl bg-dark-950/80 border border-white/10 text-xs space-y-2">
              <div className="flex items-center gap-2 text-gold-400 font-bold">
                <Building2 className="w-4 h-4" />
                <span>Section 32 Tax Depreciation for Enterprises</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Indian businesses can claim up to 15% standard annual depreciation (and up to 40% for commercial fleets / electric vehicles) on corporate purchases, offsetting operational taxable revenues.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
