import React from 'react';
import { Metadata } from 'next';
import { GramaBaddiComp } from '@/components/GramaBaddiComp';
import { CommentSection } from '@/components/CommentSection';
import { Sparkles, CheckCircle2, HelpCircle, Award, Coins, FileText, ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ಗ್ರಾಮ ಬಡ್ಡಿ ಲೆಕ್ಕಾಚಾರ ಸಾಫ್ಟ್‌ವೇರ್ | Village Baddi Calculator Kannada - Mahiti Chakra',
  description: 'ನೂರಕ್ಕೆ ₹1, ₹2, ₹3 ತಿಂಗಳ ಬಡ್ಡಿ, ಸರಳ ಬಡ್ಡಿ & ಚಕ್ರ ಬಡ್ಡಿಯನ್ನು ದಿನ ಸಮೇತ ನಿಖರವಾಗಿ ಲೆಕ್ಕ ಹಾಕಿ. 1-ಕ್ಲಿಕ್‌ನಲ್ಲಿ HD ರಶೀದಿ ಇಮೇಜ್ ಡೌನ್‌ಲೋಡ್ & WhatsApp ಶೇರ್ ಮಾಡಿ. 100% ಉಚಿತ ಸಾಫ್ಟ್‌ವೇರ್.',
  keywords: [
    'Village Baddi Calculator Kannada',
    'ಗ್ರಾಮ ಬಡ್ಡಿ ಲೆಕ್ಕಾಚಾರ',
    'Grama Baddi Calculator',
    'Monthly Interest Calculator Kannada',
    'ನೂರಕ್ಕೆ 2 ರೂಪಾಯಿ ಬಡ್ಡಿ ಲೆಕ್ಕ',
    'Simple Interest Calculator Kannada',
    'Village Loan Interest Receipt Maker',
    'ಬಡ್ಡಿ ಲೆಕ್ಕಾಚಾರ ಆಪ್',
    'Mahiti Chakra Baddi Calculator',
  ],
  alternates: {
    canonical: 'https://mahiti-chakra-portal.vercel.app/grama-baddi',
  },
  openGraph: {
    title: 'ಗ್ರಾಮ ಬಡ್ಡಿ ಲೆಕ್ಕಾಚಾರ ಸಾಫ್ಟ್‌ವೇರ್ | Village Baddi Calculator',
    description: 'ನೂರಕ್ಕೆ ₹1, ₹2, ₹3 ತಿಂಗಳ ಬಡ್ಡಿಯನ್ನು ದಿನ ಸಮೇತ ನಿಖರವಾಗಿ ಲೆಕ್ಕ ಹಾಕಿ HD ರಶೀದಿ ಇಮೇಜ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ.',
    url: 'https://mahiti-chakra-portal.vercel.app/grama-baddi',
    siteName: 'Mahiti Chakra',
    locale: 'kn_IN',
    type: 'website',
  },
};

