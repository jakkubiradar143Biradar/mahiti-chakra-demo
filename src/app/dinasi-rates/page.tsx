"use client";

import React from 'react';
import { DinasiBeleCard } from '@/components/DinasiBeleCard';
import { CommentSection } from '@/components/CommentSection';

export default function DinasiRatesPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <DinasiBeleCard />
      <CommentSection />
    </div>
  );
}
