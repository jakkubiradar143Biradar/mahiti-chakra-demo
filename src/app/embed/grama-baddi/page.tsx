import React from 'react';
import { Metadata } from 'next';
import { GramaBaddiComp } from '@/components/GramaBaddiComp';

export const metadata: Metadata = {
  title: 'ಗ್ರಾಮ ಬಡ್ಡಿ ಲೆಕ್ಕಾಚಾರ ಸಾಫ್ಟ್‌ವೇರ್ Embed Widget',
  robots: 'noindex, nofollow',
};

export default function GramaBaddiEmbedPage() {
  return (
    <div className="w-full max-w-full p-2 sm:p-4 bg-transparent">
      <GramaBaddiComp />
    </div>
  );
}