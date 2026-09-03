"use client";

import React from 'react';

// 🪙 1. ULTRA-REALISTIC 3D GOLD BARS (GOLD RATE)
export const GoldBars3D: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="goldTopLuxury" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fffbeb" />
        <stop offset="35%" stopColor="#fde047" />
        <stop offset="70%" stopColor="#eab308" />
        <stop offset="100%" stopColor="#b45309" />
      </linearGradient>
      <linearGradient id="goldFrontLuxury" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="50%" stopColor="#d97706" />
        <stop offset="100%" stopColor="#78350f" />
      </linearGradient>
      <linearGradient id="goldSideLuxury" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#facc15" />
        <stop offset="50%" stopColor="#b45309" />
        <stop offset="100%" stopColor="#451a03" />
      </linearGradient>

      <filter id="luxuryGlowGold" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="3" dy="6" stdDeviation="4" floodColor="#78350f" floodOpacity="0.4" />
        <feDropShadow dx="-1" dy="-1" stdDeviation="2" floodColor="#fef08a" floodOpacity="0.5" />
      </filter>
    </defs>

    <g filter="url(#luxuryGlowGold)">
      {/* 🟢 BOTTOM LEFT BAR */}
      <polygon points="12,66 44,52 76,66 44,80" fill="url(#goldTopLuxury)" />
      <polygon points="12,66 44,80 44,90 12,76" fill="url(#goldSideLuxury)" />
      <polygon points="44,80 76,66 76,76 44,90" fill="url(#goldFrontLuxury)" />

      {/* 🟢 BOTTOM RIGHT BAR */}
      <polygon points="34,50 66,36 98,50 66,64" fill="url(#goldTopLuxury)" />
      <polygon points="34,50 66,64 66,74 34,60" fill="url(#goldSideLuxury)" />
      <polygon points="66,64 98,50 98,60 66,74" fill="url(#goldFrontLuxury)" />

      {/* 🟢 TOP CENTER MAIN BAR */}
      <polygon points="24,34 56,20 88,34 56,48" fill="url(#goldTopLuxury)" />
      <polygon points="24,34 56,48 56,58 24,44" fill="url(#goldSideLuxury)" />
      <polygon points="56,48 88,34 88,44 56,58" fill="url(#goldFrontLuxury)" />

      {/* ✨ EMBOSSED 999.9 STAMP TEXT */}
      <path d="M 40,30 L 70,30" stroke="#78350f" strokeWidth="1" strokeOpacity="0.5" />
      <text x="56" y="37" textAnchor="middle" fill="#78350f" fontSize="5" fontWeight="900" opacity="0.6" transform="rotate(-15 56 37)">
        999.9 FINE GOLD
      </text>

      {/* 🌟 METALLIC SPECULAR BEVEL HIGHLIGHTS */}
      <path d="M 24,34 L 56,20 L 88,34" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
      <line x1="56" y1="20" x2="56" y2="48" stroke="#ffffff" strokeWidth="1.5" opacity="0.6" />
      
      {/* STAR SHINE FLARE */}
      <path d="M 56 20 L 56 12 M 56 20 L 56 28 M 56 20 L 48 20 M 56 20 L 64 20" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  </svg>
);

// ⛽ 2. ULTRA-REALISTIC 3D PETROL PUMP (PETROL / DIESEL RATE)
export const PetrolPump3D: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="redPumpGloss" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f87171" />
        <stop offset="40%" stopColor="#ef4444" />
        <stop offset="80%" stopColor="#b91c1c" />
        <stop offset="100%" stopColor="#7f1d1d" />
      </linearGradient>
      <linearGradient id="bluePanelGloss" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="50%" stopColor="#1d4ed8" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
      <linearGradient id="ledScreen" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="100%" stopColor="#ca8a04" />
      </linearGradient>

      <filter id="pumpGlowShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="3" dy="5" stdDeviation="4" floodColor="#000000" floodOpacity="0.3" />
      </filter>
    </defs>

    <g filter="url(#pumpGlowShadow)">
      {/* 🔴 MAIN PUMP CHASSIS */}
      <rect x="22" y="24" width="46" height="64" rx="10" fill="url(#redPumpGloss)" stroke="#991b1b" strokeWidth="1" />
      {/* 🔵 SIDE CHROME PANEL */}
      <path d="M 68 32 L 78 26 L 78 80 L 68 88 Z" fill="url(#bluePanelGloss)" />
      {/* ROOF CAP */}
      <path d="M 20 24 L 45 13 L 80 18 L 68 24 Z" fill="#991b1b" />
      <path d="M 20 24 L 45 13 L 68 24 Z" fill="#fca5a5" opacity="0.6" />

      {/* 📟 DIGITAL LED DISPLAY BOX */}
      <rect x="30" y="34" width="30" height="22" rx="5" fill="#0f172a" stroke="#f87171" strokeWidth="1.5" />
      <rect x="33" y="37" width="24" height="16" rx="3" fill="url(#ledScreen)" />
      {/* DIGITAL READOUT LINES */}
      <text x="45" y="49" textAnchor="middle" fill="#78350f" fontSize="10" fontWeight="900" fontFamily="monospace">
        103.5
      </text>

      {/* ⛽ HIGH-FLEX HOSE CABLE */}
      <path d="M 68 44 C 90 44, 94 72, 82 82 C 74 88, 66 78, 68 68" stroke="#f59e0b" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M 68 44 C 90 44, 94 72, 82 82 C 74 88, 66 78, 68 68" stroke="#fef08a" strokeWidth="1.5" strokeDasharray="3 3" strokeLinecap="round" />

      {/* YELLOW NOZZLE HANDLE */}
      <path d="M 80 72 L 88 64 L 92 68 L 84 76 Z" fill="#f59e0b" stroke="#78350f" strokeWidth="0.8" />
      <path d="M 88 64 L 92 56" stroke="#94a3b8" strokeWidth="3.5" strokeLinecap="round" />

      {/* GLOSS HIGHLIGHT STREAK */}
      <path d="M 26 28 L 26 80" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
    </g>
  </svg>
);

