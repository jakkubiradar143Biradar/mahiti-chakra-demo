import { AppItem, CategoryCard, HeroConfig, SupporterCard, UserComment } from './types';

export const defaultHeroConfig: HeroConfig = {
  badgeKn: '☀️ ಕರ್ನಾಟಕದ #1 ಡಿಜಿಟಲ್ ಸಹಾಯ & ಸೇವಾ ಪೋರ್ಟಲ್',
  badgeEn: "☀️ Karnataka's #1 Digital Help & Service Portal",
  headlineKn: 'ನಿಮ್ಮ ಎಲ್ಲಾ ಅಗತ್ಯ ಉಪಕರಣಗಳು ಒಂದೇ ಜಾಗದಲ್ಲಿ!',
  headlineEn: 'All Your Essential Tools in One Place!',
  subheadlineKn: 'ವೇಗವಾಗಿ • ನಿಖರವಾಗಿ • 100% ಉಚಿತ',
  subheadlineEn: 'Fast • Accurate • 100% Free',
  quickTags: [
    { kn: 'ಸರ್ಕಾರಿ ಅರ್ಜಿ ಮೇಕರ್', en: 'Govt Letter Maker', href: '/letter-maker' },
    { kn: 'ಮನೆ ಬಜೆಟ್ ಪ್ಲಾನರ್', en: 'Family Budget', href: '/budget-planner' },
    { kn: 'ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಎಡಿಟರ್', en: 'Screenshot OCR', href: '/screenshot-editor' },
    { kn: 'ಕನ್ನಡ ಕ್ಯಾಲೆಂಡರ್', en: 'Kannada Calendar', href: '/kannada-calendar' },
    { kn: 'ಮದುವೆ ಬಯೋಡೇಟಾ', en: 'Biodata Maker', href: '/biodata-maker' },
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
];

export const defaultComments: UserComment[] = [
  {
    id: 'comment-1',
    pageId: 'global',
    userName: 'ಬಸವರಾಜ್ (ಮೈಸೂರು)',
    userEmail: 'basava@gmail.com',
    userRole: 'ವೀಕ್ಷಕರು',
    commentText: 'ತುಂಬಾ ಉಪಯುಕ್ತವಾದ ವೆಬ್‌ಸೈಟ್! ಸರ್ಕಾರಿ ಅರ್ಜಿ ಮೇಕರ್ ಹಾಗೂ ಬಜೆಟ್ ಪ್ಲಾನರ್ ತುಂಬಾ ಚೆನ್ನಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತವೆ. ಧನ್ಯವಾದಗಳು!',
    createdAt: '2026-08-25',
    status: 'approved',
    rating: 5,
  },
  {
    id: 'comment-2',
    pageId: 'global',
    userName: 'ಪ್ರವೀಣ್ ಕುಮಾರ್ (ಬೆಂಗಳೂರು)',
    userEmail: 'praveen@gmail.com',
    userRole: 'ವೀಕ್ಷಕರು',
    commentText: 'ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಎಡಿಟರ್ ಮತ್ತು ಬಯೋಡೇಟಾ ಮೇಕರ್‌ನಿಂದ ತುಂಬಾ ಸಹಾಯವಾಯಿತು!',
    createdAt: '2026-08-25',
    status: 'approved',
    rating: 5,
  },
];

export const defaultCategories: CategoryCard[] = [
  {
    id: 'cat-1',
    titleKn: 'ಸರ್ಕಾರಿ & ದೂರು ಅರ್ಜಿಗಳು',
    titleEn: 'Govt & Complaint Letters',
    appCountKn: 'ಅಧಿಕೃತ ಪತ್ರ',
    appCountEn: 'Official Forms',
    bgColor: 'bg-blue-50 border-blue-200 text-blue-800',
    iconColor: 'bg-blue-600 text-white',
    iconName: 'FileText',
    href: '/letter-maker',
  },
  {
    id: 'cat-2',
    titleKn: 'ಹಣಕಾಸು & ಬಜೆಟ್ ಪ್ಲಾನರ್',
    titleEn: 'Finance & Budget',
    appCountKn: '50-30-20 ರೂಲ್',
    appCountEn: 'Budget Rules',
    bgColor: 'bg-emerald-50 border-emerald-200 text-emerald-800',
    iconColor: 'bg-emerald-600 text-white',
    iconName: 'Coins',
    href: '/budget-planner',
  },
  {
    id: 'cat-3',
    titleKn: 'ಚಿತ್ರ & ಸ್ಕ್ಯಾನರ್ ಎಡಿಟರ್',
    titleEn: 'Image & OCR Editor',
    appCountKn: 'OCR ಸ್ಕ್ಯಾನ್',
    appCountEn: 'OCR Scanner',
    bgColor: 'bg-sky-50 border-sky-200 text-sky-800',
    iconColor: 'bg-sky-600 text-white',
    iconName: 'Sparkles',
    href: '/screenshot-editor',
  },
  {
    id: 'cat-4',
    titleKn: 'ಸಂಭ್ರಮ & ಆಮಂತ್ರಣ ಪತ್ರಿಕೆಗಳು',
    titleEn: 'Events & Invitations',
    appCountKn: 'ಲಗ್ನ ಪತ್ರಿಕೆ',
    appCountEn: 'Cards & Biodata',
    bgColor: 'bg-pink-50 border-pink-200 text-pink-800',
    iconColor: 'bg-pink-600 text-white',
    iconName: 'HeartPulse',
    href: '/biodata-maker',
  },
  {
    id: 'cat-5',
    titleKn: 'ಕೃಷಿ & ಜಮೀನು ಸರ್ವೆ',
    titleEn: 'Agriculture & Land Survey',
    appCountKn: 'ನಕ್ಷೆ & ಅಳತೆ',
    appCountEn: 'Survey Maps',
    bgColor: 'bg-green-50 border-green-200 text-green-800',
    iconColor: 'bg-green-600 text-white',
    iconName: 'GraduationCap',
    href: '/land-converter',
  },
  {
    id: 'cat-6',
    titleKn: 'ಜೀವನಶೈಲಿ & ಕ್ಯಾಲೆಂಡರ್',
    titleEn: 'Lifestyle & Calendar',
    appCountKn: 'ದೈನಂದಿನ ನೆರವು',
    appCountEn: 'Daily Life',
    bgColor: 'bg-amber-50 border-amber-200 text-amber-800',
    iconColor: 'bg-amber-600 text-white',
    iconName: 'CalendarDays',
    href: '/kannada-calendar',
  },
];

export const defaultAppItems: AppItem[] = [
  {
    id: 'tool-letter',
    titleKn: 'ಸರ್ಕಾರಿ ಅರ್ಜಿ (ಪತ್ರ) ಮೇಕರ್',
    titleEn: 'Govt Application Letter Maker',
    descKn: 'ಗ್ರಾಮ ಪಂಚಾಯತ್, ತಹಶೀಲ್ದಾರ್, ಕರೆಂಟ್ & ಪೊಲೀಸ್ ದೂರು ಪತ್ರ',
    descEn: 'Official Karnataka Govt Application & Complaint Letter Generator',
    iconName: 'FileText',
    category: 'Government',
    rating: 4.9,
    userCountKn: '95K+',
    userCountEn: '95K+',
    href: '/letter-maker',
    bgColor: 'bg-blue-600 text-white',
    iconColor: 'text-blue-600',
    isPopular: true,
    appType: 'utility',
  },
  {
    id: 'tool-budget',
    titleKn: 'ಮನೆ ಖರ್ಚು & ಬಜೆಟ್ ಪ್ಲಾನರ್',
    titleEn: 'Household Budget & Expense Planner',
    descKn: 'ಸಂಬಳ, ದಿನಸಿ, ಬಾಡಿಗೆ & 50-30-20 ಉಳಿತಾಯ ಕಾರ್ಡ್',
    descEn: '50-30-20 rule monthly household financial budget planner',
    iconName: 'Coins',
    category: 'Finance',
    rating: 4.9,
    userCountKn: '86K+',
    userCountEn: '86K+',
    href: '/budget-planner',
    bgColor: 'bg-emerald-600 text-white',
    iconColor: 'text-emerald-600',
    isPopular: true,
    appType: 'utility',
  },
  {
    id: 'tool-screenshot',
    titleKn: 'ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಸ್ಕ್ಯಾನರ್ & ಎಡಿಟರ್',
    titleEn: 'Screenshot OCR Scanner & Editor',
    descKn: 'ಫೋಟೋ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಚಿತ್ರದಲ್ಲೇ ಅಕ್ಷರ ಬದಲಿಸಿ',
    descEn: 'In-place OCR Kannada/English text replacer and photo editor',
    iconName: 'Sparkles',
    category: 'Tools',
    rating: 4.9,
    userCountKn: '94K+',
    userCountEn: '94K+',
    href: '/screenshot-editor',
    bgColor: 'bg-sky-600 text-white',
    iconColor: 'text-sky-600',
    isPopular: true,
    appType: 'utility',
  },
  {
    id: 'tool-catering',
    titleKn: 'ಅಡುಗೆ ಸಾಮಗ್ರಿ ಅಂದಾಜು',
    titleEn: 'Catering & Grocery Estimator',
    descKn: '೫೦-೨೦೦೦ ಜನರಿಗೆ ಅಕ್ಕಿ, ಬೇಳೆ, ಎಣ್ಣೆ & ದಿನಸಿ ಶೀಟ್',
    descEn: 'Estimate groceries & ingredients for 50-2000 guests',
    iconName: 'ShoppingCart',
    category: 'Catering',
    rating: 4.9,
    userCountKn: '78K+',
    userCountEn: '78K+',
    href: '/catering-estimator',
    bgColor: 'bg-amber-600 text-white',
    iconColor: 'text-amber-600',
    isPopular: true,
    appType: 'utility',
  },
  {
    id: 'tool-calendar',
    titleKn: 'ಸಾಂಪ್ರದಾಯಿಕ ಕನ್ನಡ ಕ್ಯಾಲೆಂಡರ್',
    titleEn: 'Traditional Kannada Calendar',
    descKn: 'ದಿನದ ತಿಥಿ, ವಾರ, ನಕ್ಷತ್ರ, ರಾಹುಕಾಲ & HD ಶೀಟ್',
    descEn: 'Daily Tithi, Nakshatra, Rahu Kala & HD Panchanga calendar',
    iconName: 'CalendarDays',
    category: 'Lifestyle',
    rating: 4.9,
    userCountKn: '112K+',
    userCountEn: '112K+',
    href: '/kannada-calendar',
    bgColor: 'bg-red-600 text-white',
    iconColor: 'text-red-600',
    isPopular: true,
    appType: 'utility',
  },
  {
    id: 'tool-baby',
    titleKn: 'ಮಕ್ಕಳ ಸುಂದರ ಹೆಸರು & ಅರ್ಥ',
    titleEn: 'Kannada Baby Names & Meaning',
    descKn: 'ರಾಶಿ, ನಕ್ಷತ್ರ & ನಾಮಕರಣ ಅನೌನ್ಸ್‌ಮೆಂಟ್ ಕಾರ್ಡ್',
    descEn: 'Pure Kannada baby names by Rashi & Nakshatra with poster generator',
    iconName: 'HeartPulse',
    category: 'Lifestyle',
    rating: 4.9,
    userCountKn: '68K+',
    userCountEn: '68K+',
    href: '/baby-names',
    bgColor: 'bg-blue-600 text-white',
    iconColor: 'text-blue-600',
    isPopular: true,
    appType: 'utility',
  },
  {
    id: 'tool-biodata',
    titleKn: 'ಮದುವೆ ಬಯೋಡೇಟಾ ಮೇಕರ್',
    titleEn: 'Marriage Biodata Maker',
    descKn: 'ವಧು-ವರರ ಜಾತಕ, ಶಿಕ್ಷಣ & ರಾಯಲ್ ಪ್ರೊಫೈಲ್ ಕಾರ್ಡ್',
    descEn: 'Create royal Hindu Kannada marriage biodata with horoscope',
    iconName: 'HeartPulse',
    category: 'Events',
    rating: 4.9,
    userCountKn: '89K+',
    userCountEn: '89K+',
    href: '/biodata-maker',
    bgColor: 'bg-pink-600 text-white',
    iconColor: 'text-pink-600',
    isPopular: true,
    appType: 'utility',
  },
  {
    id: 'tool-land',
    titleKn: 'ಜಮೀನು ಅಳತೆ & ಸರ್ವೆ ನಕ್ಷೆ',
    titleEn: 'Land Survey Area & Map Converter',
    descKn: '೪ ದಿಕ್ಕುಗಳ ಅಳತೆ, ಗುಂಟೆ, ಎಕರೆ & HD ಸರ್ವೆ ಕಾರ್ಡ್',
    descEn: 'Calculate 4-sided land area, gunta, acre with visual survey map',
    iconName: 'GraduationCap',
    category: 'Agriculture',
    rating: 4.9,
    userCountKn: '96K+',
    userCountEn: '96K+',
    href: '/land-converter',
    bgColor: 'bg-green-600 text-white',
    iconColor: 'text-green-600',
    isPopular: true,
    appType: 'utility',
  },
  {
    id: 'tool-diet',
    titleKn: 'ತೂಕ ಇಳಿಸುವ ಡಯಟ್ ಚಾರ್ಟ್',
    titleEn: 'Weight Loss Diet Chart',
    descKn: 'ರಾಗಿ ಮುದ್ದೆ & ಪೌಷ್ಟಿಕ ಆಹಾರದ HD ಡಯಟ್ ಪ್ಲಾನ್',
    descEn: 'South Indian Karnataka Ragi Mudde weight management chart',
    iconName: 'HeartPulse',
    category: 'Health',
    rating: 4.9,
    userCountKn: '83K+',
    userCountEn: '83K+',
    href: '/diet-chart',
    bgColor: 'bg-emerald-600 text-white',
    iconColor: 'text-emerald-600',
    isPopular: true,
    appType: 'utility',
  },
  {
    id: 'tool-invitation',
    titleKn: 'ಡಿಜಿಟಲ್ ಲಗ್ನ ಪತ್ರಿಕೆ ಮೇಕರ್',
    titleEn: 'Digital Wedding Invitation Maker',
    descKn: 'ಮದುವೆ, ಗೃಹಪ್ರವೇಶಕ್ಕೆ ರಾಯಲ್ ಆಮಂತ್ರಣ ಕಾರ್ಡ್',
    descEn: 'Create royal Kannada wedding & Gruhapravesha invitation cards',
    iconName: 'Sparkles',
    category: 'Events',
    rating: 4.9,
    userCountKn: '74K+',
    userCountEn: '74K+',
    href: '/invitation-maker',
    bgColor: 'bg-rose-600 text-white',
    iconColor: 'text-rose-600',
    isPopular: true,
    appType: 'utility',
  },
  {
    id: 'tool-kirani',
    titleKn: 'ಕಿರಣಿ ಸಂತೆ ಲಿಸ್ಟ್ ಮೇಕರ್',
    titleEn: 'Kirani Sante Grocery List',
    descKn: 'ದಿನಸಿ & ಸಂತೆ ಸಾಮಗ್ರಿಗಳ HD ಲಿಸ್ಟ್ ರಚಿಸಿ',
    descEn: 'Monthly Kannada grocery & household checklist generator',
    iconName: 'ShoppingCart',
    category: 'Shopping',
    rating: 4.9,
    userCountKn: '48K+',
    userCountEn: '48K+',
    href: '/kirani-sante',
    bgColor: 'bg-amber-600 text-white',
    iconColor: 'text-amber-600',
    isPopular: true,
    appType: 'utility',
  },
  {
    id: 'tool-baddi',
    titleKn: 'ಗ್ರಾಮೀಣ ಬಡ್ಡಿ ಲೆಕ್ಕಾಚಾರ',
    titleEn: 'Rural Village Interest Calculator',
    descKn: 'ನೂರಕ್ಕೆ ₹೨/₹೩ ಬಡ್ಡಿ, ಚಕ್ರಬಡ್ಡಿ & ರಶೀದಿ ಶೀಟ್',
    descEn: 'Calculate simple & compound interest per ₹100 monthly rate',
    iconName: 'Coins',
    category: 'Finance',
    rating: 4.9,
    userCountKn: '92K+',
    userCountEn: '92K+',
    href: '/grama-baddi',
    bgColor: 'bg-amber-600 text-white',
    iconColor: 'text-amber-600',
    isPopular: true,
    appType: 'utility',
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