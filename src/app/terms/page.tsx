"use client";

import React from 'react';
import { useLanguage } from '@/components/LanguageContext';
import { FileText } from 'lucide-react';

export default function TermsPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-6">
      <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
        <FileText className="w-8 h-8 text-amber-500" />
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{t.termsConditions}</h1>
          <p className="text-xs text-slate-500">Last updated: August 2026</p>
        </div>
      </div>

      <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed space-y-4 text-slate-700">
        <p>
          Welcome to Rates & Calculators Hub. By accessing this website, you agree to comply with and be bound by these terms and conditions.
        </p>

        <h3 className="font-bold text-slate-900 text-sm">1. Use of Calculators & Information</h3>
        <p>
          All calculators, gold rates, fuel prices, and tax estimation tools provided on this website are for informational and educational purposes only. They do not constitute financial advice.
        </p>

        <h3 className="font-bold text-slate-900 text-sm">2. Intellectual Property</h3>
        <p>
          Unless otherwise stated, Rates & Calculators Hub and/or its licensors own the intellectual property rights for all material on this website.
        </p>
      </div>
    </div>
  );
}
