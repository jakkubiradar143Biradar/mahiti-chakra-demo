"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageContext';
import { getStoredAppItems, defaultHeroConfig, defaultCategories } from '@/lib/appsStore';
import { AppItem, CategoryCard, HeroConfig } from '@/lib/types';
import { SmartSearchModal } from '@/components/SmartSearchModal';
import { CommentSection } from '@/components/CommentSection';
import { ShareModal } from '@/components/ShareModal';
import { PWAInstallModal } from '@/components/PWAInstallModal';
import {
  Search, Star, ArrowRight, ShoppingCart, FileText, Coins,
  GraduationCap, Building2, Sparkles, Flame, Calendar, Calculator,
  HeartPulse, CalendarDays, Gauge, Zap, Trophy, ShieldCheck, Mail,
  CheckCircle2, Smartphone, Award, Grid, Lock, CheckCircle, X, ExternalLink,
  Layers, Share2, Download, Radio, Wrench, RefreshCw, TrendingUp, TrendingDown,
  CloudSun, DollarSign, Briefcase, Mic, SmartphoneIcon, Clock, Check, Crown,
  UserCheck, Image as ImageIcon, QrCode, Layers3, PlusCircle
} from 'lucide-react';
import {
  GoldBars3D, PetrolPump3D, VegBasket3D, WeatherSunCloud3D, StockChart3D, BitcoinCoin3D,
  AgeCalc3D, EmiCalc3D, PdfToJpg3D, BmiCalc3D, ImageCompressor3D, QrGenerator3D,
  KiraniList3D, VillageBaddi3D, Invitation3D, WeightLossDiet3D, LandSurvey3D, MarriageBiodata3D,
  BabyNames3D, TraditionalCalendar3D, CateringEstimator3D, ScreenshotEditor3D, FamilyBudget3D, GovtLetter3D
} from '@/components/LiveAppIcons3D';

export interface LiveAppItemType {
  id: string;
  titleKn: string;
  subTitleKn: string;
  titleEn: string;
  valueKn: string;
  subValueKn?: string;
  changeKn: string;
  changeIsUp: boolean;
  href: string;
  timestamp: string;
  source: string;
  cardBg: string;
  category: string;
}

export interface ToolItemType {
  id: string;
  titleKn: string;
  descKn: string;
  rating: string;
  usersCount: string;
  href: string;
  cardBg: string;
  category: string;
}

