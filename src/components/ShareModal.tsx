"use client";

import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import {
  Share2, MessageSquare, Send, Facebook, Twitter, Copy, Check, X,
  ExternalLink, Sparkles
} from 'lucide-react';

interface ShareModalProps {
  title?: string;
  url?: string;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ title, url, onClose }) => {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);

  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : 'https://mahiti-chakra-portal.vercel.app');
  const shareTitle = title || (lang === 'kn' ? '💛 ಮಾಹಿತಿ ಚಕ್ರ - ಕರ್ನಾಟಕದ #1 ಡಿಜಿಟಲ್ ಸಹಾಯ ಪೋರ್ಟಲ್! ಎಲ್ಲಾ ಲೆಕ್ಕಾಚಾರ & ಸೇವೆಗಳು ಉಚಿತ!' : '💛 Mahiti Chakra Help Portal - All Calculators & Live Rates!');
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedText = encodeURIComponent(`${shareTitle}\n👉 ನೋಡಿ: ${currentUrl}`);

  const handleCopy = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareTitle,
          url: currentUrl,
        });
      } catch (err) {
        console.log('Share error:', err);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-md p-4 animate-fadeIn select-none">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-md w-full p-6 space-y-6 relative text-slate-900 animate-springPop">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-xl shadow-lg shadow-amber-500/20 shrink-0">
            <Share2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-black text-slate-950">
              {lang === 'kn' ? '📲 ಜನರಿಗೆ ಶೇರ್ ಮಾಡಿ' : '📲 Share with Friends'}
            </h3>
            <p className="text-xs font-semibold text-slate-500">
              {lang === 'kn' ? 'ನಿಮ್ಮ ಸ್ನೇಹಿತರು ಹಾಗೂ ವಾಟ್ಸಾಪ್ ಗ್ರೂಪ್‌ಗಳಿಗೆ ಲಿಂಕ್ ಕಳುಹಿಸಿ!' : 'Share website or tool link on WhatsApp & Social Media!'}
            </p>
          </div>
        </div>

        {/* 1-CLICK SOCIAL SHARE BUTTONS GRID */}
        <div className="grid grid-cols-2 gap-3 text-xs font-black">
          {/* WhatsApp Direct */}
          <a
            href={`https://api.whatsapp.com/send?text=${encodedText}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition-all active:scale-95 border border-emerald-500"
          >
            <MessageSquare className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>

          {/* Telegram Direct */}
          <a
            href={`https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white shadow-md transition-all active:scale-95 border border-sky-500"
          >
            <Send className="w-5 h-5" />
            <span>Telegram</span>
          </a>

          {/* Facebook */}
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-all active:scale-95 border border-blue-500"
          >
            <Facebook className="w-5 h-5" />
            <span>Facebook</span>
          </a>

          {/* Twitter / X */}
          <a
            href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-amber-400 shadow-md transition-all active:scale-95 border border-slate-800"
          >
            <Twitter className="w-5 h-5" />
            <span>X (Twitter)</span>
          </a>
        </div>

        {/* COPY LINK SECTION */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          <label className="block text-xs font-black text-slate-800">
            {lang === 'kn' ? '📋 ಲಿಂಕ್ ಕಾಪಿ ಮಾಡಿ (Copy Web Link)' : '📋 Copy Website Link'}
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={currentUrl}
              className="flex-1 bg-slate-100 border border-slate-300 rounded-xl p-2.5 text-xs font-bold text-slate-800 select-all"
            />
            <button
              onClick={handleCopy}
              className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs shadow-md transition-all active:scale-95 shrink-0 flex items-center gap-1.5"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? (lang === 'kn' ? 'ಕಾಪಿ ಆಗಿದೆ! ✅' : 'Copied!') : (lang === 'kn' ? 'ಕಾಪಿ ಮಾಡಿ' : 'Copy')}</span>
            </button>
          </div>
        </div>

        {/* NATIVE SHARE BUTTON (Mobile only) */}
        {typeof navigator !== 'undefined' && 'share' in navigator && (
          <button
            onClick={handleNativeShare}
            className="w-full py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-extrabold text-xs flex items-center justify-center gap-2 border border-slate-300 shadow-2xs"
          >
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>{lang === 'kn' ? 'ಇತರೆ ಆಪ್‌ಗಳಲ್ಲಿ ಶೇರ್ ಮಾಡಿ' : 'More Sharing Options'}</span>
          </button>
        )}

      </div>
    </div>
  );
};
