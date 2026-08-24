"use client";

import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { Image as ImageIcon, Download, Upload, Check, FileCheck } from 'lucide-react';

export const PhotoResizerComp: React.FC = () => {
  const { lang } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [targetKb, setTargetKb] = useState<number>(50); // 50KB default
  const [resizedImage, setResizedImage] = useState<string | null>(null);
  const [originalSize, setOriginalSize] = useState<number>(0);
  const [resizedSize, setResizedSize] = useState<number>(0);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setOriginalSize(Math.round(file.size / 1024));
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string;
        setSelectedImage(dataUrl);
        resizeImage(dataUrl, targetKb);
      };
      reader.readAsDataURL(file);
    }
  };

  const resizeImage = (dataUrl: string, targetSizeKb: number) => {
    const img = new Image();
    img.src = dataUrl;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      let width = img.width;
      let height = img.height;

      // Max dimensions for document applications
      const maxDim = 800;
      if (width > maxDim || height > maxDim) {
        if (width > height) {
          height = Math.round((height * maxDim) / width);
          width = maxDim;
        } else {
          width = Math.round((width * maxDim) / height);
          height = maxDim;
        }
      }

      canvas.width = width;
      canvas.height = height;
      ctx?.drawImage(img, 0, 0, width, height);

      let quality = 0.9;
      let resultDataUrl = canvas.toDataURL('image/jpeg', quality);

      while (resultDataUrl.length / 1024 > targetSizeKb && quality > 0.1) {
        quality -= 0.1;
        resultDataUrl = canvas.toDataURL('image/jpeg', quality);
      }

      setResizedImage(resultDataUrl);
      setResizedSize(Math.round(resultDataUrl.length / 1024));
    };
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
        <div className="w-11 h-11 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md">
          <ImageIcon className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            {lang === 'kn' ? '🖼️ ಉದ್ಯೋಗ ಅರ್ಜಿಗೆ ಫೋಟೋ ಸೈಜ್ ಕಡಿತ (Photo & Sign Resizer)' : '🖼️ Passport Photo & Sign Size Reducer'}
          </h2>
          <p className="text-xs text-slate-500">
            {lang === 'kn' ? 'ಸರ್ಕಾರಿ/ಖಾಸಗಿ ಉದ್ಯೋಗ ಅರ್ಜಿ ಸಲ್ಲಿಸಲು ಫೋಟೋ ಸೈಜ್ (20KB, 50KB, 100KB) ಕರಾರುವಾಕ್ಕಾಗಿ ಕಡಿಮೆ ಮಾಡಿ' : 'Compress photo & signature size to exact 20KB, 50KB, 100KB for exam & govt job applications'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Upload & Controls */}
        <div className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              {lang === 'kn' ? '1. ಫೋಟೋ ಅಥವಾ ಸಹಿ (Signature) ಅಪ್‌ಲೋಡ್ ಮಾಡಿ' : '1. Select Photo or Signature'}
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full bg-white border border-slate-300 rounded-xl p-2.5 text-xs font-semibold text-slate-800"
            />
          </div>

          {/* Preset Size Buttons */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-slate-700">
              {lang === 'kn' ? '2. ಬೇಕಾಗುವ ಸೈಜ್ ಆಯ್ಕೆಮಾಡಿ (Target Size)' : '2. Select Required Target Size'}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[20, 50, 100].map((kb) => (
                <button
                  key={kb}
                  onClick={() => {
                    setTargetKb(kb);
                    if (selectedImage) resizeImage(selectedImage, kb);
                  }}
                  className={`py-2 rounded-xl text-xs font-extrabold border transition-all ${
                    targetKb === kb
                      ? 'bg-slate-900 text-amber-400 border-slate-900 shadow'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {kb} KB
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Output Preview & Download */}
        <div className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
          {resizedImage ? (
            <div className="space-y-4">
              <div className="max-w-[200px] mx-auto border-2 border-indigo-500 rounded-xl overflow-hidden shadow-md bg-white p-2">
                <img src={resizedImage} alt="Resized output" className="w-full h-auto object-contain rounded-lg" />
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs flex justify-around">
                <div>
                  <span className="text-slate-400 block text-[10px]">Original Size</span>
                  <span className="font-bold text-slate-700">{originalSize} KB</span>
                </div>
                <div className="border-r border-slate-200" />
                <div>
                  <span className="text-slate-400 block text-[10px]">Resized Size</span>
                  <span className="font-extrabold text-emerald-600">{resizedSize} KB</span>
                </div>
              </div>

              <a
                href={resizedImage}
                download={`resized_photo_${targetKb}kb.jpg`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-md transition-all"
              >
                <Download className="w-4 h-4" />
                <span>{lang === 'kn' ? 'ಉಚಿತವಾಗಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ (Download)' : 'Download Resized Photo'}</span>
              </a>
            </div>
          ) : (
            <div className="py-8 space-y-2 text-slate-400 text-xs">
              <Upload className="w-8 h-8 mx-auto text-slate-300" />
              <p>{lang === 'kn' ? 'ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿದ ನಂತರ ಫಲಿತಾಂಶ ಇಲ್ಲಿದೆ ಕಾಣಿಸುತ್ತದೆ' : 'Uploaded photo preview will appear here'}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
