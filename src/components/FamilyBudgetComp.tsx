"use client";

import React, { useState, useMemo } from 'react';
import { useLanguage } from './LanguageContext';
import {
  Sparkles, Download, Share2, Wallet, TrendingUp, TrendingDown,
  ShieldCheck, AlertTriangle, CheckCircle2, PieChart, DollarSign,
  Home, ShoppingBag, Zap, GraduationCap, Car, HeartPulse,
  CreditCard, Coffee, Plus, RefreshCw, Award, Info
} from 'lucide-react';
import { FamilyBudget3D } from './LiveAppIcons3D';

interface ExpenseItem {
  id: string;
  nameKn: string;
  nameEn: string;
  amount: number;
  category: 'needs' | 'wants' | 'savings';
  icon: string;
}

export const FamilyBudgetComp: React.FC = () => {
  const { lang } = useLanguage();

  // Family & Period Info
  const [familyName, setFamilyName] = useState<string>('ರಮೇಶ್ ಕುಮಾರ್ & ಕುಟುಂಬ');
  const [selectedMonth, setSelectedMonth] = useState<string>('ಸೆಪ್ಟೆಂಬರ್ ೨೦೨೬');

  // Income details
  const [primaryIncome, setPrimaryIncome] = useState<number>(35000);
  const [secondaryIncome, setSecondaryIncome] = useState<number>(10000);

  // Expense Items
  const [expenses, setExpenses] = useState<ExpenseItem[]>([
    { id: 'rent', nameKn: 'ಮನೆ ಬಾಡಿಗೆ / ಹೋಮ್ ಲೋನ್ EMI', nameEn: 'House Rent / EMI', amount: 9000, category: 'needs', icon: '🏠' },
    { id: 'groceries', nameKn: 'ದಿನಸಿ ಅಂಗಡಿ, ಹಾಲು & ಸಂತೆ ತರಕಾರಿ', nameEn: 'Groceries, Milk & Veggies', amount: 8500, category: 'needs', icon: '🛍️' },
    { id: 'bills', nameKn: 'ಕರೆಂಟ್, ಗ್ಯಾಸ್ ಸಿಲಿಂಡರ್ & ನೀರು', nameEn: 'Electricity, LPG & Water Bills', amount: 2200, category: 'needs', icon: '⚡' },
    { id: 'education', nameKn: 'ಮಕ್ಕಳ ಶಾಲಾ ಶುಲ್ಕ, ವ್ಯಾನ್ & ಪುಸ್ತಕ', nameEn: 'School Fees & Books', amount: 4500, category: 'needs', icon: '🎓' },
    { id: 'travel', nameKn: 'ಬೈಕ್/ಕಾರು ಪೆಟ್ರೋಲ್ & ಬಸ್ ಪಾಸ್', nameEn: 'Petrol & Travel', amount: 3000, category: 'needs', icon: '🚗' },
    { id: 'medical', nameKn: 'ಮಾಸಿಕ ಮಾತ್ರೆಗಳು & ಮೆಡಿಕಲ್', nameEn: 'Medicines & Health', amount: 1500, category: 'needs', icon: '💊' },
    { id: 'loans', nameKn: 'ಇತರ ಸಾಲ / ಚಿಟ್ ಫಂಡ್ (Chit Fund)', nameEn: 'Loan EMI / Chit Fund', amount: 3500, category: 'needs', icon: '💳' },
    { id: 'lifestyle', nameKn: 'ಹೋಟೆಲ್ ಊಟ, ಸಿನಿಮಾ & ತಿಂಡಿ-ತಿನಿಸು', nameEn: 'Dining Out & Entertainment', amount: 2800, category: 'wants', icon: '☕' },
  ]);

  // Update item amount
  const handleAmountChange = (id: string, newAmount: number) => {
    setExpenses(prev => prev.map(item => item.id === id ? { ...item, amount: Math.max(0, newAmount || 0) } : item));
  };

  // Preset Incomes
  const applyPreset = (salary: number, extra: number, label: string) => {
    setPrimaryIncome(salary);
    setSecondaryIncome(extra);
  };

  // 🧮 FINANCIAL BUDGET CALCULATIONS (50-30-20 RULE)
  const budgetSummary = useMemo(() => {
    const totalIncome = primaryIncome + secondaryIncome;
    
    let totalNeeds = 0;
    let totalWants = 0;

    expenses.forEach(item => {
      if (item.category === 'needs') totalNeeds += item.amount;
      else if (item.category === 'wants') totalWants += item.amount;
    });

    const totalExpense = totalNeeds + totalWants;
    const totalSavings = Math.max(0, totalIncome - totalExpense);
    const isDeficit = totalExpense > totalIncome;
    const deficitAmount = isDeficit ? totalExpense - totalIncome : 0;

    const needsPct = totalIncome > 0 ? Math.round((totalNeeds / totalIncome) * 100) : 0;
    const wantsPct = totalIncome > 0 ? Math.round((totalWants / totalIncome) * 100) : 0;
    const savingsPct = totalIncome > 0 ? Math.round((totalSavings / totalIncome) * 100) : 0;

    // Health Score
    let healthScore = '⭐⭐⭐⭐⭐ ಅತ್ಯುತ್ತಮ ಉಳಿತಾಯ (Excellent)';
    let healthColor = 'text-emerald-600';
    let healthBg = 'bg-emerald-50 border-emerald-200';
    let tip = 'ತುಂಬಾ ಒಳ್ಳೆಯ ಬಜೆಟ್! ನಿಮ್ಮ ಆದಾಯದಲ್ಲಿ 20%+ ಉಳಿತಾಯವಾಗುತ್ತಿದೆ. ಈ ಹಣವನ್ನು RD ಅಥವಾ ಚಿನ್ನದ ಯೋಜನೆಯಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡಿ.';

    if (isDeficit) {
      healthScore = '⚠️ ಸಾಲದ ಅಪಾಯ (Over-Budget Alert)';
      healthColor = 'text-rose-600';
      healthBg = 'bg-rose-50 border-rose-200';
      tip = 'ಎಚ್ಚರಿಕೆ: ನಿಮ್ಮ ಆದಾಯಕ್ಕಿಂತ ₹' + deficitAmount.toLocaleString('en-IN') + ' ಖರ್ಚು ಹೆಚ್ಚಾಗಿದೆ! ಹೋಟೆಲ್ ಹಾಗೂ ಮನರಂಜನೆ ವೆಚ್ಚಗಳನ್ನು ತಕ್ಷಣ ಕಡಿಮೆ ಮಾಡಿ.';
    } else if (savingsPct < 10) {
      healthScore = '⚠️ ಕಡಿಮೆ ಉಳಿತಾಯ (Needs Improvement)';
      healthColor = 'text-amber-600';
      healthBg = 'bg-amber-50 border-amber-200';
      tip = 'ನಿಮ್ಮ ಉಳಿತಾಯ 10% ಕ್ಕಿಂತ ಕಡಿಮೆಯಿದೆ. ತುರ್ತು ನಿಧಿಗಾಗಿ ಕನಿಷ್ಠ 15-20% ಉಳಿಸಲು ಪ್ರಯತ್ನಿಸಿ.';
    } else if (savingsPct < 20) {
      healthScore = '⭐⭐⭐⭐ ಮಧ್ಯಮ ಉಳಿತಾಯ (Good)';
      healthColor = 'text-blue-600';
      healthBg = 'bg-blue-50 border-blue-200';
      tip = 'ಬಜೆಟ್ ಉತ್ತಮವಾಗಿದೆ. ಇನ್ನೂ ಸ್ವಲ್ಪ ಅನಗತ್ಯ ಖರ್ಚುಗಳನ್ನು ನಿಯಂತ್ರಿಸಿದರೆ 25% ವರೆಗೆ ಉಳಿಸಬಹುದು.';
    }

    return {
      totalIncome,
      totalNeeds,
      totalWants,
      totalExpense,
      totalSavings,
      isDeficit,
      deficitAmount,
      needsPct,
      wantsPct,
      savingsPct,
      healthScore,
      healthColor,
      healthBg,
      tip,
    };
  }, [primaryIncome, secondaryIncome, expenses]);

  // 🎨 CANVAS GENERATOR FOR ULTRA-HD MONTHLY BUDGET SHEET (1000px x 1450px)
  const generateCanvas = (): HTMLCanvasElement => {
    const canvas = document.createElement('canvas');
    canvas.width = 1000;
    canvas.height = 1450;
    const ctx = canvas.getContext('2d');
    if (!ctx) return canvas;

    // Background Gradient Rich Cream / Emerald Tint
    const bgGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    bgGrad.addColorStop(0, '#f0fdf4');
    bgGrad.addColorStop(0.5, '#ffffff');
    bgGrad.addColorStop(1, '#ecfdf5');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Ornate Royal Emerald & Gold Double Border
    ctx.strokeStyle = '#047857';
    ctx.lineWidth = 10;
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 3;
    ctx.strokeRect(32, 32, canvas.width - 64, canvas.height - 64);

    // Top Header Banner
    const headerGrad = ctx.createLinearGradient(40, 40, canvas.width - 80, 130);
    headerGrad.addColorStop(0, '#064e3b');
    headerGrad.addColorStop(0.5, '#047857');
    headerGrad.addColorStop(1, '#065f46');
    ctx.fillStyle = headerGrad;
    ctx.fillRect(40, 40, canvas.width - 80, 120);

    // Header Titles
    ctx.fillStyle = '#fef08a';
    ctx.font = 'bold 20px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('|| ಶ್ರೀ ಮಹಾಲಕ್ಷ್ಮಿ ಕೃಪಾಕಟಾಕ್ಷ ||', canvas.width / 2, 75);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 32px sans-serif';
    ctx.fillText('ಕುಟುಂಬದ ಮಾಸಿಕ ಮನೆ ಖರ್ಚು & ಉಳಿತಾಯ ಪತ್ರ', canvas.width / 2, 118);

    ctx.fillStyle = '#a7f3d0';
    ctx.font = 'bold 16px sans-serif';
    ctx.fillText(`ಕುಟುಂಬ: ${familyName} • ಮಾಹೆ: ${selectedMonth}`, canvas.width / 2, 145);

    // 3 Big Summary Stat Cards (Income, Expense, Savings)
    let y = 185;
    const cardW = (canvas.width - 110) / 3;

    // Card 1: Total Income
    ctx.fillStyle = '#ecfdf5';
    ctx.fillRect(45, y, cardW, 90);
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2;
    ctx.strokeRect(45, y, cardW, 90);

    ctx.fillStyle = '#065f46';
    ctx.font = 'bold 15px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('ಒಟ್ಟು ಮಾಸಿಕ ಆದಾಯ (Income)', 45 + cardW / 2, y + 30);
    ctx.fillStyle = '#047857';
    ctx.font = '900 24px sans-serif';
    ctx.fillText(`₹ ${budgetSummary.totalIncome.toLocaleString('en-IN')}`, 45 + cardW / 2, y + 68);

    // Card 2: Total Expense
    ctx.fillStyle = '#fff1f2';
    ctx.fillRect(45 + cardW + 10, y, cardW, 90);
    ctx.strokeStyle = '#f43f5e';
    ctx.strokeRect(45 + cardW + 10, y, cardW, 90);

    ctx.fillStyle = '#881337';
    ctx.font = 'bold 15px sans-serif';
    ctx.fillText('ಒಟ್ಟು ಮಾಸಿಕ ಖರ್ಚು (Expense)', 45 + cardW + 10 + cardW / 2, y + 30);
    ctx.fillStyle = '#be123c';
    ctx.font = '900 24px sans-serif';
    ctx.fillText(`₹ ${budgetSummary.totalExpense.toLocaleString('en-IN')}`, 45 + cardW + 10 + cardW / 2, y + 68);

    // Card 3: Net Savings
    ctx.fillStyle = budgetSummary.isDeficit ? '#fef2f2' : '#eff6ff';
    ctx.fillRect(45 + (cardW + 10) * 2, y, cardW, 90);
    ctx.strokeStyle = budgetSummary.isDeficit ? '#ef4444' : '#3b82f6';
    ctx.strokeRect(45 + (cardW + 10) * 2, y, cardW, 90);

    ctx.fillStyle = budgetSummary.isDeficit ? '#991b1b' : '#1e3a8a';
    ctx.font = 'bold 15px sans-serif';
    ctx.fillText(budgetSummary.isDeficit ? 'ಕೊರತೆ / ಸಾಲ (Deficit)' : 'ನಿವ್ವಳ ಉಳಿತಾಯ (Savings)', 45 + (cardW + 10) * 2 + cardW / 2, y + 30);
    ctx.fillStyle = budgetSummary.isDeficit ? '#dc2626' : '#1d4ed8';
    ctx.font = '900 24px sans-serif';
    ctx.fillText(budgetSummary.isDeficit ? `- ₹ ${budgetSummary.deficitAmount.toLocaleString('en-IN')}` : `+ ₹ ${budgetSummary.totalSavings.toLocaleString('en-IN')}`, 45 + (cardW + 10) * 2 + cardW / 2, y + 68);

    // 50-30-20 Visual Gauge Bar
    y += 115;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(45, y, canvas.width - 90, 75);
    ctx.strokeStyle = '#cbd5e1';
    ctx.strokeRect(45, y, canvas.width - 90, 75);

    ctx.textAlign = 'left';
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 15px sans-serif';
    ctx.fillText('ಆದಾಯ ಹಂಚಿಕೆ ಅನುಪಾತ (50-30-20 Budget Balance):', 60, y + 26);

    ctx.textAlign = 'right';
    ctx.fillStyle = '#047857';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText(`ಉಳಿತಾಯ ದರ: ${budgetSummary.savingsPct}%`, canvas.width - 60, y + 26);

    // Multi-color segmented bar
    const barW = canvas.width - 120;
    const barH = 22;
    const barY = y + 38;

    const nW = Math.round((budgetSummary.needsPct / 100) * barW);
    const wW = Math.round((budgetSummary.wantsPct / 100) * barW);
    const sW = Math.max(0, barW - nW - wW);

    ctx.fillStyle = '#059669'; // Needs green
    ctx.fillRect(60, barY, nW, barH);

    ctx.fillStyle = '#f59e0b'; // Wants amber
    ctx.fillRect(60 + nW, barY, wW, barH);

    ctx.fillStyle = '#3b82f6'; // Savings blue
    ctx.fillRect(60 + nW + wW, barY, sW, barH);

    // Expense Table Header
    y += 105;
    ctx.fillStyle = '#047857';
    ctx.fillRect(45, y, canvas.width - 90, 38);

    ctx.textAlign = 'left';
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 15px sans-serif';
    ctx.fillText('ಕ್ರ.ಸಂ.', 65, y + 25);
    ctx.fillText('ಮನೆ ಖರ್ಚಿನ ವಿವರ (Expense Category)', 140, y + 25);
    ctx.fillText('ವರ್ಗ (Category)', 620, y + 25);
    ctx.fillText('ಖರ್ಚಿನ ಮೊತ್ತ (₹)', 800, y + 25);

    y += 38;
    expenses.forEach((item, idx) => {
      ctx.fillStyle = idx % 2 === 0 ? '#ffffff' : '#f8fafc';
      ctx.fillRect(45, y, canvas.width - 90, 38);
      ctx.strokeStyle = '#e2e8f0';
      ctx.strokeRect(45, y, canvas.width - 90, 38);

      ctx.fillStyle = '#64748b';
      ctx.font = 'bold 14px sans-serif';
      ctx.fillText(`${idx + 1}`, 65, y + 25);

      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 15px sans-serif';
      ctx.fillText(`${item.icon} ${item.nameKn}`, 140, y + 25);

      ctx.fillStyle = item.category === 'needs' ? '#047857' : '#d97706';
      ctx.font = 'bold 13px sans-serif';
      ctx.fillText(item.category === 'needs' ? 'ಮೂಲ ಅಗತ್ಯ (Needs)' : 'ಆಸೆ/ಮನರಂಜನೆ (Wants)', 620, y + 25);

      ctx.fillStyle = '#0f172a';
      ctx.font = '900 15px sans-serif';
      ctx.fillText(`₹ ${item.amount.toLocaleString('en-IN')}`, 800, y + 25);

      y += 38;
    });

    // Total Row
    ctx.fillStyle = '#047857';
    ctx.fillRect(45, y, canvas.width - 90, 46);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 17px sans-serif';
    ctx.fillText('ಒಟ್ಟು ಮಾಸಿಕ ಖರ್ಚು (Total Household Expenses):', 65, y + 30);
    ctx.fillText(`₹ ${budgetSummary.totalExpense.toLocaleString('en-IN')} /-`, 770, y + 30);

    // Financial Health & Advice Box
    y += 65;
    ctx.fillStyle = '#f0fdf4';
    ctx.fillRect(45, y, canvas.width - 90, 90);
    ctx.strokeStyle = '#86efac';
    ctx.strokeRect(45, y, canvas.width - 90, 90);

    ctx.fillStyle = '#166534';
    ctx.font = 'bold 15px sans-serif';
    ctx.fillText(`ಆರ್ಥಿಕ ಆರೋಗ್ಯ ಶ್ರೇಣಿ: ${budgetSummary.healthScore}`, 65, y + 30);

    ctx.fillStyle = '#334155';
    ctx.font = '13.5px sans-serif';
    ctx.fillText(`💡 ಸಲಹೆ: ${budgetSummary.tip}`, 65, y + 62);

    // Signatures & Official Branding
    y += 120;
    ctx.fillStyle = '#64748b';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText('ಕುಟುಂಬದ ಮುಖ್ಯಸ್ಥರ ಸಹಿ: _____________________', 65, y);
    ctx.fillText('ದಿನಾಂಕ: _______________', 720, y);

    y += 45;
    ctx.textAlign = 'center';
    ctx.fillStyle = '#047857';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText('✨ ಮಾಹಿತಿ ಚಕ್ರ ಕುಟುಂಬ ಮಾಸಿಕ ಬಜೆಟ್ ಪ್ಲಾನರ್ (Mahiti Chakra App) • All Rights Reserved ✨', canvas.width / 2, y);

    return canvas;
  };

  // 1-Click Download Ultra-HD Image
  const downloadBudgetSheetImage = () => {
    const canvas = generateCanvas();
    const link = document.createElement('a');
    link.download = `kannada-family-monthly-budget-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  // 💬 WhatsApp Share with Image & Website Link
  const shareToWhatsApp = async () => {
    const canvas = generateCanvas();
    const siteUrl = typeof window !== 'undefined' ? `${window.location.origin}/budget-planner` : 'https://mahitichakra.com/budget-planner';

    const shareText = `🧾 *ಕುಟುಂಬದ ಮಾಸಿಕ ಮನೆ ಖರ್ಚು & ಉಳಿತಾಯ ಪತ್ರ*\n|| ಶ್ರೀ ಮಹಾಲಕ್ಷ್ಮಿ ಪ್ರಸನ್ನ ||\n\n` +
      `👤 ಕುಟುಂಬ: *${familyName}*\n` +
      `🗓️ ಮಾಹೆ: *${selectedMonth}*\n` +
      `--------------------------------\n` +
      `💰 ಒಟ್ಟು ಮಾಸಿಕ ಆದಾಯ: *₹ ${budgetSummary.totalIncome.toLocaleString('en-IN')}*\n` +
      `💸 ಒಟ್ಟು ಮಾಸಿಕ ಖರ್ಚು: *₹ ${budgetSummary.totalExpense.toLocaleString('en-IN')}*\n` +
      `💎 ನಿವ್ವಳ ಉಳಿತಾಯ: *₹ ${budgetSummary.totalSavings.toLocaleString('en-IN')} (${budgetSummary.savingsPct}%)*\n` +
      `🏆 ಆರ್ಥಿಕ ಶ್ರೇಣಿ: *${budgetSummary.healthScore}*\n` +
      `--------------------------------\n` +
      `🌐 *ನೀವು ನಿಮ್ಮ ಮನೆ ಖರ್ಚು ಲೆಕ್ಕ ಹಾಕಿ HD ಬಜೆಟ್ ಪತ್ರ ಪಡೆಯಲು ಭೇಟಿ ನೀಡಿ:*\n👉 ${siteUrl}`;

    canvas.toBlob(async (blob) => {
      if (blob && navigator.share && navigator.canShare) {
        const file = new File([blob], `monthly-budget-${Date.now()}.png`, { type: 'image/png' });
        if (navigator.canShare({ files: [file] })) {
          try {
            await navigator.share({
              files: [file],
              title: 'ಕುಟುಂಬ ಮಾಸಿಕ ಬಜೆಟ್ ಪತ್ರ',
              text: shareText,
            });
            return;
          } catch (err) {
            console.log('Share canceled or fallback', err);
          }
        }
      }

      downloadBudgetSheetImage();
      const encoded = encodeURIComponent(shareText);
      window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
    }, 'image/png');
  };

  return (
    <div className="space-y-6">
      
      {/* 🌟 HERO HEADER BANNER */}
      <div className="bg-gradient-to-r from-emerald-950 via-teal-900 to-green-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl border-2 border-emerald-400/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="flex items-center gap-4 relative z-10">
          <div className="shrink-0 filter drop-shadow-md">
            <FamilyBudget3D className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase bg-emerald-400 text-slate-950 px-2.5 py-0.5 rounded-full shadow-xs">
              <Sparkles className="w-3 h-3" /> 100% SCIENTIFIC 50-30-20 KARNATAKA FAMILY BUDGET PLANNER
            </span>
            <h1 className="text-xl sm:text-3xl font-black tracking-tight text-white">
              {lang === 'kn' ? '🧾 ಕುಟುಂಬದ ಮನೆ ಖರ್ಚು, ಉಳಿತಾಯ & ಮಾಸಿಕ ಬಜೆಟ್ ಪ್ಲಾನರ್' : '🧾 Household Monthly Expense & Budget Planner'}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-emerald-200">
              {lang === 'kn'
                ? 'ಸಂಬಳ, ದಿನಸಿ, ಬಾಡಿಗೆ, ಕರೆಂಟ್, ಮಕ್ಕಳ ಫೀಸ್ & ಸಾಲದ ನಿಖರ ಲೆಕ್ಕ ಹಾಕಿ ಉಳಿತಾಯ ಹೆಚ್ಚಿಸಿಕೊಳ್ಳಿ!'
                : 'Plan family income, groceries, rent, utility bills, school fees & maximize monthly savings!'}
            </p>
          </div>
        </div>

        <button
          onClick={downloadBudgetSheetImage}
          className="bg-emerald-400 hover:bg-emerald-500 text-slate-950 py-3.5 px-6 rounded-2xl font-black text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center gap-2 shrink-0 self-stretch md:self-auto justify-center"
        >
          <Download className="w-5 h-5 text-slate-950" />
          <span>HD ಬಜೆಟ್ ಪತ್ರ ಡೌನ್‌ಲೋಡ್</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* 🔮 2-COLUMN WORKSPACE: LEFT INCOME & EXPENSES + RIGHT ANALYSIS & REPORT */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT COLUMN: INCOME & HOUSEHOLD EXPENSE INPUTS (6 Cols) */}
        <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200 shadow-sm p-5 sm:p-7 space-y-5">
          
          {/* FAMILY INFO & MONTH */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-600 block">ಕುಟುಂಬ / ಮುಖ್ಯಸ್ಥರ ಹೆಸರು:</label>
              <input
                type="text"
                value={familyName}
                onChange={(e) => setFamilyName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-bold text-slate-900"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-600 block">ಮಾಹೆ / ತಿಂಗಳು:</label>
              <input
                type="text"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-bold text-slate-900"
              />
            </div>
          </div>

          {/* INCOME SECTION */}
          <div className="space-y-3 bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200">
            <h3 className="text-xs font-black text-emerald-950 flex items-center gap-1.5">
              <Wallet className="w-4 h-4 text-emerald-700" />
              <span>ಕುಟುಂಬದ ಮಾಸಿಕ ಆದಾಯ (Monthly Income):</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-600 block">ಮುಖ್ಯ ಸಂಬಳ / ವ್ಯಾಪಾರ (₹):</label>
                <input
                  type="number"
                  value={primaryIncome || ''}
                  onChange={(e) => setPrimaryIncome(Number(e.target.value) || 0)}
                  className="w-full bg-white border border-emerald-300 rounded-xl p-2.5 text-sm font-black text-slate-900 shadow-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-600 block">ಇತರ / ಕೃಷಿ / ಬಾಡಿಗೆ ಆದಾಯ (₹):</label>
                <input
                  type="number"
                  value={secondaryIncome || ''}
                  onChange={(e) => setSecondaryIncome(Number(e.target.value) || 0)}
                  className="w-full bg-white border border-emerald-300 rounded-xl p-2.5 text-sm font-black text-slate-900 shadow-xs"
                />
              </div>
            </div>

            {/* Quick Salary Chips */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="text-[10px] font-bold text-slate-500 self-center">ತ್ವರಿತ ಆದಾಯ:</span>
              {[
                { s: 25000, e: 5000, l: '₹30,000' },
                { s: 40000, e: 10000, l: '₹50,000' },
                { s: 65000, e: 15000, l: '₹80,000' },
                { s: 100000, e: 20000, l: '₹1.2 ಲಕ್ಷ' },
              ].map((chip, i) => (
                <button
                  key={i}
                  onClick={() => applyPreset(chip.s, chip.e, chip.l)}
                  className="py-1 px-2.5 rounded-lg text-[10px] font-bold bg-white text-emerald-800 border border-emerald-300 hover:bg-emerald-100 transition-all"
                >
                  {chip.l}
                </button>
              ))}
            </div>
          </div>

          {/* EXPENSES INPUT LIST */}
          <div className="space-y-2 border-t border-slate-100 pt-3">
            <h3 className="text-xs font-black text-slate-900 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <ShoppingBag className="w-4 h-4 text-emerald-700" />
                <span>ಮಾಸಿಕ ಮನೆ ಖರ್ಚುಗಳ ವಿವರ (Household Expenses):</span>
              </span>
              <span className="text-[11px] font-bold text-slate-500">
                ಒಟ್ಟು {expenses.length} ಐಟಂಗಳು
              </span>
            </h3>

            <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1 custom-scrollbar">
              {expenses.map((item) => (
                <div
                  key={item.id}
                  className="p-3 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-slate-50 flex items-center justify-between gap-3 transition-all"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="text-xl shrink-0">{item.icon}</span>
                    <div>
                      <strong className="text-xs text-slate-900 block truncate">{item.nameKn}</strong>
                      <span className="text-[10px] text-slate-500 font-semibold">{item.nameEn}</span>
                    </div>
                  </div>

                  <div className="w-32 shrink-0">
                    <div className="relative">
                      <span className="absolute left-2.5 top-2 text-xs font-bold text-slate-400">₹</span>
                      <input
                        type="number"
                        value={item.amount || ''}
                        onChange={(e) => handleAmountChange(item.id, Number(e.target.value))}
                        className="w-full bg-white border border-slate-300 rounded-xl pl-6 pr-2 py-1.5 text-xs font-black text-slate-900 text-right shadow-xs"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: FINANCIAL ANALYSIS & BUDGET CARD (6 Cols) */}
        <div className="lg:col-span-6 space-y-4">
          
          {/* 3 SUMMARY STAT TILES */}
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-2xl">
              <span className="text-[10px] font-bold text-emerald-800 block">ಒಟ್ಟು ಆದಾಯ</span>
              <strong className="text-sm sm:text-base font-black text-emerald-950 block">
                ₹{budgetSummary.totalIncome.toLocaleString('en-IN')}
              </strong>
            </div>

            <div className="bg-rose-50 border border-rose-200 p-3.5 rounded-2xl">
              <span className="text-[10px] font-bold text-rose-800 block">ಒಟ್ಟು ಖರ್ಚು</span>
              <strong className="text-sm sm:text-base font-black text-rose-950 block">
                ₹{budgetSummary.totalExpense.toLocaleString('en-IN')}
              </strong>
            </div>

            <div className={`p-3.5 rounded-2xl border ${budgetSummary.isDeficit ? 'bg-red-100 border-red-300' : 'bg-blue-50 border-blue-200'}`}>
              <span className="text-[10px] font-bold text-slate-700 block">{budgetSummary.isDeficit ? 'ಸಾಲ / ಕೊರತೆ' : 'ಉಳಿತಾಯ'}</span>
              <strong className={`text-sm sm:text-base font-black block ${budgetSummary.isDeficit ? 'text-rose-700' : 'text-blue-900'}`}>
                {budgetSummary.isDeficit ? `- ₹${budgetSummary.deficitAmount.toLocaleString('en-IN')}` : `+ ₹${budgetSummary.totalSavings.toLocaleString('en-IN')}`}
              </strong>
            </div>
          </div>

          {/* 50-30-20 VISUAL GAUGE & HEALTH STATUS */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-5 space-y-4">
            
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs font-black">
                <span className="text-slate-900">50-30-20 ಬಜೆಟ್ ಸಮತೋಲನ (Budget Ratio):</span>
                <span className="text-emerald-700">ಉಳಿತಾಯ: {budgetSummary.savingsPct}%</span>
              </div>

              {/* Progress Multi-Bar */}
              <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden flex">
                <div style={{ width: `${budgetSummary.needsPct}%` }} className="bg-emerald-600" title={`Needs: ${budgetSummary.needsPct}%`} />
                <div style={{ width: `${budgetSummary.wantsPct}%` }} className="bg-amber-500" title={`Wants: ${budgetSummary.wantsPct}%`} />
                <div style={{ width: `${budgetSummary.savingsPct}%` }} className="bg-blue-600" title={`Savings: ${budgetSummary.savingsPct}%`} />
              </div>

              <div className="flex justify-between text-[10px] font-bold text-slate-500 pt-1">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-600" /> ಅಗತ್ಯ (Needs): {budgetSummary.needsPct}%</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500" /> ಮನರಂಜನೆ (Wants): {budgetSummary.wantsPct}%</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-600" /> ಉಳಿತಾಯ (Savings): {budgetSummary.savingsPct}%</span>
              </div>
            </div>

            {/* Health Score & Tip Box */}
            <div className={`p-4 rounded-2xl border space-y-1.5 ${budgetSummary.healthBg}`}>
              <div className="flex items-center justify-between">
                <strong className={`text-xs font-black ${budgetSummary.healthColor}`}>
                  {budgetSummary.healthScore}
                </strong>
                <Award className={`w-4 h-4 ${budgetSummary.healthColor}`} />
              </div>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                {budgetSummary.tip}
              </p>
            </div>

          </div>

          {/* ACTION BUTTONS (DOWNLOAD & WHATSAPP) */}
          <div className="space-y-2 pt-1">
            <button
              onClick={downloadBudgetSheetImage}
              className="w-full py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5 text-white" />
              <span>📸 Ultra-HD ಮಾಸಿಕ ಬಜೆಟ್ ಪತ್ರ ಡೌನ್‌ಲೋಡ್ (PNG)</span>
            </button>

            <button
              onClick={shareToWhatsApp}
              className="w-full py-3 px-4 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-black text-xs shadow-sm transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              <span>WhatsApp ನಲ್ಲಿ ಕುಟುಂಬ ಬಜೆಟ್ ಪತ್ರ ಶೇರ್ ಮಾಡಿ</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
