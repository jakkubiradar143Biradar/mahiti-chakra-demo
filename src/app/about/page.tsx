"use client";

import React from 'react';
import { useLanguage } from '@/components/LanguageContext';
import { Info, ShieldCheck, Coins } from 'lucide-react';

export default function AboutPage() {
  const { t, lang } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-6">
      <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
        <Info className="w-8 h-8 text-amber-500" />
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{t.aboutUs}</h1>
          <p className="text-xs text-slate-500">Learn more about Rates & Calculators Hub</p>
        </div>
      </div>

      <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed space-y-4 text-slate-700">
        <p>
          Welcome to <strong>Rates & Calculators Hub</strong> - Karnataka&apos;s leading digital platform for real-time daily commodity prices and instant smart financial calculators.
        </p>

        <h3 className="font-bold text-slate-900 text-sm">Our Mission</h3>
        <p>
          Our mission is to empower individuals, students, job seekers, and business owners with fast, free, accurate financial calculators and daily market prices in both Kannada and English.
        </p>

        <div className="bg-amber-50 border border-amber-200 p-5 rounded-2xl space-y-2 text-xs text-amber-900 font-medium">
          <span className="font-bold block"> Why Choose Us?:</span>
          <ul className="list-disc pl-4 space-y-1">
            <li>100% Free interactive tools (Loan EMI, Age, GST, SIP, Income Tax).</li>
            <li>Real-time auto-synced Gold, Silver, Petrol, Diesel & Forex rates.</li>
            <li>Bilingual support: Seamlessly switch between ಕನ್ನಡ and English.</li>
            <li>A-to-Z Admin control and master privacy protection.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
