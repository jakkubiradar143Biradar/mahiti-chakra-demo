"use client";

import React from 'react';
import { KrushiMarukatteCard } from '@/components/KrushiMarukatteCard';
import { CommentSection } from '@/components/CommentSection';

export default function KrushiRatesPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <KrushiMarukatteCard />
      <CommentSection />
    </div>
  );
}
