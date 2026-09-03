"use client";

import React, { useState, useMemo } from 'react';
import { useLanguage } from './LanguageContext';
import {
  Sparkles, Download, Share2, Printer, CheckCircle2,
  HeartPulse, Activity, Flame, Droplets, Apple, Dumbbell,
  Clock, Award, ArrowRight, User, Scale, ShieldCheck
} from 'lucide-react';
import { WeightLossDiet3D } from './LiveAppIcons3D';

export const DietChartComp: React.FC = () => {
  const { lang } = useLanguage();

  // User Parameters State
  const [name, setName] = useState('ರಾಜೇಶ್ ಗೌಡ');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [weight, setWeight] = useState<number>(78); // in kg
  const [height, setHeight] = useState<number>(170); // in cm
  const [age, setAge] = useState<number>(32); // in years
  const [activity, setActivity] = useState<number>(1.2); // Sedentary = 1.2, Light = 1.375, Moderate = 1.55, Active = 1.725
  const [targetWeightLoss, setTargetWeightLoss] = useState<number>(10); // Target kg to lose

  // 🔬 Scientific Calculation Logic (Mifflin-St Jeor Formula)
  const healthStats = useMemo(() => {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    let bmiStatus = 'ಸಾಮಾನ್ಯ ತೂಕ (Normal)';
    let bmiColor = '#10b981'; // Green
    if (bmi < 18.5) {
      bmiStatus = 'ಕಡಿಮೆ ತೂಕ (Underweight)';
      bmiColor = '#3b82f6';
    } else if (bmi >= 25 && bmi < 30) {
      bmiStatus = 'ಅಧಿಕ ತೂಕ (Overweight)';
      bmiColor = '#f59e0b';
    } else if (bmi >= 30) {
      bmiStatus = 'ಬೊಜ್ಜು (Obese)';
      bmiColor = '#ef4444';
    }

    // BMR
    let bmr = 10 * weight + 6.25 * height - 5 * age;
    if (gender === 'male') {
      bmr += 5;
    } else {
      bmr -= 161;
    }

    // TDEE (Total Daily Energy Expenditure)
    const tdee = Math.round(bmr * activity);

    // Target Deficit Calories for 0.7kg/week safe loss
    const targetCalories = Math.max(1200, Math.round(tdee - 500));

    // Ideal Weight Range (BMI 18.5 - 24.9)
    const idealWeightMin = Math.round(18.5 * heightInMeters * heightInMeters);
    const idealWeightMax = Math.round(24.9 * heightInMeters * heightInMeters);

    // Water Requirement
    const waterLiters = (weight * 0.035).toFixed(1);

    // Estimated weeks to reach goal
    const estimatedWeeks = Math.ceil(targetWeightLoss / 0.75);

    return {
      bmi: bmi.toFixed(1),
      bmiStatus,
      bmiColor,
      bmr: Math.round(bmr),
      tdee,
      targetCalories,
      idealWeightRange: `${idealWeightMin} - ${idealWeightMax} kg`,
      waterLiters: `${waterLiters} ಲೀಟರ್`,
      estimatedWeeks,
    };
  }, [weight, height, age, gender, activity, targetWeightLoss]);

  // 🎨 GENERATE ULTRA-HD CANVAS IMAGE (1000px x 1400px)
  const generateCanvas = (): HTMLCanvasElement => {
    const canvas = document.createElement('canvas');
    canvas.width = 1000;
    canvas.height = 1450;
    const ctx = canvas.getContext('2d');
    if (!ctx) return canvas;

    // Background Gradient (Luxury Emerald & Mint)
    const bgGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    bgGrad.addColorStop(0, '#f0fdf4');
    bgGrad.addColorStop(0.3, '#ffffff');
    bgGrad.addColorStop(1, '#ecfdf5');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Ornate Border
    ctx.strokeStyle = '#059669';
    ctx.lineWidth = 8;
    ctx.strokeRect(25, 25, canvas.width - 50, canvas.height - 50);

    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2;
    ctx.strokeRect(35, 35, canvas.width - 70, canvas.height - 70);

    // Top Header Banner
    const headerGrad = ctx.createLinearGradient(40, 40, canvas.width - 80, 130);
    headerGrad.addColorStop(0, '#064e3b');
    headerGrad.addColorStop(1, '#047857');
    ctx.fillStyle = headerGrad;
    ctx.fillRect(40, 40, canvas.width - 80, 110);

    ctx.fillStyle = '#fde047';
    ctx.font = 'bold 32px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('🥗 ತೂಕ ಇಳಿಸುವ ಕನ್ನಡ ವೈಜ್ಞಾನಿಕ ಡಯಟ್ ಚಾರ್ಟ್', canvas.width / 2, 85);

    ctx.fillStyle = '#ffffff';
    ctx.font = '16px sans-serif';
    ctx.fillText(`ಹೆಸರು: ${name} | ದಿನಾಂಕ: ${new Date().toLocaleDateString('kn-IN', { day: 'numeric', month: 'long', year: 'numeric' })}`, canvas.width / 2, 122);

    // User Health Stats Dashboard Box
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(50, 175, canvas.width - 100, 130);
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(50, 175, canvas.width - 100, 130);

    // 4 Stats Columns
    const statCols = [
      { label: 'ಪ್ರಸ್ತುತ ತೂಕ / ಎತ್ತರ', val: `${weight} kg / ${height} cm` },
      { label: 'ನಿಮ್ಮ BMI ಸೂಚ್ಯಂಕ', val: `${healthStats.bmi} (${healthStats.bmiStatus})` },
      { label: 'ದಿನದ ಗುರಿ ಕ್ಯಾಲೋರಿ', val: `${healthStats.targetCalories} kcal/ದಿನಕ್ಕೆ` },
      { label: 'ದಿನಕ್ಕೆ ಕುಡಿಯಬೇಕಾದ ನೀರು', val: healthStats.waterLiters },
    ];

    ctx.textAlign = 'center';
    statCols.forEach((stat, i) => {
      const colX = 160 + i * 220;
      ctx.fillStyle = '#64748b';
      ctx.font = 'bold 14px sans-serif';
      ctx.fillText(stat.label, colX, 215);

      ctx.fillStyle = '#065f46';
      ctx.font = '900 18px sans-serif';
      ctx.fillText(stat.val, colX, 260);

      if (i < 3) {
        ctx.strokeStyle = '#e2e8f0';
        ctx.beginPath();
        ctx.moveTo(colX + 110, 190);
        ctx.lineTo(colX + 110, 280);
        ctx.stroke();
      }
    });

    // Timetable Header
    let y = 340;
    ctx.fillStyle = '#047857';
    ctx.fillRect(50, y, canvas.width - 100, 45);

    ctx.textAlign = 'left';
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 18px sans-serif';
    ctx.fillText('⏰ ಸಮಯ & ಆಹಾರದ ಪ್ರಕಾರ', 70, y + 28);
    ctx.fillText('🍽️ ಶಿಫಾರಸು ಮಾಡಿದ ಕನ್ನಡ ಪೌಷ್ಟಿಕ ಆಹಾರ ಪಟ್ಟಿ', 380, y + 28);
    ctx.textAlign = 'right';
    ctx.fillText('ಕ್ಯಾಲೋರಿ', canvas.width - 70, y + 28);

    // Timetable Rows
    const meals = [
      {
        time: '🌅 ಮುಂಜಾನೆ 6:30 AM',
        title: 'ಡಿಟಾಕ್ಸ್ & ಮೆಟಾಬಾಲಿಸಂ',
        desc: 'ಬೆಚ್ಚಗಿನ ನೀರು + ಜೀರಿಗೆ / ಮೆಂತ್ಯ ಕಾಳು ನೀರು ಅಥವಾ ನಿಂಬೆರಸ',
        cal: '40 kcal',
      },
      {
        time: '🥣 ಬೆಳಿಗ್ಗೆ 8:30 AM',
        title: 'ಪೌಷ್ಟಿಕ ಉಪಹಾರ',
        desc: '1 ರಾಗಿ ದೋಸೆ + ಕಡಲೆಕಾಳು ಸಾರು / 2 ಇಡ್ಲಿ + ಸಾಂಬಾರ್ / ಮೊಳಕೆ ಕಾಳು',
        cal: '320 kcal',
      },
      {
        time: '🍏 ಬೆಳಿಗ್ಗೆ 11:30 AM',
        title: 'ಮಧ್ಯಾಹ್ನದ ಲಘು ಆಹಾರ',
        desc: 'ಸೌತೆಕಾಯಿ ಸಲಾಡ್ / 1 ಸೇಬು / ಪಪ್ಪಾಯ / ಗ್ರೀನ್ ಟೀ / ಮಜ್ಜಿಗೆ',
        cal: '90 kcal',
      },
      {
        time: '🍛 ಮಧ್ಯಾಹ್ನ 1:30 PM',
        title: 'ಮುಖ್ಯ ಊಟ (Best)',
        desc: '1 ರಾಗಿ ಮುದ್ದೆ + ಬೇಳೆ ಸೊಪ್ಪಿನ ಸಾರು + ಸೌತೆಕಾಯಿ ಸಲಾಡ್ + ಮಜ್ಜಿಗೆ',
        cal: '450 kcal',
      },
      {
        time: '🍵 ಸಂಜೆ 4:30 PM',
        title: 'ಸಂಜೆಯ ಸ್ನ್ಯಾಕ್ಸ್',
        desc: 'ಸಕ್ಕರೆ ರಹಿತ ಗ್ರೀನ್ ಟೀ + ಹುರಿದ ಕಡಲೆ / ಮಖಾನ / ಬೇಯಿಸಿದ ಕಡಲೆ',
        cal: '110 kcal',
      },
      {
        time: '🥗 ರಾತ್ರಿ 7:30 PM',
        title: 'ಲಘು ರಾತ್ರಿ ಊಟ',
        desc: '1-2 ಗೋಧಿ ಚಪಾತಿ / ತರಕಾರಿ ಓಟ್ಸ್ ಕಿಚಡಿ / ತರಕಾರಿ ಸೂಪ್',
        cal: '380 kcal',
      },
      {
        time: '🥛 ರಾತ್ರಿ 9:30 PM',
        title: 'ಮಲಗುವ ಮುನ್ನ',
        desc: 'ಬೆಚ್ಚಗಿನ ಅರಿಶಿನ ಹಾಲು / ಜೀರ್ಣಕಾರಿ ಸೋಂಪು ನೀರು',
        cal: '60 kcal',
      },
    ];

    y += 45;
    meals.forEach((meal, idx) => {
      ctx.fillStyle = idx % 2 === 0 ? '#ffffff' : '#f0fdf4';
      ctx.fillRect(50, y, canvas.width - 100, 75);
      ctx.strokeStyle = '#dcfce7';
      ctx.strokeRect(50, y, canvas.width - 100, 75);

      // Time & Meal Title
      ctx.textAlign = 'left';
      ctx.fillStyle = '#065f46';
      ctx.font = 'bold 15px sans-serif';
      ctx.fillText(meal.time, 70, y + 28);
      ctx.fillStyle = '#047857';
      ctx.font = 'bold 13px sans-serif';
      ctx.fillText(meal.title, 70, y + 52);

      // Food Menu Description
      ctx.fillStyle = '#1e293b';
      ctx.font = 'bold 15px sans-serif';
      ctx.fillText(meal.desc, 380, y + 42);

      // Calorie Pill
      ctx.textAlign = 'right';
      ctx.fillStyle = '#d97706';
      ctx.font = 'bold 15px sans-serif';
      ctx.fillText(meal.cal, canvas.width - 70, y + 42);

      y += 75;
    });

    // 5 Golden Rules Box
    y += 20;
    ctx.fillStyle = '#064e3b';
    ctx.fillRect(50, y, canvas.width - 100, 160);

    ctx.textAlign = 'left';
    ctx.fillStyle = '#fde047';
    ctx.font = 'bold 18px sans-serif';
    ctx.fillText('🌟 ತೂಕ ಇಳಿಸುವ 5 ಸುವರ್ಣ ನಿಯಮಗಳು (Guaranteed Weight Loss Rules):', 70, y + 32);

    const rules = [
      '1. ಬಿಳಿ ಸಕ್ಕರೆ, ಬೇಕರಿ ತಿಂಡಿಗಳು ಹಾಗೂ ಕರಿದ ಎಣ್ಣೆ ಪದಾರ್ಥಗಳನ್ನು ಸಂಪೂರ್ಣ ತ್ಯಜಿಸಿ.',
      '2. ಪ್ರತಿದಿನ ಕನಿಷ್ಠ 35-45 ನಿಮಿಷ ಬಿರುಸಿನ ನಡಿಗೆ (Brisk Walking - 6,000+ ಹೆಜ್ಜೆಗಳು).',
      '3. ದಿನಕ್ಕೆ ಕನಿಷ್ಠ 3 ಲೀಟರ್ ನೀರು ಕುಡಿಯುವುದು ದೇಹದ ಕೊಬ್ಬನ್ನು ವೇಗವಾಗಿ ಕರಗಿಸುತ್ತದೆ.',
      '4. ರಾತ್ರಿ 8:00 ಗಂಟೆಯೊಳಗೆ ಲಘು ಊಟ ಮುಗಿಸಿ, ರಾತ್ರಿ 7-8 ಗಂಟೆಗಳ ಕಾಲ ಚೆನ್ನಾಗಿ ನಿದ್ರೆ ಮಾಡಿ.',
    ];

    ctx.fillStyle = '#ffffff';
    ctx.font = '14px sans-serif';
    rules.forEach((rule, idx) => {
      ctx.fillText(rule, 70, y + 65 + idx * 24);
    });

    // Footer
    y += 200;
    ctx.textAlign = 'center';
    ctx.fillStyle = '#64748b';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText('✨ ಆರೋಗ್ಯವೇ ಭಾಗ್ಯ! - ಮಾಹಿತಿ ಚಕ್ರ (Mahiti Chakra Health Portal)', canvas.width / 2, y);

    return canvas;
  };

  // Download Ultra-HD Image
  const downloadDietChartImage = () => {
    const canvas = generateCanvas();
    const link = document.createElement('a');
    link.download = `kannada-weight-loss-diet-chart-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  // 📸 & 💬 SMART WHATSAPP & IMAGE SHARE WITH WEBSITE LINK
  const shareToWhatsApp = async () => {
    const canvas = generateCanvas();
    const siteUrl = typeof window !== 'undefined' ? `${window.location.origin}/diet-chart` : 'https://mahiti-chakra-portal.vercel.app/diet-chart';

    const shareText = `🥗 *ತೂಕ ಇಳಿಸುವ ಕನ್ನಡ ಡಯಟ್ ಚಾರ್ಟ್ (Mahiti Chakra)*\n\n` +
      `👤 ಹೆಸರು: *${name}*\n` +
      `⚖️ ತೂಕ: *${weight} kg* | ಎತ್ತರ: *${height} cm*\n` +
      `📊 BMI ಸೂಚ್ಯಂಕ: *${healthStats.bmi} (${healthStats.bmiStatus})*\n` +
      `🔥 ದಿನದ ಗುರಿ ಕ್ಯಾಲೋರಿ: *${healthStats.targetCalories} kcal*\n` +
      `💧 ದಿನಕ್ಕೆ ಕುಡಿಯಬೇಕಾದ ನೀರು: *${healthStats.waterLiters}*\n` +
      `🎯 ಆದರ್ಶ ತೂಕದ ವ್ಯಾಪ್ತಿ: *${healthStats.idealWeightRange}*\n\n` +
      `🍛 *ದಿನದ ಮುಖ್ಯ ಊಟದ ವೇಳಾಪಟ್ಟಿ:*\n` +
      `• 6:30 AM: ಬೆಚ್ಚಗಿನ ಜೀರಿಗೆ/ಮೆಂತ್ಯ ನೀರು\n` +
      `• 8:30 AM: ರಾಗಿ ದೋಸೆ/ಇಡ್ಲಿ ಸಾಂಬಾರ್/ಮೊಳಕೆ ಕಾಳು\n` +
      `• 11:30 AM: ಸೌತೆಕಾಯಿ ಸಲಾಡ್ / ಸೇಬು / ಮಜ್ಜಿಗೆ\n` +
      `• 1:30 PM: *1 ರಾಗಿ ಮುದ್ದೆ + ಬೇಳೆ ಸೊಪ್ಪಿನ ಸಾರು + ಮಜ್ಜಿಗೆ*\n` +
      `• 4:30 PM: ಗ್ರೀನ್ ಟೀ + ಹುರಿದ ಕಡಲೆ/ಮಖಾನ\n` +
      `• 7:30 PM: ಚಪಾತಿ / ಓಟ್ಸ್ ಕಿಚಡಿ (ರಾತ್ರಿ 8 ರೊಳಗೆ)\n\n` +
      `--------------------------------\n` +
      `🌐 *ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಡಯಟ್ ಚಾರ್ಟ್ ಉಚಿತವಾಗಿ ಪಡೆಯಿರಿ:*\n👉 ${siteUrl}`;

    canvas.toBlob(async (blob) => {
      if (blob && navigator.share && navigator.canShare) {
        const file = new File([blob], `kannada-diet-chart-${Date.now()}.png`, { type: 'image/png' });
        if (navigator.canShare({ files: [file] })) {
          try {
            await navigator.share({
              files: [file],
              title: 'ತೂಕ ಇಳಿಸುವ ಕನ್ನಡ ಡಯಟ್ ಚಾರ್ಟ್',
              text: shareText,
            });
            return;
          } catch (err) {
            console.log('Share canceled or fallback to link', err);
          }
        }
      }

      // Fallback: Download image and open WhatsApp link
      downloadDietChartImage();
      const encoded = encodeURIComponent(shareText);
      window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
    }, 'image/png');
  };

  return (
    <div className="space-y-6">
      
      {/* 🌟 HERO HEADER BANNER */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl border-2 border-emerald-500/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="flex items-center gap-4 relative z-10">
          <div className="shrink-0 filter drop-shadow-md">
            <WeightLossDiet3D className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase bg-emerald-400 text-slate-950 px-2.5 py-0.5 rounded-full shadow-xs">
              <Sparkles className="w-3 h-3" /> 100% SCIENTIFIC KARNATAKA DIET PLAN
            </span>
            <h1 className="text-xl sm:text-3xl font-black tracking-tight text-white">
              {lang === 'kn' ? '🥗 ತೂಕ ಇಳಿಸುವ ಕನ್ನಡ ವೈಜ್ಞಾನಿಕ ಡಯಟ್ ಚಾರ್ಟ್' : '🥗 Karnataka Weight Loss Diet Chart Planner'}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-emerald-200">
              {lang === 'kn'
                ? 'ರಾಗಿ ಮುದ್ದೆ, ಸಿರಿಧಾನ್ಯ & ಸೊಪ್ಪಿನ ಸಾರಿನ ನೈಸರ್ಗಿಕ ಡಯಟ್ ಮೂಲಕ ತಿಂಗಳಿಗೆ 3-4 ಕೆಜಿ ತೂಕ ಇಳಿಸಿ Ultra-HD ಚಾರ್ಟ್ ಇಮೇಜ್ ಪಡೆಯಿರಿ!'
                : 'Calculate BMR, BMI, Calorie Deficit & get a customized high-fiber Karnataka diet chart image!'}
            </p>
          </div>
        </div>

        {/* SUMMARY BADGE */}
        <div className="bg-emerald-950/80 border border-emerald-400/40 p-4 rounded-2xl text-center min-w-[170px] shrink-0 shadow-inner self-stretch md:self-auto">
          <span className="text-[10px] uppercase font-bold text-emerald-300 block">ದಿನದ ಗುರಿ ಕ್ಯಾಲೋರಿ</span>
          <span className="text-2xl sm:text-3xl font-black text-amber-300">{healthStats.targetCalories}</span>
          <span className="text-[10px] text-emerald-400 block mt-0.5">kcal / ದಿನಕ್ಕೆ (Safe Loss)</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 🔮 2-COLUMN WORKSPACE: LEFT INPUTS + RIGHT LIVE DIET TIMETABLE */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT COLUMN: EASY CONTROLS & HEALTH PARAMETERS (6 Cols) */}
        <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200 shadow-sm p-5 sm:p-7 space-y-5">
          
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
            <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
              <Scale className="w-5 h-5 text-emerald-600" />
              <span>1. ನಿಮ್ಮ ದೇಹದ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ</span>
            </h2>
            <span className="text-[10px] font-bold bg-emerald-50 text-emerald-800 px-2.5 py-0.5 rounded-full border border-emerald-200">
              100% Scientific
            </span>
          </div>

          {/* NAME & GENDER */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 block">ನಿಮ್ಮ ಹೆಸರು (Your Name):</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 block">ಲಿಂಗ (Gender):</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setGender('male')}
                  className={`py-2 rounded-xl text-xs font-black border transition-all ${
                    gender === 'male'
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  👨 ಗಂಡು (Male)
                </button>
                <button
                  onClick={() => setGender('female')}
                  className={`py-2 rounded-xl text-xs font-black border transition-all ${
                    gender === 'female'
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  👩 ಹೆಣ್ಣು (Female)
                </button>
              </div>
            </div>
          </div>

          {/* WEIGHT & HEIGHT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 flex justify-between">
                <span>⚖️ ಪ್ರಸ್ತುತ ತೂಕ (Weight):</span>
                <span className="text-emerald-700 font-black">{weight} kg</span>
              </label>
              <input
                type="number"
                min={30}
                max={200}
                value={weight}
                onChange={(e) => setWeight(Math.max(30, Number(e.target.value)))}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-black text-slate-900"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 flex justify-between">
                <span>📏 ಎತ್ತರ (Height):</span>
                <span className="text-emerald-700 font-black">{height} cm</span>
              </label>
              <input
                type="number"
                min={100}
                max={250}
                value={height}
                onChange={(e) => setHeight(Math.max(100, Number(e.target.value)))}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-black text-slate-900"
              />
            </div>
          </div>

          {/* AGE & TARGET LOSS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 flex justify-between">
                <span>🎂 ವಯಸ್ಸು (Age):</span>
                <span className="text-emerald-700 font-black">{age} ವರ್ಷ</span>
              </label>
              <input
                type="number"
                min={10}
                max={100}
                value={age}
                onChange={(e) => setAge(Math.max(10, Number(e.target.value)))}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-black text-slate-900"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 flex justify-between">
                <span>🎯 ಇಳಿಸಬೇಕಾದ ತೂಕದ ಗುರಿ:</span>
                <span className="text-amber-700 font-black">{targetWeightLoss} kg</span>
              </label>
              <select
                value={targetWeightLoss}
                onChange={(e) => setTargetWeightLoss(Number(e.target.value))}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-bold text-slate-900"
              >
                <option value={3}>3 kg (ಸುಲಭ ಗುರಿ - 1 ತಿಂಗಳು)</option>
                <option value={5}>5 kg (ಆದರ್ಶ ಗುರಿ - 6-7 ವಾರ)</option>
                <option value={10}>10 kg (ಮುಖ್ಯ ಗುರಿ - 12-14 ವಾರ)</option>
                <option value={15}>15 kg (ಬೊಜ್ಜು ನಿವಾರಣೆ - 20 ವಾರ)</option>
              </select>
            </div>
          </div>

          {/* ACTIVITY LEVEL */}
          <div className="space-y-1.5 pt-1 border-t border-slate-100">
            <label className="text-xs font-bold text-slate-800 block">
              🏃‍♂️ ದಿನನಿತ್ಯದ ಚಟುವಟಿಕೆಯ ಮಟ್ಟ (Daily Physical Activity):
            </label>

            <div className="grid grid-cols-2 gap-2">
              {[
                { val: 1.2, label: 'ಕುಳಿತು ಕೆಲಸ (Sedentary)' },
                { val: 1.375, label: 'ಸಾಧಾರಣ ನಡಿಗೆ (Light Active)' },
                { val: 1.55, label: 'ವ್ಯಾಯಾಮ / ಕೃಷಿ (Moderate)' },
                { val: 1.725, label: 'ಹೆಚ್ಚು ಶ್ರಮದಾಯಕ (Very Active)' },
              ].map((act) => (
                <button
                  key={act.val}
                  onClick={() => setActivity(act.val)}
                  className={`py-2 px-2 rounded-xl text-[11px] font-bold border transition-all text-left truncate ${
                    activity === act.val
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {act.label}
                </button>
              ))}
            </div>
          </div>

          {/* HEALTH STATS SUMMARY TILES */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-center">
            <div className="bg-slate-50 p-2.5 rounded-2xl border border-slate-200">
              <span className="text-[10px] text-slate-500 font-bold block">ನಿಮ್ಮ BMI</span>
              <span className="text-sm font-black text-slate-900">{healthStats.bmi}</span>
              <span className="text-[9px] text-amber-700 font-bold block truncate">{healthStats.bmiStatus}</span>
            </div>

            <div className="bg-slate-50 p-2.5 rounded-2xl border border-slate-200">
              <span className="text-[10px] text-slate-500 font-bold block">ಆದರ್ಶ ತೂಕ</span>
              <span className="text-sm font-black text-emerald-700">{healthStats.idealWeightRange}</span>
              <span className="text-[9px] text-slate-500 font-bold block">BMI 18.5 - 24.9</span>
            </div>

            <div className="bg-slate-50 p-2.5 rounded-2xl border border-slate-200">
              <span className="text-[10px] text-slate-500 font-bold block">ದಿನಕ್ಕೆ ನೀರು</span>
              <span className="text-sm font-black text-blue-700">{healthStats.waterLiters}</span>
              <span className="text-[9px] text-slate-500 font-bold block">ಹೈಡ್ರೇಶನ್</span>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: LIVE DIET TIMETABLE & CARD (6 Cols) */}
        <div className="lg:col-span-6 space-y-4">
          
          {/* THE LIVE RENDERED DIET CARD */}
          <div className="bg-gradient-to-b from-emerald-900 via-teal-900 to-slate-950 text-white rounded-3xl border-4 border-emerald-400 shadow-2xl p-6 sm:p-7 space-y-5 select-none relative overflow-hidden">
            
            {/* Header */}
            <div className="border-b border-emerald-500/40 pb-3 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black text-emerald-300 uppercase tracking-wider block">HEALTH DIET PLAN</span>
                <h3 className="text-lg sm:text-xl font-black text-white">🥗 ತೂಕ ಇಳಿಸುವ ಕನ್ನಡ ಡಯಟ್ ಚಾರ್ಟ್</h3>
                <span className="text-[11px] text-emerald-200">
                  {name} | ದಿನದ ಕ್ಯಾಲೋರಿ: <strong className="text-amber-300">{healthStats.targetCalories} kcal</strong>
                </span>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-slate-950 flex items-center justify-center font-black text-lg shadow-sm border border-emerald-300">
                🥗
              </div>
            </div>

            {/* 5-Meal Schedule Container */}
            <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1 custom-scrollbar text-xs">
              
              <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 flex items-start justify-between gap-2">
                <div>
                  <span className="text-emerald-300 font-black block text-[11px]">🌅 6:30 AM (ಡಿಟಾಕ್ಸ್ ಪಾನೀಯ):</span>
                  <span className="text-slate-100 font-semibold block mt-0.5">ಬೆಚ್ಚಗಿನ ನೀರು + ಜೀರಿಗೆ / ಮೆಂತ್ಯ ನೀರು ಅಥವಾ ನಿಂಬೆರಸ</span>
                </div>
                <span className="text-amber-300 font-black shrink-0 text-[10px]">40 kcal</span>
              </div>

              <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 flex items-start justify-between gap-2">
                <div>
                  <span className="text-emerald-300 font-black block text-[11px]">🥣 8:30 AM (ಬೆಳಗಿನ ಉಪಹಾರ):</span>
                  <span className="text-slate-100 font-semibold block mt-0.5">1 ರಾಗಿ ದೋಸೆ + ಕಡಲೆಕಾಳು ಸಾರು / 2 ಇಡ್ಲಿ ಸಾಂಬಾರ್ / ಮೊಳಕೆ ಕಾಳು</span>
                </div>
                <span className="text-amber-300 font-black shrink-0 text-[10px]">320 kcal</span>
              </div>

              <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 flex items-start justify-between gap-2">
                <div>
                  <span className="text-emerald-300 font-black block text-[11px]">🍏 11:30 AM (ಲಘು ಹಣ್ಣುಗಳು):</span>
                  <span className="text-slate-100 font-semibold block mt-0.5">ಸೌತೆಕಾಯಿ ಸಲಾಡ್ / 1 ಸೇಬು / ಪಪ್ಪಾಯ / ಗ್ರೀನ್ ಟೀ / ಮಜ್ಜಿಗೆ</span>
                </div>
                <span className="text-amber-300 font-black shrink-0 text-[10px]">90 kcal</span>
              </div>

              <div className="p-2.5 rounded-xl bg-emerald-500/20 border-2 border-emerald-400 flex items-start justify-between gap-2">
                <div>
                  <span className="text-amber-300 font-black block text-[11px]">🍛 1:30 PM (ಮಧ್ಯಾಹ್ನದ ಮುಖ್ಯ ಊಟ - Best):</span>
                  <span className="text-white font-bold block mt-0.5">1 ರಾಗಿ ಮುದ್ದೆ + ಬೇಳೆ ಸೊಪ್ಪಿನ ಸಾರು + ಸೌತೆಕಾಯಿ ಸಲಾಡ್ + ಮಜ್ಜಿಗೆ</span>
                </div>
                <span className="text-amber-300 font-black shrink-0 text-[10px]">450 kcal</span>
              </div>

              <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 flex items-start justify-between gap-2">
                <div>
                  <span className="text-emerald-300 font-black block text-[11px]">🍵 4:30 PM (ಸಂಜೆಯ ಸ್ನ್ಯಾಕ್ಸ್):</span>
                  <span className="text-slate-100 font-semibold block mt-0.5">ಸಕ್ಕರೆ ರಹಿತ ಗ್ರೀನ್ ಟೀ + ಹುರಿದ ಕಡಲೆ / ಮಖಾನ</span>
                </div>
                <span className="text-amber-300 font-black shrink-0 text-[10px]">110 kcal</span>
              </div>

              <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 flex items-start justify-between gap-2">
                <div>
                  <span className="text-emerald-300 font-black block text-[11px]">🥗 7:30 PM (ರಾತ್ರಿ ಲಘು ಊಟ - 8 PM ಒಳಗೆ):</span>
                  <span className="text-slate-100 font-semibold block mt-0.5">1-2 ಗೋಧಿ ಚಪಾತಿ / ತರಕಾರಿ ಓಟ್ಸ್ ಕಿಚಡಿ / ತರಕಾರಿ ಸೂಪ್</span>
                </div>
                <span className="text-amber-300 font-black shrink-0 text-[10px]">380 kcal</span>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-2 border-t border-white/10">
              <button
                onClick={downloadDietChartImage}
                className="w-full py-3.5 px-4 rounded-2xl bg-emerald-400 hover:bg-emerald-500 text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5 text-slate-950" />
                <span>📸 Ultra-HD ಡಯಟ್ ಚಾರ್ಟ್ ಇಮೇಜ್ ಡೌನ್‌ಲೋಡ್ (PNG)</span>
              </button>

              <button
                onClick={shareToWhatsApp}
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-sm transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                <span>WhatsApp ನಲ್ಲಿ ಡಯಟ್ ಚಾರ್ಟ್ & ಇಮೇಜ್ ಶೇರ್ ಮಾಡಿ</span>
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
