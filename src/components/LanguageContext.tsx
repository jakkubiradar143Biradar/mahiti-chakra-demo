'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { SupportedLanguage, dictionaries, Dictionary } from '@/lib/dictionary';

interface LanguageContextType {
  lang: SupportedLanguage;
  setLang: (lang: SupportedLanguage) => void;
  toggleLang: () => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<SupportedLanguage>('kn');

  useEffect(() => {
    const saved = localStorage.getItem('app_language') as SupportedLanguage;
    if (saved && (saved === 'kn' || saved === 'en')) {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: SupportedLanguage) => {
    setLangState(newLang);
    localStorage.setItem('app_language', newLang);
  };

  const toggleLang = () => {
    setLang(lang === 'kn' ? 'en' : 'kn');
  };

  const t = dictionaries[lang] || dictionaries.kn;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
