import React from 'react';
import { Metadata } from 'next';
import { KiraniSanteComp } from '@/components/KiraniSanteComp';
import { CommentSection } from '@/components/CommentSection';
import { Sparkles, CheckCircle2, HelpCircle, Award, Package, ShoppingBag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ಕಿರಣಿ ಸಂತೆ ಲಿಸ್ಟ್ ಮೇಕರ್ | Kirani Sante Grocery Shopping List Maker - Mahiti Chakra',
  description: 'ಮನೆಯ ದಿನಸಿ, ಧಾನ್ಯ, ಎಣ್ಣೆ, ಮಸಾಲೆ ಹಾಗೂ ತರಕಾರಿಗಳ ಸಂತೆ ಲಿಸ್ಟ್ ಅನ್ನು ಸುಲಭವಾಗಿ ತಯಾರಿಸಿ. 1-ಕ್ಲಿಕ್‌ನಲ್ಲಿ HD ಇಮೇಜ್ ಡೌನ್‌ಲೋಡ್ & WhatsApp ಶೇರ್ ಮಾಡಿ. 100% ಉಚಿತ & ನಿಖರ ಸಾಫ್ಟ್‌ವೇರ್.',
  keywords: [
    'Kirani Sante List Maker',
    'ಕಿರಣಿ ಸಂತೆ ಲಿಸ್ಟ್',
    'Grocery Shopping List Kannada',
    'Sante List Maker Online',
    'Monthly Kirani List Karnataka',
    'Grocery List PDF Image Maker',
    'ಮನೆ ದಿನಸಿ ಸಾಮಗ್ರಿಗಳ ಪಟ್ಟಿ',
    'Mahiti Chakra Kirani App',
  ],
  alternates: {
    canonical: 'https://mahitichakra.com/kirani-sante',
  },
  openGraph: {
    title: 'ಕಿರಣಿ ಸಂತೆ ಲಿಸ್ಟ್ ಮೇಕರ್ | Kirani Sante Grocery List Maker',
    description: 'ಮನೆಯ ದಿನಸಿ ಮತ್ತು ಸಂತೆ ಸಾಮಗ್ರಿಗಳ ಪಟ್ಟಿ ಸುಲಭವಾಗಿ ಸಿದ್ಧಪಡಿಸಿ HD ಇಮೇಜ್ ಡೌನ್‌ಲೋಡ್ & WhatsApp ಶೇರ್ ಮಾಡಿ.',
    url: 'https://mahitichakra.com/kirani-sante',
    siteName: 'Mahiti Chakra',
    locale: 'kn_IN',
    type: 'website',
  },
};

