"use client";

import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import {
  Smartphone, Download, CheckCircle2, X, Sparkles, Share2, PlusSquare,
  Check, Monitor, HelpCircle, ArrowRight
} from 'lucide-react';
import { MahitiChakraLogo } from './MahitiChakraLogo';

interface PWAInstallModalProps {
  appName?: string;
  appUrl?: string;
  deferredPrompt?: any;
  onClose: () => void;
}

export const PWAInstallModal: React.FC<PWAInstallModalProps> = ({
  appName,
  appUrl,
  deferredPrompt,
  onClose,
}) => {
  const { lang } = useLanguage();
  const [installed, setInstalled] = useState(false);
  const [showPromptNotice, setShowPromptNotice] = useState(false);

  const targetName = appName || (lang === 'kn' ? 'ಮಾಹಿತಿ ಚಕ್ರ ವೆಬ್ ಆಪ್' : 'Mahiti Chakra Web App');

  const handleInstallClick = async () => {
    const activePrompt = deferredPrompt || (typeof window !== 'undefined' ? (window as any).deferredPwaPrompt : null);

    if (activePrompt) {
      try {
        activePrompt.prompt();
        const choiceResult = await activePrompt.userChoice;
        if (choiceResult.outcome === 'accepted') {
          setInstalled(true);
          setTimeout(() => onClose(), 3000);
          return;
        }
      } catch (err) {
        console.error('PWA Prompt error:', err);
      }
    }

    // If native prompt is not available yet, show active prompt notice
    setShowPromptNotice(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 backdrop-blur-md p-4 animate-fadeIn select-none">
      <div className="bg-white rounded-3xl border-2 border-amber-400 shadow-2xl max-w-md w-full p-6 space-y-5 relative text-slate-900 animate-springPop">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <MahitiChakraLogo size={56} className="w-14 h-14 shrink-0" />
          <div>
            <div className="inline-flex items-center gap-1 bg-amber-100 text-amber-950 text-[10px] font-black px-2.5 py-0.5 rounded-full mb-1 border border-amber-300">
              <Sparkles className="w-3 h-3 text-amber-600" />
              <span>100% Native Web App</span>
            </div>
            <h3 className="text-base font-black text-slate-950 leading-tight">
              {targetName}
            </h3>
            <p className="text-xs font-semibold text-slate-500">
              {lang === 'kn' ? 'ಮೊಬೈಲ್ ಅಥವಾ ಕಂಪ್ಯೂಟರ್‌ನ ಹೋಮ್ ಸ್ಕ್ರೀನ್‌ಗೆ ಸೇರಿಸಿ' : 'Install directly to Mobile or Desktop Home Screen'}
            </p>
          </div>
        </div>

        {/* Success Alert */}
        {installed ? (
          <div className="bg-emerald-50 border-2 border-emerald-300 text-emerald-950 p-4 rounded-2xl text-xs font-black flex items-center gap-3 shadow-sm animate-springPop">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
            <div>
              <span className="block text-sm">🎉 ಯಶಸ್ವಿಯಾಗಿ ಇನ್‌ಸ್ಟಾಲ್ ಆಗಿದೆ!</span>
              <span className="font-semibold text-emerald-800">
                {lang === 'kn'
                  ? 'ಆಪ್ ಈಗ ನಿಮ್ಮ ಸಾಧನದ ಹೋಮ್ ಸ್ಕ್ರೀನ್‌ನಲ್ಲಿ ಲಭ್ಯವಿದೆ.'
                  : 'App is now installed on your device home screen.'}
              </span>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {/* PROMINENT ALWAYS-VISIBLE 1-CLICK INSTALL BUTTON */}
            <button
              onClick={handleInstallClick}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-600 hover:to-amber-500 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/30 transition-all active:scale-95 flex items-center justify-center gap-2 border-2 border-amber-300"
            >
              <Download className="w-5 h-5 text-slate-950" />
              <span>{lang === 'kn' ? `📲 1-ಕ್ಲಿಕ್‌ನಲ್ಲಿ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಿ` : `📲 Install 1-Click PWA App`}</span>
            </button>

            {showPromptNotice && (
              <div className="bg-amber-50 border-2 border-amber-300 text-amber-950 p-3 rounded-2xl text-xs font-bold animate-springPop">
                <span className="block font-black text-amber-900 mb-0.5">ℹ️ ಬ್ರೌಸರ್ ಇನ್‌ಸ್ಟಾಲ್ ಪ್ರಾಂಪ್ಟ್:</span>
                {lang === 'kn'
                  ? 'ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನಲ್ಲಿ 1-ಕ್ಲಿಕ್ ಇನ್‌ಸ್ಟಾಲ್ ಸಕ್ರಿಯವಾಗಿದೆ. ಡೆಸ್ಕ್‌ಟಾಪ್ ಅಡ್ರೆಸ್ ಬಾರ್‌ನ (⊕) ಅಥವಾ ಬ್ರೌಸರ್ 3-ಚುಕ್ಕೆಗಳ (⋮) ಮೆನುವಿನಲ್ಲಿ "Install App" ಕ್ಲಿಕ್ ಮಾಡಿ.'
                  : 'Click "Install App" in Chrome address bar (⊕) or menu (⋮) to add shortcut.'}
              </div>
            )}

            {/* Step-by-Step Device Instruction Guide */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3 text-xs">
              <h4 className="font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-200 pb-2">
                <HelpCircle className="w-4 h-4 text-amber-600" />
                <span>{lang === 'kn' ? 'ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡುವ ಸರಳ ಮಾರ್ಗಗಳು:' : 'Installation Guides:'}</span>
              </h4>

              <div className="space-y-2 font-bold text-slate-700">
                {/* Android Chrome */}
                <div className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-slate-200">
                  <Smartphone className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-slate-950 font-black">🤖 Android / Chrome:</span>
                    <span className="text-[11px] text-slate-600 font-semibold">
                      {lang === 'kn' ? 'ಬ್ರೌಸರ್‌ನ 3-ಚುಕ್ಕೆಗಳು (⋮) -> "Add to Home Screen" ಅಥವಾ "Install App" ಕ್ಲಿಕ್ ಮಾಡಿ.' : 'Click browser menu (⋮) -> Select "Add to Home Screen" or "Install App".'}
                    </span>
                  </div>
                </div>

                {/* iPhone / iOS */}
                <div className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-slate-200">
                  <Share2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-slate-950 font-black">🍏 iPhone / Safari:</span>
                    <span className="text-[11px] text-slate-600 font-semibold">
                      {lang === 'kn' ? 'Safari ಕೆಳಗಿರುವ "Share (⎋)" ಐಕಾನ್ -> "Add to Home Screen (+)" ಕ್ಲಿಕ್ ಮಾಡಿ.' : 'Tap Safari "Share (⎋)" icon -> Select "Add to Home Screen (+)".'}
                    </span>
                  </div>
                </div>

                {/* Windows / Mac Desktop */}
                <div className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-slate-200">
                  <Monitor className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-slate-950 font-black">💻 Laptop / Desktop:</span>
                    <span className="text-[11px] text-slate-600 font-semibold">
                      {lang === 'kn' ? 'ಅಡ್ರೆಸ್ ಬಾರ್‌ನ ಬಲಭಾಗದಲ್ಲಿರುವ "Install (⊕)" ಐಕಾನ್ ಕ್ಲಿಕ್ ಮಾಡಿ.' : 'Click "Install (⊕)" icon in Chrome/Edge address bar.'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
