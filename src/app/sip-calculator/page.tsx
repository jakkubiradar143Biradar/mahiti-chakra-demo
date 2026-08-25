"use client";

import React from 'react';
import { SIPCalculatorComp } from '@/components/SIPCalculatorComp';
import { CommentSection } from '@/components/CommentSection';

export default function SipPage() {
  return (
    <div className="space-y-8">
      <SIPCalculatorComp />
      <CommentSection />
    </div>
  );
}
