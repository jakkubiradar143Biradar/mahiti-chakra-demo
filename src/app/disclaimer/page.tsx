"use client";

import React from 'react';
import { useLanguage } from '@/components/LanguageContext';
import { FileText } from 'lucide-react';

export default function DisclaimerPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-6">
      <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
        <FileText className="w-8 h-8 text-amber-500" />
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{t.disclaimer}</h1>
          <p className="text-xs text-slate-500">Last updated: August 2026</p>
        </div>
      </div>

      <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed space-y-4 text-slate-700">
        <p>
          The information provided by Rates & Calculators Hub on this website is for general informational purposes only. All daily gold prices, silver rates, fuel prices, and financial calculation outputs are provided in good faith.
        </p>
        <p>
          Always verify exact gold rates and making charges with your local jeweler and check daily fuel rates at local petrol stations before entering into any financial commitments.
        </p>
      </div>
    </div>
  );
}
