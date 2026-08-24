"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageContext';
import { getStoredBlogs } from '@/lib/ratesStore';
import { BlogPost } from '@/lib/types';
import { Newspaper, Calendar, User, ArrowRight, Search, X, Share2, Coins } from 'lucide-react';

export default function BlogsPage() {
  const { t, lang } = useLanguage();
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    setBlogs(getStoredBlogs());
  }, []);

  const filteredBlogs = blogs.filter((b) => {
    const title = lang === 'kn' ? b.titleKn : b.titleEn;
    return title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="space-y-8">
      {/* Blog Hero Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white p-8 sm:p-10 rounded-3xl space-y-4 shadow-lg">
        <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <Newspaper className="w-4 h-4" />
          <span>{t.navBlogs}</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold">{t.blogHeading}</h1>
        <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">{t.blogSub}</p>

        {/* Search Bar */}
        <div className="pt-2 max-w-md relative">
          <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder={t.searchBlog}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-800/80 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
      </div>

      {/* Selected Blog Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center animate-fadeIn">
          <div className="bg-white text-slate-900 max-w-3xl w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto border border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <span className="text-xs font-extrabold bg-amber-100 text-amber-900 px-3 py-1 rounded-full">
                {lang === 'kn' ? selectedPost.categoryKn : selectedPost.categoryEn}
              </span>
              <button
                onClick={() => setSelectedPost(null)}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-black text-slate-950 leading-snug">
                {lang === 'kn' ? selectedPost.titleKn : selectedPost.titleEn}
              </h2>
              <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{selectedPost.date}</span>
                <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" />{selectedPost.author}</span>
              </div>
            </div>

            {/* AdSense Slot */}
            <div className="bg-slate-50 border border-dashed border-slate-300 rounded-xl p-3 text-center text-xs text-slate-400 font-semibold">
              📢 Google AdSense Article Banner Slot
            </div>

            <div className="prose prose-slate max-w-none text-slate-800 leading-relaxed text-sm whitespace-pre-wrap font-medium">
              {lang === 'kn' ? selectedPost.contentKn : selectedPost.contentEn}
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: lang === 'kn' ? selectedPost.titleKn : selectedPost.titleEn, url: window.location.href });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link copied!');
                  }
                }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-50 text-amber-700 font-bold text-xs hover:bg-amber-100 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span>{lang === 'kn' ? 'ಶೇರ್ ಮಾಡಿ' : 'Share'}</span>
              </button>

              <button
                onClick={() => setSelectedPost(null)}
                className="px-5 py-2 rounded-xl bg-slate-950 text-amber-400 font-black text-xs"
              >
                {lang === 'kn' ? 'ಮುಚ್ಚಿ' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Blog Grid */}
      {filteredBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredBlogs.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-500/80 transition-all flex flex-col justify-between space-y-4 cursor-pointer group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-md">
                    {lang === 'kn' ? post.categoryKn : post.categoryEn}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                </div>

                <h2 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-amber-600 transition-colors">
                  {lang === 'kn' ? post.titleKn : post.titleEn}
                </h2>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {lang === 'kn' ? post.excerptKn : post.excerptEn}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <User className="w-3.5 h-3.5" />
                  {post.author}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPost(post);
                  }}
                  className="inline-flex items-center gap-1 text-xs font-extrabold text-amber-600 hover:text-amber-700"
                >
                  <span>{t.readMore}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center text-slate-500 font-medium">
          {t.noBlogsFound}
        </div>
      )}
    </div>
  );
}
