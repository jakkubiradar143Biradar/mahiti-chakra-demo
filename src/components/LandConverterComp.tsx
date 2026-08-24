"use client";

import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { Compass, Scale } from 'lucide-react';

export const LandConverterComp: React.FC = () => {
  const { lang } = useLanguage();

  const [guntha, setGuntha] = useState<number>(40); // 40 Guntha = 1 Acre

  const acres = (guntha / 40).toFixed(2);
  const sqFt = Math.round(guntha * 1089);
  const sqMeters = Math.round(sqFt / 10.764);
  const cents = (guntha * 2.5).toFixed(1);

  return (
    <div className="bg-white rounded-3xl border border-emerald-200/80 shadow-sm p-6 sm:p-8 space-y-6">
      <div className="flex items-center gap-3 border-b border-emerald-100 pb-4">
        <div className="w-11 h-11 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
          <Compass className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            {lang === 'kn' ? '📐 ಕರ್ನಾಟಕ ಜಮೀನು ಅಳತೆ ಪರಿವರ್ತಕ (Land Area Converter)' : '📐 Karnataka Land Area Measurement Converter'}
          </h2>
          <p className="text-xs text-slate-500">
            {lang === 'kn' ? 'ಎಕರೆ, ಗುಂಟೆ, ಚದರ ಅಡಿ (Sq.Ft), ಚದರ ಮೀಟರ್ ಮತ್ತು ಸೆಂಟ್ ಅಳತೆಗಳನ್ನು ತಕ್ಷಣವೇ ಪರಿವರ್ತಿಸಿ' : 'Convert Acre, Guntha, Sq.Ft, Sq.Meter & Cent measurements instantly'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              {lang === 'kn' ? 'ಗುಂಟೆ ಪ್ರಮಾಣ ನಮೂದಿಸಿ (Enter Guntha):' : 'Enter Guntha Amount:'}
            </label>
            <input
              type="number"
              value={guntha}
              onChange={(e) => setGuntha(Number(e.target.value))}
              className="w-full bg-white border border-slate-300 rounded-xl p-3 text-lg font-bold text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>
          <div className="flex justify-between text-[11px] text-slate-400">
            <span>40 Guntha = 1 Acre</span>
            <span>1 Guntha = 1089 Sq.Ft</span>
          </div>
        </div>

        <div className="lg:col-span-6 grid grid-cols-2 gap-3 text-xs">
          <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl space-y-1">
            <span className="text-slate-500 block">{lang === 'kn' ? 'ಎಕರೆ (Acres)' : 'Acres'}</span>
            <span className="text-2xl font-black text-emerald-700">{acres} Acre</span>
          </div>
          <div className="bg-sky-50 border border-sky-200 p-4 rounded-2xl space-y-1">
            <span className="text-slate-500 block">{lang === 'kn' ? 'ಚದರ ಅಡಿ (Sq.Ft)' : 'Square Feet'}</span>
            <span className="text-2xl font-black text-sky-800">{sqFt.toLocaleString('en-IN')} Sq.Ft</span>
          </div>
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl space-y-1">
            <span className="text-slate-500 block">{lang === 'kn' ? 'ಚದರ ಮೀಟರ್ (Sq.Mtr)' : 'Square Meters'}</span>
            <span className="text-xl font-bold text-amber-800">{sqMeters.toLocaleString('en-IN')} Sq.M</span>
          </div>
          <div className="bg-purple-50 border border-purple-200 p-4 rounded-2xl space-y-1">
            <span className="text-slate-500 block">{lang === 'kn' ? 'ಸೆಂಟ್ (Cents)' : 'Cents'}</span>
            <span className="text-xl font-bold text-purple-800">{cents} Cents</span>
          </div>
        </div>
      </div>
    </div>
  );
};
