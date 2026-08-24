"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { hundredAppsRegistry, AppDefinition } from '@/lib/appsRegistry';
import { LiveRatesCard } from '@/components/LiveRatesCard';
import { KrushiMarukatteCard } from '@/components/KrushiMarukatteCard';
import { DinasiBeleCard } from '@/components/DinasiBeleCard';
import { EMICalculatorComp } from '@/components/EMICalculatorComp';
import { AgeCalculatorComp } from '@/components/AgeCalculatorComp';
import { GSTCalculatorComp } from '@/components/GSTCalculatorComp';
import { SIPCalculatorComp } from '@/components/SIPCalculatorComp';
import { TaxCalculatorComp } from '@/components/TaxCalculatorComp';
import { PhotoResizerComp } from '@/components/PhotoResizerComp';
import { FuelCostCalculatorComp } from '@/components/FuelCostCalculatorComp';
import { PanchangaComp } from '@/components/PanchangaComp';
import { QuickNotesComp } from '@/components/QuickNotesComp';
import { LandConverterComp } from '@/components/LandConverterComp';
import { InstallPWAButton } from '@/components/InstallPWAButton';
import { useLanguage } from '@/components/LanguageContext';
import {
  Landmark, Cake, Receipt, TrendingUp, ShieldCheck, ArrowRight, Sparkles,
  Image as ImageIcon, Car, Sun, Notebook, ShoppingBag, Star, LayoutGrid, Coins, Sprout, ShoppingCart, Search, Zap, Compass, Play, Shield, Award, Users, CheckCircle2, X, ExternalLink
} from 'lucide-react';

