"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import {
  Sparkles, Download, Share2, Upload, Scan, Edit3, Trash2,
  Copy, CheckCircle2, RefreshCw, ZoomIn, ZoomOut, Layers, Eye,
  Smartphone, FileText, Check, Plus, Image as ImageIcon,
  Eraser, Type, MousePointer, RotateCcw, AlertCircle
} from 'lucide-react';
import { ScreenshotEditor3D } from './LiveAppIcons3D';
import Tesseract from 'tesseract.js';

export interface OCRDetectedBlock {
  id: string;
  text: string;
  replacementText: string;
  isRemoved: boolean;
  x0: number; // in image pixels
  y0: number;
  x1: number;
  y1: number;
  fontSize?: number;
  fontColor?: string;
  bgColor?: string;
}

export const ScreenshotEditorComp: React.FC = () => {
  const { lang } = useLanguage();

  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [scanStatusText, setScanStatusText] = useState<string>('');
  const [scanProgress, setScanProgress] = useState<number>(0);
  const [detectedBlocks, setDetectedBlocks] = useState<OCRDetectedBlock[]>([]);
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null);
  const [activeTool, setActiveTool] = useState<'select' | 'erase_box' | 'add_text'>('select');
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  // Manual Drag Box
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null);
  const [dragEnd, setDragEnd] = useState<{ x: number; y: number } | null>(null);

  // Replacement custom settings
  const [customFontColor, setCustomFontColor] = useState<string>('#0f172a');
  const [customFontSize, setCustomFontSize] = useState<number>(16);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const originalImageRef = useRef<HTMLImageElement | null>(null);

  // 1. Load an initial default sample or let user upload
  useEffect(() => {
    // Generate a default high-quality payment slip to start
    const defaultCanvas = document.createElement('canvas');
    defaultCanvas.width = 600;
    defaultCanvas.height = 700;
    const ctx = defaultCanvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#f8fafc';
      ctx.fillRect(0, 0, 600, 700);

      // Card
      ctx.fillStyle = '#ffffff';
      ctx.roundRect(30, 40, 540, 620, 20);
      ctx.fill();
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Top Success Icon
      ctx.fillStyle = '#16a34a';
      ctx.beginPath();
      ctx.arc(300, 100, 30, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 30px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('✓', 300, 110);

      // Text lines
      ctx.fillStyle = '#16a34a';
      ctx.font = 'bold 20px sans-serif';
      ctx.fillText('Payment Successful', 300, 160);

      ctx.fillStyle = '#0f172a';
      ctx.font = '900 36px sans-serif';
      ctx.fillText('₹ 2,500.00', 300, 220);

      ctx.fillStyle = '#334155';
      ctx.font = 'bold 16px sans-serif';
      ctx.fillText('Paid to: Ramesh Traders', 300, 265);

      ctx.fillStyle = '#64748b';
      ctx.font = '14px sans-serif';
      ctx.fillText('UPI ID: ramesh@upi', 300, 295);

      ctx.fillStyle = '#f1f5f9';
      ctx.fillRect(60, 340, 480, 260);

      ctx.fillStyle = '#475569';
      ctx.font = 'bold 14px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('Date: 27 August 2026, 07:45 PM', 90, 390);
      ctx.fillText('Transaction ID: T26082719450091', 90, 435);
      ctx.fillText('From Bank: State Bank of India', 90, 480);
      ctx.fillText('UTR No: 423891029381', 90, 525);
      ctx.fillText('Status: Completed', 90, 570);

      const src = defaultCanvas.toDataURL('image/png');
      setImageSrc(src);
      const img = new Image();
      img.src = src;
      img.onload = () => {
        originalImageRef.current = img;
        performRealOCR(src);
      };
    }
  }, []);

  // 2. Handle ANY User Uploaded Image (Phone Screenshot, Bill, Photo)
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const src = event.target?.result as string;
      setImageSrc(src);
      const img = new Image();
      img.src = src;
      img.onload = () => {
        originalImageRef.current = img;
        performRealOCR(src);
      };
    };
    reader.readAsDataURL(file);
  };

  // 3. 🧠 REAL CLIENT-SIDE OCR ENGINE (TESSERACT.JS)
  const performRealOCR = async (imageSource: string) => {
    try {
      setIsScanning(true);
      setScanProgress(10);
      setScanStatusText('ಇಮೇಜ್ ಸ್ಕ್ಯಾನಿಂಗ್ ಪ್ರಾರಂಭವಾಗುತ್ತಿದೆ...');
      setDetectedBlocks([]);
      setSelectedBlockId(null);

      const result = await Tesseract.recognize(
        imageSource,
        'eng', // Default fast accurate engine
        {
          logger: (m) => {
            if (m.status === 'recognizing text') {
              const p = Math.round(m.progress * 100);
              setScanProgress(p);
              setScanStatusText(`ಅಕ್ಷರಗಳನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡಲಾಗುತ್ತಿದೆ (${p}%)...`);
            }
          },
        }
      );

      const dataAny = result.data as any;
      const lines = (dataAny.lines && dataAny.lines.length > 0) ? dataAny.lines : (dataAny.words || []);
      const blocks: OCRDetectedBlock[] = [];

      lines.forEach((line: any, idx: number) => {
        const text = (line.text || '').trim();
        if (text.length > 0 && line.bbox) {
          const { x0, y0, x1, y1 } = line.bbox;
          const fontHeight = Math.max(12, Math.round((y1 - y0) * 0.85));

          blocks.push({
            id: `ocr_line_${idx}_${Date.now()}`,
            text: text,
            replacementText: text,
            isRemoved: false,
            x0: Math.max(0, x0 - 2),
            y0: Math.max(0, y0 - 2),
            x1: x1 + 2,
            y1: y1 + 2,
            fontSize: fontHeight,
            fontColor: '#0f172a',
            bgColor: '#ffffff',
          });
        }
      });

      setDetectedBlocks(blocks);
      setIsScanning(false);
      setScanStatusText('');

      if (originalImageRef.current) {
        renderCanvas(originalImageRef.current, blocks);
      }
    } catch (err) {
      console.error('OCR Error:', err);
      setIsScanning(false);
      setScanStatusText('ಸ್ಕ್ಯಾನಿಂಗ್ ದೋಷ ಸಂಭವಿಸಿದೆ.');
    }
  };

  // 4. 🎨 SMART SURROUNDING BACKGROUND COLOR SAMPLER
  const sampleSurroundingBackgroundColor = (ctx: CanvasRenderingContext2D, x0: number, y0: number, x1: number, y1: number): string => {
    const width = x1 - x0;
    const height = y1 - y0;
    
    // Sample top/bottom outer pixels
    try {
      const sampleY = Math.max(0, y0 - 3);
      const sampleX = Math.min(ctx.canvas.width - 1, Math.max(0, x0 + Math.floor(width / 2)));
      const pixel = ctx.getImageData(sampleX, sampleY, 1, 1).data;
      return `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
    } catch {
      return '#ffffff';
    }
  };

  // 5. 🖌️ RENDER CANVAS (INPAINTS BACKGROUND & WRITES REPLACEMENTS)
  const renderCanvas = (img: HTMLImageElement, blocks: OCRDetectedBlock[]) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = img.naturalWidth || img.width;
    canvas.height = img.naturalHeight || img.height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 1. Draw base clean original image
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // 2. Loop through blocks
    blocks.forEach((b) => {
      if (b.isRemoved || b.replacementText !== b.text) {
        const bw = b.x1 - b.x0;
        const bh = b.y1 - b.y0;

        // Sample exact surrounding background color
        const sampledColor = sampleSurroundingBackgroundColor(ctx, b.x0, b.y0, b.x1, b.y1);

        // Smooth inpainting patch
        ctx.fillStyle = b.bgColor || sampledColor || '#ffffff';
        ctx.fillRect(b.x0 - 2, b.y0 - 2, bw + 4, bh + 4);

        // If not removed, draw the new replacement text
        if (!b.isRemoved && b.replacementText.trim().length > 0) {
          ctx.fillStyle = b.fontColor || '#0f172a';
          ctx.font = `bold ${b.fontSize || 16}px sans-serif`;
          ctx.textAlign = 'left';
          ctx.textBaseline = 'top';
          ctx.fillText(b.replacementText, b.x0, b.y0 + 2);
        }
      }
    });
  };

  // 6. Interactive Click on Canvas to Select Block
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const clickX = (e.clientX - rect.left) * scaleX;
    const clickY = (e.clientY - rect.top) * scaleY;

    // Find clicked block
    const found = detectedBlocks.find(b => clickX >= b.x0 && clickX <= b.x1 && clickY >= b.y0 && clickY <= b.y1);
    if (found) {
      setSelectedBlockId(found.id);
    }
  };

  // Update replacement text
  const updateBlockReplacement = (id: string, newText: string) => {
    const updated = detectedBlocks.map(b => b.id === id ? { ...b, replacementText: newText, isRemoved: false } : b);
    setDetectedBlocks(updated);
    if (originalImageRef.current) {
      renderCanvas(originalImageRef.current, updated);
    }
  };

  // Toggle Remove / Erase Block
  const toggleRemoveBlock = (id: string) => {
    const updated = detectedBlocks.map(b => b.id === id ? { ...b, isRemoved: !b.isRemoved } : b);
    setDetectedBlocks(updated);
    if (originalImageRef.current) {
      renderCanvas(originalImageRef.current, updated);
    }
  };

  // Add Custom Erase Box or New Text Area
  const addCustomBlock = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const newBlock: OCRDetectedBlock = {
      id: `custom_${Date.now()}`,
      text: 'ಹೊಸ ಪಠ್ಯ / New Text',
      replacementText: 'ಹೊಸ ಪಠ್ಯ / New Text',
      isRemoved: false,
      x0: Math.round(canvas.width * 0.2),
      y0: Math.round(canvas.height * 0.7),
      x1: Math.round(canvas.width * 0.8),
      y1: Math.round(canvas.height * 0.76),
      fontSize: 22,
      fontColor: '#0284c7',
      bgColor: '#ffffff',
    };

    const updated = [...detectedBlocks, newBlock];
    setDetectedBlocks(updated);
    setSelectedBlockId(newBlock.id);
    if (originalImageRef.current) {
      renderCanvas(originalImageRef.current, updated);
    }
  };

  // Reset all edits back to original
  const resetAllEdits = () => {
    const resetList = detectedBlocks.map(b => ({ ...b, replacementText: b.text, isRemoved: false }));
    setDetectedBlocks(resetList);
    if (originalImageRef.current) {
      renderCanvas(originalImageRef.current, resetList);
    }
  };

  // Copy all extracted text
  const copyExtractedText = () => {
    const full = detectedBlocks.filter(b => !b.isRemoved).map(b => b.replacementText).join('\n');
    navigator.clipboard.writeText(full);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // 1-Click Download Edited Image
  const downloadEditedImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = `mahiti-chakra-ocr-edited-image-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  // WhatsApp Share
  const shareToWhatsApp = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const siteUrl = typeof window !== 'undefined' ? `${window.location.origin}/screenshot-editor` : 'https://mahitichakra.com/screenshot-editor';
    const textPreview = detectedBlocks.filter(b => !b.isRemoved).slice(0, 5).map(b => `• ${b.replacementText}`).join('\n');

    const shareText = `📸 *ಮಾಹಿತಿ ಚಕ್ರ ಲೈವ್ ಇಮೇಜ್ OCR ಸ್ಕ್ಯಾನರ್ & ಟೆಕ್ಸ್ಟ್ ರಿಪ್ಲೇಸರ್*\n\n` +
      `✨ *ಎಡಿಟ್ ಮಾಡಲಾದ ಪಠ್ಯ:*\n${textPreview}\n\n` +
      `--------------------------------\n` +
      `🌐 *ನೀವು ಯಾವುದೇ ಫೋಟೋದ ಪಠ್ಯವನ್ನು ಲೈವ್ ಆಗಿ ಬದಲಾಯಿಸಲು ಭೇಟಿ ನೀಡಿ:*\n👉 ${siteUrl}`;

    canvas.toBlob(async (blob) => {
      if (blob && navigator.share && navigator.canShare) {
        const file = new File([blob], `ocr-edited-image.png`, { type: 'image/png' });
        if (navigator.canShare({ files: [file] })) {
          try {
            await navigator.share({
              files: [file],
              title: 'OCR ಎಡಿಟ್ ಮಾಡಿದ ಇಮೇಜ್',
              text: shareText,
            });
            return;
          } catch (err) {
            console.log('Share fallback', err);
          }
        }
      }

      downloadEditedImage();
      const encoded = encodeURIComponent(shareText);
      window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
    }, 'image/png');
  };

  const selectedBlock = detectedBlocks.find(b => b.id === selectedBlockId);

  return (
    <div className="space-y-6">
      
      {/* 🌟 HERO HEADER BANNER */}
      <div className="bg-gradient-to-r from-sky-950 via-blue-900 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl border-2 border-sky-400/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="flex items-center gap-4 relative z-10">
          <div className="shrink-0 filter drop-shadow-md">
            <ScreenshotEditor3D className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase bg-sky-400 text-slate-950 px-2.5 py-0.5 rounded-full shadow-xs">
              <Sparkles className="w-3 h-3" /> REAL TESSERACT OCR SCAN & LIVE IN-IMAGE TEXT REPLACE / REMOVE
            </span>
            <h1 className="text-xl sm:text-3xl font-black tracking-tight text-white">
              {lang === 'kn' ? '📸 ಯಾವುದೇ ಇಮೇಜ್‌ನ ಪಠ್ಯ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ, ಅಳಿಸಿ ಅಥವಾ ಬದಲಿಸಿ' : '📸 Scan, Erase & Replace Text on ANY Image'}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-sky-200">
              {lang === 'kn'
                ? 'ನಿಮ್ಮ ಫೋನ್‌ನಿಂದ ಯಾವುದೇ ಫೋಟೋ/ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಹಾಕಿ — ಎಲ್ಲಾ ಅಕ್ಷರಗಳು ಸ್ಕ್ಯಾನ್ ಆಗುತ್ತವೆ, ಚಿತ್ರದ ಮೇಲೆಯೇ ಕ್ಲಿಕ್ ಮಾಡಿ ಅಳಿಸಿ ಅಥವಾ ಹೊಸ ಪಠ್ಯ ಬರೆಯಿರಿ!'
                : 'Upload ANY photo/screenshot — Real OCR scans all text, allowing you to Remove or Replace text directly on the image!'}
            </p>
          </div>
        </div>

        {/* UPLOAD & ACTION BUTTONS */}
        <div className="flex flex-wrap items-center gap-2.5 shrink-0 self-stretch md:self-auto">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="bg-sky-400 hover:bg-sky-500 text-slate-950 py-3.5 px-5 rounded-2xl font-black text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 flex-1 md:flex-initial"
          >
            <Upload className="w-4 h-4 text-slate-950" />
            <span>ಯಾವುದೇ ಫೋಟೋ ಅಪ್ಲೋಡ್ ಮಾಡಿ</span>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />

          <button
            onClick={downloadEditedImage}
            className="bg-white/10 hover:bg-white/20 text-white border border-white/30 py-3.5 px-4 rounded-2xl font-black text-xs sm:text-sm transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4 text-sky-300" />
            <span>HD ಇಮೇಜ್ ಸೇವ್</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 🔮 2-COLUMN WORKSPACE: LEFT LIVE INTERACTIVE CANVAS + RIGHT SCANNED LIST */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT COLUMN: INTERACTIVE CLICK-TO-EDIT CANVAS (7 Cols) */}
        <div className="lg:col-span-7 bg-slate-950 rounded-3xl border-2 border-slate-800 shadow-xl p-4 sm:p-6 space-y-4 text-center relative overflow-hidden">
          
          {/* Top Canvas Controls Bar */}
          <div className="flex flex-wrap items-center justify-between text-xs text-slate-300 border-b border-slate-800 pb-3 gap-2">
            <span className="font-bold flex items-center gap-1.5 text-sky-400">
              <MousePointer className="w-4 h-4" />
              <span>ಚಿತ್ರದ ಮೇಲಿನ ಯಾವುದೇ ಅಕ್ಷರದ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ (Click to Edit)</span>
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={resetAllEdits}
                className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 flex items-center gap-1 text-[11px]"
                title="Reset All Edits"
              >
                <RotateCcw className="w-3 h-3" />
                <span>ರೀಸೆಟ್</span>
              </button>

              <button
                onClick={() => setZoomLevel(Math.max(60, zoomLevel - 15))}
                className="p-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-200"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="font-bold text-[11px] w-10">{zoomLevel}%</span>
              <button
                onClick={() => setZoomLevel(Math.min(150, zoomLevel + 15))}
                className="p-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-200"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* CANVAS DISPLAY WITH REAL OCR INTERACTIVE OVERLAY BOXES */}
          <div className="relative inline-block mx-auto max-w-full overflow-auto rounded-2xl border border-slate-800 shadow-2xl bg-black/40">
            
            {/* SCANNING LASER EFFECT */}
            {isScanning && (
              <div className="absolute inset-0 z-30 pointer-events-none bg-sky-500/10 flex flex-col items-center justify-center backdrop-blur-[1px]">
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent shadow-[0_0_15px_#38bdf8] animate-pulse" />
                <span className="mt-4 bg-slate-950 text-sky-400 font-black text-xs px-4 py-2 rounded-full border border-sky-400/50 shadow-lg">
                  ⚡ {scanStatusText}
                </span>
              </div>
            )}

            <div className="relative inline-block" style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}>
              <canvas
                ref={canvasRef}
                onClick={handleCanvasClick}
                className="max-h-[580px] w-auto mx-auto rounded-xl cursor-crosshair transition-transform duration-200"
              />

              {/* Real OCR Interactive Bounding Highlights on Image */}
              {canvasRef.current && detectedBlocks.map((b) => {
                const isSelected = b.id === selectedBlockId;
                const canvasW = canvasRef.current?.width || 1;
                const canvasH = canvasRef.current?.height || 1;

                const leftPct = (b.x0 / canvasW) * 100;
                const topPct = (b.y0 / canvasH) * 100;
                const widthPct = ((b.x1 - b.x0) / canvasW) * 100;
                const heightPct = ((b.y1 - b.y0) / canvasH) * 100;

                return (
                  <div
                    key={b.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedBlockId(b.id);
                    }}
                    style={{
                      left: `${leftPct}%`,
                      top: `${topPct}%`,
                      width: `${widthPct}%`,
                      height: `${heightPct}%`,
                    }}
                    className={`absolute cursor-pointer transition-all border ${
                      isSelected
                        ? 'border-sky-400 bg-sky-400/20 ring-2 ring-sky-400 shadow-md z-20'
                        : b.isRemoved
                        ? 'border-rose-400 bg-rose-500/20 z-10'
                        : b.replacementText !== b.text
                        ? 'border-emerald-400 bg-emerald-500/20 z-10'
                        : 'border-sky-400/40 hover:border-sky-400 hover:bg-sky-400/10'
                    }`}
                    title={`Click to edit: "${b.text}"`}
                  />
                );
              })}
            </div>

          </div>

          {/* Bottom Action strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs pt-2 text-slate-400">
            <span>💡 ಒಟ್ಟು ಸ್ಕ್ಯಾನ್ ಆದ ಪಠ್ಯ ಸಾಲುಗಳು: <strong className="text-sky-400">{detectedBlocks.length}</strong></span>
            <button
              onClick={addCustomBlock}
              className="text-xs font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1 bg-sky-950/80 px-3 py-1.5 rounded-xl border border-sky-500/40"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>+ ಹೊಸ ಪಠ್ಯ ಸೇರಿಸಿ (Add Text)</span>
            </button>
          </div>

        </div>

        {/* RIGHT COLUMN: SELECTED BLOCK LIVE CONTROLS & FULL LIST (5 Cols) */}
        <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 shadow-sm p-5 sm:p-7 space-y-4">
          
          {/* POPUP EDITOR FOR SELECTED BLOCK */}
          {selectedBlock ? (
            <div className="bg-sky-50 rounded-2xl p-4 border-2 border-sky-400 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-sky-900 flex items-center gap-1.5">
                  <Edit3 className="w-4 h-4 text-sky-600" />
                  <span>ಆಯ್ಕೆ ಮಾಡಿದ ಪಠ್ಯ ಎಡಿಟರ್ (Live Block Editor)</span>
                </span>

                <button
                  onClick={() => toggleRemoveBlock(selectedBlock.id)}
                  className={`py-1 px-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                    selectedBlock.isRemoved
                      ? 'bg-emerald-600 text-white'
                      : 'bg-rose-600 text-white hover:bg-rose-700'
                  }`}
                >
                  <Eraser className="w-3.5 h-3.5" />
                  <span>{selectedBlock.isRemoved ? 'ಪಠ್ಯ ಪುನಃ ತನ್ನಿ' : 'ಪಠ್ಯ ಅಳಿಸಿ (Remove)'}</span>
                </button>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-700 block">ಹೊಸ ಬದಲಿ ಪಠ್ಯ (New Text):</label>
                <input
                  type="text"
                  value={selectedBlock.replacementText}
                  onChange={(e) => updateBlockReplacement(selectedBlock.id, e.target.value)}
                  placeholder="ಹೊಸ ಅಕ್ಷರಗಳನ್ನು ಇಲ್ಲಿ ಟೈಪ್ ಮಾಡಿ..."
                  className="w-full bg-white border border-sky-300 focus:border-sky-500 rounded-xl p-2.5 text-xs sm:text-sm font-bold text-slate-900 shadow-xs"
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span>ಅಸಲಿ ಸ್ಕ್ಯಾನ್ ಪಠ್ಯ: <em>"{selectedBlock.text}"</em></span>
              </div>
            </div>
          ) : (
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center space-y-1">
              <p className="text-xs font-black text-slate-800">ಯಾವುದೇ ಅಕ್ಷರವನ್ನು ಎಡಿಟ್ ಮಾಡಲು ಚಿತ್ರದ ಮೇಲೆಯೇ ಕ್ಲಿಕ್ ಮಾಡಿ!</p>
              <span className="text-[11px] text-slate-500 block">ಅಥವಾ ಕೆಳಗಿನ ಪಟ್ಟಿಯಿಂದ ನೇರವಾಗಿ ಬದಲಾಯಿಸಿ.</span>
            </div>
          )}

          {/* ALL SCANNED LINES LIST HEADER */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <h3 className="text-xs font-black text-slate-900">
              ಸ್ಕ್ಯಾನ್ ಆದ ಎಲ್ಲಾ ಸಾಲುಗಳ ಪಟ್ಟಿ ({detectedBlocks.length}):
            </h3>

            <button
              onClick={copyExtractedText}
              className="py-1 px-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center gap-1"
            >
              {isCopied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
              <span>{isCopied ? 'ಕಾಪಿಯಾಗಿದೆ!' : 'ಎಲ್ಲಾ ಟೆಕ್ಸ್ಟ್ ಕಾಪಿ'}</span>
            </button>
          </div>

          {/* SCANNED ITEMS LIST */}
          <div className="space-y-2 max-h-[340px] overflow-y-auto pr-1 custom-scrollbar">
            {detectedBlocks.map((block, idx) => {
              const isSelected = block.id === selectedBlockId;
              return (
                <div
                  key={block.id}
                  onClick={() => setSelectedBlockId(block.id)}
                  className={`p-2.5 rounded-xl border transition-all cursor-pointer space-y-1.5 ${
                    isSelected
                      ? 'border-sky-500 bg-sky-50/70 shadow-xs'
                      : block.isRemoved
                      ? 'border-rose-200 bg-rose-50/50 opacity-60'
                      : 'border-slate-200 bg-slate-50/50 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-slate-500">#{idx + 1}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleRemoveBlock(block.id);
                      }}
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                        block.isRemoved ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700 hover:bg-rose-200'
                      }`}
                    >
                      {block.isRemoved ? 'ಮರುಸ್ಥಾಪಿಸು' : 'ಅಳಿಸಿ'}
                    </button>
                  </div>

                  <input
                    type="text"
                    value={block.replacementText}
                    onChange={(e) => updateBlockReplacement(block.id, e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-lg p-1.5 text-xs font-bold text-slate-900"
                  />
                </div>
              );
            })}
          </div>

          {/* ACTION BUTTONS (DOWNLOAD & WHATSAPP) */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <button
              onClick={downloadEditedImage}
              className="w-full py-3.5 px-4 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white font-black text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5 text-white" />
              <span>📸 ಎಡಿಟ್ ಮಾಡಿದ HD ಇಮೇಜ್ ಡೌನ್‌ಲೋಡ್ (PNG)</span>
            </button>

            <button
              onClick={shareToWhatsApp}
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-sm transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              <span>WhatsApp ನಲ್ಲಿ ಇಮೇಜ್ & ಟೆಕ್ಸ್ಟ್ ಶೇರ್ ಮಾಡಿ</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
