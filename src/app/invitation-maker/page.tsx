import React from 'react';
import { Metadata } from 'next';
import { InvitationCardComp } from '@/components/InvitationCardComp';
import { CommentSection } from '@/components/CommentSection';
import { Sparkles, CheckCircle2, HelpCircle, Award, Heart, Palette } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ಕನ್ನಡ ಡಿಜಿಟಲ್ ಲಗ್ನ ಪತ್ರಿಕೆ & ಆಮಂತ್ರಣ ಮೇಕರ್ | Kannada Digital Invitation Card Maker - Mahiti Chakra',
  description: 'ಮದುವೆ, ನಿಶ್ಚಿತಾರ್ಥ, ಗೃಹಪ್ರವೇಶ, ನಾಮಕರಣ & ಹುಟ್ಟುಹಬ್ಬಕ್ಕೆ ರಾಯಲ್ ಗೋಲ್ಡ್ ಕನ್ನಡ ಆಮಂತ್ರಣ ಪತ್ರಿಕೆ ರಚಿಸಿ. 5 ಪ್ರೀಮಿಯಂ ಡಿಸೈನ್‌ಗಳು, 1-ಕ್ಲಿಕ್ Ultra-HD ಇಮೇಜ್ ಡೌನ್‌ಲೋಡ್ & WhatsApp ಶೇರ್.',
  keywords: [
    'Kannada Digital Invitation Card Maker',
    'ಕನ್ನಡ ಡಿಜಿಟಲ್ ಲಗ್ನ ಪತ್ರಿಕೆ',
    'Kannada Wedding Invitation Maker',
    'Gruhapravesha Invitation Kannada',
    'Kannada Naming Ceremony Card Maker',
    'Digital Lagna Patrike Online',
    'ಮದುವೆ ಆಮಂತ್ರಣ ಪತ್ರಿಕೆ ಮೇಕರ್',
    'Mahiti Chakra Invitation App',
  ],
  alternates: {
    canonical: 'https://mahiti-chakra-portal.vercel.app/invitation-maker',
  },
  openGraph: {
    title: 'ಕನ್ನಡ ಡಿಜಿಟಲ್ ಲಗ್ನ ಪತ್ರಿಕೆ ರಚನೆ | Kannada Invitation Card Maker',
    description: 'ಮದುವೆ, ಗೃಹಪ್ರವೇಶ, ನಿಶ್ಚಿತಾರ್ಥಕ್ಕೆ ಪ್ರೀಮಿಯಂ ರಾಯಲ್ ಗೋಲ್ಡ್ ಕನ್ನಡ ಆಮಂತ್ರಣ ಪತ್ರಿಕೆ ತಯಾರಿಸಿ WhatsApp ಶೇರ್ ಮಾಡಿ.',
    url: 'https://mahiti-chakra-portal.vercel.app/invitation-maker',
    siteName: 'Mahiti Chakra',
    locale: 'kn_IN',
    type: 'website',
  },
};

