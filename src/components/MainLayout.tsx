"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from './LanguageContext';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import { SupportersMarquee } from './SupportersMarquee';
import { SmartSearchModal } from './SmartSearchModal';
import { ShareModal } from './ShareModal';
import {
  Menu, Sun, Globe, User, Search, Home, Grid, Heart, ShieldCheck, X, Share2
} from 'lucide-react';

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans select-none overflow-x-hidden max-w-full justify-between">
      
      {/* SHARE MODAL DRAWER */}
      {showShareModal && (
        <ShareModal onClose={() => setShowShareModal(false)} />
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

            <Link href="/" className="flex items-center gap-2 group shrink-0">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-400 text-slate-950 flex items-center justify-center font-black shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
                <span className="text-lg">💛</span>
              </div>
              <div className="leading-tight">
                <span className="font-black text-xs sm:text-sm text-slate-950 block tracking-tight">MAHITI CHAKRA</span>
                <span className="text-[9px] font-extrabold text-amber-700 bg-amber-100 px-1.5 py-0.2 rounded uppercase">
                  HELP PORTAL
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Search Input with Smart Autocomplete Modal */}
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
              className="w-full bg-slate-100 border border-slate-200 rounded-full py-2 pl-10 pr-4 text-xs font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all shadow-2xs"
            />

            {showSearchModal && searchQuery.trim() && (
              <SmartSearchModal
                query={searchQuery}
                onQueryChange={setSearchQuery}
                onClose={() => setShowSearchModal(false)}
              />
            )}
          </div>

          {/* Right Header Actions */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Share Website Pill Button */}
            <button
              onClick={() => setShowShareModal(true)}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-black text-[10px] sm:text-[11px] shadow-sm transition-all active:scale-95 border border-emerald-500"
              title="Share Website"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{lang === 'kn' ? 'ಶೇರ್ ಮಾಡಿ' : 'Share'}</span>
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
            className="w-full bg-slate-100 border border-slate-200 rounded-full py-2 pl-10 pr-4 text-xs font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white shadow-2xs"
          />

          {showSearchModal && searchQuery.trim() && (
            <SmartSearchModal
              query={searchQuery}
              onQueryChange={setSearchQuery}
              onClose={() => setShowSearchModal(false)}
            />
          )}
        </div>
      </header>

      {/* BODY WITH COLLAPSIBLE SIDEBAR */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto overflow-x-hidden">
        {/* DESKTOP/MOBILE SIDEBAR DRAWER */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 flex">
            <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs" onClick={() => setSidebarOpen(false)} />
            <div className="relative z-10 w-64 bg-slate-900 h-full shadow-2xl">
              <Sidebar isOpen={true} onClose={() => setSidebarOpen(false)} />
            </div>
          </div>
        )}

        {/* PAGE CONTENT */}
        <main className="flex-1 pb-24 md:pb-8 px-3.5 sm:px-6 py-4 sm:py-6 overflow-x-hidden max-w-full">
          {children}
        </main>
      </div>

      {/* ❤️ CONTINUOUS ANIMATED SUPPORTERS & CREATOR WALL */}
      <SupportersMarquee />

      {/* WORLD-CLASS ULTRA-PROFESSIONAL FOOTER */}
      <Footer />

      {/* MOBILE STICKY BOTTOM NAVIGATION BAR */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-2xl px-2 py-1.5 flex items-center justify-around max-w-full overflow-hidden">
        
        {/* Tab 1: Home */}
        <Link
          href="/"
          className={`flex flex-col items-center gap-0.5 px-2.5 py-1 rounded-xl transition-all ${
            pathname === '/' ? 'bg-amber-100 text-amber-950 font-black' : 'text-slate-600 hover:text-slate-900 font-bold'
          }`}
        >
          <Home className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-[10px]">{lang === 'kn' ? 'ಮುಖಪುಟ' : 'Home'}</span>
        </Link>

        {/* Tab 2: All Apps */}
        <Link
          href="/#all-apps"
          className={`flex flex-col items-center gap-0.5 px-2.5 py-1 rounded-xl transition-all ${
            pathname === '/#all-apps' ? 'bg-amber-100 text-amber-950 font-black' : 'text-slate-600 hover:text-slate-900 font-bold'
          }`}
        >
          <Grid className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-[10px]">{lang === 'kn' ? 'ಎಲ್ಲಾ Apps' : 'All Apps'}</span>
        </Link>

        {/* Tab 3: CENTER PROMINENT SEARCH BUTTON */}
        <button
          onClick={() => {
            const input = document.querySelector('header input') as HTMLInputElement;
            if (input) {
              input.focus();
              setShowSearchModal(true);
            }
          }}
          className="flex flex-col items-center justify-center -mt-5 shrink-0"
        >
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-500 text-slate-950 flex items-center justify-center font-black shadow-xl shadow-amber-500/30 border-4 border-white active:scale-95 transition-transform">
            <Search className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-black text-slate-950 mt-0.5">{lang === 'kn' ? 'ಹುಡುಕು' : 'Search'}</span>
        </button>

        {/* Tab 4: SHARE WEBSITE BUTTON */}
        <button
          onClick={() => setShowShareModal(true)}
          className="flex flex-col items-center gap-0.5 px-2.5 py-1 rounded-xl transition-all text-emerald-700 font-extrabold"
        >
          <Share2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
          <span className="text-[10px]">{lang === 'kn' ? 'ಶೇರ್' : 'Share'}</span>
        </button>

        {/* Tab 5: My Account / Admin */}
        <Link
          href="/admin"
          className={`flex flex-col items-center gap-0.5 px-2.5 py-1 rounded-xl transition-all ${
            pathname === '/admin' ? 'bg-amber-100 text-amber-950 font-black' : 'text-slate-600 hover:text-slate-900 font-bold'
          }`}
        >
          <User className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-[10px]">{lang === 'kn' ? 'ನನ್ನ ಖಾತೆ' : 'Account'}</span>
        </Link>
      </nav>

    </div>
  );
};
