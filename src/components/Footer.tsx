"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';
import { Coins, ShieldCheck, Heart, Newspaper, Shield, FileText, Info, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, lang } = useLanguage();
  const [isEmbedded, setIsEmbedded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const search = window.location.search;
      if (search.includes('embed=true')) {
        setIsEmbedded(true);
      }
    }
  }, []);

  // Hide footer when embedded inside WordPress iframe (e.g. ?embed=true)
  if (isEmbedded) return null;

  return (
    <footer className="bg-slate-900 text-slate-400 text-sm border-t border-slate-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand & Subtitle */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 to-yellow-400 flex items-center justify-center">
                <Coins className="w-5 h-5 text-slate-950" />
              </div>
              <span className="text-lg font-bold text-white">
                Rates & Calculators Hub
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              {t.siteSubTitle}
            </p>
            <p className="text-slate-500 text-[11px] leading-normal italic">
              {t.footerDisclaimer}
            </p>
          </div>

          {/* Col 2: Calculators */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/emi-calculator" className="hover:text-amber-400 transition-colors">
                  {t.navEmi}
                </Link>
              </li>
              <li>
                <Link href="/age-calculator" className="hover:text-amber-400 transition-colors">
                  {t.navAge}
                </Link>
              </li>
              <li>
                <Link href="/gst-calculator" className="hover:text-amber-400 transition-colors">
                  {t.navGst}
                </Link>
              </li>
              <li>
                <Link href="/sip-calculator" className="hover:text-amber-400 transition-colors">
                  {t.navSip}
                </Link>
              </li>
              <li>
                <Link href="/tax-calculator" className="hover:text-amber-400 transition-colors">
                  {t.navTax}
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-amber-400 transition-colors flex items-center gap-1 text-amber-400 font-bold">
                  <Newspaper className="w-3.5 h-3.5" />
                  {t.navBlogs}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: AdSense Legal Pages */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
              {t.legalLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/privacy-policy" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-slate-500" />
                  <span>{t.privacyPolicy}</span>
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-slate-500" />
                  <span>{t.termsConditions}</span>
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-slate-500" />
                  <span>{t.disclaimer}</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-slate-500" />
                  <span>{t.aboutUs}</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  <span>{t.contactUs}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Admin & Control */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
              Admin & System
            </h4>
            <div className="space-y-2 text-xs">
              <Link
                href="/admin"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/20 font-medium transition-all"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>{t.navAdmin} (A-Z Control)</span>
              </Link>
              <p className="text-[11px] text-slate-500">
                {lang === 'kn' ? 'ಪಾಸ್‌ಕೋಡ್: 1234' : 'Default Passcode: 1234'}
              </p>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Rates & Calculators Hub. {t.allRightsReserved}</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> locally in Karnataka
          </p>
        </div>
      </div>
    </footer>
  );
};
