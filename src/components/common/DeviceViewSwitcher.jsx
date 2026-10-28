import React, { useState, useEffect } from 'react';
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
  Maximize2, 
  RotateCw, 
  X, 
  ChevronUp, 
  ChevronDown, 
  Wifi,
  Battery,
  Lock,
  ExternalLink,
  Sparkles
} from 'lucide-react';

export const DEVICE_VIEWPORTS = {
  responsive: { id: 'responsive', label: 'Full Screen', width: '100%', sublabel: 'Adaptive Fluid View' },
  desktop: { id: 'desktop', label: 'Desktop', width: 1280, height: 800, sublabel: '1280 × 800 px' },
  tablet: { id: 'tablet', label: 'Tablet', width: 768, height: 820, landscapeWidth: 1024, landscapeHeight: 640, sublabel: '768 × 820 px' },
  mobile: { id: 'mobile', label: 'Mobile', width: 390, height: 800, landscapeWidth: 844, landscapeHeight: 460, sublabel: '390 × 800 px' }
};

export default function DeviceViewSwitcher({ activeView, setActiveView, isLandscape, setIsLandscape }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // If running inside the embedded simulation iframe or popup, do not render switcher dock recursively
  const isEmbedded = typeof window !== 'undefined' && (
    window.location.search.includes('embedded=true') || 
    (window.self !== window.top)
  );

  if (isEmbedded) return null;

  const views = [
    { id: 'responsive', label: 'Responsive', icon: Maximize2, desc: '100% Fluid' },
    { id: 'desktop', label: 'Desktop', icon: Monitor, desc: '1280px' },
    { id: 'tablet', label: 'Tablet', icon: Tablet, desc: isLandscape ? '1024px' : '768px' },
    { id: 'mobile', label: 'Mobile', icon: Smartphone, desc: isLandscape ? '844px' : '390px' },
  ];

  const canRotate = activeView === 'mobile' || activeView === 'tablet';

  return (
    <aside 
      aria-label="Responsive Device Viewport Switcher" 
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 pointer-events-auto print:hidden max-w-[95vw]"
    >
      <div className="flex flex-col items-center">
        {/* Main Floating Pill Dock */}
        <div className="bg-dark-950/95 backdrop-blur-2xl border border-gold-500/35 shadow-[0_15px_40px_rgba(0,0,0,0.85)] rounded-2xl p-1.5 flex items-center gap-1.5 transition-all duration-300">
          
          {/* Collapse Toggle */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors flex-shrink-0"
            title={isCollapsed ? 'Expand Device Switcher' : 'Minimize Switcher'}
          >
            {isCollapsed ? <ChevronUp className="w-4 h-4 text-gold-400" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {!isCollapsed ? (
            <>
              {/* Badge: Mode Indicator */}
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gold-500/10 border border-gold-500/25 text-[11px] font-mono text-gold-400 font-bold flex-shrink-0">
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
                <span className="capitalize">{activeView} View</span>
                <span className="text-slate-400 font-normal hidden lg:inline">
                  ({activeView === 'responsive' ? '100% Fluid' : DEVICE_VIEWPORTS[activeView]?.sublabel})
                </span>
              </div>

              {/* View Buttons */}
              <div className="flex items-center gap-1 bg-dark-900/80 p-1 rounded-xl border border-white/10">
                {views.map((v) => {
                  const Icon = v.icon;
                  const isActive = activeView === v.id;
                  return (
                    <button
                      key={v.id}
                      onClick={() => setActiveView(v.id)}
                      className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition-all duration-200 whitespace-nowrap ${
                        isActive
                          ? 'bg-gradient-to-r from-gold-400 via-gold-500 to-pink-500 text-dark-950 font-black shadow-glow-gold scale-102'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                      title={`${v.label} View (${v.desc})`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">{v.label}</span>
                      <span className="text-[10px] font-mono opacity-80 sm:hidden">{v.label.slice(0, 3)}</span>
                    </button>
                  );
                })}
              </div>

              {/* Rotate Button (Available in Mobile / Tablet) */}
              {canRotate && (
                <button
                  onClick={() => setIsLandscape(!isLandscape)}
                  className={`p-2 rounded-xl border transition-all text-xs flex items-center gap-1.5 flex-shrink-0 ${
                    isLandscape
                      ? 'bg-gold-500/20 text-gold-400 border-gold-500/40'
                      : 'bg-white/5 hover:bg-white/10 text-slate-300 border-white/10'
                  }`}
                  title={isLandscape ? 'Switch to Portrait' : 'Switch to Landscape'}
                >
                  <RotateCw className={`w-3.5 h-3.5 ${isLandscape ? 'rotate-90 text-gold-400' : ''} transition-transform`} />
                  <span className="hidden xl:inline">{isLandscape ? 'Landscape' : 'Portrait'}</span>
                </button>
              )}

              {/* Quick Reset to Full Screen if in frame mode */}
              {activeView !== 'responsive' && (
                <button
                  onClick={() => setActiveView('responsive')}
                  className="p-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors flex-shrink-0"
                  title="Close Device Frame (Return to Fullscreen)"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </>
          ) : (
            /* Minimized Mode */
            <div className="flex items-center gap-2 px-2 py-0.5">
              <span className="text-xs font-mono font-bold text-gold-400 capitalize">
                {activeView === 'responsive' ? 'Full Responsive' : `${activeView} View`}
              </span>
              <button
                onClick={() => setIsCollapsed(false)}
                className="text-[11px] text-slate-300 hover:text-white underline font-medium ml-1"
              >
                Change View
              </button>
            </div>
          )}

        </div>
      </div>
    </aside>
  );
}

// Device Frame Chrome Wrappers (Phone Notch, Tablet Bezel, Desktop Window)
export function DeviceFrameContainer({ 
  children, 
  activeView, 
  isLandscape,
  onResetView 
}) {
  // If activeView is responsive, render full-screen native fluid site directly
  if (activeView === 'responsive') {
    return <>{children}</>;
  }

  // Realistic Mobile Device Frame (iPhone 16 Pro)
  if (activeView === 'mobile') {
    const width = isLandscape ? '844px' : '390px';
    const height = isLandscape ? '460px' : '800px';

    return (
      <div className="min-h-screen bg-[#050507] py-6 px-2 sm:px-4 flex flex-col items-center justify-start overflow-x-hidden selection:bg-gold-500 selection:text-black">
        {/* Device Top Notice & Quick Controls */}
        <div className="mb-4 text-center flex items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-400 text-xs font-mono">
            <span>📱 iPhone 16 Pro Simulation ({width} × {height})</span>
          </span>
          <button
            onClick={onResetView}
            className="text-xs text-slate-400 hover:text-white underline font-medium transition-colors"
          >
            Exit Frame Mode
          </button>
        </div>

        {/* Realistic Mobile Device Frame */}
        <div 
          className="relative rounded-[48px] shadow-[0_30px_90px_rgba(0,0,0,0.98)] border-[9px] border-[#181820] ring-1 ring-gold-500/30 overflow-hidden bg-dark-950 flex flex-col transition-all duration-300 max-w-full"
          style={{ width, height, maxHeight: 'calc(100vh - 120px)' }}
        >
          {/* Simulated Mobile Status Bar (Dynamic Island) */}
          <div className="h-10 bg-dark-950 flex items-center justify-between px-7 select-none border-b border-white/5 z-40 relative flex-shrink-0">
            <span className="text-xs font-semibold text-white font-mono">09:41</span>
            
            {/* Dynamic Island Pill */}
            <div className="w-24 h-5 rounded-full bg-black border border-white/10 flex items-center justify-end px-2 gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#1A1A24]" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60 animate-pulse" />
            </div>

            <div className="flex items-center gap-1.5 text-white">
              <Wifi className="w-3.5 h-3.5 text-slate-300" />
              <Battery className="w-4 h-4 text-emerald-400" />
            </div>
          </div>

          {/* Actual Website Inner Viewport via Isolated Iframe to trigger accurate mobile media queries */}
          <div className="flex-1 w-full h-full relative overflow-hidden bg-dark-950">
            <iframe
              src="/?embedded=true&view=mobile"
              title="Mobile Viewport Simulation"
              className="w-full h-full border-0 bg-dark-950"
            />
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="h-5 bg-dark-950 flex items-center justify-center select-none z-40 flex-shrink-0">
            <div className="w-32 h-1 rounded-full bg-white/40" />
          </div>
        </div>
      </div>
    );
  }

  // Realistic Tablet Device Frame (iPad Pro)
  if (activeView === 'tablet') {
    const width = isLandscape ? '1024px' : '768px';
    const height = isLandscape ? '640px' : '820px';

    return (
      <div className="min-h-screen bg-[#050507] py-6 px-2 sm:px-4 flex flex-col items-center justify-start overflow-x-hidden selection:bg-gold-500 selection:text-black">
        {/* Device Top Notice */}
        <div className="mb-4 text-center flex items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono">
            <span>📟 iPad Pro Tablet Simulation ({width} × {height})</span>
          </span>
          <button
            onClick={onResetView}
            className="text-xs text-slate-400 hover:text-white underline font-medium transition-colors"
          >
            Exit Frame Mode
          </button>
        </div>

        {/* Realistic Tablet Device Frame */}
        <div 
          className="relative rounded-[36px] shadow-[0_30px_90px_rgba(0,0,0,0.98)] border-[11px] border-[#181820] ring-1 ring-cyan-500/30 overflow-hidden bg-dark-950 flex flex-col transition-all duration-300 max-w-full"
          style={{ width, height, maxHeight: 'calc(100vh - 120px)' }}
        >
          {/* Tablet Status Bar */}
          <div className="h-8 bg-dark-950 flex items-center justify-between px-6 select-none border-b border-white/5 z-40 relative flex-shrink-0">
            <span className="text-xs font-semibold text-slate-300 font-mono">09:41 AM  Wed Oct 28</span>
            
            {/* Center Camera Notch */}
            <div className="w-2 h-2 rounded-full bg-black border border-white/20" />

            <div className="flex items-center gap-2 text-white">
              <span className="text-[10px] font-mono text-slate-400">100%</span>
              <Battery className="w-4 h-4 text-emerald-400" />
            </div>
          </div>

          {/* Website Content */}
          <div className="flex-1 w-full h-full relative overflow-hidden bg-dark-950">
            <iframe
              src="/?embedded=true&view=tablet"
              title="Tablet Viewport Simulation"
              className="w-full h-full border-0 bg-dark-950"
            />
          </div>

          {/* Bottom Dock Bar */}
          <div className="h-4 bg-dark-950 flex items-center justify-center select-none z-40 flex-shrink-0">
            <div className="w-40 h-1 rounded-full bg-white/40" />
          </div>
        </div>
      </div>
    );
  }

  // Realistic Desktop Studio Display Window (1280px)
  if (activeView === 'desktop') {
    const width = '1280px';
    const height = '800px';

    return (
      <div className="min-h-screen bg-[#050507] py-6 px-2 sm:px-4 flex flex-col items-center justify-start overflow-x-hidden selection:bg-gold-500 selection:text-black">
        {/* Device Top Notice */}
        <div className="mb-4 text-center flex items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/25 text-pink-400 text-xs font-mono">
            <span>💻 Desktop Studio Display Window (1280 × 800 px)</span>
          </span>
          <button
            onClick={onResetView}
            className="text-xs text-slate-400 hover:text-white underline font-medium transition-colors"
          >
            Exit Frame Mode
          </button>
        </div>

        {/* Realistic Desktop Window Frame */}
        <div 
          className="relative rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.98)] border border-white/15 overflow-hidden bg-dark-950 flex flex-col transition-all duration-300 max-w-full"
          style={{ width, height, maxHeight: 'calc(100vh - 120px)' }}
        >
          {/* macOS Window Titlebar Chrome */}
          <div className="h-10 bg-dark-900 border-b border-white/10 px-4 flex items-center justify-between select-none z-40 flex-shrink-0">
            {/* Window Traffic Lights */}
            <div className="flex items-center gap-2">
              <button 
                onClick={onResetView}
                className="w-3 h-3 rounded-full bg-rose-500 border border-rose-600 shadow-sm hover:opacity-80 transition-opacity" 
                title="Close Window (Return to Fullscreen)"
              />
              <span className="w-3 h-3 rounded-full bg-amber-500 border border-amber-600 shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 border border-emerald-600 shadow-sm" />
            </div>

            {/* Simulated Safe Address Bar */}
            <div className="flex items-center gap-2 px-4 py-1 rounded-lg bg-dark-950 border border-white/10 text-[11px] font-mono text-slate-300 w-80 justify-center shadow-inner">
              <Lock className="w-3 h-3 text-emerald-400" />
              <span>https://apexmotors.in/collection</span>
            </div>

            <div className="text-[11px] font-mono text-slate-500">
              1280 × 800
            </div>
          </div>

          {/* Website Content */}
          <div className="flex-1 w-full h-full relative overflow-hidden bg-dark-950">
            <iframe
              src="/?embedded=true&view=desktop"
              title="Desktop Viewport Simulation"
              className="w-full h-full border-0 bg-dark-950"
            />
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