// 🥦 3. ULTRA-REALISTIC 3D VEGETABLE BASKET (VEGETABLE PRICE)
export const VegBasket3D: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="wovenBasket" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="50%" stopColor="#b45309" />
        <stop offset="100%" stopColor="#451a03" />
      </linearGradient>
      <radialGradient id="tomato3D" cx="35%" cy="30%" r="65%">
        <stop offset="0%" stopColor="#fca5a5" />
        <stop offset="30%" stopColor="#ef4444" />
        <stop offset="85%" stopColor="#991b1b" />
        <stop offset="100%" stopColor="#450a0a" />
      </radialGradient>
      <linearGradient id="leafFresh" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#86efac" />
        <stop offset="50%" stopColor="#22c55e" />
        <stop offset="100%" stopColor="#14532d" />
      </linearGradient>

      <filter id="vegGlowShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="3" dy="5" stdDeviation="4" floodColor="#361705" floodOpacity="0.35" />
      </filter>
    </defs>

    <g filter="url(#vegGlowShadow)">
      {/* 🥬 FRESH BROCCOLI / LETTUCE CANOPY */}
      <circle cx="34" cy="38" r="16" fill="url(#leafFresh)" />
      <circle cx="56" cy="32" r="18" fill="url(#leafFresh)" />
      <circle cx="72" cy="40" r="14" fill="url(#leafFresh)" />

      {/* 🍅 SHINY 3D TOMATOES */}
      <circle cx="42" cy="46" r="14" fill="url(#tomato3D)" />
      {/* Tomato Stem Leaf */}
      <path d="M 38 34 L 46 36 L 42 30 Z" fill="#15803d" />
      <circle cx="38" cy="42" r="3" fill="#ffffff" opacity="0.6" />

      <circle cx="64" cy="48" r="12" fill="url(#tomato3D)" />
      <circle cx="61" cy="44" r="2.5" fill="#ffffff" opacity="0.6" />

      {/* 🧺 WOVEN RATTAN BASKET CONTAINER */}
      <path d="M 16 50 C 16 50, 24 88, 50 88 C 76 88, 84 50, 84 50 Z" fill="url(#wovenBasket)" stroke="#78350f" strokeWidth="1" />
      <ellipse cx="50" cy="50" rx="34" ry="9" fill="#d97706" stroke="#b45309" strokeWidth="1.5" />

      {/* BASKET WOVEN RATTAN TEXTURE */}
      <path d="M 28 52 C 32 68, 36 82, 38 86" stroke="#fef08a" strokeWidth="2" strokeOpacity="0.5" />
      <path d="M 50 52 L 50 88" stroke="#fef08a" strokeWidth="2" strokeOpacity="0.5" />
      <path d="M 72 52 C 68 68, 64 82, 62 86" stroke="#fef08a" strokeWidth="2" strokeOpacity="0.5" />

      <path d="M 20 64 C 40 68, 60 68, 80 64" stroke="#451a03" strokeWidth="1.5" strokeOpacity="0.6" />
      <path d="M 23 76 C 40 80, 60 80, 77 76" stroke="#451a03" strokeWidth="1.5" strokeOpacity="0.6" />
    </g>
  </svg>
);

// 🌤️ 4. ULTRA-REALISTIC 3D WEATHER SUN & RAIN CLOUD (WEATHER)
export const WeatherSunCloud3D: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="sun3DGlow" cx="40%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#fffde7" />
        <stop offset="40%" stopColor="#fbbf24" />
        <stop offset="85%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#b45309" />
      </radialGradient>
      <linearGradient id="cloud3DVolumetric" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="65%" stopColor="#f1f5f9" />
        <stop offset="85%" stopColor="#cbd5e1" />
        <stop offset="100%" stopColor="#94a3b8" />
      </linearGradient>

      <filter id="weatherGlowShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="3" dy="5" stdDeviation="4" floodColor="#1e3a8a" floodOpacity="0.3" />
      </filter>
    </defs>

    <g filter="url(#weatherGlowShadow)">
      {/* ☀️ GLOWING 3D SUN */}
      <circle cx="38" cy="36" r="22" fill="url(#sun3DGlow)" />
      {/* 8 RADIAL LENS FLARE RAYS */}
      <line x1="38" y1="6" x2="38" y2="12" stroke="#fbbf24" strokeWidth="4" strokeLinecap="round" />
      <line x1="16" y1="16" x2="21" y2="21" stroke="#fbbf24" strokeWidth="4" strokeLinecap="round" />
      <line x1="6" y1="36" x2="12" y2="36" stroke="#fbbf24" strokeWidth="4" strokeLinecap="round" />
      <line x1="60" y1="16" x2="55" y2="21" stroke="#fbbf24" strokeWidth="4" strokeLinecap="round" />

      {/* ☁️ 3D VOLUMETRIC FLUFFY CLOUD */}
      <path
        d="M 32 64 C 20 64, 18 50, 32 46 C 34 33, 54 28, 62 38 C 70 34, 84 40, 82 53 C 90 55, 90 67, 78 71 C 78 71, 32 71, 32 64 Z"
        fill="url(#cloud3DVolumetric)"
        stroke="#ffffff"
        strokeWidth="1.5"
      />

      {/* 💧 3D SAPPHIRE RAINDROPS */}
      <path d="M 38 77 Q 35 84 38 88 Q 41 84 38 77 Z" fill="#3b82f6" stroke="#60a5fa" strokeWidth="0.8" />
      <path d="M 54 77 Q 51 84 54 88 Q 57 84 54 77 Z" fill="#3b82f6" stroke="#60a5fa" strokeWidth="0.8" />
      <path d="M 68 77 Q 65 84 68 88 Q 71 84 68 77 Z" fill="#3b82f6" stroke="#60a5fa" strokeWidth="0.8" />
    </g>
  </svg>
);

// 📈 5. ULTRA-REALISTIC 3D STOCK MARKET BOARD (STOCK MARKET)
export const StockChart3D: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="blueMonitorGlass" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="30%" stopColor="#3b82f6" />
        <stop offset="80%" stopColor="#1d4ed8" />
        <stop offset="100%" stopColor="#1e3a8a" />
      </linearGradient>
      <linearGradient id="neonArrowGold" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="50%" stopColor="#eab308" />
        <stop offset="100%" stopColor="#ca8a04" />
      </linearGradient>

      <filter id="stockGlowShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="3" dy="5" stdDeviation="4" floodColor="#1e3a8a" floodOpacity="0.4" />
      </filter>
    </defs>

    <g filter="url(#stockGlowShadow)">
      {/* 📊 3D GLASS DISPLAY MONITOR */}
      <rect x="14" y="18" width="72" height="62" rx="14" fill="url(#blueMonitorGlass)" stroke="#93c5fd" strokeWidth="2" />
      
      {/* GRID LINES */}
      <line x1="14" y1="38" x2="86" y2="38" stroke="#93c5fd" strokeWidth="1" strokeDasharray="3 3" opacity="0.35" />
      <line x1="14" y1="58" x2="86" y2="58" stroke="#93c5fd" strokeWidth="1" strokeDasharray="3 3" opacity="0.35" />
      <line x1="38" y1="18" x2="38" y2="80" stroke="#93c5fd" strokeWidth="1" strokeDasharray="3 3" opacity="0.35" />
      <line x1="62" y1="18" x2="62" y2="80" stroke="#93c5fd" strokeWidth="1" strokeDasharray="3 3" opacity="0.35" />

      {/* 📈 3D BULLISH RISING CHART ARROW */}
      <path d="M 22 66 L 40 50 L 56 58 L 78 28" stroke="url(#neonArrowGold)" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 64 26 L 80 26 L 80 42 Z" fill="url(#neonArrowGold)" />

      {/* GLOSS REFLECTION STREAK */}
      <path d="M 18 22 Q 50 20 82 22 L 78 30 Q 50 28 22 30 Z" fill="#ffffff" opacity="0.25" />
    </g>
  </svg>
);

