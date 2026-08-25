"use client";

import React from 'react';
import { PhotoResizerComp } from '@/components/PhotoResizerComp';
import { CommentSection } from '@/components/CommentSection';

export default function PhotoResizerPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <PhotoResizerComp />
      <CommentSection />
    </div>
  );
}
