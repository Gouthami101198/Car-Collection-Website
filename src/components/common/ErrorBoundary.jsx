import React from 'react';
import { RotateCcw, AlertTriangle, ShieldCheck } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Apex Motors Caught Error:', error, errorInfo);
  }

  handleReset = () => {
    try {
      localStorage.removeItem('apex_wishlist');
      localStorage.removeItem('apex_compare');
      localStorage.removeItem('apex_currency');
    } catch (e) {
      console.error(e);
    }
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-dark-950 text-slate-100 flex items-center justify-center p-6 selection:bg-gold-500 selection:text-black">
          <div className="max-w-md w-full p-8 rounded-3xl bg-dark-900 border border-gold-500/30 text-center space-y-6 shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center mx-auto shadow-glow-gold">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <div className="text-xs uppercase font-mono tracking-widest text-gold-400 font-semibold">
                APEX MOTORS BHARAT
              </div>
              <h2 className="font-heading font-black text-2xl text-white">
                Atelier System Reload Required
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                A cache synchronization discrepancy occurred while rendering the vehicle specifications. Resetting local cache will restore full functionality.
              </p>
            </div>

            {this.state.error && (
              <div className="p-3 rounded-xl bg-dark-950 border border-rose-500/20 text-rose-400 text-xs font-mono text-left overflow-x-auto max-h-24">
                {this.state.error.toString()}
              </div>
            )}

            <button
              onClick={this.handleReset}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-400 hover:to-amber-500 text-dark-950 font-heading font-black text-xs uppercase tracking-wider shadow-glow-gold transition-all flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset Cache & Reload Atelier</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
