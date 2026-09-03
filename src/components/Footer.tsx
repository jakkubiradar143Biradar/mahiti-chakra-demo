"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';
import { defaultAdminSettings } from '@/lib/ratesStore';
import { AdminSettings } from '@/lib/types';
import {
  Coins, ShieldCheck, Heart, Newspaper, Shield, FileText, Info, Mail,
  Send, MessageSquare, Youtube, Instagram, ArrowUp, Lock, Sparkles, CheckCircle2,
  ChevronRight, ExternalLink, Zap
} from 'lucide-react';
import { MahitiChakraLogo } from './MahitiChakraLogo';

export const Footer: React.FC = () => {
  const { t, lang } = useLanguage();
  const [adminSettings, setAdminSettings] = useState<AdminSettings>(defaultAdminSettings);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('admin_settings');
      if (saved) {
        try {
          setAdminSettings({ ...defaultAdminSettings, ...JSON.parse(saved) });
        } catch (e) {
          console.error(e);
        }
      }
    }
  }, []);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-50 text-slate-900 text-xs border-t-2 border-amber-300 mt-12 select-none relative z-30 overflow-hidden">
      
      {/* TOP COMMUNITY & SOCIAL MEDIA HERO BANNER (THEME MATCHED LIGHT GOLD CARD) */}
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 pt-8 pb-4 relative z-10">
        <div className="bg-gradient-to-br from-amber-500/15 via-white to-amber-500/10 text-slate-950 rounded-3xl p-5 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border-2 border-amber-400/50 relative overflow-hidden">
          
          {/* Left Hero Text */}
          <div className="flex items-center gap-3.5 text-center md:text-left w-full md:w-auto">
            <MahitiChakraLogo size={56} className="w-14 h-14 shrink-0" />
            <div className="space-y-1 text-left">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base sm:text-lg font-black text-slate-950 tracking-tight">
                  MAHITI CHAKRA HELP PORTAL
                </h3>
                <span className="text-[9px] font-black text-slate-950 bg-amber-400 px-2.5 py-0.5 rounded-full uppercase shadow-2xs border border-amber-300">
                  VERIFIED 100% FREE
                </span>
              </div>
              <p className="text-xs font-bold text-slate-600 leading-snug">
                {lang === 'kn' ? 'ಕರ್ನಾಟಕದ #1 ಡಿಜಿಟಲ್ ಸಹಾಯ, ಲೈವ್ ದರಗಳು & ಆನ್‌ಲೈನ್ ಉಪಕರಣಗಳ ವೇದಿಕೆ.' : "Karnataka's #1 Digital Help, Live Rates & Online Tools Hub."}
              </p>
            </div>
          </div>

          {/* Social Media Buttons (Pro Theme-Matched Row) */}
          <div className="flex items-center gap-2.5 flex-wrap justify-center w-full md:w-auto">
            {adminSettings.whatsappGroupUrl && (
              <a
                href={adminSettings.whatsappGroupUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-md border border-emerald-500 transition-all active:scale-95 min-w-[130px]"
              >
                <MessageSquare className="w-4 h-4 text-emerald-100" />
                <span>WhatsApp Group</span>
              </a>
            )}

            {adminSettings.telegramGroupUrl && (
              <a
                href={adminSettings.telegramGroupUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-black text-xs shadow-md border border-sky-500 transition-all active:scale-95 min-w-[130px]"
              >
                <Send className="w-4 h-4 text-sky-100" />
                <span>Telegram Channel</span>
              </a>
            )}

            {adminSettings.youtubeGroupUrl && (
              <a
                href={adminSettings.youtubeGroupUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs shadow-md border border-rose-500 transition-all active:scale-95 min-w-[130px]"
              >
                <Youtube className="w-4 h-4 text-rose-100" />
                <span>YouTube Channel</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* 4 COLUMNS MAIN FOOTER GRID (LIGHT MATCHED CARDS) */}
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          
          {/* Col 1: About Portal Card */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs space-y-3">
            <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider flex items-center gap-1.5 border-b-2 border-amber-400 pb-2 w-fit">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>{lang === 'kn' ? 'ಮಾಹಿತಿ ಚಕ್ರ ಬಗ್ಗೆ' : 'About Mahiti Chakra'}</span>
            </h4>
            <p className="text-slate-600 text-xs leading-relaxed font-semibold">
              {lang === 'kn'
                ? 'ಕರ್ನಾಟಕದ ಜನತೆಗೆ ಸೂಕ್ತ ಸಮಯದಲ್ಲಿ ನಿಖರವಾದ ದೈನಂದಿನ ದರಗಳು, ಸಾಲದ EMI ಲೆಕ್ಕಾಚಾರ, ವಯಸ್ಸು ಲೆಕ್ಕಾಚಾರ ಹಾಗೂ ಕೃಷಿ ಬೆಳೆ ದರಗಳನ್ನು ಉಚಿತವಾಗಿ ನೀಡುವ ಏಕೈಕ ಸಹಾಯ ಪೋರ್ಟಲ್.'
                : 'Free Karnataka portal providing accurate daily market rates, loan calculators, age calculators, APMC crop prices & document tools.'}
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-50 border border-emerald-200 text-[11px] font-bold text-emerald-800">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% Free & Encrypted Service</span>
            </div>
          </div>

          {/* Col 2: Popular Tools Card */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs space-y-3">
            <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider border-b-2 border-amber-400 pb-2 w-fit">
              {lang === 'kn' ? 'ಪ್ರಮುಖ ಉಪಕರಣಗಳು' : 'Popular Tools'}
            </h4>
            <ul className="space-y-2.5 text-xs font-bold text-slate-700">
              <li>
                <Link href="/letter-maker" className="hover:text-amber-700 transition-colors flex items-center gap-2 group">
                  <div className="w-5 h-5 rounded-md bg-amber-100 text-amber-800 flex items-center justify-center font-black text-[10px] group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    ➜
                  </div>
                  <span>{lang === 'kn' ? 'ಸರ್ಕಾರಿ ಅರ್ಜಿ (ಪತ್ರ) ಮೇಕರ್' : 'Govt Letter Maker'}</span>
                </Link>
              </li>
              <li>
                <Link href="/budget-planner" className="hover:text-amber-700 transition-colors flex items-center gap-2 group">
                  <div className="w-5 h-5 rounded-md bg-amber-100 text-amber-800 flex items-center justify-center font-black text-[10px] group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    ➜
                  </div>
                  <span>{lang === 'kn' ? 'ಮನೆ ಖರ್ಚು & ಬಜೆಟ್ ಪ್ಲಾನರ್' : 'Family Budget Planner'}</span>
                </Link>
              </li>
              <li>
                <Link href="/screenshot-editor" className="hover:text-amber-700 transition-colors flex items-center gap-2 group">
                  <div className="w-5 h-5 rounded-md bg-amber-100 text-amber-800 flex items-center justify-center font-black text-[10px] group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    ➜
                  </div>
                  <span>{lang === 'kn' ? 'ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಎಡಿಟರ್' : 'Screenshot OCR Editor'}</span>
                </Link>
              </li>
              <li>
                <Link href="/catering-estimator" className="hover:text-amber-700 transition-colors flex items-center gap-2 group">
                  <div className="w-5 h-5 rounded-md bg-amber-100 text-amber-800 flex items-center justify-center font-black text-[10px] group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    ➜
                  </div>
                  <span>{lang === 'kn' ? 'ಅಡುಗೆ ಸಾಮಗ್ರಿ ಅಂದಾಜು' : 'Catering Estimator'}</span>
                </Link>
              </li>
              <li>
                <Link href="/kannada-calendar" className="hover:text-amber-700 transition-colors flex items-center gap-2 group">
                  <div className="w-5 h-5 rounded-md bg-amber-100 text-amber-800 flex items-center justify-center font-black text-[10px] group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    ➜
                  </div>
                  <span>{lang === 'kn' ? 'ಸಾಂಪ್ರದಾಯಿಕ ಕನ್ನಡ ಕ್ಯಾಲೆಂಡರ್' : 'Kannada Calendar'}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Information & Legal Card */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs space-y-3">
            <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider border-b-2 border-amber-400 pb-2 w-fit">
              {lang === 'kn' ? 'ಮಾಹಿತಿ & ನಿಯಮಗಳು' : 'Information & Legal'}
            </h4>
            <ul className="space-y-2 text-xs font-bold text-slate-700">
              <li>
                <Link href="/about" className="hover:text-amber-700 transition-colors flex items-center gap-2">
                  <Info className="w-4 h-4 text-amber-600" />
                  <span>{lang === 'kn' ? 'ನಮ್ಮ ಬಗ್ಗೆ (About Us)' : 'About Us'}</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-700 transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-600" />
                  <span>{lang === 'kn' ? 'ಸಂಪರ್ಕಿಸಿ (Contact Us)' : 'Contact Us'}</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-amber-700 transition-colors flex items-center gap-2">
                  <Shield className="w-4 h-4 text-slate-500" />
                  <span>{lang === 'kn' ? 'ಖಾಸಗಿತನದ ನೀತಿ (Privacy Policy)' : 'Privacy Policy'}</span>
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-amber-700 transition-colors flex items-center gap-2">
                  <FileText className="w-4 h-4 text-slate-500" />
                  <span>{lang === 'kn' ? 'ನಿಯಮಗಳು (Terms & Conditions)' : 'Terms & Conditions'}</span>
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-amber-700 transition-colors flex items-center gap-2">
                  <Lock className="w-4 h-4 text-slate-500" />
                  <span>{lang === 'kn' ? 'ಹಕ್ಕುತ್ಯಾಗ (Disclaimer)' : 'Disclaimer'}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Daily Rates & Quick Links Card */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs space-y-3">
            <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider border-b-2 border-amber-400 pb-2 w-fit">
              {lang === 'kn' ? 'ಇತರೆ ಸೇವೆಗಳು' : 'Other Services'}
            </h4>
            <ul className="space-y-2 text-xs font-bold text-slate-700">
              <li>
                <Link href="/biodata-maker" className="hover:text-amber-700 transition-colors flex items-center gap-2">
                  <Heart className="w-4 h-4 text-amber-600" />
                  <span>{lang === 'kn' ? 'ಮದುವೆ ಬಯೋಡೇಟಾ' : 'Marriage Biodata'}</span>
                </Link>
              </li>
              <li>
                <Link href="/land-converter" className="hover:text-amber-700 transition-colors flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-600" />
                  <span>{lang === 'kn' ? 'ಜಮೀನು ಸರ್ವೆ ನಕ್ಷೆ' : 'Land Survey Map'}</span>
                </Link>
              </li>
              <li>
                <Link href="/grama-baddi" className="hover:text-amber-700 transition-colors flex items-center gap-2">
                  <Coins className="w-4 h-4 text-amber-600" />
                  <span>{lang === 'kn' ? 'ಗ್ರಾಮೀಣ ಬಡ್ಡಿ ಲೆಕ್ಕಾಚಾರ' : 'Village Baddi Calc'}</span>
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-amber-700 transition-colors flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>{lang === 'kn' ? 'ಮಾಹಿತಿ ಲೇಖನಗಳು (Blogs)' : 'Help Articles'}</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM COPYRIGHT & SECURITY FOOTER BAR */}
      <div className="border-t border-slate-200 bg-slate-100 py-4 px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-600 font-extrabold">
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span>© {new Date().getFullYear()} MAHITI CHAKRA PORTAL.</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-amber-800">💛 Crafted with Pride for Karnataka</span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/admin"
              className="text-slate-700 hover:text-amber-800 transition-colors flex items-center gap-1 bg-white px-2.5 py-1 rounded-lg border border-slate-300 shadow-2xs"
            >
              <Lock className="w-3 h-3 text-amber-600" />
              <span>Admin Portal</span>
            </Link>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white hover:bg-slate-200 text-amber-800 transition-all border border-slate-300 shadow-2xs flex items-center gap-1"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4 text-amber-600" />
              <span className="text-[10px] font-black uppercase">Top</span>
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
};
