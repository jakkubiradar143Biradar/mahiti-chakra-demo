"use client";

import React, { useState, useMemo } from 'react';
import { useLanguage } from './LanguageContext';
import {
  Sparkles, Download, Share2, Printer, CheckCircle2,
  Compass, MapPin, Calculator, Layers, ArrowRight,
  ShieldCheck, FileText, Check, Award, RefreshCw, Layers3
} from 'lucide-react';
import { LandSurvey3D } from './LiveAppIcons3D';

// Karnataka Land Conversion Constants
const SQFT_PER_GUNTA = 1089;
const SQFT_PER_ACRE = 43560; // 40 Guntas
const SQFT_PER_CENT = 435.6; // 100 Cents = 1 Acre
const SQFT_PER_ANKANA = 64; // 8ft x 8ft standard
const SQFT_PER_SQM = 10.7639;
const SQFT_PER_SQYARD = 9;
const SQFT_PER_HECTARE = 107639; // 2.471 Acres
const SQFT_PER_BIGHA = 27225; // ~25 Guntas

export const LandSurveyComp: React.FC = () => {
  const { lang } = useLanguage();

  // Active Tab: 'boundary' (4-directions) | 'converter' (unit conversion)
  const [activeTab, setActiveTab] = useState<'boundary' | 'converter'>('boundary');

  // 1. Boundary Mode Inputs (Feet)
  const [northFt, setNorthFt] = useState<number>(165); // 5 Guntas side approx
  const [southFt, setSouthFt] = useState<number>(165);
  const [eastFt, setEastFt] = useState<number>(66);
  const [westFt, setWestFt] = useState<number>(66);

  // Survey Meta Details
  const [ownerName, setOwnerName] = useState('ಬಸವರಾಜ ಶಿವಪ್ಪ ಪಾಟೀಲ್');
  const [surveyNo, setSurveyNo] = useState('Sy No. 142/3A');
  const [villageName, setVillageName] = useState('ಶಿವಮೊಗ್ಗ ಗ್ರಾಮಾಂತರ');
  const [talukDistrict, setTalukDistrict] = useState('ಶಿವಮೊಗ್ಗ ತಾಲೂಕು & ಜಿಲ್ಲೆ');

  // Boundaries (ಚತುಸ್ಸಿಮೆ)
  const [eastBoundary, setEastBoundary] = useState('ರಾಜಪ್ಪನವರ ಜಮೀನು');
  const [westBoundary, setWestBoundary] = useState('ಗ್ರಾಮ ಪಂಚಾಯತ್ ರಸ್ತೆ');
  const [northBoundary, setNorthBoundary] = useState('ಕಾಲುವೆ / ಹಳ್ಳ');
  const [southBoundary, setSouthBoundary] = useState('ಮಲ್ಲೇಶಪ್ಪನವರ ಜಮೀನು');

  // Valuation
  const [ratePerGunta, setRatePerGunta] = useState<number>(75000);

  // 2. Unit Converter Mode State
  const [convValue, setConvValue] = useState<number>(5);
  const [convUnit, setConvUnit] = useState<string>('gunta');

  // 🔬 CALCULATIONS
  // Boundary calculations
  const boundaryResults = useMemo(() => {
    const avgLength = (northFt + southFt) / 2;
    const avgBreadth = (eastFt + westFt) / 2;
    const totalSqFt = avgLength * avgBreadth;

    const totalGuntas = totalSqFt / SQFT_PER_GUNTA;
    const acres = Math.floor(totalGuntas / 40);
    const guntas = Math.floor(totalGuntas % 40);
    const remainingSqFt = Math.round(totalSqFt - (acres * 40 + guntas) * SQFT_PER_GUNTA);
    const annaFraction = (remainingSqFt / (SQFT_PER_GUNTA / 16)).toFixed(1); // 16 Annas in 1 Gunta

    const cents = (totalSqFt / SQFT_PER_CENT).toFixed(2);
    const ankanas = (totalSqFt / SQFT_PER_ANKANA).toFixed(1);
    const sqMeters = (totalSqFt / SQFT_PER_SQM).toFixed(1);
    const sqYards = (totalSqFt / SQFT_PER_SQYARD).toFixed(1);
    const hectares = (totalSqFt / SQFT_PER_HECTARE).toFixed(3);

    const totalValue = Math.round(totalGuntas * ratePerGunta);

    return {
      avgLength: avgLength.toFixed(1),
      avgBreadth: avgBreadth.toFixed(1),
      totalSqFt: Math.round(totalSqFt),
      totalGuntas: totalGuntas.toFixed(2),
      formattedLand: `${acres} ಎಕರೆ ${guntas} ಗುಂಟೆ ${remainingSqFt > 0 ? `(${remainingSqFt} ಚ.ಅಡಿ)` : ''}`,
      acres,
      guntas,
      remainingSqFt,
      annaFraction,
      cents,
      ankanas,
      sqMeters,
      sqYards,
      hectares,
      totalValue,
    };
  }, [northFt, southFt, eastFt, westFt, ratePerGunta]);

  // Converter Mode Calculations
  const convResults = useMemo(() => {
    let baseSqFt = 0;
    if (convUnit === 'acre') baseSqFt = convValue * SQFT_PER_ACRE;
    else if (convUnit === 'gunta') baseSqFt = convValue * SQFT_PER_GUNTA;
    else if (convUnit === 'cent') baseSqFt = convValue * SQFT_PER_CENT;
    else if (convUnit === 'ankana') baseSqFt = convValue * SQFT_PER_ANKANA;
    else if (convUnit === 'sqft') baseSqFt = convValue;
    else if (convUnit === 'sqm') baseSqFt = convValue * SQFT_PER_SQM;
    else if (convUnit === 'sqyard') baseSqFt = convValue * SQFT_PER_SQYARD;
    else if (convUnit === 'hectare') baseSqFt = convValue * SQFT_PER_HECTARE;
    else if (convUnit === 'bigha') baseSqFt = convValue * SQFT_PER_BIGHA;

    return {
      acre: (baseSqFt / SQFT_PER_ACRE).toFixed(3),
      gunta: (baseSqFt / SQFT_PER_GUNTA).toFixed(2),
      cent: (baseSqFt / SQFT_PER_CENT).toFixed(2),
      ankana: (baseSqFt / SQFT_PER_ANKANA).toFixed(1),
      sqft: Math.round(baseSqFt).toLocaleString('en-IN'),
      sqm: (baseSqFt / SQFT_PER_SQM).toFixed(1),
      sqyard: (baseSqFt / SQFT_PER_SQYARD).toFixed(1),
      hectare: (baseSqFt / SQFT_PER_HECTARE).toFixed(4),
      bigha: (baseSqFt / SQFT_PER_BIGHA).toFixed(2),
    };
  }, [convValue, convUnit]);

  // 🎨 CANVAS GENERATOR (ULTRA-HD CERTIFICATE 1000px x 1450px)
  const generateCanvas = (): HTMLCanvasElement => {
    const canvas = document.createElement('canvas');
    canvas.width = 1000;
    canvas.height = 1450;
    const ctx = canvas.getContext('2d');
    if (!ctx) return canvas;

    // Background Gradient (Parchment & Emerald)
    const bgGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    bgGrad.addColorStop(0, '#fefce8');
    bgGrad.addColorStop(0.2, '#ffffff');
    bgGrad.addColorStop(1, '#fefce8');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Ornate Outer Double Borders
    ctx.strokeStyle = '#15803d';
    ctx.lineWidth = 8;
    ctx.strokeRect(25, 25, canvas.width - 50, canvas.height - 50);

    ctx.strokeStyle = '#ca8a04';
    ctx.lineWidth = 2;
    ctx.strokeRect(35, 35, canvas.width - 70, canvas.height - 70);

    // Header Banner
    const headerGrad = ctx.createLinearGradient(40, 40, canvas.width - 80, 140);
    headerGrad.addColorStop(0, '#14532d');
    headerGrad.addColorStop(1, '#15803d');
    ctx.fillStyle = headerGrad;
    ctx.fillRect(40, 40, canvas.width - 80, 110);

    ctx.fillStyle = '#fde047';
    ctx.font = 'bold 30px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('🌾 ಕರ್ನಾಟಕ ಜಮೀನು ಅಳತೆ & ಸರ್ವೆ ಪ್ರಮಾಣಪತ್ರ', canvas.width / 2, 85);

    ctx.fillStyle = '#ffffff';
    ctx.font = '15px sans-serif';
    ctx.fillText('ಮಾಹಿತಿ ಚಕ್ರ ಕೃಷಿ & ಭೂಮಾಪನ ಡಿಜಿಟಲ್ ಪೋರ್ಟಲ್ - 100% ಕರಾರುವಾಕ್ ಲೆಕ್ಕ', canvas.width / 2, 122);

    // Transaction Meta Row
    ctx.textAlign = 'left';
    ctx.fillStyle = '#78350f';
    ctx.font = 'bold 15px sans-serif';
    ctx.fillText(`ಪ್ರಮಾಣಪತ್ರ ಸಂ: MC-SURVEY-${Date.now().toString().slice(-6)}`, 50, 180);
    ctx.textAlign = 'right';
    ctx.fillText(`ದಿನಾಂಕ: ${new Date().toLocaleDateString('kn-IN', { day: 'numeric', month: 'long', year: 'numeric' })}`, canvas.width - 50, 180);

    // Survey Details Box
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(50, 200, canvas.width - 100, 100);
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(50, 200, canvas.width - 100, 100);

    ctx.textAlign = 'left';
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 16px sans-serif';
    ctx.fillText(`👤 ಜಮೀನು ಮಾಲೀಕರು: ${ownerName}`, 70, 235);
    ctx.fillText(`📍 ಸರ್ವೆ / ಹಿಸ್ಸಾ ನಂಬರ್: ${surveyNo}`, 70, 275);
    ctx.fillText(`🏡 ಗ್ರಾಮ / ಹೋಬಳಿ: ${villageName}`, 540, 235);
    ctx.fillText(`🏛️ ತಾಲೂಕು & ಜಿಲ್ಲೆ: ${talukDistrict}`, 540, 275);

    // 🗺️ 4-DIRECTION BOUNDARY DIAGRAM (VISUAL PLOT MAP)
    let y = 330;
    ctx.fillStyle = '#ecfdf5';
    ctx.fillRect(50, y, canvas.width - 100, 280);
    ctx.strokeStyle = '#86efac';
    ctx.strokeRect(50, y, canvas.width - 100, 280);

    // Map Center Plot Box
    ctx.fillStyle = '#bbf7d0';
    ctx.fillRect(250, y + 40, 500, 190);
    ctx.strokeStyle = '#15803d';
    ctx.lineWidth = 3;
    ctx.strokeRect(250, y + 40, 500, 190);

    // Plot Details in center
    ctx.textAlign = 'center';
    ctx.fillStyle = '#064e3b';
    ctx.font = 'bold 22px sans-serif';
    ctx.fillText(`ಒಟ್ಟು ವಿಸ್ತೀರ್ಣ: ${boundaryResults.formattedLand}`, 500, y + 125);
    ctx.font = 'bold 16px sans-serif';
    ctx.fillStyle = '#047857';
    ctx.fillText(`( ${boundaryResults.totalSqFt.toLocaleString('en-IN')} ಚದರ ಅಡಿ / ${boundaryResults.totalGuntas} ಗುಂಟೆ )`, 500, y + 160);

    // North (Top)
    ctx.fillStyle = '#1e293b';
    ctx.font = 'bold 15px sans-serif';
    ctx.fillText(`⬆️ ಉತ್ತರ: ${northFt} ft (${northBoundary})`, 500, y + 28);

    // South (Bottom)
    ctx.fillText(`⬇️ ದಕ್ಷಿಣ: ${southFt} ft (${southBoundary})`, 500, y + 258);

    // West (Left)
    ctx.textAlign = 'left';
    ctx.fillText(`⬅️ ಪಶ್ಚಿಮ: ${westFt} ft`, 65, y + 135);
    ctx.font = '12px sans-serif';
    ctx.fillStyle = '#64748b';
    ctx.fillText(`(${westBoundary})`, 65, y + 155);

    // East (Right)
    ctx.textAlign = 'right';
    ctx.fillStyle = '#1e293b';
    ctx.font = 'bold 15px sans-serif';
    ctx.fillText(`ಪೂರ್ವ: ${eastFt} ft ➡️`, canvas.width - 65, y + 135);
    ctx.font = '12px sans-serif';
    ctx.fillStyle = '#64748b';
    ctx.fillText(`(${eastBoundary})`, canvas.width - 65, y + 155);

    // Table Breakdown Header
    y += 310;
    ctx.fillStyle = '#15803d';
    ctx.fillRect(50, y, canvas.width - 100, 45);

    ctx.textAlign = 'left';
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 16px sans-serif';
    ctx.fillText('ಅಳತೆ ಮಾನಗಳು (Measurement Units)', 70, y + 28);
    ctx.textAlign = 'right';
    ctx.fillText('ನಿಖರ ಪರಿವರ್ತಿತ ಮೌಲ್ಯ', canvas.width - 70, y + 28);

    const rows = [
      { label: '🌾 ಎಕರೆ & ಗುಂಟೆ (Acres & Guntas)', val: `${boundaryResults.acres} ಎಕರೆ ${boundaryResults.guntas} ಗುಂಟೆ` },
      { label: '📐 ಒಟ್ಟು ಗುಂಟೆ (Total Guntas)', val: `${boundaryResults.totalGuntas} ಗುಂಟೆ` },
      { label: '📏 ಚದರ ಅಡಿ (Square Feet - Sq.Ft)', val: `${boundaryResults.totalSqFt.toLocaleString('en-IN')} Sq.Ft` },
      { label: '🏡 ಸೆಂಟು (Cents - 100 Cents = 1 Acre)', val: `${boundaryResults.cents} Cents` },
      { label: '🏛️ ಅಂಕಣ (Ankana - 64 Sq.Ft)', val: `${boundaryResults.ankanas} ಅಂಕಣ` },
      { label: '🌐 ಚದರ ಮೀಟರ್ (Square Meters)', val: `${boundaryResults.sqMeters} Sq.M` },
      { label: '🌿 ಹೆಕ್ಟೇರ್ (Hectares)', val: `${boundaryResults.hectares} Hectare` },
    ];

    y += 45;
    rows.forEach((row, i) => {
      ctx.fillStyle = i % 2 === 0 ? '#ffffff' : '#f0fdf4';
      ctx.fillRect(50, y, canvas.width - 100, 38);
      ctx.strokeStyle = '#e2e8f0';
      ctx.strokeRect(50, y, canvas.width - 100, 38);

      ctx.textAlign = 'left';
      ctx.fillStyle = '#1e293b';
      ctx.font = 'bold 14px sans-serif';
      ctx.fillText(row.label, 70, y + 24);

      ctx.textAlign = 'right';
      ctx.fillStyle = '#065f46';
      ctx.font = 'bold 15px sans-serif';
      ctx.fillText(row.val, canvas.width - 70, y + 24);

      y += 38;
    });

    // Market Valuation Banner
    y += 15;
    ctx.fillStyle = '#047857';
    ctx.fillRect(50, y, canvas.width - 100, 65);

    ctx.textAlign = 'left';
    ctx.fillStyle = '#fde047';
    ctx.font = 'bold 18px sans-serif';
    ctx.fillText(`ಅಂದಾಜು ಜಮೀನಿನ ಒಟ್ಟು ಮೌಲ್ಯ (ಗುಂಟೆಗೆ ₹${ratePerGunta.toLocaleString('en-IN')} ರಂತೆ):`, 70, y + 38);

    ctx.textAlign = 'right';
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 26px sans-serif';
    ctx.fillText(`₹${boundaryResults.totalValue.toLocaleString('en-IN')}`, canvas.width - 70, y + 42);

    // Signatures
    y += 100;
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(80, y);
    ctx.lineTo(260, y);
    ctx.moveTo(canvas.width - 260, y);
    ctx.lineTo(canvas.width - 80, y);
    ctx.stroke();

    ctx.textAlign = 'center';
    ctx.fillStyle = '#475569';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText('ಭೂಮಾಲೀಕರ ಸಹಿ (Owner)', 170, y + 25);
    ctx.fillText('ಸರ್ವೇಯರ್ / ಅಳತೆಗಾರರ ಸಹಿ', canvas.width - 170, y + 25);

    return canvas;
  };

  // Download Ultra-HD Image
  const downloadCertificate = () => {
    const canvas = generateCanvas();
    const link = document.createElement('a');
    link.download = `karnataka-land-survey-certificate-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  // 📸 & 💬 SMART WHATSAPP & IMAGE SHARE WITH WEBSITE LINK
  const shareToWhatsApp = async () => {
    const canvas = generateCanvas();
    const siteUrl = typeof window !== 'undefined' ? `${window.location.origin}/land-converter` : 'https://mahiti-chakra-portal.vercel.app/land-converter';

    const shareText = `🌾 *ಕರ್ನಾಟಕ ಜಮೀನು ಅಳತೆ & ಸರ್ವೆ ಪ್ರಮಾಣಪತ್ರ (Mahiti Chakra)*\n\n` +
      `👤 ಮಾಲೀಕರು: *${ownerName}*\n` +
      `📍 ಸರ್ವೆ ನಂಬರ್: *${surveyNo}*\n` +
      `🏡 ಸ್ಥಳ: *${villageName}, ${talukDistrict}*\n\n` +
      `📐 *೪ ದಿಕ್ಕುಗಳ ಅಳತೆ:*\n` +
      `• ಉತ್ತರ: ${northFt} ft (${northBoundary})\n` +
      `• ದಕ್ಷಿಣ: ${southFt} ft (${southBoundary})\n` +
      `• ಪೂರ್ವ: ${eastFt} ft (${eastBoundary})\n` +
      `• ಪಶ್ಚಿಮ: ${westFt} ft (${westBoundary})\n\n` +
      `✨ *ಒಟ್ಟು ವಿಸ್ತೀರ್ಣ: ${boundaryResults.formattedLand}*\n` +
      `• ಒಟ್ಟು ಗುಂಟೆ: *${boundaryResults.totalGuntas} ಗುಂಟೆ*\n` +
      `• ಚದರ ಅಡಿ: *${boundaryResults.totalSqFt.toLocaleString('en-IN')} Sq.Ft*\n` +
      `• ಸೆಂಟು: *${boundaryResults.cents} Cents*\n` +
      `• ಅಂಕಣ: *${boundaryResults.ankanas} ಅಂಕಣ*\n` +
      `💰 ಅಂದಾಜು ಮೌಲ್ಯ: *₹${boundaryResults.totalValue.toLocaleString('en-IN')}*\n` +
      `--------------------------------\n` +
      `🌐 *ನೀವು ಉಚಿತವಾಗಿ ಜಮೀನು ಅಳತೆ ಮಾಡಿ & ಸರ್ವೆ ಪ್ರಮಾಣಪತ್ರ ಪಡೆಯಿರಿ:*\n👉 ${siteUrl}`;

    canvas.toBlob(async (blob) => {
      if (blob && navigator.share && navigator.canShare) {
        const file = new File([blob], `land-survey-certificate-${Date.now()}.png`, { type: 'image/png' });
        if (navigator.canShare({ files: [file] })) {
          try {
            await navigator.share({
              files: [file],
              title: 'ಜಮೀನು ಅಳತೆ ಸರ್ವೆ ಪ್ರಮಾಣಪತ್ರ',
              text: shareText,
            });
            return;
          } catch (err) {
            console.log('Share canceled or fallback to link', err);
          }
        }
      }

      // Fallback: Download image and open WhatsApp link
      downloadCertificate();
      const encoded = encodeURIComponent(shareText);
      window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
    }, 'image/png');
  };

  return (
    <div className="space-y-6">
      
      {/* 🌟 HERO HEADER BANNER */}
      <div className="bg-gradient-to-r from-emerald-800 via-green-800 to-emerald-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl border-2 border-emerald-500/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="flex items-center gap-4 relative z-10">
          <div className="shrink-0 filter drop-shadow-md">
            <LandSurvey3D className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-full shadow-xs">
              <Sparkles className="w-3 h-3" /> 100% ACCURATE KARNATAKA LAND SURVEY
            </span>
            <h1 className="text-xl sm:text-3xl font-black tracking-tight text-white">
              {lang === 'kn' ? '🌾 ಕರ್ನಾಟಕ ಜಮೀನು ಅಳತೆ, ಸರ್ವೆ ನಕ್ಷೆ & ಗುಂಟೆ ಕನ್ವರ್ಟರ್' : '🌾 Karnataka Land Area & Survey Converter'}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-emerald-200">
              {lang === 'kn'
                ? '4 ದಿಕ್ಕುಗಳ ಅಳತೆ ಹಾಕಿ ಎಕರೆ, ಗುಂಟೆ, ಸೆಂಟು, ಅಂಕಣ & ಚದರ ಅಡಿ ಲೆಕ್ಕ ಹಾಕಿ Ultra-HD ಸರ್ವೆ ಪ್ರಮಾಣಪತ್ರ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ!'
                : 'Calculate Gunta, Acre, Cent, Ankana, Sq.Ft with 4-direction boundary map & download HD Survey Certificate!'}
            </p>
          </div>
        </div>

        {/* SUMMARY BADGE */}
        <div className="bg-emerald-950/80 border border-emerald-400/40 p-4 rounded-2xl text-center min-w-[170px] shrink-0 shadow-inner self-stretch md:self-auto">
          <span className="text-[10px] uppercase font-bold text-emerald-300 block">ಒಟ್ಟು ಜಮೀನು ವಿಸ್ತೀರ್ಣ</span>
          <span className="text-xl sm:text-2xl font-black text-amber-300">{boundaryResults.formattedLand}</span>
          <span className="text-[10px] text-emerald-400 block mt-0.5">({boundaryResults.totalGuntas} ಗುಂಟೆ)</span>
        </div>
      </div>

      {/* 🧭 TAB NAVIGATION: 4-DIRECTION PLOT OR INSTANT UNIT CONVERTER */}
      <div className="flex rounded-2xl bg-slate-100 p-1.5 border border-slate-200 max-w-md">
        <button
          onClick={() => setActiveTab('boundary')}
          className={`flex-1 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 ${
            activeTab === 'boundary'
              ? 'bg-emerald-700 text-white shadow-sm'
              : 'text-slate-700 hover:bg-slate-200'
          }`}
        >
          <Compass className="w-4 h-4" />
          <span>೪ ದಿಕ್ಕುಗಳ ಅಳತೆ (4-Sides)</span>
        </button>
        <button
          onClick={() => setActiveTab('converter')}
          className={`flex-1 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 ${
            activeTab === 'converter'
              ? 'bg-emerald-700 text-white shadow-sm'
              : 'text-slate-700 hover:bg-slate-200'
          }`}
        >
          <Calculator className="w-4 h-4" />
          <span>ಎಲ್ಲಾ ಅಳತೆ ಕನ್ವರ್ಟರ್ (Units)</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* 🔮 2-COLUMN WORKSPACE: LEFT CONTROLS + RIGHT LIVE MAP & CERTIFICATE */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT COLUMN: CONTROLS (6 Cols) */}
        <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200 shadow-sm p-5 sm:p-7 space-y-5">
          
          {activeTab === 'boundary' ? (
            <>
              <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-emerald-600" />
                  <span>1. ನಾಲ್ಕೂ ದಿಕ್ಕುಗಳ ಅಳತೆ (ಅಡಿಗಳಲ್ಲಿ / Feet)</span>
                </h2>
                <span className="text-[10px] font-bold bg-emerald-50 text-emerald-800 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Feet to Gunta
                </span>
              </div>

              {/* 4 SIDES INPUTS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1 bg-slate-50 p-3 rounded-2xl border border-slate-200">
                  <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <span>⬆️ ಉತ್ತರ (North Length):</span>
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={northFt}
                      onChange={(e) => setNorthFt(Math.max(1, Number(e.target.value)))}
                      className="w-full bg-white border border-slate-300 rounded-xl p-2 text-xs font-black text-slate-900"
                    />
                    <span className="self-center text-xs font-bold text-slate-500">ft</span>
                  </div>
                  <input
                    type="text"
                    placeholder="ಉತ್ತರದ ಗಡಿ (ಕಾಲುವೆ/ರಸ್ತೆ)"
                    value={northBoundary}
                    onChange={(e) => setNorthBoundary(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl p-1.5 text-[11px] text-slate-700"
                  />
                </div>

                <div className="space-y-1 bg-slate-50 p-3 rounded-2xl border border-slate-200">
                  <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <span>⬇️ ದಕ್ಷಿಣ (South Length):</span>
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={southFt}
                      onChange={(e) => setSouthFt(Math.max(1, Number(e.target.value)))}
                      className="w-full bg-white border border-slate-300 rounded-xl p-2 text-xs font-black text-slate-900"
                    />
                    <span className="self-center text-xs font-bold text-slate-500">ft</span>
                  </div>
                  <input
                    type="text"
                    placeholder="ದಕ್ಷಿಣದ ಗಡಿ (ಜಮೀನು)"
                    value={southBoundary}
                    onChange={(e) => setSouthBoundary(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl p-1.5 text-[11px] text-slate-700"
                  />
                </div>

                <div className="space-y-1 bg-slate-50 p-3 rounded-2xl border border-slate-200">
                  <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <span>➡️ ಪೂರ್ವ (East Breadth):</span>
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={eastFt}
                      onChange={(e) => setEastFt(Math.max(1, Number(e.target.value)))}
                      className="w-full bg-white border border-slate-300 rounded-xl p-2 text-xs font-black text-slate-900"
                    />
                    <span className="self-center text-xs font-bold text-slate-500">ft</span>
                  </div>
                  <input
                    type="text"
                    placeholder="ಪೂರ್ವದ ಗಡಿ (ಜಮೀನು)"
                    value={eastBoundary}
                    onChange={(e) => setEastBoundary(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl p-1.5 text-[11px] text-slate-700"
                  />
                </div>

                <div className="space-y-1 bg-slate-50 p-3 rounded-2xl border border-slate-200">
                  <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <span>⬅️ ಪಶ್ಚಿಮ (West Breadth):</span>
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={westFt}
                      onChange={(e) => setWestFt(Math.max(1, Number(e.target.value)))}
                      className="w-full bg-white border border-slate-300 rounded-xl p-2 text-xs font-black text-slate-900"
                    />
                    <span className="self-center text-xs font-bold text-slate-500">ft</span>
                  </div>
                  <input
                    type="text"
                    placeholder="ಪಶ್ಚಿಮದ ಗಡಿ (ರಸ್ತೆ)"
                    value={westBoundary}
                    onChange={(e) => setWestBoundary(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl p-1.5 text-[11px] text-slate-700"
                  />
                </div>
              </div>

              {/* OWNER & SURVEY DETAILS */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                <span className="text-xs font-black text-slate-900 block">📝 ಸರ್ವೆ ವಿವರಗಳು (Certificate Details):</span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-600 block">ಮಾಲೀಕರ ಹೆಸರು:</label>
                    <input
                      type="text"
                      value={ownerName}
                      onChange={(e) => setOwnerName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 text-xs font-bold text-slate-900"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-600 block">ಸರ್ವೆ / ಹಿಸ್ಸಾ ನಂಬರ್:</label>
                    <input
                      type="text"
                      value={surveyNo}
                      onChange={(e) => setSurveyNo(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 text-xs font-bold text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-600 block">ಗ್ರಾಮ / ಹೋಬಳಿ:</label>
                    <input
                      type="text"
                      value={villageName}
                      onChange={(e) => setVillageName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 text-xs font-bold text-slate-900"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-600 block">ಗುಂಟೆಗೆ ಮಾರುಕಟ್ಟೆ ಬೆಲೆ (₹):</label>
                    <input
                      type="number"
                      value={ratePerGunta}
                      onChange={(e) => setRatePerGunta(Math.max(0, Number(e.target.value)))}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 text-xs font-bold text-slate-900"
                    />
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* CONVERTER MODE */
            <div className="space-y-5">
              <div className="border-b border-slate-100 pb-3">
                <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-emerald-600" />
                  <span>ಕರ್ನಾಟಕ ಜಮೀನು ಅಳತೆ ಕನ್ವರ್ಟರ್ (Instant Converter)</span>
                </h2>
                <p className="text-xs text-slate-500 mt-1">ಯಾವುದೇ ಅಳತೆಯನ್ನು ನಮೂದಿಸಿ, ಉಳಿದೆಲ್ಲಾ ಅಳತೆಗಳಿಗೆ ತಕ್ಷಣ ಪರಿವರ್ತಿಸಿ:</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">ಅಳತೆಯ ಮೌಲ್ಯ (Value):</label>
                  <input
                    type="number"
                    value={convValue}
                    onChange={(e) => setConvValue(Math.max(0, Number(e.target.value)))}
                    className="w-full bg-slate-50 border border-slate-300 rounded-2xl p-3 text-lg font-black text-slate-900"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">ಅಳತೆ ಮಾನ (Unit):</label>
                  <select
                    value={convUnit}
                    onChange={(e) => setConvUnit(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-2xl p-3 text-sm font-black text-slate-900"
                  >
                    <option value="gunta">ಗುಂಟೆ (Guntas)</option>
                    <option value="acre">ಎಕರೆ (Acres)</option>
                    <option value="cent">ಸೆಂಟು (Cents)</option>
                    <option value="ankana">ಅಂಕಣ (Ankanas)</option>
                    <option value="sqft">ಚದರ ಅಡಿ (Sq.Ft)</option>
                    <option value="sqm">ಚದರ ಮೀಟರ್ (Sq.Meters)</option>
                    <option value="sqyard">ಚದರ ಗಜ (Sq.Yards)</option>
                    <option value="hectare">ಹೆಕ್ಟೇರ್ (Hectares)</option>
                    <option value="bigha">ಬಿಘಾ (Bighas)</option>
                  </select>
                </div>
              </div>

              {/* CONVERTED RESULTS TILES */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-3 border-t border-slate-100">
                <div className="bg-emerald-50/80 p-3 rounded-2xl border border-emerald-200">
                  <span className="text-[10px] text-emerald-800 font-bold block">🌾 ಎಕರೆ (Acres)</span>
                  <span className="text-base font-black text-emerald-950">{convResults.acre}</span>
                </div>

                <div className="bg-emerald-50/80 p-3 rounded-2xl border border-emerald-200">
                  <span className="text-[10px] text-emerald-800 font-bold block">📐 ಗುಂಟೆ (Guntas)</span>
                  <span className="text-base font-black text-emerald-950">{convResults.gunta}</span>
                </div>

                <div className="bg-emerald-50/80 p-3 rounded-2xl border border-emerald-200">
                  <span className="text-[10px] text-emerald-800 font-bold block">🏡 ಸೆಂಟು (Cents)</span>
                  <span className="text-base font-black text-emerald-950">{convResults.cent}</span>
                </div>

                <div className="bg-emerald-50/80 p-3 rounded-2xl border border-emerald-200">
                  <span className="text-[10px] text-emerald-800 font-bold block">🏛️ ಅಂಕಣ (Ankana)</span>
                  <span className="text-base font-black text-emerald-950">{convResults.ankana}</span>
                </div>

                <div className="bg-emerald-50/80 p-3 rounded-2xl border border-emerald-200">
                  <span className="text-[10px] text-emerald-800 font-bold block">📏 ಚದರ ಅಡಿ (Sq.Ft)</span>
                  <span className="text-base font-black text-emerald-950">{convResults.sqft}</span>
                </div>

                <div className="bg-emerald-50/80 p-3 rounded-2xl border border-emerald-200">
                  <span className="text-[10px] text-emerald-800 font-bold block">🌐 ಚದರ ಮೀಟರ್ (Sq.M)</span>
                  <span className="text-base font-black text-emerald-950">{convResults.sqm}</span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* RIGHT COLUMN: LIVE MAP & SURVEY CERTIFICATE PREVIEW (6 Cols) */}
        <div className="lg:col-span-6 space-y-4">
          
          <div className="bg-gradient-to-b from-emerald-950 via-teal-900 to-slate-950 text-white rounded-3xl border-4 border-emerald-400 shadow-2xl p-6 sm:p-7 space-y-5 select-none relative overflow-hidden">
            
            {/* Header */}
            <div className="border-b border-emerald-500/40 pb-3 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black text-emerald-300 uppercase tracking-wider block">SURVEY CERTIFICATE PREVIEW</span>
                <h3 className="text-lg sm:text-xl font-black text-white">🌾 ಜಮೀನು ಅಳತೆ & ಸರ್ವೆ ನಕ್ಷೆ</h3>
                <span className="text-[11px] text-emerald-200">
                  {ownerName} | {surveyNo}
                </span>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-slate-950 flex items-center justify-center font-black text-lg shadow-sm border border-emerald-300">
                🗺️
              </div>
            </div>

            {/* Visual Boundary Map */}
            <div className="bg-emerald-900/60 p-4 rounded-2xl border border-emerald-400/40 space-y-3 text-center">
              <span className="text-[11px] font-bold text-amber-300 block">⬆️ ಉತ್ತರ: {northFt} ft ({northBoundary})</span>
              
              <div className="flex items-center justify-between gap-2 px-2">
                <span className="text-[11px] font-bold text-slate-200">⬅️ {westFt} ft</span>
                <div className="bg-emerald-700/80 p-4 rounded-xl border border-emerald-300 flex-1 my-1">
                  <span className="text-base sm:text-lg font-black text-white block">{boundaryResults.formattedLand}</span>
                  <span className="text-xs font-bold text-amber-300 block mt-0.5">{boundaryResults.totalSqFt.toLocaleString('en-IN')} Sq.Ft</span>
                </div>
                <span className="text-[11px] font-bold text-slate-200">{eastFt} ft ➡️</span>
              </div>

              <span className="text-[11px] font-bold text-amber-300 block">⬇️ ದಕ್ಷಿಣ: {southFt} ft ({southBoundary})</span>
            </div>

            {/* Units Breakdown Table */}
            <div className="space-y-1.5 text-xs bg-black/40 p-3.5 rounded-2xl border border-white/10">
              <div className="flex justify-between py-1 border-b border-white/10">
                <span className="text-slate-300">ಒಟ್ಟು ಗುಂಟೆ (Total Guntas):</span>
                <span className="text-amber-300 font-bold">{boundaryResults.totalGuntas} ಗುಂಟೆ</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/10">
                <span className="text-slate-300">ಸೆಂಟು (Cents):</span>
                <span className="text-white font-bold">{boundaryResults.cents} Cents</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/10">
                <span className="text-slate-300">ಅಂಕಣ (Ankanas):</span>
                <span className="text-white font-bold">{boundaryResults.ankanas} ಅಂಕಣ</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-emerald-300 font-bold">ಅಂದಾಜು ಮಾರುಕಟ್ಟೆ ಮೌಲ್ಯ:</span>
                <span className="text-amber-300 font-black text-sm">₹{boundaryResults.totalValue.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-2 border-t border-white/10">
              <button
                onClick={downloadCertificate}
                className="w-full py-3.5 px-4 rounded-2xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5 text-slate-950" />
                <span>📸 Ultra-HD ಸರ್ವೆ ಪ್ರಮಾಣಪತ್ರ ಡೌನ್‌ಲೋಡ್ (PNG)</span>
              </button>

              <button
                onClick={shareToWhatsApp}
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-sm transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                <span>WhatsApp ನಲ್ಲಿ ನಕ್ಷೆ & ವಿವರ ಶೇರ್ ಮಾಡಿ</span>
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
