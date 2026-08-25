"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';
import { getStoredAppItems } from '@/lib/appsStore';
import { AppItem } from '@/lib/types';
import {
  Search, Star, ArrowRight, X, Sparkles, CheckCircle2,
  Calculator, Calendar, Flame, FileText, HeartPulse, Gauge, Zap
} from 'lucide-react';

interface SmartSearchModalProps {
  query: string;
  onQueryChange: (q: string) => void;
  onClose: () => void;
}

export const SmartSearchModal: React.FC<SmartSearchModalProps> = ({ query, onQueryChange, onClose }) => {
  const { lang } = useLanguage();
  const [apps, setApps] = useState<AppItem[]>([]);

  useEffect(() => {
    setApps(getStoredAppItems());
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
      // 1. Vehicle / Mileage Calculator (app-mileage / fuel)
      mileage: ['vahana', 'vehi', 'vehicle', 'mileage', 'bike', 'car', 'auto', 'petrol', 'fuel', 'litre', 'kpl', 'maileju', 'ವಾಹನ', 'ಮೈಲೇಜ್', 'ಪೆಟ್ರೋಲ್', 'ಡೀಸೆಲ್'],
      // 2. EMI Calculator (app-emi)
      emi: ['saala', 'baddi', 'loan', 'interest', 'emi', 'kist', 'kistu', 'bank', 'home loan', 'car loan', 'mortgage', 'finance', 'ಸಾಲ', 'ಬಡ್ಡಿ', 'ಹಣಕಾಸು', 'ಲೆಕ್ಕಾಚಾರ'],
      // 3. Age Calculator (app-age)
      age: ['vayassu', 'vayas', 'age', 'dob', 'birth', 'date of birth', 'janma', 'janmadina', 'huttida', 'vayasina', 'ವಯಸ್ಸು', 'ಹುಟ್ಟಿದ ದಿನಾಂಕ', 'ದಿನಾಂಕ'],
      // 4. LPG & Grocery Rates (app-lpg / dinasi)
      lpg: ['lpg', 'gas', 'cylinder', 'dinasi', 'grocery', 'price', 'rate', 'bhavan', 'indane', 'hp', 'bharat', 'ಗ್ಯಾಸ್', 'ಸಿಲಿಂಡರ್', 'ದಿನಸಿ', 'ದರ'],
      // 5. PDF to JPG & Photo Resizer (app-pdf / photo-resizer)
      pdf: ['pdf', 'jpg', 'jpeg', 'photo', 'image', 'resizer', 'convert', 'converter', 'dakhale', '20kb', '50kb', '100kb', 'doc', 'document', 'ಫೋಟೋ', 'ದಾಖಲೆ', 'ಚಿತ್ರ'],
      // 6. BMI Health Calculator (app-bmi)
      bmi: ['bmi', 'health', 'weight', 'height', 'body', 'arogya', 'tooga', 'fitness', 'ಆರೋಗ್ಯ', 'ತೂಕ', 'ಎತ್ತರ', 'ದೇಹ'],
      // 7. Date Interval Calculator (app-date)
      date: ['date', 'interval', 'difference', 'days', 'duration', 'calendar', 'dinaanka', 'antar', 'ದಿನಾಂಕ', 'ಅಂತರ', 'ದಿನಗಳು'],
      // 8. Calorie Calculator (app-calorie)
      calorie: ['calorie', 'calories', 'diet', 'food', 'nutrition', 'intake', 'aahara', 'oota', 'ಕ್ಯಾಲೋರಿ', 'ಆಹಾರ', 'ಊಟ'],
      // 9. Krushi & APMC Rates (krushi-rates)
      krushi: ['krushi', 'apmc', 'raitha', 'bele', 'crop', 'adike', 'arecanut', 'coconut', 'bhatta', 'jolada', 'market', 'ಕೃಷಿ', 'ಬೆಳೆ', 'ಅಡಿಕೆ', 'ರೈತ'],
      // 10. Gold & Silver Rates (gold-rates)
      gold: ['gold', 'silver', 'chinna', 'belli', '24k', '22k', 'rate', 'price', 'tola', 'abharana', 'jewelry', 'ಚಿನ್ನ', 'ಬೆಳ್ಳಿ', 'ಆಭರಣ'],
      // 11. Panchanga (panchanga)
      panchanga: ['panchanga', 'rashi', 'nakshatra', 'jathaka', 'tithi', 'muhurtha', 'today', 'ಪಂಚಾಂಗ', 'ರಾಶಿ', 'ನಕ್ಷತ್ರ', 'ತಿಥಿ'],
      // 12. Tax & GST Calculator (tax-calculator)
      tax: ['tax', 'gst', 'income tax', 'terige', 'it', 'filing', 'slab', 'percent', 'ತೆರಿಗೆ', 'ಜಿಎಸ್‌ಟಿ'],
      // 13. SIP Calculator (sip-calculator)
      sip: ['sip', 'mutual', 'fund', 'investment', 'hudaike', 'return', 'cagr', 'ಹೂಡಿಕೆ', 'ಮ್ಯೂಚುಯಲ್ ಫಂಡ್'],
      // 14. Land Converter (land-converter)
      land: ['land', 'converter', 'gunta', 'acre', 'cent', 'sqft', 'hektar', 'jameen', 'bhoomi', 'ಜಮೀನು', 'ಭೂಮಿ', 'ಗುಂಟೆ', 'ಎಕರೆ'],
    };

    // Check if query matches any app keywords set
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
    <div className="absolute left-0 right-0 top-full mt-2 z-50 bg-white rounded-3xl border-2 border-amber-400/80 shadow-2xl p-4 space-y-3 max-h-[80vh] overflow-y-auto animate-springPop">
      {/* Search Header Status */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span className="text-xs font-black text-slate-950">
            {lang === 'kn' ? `ಲೈವ್ ಹುಡುಕಾಟದ ಫಲಿತಾಂಶಗಳು (${results.length})` : `Live Search Results (${results.length})`}
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Suggested Results List */}
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
                <span>{lang === 'kn' ? 'ಓಪನ್' : 'Open'}</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="py-8 text-center space-y-2">
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
  );
};