export default function InvitationMakerPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'ಕನ್ನಡ ಡಿಜಿಟಲ್ ಲಗ್ನ ಪತ್ರಿಕೆ ಮೇಕರ್ - Kannada Invitation Card Maker',
    'url': 'https://mahiti-chakra-portal.vercel.app/invitation-maker',
    'applicationCategory': 'DesignApplication',
    'operatingSystem': 'All',
    'description': 'ಮದುವೆ, ನಿಶ್ಚಿತಾರ್ಥ, ಗೃಹಪ್ರವೇಶ ಮತ್ತು ನಾಮಕರಣ ಸಮಾರಂಭಗಳಿಗೆ ರಾಯಲ್ ಗೋಲ್ಡ್ ಕನ್ನಡ ಆಮಂತ್ರಣ ಪತ್ರಿಕೆ ರಚಿಸಿ HD ಡೌನ್‌ಲೋಡ್ ಮಾಡುವ ಉಚಿತ ಸಾಫ್ಟ್‌ವೇರ್.',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'INR',
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'ratingCount': '74000',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'ಕನ್ನಡ ಡಿಜಿಟಲ್ ಆಮಂತ್ರಣ ಪತ್ರಿಕೆಯನ್ನು ಮೊಬೈಲ್‌ನಲ್ಲೇ ಉಚಿತವಾಗಿ ತಯಾರಿಸಬಹುದೇ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'ಹೌದು! ಮಾಹಿತಿ ಚಕ್ರ ಇನ್ವಿಟೇಶನ್ ಮೇಕರ್ ಮೂಲಕ ಯಾವುದೇ ಕಂಪ್ಯೂಟರ್ ಅಥವಾ ಮೊಬೈಲ್‌ನಲ್ಲೇ ವಧು-ವರರ ಹೆಸರು, ದಿನಾಂಕ, ಸ್ಥಳ ನಮೂದಿಸಿ 100% ಉಚಿತವಾಗಿ Ultra-HD ಲಗ್ನ ಪತ್ರಿಕೆ ಡೌನ್‌ಲೋಡ್ ಮಾಡಬಹುದು.',
        },
      },
      {
        '@type': 'Question',
        'name': 'ಸಿದ್ಧಪಡಿಸಿದ ಲಗ್ನ ಪತ್ರಿಕೆಯನ್ನು WhatsApp ನಲ್ಲಿ ಹೇಗೆ ಶೇರ್ ಮಾಡುವುದು?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'ಲಗ್ನ ಪತ್ರಿಕೆ ಸಿದ್ಧವಾದ ನಂತರ "WhatsApp ನಲ್ಲಿ ಆಮಂತ್ರಣ ಶೇರ್ ಮಾಡಿ" ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿದರೆ ಸಾಕು, ನೇರವಾಗಿ ಫೋಟೋ ಮತ್ತು ವೆಬ್‌ಸೈಟ್ ಲಿಂಕ್ ಸಹಿತ WhatsApp ನಲ್ಲಿ ಶೇರ್ ಆಗುತ್ತದೆ.',
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

      {/* 💌 INTERACTIVE INVITATION CARD MAKER SOFTWARE */}
      <InvitationCardComp />

      {/* 🌟 SEO RICH CONTENT SECTION */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-8 text-slate-800">
        <section className="space-y-4 border-b border-slate-100 pb-8">
          <div className="flex items-center gap-2 text-rose-600 font-bold text-sm">
            <Sparkles className="w-4 h-4" />
            <span>ಕರ್ನಾಟಕದ #1 ಡಿಜಿಟಲ್ ಲಗ್ನ ಪತ್ರಿಕೆ & ಆಮಂತ್ರಣ ಪೋರ್ಟಲ್</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-snug">
            ಕನ್ನಡ ಡಿಜಿಟಲ್ ಲಗ್ನ ಪತ್ರಿಕೆ & ಆಮಂತ್ರಣ ಕಾರ್ಡ್ ಮೇಕರ್ (Kannada Digital Invitation Card Maker)
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            ಮದುವೆ, ನಿಶ್ಚಿತಾರ್ಥ, ಗೃಹಪ್ರವೇಶ, ನಾಮಕರಣ, ಹುಟ್ಟುಹಬ್ಬ ಹಾಗೂ ಪೂಜಾ ಸಮಾರಂಭಗಳಿಗೆ ಪ್ರಿಂಟಿಂಗ್ ಪ್ರೆಸ್‌ಗೆ ಹೋಗಿ ಹಣ ವ್ಯಯಿಸುವ ಬದಲು, <strong>ಮಾಹಿತಿ ಚಕ್ರದ ಡಿಜಿಟಲ್ ಆಮಂತ್ರಣ ಪತ್ರಿಕೆ ಮೇಕರ್</strong> ಮೂಲಕ ನಿಮ್ಮ ಮೊಬೈಲ್‌ನಲ್ಲೇ ಕೆಲವೇ ಕ್ಷಣಗಳಲ್ಲಿ ಅದ್ಭುತವಾದ ರಾಯಲ್ ಗೋಲ್ಡ್ ಕಾರ್ಡ್ ತಯಾರಿಸಬಹುದು. ಇದರಲ್ಲಿ 5 ಕ್ಕೂ ಹೆಚ್ಚು ಸಾಂಪ್ರದಾಯಿಕ ಮತ್ತು ಆಧುನಿಕ ರಾಯಲ್ ಡಿಸೈನ್‌ಗಳು (Royal Maroon, Peacock Green, Floral Pink, Temple Saffron, Navy Gold) ಲಭ್ಯವಿದ್ದು, <strong>1-ಕ್ಲಿಕ್‌ನಲ್ಲಿ Ultra-HD ಇಮೇಜ್ ಡೌನ್‌ಲೋಡ್ & WhatsApp ನಲ್ಲಿ ನೇರ ಫೋಟೋ ಶೇರ್ ಮಾಡಬಹುದು.</strong>
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
                <strong className="text-slate-900 block font-bold">5+ ಪ್ರೀಮಿಯಂ ರಾಯಲ್ ಥೀಮ್ ಡಿಸೈನ್‌ಗಳು:</strong>
                <span className="text-slate-600">ಗೋಲ್ಡ್ ಮೆರೂನ್, ಪೀಕಾಕ್ ಗ್ರೀನ್, ರೋಸ್ ಪಿಂಕ್, ಕೇಸರಿ ಮತ್ತು ರಾಯಲ್ ಬ್ಲೂ ಡಿಸೈನ್‌ಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಬಹುದು.</span>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">ಎಲ್ಲಾ ಶುಭ ಸಮಾರಂಭಗಳ ಬೆಂಬಲ:</strong>
                <span className="text-slate-600">ಮದುವೆ, ನಿಶ್ಚಿತಾರ್ಥ, ಗೃಹಪ್ರವೇಶ, ನಾಮಕರಣ, ಹುಟ್ಟುಹಬ್ಬ ಹಾಗೂ ಪೂಜಾ ಆಮಂತ್ರಣಗಳಿಗೆ ರೆಡಿಮೇಡ್ ಫಾರ್ಮ್ಯಾಟ್‌ಗಳು.</span>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">📸 Ultra-HD ಕ್ರಿಸ್ಟಲ್ ಕ್ಲಿಯರ್ ಇಮೇಜ್:</strong>
                <span className="text-slate-600">ಅತ್ಯಾಧುನಿಕ ಕ್ಯಾನ್ವಾಸ್ ಎಂಜಿನ್ ಮೂಲಕ AI ಚಿತ್ರಗಳಿಗಿಂತಲೂ ಅತಿ ಸ್ಪಷ್ಟವಾದ, ಪ್ರಿಂಟ್ ಮಾಡಬಹುದಾದ ಇಮೇಜ್ ಜನರೇಟ್ ಆಗುತ್ತದೆ.</span>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">💬 ನೇರ WhatsApp ಫೋಟೋ ಶೇರಿಂಗ್:</strong>
                <span className="text-slate-600">ಆಮಂತ್ರಣ ಇಮೇಜ್ ಮತ್ತು ವಿವರಗಳನ್ನು ನೇರವಾಗಿ ವಾಟ್ಸಾಪ್ ಗ್ರೂಪ್ ಹಾಗೂ ಬಂಧುಗಳಿಗೆ ಕಳುಹಿಸಬಹುದು.</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION SECTION */}
        <section className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-rose-600" />
            <span>ಆಮಂತ್ರಣ ಪತ್ರಿಕೆ ಮೇಕರ್ ಬಗ್ಗೆ FAQs:</span>
          </h3>

          <div className="space-y-3">
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-1.5">
              <h4 className="text-sm font-black text-slate-900">ಪ್ರ: ಈ ಆಪ್‌ನಲ್ಲಿ ಲಗ್ನ ಪತ್ರಿಕೆ ಮಾಡಲು ಹಣ ಪಾವತಿಸಬೇಕೇ?</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ಉ: ಇಲ್ಲ, ಇದು 100% ಉಚಿತ ಹಾಗೂ ಲೈಫ್‌ಟೈಮ್ ಫ್ರೀ ಸಾಫ್ಟ್‌ವೇರ್ ಆಗಿದೆ.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-1.5">
              <h4 className="text-sm font-black text-slate-900">ಪ್ರ: ಡೌನ್‌ಲೋಡ್ ಮಾಡಿದ ಇಮೇಜ್ ಅನ್ನು ಪ್ರಿಂಟ್ ಮಾಡಬಹುದೇ?</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ಉ: ಹೌದು, ಇದು 1000x1400 ಪಿಕ್ಸೆಲ್‌ನ ಅಲ್ಟ್ರಾ-ಎಚ್‌ಡಿ (Ultra-HD) ರೆಸಲ್ಯೂಶನ್ ಹೊಂದಿದ್ದು, ಪ್ರಿಂಟ್ ಮಾಡಲು ಮತ್ತು ಡಿಜಿಟಲ್ ಶೇರಿಂಗ್‌ಗೆ ಅತ್ಯುತ್ತಮವಾಗಿದೆ.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* 💬 PUBLIC COMMENT SECTION */}
      <CommentSection pageId="invitation-maker" />

    </div>
  );
}
