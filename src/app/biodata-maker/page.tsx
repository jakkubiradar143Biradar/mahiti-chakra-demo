import React from 'react';
import { Metadata } from 'next';
import { MarriageBiodataComp } from '@/components/MarriageBiodataComp';
import { CommentSection } from '@/components/CommentSection';
import { Sparkles, CheckCircle2, HelpCircle, Award, Heart, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ಕನ್ನಡ ಮದುವೆ ಬಯೋಡೇಟಾ & ಜಾತಕ ಪ್ರೊಫೈಲ್ ಮೇಕರ್ | Kannada Marriage Biodata Maker - Mahiti Chakra',
  description: 'ವಧು-ವರರ ವಿವರ, ಜಾತಕ, ಶಿಕ್ಷಣ & ಕುಟುಂಬ ಮಾಹಿತಿ ತುಂಬಿ ರಾಯಲ್ ಗೋಲ್ಡ್ ಕನ್ನಡ ಮದುವೆ ಬಯೋಡೇಟಾ ರಚಿಸಿ. 5 ಪ್ರೀಮಿಯಂ ಡಿಸೈನ್‌ಗಳು, 1-ಕ್ಲಿಕ್ Ultra-HD ಇಮೇಜ್ ಡೌನ್‌ಲೋಡ್ & WhatsApp ಶೇರ್.',
  keywords: [
    'Kannada Marriage Biodata Maker',
    'ಕನ್ನಡ ಮದುವೆ ಬಯೋಡೇಟಾ',
    'Kannada Matrimony Biodata Format',
    'Marriage Biodata for Boy Kannada',
    'Marriage Biodata for Girl Kannada',
    'Kannada Kundali Biodata Maker',
    'Digital Marriage Biodata Online',
    'Mahiti Chakra Biodata App',
  ],
  alternates: {
    canonical: 'https://mahiti-chakra-portal.vercel.app/biodata-maker',
  },
  openGraph: {
    title: 'ಕನ್ನಡ ಮದುವೆ ಬಯೋಡೇಟಾ ಮೇಕರ್ | Kannada Marriage Biodata Maker',
    description: 'ವಧು-ವರರಿಗೆ ಪ್ರೀಮಿಯಂ ರಾಯಲ್ ಗೋಲ್ಡ್ ಕನ್ನಡ ಮ್ಯಾರೇಜ್ ಬಯೋಡೇಟಾ ಕಾರ್ಡ್ ತಯಾರಿಸಿ WhatsApp ಶೇರ್ ಮಾಡಿ.',
    url: 'https://mahiti-chakra-portal.vercel.app/biodata-maker',
    siteName: 'Mahiti Chakra',
    locale: 'kn_IN',
    type: 'website',
  },
};