// 🪙 6. ULTRA-REALISTIC 3D GOLD BITCOIN COIN (CRYPTO RATE)
export const BitcoinCoin3D: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="bitcoin3DFace" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#fffbeb" />
        <stop offset="25%" stopColor="#fde047" />
        <stop offset="60%" stopColor="#f97316" />
        <stop offset="90%" stopColor="#c2410c" />
        <stop offset="100%" stopColor="#7c2d12" />
      </radialGradient>

      <filter id="bitcoinGlowShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="3" dy="5" stdDeviation="4" floodColor="#7c2d12" floodOpacity="0.4" />
      </filter>
    </defs>

    <g filter="url(#bitcoinGlowShadow)">
      {/* 3D MILLED EDGE COIN BASE */}
      <circle cx="50" cy="54" r="37" fill="#7c2d12" />
      {/* SHINY MAIN COIN BODY */}
      <circle cx="50" cy="50" r="37" fill="url(#bitcoin3DFace)" stroke="#fef08a" strokeWidth="2.5" />
      {/* INNER EMBOSSED RING */}
      <circle cx="50" cy="50" r="29" fill="none" stroke="#fef08a" strokeWidth="2" strokeDasharray="5 2" opacity="0.85" />

      {/* 3D EMBOSSED BITCOIN SYMBOL (₿) */}
      <text
        x="50"
        y="62"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="35"
        fontWeight="900"
        fontFamily="sans-serif"
        style={{ filter: 'drop-shadow(2px 3px 3px rgba(0,0,0,0.5))' }}
      >
        ₿
      </text>

      {/* 45-DEGREE DIAGONAL LIGHT GLEAM */}
      <path d="M 22 28 Q 50 16 78 28 C 70 24, 30 24, 22 28 Z" fill="#ffffff" opacity="0.4" />
    </g>
  </svg>
);

// 🎂 7. 3D AGE CALCULATOR (AGE CALCULATOR)
export const AgeCalc3D: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cakePink" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f472b6" />
        <stop offset="50%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#9d174d" />
      </linearGradient>
      <linearGradient id="frostingWhite" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#fbcfe8" />
      </linearGradient>
      <filter id="cakeGlow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="3" dy="5" stdDeviation="4" floodColor="#831843" floodOpacity="0.35" />
      </filter>
    </defs>

    <g filter="url(#cakeGlow)">
      {/* Cake Base */}
      <path d="M 18 52 C 18 52, 22 84, 50 84 C 78 84, 82 52, 82 52 Z" fill="url(#cakePink)" />
      {/* Top Frosting */}
      <ellipse cx="50" cy="52" rx="32" ry="10" fill="url(#frostingWhite)" />
      {/* Dripping Frosting Details */}
      <path d="M 18 52 C 22 62, 28 64, 32 54 C 36 66, 44 68, 50 56 C 56 68, 64 66, 68 54 C 74 62, 78 60, 82 52 Z" fill="url(#frostingWhite)" />

      {/* 3D Candle */}
      <rect x="46" y="24" width="8" height="28" rx="2" fill="#3b82f6" />
      <line x1="50" y1="18" x2="50" y2="24" stroke="#000000" strokeWidth="1.5" />
      {/* Candle Flame */}
      <path d="M 50 8 Q 44 16 50 20 Q 56 16 50 8 Z" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" />
      <circle cx="50" cy="15" r="2.5" fill="#ffffff" />
    </g>
  </svg>
);

// 🧮 8. 3D EMI CALCULATOR (EMI CALCULATOR)
export const EmiCalc3D: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="calcBodyBlue" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="50%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#1e3a8a" />
      </linearGradient>
      <linearGradient id="calcScreenGreen" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#86efac" />
        <stop offset="100%" stopColor="#16a34a" />
      </linearGradient>
      <filter id="calcGlow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="3" dy="5" stdDeviation="4" floodColor="#1e3a8a" floodOpacity="0.4" />
      </filter>
    </defs>

    <g filter="url(#calcGlow)">
      {/* 3D Calculator Body */}
      <rect x="20" y="16" width="60" height="72" rx="12" fill="url(#calcBodyBlue)" stroke="#93c5fd" strokeWidth="1.5" />
      {/* Screen */}
      <rect x="28" y="24" width="44" height="20" rx="4" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.5" />
      <rect x="31" y="27" width="38" height="14" rx="2" fill="url(#calcScreenGreen)" />
      <text x="64" y="38" textAnchor="end" fill="#052e16" fontSize="10" fontWeight="900" fontFamily="monospace">
        ₹ 48,500
      </text>

      {/* 3D Key Buttons Grid */}
      <circle cx="34" cy="52" r="5" fill="#f87171" />
      <circle cx="50" cy="52" r="5" fill="#93c5fd" />
      <circle cx="66" cy="52" r="5" fill="#93c5fd" />

      <circle cx="34" cy="66" r="5" fill="#93c5fd" />
      <circle cx="50" cy="66" r="5" fill="#93c5fd" />
      <circle cx="66" cy="66" r="5" fill="#f59e0b" />

      <rect x="29" y="74" width="42" height="8" rx="4" fill="#f59e0b" />
    </g>
  </svg>
);

// 📄 9. 3D PDF TO JPG CONVERTER (PDF TO JPG)
export const PdfToJpg3D: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="pdfRed" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f87171" />
        <stop offset="50%" stopColor="#dc2626" />
        <stop offset="100%" stopColor="#7f1d1d" />
      </linearGradient>
      <linearGradient id="jpgBlue" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#0284c7" />
      </linearGradient>
      <filter id="pdfGlow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="3" dy="5" stdDeviation="4" floodColor="#7f1d1d" floodOpacity="0.35" />
      </filter>
    </defs>

    <g filter="url(#pdfGlow)">
      {/* 📄 PDF Document (Left Layer) */}
      <rect x="14" y="20" width="42" height="56" rx="6" fill="url(#pdfRed)" stroke="#fca5a5" strokeWidth="1" />
      <path d="M 40 20 L 56 36 L 40 36 Z" fill="#991b1b" />
      <text x="35" y="55" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="900">
        PDF
      </text>

      {/* 🖼️ JPG Image Frame (Right Overlapping Layer) */}
      <rect x="44" y="32" width="44" height="52" rx="6" fill="url(#jpgBlue)" stroke="#ffffff" strokeWidth="2" />
      <circle cx="56" cy="46" r="5" fill="#fef08a" />
      <path d="M 48 72 L 60 56 L 72 72 L 80 64 L 84 72 Z" fill="#4ade80" />

      {/* 🔄 Transformation Arrow */}
      <path d="M 38 48 L 52 48" stroke="#fde047" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M 48 43 L 55 48 L 48 53 Z" fill="#fde047" />
    </g>
  </svg>
);

