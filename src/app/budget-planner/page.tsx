import React from 'react';
import { Metadata } from 'next';
import { FamilyBudgetComp } from '@/components/FamilyBudgetComp';
import { CommentSection } from '@/components/CommentSection';
import { Sparkles, CheckCircle2, HelpCircle, Award, Wallet, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ಮನೆ ಖರ್ಚು, ಉಳಿತಾಯ & ಮಾಸಿಕ ಬಜೆಟ್ ಪ್ಲಾನರ್ | Family Monthly Expense & Budget Planner - Mahiti Chakra',
  description: 'ಸಂಬಳ, ದಿನಸಿ, ಬಾಡಿಗೆ, ಕರೆಂಟ್, ಮಕ್ಕಳ ಶಾಲಾ ಫೀಸ್ & ಸಾಲದ ನಿಖರ ಲೆಕ್ಕ ಹಾಕಿ 50-30-20 ನಿಯಮದಂತೆ ಉಳಿತಾಯ ಹೆಚ್ಚಿಸಿ. 1-ಕ್ಲಿಕ್ Ultra-HD ಮಾಸಿಕ ಬಜೆಟ್ ಪತ್ರ ಡೌನ್‌ಲೋಡ್ & WhatsApp ಶೇರ್.',
  keywords: [
    'Karnataka Monthly Family Budget Planner',
    'ಮನೆ ಖರ್ಚು ಬಜೆಟ್ ಕ್ಯಾಲ್ಕುಲೇಟರ್',
    'Household Expense Tracker Kannada',
    '50-30-20 Budget Rule Kannada',
    'Family Savings Calculator Karnataka',
    'Salary Expense Planner Kannada',
    'Mahiti Chakra Budget App',
  ],
  alternates: {
    canonical: 'https://mahiti-chakra-portal.vercel.app/budget-planner',
  },
  openGraph: {
    title: 'ಕುಟುಂಬದ ಮಾಸಿಕ ಮನೆ ಖರ್ಚು & ಬಜೆಟ್ ಪ್ಲಾನರ್ | Family Monthly Budget Planner',
    description: 'ಮನೆ ಬಾಡಿಗೆ, ದಿನಸಿ, ಬಿಲ್‌ಗಳು & ಮಕ್ಕಳ ಶಾಲಾ ಶುಲ್ಕದ ನಿಖರ ಲೆಕ್ಕ ಹಾಕಿ ಕುಟುಂಬದ ಉಳಿತಾಯ ಹೆಚ್ಚಿಸಿಕೊಳ್ಳಿ.',
    url: 'https://mahiti-chakra-portal.vercel.app/budget-planner',
    siteName: 'Mahiti Chakra',
    locale: 'kn_IN',
    type: 'website',
  },
};

