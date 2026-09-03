"use client";

import React, { useState, useRef } from 'react';
import { useLanguage } from './LanguageContext';
import {
  Sparkles, Download, Share2, Printer, CheckCircle2,
  Calendar, MapPin, Clock, Heart, Users, Check, Palette,
  Image as ImageIcon, RefreshCw, Eye
} from 'lucide-react';
import { Invitation3D } from './LiveAppIcons3D';

export type InvitationTheme = 'maroon' | 'peacock' | 'floral' | 'saffron' | 'navy';

export type EventType = 'wedding' | 'engagement' | 'gruhapravesha' | 'naming' | 'birthday' | 'puja';

interface ThemeConfig {
  id: InvitationTheme;
  nameKn: string;
  nameEn: string;
  bgColor: string;
  bgGradStart: string;
  bgGradEnd: string;
  borderColor: string;
  innerBorderColor: string;
  titleColor: string;
  textColor: string;
  subTextColor: string;
  highlightColor: string;
  badgeBg: string;
  cardPreviewBg: string;
}

const THEMES: Record<InvitationTheme, ThemeConfig> = {
  maroon: {
    id: 'maroon',
    nameKn: '👑 ರಾಯಲ್ ಗೋಲ್ಡ್ & ಮೆರೂನ್',
    nameEn: 'Royal Maroon & Gold',
    bgColor: '#450a0a',
    bgGradStart: '#7f1d1d',
    bgGradEnd: '#450a0a',
    borderColor: '#f59e0b',
    innerBorderColor: '#fde047',
    titleColor: '#fef08a',
    textColor: '#ffffff',
    subTextColor: '#fef3c7',
    highlightColor: '#fbbf24',
    badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-400',
    cardPreviewBg: 'bg-gradient-to-b from-red-950 via-red-900 to-amber-950 text-white',
  },
  peacock: {
    id: 'peacock',
    nameKn: '🦚 ಪೀಕಾಕ್ ಎಮರಾಲ್ಡ್ & ಸಿಲ್ಕ್',
    nameEn: 'Peacock Emerald Green',
    bgColor: '#064e3b',
    bgGradStart: '#047857',
    bgGradEnd: '#022c22',
    borderColor: '#fbbf24',
    innerBorderColor: '#fde047',
    titleColor: '#fef08a',
    textColor: '#ffffff',
    subTextColor: '#d1fae5',
    highlightColor: '#34d399',
    badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-400',
    cardPreviewBg: 'bg-gradient-to-b from-emerald-950 via-teal-900 to-slate-950 text-white',
  },
  floral: {
    id: 'floral',
    nameKn: '🌸 ವೆಡ್ಡಿಂಗ್ ರೋಸ್ & ಸಾಫ್ಟ್ ಬ್ಲಶ್',
    nameEn: 'Wedding Rose & Blush',
    bgColor: '#831843',
    bgGradStart: '#9d174d',
    bgGradEnd: '#500724',
    borderColor: '#f472b6',
    innerBorderColor: '#fbcfe8',
    titleColor: '#fdf2f8',
    textColor: '#ffffff',
    subTextColor: '#fce7f3',
    highlightColor: '#f472b6',
    badgeBg: 'bg-pink-500/20 text-pink-300 border-pink-400',
    cardPreviewBg: 'bg-gradient-to-b from-pink-950 via-rose-900 to-slate-950 text-white',
  },
  saffron: {
    id: 'saffron',
    nameKn: '🕉️ ಸಾಂಪ್ರದಾಯಿಕ ಕೇಸರಿ & ಗೋಲ್ಡ್',
    nameEn: 'Temple Saffron & Gold',
    bgColor: '#7c2d12',
    bgGradStart: '#c2410c',
    bgGradEnd: '#431407',
    borderColor: '#fde047',
    innerBorderColor: '#fef08a',
    titleColor: '#fffbeb',
    textColor: '#ffffff',
    subTextColor: '#ffedd5',
    highlightColor: '#fb923c',
    badgeBg: 'bg-orange-500/20 text-orange-300 border-orange-400',
    cardPreviewBg: 'bg-gradient-to-b from-orange-950 via-amber-900 to-yellow-950 text-white',
  },
  navy: {
    id: 'navy',
    nameKn: '🌌 ರಾಯಲ್ ನೈವಿ ಬ್ಲೂ & ಗೋಲ್ಡ್',
    nameEn: 'Royal Navy Blue & Gold',
    bgColor: '#0f172a',
    bgGradStart: '#1e3a8a',
    bgGradEnd: '#020617',
    borderColor: '#fbbf24',
    innerBorderColor: '#fde047',
    titleColor: '#fef08a',
    textColor: '#ffffff',
    subTextColor: '#e0e7ff',
    highlightColor: '#60a5fa',
    badgeBg: 'bg-blue-500/20 text-blue-300 border-blue-400',
    cardPreviewBg: 'bg-gradient-to-b from-slate-950 via-blue-950 to-indigo-950 text-white',
  },
};

