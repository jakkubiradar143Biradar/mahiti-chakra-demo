"use client";

import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { Calendar, Cake, Clock, Heart, Download } from 'lucide-react';
import { PWAInstallModal } from './PWAInstallModal';

export const AgeCalculatorComp: React.FC = () => {
  const { t, lang } = useLanguage();
  const [showToolInstallModal, setShowToolInstallModal] = useState(false);

  const [dob, setDob] = useState<string>('2000-01-01');
  const [targetDate, setTargetDate] = useState<string>(new Date().toISOString().split('T')[0]);

  const calculateAgeDetails = () => {
    const birth = new Date(dob);
    const target = new Date(targetDate);

    if (isNaN(birth.getTime()) || isNaN(target.getTime()) || birth > target) {
      return null;
    }

    let years = target.getFullYear() - birth.getFullYear();
    let months = target.getMonth() - birth.getMonth();
    let days = target.getDate() - birth.getDate();

    if (days < 0) {
      months -= 1;
      const prevMonthLastDay = new Date(target.getFullYear(), target.getMonth(), 0).getDate();
      days += prevMonthLastDay;
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    const totalDays = Math.floor((target.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));
    const totalMonths = years * 12 + months;
    const totalHours = totalDays * 24;

    // Next birthday calculation
    const nextBirthday = new Date(target.getFullYear(), birth.getMonth(), birth.getDate());
    if (nextBirthday < target) {
      nextBirthday.setFullYear(target.getFullYear() + 1);
    }
    const daysUntilNextBirthday = Math.ceil((nextBirthday.getTime() - target.getTime()) / (1000 * 60 * 60 * 24));

    return {
      years,
      months,
      days,
      totalDays,
      totalMonths,
      totalHours,
      daysUntilNextBirthday,
    };
  };

  const ageResult = calculateAgeDetails();

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-8 relative">
      {/* 📲 STANDALONE TOOL PWA INSTALL MODAL */}
      {showToolInstallModal && (
        <PWAInstallModal
          appName={lang === 'kn' ? t.ageHeading : 'Exact Age Calculator App'}
          onClose={() => setShowToolInstallModal(false)}
        />
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-600 shrink-0">
            <Cake className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">{t.ageHeading}</h2>
            <p className="text-xs text-slate-500">{t.ageSub}</p>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Date Inputs */}
        <div className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-amber-600" />
              {t.dobLabel}
            </label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-xl p-3 text-sm font-semibold text-slate-800 focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-sky-600" />
              {t.targetDateLabel}
            </label>
            <input
              type="date"
              value={targetDate}
              onChange={(e) => setTargetDate(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-xl p-3 text-sm font-semibold text-slate-800 focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Results */}
        {ageResult ? (
          <div className="space-y-4">
            {/* Primary Age Display */}
            <div className="bg-gradient-to-tr from-amber-500 via-amber-600 to-yellow-500 text-slate-950 p-6 rounded-2xl shadow-lg shadow-amber-500/20 text-center space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-wider opacity-80">{t.yourAgeIs}</span>
              <div className="text-3xl sm:text-4xl font-black">
                {ageResult.years} <span className="text-base font-bold">{t.year}</span>, {ageResult.months} <span className="text-base font-bold">{t.month}</span>, {ageResult.days} <span className="text-base font-bold">{lang === 'kn' ? 'ದಿನಗಳು' : 'Days'}</span>
              </div>
            </div>

            {/* Countdown & Stats Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-rose-50 border border-rose-100 p-4 rounded-xl space-y-1">
                <span className="text-slate-500 flex items-center gap-1">
                  <Cake className="w-3.5 h-3.5 text-rose-500" />
                  {t.nextBirthdayCountdown}
                </span>
                <span className="text-xl font-extrabold text-rose-600 block">
                  {ageResult.daysUntilNextBirthday} <span className="text-xs font-normal">Days</span>
                </span>
              </div>

              <div className="bg-sky-50 border border-sky-100 p-4 rounded-xl space-y-1">
                <span className="text-slate-500 flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 text-sky-500" />
                  {t.totalDaysLived}
                </span>
                <span className="text-xl font-extrabold text-sky-700 block">
                  {ageResult.totalDays.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <div className="bg-slate-900 text-slate-200 p-4 rounded-xl flex justify-between items-center text-xs">
              <span>{t.totalMonthsLived}: <strong className="text-amber-400">{ageResult.totalMonths}</strong></span>
              <span>{t.totalHoursLived}: <strong className="text-emerald-400">{ageResult.totalHours.toLocaleString('en-IN')} hrs</strong></span>
            </div>
          </div>
        ) : (
          <div className="bg-rose-50 text-rose-700 p-6 rounded-2xl text-center text-xs font-semibold">
            {lang === 'kn' ? 'ದಯವಿಟ್ಟು ಸಿಂಧುವಾದ ದಿನಾಂಕವನ್ನು ಆಯ್ಕೆಮಾಡಿ (ಹುಟ್ಟಿದ ದಿನಾಂಕವು ಇಂದಿನ ದಿನಾಂಕಕ್ಕಿಂತ ಕಡಿಮೆಯಿರಬೇಕು)' : 'Please select a valid date range (Date of Birth must be before target date)'}
          </div>
        )}
      </div>
    </div>
  );
};
