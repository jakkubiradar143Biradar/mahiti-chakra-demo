"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageContext';
import { getStoredBlogs } from '@/lib/ratesStore';
import { BlogPost } from '@/lib/types';
import { ArrowLeft, Calendar, User, Share2, Coins } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function SingleBlogPage() {
  const params = useParams();
  const { t, lang } = useLanguage();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const blogs = getStoredBlogs();
    const found = blogs.find((b) => b.id === params.id || b.slug === params.id);
    if (found) {
      setPost(found);
    }
  }, [params.id]);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto py-12 text-center text-slate-500">
        <p>Loading blog post...</p>
        <Link href="/blogs" className="text-amber-600 text-xs font-bold underline mt-2 block">
          Back to Blogs
        </Link>
      </div>
    );
  }

  const title = lang === 'kn' ? post.titleKn : post.titleEn;
  const content = lang === 'kn' ? post.contentKn : post.contentEn;
  const category = lang === 'kn' ? post.categoryKn : post.categoryEn;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Back button */}
      <Link
        href="/blogs"
        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-amber-600 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{lang === 'kn' ? 'ಎಲ್ಲಾ ಬ್ಲಾಗ್‌ಗಳಿಗೆ ಹಿಂತಿರುಗಿ' : 'Back to All Blogs'}</span>
      </Link>

      {/* Main Post Container */}
      <article className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-6">
        <div className="space-y-3 border-b border-slate-100 pb-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-extrabold bg-amber-100 text-amber-900 px-3 py-1 rounded-full">
              {category}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <User className="w-3.5 h-3.5" />
              {post.author}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
            {title}
          </h1>
        </div>

        {/* Google AdSense Banner Placeholder Slot */}
        <div className="bg-slate-100 border border-dashed border-slate-300 rounded-xl p-4 text-center text-xs text-slate-400 font-semibold my-4">
          📢 Google AdSense Banner Placement Area (Ad Slot #1)
        </div>

        {/* Content Body */}
        <div className="prose prose-slate max-w-none text-slate-800 leading-relaxed text-sm sm:text-base whitespace-pre-wrap">
          {content}
        </div>

        {/* Bottom AdSense & Share */}
        <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title, url: window.location.href });
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
              }
            }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-50 text-amber-700 font-bold text-xs hover:bg-amber-100 transition-colors"
          >
            <Share2 className="w-4 h-4" />
            <span>{lang === 'kn' ? 'ಈ ಲೇಖನವನ್ನು ಶೇರ್ ಮಾಡಿ' : 'Share Article'}</span>
          </button>

          <Link
            href="/emi-calculator"
            className="flex items-center gap-1 text-xs font-extrabold text-amber-600 hover:underline"
          >
            <Coins className="w-4 h-4" />
            <span>Try Loan EMI Calculator</span>
          </Link>
        </div>
      </article>
    </div>
  );
}
