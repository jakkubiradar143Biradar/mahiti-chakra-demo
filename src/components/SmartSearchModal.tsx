"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';
import { getStoredAppItems } from '@/lib/appsStore';
import { AppItem } from '@/lib/types';
import {
  Search, Star, ArrowRight, X, Sparkles, CheckCircle2,
  Calculator, Calendar, Flame, FileText, HeartPulse, Gauge, Zap,
  TrendingUp, Compass
} from 'lucide-react';

interface SmartSearchModalProps {
  query: string;
  onQueryChange: (q: string) => void;
  onClose: () => void;
}

export const SmartSearchModal: React.FC<SmartSearchModalProps> = ({ query, onQueryChange, onClose }) => {
  const { lang } = useLanguage();
  const [apps, setApps] = useState<AppItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setApps(getStoredAppItems());
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // 🔍 100% UNIVERSAL BILINGUAL & PHONETIC SEARCH ENGINE FOR ALL APPS
  const results = apps.filter((app) => {
    if (!query.trim()) return false;
    const q = query.trim().toLowerCase();

    const titleKn = (app.titleKn || '').toLowerCase();
    const titleEn = (app.titleEn || '').toLowerCase();
    const descKn = (app.descKn || '').toLowerCase();
    const descEn = (app.descEn || '').toLowerCase();
    const category = (app.category || '').toLowerCase();
    const href = (app.href || '').toLowerCase();
    const id = (app.id || '').toLowerCase();

    // Direct String Match
    if (
      titleKn.includes(q) ||
      titleEn.includes(q) ||
      descKn.includes(q) ||
      descEn.includes(q) ||
      category.includes(q) ||
      href.includes(q) ||
      id.includes(q)
    ) {
      return true;
    }

    // Comprehensive Universal Keyword Dictionary for ALL Apps
    const appKeywords: Record<string, string[]> = {
      mileage: ['vahana', 'vehi', 'vehicle', 'mileage', 'bike', 'car', 'auto', 'petrol', 'fuel', 'litre', 'kpl', 'maileju', 'ವಾಹನ', 'ಮೈಲೇಜ್', 'ಪೆಟ್ರೋಲ್', 'ಡೀಸೆಲ್'],
      emi: ['saala', 'baddi', 'loan', 'interest', 'emi', 'kist', 'kistu', 'bank', 'home loan', 'car loan', 'mortgage', 'finance', 'ಸಾಲ', 'ಬಡ್ಡಿ', 'ಹಣಕಾಸು', 'ಲೆಕ್ಕಾಚಾರ'],
      age: ['vayassu', 'vayas', 'age', 'dob', 'birth', 'date of birth', 'janma', 'janmadina', 'huttida', 'vayasina', 'ವಯಸ್ಸು', 'ಹುಟ್ಟಿದ ದಿನಾಂಕ', 'ದಿನಾಂಕ'],
      lpg: ['lpg', 'gas', 'cylinder', 'dinasi', 'grocery', 'price', 'rate', 'bhavan', 'indane', 'hp', 'bharat', 'ಗ್ಯಾಸ್', 'ಸಿಲಿಂಡರ್', 'ದಿನಸಿ', 'ದರ'],
      pdf: ['pdf', 'jpg', 'jpeg', 'photo', 'image', 'resizer', 'convert', 'converter', 'dakhale', '20kb', '50kb', '100kb', 'doc', 'document', 'ಫೋಟೋ', 'ದಾಖಲೆ', 'ಚಿತ್ರ'],
      bmi: ['bmi', 'health', 'weight', 'height', 'body', 'arogya', 'tooga', 'fitness', 'ಆರೋಗ್ಯ', 'ತೂಕ', 'ಎತ್ತರ', 'ದೇಹ'],
      date: ['date', 'interval', 'difference', 'days', 'duration', 'calendar', 'dinaanka', 'antar', 'ದಿನಾಂಕ', 'ಅಂತರ', 'ದಿನಗಳು'],
      calorie: ['calorie', 'calories', 'diet', 'food', 'nutrition', 'intake', 'aahara', 'oota', 'ಕ್ಯಾಲೋರಿ', 'ಆಹಾರ', 'ಊಟ'],
      krushi: ['krushi', 'apmc', 'raitha', 'bele', 'crop', 'adike', 'arecanut', 'coconut', 'bhatta', 'jolada', 'market', 'ಕೃಷಿ', 'ಬೆಳೆ', 'ಅಡಿಕೆ', 'ರೈತ'],
      gold: ['gold', 'silver', 'chinna', 'belli', '24k', '22k', 'rate', 'price', 'tola', 'abharana', 'jewelry', 'ಚಿನ್ನ', 'ಬೆಳ್ಳಿ', 'ಆಭರಣ'],
      panchanga: ['panchanga', 'rashi', 'nakshatra', 'jathaka', 'tithi', 'muhurtha', 'today', 'ಪಂಚಾಂಗ', 'ರಾಶಿ', 'ನಕ್ಷತ್ರ', 'ತಿಥಿ'],
      tax: ['tax', 'gst', 'income tax', 'terige', 'it', 'filing', 'slab', 'percent', 'ತೆರಿಗೆ', 'ಜಿಎಸ್‌ಟಿ'],
      sip: ['sip', 'mutual', 'fund', 'investment', 'hudaike', 'return', 'cagr', 'ಹೂಡಿಕೆ', 'ಮ್ಯೂಚುಯಲ್ ಫಂಡ್'],
      land: ['land', 'converter', 'gunta', 'acre', 'cent', 'sqft', 'hektar', 'jameen', 'bhoomi', 'ಜಮೀನು', 'ಭೂಮಿ', 'ಗುಂಟೆ', 'ಎಕರೆ'],
    };

    for (const [key, terms] of Object.entries(appKeywords)) {
      const matchQuery = terms.some(t => q.includes(t) || t.includes(q));
      if (matchQuery) {
        if (key === 'mileage' && (id.includes('mileage') || href.includes('fuel') || titleKn.includes('ವಾಹನ') || titleEn.includes('mileage'))) return true;
        if (key === 'emi' && (id.includes('emi') || href.includes('emi') || titleKn.includes('emi') || titleKn.includes('ಸಾ'))) return true;
        if (key === 'age' && (id.includes('age') || href.includes('age') || titleKn.includes('ವಯಸ್ಸು'))) return true;
        if (key === 'lpg' && (id.includes('lpg') || href.includes('dinasi') || titleKn.includes('lpg') || titleKn.includes('ಗ್ಯಾಸ್'))) return true;
        if (key === 'pdf' && (id.includes('pdf') || href.includes('photo') || titleKn.includes('pdf') || titleKn.includes('ಫೋಟೋ'))) return true;
        if (key === 'bmi' && (id.includes('bmi') || href.includes('tax') || titleKn.includes('bmi') || titleKn.includes('ಆರೋಗ್ಯ'))) return true;
        if (key === 'date' && (id.includes('date') || titleKn.includes('ದಿನಾಂಕ'))) return true;
        if (key === 'calorie' && (id.includes('calorie') || titleKn.includes('ಕ್ಯಾಲೋರಿ'))) return true;
        if (key === 'krushi' && (id.includes('krushi') || href.includes('krushi') || titleKn.includes('ಕೃಷಿ'))) return true;
        if (key === 'gold' && (id.includes('gold') || href.includes('gold') || titleKn.includes('ಚಿನ್ನ'))) return true;
        if (key === 'panchanga' && (id.includes('panchanga') || href.includes('panchanga') || titleKn.includes('ಪಂಚಾಂಗ'))) return true;
        if (key === 'tax' && (id.includes('tax') || href.includes('tax') || titleKn.includes('ತೆರಿಗೆ'))) return true;
        if (key === 'sip' && (id.includes('sip') || href.includes('sip') || titleKn.includes('sip'))) return true;
        if (key === 'land' && (id.includes('land') || href.includes('land') || titleKn.includes('ಜಮೀನು'))) return true;
      }
    }

    return false;
  });

  const popularApps = apps.slice(0, 6);

  const quickSearchTags = [
    { kn: 'ವಯಸ್ಸು ಲೆಕ್ಕಾಚಾರ', en: 'age' },
    { kn: 'EMI ಸಾಲದ ಲೆಕ್ಕ', en: 'emi' },
    { kn: 'Photo Resizer', en: 'photo' },
    { kn: 'ಚಿನ್ನದ ದರ', en: 'gold' },
    { kn: 'APMC ಕೃಷಿ ಬೆಳೆ ದರ', en: 'krushi' },
    { kn: 'ವಾಹನ ಮೈಲೇಜ್', en: 'mileage' },
  ];

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Calendar': return <Calendar className="w-4 h-4" />;
      case 'Flame': return <Flame className="w-4 h-4" />;
      case 'FileText': return <FileText className="w-4 h-4" />;
      case 'HeartPulse': return <HeartPulse className="w-4 h-4" />;
      case 'Gauge': return <Gauge className="w-4 h-4" />;
      case 'Zap': return <Zap className="w-4 h-4" />;
      default: return <Calculator className="w-4 h-4" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-6 sm:pt-16 bg-slate-950/70 backdrop-blur-md p-3 sm:p-4 animate-fadeIn select-none">
      <div className="bg-white rounded-3xl border-2 border-amber-400/90 shadow-2xl max-w-xl w-full p-4 sm:p-6 space-y-4 relative text-slate-900 animate-springPop max-h-[85vh] overflow-y-auto">
        
        {/* Header Search Input Bar */}
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-500" />
          <input
            ref={inputRef}
            type="text"
            placeholder={lang === 'kn' ? 'ಉಪಕರಣ ಅಥವಾ ದರ ಹುಡುಕಿ... (ಉದಾ: vahana, saala, age, gold)...' : 'Search tools or rates... (e.g. EMI, age, photo, gold)...'}
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            className="w-full bg-slate-50 border-2 border-amber-400 rounded-2xl py-3 pl-11 pr-10 text-xs sm:text-sm font-black text-slate-950 focus:outline-none focus:ring-4 focus:ring-amber-500/20 shadow-sm"
          />
          <button
            onClick={onClose}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Search Tag Pills */}
        <div className="flex items-center gap-1.5 flex-wrap pt-1">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">{lang === 'kn' ? 'ತ್ವರಿತ ಹುಡುಕಾಟ:' : 'Quick Tags:'}</span>
          {quickSearchTags.map((tag, i) => (
            <button
              key={i}
              onClick={() => onQueryChange(tag.en)}
              className="px-2.5 py-1 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-[10px] font-black hover:bg-amber-500 transition-colors shadow-2xs"
            >
              {lang === 'kn' ? tag.kn : tag.en}
            </button>
          ))}
        </div>

        {/* Dynamic Live Search Results */}
        {query.trim() ? (
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="text-xs font-black text-slate-950">
                {lang === 'kn' ? `ಲೈವ್ ಹುಡುಕಾಟದ ಫಲಿತಾಂಶಗಳು (${results.length})` : `Search Results (${results.length})`}
              </span>
            </div>

            {results.length > 0 ? (
              <div className="space-y-2">
                {results.map((app) => (
                  <Link
                    key={app.id}
                    href={app.href}
                    onClick={onClose}
                    className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-amber-50 border border-slate-200/80 hover:border-amber-400 transition-all group shadow-2xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-2xs ${app.bgColor}`}>
                        {renderIcon(app.iconName)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs font-black text-slate-950 group-hover:text-amber-700 transition-colors">
                            {lang === 'kn' ? app.titleKn : app.titleEn}
                          </h4>
                          <span className="text-[9px] font-extrabold bg-amber-100 text-amber-900 px-2 py-0.2 rounded-md">
                            ★ {app.rating}
                          </span>
                        </div>
                        <p className="text-[11px] font-semibold text-slate-500 line-clamp-1 mt-0.5">
                          {lang === 'kn' ? app.descKn : app.descEn}
                        </p>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-950 text-amber-400 font-black text-[10px] group-hover:bg-amber-500 group-hover:text-slate-950 transition-all shrink-0">
                      <span>{lang === 'kn' ? 'ಓಪನ್ ➔' : 'Open ➔'}</span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="py-8 text-center space-y-2 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto">
                  <Search className="w-5 h-5" />
                </div>
                <p className="text-xs font-black text-slate-800">
                  {lang === 'kn' ? 'ಯಾವುದೇ ಫಲಿತಾಂಶ ದೊರೆಯಲಿಲ್ಲ' : 'No matching tools found'}
                </p>
                <p className="text-[11px] text-slate-500 font-semibold">
                  {lang === 'kn' ? 'ದಯವಿಟ್ಟು ಕನ್ನಡ ಅಥವಾ ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ಕೀವರ್ಡ್ ಟೈಪ್ ಮಾಡಿ (ಉದಾ: vahana, saala, vayassu, EMI, photo)' : 'Try typing in English or Kannada (e.g. vahana, EMI, age, photo, gold)'}
                </p>
              </div>
            )}
          </div>
        ) : (
          /* Default Popular Recommended Tools Grid when query is empty */
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-1.5 border-b border-slate-100 pb-2">
              <TrendingUp className="w-4 h-4 text-amber-600" />
              <span className="text-xs font-black text-slate-950 uppercase tracking-wider">
                {lang === 'kn' ? '🔥 ಜನಪ್ರಿಯ ಉಪಕರಣಗಳು (Recommended Apps)' : '🔥 Recommended Tools'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {popularApps.map((app) => (
                <Link
                  key={app.id}
                  href={app.href}
                  onClick={onClose}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 hover:bg-amber-50 border border-slate-200/90 hover:border-amber-400 transition-all group shadow-2xs"
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-2xs ${app.bgColor}`}>
                    {renderIcon(app.iconName)}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-black text-slate-950 group-hover:text-amber-700 truncate">
                      {lang === 'kn' ? app.titleKn : app.titleEn}
                    </h4>
                    <span className="text-[10px] font-semibold text-slate-500 block truncate">
                      {lang === 'kn' ? app.descKn : app.descEn}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
