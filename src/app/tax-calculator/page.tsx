"use client";

import React from 'react';
import { TaxCalculatorComp } from '@/components/TaxCalculatorComp';
import { CommentSection } from '@/components/CommentSection';

export default function TaxPage() {
  return (
    <div className="space-y-8">
      <TaxCalculatorComp />
      <CommentSection />
    </div>
  );
}
