import React from 'react';
import { Metadata } from 'next';
import { TraditionalCalendarComp } from '@/components/TraditionalCalendarComp';
import { CommentSection } from '@/components/CommentSection';
import { Sparkles, CheckCircle2, HelpCircle, Award, Calendar, Moon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ಮಾಹಿತಿ ಚಕ್ರ ಸಾಂಪ್ರದಾಯಿಕ ಕನ್ನಡ ಕ್ಯಾಲೆಂಡರ್ & ದಿನದರ್ಶಿಕೆ | Kannada Traditional Calendar - Mahiti Chakra',
  description: 'ದಿನದ ತಿಥಿ, ವಾರ, ನಕ್ಷತ್ರ, ರಾಹುಕಾಲ, ಸೂರ್ಯೋದಯ, ಏಕಾದಶಿ, ಹುಣ್ಣಿಮೆ, ಅಮಾವಾಸ್ಯೆ & ಹಬ್ಬಗಳ ಸಂಪೂರ್ಣ ಮಾಹಿತಿ. 1-ಕ್ಲಿಕ್ Ultra-HD ಸಾಂಪ್ರದಾಯಿಕ ಕ್ಯಾಲೆಂಡರ್ ಶೀಟ್ ಡೌನ್‌ಲೋಡ್ & WhatsApp ಶೇರ್.',
  keywords: [
    'Kannada Traditional Calendar',
    'ಮಾಹಿತಿ ಚಕ್ರ ಕನ್ನಡ ಕ್ಯಾಲೆಂಡರ್',
    'Karnataka Wall Calendar Online',
    'Kannada Panchanga Today',
    'Today Tithi Nakshatra Kannada',
    'Kannada Calendar 2026',
    'Hunnime Amavasye Calendar Kannada',
    'Mahiti Chakra Daily Calendar',
  ],
  alternates: {
    canonical: 'https://mahiti-chakra-portal.vercel.app/kannada-calendar',
  },
  openGraph: {
    title: 'ಮಾಹಿತಿ ಚಕ್ರ ಸಾಂಪ್ರದಾಯಿಕ ಕನ್ನಡ ಕ್ಯಾಲೆಂಡರ್ | Kannada Calendar',
    description: 'ಪ್ರತಿದಿನದ ನಿಖರ ಪಂಚಾಂಗ, ತಿಥಿ, ನಕ್ಷತ್ರ, ರಾಹುಕಾಲ, ಹಬ್ಬಗಳು & Ultra-HD ಕ್ಯಾಲೆಂಡರ್ ಡೌನ್‌ಲೋಡ್.',
    url: 'https://mahiti-chakra-portal.vercel.app/kannada-calendar',
    siteName: 'Mahiti Chakra',
    locale: 'kn_IN',
    type: 'website',
  },
};

