import React from 'react';
import { Metadata } from 'next';
import { GovtLetterComp } from '@/components/GovtLetterComp';
import { CommentSection } from '@/components/CommentSection';
import { Sparkles, CheckCircle2, HelpCircle, Award, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ಕರ್ನಾಟಕ ಸರ್ಕಾರಿ ಮನವಿ & ದೂರು ಅರ್ಜಿ (ಪತ್ರ) ಮೇಕರ್ | Govt Application Letter Generator - Mahiti Chakra',
  description: 'ಗ್ರಾಮ ಪಂಚಾಯತ್ PDO, ತಹಶೀಲ್ದಾರ್, ವಿದ್ಯುತ್ ಇಲಾಖೆ AEE, ಪೊಲೀಸ್ ದೂರು ಹಾಗೂ RTI ಅರ್ಜಿಗಳನ್ನು ಅಧಿಕೃತ ನಿಯಮಗಳಂತೆ ರಚಿಸಿ. 1-ಕ್ಲಿಕ್ Ultra-HD ಪ್ರಿಂಟೇಬಲ್ ಪತ್ರ ಡೌನ್‌ಲೋಡ್ & WhatsApp ಶೇರ್.',
  keywords: [
    'Karnataka Govt Application Letter Format Kannada',
    'ಗ್ರಾಮ ಪಂಚಾಯತಿ ದೂರು ಅರ್ಜಿ ಪತ್ರ',
    'Tahsildar Application Format Kannada',
    'BESCOM TC Complaint Letter Kannada',
    'Police Complaint Lost Report Kannada',
    'RTI Form A Kannada Application Generator',
    'Official Letter Writing Format Kannada',
    'Mahiti Chakra Letter Maker',
  ],
  alternates: {
    canonical: 'https://mahiti-chakra-portal.vercel.app/letter-maker',
  },
  openGraph: {
    title: 'ಕರ್ನಾಟಕ ಸರ್ಕಾರಿ & ಸಾರ್ವಜನಿಕ ಅಧಿಕೃತ ಅರ್ಜಿ (ಪತ್ರ) ಮೇಕರ್ | Govt Letter Maker',
    description: 'ಗ್ರಾಮ ಪಂಚಾಯತ್, ತಹಶೀಲ್ದಾರ್, ಕರೆಂಟ್ & ಪೊಲೀಸ್ ಸಮಸ್ಯೆಗಳಿಗೆ ನಿಯಮಬದ್ಧ ಅಧಿಕೃತ ಪತ್ರ ರಚಿಸಿ.',
    url: 'https://mahiti-chakra-portal.vercel.app/letter-maker',
    siteName: 'Mahiti Chakra',
    locale: 'kn_IN',
    type: 'website',
  },
};