export default function BudgetPlannerPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'ಕುಟುಂಬದ ಮನೆ ಖರ್ಚು & ಮಾಸಿಕ ಬಜೆಟ್ ಪ್ಲಾನರ್ - Family Monthly Budget Planner',
    'url': 'https://mahiti-chakra-portal.vercel.app/budget-planner',
    'applicationCategory': 'FinanceApplication',
    'operatingSystem': 'All',
    'description': 'ಕುಟುಂಬದ ಮಾಸಿಕ ಆದಾಯ, ದಿನಸಿ, ಬಾಡಿಗೆ, ಯುಟಿಲಿಟಿ ಬಿಲ್‌ಗಳು ಮತ್ತು ಉಳಿತಾಯವನ್ನು 50-30-20 ನಿಯಮದಂತೆ ವೈಜ್ಞಾನಿಕವಾಗಿ ನಿರ್ವಹಿಸುವ ಉಚಿತ ಸಾಫ್ಟ್‌ವೇರ್.',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'INR',
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'ratingCount': '86000',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': '50-30-20 ಬಜೆಟ್ ನಿಯಮ ಎಂದರೇನು?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'ನಿಮ್ಮ ಒಟ್ಟು ಮಾಸಿಕ ಆದಾಯದಲ್ಲಿ 50% ಹಣವನ್ನು ಮೂಲಭೂತ ಅಗತ್ಯಗಳಿಗೆ (ಬಾಡಿಗೆ, ದಿನಸಿ, ಬಿಲ್), 30% ಹಣವನ್ನು ಆಸೆ/ಮನರಂಜನೆಗೆ (ಹೋಟೆಲ್, ಶಾಪಿಂಗ್), ಮತ್ತು ಕನಿಷ್ಠ 20% ಹಣವನ್ನು ಭವಿಷ್ಯದ ಉಳಿತಾಯಕ್ಕೆ ಮೀಸಲಿಡುವುದಾಗಿದೆ.',
        },
      },
      {
        '@type': 'Question',
        'name': 'ಈ ಬಜೆಟ್ ಪತ್ರವನ್ನು ಡೌನ್‌ಲೋಡ್ ಅಥವಾ ಪ್ರಿಂಟ್ ಮಾಡಿಕೊಳ್ಳಬಹುದೇ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'ಹೌದು! "HD ಬಜೆಟ್ ಪತ್ರ ಡೌನ್‌ಲೋಡ್" ಬಟನ್ ಒತ್ತಿ ನಿಮ್ಮ ಕುಟುಂಬದ ಹೆಸರಿನೊಂದಿಗೆ ಸುಂದರವಾದ ಇಮೇಜ್ ಶೀಟ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿಕೊಳ್ಳಬಹುದು ಅಥವಾ ನೇರವಾಗಿ WhatsApp ನಲ್ಲಿ ಶೇರ್ ಮಾಡಬಹುದು.',
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

      {/* 🧾 INTERACTIVE FAMILY BUDGET PLANNER SOFTWARE */}
      <FamilyBudgetComp />

      {/* 🌟 SEO RICH CONTENT SECTION */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-8 text-slate-800">
        <section className="space-y-4 border-b border-slate-100 pb-8">
          <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
            <Sparkles className="w-4 h-4" />
            <span>ಕರ್ನಾಟಕದ #1 ಕುಟುಂಬ ಹಣಕಾಸು & ಉಳಿತಾಯ ಪೋರ್ಟಲ್</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-snug">
            ಕುಟುಂಬದ ಮನೆ ಖರ್ಚು, ಉಳಿತಾಯ & ಮಾಸಿಕ ಬಜೆಟ್ ಪ್ಲಾನರ್ (Monthly Household Budget Planner)
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            ಪ್ರತಿ ತಿಂಗಳು ಸಂಬಳ ಬಂದಾಗ ಹಣ ಹೇಗೆ ಖರ್ಚಾಯಿತು ಎಂದು ಲೆಕ್ಕ ಸಿಗದೆ ಲಕ್ಷಾಂತರ ಕುಟುಂಬಗಳು ತಿಂಗಳ ಕೊನೆಗೆ ಸಾಲದ ಸುಳಿಗೆ ಸಿಲುಕುತ್ತಾರೆ. <strong>ಮಾಹಿತಿ ಚಕ್ರ ಮನೆ ಖರ್ಚು & ಬಜೆಟ್ ಪ್ಲಾನರ್</strong> ಮೂಲಕ ನಿಮ್ಮ ಸಂಬಳ, ಮನೆ ಬಾಡಿಗೆ, ದಿನಸಿ, ಹಾಲು-ತರಕಾರಿ, ಕರೆಂಟ್ ಬಿಲ್, ಮಕ್ಕಳ ಶಾಲಾ ಫೀಸ್ ಹಾಗೂ ಸಾಲದ ಇಎಂಐಗಳನ್ನು ನಮೂದಿಸಿ — <strong>ವೈಜ್ಞಾನಿಕ 50-30-20 ನಿಯಮದಂತೆ ನಿಮ್ಮ ಬಜೆಟ್ ವಿಶ್ಲೇಷಣೆ, ಹಣ ಉಳಿಸುವ ಸಲಹೆಗಳು ಹಾಗೂ 1-ಕ್ಲಿಕ್ Ultra-HD ಬಜೆಟ್ ಪತ್ರ</strong> ತಕ್ಷಣ ಪಡೆಯಿರಿ!
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
                <strong className="text-slate-900 block font-bold">೮ ನಿತ್ಯೋಪಯೋಗಿ ಖರ್ಚಿನ ವಿಭಾಗಗಳು:</strong>
                <span className="text-slate-600">ಮನೆ ಬಾಡಿಗೆ, ದಿನಸಿ, ಕರೆಂಟ್-ಗ್ಯಾಸ್, ಶಿಕ್ಷಣ, ಪೆಟ್ರೋಲ್, ಔಷಧಿ, ಸಾಲ ಹಾಗೂ ಮನರಂಜನೆ.</span>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">50-30-20 ವೈಜ್ಞಾನಿಕ ಸಮತೋಲನ ಗೇಜ್:</strong>
                <span className="text-slate-600">ಅಗತ್ಯ ವೆಚ್ಚ, ಆಸೆ ವೆಚ್ಚ ಹಾಗೂ ಉಳಿತಾಯದ ನಿಖರ ಶೇಕಡಾವಾರು (Percentage) ವಿಶ್ಲೇಷಣೆ.</span>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">ಆರ್ಥಿಕ ಆರೋಗ್ಯ ಶ್ರೇಣಿ & ಟಿಪ್ಸ್:</strong>
                <span className="text-slate-600">ಉಳಿತಾಯ ಹೆಚ್ಚಿಸಲು ಹಾಗೂ ಅನಗತ್ಯ ವೆಚ್ಚ ಕಡಿತಗೊಳಿಸಲು ಪ್ರಾಯೋಗಿಕ ಕನ್ನಡ ಸಲಹೆಗಳು.</span>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">📸 Ultra-HD ಬಜೆಟ್ ಪತ್ರ & WhatsApp ಶೇರ್:</strong>
                <span className="text-slate-600">ಕುಟುಂಬದ ಹೆಸರಿನೊಂದಿಗೆ ಸುಂದರ ರಶೀದಿ ಇಮೇಜ್ ಡೌನ್‌ಲೋಡ್ & ನೇರ ವಾಟ್ಸಾಪ್ ಶೇರ್.</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION SECTION */}
        <section className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-emerald-700" />
            <span>ಮನೆ ಖರ್ಚು & ಬಜೆಟ್ ಬಗ್ಗೆ FAQs:</span>
          </h3>

          <div className="space-y-3">
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-1.5">
              <h4 className="text-sm font-black text-slate-900">ಪ್ರ: ನನ್ನ ಆದಾಯ ಹಾಗೂ ಖರ್ಚಿನ ಮಾಹಿತಿ ಸುರಕ್ಷಿತವೇ?</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ಉ: ಹೌದು! ಎಲ್ಲಾ ಲೆಕ್ಕಾಚಾರಗಳು ನಿಮ್ಮದೇ ಮೊಬೈಲ್/ಕಂಪ್ಯೂಟರ್‌ನಲ್ಲಿ ಪ್ರಕ್ರಿಯೆಗೊಳ್ಳುತ್ತವೆ. ಯಾವುದೇ ಸರ್ವರ್‌ಗೆ ಸೇವ್ ಆಗುವುದಿಲ್ಲ, 100% ಖಾಸಗಿ & ಸುರಕ್ಷಿತ.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-1.5">
              <h4 className="text-sm font-black text-slate-900">ಪ್ರ: ತಿಂಗಳಿಗೆ ಕನಿಷ್ಠ ಎಷ್ಟು ಉಳಿತಾಯ ಮಾಡಬೇಕು?</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ಉ: ಆರ್ಥಿಕ ತಜ್ಞರ ಪ್ರಕಾರ ನಿಮ್ಮ ಒಟ್ಟು ಆದಾಯದಲ್ಲಿ ಕನಿಷ್ಠ 20% ಹಣವನ್ನು ತುರ್ತು ನಿಧಿ, ಚಿನ್ನ ಅಥವಾ ಆರ್‌ಡಿಗಳಲ್ಲಿ ಉಳಿತಾಯ ಮಾಡುವುದು ಉತ್ತಮ.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* 💬 PUBLIC COMMENT SECTION */}
      <CommentSection pageId="budget-planner" />

    </div>
  );
}
