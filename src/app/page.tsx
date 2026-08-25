"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageContext';
import { getStoredAppItems, defaultHeroConfig, defaultCategories } from '@/lib/appsStore';
import { AppItem, CategoryCard, HeroConfig } from '@/lib/types';
import { SmartSearchModal } from '@/components/SmartSearchModal';
import { CommentSection } from '@/components/CommentSection';
import { ShareModal } from '@/components/ShareModal';
import {
  Search, Star, ArrowRight, ShoppingCart, FileText, Coins,
  GraduationCap, Building2, Sparkles, Flame, Calendar, Calculator,
  HeartPulse, CalendarDays, Gauge, Zap, Trophy, ShieldCheck, Mail,
  CheckCircle2, Smartphone, Award, Grid, Lock, CheckCircle, X, ExternalLink,
  Layers, Share2
} from 'lucide-react';

export default function HomePage() {
  const { t, lang } = useLanguage();
  const [apps, setApps] = useState<AppItem[]>([]);
  const [heroConfig, setHeroConfig] = useState<HeroConfig>(defaultHeroConfig);
  const [categories, setCategories] = useState<CategoryCard[]>(defaultCategories);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryTab, setSelectedCategoryTab] = useState('all');
  const [showHeroSearchModal, setShowHeroSearchModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [activeEmbedApp, setActiveEmbedApp] = useState<AppItem | null>(null);

  useEffect(() => {
    setApps(getStoredAppItems());
  }, []);

  // 🔍 BILINGUAL & TRANSLITERATED SMART FILTER FOR GRID
  const filteredApps = apps.filter((app) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.trim().toLowerCase();
    const titleKn = (app.titleKn || '').toLowerCase();
    const titleEn = (app.titleEn || '').toLowerCase();
    const descKn = (app.descKn || '').toLowerCase();
    const descEn = (app.descEn || '').toLowerCase();
    const href = (app.href || '').toLowerCase();
    const category = (app.category || '').toLowerCase();

    // Universal Synonyms Table
    const synonyms: Record<string, string[]> = {
      calc: ['calculator', 'ಲೆಕ್ಕಾಚಾರ', 'emi', 'age', 'bmi', 'tax', 'gst', 'sip'],
      saala: ['loan', 'baddi', 'emi', 'ಸಾಲ', 'ಬಡ್ಡಿ'],
      vayassu: ['age', 'birth', 'ವಯಸ್ಸು', 'ದಿನಾಂಕ'],
      chinna: ['gold', 'silver', 'ಬೆಳ್ಳಿ', 'ಚಿನ್ನ'],
      photo: ['pdf', 'jpg', 'resizer', 'ದಾಖಲೆ', 'ಚಿತ್ರ'],
      gas: ['lpg', 'cylinder', 'ದಿನಸಿ', 'ಗ್ಯಾಸ್'],
      petrol: ['fuel', 'diesel', 'mileage', 'ವಾಹನ', 'vahana', 'vehi', 'vehicle'],
      vahana: ['vehicle', 'vehi', 'mileage', 'bike', 'car', 'auto', 'ವಾಹನ'],
    };

    let matched = titleKn.includes(query) ||
                  titleEn.includes(query) ||
                  descKn.includes(query) ||
                  descEn.includes(query) ||
                  href.includes(query) ||
                  category.includes(query);

    if (!matched) {
      Object.entries(synonyms).forEach(([key, synList]) => {
        if (query.includes(key) || synList.some(s => query.includes(s))) {
          if (titleKn.includes(key) || titleEn.includes(key) || href.includes(key) || synList.some(s => titleKn.includes(s) || titleEn.includes(s) || href.includes(s))) {
            matched = true;
          }
        }
      });
    }

    return matched;
  });

  const popularApps = filteredApps.filter(a => a.isPopular).slice(0, 8);
  const allAppsDirectory = filteredApps.filter(app => {
    if (selectedCategoryTab === 'all') return true;
    return (app.category || '').toLowerCase().includes(selectedCategoryTab.toLowerCase());
  });

  const renderIcon = (name: string) => {
    switch (name) {
      case 'ShoppingCart': return <ShoppingCart className="w-5 h-5" />;
      case 'FileText': return <FileText className="w-5 h-5" />;
      case 'Coins': return <Coins className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Flame': return <Flame className="w-5 h-5" />;
      case 'Calendar': return <Calendar className="w-5 h-5" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5" />;
      case 'CalendarDays': return <CalendarDays className="w-5 h-5" />;
      case 'Gauge': return <Gauge className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      default: return <Calculator className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-8 max-w-full overflow-x-hidden select-none">

      {/* EMBEDDED APP MODAL DRAWER */}
      {activeEmbedApp && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/80 backdrop-blur-md p-2 sm:p-6 flex items-center justify-center animate-fadeIn">
          <div className="bg-white text-slate-900 w-full max-w-5xl h-[90vh] rounded-3xl p-4 sm:p-6 flex flex-col justify-between shadow-2xl relative border border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black bg-amber-100 text-amber-900 px-3 py-1 rounded-full">
                  🔗 Embed Web App
                </span>
                <h3 className="text-base font-black text-slate-950">
                  {lang === 'kn' ? activeEmbedApp.titleKn : activeEmbedApp.titleEn}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={activeEmbedApp.embedLink}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="hidden sm:inline">Open External</span>
                </a>
                <button
                  onClick={() => setActiveEmbedApp(null)}
                  className="p-2 rounded-xl bg-rose-100 hover:bg-rose-200 text-rose-700 font-bold"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 w-full my-3 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">
              <iframe
                src={activeEmbedApp.embedLink}
                className="w-full h-full border-0"
                title={activeEmbedApp.titleEn}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* SHARE MODAL DRAWER */}
      {showShareModal && (
        <ShareModal onClose={() => setShowShareModal(false)} />
      )}

      {/* HERO BANNER BOX */}
      <div className="relative overflow-visible bg-gradient-to-br from-amber-500/15 via-amber-500/5 to-amber-500/10 rounded-3xl border border-amber-500/30 p-5 sm:p-8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6 max-w-full">
        <div className="space-y-3.5 max-w-xl text-center sm:text-left z-10 w-full">
          <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-950 font-black text-[11px] shadow-2xs">
              <span>{lang === 'kn' ? heroConfig.badgeKn : heroConfig.badgeEn}</span>
            </div>

            <button
              onClick={() => setShowShareModal(true)}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-black text-[11px] shadow-sm transition-all active:scale-95 border border-emerald-500 shrink-0"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{lang === 'kn' ? '📲 ಜನರಿಗೆ ಶೇರ್ ಮಾಡಿ' : '📲 Share Portal'}</span>
            </button>
          </div>

          <h1 className="text-xl sm:text-3xl font-black text-slate-950 leading-tight tracking-tight">
            {lang === 'kn' ? heroConfig.headlineKn : heroConfig.headlineEn}
          </h1>

          <p className="text-xs sm:text-sm font-extrabold text-slate-600">
            {lang === 'kn' ? heroConfig.subheadlineKn : heroConfig.subheadlineEn}
          </p>

          {/* HERO SEARCH BOX */}
          <div className="pt-1 flex items-center gap-2 max-w-md mx-auto sm:mx-0 relative">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder={lang === 'kn' ? 'ಹುಡುಕಿ... (ಉದಾ: calc, ಸಾಲ, age, photo)...' : 'Search... (e.g. calc, EMI, age, photo)...'}
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowHeroSearchModal(true);
                }}
                onFocus={() => setShowHeroSearchModal(true)}
                className="w-full bg-white border-2 border-amber-400/80 rounded-2xl py-2.5 pl-10 pr-4 text-xs font-black text-slate-950 focus:outline-none focus:ring-4 focus:ring-amber-500/20 shadow-md"
              />

              {showHeroSearchModal && searchQuery.trim() && (
                <SmartSearchModal
                  query={searchQuery}
                  onQueryChange={setSearchQuery}
                  onClose={() => setShowHeroSearchModal(false)}
                />
              )}
            </div>

            <button
              onClick={() => setShowHeroSearchModal(true)}
              className="px-5 py-2.5 rounded-2xl bg-slate-950 hover:bg-slate-800 text-amber-400 font-black text-xs shadow-md transition-all active:scale-95 shrink-0"
            >
              {lang === 'kn' ? 'ಹುಡುಕಿ' : 'Search'}
            </button>
          </div>

          {/* Quick Search Tags */}
          <div className="pt-1 flex items-center justify-center sm:justify-start gap-1.5 flex-wrap text-[11px] font-bold text-slate-500">
            <span className="text-slate-400 font-medium">{lang === 'kn' ? 'ಜನಪ್ರಿಯ:' : 'Popular:'}</span>
            {heroConfig.quickTags.map((tag, i) => (
              <button
                key={i}
                onClick={() => {
                  setSearchQuery(tag.en);
                  setShowHeroSearchModal(true);
                }}
                className="px-2.5 py-1 rounded-lg bg-white/90 border border-slate-200 text-slate-800 hover:bg-amber-500 hover:text-slate-950 transition-colors shadow-2xs font-extrabold"
              >
                {lang === 'kn' ? tag.kn : tag.en}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Smartphone Illustration */}
        <div className="shrink-0 z-10 hidden sm:block">
          <div className="w-40 h-40 rounded-3xl bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-500 p-3 shadow-2xl flex items-center justify-center transform hover:rotate-2 transition-transform">
            <div className="w-full h-full rounded-2xl bg-slate-950 text-amber-400 p-3 flex flex-col justify-between shadow-inner">
              <div className="flex items-center justify-between text-xs font-black">
                <span>MAHITI</span>
                <Smartphone className="w-4 h-4" />
              </div>
              <div className="space-y-1 text-center">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black text-white block">33+ Smart Tools</span>
              </div>
              <div className="text-[9px] text-center font-extrabold text-slate-400 uppercase">
                100% Free Karnataka
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HIGH-TRUST BADGES BAR */}
      <div className="grid grid-cols-3 gap-2 bg-white p-3 rounded-2xl border border-slate-200/80 shadow-2xs text-[10px] sm:text-xs font-black text-slate-800 text-center">
        <div className="flex items-center justify-center gap-1">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{lang === 'kn' ? '100% ಉಚಿತ ಪೋರ್ಟಲ್' : '100% Free Portal'}</span>
        </div>
        <div className="flex items-center justify-center gap-1 border-x border-slate-100 px-1">
          <Zap className="w-4 h-4 text-amber-500 shrink-0" />
          <span>{lang === 'kn' ? '0.1s ಅತಿ ವೇಗ' : '0.1s Super Fast'}</span>
        </div>
        <div className="flex items-center justify-center gap-1">
          <Lock className="w-4 h-4 text-sky-600 shrink-0" />
          <span>{lang === 'kn' ? 'ಸುರಕ್ಷಿತ & ಸೆಕ್ಯೂರ್' : '100% Safe & Secure'}</span>
        </div>
      </div>

      {/* 6 CATEGORIES CAROUSEL */}
      <div className="space-y-3" id="categories">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-black text-slate-950 flex items-center gap-2">
            <Grid className="w-5 h-5 text-amber-600" />
            <span>{lang === 'kn' ? 'ವಿಭಾಗಗಳು' : 'Categories'}</span>
          </h2>
          <Link href="/blogs" className="text-xs font-extrabold text-amber-700 hover:underline">
            <span>{lang === 'kn' ? 'ಎಲ್ಲಾ ವಿಭಾಗಗಳು ➔' : 'All Categories ➔'}</span>
          </Link>
        </div>

        <div className="flex sm:grid sm:grid-cols-3 md:grid-cols-6 gap-3 overflow-x-auto pb-2 snap-x custom-scrollbar max-w-full">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className={`min-w-[135px] sm:min-w-0 p-3.5 rounded-2xl border transition-all hover:scale-[1.02] shadow-2xs flex flex-col items-start justify-between gap-2 snap-start shrink-0 sm:shrink ${cat.bgColor}`}
            >
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center shadow-2xs ${cat.iconColor}`}>
                {renderIcon(cat.iconName)}
              </div>
              <div>
                <h3 className="text-xs font-black text-slate-950 leading-tight">
                  {lang === 'kn' ? cat.titleKn : cat.titleEn}
                </h3>
                <span className="text-[10px] font-bold text-slate-500 block mt-0.5">
                  {lang === 'kn' ? cat.appCountKn : cat.appCountEn}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* SECTION 1: 🔥 POPULAR APPS (TOP FEATURED APPS) */}
      <div className="space-y-3" id="popular-apps">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-black text-slate-950 flex items-center gap-2">
            <Flame className="w-5 h-5 text-rose-500" />
            <span>{lang === 'kn' ? '🔥 ಜನಪ್ರಿಯ Apps (Popular Tools)' : '🔥 Popular Apps'}</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-full">
          {popularApps.map((app) => (
            <div
              key={app.id}
              className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-xl hover:border-amber-400 transition-all flex flex-col justify-between space-y-3 group"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shadow-2xs ${app.bgColor}`}>
                    {renderIcon(app.iconName)}
                  </div>
                  <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-200">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span className="text-[11px] font-black text-amber-950">{app.rating}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs sm:text-sm font-black text-slate-950 leading-tight group-hover:text-amber-600 transition-colors line-clamp-1">
                    {lang === 'kn' ? app.titleKn : app.titleEn}
                  </h3>
                  <p className="text-[11px] font-semibold text-slate-500 leading-snug mt-1 line-clamp-2">
                    {lang === 'kn' ? app.descKn : app.descEn}
                  </p>
                </div>
              </div>

              <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between gap-1">
                <span className="text-[9px] font-black bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded flex items-center gap-0.5 shrink-0">
                  <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                  <span>Free</span>
                </span>

                {app.embedLink ? (
                  <button
                    onClick={() => setActiveEmbedApp(app)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-[11px] shadow-xs transition-all active:scale-95 shrink-0"
                  >
                    <span>{lang === 'kn' ? 'ಓಪನ್ 🔗' : 'Embed Open'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                ) : (
                  <Link
                    href={app.href}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-amber-400 font-black text-[11px] shadow-xs transition-all active:scale-95 shrink-0"
                  >
                    <span>{lang === 'kn' ? 'ಪ್ರಾರಂಭಿಸಿ' : 'Launch'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: 📱 ಎಲ್ಲಾ ಆಪ್‌ಗಳ ಪೂರ್ಣ ಪಟ್ಟಿ (ALL APPS COMPLETE DIRECTORY RIGHT BELOW POPULAR APPS) */}
      <div className="space-y-4 pt-4 border-t border-slate-200" id="all-apps">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-amber-600" />
            <h2 className="text-base font-black text-slate-950">
              {lang === 'kn' ? '📱 ಎಲ್ಲಾ ಆಪ್‌ಗಳು (Complete Apps Directory)' : '📱 All Apps Directory'}
            </h2>
            <span className="text-xs font-black bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full">
              {allAppsDirectory.length} Apps
            </span>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full no-scrollbar">
            {[
              { id: 'all', kn: 'ಎಲ್ಲಾ', en: 'All' },
              { id: 'finance', kn: 'ಹಣಕಾಸು', en: 'Finance' },
              { id: 'daily rates', kn: 'ದರಗಳು', en: 'Daily Rates' },
              { id: 'utility', kn: 'ಉಪಯುಕ್ತ', en: 'Utility' },
              { id: 'document', kn: 'ದಾಖಲೆ', en: 'Document' },
              { id: 'health', kn: 'ಆರೋಗ್ಯ', en: 'Health' },
              { id: 'fuel', kn: 'ಇಂಧನ', en: 'Fuel' },
              { id: 'agriculture', kn: 'ಕೃಷಿ', en: 'Agriculture' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategoryTab(tab.id)}
                className={`px-3 py-1 rounded-xl text-xs font-black transition-all shrink-0 ${
                  selectedCategoryTab === tab.id
                    ? 'bg-slate-950 text-amber-400 shadow-md'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {lang === 'kn' ? tab.kn : tab.en}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-full">
          {allAppsDirectory.map((app) => (
            <div
              key={app.id}
              className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-xl hover:border-amber-400 transition-all flex flex-col justify-between space-y-3 group"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shadow-2xs ${app.bgColor}`}>
                    {renderIcon(app.iconName)}
                  </div>
                  <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-200">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span className="text-[11px] font-black text-amber-950">{app.rating}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs sm:text-sm font-black text-slate-950 leading-tight group-hover:text-amber-600 transition-colors line-clamp-1">
                    {lang === 'kn' ? app.titleKn : app.titleEn}
                  </h3>
                  <p className="text-[11px] font-semibold text-slate-500 leading-snug mt-1 line-clamp-2">
                    {lang === 'kn' ? app.descKn : app.descEn}
                  </p>
                </div>
              </div>

              <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between gap-1">
                <span className="text-[9px] font-black bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded flex items-center gap-0.5 shrink-0">
                  <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                  <span>Free</span>
                </span>

                {app.embedLink ? (
                  <button
                    onClick={() => setActiveEmbedApp(app)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-[11px] shadow-xs transition-all active:scale-95 shrink-0"
                  >
                    <span>{lang === 'kn' ? 'ಓಪನ್ 🔗' : 'Embed Open'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                ) : (
                  <Link
                    href={app.href}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-amber-400 font-black text-[11px] shadow-xs transition-all active:scale-95 shrink-0"
                  >
                    <span>{lang === 'kn' ? 'ಪ್ರಾರಂಭಿಸಿ' : 'Launch'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 💬 PUBLIC COMMENT & REVIEWS SECTION */}
      <CommentSection pageId="home" />

    </div>
  );
}
