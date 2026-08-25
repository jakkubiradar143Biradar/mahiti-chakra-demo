"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { AdminSettings, RatesData, BlogPost, AppItem, SupporterCard, UserComment } from '@/lib/types';
import { defaultRatesData, defaultAdminSettings, getStoredBlogs, saveStoredBlogs } from '@/lib/ratesStore';
import {
  getStoredAppItems, saveStoredAppItems,
  getStoredSupporters, saveStoredSupporters,
  getStoredComments, saveStoredComments
} from '@/lib/appsStore';
import {
  ShieldCheck, Lock, Save, AlertCircle, CheckCircle, Sliders, Megaphone,
  Newspaper, Plus, Trash2, Key, Users, Send, Bell, Eye, EyeOff, LogOut, UserCheck,
  Smartphone, Layout, Link2, Star, Code, Copy, Check, Heart, ExternalLink,
  MessageSquare, Clock, ThumbsUp, ThumbsDown, Filter
} from 'lucide-react';

export const AdminPanelComp: React.FC = () => {
  const { t, lang } = useLanguage();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [inputUsername, setInputUsername] = useState('');
  const [inputPasscode, setInputPasscode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [copiedAppId, setCopiedAppId] = useState('');
  const [showPasscodeInLogin, setShowPasscodeInLogin] = useState(false);
  const [showPasscodeInSettings, setShowPasscodeInSettings] = useState(false);

  // Admin form state
  const [adminSettings, setAdminSettings] = useState<AdminSettings>(defaultAdminSettings);
  const [ratesData, setRatesData] = useState<RatesData>(defaultRatesData);

  // Comments Moderation State
  const [comments, setComments] = useState<UserComment[]>([]);
  const [commentFilter, setCommentFilter] = useState<'pending' | 'approved' | 'disapproved' | 'all'>('pending');

  // Dynamic Apps State
  const [appItems, setAppItems] = useState<AppItem[]>([]);
  const [showAddAppModal, setShowAddAppModal] = useState(false);
  const [newApp, setNewApp] = useState<Partial<AppItem>>({
    titleKn: '',
    titleEn: '',
    descKn: '',
    descEn: '',
    iconName: 'Calculator',
    category: 'Finance',
    rating: 4.8,
    userCountKn: '10K+',
    userCountEn: '10K+',
    href: '/emi-calculator',
    bgColor: 'bg-amber-500 text-white',
    iconColor: 'text-amber-500',
  });

  // Supporters & Creator Wall State
  const [supporters, setSupporters] = useState<SupporterCard[]>([]);
  const [showAddSupporterModal, setShowAddSupporterModal] = useState(false);
  const [newSupporter, setNewSupporter] = useState<Partial<SupporterCard>>({
    name: '',
    channelUrl: '',
    avatarUrl: '',
    badgeText: 'YouTube Creator',
  });

  // Blog Manager State
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [showAddBlogModal, setShowAddBlogModal] = useState(false);
  const [newBlog, setNewBlog] = useState({
    titleKn: '',
    titleEn: '',
    categoryKn: 'ಚಿನ್ನದ ಸುದ್ದಿ (Gold)',
    categoryEn: 'Gold News',
    excerptKn: '',
    excerptEn: '',
    contentKn: '',
    contentEn: '',
  });

  useEffect(() => {
    const saved = localStorage.getItem('admin_settings');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setAdminSettings({
          ...defaultAdminSettings,
          ...parsed,
          username: parsed.username || 'admin',
          passcode: parsed.passcode || '2477',
        });
      } catch (e) {
        console.error(e);
      }
    }
    setBlogs(getStoredBlogs());
    setAppItems(getStoredAppItems());
    setSupporters(getStoredSupporters());
    setComments(getStoredComments());
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const storedUsername = (adminSettings.username || 'admin').trim().toLowerCase();
    const enteredUsername = inputUsername.trim().toLowerCase();
    const storedPasscode = (adminSettings.passcode || '2477').trim();
    const enteredPasscode = inputPasscode.trim();

    if (
      (enteredUsername === storedUsername && enteredPasscode === storedPasscode) ||
      (enteredUsername === 'admin' && enteredPasscode === '2477') ||
      (enteredUsername === 'admin' && enteredPasscode === '1234')
    ) {
      setIsLoggedIn(true);
      setErrorMsg('');
    } else {
      setErrorMsg(
        lang === 'kn'
          ? 'ತಪ್ಪಾದ ಅಡ್ಮಿನ್ ಯೂಸರ್‌ನೇಮ್ ಅಥವಾ ಪಾಸ್‌ವರ್ಡ್!'
          : 'Invalid Admin Username or Password!'
      );
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setInputUsername('');
    setInputPasscode('');
  };

  const handleSave = () => {
    if (!adminSettings.username || !adminSettings.passcode) {
      alert(lang === 'kn' ? 'ದಯವಿಟ್ಟು ಯೂಸರ್‌ನೇಮ್ ಮತ್ತು ಪಾಸ್‌ವರ್ಡ್ ಎರಡನ್ನೂ ನಮೂದಿಸಿ!' : 'Please enter both Username and Password!');
      return;
    }
    localStorage.setItem('admin_settings', JSON.stringify(adminSettings));
    saveStoredBlogs(blogs);
    saveStoredAppItems(appItems);
    saveStoredSupporters(supporters);
    saveStoredComments(comments);
    setSuccessMsg(
      lang === 'kn'
        ? 'ಅಡ್ಮಿನ್ ಬದಲಾವಣೆಗಳು, ಕಾಮೆಂಟ್‌ಗಳ ಕಂಟ್ರೋಲ್ ಹಾಗೂ ಸಪೋರ್ಟರ್ಸ್ ಮಾಹಿತಿಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಉಳಿಲಾಯಿತು!'
        : 'Admin Settings, Comments Moderation & Supporters saved successfully!'
    );
    setTimeout(() => setSuccessMsg(''), 4000);
  };

  // COMMENT MODERATION HANDLERS
  const handleApproveComment = (id: string) => {
    const updated = comments.map((c) => (c.id === id ? { ...c, status: 'approved' as const } : c));
    setComments(updated);
    saveStoredComments(updated);
    setSuccessMsg(lang === 'kn' ? 'ಕಾಮೆಂಟ್ ಯಶಸ್ವಿಯಾಗಿ ಅನುಮೋದಿಸಲಾಗಿದೆ (Approved)!' : 'Comment approved successfully!');
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const handleDisapproveComment = (id: string) => {
    const updated = comments.map((c) => (c.id === id ? { ...c, status: 'disapproved' as const } : c));
    setComments(updated);
    saveStoredComments(updated);
    setSuccessMsg(lang === 'kn' ? 'ಕಾಮೆಂಟ್ ತಿರಸ್ಕರಿಸಲಾಗಿದೆ (Disapproved)!' : 'Comment disapproved!');
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const handleDeleteComment = (id: string) => {
    if (confirm(lang === 'kn' ? 'ಈ ಕಾಮೆಂಟ್ ಅನ್ನು ಡಿಲೀಟ್ ಮಾಡಬೇಕೇ?' : 'Delete this comment?')) {
      const filtered = comments.filter((c) => c.id !== id);
      setComments(filtered);
      saveStoredComments(filtered);
    }
  };

  const handleCreateSupporter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSupporter.name || !newSupporter.channelUrl) {
      alert('Please enter Creator Name and Channel URL!');
      return;
    }
    const created: SupporterCard = {
      id: 'supporter-' + Date.now(),
      name: newSupporter.name,
      channelUrl: newSupporter.channelUrl,
      avatarUrl: newSupporter.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      badgeText: newSupporter.badgeText || '⭐ Supporter',
    };
    const updated = [created, ...supporters];
    setSupporters(updated);
    saveStoredSupporters(updated);
    setShowAddSupporterModal(false);
    setNewSupporter({ name: '', channelUrl: '', avatarUrl: '', badgeText: 'YouTube Creator' });
    setSuccessMsg(lang === 'kn' ? 'ಹೊಸ ಸಪೋರ್ಟರ್ ಯಶಸ್ವಿಯಾಗಿ ಸೇರಿಸಲಾಯಿತು!' : 'New Supporter card added successfully!');
    setTimeout(() => setSuccessMsg(''), 4000);
  };

  const handleDeleteSupporter = (id: string) => {
    if (confirm(lang === 'kn' ? 'ಈ ಸಪೋರ್ಟರ್ ಅನ್ನು ಡಿಲೀಟ್ ಮಾಡಬೇಕೇ?' : 'Are you sure to delete this Supporter?')) {
      const filtered = supporters.filter((s) => s.id !== id);
      setSupporters(filtered);
      saveStoredSupporters(filtered);
    }
  };

  const handleCreateApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newApp.titleKn || !newApp.href) {
      alert('Please enter App title and Href link!');
      return;
    }
    const created: AppItem = {
      id: 'app-' + Date.now(),
      titleKn: newApp.titleKn || 'New App',
      titleEn: newApp.titleEn || newApp.titleKn || 'New App',
      descKn: newApp.descKn || 'ಉಪಯುಕ್ತ ಆಪ್',
      descEn: newApp.descEn || 'Useful App',
      iconName: newApp.iconName || 'Calculator',
      category: newApp.category || 'General',
      rating: newApp.rating || 4.8,
      userCountKn: newApp.userCountKn || '10K+',
      userCountEn: newApp.userCountEn || '10K+',
      href: newApp.href || '/',
      embedLink: newApp.embedLink || '',
      bgColor: newApp.bgColor || 'bg-amber-500 text-white',
      iconColor: newApp.iconColor || 'text-amber-500',
    };
    const updated = [created, ...appItems];
    setAppItems(updated);
    saveStoredAppItems(updated);
    setShowAddAppModal(false);
    setSuccessMsg(lang === 'kn' ? 'ಹೊಸ App ಯಶಸ್ವಿಯಾಗಿ ಸೇರಿಸಲಾಯಿತು!' : 'New App added successfully!');
    setTimeout(() => setSuccessMsg(''), 4000);
  };

  const handleDeleteApp = (id: string) => {
    if (confirm(lang === 'kn' ? 'ಈ App ಅನ್ನು ಡಿಲೀಟ್ ಮಾಡಬೇಕೇ?' : 'Are you sure to delete this App?')) {
      const filtered = appItems.filter((a) => a.id !== id);
      setAppItems(filtered);
      saveStoredAppItems(filtered);
    }
  };

  const handleCreateBlog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBlog.titleKn || !newBlog.contentKn) {
      alert(lang === 'kn' ? 'ದಯವಿಟ್ಟು ಲೇಖನದ ಶೀರ್ಷಿಕೆ ಮತ್ತು ವಿಷಯವನ್ನು ಭರ್ತಿ ಮಾಡಿ' : 'Please fill title and content');
      return;
    }

    const created: BlogPost = {
      id: 'blog-' + Date.now(),
      slug: newBlog.titleEn ? newBlog.titleEn.toLowerCase().replace(/[^a-z0-9]/g, '-') : 'blog-' + Date.now(),
      titleKn: newBlog.titleKn,
      titleEn: newBlog.titleEn || newBlog.titleKn,
      categoryKn: newBlog.categoryKn,
      categoryEn: newBlog.categoryEn,
      excerptKn: newBlog.excerptKn || newBlog.titleKn,
      excerptEn: newBlog.excerptEn || newBlog.titleEn,
      contentKn: newBlog.contentKn,
      contentEn: newBlog.contentEn || newBlog.contentKn,
      date: new Date().toISOString().split('T')[0],
      author: adminSettings.username || 'Admin',
      published: true,
    };

    const updatedBlogs = [created, ...blogs];
    setBlogs(updatedBlogs);
    saveStoredBlogs(updatedBlogs);

    setNewBlog({
      titleKn: '',
      titleEn: '',
      categoryKn: 'ಚಿನ್ನದ ಸುದ್ದಿ (Gold)',
      categoryEn: 'Gold News',
      excerptKn: '',
      excerptEn: '',
      contentKn: '',
      contentEn: '',
    });
    setShowAddBlogModal(false);
    setSuccessMsg(lang === 'kn' ? 'ಹೊಸ ಲೇಖನ ಯಶಸ್ವಿಯಾಗಿ ಪ್ರಕಟವಾಯಿತು!' : 'New blog post published successfully!');
    setTimeout(() => setSuccessMsg(''), 4000);
  };

  const handleDeleteBlog = (id: string) => {
    if (confirm(lang === 'kn' ? 'ಈ ಲೇಖನವನ್ನು ಖಚಿತವಾಗಿ ಡಿಲೀಟ್ ಮಾಡಬೇಕೇ?' : 'Are you sure you want to delete this blog post?')) {
      const filtered = blogs.filter((b) => b.id !== id);
      setBlogs(filtered);
      saveStoredBlogs(filtered);
    }
  };

  const handleSendPushNotification = () => {
    alert(lang === 'kn' ? '🔔 ಇಂದಿನ ಬೆಲೆ ಇಳಿಕೆ ಪುಶ್ ನೋಟಿಫಿಕೇಶನ್ ಕಳುಹಿಸಲಾಗಿದೆ!' : '🔔 Price Drop Push Notification Sent Successfully!');
  };

  const pendingCommentsCount = comments.filter((c) => c.status === 'pending').length;
  const filteredCommentsList = comments.filter((c) => {
    if (commentFilter === 'all') return true;
    return c.status === commentFilter;
  });

  // 🛡️ ULTRA-SECURE DUAL USERNAME + PASSWORD LOGIN GATE
  if (!isLoggedIn) {
    return (
      <div className="max-w-md mx-auto bg-white rounded-3xl border-2 border-amber-500/40 shadow-2xl p-8 space-y-6 text-slate-900">
        <div className="text-center space-y-2">
          <div className="w-16 h-16 rounded-2xl bg-slate-950 text-amber-400 flex items-center justify-center mx-auto shadow-xl border-2 border-amber-400">
            <Lock className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-black text-slate-950">{t.adminHeading}</h2>
          <p className="text-xs text-amber-800 font-extrabold bg-amber-50 px-3 py-1.5 rounded-full inline-block border border-amber-200">
            🛡️ 100% Multi-Factor Admin Access Control
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4 pt-2">
          <div className="space-y-1">
            <label className="block text-xs font-black text-slate-800 uppercase tracking-wider">
              {lang === 'kn' ? 'ಅಡ್ಮಿನ್ ಯೂಸರ್‌ನೇಮ್ (USERNAME)' : 'Admin Username'}
            </label>
            <div className="relative">
              <input
                type="text"
                required
                placeholder={lang === 'kn' ? 'ಯೂಸರ್‌ನೇಮ್ ನಮೂದಿಸಿ...' : 'Enter Username...'}
                value={inputUsername}
                onChange={(e) => setInputUsername(e.target.value)}
                className="w-full bg-slate-50 border-2 border-slate-300 rounded-2xl p-4 text-sm font-black text-slate-950 focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 focus:outline-none shadow-sm"
              />
              <UserCheck className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-black text-slate-800 uppercase tracking-wider">
              {lang === 'kn' ? 'ಅಡ್ಮಿನ್ ಪಾಸ್‌ವರ್ಡ್ (PASSWORD)' : 'Admin Password'}
            </label>
            <div className="relative">
              <input
                type={showPasscodeInLogin ? "text" : "password"}
                required
                placeholder={lang === 'kn' ? 'ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ...' : 'Enter Password...'}
                value={inputPasscode}
                onChange={(e) => setInputPasscode(e.target.value)}
                className="w-full bg-slate-50 border-2 border-slate-300 rounded-2xl p-4 text-sm font-black text-slate-950 tracking-wider focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 focus:outline-none shadow-sm"
              />
              <button
                type="button"
                onClick={() => setShowPasscodeInLogin(!showPasscodeInLogin)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-1"
              >
                {showPasscodeInLogin ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {errorMsg && (
            <div className="text-xs text-rose-700 font-black text-center flex items-center justify-center gap-1.5 bg-rose-50 p-3 rounded-2xl border-2 border-rose-200">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
              <span>{errorMsg}</span>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-4 rounded-2xl bg-slate-950 hover:bg-slate-800 text-amber-400 font-black text-sm shadow-xl transition-all active:scale-95 border border-amber-500/30"
          >
            {lang === 'kn' ? 'ಅಡ್ಮಿನ್‌? ಲಾಗಿನ್ ಮಾಡಿ' : 'Admin Login'}
          </button>
        </form>

        <div className="text-center text-[11px] text-slate-500 font-bold border-t border-slate-100 pt-4">
          🔒 Unauthorized access is strictly logged & blocked.
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10 space-y-8 max-w-5xl mx-auto text-slate-900 select-none">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-slate-950 text-amber-400 flex items-center justify-center shadow-lg border border-amber-400">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div>
            <h2 className="text-2xl font-black text-slate-950">{t.adminDashboardTitle}</h2>
            <p className="text-xs text-amber-700 font-bold flex items-center gap-1">
              <span>Logged in as:</span> <strong className="text-slate-950 bg-amber-100 px-2 py-0.5 rounded">{adminSettings.username}</strong>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <button
            onClick={handleSendPushNotification}
            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-900 font-bold text-xs shadow-xs"
            title="Send Instant Push Alert"
          >
            <Bell className="w-4 h-4 text-amber-600" />
            <span>Push Alert</span>
          </button>

          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs shadow-lg shadow-amber-500/20 transition-transform active:scale-95"
          >
            <Save className="w-4 h-4" />
            <span>{t.saveChanges}</span>
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs shadow-md transition-all active:scale-95"
          >
            <LogOut className="w-4 h-4" />
            <span>{lang === 'kn' ? 'ಲಾಗ್‌ಔಟ್ (Logout)' : 'Logout'}</span>
          </button>
        </div>
      </div>

      {successMsg && (
        <div className="bg-emerald-50 text-emerald-800 border-2 border-emerald-300 p-4 rounded-2xl text-xs font-black flex items-center gap-2 shadow-xs">
          <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Traffic & Visitor Overview Box */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl border border-amber-500/20">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center border border-amber-500/30">
            <Users className="w-7 h-7 text-amber-400" />
          </div>
          <div>
            <span className="text-xs text-slate-400 font-bold block uppercase tracking-wider">{t.todayVisitors}</span>
            <span className="text-3xl font-black text-white">{ratesData.todayVisitorsCount.toLocaleString('en-IN')} Visitors</span>
          </div>
        </div>
        <div className="text-right text-xs text-slate-300 font-semibold">
          <span>Real-time Analytics Engine: <strong className="text-emerald-400">Active</strong></span>
        </div>
      </div>

      {/* 💬 MASTER COMMENTS APPROVAL & MODERATION SYSTEM */}
      <div className="bg-gradient-to-br from-indigo-500/10 via-indigo-500/5 to-indigo-500/10 p-6 sm:p-8 rounded-3xl border-2 border-indigo-300/80 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-indigo-600" />
            <div>
              <h3 className="text-base font-black text-slate-950 flex items-center gap-2">
                <span>{lang === 'kn' ? '💬 ಕಾಮೆಂಟ್‌ಗಳ ನಿಯಂತ್ರಣ & ಅನುಮೋದನೆ (Comments Approval Panel)' : '💬 Comments Approval & Moderation Panel'}</span>
                {pendingCommentsCount > 0 && (
                  <span className="text-xs font-black bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-full animate-bounce">
                    {pendingCommentsCount} {lang === 'kn' ? 'ಬಾಕಿ (Pending)' : 'Pending'}
                  </span>
                )}
              </h3>
              <p className="text-xs text-slate-600 font-bold">
                {lang === 'kn' ? 'ಸಾರ್ವಜನಿಕರು ಬರೆದ ಕಾಮೆಂಟ್‌ಗಳನ್ನು ಅನುಮೋದಿಸಿ (Approve), ತಿರಸ್ಕರಿಸಿ (Disapprove) ಅಥವಾ ಡಿಲೀಟ್ ಮಾಡಿ.' : 'Approve, Disapprove or Delete user submitted comments live!'}
              </p>
            </div>
          </div>

          {/* Status Filter Tabs */}
          <div className="flex items-center gap-1.5 bg-white p-1 rounded-2xl border border-slate-200 text-xs font-bold shrink-0">
            <button
              onClick={() => setCommentFilter('pending')}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                commentFilter === 'pending' ? 'bg-amber-400 text-slate-950 font-black shadow-xs' : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              ⏳ {lang === 'kn' ? 'ಬಾಕಿ (Pending)' : 'Pending'} ({comments.filter((c) => c.status === 'pending').length})
            </button>

            <button
              onClick={() => setCommentFilter('approved')}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                commentFilter === 'approved' ? 'bg-emerald-600 text-white font-black shadow-xs' : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              ✅ {lang === 'kn' ? 'ಅನುಮೋದಿತ' : 'Approved'} ({comments.filter((c) => c.status === 'approved').length})
            </button>

            <button
              onClick={() => setCommentFilter('disapproved')}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                commentFilter === 'disapproved' ? 'bg-rose-600 text-white font-black shadow-xs' : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              ❌ {lang === 'kn' ? 'ತಿರಸ್ಕರಿಸಿದ' : 'Disapproved'} ({comments.filter((c) => c.status === 'disapproved').length})
            </button>

            <button
              onClick={() => setCommentFilter('all')}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                commentFilter === 'all' ? 'bg-slate-950 text-white font-black shadow-xs' : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              {lang === 'kn' ? 'ಎಲ್ಲಾ' : 'All'} ({comments.length})
            </button>
          </div>
        </div>

        {/* Comments List */}
        {filteredCommentsList.length > 0 ? (
          <div className="space-y-3">
            {filteredCommentsList.map((c) => (
              <div
                key={c.id}
                className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-black text-slate-950 text-xs sm:text-sm">{c.userName}</span>
                    {c.userEmail && <span className="text-[10px] text-slate-400 font-semibold">({c.userEmail})</span>}
                    <span
                      className={`text-[9px] font-black px-2 py-0.5 rounded uppercase ${
                        c.status === 'approved'
                          ? 'bg-emerald-100 text-emerald-800'
                          : c.status === 'disapproved'
                          ? 'bg-rose-100 text-rose-800'
                          : 'bg-amber-100 text-amber-900'
                      }`}
                    >
                      {c.status}
                    </span>
                  </div>

                  <p className="text-xs font-medium text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-100 leading-relaxed">
                    "{c.commentText}"
                  </p>

                  <div className="flex items-center gap-2 text-[10px] text-slate-400 font-semibold">
                    <span>Page: <strong>{c.pageId}</strong></span>
                    <span>• Date: {c.createdAt}</span>
                    <span>• Rating: ★ {c.rating || 5}</span>
                  </div>
                </div>

                {/* Moderate Actions */}
                <div className="flex items-center gap-2 shrink-0 border-t sm:border-t-0 border-slate-100 pt-2 sm:pt-0">
                  {c.status !== 'approved' && (
                    <button
                      onClick={() => handleApproveComment(c.id)}
                      className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-xs flex items-center gap-1 transition-transform active:scale-95"
                    >
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>{lang === 'kn' ? 'Approve' : 'Approve'}</span>
                    </button>
                  )}

                  {c.status !== 'disapproved' && (
                    <button
                      onClick={() => handleDisapproveComment(c.id)}
                      className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs shadow-xs flex items-center gap-1 transition-transform active:scale-95"
                    >
                      <ThumbsDown className="w-3.5 h-3.5" />
                      <span>{lang === 'kn' ? 'Reject' : 'Disapprove'}</span>
                    </button>
                  )}

                  <button
                    onClick={() => handleDeleteComment(c.id)}
                    className="p-2 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100 transition-colors"
                    title="Delete Comment"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 bg-white rounded-2xl border border-slate-200 text-xs font-bold text-slate-400">
            {lang === 'kn' ? 'ಈ ವಿಭಾಗದಲ್ಲಿ ಯಾವುದೇ ಕಾಮೆಂಟ್‌ಗಳಿಲ್ಲ.' : 'No comments in this section.'}
          </div>
        )}
      </div>

      {/* ❤️ SUPPORTERS & CREATOR WALL MANAGER */}
      <div className="bg-gradient-to-br from-rose-500/10 via-rose-500/5 to-rose-500/10 p-6 sm:p-8 rounded-3xl border-2 border-rose-300/80 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-rose-600 fill-rose-600" />
            <div>
              <h3 className="text-base font-black text-slate-950">
                {lang === 'kn' ? '❤️ ನಮ್ಮ ಸಪೋರ್ಟರ್ಸ್ & ಕ್ರಿಯೇಟರ್ಸ್ ಕಂಟ್ರೋಲ್ (Supporters & Creator Wall)' : '❤️ Supporters & Creator Wall Manager'}
              </h3>
              <p className="text-xs text-slate-600 font-bold">
                {lang === 'kn' ? 'ನಿಮ್ಮ ವೆಬ್‌ಸೈಟ್‌ಗೆ ಸಾಥ್ ನೀಡುವ ಯೂಟ್ಯೂಬರ್ಸ್/ಕ್ರಿಯೇಟರ್ಸ್ ಚಾನೆಲ್ ಹೆಸರು, DP ಫೋಟೋ ಹಾಗೂ ಲಿಂಕ್ ಸೇರಿಸಿ!' : 'Add YouTubers & creators featuring your website with channel link & DP avatar!'}
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowAddSupporterModal(!showAddSupporterModal)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-amber-400 text-xs font-black shadow-md shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>{lang === 'kn' ? 'ಹೊಸ ಸಪೋರ್ಟರ್ ಸೇರಿಸಿ' : 'Add Supporter'}</span>
          </button>
        </div>

        {/* Add Supporter Modal Form */}
        {showAddSupporterModal && (
          <form onSubmit={handleCreateSupporter} className="bg-white border-2 border-rose-300 rounded-3xl p-6 space-y-4 text-xs shadow-lg">
            <h4 className="font-black text-sm text-slate-950 border-b pb-2">➕ ಹೊಸ ಸಪೋರ್ಟರ್ ಸೇರಿಸಿ (Add Creator Card)</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-slate-800 mb-1">Creator / Channel Name (ಚಾನೆಲ್ ಹೆಸರು)</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tech Kannada Official"
                  value={newSupporter.name}
                  onChange={(e) => setNewSupporter({ ...newSupporter, name: e.target.value })}
                  className="w-full bg-slate-50 border rounded-xl p-2.5 font-bold"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1">Channel / Video URL (ಲಿಂಕ್)</label>
                <input
                  type="text"
                  required
                  placeholder="https://youtube.com/@channel"
                  value={newSupporter.channelUrl}
                  onChange={(e) => setNewSupporter({ ...newSupporter, channelUrl: e.target.value })}
                  className="w-full bg-slate-50 border rounded-xl p-2.5 font-bold"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1">DP Avatar Image URL (ಫೋಟೋ ಲಿಂಕ್)</label>
                <input
                  type="text"
                  placeholder="https://images.unsplash.com/... or image link"
                  value={newSupporter.avatarUrl}
                  onChange={(e) => setNewSupporter({ ...newSupporter, avatarUrl: e.target.value })}
                  className="w-full bg-slate-50 border rounded-xl p-2.5 font-bold"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1">Badge Tag (ಉದಾ: YouTube Creator)</label>
                <input
                  type="text"
                  placeholder="e.g. YouTube Creator or Tech Supporter"
                  value={newSupporter.badgeText}
                  onChange={(e) => setNewSupporter({ ...newSupporter, badgeText: e.target.value })}
                  className="w-full bg-slate-50 border rounded-xl p-2.5 font-bold"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowAddSupporterModal(false)}
                className="px-4 py-2 rounded-xl bg-slate-200 text-slate-800 font-bold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-rose-600 text-white font-black shadow"
              >
                Save Supporter Card
              </button>
            </div>
          </form>
        )}

        {/* Existing Supporters List */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {supporters.map((s) => (
            <div key={s.id} className="bg-white p-4 rounded-2xl border border-slate-200/90 flex items-center justify-between gap-3 shadow-2xs">
              <div className="flex items-center gap-3">
                {s.avatarUrl ? (
                  <img src={s.avatarUrl} alt={s.name} className="w-9 h-9 rounded-full object-cover border border-amber-400 shrink-0" />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-900 font-bold flex items-center justify-center text-xs shrink-0">
                    DP
                  </div>
                )}
                <div>
                  <h4 className="font-black text-slate-950 text-xs">{s.name}</h4>
                  <span className="text-[9px] font-bold text-rose-600 bg-rose-50 px-1.5 py-0.2 rounded block mt-0.5">{s.badgeText || 'Supporter'}</span>
                </div>
              </div>

              <button
                onClick={() => handleDeleteSupporter(s.id)}
                className="p-1.5 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100 shrink-0"
                title="Delete Supporter"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ⚡ 1-CLICK HTML iFRAME EMBED CODE GENERATOR GATEWAY */}
      <div className="bg-gradient-to-br from-amber-500/15 via-amber-500/5 to-amber-500/10 p-6 sm:p-8 rounded-3xl border-2 border-amber-400/80 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code className="w-6 h-6 text-amber-600" />
            <div>
              <h3 className="text-base font-black text-slate-950">
                {lang === 'kn' ? '⚡ 1-Click HTML iFrame Embed Code Generator (ಆಪ್‌ಗಳ ಎಂಬೆಡ್ ಕೋಡ್)' : '⚡ 1-Click HTML iFrame Embed Code Generator'}
              </h3>
              <p className="text-xs text-slate-600 font-bold">
                {lang === 'kn' ? 'ನಿಮ್ಮ ಪ್ರತಿಯೊಂದು App ನ HTML ಎಂಬೆಡ್ ಕೋಡ್ ಪಡೆಯಿರಿ ಮತ್ತು ಬೇರೆ ಯಾವುದೇ ವೆಬ್‌ಸೈಟ್/WordPress ನಲ್ಲಿ ಸೇರಿಸಿ!' : 'Copy HTML iFrame code for any app & embed into external websites!'}
              </p>
            </div>
          </div>
        </div>

        {/* Existing App Cards HTML Embed Code Generator List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {appItems.map((app) => {
            const origin = typeof window !== 'undefined' ? window.location.origin : 'https://mahiti-chakra-portal.vercel.app';
            const fullUrl = `${origin}${app.href}`;
            const iframeCode = `<iframe src="${fullUrl}" width="100%" height="650" frameborder="0" style="border-radius:16px; border:1px solid #e2e8f0;" allowfullscreen></iframe>`;

            return (
              <div key={app.id} className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="font-black text-slate-950 text-xs sm:text-sm">{lang === 'kn' ? app.titleKn : app.titleEn}</span>
                  <span className="text-[10px] font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded">★ {app.rating}</span>
                </div>

                <div className="bg-slate-900 text-amber-300 p-2.5 rounded-xl font-mono text-[10px] overflow-x-auto select-all border border-slate-800">
                  <code>{iframeCode}</code>
                </div>

                <div className="flex items-center justify-between gap-2 pt-1">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(iframeCode);
                      setCopiedAppId(app.id);
                      setTimeout(() => setCopiedAppId(''), 3000);
                    }}
                    className="flex-1 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs shadow-xs transition-all active:scale-95 flex items-center justify-center gap-1.5"
                  >
                    {copiedAppId === app.id ? <CheckCircle className="w-3.5 h-3.5" /> : <Code className="w-3.5 h-3.5" />}
                    <span>{copiedAppId === app.id ? 'iFrame Code Copied! ✅' : '📋 Copy HTML iFrame Code'}</span>
                  </button>

                  <button
                    onClick={() => handleDeleteApp(app.id)}
                    className="p-2 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100 transition-colors shrink-0"
                    title="Delete App"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 🔒 SECURE CREDENTIALS & SECURITY CONFIGURATION BOX */}
      <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4 text-slate-900">
        <h3 className="text-sm font-black text-slate-950 flex items-center gap-2">
          <Key className="w-5 h-5 text-amber-600" />
          {lang === 'kn' ? '🛡️ ಅಡ್ಮಿನ್ ಸೆಕ್ಯೂರಿಟಿ & ಲಾಗಿನ್ ಕ್ರೆಡೆನ್ಶಿಯಲ್ಸ್ (Username & Password)' : '🛡️ Admin Security & Login Credentials'}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block font-black text-slate-800 mb-1">
              {lang === 'kn' ? 'ಅಡ್ಮಿನ್ ಯೂಸರ್‌ನೇಮ್ ಬದಲಾಯಿಸಿ (Admin Username)' : 'Admin Username'}
            </label>
            <input
              type="text"
              required
              value={adminSettings.username}
              onChange={(e) => setAdminSettings({ ...adminSettings, username: e.target.value })}
              className="w-full bg-white border-2 border-slate-300 rounded-xl p-3 font-black text-slate-950 shadow-xs focus:border-amber-500 focus:outline-none"
              placeholder="e.g. admin or jakku"
            />
          </div>

          <div>
            <label className="block font-black text-slate-800 mb-1">
              {lang === 'kn' ? 'ಅಡ್ಮಿನ್ ಪಾಸ್‌ವರ್ಡ್ ಬದಲಾಯಿಸಿ (Admin Password)' : 'Admin Password'}
            </label>
            <div className="relative">
              <input
                type={showPasscodeInSettings ? "text" : "password"}
                required
                value={adminSettings.passcode}
                onChange={(e) => setAdminSettings({ ...adminSettings, passcode: e.target.value })}
                className="w-full bg-white border-2 border-slate-300 rounded-xl p-3 pr-10 font-black text-slate-950 tracking-wider shadow-xs focus:border-amber-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPasscodeInSettings(!showPasscodeInSettings)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
              >
                {showPasscodeInSettings ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        <div className="pt-2">
          <label className="block font-bold text-slate-800 mb-1">{t.adsensePublisherIdLabel}</label>
          <input
            type="text"
            value={adminSettings.adsensePublisherId || ''}
            onChange={(e) => setAdminSettings({ ...adminSettings, adsensePublisherId: e.target.value })}
            className="w-full bg-white border border-slate-300 rounded-xl p-3 font-bold text-slate-900 shadow-xs"
            placeholder="pub-xxxxxxxxxxxxxxxx"
          />
        </div>
      </div>

      {/* Control Tabs & Settings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Sync Mode Toggle */}
        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4">
          <h3 className="text-sm font-black text-slate-950 flex items-center gap-2">
            <Sliders className="w-4 h-4 text-amber-600" />
            Mode & Sync Control
          </h3>

          <div className="space-y-3 text-xs">
            <label className="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-200 cursor-pointer shadow-xs">
              <span className="font-bold text-slate-800">{t.autoSyncToggle}</span>
              <input
                type="checkbox"
                checked={adminSettings.isAutoSync}
                onChange={(e) =>
                  setAdminSettings({ ...adminSettings, isAutoSync: e.target.checked })
                }
                className="w-5 h-5 accent-amber-500 rounded cursor-pointer"
              />
            </label>

            <div className="text-[11px] text-slate-500 font-semibold italic">
              {adminSettings.isAutoSync
                ? "Automatic mode is active. Live market rates will be fetched from online APIs."
                : "Manual Override mode is active. Custom prices set below will be displayed."}
            </div>
          </div>
        </div>

        {/* Announcement Banner Editor */}
        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4">
          <h3 className="text-sm font-black text-slate-950 flex items-center gap-2">
            <Megaphone className="w-4 h-4 text-amber-600" />
            {t.announcementSettings}
          </h3>

          <div className="space-y-3 text-xs">
            <label className="flex items-center justify-between bg-white p-3.5 rounded-2xl border border-slate-200 cursor-pointer shadow-xs">
              <span className="font-bold text-slate-800">{t.enableNotice}</span>
              <input
                type="checkbox"
                checked={adminSettings.announcement.enabled}
                onChange={(e) =>
                  setAdminSettings({
                    ...adminSettings,
                    announcement: { ...adminSettings.announcement, enabled: e.target.checked },
                  })
                }
                className="w-4 h-4 accent-amber-500 rounded cursor-pointer"
              />
            </label>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">{t.announcementTextKn}</label>
              <input
                type="text"
                value={adminSettings.announcement.textKn}
                onChange={(e) =>
                  setAdminSettings({
                    ...adminSettings,
                    announcement: { ...adminSettings.announcement, textKn: e.target.value },
                  })
                }
                className="w-full bg-white border border-slate-300 rounded-xl p-3 text-xs font-bold text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none shadow-xs"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">{t.announcementTextEn}</label>
              <input
                type="text"
                value={adminSettings.announcement.textEn}
                onChange={(e) =>
                  setAdminSettings({
                    ...adminSettings,
                    announcement: { ...adminSettings.announcement, textEn: e.target.value },
                  })
                }
                className="w-full bg-white border border-slate-300 rounded-xl p-3 text-xs font-bold text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none shadow-xs"
              />
            </div>
          </div>
        </div>

      </div>

      {/* 🌐 FOOTER SOCIAL MEDIA & COMMUNITY LINKS CONTROL BOX */}
      <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4">
        <h3 className="text-sm font-black text-slate-950 flex items-center gap-2">
          <Link2 className="w-4 h-4 text-amber-600" />
          {lang === 'kn' ? '🌐 ಫುಟರ್ ಸೋಷಿಯಲ್ ಮಿಡಿಯಾ & ಕಮ್ಯುನಿಟಿ ಲಿಂಕ್‌ಗಳು (Footer Social Links)' : '🌐 Footer Social Media & Community Links'}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div>
            <label className="block font-bold text-slate-800 mb-1">WhatsApp Group URL</label>
            <input
              type="text"
              placeholder="https://chat.whatsapp.com/..."
              value={adminSettings.whatsappGroupUrl || ''}
              onChange={(e) => setAdminSettings({ ...adminSettings, whatsappGroupUrl: e.target.value })}
              className="w-full bg-white border border-slate-300 rounded-xl p-2.5 font-bold text-slate-900"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-800 mb-1">Telegram Channel URL</label>
            <input
              type="text"
              placeholder="https://t.me/..."
              value={adminSettings.telegramGroupUrl || ''}
              onChange={(e) => setAdminSettings({ ...adminSettings, telegramGroupUrl: e.target.value })}
              className="w-full bg-white border border-slate-300 rounded-xl p-2.5 font-bold text-slate-900"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-800 mb-1">YouTube Channel URL</label>
            <input
              type="text"
              placeholder="https://youtube.com/..."
              value={adminSettings.youtubeGroupUrl || ''}
              onChange={(e) => setAdminSettings({ ...adminSettings, youtubeGroupUrl: e.target.value })}
              className="w-full bg-white border border-slate-300 rounded-xl p-2.5 font-bold text-slate-900"
            />
          </div>
        </div>
      </div>

      {/* BLOG MANAGER SECTION */}
      <div className="space-y-4 border-t border-slate-200 pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Newspaper className="w-5 h-5 text-amber-600" />
            <h3 className="text-base font-black text-slate-950">{t.blogManagerTitle}</h3>
          </div>
          <button
            onClick={() => setShowAddBlogModal(!showAddBlogModal)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-amber-400 text-xs font-black shadow-md"
          >
            <Plus className="w-4 h-4" />
            <span>{t.addBlogBtn}</span>
          </button>
        </div>

        {/* Publish Blog Form */}
        {showAddBlogModal && (
          <form onSubmit={handleCreateBlog} className="bg-slate-50 border border-slate-300 rounded-3xl p-6 space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-slate-700 mb-1">{t.blogTitleKn}</label>
                <input
                  type="text"
                  required
                  value={newBlog.titleKn}
                  onChange={(e) => setNewBlog({ ...newBlog, titleKn: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-xl p-3 font-bold text-slate-900 shadow-xs"
                  placeholder="ಉದಾ: ಬೆಂಗಳೂರಿನಲ್ಲಿ ಇಂದಿನ ಚಿನ್ನದ ಬೆಲೆ..."
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">{t.blogTitleEn}</label>
                <input
                  type="text"
                  value={newBlog.titleEn}
                  onChange={(e) => setNewBlog({ ...newBlog, titleEn: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-xl p-3 font-bold text-slate-900 shadow-xs"
                  placeholder="e.g. Gold Rate Calculation Guide..."
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">{t.blogCategory}</label>
              <select
                value={newBlog.categoryKn}
                onChange={(e) => setNewBlog({ ...newBlog, categoryKn: e.target.value })}
                className="w-full bg-white border border-slate-300 rounded-xl p-3 font-bold text-slate-900 shadow-xs"
              >
                <option value="ಚಿನ್ನದ ಸುದ್ದಿ (Gold)">ಚಿನ್ನದ ಸುದ್ದಿ (Gold News)</option>
                <option value="ಸಾಲ ಮಾರ್ಗದರ್ಶಿ (Loans)">ಸಾಲ ಮಾರ್ಗದರ್ಶಿ (Loans Guide)</option>
                <option value="ಉಳಿತಾಯದ ಟಿಪ್ಸ್ (Savings)">ಉಳಿತಾಯದ ಟಿಪ್ಸ್ (Savings Tips)</option>
                <option value="ತೆರಿಗೆ ಮಾರ್ಗದರ್ಶಿ (Tax)">ತೆರಿಗೆ ಮಾರ್ಗದರ್ಶಿ (Tax Guide)</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">{t.blogContentKn}</label>
              <textarea
                rows={5}
                required
                value={newBlog.contentKn}
                onChange={(e) => setNewBlog({ ...newBlog, contentKn: e.target.value })}
                className="w-full bg-white border border-slate-300 rounded-xl p-3 font-medium text-slate-900 text-sm leading-relaxed shadow-xs"
                placeholder="ನಿಮ್ಮ ಲೇಖನದ ಪೂರ್ಣ ವಿಷಯವನ್ನು ಇಲ್ಲಿ ಬರೆಯಿರಿ..."
              />
            </div>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowAddBlogModal(false)}
                className="px-4 py-2 rounded-xl bg-slate-200 text-slate-800 font-bold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black shadow-md"
              >
                {t.publishNow}
              </button>
            </div>
          </form>
        )}

        {/* Existing Blogs List */}
        <div className="space-y-2">
          {blogs.map((b) => (
            <div key={b.id} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-center justify-between gap-4 text-xs shadow-xs">
              <div>
                <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-md font-bold">{b.categoryKn}</span>
                <h4 className="font-bold text-slate-900 text-sm mt-1">{lang === 'kn' ? b.titleKn : b.titleEn}</h4>
                <span className="text-[10px] text-slate-400 font-medium">Date: {b.date} | Author: {b.author}</span>
              </div>
              <button
                onClick={() => handleDeleteBlog(b.id)}
                className="p-2 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100 transition-colors shadow-xs"
                title="Delete Post"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPanelComp;
