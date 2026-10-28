import React from 'react';
import { useCars } from '../../context/CarContext';
import { CheckCircle2, Info, Sparkles, X } from 'lucide-react';

export default function Toast() {
  const { toast } = useCars();

  if (!toast) return null;

  const isGold = toast.type === 'gold';

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-in max-w-sm w-full">
      <div className={`p-4 rounded-xl border backdrop-blur-xl shadow-2xl flex items-center gap-3 transition-all ${
        isGold
          ? 'bg-dark-900/90 border-gold-500/50 shadow-glow-gold text-slate-100'
          : 'bg-dark-900/90 border-slate-700/60 text-slate-200'
      }`}>
        <div className={`p-2 rounded-lg ${isGold ? 'bg-gold-500/20 text-gold-400' : 'bg-cyan-500/20 text-cyan-400'}`}>
          {isGold ? <Sparkles className="w-5 h-5" /> : <Info className="w-5 h-5" />}
        </div>
        <div className="flex-1 text-sm font-medium">
          {toast.message}
        </div>
      </div>
    </div>
  );
}
