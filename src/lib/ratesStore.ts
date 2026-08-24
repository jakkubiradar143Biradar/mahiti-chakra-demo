import { RatesData, AdminSettings, BlogPost, KrushiRate, DinasiRate } from './types';

export const initialDinasiRates: DinasiRate[] = [
  {
    nameKn: 'ಸೋನಾ ಮಸೂರಿ ಅಕ್ಕಿ (Sona Masuri Rice)',
    nameEn: 'Sona Masuri Rice',
    categoryKn: 'ಅಕ್ಕಿ & ಧಾನ್ಯಗಳು',
    categoryEn: 'Rice & Grains',
    price: 1450,
    unitKn: '25 ಕೆಜಿ ಚೀಲ (per 25kg Bag)',
    unitEn: 'per 25kg Bag',
    trend: 'stable',
  },
  {
    nameKn: 'ತೊಗರಿ ಬೇಳೆ (Toor Dal / Tuvar Dal)',
    nameEn: 'Toor Dal (Premium)',
    categoryKn: 'ಬೇಳೆಕಾಳುಗಳು',
    categoryEn: 'Pulses & Dals',
    price: 165,
    unitKn: 'ಪ್ರತಿ ಕೆಜಿ (per Kg)',
    unitEn: 'per Kg',
    trend: 'up',
  },
  {
    nameKn: 'ಉದ್ದಿನ ಬೇಳೆ (Urad Dal)',
    nameEn: 'Urad Dal',
    categoryKn: 'ಬೇಳೆಕಾಳುಗಳು',
    categoryEn: 'Pulses & Dals',
    price: 135,
    unitKn: 'ಪ್ರತಿ ಕೆಜಿ (per Kg)',
    unitEn: 'per Kg',
    trend: 'stable',
  },
  {
    nameKn: 'ಸೂರ್ಯಕಾಂತಿ ಅಡುಗೆ ಎಣ್ಣೆ (Sunflower Oil)',
    nameEn: 'Sunflower Cooking Oil',
    categoryKn: 'ಅಡುಗೆ ಎಣ್ಣೆ',
    categoryEn: 'Edible Oils',
    price: 125,
    unitKn: 'ಪ್ರತಿ ಲೀಟರ್ (per Litre)',
    unitEn: 'per Litre',
    trend: 'down',
  },
  {
    nameKn: 'ಸಕ್ಕರೆ (Sugar)',
    nameEn: 'Sugar (M-Grade)',
    categoryKn: 'ಸಕ್ಕರೆ & ಬೆಲ್ಲ',
    categoryEn: 'Sugar & Jaggery',
    price: 42,
    unitKn: 'ಪ್ರತಿ ಕೆಜಿ (per Kg)',
    unitEn: 'per Kg',
    trend: 'stable',
  },
  {
    nameKn: 'ಅಚ್ಚು ಬೆಲ್ಲ (Jaggery)',
    nameEn: 'Jaggery (Bella)',
    categoryKn: 'ಸಕ್ಕರೆ & ಬೆಲ್ಲ',
    categoryEn: 'Sugar & Jaggery',
    price: 58,
    unitKn: 'ಪ್ರತಿ ಕೆಜಿ (per Kg)',
    unitEn: 'per Kg',
    trend: 'stable',
  },
  {
    nameKn: 'ಈರುಳ್ಳಿ (Onion)',
    nameEn: 'Onion (Medium)',
    categoryKn: 'ತರಕಾರಿ & ದೈನಂದಿನ',
    categoryEn: 'Vegetables & Daily',
    price: 35,
    unitKn: 'ಪ್ರತಿ ಕೆಜಿ (per Kg)',
    unitEn: 'per Kg',
    trend: 'down',
  },
  {
    nameKn: 'ಬೆಳ್ಳುಳ್ಳಿ (Garlic)',
    nameEn: 'Garlic (Desi)',
    categoryKn: 'ತರಕಾರಿ & ದೈನಂದಿನ',
    categoryEn: 'Vegetables & Daily',
    price: 180,
    unitKn: 'ಪ್ರತಿ ಕೆಜಿ (per Kg)',
    unitEn: 'per Kg',
    trend: 'up',
  }
];

