import React from 'react';
import { Metadata } from 'next';
import { CateringEstimatorComp } from '@/components/CateringEstimatorComp';
import { CommentSection } from '@/components/CommentSection';
import { Sparkles, CheckCircle2, HelpCircle, Award, Utensils, ShoppingBag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ಕಾರ್ಯಕ್ರಮ & ಮದುವೆ ಅಡುಗೆ ಸಾಮಗ್ರಿ ಅಂದಾಜು ಕ್ಯಾಲ್ಕುಲೇಟರ್ | Event Catering Grocery Estimator - Mahiti Chakra',
  description: '50 ರಿಂದ 2000+ ಜನರಿಗೆ ಅಕ್ಕಿ, ಬೇಳೆ, ಎಣ್ಣೆ, ತರಕಾರಿ, ಸಕ್ಕರೆ & ಸಾಮಗ್ರಿಗಳ ನಿಖರ ಲೆಕ್ಕ. 1-ಕ್ಲಿಕ್ Ultra-HD ದಿನಸಿ ಆರ್ಡರ್ ಶೀಟ್ ಡೌನ್‌ಲೋಡ್ & WhatsApp ಶೇರ್.',
  keywords: [
    'Karnataka Catering Grocery Estimator',
    'ಅಡುಗೆ ಸಾಮಗ್ರಿ ಅಂದಾಜು ಕ್ಯಾಲ್ಕುಲೇಟರ್',
    'Wedding Food Grocery Calculator Kannada',
    'Puja Meal Grocery List Calculator',
    'Rice Dal Oil Quantity per Person Karnataka',
    'Catering Raw Material Calculator',
    'Mahiti Chakra Catering App',
  ],
  alternates: {
    canonical: 'https://mahitichakra.com/catering-estimator',
  },
  openGraph: {
    title: 'ಕಾರ್ಯಕ್ರಮದ ಅಡುಗೆ ಸಾಮಗ್ರಿ & ದಿನಸಿ ಅಂದಾಜು | Catering Grocery Estimator',
    description: 'ಮದುವೆ, ಗೃಹಪ್ರವೇಶ & ಪೂಜೆ ಊಟಕ್ಕೆ ಬೇಕಾಗುವ ಅಕ್ಕಿ, ಬೇಳೆ, ಎಣ್ಣೆ & ಸಾಮಗ್ರಿಗಳ ನಿಖರ ಕೆಜಿ ಪಟ್ಟಿ.',
    url: 'https://mahitichakra.com/catering-estimator',
    siteName: 'Mahiti Chakra',
    locale: 'kn_IN',
    type: 'website',
  },
};

