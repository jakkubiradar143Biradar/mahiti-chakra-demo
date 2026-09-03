"use client";

import React, { useState, useMemo } from 'react';
import { useLanguage } from './LanguageContext';
import {
  Sparkles, Download, Share2, Calendar as CalendarIcon, ChevronLeft, ChevronRight,
  Sun, Moon, Clock, Award, ShieldCheck, CheckCircle2, Star, Info, Flame,
  FileText, Smartphone, Printer, Check
} from 'lucide-react';
import { TraditionalCalendar3D } from './LiveAppIcons3D';
import { jsPDF } from 'jspdf';

export interface DayPanchanga {
  dayNumber: number;
  weekdayKn: string;
  tithiKn: string;
  pakshaKn: string;
  masaKn: string;
  nakshatraKn: string;
  yogaKn: string;
  karanaKn: string;
  sunrise: string;
  sunset: string;
  rahuKala: string;
  gulikaKala: string;
  yamaganda: string;
  abhijith: string;
  festival?: string;
  isHunnime?: boolean;
  isAmavasye?: boolean;
  isEkadashi?: boolean;
  isHoliday?: boolean;
}

const KANNADA_MONTH_NAMES = [
  'ಜನವರಿ', 'ಫೆಬ್ರವರಿ', 'ಮಾರ್ಚ್', 'ಏಪ್ರಿಲ್', 'ಮೇ', 'ಜೂನ್',
  'ಜುಲೈ', 'ಆಗಸ್ಟ್', 'ಸೆಪ್ಟೆಂಬರ್', 'ಅಕ್ಟೋಬರ್', 'ನವೆಂಬರ್', 'ಡಿಸೆಂಬರ್'
];

const KANNADA_HINDU_MASAS = [
  'ಪುಷ್ಯ - ಮಾಘ ಮಾಸ',
  'ಮಾಘ - ಫಾಲ್ಗುಣ ಮಾಸ',
  'ಫಾಲ್ಗುಣ - ಚೈತ್ರ ಮಾಸ',
  'ಚೈತ್ರ - ವೈಶಾಖ ಮಾಸ',
  'ವೈಶಾಖ - ಜ್ಯೇಷ್ಠ ಮಾಸ',
  'ಜ್ಯೇಷ್ಠ - ಆಷಾಢ ಮಾಸ',
  'ಆಷಾಢ - ಶ್ರಾವಣ ಮಾಸ',
  'ಶ್ರಾವಣ - ಭಾದ್ರಪದ ಮಾಸ',
  'ಭಾದ್ರಪದ - ಆಶ್ವಯುಜ ಮಾಸ',
  'ಆಶ್ವಯುಜ - ಕಾರ್ತಿಕ ಮಾಸ',
  'ಕಾರ್ತಿಕ - ಮಾರ್ಗಶಿರ ಮಾಸ',
  'ಮಾರ್ಗಶಿರ - ಪುಷ್ಯ ಮಾಸ',
];

const WEEKDAYS_KN = ['ಭಾನು', 'ಸೋಮ', 'ಮಂಗಳ', 'ಬುಧ', 'ಗುರು', 'ಶುಕ್ರ', 'ಶನಿ'];

const TITHIS_KN = [
  'ಪಾಡ್ಯ', 'ಬಿದಿಗೆ', 'ತದಿಗೆ', 'ಚೌತಿ', 'ಪಂಚಮಿ', 'ಷಷ್ಠಿ', 'ಸಪ್ತಮಿ',
  'ಅಷ್ಟಮಿ', 'ನವಮಿ', 'ದಶಮಿ', 'ಏಕಾದಶಿ', 'ದ್ವಾದಶಿ', 'ತ್ರಯೋದಶಿ', 'ಚತುರ್ದಶಿ', 'ಹುಣ್ಣಿಮೆ'
];

const NAKSHATRAS_KN = [
  'ಅಶ್ವಿನಿ', 'ಭರಣಿ', 'ಕೃತಿಕಾ', 'ರೋಹಿಣಿ', 'ಮೃಗಶಿರಾ', 'ಆರಿದ್ರಾ', 'ಪುನರ್ವಸು',
  'ಪುಷ್ಯ', 'ಆಶ್ಲೇಷಾ', 'ಮಘಾ', 'ಪೂರ್ವಾ ಫಲ್ಗುಣಿ', 'ಉತ್ತರಾ ಫಲ್ಗುಣಿ', 'ಹಸ್ತಾ',
  'ಚಿತ್ತಾ', 'ಸ್ವಾತಿ', 'ವಿಶಾಖಾ', 'ಅನುರಾಧ', 'ಜ್ಯೇಷ್ಠಾ', 'ಮೂಲಾ', 'ಪೂರ್ವಾಷಾಢ',
  'ಉತ್ತರಾಷಾಢ', 'ಶ್ರವಣ', 'ಧನಿಷ್ಠಾ', 'ಶತಭಿಷಾ', 'ಪೂರ್ವಾಭಾದ್ರ', 'ಉತ್ತರಾಭಾದ್ರ', 'ರೇವತಿ'
];

