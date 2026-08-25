export type SupportedLanguage = 'kn' | 'en';

export interface Dictionary {
  siteTitle: string;
  siteSubTitle: string;
  tickerLabel: string;
  gold24k: string;
  gold22k: string;
  silver1kg: string;
  petrol: string;
  diesel: string;
  usdInr: string;
  navHome: string;
  navEmi: string;
  navAge: string;
  navGst: string;
  navSip: string;
  navTax: string;
  navBlogs: string;
  navAdmin: string;
  language: string;
  privacyPolicy: string;
  termsConditions: string;
  disclaimer: string;
  aboutUs: string;
  contactUs: string;
  quickLinks: string;
  legalLinks: string;
  footerDisclaimer: string;
  allRightsReserved: string;
  pushNoticeTitle: string;
  pushNoticeDesc: string;
  allowAlerts: string;
  maybeLater: string;
  blogHeading: string;
  blogSub: string;
  searchBlog: string;
  readMore: string;
  publishedOn: string;
  authorLabel: string;
  shareArticle: string;
  noBlogsFound: string;
  invalidPasscode: string;
  enterPasscode: string;
  savedSuccess: string;
  adminHeading: string;
  adminSubTitle: string;
  passcodeLabel: string;
  unlockAdmin: string;
  saveChanges: string;
  passcodePlaceholder: string;
  loginBtn: string;
  adminDashboardTitle: string;
  adminSub: string;
  todayVisitors: string;
  autoSyncToggle: string;
  autoSyncDesc: string;
  manualOverrideTitle: string;
  announcementNoticeTitle: string;
  blogPublisherTitle: string;
  adsenseConfigTitle: string;
  saveAllSettings: string;
  announcementSettings: string;
  enableNotice: string;
  noticeTextKn: string;
  noticeTextEn: string;
  adsenseSettings: string;
  publisherId: string;
  manageBlogPosts: string;
  addPost: string;
  titleKnLabel: string;
  titleEnLabel: string;
  excerptKnLabel: string;
  excerptEnLabel: string;
  contentKnLabel: string;
  contentEnLabel: string;
  categoryKnLabel: string;
  categoryEnLabel: string;
  publishAction: string;
  publishedBadge: string;
  draftBadge: string;
  editAction: string;
  deleteAction: string;
  actionsLabel: string;
  announcementTextKn: string;
  announcementTextEn: string;
  noPostsYet: string;
  savePost: string;
  cancel: string;
  adsensePublisherIdLabel: string;
  adsenseAutoAdsDesc: string;
  saveSettingsBtn: string;
  editBlogModalTitle: string;
  createBlogModalTitle: string;
  changePasscodeLabel: string;
  changePasscodePlaceholder: string;
  blogManagerTitle: string;
  addBlogBtn: string;
  blogTitleKn: string;
  blogTitleEn: string;
  blogCategoryKn: string;
  blogCategoryEn: string;
  blogExcerptKn: string;
  blogExcerptEn: string;
  blogContentKn: string;
  blogContentEn: string;
  blogAuthor: string;
  blogImage: string;
  blogCategory: string;
  publishNow: string;
  ageHeading: string;
  ageSub: string;
  gstHeading: string;
  gstSub: string;
  sipHeading: string;
  sipSub: string;
  taxHeading: string;
  taxSub: string;
  dobLabel: string;
  targetDateLabel: string;
  calculateBtn: string;
  yourExactAge: string;
  years: string;
  months: string;
  days: string;
  nextBirthdayIn: string;
  amountLabel: string;
  gstRateLabel: string;
  exclusiveGst: string;
  inclusiveGst: string;
  netAmount: string;
  gstAmount: string;
  totalAmount: string;
  monthlyInvLabel: string;
  expectedReturnLabel: string;
  timePeriodLabel: string;
  investedAmount: string;
  estReturns: string;
  totalValue: string;
  annualIncomeLabel: string;
  oldRegimeTax: string;
  newRegimeTax: string;
  taxSavings: string;
  yourAgeIs: string;
  year: string;
  month: string;
  totalMonths: string;
  totalWeeks: string;
  totalDays: string;
  totalHours: string;
  totalMinutes: string;
  nextBirthdayCountdown: string;
  totalDaysLived: string;
  summaryTimeline: string;
  totalMonthsLived: string;
  totalHoursLived: string;
  principalAmount: string;
  totalInterest: string;
  emiHeading: string;
  emiSub: string;
  loanAmountLabel: string;
  interestRateLabel: string;
  tenureLabel: string;
  monthlyEmi: string;
  totalPayment: string;
  loanAmount: string;
  interestRate: string;
  tenureYears: string;
  loanTenure: string;
  totalAmountGst: string;
  originalAmount: string;
  taxAmountGst: string;
  estimatedReturn: string;
  annualTaxableIncome: string;
  recommendedRegime: string;
  oldTaxRegime: string;
  newTaxRegime: string;
  cgst: string;
  sgst: string;
  liveRatesHeading: string;
  liveRatesSub: string;
  liveAutoSynced: string;
  manualOverrideActive: string;
  lastUpdated: string;
  cityGoldPrices: string;
  cityFuelPrices: string;
  autoSyncBadge: string;
  manualOverrideBadge: string;
  bengaluru: string;
  mysuru: string;
  mangaluru: string;
  hubballi: string;
  mumbai: string;
  delhi: string;
  monthlyInvestment: string;
  expectedReturnRate: string;
  investmentPeriod: string;
  annualIncome: string;
  taxableIncome: string;
  oldTax: string;
  newTax: string;
  expectedReturn: string;
  timePeriod: string;
  newRegime: string;
  oldRegime: string;
  savesYou: string;
  standardDeduction: string;
  taxableAmount: string;
  estimatedTax: string;
  taxPayable: string;
}

