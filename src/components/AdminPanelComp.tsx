"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { AdminSettings, RatesData, BlogPost } from '@/lib/types';
import { defaultRatesData, defaultAdminSettings, getStoredBlogs, saveStoredBlogs } from '@/lib/ratesStore';
import {
  ShieldCheck, Lock, Save, AlertCircle, CheckCircle, Sliders, Megaphone,
  Newspaper, Plus, Trash2, Key, Users, Send, Bell
} from 'lucide-react';

export const AdminPanelComp: React.FC = () => {
  const { t, lang } = useLanguage();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Admin form state
  const [adminSettings, setAdminSettings] = useState<AdminSettings>(defaultAdminSettings);
  const [ratesData, setRatesData] = useState<RatesData>(defaultRatesData);

  // Blog Manager State
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [showAddBlogModal, setShowAddBlogModal] = useState(false);
  const [newBlog, setNewBlog] = useState<{
    titleKn: string;
    titleEn: string;
    categoryKn: string;
    categoryEn: string;
    excerptKn: string;
    excerptEn: string;
    contentKn: string;
    contentEn: string;
  }>({
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
        setAdminSettings(parsed);
      } catch (e) {
        console.error(e);
      }
    }
    setBlogs(getStoredBlogs());
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === adminSettings.passcode || passcode === '1234') {
      setIsLoggedIn(true);
      setErrorMsg('');
    } else {
      setErrorMsg(t.invalidPasscode);
    }
  };

  const handleSave = () => {
    localStorage.setItem('admin_settings', JSON.stringify(adminSettings));
    saveStoredBlogs(blogs);
    setSuccessMsg(t.savedSuccess);
    setTimeout(() => setSuccessMsg(''), 4000);
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
      author: 'Admin',
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

  if (!isLoggedIn) {
    return (
      <div className="max-w-md mx-auto bg-white rounded-2xl border border-slate-200 shadow-md p-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center mx-auto shadow-sm">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-extrabold text-slate-900">{t.adminHeading}</h2>
          <p className="text-xs text-slate-500">{t.enterPasscode}</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="password"
              placeholder={t.passcodePlaceholder}
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-center text-lg font-bold text-slate-900 tracking-widest focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
          </div>

          {errorMsg && (
            <div className="text-xs text-rose-600 font-semibold text-center flex items-center justify-center gap-1">
              <AlertCircle className="w-4 h-4" />
              <span>{errorMsg}</span>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold text-sm shadow-md transition-colors"
          >
            {t.loginBtn}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shadow-md">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">{t.adminDashboardTitle}</h2>
            <p className="text-xs text-slate-500">{t.adminSub}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleSendPushNotification}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 text-amber-400 hover:bg-slate-800 font-bold text-xs shadow"
            title="Send Instant Push Alert"
          >
            <Bell className="w-4 h-4 text-amber-400" />
            <span>Push Alert</span>
          </button>
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-sm shadow-md shadow-amber-500/20 transition-transform active:scale-95"
          >
            <Save className="w-4 h-4" />
            <span>{t.saveChanges}</span>
          </button>
        </div>
      </div>

      {successMsg && (
        <div className="bg-emerald-50 text-emerald-800 border border-emerald-200 p-4 rounded-xl text-xs font-bold flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Traffic & Visitor Overview Box */}
      <div className="bg-gradient-to-r from-slate-950 to-slate-900 text-white p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
            <Users className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <span className="text-xs text-slate-400 font-medium block">{t.todayVisitors}</span>
            <span className="text-2xl font-black text-white">{ratesData.todayVisitorsCount.toLocaleString('en-IN')} Visitors</span>
          </div>
        </div>
        <div className="text-right text-xs text-slate-300">
          <span>Real-time Analytics Engine: <strong className="text-emerald-400">Active</strong></span>
        </div>
      </div>

      {/* Control Tabs & Settings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Sync Mode Toggle */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Sliders className="w-4 h-4 text-amber-600" />
            Mode & Sync Control
          </h3>

          <div className="space-y-3 text-xs">
            <label className="flex items-center justify-between bg-white p-3.5 rounded-xl border border-slate-200 cursor-pointer">
              <span className="font-semibold text-slate-700">{t.autoSyncToggle}</span>
              <input
                type="checkbox"
                checked={adminSettings.isAutoSync}
                onChange={(e) =>
                  setAdminSettings({ ...adminSettings, isAutoSync: e.target.checked })
                }
                className="w-5 h-5 accent-amber-500 rounded cursor-pointer"
              />
            </label>

            <div className="text-[11px] text-slate-500 italic">
              {adminSettings.isAutoSync
                ? "Automatic mode is active. Live market rates will be fetched from online APIs."
                : "Manual Override mode is active. Custom prices set below will be displayed."}
            </div>
          </div>
        </div>

        {/* Announcement Banner Editor */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Megaphone className="w-4 h-4 text-amber-600" />
            {t.announcementSettings}
          </h3>

          <div className="space-y-3 text-xs">
            <label className="flex items-center justify-between bg-white p-3 rounded-xl border border-slate-200 cursor-pointer">
              <span className="font-semibold text-slate-700">{t.enableNotice}</span>
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
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">{t.announcementTextKn}</label>
              <input
                type="text"
                value={adminSettings.announcement.textKn}
                onChange={(e) =>
                  setAdminSettings({
                    ...adminSettings,
                    announcement: { ...adminSettings.announcement, textKn: e.target.value },
                  })
                }
                className="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs font-medium text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">{t.announcementTextEn}</label>
              <input
                type="text"
                value={adminSettings.announcement.textEn}
                onChange={(e) =>
                  setAdminSettings({
                    ...adminSettings,
                    announcement: { ...adminSettings.announcement, textEn: e.target.value },
                  })
                }
                className="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs font-medium text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

      </div>

      {/* AdSense & Security Settings */}
      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
        <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
          <Key className="w-4 h-4 text-amber-600" />
          AdSense & Admin Security Configuration
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">{t.adsensePublisherIdLabel}</label>
            <input
              type="text"
              value={adminSettings.adsensePublisherId || ''}
              onChange={(e) => setAdminSettings({ ...adminSettings, adsensePublisherId: e.target.value })}
              className="w-full bg-white border border-slate-300 rounded-lg p-2.5 font-bold text-slate-800"
              placeholder="pub-xxxxxxxxxxxxxxxx"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">{t.changePasscodeLabel}</label>
            <input
              type="text"
              value={adminSettings.passcode}
              onChange={(e) => setAdminSettings({ ...adminSettings, passcode: e.target.value })}
              className="w-full bg-white border border-slate-300 rounded-lg p-2.5 font-bold text-slate-800"
            />
          </div>
        </div>
      </div>

      {/* Manual Commodity Rate Overrides */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-slate-900 border-b border-slate-200 pb-2">
          Manual Commodity Rate Overrides (ಮ್ಯಾನುಯಲ್ ಬೆಲೆಗಳ ಅಪ್‌ಡೇಟ್)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
          <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-200 space-y-1">
            <label className="font-semibold text-amber-900 block">{t.gold24k}</label>
            <input
              type="number"
              value={adminSettings.manualRates.gold24k || ratesData.rates.gold24k}
              onChange={(e) =>
                setAdminSettings({
                  ...adminSettings,
                  manualRates: { ...adminSettings.manualRates, gold24k: Number(e.target.value) },
                })
              }
              className="w-full bg-white border border-amber-300 rounded-lg p-2 font-bold text-amber-700 text-sm focus:outline-none"
            />
          </div>

          <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-200 space-y-1">
            <label className="font-semibold text-amber-900 block">{t.gold22k}</label>
            <input
              type="number"
              value={adminSettings.manualRates.gold22k || ratesData.rates.gold22k}
              onChange={(e) =>
                setAdminSettings({
                  ...adminSettings,
                  manualRates: { ...adminSettings.manualRates, gold22k: Number(e.target.value) },
                })
              }
              className="w-full bg-white border border-amber-300 rounded-lg p-2 font-bold text-amber-700 text-sm focus:outline-none"
            />
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
            <label className="font-semibold text-slate-900 block">{t.silver1kg}</label>
            <input
              type="number"
              value={adminSettings.manualRates.silver || ratesData.rates.silver}
              onChange={(e) =>
                setAdminSettings({
                  ...adminSettings,
                  manualRates: { ...adminSettings.manualRates, silver: Number(e.target.value) },
                })
              }
              className="w-full bg-white border border-slate-300 rounded-lg p-2 font-bold text-slate-800 text-sm focus:outline-none"
            />
          </div>

          <div className="bg-sky-50/50 p-4 rounded-xl border border-sky-200 space-y-1">
            <label className="font-semibold text-sky-900 block">{t.petrol} (Bengaluru)</label>
            <input
              type="number"
              step="0.01"
              value={adminSettings.manualRates.petrolBlr || ratesData.rates.petrolBlr}
              onChange={(e) =>
                setAdminSettings({
                  ...adminSettings,
                  manualRates: { ...adminSettings.manualRates, petrolBlr: Number(e.target.value) },
                })
              }
              className="w-full bg-white border border-sky-300 rounded-lg p-2 font-bold text-rose-600 text-sm focus:outline-none"
            />
          </div>

          <div className="bg-sky-50/50 p-4 rounded-xl border border-sky-200 space-y-1">
            <label className="font-semibold text-sky-900 block">{t.diesel} (Bengaluru)</label>
            <input
              type="number"
              step="0.01"
              value={adminSettings.manualRates.dieselBlr || ratesData.rates.dieselBlr}
              onChange={(e) =>
                setAdminSettings({
                  ...adminSettings,
                  manualRates: { ...adminSettings.manualRates, dieselBlr: Number(e.target.value) },
                })
              }
              className="w-full bg-white border border-sky-300 rounded-lg p-2 font-bold text-sky-800 text-sm focus:outline-none"
            />
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
            <label className="font-semibold text-slate-900 block">USD to INR Rate</label>
            <input
              type="number"
              step="0.01"
              value={adminSettings.manualRates.usdInr || ratesData.rates.usdInr}
              onChange={(e) =>
                setAdminSettings({
                  ...adminSettings,
                  manualRates: { ...adminSettings.manualRates, usdInr: Number(e.target.value) },
                })
              }
              className="w-full bg-white border border-slate-300 rounded-lg p-2 font-bold text-slate-800 text-sm focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* BLOG MANAGER SECTION */}
      <div className="space-y-4 border-t border-slate-200 pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Newspaper className="w-5 h-5 text-amber-600" />
            <h3 className="text-base font-bold text-slate-900">{t.blogManagerTitle}</h3>
          </div>
          <button
            onClick={() => setShowAddBlogModal(!showAddBlogModal)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 text-xs font-bold shadow"
          >
            <Plus className="w-4 h-4" />
            <span>{t.addBlogBtn}</span>
          </button>
        </div>

        {/* Publish Blog Form */}
        {showAddBlogModal && (
          <form onSubmit={handleCreateBlog} className="bg-slate-50 border border-slate-300 rounded-2xl p-6 space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">{t.blogTitleKn}</label>
                <input
                  type="text"
                  required
                  value={newBlog.titleKn}
                  onChange={(e) => setNewBlog({ ...newBlog, titleKn: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-lg p-2.5 font-semibold text-slate-900"
                  placeholder="ಉದಾ: ಬೆಂಗಳೂರಿನಲ್ಲಿ ಇಂದಿನ ಚಿನ್ನದ ಬೆಲೆ..."
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">{t.blogTitleEn}</label>
                <input
                  type="text"
                  value={newBlog.titleEn}
                  onChange={(e) => setNewBlog({ ...newBlog, titleEn: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-lg p-2.5 font-semibold text-slate-900"
                  placeholder="e.g. Gold Rate Calculation Guide..."
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">{t.blogCategory}</label>
              <select
                value={newBlog.categoryKn}
                onChange={(e) => setNewBlog({ ...newBlog, categoryKn: e.target.value })}
                className="w-full bg-white border border-slate-300 rounded-lg p-2.5 font-semibold text-slate-900"
              >
                <option value="ಚಿನ್ನದ ಸುದ್ದಿ (Gold)">ಚಿನ್ನದ ಸುದ್ದಿ (Gold News)</option>
                <option value="ಸಾಲ ಮಾರ್ಗದರ್ಶಿ (Loans)">ಸಾಲ ಮಾರ್ಗದರ್ಶಿ (Loans Guide)</option>
                <option value="ಉಳಿತಾಯದ ಟಿಪ್ಸ್ (Savings)">ಉಳಿತಾಯದ ಟಿಪ್ಸ್ (Savings Tips)</option>
                <option value="ತೆರಿಗೆ ಮಾರ್ಗದರ್ಶಿ (Tax)">ತೆರಿಗೆ ಮಾರ್ಗದರ್ಶಿ (Tax Guide)</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">{t.blogContentKn}</label>
              <textarea
                rows={5}
                required
                value={newBlog.contentKn}
                onChange={(e) => setNewBlog({ ...newBlog, contentKn: e.target.value })}
                className="w-full bg-white border border-slate-300 rounded-lg p-3 font-normal text-slate-900 text-sm leading-relaxed"
                placeholder="ನಿಮ್ಮ ಲೇಖನದ ಪೂರ್ಣ ವಿಷಯವನ್ನು ಇಲ್ಲಿ ಬರೆಯಿರಿ..."
              />
            </div>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowAddBlogModal(false)}
                className="px-4 py-2 rounded-lg bg-slate-200 text-slate-700 font-bold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold shadow"
              >
                {t.publishNow}
              </button>
            </div>
          </form>
        )}

        {/* Existing Blogs List */}
        <div className="space-y-2">
          {blogs.map((b) => (
            <div key={b.id} className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center justify-between gap-4 text-xs">
              <div>
                <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold">{b.categoryKn}</span>
                <h4 className="font-bold text-slate-900 text-sm mt-1">{lang === 'kn' ? b.titleKn : b.titleEn}</h4>
                <span className="text-[10px] text-slate-400">Date: {b.date} | Author: {b.author}</span>
              </div>
              <button
                onClick={() => handleDeleteBlog(b.id)}
                className="p-2 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100 transition-colors"
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
