"use client";

import React from 'react';
import { PanchangaComp } from '@/components/PanchangaComp';
import { CommentSection } from '@/components/CommentSection';

export default function PanchangaPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <PanchangaComp />
      <CommentSection />
    </div>
  );
}