// 💚 10. 3D BMI CALCULATOR (BMI CALCULATOR)
export const BmiCalc3D: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="heartEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4ade80" />
        <stop offset="50%" stopColor="#16a34a" />
        <stop offset="100%" stopColor="#064e3b" />
      </linearGradient>
      <filter id="bmiGlow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="3" dy="5" stdDeviation="4" floodColor="#064e3b" floodOpacity="0.4" />
      </filter>
    </defs>

    <g filter="url(#bmiGlow)">
      {/* 💚 3D Emerald Heart */}
      <path
        d="M 50 82 C 15 55, 12 25, 34 20 C 44 18, 48 24, 50 28 C 52 24, 56 18, 66 20 C 88 25, 85 55, 50 82 Z"
        fill="url(#heartEmerald)"
        stroke="#86efac"
        strokeWidth="1.5"
      />

      {/* 📏 Measuring Tape Wrapped Across */}
      <path d="M 20 48 Q 50 62 80 48" stroke="#fef08a" strokeWidth="6" strokeLinecap="round" />
      <path d="M 20 48 Q 50 62 80 48" stroke="#78350f" strokeWidth="1.5" strokeDasharray="3 3" strokeLinecap="round" />

      {/* Shiny Heart Highlight */}
      <ellipse cx="34" cy="30" rx="5" ry="3" fill="#ffffff" opacity="0.6" transform="rotate(-30 34 30)" />
    </g>
  </svg>
);

// 🖼️ 11. 3D IMAGE COMPRESSOR (IMAGE COMPRESSOR)
export const ImageCompressor3D: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="imgIndigo" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#818cf8" />
        <stop offset="50%" stopColor="#4f46e5" />
        <stop offset="100%" stopColor="#1e1b4b" />
      </linearGradient>
      <filter id="imgGlow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="3" dy="5" stdDeviation="4" floodColor="#1e1b4b" floodOpacity="0.4" />
      </filter>
    </defs>

    <g filter="url(#imgGlow)">
      {/* 🖼️ Photo Card */}
      <rect x="18" y="24" width="64" height="54" rx="10" fill="url(#imgIndigo)" stroke="#c7d2fe" strokeWidth="2" />
      <circle cx="34" cy="40" r="7" fill="#fde047" />
      <path d="M 24 68 L 42 50 L 58 68 L 68 58 L 76 68 Z" fill="#4ade80" />

      {/* 🗜️ 3D Compression Downward Pressure Arrows */}
      <path d="M 50 10 L 50 26 M 44 20 L 50 26 L 56 20" stroke="#f43f5e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 50 90 L 50 74 M 44 80 L 50 74 L 56 80" stroke="#f43f5e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

// 🔳 12. 3D QR CODE GENERATOR (QR CODE GENERATOR)
export const QrGenerator3D: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="qrGoldTile" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="50%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#78350f" />
      </linearGradient>
      <filter id="qrGlow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="3" dy="5" stdDeviation="4" floodColor="#78350f" floodOpacity="0.4" />
      </filter>
    </defs>

    <g filter="url(#qrGlow)">
      {/* 🔳 Holographic QR Base Tile */}
      <rect x="18" y="18" width="64" height="64" rx="12" fill="url(#qrGoldTile)" stroke="#ffffff" strokeWidth="2" />
      <rect x="24" y="24" width="52" height="52" rx="8" fill="#0f172a" />

      {/* 3D QR Position Anchors */}
      <rect x="30" y="30" width="14" height="14" rx="3" fill="#38bdf8" />
      <rect x="34" y="34" width="6" height="6" fill="#0f172a" />

      <rect x="56" y="30" width="14" height="14" rx="3" fill="#38bdf8" />
      <rect x="60" y="34" width="6" height="6" fill="#0f172a" />

      <rect x="30" y="56" width="14" height="14" rx="3" fill="#38bdf8" />
      <rect x="34" y="60" width="6" height="6" fill="#0f172a" />

      {/* QR Data Bits */}
      <rect x="56" y="56" width="6" height="6" fill="#f43f5e" />
      <rect x="64" y="64" width="6" height="6" fill="#f43f5e" />
      <rect x="64" y="56" width="6" height="6" fill="#4ade80" />

      {/* 🔴 Holographic Laser Scanner Line */}
      <line x1="16" y1="50" x2="84" y2="50" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" style={{ filter: 'drop-shadow(0 0 4px #ef4444)' }} />
    </g>
  </svg>
);

// 🏛️ 13. 3D GOVT SCHEME (GRUHA LAKSHMI STATUS)
export const GovtScheme3D: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="houseGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="50%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#b45309" />
      </linearGradient>
      <filter id="govtGlow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="3" dy="5" stdDeviation="4" floodColor="#78350f" floodOpacity="0.35" />
      </filter>
    </defs>

    <g filter="url(#govtGlow)">
      {/* 🏡 3D House Roof */}
      <path d="M 50 18 L 18 42 L 26 42 L 50 24 L 74 42 L 82 42 Z" fill="url(#houseGold)" stroke="#ffffff" strokeWidth="1.5" />
      {/* House Body */}
      <rect x="26" y="42" width="48" height="38" rx="4" fill="#ffffff" stroke="#f59e0b" strokeWidth="2" />
      {/* Door */}
      <rect x="42" y="56" width="16" height="24" rx="2" fill="#d97706" />

      {/* 🪙 3D Rupee Coin Badge */}
      <circle cx="70" cy="30" r="14" fill="#fbbf24" stroke="#78350f" strokeWidth="1.5" />
      <text x="70" y="35" textAnchor="middle" fill="#78350f" fontSize="14" fontWeight="900">
        ₹
      </text>
    </g>
  </svg>
);

// 🎓 14. 3D SSLC MARKS CALC (SSLC MARKS % CALC)
export const SslcCalc3D: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="capGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="50%" stopColor="#0284c7" />
        <stop offset="100%" stopColor="#0369a1" />
      </linearGradient>
      <filter id="eduGlow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="3" dy="5" stdDeviation="4" floodColor="#0369a1" floodOpacity="0.4" />
      </filter>
    </defs>

    <g filter="url(#eduGlow)">
      {/* 🎓 Mortarboard Cap Top Diamond */}
      <polygon points="50,18 88,34 50,50 12,34" fill="url(#capGrad)" stroke="#ffffff" strokeWidth="1.5" />
      {/* Cap Skull Base */}
      <path d="M 28 42 L 28 60 C 28 68, 72 68, 72 60 L 72 42 Z" fill="#0284c7" stroke="#ffffff" strokeWidth="1" />
      {/* Tassel */}
      <path d="M 50 34 L 78 52 L 78 68" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
      <circle cx="78" cy="70" r="4" fill="#f59e0b" />

      {/* 📜 Certificate Scroll */}
      <rect x="18" y="66" width="36" height="18" rx="4" fill="#ffffff" stroke="#0284c7" strokeWidth="1.5" transform="rotate(-10 18 66)" />
      <line x1="22" y1="72" x2="44" y2="72" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
    </g>
  </svg>
);

