'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageContext';
import { hundredAppsRegistry } from '@/lib/appsRegistry';
import {
  Sparkles, Globe, ShieldCheck, HeartHandshake, LifeBuoy, Menu, X, Search,
  LayoutGrid, ChevronRight, Star, Zap, Play, ArrowRight, Shield, Award, Landmark, Cake, Receipt, TrendingUp, Image as ImageIcon, Car, Sun, Notebook, ShoppingBag, Sprout, ShoppingCart
} from 'lucide-react';

export function Navbar() {
  const { lang, toggleLang, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuSearch, setMenuSearch] = useState('');

  const menuFilteredApps = hundredAppsRegistry.filter((app) => {
    const title = lang === 'kn' ? app.titleKn : app.titleEn;
    return title.toLowerCase().includes(menuSearch.toLowerCase());
  });

  const categories = [
    { id: 'rates', titleKn: '🟡 ಲೈವ್ ದರಗಳು & ಮಾರುಕಟ್ಟೆ', titleEn: '🟡 Live Rates & Markets' },
    { id: 'krushi', titleKn: '🌾 ಕೃಷಿ & APMC ಬೆಳೆ ಧಾರಣೆ', titleEn: '🌾 Krushi APMC Rates' },
    { id: 'dinasi', titleKn: '🛒 ದೈನಂದಿನ ದಿನಸಿ ಬೆಲೆಗಳು', titleEn: '🛒 Grocery Prices' },
    { id: 'finance', titleKn: '🧮 ಫೈನಾನ್ಸ್ & ತೆರಿಗೆ ಕ್ಯಾಲ್ಕುಲೇಟರ್‌ಗಳು', titleEn: '🧮 Finance & Tax Hub' },
    { id: 'utility', titleKn: '🖼️ ಉದ್ಯೋಗ ದಾಖಲೆ & ಟೂಲ್ಸ್', titleEn: '🖼️ Job & Utility Tools' },
    { id: 'converters', titleKn: '📐 ಜಮೀನು ಅಳತೆ & ಪರಿವರ್ತನೆ', titleEn: '📐 Land Converter' },
    { id: 'time', titleKn: '📅 ಪಂಚಾಂಗ & ಸಮಯ', titleEn: '📅 Panchanga & Time' },
  ];

  const handleAppClick = (appId: string) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById('launched-app-window') || document.getElementById(`${appId}-sec`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
  };

  return (
    <>
      {/* 🍏 APPLE / STRIPE STYLE CLEAN LIGHT NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 text-slate-900 shadow-sm spring-transition">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* 🛡️ BRAND LOGO - CLEAN EMBLEM */}
            <Link href="/" className="flex items-center gap-3.5 group shrink-0 spring-transition">
              <div className="relative">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-400 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/20 group-hover:scale-110 spring-transition border border-amber-300">
                  <HeartHandshake className="w-6 h-6 sm:w-7 sm:h-7 text-slate-950" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-emerald-500 text-white rounded-full flex items-center justify-center font-black text-[9px] border-2 border-white shadow-md">
                  ✓
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="font-black text-xl tracking-tight text-slate-950 group-hover:text-amber-600 spring-transition">
                    MAHITI CHAKRA
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1 text-[9px] font-black uppercase px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 shadow-xs">
                    <LifeBuoy className="w-3 h-3 text-amber-600" /> HELP PORTAL
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 flex items-center gap-1">
                  <span className="text-emerald-600 font-extrabold">help.mahitichakra.in</span> • {lang === 'kn' ? 'ಉಚಿತ ಡಿಜಿಟಲ್ ಪೋರ್ಟಲ್' : 'Free Help Hub'}
                </span>
              </div>
            </Link>

            {/* Right Header Navigation & Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              
              {/* Navigation Links */}
              <nav className="hidden md:flex items-center gap-6 text-sm font-extrabold text-slate-700">
                <Link href="/" className="hover:text-amber-600 spring-transition hover:scale-105">
                  {t.navHome}
                </Link>
                <Link href="/blogs" className="hover:text-amber-600 spring-transition hover:scale-105">
                  {t.navBlogs}
                </Link>
                <Link href="/admin" className="hover:text-amber-600 spring-transition hover:scale-105">
                  {t.navAdmin}
                </Link>
              </nav>

              {/* Language Switcher */}
              <button
                onClick={toggleLang}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-900 text-xs font-black shadow-xs spring-transition hover:scale-105 active:scale-95"
                title="Switch Language / ಭಾಷೆ ಬದಲಾಯಿಸಿ"
              >
                <Globe className="w-4 h-4 text-amber-600 animate-spin-slow" />
                <span>{lang === 'kn' ? 'ಕನ್ನಡ (KN)' : 'English (EN)'}</span>
              </button>

              {/* 🚀 MEGA MENU BUTTON */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-amber-400 font-black text-xs shadow-md spring-transition hover:scale-105 active:scale-95"
              >
                <LayoutGrid className="w-4 h-4" />
                <span className="hidden xs:inline">{lang === 'kn' ? 'ಎಲ್ಲಾ ಆಪ್‌ಗಳು (33+)' : 'All Apps (33+)'}</span>
                <span className="xs:hidden">{lang === 'kn' ? 'ಮೆನು' : 'Menu'}</span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* 📱 STRIPE-STYLE FLUID SLIDE-OVER MEGA MENU DRAWER */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/40 backdrop-blur-sm animate-fadeIn">
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-2xl bg-white border-l border-slate-200 text-slate-900 shadow-2xl flex flex-col justify-between animate-slideOver">
              
              {/* Menu Drawer Header */}
              <div className="p-6 border-b border-slate-200 bg-slate-50/80 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-400 text-slate-950 flex items-center justify-center font-black shadow-md">
                      <LayoutGrid className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-black text-slate-950">
                        {lang === 'kn' ? 'ಎಲ್ಲಾ ಡಿಜಿಟಲ್ ಆಪ್‌ಗಳ ಪಟ್ಟಿ' : 'All Digital Apps Directory'}
                      </h2>
                      <p className="text-xs text-amber-700 font-bold">
                        Mahiti Chakra Enterprise Portal • 33+ Free Tools
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-xl bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-950 border border-slate-300 spring-transition active:scale-90 shadow-xs"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Search Bar inside Menu */}
                <div className="relative">
                  <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder={lang === 'kn' ? 'ಆಪ್ ಹುಡುಕಿ (ಉದಾ: ಚಿನ್ನ, EMI, GST, ಪಂಚಾಂಗ)...' : 'Search app (e.g. Gold, EMI, GST)...'}
                    value={menuSearch}
                    onChange={(e) => setMenuSearch(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl py-3 pl-12 pr-4 text-xs font-bold text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-500/20 spring-transition shadow-sm"
                  />
                </div>
              </div>

              {/* Menu Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-8 no-scrollbar bg-white">
                
                {/* Quick Navigation Links */}
                <div className="grid grid-cols-3 gap-3">
                  <Link
                    href="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1 hover:border-amber-500 hover:scale-105 spring-transition shadow-xs"
                  >
                    <span className="text-lg block">🏠</span>
                    <span className="text-xs font-black text-slate-800 block">{t.navHome}</span>
                  </Link>
                  <Link
                    href="/blogs"
                    onClick={() => setIsMenuOpen(false)}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1 hover:border-amber-500 hover:scale-105 spring-transition shadow-xs"
                  >
                    <span className="text-lg block">📰</span>
                    <span className="text-xs font-black text-slate-800 block">{t.navBlogs}</span>
                  </Link>
                  <Link
                    href="/admin"
                    onClick={() => setIsMenuOpen(false)}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1 hover:border-amber-500 hover:scale-105 spring-transition shadow-xs"
                  >
                    <span className="text-lg block">🔐</span>
                    <span className="text-xs font-black text-slate-800 block">{t.navAdmin}</span>
                  </Link>
                </div>

                {/* Grouped Apps List */}
                {categories.map((cat) => {
                  const categoryApps = menuFilteredApps.filter((a) => a.category === cat.id);
                  if (categoryApps.length === 0) return null;

                  return (
                    <div key={cat.id} className="space-y-3">
                      <h3 className="text-xs font-black text-amber-800 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200 uppercase tracking-wider inline-block">
                        {lang === 'kn' ? cat.titleKn : cat.titleEn} ({categoryApps.length})
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {categoryApps.map((app) => (
                          <div
                            key={app.id}
                            onClick={() => handleAppClick(app.id)}
                            className="p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-amber-500 hover:shadow-lg cursor-pointer flex items-center justify-between gap-3 group spring-transition hover:scale-[1.02]"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <div className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${app.color} text-white flex items-center justify-center font-black shrink-0 shadow-md group-hover:scale-110 spring-transition`}>
                                <Sparkles className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <h4 className="text-xs font-black text-slate-900 group-hover:text-amber-600 spring-transition truncate">
                                  {lang === 'kn' ? app.titleKn : app.titleEn}
                                </h4>
                                <span className="text-[10px] text-slate-500 font-medium block truncate">
                                  {lang === 'kn' ? app.descKn : app.descEn}
                                </span>
                              </div>
                            </div>

                            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 spring-transition shrink-0" />
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}

              </div>

              {/* Menu Drawer Footer */}
              <div className="p-4 border-t border-slate-200 bg-slate-50 text-center text-[11px] text-slate-500 font-bold">
                Mahiti Chakra Enterprise Digital Portal • help.mahitichakra.in
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