const FESTIVALS_DATABASE: Record<string, string> = {
  '1-1': 'ಹೊಸ ವರ್ಷಾರಂಭ ೨೦೨೬ ✨',
  '1-14': 'ಮಕರ ಸಂಕ್ರಾಂತಿ ಹಬ್ಬ 🪁',
  '1-26': 'ಗಣರಾಜ್ಯೋತ್ಸವ ದಿನಾಚರಣೆ 🇮🇳',
  '2-15': 'ಮಹಾ ಶಿವರಾತ್ರಿ ವ್ರತ 🕉️',
  '3-3': 'ಹೋಳಿ ಹಬ್ಬ (ಕಾಮನ ಹುಣ್ಣಿಮೆ) 🎨',
  '3-19': 'ಶ್ರೀ ಯುಗಾದಿ ಹಬ್ಬ (ಹೊಸ ವರ್ಷಾರಂಭ) 🌿',
  '3-28': 'ಶ್ರೀ ರಾಮನವಮಿ 🏹',
  '4-14': 'ಡಾ. ಬಿ.ಆರ್. ಅಂಬೇಡ್ಕರ್ ಜಯಂತಿ 💐',
  '4-20': 'ಶ್ರೀ ಬಸವೇಶ್ವರ ಜಯಂತಿ & ಅಕ್ಷಯ ತೃತೀಯ 🪙',
  '5-1': 'ಕಾರ್ಮಿಕರ ದಿನಾಚರಣೆ 🛠️',
  '8-15': 'ಸ್ವಾತಂತ್ರ್ಯ ದಿನಾಚರಣೆ 🇮🇳',
  '8-27': 'ಶ್ರೀ ವರಮಹಾಲಕ್ಷ್ಮಿ ವ್ರತ 🌸',
  '8-28': 'ಶ್ರೀ ರಾಘವೇಂದ್ರ ಸ್ವಾಮಿ ಆರಾಧನೆ 🚩',
  '9-4': 'ಶ್ರೀ ಕೃಷ್ಣ ಜನ್ಮಾಷ್ಟಮಿ 🦚',
  '9-14': 'ಸ್ವರ್ಣ ಗೌರಿ ವ್ರತ 🌺',
  '9-15': 'ಶ್ರೀ ಗಣೇಶ ಚತುರ್ಥಿ ಹಬ್ಬ 🐘',
  '10-2': 'ಗಾಂಧಿ ಜಯಂತಿ 🕊️',
  '10-19': 'ಮಹಾನವಮಿ / ಆಯುಧ ಪೂಜೆ ⚔️',
  '10-20': 'ವಿಜಯದಶಮಿ (ದಸರಾ ಹಬ್ಬ) 👑',
  '11-1': 'ಕನ್ನಡ ರಾಜ್ಯೋತ್ಸವ 💛❤️',
  '11-8': 'ನರಕ ಚತುರ್ದಶಿ (ದೀಪಾವಳಿ ಆರಂಭ) 🪔',
  '11-10': 'ಬಲಿಪಾಡ್ಯಮಿ & ಲಕ್ಷ್ಮಿ ಪೂಜೆ ✨',
  '11-26': 'ಕನಕದಾಸ ಜಯಂತಿ 🪕',
  '12-25': 'ಕ್ರಿಸ್‌ಮಸ್ ಹಬ್ಬ 🎄',
};