export const initialKrushiRates: KrushiRate[] = [
  {
    itemKn: 'ಅಡಿಕೆ (Arecanut)',
    itemEn: 'Arecanut (Adike)',
    varietyKn: 'ರಾಶಿ ಅಡಿಕೆ (Rashi)',
    varietyEn: 'Rashi Arecanut',
    marketKn: 'ಶಿವಮೊಗ್ಗ / ಸಾಗರ APMC',
    marketEn: 'Shivamogga / Sagara APMC',
    minPrice: 48500,
    maxPrice: 54200,
    unitKn: 'ಕ್ವಿಂಟಾಲ್ (per Quintal)',
    unitEn: 'per Quintal',
  },
  {
    itemKn: 'ಅಡಿಕೆ (Arecanut)',
    itemEn: 'Arecanut (Adike)',
    varietyKn: 'ಬೆಟ್ಟೆ ಅಡಿಕೆ (Bette)',
    varietyEn: 'Bette Arecanut',
    marketKn: 'ಶಿರಸಿ / ಸಿದ್ಧಾಪುರ APMC',
    marketEn: 'Sirsi / Siddapura APMC',
    minPrice: 38000,
    maxPrice: 43500,
    unitKn: 'ಕ್ವಿಂಟಾಲ್ (per Quintal)',
    unitEn: 'per Quintal',
  },
  {
    itemKn: 'ಕೊಬ್ಬರಿ (Copra)',
    itemEn: 'Copra (Kobbari)',
    varietyKn: 'ರಾಜಾಪುರಿ / ಬಾಲ್ ಕೊಬ್ಬರಿ',
    varietyEn: 'Ball Copra',
    marketKn: 'ತಿಪಟೂರು APMC',
    marketEn: 'Tiptur APMC',
    minPrice: 11500,
    maxPrice: 13200,
    unitKn: 'ಕ್ವಿಂಟಾಲ್ (per Quintal)',
    unitEn: 'per Quintal',
  },
  {
    itemKn: 'ಕಾಫಿ (Coffee)',
    itemEn: 'Coffee',
    varietyKn: 'ಅರೇಬಿಕಾ ಪಾರ್ಚ್‌ಮೆಂಟ್',
    varietyEn: 'Arabica Parchment',
    marketKn: 'ಚಿಕ್ಕಮಗಳೂರು / ಹಾಸನ',
    marketEn: 'Chikkamagaluru / Hassan',
    minPrice: 16500,
    maxPrice: 18200,
    unitKn: '50 ಕೆಜಿ ಚೀಲ (per 50kg Bag)',
    unitEn: 'per 50kg Bag',
  },
  {
    itemKn: 'ಕಪ್ಪು ಮೆಣಸು (Black Pepper)',
    itemEn: 'Black Pepper',
    varietyKn: 'ನಾಟಿ ಕಪ್ಪು ಮೆಣಸು',
    varietyEn: 'Black Pepper',
    marketKn: 'ಮಡಿಕೇರಿ / ಶಿರಸಿ',
    marketEn: 'Madikeri / Sirsi',
    minPrice: 620,
    maxPrice: 680,
    unitKn: 'ಕೆಜಿ (per Kg)',
    unitEn: 'per Kg',
  },
  {
    itemKn: 'ಏಲಕ್ಕಿ (Cardamom)',
    itemEn: 'Cardamom',
    varietyKn: 'ಹಸಿರು ಏಲಕ್ಕಿ (Green)',
    varietyEn: 'Green Cardamom',
    marketKn: 'ಬೋಡಿನಾಯ್ಕನೂರು / ಹಾವೇರಿ',
    marketEn: 'Bodinayakanur / Haveri',
    minPrice: 2200,
    maxPrice: 2650,
    unitKn: 'ಕೆಜಿ (per Kg)',
    unitEn: 'per Kg',
  }
];

export const initialBlogPosts: BlogPost[] = [
  {
    id: 'gold-rate-guide-karnataka',
    slug: 'gold-rate-guide-karnataka',
    titleKn: 'ಬೆಂಗಳೂರಿನಲ್ಲಿ ಇಂದಿನ ಚಿನ್ನದ ಬೆಲೆ ಲೆಕ್ಕ ಹಾಕುವುದು ಹೇಗೆ? ಸಂಪೂರ್ಣ ವಿವರ',
    titleEn: 'How to Calculate Gold Rate & Making Charges in Bengaluru',
    categoryKn: 'ಚಿನ್ನದ ಸುದ್ದಿ (Gold)',
    categoryEn: 'Gold News',
    excerptKn: 'ಚಿನ್ನದ ಒಡವೆ ಖರೀದಿಸುವಾಗ 24K ಮತ್ತು 22K ಚಿನ್ನದ ದರ, ಮೇಕಿಂಗ್ ಚಾರ್ಜ್ (ಮಜೂರಿ) ಮತ್ತು GST ಲೆಕ್ಕಾಚಾರ ಮಾಡುವುದು ಹೇಗೆ ತಿಳಿಯಿರಿ.',
    excerptEn: 'Learn how 24K vs 22K gold rates, making charges, and GST are calculated when buying gold jewelry in Karnataka.',
    contentKn: `
### ಚಿನ್ನದ ಬೆಲೆ ಲೆಕ್ಕಾಚಾರ ಮಾಡುವುದು ಹೇಗೆ?
ಒಟ್ಟು ಬೆಲೆ = (ಚಿನ್ನದ ದರ × ಗ್ರಾಮ್ ತೂಕ) + ಮೇಕಿಂಗ್ ಚಾರ್ಜಸ್ (ಮಜೂರಿ) + 3% GST
`,
    contentEn: `
### Understanding Gold Rate Calculations in India
Formula: Total Cost = (Gold Rate per gram × Weight in grams) + Making Charges + 3% GST
`,
    date: '2026-08-23',
    author: 'Admin Team',
    published: true,
  },
  {
    id: 'krushi-marukatte-adike-bele',
    slug: 'krushi-marukatte-adike-bele',
    titleKn: 'ಶಿವಮೊಗ್ಗ ಮತ್ತು ಶಿರಸಿ ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ಇಂದಿನ ಅಡಿಕೆ ಧಾರಣೆ ವಿವರ',
    titleEn: 'Today Arecanut (Adike) Market Rates in Shivamogga & Sirsi APMC',
    categoryKn: 'ಕೃಷಿ ಸುದ್ದಿ (Agriculture)',
    categoryEn: 'Agriculture News',
    excerptKn: 'ಶಿವಮೊಗ್ಗ, ಚನ್ನಗಿರಿ ಮತ್ತು ಶಿರಸಿ APMC ಮಾರುಕಟ್ಟೆಗಳಲ್ಲಿ ಇಂದಿನ ರಾಶಿ, ಬೆಟ್ಟೆ ಮತ್ತು ಗೊಟು ಅಡಿಕೆ ಧಾರಣೆ ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಿ.',
    excerptEn: 'Check today\'s Rashi, Bette, and Gotu Arecanut prices across Shivamogga and Sirsi APMC markets.',
    contentKn: `
### ಕರ್ನಾಟಕದ ಇಂದಿನ ಅಡಿಕೆ ಮಾರುಕಟ್ಟೆ ದರಗಳು
- Shivamogga APMC Rashi Arecanut Max: ₹54,200/Quintal
- Sirsi APMC Bette Arecanut Max: ₹43,500/Quintal
`,
    contentEn: `
### Arecanut Market Rates in Karnataka Today
`,
    date: '2026-08-23',
    author: 'Krushi Editor',
    published: true,
  }
];

