"use client";

import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { initialDinasiRates } from '@/lib/ratesStore';
import { ShoppingCart, Search, TrendingUp, TrendingDown, Minus } from 'lucide-react';

export const DinasiBeleCard: React.FC = () => {
  const { lang } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'ಅಕ್ಕಿ & ಧಾನ್ಯಗಳು', 'ಬೇಳೆಕಾಳುಗಳು', 'ಅಡುಗೆ ಎಣ್ಣೆ', 'ಸಕ್ಕರೆ & ಬೆಲ್ಲ', 'ತರಕಾರಿ & ದೈನಂದಿನ'];

  const filteredItems = initialDinasiRates.filter((item) => {
    const name = lang === 'kn' ? item.nameKn : item.nameEn;
    const catMatches = selectedCategory === 'All' || item.categoryKn === selectedCategory;
    const searchMatches = name.toLowerCase().includes(searchTerm.toLowerCase());
    return catMatches && searchMatches;
  });

  return (
    <div className="bg-white rounded-3xl border border-amber-200/80 shadow-sm p-6 sm:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-100 pb-5">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-500 text-slate-950 flex items-center justify-center shadow-md shadow-amber-500/20">
            <ShoppingCart className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-slate-900">
              {lang === 'kn' ? '🛒 ದೈನಂದಿನ ದಿನಸಿ ಸಾಮಗ್ರಿಗಳ ದರ (Daily Grocery Prices)' : '🛒 Daily Grocery & Household Item Rates'}
            </h2>
            <p className="text-xs text-slate-500">
              {lang === 'kn' ? 'ಕರ್ನಾಟಕದ ದೈನಂದಿನ ಅಕ್ಕಿ, ಬೇಳೆಕಾಳು, ಎಣ್ಣೆ, ಸಕ್ಕರೆ ಮತ್ತು ಅಡುಗೆ ಸಾಮಗ್ರಿಗಳ ಚಿಲ್ಲರೆ ಸಗಟು ದರಗಳು' : 'Daily retail & wholesale prices of Rice, Dals, Cooking Oils, Sugar & essentials'}
            </p>
          </div>
        </div>

        {/* Search Input */}
        <div className="relative min-w-[220px]">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder={lang === 'kn' ? 'ಅಕ್ಕಿ, ಎಣ್ಣೆ, ಬೇಳೆ, ಸಕ್ಕರೆ...' : 'Search rice, oil, dal...'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 pl-9 pr-3 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
      </div>

      {/* Category Tabs Filter */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-slate-900 text-amber-400 shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {cat === 'All' ? (lang === 'kn' ? 'ಎಲ್ಲವೂ (All)' : 'All Items') : cat}
          </button>
        ))}
      </div>

      {/* Grocery Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-amber-50/30 via-white to-slate-50 border border-amber-100 p-4 rounded-2xl shadow-sm hover:shadow-md hover:border-amber-300 transition-all space-y-2 flex flex-col justify-between"
          >
            <div className="space-y-1">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-extrabold bg-amber-100 text-amber-900 px-2 py-0.5 rounded">
                  {item.categoryKn}
                </span>
                {item.trend === 'up' && (
                  <span className="text-[10px] text-rose-600 bg-rose-50 font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5 border border-rose-200">
                    <TrendingUp className="w-3 h-3" /> Up
                  </span>
                )}
                {item.trend === 'down' && (
                  <span className="text-[10px] text-emerald-600 bg-emerald-50 font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5 border border-emerald-200">
                    <TrendingDown className="w-3 h-3" /> Down
                  </span>
                )}
                {item.trend === 'stable' && (
                  <span className="text-[10px] text-slate-500 bg-slate-100 font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5">
                    <Minus className="w-3 h-3" /> Stable
                  </span>
                )}
              </div>

              <h3 className="font-extrabold text-slate-900 text-xs leading-snug pt-1">
                {lang === 'kn' ? item.nameKn : item.nameEn}
              </h3>
            </div>

            <div className="bg-white p-3 rounded-xl border border-amber-200/80 flex justify-between items-center mt-2">
              <span className="text-[10px] text-slate-400 font-semibold">{lang === 'kn' ? item.unitKn : item.unitEn}</span>
              <span className="text-base font-black text-amber-600">
                ₹{item.price.toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
