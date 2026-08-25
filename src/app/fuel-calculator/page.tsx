"use client";

import React from 'react';
import { FuelCostCalculatorComp } from '@/components/FuelCostCalculatorComp';
import { CommentSection } from '@/components/CommentSection';

export default function FuelCalculatorPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <FuelCostCalculatorComp />
      <CommentSection />
    </div>
  );
}
