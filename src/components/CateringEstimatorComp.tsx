"use client";

import React, { useState, useMemo } from 'react';
import { useLanguage } from './LanguageContext';
import {
  Sparkles, Download, Share2, Users, Utensils, ShoppingBag,
  CheckCircle2, Plus, Minus, Calculator, RefreshCw, Printer,
  FileText, ShieldCheck, Heart, Award
} from 'lucide-react';
import { CateringEstimator3D } from './LiveAppIcons3D';

export interface MenuItem {
  id: string;
  nameKn: string;
  nameEn: string;
  category: 'rice' | 'gravy' | 'sweet' | 'side' | 'curd';
  defaultSelected: boolean;
}

const MENU_ITEMS_CATALOG: MenuItem[] = [
  { id: 'rice_sambar', nameKn: 'ಅನ್ನ & ಬಿಸಿಬೇಳೆ ಸಾಂಬಾರ್', nameEn: 'Rice & Sambar', category: 'rice', defaultSelected: true },
  { id: 'rasam', nameKn: 'ತಿಳಿ ಸಾರು / ಟೊಮೆಟೊ ರಸಂ', nameEn: 'Tomato Rasam', category: 'gravy', defaultSelected: true },
  { id: 'pulao', nameKn: 'ವೆಜ್ ಪಲಾವ್ / ಬಿಸಿಬೇಳೆ ಬಾತ್', nameEn: 'Veg Pulao / Bisi Bele Bath', category: 'rice', defaultSelected: true },
  { id: 'chitranna', nameKn: 'ಚಿತ್ರಾನ್ನ / ಪುಳಿಯೋಗರೆ', nameEn: 'Lemon Rice / Puliyogare', category: 'rice', defaultSelected: false },
  { id: 'kesaribath', nameKn: 'ಕೇಸರಿಬಾತ್ / ರವೆ ಹಲ್ವಾ', nameEn: 'Kesari Bath / Halwa', category: 'sweet', defaultSelected: true },
  { id: 'payasa', nameKn: 'ಹೆಸರುಬೇಳೆ ಪಾಯಸ / ಶ್ಯಾವಿಗೆ', nameEn: 'Moong Dal Payasa', category: 'sweet', defaultSelected: true },
  { id: 'holige', nameKn: 'ಬೇಳೆ ಹೋಳಿಗೆ & ಶುದ್ಧ ತುಪ್ಪ', nameEn: 'Holige / Obbattu & Ghee', category: 'sweet', defaultSelected: false },
  { id: 'palya', nameKn: 'ತರಕಾರಿ ಪಲ್ಯ (ಕ್ಯಾರೆಟ್-ಬೀನ್ಸ್)', nameEn: 'Mixed Veg Palya', category: 'side', defaultSelected: true },
  { id: 'kosambari', nameKn: 'ಹೆಸರುಬೇಳೆ / ಕಡಲೆಬೇಳೆ ಕೋಸಂಬರಿ', nameEn: 'Kosambari', category: 'side', defaultSelected: true },
  { id: 'mosaranna', nameKn: 'ಒಗ್ಗರಣೆ ಮೊಸರನ್ನ & ಮಜ್ಜಿಗೆ', nameEn: 'Curd Rice & Buttermilk', category: 'curd', defaultSelected: true },
  { id: 'happala_pickle', nameKn: 'ಹಪ್ಪಳ & ಮಾವಿನಕಾಯಿ ಉಪ್ಪಿನಕಾಯಿ', nameEn: 'Papad & Mango Pickle', category: 'side', defaultSelected: true },
  { id: 'banana_leaf', nameKn: 'ಬಾಳೆ ಎಲೆಗಳು & ನೀರಿನ ಲೋಟ', nameEn: 'Banana Leaves & Cups', category: 'side', defaultSelected: true },
];

interface GroceryRequirement {
  categoryKn: string;
  items: { nameKn: string; qtyStr: string; estPrice: number }[];
}

