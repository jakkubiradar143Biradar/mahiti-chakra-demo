import { AppItem, CategoryCard, HeroConfig, SupporterCard, UserComment } from './types';

export const defaultHeroConfig: HeroConfig = {
  badgeKn: '☀️ ಕರ್ನಾಟಕದ #1 ಡಿಜಿಟಲ್ ಸಹಾಯ & ಸೇವಾ ಪೋರ್ಟಲ್',
  badgeEn: "☀️ Karnataka's #1 Digital Help & Service Portal",
  headlineKn: 'ನಿಮ್ಮ ಎಲ್ಲಾ ಲೆಕ್ಕಾಚಾರ & ಉಪಕರಣಗಳು ಒಂದೇ ಜಾಗದಲ್ಲಿ!',
  headlineEn: 'All Your Calculators & Tools in One Place!',
  subheadlineKn: 'ವೇಗವಾಗಿ • ನಿಖರವಾಗಿ • 100% ಉಚಿತ',
  subheadlineEn: 'Fast • Accurate • 100% Free',
  quickTags: [
    { kn: 'ವಯಸ್ಸು ಲೆಕ್ಕಾಚಾರ', en: 'Age Calculator', href: '/age-calculator' },
    { kn: 'EMI ಲೆಕ್ಕಾಚಾರ', en: 'EMI Calculator', href: '/emi-calculator' },
    { kn: 'LPG ಗ್ಯಾಸ್ ದರ', en: 'LPG Gas Price', href: '/dinasi-rates' },
    { kn: 'BMI ಲೆಕ್ಕಾಚಾರ', en: 'BMI Calculator', href: '/tax-calculator' },
    { kn: 'PDF to JPG', en: 'PDF to JPG', href: '/photo-resizer' },
  ],
};

export const defaultSupporters: SupporterCard[] = [
  {
    id: 'supporter-1',
    name: 'Tech Kannada Official',
    channelUrl: 'https://youtube.com',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    badgeText: 'YouTube Creator',
  },
  {
    id: 'supporter-2',
    name: 'Karnataka Digital Tips',
    channelUrl: 'https://youtube.com',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    badgeText: 'Tech Supporter',
  },
  {
    id: 'supporter-3',
    name: 'Kannada Info Hub',
    channelUrl: 'https://youtube.com',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    badgeText: 'Featured Creator',
  },
];

export const defaultComments: UserComment[] = [
  {
    id: 'comment-1',
    pageId: 'global',
    userName: 'ಬಸವರಾಜ್ (ಮೈಸೂರು)',
    userEmail: 'basava@gmail.com',
    userRole: 'ವೀಕ್ಷಕರು',
    commentText: 'ತುಂಬಾ ಉಪಯುಕ್ತವಾದ ವೆಬ್‌ಸೈಟ್! EMI ಲೆಕ್ಕಾಚಾರ ಹಾಗೂ ಇಂದಿನ ಚಿನ್ನದ ದರ ಲೈವ್ ಆಗಿ ನಿಖರವಾಗಿದೆ. ಧನ್ಯವಾದಗಳು ಸರ್!',
    createdAt: '2026-08-25',
    status: 'approved',
    rating: 5,
  },
  {
    id: 'comment-2',
    pageId: 'global',
    userName: 'ಪ್ರವೀಣ್ ಕುಮಾರ್ (ಬೆಂಗಳೂರು)',
    userEmail: 'praveen@gmail.com',
    userRole: 'ವೀಕ್ಷಕರು',
    commentText: 'Photo Resizer ಟೂಲ್‌ನಿಂದ 20KB ಫೋಟೋ ಹಾಗೂ ಸಹಿ ಮಾಡಲು ತುಂಬಾ ಸಹಾಯವಾಯಿತು. ತುಂಬಾ ವೇಗವಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ!',
    createdAt: '2026-08-25',
    status: 'approved',
    rating: 5,
  },
];