export default function HomePage() {
  const { t, lang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [launchedAppId, setLaunchedAppId] = useState<string | null>(null);

  const filteredApps = hundredAppsRegistry.filter((app) => {
    const title = lang === 'kn' ? app.titleKn : app.titleEn;
    const catMatches = selectedCategory === 'all' || app.category === selectedCategory || (selectedCategory === 'offline' && !app.needsApi);
    const searchMatches = title.toLowerCase().includes(searchQuery.toLowerCase());
    return catMatches && searchMatches;
  });

  const launchAppModal = (appId: string) => {
    setLaunchedAppId(appId);
    setTimeout(() => {
      const el = document.getElementById('launched-app-window');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const renderActiveComponent = (appId: string) => {
    switch (appId) {
      case 'gold-rates':
      case 'silver-rates':
      case 'fuel-rates':
      case 'lpg-gas-rate':
      case 'forex-rates':
      case 'crypto-rates':
        return <LiveRatesCard />;
      case 'adike-rates':
      case 'kobbari-rates':
      case 'coffee-pepper-rates':
      case 'cardamom-rates':
      case 'cotton-rates':
        return <KrushiMarukatteCard />;
      case 'rice-prices':
      case 'dal-prices':
      case 'oil-prices':
      case 'vegetable-prices':
        return <DinasiBeleCard />;
      case 'photo-resizer':
        return <PhotoResizerComp />;
      case 'land-unit-converter':
        return <LandConverterComp />;
      case 'fuel-trip-calc':
        return <FuelCostCalculatorComp />;
      case 'panchanga':
        return <PanchangaComp />;
      case 'quick-notes':
        return <QuickNotesComp />;
      case 'age-calc':
      case 'age-calculator':
        return <AgeCalculatorComp />;
      case 'gst-calc':
        return <GSTCalculatorComp />;
      case 'sip-calc':
        return <SIPCalculatorComp />;
      case 'tax-calc':
        return <TaxCalculatorComp />;
      case 'emi-calc':
      case 'fd-rd-calc':
      case 'compound-interest-calc':
      case 'simple-interest-calc':
      default:
        return <EMICalculatorComp />;
    }
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* 🍏 APPLE / STRIPE-STYLE CLEAN LIGHT HERO BANNER WITH FLUID ANIMATIONS */}
      <div className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-amber-500/10 rounded-3xl p-6 sm:p-14 shadow-xl border-2 border-amber-500/30 relative overflow-hidden text-slate-900 spring-transition hover:shadow-2xl">
        
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-[120px] pointer-events-none animate-pulseSubtle" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-400/10 rounded-full blur-[100px] pointer-events-none animate-pulseSubtle" />

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          
          {/* Official Enterprise Brand Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-900 border border-amber-500/30 text-xs font-black uppercase tracking-widest backdrop-blur shadow-sm spring-transition hover:scale-105">
            <ShieldCheck className="w-4 h-4 text-amber-600 animate-bounce" />
            <span>MAHITI CHAKRA ENTERPRISE PORTAL • help.mahitichakra.in</span>
          </div>

          {/* Main Giant Headline */}
          <h1 className="text-3xl sm:text-6xl font-black text-slate-950 tracking-tight leading-tight">
            {lang === 'kn' ? (
              <>
                ಕರ್ನಾಟಕದ #1 ಡಿಜಿಟಲ್ <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700">ಸಹಾಯ & ಸೇವಾ ಪೋರ್ಟಲ್</span>
              </>
            ) : (
              <>
                Karnataka&apos;s #1 Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700">Help & Utility Hub</span>
              </>
            )}
          </h1>

          <p className="text-slate-700 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto font-semibold">
            {lang === 'kn'
              ? 'ಚಿನ್ನ & ಬೆಳ್ಳಿ ದರಗಳು, ಕೃಷಿ APMC ಧಾರಣೆ, ದಿನಸಿ ದರಗಳು, 20KB Photo Resizer & 5 ಫೈನಾನ್ಸ್ ಕ್ಯಾಲ್ಕುಲೇಟರ್‌ಗಳು ಉಚಿತವಾಗಿ ಲಭ್ಯ!'
              : 'Live Gold/Fuel rates, Krushi APMC crop prices, Grocery rates, 20KB Photo resizer & 5 Finance calculators - 100% Free!'}
          </p>

          {/* Search Input Box with Suggestions */}
          <div className="space-y-3 max-w-xl mx-auto pt-2">
            <div className="relative">
              <Search className="w-6 h-6 absolute left-5 top-1/2 -translate-y-1/2 text-amber-600" />
              <input
                type="text"
                placeholder={lang === 'kn' ? 'ನಿಮಗೆ ಯಾವ ಸಹಾಯ ಅಥವಾ ಆಪ್ ಬೇಕು? (ಉದಾ: ಚಿನ್ನ, EMI, GST, photo)...' : 'Search any help tool (e.g. Gold, EMI, GST, photo)...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border-2 border-amber-300 rounded-2xl py-4 pl-14 pr-6 text-sm font-black text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-8 focus:ring-amber-500/15 shadow-lg spring-transition"
              />
            </div>

            {/* Quick Tag Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-extrabold text-slate-700">
              <span className="text-slate-500 font-bold">{lang === 'kn' ? 'ತ್ವರಿತ ಶೋಧನೆ:' : 'Quick Tags:'}</span>
              {[
                { labelKn: '🟡 ಚಿನ್ನದ ದರ', labelEn: 'Gold Rate', id: 'gold-rates' },
                { labelKn: '🌾 ಅಡಿಕೆ ಧಾರಣೆ', labelEn: 'Arecanut', id: 'adike-rates' },
                { labelKn: '🧮 EMI', labelEn: 'EMI Calc', id: 'emi-calc' },
                { labelKn: '🎂 ವಯಸ್ಸು', labelEn: 'Age Calc', id: 'age-calc' },
                { labelKn: '🖼️ ಫೋಟೋ Resizer', labelEn: 'Photo Resizer', id: 'photo-resizer' },
                { labelKn: '📅 ಪಂಚಾಂಗ', labelEn: 'Panchanga', id: 'panchanga' },
              ].map((tag) => (
                <button
                  key={tag.id}
                  onClick={() => launchAppModal(tag.id)}
                  className="px-3.5 py-1.5 rounded-full bg-white hover:bg-amber-100 hover:text-amber-900 border border-slate-300 text-slate-800 shadow-xs spring-transition hover:scale-105 active:scale-95"
                >
                  {lang === 'kn' ? tag.labelKn : tag.labelEn}
                </button>
              ))}
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 max-w-3xl mx-auto text-xs border-t border-slate-300/80">
            <div className="flex flex-col items-center spring-transition hover:scale-105">
              <span className="text-xl font-black text-amber-700">33+ Apps</span>
              <span className="text-slate-600 font-bold">{lang === 'kn' ? 'ಉಚಿತ ಆಪ್‌ಗಳು' : 'Free Tools'}</span>
            </div>
            <div className="flex flex-col items-center spring-transition hover:scale-105">
              <span className="text-xl font-black text-emerald-700">0.1s Speed</span>
              <span className="text-slate-600 font-bold">{lang === 'kn' ? 'ವೇಗದ ಸರ್ವರ್' : 'Super Fast'}</span>
            </div>
            <div className="flex flex-col items-center spring-transition hover:scale-105">
              <span className="text-xl font-black text-sky-700">100% Free</span>
              <span className="text-slate-600 font-bold">{lang === 'kn' ? 'ಉಚಿತ ಬಳಕೆ' : 'Zero Cost'}</span>
            </div>
            <div className="flex flex-col items-center spring-transition hover:scale-105">
              <span className="text-xl font-black text-purple-700">PWA Ready</span>
              <span className="text-slate-600 font-bold">{lang === 'kn' ? 'ಆಪ್ ಇನ್‌ಸ್ಟಾಲ್' : 'App Install'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 🚀 ACTIVE LAUNCHED APP WINDOW WITH SPRING POP ANIMATION */}
      {launchedAppId && (
        <div id="launched-app-window" className="border-4 border-amber-500 rounded-3xl p-6 sm:p-8 bg-white text-slate-900 space-y-6 shadow-2xl relative scroll-mt-24 animate-springPop">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-400 text-slate-950 flex items-center justify-center font-black shadow-lg">
                <Sparkles className="w-7 h-7" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-extrabold text-amber-700 block">
                  {lang === 'kn' ? 'ಸಕ್ರಿಯ ಲಾಂಚ್ ಆದ ಆಪ್ (Active App Window)' : 'Active Launched App Window'}
                </span>
                <h2 className="text-2xl font-black text-slate-950">
                  {hundredAppsRegistry.find((a) => a.id === launchedAppId)?.[lang === 'kn' ? 'titleKn' : 'titleEn'] || 'Active App'}
                </h2>
              </div>
            </div>

            <button
              onClick={() => setLaunchedAppId(null)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs shadow-lg spring-transition active:scale-90 shrink-0 self-start sm:self-auto"
            >
              <X className="w-4 h-4" />
              <span>{lang === 'kn' ? 'ಆಪ್ ಮುಚ್ಚಿ (Close App)' : 'Close App'}</span>
            </button>
          </div>

          <div className="bg-slate-50 rounded-2xl p-3 sm:p-6 border border-slate-200 shadow-inner">
            {renderActiveComponent(launchedAppId)}
          </div>
        </div>
      )}

      {/* 🏷️ CATEGORY SELECTION & DIRECTORY */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-slate-200 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-slate-950 text-amber-400 flex items-center justify-center font-black shadow-md">
              <LayoutGrid className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-950">
                {lang === 'kn' ? 'ಉಚಿತ ಆಪ್‌ಗಳ ಡಿಜಿಟಲ್ ಪಟ್ಟಿ' : 'Digital Help Directory'}
              </h2>
              <p className="text-xs text-slate-600 font-semibold">
                {lang === 'kn' ? 'ನಿಮಗೆ ಬೇಕಾದ ಆಪ್ ಕ್ಲಿಕ್ ಮಾಡಿ, ತಕ್ಷಣವೇ ಆ ಆಪ್ ಬಳಸಬಹುದು!' : 'Click any app card to open and use it instantly!'}
              </p>
            </div>
          </div>

          <InstallPWAButton variant="nav" />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          {[
            { id: 'all', labelKn: '🚀 ಎಲ್ಲಾ ಸೇವೆಗಳು', labelEn: 'All Apps' },
            { id: 'offline', labelKn: '⚡ Offline Apps', labelEn: 'Offline Apps' },
            { id: 'rates', labelKn: '🟡 ಚಿನ್ನ & ಇಂಧನ', labelEn: 'Gold & Fuel' },
            { id: 'krushi', labelKn: '🌾 ಕೃಷಿ APMC', labelEn: 'Krushi APMC' },
            { id: 'dinasi', labelKn: '🛒 ದಿನಸಿ ಬೆಲೆಗಳು', labelEn: 'Grocery' },
            { id: 'finance', labelKn: '🧮 ಫೈನಾನ್ಸ್ ಸಾಲಗಳು', labelEn: 'Finance' },
            { id: 'utility', labelKn: '🖼️ ಉದ್ಯೋಗ & ದಾಖಲೆ', labelEn: 'Job Tools' },
            { id: 'converters', labelKn: '📐 ಜಮೀನು ಅಳತೆ', labelEn: 'Land Unit' },
            { id: 'health', labelKn: '🏥 ಆರೋಗ್ಯ', labelEn: 'Health' },
            { id: 'time', labelKn: '📅 ಪಂಚಾಂಗ & ಸಮಯ', labelEn: 'Panchanga' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-3 rounded-2xl text-xs font-black whitespace-nowrap spring-transition ${
                selectedCategory === tab.id
                  ? 'bg-slate-950 text-amber-400 shadow-xl ring-2 ring-amber-500/40 scale-105'
                  : 'bg-white text-slate-800 border border-slate-300 hover:bg-slate-100 shadow-xs hover:scale-102'
              }`}
            >
              {lang === 'kn' ? tab.labelKn : tab.labelEn}
            </button>
          ))}
        </div>

        {/* Apps Cards Grid with Apple Spring Physics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredApps.map((app) => (
            <div
              key={app.id}
              onClick={() => launchAppModal(app.id)}
              className="bg-white rounded-3xl border border-slate-200 hover:border-amber-500/80 p-6 shadow-sm hover:shadow-2xl spring-transition hover:-translate-y-2 hover:scale-[1.015] cursor-pointer flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${app.color} text-white flex items-center justify-center shadow-xl group-hover:scale-110 spring-transition`}>
                    <Sparkles className="w-7 h-7" />
                  </div>
                  <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 px-3 py-1 rounded-xl text-xs font-black text-amber-900 shadow-xs">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span>{app.rating}</span>
                    <span className="text-[10px] text-slate-400 font-normal">({app.users})</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-md uppercase tracking-wide">
                      {lang === 'kn' ? app.categoryKn : app.categoryEn}
                    </span>
                    {!app.needsApi && (
                      <span className="text-[9px] font-black text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 flex items-center gap-0.5">
                        <Zap className="w-2.5 h-2.5 text-emerald-600 fill-emerald-600" /> Offline
                      </span>
                    )}
                  </div>

                  <h3 className="font-black text-slate-950 text-lg mt-2 leading-snug group-hover:text-amber-600 spring-transition">
                    {lang === 'kn' ? app.titleKn : app.titleEn}
                  </h3>

                  <p className="text-xs text-slate-600 mt-1 leading-relaxed line-clamp-2 font-medium">
                    {lang === 'kn' ? app.descKn : app.descEn}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-emerald-600 font-black flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Free Tool
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    launchAppModal(app.id);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-amber-400 font-black text-xs shadow-md spring-transition active:scale-95 hover:scale-105"
                >
                  <Play className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{lang === 'kn' ? 'ಆಪ್ ಓಪನ್ ಮಾಡಿ' : 'Open App'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🌟 DIRECT FEATURED INTERACTIVE SUITE */}
      <div className="border-t-2 border-slate-200 pt-12 space-y-12">
        <div className="bg-slate-950 text-amber-400 px-6 py-4 rounded-2xl flex items-center justify-between text-xs font-black shadow-xl">
          <span className="flex items-center gap-2 text-sm">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
            {lang === 'kn' ? 'ಮುಖ್ಯ ಸೇವೆಗಳ ನೇರ ಕ್ಯಾಲ್ಕುಲೇಟರ್‌ಗಳು & ಲೈವ್ ದರಗಳು' : 'Featured Live Tools & Calculators'}
          </span>
          <span className="text-slate-400 font-semibold hidden sm:inline">{lang === 'kn' ? 'ನೇರವಾಗಿ ಬಳಸಿ' : 'Direct Interactive'}</span>
        </div>

        {/* Live Rates */}
        <section id="gold-rates-sec" className="scroll-mt-24">
          <LiveRatesCard />
        </section>

        {/* Photo Resizer */}
        <section id="photo-resizer-sec" className="scroll-mt-24">
          <PhotoResizerComp />
        </section>

        {/* EMI Calculator */}
        <section id="emi-calc-sec" className="scroll-mt-24">
          <EMICalculatorComp />
        </section>

        {/* Age Calculator */}
        <section id="age-calc-sec" className="scroll-mt-24">
          <AgeCalculatorComp />
        </section>

        {/* GST Calculator */}
        <section id="gst-calc-sec" className="scroll-mt-24">
          <GSTCalculatorComp />
        </section>

        {/* SIP Calculator */}
        <section id="sip-calc-sec" className="scroll-mt-24">
          <SIPCalculatorComp />
        </section>

        {/* Tax Calculator */}
        <section id="tax-calc-sec" className="scroll-mt-24">
          <TaxCalculatorComp />
        </section>

        {/* Dinasi Bele */}
        <section id="dinasi-rates-sec" className="scroll-mt-24">
          <DinasiBeleCard />
        </section>

        {/* Krushi Marukatte */}
        <section id="krushi-rates-sec" className="scroll-mt-24">
          <KrushiMarukatteCard />
        </section>

        {/* Land Unit Converter */}
        <section id="land-unit-converter-sec" className="scroll-mt-24">
          <LandConverterComp />
        </section>

        {/* Trip Fuel Calculator */}
        <section id="fuel-trip-calc-sec" className="scroll-mt-24">
          <FuelCostCalculatorComp />
        </section>

        {/* Panchanga */}
        <section id="panchanga-sec" className="scroll-mt-24">
          <PanchangaComp />
        </section>

        {/* Quick Notes */}
        <section id="quick-notes-sec" className="scroll-mt-24">
          <QuickNotesComp />
        </section>
      </div>
    </div>
  );
}