// 📜 15. 3D BIO-DATA MAKER (BIO-DATA RESUME MAKER)
export const BioData3D: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="resumeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#e0f2fe" />
      </linearGradient>
      <filter id="resumeGlow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="3" dy="5" stdDeviation="4" floodColor="#0369a1" floodOpacity="0.3" />
      </filter>
    </defs>

    <g filter="url(#resumeGlow)">
      {/* 📜 Document Sheet */}
      <rect x="22" y="16" width="56" height="72" rx="8" fill="url(#resumeGrad)" stroke="#0284c7" strokeWidth="2" />
      
      {/* 👤 Profile Avatar Badge */}
      <circle cx="38" cy="34" r="8" fill="#38bdf8" />
      <path d="M 30 46 C 30 40, 46 40, 46 46 Z" fill="#0284c7" />

      {/* Text Lines */}
      <rect x="52" y="28" width="20" height="4" rx="2" fill="#0284c7" />
      <rect x="52" y="36" width="16" height="3" rx="1.5" fill="#94a3b8" />

      <line x1="30" y1="56" x2="70" y2="56" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
      <line x1="30" y1="66" x2="64" y2="66" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
      <line x1="30" y1="76" x2="54" y2="76" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />

      {/* ✍️ Pen */}
      <path d="M 68 62 L 80 50 L 86 56 L 74 68 Z" fill="#f59e0b" stroke="#78350f" strokeWidth="0.8" />
    </g>
  </svg>
);

// 🛒 17. 3D KIRANI SANTE LIST ICON (KIRANI SANTE LIST MAKER)
export const KiraniList3D: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bagGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="50%" stopColor="#d97706" />
        <stop offset="100%" stopColor="#92400e" />
      </linearGradient>
      <linearGradient id="clipPaper" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#f8fafc" />
      </linearGradient>
      <filter id="kiraniGlow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="3" dy="5" stdDeviation="4" floodColor="#78350f" floodOpacity="0.35" />
      </filter>
    </defs>

    <g filter="url(#kiraniGlow)">
      {/* 🛍️ Grocery Shopping Bag Base */}
      <rect x="24" y="32" width="52" height="56" rx="10" fill="url(#bagGrad)" stroke="#fef08a" strokeWidth="2" />
      
      {/* 🛍️ Bag Handles */}
      <path d="M 38 32 C 38 18, 62 18, 62 32" stroke="#fde047" strokeWidth="4" strokeLinecap="round" fill="none" />

      {/* 📋 Checklist Document floating out */}
      <rect x="34" y="24" width="46" height="54" rx="6" fill="url(#clipPaper)" stroke="#0284c7" strokeWidth="1.5" transform="rotate(8 34 24)" />

      {/* Checklist Checkboxes and items */}
      <rect x="42" y="34" width="7" height="7" rx="2" fill="#22c55e" transform="rotate(8 42 34)" />
      <path d="M 44 38 L 46 40 L 50 36" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="52" y1="38" x2="68" y2="40" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />

      <rect x="44" y="44" width="7" height="7" rx="2" fill="#22c55e" transform="rotate(8 44 44)" />
      <path d="M 46 48 L 48 50 L 52 46" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="54" y1="48" x2="70" y2="50" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />

      <rect x="46" y="54" width="7" height="7" rx="2" fill="#f59e0b" transform="rotate(8 46 54)" />
      <line x1="56" y1="58" x2="72" y2="60" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />

      {/* 🥦 Fresh Tomato Badge in front */}
      <circle cx="28" cy="74" r="12" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
      <path d="M 28 64 C 28 62, 32 62, 32 60" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
    </g>
  </svg>
);

export const Grocery3D: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="basketGreen" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4ade80" />
        <stop offset="50%" stopColor="#16a34a" />
        <stop offset="100%" stopColor="#064e3b" />
      </linearGradient>
      <filter id="groceryGlow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="3" dy="5" stdDeviation="4" floodColor="#064e3b" floodOpacity="0.35" />
      </filter>
    </defs>

    <g filter="url(#groceryGlow)">
      {/* Items in Basket */}
      <rect x="30" y="26" width="16" height="24" rx="3" fill="#ef4444" /> {/* Milk Box */}
      <circle cx="56" cy="36" r="10" fill="#f59e0b" /> {/* Orange */}
      <rect x="64" y="28" width="12" height="22" rx="2" fill="#3b82f6" /> {/* Oil Bottle */}

      {/* 🛒 Shopping Basket */}
      <path d="M 18 46 C 18 46, 26 84, 50 84 C 74 84, 82 46, 82 46 Z" fill="url(#basketGreen)" stroke="#86efac" strokeWidth="1.5" />
      <ellipse cx="50" cy="46" rx="33" ry="8" fill="#22c55e" stroke="#86efac" strokeWidth="1.5" />
      {/* Basket Grid Mesh */}
      <path d="M 28 48 L 36 80 M 50 48 L 50 84 M 72 48 L 64 80" stroke="#ffffff" strokeWidth="2" opacity="0.6" />
    </g>
  </svg>
);

// 🪙 18. 3D VILLAGE BADDI CALCULATOR ICON (GRAMA BADDI & INTEREST CALC)
export const VillageBaddi3D: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="coinGradGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="30%" stopColor="#f59e0b" />
        <stop offset="70%" stopColor="#d97706" />
        <stop offset="100%" stopColor="#78350f" />
      </linearGradient>
      <linearGradient id="rupeeNoteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ecfdf5" />
        <stop offset="50%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
      <filter id="baddiShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="3" dy="6" stdDeviation="4" floodColor="#064e3b" floodOpacity="0.4" />
      </filter>
    </defs>

    <g filter="url(#baddiShadow)">
      {/* 💵 Green Currency Note Base */}
      <rect x="18" y="32" width="64" height="42" rx="6" fill="url(#rupeeNoteGrad)" stroke="#6ee7b7" strokeWidth="2" transform="rotate(-6 18 32)" />
      
      {/* 💵 Currency Note Inner Border */}
      <rect x="22" y="36" width="56" height="34" rx="4" fill="none" stroke="#a7f3d0" strokeWidth="1.2" strokeDasharray="3 2" transform="rotate(-6 22 36)" />
      <text x="32" y="58" fill="#ffffff" fontSize="18" fontWeight="bold" fontFamily="sans-serif" transform="rotate(-6 32 58)">₹</text>

      {/* 🪙 Large 3D Gold Coin with Kannada Baddi Symbol */}
      <circle cx="64" cy="62" r="22" fill="url(#coinGradGold)" stroke="#fef08a" strokeWidth="2.5" />
      <circle cx="64" cy="62" r="17" fill="none" stroke="#fde047" strokeWidth="1.5" strokeDasharray="4 2" />
      
      {/* % Percentage & ₹ Emblem */}
      <text x="56" y="68" fill="#ffffff" fontSize="16" fontWeight="900" fontFamily="sans-serif">%</text>
      
      {/* 📈 Growth Arrow */}
      <path d="M 68 44 L 80 44 L 80 56" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 58 60 L 78 46" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" />
    </g>
  </svg>
);

