"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from './LanguageContext';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import { SupportersMarquee } from './SupportersMarquee';
import { SmartSearchModal } from './SmartSearchModal';
import { ShareModal } from './ShareModal';
import { PWAInstallModal } from './PWAInstallModal';
import { MahitiChakraLogo } from './MahitiChakraLogo';
import {
  Menu, Sun, Globe, User, Search, Home, Grid, Heart, ShieldCheck, X, Share2, Download, Radio
} from 'lucide-react';

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showPwaModal, setShowPwaModal] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isEmbed, setIsEmbed] = useState(false);

  useEffect(() => {
    // 🚀 Check if running in embed mode or iframe
    if (typeof window !== 'undefined') {
      const isEmbedUrl = 
        window.location.search.includes('embed=true') || 
        window.location.pathname.startsWith('/embed') ||
        window.self !== window.top; // running inside an iframe
      
      if (isEmbedUrl) {
        setIsEmbed(true);
      }
    }

    // 🚀 Register Service Worker for 100% PWA Support
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch((err) => {
        console.log('SW error:', err);
      });
    }

    // 📲 Capture Browser Native PWA Install Prompt
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      (window as any).deferredPwaPrompt = e;
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
  }, []);

  // 🎯 PURE EMBED MODE: HIDE ALL HEADERS, FOOTERS, MENUS AND NAVIGATION
  if (isEmbed || pathname.startsWith('/embed')) {
    return (
      <div className="w-full min-h-screen bg-transparent p-0 m-0 overflow-x-hidden font-sans select-none">
        <main className="w-full p-0 m-0">
          {children}
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans select-none overflow-x-hidden max-w-full justify-between relative">
      
      {/* GLOBAL STANDALONE SMART SEARCH MODAL */}
      {showSearchModal && (
        <SmartSearchModal
          query={searchQuery}
          onQueryChange={setSearchQuery}
          onClose={() => setShowSearchModal(false)}
        />
      )}

      {/* SHARE MODAL DRAWER */}
      {showShareModal && (
        <ShareModal onClose={() => setShowShareModal(false)} />
      )}

      {/* PWA INSTALLATION MODAL DRAWER */}
      {showPwaModal && (
        <PWAInstallModal
          deferredPrompt={deferredPrompt}
          onClose={() => setShowPwaModal(false)}
        />
      )}

      {/* TOP HEADER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs px-3.5 sm:px-6 py-2.5 max-w-full overflow-visible">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2.5">
          
          {/* Left: Hamburger + Brand Logo */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors shrink-0"
              title="Toggle Sidebar Menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              <MahitiChakraLogo size={42} className="w-10 h-10 group-hover:scale-105 transition-transform" />
              <div className="leading-tight">
                <span className="font-black text-xs sm:text-sm text-slate-950 block tracking-tight">MAHITI CHAKRA</span>
                <span className="text-[9px] font-black text-amber-800 bg-amber-100 border border-amber-300 px-1.5 py-0.2 rounded uppercase">
                  HELP PORTAL & APPS
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Search Input */}
          <div className="flex-1 max-w-md hidden md:block relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder={lang === 'kn' ? 'ಹುಡುಕಿ... (ಉದಾ: ವಯಸ್ಸು, EMI, ಚಿನ್ನ, photo)' : 'Search... (e.g. EMI, age, photo, gold)'}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSearchModal(true);
              }}
              onFocus={() => setShowSearchModal(true)}
              className="w-full bg-slate-100 border border-slate-200 rounded-full py-2 pl-10 pr-4 text-xs font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all shadow-2xs cursor-pointer"
            />
          </div>

          {/* Right Header Actions */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* 📲 1-CLICK PWA INSTALL WEB APP BUTTON (Visible on tablet/desktop, mobile has bottom bar) */}
            <button
              id="global-pwa-install-btn"
              onClick={() => setShowPwaModal(true)}
              className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-600 hover:to-amber-500 text-slate-950 font-black text-[10px] sm:text-[11px] shadow-sm transition-all active:scale-95 border border-amber-300"
              title="Install App to Home Screen"
            >
              <Download className="w-3.5 h-3.5 text-slate-950" />
              <span>{lang === 'kn' ? 'ಆಪ್ ಇನ್‌ಸ್ಟಾಲ್' : 'Install App'}</span>
            </button>

            {/* Share Website Pill Button */}
            <button
              onClick={() => setShowShareModal(true)}
              className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-black text-[10px] sm:text-[11px] shadow-sm transition-all active:scale-95 border border-emerald-500"
              title="Share Website"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{lang === 'kn' ? 'ಶೇರ್' : 'Share'}</span>
            </button>

            {/* Language Switcher Pill */}
            <button
              onClick={() => setLang(lang === 'kn' ? 'en' : 'kn')}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 font-extrabold text-[10px] sm:text-[11px] hover:bg-slate-200 transition-colors shadow-2xs"
            >
              <Globe className="w-3.5 h-3.5 text-amber-600" />
              <span>{lang === 'kn' ? 'ಕನ್ನಡ' : 'English'}</span>
            </button>

            {/* User Profile / Admin Link */}
            <Link
              href="/admin"
              className="p-2 rounded-full bg-slate-950 text-amber-400 hover:bg-slate-800 transition-all shadow-md"
              title="Admin / My Account"
            >
              <User className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* MOBILE FULL-WIDTH ROUNDED SEARCH INPUT */}
        <div className="mt-2 md:hidden relative max-w-full">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder={lang === 'kn' ? 'ಹುಡುಕಿ... (ಉದಾ: ವಯಸ್ಸು, ಸಾಲ, ಚಿನ್ನ, photo)' : 'Search... (e.g. EMI, age, photo, gold)'}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowSearchModal(true);
            }}
            onFocus={() => setShowSearchModal(true)}
            className="w-full bg-slate-100 border border-slate-200 rounded-full py-2 pl-10 pr-4 text-xs font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white shadow-2xs cursor-pointer"
          />
        </div>
      </header>

      {/* BODY WITH COLLAPSIBLE SIDEBAR */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto overflow-x-hidden">
        {/* DESKTOP/MOBILE SIDEBAR DRAWER */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 flex">
            <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs" onClick={() => setSidebarOpen(false)} />
            <div className="relative z-10 w-64 bg-white h-full shadow-2xl">
              <Sidebar isOpen={true} onClose={() => setSidebarOpen(false)} />
            </div>
          </div>
        )}

        {/* PAGE CONTENT */}
        <main className="flex-1 pb-24 md:pb-8 px-3.5 sm:px-6 py-4 sm:py-6 overflow-x-hidden max-w-full">
          {children}
        </main>
      </div>

      {/* ❤️ CONTINUOUS ANIMATED SUPPORTERS & CREATOR WALL (HOME PAGE ONLY) */}
      {pathname === '/' && <SupportersMarquee />}

      {/* WORLD-CLASS ULTRA-PROFESSIONAL FOOTER */}
      <Footer />

      {/* MOBILE STICKY BOTTOM NAVIGATION BAR (EXACT MATCH TO REFERENCE DESIGN) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-2xl px-2 py-1 flex items-center justify-around max-w-full overflow-visible select-none">
        
        {/* Tab 1: Home */}
        <Link
          href="/"
          className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl transition-all ${
            pathname === '/' ? 'text-amber-600 font-black' : 'text-slate-600 hover:text-slate-900 font-bold'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px]">{lang === 'kn' ? 'ಮುಖಪುಟ' : 'Home'}</span>
        </Link>

        {/* Tab 2: Live Apps */}
        <Link
          href="/#live-apps"
          className="flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl transition-all text-slate-600 hover:text-slate-900 font-bold relative"
        >
          <span className="w-2 h-2 rounded-full bg-rose-600 absolute top-1 right-3 animate-pulse" />
          <Radio className="w-5 h-5 text-rose-600" />
          <span className="text-[10px] text-slate-800 font-black">{lang === 'kn' ? 'Live Apps' : 'Live Apps'}</span>
        </Link>

        {/* Tab 3: CENTER PROMINENT FLOATING SEARCH BUTTON */}
        <button
          onClick={() => {
            setSearchQuery('');
            setShowSearchModal(true);
          }}
          className="flex flex-col items-center justify-center -mt-6 shrink-0 relative z-50 group"
          title="Search Tools & Rates"
        >
          <div className="w-13 h-13 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 flex items-center justify-center font-black shadow-xl shadow-amber-500/40 border-4 border-white active:scale-95 transition-all group-hover:scale-105">
            <Search className="w-6 h-6 text-slate-950" />
          </div>
          <span className="text-[10px] font-black text-slate-950 mt-0.5">{lang === 'kn' ? 'ಹುಡುಕು' : 'Search'}</span>
        </button>

        {/* Tab 4: Tools */}
        <Link
          href="/#all-apps"
          className="flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl transition-all text-slate-600 hover:text-slate-900 font-bold"
        >
          <Grid className="w-5 h-5" />
          <span className="text-[10px]">{lang === 'kn' ? 'Tools' : 'Tools'}</span>
        </Link>

        {/* Tab 5: Account / Menu */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl transition-all text-slate-600 hover:text-slate-900 font-bold"
        >
          <User className="w-5 h-5" />
          <span className="text-[10px]">{lang === 'kn' ? 'ನನ್ನ ಖಾತೆ' : 'Account'}</span>
        </button>
      </nav>

    </div>
  );
};
