"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { getStoredComments, saveStoredComments } from '@/lib/appsStore';
import { UserComment } from '@/lib/types';
import { MessageSquare, Star, Send, Clock, User, CheckCircle2, Sparkles, Quote } from 'lucide-react';

export const CommentSection: React.FC<{ pageId?: string }> = ({ pageId = 'global' }) => {
  const { lang } = useLanguage();
  const [comments, setComments] = useState<UserComment[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState<number>(5);
  const [commentText, setCommentText] = useState('');
  const [submittedMsg, setSubmittedMsg] = useState(false);

  useEffect(() => {
    setComments(getStoredComments());
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !commentText.trim()) {
      alert(lang === 'kn' ? 'ದಯವಿಟ್ಟು ಹೆಸರು ಮತ್ತು ನಿಮ್ಮ ಕಾಮೆಂಟ್ ನಮೂದಿಸಿ!' : 'Please enter your Name and Comment!');
      return;
    }

    const newComment: UserComment = {
      id: 'comment-' + Date.now(),
      pageId: pageId,
      userName: name.trim(),
      userEmail: email.trim(),
      userRole: lang === 'kn' ? 'ವೀಕ್ಷಕರು' : 'Visitor',
      commentText: commentText.trim(),
      createdAt: new Date().toISOString().split('T')[0],
      status: 'pending', // ⏳ Requires Admin Approval before going live!
      rating: rating,
    };

    const allComments = getStoredComments();
    const updated = [newComment, ...allComments];
    saveStoredComments(updated);
    setComments(updated);

    setName('');
    setEmail('');
    setCommentText('');
    setRating(5);
    setSubmittedMsg(true);

    setTimeout(() => {
      setSubmittedMsg(false);
    }, 6000);
  };

  // Filter approved comments for this page or global
  const approvedComments = comments.filter(
    (c) => c.status === 'approved' && (c.pageId === pageId || c.pageId === 'global')
  );

  // Duplicate list to create smooth infinite loop for continuous marquee
  const marqueeList = approvedComments.length > 0
    ? [...approvedComments, ...approvedComments, ...approvedComments, ...approvedComments]
    : [];

  return (
    <div className="bg-white rounded-3xl border-2 border-amber-300/60 p-5 sm:p-8 space-y-6 shadow-md max-w-full overflow-hidden select-none my-8 relative">
      
      {/* BACKGROUND DECORATIVE GLOW */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/5 blur-3xl rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-500 text-slate-950 flex items-center justify-center font-black shadow-md shadow-amber-500/20 shrink-0 border border-amber-300">
            <MessageSquare className="w-6 h-6 text-slate-950" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-base sm:text-lg font-black text-slate-950 tracking-tight">
                {lang === 'kn' ? '💬 ಸಾರ್ವಜನಿಕ ಅನಿಸಿಕೆಗಳು (Live Moving User Reviews)' : '💬 Live Moving User Reviews'}
              </h3>
              <span className="text-[10px] bg-amber-100 border border-amber-300 text-amber-950 font-black px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{approvedComments.length} {lang === 'kn' ? 'ಅನಿಸಿಕೆಗಳು' : 'Reviews'}</span>
              </span>
            </div>
            <p className="text-xs font-bold text-slate-500 mt-0.5">
              {lang === 'kn' ? 'ನಿಮ್ಮ ಅನಿಸಿಕೆ ಬರೆಯಿರಿ! (ಅಡ್ಮಿನ್‌ ಅನುಮೋದನೆ ಪಡೆದು ಲೈವ್ ತೇಲಾಡುತ್ತದೆ)' : 'Leave your feedback! (Floats live after Admin approval)'}
            </p>
          </div>
        </div>
      </div>

      {/* Success Notification Alert */}
      {submittedMsg && (
        <div className="bg-amber-50 border-2 border-amber-300 text-amber-950 p-4 rounded-2xl text-xs font-black flex items-center gap-3 shadow-md animate-springPop relative z-10">
          <Clock className="w-6 h-6 text-amber-600 shrink-0" />
          <div>
            <span className="block text-sm font-black text-amber-950">⏳ ಕಾಮೆಂಟ್ ಯಶಸ್ವಿಯಾಗಿ ಸಲ್ಲಿಸಲಾಗಿದೆ!</span>
            <span className="font-bold text-amber-800">
              {lang === 'kn'
                ? 'ನಿಮ್ಮ ಕಾಮೆಂಟ್ ಪರಿಶೀಲನೆಯಲ್ಲಿದೆ. ಅಡ್ಮಿನ್ ಅನುಮೋದನೆ (Approval) ನೀಡಿದ ನಂತರ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ತೇಲಾಡುತ್ತದೆ.'
                : 'Your comment is under review. It will float live after Admin approval.'}
            </span>
          </div>
        </div>
      )}

      {/* 🚀 ULTRA-PROFESSIONAL LUXURY FLOATING MARQUEE CAROUSEL */}
      {approvedComments.length > 0 ? (
        <div className="relative overflow-hidden w-full bg-gradient-to-r from-amber-500/5 via-slate-50 to-amber-500/5 border border-slate-200/90 rounded-2xl p-4 shadow-inner">
          <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused] w-max py-1">
            {marqueeList.map((comment, idx) => (
              <div
                key={`${comment.id}-${idx}`}
                className="w-72 sm:w-80 bg-white p-4.5 rounded-2xl border-2 border-amber-300/50 shadow-md space-y-2.5 shrink-0 group hover:border-amber-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative select-none"
              >
                {/* Top User Info & Rating Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-400 text-slate-950 flex items-center justify-center font-black text-sm shadow-sm shrink-0">
                      <span>{comment.userName.charAt(0).toUpperCase()}</span>
                    </div>
                    <div>
                      <h5 className="text-xs font-black text-slate-950 leading-tight">
                        {comment.userName}
                      </h5>
                      <span className="text-[9px] font-extrabold text-emerald-800 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200 flex items-center gap-0.5 mt-0.5">
                        <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                        <span>{comment.userRole || 'Verified User'}</span>
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 bg-amber-50 px-2 py-1 rounded-lg border border-amber-200">
                    {[...Array(comment.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Comment Content Box */}
                <div className="bg-slate-50/80 p-3 rounded-xl border border-slate-200/70 relative">
                  <p className="text-xs font-bold text-slate-800 leading-snug line-clamp-3 italic">
                    "{comment.commentText}"
                  </p>
                </div>

                {/* Date */}
                <div className="text-[9px] font-bold text-slate-400 text-right">
                  📅 {comment.createdAt}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-6 text-slate-500 text-xs font-bold bg-slate-50 rounded-2xl border border-slate-200">
          {lang === 'kn' ? 'ಇನ್ನೂ ಯಾವುದೇ ಕಾಮೆಂಟ್‌ಗಳಿಲ್ಲ. ಮೊದಲ ಕಾಮೆಂಟ್ ನೀವೇ ಬರೆಯಿರಿ!' : 'No approved comments yet. Be the first to comment!'}
        </div>
      )}

      {/* COMPACT COMMENT SUBMISSION FORM */}
      <form onSubmit={handleSubmit} className="bg-slate-50/80 p-5 rounded-2xl border border-slate-200/90 space-y-3.5 relative z-10">
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
          <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>{lang === 'kn' ? '✍️ ನಿಮ್ಮ ಕಾಮೆಂಟ್ ಸೇರಿಸಿ' : '✍️ Write a Review'}</span>
          </h4>
          <span className="text-[10px] font-bold text-slate-500">
            {lang === 'kn' ? '100% ಉಚಿತ & ಸುರಕ್ಷಿತ' : '100% Free & Secure'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div>
            <label className="block font-black text-slate-900 mb-1">
              {lang === 'kn' ? 'ನಿಮ್ಮ ಹೆಸರು (Name) *' : 'Your Name *'}
            </label>
            <input
              type="text"
              required
              placeholder={lang === 'kn' ? 'ಉದಾ: ಬಸವರಾಜ್ (ಮೈಸೂರು)' : 'e.g. Basavaraj'}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-xl p-2.5 font-bold text-slate-950 focus:ring-2 focus:ring-amber-500 focus:outline-none shadow-2xs"
            />
          </div>

          <div>
            <label className="block font-black text-slate-900 mb-1">
              {lang === 'kn' ? 'ಇಮೇಲ್ ಐಡಿ (Email) (ಐಚ್ಛಿಕ)' : 'Email Address (Optional)'}
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-xl p-2.5 font-bold text-slate-950 focus:ring-2 focus:ring-amber-500 focus:outline-none shadow-2xs"
            />
          </div>
        </div>

        {/* Star Rating Select */}
        <div className="flex items-center gap-2 text-xs bg-white p-2.5 rounded-xl border border-slate-200 w-fit">
          <span className="font-black text-slate-900">{lang === 'kn' ? 'ರೇಟಿಂಗ್ ನೀಡಿ:' : 'Rating:'}</span>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className="p-0.5 hover:scale-125 transition-transform"
              >
                <Star
                  className={`w-4 h-4 ${
                    star <= rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Text Area */}
        <div>
          <label className="block text-xs font-black text-slate-900 mb-1">
            {lang === 'kn' ? 'ನಿಮ್ಮ ಅನಿಸಿಕೆ ಅಥವಾ ಕಾಮೆಂಟ್ ಬರೆಯಿರಿ (Comment) *' : 'Write your comment *'}
          </label>
          <textarea
            rows={2}
            required
            placeholder={lang === 'kn' ? 'ಈ ಪೋರ್ಟಲ್ ಕುರಿತು ನಿಮ್ಮ ಅನಿಸಿಕೆ ಬರೆಯಿರಿ...' : 'Write your review...'}
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="w-full bg-white border border-slate-300 rounded-xl p-2.5 text-xs font-semibold text-slate-950 focus:ring-2 focus:ring-amber-500 focus:outline-none shadow-2xs leading-relaxed"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-600 hover:to-amber-500 text-slate-950 font-black text-xs shadow-md transition-all active:scale-95 border border-amber-300"
          >
            <Send className="w-3.5 h-3.5 text-slate-950" />
            <span>{lang === 'kn' ? 'ಕಾಮೆಂಟ್ ಸಲ್ಲಿಸಿ ➔' : 'Submit Comment ➔'}</span>
          </button>
        </div>
      </form>
    </div>
  );
};
