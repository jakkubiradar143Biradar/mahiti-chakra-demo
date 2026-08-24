"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { Download, Smartphone, CheckCircle } from 'lucide-react';

export const InstallPWAButton: React.FC<{ variant?: 'nav' | 'banner' }> = ({ variant = 'nav' }) => {
  const { lang } = useLanguage();
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    } else {
      // Fallback instruction for browser
      alert(
        lang === 'kn'
          ? '📲 ನಿಮ್ಮ ಮೊಬೈಲ್ ಬ್ರೌಸರ್ ಮೆನುವಿನಲ್ಲಿ (3 Dots) "Add to Home Screen" ಅಥವಾ "Install App" ಕ್ಲಿಕ್ ಮಾಡಿ!'
          : '📲 Open browser menu (3 Dots) and tap "Add to Home Screen" or "Install App"!'
      );
    }
  };

  if (isInstalled) {
    return (
      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
        {lang === 'kn' ? 'ಆಪ್ ಇನ್‌ಸ್ಟಾಲ್ ಆಗಿದೆ' : 'App Installed'}
      </span>
    );
  }

  if (variant === 'banner') {
    return (
      <button
        onClick={handleInstallClick}
        className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-950 font-black text-xs shadow-lg shadow-amber-500/30 transition-transform active:scale-95 cursor-pointer"
      >
        <Smartphone className="w-4 h-4 text-slate-950" />
        <span>{lang === 'kn' ? '📲 1-ಕ್ಲಿಕ್‌ನಲ್ಲಿ ಆಪ್ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಿ (Install App)' : '📲 1-Click Install App'}</span>
      </button>
    );
  }

  return (
    <button
      onClick={handleInstallClick}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs shadow-sm transition-transform active:scale-95 cursor-pointer"
      title="Install Web App on Home Screen"
    >
      <Download className="w-3.5 h-3.5 text-slate-950" />
      <span className="hidden sm:inline">{lang === 'kn' ? 'ಆಪ್ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಿ' : 'Install App'}</span>
    </button>
  );
};