export const defaultRatesData: RatesData = {
  lastUpdated: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) + ", Today",
  isAutoMode: true,
  rates: {
    gold24k: 73850,
    gold22k: 67700,
    silver: 86500,
    petrolBlr: 102.86,
    dieselBlr: 88.94,
    usdInr: 83.92,
    btcUsd: 64250,
  },
  cityFuel: {
    bengaluru: { petrol: 102.86, diesel: 88.94 },
    mysuru: { petrol: 102.45, diesel: 88.56 },
    mangaluru: { petrol: 101.95, diesel: 87.98 },
    hubballi: { petrol: 103.12, diesel: 89.15 },
    mumbai: { petrol: 104.21, diesel: 92.15 },
    delhi: { petrol: 94.72, diesel: 87.62 },
  },
  krushiRates: initialKrushiRates,
  dinasiRates: initialDinasiRates,
  announcement: {
    enabled: true,
    textKn: "🛒 ಇಂದಿನ ಲೈವ್ ದಿನಸಿ ಸಾಮಗ್ರಿಗಳ ಬೆಲೆ (ಅಕ್ಕಿ, ಎಣ್ಣೆ, ಬೇಳೆ), ಕೃಷಿ ದರಗಳು ಮತ್ತು ಚಿನ್ನ/ಪೆಟ್ರೋಲ್ ಬೆಲೆಗಳು ಅಪ್‌ಡೇಟ್ ಆಗಿವೆ!",
    textEn: "🛒 Today's live Grocery rates (Rice, Oil, Dals), Krushi rates & Gold/Fuel prices updated!",
  },
  todayVisitorsCount: 2150,
};

export const defaultAdminSettings: AdminSettings = {
  passcode: "1234",
  isAutoSync: true,
  manualRates: {},
  announcement: defaultRatesData.announcement,
  adsensePublisherId: "pub-8492049182049281",
  telegramGroupUrl: "https://t.me/karnatakarates",
  whatsappGroupUrl: "https://chat.whatsapp.com/demo",
};

export async function getMergedRates(): Promise<RatesData> {
  if (typeof window === 'undefined') return defaultRatesData;

  const savedAdminSettings = localStorage.getItem('admin_settings');
  if (savedAdminSettings) {
    try {
      const admin: AdminSettings = JSON.parse(savedAdminSettings);
      if (!admin.isAutoSync && admin.manualRates) {
        return {
          ...defaultRatesData,
          isAutoMode: false,
          rates: {
            ...defaultRatesData.rates,
            ...admin.manualRates,
          },
          announcement: admin.announcement || defaultRatesData.announcement,
        };
      }
    } catch (e) {
      console.error('Error parsing admin settings:', e);
    }
  }

  return defaultRatesData;
}

export function getStoredBlogs(): BlogPost[] {
  if (typeof window === 'undefined') return initialBlogPosts;
  const saved = localStorage.getItem('app_blog_posts');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
  }
  return initialBlogPosts;
}

export function saveStoredBlogs(blogs: BlogPost[]) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('app_blog_posts', JSON.stringify(blogs));
  }
}
