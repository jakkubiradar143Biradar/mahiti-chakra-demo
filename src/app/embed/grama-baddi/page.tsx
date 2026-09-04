"use client";

import React, { useEffect, useRef } from 'react';
import { GramaBaddiComp } from '@/components/GramaBaddiComp';

export default function GramaBaddiEmbedPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 🚀 Send exact content height to parent window (WordPress/Blogger/Iframe parent)
    const sendHeightToParent = () => {
      if (typeof window !== 'undefined' && window.parent) {
        const height = Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
          containerRef.current ? containerRef.current.scrollHeight : 0
        );
        window.parent.postMessage({ type: 'MC_RESIZE', height: height + 20 }, '*');
      }
    };

    // Initial trigger
    sendHeightToParent();
    const t1 = setTimeout(sendHeightToParent, 300);
    const t2 = setTimeout(sendHeightToParent, 1000);

    // Watch for window resize and DOM mutations
    window.addEventListener('resize', sendHeightToParent);

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined' && containerRef.current) {
      resizeObserver = new ResizeObserver(sendHeightToParent);
      resizeObserver.observe(containerRef.current);
      resizeObserver.observe(document.body);
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('resize', sendHeightToParent);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full max-w-full p-2 sm:p-4 bg-transparent overflow-hidden">
      <GramaBaddiComp />
    </div>
  );
}