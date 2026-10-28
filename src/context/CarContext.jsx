import React, { createContext, useContext, useState, useEffect } from 'react';
import { CARS_DATA } from '../data/cars';

export const CarContext = createContext(null);

export function CarProvider({ children }) {
  // Wishlist persisted in localStorage
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('apex_wishlist');
      if (!saved) return ['vazirani-shul', 'mahindra-thar-roxx'];
      const parsed = JSON.parse(saved);
      const valid = Array.isArray(parsed) ? parsed.filter(id => CARS_DATA.some(c => c.id === id)) : [];
      return valid.length > 0 ? valid : ['vazirani-shul', 'mahindra-thar-roxx'];
    } catch {
      return ['vazirani-shul', 'mahindra-thar-roxx'];
    }
  });

  // Compare List persisted in localStorage
  const [compareList, setCompareList] = useState(() => {
    try {
      const saved = localStorage.getItem('apex_compare');
      if (!saved) return ['mahindra-thar-roxx', 'tata-safari-red-dark'];
      const parsed = JSON.parse(saved);
      const valid = Array.isArray(parsed) ? parsed.filter(id => CARS_DATA.some(c => c.id === id)) : [];
      return valid.length > 0 ? valid : ['mahindra-thar-roxx', 'tata-safari-red-dark'];
    } catch {
      return ['mahindra-thar-roxx', 'tata-safari-red-dark'];
    }
  });

  // Currency (Default: INR ₹ for Indian vehicle collection)
  const [currency, setCurrency] = useState(() => {
    try {
      const saved = localStorage.getItem('apex_currency');
      if (!saved || saved === 'USD') {
        localStorage.setItem('apex_currency', 'INR');
        return 'INR';
      }
      return saved;
    } catch {
      return 'INR';
    }
  });

  // Theme State: 'dark' (default obsidian luxury) or 'light' (platinum pearl)
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('apex_theme');
      return saved === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
    try {
      localStorage.setItem('apex_theme', theme);
    } catch (e) {
      console.error(e);
    }
  }, [theme]);

  // Auth & User Profile State
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('apex_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'signup' | 'forgot'

  // Modals & Navigation state
  const [selectedCarForDetails, setSelectedCarForDetails] = useState(null);
  const [selectedCarInitialColor, setSelectedCarInitialColor] = useState(null);
  const [selectedCarForTestDrive, setSelectedCarForTestDrive] = useState(null);
  const [isTestDriveOpen, setIsTestDriveOpen] = useState(false);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [isWishlistModalOpen, setIsWishlistModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home'); // 'home' | 'collection' | 'brands' | 'about'

  // Toast notifications
  const [toast, setToast] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('apex_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  useEffect(() => {
    try {
      localStorage.setItem('apex_compare', JSON.stringify(compareList));
    } catch (e) {
      console.error(e);
    }
  }, [compareList]);

  useEffect(() => {
    try {
      localStorage.setItem('apex_currency', currency);
    } catch (e) {
      console.error(e);
    }
  }, [currency]);

  const showToast = (message, type = 'gold') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  const toggleWishlist = (carId) => {
    setWishlist(prev => {
      const exists = prev.includes(carId);
      const car = CARS_DATA.find(c => c.id === carId);
      const carName = car ? car.name : 'Vehicle';
      if (exists) {
        showToast(`Removed ${carName} from Wishlist`, 'info');
        return prev.filter(id => id !== carId);
      } else {
        showToast(`Saved ${carName} to Wishlist`, 'gold');
        return [...prev, carId];
      }
    });
  };

  const isInWishlist = (carId) => wishlist.includes(carId);

  const addToCompare = (carId) => {
    if (compareList.includes(carId)) {
      showToast('Car is already in comparison matrix', 'info');
      return;
    }
    if (compareList.length >= 4) {
      showToast('Maximum 4 vehicles can be compared simultaneously', 'info');
      return;
    }
    const car = CARS_DATA.find(c => c.id === carId);
    setCompareList(prev => [...prev, carId]);
    showToast(`Added ${car ? car.name : 'Vehicle'} to Comparison`, 'gold');
  };

  const removeFromCompare = (carId) => {
    setCompareList(prev => prev.filter(id => id !== carId));
    showToast('Removed vehicle from comparison', 'info');
  };

  const clearCompare = () => {
    setCompareList([]);
    showToast('Comparison cleared', 'info');
  };

  const openCarDetails = (car, initialColor = null) => {
    setSelectedCarForDetails(car);
    setSelectedCarInitialColor(initialColor || car?.colors?.[0] || null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeCarDetails = () => {
    setSelectedCarForDetails(null);
    setSelectedCarInitialColor(null);
  };

  const openTestDrive = (car = null) => {
    setSelectedCarForTestDrive(car);
    setIsTestDriveOpen(true);
  };

  const closeTestDrive = () => {
    setIsTestDriveOpen(false);
  };

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'dark' ? 'light' : 'dark';
      showToast(next === 'dark' ? '🌙 Noir Black & Light Pink Theme Enabled' : '🌸 Blossom Light Theme Enabled', 'gold');
      return next;
    });
  };

  const openAuth = (mode = 'login') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const closeAuth = () => {
    setIsAuthModalOpen(false);
  };

  const login = (emailOrPhone, password) => {
    const rawIdentifier = (emailOrPhone || '').trim();
    const rawName = rawIdentifier.includes('@') ? rawIdentifier.split('@')[0] : 'Kabir Sharma';
    const cleanName = rawName.replace(/[._-]/g, ' ');
    const formattedName = cleanName.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    const user = {
      name: formattedName.length > 2 ? formattedName : 'Kabir Sharma (VIP)',
      email: rawIdentifier.includes('@') ? rawIdentifier : `${rawIdentifier.toLowerCase()}@apex-motors.in`,
      phone: rawIdentifier.includes('@') ? '+91 98201 54321' : rawIdentifier,
      tier: 'Apex Platinum Member',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      joined: 'October 2026'
    };

    setCurrentUser(user);
    try {
      localStorage.setItem('apex_user', JSON.stringify(user));
    } catch (e) {
      console.error(e);
    }
    showToast(`Welcome to Apex Atelier, ${user.name}!`, 'gold');
    setIsAuthModalOpen(false);
  };

  const signup = ({ name, email, phone, preferredCategory = 'Flagship Luxury SUVs' }) => {
    const user = {
      name: name || 'VIP Collector',
      email: email || 'collector@apex-motors.in',
      phone: phone || '+91 98200 12345',
      tier: 'Apex Club Member',
      preferredCategory,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      joined: 'October 2026'
    };

    setCurrentUser(user);
    try {
      localStorage.setItem('apex_user', JSON.stringify(user));
    } catch (e) {
      console.error(e);
    }
    showToast(`VIP Membership Created! Welcome, ${user.name}`, 'gold');
    setIsAuthModalOpen(false);
  };

  const logout = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem('apex_user');
    } catch (e) {
      console.error(e);
    }
    showToast('Signed out of Apex Atelier', 'info');
  };

  const resetPassword = (identifier, newPassword) => {
    showToast('Password updated! Please login with your new credentials.', 'gold');
    setAuthMode('login');
  };

  return (
    <CarContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isInWishlist,
        compareList,
        addToCompare,
        removeFromCompare,
        clearCompare,
        currency,
        setCurrency,
        theme,
        toggleTheme,
        currentUser,
        isAuthModalOpen,
        setIsAuthModalOpen,
        authMode,
        setAuthMode,
        openAuth,
        closeAuth,
        login,
        signup,
        logout,
        resetPassword,
        selectedCarForDetails,
        selectedCarInitialColor,
        setSelectedCarInitialColor,
        openCarDetails,
        closeCarDetails,
        selectedCarForTestDrive,
        isTestDriveOpen,
        openTestDrive,
        closeTestDrive,
        isCompareModalOpen,
        setIsCompareModalOpen,
        isWishlistModalOpen,
        setIsWishlistModalOpen,
        activeTab,
        setActiveTab,
        toast,
        showToast,
      }}
    >
      {children}
    </CarContext.Provider>
  );
}

export function useCars() {
  const context = useContext(CarContext);
  if (!context) {
    throw new Error('useCars must be used within a CarProvider');
  }
  return context;
}
