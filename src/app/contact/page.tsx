"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/components/LanguageContext';
import { Mail, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const { t, lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-6">
      <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
        <Mail className="w-8 h-8 text-amber-500" />
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{t.contactUs}</h1>
          <p className="text-xs text-slate-500">Have questions or feedback? Get in touch with our team</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Your Name</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 font-medium text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Your Email Address</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 font-medium text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
              placeholder="name@example.com"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Message</label>
            <textarea
              rows={4}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 font-medium text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
              placeholder="Type your message or inquiry here..."
            />
          </div>

          {submitted && (
            <div className="bg-emerald-50 text-emerald-800 border border-emerald-200 p-3.5 rounded-xl font-bold flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Thank you! Your message has been sent successfully.</span>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Send Message</span>
          </button>
        </form>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4 text-xs">
          <h3 className="font-bold text-slate-900 text-sm">Contact Information</h3>
          <p className="text-slate-600 leading-relaxed">
            For business inquiries, advertising partnerships, or technical support regarding our web calculators and rates engine, please fill out the form or write to us.
          </p>
          <div className="space-y-2 pt-2">
            <div className="bg-white p-3 rounded-xl border border-slate-200">
              <span className="text-slate-400 block text-[10px]">Email Address</span>
              <span className="font-bold text-slate-800">support@karnatakarates.com</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-200">
              <span className="text-slate-400 block text-[10px]">Office Location</span>
              <span className="font-bold text-slate-800">Bengaluru, Karnataka, India</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
