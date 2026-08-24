"use client";

import React from 'react';
import { useLanguage } from './LanguageContext';
import { Sun, Moon, Clock, Sparkles } from 'lucide-react';

export const PanchangaComp: React.FC = () => {
  const { lang } = useLanguage();

  const todayDateStr = new Date().toLocaleDateString('kn-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-white rounded-3xl border border-amber-200/80 shadow-sm p-6 sm:p-8 space-y-6">
      <div className="flex items-center gap-3 border-b border-amber-100 pb-4">
        <div className="w-11 h-11 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center shadow-md">
          <Sun className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            {lang === 'kn' ? '📅 ದೈನಂದಿನ ಪಂಚಾಂಗ & ಶುಭ ಮುಹೂರ್ತ (Daily Panchanga)' : '📅 Today\'s Panchanga & Auspicious Timings'}
          </h2>
          <p className="text-xs text-slate-500">
            {lang === 'kn' ? 'ಇಂದಿನ ತಿಥಿ, ನಕ್ಷತ್ರ, ರಾಹುಕಾಲ, ಗುಳಿಕಕಾಲ ಮತ್ತು ಯಮಗಂಡ ಕಾಲದ ನಿಖರ ಸಮಯ' : 'Today\'s Tithi, Nakshatra, Rahukalam, Gulikakala & Yamagandakala timings'}
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-amber-500/10 via-amber-400/10 to-yellow-500/10 border border-amber-200 p-4 rounded-2xl flex items-center justify-between text-xs font-bold text-amber-900">
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-amber-600" />
          {todayDateStr}
        </span>
        <span className="bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded text-[11px]">ಕಾಲ ಸೂಚಿ</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
          <span className="text-slate-400 font-semibold block">{lang === 'kn' ? 'ತಿಥಿ (Tithi)' : 'Tithi'}</span>
          <span className="text-sm font-extrabold text-slate-900">ದಶಮಿ (Dashami)</span>
          <span className="text-[10px] text-slate-500 block">ರಾತ್ರಿ 11:24 ರವರೆಗೆ</span>
        </div>

        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
          <span className="text-slate-400 font-semibold block">{lang === 'kn' ? 'ನಕ್ಷತ್ರ (Nakshatra)' : 'Nakshatra'}</span>
          <span className="text-sm font-extrabold text-slate-900">ಅನುರಾಧಾ (Anuradha)</span>
          <span className="text-[10px] text-slate-500 block">ಮಧ್ಯಾಹ್ನ 02:40 ರವರೆಗೆ</span>
        </div>

        <div className="bg-rose-50 p-4 rounded-2xl border border-rose-100 space-y-1">
          <span className="text-rose-700 font-semibold block flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-rose-500" />
            {lang === 'kn' ? 'ರಾಹುಕಾಲ (Rahukalam)' : 'Rahukalam'}
          </span>
          <span className="text-sm font-extrabold text-rose-800">04:30 PM - 06:00 PM</span>
        </div>

        <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100 space-y-1">
          <span className="text-emerald-700 font-semibold block flex items-center gap-1">
            <Sun className="w-3.5 h-3.5 text-emerald-500" />
            {lang === 'kn' ? 'ಗುಳಿಕಕಾಲ (Gulikakala)' : 'Gulikakala'}
          </span>
          <span className="text-sm font-extrabold text-emerald-800">03:00 PM - 04:30 PM</span>
        </div>

        <div className="bg-amber-50 p-4 rounded-2xl border border-amber-100 space-y-1">
          <span className="text-amber-800 font-semibold block flex items-center gap-1">
            <Moon className="w-3.5 h-3.5 text-amber-600" />
            {lang === 'kn' ? 'ಯಮಗಂಡ (Yamagandakala)' : 'Yamagandakala'}
          </span>
          <span className="text-sm font-extrabold text-amber-900">12:00 PM - 01:30 PM</span>
        </div>

        <div className="bg-sky-50 p-4 rounded-2xl border border-sky-100 space-y-1">
          <span className="text-sky-700 font-semibold block">{lang === 'kn' ? 'ಸೂರ್ಯೋದಯ & ಸೂರ್ಯಾಸ್ತ' : 'Sunrise & Sunset'}</span>
          <span className="text-sm font-extrabold text-sky-900">06:12 AM / 06:44 PM</span>
        </div>
      </div>
    </div>
  );
};
