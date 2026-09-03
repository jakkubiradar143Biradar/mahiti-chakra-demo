"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from './LanguageContext';
import { MahitiChakraLogo } from './MahitiChakraLogo';
import {
  Home, Grid, Tag, Sparkles, ShoppingCart, FileText, Wheat,
  GraduationCap, Building2, HeartPulse, Wrench, Coins, Plus, Crown,
  MessageSquare, Send, Youtube, Facebook, Instagram, ChevronRight, X, Download, ShieldCheck
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
    { labelKn: 'ಸರ್ಕಾರಿ ಅರ್ಜಿ (ಪತ್ರ) ಮೇಕರ್', labelEn: 'Govt Letter Maker', href: '/letter-maker', icon: FileText, badge: 'NEW', badgeColor: 'bg-blue-600 text-white font-black' },
    { labelKn: 'ಮನೆ ಖರ್ಚು & ಬಜೆಟ್ ಪ್ಲಾನರ್', labelEn: 'Family Budget', href: '/budget-planner', icon: Coins, badge: 'NEW', badgeColor: 'bg-emerald-600 text-white' },
    { labelKn: 'ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಸ್ಕ್ಯಾನರ್ & ಎಡಿಟರ್', labelEn: 'Screenshot Editor', href: '/screenshot-editor', icon: Wrench, badge: 'HD', badgeColor: 'bg-sky-600 text-white' },
    { labelKn: 'ಅಡುಗೆ ಸಾಮಗ್ರಿ ಅಂದಾಜು', labelEn: 'Catering Estimator', href: '/catering-estimator', icon: ShoppingCart, badge: null },
    { labelKn: 'ಸಾಂಪ್ರದಾಯಿಕ ಕನ್ನಡ ಕ್ಯಾಲೆಂಡರ್', labelEn: 'Kannada Calendar', href: '/kannada-calendar', icon: Sparkles, badge: 'HOT', badgeColor: 'bg-rose-500 text-white font-black' },
    { labelKn: 'ಮಕ್ಕಳ ಸುಂದರ ಹೆಸರು & ಅರ್ಥ', labelEn: 'Baby Names', href: '/baby-names', icon: HeartPulse, badge: null },
    { labelKn: 'ಮದುವೆ ಬಯೋಡೇಟಾ ಮೇಕರ್', labelEn: 'Biodata Maker', href: '/biodata-maker', icon: Crown, badge: null },
    { labelKn: 'ಜಮೀನು ಅಳತೆ & ಸರ್ವೆ ನಕ್ಷೆ', labelEn: 'Land Survey Map', href: '/land-converter', icon: GraduationCap, badge: null },
    { labelKn: 'ತೂಕ ಇಳಿಸುವ ಡಯಟ್ ಚಾರ್ಟ್', labelEn: 'Diet Chart', href: '/diet-chart', icon: HeartPulse, badge: null },
    { labelKn: 'ಡಿಜಿಟಲ್ ಲಗ್ನ ಪತ್ರಿಕೆ ಮೇಕರ್', labelEn: 'Invitation Maker', href: '/invitation-maker', icon: Crown, badge: null },
    { labelKn: 'ಕಿರಣಿ ಸಂತೆ ಲಿಸ್ಟ್ ಮೇಕರ್', labelEn: 'Kirani Sante List', href: '/kirani-sante', icon: ShoppingCart, badge: null },
    { labelKn: 'ಗ್ರಾಮೀಣ ಬಡ್ಡಿ ಲೆಕ್ಕಾಚಾರ', labelEn: 'Village Baddi Calc', href: '/grama-baddi', icon: Coins, badge: 'POPULAR', badgeColor: 'bg-amber-600 text-slate-950 font-black' },
    { labelKn: 'ಮಾಹಿತಿ ಲೇಖನಗಳು (Blogs)', labelEn: 'Help Articles', href: '/blogs', icon: Plus, badge: null },
  ];

  return (
    <aside className="w-64 bg-white text-slate-900 flex flex-col h-full border-r-2 border-amber-300 shrink-0 select-none shadow-2xl relative z-50">
      
      {/* Brand Logo Header */}
      <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-amber-500/10 via-white to-amber-500/5">
        <Link href="/" onClick={onClose} className="flex items-center gap-2.5 group">
          <MahitiChakraLogo size={42} className="w-10 h-10 group-hover:scale-105 transition-transform" />
          <div className="leading-tight">
            <span className="font-black text-sm text-slate-950 block tracking-tight">MAHITI CHAKRA</span>
            <span className="text-[9px] font-black text-amber-800 bg-amber-100 border border-amber-300 px-1.5 py-0.2 rounded uppercase">
              HELP PORTAL & APPS
            </span>
          </div>
        </Link>

        {onClose && (
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold transition-colors"
            title="Close Drawer Menu"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Navigation List */}
      <div className="flex-1 overflow-y-auto py-3 px-3 space-y-1 custom-scrollbar">
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
                  ? 'bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-black shadow-md border border-amber-300'
                  : 'text-slate-700 hover:bg-amber-50 hover:text-amber-950 font-semibold'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-amber-600'}`} />
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

      {/* 📲 PWA INSTALL & FREE APP BANNER CARD */}
      <div className="p-3 border-t border-slate-100 bg-slate-50/80 space-y-3">
        <div className="bg-gradient-to-br from-amber-500/15 via-white to-amber-500/10 p-3.5 rounded-2xl border-2 border-amber-400/60 text-center space-y-2 shadow-xs">
          <div className="flex items-center justify-center gap-1.5 text-xs font-black text-slate-950">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{lang === 'kn' ? '100% ಉಚಿತ ವೆಬ್ ಆಪ್' : '100% Free App'}</span>
          </div>
          <p className="text-[10px] font-bold text-slate-600 leading-snug">
            {lang === 'kn' ? 'ಮೊಬೈಲ್ ಸ್ಕ್ರೀನ್‌ಗೆ 1-ಕ್ಲಿಕ್‌ನಲ್ಲಿ ಆಪ್ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಿ' : 'Install official app on phone screen in 1 click'}
          </p>
          <button
            onClick={() => {
              if (onClose) onClose();
              const pwaBtn = document.getElementById('global-pwa-install-btn');
              if (pwaBtn) pwaBtn.click();
            }}
            className="w-full py-2 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-600 hover:to-amber-500 text-slate-950 font-black text-xs shadow-md border border-amber-300 transition-all active:scale-95 flex items-center justify-center gap-1.5"
          >
            <Download className="w-4 h-4 text-slate-950" />
            <span>{lang === 'kn' ? '📲 ಆಪ್ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಿ' : '📲 Install App Now'}</span>
          </button>
        </div>

        {/* Follow Us Social Media Links */}
        <div className="space-y-1.5">
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider block px-1">
            {lang === 'kn' ? 'ನಮ್ಮನ್ನು ಫಾಲೋ ಮಾಡಿ:' : 'Follow Us:'}
          </span>
          <div className="flex items-center justify-between px-1 text-slate-600">
            <a href="https://chat.whatsapp.com/demo" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-colors shadow-2xs">
              <MessageSquare className="w-4 h-4" />
            </a>
            <a href="https://t.me/karnatakarates" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-xl bg-sky-50 border border-sky-200 text-sky-600 hover:bg-sky-600 hover:text-white flex items-center justify-center transition-colors shadow-2xs">
              <Send className="w-4 h-4" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 hover:bg-rose-600 hover:text-white flex items-center justify-center transition-colors shadow-2xs">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors shadow-2xs">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-xl bg-pink-50 border border-pink-200 text-pink-600 hover:bg-pink-600 hover:text-white flex items-center justify-center transition-colors shadow-2xs">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

    </aside>
  );
};
