'use client';

import React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="kn">
      <body className="bg-slate-950 text-white min-h-screen flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center space-y-6 shadow-2xl">
          <div className="w-16 h-16 bg-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center text-3xl font-black mx-auto border border-amber-500/30">
            ⚠️
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-black text-white">
              ಗ್ಲೋಬಲ್ ದೋಷ (System Notice)
            </h2>
            <p className="text-xs text-slate-400 font-medium">
              Mahiti Chakra Digital Help Portal
            </p>
          </div>
          <button
            onClick={() => reset()}
            className="w-full py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-black text-xs rounded-xl shadow-lg hover:scale-105 transition-all"
          >
            ಸಿಸ್ಟಮ್ ರಿಲೋಡ್ ಮಾಡಿ (Reload Portal)
          </button>
        </div>
      </body>
    </html>
  );
}
