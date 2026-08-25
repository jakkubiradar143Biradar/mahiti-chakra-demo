"use client";

import React from 'react';
import { LandConverterComp } from '@/components/LandConverterComp';
import { CommentSection } from '@/components/CommentSection';

export default function LandConverterPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <LandConverterComp />
      <CommentSection />
    </div>
  );
}
