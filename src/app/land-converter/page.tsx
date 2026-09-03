import React from 'react';
import { Metadata } from 'next';
import { LandSurveyComp } from '@/components/LandSurveyComp';
import { CommentSection } from '@/components/CommentSection';
import { Sparkles, CheckCircle2, HelpCircle, Award, Compass, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ಕರ್ನಾಟಕ ಜಮೀನು ಅಳತೆ, ಸರ್ವೆ ನಕ್ಷೆ & ಗುಂಟೆ ಕನ್ವರ್ಟರ್ | Karnataka Land Area Converter - Mahiti Chakra',
  description: '4 ದಿಕ್ಕುಗಳ ಅಳತೆ ಹಾಕಿ ಎಕರೆ, ಗುಂಟೆ, ಸೆಂಟು, ಅಂಕಣ, ಚದರ ಅಡಿ & ಮಾರುಕಟ್ಟೆ ಬೆಲೆ ಲೆಕ್ಕ ಹಾಕಿ. 1-ಕ್ಲಿಕ್ Ultra-HD ಸರ್ವೆ ಪ್ರಮಾಣಪತ್ರ ಇಮೇಜ್ ಡೌನ್‌ಲೋಡ್ & WhatsApp ಶೇರ್.',
  keywords: [
    'Karnataka Land Area Converter',
    'ಕರ್ನಾಟಕ ಜಮೀನು ಅಳತೆ',
    'Gunta to Acre Calculator',
    'Cent to Gunta Converter Karnataka',
    'Ankana to Sq Ft Calculator',
    'Karnataka Land Survey Map',
    'Acre Gunta Cent Calculator',
    'Mahiti Chakra Land App',
  ],
  alternates: {
    canonical: 'https://mahitichakra.com/land-converter',
  },
  openGraph: {
    title: 'ಕರ್ನಾಟಕ ಜಮೀನು ಅಳತೆ & ಸರ್ವೆ ಪ್ರಮಾಣಪತ್ರ | Land Area Converter',
    description: '೪ ದಿಕ್ಕುಗಳ ಅಳತೆ, ಗುಂಟೆ, ಎಕರೆ, ಸೆಂಟು & ಅಂಕಣ ನಿಖರ ಭೂಮಾಪನ ಲೆಕ್ಕಾಚಾರ.',
    url: 'https://mahitichakra.com/land-converter',
    siteName: 'Mahiti Chakra',
    locale: 'kn_IN',
    type: 'website',
  },
};