export default function BiodataMakerPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'ಕನ್ನಡ ಮದುವೆ ಬಯೋಡೇಟಾ ಮೇಕರ್ - Kannada Marriage Biodata Maker',
    'url': 'https://mahiti-chakra-portal.vercel.app/biodata-maker',
    'applicationCategory': 'DesignApplication',
    'operatingSystem': 'All',
    'description': 'ವಧು ಮತ್ತು ವರರ ವಿವಾಹ ಸಂಬಂಧಗಳಿಗೆ ಜಾತಕ, ಶಿಕ್ಷಣ ಮತ್ತು ಕುಟುಂಬದ ವಿವರಗಳೊಂದಿಗೆ ಪ್ರೀಮಿಯಂ ರಾಯಲ್ ಕನ್ನಡ ಬಯೋಡೇಟಾ ರಚಿಸುವ ಉಚಿತ ಸಾಫ್ಟ್‌ವೇರ್.',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'INR',
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'ratingCount': '89000',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'ಕನ್ನಡ ಮದುವೆ ಬಯೋಡೇಟಾವನ್ನು ಮೊಬೈಲ್‌ನಲ್ಲೇ ಉಚಿತವಾಗಿ ತಯಾರಿಸಬಹುದೇ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'ಹೌದು! ಮಾಹಿತಿ ಚಕ್ರ ಬಯೋಡೇಟಾ ಮೇಕರ್ ಮೂಲಕ ಯಾವುದೇ ಕಂಪ್ಯೂಟರ್ ಅಥವಾ ಮೊಬೈಲ್‌ನಲ್ಲೇ ವಿವರ ನಮೂದಿಸಿ 100% ಉಚಿತವಾಗಿ Ultra-HD ಬಯೋಡೇಟಾ ಇಮೇಜ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಬಹುದು.',
        },
      },
      {
        '@type': 'Question',
        'name': 'ಬಯೋಡೇಟಾದಲ್ಲಿ ಜಾತಕ ಮತ್ತು ಕುಲ ವಿವರಗಳನ್ನು ನಮೂದಿಸಬಹುದೇ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'ಹೌದು, ರಾಶಿ, ನಕ್ಷತ್ರ, ಗೋತ್ರ, ಕುಲದೇವರು ಮತ್ತು ಜಾತಕ ವಿವರಗಳಿಗೆ ಪ್ರತ್ಯೇಕ ವಿಭಾಗಗಳನ್ನು ನೀಡಲಾಗಿದೆ.',
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

      {/* 💍 INTERACTIVE MARRIAGE BIODATA MAKER SOFTWARE */}
      <MarriageBiodataComp />

      {/* 🌟 SEO RICH CONTENT SECTION */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-8 text-slate-800">
        <section className="space-y-4 border-b border-slate-100 pb-8">
          <div className="flex items-center gap-2 text-rose-600 font-bold text-sm">
            <Sparkles className="w-4 h-4" />
            <span>ಕರ್ನಾಟಕದ #1 ಡಿಜಿಟಲ್ ಮದುವೆ ಬಯೋಡೇಟಾ ಪೋರ್ಟಲ್</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-snug">
            ಕನ್ನಡ ಮದುವೆ ಬಯೋಡೇಟಾ & ಜಾತಕ ಪ್ರೊಫೈಲ್ ಮೇಕರ್ (Kannada Marriage Biodata Maker)
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            ವಿವಾಹ ಸಂಬಂಧಗಳಿಗಾಗಿ ವಧು ಅಥವಾ ವರರ ಪ್ರೊಫೈಲ್ ಕಳುಹಿಸುವಾಗ ಆಕರ್ಷಕ ಮತ್ತು ಸ್ಪಷ್ಟವಾದ ಬಯೋಡೇಟಾ ಅತ್ಯಗತ್ಯ. <strong>ಮಾಹಿತಿ ಚಕ್ರ ಮದುವೆ ಬಯೋಡೇಟಾ ಮೇಕರ್</strong> ಮೂಲಕ ನಿಮ್ಮ ಮೊಬೈಲ್‌ನಲ್ಲೇ ವೈಯಕ್ತಿಕ ವಿವರ, ಜಾತಕ, ಶಿಕ್ಷಣ, ಕಂಪನಿ ಹುದ್ದೆ, ಸಂಬಳ ಮತ್ತು ಕುಟುಂಬದ ಹಿನ್ನೆಲೆಯನ್ನು ಅಚ್ಚುಕಟ್ಟಾಗಿ ನಮೂದಿಸಿ <strong>5 ರಾಯಲ್ ಡಿಸೈನ್‌ಗಳಲ್ಲಿ Ultra-HD ಇಮೇಜ್ ಡೌನ್‌ಲೋಡ್ & WhatsApp ನಲ್ಲಿ ನೇರ ಫೋಟೋ ಶೇರ್ ಮಾಡಬಹುದು.</strong>
          </p>
        </section>

        {/* FEATURES GRID */}
        <section className="space-y-5 border-b border-slate-100 pb-8">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
            <Award className="w-6 h-6 text-amber-500" />
            <span>ಈ ಸಾಫ್ಟ್‌ವೇರ್‌ನ ಪ್ರಮುಖ ವಿಶೇಷತೆಗಳು:</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">5+ ರಾಯಲ್ ಡಿಸೈನ್ ಥೀಮ್‌ಗಳು:</strong>
                <span className="text-slate-600">ಗೋಲ್ಡ್ ಮೆರೂನ್, ಪೀಕಾಕ್ ಗ್ರೀನ್, ರೋಸ್ ಪಿಂಕ್, ಕೇಸರಿ ಮತ್ತು ರಾಯಲ್ ಬ್ಲೂ ಡಿಸೈನ್‌ಗಳು.</span>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">ಅಚ್ಚುಕಟ್ಟಾದ 5 ವಿಭಾಗಗಳು:</strong>
                <span className="text-slate-600">ವೈಯಕ್ತಿಕ ವಿವರ, ಜಾತಕ-ಕುಲ, ಶಿಕ್ಷಣ-ಉದ್ಯೋಗ, ಕುಟುಂಬ ಹಾಗೂ ಸಂಪರ್ಕ ಮಾಹಿತಿ.</span>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">📸 Ultra-HD ಕ್ರಿಸ್ಟಲ್ ಕ್ಲಿಯರ್ ಇಮೇಜ್:</strong>
                <span className="text-slate-600">ಅಕ್ಷರಗಳು ಮಸುಕಾಗದ, ಸುಲಭವಾಗಿ ಓದಬಹುದಾದ ಪ್ರೀಮಿಯಂ ಇಮೇಜ್ ಜನರೇಟ್ ಆಗುತ್ತದೆ.</span>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">💬 ನೇರ WhatsApp ಫೋಟೋ ಶೇರಿಂಗ್:</strong>
                <span className="text-slate-600">ಬಯೋಡೇಟಾ ಇಮೇಜ್ ಮತ್ತು ವಿವರಗಳನ್ನು ನೇರವಾಗಿ ವಾಟ್ಸಾಪ್ ಗ್ರೂಪ್ ಹಾಗೂ ಸಂಬಂಧಿಕರಿಗೆ ಕಳುಹಿಸಬಹುದು.</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION SECTION */}
        <section className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-rose-600" />
            <span>ಮದುವೆ ಬಯೋಡೇಟಾ ಬಗ್ಗೆ FAQs:</span>
          </h3>

          <div className="space-y-3">
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-1.5">
              <h4 className="text-sm font-black text-slate-900">ಪ್ರ: ವಧು ಮತ್ತು ವರ ಇಬ್ಬರಿಗೂ ಬಯೋಡೇಟಾ ಮಾಡಬಹುದೇ?</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ಉ: ಹೌದು! 'ವರ (Groom)' ಅಥವಾ 'ವಧು (Bride)' ಆಯ್ಕೆ ಮಾಡುವ ಮೂಲಕ ಇಬ್ಬರಿಗೂ ಸೂಕ್ತವಾದ ಬಯೋಡೇಟಾ ತಯಾರಿಸಬಹುದು.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-1.5">
              <h4 className="text-sm font-black text-slate-900">ಪ್ರ: ಈ ಆಪ್‌ನಲ್ಲಿ ಬಯೋಡೇಟಾ ಮಾಡಲು ಯಾವುದೇ ಶುಲ್ಕವಿದೆಯೇ?</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ಉ: ಇಲ್ಲ, ಇದು ಸಾರ್ವಜನಿಕರಿಗೆ 100% ಉಚಿತ ಹಾಗೂ ಲೈಫ್‌ಟೈಮ್ ಫ್ರೀ ಸಾಫ್ಟ್‌ವೇರ್ ಆಗಿದೆ.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* 💬 PUBLIC COMMENT SECTION */}
      <CommentSection pageId="biodata-maker" />

    </div>
  );
}