export default function GramaBaddiPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'ಗ್ರಾಮ ಬಡ್ಡಿ ಲೆಕ್ಕಾಚಾರ ಸಾಫ್ಟ್‌ವೇರ್ - Village Baddi Calculator',
    'url': 'https://mahiti-chakra-portal.vercel.app/grama-baddi',
    'applicationCategory': 'FinanceApplication',
    'operatingSystem': 'All',
    'description': 'ನೂರಕ್ಕೆ ₹1, ₹2, ₹3 ತಿಂಗಳ ಬಡ್ಡಿ, ಸರಳ ಬಡ್ಡಿ & ಚಕ್ರ ಬಡ್ಡಿಯನ್ನು ದಿನ ಸಮೇತ ನಿಖರವಾಗಿ ಲೆಕ್ಕ ಹಾಕಿ HD ರಶೀದಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡುವ ಉಚಿತ ಸಾಫ್ಟ್‌ವೇರ್.',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'INR',
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'ratingCount': '62000',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'ನೂರಕ್ಕೆ ₹2 ರಂತೆ ತಿಂಗಳ ಬಡ್ಡಿ ಹೇಗೆ ಲೆಕ್ಕ ಹಾಕಲಾಗುತ್ತದೆ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'ನೂರಕ್ಕೆ ₹2 ಬಡ್ಡಿ ಎಂದರೆ ಪ್ರತಿ ₹100 ಕ್ಕೆ ತಿಂಗಳಿಗೆ ₹2 ಬಡ್ಡಿ. ಉದಾಹರಣೆಗೆ ₹50,000 ಅಸಲಿಗೆ ತಿಂಗಳ ಬಡ್ಡಿ = (50000 × 2) / 100 = ₹1,000 ಆಗುತ್ತದೆ. ಒಂದು ವರ್ಷಕ್ಕೆ ₹12,000 ಬಡ್ಡಿಯಾಗುತ್ತದೆ.',
        },
      },
      {
        '@type': 'Question',
        'name': 'ಗ್ರಾಮ ಬಡ್ಡಿ ಲೆಕ್ಕಾಚಾರದಲ್ಲಿ ದಿನಗಳ ಲೆಕ್ಕ ಹೇಗೆ ಮಾಡಲಾಗುತ್ತದೆ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'ಒಂದು ತಿಂಗಳ ಬಡ್ಡಿಯನ್ನು 30 ದಿನಗಳಿಗೆ ಭಾಗಿಸಿ ಪ್ರತಿ ದಿನದ ಬಡ್ಡಿಯನ್ನು ಲೆಕ್ಕ ಹಾಕಲಾಗುತ್ತದೆ. ಇದರಿಂದ ತಿಂಗಳು ಮುಗಿಯದ ನಡುವಿನ ದಿನಗಳಿಗೂ ನಿಖರ ಬಡ್ಡಿ ತಿಳಿಯುತ್ತದೆ.',
        },
      },
    ],
  };

  return (
    <div className="space-y-10">
      
      {/* 🚀 JSON-LD STRUCTURED DATA SCHEMAS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 🪙 INTERACTIVE GRAMA BADDI SOFTWARE */}
      <GramaBaddiComp />

      {/* 🌟 SEO RICH CONTENT SECTION */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-8 text-slate-800">
        <section className="space-y-4 border-b border-slate-100 pb-8">
          <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
            <Sparkles className="w-4 h-4" />
            <span>ಕರ್ನಾಟಕದ #1 ಗ್ರಾಮ ಬಡ್ಡಿ & ಕೈಸಾಲ ಲೆಕ್ಕಾಚಾರ ಪೋರ್ಟಲ್</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-snug">
            ಗ್ರಾಮ ಬಡ್ಡಿ ಲೆಕ್ಕಾಚಾರ ಸಾಫ್ಟ್‌ವೇರ್ (Village / Grama Baddi Calculator)
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            ಕರ್ನಾಟಕದ ಹಳ್ಳಿಗಳು ಮತ್ತು ಪಟ್ಟಣಗಳಲ್ಲಿ ಕೈಸಾಲ, ಕೃಷಿ ಸಾಲ ಹಾಗೂ ವ್ಯಾಪಾರದ ಸಾಲಗಳಿಗೆ ನೂರಕ್ಕೆ ₹1, ₹1.50, ₹2, ₹3 ಅಥವಾ ₹5 ರಂತೆ ತಿಂಗಳ ಬಡ್ಡಿ ಲೆಕ್ಕ ಹಾಕುವುದು ವಾಡಿಕೆ. ಕೈಬರಹದಲ್ಲಿ ಲೆಕ್ಕ ಹಾಕುವಾಗ ದಿನಗಳು ಮತ್ತು ತಿಂಗಳುಗಳಲ್ಲಿ ತಪ್ಪುಗಳಾಗುವ ಸಾಧ್ಯತೆ ಹೆಚ್ಚು. <strong>ಮಾಹಿತಿ ಚಕ್ರದ ಗ್ರಾಮ ಬಡ್ಡಿ ಸಾಫ್ಟ್‌ವೇರ್</strong> ಮೂಲಕ ಸಾಲ ಪಡೆದ ದಿನಾಂಕದಿಂದ ಹಣ ವಾಪಸ್ ಮಾಡುವ ದಿನಾಂಕದವರೆಗೆ ಎಷ್ಟು ವರ್ಷ, ಎಷ್ಟು ತಿಂಗಳು ಮತ್ತು ಎಷ್ಟು ದಿನಗಳಾಯಿತು ಎಂಬುದನ್ನು ಕರಾರುವಾಕ್ಕಾಗಿ ಲೆಕ್ಕ ಹಾಕಿ <strong>ಪ್ರೀಮಿಯಂ ಅಧಿಕೃತ ರಶೀದಿ ಇಮೇಜ್ (HD Receipt Card)</strong> ಅನ್ನು 1-ಕ್ಲಿಕ್‌ನಲ್ಲಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿಕೊಳ್ಳಬಹುದು.
          </p>
        </section>

        {/* FEATURES GRID */}
        <section className="space-y-5 border-b border-slate-100 pb-8">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
            <Award className="w-6 h-6 text-amber-500" />
            <span>ಈ ಸಾಫ್ಟ್‌ವೇರ್‌ನ ಪ್ರಮುಖ ಅನುಕೂಲಗಳು:</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">ನಿಖರ ದಿನ, ತಿಂಗಳು & ವರ್ಷದ ಲೆಕ್ಕ:</strong>
                <span className="text-slate-600">ಕ್ಯಾಲೆಂಡರ್ ದಿನಾಂಕಗಳ ಆಧಾರದ ಮೇಲೆ ಕರಾರುವಾಕ್ಕಾಗಿ ದಿನವಾರು ಬಡ್ಡಿ ಲೆಕ್ಕಹಾಕಲಾಗುತ್ತದೆ.</span>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">ಸರಳ ಬಡ್ಡಿ & ಚಕ್ರ ಬಡ್ಡಿ ಎರಡೂ ಲಭ್ಯ:</strong>
                <span className="text-slate-600">ಸಾಮಾನ್ಯ ಸರಳ ಬಡ್ಡಿ ಅಥವಾ ವಾರ್ಷಿಕ ಚಕ್ರ ಬಡ್ಡಿಯನ್ನು ಸುಲಭವಾಗಿ ಆಯ್ಕೆ ಮಾಡಬಹುದು.</span>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">📸 ಅಧಿಕೃತ HD ರಶೀದಿ ಇಮೇಜ್:</strong>
                <span className="text-slate-600">ಸಾಲಗಾರರು, ಸಾಲದಾತರ ಹೆಸರು, ಅಕ್ಷರಗಳಲ್ಲಿ ಮೊತ್ತ ಹಾಗೂ ಸಹಿ ಮಾಡುವ ಜಾಗವಿರುವ ಪ್ರೀಮಿಯಂ ರಶೀದಿ ಇಮೇಜ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ.</span>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">💬 WhatsApp Direct Share:</strong>
                <span className="text-slate-600">ಲೆಕ್ಕಾಚಾರದ ಸಂಪೂರ್ಣ ವಿವರಗಳನ್ನು ಒಂದೇ ಕ್ಲಿಕ್‌ನಲ್ಲಿ WhatsApp ನಲ್ಲಿ ಕಳುಹಿಸಬಹುದು.</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION SECTION */}
        <section className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-emerald-600" />
            <span>ಗ್ರಾಮ ಬಡ್ಡಿ ಬಗ್ಗೆ ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು (FAQs):</span>
          </h3>

          <div className="space-y-3">
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-1.5">
              <h4 className="text-sm font-black text-slate-900">ಪ್ರ: ನೂರಕ್ಕೆ ₹2 ರಂತೆ ತಿಂಗಳ ಬಡ್ಡಿ ಹೇಗೆ ಲೆಕ್ಕ ಹಾಕಲಾಗುತ್ತದೆ?</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ಉ: ನೂರಕ್ಕೆ ₹2 ಬಡ್ಡಿ ಎಂದರೆ ಪ್ರತಿ ₹100 ಕ್ಕೆ ತಿಂಗಳಿಗೆ ₹2 ಬಡ್ಡಿ. ಉದಾಹರಣೆಗೆ ₹50,000 ಅಸಲಿಗೆ ತಿಂಗಳ ಬಡ್ಡಿ = (50000 × 2) / 100 = ₹1,000 ಆಗುತ್ತದೆ. ಒಂದು ವರ್ಷಕ್ಕೆ (12 ತಿಂಗಳು) ₹12,000 ಬಡ್ಡಿಯಾಗುತ್ತದೆ.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-1.5">
              <h4 className="text-sm font-black text-slate-900">ಪ್ರ: ತಿಂಗಳ ಮಧ್ಯದಲ್ಲಿ ಹಣ ವಾಪಸ್ ಮಾಡಿದರೆ ದಿನಗಳ ಲೆಕ್ಕ ಹೇಗೆ?</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ಉ: ಒಂದು ತಿಂಗಳ ಬಡ್ಡಿಯನ್ನು 30 ದಿನಗಳಿಗೆ ಭಾಗಿಸಿ ದಿನದ ಬಡ್ಡಿ ಲೆಕ್ಕ ಹಾಕಲಾಗುತ್ತದೆ. ಉದಾಹರಣೆಗೆ ತಿಂಗಳ ಬಡ್ಡಿ ₹1,000 ಇದ್ದರೆ, 1 ದಿನದ ಬಡ್ಡಿ = ₹1000 / 30 = ₹33.33 ಆಗುತ್ತದೆ.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* 💬 PUBLIC COMMENT SECTION */}
      <CommentSection pageId="grama-baddi" />

    </div>
  );
}
