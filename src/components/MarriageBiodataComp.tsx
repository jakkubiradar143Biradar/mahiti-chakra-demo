"use client";

import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import {
  Sparkles, Download, Share2, Printer, CheckCircle2,
  Heart, User, Calendar, MapPin, Briefcase, GraduationCap,
  Phone, Users, Palette, Award, ShieldCheck, Check
} from 'lucide-react';
import { MarriageBiodata3D } from './LiveAppIcons3D';

export type BiodataTheme = 'maroon' | 'peacock' | 'pink' | 'saffron' | 'navy';

interface ThemeConfig {
  id: BiodataTheme;
  nameKn: string;
  nameEn: string;
  bgColor: string;
  bgGradStart: string;
  bgGradEnd: string;
  borderColor: string;
  innerBorderColor: string;
  headerBg: string;
  headerTextColor: string;
  titleColor: string;
  textColor: string;
  cardPreviewBg: string;
}

const THEMES: Record<BiodataTheme, ThemeConfig> = {
  maroon: {
    id: 'maroon',
    nameKn: '👑 ರಾಯಲ್ ಗೋಲ್ಡ್ & ಮೆರೂನ್',
    nameEn: 'Royal Maroon & Gold',
    bgColor: '#fefce8',
    bgGradStart: '#450a0a',
    bgGradEnd: '#7f1d1d',
    borderColor: '#d97706',
    innerBorderColor: '#f59e0b',
    headerBg: '#7f1d1d',
    headerTextColor: '#fef08a',
    titleColor: '#881337',
    textColor: '#1e293b',
    cardPreviewBg: 'bg-gradient-to-b from-red-950 via-rose-900 to-amber-950 text-white',
  },
  peacock: {
    id: 'peacock',
    nameKn: '🦚 ಪೀಕಾಕ್ ಎಮರಾಲ್ಡ್ & ಸಿಲ್ಕ್',
    nameEn: 'Peacock Emerald Green',
    bgColor: '#f0fdf4',
    bgGradStart: '#022c22',
    bgGradEnd: '#064e3b',
    borderColor: '#10b981',
    innerBorderColor: '#34d399',
    headerBg: '#064e3b',
    headerTextColor: '#fde047',
    titleColor: '#065f46',
    textColor: '#1e293b',
    cardPreviewBg: 'bg-gradient-to-b from-emerald-950 via-teal-900 to-slate-950 text-white',
  },
  pink: {
    id: 'pink',
    nameKn: '🌸 ವೆಡ್ಡಿಂಗ್ ರೋಸ್ ಪಿಂಕ್',
    nameEn: 'Wedding Rose Pink',
    bgColor: '#fdf2f8',
    bgGradStart: '#831843',
    bgGradEnd: '#9d174d',
    borderColor: '#f472b6',
    innerBorderColor: '#fb7185',
    headerBg: '#831843',
    headerTextColor: '#ffffff',
    titleColor: '#9d174d',
    textColor: '#1e293b',
    cardPreviewBg: 'bg-gradient-to-b from-pink-950 via-rose-900 to-slate-950 text-white',
  },
  saffron: {
    id: 'saffron',
    nameKn: '🕉️ ಸಾಂಪ್ರದಾಯಿಕ ಕೇಸರಿ ಗೋಲ್ಡ್',
    nameEn: 'Temple Saffron & Gold',
    bgColor: '#fffbeb',
    bgGradStart: '#7c2d12',
    bgGradEnd: '#9a3412',
    borderColor: '#f59e0b',
    innerBorderColor: '#fbbf24',
    headerBg: '#9a3412',
    headerTextColor: '#fef08a',
    titleColor: '#9a3412',
    textColor: '#1e293b',
    cardPreviewBg: 'bg-gradient-to-b from-orange-950 via-amber-900 to-yellow-950 text-white',
  },
  navy: {
    id: 'navy',
    nameKn: '🌌 ರಾಯಲ್ ನೈವಿ ಬ್ಲೂ',
    nameEn: 'Royal Navy Blue & Gold',
    bgColor: '#f8fafc',
    bgGradStart: '#0f172a',
    bgGradEnd: '#1e3a8a',
    borderColor: '#3b82f6',
    innerBorderColor: '#60a5fa',
    headerBg: '#1e3a8a',
    headerTextColor: '#fde047',
    titleColor: '#1e3a8a',
    textColor: '#1e293b',
    cardPreviewBg: 'bg-gradient-to-b from-slate-950 via-blue-950 to-indigo-950 text-white',
  },
};

