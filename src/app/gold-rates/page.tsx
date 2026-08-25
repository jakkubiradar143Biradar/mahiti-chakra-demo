"use client";

import React from 'react';
import { LiveRatesCard } from '@/components/LiveRatesCard';
import { CommentSection } from '@/components/CommentSection';

export default function GoldRatesPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <LiveRatesCard />
      <CommentSection />
    </div>
  );
}
