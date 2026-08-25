"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';
import { defaultAdminSettings } from '@/lib/ratesStore';
import { AdminSettings } from '@/lib/types';
import {
  Coins, ShieldCheck, Heart, Newspaper, Shield, FileText, Info, Mail,
  Send, MessageSquare, Youtube, Instagram, ArrowUp, Lock, Sparkles, CheckCircle2
} from 'lucide-react';

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
    <footer className="bg-white text-slate-800 text-xs border-t-2 border-slate-200/90 mt-12 select-none relative z-30">
      
      {/* TOP COMMUNITY & SOCIAL MEDIA BANNER (LIGHT PREMIUM CARD) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-400 text-slate-950 flex items-center justify-center font-black text-xl shadow-lg shadow-amber-500/20 shrink-0">
              💛
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-white tracking-tight flex items-center justify-center md:justify-start gap-2">
                <span>MAHITI CHAKRA HELP PORTAL</span>
                <span className="text-[9px] font-black text-slate-950 bg-amber-400 px-2.5 py-0.5 rounded-full uppercase">
                  VERIFIED 100% FREE
                </span>
              </h3>
              <p className="text-xs font-semibold text-slate-400 mt-0.5">
                {lang === 'kn' ? 'ಕರ್ನಾಟಕದ #1 ಡಿಜಿಟಲ್ ಸಹಾಯ, ಲೈವ್ ದರಗಳು & ಆನ್‌ಲೈನ್ ಉಪಕರಣಗಳ ವೇದಿಕೆ.' : "Karnataka's #1 Digital Help, Live Rates & Online Tools Hub."}
              </p>
            </div>
          </div>

          {/* Social Media Group Buttons */}
          <div className="flex items-center gap-2.5 flex-wrap justify-center">
            {adminSettings.whatsappGroupUrl && (
              <a
                href={adminSettings.whatsappGroupUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-md transition-all active:scale-95 border border-emerald-500"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Group</span>
              </a>
            )}

            {adminSettings.telegramGroupUrl && (
              <a
                href={adminSettings.telegramGroupUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-black text-xs shadow-md transition-all active:scale-95 border border-sky-500"
              >
                <Send className="w-4 h-4" />
                <span>Telegram Channel</span>
              </a>
            )}

            {adminSettings.youtubeGroupUrl && (
              <a
                href={adminSettings.youtubeGroupUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs shadow-md transition-all active:scale-95 border border-rose-500"
              >
                <Youtube className="w-4 h-4" />
                <span>YouTube Channel</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* 4 COLUMNS MAIN FOOTER GRID (LIGHT MODE PREMIUM) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Col 1: About Portal & Trust Marker */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider flex items-center gap-1.5 border-b border-amber-400 pb-1.5 w-fit">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>{lang === 'kn' ? 'ಮಾಹಿತಿ ಚಕ್ರ ಬಗ್ಗೆ' : 'About Mahiti Chakra'}</span>
            </h4>
            <p className="text-slate-600 text-xs leading-relaxed font-semibold">
              {lang === 'kn'
                ? 'ಕರ್ನಾಟಕದ ಜನತೆಗೆ ಸೂಕ್ತ ಸಮಯದಲ್ಲಿ ನಿಖರವಾದ ದೈನಂದಿನ ದರಗಳು, ಸಾಲದ EMI ಲೆಕ್ಕಾಚಾರ, ವಯಸ್ಸು ಲೆಕ್ಕಾಚಾರ ಹಾಗೂ ಕೃಷಿ ಬೆಳೆ ದರಗಳನ್ನು ಉಚಿತವಾಗಿ ನೀಡುವ ಏಕೈಕ ಸಹಾಯ ಪೋರ್ಟಲ್.'
                : 'Free Karnataka portal providing accurate daily market rates, loan calculators, age calculators, APMC crop prices & document tools.'}
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-[11px] font-bold text-emerald-800">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% Free & Encrypted Service</span>
            </div>
          </div>

          {/* Col 2: Popular Calculators & Tools */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider border-b border-amber-400 pb-1.5 w-fit">
              {lang === 'kn' ? 'ಪ್ರಮುಖ ಉಪಕರಣಗಳು' : 'Popular Tools'}
            </h4>
            <ul className="space-y-2 text-xs font-bold text-slate-700">
              <li>
                <Link href="/emi-calculator" className="hover:text-amber-700 transition-colors">
                  ➔ {lang === 'kn' ? 'EMI ಸಾಲದ ಲೆಕ್ಕಾಚಾರ' : 'Home/Car Loan EMI Calc'}
                </Link>
              </li>
              <li>
                <Link href="/age-calculator" className="hover:text-amber-700 transition-colors">
                  ➔ {lang === 'kn' ? 'ವಯಸ್ಸು ಲೆಕ್ಕಾಚಾರ ಟೂಲ್' : 'Exact Age Calculator'}
                </Link>
              </li>
              <li>
                <Link href="/gold-rates" className="hover:text-amber-700 transition-colors">
                  ➔ {lang === 'kn' ? 'ಇಂದಿನ ಚಿನ್ನ & ಬೆಳ್ಳಿ ದರ' : 'Live 24K/22K Gold Rates'}
                </Link>
              </li>
              <li>
                <Link href="/krushi-rates" className="hover:text-amber-700 transition-colors">
                  ➔ {lang === 'kn' ? 'ಕೃಷಿ & APMC ಬೆಳೆ ದರ' : 'Karnataka APMC Crop Prices'}
                </Link>
              </li>
              <li>
                <Link href="/photo-resizer" className="hover:text-amber-700 transition-colors">
                  ➔ {lang === 'kn' ? 'PDF to JPG & Photo Resizer' : '20KB Passport Photo Resizer'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Policy Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider border-b border-amber-400 pb-1.5 w-fit">
              {lang === 'kn' ? 'ಮಾಹಿತಿ & ನಿಯಮಗಳು' : 'Information & Legal'}
            </h4>
            <ul className="space-y-2 text-xs font-bold text-slate-700">
              <li>
                <Link href="/about" className="hover:text-amber-700 transition-colors flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-amber-600" />
                  <span>{lang === 'kn' ? 'ನಮ್ಮ ಬಗ್ಗೆ (About Us)' : 'About Us'}</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-700 transition-colors flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-amber-600" />
                  <span>{lang === 'kn' ? 'ಸಂಪರ್ಕಿಸಿ (Contact Us)' : 'Contact Us'}</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-amber-700 transition-colors flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-slate-500" />
                  <span>{lang === 'kn' ? 'ಖಾಸಗಿತನದ ನೀತಿ (Privacy Policy)' : 'Privacy Policy'}</span>
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-amber-700 transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-slate-500" />
                  <span>{lang === 'kn' ? 'ನಿಯಮಗಳು (Terms & Conditions)' : 'Terms & Conditions'}</span>
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-amber-700 transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-slate-500" />
                  <span>{lang === 'kn' ? 'ಹಕ್ಕುತ್ಯಾಗ (Disclaimer)' : 'Disclaimer'}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Master Admin Control Link */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider border-b border-amber-400 pb-1.5 w-fit">
              {lang === 'kn' ? 'ಅಡ್ಮಿನ್ ವ್ಯವಸ್ಥೆ' : 'Admin Control'}
            </h4>
            <div className="space-y-2">
              <Link
                href="/admin"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-amber-400 font-black text-xs shadow-lg transition-transform active:scale-95 border border-amber-400"
              >
                <Lock className="w-4 h-4" />
                <span>{lang === 'kn' ? '🔒 ಅಡ್ಮಿನ್ ಲಾಗಿನ್ (Admin)' : '🔒 Admin Portal'}</span>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM COPYRIGHT & SCROLL TO TOP BAR (LIGHT MODE) */}
      <div className="border-t border-slate-200 bg-slate-100 py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 font-bold gap-3">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} MAHITI CHAKRA HELP PORTAL. {lang === 'kn' ? 'ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.' : 'All Rights Reserved.'}
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> for Karnataka
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white hover:bg-slate-200 text-slate-900 border border-slate-300 shadow-2xs transition-all flex items-center gap-1 font-black text-[11px]"
              title="Scroll to Top"
            >
              <span>{lang === 'kn' ? 'ಮೇಲಕ್ಕೆ' : 'Top'}</span>
              <ArrowUp className="w-3.5 h-3.5 text-amber-600" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