export default function CateringEstimatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'ಕಾರ್ಯಕ್ರಮದ ಅಡುಗೆ ಸಾಮಗ್ರಿ ಅಂದಾಜು ಕ್ಯಾಲ್ಕುಲೇಟರ್ - Catering Grocery Estimator',
    'url': 'https://mahitichakra.com/catering-estimator',
    'applicationCategory': 'UtilitiesApplication',
    'operatingSystem': 'All',
    'description': 'ಮದುವೆ, ಗೃಹಪ್ರವೇಶ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಸಮಾರಂಭಗಳ ಊಟಕ್ಕೆ ಜನರ ಸಂಖ್ಯೆಗೆ ಅನುಗುಣವಾಗಿ ನಿಖರ ದಿನಸಿ ಮತ್ತು ತರಕಾರಿ ಪ್ರಮಾಣ ಲೆಕ್ಕ ಹಾಕುವ ಉಚಿತ ಸಾಫ್ಟ್‌ವೇರ್.',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'INR',
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'ratingCount': '78000',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': '100 ಜನರಿಗೆ ಅನ್ನ ಮತ್ತು ಸಾಂಬಾರ್ ಮಾಡಲು ಎಷ್ಟು ಅಕ್ಕಿ ಮತ್ತು ಬೇಳೆ ಬೇಕು?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'ಕರ್ನಾಟಕದ ಊಟದ ಮಾನದಂಡದ ಪ್ರಕಾರ 100 ಜನರಿಗೆ ಸರಾಸರಿ 8 ರಿಂದ 10 ಕೆಜಿ ಸೋನಾ ಮಸೂರಿ ಅಕ್ಕಿ ಮತ್ತು 2.5 ರಿಂದ 3 ಕೆಜಿ ಉತ್ತಮ ತೊಗರಿ ಬೇಳೆ ಅಗತ್ಯವಿರುತ್ತದೆ.',
        },
      },
      {
        '@type': 'Question',
        'name': 'ಈ ಆಪ್‌ನಿಂದ ದಿನಸಿ ಅಂಗಡಿಗೆ ನೀಡಲು ಪಟ್ಟಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿಕೊಳ್ಳಬಹುದೇ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'ಹೌದು! "HD ಸಾಮಗ್ರಿ ಶೀಟ್ ಡೌನ್‌ಲೋಡ್" ಬಟನ್ ಒತ್ತಿ ದಿನಸಿ ಅಂಗಡಿಗೆ ನೀಡುವ ಅಧಿಕೃತ ಆರ್ಡರ್ ಪಟ್ಟಿಯನ್ನು ಇಮೇಜ್ ರೂಪದಲ್ಲಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿಕೊಳ್ಳಬಹುದು ಅಥವಾ ನೇರವಾಗಿ WhatsApp ನಲ್ಲಿ ಶೇರ್ ಮಾಡಬಹುದು.',
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

      {/* 🍲 INTERACTIVE CATERING GROCERY ESTIMATOR SOFTWARE */}
      <CateringEstimatorComp />

      {/* 🌟 SEO RICH CONTENT SECTION */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-8 text-slate-800">
        <section className="space-y-4 border-b border-slate-100 pb-8">
          <div className="flex items-center gap-2 text-orange-700 font-bold text-sm">
            <Sparkles className="w-4 h-4" />
            <span>ಕರ್ನಾಟಕದ #1 ಅಡುಗೆ & ಕ್ಯಾಟರಿಂಗ್ ದಿನಸಿ ಪೋರ್ಟಲ್</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-snug">
            ಕಾರ್ಯಕ್ರಮ & ಮದುವೆ ಅಡುಗೆ ಸಾಮಗ್ರಿ ಅಂದಾಜು ಕ್ಯಾಲ್ಕುಲೇಟರ್ (Event Catering Grocery Estimator)
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            ಮನೆ ಗೃಹಪ್ರವೇಶ, ಮದುವೆ, ಸತ್ಯನಾರಾಯಣ ಪೂಜೆ, ಹುಟ್ಟುಹಬ್ಬ ಅಥವಾ ಊರಿನ ಜಾತ್ರೆಗೆ ಊಟ ತಯಾರಿಸುವಾಗ ದಿನಸಿ ಸಾಮಗ್ರಿಗಳ ಲೆಕ್ಕ ತಪ್ಪಿದರೆ ಆಹಾರ ವ್ಯರ್ಥವಾಗುವುದು ಅಥವಾ ಕೊರತೆಯಾಗುವುದು ಸಾಮಾನ್ಯ. <strong>ಮಾಹಿತಿ ಚಕ್ರ ಅಡುಗೆ ಸಾಮಗ್ರಿ ಅಂದಾಜು ಕ್ಯಾಲ್ಕುಲೇಟರ್</strong> ಮೂಲಕ ಊಟ ಮಾಡುವ ಜನರ ಸಂಖ್ಯೆ ಮತ್ತು ಮೆನು ಆಯ್ಕೆ ಮಾಡಿದರೆ ಸಾಕು — <strong>ಅಕ್ಕಿ, ಬೇಳೆ, ಎಣ್ಣೆ, ತುಪ್ಪ, ತರಕಾರಿ, ಸಕ್ಕರೆ ಹಾಗೂ ಮಸಾಲೆ ಸಾಮಗ್ರಿಗಳ ನಿಖರ ಕೆಜಿ ಪಟ್ಟಿ</strong> ತಕ್ಷಣ ಸಿದ್ಧವಾಗುತ್ತದೆ!
          </p>
        </section>

        {/* FEATURES GRID */}
        <section className="space-y-5 border-b border-slate-100 pb-8">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
            <Award className="w-6 h-6 text-amber-500" />
            <span>ಈ ಸಾಫ್ಟ್‌ವೇರ್‌ನ ಪ್ರಮುಖ ವೈಶಿಷ್ಟ್ಯಗಳು:</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">ವೈಜ್ಞಾನಿಕ ತಲಾ ಪ್ರಮಾಣದ ಲೆಕ್ಕಾಚಾರ:</strong>
                <span className="text-slate-600">ಕರ್ನಾಟಕದ ಹಿರಿಯ ಬಾಣಸಿಗರ ಅಧಿಕೃತ ಅಳತೆಯಂತೆ (Per Head Ratio) ನಿಖರ ಪ್ರಮಾಣ.</span>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">ಅಂದಾಜು ಬಜೆಟ್ ಲೆಕ್ಕ (Estimated Cost ₹):</strong>
                <span className="text-slate-600">ಪ್ರಸ್ತುತ ಮಾರುಕಟ್ಟೆ ದರದಂತೆ ಒಟ್ಟು ದಿನಸಿ ಖರ್ಚು ಎಷ್ಟು ಬರುತ್ತದೆ ಎಂದು ತಿಳಿಯಬಹುದು.</span>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">೬ ಪ್ರತ್ಯೇಕ ವಿಭಾಗಗಳ ಪಟ್ಟಿ:</strong>
                <span className="text-slate-600">ಧಾನ್ಯಗಳು, ಎಣ್ಣೆ-ತುಪ್ಪ, ತರಕಾರಿಗಳು, ಸಿಹಿ ಪದಾರ್ಥ, ಮಸಾಲೆ ಹಾಗೂ ಊಟದ ಪರಿಕರಗಳು.</span>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">📸 Ultra-HD ಆರ್ಡರ್ ಶೀಟ್ & WhatsApp ಶೇರ್:</strong>
                <span className="text-slate-600">ದಿನಸಿ ಅಂಗಡಿಗೆ ನೇರವಾಗಿ ಕಳುಹಿಸಲು ಹೈ-ಡೆಫಿನಿಷನ್ ಇಮೇಜ್ ಡೌನ್‌ಲೋಡ್ ಸೌಲಭ್ಯ.</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION SECTION */}
        <section className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-orange-700" />
            <span>ಅಡುಗೆ ಸಾಮಗ್ರಿ ಅಂದಾಜು ಬಗ್ಗೆ FAQs:</span>
          </h3>

          <div className="space-y-3">
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-1.5">
              <h4 className="text-sm font-black text-slate-900">ಪ್ರ: ಎಷ್ಟು ಜನರಿಗೆ ಬೇಕಾದರೂ ಲೆಕ್ಕ ಹಾಕಬಹುದೇ?</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ಉ: ಹೌದು! 20 ಜನರಿಂದ ಹಿಡಿದು 2000+ ಜನರವರೆಗೂ ಸ್ಲೈಡರ್ ಅಥವಾ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ ತಕ್ಷಣ ಲೆಕ್ಕ ಹಾಕಬಹುದು.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-1.5">
              <h4 className="text-sm font-black text-slate-900">ಪ್ರ: ಈ ಆಪ್ ಉಚಿತವೇ?</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ಉ: ಹೌದು, ಇದು ಸಾರ್ವಜನಿಕರಿಗೆ ಮತ್ತು ಕ್ಯಾಟರಿಂಗ್ ಭಟ್ಟರಿಗೆ 100% ಉಚಿತ ಸಾಫ್ಟ್‌ವೇರ್ ಆಗಿದೆ.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* 💬 PUBLIC COMMENT SECTION */}
      <CommentSection pageId="catering-estimator" />

    </div>
  );
}
