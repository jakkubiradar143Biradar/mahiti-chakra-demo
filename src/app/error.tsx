'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center space-y-6">
      <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-2xl font-black shadow-inner">
        ⚠️
      </div>
      <div className="space-y-2 max-w-md">
        <h2 className="text-2xl font-black text-slate-900">
          ಏನೋ ಸಣ್ಣ ದೋಷ ಸಂಭವಿಸಿದೆ (Error Occurred)
        </h2>
        <p className="text-xs text-slate-600 font-medium">
          ದಯವಿಟ್ಟು ರಿಫ್ರೆಶ್ ಮಾಡಿ ಅಥವಾ ಕೆಳಗಿನ ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ ಆಪ್ ಪುನರಾರಂಭಿಸಿ.
        </p>
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-amber-400 text-xs font-black rounded-xl shadow-lg transition-transform active:scale-95"
        >
          ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ (Try Again)
        </button>
        <Link
          href="/"
          className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-black rounded-xl border border-slate-300 transition-colors"
        >
          ಮುಖಪುಟಕ್ಕೆ ಹೋಗಿ (Home)
        </Link>
      </div>
    </div>
  );
}