export default function HomePage() {
  const { t, lang } = useLanguage();
  const [apps, setApps] = useState<AppItem[]>([]);
  const [heroConfig, setHeroConfig] = useState<HeroConfig>(defaultHeroConfig);
  const [categories, setCategories] = useState<CategoryCard[]>(defaultCategories);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeMainTab, setActiveMainTab] = useState<'live' | 'tools'>('tools');
  const [activeLiveCategory, setActiveLiveCategory] = useState('all');
  const [activeToolCategory, setActiveToolCategory] = useState('all');
  const [showHeroSearchModal, setShowHeroSearchModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [installingAppItem, setInstallingAppItem] = useState<AppItem | null>(null);

  useEffect(() => {
    setApps(getStoredAppItems());

    // Sync tab with URL hash or query params
    const handleHashChange = () => {
      const hash = window.location.hash;
      const search = window.location.search;
      if (hash === '#all-apps' || search.includes('tab=tools')) {
        setActiveMainTab('tools');
      } else if (hash === '#live-apps' || search.includes('tab=live')) {
        setActiveMainTab('live');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // 📡 PART 1: LIVE UPDATE APPS (CLEARED AND READY FOR YOUR CUSTOM LIST)
  const liveUpdateApps: LiveAppItemType[] = [];

  // 🛠️ PART 2: DAILY USEFUL TOOLS
  const usefulTools: ToolItemType[] = [
    {
      id: 'tool-letter',
      titleKn: 'ಸರ್ಕಾರಿ ಅರ್ಜಿ (ಪತ್ರ) ಮೇಕರ್',
      descKn: 'ಗ್ರಾಮ ಪಂಚಾಯತ್, ತಹಶೀಲ್ದಾರ್, ಕರೆಂಟ್ & ಪೊಲೀಸ್ ದೂರು ಪತ್ರ',
      rating: '4.9',
      usersCount: '95K+',
      href: '/letter-maker',
      cardBg: 'bg-gradient-to-br from-blue-100/95 via-indigo-50/50 to-white border-2 border-blue-300 shadow-sm hover:shadow-xl hover:border-blue-400',
      category: 'tools',
    },
    {
      id: 'tool-budget',
      titleKn: 'ಮನೆ ಖರ್ಚು & ಬಜೆಟ್ ಪ್ಲಾನರ್',
      descKn: 'ಸಂಬಳ, ದಿನಸಿ, ಬಾಡಿಗೆ & 50-30-20 ಉಳಿತಾಯ ಕಾರ್ಡ್',
      rating: '4.9',
      usersCount: '86K+',
      href: '/budget-planner',
      cardBg: 'bg-gradient-to-br from-emerald-100/95 via-teal-50/50 to-white border-2 border-emerald-300 shadow-sm hover:shadow-xl hover:border-emerald-400',
      category: 'finance',
    },
    {
      id: 'tool-screenshot',
      titleKn: 'ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಸ್ಕ್ಯಾನರ್ & ಎಡಿಟರ್',
      descKn: 'ಫೋಟೋ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಚಿತ್ರದಲ್ಲೇ ಅಕ್ಷರ ಬದಲಿಸಿ',
      rating: '4.9',
      usersCount: '94K+',
      href: '/screenshot-editor',
      cardBg: 'bg-gradient-to-br from-sky-100/95 via-blue-50/50 to-white border-2 border-sky-300 shadow-sm hover:shadow-xl hover:border-sky-400',
      category: 'tools',
    },
    {
      id: 'tool-catering',
      titleKn: 'ಅಡುಗೆ ಸಾಮಗ್ರಿ ಅಂದಾಜು',
      descKn: '೫೦-೨೦೦೦ ಜನರಿಗೆ ಅಕ್ಕಿ, ಬೇಳೆ, ಎಣ್ಣೆ & ದಿನಸಿ ಶೀಟ್',
      rating: '4.9',
      usersCount: '78K+',
      href: '/catering-estimator',
      cardBg: 'bg-gradient-to-br from-amber-100/95 via-orange-50/50 to-white border-2 border-amber-300 shadow-sm hover:shadow-xl hover:border-amber-400',
      category: 'shopping',
    },
    {
      id: 'tool-calendar',
      titleKn: 'ಸಾಂಪ್ರದಾಯಿಕ ಕನ್ನಡ ಕ್ಯಾಲೆಂಡರ್',
      descKn: 'ದಿನದ ತಿಥಿ, ವಾರ, ನಕ್ಷತ್ರ, ರಾಹುಕಾಲ & HD ಶೀಟ್',
      rating: '4.9',
      usersCount: '112K+',
      href: '/kannada-calendar',
      cardBg: 'bg-gradient-to-br from-red-100/95 via-rose-50/50 to-white border-2 border-red-300 shadow-sm hover:shadow-xl hover:border-red-400',
      category: 'lifestyle',
    },
    {
      id: 'tool-baby',
      titleKn: 'ಮಕ್ಕಳ ಸುಂದರ ಹೆಸರು & ಅರ್ಥ',
      descKn: 'ರಾಶಿ, ನಕ್ಷತ್ರ & ನಾಮಕರಣ ಅನೌನ್ಸ್‌ಮೆಂಟ್ ಕಾರ್ಡ್',
      rating: '4.9',
      usersCount: '68K+',
      href: '/baby-names',
      cardBg: 'bg-gradient-to-br from-blue-100/95 via-indigo-50/50 to-white border-2 border-blue-300 shadow-sm hover:shadow-xl hover:border-blue-400',
      category: 'lifestyle',
    },
    {
      id: 'tool-biodata',
      titleKn: 'ಮದುವೆ ಬಯೋಡೇಟಾ ಮೇಕರ್',
      descKn: 'ವಧು-ವರರ ಜಾತಕ, ಶಿಕ್ಷಣ & ರಾಯಲ್ ಪ್ರೊಫೈಲ್ ಕಾರ್ಡ್',
      rating: '4.9',
      usersCount: '89K+',
      href: '/biodata-maker',
      cardBg: 'bg-gradient-to-br from-pink-100/95 via-rose-50/50 to-white border-2 border-pink-300 shadow-sm hover:shadow-xl hover:border-pink-400',
      category: 'events',
    },
    {
      id: 'tool-land',
      titleKn: 'ಜಮೀನು ಅಳತೆ & ಸರ್ವೆ ನಕ್ಷೆ',
      descKn: '೪ ದಿಕ್ಕುಗಳ ಅಳತೆ, ಗುಂಟೆ, ಎಕರೆ & HD ಸರ್ವೆ ಕಾರ್ಡ್',
      rating: '4.9',
      usersCount: '96K+',
      href: '/land-converter',
      cardBg: 'bg-gradient-to-br from-green-100/95 via-emerald-50/50 to-white border-2 border-green-300 shadow-sm hover:shadow-xl hover:border-green-400',
      category: 'agriculture',
    },
    {
      id: 'tool-diet',
      titleKn: 'ತೂಕ ಇಳಿಸುವ ಡಯಟ್ ಚಾರ್ಟ್',
      descKn: 'ರಾಗಿ ಮುದ್ದೆ & ಪೌಷ್ಟಿಕ ಆಹಾರದ HD ಡಯಟ್ ಪ್ಲಾನ್',
      rating: '4.9',
      usersCount: '83K+',
      href: '/diet-chart',
      cardBg: 'bg-gradient-to-br from-emerald-100/95 via-green-50/50 to-white border-2 border-emerald-300 shadow-sm hover:shadow-xl hover:border-emerald-400',
      category: 'health',
    },
    {
      id: 'tool-invitation',
      titleKn: 'ಡಿಜಿಟಲ್ ಲಗ್ನ ಪತ್ರಿಕೆ ಮೇಕರ್',
      descKn: 'ಮದುವೆ, ಗೃಹಪ್ರವೇಶಕ್ಕೆ ರಾಯಲ್ ಆಮಂತ್ರಣ ಕಾರ್ಡ್',
      rating: '4.9',
      usersCount: '74K+',
      href: '/invitation-maker',
      cardBg: 'bg-gradient-to-br from-rose-100/95 via-red-50/50 to-white border-2 border-rose-300 shadow-sm hover:shadow-xl hover:border-rose-400',
      category: 'events',
    },
    {
      id: 'tool-kirani',
      titleKn: 'ಕಿರಣಿ ಸಂತೆ ಲಿಸ್ಟ್ ಮೇಕರ್',
      descKn: 'ದಿನಸಿ & ಸಂತೆ ಸಾಮಗ್ರಿಗಳ HD ಲಿಸ್ಟ್ ರಚಿಸಿ',
      rating: '4.9',
      usersCount: '48K+',
      href: '/kirani-sante',
      cardBg: 'bg-gradient-to-br from-amber-100/95 via-yellow-50/50 to-white border-2 border-amber-300 shadow-sm hover:shadow-xl hover:border-amber-400',
      category: 'shopping',
    },
    {
      id: 'tool-baddi',
      titleKn: 'ಗ್ರಾಮ ಬಡ್ಡಿ ಲೆಕ್ಕಾಚಾರ',
      descKn: 'ನೂರಕ್ಕೆ ₹1, ₹2, ₹3 ತಿಂಗಳ ಬಡ್ಡಿ & HD ರಶೀದಿ',
      rating: '4.9',
      usersCount: '62K+',
      href: '/grama-baddi',
      cardBg: 'bg-gradient-to-br from-teal-100/95 via-emerald-50/50 to-white border-2 border-teal-300 shadow-sm hover:shadow-xl hover:border-teal-400',
      category: 'finance',
    },
  ];

  // Filtered lists based on category pills
  const filteredLiveApps = liveUpdateApps.filter(app => {
    if (activeLiveCategory === 'all') return true;
    return app.category === activeLiveCategory;
  });

  const filteredUsefulTools = usefulTools.filter(tool => {
    if (activeToolCategory === 'all') return true;
    return tool.category === activeToolCategory;
  });

  const renderLive3DIcon = (id: string) => {
    switch (id) {
      case 'live-gold': return <GoldBars3D className="w-12 h-12 sm:w-14 sm:h-14" />;
      case 'live-petrol': return <PetrolPump3D className="w-12 h-12 sm:w-14 sm:h-14" />;
      case 'live-veg': return <VegBasket3D className="w-12 h-12 sm:w-14 sm:h-14" />;
      case 'live-weather': return <WeatherSunCloud3D className="w-12 h-12 sm:w-14 sm:h-14" />;
      case 'live-stock': return <StockChart3D className="w-12 h-12 sm:w-14 sm:h-14" />;
      case 'live-crypto': return <BitcoinCoin3D className="w-12 h-12 sm:w-14 sm:h-14" />;
      default: return <GoldBars3D className="w-12 h-12 sm:w-14 sm:h-14" />;
    }
  };

  const renderTool3DIcon = (id: string) => {
    switch (id) {
      case 'tool-letter': return <GovtLetter3D className="w-12 h-12 sm:w-14 sm:h-14" />;
      case 'tool-budget': return <FamilyBudget3D className="w-12 h-12 sm:w-14 sm:h-14" />;
      case 'tool-screenshot': return <ScreenshotEditor3D className="w-12 h-12 sm:w-14 sm:h-14" />;
      case 'tool-catering': return <CateringEstimator3D className="w-12 h-12 sm:w-14 sm:h-14" />;
      case 'tool-calendar': return <TraditionalCalendar3D className="w-12 h-12 sm:w-14 sm:h-14" />;
      case 'tool-baby': return <BabyNames3D className="w-12 h-12 sm:w-14 sm:h-14" />;
      case 'tool-biodata': return <MarriageBiodata3D className="w-12 h-12 sm:w-14 sm:h-14" />;
      case 'tool-land': return <LandSurvey3D className="w-12 h-12 sm:w-14 sm:h-14" />;
      case 'tool-diet': return <WeightLossDiet3D className="w-12 h-12 sm:w-14 sm:h-14" />;
      case 'tool-invitation': return <Invitation3D className="w-12 h-12 sm:w-14 sm:h-14" />;
      case 'tool-baddi': return <VillageBaddi3D className="w-12 h-12 sm:w-14 sm:h-14" />;
      case 'tool-kirani': return <KiraniList3D className="w-12 h-12 sm:w-14 sm:h-14" />;
      case 'tool-age': return <AgeCalc3D className="w-12 h-12 sm:w-14 sm:h-14" />;
      case 'tool-emi': return <EmiCalc3D className="w-12 h-12 sm:w-14 sm:h-14" />;
      case 'tool-pdf': return <PdfToJpg3D className="w-12 h-12 sm:w-14 sm:h-14" />;
      case 'tool-bmi': return <BmiCalc3D className="w-12 h-12 sm:w-14 sm:h-14" />;
      case 'tool-compressor': return <ImageCompressor3D className="w-12 h-12 sm:w-14 sm:h-14" />;
      case 'tool-qr': return <QrGenerator3D className="w-12 h-12 sm:w-14 sm:h-14" />;
      default: return <GovtLetter3D className="w-12 h-12 sm:w-14 sm:h-14" />;
    }
  };

  return (
    <div className="space-y-5 select-none max-w-full overflow-x-hidden pt-1">
      
      {/* GLOBAL SEARCH MODAL */}
      {showHeroSearchModal && (
        <SmartSearchModal
          query={searchQuery}
          onQueryChange={setSearchQuery}
          onClose={() => setShowHeroSearchModal(false)}
        />
      )}

      {/* SHARE MODAL */}
      {showShareModal && <ShareModal onClose={() => setShowShareModal(false)} />}

      {/* STANDALONE APP PWA INSTALLATION MODAL */}
      {installingAppItem && (
        <PWAInstallModal
          appName={lang === 'kn' ? installingAppItem.titleKn : installingAppItem.titleEn}
          appUrl={installingAppItem.href}
          onClose={() => setInstallingAppItem(null)}
        />
      )}

      {/* 🌟 2 MAIN PILLARS FLOATING SWITCHER TABS */}
      <div className="max-w-2xl mx-auto px-0.5">
        <div className="bg-slate-100 p-1 rounded-full border border-slate-200 flex items-center gap-1 shadow-inner">
          
          {/* TAB 1: 📡 Live Update Apps */}
          <button
            onClick={() => setActiveMainTab('live')}
            className={`flex-1 py-2.5 px-3 rounded-full text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-1.5 shadow-sm ${
              activeMainTab === 'live'
                ? 'bg-blue-600 text-white shadow-blue-500/30'
                : 'bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Radio className={`w-4 h-4 ${activeMainTab === 'live' ? 'text-white' : 'text-blue-600'}`} />
            <span>{lang === 'kn' ? 'Live Update Apps' : 'Live Update Apps'}</span>
            <span className="text-[9px] font-black bg-blue-900 text-white px-2 py-0.2 rounded-full">
              {liveUpdateApps.length}
            </span>
          </button>

          {/* TAB 2: 🔮 Daily Useful Tools */}
          <button
            onClick={() => setActiveMainTab('tools')}
            className={`flex-1 py-2.5 px-3 rounded-full text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-1.5 shadow-sm ${
              activeMainTab === 'tools'
                ? 'bg-purple-600 text-white shadow-purple-500/30'
                : 'bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Grid className={`w-4 h-4 ${activeMainTab === 'tools' ? 'text-white' : 'text-purple-600'}`} />
            <span>{lang === 'kn' ? 'Daily Useful Tools' : 'Daily Useful Tools'}</span>
            <span className="text-[9px] font-black bg-purple-900 text-white px-2 py-0.2 rounded-full">
              {usefulTools.length}
            </span>
          </button>

        </div>
      </div>

      {/* ========================================================================================= */}
      {/* 📡 MODE 1: LIVE UPDATE APPS VIEW */}
      {/* ========================================================================================= */}
      {activeMainTab === 'live' && (
        <div className="space-y-5 animate-fadeIn">
          
          {/* DEDICATED LIVE HERO BANNER */}
          <div className="bg-gradient-to-r from-blue-950 via-indigo-900 to-slate-950 text-white rounded-3xl p-5 sm:p-7 shadow-xl relative overflow-hidden space-y-3 border border-blue-800/40">
            
            <div className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-[9px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>LIVE UPDATES SECTION</span>
            </div>

            <h1 className="text-lg sm:text-2xl font-black tracking-tight leading-snug">
              {lang === 'kn' ? 'ಲೈವ್ ಅಪ್‌ಡೇಟ್ ಆಪ್‌ಗಳ ವಿಭಾಗ' : 'Live Update Applications Section'}
            </h1>

            <p className="text-[11px] sm:text-xs font-semibold text-slate-300 leading-relaxed max-w-xl">
              {lang === 'kn'
                ? 'ನೀವು ಸೂಚಿಸುವ ಲೈವ್ ದರಗಳು ಮತ್ತು ಅಪ್‌ಡೇಟ್ ಆಪ್‌ಗಳನ್ನು (Gold, Petrol, Market, etc.) ಒಂದೊಂದಾಗಿ ಇಲ್ಲಿ ಸೇರಿಸಲಾಗುತ್ತದೆ.'
                : 'Live update apps are ready to be added one by one according to your instructions.'}
            </p>

            <div className="flex items-center gap-2.5 text-[10px] font-bold text-slate-300">
              <span className="flex items-center gap-1 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Ready to Add Live Apps</span>
              </span>
            </div>

          </div>

          {/* 📡 LIVE UPDATE APPS GRID / EMPTY STATE */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-blue-600 animate-pulse" />
                <h2 className="text-sm sm:text-base font-black text-slate-950">
                  {lang === 'kn' ? 'Live Update Apps' : 'Live Update Apps'} ({liveUpdateApps.length})
                </h2>
              </div>
            </div>

            {liveUpdateApps.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {filteredLiveApps.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`${item.cardBg} p-3.5 sm:p-4 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:scale-[1.02] flex flex-col justify-between space-y-3 group select-none relative`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="shrink-0 flex items-center justify-center filter drop-shadow-md">
                        {renderLive3DIcon(item.id)}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-1">
                          <div>
                            <h3 className="text-xs sm:text-sm font-black text-slate-950 leading-tight group-hover:text-blue-600 transition-colors">
                              {lang === 'kn' ? item.titleKn : item.titleEn}
                            </h3>
                            <p className="text-[10px] sm:text-[11px] font-bold text-slate-600 mt-0.5">
                              {lang === 'kn' ? item.subTitleKn : item.titleEn}
                            </p>
                          </div>

                          <span className="text-[8px] font-black text-white bg-rose-600 px-1.5 py-0.5 rounded-full uppercase tracking-wider shrink-0 flex items-center gap-0.5 shadow-2xs">
                            <span className="w-1 h-1 rounded-full bg-white animate-pulse" />
                            <span>LIVE</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between gap-1">
                      <div>
                        <span className="text-sm sm:text-base font-black text-slate-950 block tracking-tight">
                          {item.valueKn}
                        </span>
                        {item.subValueKn && (
                          <span className="text-[10px] font-bold text-slate-500">{item.subValueKn}</span>
                        )}
                      </div>

                      <span className={`text-[10px] sm:text-xs font-black px-2 py-0.5 rounded-lg flex items-center gap-0.5 shrink-0 ${
                        item.changeIsUp
                          ? 'bg-emerald-100/90 text-emerald-800 border border-emerald-300/80'
                          : 'bg-rose-100/90 text-rose-800 border border-rose-300/80'
                      }`}>
                        {item.changeIsUp ? '▲' : '▼'} {item.changeKn}
                      </span>
                    </div>

                    <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[10px] font-extrabold text-slate-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span>{item.timestamp}</span>
                      </span>
                      <span className="truncate">Source: {item.source}</span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl border-2 border-dashed border-blue-200 p-8 sm:p-12 text-center space-y-4 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center mx-auto text-blue-600 shadow-inner">
                  <Radio className="w-8 h-8 text-blue-600 animate-pulse" />
                </div>

                <div className="space-y-1 max-w-md mx-auto">
                  <h3 className="text-base sm:text-lg font-black text-slate-900">
                    {lang === 'kn' ? 'ಲೈವ್ ಆಪ್‌ಗಳನ್ನು ಸೇರಿಸಲು ಸಿದ್ಧವಾಗಿದೆ!' : 'Ready to Add Live Apps!'}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {lang === 'kn'
                      ? 'ನೀವು ತಿಳಿಸುವ ಲೈವ್ ಅಪ್‌ಡೇಟ್ ಆಪ್‌ನ ಹೆಸರನ್ನು (ಉದಾ: ಚಿನ್ನದ ದರ, ಪೆಟ್ರೋಲ್, ಹವಾಮಾನ, ಇತ್ಯಾದಿ) ಒಂದೊಂದಾಗಿ ಇಲ್ಲಿ ಸೇರಿಸಲಾಗುವುದು.'
                      : 'Please tell the name of the live update app you want to add.'}
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>
      )}

      {/* ========================================================================================= */}
      {/* 🔮 MODE 2: DAILY USEFUL TOOLS VIEW */}
      {/* ========================================================================================= */}
      {activeMainTab === 'tools' && (
        <div className="space-y-5 animate-fadeIn">
          
          {/* DEDICATED UTILITY HERO BANNER */}
          <div className="bg-gradient-to-r from-purple-100 via-purple-50 to-indigo-100 text-slate-950 rounded-3xl p-5 sm:p-7 border-2 border-purple-200/80 shadow-md relative overflow-hidden space-y-3">
            
            <div className="inline-flex items-center gap-1.5 bg-purple-600 text-white text-[9px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3 h-3" />
              <span>100% USEFUL APPS</span>
            </div>

            <h1 className="text-lg sm:text-2xl font-black tracking-tight leading-snug text-purple-950">
              {lang === 'kn' ? 'ನಿಮ್ಮ ದಿನನಿತ್ಯದ ಕೆಲಸಗಳಿಗೆ ಅಗತ್ಯವಾದ ಆಪ್‌ಗಳು' : 'Daily Useful Tools & Applications'}
            </h1>

            <p className="text-[11px] sm:text-xs font-semibold text-purple-800 leading-relaxed max-w-xl">
              {lang === 'kn'
                ? 'ನೀವು ಸೂಚಿಸುವ ಪ್ರತಿಯೊಂದು ಆಪ್ ಅನ್ನು ಒಂದೊಂದಾಗಿ ಕರಾರುವಾಕ್ಕಾಗಿ ಇಲ್ಲಿ ಸೇರಿಸಲಾಗುತ್ತದೆ.'
                : 'Apps are ready to be added one by one according to your requirements.'}
            </p>

            <div className="flex items-center gap-2.5 text-[11px] font-black text-purple-900 flex-wrap">
              <span className="flex items-center gap-1 bg-white/80 px-2 py-0.5 rounded-full border border-purple-200">
                <Check className="w-3 h-3 text-emerald-600" /> 100% Free
              </span>
              <span className="flex items-center gap-1 bg-white/80 px-2 py-0.5 rounded-full border border-purple-200">
                <Check className="w-3 h-3 text-emerald-600" /> Fast & Accurate
              </span>
              <span className="flex items-center gap-1 bg-white/80 px-2 py-0.5 rounded-full border border-purple-200">
                <Check className="w-3 h-3 text-emerald-600" /> Lifetime Zero-API
              </span>
            </div>

          </div>

          {/* 🔮 POPULAR TOOLS GRID / EMPTY STATE */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <h2 className="text-sm sm:text-base font-black text-slate-950">
                  {lang === 'kn' ? 'Daily Useful Tools' : 'Daily Useful Tools'} ({usefulTools.length})
                </h2>
              </div>
            </div>

            {usefulTools.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4">
                {filteredUsefulTools.map((tool) => (
                  <div
                    key={tool.id}
                    className={`${tool.cardBg} p-3.5 sm:p-4 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:scale-[1.02] flex flex-col justify-between space-y-3 group select-none relative`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <div className="shrink-0 flex items-center justify-center filter drop-shadow-md">
                          {renderTool3DIcon(tool.id)}
                        </div>

                        <div className="flex items-center gap-0.5 bg-amber-500/10 px-2 py-0.5 rounded-xl border border-amber-300/80 text-xs font-black text-amber-950">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
                          <span>{tool.rating} ({tool.usersCount})</span>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xs sm:text-sm font-black text-slate-950 leading-tight group-hover:text-purple-600 transition-colors">
                          {tool.titleKn}
                        </h3>
                        <p className="text-[10px] sm:text-[11px] font-bold text-slate-600 mt-0.5">
                          {tool.descKn}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between gap-1">
                      <span className="text-[9px] font-black text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-md border border-emerald-300/80 flex items-center gap-0.5 shrink-0">
                        <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                        <span>Free Tool</span>
                      </span>

                      <Link
                        href={tool.href}
                        className="px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-black text-[11px] shadow-md transition-transform active:scale-95 flex items-center gap-0.5 shrink-0"
                      >
                        <span>ತೆರೆಯಿರಿ ➔</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl border-2 border-dashed border-purple-200 p-8 sm:p-12 text-center space-y-4 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-purple-50 border border-purple-200 flex items-center justify-center mx-auto text-purple-600 shadow-inner">
                  <PlusCircle className="w-8 h-8 text-purple-600 animate-pulse" />
                </div>

                <div className="space-y-1 max-w-md mx-auto">
                  <h3 className="text-base sm:text-lg font-black text-slate-900">
                    {lang === 'kn' ? 'ಆಪ್‌ಗಳನ್ನು ಸೇರಿಸಲು ಸಿದ್ಧವಾಗಿದೆ!' : 'Ready to Add Apps!'}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {lang === 'kn'
                      ? 'ನೀವು ತಿಳಿಸುವ ಆಪ್‌ನ ಹೆಸರನ್ನು (ಉದಾ: ವಯಸ್ಸು ಲೆಕ್ಕಾಚಾರ, EMI, ಇತ್ಯಾದಿ) ಒಂದೊಂದಾಗಿ ಇಲ್ಲಿ ಪ್ರೀಮಿಯಂ 3D ಡಿಸೈನ್‌ನೊಂದಿಗೆ ಸೇರಿಸಲಾಗುವುದು.'
                      : 'Please tell the name of the app you want to add one by one.'}
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>
      )}

      {/* 💬 PUBLIC COMMENT & REVIEWS SECTION */}
      <CommentSection pageId="home" />

    </div>
  );
}