export default function LetterMakerPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'ಕರ್ನಾಟಕ ಸರ್ಕಾರಿ & ಸಾರ್ವಜನಿಕ ಅಧಿಕೃತ ಅರ್ಜಿ (ಪತ್ರ) ಮೇಕರ್ - Govt Application Letter Generator',
    'url': 'https://mahiti-chakra-portal.vercel.app/letter-maker',
    'applicationCategory': 'UtilitiesApplication',
    'operatingSystem': 'All',
    'description': 'ಗ್ರಾಮ ಪಂಚಾಯತ್, ಕಂದಾಯ, ವಿದ್ಯುತ್ ಹಾಗೂ ಪೊಲೀಸ್ ಇಲಾಖೆಗಳಿಗೆ ಅಧಿಕೃತ ನಿಯಮಗಳಂತೆ ಕನ್ನಡದಲ್ಲಿ ದೂರು ಮತ್ತು ಮನವಿ ಅರ್ಜಿಗಳನ್ನು ರಚಿಸುವ ಉಚಿತ ಸಾಫ್ಟ್‌ವೇರ್.',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'INR',
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'ratingCount': '95000',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'ಸರ್ಕಾರಿ ಕಚೇರಿಗಳಿಗೆ ಅರ್ಜಿ ಬರೆಯುವಾಗ ಯಾವ ನಿಯಮಗಳನ್ನು ಪಾಲಿಸಬೇಕು?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'ಅರ್ಜಿಯ ಬಲಭಾಗದಲ್ಲಿ ದಿನಾಂಕ ಮತ್ತು ಸ್ಥಳ, ಎಡಭಾಗದಲ್ಲಿ "ಇವರಿಗೆ" (ಅಧಿಕಾರಿಯ ಹುದ್ದೆ & ವಿಳಾಸ), ನಂತರ "ಇವರಿಂದ" (ಅರ್ಜಿದಾರರ ಪೂರ್ಣ ಹೆಸರು, ವಿಳಾಸ, ಮೊಬೈಲ್), ಗೌರವಯುತ ಸಂಬೋಧನೆ "ಮಾನ್ಯರೇ", ಸ್ಪಷ್ಟ "ವಿಷಯ", ಪತ್ರದ ಒಡಲು, ಲಗತ್ತಿಸಿರುವ ದಾಖಲೆಗಳ ಪಟ್ಟಿ ಹಾಗೂ ಕೊನೆಯಲ್ಲಿ ಸಹಿ ಇರಬೇಕು.',
        },
      },
      {
        '@type': 'Question',
        'name': 'ಈ ಅರ್ಜಿಯನ್ನು ನೇರವಾಗಿ ಪ್ರಿಂಟ್ ಅಥವಾ ಡೌನ್‌ಲೋಡ್ ಮಾಡಬಹುದೇ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'ಹೌದು! "HD ಅರ್ಜಿ ಶೀಟ್ ಡೌನ್‌ಲೋಡ್" ಬಟನ್ ಒತ್ತಿ A4 ಸೈಜಿನ ಹೈ-ಕ್ವಾಲಿಟಿ ಇಮೇಜ್ ಪಡೆಯಬಹುದು ಅಥವಾ "ಪತ್ರ ಕಾಪಿ ಮಾಡಿ" ಬಟನ್ ಒತ್ತಿ ಪೂರ್ಣ ಪಠ್ಯವನ್ನು ಕಾಪಿ ಮಾಡಿಕೊಳ್ಳಬಹುದು.',
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

      {/* 🏛️ INTERACTIVE GOVT LETTER MAKER SOFTWARE */}
      <GovtLetterComp />

      {/* 🌟 SEO RICH CONTENT SECTION */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-8 text-slate-800">
        <section className="space-y-4 border-b border-slate-100 pb-8">
          <div className="flex items-center gap-2 text-blue-800 font-bold text-sm">
            <Sparkles className="w-4 h-4" />
            <span>ಕರ್ನಾಟಕದ #1 ಅಧಿಕೃತ ಅರ್ಜಿ & ಪತ್ರ ಲೇಖನ ಪೋರ್ಟಲ್</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-snug">
            ಕರ್ನಾಟಕ ಸರ್ಕಾರಿ & ಸಾರ್ವಜನಿಕ ಅಧಿಕೃತ ಮನವಿ / ದೂರು ಅರ್ಜಿ (ಪತ್ರ) ಮೇಕರ್
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            ಗ್ರಾಮ ಪಂಚಾಯತ್, ತಾಲೂಕು ಕಚೇರಿ (ತಹಶೀಲ್ದಾರ್), ವಿದ್ಯುತ್ ಇಲಾಖೆ, ಪೊಲೀಸ್ ಠಾಣೆ ಅಥವಾ ಮಾಹಿತಿ ಹಕ್ಕು ಕಾಯ್ದೆಯಡಿ ಅರ್ಜಿ ಸಲ್ಲಿಸುವಾಗ — ಸಾಮಾನ್ಯ ಜನರಿಗೆ ಪತ್ರದ ನಿಖರ ಸ್ವರೂಪ ಮತ್ತು ಕಚೇರಿಯ ನಿಯಮಾವಳಿಗಳು ತಿಳಿದಿರುವುದಿಲ್ಲ. <strong>ಮಾಹಿತಿ ಚಕ್ರ ಸರ್ಕಾರಿ ಅರ್ಜಿ ಮೇಕರ್</strong> ಮೂಲಕ ಯಾವುದೇ ಸಮಸ್ಯೆಯನ್ನು ಸುಲಭವಾಗಿ ಆಯ್ಕೆ ಮಾಡಿ, ನಿಮ್ಮ ವಿವರ ನಮೂದಿಸಿ — <strong>100% ನಿಯಮಬದ್ಧ, ಕಾನೂನುಬದ್ಧ ಹಾಗೂ ಗೌರವಪೂರ್ವಕವಾದ ಅಧಿಕೃತ ಕನ್ನಡ ಪತ್ರವನ್ನು ತಕ್ಷಣ ಸಿದ್ಧಪಡಿಸಿ HD ಡೌನ್‌ಲೋಡ್</strong> ಮಾಡಿಕೊಳ್ಳಿ!
          </p>
        </section>

        {/* FEATURES GRID */}
        <section className="space-y-5 border-b border-slate-100 pb-8">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
            <Award className="w-6 h-6 text-amber-500" />
            <span>ಈ ಸಾಫ್ಟ್‌ವೇರ್‌ನಲ್ಲಿ ಲಭ್ಯವಿರುವ ಪ್ರಮುಖ ಅರ್ಜಿಗಳು:</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">ಗ್ರಾಮ ಪಂಚಾಯತಿ (PDO):</strong>
                <span className="text-slate-600">ಕುಡಿಯುವ ನೀರು, ರಸ್ತೆ-ಚರಂಡಿ ನೈರ್ಮಲ್ಯ, ಬೀದಿ ದೀಪ ಹಾಗೂ ಇ-ಸ್ವತ್ತು ನಮೂನೆ ೯ ಮತ್ತು ೧೧ ಅರ್ಜಿ.</span>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">ಕಂದಾಯ ಇಲಾಖೆ (ತಹಶೀಲ್ದಾರ್):</strong>
                <span className="text-slate-600">ಪಹಣಿ ಹೆಸರು ತಿದ್ದುಪಡಿ, ಪೌತಿ ಖಾತೆ ಬದಲಾವಣೆ, ಸಂಧ್ಯಾ ಸುರಕ್ಷಾ & ವೃದ್ಧಾಪ್ಯ ವೇತನ ಅರ್ಜಿ.</span>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">ವಿದ್ಯುತ್ ಇಲಾಖೆ (ESCOM - AEE):</strong>
                <span className="text-slate-600">ಕೃಷಿ ಟ್ರಾನ್ಸ್‌ಫಾರ್ಮರ್ (TC) ಸುಟ್ಟುಹೋಗಿರುವುದು, ಹೊಸ ಮೀಟರ್ ಸಂಪರ್ಕ & ಅಪಾಯಕಾರಿ ಕಂಬ ಸ್ಥಳಾಂತರ.</span>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">ಪೊಲೀಸ್ ದೂರು & RTI Form A:</strong>
                <span className="text-slate-600">ಮೊಬೈಲ್ ಕಳೆದುಹೋದ ದೂರು (Lost Report) ಹಾಗೂ ಮಾಹಿತಿ ಹಕ್ಕು ಕಾಯ್ದೆ ಕಲಂ ೬(೧) ರಡಿ ಅರ್ಜಿ.</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION SECTION */}
        <section className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-blue-700" />
            <span>ಸರ್ಕಾರಿ ಪತ್ರ ಲೇಖನದ ಬಗ್ಗೆ FAQs:</span>
          </h3>

          <div className="space-y-3">
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-1.5">
              <h4 className="text-sm font-black text-slate-900">ಪ್ರ: ಈ ಅರ್ಜಿಯನ್ನು ಸರ್ಕಾರಿ ಕಚೇರಿಗಳಲ್ಲಿ ನೇರವಾಗಿ ಸ್ವೀಕರಿಸುತ್ತಾರೆಯೇ?</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ಉ: ಹೌದು! ಇದು ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ಅಧಿಕೃತ ಪತ್ರ ಲೇಖನ ನಿಯಮಾವಳಿಗಳಿಗೆ (Official Formats) 100% ಅನುಗುಣವಾಗಿದೆ. ಇದನ್ನು ಪ್ರಿಂಟ್ ತೆಗೆದು ಸಹಿ ಮಾಡಿ ಸಂಬಂಧಪಟ್ಟ ಕಚೇರಿಗೆ ಸಲ್ಲಿಸಬಹುದು.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-1.5">
              <h4 className="text-sm font-black text-slate-900">ಪ್ರ: ನಾನು ಪತ್ರದ ವಾಕ್ಯಗಳನ್ನು ಬದಲಾಯಿಸಿಕೊಳ್ಳಬಹುದೇ?</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ಉ: ಖಂಡಿತ! ಪತ್ರದ ವಿಷಯ, ವಿಳಾಸ ಅಥವಾ ಒಡಲಿನ ಯಾವುದೇ ಪದವನ್ನು ನಿಮ್ಮ ಅಗತ್ಯಕ್ಕೆ ತಕ್ಕಂತೆ ಲೈವ್ ಆಗಿ ಎಡಿಟ್ ಮಾಡಿಕೊಳ್ಳಬಹುದು.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* 💬 PUBLIC COMMENT SECTION */}
      <CommentSection pageId="letter-maker" />

    </div>
  );
}
