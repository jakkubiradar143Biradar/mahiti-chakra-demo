import React from 'react';
import { Metadata } from 'next';
import { ScreenshotEditorComp } from '@/components/ScreenshotEditorComp';
import { CommentSection } from '@/components/CommentSection';
import { Sparkles, CheckCircle2, HelpCircle, Award, Edit3, Smartphone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಸ್ಕ್ಯಾನರ್ & ಲೈವ್ ಇಮೇಜ್ ಟೆಕ್ಸ್ಟ್ ಎಡಿಟರ್ | Screenshot OCR Scanner & Live Photo Text Editor - Mahiti Chakra',
  description: 'ಯಾವುದೇ ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಅಥವಾ ಬಿಲ್ ಅಪ್ಲೋಡ್ ಮಾಡಿ, ಪಠ್ಯ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ, ಚಿತ್ರದ ಮೇಲೆಯೇ ರಿಯಲ್ ಆಗಿ ಅಕ್ಷರಗಳನ್ನು ಎಡಿಟ್ ಮಾಡಿ HD ಇಮೇಜ್ ಡೌನ್‌ಲೋಡ್ & WhatsApp ಶೇರ್ ಮಾಡಿ.',
  keywords: [
    'Screenshot Text Editor Kannada',
    'ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಸ್ಕ್ಯಾನರ್ & ಎಡಿಟರ್',
    'Image OCR Text Extractor Kannada',
    'Edit Text on Screenshot Online Free',
    'UPI Receipt Editor Kannada',
    'Photo Text Modifier App',
    'Mahiti Chakra Screenshot App',
  ],
  alternates: {
    canonical: 'https://mahitichakra.com/screenshot-editor',
  },
  openGraph: {
    title: 'ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಸ್ಕ್ಯಾನರ್ & ಲೈವ್ ಟೆಕ್ಸ್ಟ್ ಎಡಿಟರ್ | Screenshot OCR Editor',
    description: 'ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಅಥವಾ ಫೋಟೋದ ಮೇಲಿನ ಅಕ್ಷರಗಳನ್ನು ನೇರವಾಗಿ ಎಡಿಟ್ ಮಾಡುವ ಉಚಿತ ಸಾಫ್ಟ್‌ವೇರ್.',
    url: 'https://mahitichakra.com/screenshot-editor',
    siteName: 'Mahiti Chakra',
    locale: 'kn_IN',
    type: 'website',
  },
};

