"use client";

import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const MahitiChakraLogo: React.FC<LogoProps> = ({ className = "w-10 h-10", size = 40 }) => {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-md hover:scale-105 transition-transform duration-300"
      >
        <defs>
          {/* Gold Gradient Outer Ring */}
          <linearGradient id="goldRing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>

          {/* Slate Gradient Center Shield */}
          <linearGradient id="slateShield" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          {/* Golden Center Glow */}
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="1" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
          </radialGradient>
        </defs>

        {/* Outer Rounded Box Container */}
        <rect x="5" y="5" width="90" height="90" rx="26" fill="url(#goldRing)" />

        {/* Inner Dark Slate Emblem Circle */}
        <circle cx="50" cy="50" r="36" fill="url(#slateShield)" stroke="#fef08a" strokeWidth="2.5" />

        {/* 🎡 MAHITI CHAKRA SMOOTH SPINNING WHEEL & APP NODES */}
        <g style={{ transformOrigin: '50px 50px', animation: 'spin 12s linear infinite' }}>
          <circle cx="50" cy="50" r="28" stroke="url(#goldRing)" strokeWidth="3.5" strokeDasharray="6 4" />
          <circle cx="50" cy="22" r="3.5" fill="#fef08a" />
          <circle cx="78" cy="50" r="3.5" fill="#fef08a" />
          <circle cx="50" cy="78" r="3.5" fill="#fef08a" />
          <circle cx="22" cy="50" r="3.5" fill="#fef08a" />
        </g>

        {/* Center Help Emblem (Hand & Heart Shield - Help Portal Icon) */}
        <path
          d="M50 32C42 32 37 37 37 44C37 53 50 63 50 63C50 63 63 53 63 44C63 37 58 32 50 32Z"
          fill="url(#centerGlow)"
        />

        {/* Inner App Grid Cross Dot */}
        <circle cx="50" cy="43" r="3.5" fill="#0f172a" />
      </svg>
    </div>
  );
};