export const defaultCategories: CategoryCard[] = [
  {
    id: 'cat-1',
    titleKn: 'ದಿನಸಿ ಲೆಕ್ಕಾಚಾರಗಳು',
    titleEn: 'Grocery Calculators',
    appCountKn: '25+ Apps',
    appCountEn: '25+ Apps',
    bgColor: 'bg-blue-50 border-blue-200 text-blue-700',
    iconColor: 'bg-blue-500 text-white',
    iconName: 'ShoppingCart',
    href: '/dinasi-rates',
  },
  {
    id: 'cat-2',
    titleKn: 'ದಾಖಲೆ ಉಪಕರಣಗಳು',
    titleEn: 'Document Tools',
    appCountKn: '18+ Apps',
    appCountEn: '18+ Apps',
    bgColor: 'bg-purple-50 border-purple-200 text-purple-700',
    iconColor: 'bg-purple-500 text-white',
    iconName: 'FileText',
    href: '/photo-resizer',
  },
  {
    id: 'cat-3',
    titleKn: 'ಹಣಕಾಸು ಉಪಕರಣಗಳು',
    titleEn: 'Financial Tools',
    appCountKn: '22+ Apps',
    appCountEn: '22+ Apps',
    bgColor: 'bg-amber-50 border-amber-200 text-amber-800',
    iconColor: 'bg-amber-500 text-white',
    iconName: 'Coins',
    href: '/emi-calculator',
  },
  {
    id: 'cat-4',
    titleKn: 'ಶೈಕ್ಷಣಿಕ ಉಪಕರಣಗಳು',
    titleEn: 'Educational Tools',
    appCountKn: '15+ Apps',
    appCountEn: '15+ Apps',
    bgColor: 'bg-emerald-50 border-emerald-200 text-emerald-800',
    iconColor: 'bg-emerald-500 text-white',
    iconName: 'GraduationCap',
    href: '/about',
  },
  {
    id: 'cat-5',
    titleKn: 'ಸರ್ಕಾರಿ ಸೇವೆಗಳು',
    titleEn: 'Government Services',
    appCountKn: '30+ Apps',
    appCountEn: '30+ Apps',
    bgColor: 'bg-sky-50 border-sky-200 text-sky-800',
    iconColor: 'bg-sky-500 text-white',
    iconName: 'Building2',
    href: '/land-converter',
  },
  {
    id: 'cat-6',
    titleKn: 'AI ಉಪಕರಣಗಳು',
    titleEn: 'AI Tools',
    appCountKn: '10+ Apps',
    appCountEn: '10+ Apps',
    bgColor: 'bg-indigo-50 border-indigo-200 text-indigo-800',
    iconColor: 'bg-indigo-500 text-white',
    iconName: 'Sparkles',
    href: '/blogs',
  },
];

