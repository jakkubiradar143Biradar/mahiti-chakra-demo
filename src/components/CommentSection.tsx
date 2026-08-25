"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { getStoredComments, saveStoredComments } from '@/lib/appsStore';
import { UserComment } from '@/lib/types';
import { MessageSquare, Star, Send, Clock, User, CheckCircle2 } from 'lucide-react';

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
      userRole: lang === 'kn' ? 'ವೀಕ್ಷಕರು' : 'Visitor',
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
    ? [...approvedComments, ...approvedComments, ...approvedComments]
    : [];

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-8 space-y-6 shadow-xs max-w-full overflow-hidden select-none my-8">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/15 text-amber-600 flex items-center justify-center font-black">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-black text-slate-950 flex items-center gap-2">
              <span>{lang === 'kn' ? '💬 ಸಾರ್ವಜನಿಕ ಅನಿಸಿಕೆಗಳು (Live Moving User Reviews)' : '💬 User Reviews'}</span>
              <span className="text-xs bg-amber-100 text-amber-950 font-black px-2.5 py-0.5 rounded-full">
                {approvedComments.length}
              </span>
            </h3>
            <p className="text-xs font-semibold text-slate-500">
              {lang === 'kn' ? 'ನಿಮ್ಮ ಅಭಿಪ್ರಾಯ ಬರೆಯಿರಿ! (ಅಡ್ಮಿನ್‌ ಅನುಮೋದನೆ ಪಡೆದು ಲೈವ್ ಚಲಿಸುತ್ತದೆ)' : 'Leave your feedback! (Appears live after Admin approval)'}
            </p>
          </div>
        </div>
      </div>

      {/* Success Notification Alert */}
      {submittedMsg && (
        <div className="bg-amber-50 border-2 border-amber-300 text-amber-950 p-4 rounded-2xl text-xs font-black flex items-center gap-2.5 shadow-sm animate-springPop">
          <Clock className="w-5 h-5 text-amber-600 shrink-0" />
          <div>
            <span className="block text-sm">⏳ ಕಾಮೆಂಟ್ ಯಶಸ್ವಿಯಾಗಿ ಸಲ್ಲಿಸಲಾಗಿದೆ!</span>
            <span className="font-semibold text-amber-800">
              {lang === 'kn'
                ? 'ನಿಮ್ಮ ಕಾಮೆಂಟ್ ಪರಿಶೀಲನೆಯಲ್ಲಿದೆ. ಅಡ್ಮಿನ್ ಅನುಮೋದನೆ (Approval) ನೀಡಿದ ನಂತರ ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ಕಾಣಿಸುತ್ತದೆ.'
                : 'Your comment is under review. It will appear on the portal after Admin approval.'}
            </span>
          </div>
        </div>
      )}

      {/* 🚀 APPROVED LIVE MOVING MARQUEE COMMENTS (ZERO PAGE BLOAT!) */}
      {approvedComments.length > 0 ? (
        <div className="relative overflow-hidden w-full bg-slate-950/5 border border-slate-200/80 rounded-2xl p-4">
          <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused] w-max">
            {marqueeList.map((comment, idx) => (
              <div
                key={`${comment.id}-${idx}`}
                className="w-72 bg-white p-4 rounded-2xl border border-slate-200 shadow-md space-y-2 shrink-0 group hover:border-amber-400 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-950 flex items-center justify-center font-black text-xs shrink-0">
                      <User className="w-4 h-4 text-amber-600" />
                    </div>
                    <div>
                      <h5 className="text-xs font-black text-slate-950 leading-tight">
                        {comment.userName}
                      </h5>
                      <span className="text-[9px] font-extrabold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                        ✓ {comment.userRole || 'Verified User'}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5">
                    {[...Array(comment.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-xs font-semibold text-slate-700 leading-snug line-clamp-3 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  "{comment.commentText}"
                </p>

                <div className="text-[9px] font-bold text-slate-400 text-right">
                  {comment.createdAt}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-6 text-slate-400 text-xs font-semibold bg-slate-50 rounded-2xl border border-slate-200">
          {lang === 'kn' ? 'ಇನ್ನೂ ಯಾವುದೇ ಕಾಮೆಂಟ್‌ಗಳಿಲ್ಲ. ಮೊದಲ ಕಾಮೆಂಟ್ ನೀವೇ ಬರೆಯಿರಿ!' : 'No approved comments yet. Be the first to comment!'}
        </div>
      )}

      {/* COMPACT COMMENT SUBMISSION FORM */}
      <form onSubmit={handleSubmit} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
        <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">
          {lang === 'kn' ? '✍️ ನಿಮ್ಮ ಕಾಮೆಂಟ್ ಸೇರಿಸಿ' : '✍️ Write a Comment'}
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div>
            <label className="block font-extrabold text-slate-800 mb-1">
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
            <label className="block font-extrabold text-slate-800 mb-1">
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
        <div className="flex items-center gap-2 text-xs">
          <span className="font-extrabold text-slate-800">{lang === 'kn' ? 'ರೇಟಿಂಗ್ ನೀಡಲು:' : 'Rating:'}</span>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className="p-0.5 hover:scale-110 transition-transform"
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
          <label className="block text-xs font-extrabold text-slate-800 mb-1">
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
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-amber-400 font-black text-xs shadow-md transition-all active:scale-95 border border-amber-500/30"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{lang === 'kn' ? 'ಕಾಮೆಂಟ್ ಸಲ್ಲಿಸಿ ➔' : 'Submit Comment ➔'}</span>
          </button>
        </div>
      </form>
    </div>
  );
};