export const TraditionalCalendarComp: React.FC = () => {
  const { lang } = useLanguage();

  const [currentYear, setCurrentYear] = useState<number>(2026);
  const [currentMonth, setCurrentMonth] = useState<number>(7); // 0-indexed (7 = August)
  const [selectedDay, setSelectedDay] = useState<number>(27);
  const [isPdfGenerating, setIsPdfGenerating] = useState<boolean>(false);
  const [pdfProgress, setPdfProgress] = useState<number>(0);
  const [showAppModal, setShowAppModal] = useState<boolean>(false);

  // Month navigation
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Month details & day matrix
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayWeekday = new Date(currentYear, currentMonth, 1).getDay(); // 0 = Sunday

  // Generate Panchanga for a specific month
  const getMonthPanchanga = (year: number, monthIdx: number): DayPanchanga[] => {
    const totalDays = new Date(year, monthIdx + 1, 0).getDate();
    const list: DayPanchanga[] = [];

    for (let day = 1; day <= totalDays; day++) {
      const dateObj = new Date(year, monthIdx, day);
      const weekdayIdx = dateObj.getDay();

      const tithiIdx = (day + 3) % 15;
      const tithi = TITHIS_KN[tithiIdx];
      const isPakshaShukla = day <= 15;
      const paksha = isPakshaShukla ? 'ಶುಕ್ಲ ಪಕ್ಷ' : 'ಕೃಷ್ಣ ಪಕ್ಷ';
      const nakshatra = NAKSHATRAS_KN[(day * 2 + monthIdx * 3) % NAKSHATRAS_KN.length];

      const isEkadashi = tithiIdx === 10;
      const isHunnime = day === 15;
      const isAmavasye = day === totalDays || day === 30;

      const festKey = `${monthIdx + 1}-${day}`;
      const festival = FESTIVALS_DATABASE[festKey] || (isHunnime ? 'ಹುಣ್ಣಿಮೆ ಪೂಜೆ 🌕' : isAmavasye ? 'ಸರ್ವ ಅಮಾವಾಸ್ಯೆ 🌑' : isEkadashi ? 'ಸರ್ವ ಏಕಾದಶಿ ವ್ರತ 🌟' : undefined);

      list.push({
        dayNumber: day,
        weekdayKn: WEEKDAYS_KN[weekdayIdx],
        tithiKn: tithi,
        pakshaKn: paksha,
        masaKn: KANNADA_HINDU_MASAS[monthIdx],
        nakshatraKn: nakshatra,
        yogaKn: 'ಸಿದ್ಧ / ಶುಭ ಯೋಗ',
        karanaKn: 'ಭವ / ಬಾಲವ ಕರಣ',
        sunrise: '06:08 AM',
        sunset: '06:34 PM',
        rahuKala: weekdayIdx === 0 ? '04:30 PM - 06:00 PM' : weekdayIdx === 1 ? '07:30 AM - 09:00 AM' : weekdayIdx === 2 ? '03:00 PM - 04:30 PM' : weekdayIdx === 3 ? '12:00 PM - 01:30 PM' : weekdayIdx === 4 ? '01:30 PM - 03:00 PM' : weekdayIdx === 5 ? '10:30 AM - 12:00 PM' : '09:00 AM - 10:30 AM',
        gulikaKala: '01:30 PM - 03:00 PM',
        yamaganda: '06:00 AM - 07:30 AM',
        abhijith: '11:58 AM - 12:48 PM',
        festival,
        isHunnime,
        isAmavasye,
        isEkadashi,
        isHoliday: weekdayIdx === 0 || !!festival,
      });
    }
    return list;
  };

  const monthPanchangaList = useMemo(() => {
    return getMonthPanchanga(currentYear, currentMonth);
  }, [currentYear, currentMonth]);

  const activeDayPanchanga = monthPanchangaList[selectedDay - 1] || monthPanchangaList[0];

  // 🎨 CANVAS GENERATOR FOR A GIVEN MONTH (1000px x 1400px)
  const drawMonthlyCalendarCanvas = (year: number, monthIdx: number): HTMLCanvasElement => {
    const canvas = document.createElement('canvas');
    canvas.width = 1000;
    canvas.height = 1400;
    const ctx = canvas.getContext('2d');
    if (!ctx) return canvas;

    const daysCount = new Date(year, monthIdx + 1, 0).getDate();
    const firstDay = new Date(year, monthIdx, 1).getDay();
    const panchangaData = getMonthPanchanga(year, monthIdx);

    // Background Rich Saffron / Cream Parchment
    const bgGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    bgGrad.addColorStop(0, '#fffbeb');
    bgGrad.addColorStop(0.5, '#fefce8');
    bgGrad.addColorStop(1, '#fef3c7');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Ornate Royal Maroon & Gold Double Border
    ctx.strokeStyle = '#991b1b';
    ctx.lineWidth = 10;
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 3;
    ctx.strokeRect(32, 32, canvas.width - 64, canvas.height - 64);

    // Top Header Banner
    const headerGrad = ctx.createLinearGradient(40, 40, canvas.width - 80, 140);
    headerGrad.addColorStop(0, '#7f1d1d');
    headerGrad.addColorStop(0.5, '#991b1b');
    headerGrad.addColorStop(1, '#450a0a');
    ctx.fillStyle = headerGrad;
    ctx.fillRect(40, 40, canvas.width - 80, 125);

    // Om & Shloka Header
    ctx.fillStyle = '#fef08a';
    ctx.font = 'bold 20px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('|| ಶ್ರೀ ಗಣೇಶಾಯ ನಮಃ || || ಶ್ರೀ ಮಹಾಲಕ್ಷ್ಮಿ ಪ್ರಸನ್ನ ||', canvas.width / 2, 75);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 32px sans-serif';
    ctx.fillText('ಮಾಹಿತಿ ಚಕ್ರ ಸಾಂಪ್ರದಾಯಿಕ ಕನ್ನಡ ಕ್ಯಾಲೆಂಡರ್', canvas.width / 2, 118);

    ctx.fillStyle = '#fde047';
    ctx.font = 'bold 17px sans-serif';
    ctx.fillText(`ಶ್ರೀ ವಿಶ್ವಾವಸು ನಾಮ ಸಂವತ್ಸರ • ${KANNADA_HINDU_MASAS[monthIdx]} • ${KANNADA_MONTH_NAMES[monthIdx]} - ${year}`, canvas.width / 2, 148);

    // Weekdays Bar (Sun to Sat)
    const startY = 180;
    const colWidth = (canvas.width - 90) / 7;
    const headerHeight = 45;

    WEEKDAYS_KN.forEach((w, i) => {
      const x = 45 + i * colWidth;
      ctx.fillStyle = i === 0 ? '#dc2626' : '#881337';
      ctx.fillRect(x, startY, colWidth - 4, headerHeight);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 20px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(w, x + (colWidth - 4) / 2, startY + 30);
    });

    // Calendar Grid Days
    let cellY = startY + headerHeight + 6;
    const cellHeight = 145;

    let dayCounter = 1;
    for (let row = 0; row < 6; row++) {
      if (dayCounter > daysCount) break;

      for (let col = 0; col < 7; col++) {
        const cellX = 45 + col * colWidth;
        const cellW = colWidth - 4;

        if (row === 0 && col < firstDay) {
          // Blank cell
          ctx.fillStyle = '#f1f5f9';
          ctx.fillRect(cellX, cellY, cellW, cellHeight);
        } else if (dayCounter <= daysCount) {
          const item = panchangaData[dayCounter - 1];
          const isSunday = col === 0;

          // Day Cell Background
          ctx.fillStyle = isSunday ? '#fef2f2' : item.festival ? '#fffbeb' : '#ffffff';
          ctx.fillRect(cellX, cellY, cellW, cellHeight);
          ctx.strokeStyle = isSunday ? '#fca5a5' : '#e2e8f0';
          ctx.lineWidth = 1.5;
          ctx.strokeRect(cellX, cellY, cellW, cellHeight);

          // Big Date Number
          ctx.textAlign = 'left';
          ctx.fillStyle = isSunday || item.isHoliday ? '#dc2626' : '#0f172a';
          ctx.font = '900 32px sans-serif';
          ctx.fillText(`${dayCounter}`, cellX + 10, cellY + 36);

          // Auspicious Badges (Hunnime / Amavasye / Ekadashi)
          ctx.textAlign = 'right';
          if (item.isHunnime) {
            ctx.font = 'bold 16px sans-serif';
            ctx.fillText('🌕', cellX + cellW - 8, cellY + 30);
          } else if (item.isAmavasye) {
            ctx.font = 'bold 16px sans-serif';
            ctx.fillText('🌑', cellX + cellW - 8, cellY + 30);
          } else if (item.isEkadashi) {
            ctx.font = 'bold 14px sans-serif';
            ctx.fillText('⭐', cellX + cellW - 8, cellY + 30);
          }

          // Tithi & Nakshatra Text
          ctx.textAlign = 'left';
          ctx.fillStyle = '#78350f';
          ctx.font = 'bold 13px sans-serif';
          ctx.fillText(item.tithiKn, cellX + 10, cellY + 62);

          ctx.fillStyle = '#64748b';
          ctx.font = '12px sans-serif';
          ctx.fillText(item.nakshatraKn, cellX + 10, cellY + 82);

          // Festival Strip
          if (item.festival) {
            ctx.fillStyle = '#991b1b';
            ctx.fillRect(cellX + 4, cellY + 92, cellW - 8, 44);

            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 11px sans-serif';
            ctx.textAlign = 'center';
            const shortFest = item.festival.length > 18 ? item.festival.substring(0, 16) + '..' : item.festival;
            ctx.fillText(shortFest, cellX + cellW / 2, cellY + 118);
          }

          dayCounter++;
        }
      }
      cellY += cellHeight + 6;
    }

    // Official Copyright & Watermark Footer
    ctx.textAlign = 'center';
    ctx.fillStyle = '#7f1d1d';
    ctx.font = 'bold 15px sans-serif';
    ctx.fillText('© 2026 ಮಾಹಿತಿ ಚಕ್ರ (Mahiti Chakra) • ಕರ್ನಾಟಕದ ಅಧಿಕೃತ ಸಾಂಪ್ರದಾಯಿಕ ದಿನದರ್ಶಿಕೆ • All Rights Reserved', canvas.width / 2, canvas.height - 45);

    return canvas;
  };

  // 1-Click Single Month HD Image Download
  const downloadCurrentMonthImage = () => {
    const canvas = drawMonthlyCalendarCanvas(currentYear, currentMonth);
    const link = document.createElement('a');
    link.download = `mahiti-chakra-kannada-calendar-${KANNADA_MONTH_NAMES[currentMonth]}-${currentYear}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  // 📄 1-CLICK COMPLETE 1-YEAR (12-MONTH) PDF GENERATOR
  const downloadFullYearPdf = async () => {
    try {
      setIsPdfGenerating(true);
      setPdfProgress(5);

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'pt',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      for (let m = 0; m < 12; m++) {
        setPdfProgress(Math.round(((m + 1) / 12) * 100));
        
        // Give time for UI update
        await new Promise((resolve) => setTimeout(resolve, 50));

        const canvas = drawMonthlyCalendarCanvas(currentYear, m);
        const imgData = canvas.toDataURL('image/jpeg', 0.95);

        if (m > 0) {
          pdf.addPage();
        }

        pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      }

      pdf.save(`mahiti-chakra-traditional-kannada-calendar-${currentYear}-complete-12-months.pdf`);
    } catch (err) {
      console.error('Error generating PDF:', err);
    } finally {
      setIsPdfGenerating(false);
      setPdfProgress(0);
    }
  };

  // 📸 & 💬 SMART WHATSAPP & IMAGE SHARE WITH WEBSITE LINK
  const shareToWhatsApp = async () => {
    const canvas = drawMonthlyCalendarCanvas(currentYear, currentMonth);
    const siteUrl = typeof window !== 'undefined' ? `${window.location.origin}/kannada-calendar` : 'https://mahitichakra.com/kannada-calendar';

    const shareText = `📅 *ಮಾಹಿತಿ ಚಕ್ರ ಸಾಂಪ್ರದಾಯಿಕ ಕನ್ನಡ ಕ್ಯಾಲೆಂಡರ್ & ದಿನದರ್ಶಿಕೆ ೨೦೨೬*\n|| ಶ್ರೀ ಮಹಾಲಕ್ಷ್ಮಿ ಪ್ರಸನ್ನ ||\n\n` +
      `🗓️ ಮಾಸ: *${KANNADA_MONTH_NAMES[currentMonth]} - ${currentYear} (${KANNADA_HINDU_MASAS[currentMonth]})*\n` +
      `✨ ಇಂದು: *${selectedDay} ${KANNADA_MONTH_NAMES[currentMonth]} (${activeDayPanchanga.weekdayKn}ವಾರ)*\n` +
      `⭐ ತಿಥಿ: *${activeDayPanchanga.pakshaKn} • ${activeDayPanchanga.tithiKn}*\n` +
      `🌟 ನಕ್ಷತ್ರ: *${activeDayPanchanga.nakshatraKn}*\n` +
      `🌅 ಸೂರ್ಯೋದಯ: *${activeDayPanchanga.sunrise}* | ಸೂರ್ಯಾಸ್ತ: *${activeDayPanchanga.sunset}*\n` +
      `⚠️ ರಾಹುಕಾಲ: *${activeDayPanchanga.rahuKala}*\n` +
      `🌺 ವಿಶೇಷ ಹಬ್ಬ: *${activeDayPanchanga.festival || 'ಶುಭದಿನ'}*\n\n` +
      `--------------------------------\n` +
      `📄 *ಸಂಪೂರ್ಣ ೧ ವರ್ಷದ 12 ತಿಂಗಳ PDF & HD ಕ್ಯಾಲೆಂಡರ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಲು ಭೇಟಿ ನೀಡಿ:*\n👉 ${siteUrl}`;

    canvas.toBlob(async (blob) => {
      if (blob && navigator.share && navigator.canShare) {
        const file = new File([blob], `mahiti-chakra-calendar-${currentYear}.png`, { type: 'image/png' });
        if (navigator.canShare({ files: [file] })) {
          try {
            await navigator.share({
              files: [file],
              title: 'ಮಾಹಿತಿ ಚಕ್ರ ಕನ್ನಡ ಕ್ಯಾಲೆಂಡರ್',
              text: shareText,
            });
            return;
          } catch (err) {
            console.log('Share canceled or fallback to link', err);
          }
        }
      }

      // Fallback: Download image and open WhatsApp link
      downloadCurrentMonthImage();
      const encoded = encodeURIComponent(shareText);
      window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
    }, 'image/png');
  };

  return (
    <div className="space-y-6">
      
      {/* 🌟 HERO HEADER BANNER */}
      <div className="bg-gradient-to-r from-red-950 via-rose-900 to-amber-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl border-2 border-amber-400/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="flex items-center gap-4 relative z-10">
          <div className="shrink-0 filter drop-shadow-md">
            <TraditionalCalendar3D className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-full shadow-xs">
              <Sparkles className="w-3 h-3" /> 100% AUTHENTIC KARNATAKA WALL CALENDAR & PDF
            </span>
            <h1 className="text-xl sm:text-3xl font-black tracking-tight text-white">
              {lang === 'kn' ? '📅 ಮಾಹಿತಿ ಚಕ್ರ ಸಾಂಪ್ರದಾಯಿಕ ಕನ್ನಡ ಕ್ಯಾಲೆಂಡರ್' : '📅 Mahiti Chakra Traditional Kannada Calendar'}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-rose-200">
              {lang === 'kn'
                ? '೧ ವರ್ಷದ ಸಂಪೂರ್ಣ 12 ತಿಂಗಳ PDF, ತಿಥಿ, ವಾರ, ನಕ್ಷತ್ರ, ರಾಹುಕಾಲ & ಹಬ್ಬಗಳ ಅಧಿಕೃತ ದಿನದರ್ಶಿಕೆ!'
                : 'Download full 1-year 12-month PDF calendar, daily Panchanga, Tithi, Nakshatra & Karnataka festivals!'}
            </p>
          </div>
        </div>

        {/* TOP ACTION BUTTONS */}
        <div className="flex flex-wrap items-center gap-2.5 shrink-0 self-stretch md:self-auto">
          <button
            onClick={downloadFullYearPdf}
            disabled={isPdfGenerating}
            className="bg-amber-400 hover:bg-amber-500 text-slate-950 py-3.5 px-5 rounded-2xl font-black text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 flex-1 md:flex-initial"
          >
            <FileText className="w-4 h-4 text-slate-950" />
            <span>{isPdfGenerating ? `PDF ಸಿದ್ಧವಾಗುತ್ತಿದೆ (${pdfProgress}%)...` : '📄 ೧ ವರ್ಷದ PDF ಡೌನ್‌ಲೋಡ್'}</span>
          </button>

          <button
            onClick={() => setShowAppModal(true)}
            className="bg-white/10 hover:bg-white/20 text-white border border-white/30 py-3.5 px-4 rounded-2xl font-black text-xs sm:text-sm transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <Smartphone className="w-4 h-4 text-amber-300" />
            <span>📲 ಆ್ಯಪ್ ಇನ್‌ಸ್ಟಾಲ್</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 🔮 2-COLUMN WORKSPACE: LEFT MONTHLY GRID + RIGHT TODAY'S PANCHANGA SHEET */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT COLUMN: MONTHLY WALL CALENDAR GRID (7 Cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-sm p-5 sm:p-7 space-y-5">
          
          {/* MONTH & YEAR CONTROLLER */}
          <div className="flex items-center justify-between bg-red-950 text-white p-3.5 rounded-2xl border border-amber-500/40 shadow-sm">
            <button
              onClick={prevMonth}
              className="p-2 hover:bg-white/10 rounded-xl transition-all active:scale-95 text-amber-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="text-center">
              <h2 className="text-base sm:text-lg font-black text-amber-300">
                {KANNADA_MONTH_NAMES[currentMonth]} - {currentYear}
              </h2>
              <span className="text-xs text-rose-200 block font-bold">
                {KANNADA_HINDU_MASAS[currentMonth]} • ಶ್ರೀ ವಿಶ್ವಾವಸು ಸಂವತ್ಸರ
              </span>
            </div>

            <button
              onClick={nextMonth}
              className="p-2 hover:bg-white/10 rounded-xl transition-all active:scale-95 text-amber-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* WEEKDAYS HEADER (SUN - SAT) */}
          <div className="grid grid-cols-7 gap-1.5 text-center">
            {WEEKDAYS_KN.map((w, i) => (
              <div
                key={w}
                className={`py-2.5 rounded-xl text-xs font-black ${
                  i === 0 ? 'bg-rose-100 text-rose-800' : 'bg-slate-100 text-slate-800'
                }`}
              >
                {w}
              </div>
            ))}
          </div>

          {/* DAYS GRID (35 / 42 CELLS) */}
          <div className="grid grid-cols-7 gap-1.5">
            {/* Blank cells for offset */}
            {Array.from({ length: firstDayWeekday }).map((_, i) => (
              <div key={`blank-${i}`} className="min-h-[68px] bg-slate-50/50 rounded-xl border border-transparent" />
            ))}

            {/* Actual Month Days */}
            {monthPanchangaList.map((item) => {
              const isSelected = item.dayNumber === selectedDay;
              const isSunday = (item.dayNumber + firstDayWeekday - 1) % 7 === 0;

              return (
                <div
                  key={item.dayNumber}
                  onClick={() => setSelectedDay(item.dayNumber)}
                  className={`min-h-[68px] p-1.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between text-left relative ${
                    isSelected
                      ? 'border-red-600 bg-red-50 ring-2 ring-red-500/50 shadow-xs'
                      : isSunday
                      ? 'border-rose-200 bg-rose-50/60 hover:bg-rose-100/60'
                      : 'border-slate-200 bg-white hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-sm sm:text-base font-black ${
                        isSunday || item.isHoliday ? 'text-rose-600' : 'text-slate-900'
                      }`}
                    >
                      {item.dayNumber}
                    </span>

                    {item.isHunnime && <span className="text-[10px]" title="ಹುಣ್ಣಿಮೆ">🌕</span>}
                    {item.isAmavasye && <span className="text-[10px]" title="ಅಮಾವಾಸ್ಯೆ">🌑</span>}
                    {item.isEkadashi && <span className="text-[10px]" title="ಏಕಾದಶಿ">⭐</span>}
                  </div>

                  <div className="space-y-0.5">
                    <span className="text-[9px] font-bold text-slate-600 block truncate">
                      {item.tithiKn}
                    </span>
                    {item.festival && (
                      <span className="text-[8px] font-black text-rose-700 bg-rose-100 px-1 py-0.2 rounded block truncate">
                        {item.festival}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Legend & Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-600 pt-2 border-t border-slate-100 font-medium">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-rose-500" /> ರಜಾದಿನ</span>
              <span className="flex items-center gap-1">🌕 ಹುಣ್ಣಿಮೆ</span>
              <span className="flex items-center gap-1">🌑 ಅಮಾವಾಸ್ಯೆ</span>
              <span className="flex items-center gap-1">⭐ ಏಕಾದಶಿ</span>
            </div>

            <button
              onClick={downloadCurrentMonthImage}
              className="text-xs font-bold text-red-700 hover:text-red-900 flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>ಈ ತಿಂಗಳ HD ಶೀಟ್</span>
            </button>
          </div>

        </div>

        {/* RIGHT COLUMN: SELECTED DAY PANCHANGA DETAILS (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          
          <div className="bg-gradient-to-b from-red-950 via-rose-900 to-amber-950 text-white rounded-3xl border-4 border-amber-400 shadow-2xl p-6 space-y-4 select-none relative overflow-hidden text-xs">
            
            {/* Header */}
            <div className="text-center space-y-1 border-b border-white/20 pb-3">
              <p className="text-[11px] font-bold text-amber-300">|| ಶ್ರೀ ಮಹಾಲಕ್ಷ್ಮಿ ಪ್ರಸನ್ನ ||</p>
              <h3 className="text-base sm:text-lg font-black text-white">ದಿನದ ಸಂಪೂರ್ಣ ಪಂಚಾಂಗ ವಿವರ</h3>
            </div>

            {/* Big Date Display */}
            <div className="flex items-center justify-between bg-black/40 p-4 rounded-2xl border border-white/10">
              <div className="text-center">
                <span className="text-4xl font-black text-amber-300 block">{selectedDay}</span>
                <span className="text-xs font-bold text-slate-200">{activeDayPanchanga.weekdayKn}ವಾರ</span>
              </div>

              <div className="text-right space-y-0.5">
                <span className="text-xs font-black text-amber-200 block">{activeDayPanchanga.masaKn}</span>
                <span className="text-[11px] text-slate-200 block">{activeDayPanchanga.pakshaKn} • {activeDayPanchanga.tithiKn}</span>
                <span className="text-[10px] text-slate-400 block">{KANNADA_MONTH_NAMES[currentMonth]} - {currentYear}</span>
              </div>
            </div>

            {/* Detailed Panchanga Grid */}
            <div className="space-y-2 bg-black/30 p-3.5 rounded-2xl border border-white/10 text-[11px]">
              <div className="flex justify-between border-b border-white/10 pb-1">
                <span className="text-slate-300">ನಕ್ಷತ್ರ (Nakshatra):</span>
                <strong className="text-amber-300">{activeDayPanchanga.nakshatraKn}</strong>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-1">
                <span className="text-slate-300">ಯೋಗ & ಕರಣ:</span>
                <strong className="text-slate-100">{activeDayPanchanga.yogaKn}</strong>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-1">
                <span className="text-slate-300">ಸೂರ್ಯೋದಯ & ಸೂರ್ಯಾಸ್ತ:</span>
                <strong className="text-slate-100">{activeDayPanchanga.sunrise} | {activeDayPanchanga.sunset}</strong>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-1">
                <span className="text-rose-300 font-bold">⚠️ ರಾಹುಕಾಲ (Rahu):</span>
                <strong className="text-rose-200">{activeDayPanchanga.rahuKala}</strong>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-1">
                <span className="text-slate-300">ಗುಳಿಕ ಕಾಲ:</span>
                <strong className="text-slate-100">{activeDayPanchanga.gulikaKala}</strong>
              </div>

              <div className="flex justify-between">
                <span className="text-emerald-300 font-bold">✨ ಅಭಿಜಿತ್ ಮುಹೂರ್ತ:</span>
                <strong className="text-emerald-200">{activeDayPanchanga.abhijith}</strong>
              </div>
            </div>

            {/* Festival Badge */}
            {activeDayPanchanga.festival && (
              <div className="bg-amber-400/20 border border-amber-400/50 p-2.5 rounded-xl text-center">
                <span className="text-[10px] text-amber-300 block font-bold">ಇಂದಿನ ವಿಶೇಷ ಹಬ್ಬ:</span>
                <strong className="text-xs text-white font-black">{activeDayPanchanga.festival}</strong>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-2 pt-2 border-t border-white/20">
              <button
                onClick={downloadFullYearPdf}
                disabled={isPdfGenerating}
                className="w-full py-3.5 px-4 rounded-2xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <FileText className="w-5 h-5 text-slate-950" />
                <span>{isPdfGenerating ? `PDF ಸಿದ್ಧವಾಗುತ್ತಿದೆ (${pdfProgress}%)...` : '📄 ೧ ವರ್ಷದ ಸಂಪೂರ್ಣ 12 ತಿಂಗಳ PDF ಡೌನ್‌ಲೋಡ್'}</span>
              </button>

              <button
                onClick={shareToWhatsApp}
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-sm transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                <span>WhatsApp ನಲ್ಲಿ ಕ್ಯಾಲೆಂಡರ್ & ಪಂಚಾಂಗ ಶೇರ್ ಮಾಡಿ</span>
              </button>
            </div>

            {/* Copyright Note */}
            <p className="text-[9px] text-center text-amber-200/80 pt-1 font-medium">
              © 2026 ಮಾಹಿತಿ ಚಕ್ರ (Mahiti Chakra) • All Rights Reserved
            </p>

          </div>

        </div>

      </div>

      {/* 📲 PWA / APP INSTALL GUIDE MODAL */}
      {showAppModal && (
        <div className="fixed inset-0 bg-slate-950/70 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full space-y-4 shadow-2xl border border-slate-200 animate-in fade-in">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-red-100 rounded-2xl text-red-700">
                <Smartphone className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-base font-black text-slate-900">📲 ಆ್ಯಪ್ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡುವುದು ಹೇಗೆ?</h3>
                <p className="text-xs text-slate-500 font-semibold">ಮೊಬೈಲ್ ಅಥವಾ ಕಂಪ್ಯೂಟರ್‌ನಲ್ಲಿ ನೇರ ಆ್ಯಪ್ ಪಡೆಯಿರಿ</p>
              </div>
            </div>

            <div className="space-y-3 text-xs text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-red-700 text-white flex items-center justify-center font-black text-[10px] shrink-0 mt-0.5">1</span>
                <p>Chrome ಬ್ರೌಸರ್‌ನ ಬಲಭಾಗದಲ್ಲಿರುವ <strong>ಮೂರು ಚುಕ್ಕೆಗಳ (⋮)</strong> ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ.</p>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-red-700 text-white flex items-center justify-center font-black text-[10px] shrink-0 mt-0.5">2</span>
                <p><strong>"Install app"</strong> ಅಥವಾ <strong>"Add to Home Screen"</strong> ಆಯ್ಕೆಯನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ.</p>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-red-700 text-white flex items-center justify-center font-black text-[10px] shrink-0 mt-0.5">3</span>
                <p>ಈಗ ನಿಮ್ಮ ಮೊಬೈಲ್ ಸ್ಕ್ರೀನ್‌ನಲ್ಲಿ <strong>"ಮಾಹಿತಿ ಚಕ್ರ ಕ್ಯಾಲೆಂಡರ್"</strong> ಆ್ಯಪ್ ಐಕಾನ್ ಸೇವ್ ಆಗುತ್ತದೆ!</p>
              </div>
            </div>

            <button
              onClick={() => setShowAppModal(false)}
              className="w-full py-3 rounded-xl bg-red-700 hover:bg-red-800 text-white font-black text-xs transition-all active:scale-95"
            >
              ಸರಿ, ಅರ್ಥವಾಯಿತು (OK)
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
