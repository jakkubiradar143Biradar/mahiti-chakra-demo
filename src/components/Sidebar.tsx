"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from './LanguageContext';
import {
  Home, Grid, Tag, Sparkles, ShoppingCart, FileText, Wheat,
  GraduationCap, Building2, HeartPulse, Wrench, Coins, Plus, Crown,
  MessageSquare, Send, Youtube, Facebook, Instagram, ChevronRight
} from 'lucide-react';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen = true, onClose }) => {
  const pathname = usePathname();
  const { t, lang } = useLanguage();

  const navItems = [
    { labelKn: 'ಮುಖಪುಟ', labelEn: 'Home', href: '/', icon: Home, badge: null },
    { labelKn: 'ಎಲ್ಲಾ Apps', labelEn: 'All Apps', href: '/#all-apps', icon: Grid, badge: null },
    { labelKn: 'ಕ್ಯಾಟಗರಿಗಳು', labelEn: 'Categories', href: '/#categories', icon: Tag, badge: null },
    { labelKn: 'AI Tools', labelEn: 'AI Tools', href: '/blogs', icon: Sparkles, badge: 'NEW', badgeColor: 'bg-emerald-500 text-white' },
    { labelKn: 'ದಿನಸಿ Calculators', labelEn: 'Grocery Calc', href: '/dinasi-rates', icon: ShoppingCart, badge: null },
    { labelKn: 'ದಾಖಲೆ Tools', labelEn: 'Document Tools', href: '/photo-resizer', icon: FileText, badge: null },
    { labelKn: 'ಕ್ರಯೋಲ೦ Tools', labelEn: 'Krushi Tools', href: '/krushi-rates', icon: Wheat, badge: 'HOT', badgeColor: 'bg-rose-500 text-white' },
    { labelKn: 'ಶೈಕ್ಷಣಿಕ Tools', labelEn: 'Edu Tools', href: '/about', icon: GraduationCap, badge: null },
    { labelKn: 'ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು', labelEn: 'Govt Schemes', href: '/land-converter', icon: Building2, badge: null },
    { labelKn: 'ಆರೋಗ್ಯ Tools', labelEn: 'Health Tools', href: '/tax-calculator', icon: HeartPulse, badge: null },
    { labelKn: 'ಉಪಯುಕ್ತ Tools', labelEn: 'Utility Tools', href: '/age-calculator', icon: Wrench, badge: null },
    { labelKn: 'ಹಣಕಾಸು Calculators', labelEn: 'Finance Calc', href: '/emi-calculator', icon: Coins, badge: null },
    { labelKn: 'ಮತ್ತು ಇನ್ನಷ್ಟು', labelEn: 'And More...', href: '/blogs', icon: Plus, badge: null },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-slate-100 flex flex-col h-full border-r border-slate-800 shrink-0 select-none shadow-xl">
      {/* Brand Logo Header */}
      <div className="p-5 border-b border-slate-800/80 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-400 text-slate-950 flex items-center justify-center font-black shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <span className="text-xl">💛</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-black text-base text-white tracking-tight">MAHITI CHAKRA</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[10px] font-extrabold bg-amber-400/20 text-amber-400 px-2 py-0.5 rounded-md uppercase tracking-wider">
                HELP PORTAL
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* Navigation List */}
      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1 custom-scrollbar">
        {navItems.map((item, idx) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          const label = lang === 'kn' ? item.labelKn : item.labelEn;

          return (
            <Link
              key={idx}
              href={item.href}
              onClick={onClose}
              className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                isActive
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-black'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-slate-400'}`} />
                <span>{label}</span>
              </div>

              {item.badge && (
                <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-md ${item.badgeColor}`}>
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </div>

      {/* Premium Upgrade Card */}
      <div className="p-3 border-t border-slate-800/80">
        <div className="bg-gradient-to-br from-amber-500/20 via-amber-500/10 to-amber-500/5 p-4 rounded-2xl border border-amber-500/30 text-center space-y-2">
          <div className="w-8 h-8 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center mx-auto shadow-md">
            <Crown className="w-4 h-4" />
          </div>
          <div className="space-y-0.5">
            <h4 className="text-xs font-black text-white">Premium Features</h4>
            <p className="text-[10px] text-slate-400">ಜಾಸ್ತಿ ಫೀಚರ್ಸ್ ಅನ್‌ಲಾಕ್ ಮಾಡಿ</p>
          </div>
          <button
            onClick={() => alert(lang === 'kn' ? '👑 ಪ್ರೀಮಿಯಂ ಮೆಂಬರ್‌ಷಿಪ್ ಸದ್ಯದಲ್ಲೇ ಬರಲಿದೆ!' : '👑 Premium Features Coming Soon!')}
            className="w-full py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shadow-md shadow-amber-500/20 transition-transform active:scale-95 flex items-center justify-center gap-1"
          >
            <Crown className="w-3.5 h-3.5" />
            <span>Upgrade Now</span>
          </button>
        </div>

        {/* Follow Us Social Icons */}
        <div className="pt-3 pb-1 space-y-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block px-1">Follow Us</span>
          <div className="flex items-center justify-between px-1 text-slate-400">
            <a href="https://chat.whatsapp.com/demo" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-colors">
              <MessageSquare className="w-3.5 h-3.5" />
            </a>
            <a href="https://t.me/karnatakarates" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-sky-500 hover:text-white flex items-center justify-center transition-colors">
              <Send className="w-3.5 h-3.5" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-rose-600 hover:text-white flex items-center justify-center transition-colors">
              <Youtube className="w-3.5 h-3.5" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors">
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-pink-600 hover:text-white flex items-center justify-center transition-colors">
              <Instagram className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};
