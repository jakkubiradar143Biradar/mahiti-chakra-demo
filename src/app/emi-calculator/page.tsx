"use client";

import React from 'react';
import { EMICalculatorComp } from '@/components/EMICalculatorComp';
import { CommentSection } from '@/components/CommentSection';

export default function EmiPage() {
  return (
    <div className="space-y-8">
      <EMICalculatorComp />
      <CommentSection />
    </div>
  );
}
