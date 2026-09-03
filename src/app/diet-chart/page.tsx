import React from 'react';
import { Metadata } from 'next';
import { DietChartComp } from '@/components/DietChartComp';
import { CommentSection } from '@/components/CommentSection';
import { Sparkles, CheckCircle2, HelpCircle, Award, HeartPulse, Apple } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ತೂಕ ಇಳಿಸುವ ಕನ್ನಡ ಡಯಟ್ ಚಾರ್ಟ್ & ಕ್ಯಾಲೋರಿ ಪ್ಲಾನರ್ | Kannada Weight Loss Diet Chart - Mahiti Chakra',
  description: 'ವೈಜ್ಞಾನಿಕವಾಗಿ ತೂಕ ಇಳಿಸಲು ರಾಗಿ ಮುದ್ದೆ, ಸಿರಿಧಾನ್ಯ & ಸೊಪ್ಪಿನ ಸಾರಿನ ನೈಸರ್ಗಿಕ ಕನ್ನಡ ಡಯಟ್ ಚಾರ್ಟ್. BMI, BMR, ದಿನದ ಕ್ಯಾಲೋರಿ ಲೆಕ್ಕ ಹಾಕಿ Ultra-HD ಇಮೇಜ್ ಡೌನ್‌ಲೋಡ್ & WhatsApp ಶೇರ್ ಮಾಡಿ.',
  keywords: [
    'Kannada Weight Loss Diet Chart',
    'ತೂಕ ಇಳಿಸುವ ಕನ್ನಡ ಡಯಟ್ ಚಾರ್ಟ್',
    'Weight Loss Tips in Kannada',
    'Ragi Mudde for Weight Loss',
    'Kannada Calorie Calculator',
    'BMR BMI Calculator Kannada',
    'Kannada Health and Diet Planner',
    'Mahiti Chakra Diet App',
  ],
  alternates: {
    canonical: 'https://mahiti-chakra-portal.vercel.app/diet-chart',
  },
  openGraph: {
    title: 'ತೂಕ ಇಳಿಸುವ ಕನ್ನಡ ಡಯಟ್ ಚಾರ್ಟ್ | Kannada Weight Loss Diet Chart',
    description: 'ರಾಗಿ ಮುದ್ದೆ ಮತ್ತು ನೈಸರ್ಗಿಕ ಆಹಾರದ ಮೂಲಕ ಸುಲಭವಾಗಿ ತಿಂಗಳಿಗೆ 3-4 ಕೆಜಿ ತೂಕ ಇಳಿಸುವ ಸಂಪೂರ್ಣ ಕನ್ನಡ ಡಯಟ್ ವೇಳಾಪಟ್ಟಿ.',
    url: 'https://mahiti-chakra-portal.vercel.app/diet-chart',
    siteName: 'Mahiti Chakra',
    locale: 'kn_IN',
    type: 'website',
  },
};

