"use client";

import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Calculator, Info, Landmark, Download } from 'lucide-react';
import { PWAInstallModal } from './PWAInstallModal';

export const EMICalculatorComp: React.FC = () => {
  const { t, lang } = useLanguage();
  const [showToolInstallModal, setShowToolInstallModal] = useState(false);

  const [amount, setAmount] = useState<number>(1000000); // 10 Lakh default
  const [rate, setRate] = useState<number>(8.5); // 8.5% default
  const [tenure, setTenure] = useState<number>(15); // 15 years default

  // EMI Formula: P * r * (1+r)^n / ((1+r)^n - 1)
  const monthlyRate = rate / (12 * 100);
  const totalMonths = tenure * 12;

  const emi = Math.round(
    (amount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );

  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - amount;

  const chartData = [
    { name: t.principalAmount, value: amount, color: '#0284c7' },
    { name: t.totalInterest, value: totalInterest, color: '#f59e0b' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-8 relative">
      {/* 📲 STANDALONE TOOL PWA INSTALL MODAL */}
      {showToolInstallModal && (
        <PWAInstallModal
          appName={lang === 'kn' ? t.emiHeading : 'Smart Loan EMI Calculator App'}
          onClose={() => setShowToolInstallModal(false)}
        />
      )}

      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shrink-0">
            <Landmark className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">{t.emiHeading}</h2>
            <p className="text-xs text-slate-500">{t.emiSub}</p>
          </div>
        </div>

        {/* 📲 STANDALONE THIS-APP ONLY INSTALLATION BUTTON */}
        <button
          onClick={() => setShowToolInstallModal(true)}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-600 hover:to-amber-500 text-slate-950 font-black text-xs shadow-md transition-all active:scale-95 border border-amber-300 shrink-0 self-start sm:self-auto"
        >
          <Download className="w-4 h-4 text-slate-950" />
          <span>{lang === 'kn' ? '📲 ಈ ಆಪ್ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಿ' : '📲 Install THIS App'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Col: Sliders & Controls */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Loan Amount Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-semibold">
              <label className="text-slate-700">{t.loanAmount}</label>
              <span className="text-amber-600 font-extrabold text-base bg-amber-50 border border-amber-200 px-3 py-1 rounded-lg">
                ₹{amount.toLocaleString('en-IN')}
              </span>
            </div>
            <input
              type="range"
              min={100000}
              max={10000000}
              step={50000}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-medium">
              <span>₹1 Lakh</span>
              <span>₹50 Lakhs</span>
              <span>₹1 Crore</span>
            </div>
          </div>

          {/* Interest Rate Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-semibold">
              <label className="text-slate-700">{t.interestRate}</label>
              <span className="text-amber-600 font-extrabold text-base bg-amber-50 border border-amber-200 px-3 py-1 rounded-lg">
                {rate} %
              </span>
            </div>
            <input
              type="range"
              min={5}
              max={20}
              step={0.1}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-medium">
              <span>5%</span>
              <span>12.5%</span>
              <span>20%</span>
            </div>
          </div>

          {/* Loan Tenure Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-semibold">
              <label className="text-slate-700">{t.loanTenure}</label>
              <span className="text-amber-600 font-extrabold text-base bg-amber-50 border border-amber-200 px-3 py-1 rounded-lg">
                {tenure} {t.year}
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={30}
              step={1}
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-medium">
              <span>1 Year</span>
              <span>15 Years</span>
              <span>30 Years</span>
            </div>
          </div>

        </div>

        {/* Right Col: Calculation Cards & Pie Chart */}
        <div className="lg:col-span-5 space-y-4">
          {/* EMI Result Display */}
          <div className="bg-gradient-to-br from-amber-500 via-amber-600 to-yellow-500 rounded-2xl p-6 text-slate-950 shadow-lg shadow-amber-500/20 text-center space-y-1">
            <span className="text-xs uppercase tracking-wider font-bold opacity-80">{t.monthlyEmi}</span>
            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              ₹{isNaN(emi) ? '0' : emi.toLocaleString('en-IN')}
            </div>
            <span className="text-[11px] font-medium opacity-80 block pt-1">Per Month for {totalMonths} Months</span>
          </div>

          {/* Breakdown Stats */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-sky-50 border border-sky-100 p-3 rounded-xl">
              <span className="text-slate-500 block">{t.principalAmount}</span>
              <span className="text-sm font-bold text-sky-700">₹{amount.toLocaleString('en-IN')}</span>
            </div>
            <div className="bg-amber-50 border border-amber-100 p-3 rounded-xl">
              <span className="text-slate-500 block">{t.totalInterest}</span>
              <span className="text-sm font-bold text-amber-700">₹{totalInterest.toLocaleString('en-IN')}</span>
            </div>
          </div>

          {/* Total Payment */}
          <div className="bg-slate-900 text-white p-4 rounded-xl flex justify-between items-center text-xs">
            <span className="text-slate-300 font-medium">{t.totalPayment}</span>
            <span className="text-base font-bold text-amber-400">₹{totalPayment.toLocaleString('en-IN')}</span>
          </div>

          {/* Pie Chart */}
          <div className="h-44 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={35}
                  outerRadius={55}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(val: number) => `₹${val.toLocaleString('en-IN')}`} />
                <Legend iconSize={10} wrapperStyle={{ fontSize: '11px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>
    </div>
  );
};