export default function ScreenshotEditorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಸ್ಕ್ಯಾನರ್ & ಲೈವ್ ಟೆಕ್ಸ್ಟ್ ಎಡಿಟರ್ - Screenshot OCR Editor',
    'url': 'https://mahitichakra.com/screenshot-editor',
    'applicationCategory': 'UtilitiesApplication',
    'operatingSystem': 'All',
    'description': 'ಯಾವುದೇ ಸ್ಕ್ರೀನ್‌ಶಾಟ್, ಬಿಲ್ ಅಥವಾ ಫೋಟೋದ ಪಠ್ಯವನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಚಿತ್ರದ ಮೇಲೆಯೇ ನೈಜವಾಗಿ ಅಕ್ಷರಗಳನ್ನು ಎಡಿಟ್ ಮಾಡುವ ಉಚಿತ ಸಾಫ್ಟ್‌ವೇರ್.',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'INR',
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'ratingCount': '94000',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'ಸ್ಕ್ರೀನ್‌ಶಾಟ್‌ನ ಮೇಲಿನ ಅಕ್ಷರಗಳನ್ನು ಹೇಗೆ ಎಡಿಟ್ ಮಾಡುವುದು?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'ಫೋಟೋ ಅಪ್ಲೋಡ್ ಮಾಡಿದ ನಂತರ ಸಾಫ್ಟ್‌ವೇರ್ ಪಠ್ಯವನ್ನು ಗುರುತಿಸುತ್ತದೆ. ಬಲಭಾಗದ ಪಟ್ಟಿಯಲ್ಲಿ ಹೊಸ ಅಕ್ಷರಗಳನ್ನು ಟೈಪ್ ಮಾಡಿದರೆ ಸಾಕು, ಚಿತ್ರದ ಮೇಲೆಯೇ ಅಕ್ಷರಗಳು ರಿಯಲ್ ಆಗಿ ಬದಲಾಗುತ್ತವೆ.',
        },
      },
      {
        '@type': 'Question',
        'name': 'ಕನ್ನಡ ಮತ್ತು ಇಂಗ್ಲಿಷ್ ಎರಡೂ ಭಾಷೆಯ ಪಠ್ಯವನ್ನು ಎಡಿಟ್ ಮಾಡಬಹುದೇ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'ಹೌದು! ಕನ್ನಡ ಹಾಗೂ ಇಂಗ್ಲಿಷ್ ಎರಡೂ ಭಾಷೆಗಳ ಅಕ್ಷರಗಳು ಮತ್ತು ಸಂಖ್ಯೆಗಳನ್ನು ನಿಖರವಾಗಿ ಎಡಿಟ್ ಮಾಡಬಹುದು.',
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

      {/* 📸 INTERACTIVE SCREENSHOT OCR SCANNER & LIVE TEXT EDITOR SOFTWARE */}
      <ScreenshotEditorComp />

      {/* 🌟 SEO RICH CONTENT SECTION */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-8 text-slate-800">
        <section className="space-y-4 border-b border-slate-100 pb-8">
          <div className="flex items-center gap-2 text-sky-700 font-bold text-sm">
            <Sparkles className="w-4 h-4" />
            <span>ಕರ್ನಾಟಕದ #1 ಸ್ಕ್ರೀನ್‌ಶಾಟ್ OCR & ಲೈವ್ ಇಮೇಜ್ ಎಡಿಟಿಂಗ್ ಟೂಲ್</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-snug">
            ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಸ್ಕ್ಯಾನರ್ & ಲೈವ್ ಇಮೇಜ್ ಟೆಕ್ಸ್ಟ್ ಎಡಿಟರ್ (Screenshot OCR & Photo Text Editor)
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            ಮೊಬೈಲ್ ಸ್ಕ್ರೀನ್‌ಶಾಟ್, ಪೇಮೆಂಟ್ ರಶೀದಿ, ವಾಟ್ಸಾಪ್ ಸಂದೇಶ ಅಥವಾ ಅಂಗಡಿ ಬಿಲ್‌ನ ಮೇಲಿರುವ ಹೆಸರು, ಮೊತ್ತ ಅಥವಾ ದಿನಾಂಕವನ್ನು ಬದಲಾಯಿಸಬೇಕಾದರೆ ಫೋಟೋಶಾಪ್ ತಿಳಿಯದ ಸಾಮಾನ್ಯ ಜನರಿಗೆ ಕಷ್ಟವಾಗುತ್ತಿತ್ತು. <strong>ಮಾಹಿತಿ ಚಕ್ರ ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಎಡಿಟರ್</strong> ಮೂಲಕ ಯಾವುದೇ ಫೋಟೋ ಅಪ್ಲೋಡ್ ಮಾಡಿ, <strong>ಚಿತ್ರದ ಮೇಲೆಯೇ ಅಕ್ಷರಗಳನ್ನು ರಿಯಲ್ ಆಗಿ ಬದಲಾಯಿಸಿ</strong> 1-ಕ್ಲಿಕ್‌ನಲ್ಲಿ ಹೊಸ HD ಇಮೇಜ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿಕೊಳ್ಳಬಹುದು!
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
                <strong className="text-slate-900 block font-bold">ನೈಜ ಇನ್-ಪ್ಲೇಸ್ ಎಡಿಟಿಂಗ್ (In-Place Text Patch):</strong>
                <span className="text-slate-600">ಹಿಂದಿನ ಪಠ್ಯವನ್ನು ಹಿನ್ನೆಲೆಯ ಬಣ್ಣದಲ್ಲೇ ಮುಚ್ಚಿ ಹೊಸ ಪಠ್ಯವನ್ನು ನೈಸರ್ಗಿಕವಾಗಿ ಅಳವಡಿಸುತ್ತದೆ.</span>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">ಕನ್ನಡ & ಇಂಗ್ಲಿಷ್ ಬೆಂಬಲ:</strong>
                <span className="text-slate-600">ಕನ್ನಡ ಅಕ್ಷರಗಳು, ಅಂಕಿಗಳು ಹಾಗೂ ಇಂಗ್ಲಿಷ್ ಪಠ್ಯವನ್ನು ಸುಲಭವಾಗಿ ಟೈಪ್ ಮಾಡಬಹುದು.</span>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">1-ಕ್ಲಿಕ್ ಪಠ್ಯ ಕಾಪಿ (OCR Text Copy):</strong>
                <span className="text-slate-600">ಚಿತ್ರದಲ್ಲಿರುವ ಎಲ್ಲಾ ಅಕ್ಷರಗಳನ್ನು ಒಂದೇ ಕ್ಲಿಕ್‌ನಲ್ಲಿ ಕಾಪಿ ಮಾಡಿಕೊಳ್ಳಬಹುದು.</span>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">📸 Ultra-HD ಇಮೇಜ್ ಸೇವ್ & WhatsApp ಶೇರ್:</strong>
                <span className="text-slate-600">ಎಡಿಟ್ ಮಾಡಿದ ಚಿತ್ರವನ್ನು ಒರಿಜಿನಲ್ ಕ್ವಾಲಿಟಿಯಲ್ಲೇ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿಕೊಳ್ಳಬಹುದು.</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION SECTION */}
        <section className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-sky-700" />
            <span>ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಎಡಿಟರ್ ಬಗ್ಗೆ FAQs:</span>
          </h3>

          <div className="space-y-3">
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-1.5">
              <h4 className="text-sm font-black text-slate-900">ಪ್ರ: ನನ್ನ ಫೋಟೋಗಳು ಸುರಕ್ಷಿತವೇ?</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ಉ: ಖಂಡಿತ! ನಿಮ್ಮ ಫೋಟೋಗಳು ನಿಮ್ಮದೇ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಪ್ರಕ್ರಿಯೆಗೊಳ್ಳುತ್ತವೆ. ಯಾವುದೇ ಸರ್ವರ್‌ಗೆ ಅಪ್ಲೋಡ್ ಆಗುವುದಿಲ್ಲ, 100% ಸುರಕ್ಷಿತ.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-1.5">
              <h4 className="text-sm font-black text-slate-900">ಪ್ರ: ಹೊಸ ಪಠ್ಯವನ್ನು ಎಲ್ಲಿ ಬೇಕಾದರೂ ಸೇರಿಸಬಹುದೇ?</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ಉ: ಹೌದು! "+ ಹೊಸ ಪಠ್ಯ ಸೇರಿಸಿ" ಬಟನ್ ಒತ್ತಿ ಚಿತ್ರದ ಯಾವುದೇ ಜಾಗದಲ್ಲೂ ಹೆಚ್ಚುವರಿ ಅಕ್ಷರಗಳನ್ನು ಸೇರಿಸಬಹುದು.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* 💬 PUBLIC COMMENT SECTION */}
      <CommentSection pageId="screenshot-editor" />

    </div>
  );
}
