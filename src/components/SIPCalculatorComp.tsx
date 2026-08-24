"use client";

import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { TrendingUp, PiggyBank } from 'lucide-react';

export const SIPCalculatorComp: React.FC = () => {
  const { t } = useLanguage();

  const [monthlyInvest, setMonthlyInvest] = useState<number>(5000);
  const [returnRate, setReturnRate] = useState<number>(12); // 12% standard stock mutual fund return
  const [years, setYears] = useState<number>(10);

  // SIP Formula: M * [ (1 + i)^n - 1 ] * (1 + i) / i
  const i = returnRate / (12 * 100);
  const n = years * 12;

  const totalInvested = monthlyInvest * n;
  const futureValue = Math.round(monthlyInvest * ((Math.pow(1 + i, n) - 1) * (1 + i)) / i);
  const estReturns = futureValue - totalInvested;

  const chartData = [
    { name: t.investedAmount, value: totalInvested, color: '#0369a1' },
    { name: t.estReturns, value: estReturns, color: '#10b981' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600">
          <TrendingUp className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900">{t.sipHeading}</h2>
          <p className="text-xs text-slate-500">{t.sipSub}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Sliders */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Monthly Investment Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-semibold">
              <label className="text-slate-700">{t.monthlyInvestment}</label>
              <span className="text-emerald-600 font-extrabold text-base bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-lg">
                ₹{monthlyInvest.toLocaleString('en-IN')}
              </span>
            </div>
            <input
              type="range"
              min={500}
              max={100000}
              step={500}
              value={monthlyInvest}
              onChange={(e) => setMonthlyInvest(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-medium">
              <span>₹500</span>
              <span>₹50,000</span>
              <span>₹1 Lakh</span>
            </div>
          </div>

          {/* Return Rate Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-semibold">
              <label className="text-slate-700">{t.expectedReturn}</label>
              <span className="text-emerald-600 font-extrabold text-base bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-lg">
                {returnRate} %
              </span>
            </div>
            <input
              type="range"
              min={5}
              max={25}
              step={0.5}
              value={returnRate}
              onChange={(e) => setReturnRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-medium">
              <span>5%</span>
              <span>12%</span>
              <span>25%</span>
            </div>
          </div>

          {/* Time Period Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-semibold">
              <label className="text-slate-700">{t.timePeriod}</label>
              <span className="text-emerald-600 font-extrabold text-base bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-lg">
                {years} {t.year}
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={30}
              step={1}
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-medium">
              <span>1 Year</span>
              <span>15 Years</span>
              <span>30 Years</span>
            </div>
          </div>

        </div>

        {/* Results & Chart */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-gradient-to-br from-emerald-500 via-teal-600 to-emerald-700 rounded-2xl p-6 text-white shadow-lg shadow-emerald-500/20 text-center space-y-1">
            <span className="text-xs uppercase tracking-wider font-extrabold opacity-80">{t.totalValue}</span>
            <div className="text-3xl sm:text-4xl font-black">
              ₹{futureValue.toLocaleString('en-IN')}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-sky-50 border border-sky-100 p-3 rounded-xl">
              <span className="text-slate-500 block">{t.investedAmount}</span>
              <span className="text-sm font-bold text-sky-700">₹{totalInvested.toLocaleString('en-IN')}</span>
            </div>
            <div className="bg-emerald-50 border border-emerald-100 p-3 rounded-xl">
              <span className="text-slate-500 block">{t.estReturns}</span>
              <span className="text-sm font-bold text-emerald-700">₹{estReturns.toLocaleString('en-IN')}</span>
            </div>
          </div>

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