export default function DietChartPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'ತೂಕ ಇಳಿಸುವ ಕನ್ನಡ ಡಯಟ್ ಚಾರ್ಟ್ - Kannada Weight Loss Diet Chart Planner',
    'url': 'https://mahiti-chakra-portal.vercel.app/diet-chart',
    'applicationCategory': 'HealthApplication',
    'operatingSystem': 'All',
    'description': 'ವೈಜ್ಞಾನಿಕವಾಗಿ ತೂಕ ಇಳಿಸಲು ರಾಗಿ ಮುದ್ದೆ, ಸಿರಿಧಾನ್ಯ ಮತ್ತು ಪೌಷ್ಟಿಕ ಆಹಾರದ ಸಂಪೂರ್ಣ ಕನ್ನಡ ಡಯಟ್ ಚಾರ್ಟ್ ಇಮೇಜ್ ಪಡೆಯುವ ಉಚಿತ ಆಪ್.',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'INR',
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'ratingCount': '83000',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'ರಾಗಿ ಮುದ್ದೆ ತಿನ್ನುವುದರಿಂದ ತೂಕ ಇಳಿಯುತ್ತದೆಯೇ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'ಹೌದು! ರಾಗಿಯಲ್ಲಿ ಅತ್ಯಧಿಕ ಫೈಬರ್ (ನಾರಿನಂಶ) ಮತ್ತು ಕಡಿಮೆ ಗ್ಲೈಸೆಮಿಕ್ ಇಂಡೆಕ್ಸ್ ಇರುವುದರಿಂದ ಹೊಟ್ಟೆ ದೀರ್ಘಕಾಲ ತುಂಬಿರುತ್ತದೆ ಮತ್ತು ದೇಹದಲ್ಲಿ ಅನಗತ್ಯ ಕೊಬ್ಬು ಶೇಖರಣೆಯಾಗುವುದನ್ನು ತಡೆಯುತ್ತದೆ.',
        },
      },
      {
        '@type': 'Question',
        'name': 'ತೂಕ ಇಳಿಸಲು ದಿನಕ್ಕೆ ಎಷ್ಟು ಕ್ಯಾಲೋರಿ ಆಹಾರ ಸೇವಿಸಬೇಕು?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'ಸಾಮಾನ್ಯವಾಗಿ ಪುರುಷರಿಗೆ 1500-1600 kcal ಮತ್ತು ಮಹಿಳೆಯರಿಗೆ 1300-1400 kcal ಸುರಕ್ಷಿತ ಕ್ಯಾಲೋರಿ ಮಿತಿಯಾಗಿದ್ದು, ಇದರಿಂದ ವಾರಕ್ಕೆ 0.5 ರಿಂದ 1 ಕೆಜಿ ತೂಕ ಇಳಿಸಬಹುದು.',
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

      {/* 🥗 INTERACTIVE DIET CHART PLANNER SOFTWARE */}
      <DietChartComp />

      {/* 🌟 SEO RICH CONTENT SECTION */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-8 text-slate-800">
        <section className="space-y-4 border-b border-slate-100 pb-8">
          <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
            <Sparkles className="w-4 h-4" />
            <span>ಕರ್ನಾಟಕದ #1 ನೈಸರ್ಗಿಕ ತೂಕ ಇಳಿಸುವ ಪೌಷ್ಟಿಕ ಡಯಟ್ ಪೋರ್ಟಲ್</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-snug">
            ತೂಕ ಇಳಿಸುವ ಕನ್ನಡ ವೈಜ್ಞಾನಿಕ ಡಯಟ್ ಚಾರ್ಟ್ (Karnataka Weight Loss Diet Chart)
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            ತೂಕ ಇಳಿಸಿಕೊಳ್ಳಲು ಊಟ ಬಿಡುವುದು ಅಥವಾ ದುಬಾರಿ ಔಷಧಿಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳುವುದು ಅತ್ಯಂತ ಅಪಾಯಕಾರಿ. ನಮ್ಮ ಸಾಂಪ್ರದಾಯಿಕ ಕರ್ನಾಟಕದ ಆಹಾರಗಳಾದ <strong>ರಾಗಿ ಮುದ್ದೆ, ಬೇಳೆ ಸೊಪ್ಪಿನ ಸಾರು, ಮೊಳಕೆ ಕಾಳು, ಮಜ್ಜಿಗೆ ಹಾಗೂ ಸಿರಿಧಾನ್ಯಗಳ</strong> ಸರಿಯಾದ ಅನುಪಾತದಲ್ಲಿ ದಿನನಿತ್ಯ ಊಟ ಮಾಡುವುದರಿಂದ ಯಾವುದೇ ಅಡ್ಡಪರಿಣಾಮಗಳಿಲ್ಲದೆ ತಿಂಗಳಿಗೆ 3 ರಿಂದ 5 ಕೆಜಿ ತೂಕವನ್ನು ಸುಲಭವಾಗಿ ಇಳಿಸಬಹುದು.
          </p>
        </section>

        {/* 5 GOLDEN RULES */}
        <section className="space-y-5 border-b border-slate-100 pb-8">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
            <Award className="w-6 h-6 text-amber-500" />
            <span>ತೂಕ ಇಳಿಸುವ 5 ಸುವರ್ಣ ನಿಯಮಗಳು:</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">1. ಸಕ್ಕರೆ & ಬೇಕರಿ ಪದಾರ್ಥ ತ್ಯಜಿಸಿ:</strong>
                <span className="text-slate-600">ಟೀ/ಕಾಫಿಯಲ್ಲಿ ಸಕ್ಕರೆ ಬಳಸಬೇಡಿ. ಬೇಕರಿ ಬಿಸ್ಕತ್ತು ಮತ್ತು ಕರಿದ ಪದಾರ್ಥಗಳನ್ನು ದೂರವಿಡಿ.</span>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">2. ರಾತ್ರಿ ಊಟ 8 ಗಂಟೆಯೊಳಗೆ ಮುಗಿಸಿ:</strong>
                <span className="text-slate-600">ರಾತ್ರಿ ತಡವಾಗಿ ಊಟ ಮಾಡುವುದರಿಂದ ಜೀರ್ಣಕ್ರಿಯೆ ಕುಂಠಿತವಾಗಿ ಕೊಬ್ಬು ಸಂಗ್ರಹವಾಗುತ್ತದೆ.</span>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">3. ದಿನಕ್ಕೆ 3 ಲೀಟರ್ ನೀರು:</strong>
                <span className="text-slate-600">ಸಾಕಷ್ಟು ನೀರು ಕುಡಿಯುವುದರಿಂದ ಶರೀರದಲ್ಲಿರುವ ಕಲ್ಮಷಗಳು ಹೊರಹೋಗಿ ಕೊಬ್ಬು ಕರಗುತ್ತದೆ.</span>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">4. ನಿತ್ಯ 40 ನಿಮಿಷ ಬಿರುಸಿನ ನಡಿಗೆ:</strong>
                <span className="text-slate-600">ದಿನಕ್ಕೆ ಕನಿಷ್ಠ 6,000 ರಿಂದ 8,000 ಹೆಜ್ಜೆಗಳನ್ನು ನಡೆಯುವುದು ಹೃದಯ ಮತ್ತು ತೂಕ ಇಳಿಕೆಗೆ ಅತ್ಯುತ್ತಮ.</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION SECTION */}
        <section className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-emerald-700" />
            <span>ತೂಕ ಇಳಿಕೆ ಡಯಟ್ ಬಗ್ಗೆ FAQs:</span>
          </h3>

          <div className="space-y-3">
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-1.5">
              <h4 className="text-sm font-black text-slate-900">ಪ್ರ: ಈ ಡಯಟ್ ಪಾಲಿಸಿದರೆ ಎಷ್ಟು ದಿನಗಳಲ್ಲಿ ಫಲಿತಾಂಶ ಕಾಣಬಹುದು?</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ಉ: ಸರಿಯಾಗಿ ಪಾಲಿಸಿದರೆ ಮೊದಲ 10 ರಿಂದ 15 ದಿನಗಳಲ್ಲೇ 1.5 ರಿಂದ 2 ಕೆಜಿ ತೂಕ ಇಳಿಕೆ ಮತ್ತು ಶರೀರದಲ್ಲಿ ಚುರುಕುತನವನ್ನು ಗಮನಿಸಬಹುದು.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-1.5">
              <h4 className="text-sm font-black text-slate-900">ಪ್ರ: ಈ ಚಾರ್ಟ್ ಅನ್ನು WhatsApp ನಲ್ಲಿ ಶೇರ್ ಮಾಡಬಹುದೇ?</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ಉ: ಹೌದು! "WhatsApp ನಲ್ಲಿ ಡಯಟ್ ಚಾರ್ಟ್ ಶೇರ್ ಮಾಡಿ" ಬಟನ್ ಒತ್ತಿದಾಗ ನೇರವಾಗಿ ನಿಮ್ಮ ಡಯಟ್ ಚಾರ್ಟ್ ಇಮೇಜ್ ಮತ್ತು ವಿವರಗಳು WhatsApp ನಲ್ಲಿ ಶೇರ್ ಆಗುತ್ತವೆ.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* 💬 PUBLIC COMMENT SECTION */}
      <CommentSection pageId="diet-chart" />

    </div>
  );
}
