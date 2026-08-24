"use client";

import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { ShieldCheck, Award, Sparkles } from 'lucide-react';

export const TaxCalculatorComp: React.FC = () => {
  const { t, lang } = useLanguage();

  const [income, setIncome] = useState<number>(1200000); // 12 Lakhs default

  // Standard deduction for both regimes in India
  const standardDeduction = 75000;
  const taxableIncomeNew = Math.max(0, income - standardDeduction);
  const taxableIncomeOld = Math.max(0, income - standardDeduction);

  // New Tax Regime Slabs (FY 2024-25 Budget)
  // 0 - 3L: 0%
  // 3L - 7L: 5%
  // 7L - 10L: 10%
  // 10L - 12L: 15%
  // 12L - 15L: 20%
  // > 15L: 30%
  // Tax Rebate u/s 87A if taxable income <= 7L -> Tax = 0
  const calculateNewRegimeTax = (taxable: number) => {
    if (taxable <= 700000) return 0;

    let tax = 0;
    if (taxable > 300000) {
      const slab1 = Math.min(taxable, 700000) - 300000;
      tax += slab1 * 0.05;
    }
    if (taxable > 700000) {
      const slab2 = Math.min(taxable, 1000000) - 700000;
      tax += slab2 * 0.10;
    }
    if (taxable > 1000000) {
      const slab3 = Math.min(taxable, 1200000) - 1000000;
      tax += slab3 * 0.15;
    }
    if (taxable > 1200000) {
      const slab4 = Math.min(taxable, 1500000) - 1200000;
      tax += slab4 * 0.20;
    }
    if (taxable > 1500000) {
      const slab5 = taxable - 1500000;
      tax += slab5 * 0.30;
    }
    // Add 4% Cess
    tax += tax * 0.04;
    return Math.round(tax);
  };

  // Old Tax Regime Slabs (Basic)
  // 0 - 2.5L: 0%
  // 2.5L - 5L: 5%
  // 5L - 10L: 20%
  // > 10L: 30%
  const calculateOldRegimeTax = (taxable: number) => {
    if (taxable <= 500000) return 0; // Rebate up to 5L

    let tax = 0;
    if (taxable > 250000) {
      const slab1 = Math.min(taxable, 500000) - 250000;
      tax += slab1 * 0.05;
    }
    if (taxable > 500000) {
      const slab2 = Math.min(taxable, 1000000) - 500000;
      tax += slab2 * 0.20;
    }
    if (taxable > 1000000) {
      const slab3 = taxable - 1000000;
      tax += slab3 * 0.30;
    }
    // Add 4% Cess
    tax += tax * 0.04;
    return Math.round(tax);
  };

  const newTax = calculateNewRegimeTax(taxableIncomeNew);
  const oldTax = calculateOldRegimeTax(taxableIncomeOld);

  const isNewRegimeBetter = newTax <= oldTax;
  const savings = Math.abs(oldTax - newTax);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
        <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900">{t.taxHeading}</h2>
          <p className="text-xs text-slate-500">{t.taxSub}</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Income Slider & Input */}
        <div className="space-y-2 max-w-xl">
          <div className="flex justify-between items-center text-sm font-semibold">
            <label className="text-slate-700">{t.annualIncome}</label>
            <span className="text-purple-600 font-extrabold text-lg bg-purple-50 border border-purple-200 px-3 py-1 rounded-lg">
              ₹{income.toLocaleString('en-IN')}
            </span>
          </div>
          <input
            type="range"
            min={300000}
            max={5000000}
            step={50000}
            value={income}
            onChange={(e) => setIncome(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
          />
          <div className="flex justify-between text-[11px] text-slate-400 font-medium">
            <span>₹3 Lakhs</span>
            <span>₹25 Lakhs</span>
            <span>₹50 Lakhs</span>
          </div>
        </div>

        {/* Recommendation Badge */}
        <div className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white p-5 rounded-2xl flex items-center justify-between gap-4 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/30 flex items-center justify-center">
              <Award className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-purple-300 uppercase tracking-wider block">
                {t.recommendedRegime}
              </span>
              <span className="text-lg font-extrabold text-white">
                {isNewRegimeBetter ? t.newRegime : t.oldRegime}
              </span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs text-purple-200 block">{t.savesYou}</span>
            <span className="text-xl font-black text-amber-400">
              ₹{savings.toLocaleString('en-IN')}
            </span>
          </div>
        </div>

        {/* Side-by-Side Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* New Tax Regime Box */}
          <div className={`p-6 rounded-2xl border transition-all ${
            isNewRegimeBetter
              ? 'bg-purple-50/50 border-purple-300 shadow-md ring-2 ring-purple-500/20'
              : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                {t.newRegime}
                {isNewRegimeBetter && (
                  <span className="text-[10px] bg-purple-600 text-white px-2 py-0.5 rounded font-bold">
                    RECOMMENDED
                  </span>
                )}
              </h3>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">{t.standardDeduction}</span>
                <span className="font-semibold text-slate-700">₹{standardDeduction.toLocaleString('en-IN')}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">{t.taxableIncome}</span>
                <span className="font-semibold text-slate-700">₹{taxableIncomeNew.toLocaleString('en-IN')}</span>
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="font-bold text-slate-900">{t.taxPayable}</span>
                <span className="text-xl font-black text-purple-700">
                  ₹{newTax.toLocaleString('en-IN')}
                </span>
              </div>
            </div>
          </div>

          {/* Old Tax Regime Box */}
          <div className={`p-6 rounded-2xl border transition-all ${
            !isNewRegimeBetter
              ? 'bg-purple-50/50 border-purple-300 shadow-md ring-2 ring-purple-500/20'
              : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                {t.oldRegime}
                {!isNewRegimeBetter && (
                  <span className="text-[10px] bg-purple-600 text-white px-2 py-0.5 rounded font-bold">
                    RECOMMENDED
                  </span>
                )}
              </h3>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">{t.standardDeduction}</span>
                <span className="font-semibold text-slate-700">₹{standardDeduction.toLocaleString('en-IN')}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">{t.taxableIncome}</span>
                <span className="font-semibold text-slate-700">₹{taxableIncomeOld.toLocaleString('en-IN')}</span>
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="font-bold text-slate-900">{t.taxPayable}</span>
                <span className="text-xl font-black text-slate-800">
                  ₹{oldTax.toLocaleString('en-IN')}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