export const defaultAppItems: AppItem[] = [
  {
    id: 'app-emi',
    titleKn: 'EMI ಲೆಕ್ಕಾಚಾರ',
    titleEn: 'EMI Calculator',
    descKn: 'ನಿಮ್ಮ ಸಾಲದ EMI ಲೆಕ್ಕ ಹಾಕಿ',
    descEn: 'Calculate monthly home/car loan EMI accurately',
    iconName: 'Calculator',
    category: 'Finance',
    rating: 4.8,
    userCountKn: '21K+',
    userCountEn: '21K+',
    href: '/emi-calculator',
    bgColor: 'bg-orange-500 text-white',
    iconColor: 'text-orange-500',
    isPopular: true,
  },
  {
    id: 'app-age',
    titleKn: 'ವಯಸ್ಸು ಲೆಕ್ಕಾಚಾರ',
    titleEn: 'Age Calculator',
    descKn: 'ನಿಮ್ಮ ನಿಜವಾದ ವಯಸ್ಸು ಲೆಕ್ಕ ಹಾಕಿ',
    descEn: 'Calculate exact age in years, months and days',
    iconName: 'Calendar',
    category: 'Utility',
    rating: 4.9,
    userCountKn: '15K+',
    userCountEn: '15K+',
    href: '/age-calculator',
    bgColor: 'bg-emerald-500 text-white',
    iconColor: 'text-emerald-500',
    isPopular: true,
  },
  {
    id: 'app-lpg',
    titleKn: 'LPG ಗ್ಯಾಸ್ ದರ',
    titleEn: 'LPG Gas Price',
    descKn: '14.2kg ಗ್ಯಾಸ್ ದರ ತಿಳಿಯಿರಿ',
    descEn: 'Check latest commercial & domestic cylinder rates',
    iconName: 'Flame',
    category: 'Daily Rates',
    rating: 4.8,
    userCountKn: '12K+',
    userCountEn: '12K+',
    href: '/dinasi-rates',
    bgColor: 'bg-indigo-500 text-white',
    iconColor: 'text-indigo-500',
    isPopular: true,
  },
  {
    id: 'app-pdf',
    titleKn: 'PDF to JPG',
    titleEn: 'PDF to JPG Converter',
    descKn: 'PDF ಅನ್ನು JPG ಗೆ ಪರಿವರ್ತಿಸಿ',
    descEn: 'Convert PDF files into high quality JPG images',
    iconName: 'FileText',
    category: 'Document',
    rating: 4.7,
    userCountKn: '9K+',
    userCountEn: '9K+',
    href: '/photo-resizer',
    bgColor: 'bg-blue-500 text-white',
    iconColor: 'text-blue-500',
    isPopular: true,
  },
  {
    id: 'app-bmi',
    titleKn: 'BMI ಲೆಕ್ಕಾಚಾರ',
    titleEn: 'BMI Health Calculator',
    descKn: 'ನಿಮ್ಮ BMI ಲೆಕ್ಕ ಹಾಕಿ',
    descEn: 'Calculate body mass index & ideal health weight',
    iconName: 'HeartPulse',
    category: 'Health',
    rating: 4.9,
    userCountKn: '8K+',
    userCountEn: '8K+',
    href: '/tax-calculator',
    bgColor: 'bg-emerald-500 text-white',
    iconColor: 'text-emerald-500',
    isPopular: true,
  },
  {
    id: 'app-date',
    titleKn: 'ದಿನಾಂಕ ಅಂತರ',
    titleEn: 'Date Interval Calculator',
    descKn: 'ಎರಡು ದಿನಾಂಕಗಳ ಅಂತರ ಲೆಕ್ಕ ಹಾಕಿ',
    descEn: 'Calculate exact difference between two dates',
    iconName: 'CalendarDays',
    category: 'Utility',
    rating: 4.8,
    userCountKn: '7K+',
    userCountEn: '7K+',
    href: '/age-calculator',
    bgColor: 'bg-pink-500 text-white',
    iconColor: 'text-pink-500',
    isPopular: true,
  },
  {
    id: 'app-mileage',
    titleKn: 'ವಾಹನ ಮೈಲೇಜ್',
    titleEn: 'Vehicle Mileage Calc',
    descKn: 'ನಿಮ್ಮ ವಾಹನ ಮೈಲೇಜ್ ಲೆಕ್ಕ ಹಾಕಿ',
    descEn: 'Calculate bike/car fuel efficiency per litre',
    iconName: 'Gauge',
    category: 'Fuel',
    rating: 4.8,
    userCountKn: '6K+',
    userCountEn: '6K+',
    href: '/fuel-calculator',
    bgColor: 'bg-sky-500 text-white',
    iconColor: 'text-sky-500',
    isPopular: true,
  },
  {
    id: 'app-calorie',
    titleKn: 'ಕ್ಯಾಲೋರಿ ಲೆಕ್ಕಾಚಾರ',
    titleEn: 'Daily Calorie Calc',
    descKn: 'ದಿನಸಿ ಕ್ಯಾಲೋರಿ ಲೆಕ್ಕ ಹಾಕಿ',
    descEn: 'Calculate daily intake calories & food nutrients',
    iconName: 'Zap',
    category: 'Health',
    rating: 4.8,
    userCountKn: '5K+',
    userCountEn: '5K+',
    href: '/dinasi-rates',
    bgColor: 'bg-amber-500 text-white',
    iconColor: 'text-amber-500',
    isPopular: true,
  },
  {
    id: 'app-gold',
    titleKn: 'ಚಿನ್ನ & ಬೆಳ್ಳಿ ದರಗಳು',
    titleEn: 'Live Gold & Silver Rates',
    descKn: 'ಇಂದಿನ 24K / 22K ಚಿನ್ನದ ದರ ನೋಡಿ',
    descEn: 'Live 24K and 22K Gold and Silver market prices',
    iconName: 'Coins',
    category: 'Daily Rates',
    rating: 4.9,
    userCountKn: '25K+',
    userCountEn: '25K+',
    href: '/gold-rates',
    bgColor: 'bg-yellow-500 text-slate-950',
    iconColor: 'text-yellow-500',
    isPopular: false,
  },
  {
    id: 'app-krushi',
    titleKn: 'ಕೃಷಿ & APMC ಬೆಳೆ ದರ',
    titleEn: 'Krushi & APMC Crop Prices',
    descKn: 'ಅಡಿಕೆ, ತೆಂಗು ಹಾಗೂ ಧಾನ್ಯಗಳ ಬೆಲೆ',
    descEn: 'Live Karnataka APMC market prices for crops & arecanut',
    iconName: 'ShoppingCart',
    category: 'Agriculture',
    rating: 4.9,
    userCountKn: '30K+',
    userCountEn: '30K+',
    href: '/krushi-rates',
    bgColor: 'bg-emerald-600 text-white',
    iconColor: 'text-emerald-600',
    isPopular: false,
  },
  {
    id: 'app-panchanga',
    titleKn: 'ದೈನಂದಿನ ಪಂಚಾಂಗ',
    titleEn: 'Daily Panchanga & Horoscope',
    descKn: 'ಇಂದಿನ ತಿಥಿ, ನಕ್ಷತ್ರ ಹಾಗೂ ರಾಶಿ ಭವಿಷ್ಯ',
    descEn: 'Daily Hindu Panchanga, tithi, nakshatra & horoscope',
    iconName: 'Sparkles',
    category: 'Utility',
    rating: 4.8,
    userCountKn: '18K+',
    userCountEn: '18K+',
    href: '/panchanga',
    bgColor: 'bg-purple-600 text-white',
    iconColor: 'text-purple-600',
    isPopular: false,
  },
  {
    id: 'app-tax',
    titleKn: 'Tax & GST ಲೆಕ್ಕಾಚಾರ',
    titleEn: 'Income Tax & GST Calculator',
    descKn: 'ಆದಾಯ ತೆರಿಗೆ ಹಾಗೂ ಜಿಎಸ್‌ಟಿ ಲೆಕ್ಕ ಹಾಕಿ',
    descEn: 'Calculate income tax slabs and GST amounts easily',
    iconName: 'Calculator',
    category: 'Finance',
    rating: 4.7,
    userCountKn: '11K+',
    userCountEn: '11K+',
    href: '/tax-calculator',
    bgColor: 'bg-rose-500 text-white',
    iconColor: 'text-rose-500',
    isPopular: false,
  },
  {
    id: 'app-sip',
    titleKn: 'SIP ಲೆಕ್ಕಾಚಾರ',
    titleEn: 'SIP Mutual Fund Calculator',
    descKn: 'ಮ್ಯೂಚುಯಲ್ ಫಂಡ್ ಹೂಡಿಕೆಯ ರಿಟರ್ನ್ಸ್ ಲೆಕ್ಕ ಹಾಕಿ',
    descEn: 'Calculate monthly SIP investment returns & wealth',
    iconName: 'Coins',
    category: 'Finance',
    rating: 4.9,
    userCountKn: '14K+',
    userCountEn: '14K+',
    href: '/sip-calculator',
    bgColor: 'bg-blue-600 text-white',
    iconColor: 'text-blue-600',
    isPopular: false,
  },
  {
    id: 'app-land',
    titleKn: 'ಜಮೀನು ಅಳತೆ ಪರಿವರ್ತಕ',
    titleEn: 'Land Unit Converter',
    descKn: 'ಗುಂಟೆ, ಎಕರೆ, ಸ್ಕ್ವೇರ್ ಫೀಟ್ ಪರಿವರ್ತಿಸಿ',
    descEn: 'Convert Gunta, Acre, Sqft & Cent land measurements',
    iconName: 'Building2',
    category: 'Utility',
    rating: 4.8,
    userCountKn: '16K+',
    userCountEn: '16K+',
    href: '/land-converter',
    bgColor: 'bg-amber-600 text-white',
    iconColor: 'text-amber-600',
    isPopular: false,
  },
  {
    id: 'app-fuel-trip',
    titleKn: 'ಇಂಧನ ವೆಚ್ಚ ಲೆಕ್ಕಾಚಾರ',
    titleEn: 'Fuel Trip Cost Calc',
    descKn: 'ನಿಮ್ಮ ಪ್ರಯಾಣದ ಪೆಟ್ರೋಲ್ ವೆಚ್ಚ ಲೆಕ್ಕ ಹಾಕಿ',
    descEn: 'Calculate exact petrol/diesel trip expenses',
    iconName: 'Gauge',
    category: 'Fuel',
    rating: 4.7,
    userCountKn: '9K+',
    userCountEn: '9K+',
    href: '/fuel-calculator',
    bgColor: 'bg-sky-600 text-white',
    iconColor: 'text-sky-600',
    isPopular: false,
  },
  {
    id: 'app-resizer',
    titleKn: '20KB Photo Resizer',
    titleEn: '20KB Passport Photo Resizer',
    descKn: 'ಸರ್ಕಾರಿ ಅರ್ಜಿಗಳಿಗೆ ಫೋಟೋ 20KB ಮಾಡಿ',
    descEn: 'Resize photo & signature to 20KB for govt applications',
    iconName: 'FileText',
    category: 'Document',
    rating: 4.9,
    userCountKn: '22K+',
    userCountEn: '22K+',
    href: '/photo-resizer',
    bgColor: 'bg-teal-500 text-white',
    iconColor: 'text-teal-500',
    isPopular: false,
  },
];

export function getStoredAppItems(): AppItem[] {
  if (typeof window === 'undefined') return defaultAppItems;
  const saved = localStorage.getItem('app_items_data');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
  }
  return defaultAppItems;
}

export function saveStoredAppItems(items: AppItem[]): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('app_items_data', JSON.stringify(items));
  }
}

export function getStoredSupporters(): SupporterCard[] {
  if (typeof window === 'undefined') return defaultSupporters;
  const saved = localStorage.getItem('supporters_data');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
  }
  return defaultSupporters;
}

export function saveStoredSupporters(items: SupporterCard[]): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('supporters_data', JSON.stringify(items));
  }
}

export function getStoredComments(): UserComment[] {
  if (typeof window === 'undefined') return defaultComments;
  const saved = localStorage.getItem('user_comments_data');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
  }
  return defaultComments;
}

export function saveStoredComments(items: UserComment[]): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('user_comments_data', JSON.stringify(items));
  }
}
