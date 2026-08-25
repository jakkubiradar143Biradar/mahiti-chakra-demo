"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';
import {
  Menu, Search, Sun, Moon, Globe, LogIn, UserPlus, X, ShieldCheck
} from 'lucide-react';

interface NavbarProps {
  onToggleSidebar?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
  const { t, lang, setLang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchModal, setShowSearchModal] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-xs px-4 sm:px-6 py-3 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Sidebar Hamburger Toggle + Mobile Brand */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            title="Toggle Sidebar Menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Logo visible only on mobile/tablet */}
          <Link href="/" className="md:hidden flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black">
              💛
            </div>
            <span className="font-black text-sm text-slate-900 tracking-tight">MAHITI CHAKRA</span>
          </Link>
        </div>

        {/* Center: Top Rounded Search Bar */}
        <div className="flex-1 max-w-xl hidden md:block relative">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder={lang === 'kn' ? 'ಹುಡುಕಿ... Apps, Calculators, Tools' : 'Search... Apps, Calculators, Tools'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSearchModal(true)}
            className="w-full bg-slate-100/80 border border-slate-200 rounded-full py-2.5 pl-11 pr-4 text-xs font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all shadow-xs"
          />
        </div>

        {/* Right: Theme Toggle, Language Switcher, Login & Sign Up */}
        <div className="flex items-center gap-2.5">
          {/* Theme Toggle Icon */}
          <button
            onClick={() => alert(lang === 'kn' ? '☀️ ಲೈಟ್ ಮೋಡ್ ಸಕ್ರಿಯವಾಗಿದೆ!' : '☀️ Light Mode Active!')}
            className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 hover:text-amber-600 transition-colors"
            title="Toggle Light/Dark Theme"
          >
            <Sun className="w-5 h-5 text-amber-500" />
          </button>

          {/* Language Switcher Pill */}
          <div className="relative">
            <button
              onClick={() => setLang(lang === 'kn' ? 'en' : 'kn')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 font-extrabold text-xs hover:bg-slate-200 transition-colors shadow-xs"
            >
              <Globe className="w-3.5 h-3.5 text-amber-600" />
              <span>{lang === 'kn' ? 'ಕನ್ನಡ (KN)' : 'English (EN)'}</span>
            </button>
          </div>

          {/* Admin Login Button */}
          <Link
            href="/admin"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-amber-400 font-black text-xs shadow-md transition-all active:scale-95 border border-amber-500/30"
          >
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Admin</span>
          </Link>

          {/* User Sign Up Pill Button */}
          <button
            onClick={() => alert(lang === 'kn' ? '✨ ಉಚಿತ ಮೆಂಬರ್‌ಷಿಪ್ ಸೈನ್-ಅಪ್ ಸದ್ಯದಲ್ಲೇ ಬರಲಿದೆ!' : '✨ Sign Up Coming Soon!')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs shadow-md shadow-amber-500/20 transition-all active:scale-95"
          >
            <UserPlus className="w-4 h-4" />
            <span>Sign Up</span>
          </button>
        </div>
      </div>
    </header>
  );
};
