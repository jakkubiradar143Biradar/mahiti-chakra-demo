"use client";

import React from 'react';
import { AgeCalculatorComp } from '@/components/AgeCalculatorComp';
import { CommentSection } from '@/components/CommentSection';

export default function AgePage() {
  return (
    <div className="space-y-8">
      <AgeCalculatorComp />
      <CommentSection />
    </div>
  );
}
