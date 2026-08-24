"use client";

import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { Receipt, Percent, Check } from 'lucide-react';

export const GSTCalculatorComp: React.FC = () => {
  const { t, lang } = useLanguage();

  const [amount, setAmount] = useState<number>(10000);
  const [gstRate, setGstRate] = useState<number>(18);
  const [isExclusive, setIsExclusive] = useState<boolean>(true); // true = Exclusive (Add GST), false = Inclusive (Remove GST)

  let baseAmount = 0;
  let gstAmount = 0;
  let totalAmount = 0;

  if (isExclusive) {
    // Add GST
    baseAmount = amount;
    gstAmount = (amount * gstRate) / 100;
    totalAmount = amount + gstAmount;
  } else {
    // Remove GST
    totalAmount = amount;
    baseAmount = (amount * 100) / (100 + gstRate);
    gstAmount = totalAmount - baseAmount;
  }

  const cgst = gstAmount / 2;
  const sgst = gstAmount / 2;

  const gstRates = [5, 12, 18, 28];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600">
          <Receipt className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900">{t.gstHeading}</h2>
          <p className="text-xs text-slate-500">{t.gstSub}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Toggle Inclusive vs Exclusive */}
          <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1.5 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setIsExclusive(true)}
              className={`py-2.5 rounded-lg transition-all flex items-center justify-center gap-1 ${
                isExclusive
                  ? 'bg-amber-500 text-slate-950 font-bold shadow'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isExclusive && <Check className="w-3.5 h-3.5 text-slate-950" />}
              {t.exclusiveGst}
            </button>
            <button
              onClick={() => setIsExclusive(false)}
              className={`py-2.5 rounded-lg transition-all flex items-center justify-center gap-1 ${
                !isExclusive
                  ? 'bg-amber-500 text-slate-950 font-bold shadow'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {!isExclusive && <Check className="w-3.5 h-3.5 text-slate-950" />}
              {t.inclusiveGst}
            </button>
          </div>

          {/* Amount Input */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-slate-700">{t.amountLabel}</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-base">₹</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl py-3 pl-9 pr-4 text-base font-bold text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>
          </div>

          {/* GST Slabs */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-slate-700">{t.gstRateLabel}</label>
            <div className="grid grid-cols-4 gap-2">
              {gstRates.map((rate) => (
                <button
                  key={rate}
                  onClick={() => setGstRate(rate)}
                  className={`py-2.5 rounded-xl font-extrabold text-sm border transition-all ${
                    gstRate === rate
                      ? 'bg-slate-900 text-amber-400 border-slate-900 shadow-md'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {rate}%
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Results Breakdown */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-gradient-to-br from-amber-500 via-amber-600 to-yellow-500 text-slate-950 p-6 rounded-2xl shadow-lg shadow-amber-500/20 space-y-1">
            <span className="text-xs uppercase tracking-wider font-extrabold opacity-80">{t.totalAmountGst}</span>
            <div className="text-3xl sm:text-4xl font-black">
              ₹{totalAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
            </div>
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3 text-xs">
            <div className="flex justify-between items-center py-1 border-b border-slate-200">
              <span className="text-slate-500">{t.netAmount}</span>
              <span className="font-bold text-slate-800 text-sm">₹{baseAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
            </div>

            <div className="flex justify-between items-center py-1 border-b border-slate-200">
              <span className="text-slate-500">{t.gstAmount} ({gstRate}%)</span>
              <span className="font-extrabold text-amber-600 text-sm">₹{gstAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1 text-[11px]">
              <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                <span className="text-slate-400 block">{t.cgst} ({(gstRate / 2)}%)</span>
                <span className="font-bold text-slate-700">₹{cgst.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                <span className="text-slate-400 block">{t.sgst} ({(gstRate / 2)}%)</span>
                <span className="font-bold text-slate-700">₹{sgst.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