export const CateringEstimatorComp: React.FC = () => {
  const { lang } = useLanguage();

  // Inputs
  const [eventName, setEventName] = useState<string>('ಶ್ರೀ ಸತ್ಯನಾರಾಯಣ ಪೂಜೆ & ಮಹಾ ಭೋಜನ');
  const [eventDate, setEventDate] = useState<string>('2026-08-28');
  const [guestCount, setGuestCount] = useState<number>(250);
  const [selectedMenuIds, setSelectedMenuIds] = useState<string[]>([
    'rice_sambar', 'rasam', 'pulao', 'kesaribath', 'payasa', 'palya', 'kosambari', 'mosaranna', 'happala_pickle', 'banana_leaf'
  ]);

  // Presets
  const applyPreset = (type: 'puja' | 'wedding' | 'party' | 'jatre') => {
    if (type === 'puja') {
      setEventName('ಗೃಹಪ್ರವೇಶ / ಸತ್ಯನಾರಾಯಣ ಪೂಜೆ ಮಹಾ ಭೋಜನ');
      setSelectedMenuIds(['rice_sambar', 'rasam', 'chitranna', 'payasa', 'palya', 'kosambari', 'mosaranna', 'happala_pickle', 'banana_leaf']);
    } else if (type === 'wedding') {
      setEventName('ವಿವಾಹ ಮಹೋತ್ಸವ & ನಿಶ್ಚಿತಾರ್ಥ ಮಹಾ ಭೋಜನ');
      setSelectedMenuIds(['rice_sambar', 'rasam', 'pulao', 'kesaribath', 'payasa', 'holige', 'palya', 'kosambari', 'mosaranna', 'happala_pickle', 'banana_leaf']);
    } else if (type === 'party') {
      setEventName('ಹುಟ್ಟುಹಬ್ಬ / ನಾಮಕರಣ ಸಂಭ್ರಮದ ಭೋಜನ');
      setSelectedMenuIds(['pulao', 'kesaribath', 'palya', 'mosaranna', 'happala_pickle', 'banana_leaf']);
    } else if (type === 'jatre') {
      setEventName('ಊರಿನ ಜಾತ್ರೆ & ಶ್ರೀ ಧರ್ಮಸ್ಥಳ ಮಹಾ ಅನ್ನಸಂತರ್ಪಣೆ');
      setSelectedMenuIds(['rice_sambar', 'pulao', 'payasa', 'mosaranna', 'happala_pickle', 'banana_leaf']);
    }
  };

  // Toggle Menu item
  const toggleMenuItem = (id: string) => {
    if (selectedMenuIds.includes(id)) {
      if (selectedMenuIds.length > 1) {
        setSelectedMenuIds(selectedMenuIds.filter(m => m !== id));
      }
    } else {
      setSelectedMenuIds([...selectedMenuIds, id]);
    }
  };

  // 🧮 SCIENTIFIC CATERING ALGORITHM CALCULATIONS
  const grocerySummary = useMemo(() => {
    const n = Math.max(10, guestCount);

    // 1. Grains (ಧಾನ್ಯಗಳು)
    const grains: { nameKn: string; qtyStr: string; estPrice: number }[] = [];
    let totalRiceKg = 0;
    if (selectedMenuIds.includes('rice_sambar')) totalRiceKg += n * 0.08; // 80g
    if (selectedMenuIds.includes('pulao')) totalRiceKg += n * 0.06; // 60g
    if (selectedMenuIds.includes('chitranna')) totalRiceKg += n * 0.05; // 50g
    if (selectedMenuIds.includes('mosaranna')) totalRiceKg += n * 0.04; // 40g
    if (totalRiceKg > 0) {
      const rKg = Math.ceil(totalRiceKg);
      grains.push({ nameKn: 'ಸೋನಾ ಮಸೂರಿ ಅಕ್ಕಿ (Sona Masoori Rice)', qtyStr: `${rKg} ಕೆಜಿ (${Math.ceil(rKg / 25)} ಬ್ಯಾಗ್)`, estPrice: rKg * 62 });
    }

    if (selectedMenuIds.includes('rice_sambar') || selectedMenuIds.includes('pulao')) {
      const dalKg = Math.ceil(n * 0.025); // 25g toor dal
      grains.push({ nameKn: 'ಉತ್ತಮ ತೊಗರಿ ಬೇಳೆ (Toor Dal)', qtyStr: `${dalKg} ಕೆಜಿ`, estPrice: dalKg * 175 });
    }

    if (selectedMenuIds.includes('payasa') || selectedMenuIds.includes('kosambari')) {
      const moongKg = Math.ceil(n * 0.015);
      grains.push({ nameKn: 'ಹೆಸರು ಬೇಳೆ (Moong Dal)', qtyStr: `${moongKg} ಕೆಜಿ`, estPrice: moongKg * 125 });
    }

    if (selectedMenuIds.includes('kosambari')) {
      const chanaKg = Math.ceil(n * 0.012);
      grains.push({ nameKn: 'ಕಡಲೆ ಬೇಳೆ (Chana Dal)', qtyStr: `${chanaKg} ಕೆಜಿ`, estPrice: chanaKg * 95 });
    }

    if (selectedMenuIds.includes('kesaribath')) {
      const ravaKg = Math.ceil(n * 0.025);
      grains.push({ nameKn: 'ಬಾಂಬೆ ರವೆ / ಚಿರೋಟಿ ರವೆ', qtyStr: `${ravaKg} ಕೆಜಿ`, estPrice: ravaKg * 45 });
    }

    // 2. Oils & Ghee (ಎಣ್ಣೆ & ತುಪ್ಪ)
    const oils: { nameKn: string; qtyStr: string; estPrice: number }[] = [];
    const oilLiters = Math.ceil(n * 0.028); // 28ml per head
    oils.push({ nameKn: 'ಸನ್‌ಫ್ಲವರ್ / ಕಡಲೆಕಾಯಿ ಅಡುಗೆ ಎಣ್ಣೆ', qtyStr: `${oilLiters} ಲೀಟರ್`, estPrice: oilLiters * 145 });

    let gheeLiters = 0;
    if (selectedMenuIds.includes('kesaribath')) gheeLiters += n * 0.01;
    if (selectedMenuIds.includes('payasa')) gheeLiters += n * 0.006;
    if (selectedMenuIds.includes('holige')) gheeLiters += n * 0.015;
    if (gheeLiters > 0) {
      const gL = Math.max(1, Math.ceil(gheeLiters));
      oils.push({ nameKn: 'ಶುದ್ಧ ನಂದಿನಿ ತುಪ್ಪ (Nandini Pure Ghee)', qtyStr: `${gL} ಕೆಜಿ / ಲೀಟರ್`, estPrice: gL * 620 });
    }

    // 3. Vegetables (ಹಸಿ ತರಕಾರಿಗಳು)
    const vegs: { nameKn: string; qtyStr: string; estPrice: number }[] = [];
    const totalVegKg = Math.ceil(n * 0.12); // 120g mixed veg
    vegs.push({ nameKn: 'ಮಿಕ್ಸ್ ತರಕಾರಿ (ಬೀನ್ಸ್, ಕ್ಯಾರೆಟ್, ಆಲೂಗಡ್ಡೆ, ನುಗ್ಗೆಕಾಯಿ)', qtyStr: `${totalVegKg} ಕೆಜಿ`, estPrice: totalVegKg * 45 });

    const tomatoKg = Math.ceil(n * 0.03);
    vegs.push({ nameKn: 'ನಾಟಿ ಟೊಮೆಟೊ (Tomato for Sambar/Rasam)', qtyStr: `${tomatoKg} ಕೆಜಿ`, estPrice: tomatoKg * 30 });

    const coconutCount = Math.ceil(n / 18);
    vegs.push({ nameKn: 'ದೊಡ್ಡ ಗಾತ್ರದ ತೆಂಗಿನಕಾಯಿ (Coconuts)', qtyStr: `${coconutCount} ಕಾಯಿಗಳು`, estPrice: coconutCount * 35 });

    const chilliesKg = Math.max(1, Math.ceil(n * 0.005));
    vegs.push({ nameKn: 'ಹಸಿಮೆಣಸಿನಕಾಯಿ, ಕೊತ್ತಂಬರಿ & ಕರಿಬೇವು', qtyStr: `${chilliesKg} ಕೆಜಿ + ಕಟ್ಟುಗಳು`, estPrice: chilliesKg * 80 + 150 });

    // 4. Sweets & Dry Fruits (ಸಿಹಿ & ಡ್ರೈ ಫ್ರೂಟ್ಸ್)
    const sweets: { nameKn: string; qtyStr: string; estPrice: number }[] = [];
    let sugarKg = 0;
    if (selectedMenuIds.includes('kesaribath')) sugarKg += n * 0.04;
    if (selectedMenuIds.includes('payasa')) sugarKg += n * 0.03;
    if (sugarKg > 0) {
      const sKg = Math.ceil(sugarKg);
      sweets.push({ nameKn: 'ಉತ್ತಮ ಸಕ್ಕರೆ (Sugar) / ಬೆಲ್ಲ', qtyStr: `${sKg} ಕೆಜಿ`, estPrice: sKg * 44 });
    }

    if (selectedMenuIds.includes('kesaribath') || selectedMenuIds.includes('payasa')) {
      const cashewsGrams = Math.ceil(n * 4);
      sweets.push({ nameKn: 'ಗೋಡಂಬಿ & ಒಣ ದ್ರಾಕ್ಷಿ (Cashews & Raisins)', qtyStr: `${cashewsGrams} ಗ್ರಾಂ`, estPrice: Math.ceil((cashewsGrams / 1000) * 850) });
      sweets.push({ nameKn: 'ಏಲಕ್ಕಿ & ಲವಂಗ (Cardamom & Cloves)', qtyStr: `100 ಗ್ರಾಂ`, estPrice: 280 });
    }

    if (selectedMenuIds.includes('holige')) {
      sweets.push({ nameKn: 'ಮೈದಾ ಹಿಟ್ಟು & ಆರ್ಗ್ಯಾನಿಕ್ ಬೆಲ್ಲ', qtyStr: `${Math.ceil(n * 0.04)} ಕೆಜಿ`, estPrice: Math.ceil(n * 0.04) * 65 });
    }

    // 5. Spices & Condiments (ಮಸಾಲೆ ಸಾಮಗ್ರಿಗಳು)
    const spices: { nameKn: string; qtyStr: string; estPrice: number }[] = [];
    spices.push({ nameKn: 'ಸಾಂಬಾರ್ ಪುಡಿ & ರಸಂ ಪುಡಿ', qtyStr: `${Math.max(1, Math.ceil(n * 0.008))} ಕೆಜಿ`, estPrice: Math.max(1, Math.ceil(n * 0.008)) * 320 });
    spices.push({ nameKn: 'ಅಡುಗೆ ಉಪ್ಪು (Salt Packet)', qtyStr: `${Math.max(2, Math.ceil(n * 0.01))} ಕೆಜಿ`, estPrice: Math.max(2, Math.ceil(n * 0.01)) * 25 });
    spices.push({ nameKn: 'ಒಗ್ಗರಣೆ ಸಾಮಗ್ರಿ (ಸಾಸಿವೆ, ಜೀರಿಗೆ, ಅರಿಶಿನ, ಇಂಗು, ಒಣಮೆಣಸು)', qtyStr: `1 ಸೆಟ್ ಕಿಟ್`, estPrice: 380 });

    // 6. Dairy & Dining Essentials (ಡೈರಿ & ಊಟದ ಪರಿಕರಗಳು)
    const dining: { nameKn: string; qtyStr: string; estPrice: number }[] = [];
    if (selectedMenuIds.includes('mosaranna')) {
      const curdL = Math.ceil(n * 0.04);
      dining.push({ nameKn: 'ನಂದಿನಿ ಗಟ್ಟಿ ಮೊಸರು (Thick Curd)', qtyStr: `${curdL} ಲೀಟರ್`, estPrice: curdL * 52 });
    }

    if (selectedMenuIds.includes('happala_pickle')) {
      dining.push({ nameKn: 'ಉದ್ದಿನ ಹಪ್ಪಳ & ನಿಂಬೆ/ಮಾವಿನ ಉಪ್ಪಿನಕಾಯಿ', qtyStr: `${Math.ceil(n * 1.1)} ಹಪ್ಪಳ + 2 ಕೆಜಿ`, estPrice: Math.ceil(n * 2.5) });
    }

    if (selectedMenuIds.includes('banana_leaf')) {
      const leafCount = Math.ceil(n * 1.15); // 15% extra
      dining.push({ nameKn: 'ಊಟದ ಬಾಳೆ ಎಲೆಗಳು / ಪೇಪರ್ ಪ್ಲೇಟ್‌ಗಳು', qtyStr: `${leafCount} ಎಲೆಗಳು`, estPrice: leafCount * 4.5 });
      dining.push({ nameKn: 'ಕುಡಿಯುವ ನೀರಿನ ಪೇಪರ್ ಗ್ಲಾಸ್‌ಗಳು', qtyStr: `${Math.ceil(n * 1.5)} ಲೋಟಗಳು`, estPrice: Math.ceil(n * 1.5) * 0.8 });
    }

    const categories: GroceryRequirement[] = [
      { categoryKn: '🌾 ೧. ಧಾನ್ಯಗಳು & ಬೇಳೆಕಾಳುಗಳು (Grains & Dals)', items: grains },
      { categoryKn: '🛢️ ೨. ಅಡುಗೆ ಎಣ್ಣೆ & ತುಪ್ಪ (Cooking Oils & Ghee)', items: oils },
      { categoryKn: '🥦 ೩. ಹಸಿ ತರಕಾರಿಗಳು & ತೆಂಗಿನಕಾಯಿ (Fresh Vegetables)', items: vegs },
      { categoryKn: '🍬 ೪. ಸಿಹಿ ಪದಾರ್ಥ & ಡ್ರೈ ಫ್ರೂಟ್ಸ್ (Sweets & Dry Fruits)', items: sweets },
      { categoryKn: '🧂 ೫. ಮಸಾಲೆ ಸಾಮಗ್ರಿಗಳು & ಪುಡಿಗಳು (Spices & Powders)', items: spices },
      { categoryKn: '🍽️ ೬. ಡೈರಿ & ಊಟದ ಪರಿಕರಗಳು (Dairy & Dining Essentials)', items: dining },
    ];

    let grandTotal = 0;
    categories.forEach(cat => {
      cat.items.forEach(it => {
        grandTotal += it.estPrice;
      });
    });

    return { categories, grandTotal };
  }, [guestCount, selectedMenuIds]);

  // 🎨 CANVAS GENERATOR FOR ULTRA-HD GROCERY ORDER SHEET (1000px x 1450px)
  const generateCanvas = (): HTMLCanvasElement => {
    const canvas = document.createElement('canvas');
    canvas.width = 1000;
    canvas.height = 1450;
    const ctx = canvas.getContext('2d');
    if (!ctx) return canvas;

    // Background Warm Saffron Cream
    ctx.fillStyle = '#fffbeb';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Ornate Borders
    ctx.strokeStyle = '#c2410c';
    ctx.lineWidth = 8;
    ctx.strokeRect(25, 25, canvas.width - 50, canvas.height - 50);

    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2;
    ctx.strokeRect(35, 35, canvas.width - 70, canvas.height - 70);

    // Header Banner
    const headerGrad = ctx.createLinearGradient(40, 40, canvas.width - 80, 130);
    headerGrad.addColorStop(0, '#9a3412');
    headerGrad.addColorStop(0.5, '#c2410c');
    headerGrad.addColorStop(1, '#7c2d12');
    ctx.fillStyle = headerGrad;
    ctx.fillRect(40, 40, canvas.width - 80, 115);

    // Header Titles
    ctx.fillStyle = '#fef08a';
    ctx.font = 'bold 20px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('|| ಶ್ರೀ ಅನ್ನಪೂರ್ಣೇಶ್ವರಿ ಪ್ರಸನ್ನ ||', canvas.width / 2, 75);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 30px sans-serif';
    ctx.fillText('ಕಾರ್ಯಕ್ರಮದ ಅಡುಗೆ ಸಾಮಗ್ರಿ & ದಿನಸಿ ಆರ್ಡರ್ ಪಟ್ಟಿ', canvas.width / 2, 115);

    ctx.fillStyle = '#fed7aa';
    ctx.font = 'bold 16px sans-serif';
    ctx.fillText(`ಕಾರ್ಯಕ್ರಮ: ${eventName} • ಒಟ್ಟು ಜನ: ${guestCount} ಜನರಿಗೆ`, canvas.width / 2, 142);

    // Event Metadata Strip
    let y = 185;
    ctx.fillStyle = '#ffedd5';
    ctx.fillRect(50, y, canvas.width - 100, 42);
    ctx.strokeStyle = '#fdba74';
    ctx.strokeRect(50, y, canvas.width - 100, 42);

    ctx.textAlign = 'left';
    ctx.fillStyle = '#9a3412';
    ctx.font = 'bold 15px sans-serif';
    ctx.fillText(`📅 ದಿನಾಂಕ: ${eventDate}`, 70, y + 26);

    ctx.textAlign = 'right';
    ctx.fillStyle = '#7c2d12';
    ctx.font = 'bold 15px sans-serif';
    ctx.fillText(`💰 ಅಂದಾಜು ಒಟ್ಟು ಬಜೆಟ್: ₹${grocerySummary.grandTotal.toLocaleString('en-IN')}/-`, canvas.width - 70, y + 26);

    // Table Header
    y += 55;
    ctx.fillStyle = '#9a3412';
    ctx.fillRect(50, y, canvas.width - 100, 36);

    ctx.textAlign = 'left';
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 15px sans-serif';
    ctx.fillText('ಕ್ರ.ಸಂ.', 70, y + 24);
    ctx.fillText('ಅಡುಗೆ ಸಾಮಗ್ರಿಯ ವಿವರ (Item Name)', 140, y + 24);
    ctx.fillText('ಅಗತ್ಯ ಪ್ರಮಾಣ (Qty)', 620, y + 24);
    ctx.fillText('ಅಂದಾಜು ಬೆಲೆ (₹)', 820, y + 24);

    y += 36;
    let itemIdx = 1;

    grocerySummary.categories.forEach((cat) => {
      if (cat.items.length === 0) return;

      // Category Header Bar
      ctx.fillStyle = '#fed7aa';
      ctx.fillRect(50, y, canvas.width - 100, 30);
      ctx.strokeStyle = '#fdba74';
      ctx.strokeRect(50, y, canvas.width - 100, 30);

      ctx.fillStyle = '#7c2d12';
      ctx.font = 'bold 14px sans-serif';
      ctx.fillText(cat.categoryKn, 70, y + 20);
      y += 30;

      // Rows
      cat.items.forEach((it) => {
        ctx.fillStyle = itemIdx % 2 === 0 ? '#ffffff' : '#fffbeb';
        ctx.fillRect(50, y, canvas.width - 100, 32);
        ctx.strokeStyle = '#fed7aa';
        ctx.strokeRect(50, y, canvas.width - 100, 32);

        ctx.fillStyle = '#64748b';
        ctx.font = 'bold 13px sans-serif';
        ctx.fillText(`${itemIdx}`, 70, y + 21);

        ctx.fillStyle = '#0f172a';
        ctx.font = 'bold 13.5px sans-serif';
        ctx.fillText(it.nameKn, 140, y + 21);

        ctx.fillStyle = '#9a3412';
        ctx.font = '900 13.5px sans-serif';
        ctx.fillText(it.qtyStr, 620, y + 21);

        ctx.fillStyle = '#0f172a';
        ctx.font = 'bold 13.5px sans-serif';
        ctx.fillText(`₹${it.estPrice.toLocaleString('en-IN')}`, 820, y + 21);

        y += 32;
        itemIdx++;
      });
    });

    // Grand Total Row
    y += 10;
    ctx.fillStyle = '#9a3412';
    ctx.fillRect(50, y, canvas.width - 100, 44);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 18px sans-serif';
    ctx.fillText('ಒಟ್ಟು ಅಂದಾಜು ದಿನಸಿ ಮೊತ್ತ (Total Grocery Cost):', 70, y + 28);
    ctx.fillText(`₹ ${grocerySummary.grandTotal.toLocaleString('en-IN')} /-`, 780, y + 28);

    // Kirani Merchant Note & Signature
    y += 65;
    ctx.fillStyle = '#64748b';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText('ದಿನಸಿ ಅಂಗಡಿ / ವ್ಯಾಪಾರಿಗಳ ಸಹಿ: _____________________', 70, y);
    ctx.fillText('ಆರ್ಡರ್ ಸ್ವೀಕರಿಸಿದ ದಿನಾಂಕ: _______________', 600, y);

    // Official Branding & Copyright
    y += 50;
    ctx.textAlign = 'center';
    ctx.fillStyle = '#9a3412';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText('✨ ಮಾಹಿತಿ ಚಕ್ರ ಅಡುಗೆ ಸಾಮಗ್ರಿ & ದಿನಸಿ ಎಸ್ಟಿಮೇಟರ್ (Mahiti Chakra App) • All Rights Reserved ✨', canvas.width / 2, y);

    return canvas;
  };

  // Download Ultra-HD Image
  const downloadGrocerySheetImage = () => {
    const canvas = generateCanvas();
    const link = document.createElement('a');
    link.download = `kannada-catering-grocery-sheet-${guestCount}-guests-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  // 📸 & 💬 SMART WHATSAPP & IMAGE SHARE TO KIRANI MERCHANT
  const shareToWhatsApp = async () => {
    const canvas = generateCanvas();
    const siteUrl = typeof window !== 'undefined' ? `${window.location.origin}/catering-estimator` : 'https://mahiti-chakra-portal.vercel.app/catering-estimator';

    let itemsText = '';
    grocerySummary.categories.forEach(cat => {
      itemsText += `\n*${cat.categoryKn}*\n`;
      cat.items.forEach(it => {
        itemsText += `• ${it.nameKn}: *${it.qtyStr}*\n`;
      });
    });

    const shareText = `🍲 *ಕಾರ್ಯಕ್ರಮದ ಅಡುಗೆ ಸಾಮಗ್ರಿ & ದಿನಸಿ ಆರ್ಡರ್ ಪಟ್ಟಿ*\n|| ಶ್ರೀ ಅನ್ನಪೂರ್ಣೇಶ್ವರಿ ಪ್ರಸನ್ನ ||\n\n` +
      `📌 ಕಾರ್ಯಕ್ರಮ: *${eventName}*\n` +
      `👥 ಒಟ್ಟು ಜನ: *${guestCount} ಜನರಿಗೆ*\n` +
      `📅 ದಿನಾಂಕ: *${eventDate}*\n` +
      `💰 ಅಂದಾಜು ಒಟ್ಟು ಮೊತ್ತ: *₹${grocerySummary.grandTotal.toLocaleString('en-IN')}/-*\n` +
      `--------------------------------` +
      `${itemsText}\n` +
      `--------------------------------\n` +
      `🌐 *ನೀವು ನಿಖರ ಅಡುಗೆ ಸಾಮಗ್ರಿ ಲೆಕ್ಕ ಹಾಕಿ HD ಆರ್ಡರ್ ಶೀಟ್ ಪಡೆಯಿರಿ:*\n👉 ${siteUrl}`;

    canvas.toBlob(async (blob) => {
      if (blob && navigator.share && navigator.canShare) {
        const file = new File([blob], `catering-grocery-list-${guestCount}.png`, { type: 'image/png' });
        if (navigator.canShare({ files: [file] })) {
          try {
            await navigator.share({
              files: [file],
              title: 'ಅಡುಗೆ ಸಾಮಗ್ರಿ ಆರ್ಡರ್ ಪಟ್ಟಿ',
              text: shareText,
            });
            return;
          } catch (err) {
            console.log('Share canceled or fallback to link', err);
          }
        }
      }

      // Fallback: Download image and open WhatsApp link
      downloadGrocerySheetImage();
      const encoded = encodeURIComponent(shareText);
      window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
    }, 'image/png');
  };

  return (
    <div className="space-y-6">
      
      {/* 🌟 HERO HEADER BANNER */}
      <div className="bg-gradient-to-r from-orange-950 via-amber-900 to-red-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl border-2 border-amber-400/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="flex items-center gap-4 relative z-10">
          <div className="shrink-0 filter drop-shadow-md">
            <CateringEstimator3D className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-full shadow-xs">
              <Sparkles className="w-3 h-3" /> 100% ACCURATE KARNATAKA CATERING GROCERY ESTIMATOR
            </span>
            <h1 className="text-xl sm:text-3xl font-black tracking-tight text-white">
              {lang === 'kn' ? '🍲 ಕಾರ್ಯಕ್ರಮದ ಅಡುಗೆ ಸಾಮಗ್ರಿ & ದಿನಸಿ ಅಂದಾಜು ಕ್ಯಾಲ್ಕುಲೇಟರ್' : '🍲 Event & Wedding Catering Grocery Estimator'}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-amber-200">
              {lang === 'kn'
                ? '50 ರಿಂದ 2000+ ಜನರಿಗೆ ಅಕ್ಕಿ, ಬೇಳೆ, ಎಣ್ಣೆ, ತರಕಾರಿ, ಸಕ್ಕರೆ & ಸಾಮಗ್ರಿಗಳ ನಿಖರ ಕೆಜಿ ಪಟ್ಟಿ & Ultra-HD ಆರ್ಡರ್ ಶೀಟ್ ಡೌನ್‌ಲೋಡ್!'
                : 'Calculate exact grocery quantities (Rice, Dal, Oil, Veggies, Sugar) for 50 to 2000+ guests & download HD order sheet!'}
            </p>
          </div>
        </div>

        <button
          onClick={downloadGrocerySheetImage}
          className="bg-amber-400 hover:bg-amber-500 text-slate-950 py-3.5 px-6 rounded-2xl font-black text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center gap-2 shrink-0 self-stretch md:self-auto justify-center"
        >
          <Download className="w-5 h-5 text-slate-950" />
          <span>HD ಸಾಮಗ್ರಿ ಶೀಟ್ ಡೌನ್‌ಲೋಡ್</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* 🔮 2-COLUMN WORKSPACE: LEFT CONTROLS/MENU + RIGHT GROCERY LIST & COST */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT COLUMN: GUEST COUNT & MENU CHECKLIST (5 Cols) */}
        <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 shadow-sm p-5 sm:p-7 space-y-5">
          
          {/* EVENT PRESET BUTTONS */}
          <div className="space-y-2">
            <label className="text-xs font-black text-slate-900 block">ಕಾರ್ಯಕ್ರಮದ ಪ್ರಕಾರ ಆಯ್ಕೆ (Event Presets):</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => applyPreset('puja')}
                className="p-2.5 rounded-xl border border-amber-300 bg-amber-50/70 hover:bg-amber-100/70 text-left text-xs font-bold text-slate-900 transition-all"
              >
                🏠 ಗೃಹಪ್ರವೇಶ / ಪೂಜೆ
              </button>

              <button
                onClick={() => applyPreset('wedding')}
                className="p-2.5 rounded-xl border border-rose-300 bg-rose-50/70 hover:bg-rose-100/70 text-left text-xs font-bold text-slate-900 transition-all"
              >
                💍 ಮದುವೆ / ಎಂಗೇಜ್‌ಮೆಂಟ್
              </button>

              <button
                onClick={() => applyPreset('party')}
                className="p-2.5 rounded-xl border border-blue-300 bg-blue-50/70 hover:bg-blue-100/70 text-left text-xs font-bold text-slate-900 transition-all"
              >
                🎂 ಬರ್ತ್‌ಡೇ / ಪಾರ್ಟಿ
              </button>

              <button
                onClick={() => applyPreset('jatre')}
                className="p-2.5 rounded-xl border border-emerald-300 bg-emerald-50/70 hover:bg-emerald-100/70 text-left text-xs font-bold text-slate-900 transition-all"
              >
                🌾 ಜಾತ್ರೆ / ಅನ್ನಸಂತರ್ಪಣೆ
              </button>
            </div>
          </div>

          {/* GUEST COUNT SLIDER & QUICK CHIPS */}
          <div className="space-y-3 bg-amber-50/60 p-4 rounded-2xl border border-amber-200">
            <div className="flex items-center justify-between">
              <label className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-amber-700" />
                <span>ಒಟ್ಟು ಊಟ ಮಾಡುವ ಜನರ ಸಂಖ್ಯೆ:</span>
              </label>
              <span className="text-base font-black text-amber-800 bg-white px-3 py-1 rounded-xl border border-amber-300 shadow-xs">
                {guestCount} ಜನ
              </span>
            </div>

            <input
              type="range"
              min="20"
              max="2000"
              step="10"
              value={guestCount}
              onChange={(e) => setGuestCount(Number(e.target.value))}
              className="w-full h-2 bg-amber-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
            />

            {/* Quick Guest Chips */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {[50, 100, 250, 500, 1000, 1500].map((num) => (
                <button
                  key={num}
                  onClick={() => setGuestCount(num)}
                  className={`py-1 px-2.5 rounded-lg text-[11px] font-bold border transition-all ${
                    guestCount === num
                      ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {num} ಜನ
                </button>
              ))}
            </div>
          </div>

          {/* EVENT NAME & DATE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-600 block">ಕಾರ್ಯಕ್ರಮದ ಶೀರ್ಷಿಕೆ:</label>
              <input
                type="text"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 text-xs font-bold text-slate-900"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-600 block">ದಿನಾಂಕ:</label>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 text-xs font-bold text-slate-900"
              />
            </div>
          </div>

          {/* FOOD MENU CHECKLIST */}
          <div className="space-y-2 border-t border-slate-100 pt-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                <Utensils className="w-4 h-4 text-orange-600" />
                <span>ಊಟದ ಮೆನು ಆಯ್ಕೆ ಮಾಡಿ (Select Menu):</span>
              </label>
              <span className="text-[11px] font-bold text-slate-500">
                {selectedMenuIds.length} ಆಯ್ಕೆಯಾಗಿದೆ
              </span>
            </div>

            <div className="space-y-1.5 max-h-[300px] overflow-y-auto pr-1 custom-scrollbar">
              {MENU_ITEMS_CATALOG.map((item) => {
                const isChecked = selectedMenuIds.includes(item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleMenuItem(item.id)}
                    className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                      isChecked
                        ? 'border-amber-500 bg-amber-50/70 text-slate-950 font-bold shadow-xs'
                        : 'border-slate-200 bg-slate-50 text-slate-600'
                    }`}
                  >
                    <span className="text-xs">{item.nameKn}</span>
                    <div
                      className={`w-5 h-5 rounded-lg flex items-center justify-center border transition-all ${
                        isChecked ? 'bg-amber-600 border-amber-600 text-white' : 'border-slate-300 bg-white'
                      }`}
                    >
                      {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: GROCERY BREAKDOWN LIST & ORDER SHEET (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* SUMMARY HEADER CARD */}
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-5 text-white shadow-lg flex items-center justify-between gap-4">
            <div>
              <span className="text-[11px] text-amber-100 block font-semibold">ಒಟ್ಟು ಅಂದಾಜು ದಿನಸಿ ಬಜೆಟ್ ({guestCount} ಜನರಿಗೆ)</span>
              <div className="text-2xl sm:text-3xl font-black text-white">
                ₹ {grocerySummary.grandTotal.toLocaleString('en-IN')} /-
              </div>
            </div>

            <button
              onClick={downloadGrocerySheetImage}
              className="py-2.5 px-4 rounded-xl bg-white text-orange-950 font-black text-xs shadow-md transition-all active:scale-95 flex items-center gap-1.5 shrink-0"
            >
              <Download className="w-4 h-4 text-orange-600" />
              <span>HD ಶೀಟ್ ಡೌನ್‌ಲೋಡ್</span>
            </button>
          </div>

          {/* GROCERY CATEGORIES ACCORDION / TABLES */}
          <div className="space-y-3">
            {grocerySummary.categories.map((cat, catIdx) => {
              if (cat.items.length === 0) return null;
              return (
                <div key={catIdx} className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
                  <div className="bg-slate-50 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
                    <h3 className="text-xs font-black text-slate-900">{cat.categoryKn}</h3>
                    <span className="text-[11px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                      {cat.items.length} ಸಾಮಗ್ರಿಗಳು
                    </span>
                  </div>

                  <div className="divide-y divide-slate-100 text-xs">
                    {cat.items.map((it, itemIdx) => (
                      <div key={itemIdx} className="px-4 py-2.5 flex items-center justify-between gap-2 hover:bg-slate-50/50">
                        <span className="font-bold text-slate-800">{it.nameKn}</span>
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="font-black text-orange-700 bg-orange-50 px-2 py-0.5 rounded-lg border border-orange-200">
                            {it.qtyStr}
                          </span>
                          <span className="text-slate-500 font-bold text-[11px]">
                            ₹{it.estPrice.toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ACTION BUTTONS (DOWNLOAD & WHATSAPP) */}
          <div className="space-y-2 pt-2">
            <button
              onClick={downloadGrocerySheetImage}
              className="w-full py-3.5 px-4 rounded-2xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5 text-slate-950" />
              <span>📸 Ultra-HD ದಿನಸಿ ಆರ್ಡರ್ ಪಟ್ಟಿ ಡೌನ್‌ಲೋಡ್ (PNG)</span>
            </button>

            <button
              onClick={shareToWhatsApp}
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-sm transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              <span>ದಿನಸಿ ಅಂಗಡಿ / WhatsApp ನಲ್ಲಿ ಪಟ್ಟಿ ಶೇರ್ ಮಾಡಿ</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
