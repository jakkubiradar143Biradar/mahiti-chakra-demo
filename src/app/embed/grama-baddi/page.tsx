"use client";

import React, { useEffect, useRef } from 'react';
import { GramaBaddiComp } from '@/components/GramaBaddiComp';

export default function GramaBaddiEmbedPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastHeightRef = useRef<number>(0);

  useEffect(() => {
    const sendHeightToParent = () => {
      if (typeof window !== 'undefined' && window.parent && containerRef.current) {
        const height = Math.ceil(containerRef.current.getBoundingClientRect().height);
        // Only send if height significantly changed to prevent infinite loops
        if (Math.abs(height - lastHeightRef.current) > 10) {
          lastHeightRef.current = height;
          window.parent.postMessage({ type: 'MC_RESIZE', height: height + 10 }, '*');
        }
      }
    };

    sendHeightToParent();
    const t1 = setTimeout(sendHeightToParent, 200);
    const t2 = setTimeout(sendHeightToParent, 800);

    window.addEventListener('resize', sendHeightToParent);

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined' && containerRef.current) {
      resizeObserver = new ResizeObserver(sendHeightToParent);
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('resize', sendHeightToParent);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full max-w-full p-1 sm:p-2 bg-transparent overflow-hidden">
      <GramaBaddiComp />
    </div>
  );
}