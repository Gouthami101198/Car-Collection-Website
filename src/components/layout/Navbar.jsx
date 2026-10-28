import React, { useState, useEffect, useRef } from 'react';
import { useCars } from '../../context/CarContext';
import { CURRENCIES } from '../../utils/formatters';
import { 
  Sparkles, 
  Heart, 
  Layers, 
  Menu, 
  X, 
  ChevronDown,
  Calendar,
  Search,
  Sun,
  Moon,
  User,
  LogOut,
  ShieldCheck,
  Crown,
  Compass
} from 'lucide-react';

export default function Navbar({ onSearchClick }) {
  const { 
    wishlist, 
    compareList, 
    currency, 
    setCurrency, 
    openTestDrive,
    setIsCompareModalOpen,
    setIsWishlistModalOpen,
    activeTab,
    setActiveTab,
    theme,
    toggleTheme,
    currentUser,
    openAuth,
    logout
  } = useCars();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdown, setCurrencyDropdown] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const userMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Exact 4 navigation items from the original header
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'collection', label: 'Car Collection' },
    { id: 'brands', label: 'Brands & Categories' },
    { id: 'about', label: 'Experience & FAQ' },
  ];

  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    
    // Smooth scroll if navigating to specific section
    if (tabId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tabId === 'collection') {
      const el = document.getElementById('collection-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'brands') {
      const el = document.getElementById('brands-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'about') {
      const el = document.getElementById('about-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark-950/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3.5' 
          : 'bg-gradient-to-b from-dark-950/90 to-transparent py-5'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex items-center justify-between w-full">
          
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-300 via-gold-400 to-pink-500 flex items-center justify-center shadow-glow-gold group-hover:scale-105 transition-transform duration-300">
              <span className="font-heading font-black text-dark-950 text-xl tracking-tighter">A</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-black tracking-widest text-lg sm:text-xl text-white group-hover:text-gold-400 transition-colors">
                  APEX
                </span>
                <span className="text-gold-400 font-heading font-bold text-lg sm:text-xl tracking-widest">
                  MOTORS
                </span>
              </div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-slate-400 font-medium -mt-1 hidden sm:block">
                Automotive Atelier Bharat
              </p>
            </div>
          </button>

          {/* Center Navigation Pill: HOME | CAR COLLECTION | BRANDS & CATEGORIES | EXPERIENCE & FAQ */}
          <nav className="hidden lg:flex items-center gap-1 bg-dark-900/70 p-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-inner">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs font-heading font-bold tracking-wider uppercase transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-gold-400 via-gold-500 to-pink-500 text-dark-950 shadow-glow-gold font-extrabold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & Controls */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            
            {/* Quick Search */}
            <button
              onClick={onSearchClick}
              className="p-2 sm:p-2.5 rounded-xl bg-dark-900/80 border border-white/10 text-slate-300 hover:text-gold-400 hover:border-gold-500/40 hover:scale-110 active:scale-90 transition-all"
              title="Search Collection"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Dark / Light Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 sm:p-2.5 rounded-xl bg-dark-900/80 border border-white/10 text-slate-300 hover:text-gold-400 hover:border-gold-500/40 hover:scale-110 active:scale-90 transition-all"
              title={theme === 'dark' ? 'Switch to Blossom Light Theme' : 'Switch to Noir Black & Light Pink Theme'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-pink-300 hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-400 hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* Currency Selector */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => setCurrencyDropdown(!currencyDropdown)}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-dark-900/80 border border-white/10 text-xs font-mono text-slate-200 hover:border-gold-500/40 hover:scale-105 active:scale-95 transition-all"
              >
                <span>{currency}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {currencyDropdown && (
                <div className="absolute right-0 mt-2 w-32 rounded-xl bg-dark-900 border border-white/10 shadow-2xl py-1 z-50 backdrop-blur-xl">
                  {Object.values(CURRENCIES).map((curr) => (
                    <button
                      key={curr.code}
                      onClick={() => {
                        setCurrency(curr.code);
                        setCurrencyDropdown(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-gold-500/10 hover:text-gold-400 transition-colors ${
                        currency === curr.code ? 'text-gold-400 font-bold bg-white/5' : 'text-slate-300'
                      }`}
                    >
                      <span>{curr.code}</span>
                      <span className="font-mono text-slate-400">{curr.symbol.trim()}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Comparison Button with count badge */}
            <button
              onClick={() => setIsCompareModalOpen(true)}
              className="hidden sm:flex relative p-2 sm:p-2.5 rounded-xl bg-dark-900/80 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-110 active:scale-90 transition-all items-center justify-center"
              title="Compare Vehicles"
            >
              <Layers className="w-4 h-4" />
              {compareList.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-cyan-500 text-dark-950 font-black text-[10px] flex items-center justify-center shadow-glow-cyan animate-pulse">
                  {compareList.length}
                </span>
              )}
            </button>

            {/* Favorite / Wishlist Button with count badge */}
            <button
              onClick={() => setIsWishlistModalOpen(true)}
              className="relative p-2 sm:p-2.5 rounded-xl bg-dark-900/80 border border-white/10 text-slate-300 hover:text-rose-400 hover:border-rose-500/40 hover:scale-110 active:scale-90 transition-all"
              title="Saved Favorites"
            >
              <Heart className={`w-4 h-4 ${wishlist.length > 0 ? 'text-rose-500 fill-rose-500' : ''}`} />
              {wishlist.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-rose-500 text-white font-black text-[10px] flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* User Profile / Login Signup Action */}
            <div className="relative" ref={userMenuRef}>
              {currentUser ? (
                <div>
                  <button
                    onClick={() => setUserDropdown(!userDropdown)}
                    className="flex items-center gap-2 p-1 sm:px-2.5 sm:py-1.5 rounded-xl bg-dark-900/80 border border-gold-500/40 hover:border-gold-500 text-white transition-all"
                  >
                    <img 
                      src={currentUser.avatar} 
                      alt={currentUser.name} 
                      className="w-6 h-6 rounded-lg object-cover border border-gold-500/50"
                    />
                    <span className="hidden xl:inline text-xs font-semibold text-gold-300 max-w-[100px] truncate">
                      {currentUser.name}
                    </span>
                    <ChevronDown className="w-3.5 h-3.5 text-gold-400" />
                  </button>

                  {userDropdown && (
                    <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-dark-900 border border-gold-500/30 shadow-2xl p-3 z-50 backdrop-blur-2xl animate-fade-in">
                      <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                        <img 
                          src={currentUser.avatar} 
                          alt={currentUser.name} 
                          className="w-10 h-10 rounded-xl object-cover border border-gold-500/40"
                        />
                        <div className="overflow-hidden">
                          <p className="text-xs font-bold text-white truncate">{currentUser.name}</p>
                          <p className="text-[11px] text-slate-400 truncate">{currentUser.email}</p>
                          <div className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-md bg-gold-500/10 text-gold-400 text-[10px] font-semibold border border-gold-500/20">
                            <Crown className="w-3 h-3" />
                            <span>{currentUser.tier}</span>
                          </div>
                        </div>
                      </div>

                      <div className="py-2 space-y-1 text-xs">
                        <button
                          onClick={() => {
                            setUserDropdown(false);
                            openTestDrive();
                          }}
                          className="w-full text-left px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 flex items-center gap-2.5 transition-colors"
                        >
                          <Calendar className="w-4 h-4 text-gold-400" />
                          <span>My Bookings & Trials</span>
                        </button>
                        <button
                          onClick={() => {
                            setUserDropdown(false);
                            setIsWishlistModalOpen(true);
                          }}
                          className="w-full text-left px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 flex items-center gap-2.5 transition-colors"
                        >
                          <Heart className="w-4 h-4 text-rose-400" />
                          <span>Saved Favorites ({wishlist.length})</span>
                        </button>
                        <button
                          onClick={() => {
                            setUserDropdown(false);
                            setIsCompareModalOpen(true);
                          }}
                          className="w-full text-left px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 flex items-center gap-2.5 transition-colors"
                        >
                          <Layers className="w-4 h-4 text-cyan-400" />
                          <span>Compare Vehicles ({compareList.length})</span>
                        </button>
                      </div>

                      <div className="pt-2 border-t border-white/10">
                        <button
                          onClick={() => {
                            setUserDropdown(false);
                            logout();
                          }}
                          className="w-full text-left px-3 py-2 rounded-xl text-rose-400 hover:bg-rose-500/10 flex items-center gap-2.5 transition-colors text-xs font-semibold"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Sign Out</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => openAuth('login')}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-dark-900/80 border border-white/10 text-xs font-bold text-slate-200 hover:border-gold-500/50 hover:text-gold-400 hover:scale-105 active:scale-95 transition-all"
                  title="VIP Member Login / Register"
                >
                  <User className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Sign In</span>
                </button>
              )}
            </div>

            {/* Book a Trial CTA Button */}
            <button
              onClick={() => openTestDrive()}
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-pink-500 text-dark-950 font-bold text-xs uppercase tracking-wider shadow-glow-gold hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 whitespace-nowrap pink-shimmer-btn"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Trial</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 sm:p-2.5 rounded-xl bg-dark-900/80 border border-white/10 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-dark-900/98 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 mt-3 shadow-2xl animate-fade-in max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-4 py-3 rounded-xl text-sm font-semibold tracking-wider uppercase transition-all flex items-center justify-between ${
                  activeTab === item.id
                    ? 'bg-gold-500/20 text-gold-400 border border-gold-500/30'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                {activeTab === item.id && <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />}
              </button>
            ))}

            {/* Mobile Quick Utility Actions */}
            <div className="grid grid-cols-2 gap-2 my-2 pt-2 border-t border-white/10">
              {/* Mobile Compare Button */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsCompareModalOpen(true);
                }}
                className="p-3 rounded-xl bg-dark-950/80 border border-white/10 text-xs font-semibold text-slate-300 hover:text-cyan-400 flex items-center justify-between transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <span>Compare</span>
                </div>
                {compareList.length > 0 && (
                  <span className="px-1.5 py-0.5 rounded-full bg-cyan-500 text-dark-950 font-black text-[10px]">
                    {compareList.length}
                  </span>
                )}
              </button>

              {/* Mobile Wishlist Button */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsWishlistModalOpen(true);
                }}
                className="p-3 rounded-xl bg-dark-950/80 border border-white/10 text-xs font-semibold text-slate-300 hover:text-rose-400 flex items-center justify-between transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Heart className={`w-4 h-4 ${wishlist.length > 0 ? 'text-rose-500 fill-rose-500' : 'text-slate-400'}`} />
                  <span>Favorites</span>
                </div>
                {wishlist.length > 0 && (
                  <span className="px-1.5 py-0.5 rounded-full bg-rose-500 text-white font-black text-[10px]">
                    {wishlist.length}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Currency Selector Strip */}
            <div className="p-3 rounded-xl bg-dark-950/60 border border-white/10 space-y-2">
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block">
                Preferred Currency (Ex-Showroom & BH Sim)
              </span>
              <div className="grid grid-cols-5 gap-1.5">
                {Object.values(CURRENCIES).map((curr) => {
                  const isSelected = currency === curr.code;
                  return (
                    <button
                      key={curr.code}
                      onClick={() => setCurrency(curr.code)}
                      className={`py-1.5 rounded-lg text-xs font-mono font-bold transition-all text-center ${
                        isSelected
                          ? 'bg-gold-500 text-dark-950 shadow-glow-gold'
                          : 'bg-white/5 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      {curr.code}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile Book a Trial CTA */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openTestDrive();
              }}
              className="mt-1 w-full py-3 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-pink-500 text-dark-950 font-bold text-sm uppercase tracking-wider text-center shadow-glow-gold flex items-center justify-center gap-2 pink-shimmer-btn"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Trial</span>
            </button>

            {/* Mobile Auth button */}
            {!currentUser ? (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAuth('login');
                }}
                className="w-full py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white font-semibold text-xs flex items-center justify-center gap-2"
              >
                <User className="w-4 h-4 text-gold-400" />
                <span>Sign In / Register</span>
              </button>
            ) : (
              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-gold-400 font-semibold truncate">Signed in as {currentUser.name}</span>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    logout();
                  }}
                  className="text-xs text-rose-400 font-semibold"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
