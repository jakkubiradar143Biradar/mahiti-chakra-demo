"use client";

import React, { useState, useMemo } from 'react';
import { useLanguage } from './LanguageContext';
import {
  Coins, Calculator, Calendar, Download, Share2, Printer,
  Sparkles, CheckCircle2, Award, Clock, ArrowRight, User,
  FileSpreadsheet, ShieldCheck, RefreshCw, FileText
} from 'lucide-react';
import { VillageBaddi3D } from './LiveAppIcons3D';

export const GramaBaddiComp: React.FC = () => {
  const { lang } = useLanguage();

  // State
  const [principal, setPrincipal] = useState<number>(50000);
  const [ratePerHundred, setRatePerHundred] = useState<number>(2); // ₹2 per ₹100 per month
  const [interestType, setInterestType] = useState<'simple' | 'compound'>('simple');
  const [compoundFrequency, setCompoundFrequency] = useState<'yearly' | 'half-yearly'>('yearly');

  // Dates
  const getOneYearAgoDate = () => {
    const d = new Date();
    d.setFullYear(d.getFullYear() - 1);
    return d.toISOString().split('T')[0];
  };

  const getTodayDate = () => {
    return new Date().toISOString().split('T')[0];
  };

  const [startDate, setStartDate] = useState<string>(getOneYearAgoDate());
  const [endDate, setEndDate] = useState<string>(getTodayDate());

  // Names (Optional)
  const [borrowerName, setBorrowerName] = useState<string>('ರಮೇಶ್ ಕುಮಾರ್ (ಸಾಲಗಾರ)');
  const [lenderName, setLenderName] = useState<string>('ಸುರೇಶ್ ಗೌಡ (ಸಾಲದಾತ)');
  const [note, setNote] = useState<string>('ಕೃಷಿ ಕೆಲಸಕ್ಕಾಗಿ ಕೈಸಾಲ');

  // Calculation Logic
  const calcResults = useMemo(() => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (isNaN(start.getTime()) || isNaN(end.getTime()) || end < start) {
      return {
        years: 0,
        months: 0,
        days: 0,
        totalDays: 0,
        monthlyInterest: 0,
        totalInterest: 0,
        totalAmount: principal,
        exactDurationText: 'ದಿನಾಂಕ ಸರಿಯಾಗಿ ನಮೂದಿಸಿ',
      };
    }

    // Exact Year, Month, Day difference
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    if (days < 0) {
      months -= 1;
      // Get days in previous month
      const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    const totalMonthsExact = years * 12 + months + days / 30;
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const monthlyInterestRate = ratePerHundred / 100;
    const monthlyInterest = principal * monthlyInterestRate;

    let totalInterest = 0;
    let totalAmount = 0;

    if (interestType === 'simple') {
      totalInterest = monthlyInterest * totalMonthsExact;
      totalAmount = principal + totalInterest;
    } else {
      // Compound Interest
      const annualRate = (ratePerHundred * 12) / 100;
      const n = compoundFrequency === 'yearly' ? 1 : 2; // compound times per year
      const t = totalMonthsExact / 12;
      totalAmount = principal * Math.pow(1 + annualRate / n, n * t);
      totalInterest = totalAmount - principal;
    }

    let exactDurationText = '';
    if (years > 0) exactDurationText += `${years} ವರ್ಷ `;
    if (months > 0) exactDurationText += `${months} ತಿಂಗಳು `;
    if (days > 0 || (years === 0 && months === 0)) exactDurationText += `${days} ದಿನಗಳು`;

    return {
      years,
      months,
      days,
      totalDays,
      monthlyInterest,
      totalInterest: Math.round(totalInterest),
      totalAmount: Math.round(totalAmount),
      exactDurationText: exactDurationText.trim(),
    };
  }, [principal, ratePerHundred, interestType, compoundFrequency, startDate, endDate]);

  // Convert Number to Kannada Words
  const numberToKannadaWords = (num: number): string => {
    if (num <= 0) return 'ಶೂನ್ಯ';
    const units = ['', 'ಒಂದು', 'ಎರಡು', 'ಮೂರು', 'ನಾಲ್ಕು', 'ಐದು', 'ಆರು', 'ಏಳು', 'ಎಂಟು', 'ಒಂಬತ್ತು'];
    const tens = ['', 'ಹತ್ತು', 'ಇಪ್ಪತ್ತು', 'ಮೂವತ್ತು', 'ನಲವತ್ತು', 'ಐವತ್ತು', 'ಅರವತ್ತು', 'ಎಪ್ಪತ್ತು', 'ಎಂಬತ್ತು', 'ತೊಂಬತ್ತು'];
    
    if (num >= 100000) {
      const lakhs = Math.floor(num / 100000);
      const rem = num % 100000;
      return `${lakhs} ಲಕ್ಷ ${rem > 0 ? numberToKannadaWords(rem) : ''}`.trim() + ' ರೂಪಾಯಿಗಳು';
    }
    if (num >= 1000) {
      const thousands = Math.floor(num / 1000);
      const rem = num % 1000;
      return `${thousands} ಸಾವಿರ ${rem > 0 ? numberToKannadaWords(rem) : ''}`.trim() + ' ರೂಪಾಯಿಗಳು';
    }
    if (num >= 100) {
      const hundreds = Math.floor(num / 100);
      const rem = num % 100;
      return `${hundreds} ನೂರು ${rem > 0 ? numberToKannadaWords(rem) : ''}`.trim() + ' ರೂಪಾಯಿಗಳು';
    }
    return `${num} ರೂಪಾಯಿಗಳು`;
  };

  // Generate Ultra-HD Receipt Canvas Image
  const downloadReceiptImage = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 900;
    canvas.height = 950;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Background Gradient (Luxury Pearl/Cream)
    const bgGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    bgGrad.addColorStop(0, '#fefce8');
    bgGrad.addColorStop(0.3, '#ffffff');
    bgGrad.addColorStop(1, '#fefce8');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Ornate Outer Double Border
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 6;
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

    ctx.strokeStyle = '#059669';
    ctx.lineWidth = 2;
    ctx.strokeRect(28, 28, canvas.width - 56, canvas.height - 56);

    // Header Background
    const headerGrad = ctx.createLinearGradient(30, 30, canvas.width - 60, 140);
    headerGrad.addColorStop(0, '#064e3b');
    headerGrad.addColorStop(1, '#047857');
    ctx.fillStyle = headerGrad;
    ctx.fillRect(30, 30, canvas.width - 60, 110);

    // Header Text
    ctx.fillStyle = '#fde047';
    ctx.font = 'bold 30px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('🪙 ಗ್ರಾಮ ಬಡ್ಡಿ ಲೆಕ್ಕಾಚಾರ ರಶೀದಿ (Interest Receipt)', canvas.width / 2, 75);

    ctx.fillStyle = '#ffffff';
    ctx.font = '15px sans-serif';
    ctx.fillText('ಮಾಹಿತಿ ಚಕ್ರ ಡಿಜಿಟಲ್ ಫೈನಾನ್ಸ್ ಪೋರ್ಟಲ್ - 100% ಕರಾರುವಾಕ್ ಲೆಕ್ಕ', canvas.width / 2, 110);

    // Transaction Meta Row
    ctx.textAlign = 'left';
    ctx.fillStyle = '#78350f';
    ctx.font = 'bold 15px sans-serif';
    ctx.fillText(`ರಶೀದಿ ಸಂಖ್ಯೆ: MC-BADDI-${Date.now().toString().slice(-6)}`, 50, 175);
    ctx.textAlign = 'right';
    ctx.fillText(`ದಿನಾಂಕ: ${new Date().toLocaleDateString('kn-IN', { day: 'numeric', month: 'long', year: 'numeric' })}`, canvas.width - 50, 175);

    // Line separator
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(50, 190);
    ctx.lineTo(canvas.width - 50, 190);
    ctx.stroke();

    // Parties Info Box
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(50, 210, canvas.width - 100, 90);
    ctx.strokeStyle = '#e2e8f0';
    ctx.strokeRect(50, 210, canvas.width - 100, 90);

    ctx.textAlign = 'left';
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 16px sans-serif';
    ctx.fillText(`👤 ಸಾಲಗಾರರ ಹೆಸರು: ${borrowerName}`, 70, 245);
    ctx.fillText(`🤝 ಸಾಲದಾತರ ಹೆಸರು: ${lenderName}`, 70, 280);
    ctx.fillText(`📝 ವಿವರ/ಟಿಪ್ಪಣಿ: ${note}`, 520, 245);
    ctx.fillText(`⚡ ಬಡ್ಡಿ ಪ್ರಕಾರ: ${interestType === 'simple' ? 'ಸರಳ ಬಡ್ಡಿ' : 'ಚಕ್ರ ಬಡ್ಡಿ'}`, 520, 280);

    // Financial Breakdown Table
    let tableY = 330;
    ctx.fillStyle = '#d97706';
    ctx.fillRect(50, tableY, canvas.width - 100, 45);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 16px sans-serif';
    ctx.fillText('ವಿವರ (Particulars)', 70, tableY + 28);
    ctx.textAlign = 'right';
    ctx.fillText('ಲೆಕ್ಕಾಚಾರ / ಮೊತ್ತ', canvas.width - 70, tableY + 28);

    const rows = [
      { label: '💰 ಅಸಲು ಹಣ (Principal Amount)', val: `₹${principal.toLocaleString('en-IN')}` },
      { label: `📈 ಬಡ್ಡಿ ದರ (Rate of Interest)`, val: `ನೂರಕ್ಕೆ ₹${ratePerHundred} (ತಿಂಗಳಿಗೆ)` },
      { label: '📅 ಸಾಲ ಪಡೆದ ದಿನಾಂಕ (Start Date)', val: startDate },
      { label: '📅 ಹಣ ತೀರಿಸುವ ದಿನಾಂಕ (End Date)', val: endDate },
      { label: '⏳ ಒಟ್ಟು ಅವಧಿ (Exact Duration)', val: calcResults.exactDurationText },
      { label: '💵 ಪ್ರತಿ ತಿಂಗಳ ಬಡ್ಡಿ (Monthly Interest)', val: `₹${Math.round(calcResults.monthlyInterest).toLocaleString('en-IN')}` },
      { label: '🪙 ಒಟ್ಟು ಬಡ್ಡಿ ಮೊತ್ತ (Total Interest)', val: `₹${calcResults.totalInterest.toLocaleString('en-IN')}` },
    ];

    tableY += 45;
    rows.forEach((row, i) => {
      ctx.fillStyle = i % 2 === 0 ? '#ffffff' : '#fefce8';
      ctx.fillRect(50, tableY, canvas.width - 100, 40);
      ctx.strokeStyle = '#f1f5f9';
      ctx.strokeRect(50, tableY, canvas.width - 100, 40);

      ctx.textAlign = 'left';
      ctx.fillStyle = '#1e293b';
      ctx.font = 'bold 15px sans-serif';
      ctx.fillText(row.label, 70, tableY + 26);

      ctx.textAlign = 'right';
      ctx.fillStyle = '#0f172a';
      ctx.fillText(row.val, canvas.width - 70, tableY + 26);

      tableY += 40;
    });

    // Grand Total Highlight Banner
    tableY += 20;
    ctx.fillStyle = '#047857';
    ctx.fillRect(50, tableY, canvas.width - 100, 70);

    ctx.textAlign = 'left';
    ctx.fillStyle = '#fde047';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText('ಒಟ್ಟು ಪಾವತಿಸಬೇಕಾದ ಮೊತ್ತ (ಅಸಲು + ಬಡ್ಡಿ):', 70, tableY + 42);

    ctx.textAlign = 'right';
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 28px sans-serif';
    ctx.fillText(`₹${calcResults.totalAmount.toLocaleString('en-IN')}`, canvas.width - 70, tableY + 45);

    // Amount in Words
    tableY += 100;
    ctx.textAlign = 'left';
    ctx.fillStyle = '#065f46';
    ctx.font = 'bold 15px sans-serif';
    ctx.fillText(`ಅಕ್ಷರಗಳಲ್ಲಿ: ${numberToKannadaWords(calcResults.totalAmount)}`, 50, tableY);

    // Signature Area
    tableY += 80;
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(70, tableY);
    ctx.lineTo(250, tableY);
    ctx.moveTo(canvas.width - 250, tableY);
    ctx.lineTo(canvas.width - 70, tableY);
    ctx.stroke();

    ctx.textAlign = 'center';
    ctx.fillStyle = '#475569';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText('ಸಾಲಗಾರರ ಸಹಿ (Borrower)', 160, tableY + 25);
    ctx.fillText('ಸಾಲದಾತರ ಸಹಿ (Lender)', canvas.width - 160, tableY + 25);

    // Download PNG
    const link = document.createElement('a');
    link.download = `grama-baddi-receipt-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  // 📸 & 💬 SMART WHATSAPP & IMAGE SHARE WITH WEBSITE LINK
  const shareToWhatsApp = async () => {
    // Generate Canvas first
    const canvas = document.createElement('canvas');
    canvas.width = 900;
    canvas.height = 950;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Background Gradient (Luxury Pearl/Cream)
    const bgGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    bgGrad.addColorStop(0, '#fefce8');
    bgGrad.addColorStop(0.3, '#ffffff');
    bgGrad.addColorStop(1, '#fefce8');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Ornate Outer Double Border
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 6;
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

    ctx.strokeStyle = '#059669';
    ctx.lineWidth = 2;
    ctx.strokeRect(28, 28, canvas.width - 56, canvas.height - 56);

    // Header Background
    const headerGrad = ctx.createLinearGradient(30, 30, canvas.width - 60, 140);
    headerGrad.addColorStop(0, '#064e3b');
    headerGrad.addColorStop(1, '#047857');
    ctx.fillStyle = headerGrad;
    ctx.fillRect(30, 30, canvas.width - 60, 110);

    // Header Text
    ctx.fillStyle = '#fde047';
    ctx.font = 'bold 30px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('🪙 ಗ್ರಾಮ ಬಡ್ಡಿ ಲೆಕ್ಕಾಚಾರ ರಶೀದಿ (Interest Receipt)', canvas.width / 2, 75);

    ctx.fillStyle = '#ffffff';
    ctx.font = '15px sans-serif';
    ctx.fillText('ಮಾಹಿತಿ ಚಕ್ರ ಡಿಜಿಟಲ್ ಫೈನಾನ್ಸ್ ಪೋರ್ಟಲ್ - 100% ಕರಾರುವಾಕ್ ಲೆಕ್ಕ', canvas.width / 2, 110);

    // Transaction Meta Row
    ctx.textAlign = 'left';
    ctx.fillStyle = '#78350f';
    ctx.font = 'bold 15px sans-serif';
    ctx.fillText(`ರಶೀದಿ ಸಂಖ್ಯೆ: MC-BADDI-${Date.now().toString().slice(-6)}`, 50, 175);
    ctx.textAlign = 'right';
    ctx.fillText(`ದಿನಾಂಕ: ${new Date().toLocaleDateString('kn-IN', { day: 'numeric', month: 'long', year: 'numeric' })}`, canvas.width - 50, 175);

    // Line separator
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(50, 190);
    ctx.lineTo(canvas.width - 50, 190);
    ctx.stroke();

    // Parties Info Box
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(50, 210, canvas.width - 100, 90);
    ctx.strokeStyle = '#e2e8f0';
    ctx.strokeRect(50, 210, canvas.width - 100, 90);

    ctx.textAlign = 'left';
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 16px sans-serif';
    ctx.fillText(`👤 ಸಾಲಗಾರರ ಹೆಸರು: ${borrowerName}`, 70, 245);
    ctx.fillText(`🤝 ಸಾಲದಾತರ ಹೆಸರು: ${lenderName}`, 70, 280);
    ctx.fillText(`📝 ವಿವರ/ಟಿಪ್ಪಣಿ: ${note}`, 520, 245);
    ctx.fillText(`⚡ ಬಡ್ಡಿ ಪ್ರಕಾರ: ${interestType === 'simple' ? 'ಸರಳ ಬಡ್ಡಿ' : 'ಚಕ್ರ ಬಡ್ಡಿ'}`, 520, 280);

    // Financial Breakdown Table
    let tableY = 330;
    ctx.fillStyle = '#d97706';
    ctx.fillRect(50, tableY, canvas.width - 100, 45);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 16px sans-serif';
    ctx.fillText('ವಿವರ (Particulars)', 70, tableY + 28);
    ctx.textAlign = 'right';
    ctx.fillText('ಲೆಕ್ಕಾಚಾರ / ಮೊತ್ತ', canvas.width - 70, tableY + 28);

    const rows = [
      { label: '💰 ಅಸಲು ಹಣ (Principal Amount)', val: `₹${principal.toLocaleString('en-IN')}` },
      { label: `📈 ಬಡ್ಡಿ ದರ (Rate of Interest)`, val: `ನೂರಕ್ಕೆ ₹${ratePerHundred} (ತಿಂಗಳಿಗೆ)` },
      { label: '📅 ಸಾಲ ಪಡೆದ ದಿನಾಂಕ (Start Date)', val: startDate },
      { label: '📅 ಹಣ ತೀರಿಸುವ ದಿನಾಂಕ (End Date)', val: endDate },
      { label: '⏳ ಒಟ್ಟು ಅವಧಿ (Exact Duration)', val: calcResults.exactDurationText },
      { label: '💵 ಪ್ರತಿ ತಿಂಗಳ ಬಡ್ಡಿ (Monthly Interest)', val: `₹${Math.round(calcResults.monthlyInterest).toLocaleString('en-IN')}` },
      { label: '🪙 ಒಟ್ಟು ಬಡ್ಡಿ ಮೊತ್ತ (Total Interest)', val: `₹${calcResults.totalInterest.toLocaleString('en-IN')}` },
    ];

    tableY += 45;
    rows.forEach((row, i) => {
      ctx.fillStyle = i % 2 === 0 ? '#ffffff' : '#fefce8';
      ctx.fillRect(50, tableY, canvas.width - 100, 40);
      ctx.strokeStyle = '#f1f5f9';
      ctx.strokeRect(50, tableY, canvas.width - 100, 40);

      ctx.textAlign = 'left';
      ctx.fillStyle = '#1e293b';
      ctx.font = 'bold 15px sans-serif';
      ctx.fillText(row.label, 70, tableY + 26);

      ctx.textAlign = 'right';
      ctx.fillStyle = '#0f172a';
      ctx.fillText(row.val, canvas.width - 70, tableY + 26);

      tableY += 40;
    });

    // Grand Total Highlight Banner
    tableY += 20;
    ctx.fillStyle = '#047857';
    ctx.fillRect(50, tableY, canvas.width - 100, 70);

    ctx.textAlign = 'left';
    ctx.fillStyle = '#fde047';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText('ಒಟ್ಟು ಪಾವತಿಸಬೇಕಾದ ಮೊತ್ತ (ಅಸಲು + ಬಡ್ಡಿ):', 70, tableY + 42);

    ctx.textAlign = 'right';
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 28px sans-serif';
    ctx.fillText(`₹${calcResults.totalAmount.toLocaleString('en-IN')}`, canvas.width - 70, tableY + 45);

    // Amount in Words
    tableY += 100;
    ctx.textAlign = 'left';
    ctx.fillStyle = '#065f46';
    ctx.font = 'bold 15px sans-serif';
    ctx.fillText(`ಅಕ್ಷರಗಳಲ್ಲಿ: ${numberToKannadaWords(calcResults.totalAmount)}`, 50, tableY);

    // Signature Area
    tableY += 80;
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(70, tableY);
    ctx.lineTo(250, tableY);
    ctx.moveTo(canvas.width - 250, tableY);
    ctx.lineTo(canvas.width - 70, tableY);
    ctx.stroke();

    ctx.textAlign = 'center';
    ctx.fillStyle = '#475569';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText('ಸಾಲಗಾರರ ಸಹಿ (Borrower)', 160, tableY + 25);
    ctx.fillText('ಸಾಲದಾತರ ಸಹಿ (Lender)', canvas.width - 160, tableY + 25);

    const siteUrl = typeof window !== 'undefined' ? `${window.location.origin}/grama-baddi` : 'https://mahiti-chakra-portal.vercel.app/grama-baddi';

    const shareText = `🪙 *ಗ್ರಾಮ ಬಡ್ಡಿ ಲೆಕ್ಕಾಚಾರ ರಶೀದಿ (Mahiti Chakra)*\n\n` +
      `👤 ಸಾಲಗಾರರು: *${borrowerName}*\n` +
      `🤝 ಸಾಲದಾತರು: *${lenderName}*\n` +
      `💰 ಅಸಲು ಹಣ: *₹${principal.toLocaleString('en-IN')}*\n` +
      `📈 ಬಡ್ಡಿ ದರ: *ನೂರಕ್ಕೆ ₹${ratePerHundred} (ತಿಂಗಳಿಗೆ)*\n` +
      `📅 ಅವಧಿ: *${startDate} ರಿಂದ ${endDate}*\n` +
      `⏳ ಒಟ್ಟು ಕಾಲಾವಧಿ: *${calcResults.exactDurationText}*\n` +
      `💵 ಪ್ರತಿ ತಿಂಗಳ ಬಡ್ಡಿ: *₹${Math.round(calcResults.monthlyInterest).toLocaleString('en-IN')}*\n` +
      `🪙 ಒಟ್ಟು ಬಡ್ಡಿ: *₹${calcResults.totalInterest.toLocaleString('en-IN')}*\n` +
      `----------------------------\n` +
      `🔥 *ಒಟ್ಟು ಕೊಡಬೇಕಾದ ಹಣ: ₹${calcResults.totalAmount.toLocaleString('en-IN')}*\n` +
      `----------------------------\n\n` +
      `🌐 *ನೀವು ಉಚಿತವಾಗಿ ಲೆಕ್ಕ ಹಾಕಿ & ರಶೀದಿ ಪಡೆಯಿರಿ:*\n👉 ${siteUrl}`;

    // Try Web Share API with Image File (Mobile WhatsApp Image Sharing)
    canvas.toBlob(async (blob) => {
      if (blob && navigator.share && navigator.canShare) {
        const file = new File([blob], `grama-baddi-receipt-${Date.now()}.png`, { type: 'image/png' });
        if (navigator.canShare({ files: [file] })) {
          try {
            await navigator.share({
              files: [file],
              title: 'ಗ್ರಾಮ ಬಡ್ಡಿ ಲೆಕ್ಕಾಚಾರ ರಶೀದಿ',
              text: shareText,
            });
            return;
          } catch (err) {
            console.log('Share canceled or fallback to link', err);
          }
        }
      }

      // Fallback for Desktop/Browser: Download Image & Open WhatsApp
      downloadReceiptImage();
      const encoded = encodeURIComponent(shareText);
      window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
    }, 'image/png');
  };

  return (
    <div className="space-y-6">
      
      {/* 🌟 HERO HEADER BANNER */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl border-2 border-emerald-600/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="flex items-center gap-4 relative z-10">
          <div className="shrink-0 filter drop-shadow-md">
            <VillageBaddi3D className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase bg-emerald-500 text-slate-950 px-2.5 py-0.5 rounded-full shadow-xs">
              <Sparkles className="w-3 h-3" /> 100% ACCURATE VILLAGE INTEREST CALC
            </span>
            <h1 className="text-xl sm:text-3xl font-black tracking-tight text-white">
              {lang === 'kn' ? '🪙 ಊರಿನ ಗ್ರಾಮ ಬಡ್ಡಿ ಲೆಕ್ಕಾಚಾರ ಸಾಫ್ಟ್‌ವೇರ್' : '🪙 Village / Grama Baddi Calculator'}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-emerald-200">
              {lang === 'kn'
                ? 'ನೂರಕ್ಕೆ ₹1, ₹2, ₹3 ತಿಂಗಳ ಬಡ್ಡಿ, ಸರಳ ಬಡ್ಡಿ & ಚಕ್ರ ಬಡ್ಡಿಯನ್ನು ದಿನ ಸಮೇತ ನಿಖರವಾಗಿ ಲೆಕ್ಕ ಹಾಕಿ ಅಧಿಕೃತ ರಶೀದಿ ಇಮೇಜ್ ಪಡೆಯಿರಿ!'
                : 'Calculate monthly village interest (₹1, ₹2, ₹3/month), view duration & generate HD receipts!'}
            </p>
          </div>
        </div>

        {/* SUMMARY BADGE */}
        <div className="bg-emerald-950/80 border border-emerald-500/40 p-4 rounded-2xl text-center min-w-[170px] shrink-0 shadow-inner self-stretch md:self-auto">
          <span className="text-[10px] uppercase font-bold text-emerald-300 block">ಒಟ್ಟು ಪಾವತಿಸಬೇಕಾದ ಮೊತ್ತ</span>
          <span className="text-2xl sm:text-3xl font-black text-amber-300">₹{calcResults.totalAmount.toLocaleString('en-IN')}</span>
          <span className="text-[10px] text-emerald-400 block mt-0.5">ಅಸಲು + ಬಡ್ಡಿ ಒಟ್ಟು</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 🔮 2-COLUMN WORKSPACE: LEFT INPUTS + RIGHT LIVE RECEIPT CARD */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT COLUMN: EASY CONTROLS & FORM (6 Cols) */}
        <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200 shadow-sm p-5 sm:p-7 space-y-5">
          
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
            <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-emerald-600" />
              <span>1. ಸಾಲ & ಬಡ್ಡಿ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ</span>
            </h2>
            <span className="text-[10px] font-bold bg-emerald-50 text-emerald-800 px-2.5 py-0.5 rounded-full border border-emerald-200">
              Easy Use
            </span>
          </div>

          {/* 1. PRINCIPAL AMOUNT INPUT */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-800 flex items-center justify-between">
              <span>💰 ಅಸಲು ಹಣ (Principal Amount - ₹)</span>
              <span className="text-emerald-700 font-black">₹{principal.toLocaleString('en-IN')}</span>
            </label>
            <input
              type="number"
              min={100}
              value={principal}
              onChange={(e) => setPrincipal(Math.max(0, Number(e.target.value)))}
              className="w-full bg-slate-50 border border-slate-300 rounded-2xl py-3 px-4 text-base font-black text-slate-950 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
            />

            {/* Quick Amount Presets */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {[10000, 25000, 50000, 100000, 200000, 500000].map((amt) => (
                <button
                  key={amt}
                  onClick={() => setPrincipal(amt)}
                  className={`px-2.5 py-1 rounded-xl text-[11px] font-black transition-all border shrink-0 ${
                    principal === amt
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                      : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                  }`}
                >
                  ₹{amt >= 100000 ? `${amt / 100000} ಲಕ್ಷ` : `${amt / 1000}K`}
                </button>
              ))}
            </div>
          </div>

          {/* 2. INTEREST RATE PER HUNDRED PER MONTH */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-800 flex items-center justify-between">
              <span>📈 ಬಡ್ಡಿ ದರ (Rate of Interest - ₹ per ₹100/month)</span>
              <span className="text-amber-700 font-black">ನೂರಕ್ಕೆ ₹{ratePerHundred} (ತಿಂಗಳಿಗೆ)</span>
            </label>

            <div className="grid grid-cols-5 gap-1.5">
              {[1, 1.5, 2, 3, 5].map((r) => (
                <button
                  key={r}
                  onClick={() => setRatePerHundred(r)}
                  className={`py-2 rounded-xl text-xs font-black transition-all border ${
                    ratePerHundred === r
                      ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  ₹{r}
                </button>
              ))}
            </div>

            <div className="pt-1 flex items-center gap-2">
              <span className="text-[11px] text-slate-500 font-bold shrink-0">ಕಸ್ಟಮ್ ಬಡ್ಡಿ ದರ:</span>
              <input
                type="number"
                step="0.1"
                min="0.1"
                value={ratePerHundred}
                onChange={(e) => setRatePerHundred(Math.max(0.1, Number(e.target.value)))}
                className="w-24 bg-slate-50 border border-slate-300 rounded-xl py-1 px-2.5 text-xs font-black text-slate-900 text-center"
              />
              <span className="text-xs font-bold text-slate-600">ರೂಪಾಯಿ ಪ್ರತಿ ನೂರಕ್ಕೆ</span>
            </div>
          </div>

          {/* 3. DATES SELECTOR */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-700 block">📅 ಸಾಲ ಪಡೆದ ದಿನಾಂಕ (Start Date)</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-[11px] font-bold text-slate-700 block">📅 ವಾಪಸ್ ದಿನಾಂಕ (End Date)</label>
                <button
                  onClick={() => setEndDate(getTodayDate())}
                  className="text-[10px] text-emerald-600 font-bold hover:underline"
                >
                  ಇಂದು
                </button>
              </div>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* 4. INTEREST TYPE SWITCHER */}
          <div className="space-y-1.5 pt-1">
            <label className="text-xs font-bold text-slate-800 block">⚡ ಬಡ್ಡಿ ಪ್ರಕಾರ (Interest Type)</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setInterestType('simple')}
                className={`py-2.5 px-3 rounded-xl text-xs font-black border transition-all ${
                  interestType === 'simple'
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200'
                }`}
              >
                ಸರಳ ಬಡ್ಡಿ (Simple)
              </button>
              <button
                onClick={() => setInterestType('compound')}
                className={`py-2.5 px-3 rounded-xl text-xs font-black border transition-all ${
                  interestType === 'compound'
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200'
                }`}
              >
                ಚಕ್ರ ಬಡ್ಡಿ (Compound)
              </button>
            </div>
          </div>

          {/* 5. NAMES & NOTES (OPTIONAL) */}
          <div className="pt-2 border-t border-slate-100 space-y-3">
            <span className="text-xs font-black text-slate-900 block">📝 ರಶೀದಿಗೆ ಹೆಸರುಗಳ ವಿವರ (ಐಚ್ಛಿಕ):</span>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <input
                type="text"
                placeholder="ಸಾಲಗಾರರ ಹೆಸರು (Borrower)"
                value={borrowerName}
                onChange={(e) => setBorrowerName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 text-xs font-bold text-slate-900"
              />
              <input
                type="text"
                placeholder="ಸಾಲದಾತರ ಹೆಸರು (Lender)"
                value={lenderName}
                onChange={(e) => setLenderName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 text-xs font-bold text-slate-900"
              />
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: LIVE ULTRA-HD OFFICIAL RECEIPT (6 Cols) */}
        <div className="lg:col-span-6 space-y-4">
          
          {/* THE OFFICIAL DIGITAL RECEIPT CARD */}
          <div className="bg-gradient-to-b from-amber-50/90 via-white to-amber-50/50 rounded-3xl border-2 border-amber-300 shadow-xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
            
            {/* Header */}
            <div className="border-b-2 border-amber-400 pb-4 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black text-emerald-700 uppercase tracking-wider block">OFFICIAL RECEIPT</span>
                <h3 className="text-lg sm:text-xl font-black text-slate-950">🪙 ಗ್ರಾಮ ಬಡ್ಡಿ ಲೆಕ್ಕಾಚಾರ ರಶೀದಿ</h3>
                <span className="text-[11px] text-slate-500 font-bold">
                  ದಿನಾಂಕ: {new Date().toLocaleDateString('kn-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-lg shadow-sm border border-amber-400">
                ₹
              </div>
            </div>

            {/* Names & Note Banner */}
            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-xs space-y-1 font-bold">
              <div className="flex justify-between text-slate-700">
                <span>👤 ಸಾಲಗಾರರು:</span>
                <span className="text-slate-950 font-black">{borrowerName}</span>
              </div>
              <div className="flex justify-between text-slate-700">
                <span>🤝 ಸಾಲದಾತರು:</span>
                <span className="text-slate-950 font-black">{lenderName}</span>
              </div>
              <div className="flex justify-between text-slate-700">
                <span>⏳ ನಿಖರ ಕಾಲಾವಧಿ:</span>
                <span className="text-emerald-700 font-black">{calcResults.exactDurationText}</span>
              </div>
            </div>

            {/* Financial Breakdown Rows */}
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1.5 border-b border-slate-100 font-bold">
                <span className="text-slate-600">💰 ಅಸಲು ಮೊತ್ತ:</span>
                <span className="text-slate-950 font-black">₹{principal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100 font-bold">
                <span className="text-slate-600">📈 ಬಡ್ಡಿ ದರ:</span>
                <span className="text-slate-950 font-black">ನೂರಕ್ಕೆ ₹{ratePerHundred} (ತಿಂಗಳಿಗೆ)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100 font-bold">
                <span className="text-slate-600">💵 ತಿಂಗಳ ಬಡ್ಡಿ:</span>
                <span className="text-amber-800 font-black">₹{Math.round(calcResults.monthlyInterest).toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100 font-bold">
                <span className="text-slate-600">🪙 ಒಟ್ಟು ಆದ ಬಡ್ಡಿ:</span>
                <span className="text-rose-700 font-black text-sm">₹{calcResults.totalInterest.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Grand Total Box */}
            <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white p-5 rounded-2xl shadow-md space-y-1">
              <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-wider block">
                ಒಟ್ಟು ಪಾವತಿಸಬೇಕಾದ ಹಣ (ಅಸಲು + ಬಡ್ಡಿ)
              </span>
              <div className="text-2xl sm:text-3xl font-black text-amber-300">
                ₹{calcResults.totalAmount.toLocaleString('en-IN')}
              </div>
              <span className="text-[11px] text-emerald-200 block font-semibold">
                ಅಕ್ಷರಗಳಲ್ಲಿ: {numberToKannadaWords(calcResults.totalAmount)}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-2">
              <button
                onClick={downloadReceiptImage}
                className="w-full py-3.5 px-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5 text-slate-950" />
                <span>📸 ಪ್ರೀಮಿಯಂ HD ರಶೀದಿ ಇಮೇಜ್ ಡೌನ್‌ಲೋಡ್ (Download HD Receipt)</span>
              </button>

              <button
                onClick={shareToWhatsApp}
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-sm transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                <span>WhatsApp ನಲ್ಲಿ ರಶೀದಿ ವಿವರ ಶೇರ್ ಮಾಡಿ</span>
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
