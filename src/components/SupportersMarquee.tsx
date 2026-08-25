"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { getStoredSupporters } from '@/lib/appsStore';
import { SupporterCard } from '@/lib/types';
import { Heart, ExternalLink, Sparkles, Youtube, UserCheck } from 'lucide-react';

export const SupportersMarquee: React.FC = () => {
  const { lang } = useLanguage();
  const [supporters, setSupporters] = useState<SupporterCard[]>([]);

  useEffect(() => {
    setSupporters(getStoredSupporters());
  }, []);

  if (!supporters || supporters.length === 0) return null;

  // Duplicate supporters array to create seamless infinite loop effect
  const loopSupporters = [...supporters, ...supporters, ...supporters];

  return (
    <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-amber-500/10 border-t border-b border-amber-300/60 py-8 px-4 overflow-hidden select-none relative">
      <div className="max-w-7xl mx-auto space-y-4">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-200/80 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-rose-500 text-white flex items-center justify-center font-black shadow-md shrink-0">
              <Heart className="w-5 h-5 fill-white text-white" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-black text-slate-950 flex items-center gap-2">
                <span>{lang === 'kn' ? '❤️ ನಮ್ಮ ಸಪೋರ್ಟರ್ಸ್ & ಕ್ರಿಯೇಟರ್ಸ್ (Supporters & Creator Wall)' : '❤️ Our Supporters & Creators'}</span>
                <span className="text-[10px] font-black bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded-full uppercase shadow-2xs">
                  Featured Creators
                </span>
              </h3>
              <p className="text-[11px] text-slate-600 font-bold">
                {lang === 'kn' ? 'ಮಹಿತಿ ಚಕ್ರ ವೆಬ್‌ಸೈಟ್‌ಗೆ ಸಾಥ್ ನೀಡಿದ ಯೂಟ್ಯೂಬ್ ಹಾಗೂ ಡಿಜಿಟಲ್ ಕಂಟೆಂಟ್ ಕ್ರಿಯೇಟರ್‌ಗಳು.' : 'Digital creators & YouTubers featuring Mahiti Chakra portal.'}
              </p>
            </div>
          </div>
        </div>

        {/* INFINITE MOVING MARQUEE CAROUSEL (CLEAN PREMIUM LIGHT MODE) */}
        <div className="relative overflow-hidden w-full py-2">
          {/* Left & Right Gradient Shadows */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-amber-50/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-amber-50/90 to-transparent z-10 pointer-events-none" />

          <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused] w-max">
            {loopSupporters.map((supporter, idx) => (
              <a
                key={`${supporter.id}-${idx}`}
                href={supporter.channelUrl || '#'}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-white hover:bg-amber-50/80 border-2 border-slate-200/90 hover:border-amber-500 p-3 rounded-2xl transition-all shadow-md group shrink-0"
              >
                {/* Small Creator DP Avatar */}
                {supporter.avatarUrl ? (
                  <img
                    src={supporter.avatarUrl}
                    alt={supporter.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-amber-500 shadow-xs shrink-0 group-hover:scale-105 transition-transform"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-950 border-2 border-amber-400 flex items-center justify-center font-black text-sm shrink-0">
                    <UserCheck className="w-5 h-5 text-amber-700" />
                  </div>
                )}

                {/* Creator Channel Info */}
                <div className="leading-tight">
                  <div className="flex items-center gap-1.5">
                    <span className="font-black text-xs text-slate-950 group-hover:text-amber-700 transition-colors">
                      {supporter.name}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-600" />
                  </div>

                  <span className="text-[10px] font-black text-amber-950 bg-amber-100 px-2 py-0.2 rounded-md block mt-1 w-fit border border-amber-300">
                    {supporter.badgeText || '⭐ Supporter'}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
