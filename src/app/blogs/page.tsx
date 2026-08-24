"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageContext';
import { getStoredBlogs } from '@/lib/ratesStore';
import { BlogPost } from '@/lib/types';
import { Newspaper, Calendar, User, ArrowRight, Search } from 'lucide-react';

export default function BlogsPage() {
  const { t, lang } = useLanguage();
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

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

      {/* Blog Grid */}
      {filteredBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredBlogs.map((post) => (
            <div
              key={post.id}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-400/50 transition-all flex flex-col justify-between space-y-4"
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

                <h2 className="text-lg font-bold text-slate-900 leading-snug">
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

                <Link
                  href={`/blogs/${post.id}`}
                  className="inline-flex items-center gap-1 text-xs font-extrabold text-amber-600 hover:text-amber-700"
                >
                  <span>{t.readMore}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
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