export const dictionaries: Record<SupportedLanguage, Dictionary> = {
  kn: {
    siteTitle: 'ಮಾಹಿತಿ ಚಕ್ರ ಡಿಜಿಟಲ್ ಪೋರ್ಟಲ್',
    siteSubTitle: 'ಕರ್ನಾಟಕದ #1 ಉಚಿತ ದೈನಂದಿನ ದರಗಳು, ಫೋಟೋ ರೆಸೈಜರ್ & ಫೈನಾನ್ಸ್ ಕ್ಯಾಲ್ಕುಲೇಟರ್ ಪೋರ್ಟಲ್',
    tickerLabel: 'ಇಂದಿನ ಪ್ರಮುಖ ದರಗಳು',
    gold24k: '24K ಚಿನ್ನ (10ಗ್ರಾಂ)',
    gold22k: '22K ಚಿನ್ನ (10ಗ್ರಾಂ)',
    silver1kg: 'ಬೆಳ್ಳಿ (1ಕೆಜಿ)',
    petrol: 'ಪೆಟ್ರೋಲ್',
    diesel: 'ಡೀಸೆಲ್',
    usdInr: 'USD/INR ದರ',
    navHome: 'ಮುಖಪುಟ',
    navEmi: 'EMI ಕ್ಯಾಲ್ಕುಲೇಟರ್',
    navAge: 'ವಯಸ್ಸಿನ ಕ್ಯಾಲ್ಕುಲೇಟರ್',
    navGst: 'GST ಕ್ಯಾಲ್ಕುಲೇಟರ್',
    navSip: 'SIP ಕ್ಯಾಲ್ಕುಲೇಟರ್',
    navTax: 'ತೆರಿಗೆ ಕ್ಯಾಲ್ಕುಲೇಟರ್',
    navBlogs: 'ಮಾಹಿತಿ ಲೇಖನಗಳು',
    navAdmin: 'ಅಡ್ಮಿನ್ ಲಾಗಿನ್',
    language: 'ಕನ್ನಡ',
    privacyPolicy: 'ಗೌಪ್ಯತಾ ನೀತಿ (Privacy Policy)',
    termsConditions: 'ನಿಯಮಗಳು (Terms & Conditions)',
    disclaimer: 'ಹಕ್ಕುತ್ಯಾಗ (Disclaimer)',
    aboutUs: 'ನಮ್ಮ ಬಗ್ಗೆ (About Us)',
    contactUs: 'ಸಂಪರ್ಕಿಸಿ (Contact Us)',
    quickLinks: 'ಕ್ವಿಕ್ ಲಿಂಕ್‌ಗಳು',
    legalLinks: 'ಆಡ್‌ಸೈನ್ಸ್ ಲೀಗಲ್ ಪುಟಗಳು',
    footerDisclaimer: 'ಗಮನಿಸಿ: ಇಲ್ಲಿ ತೋರಿಸಲಾದ ದರಗಳು ಮಾರುಕಟ್ಟೆ ಮಾಹಿತಿಗಾಗಿ ಮಾತ್ರ. ಅಧಿಕೃತ ಖರೀದಿಗೆ ಸ್ಥಳೀಯ ಮಾರುಕಟ್ಟೆ ಪರಿಶೀಲಿಸಿ.',
    allRightsReserved: 'ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ. Mahiti Chakra Enterprise Portal',
    pushNoticeTitle: '🔔 ಲೈವ್ ದರಗಳ ಉಚಿತ ನೋಟಿಫಿಕೇಶನ್‌ಗಳು!',
    pushNoticeDesc: 'ಚಿನ್ನ, ಬೆಳ್ಳಿ ಮತ್ತು ಪೆಟ್ರೋಲ್ ದರ ಬದಲಾದಾಗ ಉಚಿತ ನೋಟಿಫಿಕೇಶನ್ ಪಡೆಯಿರಿ',
    allowAlerts: 'ಅನುಮತಿಸಿ (Allow Alerts)',
    maybeLater: 'ನಂತರ (Later)',
    blogHeading: 'ಜ್ಞಾನ ಮತ್ತು ದೈನಂದಿನ ಸುದ್ದಿ ಲೇಖನಗಳು',
    blogSub: 'ಚಿನ್ನದ ಹೂಡಿಕೆ, ಕೃಷಿ ಮಾರುಕಟ್ಟೆ, ತೆರಿಗೆ ಉಳಿತಾಯ ಮತ್ತು ಫೈನಾನ್ಸ್ ಸಲಹೆಗಳು',
    searchBlog: 'ಬ್ಲಾಗ್ ಲೇಖನಗಳನ್ನು ಹುಡುಕಿ (ಉದಾ: ಚಿನ್ನ, ಅಡಿಕೆ)...',
    readMore: 'ಸಂಪೂರ್ಣ ಓದಿ',
    publishedOn: 'ಪ್ರಕಟವಾದ ದಿನಾಂಕ',
    authorLabel: 'ಲೇಖಕರು',
    shareArticle: 'ಲೇಖನ ಶೇರ್ ಮಾಡಿ',
    noBlogsFound: 'ಯಾವುದೇ ಲೇಖನಗಳು ಕಂಡುಬಂದಿಲ್ಲ.',
    invalidPasscode: 'ತಪ್ಪಾದ ಪಾಸ್‌ಕೋಡ್! ದಯವಿಟ್ಟು ಸರಿಯಾದ ಪಾಸ್‌ಕೋಡ್ ನಮೂದಿಸಿ.',
    enterPasscode: 'ಅಡ್ಮಿನ್ ಪಾಸ್‌ಕೋಡ್ ನಮೂದಿಸಿ',
    savedSuccess: 'ಬದಲಾವಣೆಗಳನ್ನು ಸಫಲವಾಗಿ ಉಳಿಸಲಾಗಿದೆ!',
    adminHeading: 'ಅಡ್ಮಿನ್ ಲಾಗಿನ್ ಪೋರ್ಟಲ್',
    adminSubTitle: 'ದರಗಳ ಬದಲಾವಣೆ, ಆಡ್‌ಸೈನ್ಸ್ ಐಡಿ, ಬ್ಲಾಗ್ ಪಬ್ಲಿಷಿಂಗ್ ಮತ್ತು ಸಿಸ್ಟಮ್ ಕಂಟ್ರೋಲ್',
    passcodeLabel: 'ಅಡ್ಮಿನ್ ಪಾಸ್‌ವರ್ಡ್',
    unlockAdmin: 'ಲಾಗಿನ್ ಮಾಡಿ',
    saveChanges: 'ಬದಲಾವಣೆಗಳನ್ನು ಉಳಿಸಿ',
    passcodePlaceholder: 'ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ',
    loginBtn: 'ಅಡ್ಮಿನ್‌ಗೆ ಲಾಗಿನ್ ಮಾಡಿ',
    adminDashboardTitle: 'ಮಾಸ್ಟರ್ ಅಡ್ಮಿನ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
    adminSub: 'ದರಗಳ ಮ್ಯಾನುಯಲ್ ಬದಲಾವಣೆ, ಆಡ್‌ಸೈನ್ಸ್ ಐಡಿ, ಬ್ಲಾಗ್ ಮ್ಯಾನೇಜರ್',
    todayVisitors: 'ಇಂದಿನ ವಿಸಿಟರ್‌ಗಳ ಸಂಖ್ಯೆ',
    autoSyncToggle: 'ಲೈವ್ ಆಟೋ-ಸಿಂಕ್',
    autoSyncDesc: 'ಆಟೋಮ್ಯಾಟಿಕ್ ಮಾರುಕಟ್ಟೆ ಸಿಂಕ್ ಮತ್ತು ಮ್ಯಾನುಯಲ್ ಚೇಂಜ್ ಮೋಡ್',
    manualOverrideTitle: 'ದರಗಳ ಮ್ಯಾನುಯಲ್ ಬದಲಾವಣೆ (Manual Rate Override)',
    announcementNoticeTitle: 'ಹೋಮ್ ಪೇಜ್ ಅನೌನ್ಸ್‌ಮೆಂಟ್ ನೋಟಿಸ್',
    blogPublisherTitle: 'ಬ್ಲಾಗ್ ಲೇಖನಗಳ ಪಬ್ಲಿಷರ್',
    adsenseConfigTitle: 'Google AdSense Publisher ID ಕಾನ್ಫಿಗರೇಷನ್',
    saveAllSettings: 'ಎಲ್ಲಾ ಬದಲಾವಣೆಗಳನ್ನು ಉಳಿಸಿ',
    announcementSettings: 'ಅನೌನ್ಸ್‌ಮೆಂಟ್ ಪ್ರಕಟಣೆ ಸೆಟ್ಟಿಂಗ್ಸ್',
    enableNotice: 'ನೋಟಿಸ್ ಸಕ್ರಿಯಗೊಳಿಸಿ',
    noticeTextKn: 'ಕನ್ನಡ ನೋಟಿಸ್ ಪಠ್ಯ',
    noticeTextEn: 'ಇಂಗ್ಲಿಷ್ ನೋಟಿಸ್ ಪಠ್ಯ',
    adsenseSettings: 'Google AdSense ಜಾಹೀರಾತು ಸೆಟ್ಟಿಂಗ್ಸ್',
    publisherId: 'AdSense Publisher ID (pub-xxxxxxxxxxxxxx)',
    manageBlogPosts: 'ಬ್ಲಾಗ್ ಲೇಖನಗಳ ಮ್ಯಾನೇಜರ್',
    addPost: 'ಹೊಸ ಲೇಖನ ಸೇರಿಸಿ',
    titleKnLabel: 'ಕನ್ನಡ ಶೀರ್ಷಿಕೆ',
    titleEnLabel: 'ಇಂಗ್ಲಿಷ್ ಶೀರ್ಷಿಕೆ',
    excerptKnLabel: 'ಕನ್ನಡ ಸಾರಾಂಶ (Excerpt)',
    excerptEnLabel: 'ಇಂಗ್ಲಿಷ್ ಸಾರಾಂಶ (Excerpt)',
    contentKnLabel: 'ಕನ್ನಡ ಸಂಪೂರ್ಣ ಪಠ್ಯ (Content)',
    contentEnLabel: 'ಇಂಗ್ಲಿಷ್ ಸಂಪೂರ್ಣ ಪಠ್ಯ (Content)',
    categoryKnLabel: 'ಕನ್ನಡ ವಿಭಾಗ',
    categoryEnLabel: 'ಇಂಗ್ಲಿಷ್ ವಿಭಾಗ',
    publishAction: 'ಪ್ರಕಟಿಸಿ',
    publishedBadge: 'ಪ್ರಕಟಿಸಲಾಗಿದೆ',
    draftBadge: 'ಡ್ರಾಫ್ಟ್',
    editAction: 'ಎಡಿಟ್ ಮಾಡಿ',
    deleteAction: 'ಡಿಲೀಟ್ ಮಾಡಿ',
    actionsLabel: 'ಕ್ರಿಯೆಗಳು',
    announcementTextKn: 'ಕನ್ನಡ ಅನೌನ್ಸ್‌ಮೆಂಟ್ ಪಠ್ಯ',
    announcementTextEn: 'ಇಂಗ್ಲಿಷ್ ಅನೌನ್ಸ್‌ಮೆಂಟ್ ಪಠ್ಯ',
    noPostsYet: 'ಇನ್ನೂ ಯಾವುದೇ ಬ್ಲಾಗ್ ಪೋಸ್ಟ್‌ಗಳು ಪ್ರಕಟವಾಗಿಲ್ಲ.',
    savePost: 'ಲೇಖನ ಪ್ರಕಟಿಸಿ',
    cancel: 'ರದ್ದುಗೊಳಿಸಿ',
    adsensePublisherIdLabel: 'Google AdSense Publisher ID (pub-xxxxxxxxxxxxxx)',
    adsenseAutoAdsDesc: 'AdSense ಆಟೋ-ಆಡ್ಸ್ ಕೋಡ್ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಆಕ್ಟಿವೇಟ್ ಆಗುತ್ತದೆ',
    saveSettingsBtn: 'ಎಲ್ಲಾ ಸೆಟ್ಟಿಂಗ್ಸ್ ಉಳಿಸಿ',
    editBlogModalTitle: 'ಬ್ಲಾಗ್ ಲೇಖನ ಎಡಿಟ್ ಮಾಡಿ',
    createBlogModalTitle: 'ಹೊಸ ಬ್ಲಾಗ್ ಲೇಖನ ಬರೆಯಿರಿ',
    changePasscodeLabel: 'ಅಡ್ಮಿನ್ ಪಾಸ್‌ಕೋಡ್ ಬದಲಾಯಿಸಿ',
    changePasscodePlaceholder: 'ಹೊಸ 4-ಅಂಕಿ ಪಾಸ್‌ಕೋಡ್',
    blogManagerTitle: 'ಬ್ಲಾಗ್ ಲೇಖನಗಳ ಮ್ಯಾನೇಜರ್',
    addBlogBtn: 'ಹೊಸ ಲೇಖನ ಬರೆಯಿರಿ',
    blogTitleKn: 'ಕನ್ನಡ ಶೀರ್ಷಿಕೆ',
    blogTitleEn: 'ಇಂಗ್ಲಿಷ್ ಶೀರ್ಷಿಕೆ',
    blogCategoryKn: 'ಕನ್ನಡ ವಿಭಾಗ',
    blogCategoryEn: 'ಇಂಗ್ಲಿಷ್ ವಿಭಾಗ',
    blogExcerptKn: 'ಕನ್ನಡ ಸಾರಾಂಶ',
    blogExcerptEn: 'ಇಂಗ್ಲಿಷ್ ಸಾರಾಂಶ',
    blogContentKn: 'ಕನ್ನಡ ಸಂಪೂರ್ಣ ಲೇಖನ',
    blogContentEn: 'ಇಂಗ್ಲಿಷ್ ಸಂಪೂರ್ಣ ಲೇಖನ',
    blogAuthor: 'ಲೇಖಕರ ಹೆಸರು',
    blogImage: 'ಲೇಖನದ ಇಮೇಜ್ (URL)',
    blogCategory: 'ಲೇಖನದ ವಿಭಾಗ',
    publishNow: 'ಈಗಲೇ ಪ್ರಕಟಿಸಿ',
    ageHeading: 'ನಿಖರ ವಯಸ್ಸಿನ ಕ್ಯಾಲ್ಕುಲೇಟರ್',
    ageSub: 'ನಿಮ್ಮ ನಿಖರ ವರ್ಷ, ತಿಂಗಳು, ದಿನಗಳು ಮತ್ತು ಮುಂದಿನ ಜನ್ಮದಿನದ ಲೆಕ್ಕಾಚಾರ ಮಾಡಿ',
    gstHeading: 'GST ಕ್ಯಾಲ್ಕುಲೇಟರ್',
    gstSub: '5%, 12%, 18%, 28% GST ಸುಲಭವಾಗಿ ಲೆಕ್ಕ ಮಾಡಿ',
    sipHeading: 'SIP ಹೂಡಿಕೆ ಕ್ಯಾಲ್ಕುಲೇಟರ್',
    sipSub: 'ನಿಮ್ಮ ಮ್ಯೂಚುಯಲ್ ಫಂಡ್ ಹೂಡಿಕೆಯ ಭವಿಷ್ಯದ ಮೌಲ್ಯ ಲೆಕ್ಕಾಚಾರ ಮಾಡಿ',
    taxHeading: 'ಆದಾಯ ತೆರಿಗೆ ಕ್ಯಾಲ್ಕುಲೇಟರ್',
    taxSub: 'ಹೊಸ ಮತ್ತು ಹಳೆಯ ಟ್ಯಾಕ್ಸ್ ರೆಜಿಮ್ ಹೋಲಿಕೆ ಮಾಡಿ ಲೆಕ್ಕ ಹಾಕಿ',
    dobLabel: 'ಹುಟ್ಟಿದ ದಿನಾಂಕ (Date of Birth)',
    targetDateLabel: 'ಆಯ್ಕೆಯ ದಿನಾಂಕದವರೆಗೆ',
    calculateBtn: 'ಲೆಕ್ಕಾಚಾರ ಮಾಡಿ',
    yourExactAge: 'ನಿಮ್ಮ ನಿಖರ ವಯಸ್ಸು',
    years: 'ವರ್ಷಗಳು',
    months: 'ತಿಂಗಳುಗಳು',
    days: 'ದಿನಗಳು',
    nextBirthdayIn: 'ಮುಂದಿನ ಜನ್ಮದಿನಕ್ಕೆ ಬಾಕಿ',
    amountLabel: 'ಮೊತ್ತ (Amount ₹)',
    gstRateLabel: 'GST ದರ (%)',
    exclusiveGst: 'GST ಹೊರತುಪಡಿಸಿ (Exclusive)',
    inclusiveGst: 'GST ಸೇರ್ಪಡೆಗೊಳಿಸಿ (Inclusive)',
    netAmount: 'ಮೂಲ ಮೊತ್ತ',
    gstAmount: 'GST ಮೊತ್ತ',
    totalAmount: 'ಒಟ್ಟು ಮೊತ್ತ',
    monthlyInvLabel: 'ಮಾಸಿಕ SIP ಹೂಡಿಕೆ (₹)',
    expectedReturnLabel: 'ನಿರೀಕ್ಷಿತ ವಾರ್ಷಿಕ ರಿಟರ್ನ್ (%)',
    timePeriodLabel: 'ಹೂಡಿಕೆಯ ಅವಧಿ (ವರ್ಷಗಳು)',
    investedAmount: 'ಒಟ್ಟು ಹೂಡಿಕೆ ಮೊತ್ತ',
    estReturns: 'ಅಂದಾಜು ಗಳಿಸಿದ ರಿಟರ್ನ್ಸ್',
    totalValue: 'ಒಟ್ಟು ಅಂದಾಜು ಮೌಲ್ಯ',
    annualIncomeLabel: 'ವಾರ್ಷಿಕ ಆದಾಯ (₹)',
    oldRegimeTax: 'ಹಳೆಯ ತೆರಿಗೆ ವಿಧಾನ (Old Tax)',
    newRegimeTax: 'ಹೊಸ ತೆರಿಗೆ ವಿಧಾನ (New Tax)',
    taxSavings: 'ನಿಮ್ಮ ತೆರಿಗೆ ಉಳಿತಾಯ',
    yourAgeIs: 'ನಿಮ್ಮ ಪ್ರಸ್ತುತ ನಿಖರ ವಯಸ್ಸು',
    year: 'ವರ್ಷ',
    month: 'ತಿಂಗಳು',
    totalMonths: 'ಒಟ್ಟು ತಿಂಗಳುಗಳು',
    totalWeeks: 'ಒಟ್ಟು ವಾರಗಳು',
    totalDays: 'ಒಟ್ಟು ದಿನಗಳು',
    totalHours: 'ಒಟ್ಟು ಗಂಟೆಗಳು',
    totalMinutes: 'ಒಟ್ಟು ನಿಮಿಷಗಳು',
    nextBirthdayCountdown: 'ಮುಂದಿನ ಬರ್ತ್‌ಡೇಗೆ ದಿನಗಳ ಕೌಂಟ್‌ಡೌನ್',
    totalDaysLived: 'ನೀವು ಬದುಕಿದ ಒಟ್ಟು ದಿನಗಳು',
    summaryTimeline: 'ಜೀವನದ ಸಾರಾಂಶ ಟೈಮ್‌ಲೈನ್',
    totalMonthsLived: 'ಒಟ್ಟು ತಿಂಗಳುಗಳು',
    totalHoursLived: 'ಒಟ್ಟು ಗಂಟೆಗಳು',
    principalAmount: 'ಮೂಲ ಸಾಲದ ಮೊತ್ತ (Principal Amount)',
    totalInterest: 'ಒಟ್ಟು ಬಡ್ಡಿ (Total Interest)',
    emiHeading: 'ಸ್ಮಾರ್ಟ್ ಲೋನ್ EMI ಕ್ಯಾಲ್ಕುಲೇಟರ್',
    emiSub: 'ಗೃಹ, ವಾಹನ ಮತ್ತು ವೈಯಕ್ತಿಕ ಸಾಲಗಳ ತಿಂಗಳ ಇಎಂಐ ಲೆಕ್ಕಾಚಾರ ಮಾಡಿ',
    loanAmountLabel: 'ಸಾಲದ ಮೊತ್ತ (Loan Amount ₹)',
    interestRateLabel: 'ವಾರ್ಷಿಕ ಬಡ್ಡಿದರ (%)',
    tenureLabel: 'ಸಾಲದ ಅವಧಿ (ವರ್ಷಗಳು)',
    monthlyEmi: 'ಮಾಸಿಕ EMI',
    totalPayment: 'ಒಟ್ಟು ಪಾವತಿಸಬೇಕಾದ ಮೊತ್ತ',
    loanAmount: 'ಸಾಲದ ಮೊತ್ತ (Loan Amount)',
    interestRate: 'ವಾರ್ಷಿಕ ಬಡ್ಡಿದರ (%)',
    tenureYears: 'ಸಾಲದ ಅವಧಿ (ವರ್ಷಗಳು)',
    loanTenure: 'ಸಾಲದ ಅವಧಿ (Loan Tenure)',
    totalAmountGst: 'ಒಟ್ಟು GST ಮೊತ್ತ',
    originalAmount: 'ಮೂಲ ಮೊತ್ತ (Net Amount)',
    taxAmountGst: 'GST ತೆರಿಗೆ ಮೊತ್ತ',
    estimatedReturn: 'ಅಂದಾಜು ರಿಟರ್ನ್ಸ್ (Est Returns)',
    annualTaxableIncome: 'ವಾರ್ಷಿಕ ತೆರಿಗೆ ಆದಾಯ',
    recommendedRegime: 'ಶಿಫಾರಸು ಮಾಡಿದ ಟ್ಯಾಕ್ಸ್ ರೆಜಿಮ್',
    oldTaxRegime: 'ಹಳೆಯ ತೆರಿಗೆ ವಿಧಾನ',
    newTaxRegime: 'ಹೊಸ ತೆರಿಗೆ ವಿಧಾನ',
    cgst: 'CGST (ಕೇಂದ್ರ)',
    sgst: 'SGST (ರಾಜ್ಯ)',
    liveRatesHeading: 'ಕರ್ನಾಟಕದ ಲೈವ್ ಮಾರುಕಟ್ಟೆ ದರಗಳು',
    liveRatesSub: 'ದೈನಂದಿನ ಉಚಿತ ಚಿನ್ನ, ಬೆಳ್ಳಿ ಮತ್ತು ಪೆಟ್ರೋಲ್/ಡೀಸೆಲ್ ಲೈವ್ ದರಗಳು',
    liveAutoSynced: 'ಆಟೋ ಸಿಂಕ್ ಸಕ್ರಿಯವಾಗಿದೆ',
    manualOverrideActive: 'ಮ್ಯಾನುಯಲ್ ಚೇಂಜ್ ಮೋಡ್',
    lastUpdated: 'ಕೊನೆಯದಾಗಿ ನವೀಕರಿಸಲಾಗಿದೆ',
    cityGoldPrices: 'ಪ್ರಮುಖ ನಗರಗಳ ಚಿನ್ನದ ದರ (10ಗ್ರಾಂ 24K)',
    cityFuelPrices: 'ಕರ್ನಾಟಕದ ನಗರಗಳ ಇಂಧನ ದರಗಳು (ಲೀಟರ್‌ಗೆ)',
    autoSyncBadge: 'ಆಟೋ ಸಿಂಕ್',
    manualOverrideBadge: 'ಮ್ಯಾನುಯಲ್ ಮೋಡ್',
    bengaluru: 'ಬೆಂಗಳೂರು',
    mysuru: 'ಮೈಸೂರು',
    mangaluru: 'ಮಂಗಳೂರು',
    hubballi: 'ಹುಬ್ಬಳ್ಳಿ',
    mumbai: 'ಮುಂಬೈ',
    delhi: 'ದೆಹಲಿ',
    monthlyInvestment: 'ಮಾಸಿಕ SIP ಹೂಡಿಕೆ (Monthly SIP)',
    expectedReturnRate: 'ನಿರೀಕ್ಷಿತ ವಾರ್ಷಿಕ ರಿಟರ್ನ್ (%)',
    investmentPeriod: 'ಹೂಡಿಕೆಯ ಅವಧಿ (ವರ್ಷಗಳು)',
    annualIncome: 'ವಾರ್ಷಿಕ ಆದಾಯ (Annual Income ₹)',
    taxableIncome: 'ತೆರಿಗೆಗೆ ಒಳಪಡುವ ಆದಾಯ',
    oldTax: 'ಹಳೆಯ ತೆರಿಗೆ ವಿಧಾನದ ತೆರಿಗೆ',
    newTax: 'ಹೊಸ ತೆರಿಗೆ ವಿಧಾನದ ತೆರಿಗೆ',
    expectedReturn: 'ನಿರೀಕ್ಷಿತ ವಾರ್ಷಿಕ ರಿಟರ್ನ್ (%)',
    timePeriod: 'ಹೂಡಿಕೆಯ ಅವಧಿ (ವರ್ಷಗಳು)',
    newRegime: 'ಹೊಸ ತೆರಿಗೆ ವಿಧಾನ (New Regime)',
    oldRegime: 'ಹಳೆಯ ತೆರಿಗೆ ವಿಧಾನ (Old Regime)',
    savesYou: 'ನಿಮ್ಮ ತೆರಿಗೆ ಉಳಿತಾಯ ಮೊತ್ತ',
    standardDeduction: 'ಸ್ಟ್ಯಾಂಡರ್ಡ್ ಕಡಿತ (Standard Deduction)',
    taxableAmount: 'ತೆರಿಗೆಗೆ ಒಳಪಡುವ ಮೊತ್ತ (Taxable Income)',
    estimatedTax: 'ಅಂದಾಜು ಪಾವತಿಸಬೇಕಾದ ತೆರಿಗೆ',
    taxPayable: 'ಒಟ್ಟು ಪಾವತಿಸಬೇಕಾದ ತೆರಿಗೆ',
  },
  en: {
    siteTitle: 'Mahiti Chakra Digital Portal',
    siteSubTitle: 'Karnataka\'s #1 Free Daily Rates, Photo Resizer & Financial Calculators Portal',
    tickerLabel: 'TODAY LIVE RATES',
    gold24k: '24K Gold (10g)',
    gold22k: '22K Gold (10g)',
    silver1kg: 'Silver (1kg)',
    petrol: 'Petrol',
    diesel: 'Diesel',
    usdInr: 'USD/INR Rate',
    navHome: 'Home',
    navEmi: 'EMI Calculator',
    navAge: 'Age Calculator',
    navGst: 'GST Calculator',
    navSip: 'SIP Calculator',
    navTax: 'Tax Calculator',
    navBlogs: 'Articles & Blogs',
    navAdmin: 'Admin Control',
    language: 'English',
    privacyPolicy: 'Privacy Policy',
    termsConditions: 'Terms & Conditions',
    disclaimer: 'Disclaimer',
    aboutUs: 'About Us',
    contactUs: 'Contact Us',
    quickLinks: 'Quick Tools',
    legalLinks: 'Legal Pages',
    footerDisclaimer: 'Note: Prices shown are for informational purposes only. Verify with local markets before purchasing.',
    allRightsReserved: 'All rights reserved. Mahiti Chakra Enterprise Portal',
    pushNoticeTitle: '🔔 Free Daily Rate Alerts!',
    pushNoticeDesc: 'Get instant free mobile alerts when Gold, Silver, and Fuel rates change',
    allowAlerts: 'Allow Alerts',
    maybeLater: 'Maybe Later',
    blogHeading: 'Knowledge & Daily Market Articles',
    blogSub: 'Gold investment guides, Krushi market tips, and personal finance advice',
    searchBlog: 'Search articles (e.g. Gold, Arecanut)...',
    readMore: 'Read Article',
    publishedOn: 'Published Date',
    authorLabel: 'Author',
    shareArticle: 'Share Article',
    noBlogsFound: 'No articles found matching your search.',
    invalidPasscode: 'Invalid passcode! Please enter correct passcode.',
    enterPasscode: 'Enter Admin Passcode',
    savedSuccess: 'Settings & Overrides saved successfully!',
    adminHeading: 'Master Admin Portal',
    adminSubTitle: 'Manual rate overrides, AdSense ID, blog publishing and full system control',
    passcodeLabel: 'Admin Password',
    unlockAdmin: 'Unlock Admin',
    saveChanges: 'Save All Changes',
    passcodePlaceholder: 'Enter Password',
    loginBtn: 'Login to Admin',
    adminDashboardTitle: 'Master Admin Dashboard',
    adminSub: 'Manual Rate Overrides, AdSense ID, Blog Manager & Settings',
    todayVisitors: 'Today Visitors Tracker',
    autoSyncToggle: 'Live Auto-Sync Mode',
    autoSyncDesc: 'Toggle between live API sync and manual override mode',
    manualOverrideTitle: 'Manual Rate Overrides',
    announcementNoticeTitle: 'Homepage Announcement Notice',
    blogPublisherTitle: 'Blog Article Manager',
    adsenseConfigTitle: 'Google AdSense Publisher ID Configuration',
    saveAllSettings: 'Save All Settings',
    announcementSettings: 'Announcement Notice Settings',
    enableNotice: 'Enable Announcement Notice',
    noticeTextKn: 'Kannada Notice Text',
    noticeTextEn: 'English Notice Text',
    adsenseSettings: 'Google AdSense Ad Settings',
    publisherId: 'AdSense Publisher ID (pub-xxxxxxxxxxxxxx)',
    manageBlogPosts: 'Blog Article Manager',
    addPost: 'Add New Article',
    titleKnLabel: 'Kannada Title',
    titleEnLabel: 'English Title',
    excerptKnLabel: 'Kannada Excerpt',
    excerptEnLabel: 'English Excerpt',
    contentKnLabel: 'Kannada Content',
    contentEnLabel: 'English Content',
    categoryKnLabel: 'Kannada Category',
    categoryEnLabel: 'English Category',
    publishAction: 'Publish Article',
    publishedBadge: 'Published',
    draftBadge: 'Draft',
    editAction: 'Edit',
    deleteAction: 'Delete',
    actionsLabel: 'Actions',
    announcementTextKn: 'Kannada Announcement Text',
    announcementTextEn: 'English Announcement Text',
    noPostsYet: 'No blog posts published yet.',
    savePost: 'Save Article',
    cancel: 'Cancel',
    adsensePublisherIdLabel: 'Google AdSense Publisher ID (pub-xxxxxxxxxxxxxx)',
    adsenseAutoAdsDesc: 'AdSense Auto Ads script will automatically activate across the portal',
    saveSettingsBtn: 'Save Settings',
    editBlogModalTitle: 'Edit Blog Article',
    createBlogModalTitle: 'Create Blog Article',
    changePasscodeLabel: 'Change Admin Passcode',
    changePasscodePlaceholder: 'New 4-digit passcode',
    blogManagerTitle: 'Blog Articles Manager',
    addBlogBtn: 'Write New Article',
    blogTitleKn: 'Kannada Title',
    blogTitleEn: 'English Title',
    blogCategoryKn: 'Kannada Category',
    blogCategoryEn: 'English Category',
    blogExcerptKn: 'Kannada Excerpt',
    blogExcerptEn: 'English Excerpt',
    blogContentKn: 'Kannada Content',
    blogContentEn: 'English Content',
    blogAuthor: 'Author Name',
    blogImage: 'Article Featured Image URL',
    blogCategory: 'Article Category',
    publishNow: 'Publish Now',
    ageHeading: 'Accurate Age Calculator',
    ageSub: 'Calculate your exact age in years, months, days & next birthday',
    gstHeading: 'GST Calculator',
    gstSub: 'Calculate 5%, 12%, 18%, 28% GST easily',
    sipHeading: 'SIP Investment Calculator',
    sipSub: 'Calculate your future mutual fund wealth',
    taxHeading: 'Income Tax Calculator',
    taxSub: 'Compare Old vs New Tax Regimes',
    dobLabel: 'Date of Birth',
    targetDateLabel: 'As of Date',
    calculateBtn: 'Calculate',
    yourExactAge: 'Your Exact Age',
    years: 'Years',
    months: 'Months',
    days: 'Days',
    nextBirthdayIn: 'Next Birthday In',
    amountLabel: 'Amount (₹)',
    gstRateLabel: 'GST Rate (%)',
    exclusiveGst: 'Exclusive GST',
    inclusiveGst: 'Inclusive GST',
    netAmount: 'Net Amount',
    gstAmount: 'GST Amount',
    totalAmount: 'Total Amount',
    monthlyInvLabel: 'Monthly SIP Investment (₹)',
    expectedReturnLabel: 'Expected Annual Return (%)',
    timePeriodLabel: 'Investment Period (Years)',
    investedAmount: 'Total Invested',
    estReturns: 'Estimated Returns',
    totalValue: 'Total Value',
    annualIncomeLabel: 'Annual Income (₹)',
    oldRegimeTax: 'Old Tax Regime',
    newRegimeTax: 'New Tax Regime',
    taxSavings: 'Tax Savings',
    yourAgeIs: 'Your Exact Age Is',
    year: 'Year',
    month: 'Month',
    totalMonths: 'Total Months',
    totalWeeks: 'Total Weeks',
    totalDays: 'Total Days',
    totalHours: 'Total Hours',
    totalMinutes: 'Total Minutes',
    nextBirthdayCountdown: 'Next Birthday Countdown',
    totalDaysLived: 'Total Days Lived',
    summaryTimeline: 'Life Summary Timeline',
    totalMonthsLived: 'Total Months',
    totalHoursLived: 'Total Hours',
    principalAmount: 'Principal Amount',
    totalInterest: 'Total Interest',
    emiHeading: 'Smart Loan EMI Calculator',
    emiSub: 'Calculate Home, Car & Personal Loan Monthly EMI',
    loanAmountLabel: 'Loan Amount (₹)',
    interestRateLabel: 'Annual Interest Rate (%)',
    tenureLabel: 'Loan Tenure (Years)',
    monthlyEmi: 'Monthly EMI',
    totalPayment: 'Total Payable Amount',
    loanAmount: 'Loan Amount',
    interestRate: 'Annual Interest Rate (%)',
    tenureYears: 'Loan Tenure (Years)',
    loanTenure: 'Loan Tenure',
    totalAmountGst: 'Total Amount (Inc GST)',
    originalAmount: 'Net Amount',
    taxAmountGst: 'GST Amount',
    estimatedReturn: 'Estimated Returns',
    annualTaxableIncome: 'Annual Taxable Income',
    recommendedRegime: 'Recommended Tax Regime',
    oldTaxRegime: 'Old Tax Regime',
    newTaxRegime: 'New Tax Regime',
    cgst: 'CGST (Central)',
    sgst: 'SGST (State)',
    liveRatesHeading: 'Karnataka Live Market Rates',
    liveRatesSub: 'Daily Free Gold, Silver, and Fuel Live Prices',
    liveAutoSynced: 'Auto Sync Active',
    manualOverrideActive: 'Manual Mode Active',
    lastUpdated: 'Last Updated',
    cityGoldPrices: 'Gold Prices by Major Cities (10g 24K)',
    cityFuelPrices: 'Fuel Prices by Karnataka Cities (Per Liter)',
    autoSyncBadge: 'Auto Sync',
    manualOverrideBadge: 'Manual Mode',
    bengaluru: 'Bengaluru',
    mysuru: 'Mysuru',
    mangaluru: 'Mangaluru',
    hubballi: 'Hubballi',
    mumbai: 'Mumbai',
    delhi: 'Delhi',
    monthlyInvestment: 'Monthly SIP Investment',
    expectedReturnRate: 'Expected Annual Return (%)',
    investmentPeriod: 'Investment Period (Years)',
    annualIncome: 'Annual Income (₹)',
    taxableIncome: 'Taxable Income',
    oldTax: 'Old Tax Regime Tax',
    newTax: 'New Tax Regime Tax',
    expectedReturn: 'Expected Annual Return (%)',
    timePeriod: 'Investment Period (Years)',
    newRegime: 'New Regime',
    oldRegime: 'Old Regime',
    savesYou: 'Saves You',
    standardDeduction: 'Standard Deduction',
    taxableAmount: 'Taxable Amount',
    estimatedTax: 'Estimated Tax Payable',
    taxPayable: 'Total Tax Payable',
  },
};