export const MarriageBiodataComp: React.FC = () => {
  const { lang } = useLanguage();

  // State
  const [theme, setTheme] = useState<BiodataTheme>('maroon');
  const [gender, setGender] = useState<'groom' | 'bride'>('groom');

  // Top Shloka & Title
  const [shloka, setShloka] = useState('|| ಶ್ರೀ ಗಣೇಶಾಯ ನಮಃ || || ಶ್ರೀ ಮಂಜುನಾಥ ಸ್ವಾಮಿ ಪ್ರಸನ್ನ ||');
  const [title, setTitle] = useState('ವಿವಾಹ ಬಯೋಡೇಟಾ (Marriage Biodata)');

  // 1. Personal Details
  const [fullName, setFullName] = useState('ಚಿ. ರವಿ ಕುಮಾರ್ ಗೌಡ');
  const [dob, setDob] = useState('15-08-1996');
  const [tob, setTob] = useState('ಬೆಳಿಗ್ಗೆ 06:45 AM');
  const [pob, setPob] = useState('ಶಿವಮೊಗ್ಗ');
  const [height, setHeight] = useState("5 ft 8 in (173 cm)");
  const [complexion, setComplexion] = useState('ಗೋಧಿ ಮೈಬಣ್ಣ (Wheatish)');
  const [bloodGroup, setBloodGroup] = useState('O +ve');

  // 2. Horoscope Details
  const [religionCaste, setReligionCaste] = useState('ಹಿಂದೂ - ಒಕ್ಕಲಿಗ (ಗೌಡ)');
  const [rashi, setRashi] = useState('ವೃಶ್ಚಿಕ ರಾಶಿ');
  const [nakshatra, setNakshatra] = useState('ಅನುರಾಧ ನಕ್ಷತ್ರ (೪ನೇ ಪಾದ)');
  const [gotra, setGotra] = useState('ಕಶ್ಯಪ ಗೋತ್ರ');
  const [kulaDevaru, setKulaDevaru] = useState('ಶ್ರೀ ಮಂಜುನಾಥ ಸ್ವಾಮಿ (ಧರ್ಮಸ್ಥಳ)');

  // 3. Education & Profession
  const [education, setEducation] = useState('B.E in Computer Science (VTU)');
  const [profession, setProfession] = useState('Senior Software Engineer');
  const [company, setCompany] = useState('Infosys Technologies, Bengaluru');
  const [income, setIncome] = useState('₹15,00,000 / ವರ್ಷಕ್ಕೆ (15 LPA)');

  // 4. Family Details
  const [fatherName, setFatherName] = useState('ಶ್ರೀ ಈಶ್ವರಪ್ಪ ಗೌಡ (ಕೃಷಿಕರು & ವ್ಯಾಪಾರ)');
  const [motherName, setMotherName] = useState('ಶ್ರೀಮತಿ ಲಕ್ಷ್ಮಮ್ಮ (ಗೃಹಿಣಿ)');
  const [siblings, setSiblings] = useState('1 ಹಿರಿಯ ಸಹೋದರ (ವಿವಾಹಿತ), 1 ಕಿರಿಯ ಸಹೋದರಿ');
  const [nativePlace, setNativePlace] = useState('ತೀರ್ಥಹಳ್ಳಿ, ಶಿವಮೊಗ್ಗ ಜಿಲ್ಲೆ');
  const [address, setAddress] = useState('#142, "ಶ್ರೀಗುರು ನಿಲಯ", ಬಿ.ಹೆಚ್. ರಸ್ತೆ, ಶಿವಮೊಗ್ಗ');

  // 5. Contact
  const [mobile, setMobile] = useState('+91 98450 12345 / 94480 67890');
  const [partnerExpectation, setPartnerExpectation] = useState('ಸುಸಂಸ್ಕೃತ, ವಿದ್ಯಾವಂತ ಮತ್ತು ಕುಟುಂಬ ಮೌಲ್ಯಗಳನ್ನು ಗೌರವಿಸುವ ಕನ್ಯೆ');

  const selectedThemeConfig = THEMES[theme];

  // 🎨 CANVAS GENERATOR (1000px x 1450px)
  const generateCanvas = (): HTMLCanvasElement => {
    const canvas = document.createElement('canvas');
    canvas.width = 1000;
    canvas.height = 1450;
    const ctx = canvas.getContext('2d');
    if (!ctx) return canvas;

    const t = THEMES[theme];

    // Background
    ctx.fillStyle = t.bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Ornate Outer Double Borders
    ctx.strokeStyle = t.borderColor;
    ctx.lineWidth = 8;
    ctx.strokeRect(25, 25, canvas.width - 50, canvas.height - 50);

    ctx.strokeStyle = t.innerBorderColor;
    ctx.lineWidth = 2;
    ctx.strokeRect(35, 35, canvas.width - 70, canvas.height - 70);

    // Header Background Banner
    const headerGrad = ctx.createLinearGradient(40, 40, canvas.width - 80, 130);
    headerGrad.addColorStop(0, t.bgGradStart);
    headerGrad.addColorStop(1, t.bgGradEnd);
    ctx.fillStyle = headerGrad;
    ctx.fillRect(40, 40, canvas.width - 80, 110);

    // Top Emblem & Shloka
    ctx.fillStyle = t.headerTextColor;
    ctx.font = 'bold 20px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(shloka, canvas.width / 2, 75);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 30px sans-serif';
    ctx.fillText(title, canvas.width / 2, 118);

    // Candidate Name Banner
    let y = 195;
    ctx.fillStyle = t.headerBg;
    ctx.fillRect(50, y, canvas.width - 100, 55);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 28px sans-serif';
    ctx.fillText(fullName, canvas.width / 2, y + 38);

    // Helper function for section headers
    const drawSectionHeader = (secTitle: string, currentY: number) => {
      ctx.fillStyle = t.headerBg;
      ctx.fillRect(50, currentY, canvas.width - 100, 38);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 18px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(secTitle, 70, currentY + 26);
    };

    // Helper function for table rows
    const drawRow = (label: string, value: string, currentY: number, isAlt: boolean) => {
      ctx.fillStyle = isAlt ? '#ffffff' : t.bgColor;
      ctx.fillRect(50, currentY, canvas.width - 100, 36);
      ctx.strokeStyle = '#e2e8f0';
      ctx.strokeRect(50, currentY, canvas.width - 100, 36);

      ctx.textAlign = 'left';
      ctx.fillStyle = '#475569';
      ctx.font = 'bold 15px sans-serif';
      ctx.fillText(label, 70, currentY + 24);

      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 15px sans-serif';
      ctx.fillText(value, 360, currentY + 24);
    };

    // 1. ವೈಯಕ್ತಿಕ ವಿವರಗಳು (Personal Details)
    y += 75;
    drawSectionHeader('👤 ೧. ವೈಯಕ್ತಿಕ ವಿವರಗಳು (Personal Details)', y);
    y += 38;
    const personalRows = [
      { l: 'ಜನ್ಮ ದಿನಾಂಕ & ಸಮಯ:', v: `${dob} | ${tob}` },
      { l: 'ಜನ್ಮ ಸ್ಥಳ:', v: pob },
      { l: 'ಎತ್ತರ & ಮೈಬಣ್ಣ:', v: `${height} | ${complexion}` },
      { l: 'ರಕ್ತದ ಗುಂಪು:', v: bloodGroup },
    ];
    personalRows.forEach((r, i) => {
      drawRow(r.l, r.v, y, i % 2 === 0);
      y += 36;
    });

    // 2. ಜಾತಕ & ಧಾರ್ಮಿಕ ವಿವರಗಳು (Horoscope Details)
    y += 10;
    drawSectionHeader('🕉️ ೨. ಜಾತಕ & ಕುಲ ವಿವರಗಳು (Horoscope Details)', y);
    y += 38;
    const horoscopeRows = [
      { l: 'ಧರ್ಮ & ಜಾತಿ:', v: religionCaste },
      { l: 'ರಾಶಿ & ನಕ್ಷತ್ರ:', v: `${rashi} | ${nakshatra}` },
      { l: 'ಗೋತ್ರ:', v: gotra },
      { l: 'ಕುಲದೇವರು:', v: kulaDevaru },
    ];
    horoscopeRows.forEach((r, i) => {
      drawRow(r.l, r.v, y, i % 2 === 0);
      y += 36;
    });

    // 3. ಶಿಕ್ಷಣ & ಉದ್ಯೋಗ (Education & Career)
    y += 10;
    drawSectionHeader('🎓 ೩. ಶಿಕ್ಷಣ & ಉದ್ಯೋಗ (Education & Career)', y);
    y += 38;
    const eduRows = [
      { l: 'ವಿದ್ಯಾರ್ಹತೆ (Degree):', v: education },
      { l: 'ಹುದ್ದೆ & ಉದ್ಯೋಗ:', v: profession },
      { l: 'ಕಂಪನಿ & ಕೆಲಸದ ಸ್ಥಳ:', v: company },
      { l: 'ವಾರ್ಷಿಕ ಆದಾಯ (CTC):', v: income },
    ];
    eduRows.forEach((r, i) => {
      drawRow(r.l, r.v, y, i % 2 === 0);
      y += 36;
    });

    // 4. ಕುಟುಂಬದ ವಿವರಗಳು (Family Details)
    y += 10;
    drawSectionHeader('👨‍👩‍👧‍👦 ೪. ಕುಟುಂಬದ ಹಿನ್ನೆಲೆ (Family Background)', y);
    y += 38;
    const famRows = [
      { l: 'ತಂದೆಯ ಹೆಸರು & ವೃತ್ತಿ:', v: fatherName },
      { l: 'ತಾಯಿಯ ಹೆಸರು & ವೃತ್ತಿ:', v: motherName },
      { l: 'ಸಹೋದರ / ಸಹೋದರಿಯರು:', v: siblings },
      { l: 'ಸ್ವಂತ ಊರು & ವಿಳಾಸ:', v: `${nativePlace}, ${address}` },
    ];
    famRows.forEach((r, i) => {
      drawRow(r.l, r.v, y, i % 2 === 0);
      y += 36;
    });

    // 5. ಸಂಪರ್ಕ & ಅಪೇಕ್ಷೆ (Contact)
    y += 10;
    drawSectionHeader('📞 ೫. ಸಂಪರ್ಕ ವಿವರಗಳು (Contact Details)', y);
    y += 38;
    const contactRows = [
      { l: 'ಸಂಪರ್ಕ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ:', v: mobile },
      { l: 'ವರ/ವಧುವಿನ ಅಪೇಕ್ಷೆ:', v: partnerExpectation },
    ];
    contactRows.forEach((r, i) => {
      drawRow(r.l, r.v, y, i % 2 === 0);
      y += 36;
    });

    // Footer
    y += 45;
    ctx.textAlign = 'center';
    ctx.fillStyle = '#64748b';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText('✨ ಮಾಹಿತಿ ಚಕ್ರ ಮದುವೆ ಬಯೋಡೇಟಾ ಪೋರ್ಟಲ್ (Mahiti Chakra App) ಮೂಲಕ ಸಿದ್ಧಪಡಿಸಲಾಗಿದೆ ✨', canvas.width / 2, y);

    return canvas;
  };

  // Download Ultra-HD Image
  const downloadBiodataImage = () => {
    const canvas = generateCanvas();
    const link = document.createElement('a');
    link.download = `kannada-marriage-biodata-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  // 📸 & 💬 SMART WHATSAPP & IMAGE SHARE WITH WEBSITE LINK
  const shareToWhatsApp = async () => {
    const canvas = generateCanvas();
    const siteUrl = typeof window !== 'undefined' ? `${window.location.origin}/biodata-maker` : 'https://mahiti-chakra-portal.vercel.app/biodata-maker';

    const shareText = `💍 *ವಿವಾಹ ಬಯೋಡೇಟಾ (Kannada Marriage Biodata)*\n${shloka}\n\n` +
      `👤 ಹೆಸರು: *${fullName}*\n` +
      `📅 ಜನ್ಮ ದಿನಾಂಕ: *${dob} (${tob})*\n` +
      `📏 ಎತ್ತರ: *${height}* | ರಕ್ತ: *${bloodGroup}*\n` +
      `🕉️ ಧರ್ಮ/ಜಾತಿ: *${religionCaste}*\n` +
      `⭐ ರಾಶಿ & ನಕ್ಷತ್ರ: *${rashi}, ${nakshatra}*\n` +
      `🎓 ವಿದ್ಯಾರ್ಹತೆ: *${education}*\n` +
      `💼 ಉದ್ಯೋಗ: *${profession}*\n` +
      `🏢 ಕಂಪನಿ & ಸ್ಥಳ: *${company}*\n` +
      `💰 ವಾರ್ಷಿಕ ಆದಾಯ: *${income}*\n` +
      `👨‍👩‍👧 ತಂದೆ-ತಾಯಿ: *${fatherName} / ${motherName}*\n` +
      `🏡 ಸ್ಥಳ: *${nativePlace}*\n` +
      `📞 ಸಂಪರ್ಕ: *${mobile}*\n\n` +
      `--------------------------------\n` +
      `🌐 *ನೀವು ಉಚಿತವಾಗಿ ಮದುವೆ ಬಯೋಡೇಟಾ ರಚಿಸಿ & HD ಕಾರ್ಡ್ ಪಡೆಯಿರಿ:*\n👉 ${siteUrl}`;

    canvas.toBlob(async (blob) => {
      if (blob && navigator.share && navigator.canShare) {
        const file = new File([blob], `marriage-biodata-${Date.now()}.png`, { type: 'image/png' });
        if (navigator.canShare({ files: [file] })) {
          try {
            await navigator.share({
              files: [file],
              title: 'ವಿವಾಹ ಬಯೋಡೇಟಾ',
              text: shareText,
            });
            return;
          } catch (err) {
            console.log('Share canceled or fallback to link', err);
          }
        }
      }

      // Fallback: Download image and open WhatsApp link
      downloadBiodataImage();
      const encoded = encodeURIComponent(shareText);
      window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
    }, 'image/png');
  };

  return (
    <div className="space-y-6">
      
      {/* 🌟 HERO HEADER BANNER */}
      <div className="bg-gradient-to-r from-rose-900 via-pink-900 to-amber-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl border-2 border-pink-500/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="flex items-center gap-4 relative z-10">
          <div className="shrink-0 filter drop-shadow-md">
            <MarriageBiodata3D className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-full shadow-xs">
              <Sparkles className="w-3 h-3" /> 100% ROYAL MARRIAGE BIODATA MAKER
            </span>
            <h1 className="text-xl sm:text-3xl font-black tracking-tight text-white">
              {lang === 'kn' ? '💍 ಕನ್ನಡ ಮದುವೆ ಬಯೋಡೇಟಾ & ಜಾತಕ ಪ್ರೊಫೈಲ್ ಮೇಕರ್' : '💍 Kannada Marriage Biodata & Kundali Maker'}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-rose-200">
              {lang === 'kn'
                ? 'ವೈಯಕ್ತಿಕ, ಜಾತಕ, ಶಿಕ್ಷಣ & ಕುಟುಂಬ ವಿವರ ತುಂಬಿ 5 ಪ್ರೀಮಿಯಂ ರಾಯಲ್ ಡಿಸೈನ್‌ಗಳಲ್ಲಿ Ultra-HD ಬಯೋಡೇಟಾ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ!'
                : 'Create professional marriage biodata cards with horoscope, education, family details & share on WhatsApp!'}
            </p>
          </div>
        </div>

        <button
          onClick={downloadBiodataImage}
          className="bg-amber-400 hover:bg-amber-500 text-slate-950 py-3.5 px-6 rounded-2xl font-black text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center gap-2 shrink-0 self-stretch md:self-auto justify-center"
        >
          <Download className="w-5 h-5 text-slate-950" />
          <span>HD ಬಯೋಡೇಟಾ ಡೌನ್‌ಲೋಡ್</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* 🔮 2-COLUMN WORKSPACE: LEFT INPUTS + RIGHT LIVE BIODATA PREVIEW */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT COLUMN: CONTROLS & FORM INPUTS (6 Cols) */}
        <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200 shadow-sm p-5 sm:p-7 space-y-5">
          
          {/* 1. GENDER & THEME SELECTOR */}
          <div className="space-y-3 border-b border-slate-100 pb-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-800">ಪ್ರೊಫೈಲ್ ಪ್ರಕಾರ (Profile Type):</label>
              <div className="flex gap-2">
                <button
                  onClick={() => { setGender('groom'); setFullName('ಚಿ. ರವಿ ಕುಮಾರ್ ಗೌಡ'); }}
                  className={`py-1.5 px-3 rounded-xl text-xs font-black border transition-all ${
                    gender === 'groom'
                      ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  👨 ವರ (Groom)
                </button>
                <button
                  onClick={() => { setGender('bride'); setFullName('ಸೌ. ಶ್ವೇತಾ ಪಾಟೀಲ್'); }}
                  className={`py-1.5 px-3 rounded-xl text-xs font-black border transition-all ${
                    gender === 'bride'
                      ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  👩 ವಧು (Bride)
                </button>
              </div>
            </div>

            {/* THEME SELECTION */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-amber-600" />
                <span>ರಾಯಲ್ ಡಿಸೈನ್ ಥೀಮ್ ಆಯ್ಕೆ (Select Theme):</span>
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {Object.values(THEMES).map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    className={`p-2 rounded-xl border text-left text-[11px] font-bold transition-all truncate flex items-center gap-1.5 ${
                      theme === t.id
                        ? 'border-amber-500 bg-amber-50 ring-2 ring-amber-400/50 text-slate-950'
                        : 'border-slate-200 bg-slate-50 text-slate-700'
                    }`}
                  >
                    <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: t.headerBg }} />
                    <span className="truncate">{t.nameKn}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 1. PERSONAL DETAILS */}
          <div className="space-y-3 border-b border-slate-100 pb-3">
            <span className="text-xs font-black text-slate-900 block">👤 ೧. ವೈಯಕ್ತಿಕ ವಿವರಗಳು:</span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-600 block">ಪೂರ್ಣ ಹೆಸರು:</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 text-xs font-bold text-slate-900"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-600 block">ಜನ್ಮ ದಿನಾಂಕ & ಸಮಯ:</label>
                <div className="flex gap-1.5">
                  <input
                    type="text"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="w-1/2 bg-slate-50 border border-slate-300 rounded-xl p-2 text-xs font-bold text-slate-900"
                  />
                  <input
                    type="text"
                    value={tob}
                    onChange={(e) => setTob(e.target.value)}
                    className="w-1/2 bg-slate-50 border border-slate-300 rounded-xl p-2 text-xs font-bold text-slate-900"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-600 block">ಜನ್ಮ ಸ್ಥಳ:</label>
                <input
                  type="text"
                  value={pob}
                  onChange={(e) => setPob(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 text-xs font-bold text-slate-900"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-600 block">ಎತ್ತರ:</label>
                <input
                  type="text"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 text-xs font-bold text-slate-900"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-600 block">ರಕ್ತದ ಗುಂಪು:</label>
                <input
                  type="text"
                  value={bloodGroup}
                  onChange={(e) => setBloodGroup(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 text-xs font-bold text-slate-900"
                />
              </div>
            </div>
          </div>

          {/* 2. HOROSCOPE */}
          <div className="space-y-3 border-b border-slate-100 pb-3">
            <span className="text-xs font-black text-slate-900 block">🕉️ ೨. ಜಾತಕ & ಕುಲ ವಿವರಗಳು:</span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-600 block">ಧರ್ಮ & ಜಾತಿ/ಉಪಜಾತಿ:</label>
                <input
                  type="text"
                  value={religionCaste}
                  onChange={(e) => setReligionCaste(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 text-xs font-bold text-slate-900"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-600 block">ರಾಶಿ & ನಕ್ಷತ್ರ:</label>
                <div className="flex gap-1.5">
                  <input
                    type="text"
                    value={rashi}
                    onChange={(e) => setRashi(e.target.value)}
                    className="w-1/2 bg-slate-50 border border-slate-300 rounded-xl p-2 text-xs font-bold text-slate-900"
                  />
                  <input
                    type="text"
                    value={nakshatra}
                    onChange={(e) => setNakshatra(e.target.value)}
                    className="w-1/2 bg-slate-50 border border-slate-300 rounded-xl p-2 text-xs font-bold text-slate-900"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-600 block">ಗೋತ್ರ:</label>
                <input
                  type="text"
                  value={gotra}
                  onChange={(e) => setGotra(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 text-xs font-bold text-slate-900"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-600 block">ಕುಲದೇವರು:</label>
                <input
                  type="text"
                  value={kulaDevaru}
                  onChange={(e) => setKulaDevaru(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 text-xs font-bold text-slate-900"
                />
              </div>
            </div>
          </div>

          {/* 3. EDUCATION & PROFESSION */}
          <div className="space-y-3 border-b border-slate-100 pb-3">
            <span className="text-xs font-black text-slate-900 block">🎓 ೩. ಶಿಕ್ಷಣ & ಉದ್ಯೋಗ:</span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-600 block">ವಿದ್ಯಾರ್ಹತೆ (Degree):</label>
                <input
                  type="text"
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 text-xs font-bold text-slate-900"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-600 block">ಹುದ್ದೆ & ಉದ್ಯೋಗ:</label>
                <input
                  type="text"
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 text-xs font-bold text-slate-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-600 block">ಕಂಪನಿ & ಕೆಲಸದ ಸ್ಥಳ:</label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 text-xs font-bold text-slate-900"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-600 block">ವಾರ್ಷಿಕ ಆದಾಯ (CTC):</label>
                <input
                  type="text"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 text-xs font-bold text-slate-900"
                />
              </div>
            </div>
          </div>

          {/* 4. FAMILY DETAILS */}
          <div className="space-y-3">
            <span className="text-xs font-black text-slate-900 block">👨‍👩‍👧‍👦 ೪. ಕುಟುಂಬ & ಸಂಪರ್ಕ:</span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-600 block">ತಂದೆಯ ಹೆಸರು & ವೃತ್ತಿ:</label>
                <input
                  type="text"
                  value={fatherName}
                  onChange={(e) => setFatherName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 text-xs font-bold text-slate-900"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-600 block">ತಾಯಿಯ ಹೆಸರು & ವೃತ್ತಿ:</label>
                <input
                  type="text"
                  value={motherName}
                  onChange={(e) => setMotherName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 text-xs font-bold text-slate-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-600 block">ಸಹೋದರರು / ಸಹೋದರಿಯರು:</label>
                <input
                  type="text"
                  value={siblings}
                  onChange={(e) => setSiblings(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 text-xs font-bold text-slate-900"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-600 block">ಸಂಪರ್ಕ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ:</label>
                <input
                  type="text"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 text-xs font-bold text-slate-900"
                />
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: LIVE BIODATA CARD PREVIEW (6 Cols) */}
        <div className="lg:col-span-6 space-y-4">
          
          <div className={`${selectedThemeConfig.cardPreviewBg} rounded-3xl border-4 border-amber-400 shadow-2xl p-6 sm:p-7 space-y-4 select-none relative overflow-hidden text-xs`}>
            
            {/* Header Banner */}
            <div className="text-center space-y-1 border-b border-white/20 pb-3">
              <p className="text-[11px] font-bold text-amber-300">{shloka}</p>
              <h3 className="text-lg sm:text-xl font-black text-white">{title}</h3>
              <div className="text-base sm:text-lg font-black text-amber-300 bg-black/40 py-1 px-3 rounded-xl border border-amber-400/40 inline-block mt-1">
                {fullName}
              </div>
            </div>

            {/* Quick Details Grid */}
            <div className="space-y-3 bg-black/40 p-4 rounded-2xl border border-white/10 max-h-[380px] overflow-y-auto custom-scrollbar">
              
              <div>
                <span className="text-amber-300 font-bold block text-[11px] border-b border-white/10 pb-0.5">👤 ವೈಯಕ್ತಿಕ ವಿವರಗಳು:</span>
                <p className="text-slate-200 mt-1">ದಿನಾಂಕ: <strong>{dob} ({tob})</strong> | ಸ್ಥಳ: <strong>{pob}</strong></p>
                <p className="text-slate-200">ಎತ್ತರ: <strong>{height}</strong> | ರಕ್ತ: <strong>{bloodGroup}</strong></p>
              </div>

              <div>
                <span className="text-amber-300 font-bold block text-[11px] border-b border-white/10 pb-0.5">🕉️ ಜಾತಕ & ಕುಲ:</span>
                <p className="text-slate-200 mt-1">ಧರ್ಮ/ಜಾತಿ: <strong>{religionCaste}</strong></p>
                <p className="text-slate-200">ರಾಶಿ/ನಕ್ಷತ್ರ: <strong>{rashi}, {nakshatra}</strong></p>
                <p className="text-slate-200">ಗೋತ್ರ: <strong>{gotra}</strong> | ದೇವರು: <strong>{kulaDevaru}</strong></p>
              </div>

              <div>
                <span className="text-amber-300 font-bold block text-[11px] border-b border-white/10 pb-0.5">🎓 ಶಿಕ್ಷಣ & ಉದ್ಯೋಗ:</span>
                <p className="text-slate-200 mt-1">ವಿದ್ಯಾರ್ಹತೆ: <strong>{education}</strong></p>
                <p className="text-slate-200">ಉದ್ಯೋಗ: <strong>{profession} ({company})</strong></p>
                <p className="text-slate-200">ಆದಾಯ: <strong>{income}</strong></p>
              </div>

              <div>
                <span className="text-amber-300 font-bold block text-[11px] border-b border-white/10 pb-0.5">👨‍👩‍👧‍👦 ಕುಟುಂಬ & ಸಂಪರ್ಕ:</span>
                <p className="text-slate-200 mt-1">ತಂದೆ: <strong>{fatherName}</strong></p>
                <p className="text-slate-200">ತಾಯಿ: <strong>{motherName}</strong></p>
                <p className="text-slate-200">ಸಹೋದರರು: <strong>{siblings}</strong></p>
                <p className="text-slate-200">ಸ್ವಂತ ಊರು: <strong>{nativePlace}</strong></p>
                <p className="text-amber-300 font-bold mt-1">📞 ಮೊಬೈಲ್: {mobile}</p>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-2 border-t border-white/20">
              <button
                onClick={downloadBiodataImage}
                className="w-full py-3.5 px-4 rounded-2xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5 text-slate-950" />
                <span>📸 Ultra-HD ಮದುವೆ ಬಯೋಡೇಟಾ ಡೌನ್‌ಲೋಡ್ (PNG)</span>
              </button>

              <button
                onClick={shareToWhatsApp}
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-sm transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                <span>WhatsApp ನಲ್ಲಿ ಬಯೋಡೇಟಾ & ಇಮೇಜ್ ಶೇರ್ ಮಾಡಿ</span>
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