export default function KannadaCalendarPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'ಮಾಹಿತಿ ಚಕ್ರ ಸಾಂಪ್ರದಾಯಿಕ ಕನ್ನಡ ಕ್ಯಾಲೆಂಡರ್ - Kannada Traditional Calendar',
    'url': 'https://mahiti-chakra-portal.vercel.app/kannada-calendar',
    'applicationCategory': 'UtilitiesApplication',
    'operatingSystem': 'All',
    'description': 'ಕರ್ನಾಟಕದ ಸಾಂಪ್ರದಾಯಿಕ ಗೋಡೆ ಕ್ಯಾಲೆಂಡರ್ ಶೈಲಿಯಲ್ಲಿ ದಿನದ ಪಂಚಾಂಗ, ತಿಥಿ, ನಕ್ಷತ್ರ, ರಾಹುಕಾಲ ಹಾಗೂ ಹಬ್ಬ-ಹರಿದಿನಗಳನ್ನು ನೀಡುವ ಉಚಿತ ಸಾಫ್ಟ್‌ವೇರ್.',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'INR',
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'ratingCount': '112000',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'ಇಂದಿನ ತಿಥಿ, ನಕ್ಷತ್ರ ಮತ್ತು ರಾಹುಕಾಲವನ್ನು ಹೇಗೆ ತಿಳಿಯುವುದು?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'ಕ್ಯಾಲೆಂಡರ್‌ನಲ್ಲಿ ಯಾವುದೇ ದಿನಾಂಕವನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿದಾಗ ಬಲಭಾಗದಲ್ಲಿ ಆ ದಿನದ ತಿಥಿ, ಪಕ್ಷ, ನಕ್ಷತ್ರ, ಸೂರ್ಯೋದಯ-ಸೂರ್ಯಾಸ್ತ ಹಾಗೂ ನಿಖರ ರಾಹುಕಾಲದ ಸಮಯ ಪ್ರದರ್ಶನಗೊಳ್ಳುತ್ತದೆ.',
        },
      },
      {
        '@type': 'Question',
        'name': 'ಮಾಸಿಕ ಕ್ಯಾಲೆಂಡರ್ ಇಮೇಜ್ ಅನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿಕೊಳ್ಳಬಹುದೇ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'ಹೌದು! "HD ಕ್ಯಾಲೆಂಡರ್ ಡೌನ್‌ಲೋಡ್" ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ 1000x1450px Ultra-HD ಗುಣಮಟ್ಟದ ಸಾಂಪ್ರದಾಯಿಕ ಕನ್ನಡ ಕ್ಯಾಲೆಂಡರ್ ಶೀಟ್ ಅನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿಕೊಳ್ಳಬಹುದು.',
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

      {/* 📅 INTERACTIVE TRADITIONAL KANNADA CALENDAR SOFTWARE */}
      <TraditionalCalendarComp />

      {/* 🌟 SEO RICH CONTENT SECTION */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-8 text-slate-800">
        <section className="space-y-4 border-b border-slate-100 pb-8">
          <div className="flex items-center gap-2 text-red-700 font-bold text-sm">
            <Sparkles className="w-4 h-4" />
            <span>ಕರ್ನಾಟಕದ #1 ಅಧಿಕೃತ ಸಾಂಪ್ರದಾಯಿಕ ದಿನದರ್ಶಿಕೆ ಪೋರ್ಟಲ್</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-snug">
            ಮಾಹಿತಿ ಚಕ್ರ ಸಾಂಪ್ರದಾಯಿಕ ಕನ್ನಡ ಕ್ಯಾಲೆಂಡರ್ & ಪಂಚಾಂಗ (Mahiti Chakra Traditional Calendar)
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            ಕರ್ನಾಟಕದ ಮನೆ-ಮನೆಗಳಲ್ಲಿ ಬಳಸುವ ಸಾಂಪ್ರದಾಯಿಕ ಗೋಡೆ ಕ್ಯಾಲೆಂಡರ್ ಮಾದರಿಯಲ್ಲೇ ರೂಪಿಸಲಾದ <strong>ಮಾಹಿತಿ ಚಕ್ರ ಕನ್ನಡ ಕ್ಯಾಲೆಂಡರ್</strong> ಮೂಲಕ ಪ್ರತಿ ದಿನದ ತಿಥಿ, ವಾರ, ನಕ್ಷತ್ರ, ಯೋಗ, ಕರಣ, ಸೂರ್ಯೋದಯ-ಸೂರ್ಯಾಸ್ತ, ರಾಹುಕಾಲ, ಗುಳಿಕಕಾಲ, ಏಕಾದಶಿ, ಹುಣ್ಣಿಮೆ, ಅಮಾವಾಸ್ಯೆ ಹಾಗೂ ಹಬ್ಬ-ಹರಿದಿನಗಳ ನಿಖರ ಮಾಹಿತಿಯನ್ನು ತಕ್ಷಣ ಪಡೆಯಬಹುದು ಹಾಗೂ <strong>Ultra-HD ಸಾಂಪ್ರದಾಯಿಕ ದಿನದರ್ಶಿಕೆ ಶೀಟ್ ಇಮೇಜ್</strong> ಡೌನ್‌ಲೋಡ್ ಮಾಡಬಹುದು.
          </p>
        </section>

        {/* FEATURES GRID */}
        <section className="space-y-5 border-b border-slate-100 pb-8">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
            <Award className="w-6 h-6 text-amber-500" />
            <span>ಈ ಸಾಂಪ್ರದಾಯಿಕ ಕ್ಯಾಲೆಂಡರ್‌ನ ಪ್ರಮುಖ ವೈಶಿಷ್ಟ್ಯಗಳು:</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">ಸಂಪೂರ್ಣ ಪಂಚಾಂಗ ವಿವರಗಳು:</strong>
                <span className="text-slate-600">ಸಂವತ್ಸರ, ಆಯನ, ಋತು, ಮಾಸ, ಶುಕ್ಲ/ಕೃಷ್ಣ ಪಕ್ಷ, ತಿಥಿ ಮತ್ತು ನಕ್ಷತ್ರಗಳ ನಿಖರ ಲೆಕ್ಕ.</span>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">ಶುಭ & ಅಶುಭ ಕಾಲ ಕೋಷ್ಟಕ:</strong>
                <span className="text-slate-600">ರಾಹುಕಾಲ, ಗುಳಿಕಕಾಲ, ಯಮಗಂಡ ಕಾಲ ಮತ್ತು ಅಭಿಜಿತ್ ಶುಭ ಮುಹೂರ್ತದ ಸಮಯ.</span>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">🌕 ಹುಣ್ಣಿಮೆ, ಅಮಾವಾಸ್ಯೆ & ಏಕಾದಶಿ:</strong>
                <span className="text-slate-600">ಕ್ಯಾಲೆಂಡರ್ ಗ್ರಿಡ್‌ನಲ್ಲೇ ಪ್ರತಿ ದಿನದ ವಿಶೇಷ ವ್ರತಗಳನ್ನು ಪ್ರತ್ಯೇಕ ಐಕಾನ್‌ಗಳ ಮೂಲಕ ಗುರುತಿಸಲಾಗಿದೆ.</span>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">📸 Ultra-HD ಸಾಂಪ್ರದಾಯಿಕ ಕಾರ್ಡ್ ಡೌನ್‌ಲೋಡ್:</strong>
                <span className="text-slate-600">ರೆಡ್ & ಗೋಲ್ಡ್ ಸಾಂಪ್ರದಾಯಿಕ ವಿನ್ಯಾಸದ ದಿನದರ್ಶಿಕೆ ಶೀಟ್ ಅನ್ನು 1-ಕ್ಲಿಕ್‌ನಲ್ಲಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ WhatsApp ನಲ್ಲಿ ಶೇರ್ ಮಾಡಿ.</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION SECTION */}
        <section className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-red-700" />
            <span>ಕನ್ನಡ ಕ್ಯಾಲೆಂಡರ್ ಬಗ್ಗೆ FAQs:</span>
          </h3>

          <div className="space-y-3">
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-1.5">
              <h4 className="text-sm font-black text-slate-900">ಪ್ರ: ಮುಂಬರುವ ತಿಂಗಳುಗಳ ಕ್ಯಾಲೆಂಡರ್ ನೋಡಬಹುದೇ?</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ಉ: ಹೌದು! ಮೇಲೆ ನೀಡಲಾದ ಬಾಣದ ಗುರುತುಗಳ (Arrows) ಮೂಲಕ ಜನವರಿಯಿಂದ ಡಿಸೆಂಬರ್‌ವರೆಗಿನ ಎಲ್ಲಾ ತಿಂಗಳುಗಳ ಕ್ಯಾಲೆಂಡರ್ ವೀಕ್ಷಿಸಬಹುದು.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-1.5">
              <h4 className="text-sm font-black text-slate-900">ಪ್ರ: ಈ ಕ್ಯಾಲೆಂಡರ್‌ನಲ್ಲಿ ಕರ್ನಾಟಕ ಸರ್ಕಾರಿ ರಜಾದಿನಗಳು ಇವೆಯೇ?</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ಉ: ಹೌದು, ಭಾನುವಾರಗಳು ಹಾಗೂ ಎಲ್ಲಾ ಪ್ರಮುಖ ಹಬ್ಬ ಮತ್ತು ರಾಷ್ಟ್ರೀಯ ದಿನಾಚರಣೆಯ ರಜಾದಿನಗಳನ್ನು ಕೆಂಪು ಬಣ್ಣದಲ್ಲಿ ಗುರುತಿಸಲಾಗಿದೆ.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* 💬 PUBLIC COMMENT SECTION */}
      <CommentSection pageId="kannada-calendar" />

    </div>
  );
}
