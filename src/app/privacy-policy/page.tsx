"use client";

import React from 'react';
import { useLanguage } from '@/components/LanguageContext';
import { Shield } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const { t, lang } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-6">
      <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
        <Shield className="w-8 h-8 text-amber-500" />
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{t.privacyPolicy}</h1>
          <p className="text-xs text-slate-500">Last updated: August 2026</p>
        </div>
      </div>

      <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed space-y-4 text-slate-700">
        <p>
          At <strong>Rates & Calculators Hub</strong>, available from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by us and how we use it.
        </p>

        <h3 className="font-bold text-slate-900 text-sm">1. Log Files & Analytics</h3>
        <p>
          Like many other websites, we follow a standard procedure of using log files and Google Analytics to monitor traffic, user interaction, and overall system performance.
        </p>

        <h3 className="font-bold text-slate-900 text-sm">2. Google DoubleClick DART Cookie & AdSense</h3>
        <p>
          Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet.
        </p>

        <h3 className="font-bold text-slate-900 text-sm">3. Contact Us</h3>
        <p>
          If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through our Contact page.
        </p>
      </div>
    </div>
  );
}
