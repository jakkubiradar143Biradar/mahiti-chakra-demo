"use client";

import React from 'react';
import { GSTCalculatorComp } from '@/components/GSTCalculatorComp';
import { CommentSection } from '@/components/CommentSection';

export default function GstPage() {
  return (
    <div className="space-y-8">
      <GSTCalculatorComp />
      <CommentSection />
    </div>
  );
}