// 💌 19. 3D KANNADA INVITATION CARD ICON (INVITATION CARD MAKER)
export const Invitation3D: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cardGradMaroon" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#991b1b" />
        <stop offset="50%" stopColor="#7f1d1d" />
        <stop offset="100%" stopColor="#450a0a" />
      </linearGradient>
      <linearGradient id="goldFlourish" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fffbeb" />
        <stop offset="40%" stopColor="#fde047" />
        <stop offset="80%" stopColor="#d97706" />
        <stop offset="100%" stopColor="#92400e" />
      </linearGradient>
      <filter id="invitationShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="3" dy="6" stdDeviation="4" floodColor="#450a0a" floodOpacity="0.45" />
      </filter>
    </defs>

    <g filter="url(#invitationShadow)">
      {/* 💌 Royal Maroon Invitation Card Envelope / Card */}
      <rect x="20" y="22" width="60" height="68" rx="8" fill="url(#cardGradMaroon)" stroke="#fde047" strokeWidth="2" />
      
      {/* Gold Inner Ornate Border */}
      <rect x="26" y="28" width="48" height="56" rx="4" fill="none" stroke="#facc15" strokeWidth="1.2" strokeDasharray="3 2" />

      {/* 🪔 Golden Kalasha / Ganesha Motif at Top */}
      <circle cx="50" cy="38" r="7" fill="url(#goldFlourish)" stroke="#fef08a" strokeWidth="1" />
      <path d="M 46 38 Q 50 32 54 38 Q 50 44 46 38 Z" fill="#ffffff" />

      {/* Decorative Text Lines */}
      <line x1="34" y1="50" x2="66" y2="50" stroke="#fef08a" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="38" y1="58" x2="62" y2="58" stroke="#fde047" strokeWidth="2" strokeLinecap="round" />
      <line x1="42" y1="66" x2="58" y2="66" stroke="#fde047" strokeWidth="1.5" strokeLinecap="round" />

      {/* 💍 Golden Wedding Rings Intertwined at Bottom */}
      <circle cx="45" cy="74" r="5" fill="none" stroke="#facc15" strokeWidth="2" />
      <circle cx="55" cy="74" r="5" fill="none" stroke="#fde047" strokeWidth="2" />

      {/* Corner Flourishes */}
      <circle cx="28" cy="30" r="2" fill="#fde047" />
      <circle cx="72" cy="30" r="2" fill="#fde047" />
      <circle cx="28" cy="82" r="2" fill="#fde047" />
      <circle cx="72" cy="82" r="2" fill="#fde047" />
    </g>
  </svg>
);

// 🥗 20. 3D KANNADA WEIGHT LOSS DIET CHART ICON (WEIGHT LOSS & HEALTH PLANNER)
export const WeightLossDiet3D: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="saladGradEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="50%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
      <linearGradient id="tapeGradYellow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="50%" stopColor="#eab308" />
        <stop offset="100%" stopColor="#ca8a04" />
      </linearGradient>
      <filter id="dietShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="3" dy="6" stdDeviation="4" floodColor="#064e3b" floodOpacity="0.4" />
      </filter>
    </defs>

    <g filter="url(#dietShadow)">
      {/* 🥣 Ceramic Health Salad Bowl */}
      <ellipse cx="50" cy="62" rx="36" ry="24" fill="url(#saladGradEmerald)" stroke="#a7f3d0" strokeWidth="2" />
      <ellipse cx="50" cy="54" rx="32" ry="16" fill="#ecfdf5" />

      {/* 🥦 Avocado, Apple & Healthy greens in bowl */}
      <circle cx="40" cy="50" r="10" fill="#22c55e" />
      <circle cx="60" cy="48" r="9" fill="#ef4444" /> {/* Apple */}
      <circle cx="50" cy="42" r="7" fill="#f59e0b" /> {/* Orange */}
      <circle cx="48" cy="54" r="5" fill="#84cc16" />

      {/* 📏 Measuring Tape wrapped around */}
      <path d="M 16 64 Q 50 82 84 64" stroke="url(#tapeGradYellow)" strokeWidth="6" strokeLinecap="round" fill="none" />
      <line x1="30" y1="69" x2="30" y2="73" stroke="#854d0e" strokeWidth="1.5" />
      <line x1="40" y1="72" x2="40" y2="76" stroke="#854d0e" strokeWidth="1.5" />
      <line x1="50" y1="73" x2="50" y2="78" stroke="#854d0e" strokeWidth="1.5" />
      <line x1="60" y1="72" x2="60" y2="76" stroke="#854d0e" strokeWidth="1.5" />
      <line x1="70" y1="69" x2="70" y2="73" stroke="#854d0e" strokeWidth="1.5" />

      {/* ⚖️ Weight Loss Flame / Sparkle */}
      <circle cx="74" cy="28" r="12" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" />
      <text x="68" y="33" fill="#ffffff" fontSize="13" fontWeight="900" fontFamily="sans-serif">kg</text>
    </g>
  </svg>
);

// 🌾 21. 3D KARNATAKA LAND SURVEY & AREA CONVERTER ICON
export const LandSurvey3D: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="landGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4ade80" />
        <stop offset="50%" stopColor="#16a34a" />
        <stop offset="100%" stopColor="#14532d" />
      </linearGradient>
      <linearGradient id="compassGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="50%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#b45309" />
      </linearGradient>
      <filter id="landShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="3" dy="6" stdDeviation="4" floodColor="#14532d" floodOpacity="0.4" />
      </filter>
    </defs>

    <g filter="url(#landShadow)">
      {/* 🗺️ Isometric Farm Land Plot */}
      <polygon points="50,22 86,40 50,78 14,40" fill="url(#landGreenGrad)" stroke="#bbf7d0" strokeWidth="2" />
      
      {/* Farm Furrows / Crop Rows */}
      <line x1="32" y1="31" x2="68" y2="49" stroke="#86efac" strokeWidth="1.5" strokeDasharray="3 2" />
      <line x1="23" y1="45" x2="59" y2="63" stroke="#86efac" strokeWidth="1.5" strokeDasharray="3 2" />
      <line x1="41" y1="26" x2="77" y2="44" stroke="#86efac" strokeWidth="1.5" strokeDasharray="3 2" />

      {/* 📍 Survey Pin / Flag in center */}
      <circle cx="50" cy="50" r="4" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
      <path d="M 50 50 L 50 32 L 62 38 L 50 44" fill="#ef4444" />

      {/* 🧭 Compass & 4 Direction Badges */}
      <circle cx="78" cy="74" r="14" fill="url(#compassGold)" stroke="#ffffff" strokeWidth="2" />
      <text x="74" y="79" fill="#451a03" fontSize="12" fontWeight="900" fontFamily="sans-serif">N</text>
      <path d="M 78 64 L 81 72 L 78 70 L 75 72 Z" fill="#ef4444" />
    </g>
  </svg>
);

