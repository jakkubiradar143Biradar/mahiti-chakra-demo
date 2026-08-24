"use client";

import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { Fuel, Car, Navigation, Gauge } from 'lucide-react';

export const FuelCostCalculatorComp: React.FC = () => {
  const { lang } = useLanguage();

  const [distance, setDistance] = useState<number>(150); // 150 km trip
  const [mileage, setMileage] = useState<number>(18); // 18 km/L
  const [fuelPrice, setFuelPrice] = useState<number>(102.86); // Petrol Bengaluru

  const litersNeeded = Number((distance / mileage).toFixed(2));
  const totalCost = Math.round(litersNeeded * fuelPrice);
  const costPerKm = (totalCost / distance).toFixed(2);

  return (
    <div className="bg-white rounded-3xl border border-sky-200/80 shadow-sm p-6 sm:p-8 space-y-6">
      <div className="flex items-center gap-3 border-b border-sky-100 pb-4">
        <div className="w-11 h-11 rounded-2xl bg-sky-600 text-white flex items-center justify-center shadow-md">
          <Car className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            {lang === 'kn' ? '🚗 ಮೈಲೇಜ್ & ಪ್ರಯಾಣದ ಇಂಧನ ವೆಚ್ಚ ಕ್ಯಾಲ್ಕುಲೇಟರ್' : '🚗 Vehicle Mileage & Trip Fuel Cost Calculator'}
          </h2>
          <p className="text-xs text-slate-500">
            {lang === 'kn' ? 'ನಿಮ್ಮ ಕಾರು/ಬೈಕ್ ಪ್ರಯಾಣಕ್ಕೆ ಎಷ್ಟು ಲೀಟರ್ ಪೆಟ್ರೋಲ್ ಬೇಕು ಮತ್ತು ಎಷ್ಟು ಖರ್ಚಾಗುತ್ತದೆ ಎಂದು ಲೆಕ್ಕಹಾಕಿ' : 'Calculate total liters of petrol/diesel required and exact fuel cost for your trip'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Sliders */}
        <div className="lg:col-span-7 space-y-5">
          {/* Distance */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-xs font-semibold">
              <label className="text-slate-700">{lang === 'kn' ? 'ಪ್ರಯಾಣದ ದೂರ (Distance in Km)' : 'Trip Distance (Km)'}</label>
              <span className="text-sky-700 font-extrabold text-sm bg-sky-50 px-2.5 py-1 rounded-lg border border-sky-200">
                {distance} Km
              </span>
            </div>
            <input
              type="range"
              min={10}
              max={2000}
              step={10}
              value={distance}
              onChange={(e) => setDistance(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
            />
          </div>

          {/* Mileage */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-xs font-semibold">
              <label className="text-slate-700">{lang === 'kn' ? 'ವಾಹನದ ಮೈಲೇಜ್ (Mileage in Km/L)' : 'Vehicle Mileage (Km/L)'}</label>
              <span className="text-sky-700 font-extrabold text-sm bg-sky-50 px-2.5 py-1 rounded-lg border border-sky-200">
                {mileage} Km/L
              </span>
            </div>
            <input
              type="range"
              min={5}
              max={80}
              step={1}
              value={mileage}
              onChange={(e) => setMileage(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
            />
          </div>

          {/* Fuel Price */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-xs font-semibold">
              <label className="text-slate-700">{lang === 'kn' ? 'ಪೆಟ್ರೋಲ್/ಡೀಸೆಲ್ ಬೆಲೆ (Fuel Price per Litre)' : 'Fuel Price (₹/Litre)'}</label>
              <span className="text-sky-700 font-extrabold text-sm bg-sky-50 px-2.5 py-1 rounded-lg border border-sky-200">
                ₹{fuelPrice}
              </span>
            </div>
            <input
              type="range"
              min={80}
              max={130}
              step={0.5}
              value={fuelPrice}
              onChange={(e) => setFuelPrice(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
            />
          </div>
        </div>

        {/* Results Display */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-gradient-to-br from-sky-600 via-blue-700 to-slate-900 rounded-2xl p-6 text-white shadow-lg text-center space-y-1">
            <span className="text-xs uppercase tracking-wider font-extrabold opacity-80">{lang === 'kn' ? 'ಒಟ್ಟು ಪೆಟ್ರೋಲ್ ಖರ್ಚು' : 'Total Fuel Cost'}</span>
            <div className="text-3xl sm:text-4xl font-black text-amber-400">
              ₹{totalCost.toLocaleString('en-IN')}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-sky-50 border border-sky-100 p-3 rounded-xl">
              <span className="text-slate-500 block">{lang === 'kn' ? 'ಬೇಕಾಗುವ ಪೆಟ್ರೋಲ್' : 'Fuel Required'}</span>
              <span className="text-base font-bold text-sky-800">{litersNeeded} Litres</span>
            </div>
            <div className="bg-amber-50 border border-amber-100 p-3 rounded-xl">
              <span className="text-slate-500 block">{lang === 'kn' ? 'ಪ್ರತಿ ಕಿಮೀ ವೆಚ್ಚ' : 'Cost Per Km'}</span>
              <span className="text-base font-bold text-amber-700">₹{costPerKm} / Km</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
