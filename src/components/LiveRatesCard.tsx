"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { getMergedRates } from '@/lib/ratesStore';
import { RatesData } from '@/lib/types';
import { Coins, Fuel, DollarSign, RefreshCw, MapPin, CheckCircle, ShieldAlert, TrendingUp } from 'lucide-react';

export const LiveRatesCard: React.FC = () => {
  const { t, lang } = useLanguage();
  const [data, setData] = useState<RatesData | null>(null);
  const [selectedCity, setSelectedCity] = useState<'bengaluru' | 'mysuru' | 'mangaluru' | 'hubballi' | 'mumbai' | 'delhi'>('bengaluru');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const loadRates = async () => {
    setIsRefreshing(true);
    const rates = await getMergedRates();
    setData(rates);
    setTimeout(() => setIsRefreshing(false), 500);
  };

  useEffect(() => {
    loadRates();
  }, []);

  if (!data) return null;

  const currentFuel = data.cityFuel[selectedCity] || data.cityFuel.bengaluru;

  return (
    <div className="space-y-6">
      {/* Announcement notice if enabled */}
      {data.announcement?.enabled && (
        <div className="bg-gradient-to-r from-amber-500/10 via-amber-400/10 to-yellow-500/10 border border-amber-500/30 rounded-xl p-4 flex items-center justify-between gap-3 text-amber-900 text-xs sm:text-sm font-medium shadow-sm">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
            </span>
            <span>{lang === 'kn' ? data.announcement.textKn : data.announcement.textEn}</span>
          </div>
          <span className="text-[10px] bg-amber-500 text-slate-950 font-bold px-2 py-0.5 rounded shadow">
            NOTICE
          </span>
        </div>
      )}

      {/* Main Rates Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-slate-900">{t.liveRatesHeading}</h2>
            {data.isAutoMode ? (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full">
                <CheckCircle className="w-3 h-3 text-emerald-600" />
                {t.autoSyncBadge}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-amber-50 text-amber-800 border border-amber-300 px-2 py-0.5 rounded-full">
                <ShieldAlert className="w-3 h-3 text-amber-600" />
                {t.manualOverrideBadge}
              </span>
            )}
          </div>
          <p className="text-xs text-slate-500 mt-1">{t.liveRatesSub}</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-500">
            {t.lastUpdated}: <span className="font-semibold text-slate-700">{data.lastUpdated}</span>
          </span>
          <button
            onClick={loadRates}
            disabled={isRefreshing}
            className="p-2 rounded-lg bg-slate-100 hover:bg-amber-50 text-slate-600 hover:text-amber-700 transition-colors"
            title="Refresh Rates"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-amber-600' : ''}`} />
          </button>
        </div>
      </div>

      {/* Rates Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* GOLD RATES CARD */}
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50/50 border border-amber-200 rounded-2xl p-5 shadow-sm space-y-4 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center text-white shadow-md shadow-amber-500/30">
                <Coins className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">{lang === 'kn' ? 'ಚಿನ್ನದ ದರಗಳು (Gold)' : 'Gold Rates'}</h3>
                <span className="text-[10px] font-semibold text-amber-700 uppercase">24K & 22K Pure</span>
              </div>
            </div>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-100/60 px-2 py-0.5 rounded flex items-center gap-0.5">
              <TrendingUp className="w-3 h-3" /> Live
            </span>
          </div>

          <div className="space-y-3 pt-2">
            {/* 24K Rate */}
            <div className="bg-white p-3 rounded-xl border border-amber-200/70 flex justify-between items-center">
              <div>
                <span className="text-xs font-semibold text-slate-600 block">{t.gold24k}</span>
                <span className="text-[10px] text-slate-400">{lang === 'kn' ? '1ಗ್ರಾಂಗೆ: ₹' + Math.round(data.rates.gold24k / 10).toLocaleString('en-IN') : 'Per 1g: ₹' + Math.round(data.rates.gold24k / 10).toLocaleString('en-IN')}</span>
              </div>
              <span className="text-lg font-extrabold text-amber-600">
                ₹{data.rates.gold24k.toLocaleString('en-IN')}
              </span>
            </div>

            {/* 22K Rate */}
            <div className="bg-white p-3 rounded-xl border border-amber-200/70 flex justify-between items-center">
              <div>
                <span className="text-xs font-semibold text-slate-600 block">{t.gold22k}</span>
                <span className="text-[10px] text-slate-400">{lang === 'kn' ? '1ಗ್ರಾಂಗೆ: ₹' + Math.round(data.rates.gold22k / 10).toLocaleString('en-IN') : 'Per 1g: ₹' + Math.round(data.rates.gold22k / 10).toLocaleString('en-IN')}</span>
              </div>
              <span className="text-lg font-extrabold text-amber-700">
                ₹{data.rates.gold22k.toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        </div>

        {/* SILVER & FOREX CARD */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-slate-700 flex items-center justify-center text-white shadow-md">
                <DollarSign className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">{lang === 'kn' ? 'ಬೆಳ್ಳಿ ಮತ್ತು ಕರೆನ್ಸಿ (Silver & Forex)' : 'Silver & Currency'}</h3>
                <span className="text-[10px] font-semibold text-slate-500 uppercase">Per 1kg / Forex</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            {/* Silver Rate */}
            <div className="bg-white p-3 rounded-xl border border-slate-200 flex justify-between items-center">
              <div>
                <span className="text-xs font-semibold text-slate-600 block">{t.silver1kg}</span>
                <span className="text-[10px] text-slate-400">{lang === 'kn' ? '10ಗ್ರಾಂಗೆ: ₹' + Math.round(data.rates.silver / 100).toLocaleString('en-IN') : 'Per 10g: ₹' + Math.round(data.rates.silver / 100).toLocaleString('en-IN')}</span>
              </div>
              <span className="text-lg font-extrabold text-slate-800">
                ₹{data.rates.silver.toLocaleString('en-IN')}
              </span>
            </div>

            {/* Forex USD INR Rate */}
            <div className="bg-white p-3 rounded-xl border border-slate-200 flex justify-between items-center">
              <div>
                <span className="text-xs font-semibold text-slate-600 block">USD / INR Rate</span>
                <span className="text-[10px] text-slate-400">1 US Dollar in INR</span>
              </div>
              <span className="text-lg font-extrabold text-sky-700">
                ₹{data.rates.usdInr.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* FUEL RATES CARD */}
        <div className="bg-sky-50/50 border border-sky-200 rounded-2xl p-5 shadow-sm space-y-4 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-sky-600 flex items-center justify-center text-white shadow-md shadow-sky-600/30">
                <Fuel className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">{lang === 'kn' ? 'ಇಂಧನ ಬೆಲೆಗಳು (Fuel)' : 'Daily Fuel Rates'}</h3>
                <span className="text-[10px] font-semibold text-sky-700 uppercase">Per 1 Litre</span>
              </div>
            </div>

            {/* City dropdown */}
            <div className="flex items-center gap-1 bg-white border border-sky-300 rounded-lg px-2 py-1 shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-sky-600" />
              <select
                value={selectedCity}
                onChange={(e: any) => setSelectedCity(e.target.value)}
                className="text-xs font-bold text-slate-800 bg-transparent focus:outline-none cursor-pointer"
              >
                <option value="bengaluru">{t.bengaluru}</option>
                <option value="mysuru">{t.mysuru}</option>
                <option value="mangaluru">{t.mangaluru}</option>
                <option value="hubballi">{t.hubballi}</option>
                <option value="mumbai">{t.mumbai}</option>
                <option value="delhi">{t.delhi}</option>
              </select>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            {/* Petrol */}
            <div className="bg-white p-3 rounded-xl border border-sky-200 flex justify-between items-center">
              <div>
                <span className="text-xs font-semibold text-slate-600 block">{t.petrol}</span>
                <span className="text-[10px] text-slate-400 capitalize">{selectedCity} Rate</span>
              </div>
              <span className="text-lg font-extrabold text-rose-600">
                ₹{currentFuel.petrol.toFixed(2)}
              </span>
            </div>

            {/* Diesel */}
            <div className="bg-white p-3 rounded-xl border border-sky-200 flex justify-between items-center">
              <div>
                <span className="text-xs font-semibold text-slate-600 block">{t.diesel}</span>
                <span className="text-[10px] text-slate-400 capitalize">{selectedCity} Rate</span>
              </div>
              <span className="text-lg font-extrabold text-sky-800">
                ₹{currentFuel.diesel.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