// 📄 22. 3D KANNADA MARRIAGE BIODATA ICON (MARRIAGE BIODATA MAKER)
export const MarriageBiodata3D: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="biodataGradPink" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f43f5e" />
        <stop offset="50%" stopColor="#be123c" />
        <stop offset="100%" stopColor="#881337" />
      </linearGradient>
      <linearGradient id="goldSealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="50%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#b45309" />
      </linearGradient>
      <filter id="biodataShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="3" dy="6" stdDeviation="4" floodColor="#881337" floodOpacity="0.4" />
      </filter>
    </defs>

    <g filter="url(#biodataShadow)">
      {/* 📄 Luxury Biodata Parchment Profile */}
      <rect x="22" y="18" width="56" height="70" rx="6" fill="#fffbeb" stroke="url(#goldSealGrad)" strokeWidth="2" />
      <rect x="26" y="22" width="48" height="62" rx="4" fill="none" stroke="#fcd34d" strokeWidth="1" strokeDasharray="3 2" />

      {/* 👤 Avatar Photo placeholder frame */}
      <rect x="38" y="28" width="24" height="24" rx="12" fill="url(#biodataGradPink)" stroke="#ffffff" strokeWidth="1.5" />
      <circle cx="50" cy="36" r="5" fill="#ffffff" />
      <path d="M 42 48 C 42 44, 46 42, 50 42 C 54 42, 58 44, 58 48 Z" fill="#ffffff" />

      {/* Text lines */}
      <line x1="32" y1="58" x2="68" y2="58" stroke="#be123c" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="32" y1="64" x2="60" y2="64" stroke="#d97706" strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="70" x2="64" y2="70" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="32" y1="76" x2="52" y2="76" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />

      {/* 💍 Golden Rings Emblem */}
      <circle cx="68" cy="74" r="5" fill="none" stroke="url(#goldSealGrad)" strokeWidth="1.5" />
      <circle cx="74" cy="74" r="5" fill="none" stroke="#f43f5e" strokeWidth="1.5" />
    </g>
  </svg>
);

// 👶 23. 3D KANNADA BABY NAMES & MEANINGS ICON (BABY NAMES FINDER)
export const BabyNames3D: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cradleGradBlue" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="50%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
      <linearGradient id="cradleGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="50%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
      <filter id="babyShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="3" dy="6" stdDeviation="4" floodColor="#1d4ed8" floodOpacity="0.4" />
      </filter>
    </defs>

    <g filter="url(#babyShadow)">
      {/* 🍼 Adorable Baby Rattle / Cradle Motif */}
      <circle cx="50" cy="38" r="18" fill="url(#cradleGradBlue)" stroke="#bfdbfe" strokeWidth="2" />
      <circle cx="50" cy="38" r="13" fill="#ffffff" opacity="0.2" />

      {/* ⭐ Golden Star in center */}
      <polygon points="50,26 53,34 62,34 55,39 57,47 50,42 43,47 45,39 38,34 47,34" fill="url(#cradleGold)" />

      {/* Rattle Handle */}
      <rect x="47" y="56" width="6" height="24" rx="3" fill="url(#cradleGold)" />
      <circle cx="50" cy="83" r="7" fill="url(#cradleGradBlue)" stroke="#bfdbfe" strokeWidth="1.5" />

      {/* Hanging Ribbons / Charms */}
      <circle cx="28" cy="46" r="5" fill="#f43f5e" />
      <circle cx="72" cy="46" r="5" fill="#fbbf24" />
      <path d="M 33 38 Q 28 42 28 46" stroke="#cbd5e1" strokeWidth="1.5" fill="none" />
      <path d="M 67 38 Q 72 42 72 46" stroke="#cbd5e1" strokeWidth="1.5" fill="none" />
    </g>
  </svg>
);

// 📅 24. 3D TRADITIONAL KANNADA CALENDAR ICON (TRADITIONAL CALENDAR)
export const TraditionalCalendar3D: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="calRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#dc2626" />
        <stop offset="50%" stopColor="#991b1b" />
        <stop offset="100%" stopColor="#450a0a" />
      </linearGradient>
      <linearGradient id="calGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="50%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#b45309" />
      </linearGradient>
      <filter id="calShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="3" dy="6" stdDeviation="4" floodColor="#450a0a" floodOpacity="0.4" />
      </filter>
    </defs>

    <g filter="url(#calShadow)">
      {/* 📅 Wall Hanging Traditional Calendar Board */}
      <rect x="20" y="16" width="60" height="72" rx="6" fill="#fffbeb" stroke="url(#calGoldGrad)" strokeWidth="2.5" />
      
      {/* Top Red Header Plate */}
      <path d="M 20 22 C 20 18.686, 22.686 16, 26 16 L 74 16 C 77.314 16, 80 18.686, 80 22 L 80 38 L 20 38 Z" fill="url(#calRedGrad)" />
      
      {/* Hanging Ring / Loop */}
      <circle cx="50" cy="12" r="5" fill="none" stroke="url(#calGoldGrad)" strokeWidth="2" />

      {/* Header Text - Om & Year */}
      <circle cx="50" cy="24" r="4" fill="#fef08a" />
      <text x="50" y="34" fill="#ffffff" fontSize="7" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">ಕನ್ನಡ ಕ್ಯಾಲೆಂಡರ್</text>

      {/* Big Date Number '27' */}
      <text x="50" y="62" fill="#991b1b" fontSize="24" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">27</text>
      
      {/* Panchanga Tithi Strip */}
      <rect x="25" y="68" width="50" height="14" rx="3" fill="#fef3c7" stroke="#fcd34d" strokeWidth="1" />
      <text x="50" y="78" fill="#78350f" fontSize="6.5" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">ಶ್ರಾವಣ • ಪೌರ್ಣಮಿ</text>

      {/* Side auspicious marks */}
      <circle cx="28" cy="46" r="2.5" fill="#f59e0b" />
      <circle cx="72" cy="46" r="2.5" fill="#f59e0b" />
    </g>
  </svg>
);

// 🍲 25. 3D KANNADA EVENT CATERING GROCERY ESTIMATOR ICON (CATERING ESTIMATOR)
export const CateringEstimator3D: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="potGradGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="50%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#b45309" />
      </linearGradient>
      <linearGradient id="potBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fb923c" />
        <stop offset="50%" stopColor="#ea580c" />
        <stop offset="100%" stopColor="#9a3412" />
      </linearGradient>
      <filter id="potShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="3" dy="6" stdDeviation="4" floodColor="#9a3412" floodOpacity="0.4" />
      </filter>
    </defs>

    <g filter="url(#potShadow)">
      {/* 🍲 Giant Traditional Feast Brass Cooking Vessel (ಹಂಡೆ / ಪಾತ್ರೆ) */}
      <ellipse cx="50" cy="40" rx="36" ry="12" fill="url(#potGradGold)" stroke="#fef08a" strokeWidth="2" />
      
      {/* Pot Body */}
      <path d="M 14 40 C 14 68, 24 84, 50 84 C 76 84, 86 68, 86 40 Z" fill="url(#potBodyGrad)" stroke="#f59e0b" strokeWidth="2" />

      {/* Rim inner soup/curry steam */}
      <ellipse cx="50" cy="40" rx="30" ry="8" fill="#fbbf24" opacity="0.6" />

      {/* Steam curves */}
      <path d="M 40 28 Q 44 20 40 14" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      <path d="M 50 26 Q 54 18 50 12" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
      <path d="M 60 28 Q 64 20 60 14" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.7" />

      {/* Side Brass Handles */}
      <path d="M 12 42 C 4 42, 4 52, 12 52" stroke="url(#potGradGold)" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <path d="M 88 42 C 96 42, 96 52, 88 52" stroke="url(#potGradGold)" strokeWidth="3.5" fill="none" strokeLinecap="round" />

      {/* Ladle / Sautu (ಸೌಟು) */}
      <line x1="68" y1="22" x2="48" y2="58" stroke="url(#potGradGold)" strokeWidth="3.5" strokeLinecap="round" />
      <ellipse cx="46" cy="60" rx="6" ry="4" fill="url(#potGradGold)" />
    </g>
  </svg>
);