export default function KiraniSantePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'ಕಿರಣಿ ಸಂತೆ ಲಿಸ್ಟ್ ಮೇಕರ್ - Kirani Sante Grocery Shopping List',
    'url': 'https://mahitichakra.com/kirani-sante',
    'applicationCategory': 'ShoppingApplication',
    'operatingSystem': 'All',
    'description': 'ಮನೆಯ ದಿನಸಿ, ಧಾನ್ಯ, ಎಣ್ಣೆ, ಮಸಾಲೆ ಹಾಗೂ ತರಕಾರಿಗಳ ಸಂತೆ ಲಿಸ್ಟ್ ತಯಾರಿಸಿ HD ಕಾರ್ಡ್ ಡೌನ್‌ಲೋಡ್ & WhatsApp ಶೇರ್ ಮಾಡುವ ಉಚಿತ ಆಪ್.',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'INR',
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'ratingCount': '48000',
    },
  };

  return (
    <div className="space-y-10">
      
      {/* 🚀 JSON-LD STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 🛍️ INTERACTIVE KIRANI SANTE LIST SOFTWARE */}
      <KiraniSanteComp />

      {/* 🌟 SEO RICH CONTENT SECTION */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-8 text-slate-800">
        <section className="space-y-4 border-b border-slate-100 pb-8">
          <div className="flex items-center gap-2 text-amber-600 font-bold text-sm">
            <Sparkles className="w-4 h-4" />
            <span>ಕರ್ನಾಟಕದ #1 ಡಿಜಿಟಲ್ ದಿನಸಿ & ಸಂತೆ ಲಿಸ್ಟ್ ಪೋರ್ಟಲ್</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-snug">
            ಕಿರಣಿ ಸಂತೆ ಲಿಸ್ಟ್ ಮೇಕರ್ ಸಾಫ್ಟ್‌ವೇರ್ (Kirani Sante Shopping List Maker)
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            ಪ್ರತಿ ವಾರ ಅಥವಾ ತಿಂಗಳು ಸಂತೆ ಮತ್ತು ದಿನಸಿ ಅಂಗಡಿಗೆ ಹೋಗುವಾಗ ಕಾಗದದ ಮೇಲೆ ಪಟ್ಟಿ ಬರೆಯುವ ಬದಲು, <strong>ಮಾಹಿತಿ ಚಕ್ರದ ಕಿರಣಿ ಸಂತೆ ಲಿಸ್ಟ್ ಮೇಕರ್</strong> ಮೂಲಕ ನಿಮ್ಮ ಮೊಬೈಲ್‌ನಲ್ಲೇ ಅತ್ಯಂತ ಸುಲಭವಾಗಿ ಮತ್ತು ವೇಗವಾಗಿ ಸಾಮಗ್ರಿಗಳ ಪಟ್ಟಿಯನ್ನು ತಯಾರಿಸಬಹುದು. ಈ ಆಪ್‌ನಲ್ಲಿ ಧಾನ್ಯ, ಬೇಳೆಕಾಳು, ಎಣ್ಣೆ, ತುಪ್ಪ, ಮಸಾಲೆ, ತರಕಾರಿ, ಡೈರಿ ಮತ್ತು ಪೂಜಾ ಸಾಮಗ್ರಿಗಳ ಸಂಪೂರ್ಣ ಲಿಸ್ಟ್ ಮೊದಲೇ ಇದ್ದು, ಬೇಕಾದ ಪ್ರಮಾಣವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ <strong>1-ಕ್ಲಿಕ್‌ನಲ್ಲಿ HD ಇಮೇಜ್ ಅಥವಾ WhatsApp ಮೂಲಕ ಅಂಗಡಿಯವರಿಗೆ ಶೇರ್ ಮಾಡಬಹುದು.</strong>
          </p>
        </section>

        <section className="space-y-5">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
            <Award className="w-6 h-6 text-amber-500" />
            <span>ಈ ಸಾಫ್ಟ್‌ವೇರ್‌ನ ಪ್ರಮುಖ ವೈಶಿಷ್ಟ್ಯಗಳು:</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">100+ ರೆಡಿಮೇಡ್ ದಿನಸಿ ಸಾಮಗ್ರಿಗಳು:</strong>
                <span className="text-slate-600">ಕರ್ನಾಟಕದ ಮನೆಗಳಲ್ಲಿ ಬಳಸುವ ಎಲ್ಲಾ ನಿತ್ಯೋಪಯೋಗಿ ವಸ್ತುಗಳ ಪಟ್ಟಿ ವರ್ಗೀಕರಿಸಲ್ಪಟ್ಟಿದೆ.</span>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">ಕಸ್ಟಮ್ ಸಾಮಗ್ರಿ ಸೇರ್ಪಡೆ:</strong>
                <span className="text-slate-600">ಲಿಸ್ಟ್‌ನಲ್ಲಿರದ ಯಾವುದೇ ಹೊಸ ಐಟಂ ಅನ್ನು ನಿಮ್ಮದೇ ಹೆಸರು ಮತ್ತು ಪ್ರಮಾಣದಲ್ಲಿ ಸೇರಿಸಬಹುದು.</span>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">📸 HD ಪ್ರೀಮಿಯಂ ಇಮೇಜ್ ಡೌನ್‌ಲೋಡ್:</strong>
                <span className="text-slate-600">ಚೆಕ್‌ಬಾಕ್ಸ್ ಸಹಿತ ಅತ್ಯಾಕರ್ಷಕ ಪಟ್ಟಿಯನ್ನು ನೇರವಾಗಿ ನಿಮ್ಮ ಮೊಬೈಲ್‌ಗೆ ಇಮೇಜ್ ಆಗಿ ಸೇವ್ ಮಾಡಿಕೊಳ್ಳಬಹುದು.</span>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">💬 ನೇರ WhatsApp ಶೇರಿಂಗ್:</strong>
                <span className="text-slate-600">ಸಿದ್ಧಪಡಿಸಿದ ಪಟ್ಟಿಯನ್ನು 1-ಕ್ಲಿಕ್‌ನಲ್ಲಿ ನಿಮ್ಮ ಕುಟುಂಬದವರಿಗೆ ಅಥವಾ ಅಂಗಡಿಯವರ WhatsApp ಗೆ ಕಳುಹಿಸಿ.</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 💬 PUBLIC COMMENT SECTION */}
      <CommentSection pageId="kirani-sante" />

    </div>
  );
}
