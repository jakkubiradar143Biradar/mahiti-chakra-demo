export interface RateItem {
  name: string;
  nameKn: string;
  unit: string;
  unitKn: string;
  price: number;
  change: number;
  trend: 'up' | 'down' | 'equal';
  city?: string;
  cityKn?: string;
  category: 'gold' | 'silver' | 'fuel' | 'forex' | 'crypto' | 'krushi' | 'dinasi';
}

export interface KrushiRate {
  itemKn: string;
  itemEn: string;
  varietyKn: string;
  varietyEn: string;
  marketKn: string;
  marketEn: string;
  minPrice: number;
  maxPrice: number;
  unitKn: string;
  unitEn: string;
}

export interface DinasiRate {
  nameKn: string;
  nameEn: string;
  categoryKn: string;
  categoryEn: string;
  price: number;
  unitKn: string;
  unitEn: string;
  trend: 'up' | 'down' | 'stable';
}

export interface BlogPost {
  id: string;
  titleKn: string;
  titleEn: string;
  slug: string;
  categoryKn: string;
  categoryEn: string;
  excerptKn: string;
  excerptEn: string;
  contentKn: string;
  contentEn: string;
  date: string;
  author: string;
  imageUrl?: string;
  published: boolean;
}

export interface AppItem {
  id: string;
  titleKn: string;
  titleEn: string;
  descKn: string;
  descEn: string;
  iconName: string;
  category: string;
  rating: number;
  userCountKn: string;
  userCountEn: string;
  href: string;
  embedLink?: string;
  bgColor: string;
  iconColor: string;
  isPopular?: boolean;
  isNew?: boolean;
  isHot?: boolean;
}

export interface CategoryCard {
  id: string;
  titleKn: string;
  titleEn: string;
  appCountKn: string;
  appCountEn: string;
  bgColor: string;
  iconColor: string;
  iconName: string;
  href: string;
}

export interface HeroConfig {
  badgeKn: string;
  badgeEn: string;
  headlineKn: string;
  headlineEn: string;
  subheadlineKn: string;
  subheadlineEn: string;
  quickTags: { kn: string; en: string; href: string }[];
}

export interface RatesData {
  lastUpdated: string;
  isAutoMode: boolean;
  rates: {
    gold24k: number;
    gold22k: number;
    silver: number;
    petrolBlr: number;
    dieselBlr: number;
    usdInr: number;
    btcUsd: number;
  };
  cityFuel: {
    bengaluru: { petrol: number; diesel: number };
    mysuru: { petrol: number; diesel: number };
    mangaluru: { petrol: number; diesel: number };
    hubballi: { petrol: number; diesel: number };
    mumbai: { petrol: number; diesel: number };
    delhi: { petrol: number; diesel: number };
  };
  krushiRates: KrushiRate[];
  dinasiRates: DinasiRate[];
  announcement: {
    enabled: boolean;
    textEn: string;
    textKn: string;
  };
  todayVisitorsCount: number;
}

export interface AdminSettings {
  username: string;
  passcode: string;
  isAutoSync: boolean;
  manualRates: Partial<RatesData['rates']>;
  cityFuelOverrides?: Partial<RatesData['cityFuel']>;
  announcement: RatesData['announcement'];
  adsensePublisherId?: string;
  goldApiKey?: string;
  telegramGroupUrl?: string;
  whatsappGroupUrl?: string;
  youtubeGroupUrl?: string;
  facebookGroupUrl?: string;
  instagramGroupUrl?: string;
  heroConfig?: HeroConfig;
  customAppCards?: AppItem[];
  customCategories?: CategoryCard[];
}