// 📸 26. 3D SCREENSHOT OCR SCANNER & LIVE TEXT EDITOR ICON
export const ScreenshotEditor3D: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="phoneGradBlue" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="50%" stopColor="#0284c7" />
        <stop offset="100%" stopColor="#0369a1" />
      </linearGradient>
      <linearGradient id="scannerLaser" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.1" />
        <stop offset="50%" stopColor="#38bdf8" stopOpacity="1" />
        <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.1" />
      </linearGradient>
      <linearGradient id="magicPenGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="50%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#b45309" />
      </linearGradient>
      <filter id="scanShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="3" dy="6" stdDeviation="4" floodColor="#0369a1" floodOpacity="0.4" />
      </filter>
    </defs>

    <g filter="url(#scanShadow)">
      {/* 📱 Mobile Screenshot Frame */}
      <rect x="22" y="14" width="56" height="74" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
      <rect x="26" y="18" width="48" height="66" rx="5" fill="#1e293b" />

      {/* Screen text mock lines */}
      <line x1="32" y1="28" x2="68" y2="28" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
      <line x1="32" y1="36" x2="60" y2="36" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="32" y1="44" x2="64" y2="44" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />

      {/* ⚡ Glowing Laser Scan Line */}
      <rect x="26" y="48" width="48" height="4" fill="url(#scannerLaser)" />
      <line x1="26" y1="50" x2="74" y2="50" stroke="#38bdf8" strokeWidth="2" />

      {/* Text edit cursor box */}
      <rect x="32" y="58" width="28" height="12" rx="2" fill="#0284c7" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="46" y1="61" x2="46" y2="67" stroke="#ffffff" strokeWidth="1.5" />

      {/* ✍️ Magic Golden Edit Pen / Wand */}
      <polygon points="76,68 84,60 88,64 80,72 74,74" fill="url(#magicPenGold)" />
      <polygon points="74,74 76,68 80,72" fill="#0f172a" />
      <circle cx="86" cy="62" r="2" fill="#fef08a" />
    </g>
  </svg>
);

// 🧾 27. 3D FAMILY MONTHLY BUDGET & SAVINGS PLANNER ICON
export const FamilyBudget3D: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="budgetPadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="50%" stopColor="#059669" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
      <linearGradient id="goldCoinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="50%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#b45309" />
      </linearGradient>
      <filter id="budgetShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="3" dy="6" stdDeviation="4" floodColor="#047857" floodOpacity="0.4" />
      </filter>
    </defs>

    <g filter="url(#budgetShadow)">
      {/* 📋 Clipboard / Ledger Board */}
      <rect x="22" y="16" width="56" height="72" rx="8" fill="#ffffff" stroke="#10b981" strokeWidth="2.5" />
      
      {/* Top Emerald Header Clip */}
      <rect x="36" y="10" width="28" height="12" rx="4" fill="url(#budgetPadGrad)" />
      <circle cx="50" cy="16" r="3" fill="#ffffff" />

      {/* Household House Icon mini watermark */}
      <path d="M 50 28 L 64 38 L 58 38 L 58 50 L 42 50 L 42 38 L 36 38 Z" fill="#ecfdf5" stroke="#a7f3d0" strokeWidth="1" />

      {/* Progress Bars / Expense rows */}
      <rect x="30" y="42" width="22" height="4" rx="2" fill="#10b981" />
      <rect x="56" y="42" width="14" height="4" rx="2" fill="#f59e0b" />

      <rect x="30" y="50" width="30" height="4" rx="2" fill="#3b82f6" />
      <rect x="64" y="50" width="8" height="4" rx="2" fill="#ef4444" />

      <rect x="30" y="58" width="26" height="4" rx="2" fill="#8b5cf6" />
      <rect x="60" y="58" width="12" height="4" rx="2" fill="#10b981" />

      {/* Big Rupee ₹ Symbol & Gold Coin */}
      <circle cx="68" cy="72" r="14" fill="url(#goldCoinGrad)" stroke="#fef08a" strokeWidth="1.5" />
      <text x="68" y="78" fill="#ffffff" fontSize="14" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">₹</text>

      {/* Small Checkmark Badge */}
      <circle cx="34" cy="72" r="6" fill="#10b981" />
      <text x="34" y="76" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">✓</text>
    </g>
  </svg>
);

// 🏛️ 28. 3D OFFICIAL GOVT APPLICATION & LETTER GENERATOR ICON
export const GovtLetter3D: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sealRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#dc2626" />
        <stop offset="50%" stopColor="#991b1b" />
        <stop offset="100%" stopColor="#450a0a" />
      </linearGradient>
      <linearGradient id="goldRibbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="50%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#b45309" />
      </linearGradient>
      <linearGradient id="letterNavyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e3a8a" />
        <stop offset="50%" stopColor="#1e40af" />
        <stop offset="100%" stopColor="#172554" />
      </linearGradient>
      <filter id="letterShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="3" dy="6" stdDeviation="4" floodColor="#172554" floodOpacity="0.4" />
      </filter>
    </defs>

    <g filter="url(#letterShadow)">
      {/* 📜 Official A4 Document Sheet with Corner Fold */}
      <polygon points="20,14 68,14 80,26 80,86 20,86" fill="#ffffff" stroke="url(#letterNavyGrad)" strokeWidth="2.5" />
      
      {/* Corner Fold Triangle */}
      <polygon points="68,14 68,26 80,26" fill="#e2e8f0" stroke="url(#letterNavyGrad)" strokeWidth="1.5" />

      {/* Top Govt Emblem / Ashoka Pillar mini stamp */}
      <circle cx="50" cy="25" r="5" fill="#fef3c7" stroke="url(#goldRibbonGrad)" strokeWidth="1" />
      <path d="M 48 24 L 50 22 L 52 24 L 51 27 L 49 27 Z" fill="#991b1b" />

      {/* Official Header bar */}
      <rect x="28" y="34" width="44" height="4" rx="2" fill="url(#letterNavyGrad)" />

      {/* Letter text lines */}
      <line x1="28" y1="44" x2="72" y2="44" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="28" y1="52" x2="68" y2="52" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
      <line x1="28" y1="60" x2="72" y2="60" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
      <line x1="28" y1="68" x2="55" y2="68" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />

      {/* 🔴 Official Wax Seal & Ribbon */}
      <circle cx="68" cy="74" r="9" fill="url(#sealRedGrad)" stroke="#fef08a" strokeWidth="1.5" />
      <text x="68" y="77.5" fill="#fef08a" fontSize="8" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">✓</text>
      
      {/* Ribbon Tails */}
      <polygon points="65,82 62,90 66,88 68,82" fill="url(#goldRibbonGrad)" />
      <polygon points="71,82 74,90 70,88 68,82" fill="url(#goldRibbonGrad)" />

      {/* Fountain Pen Quill nib */}
      <polygon points="26,78 34,70 36,72 28,80 25,81" fill="url(#goldRibbonGrad)" />
      <circle cx="33" cy="73" r="1" fill="#172554" />
    </g>
  </svg>
);











