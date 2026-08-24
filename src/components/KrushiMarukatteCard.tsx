"use client";

import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { initialKrushiRates } from '@/lib/ratesStore';
import { Sprout, MapPin, TrendingUp, Search, Calendar } from 'lucide-react';

export const KrushiMarukatteCard: React.FC = () => {
  const { t, lang } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRates = initialKrushiRates.filter((item) => {
    const name = lang === 'kn' ? item.itemKn : item.itemEn;
    const market = lang === 'kn' ? item.marketKn : item.marketEn;
    return name.toLowerCase().includes(searchTerm.toLowerCase()) || market.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="bg-white rounded-3xl border border-emerald-200/80 shadow-sm p-6 sm:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-emerald-100 pb-5">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/20">
            <Sprout className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-slate-900">
              {lang === 'kn' ? '🌾 ಕೃಷಿ ಮಾರುಕಟ್ಟೆ ಧಾರಣೆ (Krushi Marukatte Rates)' : '🌾 Agricultural & APMC Market Rates'}
            </h2>
            <p className="text-xs text-slate-500">
              {lang === 'kn' ? 'ಕರ್ನಾಟಕದ ಪ್ರಮುಖ APMC ಮಾರುಕಟ್ಟೆಗಳ ಲೈವ್ ಅಡಿಕೆ, ಕೊಬ್ಬರಿ, ಕಾಫಿ ಮತ್ತು ಬೆಳೆ ದರಗಳು' : 'Live Arecanut, Copra, Coffee & Crop rates across Karnataka APMC markets'}
            </p>
          </div>
        </div>

        {/* Search Input */}
        <div className="relative min-w-[220px]">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder={lang === 'kn' ? 'ಅಡಿಕೆ, ಕೊಬ್ಬರಿ, ಶಿವಮೊಗ್ಗ...' : 'Search crop or APMC...'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 pl-9 pr-3 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      {/* Krushi Rates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRates.map((crop, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-emerald-50/40 via-white to-slate-50 border border-emerald-100 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-emerald-300 transition-all space-y-3"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-extrabold bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded">
                  {lang === 'kn' ? crop.itemKn : crop.itemEn}
                </span>
                <h3 className="font-extrabold text-slate-900 text-sm mt-1">
                  {lang === 'kn' ? crop.varietyKn : crop.varietyEn}
                </h3>
              </div>
              <span className="text-[10px] text-emerald-700 bg-emerald-50 font-bold px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-0.5">
                <TrendingUp className="w-3 h-3" /> Live
              </span>
            </div>

            <div className="space-y-1.5 pt-1">
              <div className="flex items-center gap-1 text-xs text-slate-600">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="font-semibold text-slate-700">{lang === 'kn' ? crop.marketKn : crop.marketEn}</span>
              </div>

              <div className="bg-white p-3 rounded-xl border border-emerald-200/80 flex justify-between items-center">
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-bold">{lang === 'kn' ? 'ಗರಿಷ್ಠ ದರ (Max Rate)' : 'Max Price'}</span>
                  <span className="text-[11px] text-slate-500">{lang === 'kn' ? crop.unitKn : crop.unitEn}</span>
                </div>
                <span className="text-lg font-black text-emerald-700">
                  ₹{crop.maxPrice.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="flex justify-between text-[11px] text-slate-500 px-1 font-medium">
                <span>{lang === 'kn' ? 'ಕನಿಷ್ಠ ದರ:' : 'Min Price:'} ₹{crop.minPrice.toLocaleString('en-IN')}</span>
                <span className="text-slate-400">APMC Today</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
