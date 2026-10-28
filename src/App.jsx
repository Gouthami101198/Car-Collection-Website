import React, { useState } from 'react';
import { CarProvider } from './context/CarContext';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/home/HeroSection';
import BrandMarquee from './components/home/BrandMarquee';
import CollectionGallery from './components/collection/CollectionGallery';
import BrandsPage from './components/pages/BrandsPage';
import ExperienceSection from './components/home/ExperienceSection';
import TrackExpeditionsSection from './components/home/TrackExpeditionsSection';
import FinanceTaxSection from './components/home/FinanceTaxSection';
import JournalSection from './components/home/JournalSection';
import TestimonialsSection from './components/home/TestimonialsSection';
import AboutContactPage from './components/pages/AboutContactPage';
import Footer from './components/layout/Footer';
import CarDetailsModal from './components/details/CarDetailsModal';
import CompareModal from './components/compare/CompareModal';
import WishlistModal from './components/wishlist/WishlistModal';
import TestDriveModal from './components/booking/TestDriveModal';
import AuthModal from './components/auth/AuthModal';
import QuickSearchModal from './components/common/QuickSearchModal';
import Toast from './components/common/Toast';
import ErrorBoundary from './components/common/ErrorBoundary';
import DeviceViewSwitcher, { DeviceFrameContainer } from './components/common/DeviceViewSwitcher';

function MainApp() {
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeView, setActiveView] = useState('responsive');
  const [isLandscape, setIsLandscape] = useState(false);

  const handleBrandSelect = (brandId) => {
    setSelectedBrand(brandId);
    const el = document.getElementById('collection-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <DeviceFrameContainer
        activeView={activeView}
        isLandscape={isLandscape}
        onResetView={() => setActiveView('responsive')}
      >
        <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col font-body selection:bg-gold-500 selection:text-black">
          {/* Fixed Sticky Luxury Navbar */}
          <Navbar onSearchClick={() => setIsSearchOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Cinematic Hero */}
        <HeroSection />

        {/* Brand Marquee & Fast Filter Strip */}
        <BrandMarquee 
          selectedBrand={selectedBrand} 
          onSelectBrand={handleBrandSelect} 
        />

        {/* Primary Car Collection Gallery */}
        <CollectionGallery initialBrand={selectedBrand} />

        {/* Brands & Vehicle Classifications */}
        <BrandsPage onSelectBrand={handleBrandSelect} />

        {/* Track Days & Himalayan Expeditions */}
        <TrackExpeditionsSection />

        {/* BH Series Tax & On-Road Price Simulator */}
        <FinanceTaxSection />

        {/* Indigenous Automotive Journal & Safety Analysis */}
        <JournalSection />

        {/* The Apex Privilege: Track Days, Air Cargo, Atelier Standards */}
        <ExperienceSection />

        {/* Collector Reviews */}
        <TestimonialsSection />

        {/* Heritage Story, Showroom Network, FAQ Accordion, VIP Contact */}
        <AboutContactPage />
      </main>

      {/* Luxury Footer */}
      <Footer />

      {/* Interactive Global Modals */}
      <CarDetailsModal />
      <CompareModal />
      <WishlistModal />
      <TestDriveModal />
      <AuthModal />
      <QuickSearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
        <Toast />
        </div>
      </DeviceFrameContainer>

      {/* Floating Responsive Device Viewport Switcher Dock */}
      <DeviceViewSwitcher 
        activeView={activeView}
        setActiveView={setActiveView}
        isLandscape={isLandscape}
        setIsLandscape={setIsLandscape}
      />
    </>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <CarProvider>
        <MainApp />
      </CarProvider>
    </ErrorBoundary>
  );
}