export const InvitationCardComp: React.FC = () => {
  const { lang } = useLanguage();

  // State
  const [eventType, setEventType] = useState<EventType>('wedding');
  const [theme, setTheme] = useState<InvitationTheme>('maroon');

  // Form Fields
  const [shloka, setShloka] = useState('|| ಶ್ರೀ ಗಣೇಶಾಯ ನಮಃ || || ಶ್ರೀ ಮಂಜುನಾಥ ಸ್ವಾಮಿ ಪ್ರಸನ್ನ ||');
  const [invitationHeading, setInvitationHeading] = useState('ಶುಭ ವಿವಾಹ ಆಮಂತ್ರಣ ಪತ್ರಿಕೆ');
  
  // Person Details
  const [personOne, setPersonOne] = useState('ಚಿ. ರವಿ ಕುಮಾರ್ (B.E)');
  const [personOneRole, setPersonOneRole] = useState('ಶ್ರೀಮತಿ ಲಕ್ಷ್ಮಿ ಮತ್ತು ಶ್ರೀ ಈಶ್ವರಪ್ಪ ಗೌಡ ರವರ ಜ್ಯೇಷ್ಠ ಪುತ್ರ');
  
  const [personTwo, setPersonTwo] = useState('ಸೌ. ಶ್ವೇತಾ (M.Sc)');
  const [personTwoRole, setPersonTwoRole] = useState('ಶ್ರೀಮತಿ ಸರಸ್ವತಿ ಮತ್ತು ಶ್ರೀ ಮಲ್ಲೇಶಪ್ಪ ಪಾಟೀಲ್ ರವರ ಸುಪುತ್ರಿ');

  // Event Time & Venue
  const [eventDate, setEventDate] = useState('2026-11-28');
  const [muhurthamTime, setMuhurthamTime] = useState('ಬೆಳಿಗ್ಗೆ 10:30 ರಿಂದ 11:45 ರ ಶುಭ ವೃಶ್ಚಿಕ ಲಗ್ನದಲ್ಲಿ');
  const [receptionTime, setReceptionTime] = useState('ಸಂಜೆ 7:00 ಗಂಟೆಗೆ ಪ್ರೀತಿ ಭೋಜನ');
  const [venue, setVenue] = useState('ಶ್ರೀ ಬಸವೇಶ್ವರ ಕಲ್ಯಾಣ ಮಂಟಪ, ಬಿ.ಹೆಚ್. ರಸ್ತೆ, ತುಮಕೂರು');
  const [invitedBy, setInvitedBy] = useState('ಆತ್ಮೀಯ ಸ್ವಾಗತ ಕೋರುವವರು: ಗೌಡರ ಮತ್ತು ಪಾಟೀಲರ ಕುಟುಂಬದ ಸಮಸ್ತ ಬಂಧು-ಮಿತ್ರರು');

  // Quick Preset Handlers
  const handleEventTypeChange = (type: EventType) => {
    setEventType(type);
    if (type === 'wedding') {
      setShloka('|| ಶ್ರೀ ಗಣೇಶಾಯ ನಮಃ || || ಶ್ರೀ ಮಂಜುನಾಥ ಸ್ವಾಮಿ ಪ್ರಸನ್ನ ||');
      setInvitationHeading('ಶುಭ ವಿವಾಹ ಆಮಂತ್ರಣ ಪತ್ರಿಕೆ');
      setPersonOne('ಚಿ. ರವಿ ಕುಮಾರ್ (B.E)');
      setPersonOneRole('ಶ್ರೀಮತಿ ಲಕ್ಷ್ಮಿ ಮತ್ತು ಶ್ರೀ ಈಶ್ವರಪ್ಪ ಗೌಡ ರವರ ಸುಪುತ್ರ');
      setPersonTwo('ಸೌ. ಶ್ವೇತಾ (M.Sc)');
      setPersonTwoRole('ಶ್ರೀಮತಿ ಸರಸ್ವತಿ ಮತ್ತು ಶ್ರೀ ಮಲ್ಲೇಶಪ್ಪ ಪಾಟೀಲ್ ರವರ ಸುಪುತ್ರಿ');
      setTheme('maroon');
    } else if (type === 'engagement') {
      setShloka('|| ಶ್ರೀ ಗಣೇಶಾಯ ನಮಃ ||');
      setInvitationHeading('ನಿಶ್ಚಿತಾರ್ಥ ಸಮಾರಂಭದ ಆಮಂತ್ರಣ ಪತ್ರಿಕೆ');
      setPersonOne('ಚಿ. ರವಿ ಕುಮಾರ್');
      setPersonOneRole('ವರ (Groom)');
      setPersonTwo('ಸೌ. ಶ್ವೇತಾ');
      setPersonTwoRole('ವಧು (Bride)');
      setTheme('floral');
    } else if (type === 'gruhapravesha') {
      setShloka('|| ಶ್ರೀ ಗುರುಭ್ಯೋ ನಮಃ || || ಶ್ರೀ ಲಕ್ಷ್ಮೀ ವೆಂಕಟೇಶ್ವರ ಪ್ರಸನ್ನ ||');
      setInvitationHeading('ನೂತನ ಗೃಹಪ್ರವೇಶ ಆಮಂತ್ರಣ ಪತ್ರಿಕೆ');
      setPersonOne('ಶ್ರೀಮತಿ ಲಕ್ಷ್ಮಿ ಮತ್ತು ಶ್ರೀ ಈಶ್ವರಪ್ಪ ಗೌಡ');
      setPersonOneRole('ಮನೆ ಮಾಲೀಕರು');
      setPersonTwo('ನೂತನ ನಿವಾಸ: "ಶ್ರೀ ಗುರುಕೃಪಾ ನಿಲಯ"');
      setPersonTwoRole('ಮನೆಯ ಹೆಸರು');
      setTheme('saffron');
    } else if (type === 'naming') {
      setShloka('|| ಶ್ರೀ ಕೃಷ್ಣಾಯ ನಮಃ ||');
      setInvitationHeading('ನಾಮಕರಣ & ತೊಟ್ಟಿಲು ಶಾಸ್ತ್ರದ ಆಹ್ವಾನ ಪತ್ರಿಕೆ');
      setPersonOne('ಮುದ್ದಾದ ಹೆಣ್ಣು ಮಗುವಿನ ನಾಮಕರಣ');
      setPersonOneRole('ತಂದೆ-ತಾಯಿ: ರವಿಕುಮಾರ್ ಮತ್ತು ಶ್ವೇತಾ');
      setPersonTwo('ಮಗುವಿಗೆ ಆಶೀರ್ವದಿಸಲು ಬನ್ನಿ');
      setPersonTwoRole('ಸಮಸ್ತ ಕುಟುಂಬ');
      setTheme('navy');
    } else if (type === 'birthday') {
      setShloka('|| ಜನ್ಮದಿನದ ಶುಭಾಶಯಗಳು ||');
      setInvitationHeading('1ನೇ ವರ್ಷದ ಹುಟ್ಟುಹಬ್ಬದ ಸಂಭ್ರಮ');
      setPersonOne('ಚಿ. ಆರ್ಯನ್ ಗೌಡ');
      setPersonOneRole('1st Birthday Celebration');
      setPersonTwo('ಆತ್ಮೀಯ ಸ್ನೇಹಿತರು & ಕುಟುಂಬ');
      setPersonTwoRole('ಪ್ರೀತಿಯ ಆಹ್ವಾನ');
      setTheme('navy');
    } else if (type === 'puja') {
      setShloka('|| ಓಂ ನಮಃ ಶಿವಾಯ || || ಶ್ರೀ ಸತ್ಯನಾರಾಯಣ ಸ್ವಾಮಿ ಪ್ರಸನ್ನ ||');
      setInvitationHeading('ಶ್ರೀ ಸತ್ಯನಾರಾಯಣ ಪೂಜಾ ಆಮಂತ್ರಣ');
      setPersonOne('ಸಮಸ್ತ ಭಕ್ತಾದಿಗಳಿಗೆ ಪ್ರೀತಿಯ ಆಹ್ವಾನ');
      setPersonOneRole('ಪೂಜಾ ಮಹೋತ್ಸವ');
      setPersonTwo('ಮಹಾ ಪ್ರಸಾದ ವಿನಿಯೋಗ');
      setPersonTwoRole('ತೀರ್ಥ ಪ್ರಸಾದ');
      setTheme('saffron');
    }
  };

  const selectedThemeConfig = THEMES[theme];

  // 🎨 CANVAS GENERATOR (HIGH RESOLUTION 1000px x 1400px)
  const generateCanvas = (): HTMLCanvasElement => {
    const canvas = document.createElement('canvas');
    canvas.width = 1000;
    canvas.height = 1400;
    const ctx = canvas.getContext('2d');
    if (!ctx) return canvas;

    const t = THEMES[theme];

    // Background Gradient
    const bgGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    bgGrad.addColorStop(0, t.bgGradStart);
    bgGrad.addColorStop(0.5, t.bgColor);
    bgGrad.addColorStop(1, t.bgGradEnd);
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Ornate Double Gold Borders
    ctx.strokeStyle = t.borderColor;
    ctx.lineWidth = 10;
    ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);

    ctx.strokeStyle = t.innerBorderColor;
    ctx.lineWidth = 3;
    ctx.strokeRect(45, 45, canvas.width - 90, canvas.height - 90);

    // Corner Ornaments
    const drawCorner = (x: number, y: number, rot: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((rot * Math.PI) / 180);
      ctx.fillStyle = t.innerBorderColor;
      ctx.beginPath();
      ctx.arc(0, 0, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = t.borderColor;
      ctx.lineWidth = 2;
      ctx.strokeRect(-15, -15, 30, 30);
      ctx.restore();
    };

    drawCorner(50, 50, 0);
    drawCorner(canvas.width - 50, 50, 90);
    drawCorner(canvas.width - 50, canvas.height - 50, 180);
    drawCorner(50, canvas.height - 50, 270);

    // Top Emblem Circle
    ctx.fillStyle = t.innerBorderColor;
    ctx.beginPath();
    ctx.arc(canvas.width / 2, 110, 26, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = t.bgColor;
    ctx.font = 'bold 24px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('🕉️', canvas.width / 2, 118);

    // Shloka
    ctx.fillStyle = t.subTextColor;
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText(shloka, canvas.width / 2, 180);

    // Separator line
    ctx.strokeStyle = t.borderColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 - 150, 205);
    ctx.lineTo(canvas.width / 2 + 150, 205);
    ctx.stroke();

    // Main Invitation Title
    ctx.fillStyle = t.titleColor;
    ctx.font = 'bold 36px sans-serif';
    ctx.fillText(invitationHeading, canvas.width / 2, 260);

    // Person One Box
    let y = 350;
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 42px sans-serif';
    ctx.fillText(personOne, canvas.width / 2, y);

    ctx.fillStyle = t.subTextColor;
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText(personOneRole, canvas.width / 2, y + 40);

    // "WEDS" / "ಸಂಗಡ" Intertwined Emblem
    y += 120;
    ctx.fillStyle = t.borderColor;
    ctx.font = 'bold 28px sans-serif';
    ctx.fillText('❤️  ಸಂಗಡ  ❤️', canvas.width / 2, y);

    // Person Two Box
    y += 80;
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 42px sans-serif';
    ctx.fillText(personTwo, canvas.width / 2, y);

    ctx.fillStyle = t.subTextColor;
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText(personTwoRole, canvas.width / 2, y + 40);

    // Event Date & Time Box (Ornate Gold Background)
    y += 130;
    const boxY = y - 40;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.fillRect(100, boxY, canvas.width - 200, 200);
    ctx.strokeStyle = t.borderColor;
    ctx.lineWidth = 2;
    ctx.strokeRect(100, boxY, canvas.width - 200, 200);

    // Date
    const formattedDate = new Date(eventDate).toLocaleDateString('kn-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long',
    });

    ctx.fillStyle = t.titleColor;
    ctx.font = 'bold 28px sans-serif';
    ctx.fillText(`📅 ದಿನಾಂಕ: ${formattedDate}`, canvas.width / 2, boxY + 45);

    // Muhurtham
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 22px sans-serif';
    ctx.fillText(`⏰ ಮುಹೂರ್ತ: ${muhurthamTime}`, canvas.width / 2, boxY + 95);

    // Reception
    ctx.fillStyle = t.subTextColor;
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText(`🍽️ ಭೋಜನ: ${receptionTime}`, canvas.width / 2, boxY + 145);

    // Venue Box
    y += 200;
    ctx.fillStyle = t.titleColor;
    ctx.font = 'bold 24px sans-serif';
    ctx.fillText('📍 ಸಮಾರಂಭ ನಡೆಯುವ ಸ್ಥಳ:', canvas.width / 2, y);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 28px sans-serif';
    ctx.fillText(venue, canvas.width / 2, y + 45);

    // Invited By (Footer)
    y += 120;
    ctx.fillStyle = t.subTextColor;
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText(invitedBy, canvas.width / 2, y);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.font = '14px sans-serif';
    ctx.fillText('✨ ತಾವೆಲ್ಲರೂ ಸಕುಟುಂಬ ಸಮೇತರಾಗಿ ಆಗಮಿಸಿ ಶುಭ ಹಾರೈಸಬೇಕಾಗಿ ವಿನಂತಿ ✨', canvas.width / 2, y + 45);

    return canvas;
  };

  // Download Ultra-HD Image
  const downloadImage = () => {
    const canvas = generateCanvas();
    const link = document.createElement('a');
    link.download = `kannada-invitation-card-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  // 📸 & 💬 SMART WHATSAPP & IMAGE SHARE WITH WEBSITE LINK
  const shareToWhatsApp = async () => {
    const canvas = generateCanvas();
    const siteUrl = typeof window !== 'undefined' ? `${window.location.origin}/invitation-maker` : 'https://mahitichakra.com/invitation-maker';

    const formattedDate = new Date(eventDate).toLocaleDateString('kn-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long',
    });

    const shareText = `💌 *${invitationHeading}*\n${shloka}\n\n` +
      `💍 *${personOne}*\n_(${personOneRole})_\n` +
      `❤️ *ಸಂಗಡ (Weds)* ❤️\n` +
      `💍 *${personTwo}*\n_(${personTwoRole})_\n\n` +
      `📅 ದಿನಾಂಕ: *${formattedDate}*\n` +
      `⏰ ಮುಹೂರ್ತ: *${muhurthamTime}*\n` +
      `🍽️ ಭೋಜನ: *${receptionTime}*\n` +
      `📍 ಸ್ಥಳ: *${venue}*\n\n` +
      `✨ _${invitedBy}_\n` +
      `--------------------------------\n` +
      `🌐 *ನೀವು ಉಚಿತವಾಗಿ ಡಿಜಿಟಲ್ ಲಗ್ನ ಪತ್ರಿಕೆ ರಚಿಸಿ:*\n👉 ${siteUrl}`;

    canvas.toBlob(async (blob) => {
      if (blob && navigator.share && navigator.canShare) {
        const file = new File([blob], `kannada-invitation-${Date.now()}.png`, { type: 'image/png' });
        if (navigator.canShare({ files: [file] })) {
          try {
            await navigator.share({
              files: [file],
              title: invitationHeading,
              text: shareText,
            });
            return;
          } catch (err) {
            console.log('Share canceled or fallback to link', err);
          }
        }
      }

      // Fallback: Download image and open WhatsApp link
      downloadImage();
      const encoded = encodeURIComponent(shareText);
      window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
    }, 'image/png');
  };

  return (
    <div className="space-y-6">
      
      {/* 🌟 HERO HEADER BANNER */}
      <div className="bg-gradient-to-r from-red-900 via-rose-900 to-amber-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl border-2 border-amber-500/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="flex items-center gap-4 relative z-10">
          <div className="shrink-0 filter drop-shadow-md">
            <Invitation3D className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-full shadow-xs">
              <Sparkles className="w-3 h-3" /> 100% ROYAL DIGITAL INVITATION MAKER
            </span>
            <h1 className="text-xl sm:text-3xl font-black tracking-tight text-white">
              {lang === 'kn' ? '💌 ಕನ್ನಡ ಡಿಜಿಟಲ್ ಆಮಂತ್ರಣ ಪತ್ರಿಕೆ ರಚನೆ' : '💌 Kannada Digital Invitation Card Maker'}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-amber-200">
              {lang === 'kn'
                ? 'ಮದುವೆ, ನಿಶ್ಚಿತಾರ್ಥ, ಗೃಹಪ್ರವೇಶ, ನಾಮಕರಣ ವಿವರ ತುಂಬಿ 5 ಪ್ರೀಮಿಯಂ ರಾಯಲ್ ಡಿಸೈನ್‌ಗಳಲ್ಲಿ Ultra-HD ಇಮೇಜ್ & WhatsApp ಶೇರ್ ಮಾಡಿ!'
                : 'Create royal wedding & event invitations in 5 luxury styles, download Ultra-HD PNG and share on WhatsApp!'}
            </p>
          </div>
        </div>

        <button
          onClick={downloadImage}
          className="bg-amber-400 hover:bg-amber-500 text-slate-950 py-3.5 px-6 rounded-2xl font-black text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center gap-2 shrink-0 self-stretch md:self-auto justify-center"
        >
          <Download className="w-5 h-5 text-slate-950" />
          <span>HD ಇಮೇಜ್ ಡೌನ್‌ಲೋಡ್</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* 🔮 2-COLUMN WORKSPACE: LEFT CUSTOMIZATION + RIGHT LIVE PREVIEW */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT COLUMN: EASY CONTROLS & THEME SELECTOR (6 Cols) */}
        <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200 shadow-sm p-5 sm:p-7 space-y-5">
          
          {/* 1. EVENT TYPE SELECTOR PILLS */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-800 block">
              🎉 1. ಕಾರ್ಯಕ್ರಮದ ಪ್ರಕಾರ ಆಯ್ಕೆ ಮಾಡಿ (Select Event Type):
            </label>

            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'wedding', kn: '💍 ಮದುವೆ', en: 'Wedding' },
                { id: 'engagement', kn: '🤝 ನಿಶ್ಚಿತಾರ್ಥ', en: 'Engagement' },
                { id: 'gruhapravesha', kn: '🏠 ಗೃಹಪ್ರವೇಶ', en: 'House Warming' },
                { id: 'naming', kn: '👶 ನಾಮಕರಣ', en: 'Naming Ceremony' },
                { id: 'birthday', kn: '🎂 ಹುಟ್ಟುಹಬ್ಬ', en: 'Birthday' },
                { id: 'puja', kn: '🪔 ಪೂಜೆ / ಜಾತ್ರೆ', en: 'Puja / Festival' },
              ].map((ev) => (
                <button
                  key={ev.id}
                  onClick={() => handleEventTypeChange(ev.id as EventType)}
                  className={`py-2 px-2 rounded-xl text-xs font-black transition-all border text-center ${
                    eventType === ev.id
                      ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {ev.kn}
                </button>
              ))}
            </div>
          </div>

          {/* 2. THEME / DESIGN STYLE SELECTOR */}
          <div className="space-y-2 pt-1 border-t border-slate-100">
            <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <Palette className="w-4 h-4 text-amber-600" />
              <span>2. ಯಾವ ತರಹದ ರಾಯಲ್ ಡಿಸೈನ್ ಬೇಕು ಆಯ್ಕೆ ಮಾಡಿ (Select Design Theme):</span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {Object.values(THEMES).map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  className={`p-3 rounded-2xl border text-left transition-all flex items-center justify-between gap-2 ${
                    theme === t.id
                      ? 'border-amber-500 bg-amber-50/80 shadow-xs ring-2 ring-amber-400/50'
                      : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                  }`}
                >
                  <span className="text-xs font-bold text-slate-900">{t.nameKn}</span>
                  <div
                    className="w-5 h-5 rounded-full border border-white shadow-xs shrink-0"
                    style={{ backgroundColor: t.bgColor }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* 3. SHLOKA & TITLE */}
          <div className="space-y-3 pt-1 border-t border-slate-100">
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-700 block">🕉️ ಮಂಗಳ ಶ್ಲೋಕ / ದೇವರ ಹೆಸರು (Top Shloka):</label>
              <input
                type="text"
                value={shloka}
                onChange={(e) => setShloka(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-700 block">📜 ಆಮಂತ್ರಣ ಶೀರ್ಷಿಕೆ (Invitation Title):</label>
              <input
                type="text"
                value={invitationHeading}
                onChange={(e) => setInvitationHeading(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>
          </div>

          {/* 4. PERSONS DETAILS */}
          <div className="space-y-3 pt-1 border-t border-slate-100">
            <span className="text-xs font-black text-slate-900 block">👥 ವಧು-ವರರು / ಮುಖ್ಯಸ್ಥರ ವಿವರ:</span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-600 block">ವರ / ವ್ಯಕ್ತಿ 1 ರ ಹೆಸರು:</label>
                <input
                  type="text"
                  value={personOne}
                  onChange={(e) => setPersonOne(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 text-xs font-bold text-slate-900"
                />
                <input
                  type="text"
                  placeholder="ಪಾಲಕರ ವಿವರ"
                  value={personOneRole}
                  onChange={(e) => setPersonOneRole(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-1.5 text-[11px] text-slate-700"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-600 block">ವಧು / ವ್ಯಕ್ತಿ 2 ರ ಹೆಸರು:</label>
                <input
                  type="text"
                  value={personTwo}
                  onChange={(e) => setPersonTwo(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 text-xs font-bold text-slate-900"
                />
                <input
                  type="text"
                  placeholder="ಪಾಲಕರ ವಿವರ"
                  value={personTwoRole}
                  onChange={(e) => setPersonTwoRole(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-1.5 text-[11px] text-slate-700"
                />
              </div>
            </div>
          </div>

          {/* 5. DATE, TIME & VENUE */}
          <div className="space-y-3 pt-1 border-t border-slate-100">
            <span className="text-xs font-black text-slate-900 block">📅 ದಿನಾಂಕ, ಮುಹೂರ್ತ & ಸ್ಥಳ:</span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] font-bold text-slate-600 block">ದಿನಾಂಕ (Event Date):</label>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 text-xs font-bold text-slate-900"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-600 block">ಮುಹೂರ್ತದ ಸಮಯ (Muhurtham):</label>
                <input
                  type="text"
                  value={muhurthamTime}
                  onChange={(e) => setMuhurthamTime(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 text-xs font-bold text-slate-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] font-bold text-slate-600 block">ಭೋಜನ / ರಿಸೆಪ್ಷನ್ ಸಮಯ:</label>
                <input
                  type="text"
                  value={receptionTime}
                  onChange={(e) => setReceptionTime(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 text-xs font-bold text-slate-900"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-600 block">ಸ್ಥಳ / ಕಲ್ಯಾಣ ಮಂಟಪ (Venue):</label>
                <input
                  type="text"
                  value={venue}
                  onChange={(e) => setVenue(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 text-xs font-bold text-slate-900"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] font-bold text-slate-600 block">ಆಹ್ವಾನಿಸುವವರು (Invited By):</label>
              <input
                type="text"
                value={invitedBy}
                onChange={(e) => setInvitedBy(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-bold text-slate-900"
              />
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: LIVE ROYAL INVITATION CARD PREVIEW (6 Cols) */}
        <div className="lg:col-span-6 space-y-4">
          
          {/* THE LIVE RENDERED CARD PREVIEW */}
          <div className={`${selectedThemeConfig.cardPreviewBg} rounded-3xl border-4 border-amber-400 shadow-2xl p-6 sm:p-8 space-y-6 text-center relative overflow-hidden select-none`}>
            
            {/* Top Emblem & Shloka */}
            <div className="space-y-1.5">
              <div className="w-10 h-10 rounded-full bg-amber-400 text-slate-950 mx-auto flex items-center justify-center font-bold text-base shadow-sm">
                🕉️
              </div>
              <p className="text-xs font-bold text-amber-200 tracking-wide">{shloka}</p>
              <div className="w-24 h-0.5 bg-amber-400 mx-auto rounded-full" />
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-2xl font-black text-amber-300 tracking-tight leading-snug">
              {invitationHeading}
            </h3>

            {/* Person One */}
            <div className="space-y-0.5">
              <div className="text-xl sm:text-2xl font-black text-white">{personOne}</div>
              <p className="text-xs text-slate-200 font-semibold">{personOneRole}</p>
            </div>

            {/* Weds Emblem */}
            <div className="inline-flex items-center gap-2 bg-black/40 px-4 py-1 rounded-full border border-amber-400/60 text-xs font-bold text-amber-300">
              ❤️ ಸಂಗಡ (Weds) ❤️
            </div>

            {/* Person Two */}
            <div className="space-y-0.5">
              <div className="text-xl sm:text-2xl font-black text-white">{personTwo}</div>
              <p className="text-xs text-slate-200 font-semibold">{personTwoRole}</p>
            </div>

            {/* Date & Muhurtham Banner */}
            <div className="bg-black/50 p-4 rounded-2xl border border-amber-400/50 space-y-2 text-xs">
              <div className="font-black text-amber-300 text-sm">
                📅 ದಿನಾಂಕ: {new Date(eventDate).toLocaleDateString('kn-IN', { day: 'numeric', month: 'long', year: 'numeric', weekday: 'long' })}
              </div>
              <div className="text-white font-bold">⏰ ಮುಹೂರ್ತ: {muhurthamTime}</div>
              <div className="text-slate-300 font-medium">🍽️ ಭೋಜನ: {receptionTime}</div>
            </div>

            {/* Venue & Invited by */}
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-amber-300 font-black block">📍 ಸಮಾರಂಭ ನಡೆಯುವ ಸ್ಥಳ:</span>
                <span className="text-white font-bold text-sm block mt-0.5">{venue}</span>
              </div>
              <p className="text-[11px] text-slate-300 font-medium pt-2 border-t border-white/10">
                {invitedBy}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-3 border-t border-white/20">
              <button
                onClick={downloadImage}
                className="w-full py-3.5 px-4 rounded-2xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5 text-slate-950" />
                <span>📸 Ultra-HD ಲಗ್ನ ಪತ್ರಿಕೆ ಡೌನ್‌ಲೋಡ್ (Download PNG)</span>
              </button>

              <button
                onClick={shareToWhatsApp}
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-sm transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                <span>WhatsApp ನಲ್ಲಿ ಆಮಂತ್ರಣ ಪತ್ರಿಕೆ & ಇಮೇಜ್ ಶೇರ್ ಮಾಡಿ</span>
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