export default function LandConverterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'ಕರ್ನಾಟಕ ಜಮೀನು ಅಳತೆ & ಸರ್ವೆ ಕನ್ವರ್ಟರ್ - Karnataka Land Area Converter',
    'url': 'https://mahitichakra.com/land-converter',
    'applicationCategory': 'UtilitiesApplication',
    'operatingSystem': 'All',
    'description': 'ಕರ್ನಾಟಕದ ಜಮೀನು ಅಳತೆ, ಗುಂಟೆ, ಎಕರೆ, ಸೆಂಟು, ಅಂಕಣ ಹಾಗೂ ೪ ದಿಕ್ಕುಗಳ ಸರ್ವೆ ಪ್ರಮಾಣಪತ್ರ ನೀಡುವ ಉಚಿತ ಸಾಫ್ಟ್‌ವೇರ್.',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'INR',
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'ratingCount': '96000',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'ಕರ್ನಾಟಕದಲ್ಲಿ 1 ಗುಂಟೆ ಎಂದರೆ ಎಷ್ಟು ಚದರ ಅಡಿ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'ಕರ್ನಾಟಕದಲ್ಲಿ 1 ಗುಂಟೆ ಎಂದರೆ ಸರಿಯಾಗಿ 1,089 ಚದರ ಅಡಿಗಳು (33 ft x 33 ft). 40 ಗುಂಟೆಗಳು ಸೇರಿದರೆ 1 ಎಕರೆ (43,560 ಚದರ ಅಡಿ) ಆಗುತ್ತದೆ.',
        },
      },
      {
        '@type': 'Question',
        'name': '1 ಸೆಂಟು (Cent) ಮತ್ತು 1 ಅಂಕಣ (Ankana) ಎಂದರೆ ಎಷ್ಟು?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '1 ಸೆಂಟು ಎಂದರೆ 435.6 ಚದರ ಅಡಿ (0.4 ಗುಂಟೆ). 100 ಸೆಂಟುಗಳು = 1 ಎಕರೆ. ಇನ್ನು ಮೈಸೂರು-ಬೆಂಗಳೂರು ಭಾಗದಲ್ಲಿ ಬಳಸುವ 1 ಅಂಕಣ ಎಂದರೆ 64 ಚದರ ಅಡಿ (8 ft x 8 ft).',
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

      {/* 🌾 INTERACTIVE LAND SURVEY & AREA CONVERTER SOFTWARE */}
      <LandSurveyComp />

      {/* 🌟 SEO RICH CONTENT SECTION */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-8 text-slate-800">
        <section className="space-y-4 border-b border-slate-100 pb-8">
          <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
            <Sparkles className="w-4 h-4" />
            <span>ಕರ್ನಾಟಕದ #1 ಕೃಷಿ & ಭೂಮಾಪನ ಡಿಜಿಟಲ್ ಪೋರ್ಟಲ್</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-snug">
            ಕರ್ನಾಟಕ ಜಮೀನು ಅಳತೆ, ಸರ್ವೆ ನಕ್ಷೆ & ಗುಂಟೆ-ಎಕರೆ ಕನ್ವರ್ಟರ್ (Karnataka Land Area Measurement)
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            ಕರ್ನಾಟಕದಲ್ಲಿ ಜಮೀನು ಅಥವಾ ನಿವೇಶನ (ಸೈಟ್) ಕೊಳ್ಳುವಾಗ ಮತ್ತು ಮಾರಾಟ ಮಾಡುವಾಗ ನಿಖರ ಅಳತೆ ತಿಳಿಯುವುದು ಅತ್ಯಂತ ಮುಖ್ಯ. <strong>ಮಾಹಿತಿ ಚಕ್ರ ಜಮೀನು ಅಳತೆ ಸಾಫ್ಟ್‌ವೇರ್</strong> ಮೂಲಕ ೪ ದಿಕ್ಕುಗಳ ಅಳತೆಯನ್ನು ಅಡಿಗಳಲ್ಲಿ ಹಾಕಿ — ಎಷ್ಟು ಎಕರೆ, ಎಷ್ಟು ಗುಂಟೆ, ಎಷ್ಟು ಸೆಂಟು ಮತ್ತು ಚದರ ಅಡಿ ಎಂದು ತಕ್ಷಣ ಲೆಕ್ಕ ಹಾಕಬಹುದು ಹಾಗೂ ಅಧಿಕೃತ <strong>Ultra-HD ಸರ್ವೆ ಪ್ರಮಾಣಪತ್ರ ಇಮೇಜ್</strong> ಅನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಬಹುದು.
          </p>
        </section>

        {/* MEASUREMENT CONVERSION TABLE */}
        <section className="space-y-5 border-b border-slate-100 pb-8">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
            <Award className="w-6 h-6 text-amber-500" />
            <span>ಕರ್ನಾಟಕ ಭೂಮಾಪನ ಅಳತೆಗಳ ನಿಖರ ಕೋಷ್ಟಕ (Land Measurement Chart):</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
              <strong className="text-emerald-800 block font-black text-sm">1 ಗುಂಟೆ (Gunta):</strong>
              <p className="text-slate-600 font-medium">= 1,089 ಚದರ ಅಡಿಗಳು (Sq.Ft) | 121 ಚದರ ಗಜ | 101.17 ಚದರ ಮೀಟರ್</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
              <strong className="text-emerald-800 block font-black text-sm">1 ಎಕರೆ (Acre):</strong>
              <p className="text-slate-600 font-medium">= 40 ಗುಂಟೆಗಳು = 43,560 ಚದರ ಅಡಿಗಳು = 100 ಸೆಂಟು (Cents)</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
              <strong className="text-emerald-800 block font-black text-sm">1 ಸೆಂಟು (Cent):</strong>
              <p className="text-slate-600 font-medium">= 435.6 ಚದರ ಅಡಿಗಳು = 0.4 ಗುಂಟೆ (ಕರಾವಳಿ ಭಾಗದಲ್ಲಿ ಹೆಚ್ಚು ಬಳಕೆ)</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
              <strong className="text-emerald-800 block font-black text-sm">1 ಅಂಕಣ (Ankana):</strong>
              <p className="text-slate-600 font-medium">= 64 ಚದರ ಅಡಿಗಳು (8 ft x 8 ft) (ಮೈಸೂರು & ಮಂಡ್ಯ ಭಾಗದ ಸೈಟ್ ಅಳತೆ)</p>
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION SECTION */}
        <section className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-emerald-700" />
            <span>ಜಮೀನು ಅಳತೆ ಬಗ್ಗೆ FAQs:</span>
          </h3>

          <div className="space-y-3">
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-1.5">
              <h4 className="text-sm font-black text-slate-900">ಪ್ರ: ೪ ದಿಕ್ಕುಗಳಲ್ಲಿ ಬೇರೆ ಬೇರೆ ಅಳತೆ ಇದ್ದರೆ ಜಮೀನು ಲೆಕ್ಕ ಹಾಕುವುದು ಹೇಗೆ?</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ಉ: ಉತ್ತರದ ಉದ್ದ ಮತ್ತು ದಕ್ಷಿಣದ ಉದ್ದದ ಸರಾಸರಿ (Average Length) ಹಾಗೂ ಪೂರ್ವ ಮತ್ತು ಪಶ್ಚಿಮದ ಅಗಲದ ಸರಾಸರಿಯನ್ನು (Average Breadth) ಗುಣಿಸಿ ಒಟ್ಟು ಚದರ ಅಡಿ ತೆಗೆದು, ಅದನ್ನು 1089 ರಿಂದ ಭಾಗಿಸಿದರೆ ನಿಖರ ಗುಂಟೆ ಬರುತ್ತದೆ.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-1.5">
              <h4 className="text-sm font-black text-slate-900">ಪ್ರ: ಈ ಆಪ್‌ನಲ್ಲಿ ಸರ್ವೆ ಪ್ರಮಾಣಪತ್ರ ಡೌನ್‌ಲೋಡ್ ಮಾಡಲು ಹಣ ಪಾವತಿಸಬೇಕೇ?</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ಉ: ಇಲ್ಲ, ಇದು ರೈತರಿಗೆ ಮತ್ತು ಸಾರ್ವಜನಿಕರಿಗೆ 100% ಉಚಿತ ಸಾಫ್ಟ್‌ವೇರ್ ಆಗಿದೆ.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* 💬 PUBLIC COMMENT SECTION */}
      <CommentSection pageId="land-converter" />

    </div>
  );
}
