"use client";

import React, { useState, useMemo, useRef } from 'react';
import html2canvas from 'html2canvas';
import { useLanguage } from './LanguageContext';
import {
  Sparkles, Download, Share2, FileText, Building2, User,
  MapPin, Phone, Calendar, CheckCircle2, Copy, RefreshCw,
  Printer, ShieldCheck, HelpCircle, Award, Edit3, Layers, Check
} from 'lucide-react';
import { GovtLetter3D } from './LiveAppIcons3D';

export interface LetterTemplate {
  id: string;
  category: string;
  titleKn: string;
  officerTitle: string;
  officeName: string;
  defaultSubject: string;
  defaultReference: string;
  defaultBody: string;
  defaultEnclosures: string[];
}

const LETTER_TEMPLATES_CATALOG: LetterTemplate[] = [
  // 1. Gram Panchayat Presets
  {
    id: 'gp_water',
    category: 'ಗ್ರಾಮ ಪಂಚಾಯತಿ (Gram Panchayat)',
    titleKn: '💧 ಕುಡಿಯುವ ನೀರಿನ ಪೈಪ್‌ಲೈನ್ / ಕೊಳವೆಬಾವಿ ದುರಸ್ತಿಗೆ ಅರ್ಜಿ',
    officerTitle: 'ಮಾನ್ಯ ಪಂಚಾಯತ್ ಅಭಿವೃದ್ಧಿ ಅಧಿಕಾರಿಗಳು (PDO)',
    officeName: 'ಗ್ರಾಮ ಪಂಚಾಯತಿ ಕಚೇರಿ',
    defaultSubject: 'ಗ್ರಾಮದಲ್ಲಿ ಕುಡಿಯುವ ನೀರಿನ ಕೊಳವೆಬಾವಿ / ಪೈಪ್‌ಲೈನ್ ತಕ್ಷಣ ದುರಸ್ತಿ ಮಾಡಿಕೊಡುವಂತೆ ಕೋರಿ ಮನವಿ.',
    defaultReference: 'ಗ್ರಾಮಸ್ಥರ ಮೌಖಿಕ ಮನವಿ ದಿನಾಂಕ: [ದಿನಾಂಕ]',
    defaultBody: 'ಮೇಲ್ಕಂಡ ವಿಷಯಕ್ಕೆ ಸಂಬಂಧಿಸಿದಂತೆ, ನಾನು ಈ ಗ್ರಾಮದ ನಿವಾಸಿಯಾಗಿದ್ದು, ನಮ್ಮ ಬಡಾವಣೆಯಲ್ಲಿ ಕಳೆದ ಕೆಲವು ದಿನಗಳಿಂದ ಕುಡಿಯುವ ನೀರಿನ ಕೊಳವೆಬಾವಿ/ಪೈಪ್‌ಲೈನ್ ಕೆಟ್ಟುಹೋಗಿದ್ದು, ಗ್ರಾಮಸ್ಥರಿಗೆ ಮತ್ತು ಜಾನುವಾರುಗಳಿಗೆ ಕುಡಿಯುವ ನೀರಿನ ತೀವ್ರ ಅಭಾವ ಉಂಟಾಗಿದೆ.\n\nಈ ಕುರಿತು ಸಾರ್ವಜನಿಕ ಹಿತದೃಷ್ಟಿಯಿಂದ ತಾವುಗಳು ದಯಮಾಡಿ ಸ್ಥಳ ಪರಿಶೀಲನೆ ನಡೆಸಿ, ನೀರು ಸರಬರಾಜು ಪೈಪ್‌ಲೈನ್ ಅನ್ನು ತುರ್ತಾಗಿ ದುರಸ್ತಿಗೊಳಿಸಿ ಕುಡಿಯುವ ನೀರಿನ ವ್ಯವಸ್ಥೆ ಕಲ್ಪಿಸಿಕೊಡಬೇಕಾಗಿ ತಮ್ಮಲ್ಲಿ ಸವಿನಯ ಪ್ರಾರ್ಥನೆ.',
    defaultEnclosures: ['ಅರ್ಜಿದಾರರ ಆಧಾರ್ ಕಾರ್ಡ್ ಜೆರಾಕ್ಸ್', 'ಸಮಸ್ಯೆಯಿರುವ ಜಾಗದ ಫೋಟೋ ಪ್ರತಿ'],
  },
  {
    id: 'gp_road',
    category: 'ಗ್ರಾಮ ಪಂಚಾಯತಿ (Gram Panchayat)',
    titleKn: '🛣️ ರಸ್ತೆ & ಚರಂಡಿ (ಡ್ರೈನೇಜ್) ಸ್ವಚ್ಛತೆ/ನಿರ್ಮಾಣಕ್ಕೆ ಅರ್ಜಿ',
    officerTitle: 'ಮಾನ್ಯ ಪಂಚಾಯತ್ ಅಭಿವೃದ್ಧಿ ಅಧಿಕಾರಿಗಳು (PDO)',
    officeName: 'ಗ್ರಾಮ ಪಂಚಾಯತಿ ಕಚೇರಿ',
    defaultSubject: 'ಗ್ರಾಮದ ಪ್ರಮುಖ ರಸ್ತೆ ಮತ್ತು ಚರಂಡಿ ದುರಸ್ತಿ ಹಾಗೂ ಸ್ವಚ್ಛತೆ ಮಾಡಿಕೊಡುವಂತೆ ಕೋರಿ ಅರ್ಜಿ.',
    defaultReference: 'ಗ್ರಾಮ ಪಂಚಾಯತಿ ನೈರ್ಮಲ್ಯ ಯೋಜನೆಯಡಿ',
    defaultBody: 'ಮೇಲ್ಕಂಡ ವಿಷಯಕ್ಕೆ ಸಂಬಂಧಿಸಿದಂತೆ, ನಮ್ಮ ಗ್ರಾಮದ ಮುಖ್ಯ ರಸ್ತೆ ಹಾಗೂ ಚರಂಡಿಗಳು ಮಳೆ ನೀರಿನಿಂದಾಗಿ ತೀವ್ರ ಹದಗೆಟ್ಟಿದ್ದು, ಕೊಳಚೆ ನೀರು ರಸ್ತೆಯ ಮೇಲೆ ಹರಿಯುತ್ತಿರುವುದರಿಂದ ಸಾರ್ವಜನಿಕರ ಸಂಚಾರಕ್ಕೆ ಮತ್ತು ಶಾಲಾ ಮಕ್ಕಳಿಗೆ ತೀವ್ರ ತೊಂದರೆಯಾಗುತ್ತಿದೆ ಹಾಗೂ ಸಾಂಕ್ರಾಮಿಕ ರೋಗ ಹರಡುವ ಭೀತಿ ಎದುರಾಗಿದೆ.\n\nಆದ್ದರಿಂದ ತಾವುಗಳು ದಯಮಾಡಿ ಸ್ಥಳ ಪರಿಶೀಲಿಸಿ, ಚರಂಡಿ ಹೂಳೆತ್ತುವ ಕಾಮಗಾರಿ ಮತ್ತು ರಸ್ತೆ ದುರಸ್ತಿ ಕಾರ್ಯವನ್ನು ಶೀಘ್ರವಾಗಿ ಕೈಗೊಳ್ಳುವಂತೆ ಸಂಬಂಧಪಟ್ಟ ಸಿಬ್ಬಂದಿಗೆ ಆದೇಶಿಸಬೇಕಾಗಿ ವಿನಂತಿ.',
    defaultEnclosures: ['ಅರ್ಜಿದಾರರ ಆಧಾರ್ ಕಾರ್ಡ್ ಜೆರಾಕ್ಸ್', 'ಗ್ರಾಮಸ್ಥರ ಸಹಿ ಮಾಡಿದ ಮನವಿ ಪಟ್ಟಿ'],
  },
  {
    id: 'gp_form9_11',
    category: 'ಗ್ರಾಮ ಪಂಚಾಯತಿ (Gram Panchayat)',
    titleKn: '🏡 ಇ-ಸ್ವತ್ತು ನಮೂನೆ ೯ ಮತ್ತು ೧೧ (Form 9/11) ಕೋರಿ ಅರ್ಜಿ',
    officerTitle: 'ಮಾನ್ಯ ಪಂಚಾಯತ್ ಅಭಿವೃದ್ಧಿ ಅಧಿಕಾರಿಗಳು (PDO)',
    officeName: 'ಗ್ರಾಮ ಪಂಚಾಯತಿ ಕಚೇರಿ',
    defaultSubject: 'ಗ್ರಾಮ ಠಾಣಾ ವ್ಯಾಪ್ತಿಯ ಸ್ವತ್ತಿಗೆ ಇ-ಸ್ವತ್ತು ನಮೂನೆ ೯ ಮತ್ತು ೧೧ ನೀಡುವಂತೆ ಕೋರಿ ಅರ್ಜಿ.',
    defaultReference: 'ಕರ್ನಾಟಕ ಗ್ರಾಮ ಸ್ವರಾಜ್ ಮತ್ತು ಪಂಚಾಯತ್ ರಾಜ್ ಅಧಿನಿಯಮದಡಿ',
    defaultBody: 'ಮೇಲ್ಕಂಡ ವಿಷಯಕ್ಕೆ ಸಂಬಂಧಿಸಿದಂತೆ, ನಾನು [ಗ್ರಾಮದ ಹೆಸರು] ಗ್ರಾಮದಲ್ಲಿರುವ ಸ್ವತ್ತು ಸಂಖ್ಯೆ: [ಸ್ವತ್ತು ಸಂಖ್ಯೆ] ವಿಸ್ತೀರ್ಣ: [ಅಳತೆ] ಯನ್ನು ನನ್ನ ಸ್ವಂತ ಮಾಲೀಕತ್ವದಲ್ಲಿ ಅನುಭವಿಸಿಕೊಂಡು ಬರುತ್ತಿದ್ದು, ಪಂಚಾಯತಿಗೆ ನಿಯಮಿತವಾಗಿ ಕಂದಾಯ ಪಾವತಿಸುತ್ತಿರುತ್ತೇನೆ.\n\nಸದರಿ ಸ್ವತ್ತಿಗೆ ಸರ್ಕಾರದ ನಿಯಮಾನುಸಾರ ಇ-ಸ್ವತ್ತು (ನಮೂನೆ ೯ ಮತ್ತು ನಮೂನೆ ೧೧) ಪ್ರಮಾಣಪತ್ರವನ್ನು ವಿತರಿಸಿ ಅನುಕೂಲ ಮಾಡಿಕೊಡಬೇಕಾಗಿ ಈ ಮೂಲಕ ತಮ್ಮಲ್ಲಿ ಕೋರುತ್ತೇನೆ.',
    defaultEnclosures: ['ಕ್ರಯಪತ್ರ / ಹಕ್ಕುಪತ್ರ ಜೆರಾಕ್ಸ್', 'ಮನೆ ಕಂದಾಯ ಪಾವತಿಸಿದ ರಶೀದಿ', 'ಅರ್ಜಿದಾರರ ಆಧಾರ್ ಕಾರ್ಡ್'],
  },

  // 2. Tahsildar / Revenue Presets
  {
    id: 'rev_rtc_correction',
    category: 'ಕಂದಾಯ ಇಲಾಖೆ (Tahsildar / Revenue)',
    titleKn: '🌾 ಪಹಣಿ (RTC) ಯಲ್ಲಿ ಹೆಸರು / ವಿಸ್ತೀರ್ಣ ತಿದ್ದುಪಡಿಗೆ ಅರ್ಜಿ',
    officerTitle: 'ಮಾನ್ಯ ತಹಶೀಲ್ದಾರ್ ರವರು',
    officeName: 'ತಾಲೂಕು ಕಚೇರಿ, ಕಂದಾಯ ಇಲಾಖೆ',
    defaultSubject: 'ಪಹಣಿ (RTC) ಕಾಲಂ ನಂ ೯/೧೨ ರಲ್ಲಿ ಹೆಸರು ಮತ್ತು ವಿಸ್ತೀರ್ಣ ತಿದ್ದುಪಡಿ ಮಾಡಿಕೊಡುವಂತೆ ಕೋರಿ ಅರ್ಜಿ.',
    defaultReference: 'ಕರ್ನಾಟಕ ಭೂ ಕಂದಾಯ ಕಾಯ್ದೆ ಕಲಂ ೧೩೬ ರಡಿ',
    defaultBody: 'ಮೇಲ್ಕಂಡ ವಿಷಯಕ್ಕೆ ಸಂಬಂಧಿಸಿದಂತೆ, [ಗ್ರಾಮದ ಹೆಸರು] ಗ್ರಾಮದ ಸರ್ವೆ ನಂ: [ಸರ್ವೆ ನಂ] ಹಿಸ್ಸಾ ನಂ: [ಹಿಸ್ಸಾ ನಂ] ರ [ವಿಸ್ತೀರ್ಣ] ಜಮೀನು ನನ್ನ ಪೂರ್ವಜರಿಂದ ಬಂದ ಪಿತ್ರಾರ್ಜಿತ/ಸ್ವಯಾರ್ಜಿತ ಆಸ್ತಿಯಾಗಿದ್ದು, ಪಹಣಿಯ ಕಾಲಂನಲ್ಲಿ ತಾಂತ್ರಿಕ ದೋಷದಿಂದ ನನ್ನ ಹೆಸರು ತಪ್ಪಾಗಿ ನಮೂದಾಗಿರುತ್ತದೆ.\n\nಆದ್ದರಿಂದ ಮೂಲ ದಾಖಲೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ, ನನ್ನ ಹೆಸರನ್ನು ಪಹಣಿಯಲ್ಲಿ ಸರಿಯಾಗಿ ತಿದ್ದುಪಡಿ ಮಾಡಿ ಹೊಸ ಪಹಣಿ ವಿತರಿಸಲು ಸಂಬಂಧಪಟ್ಟ ರಾಜಸ್ವ ನಿರೀಕ್ಷಕರಿಗೆ (RI) ಮತ್ತು ಗ್ರಾಮ ಆಡಳಿತಾಧಿಕಾರಿಗಳಿಗೆ (VAO) ಸೂಕ್ತ ಆದೇಶ ನೀಡಬೇಕಾಗಿ ಪ್ರಾರ್ಥನೆ.',
    defaultEnclosures: ['ಮೂಲ ಕ್ರಯಪತ್ರ / ಮ್ಯುಟೇಷನ್ ಪ್ರತಿ', 'ಪ್ರಸ್ತುತ ಪಹಣಿ ಜೆರಾಕ್ಸ್', 'ಅರ್ಜಿದಾರರ ಆಧಾರ್ ಕಾರ್ಡ್'],
  },
  {
    id: 'rev_pouthi_khata',
    category: 'ಕಂದಾಯ ಇಲಾಖೆ (Tahsildar / Revenue)',
    titleKn: '📜 ವಾರಸುದಾರರ ಪೌತಿ ಖಾತೆ (ಖಾತೆ ಬದಲಾವಣೆ) ಕೋರಿ ಅರ್ಜಿ',
    officerTitle: 'ಮಾನ್ಯ ತಹಶೀಲ್ದಾರ್ ರವರು',
    officeName: 'ತಾಲೂಕು ಕಚೇರಿ, ಕಂದಾಯ ಇಲಾಖೆ',
    defaultSubject: 'ಮೃತರ ಹೆಸರಿನಲ್ಲಿರುವ ಜಮೀನಿನ ಪೌತಿ ಖಾತೆಯನ್ನು ಕಾನೂನುಬದ್ಧ ವಾರಸುದಾರರ ಹೆಸರಿಗೆ ಬದಲಾಯಿಸಲು ಅರ್ಜಿ.',
    defaultReference: 'ಕರ್ನಾಟಕ ಭೂ ಕಂದಾಯ ನಿಯಮಾವಳಿಗಳಡಿ',
    defaultBody: 'ಮೇಲ್ಕಂಡ ವಿಷಯಕ್ಕೆ ಸಂಬಂಧಿಸಿದಂತೆ, [ಗ್ರಾಮದ ಹೆಸರು] ಗ್ರಾಮದ ಸರ್ವೆ ನಂ: [ಸರ್ವೆ ನಂ] ರ ಜಮೀನಿನ ಮಾಲೀಕರಾದ ನನ್ನ ತಂದೆ/ತಾಯಿ ಶ್ರೀ [ಮೃತರ ಹೆಸರು] ರವರು ದಿನಾಂಕ: [ಮರಣ ದಿನಾಂಕ] ರಂದು ನಿಧನರಾಗಿದ್ದು, ನಾವುಗಳು ಅವರ ಕಾನೂನುಬದ್ಧ ವಾರಸುದಾರರಾಗಿರುತ್ತೇವೆ.\n\nಆದ್ದರಿಂದ ಮೃತರ ಹೆಸರಿನಲ್ಲಿರುವ ಖಾತೆಯನ್ನು ರದ್ದುಪಡಿಸಿ, ಜೀವಂತ ವಾರಸುದಾರರಾದ ನಮ್ಮ ಹೆಸರುಗಳಿಗೆ ಪೌತಿ ಖಾತೆ ಮಂಜೂರು ಮಾಡಿಕೊಡಬೇಕಾಗಿ ವಿನಂತಿ.',
    defaultEnclosures: ['ಮರಣ ಪ್ರಮಾಣಪತ್ರ (Death Certificate)', 'ಕುಟುಂಬದ ವಂಶವೃಕ್ಷ ಪ್ರಮಾಣಪತ್ರ (Family Tree)', 'ಪಹಣಿ & ಆಧಾರ್ ಪ್ರತಿಗಳು'],
  },
  {
    id: 'rev_sandhya_suraksha',
    category: 'ಕಂದಾಯ ಇಲಾಖೆ (Tahsildar / Revenue)',
    titleKn: '👵 ಸಂಧ್ಯಾ ಸುರಕ್ಷಾ / ವೃದ್ಧಾಪ್ಯ ವೇತನ ಮಂಜೂರಾತಿಗೆ ಅರ್ಜಿ',
    officerTitle: 'ಮಾನ್ಯ ತಹಶೀಲ್ದಾರ್ ರವರು',
    officeName: 'ತಾಲೂಕು ಕಚೇರಿ, ಸಮಾಜ ಕಲ್ಯಾಣ & ಪಿಂಚಣಿ ಶಾಖೆ',
    defaultSubject: 'ಸಂಧ್ಯಾ ಸುರಕ್ಷಾ / ವೃದ್ಧಾಪ್ಯ ಮಾಸಾಶನ ಯೋಜನೆಯಡಿ ಪಿಂಚಣಿ ಮಂಜೂರು ಮಾಡುವಂತೆ ಕೋರಿ ಅರ್ಜಿ.',
    defaultReference: 'ಸರ್ಕಾರದ ಸಾಮಾಜಿಕ ಭದ್ರತಾ ಯೋಜನೆ',
    defaultBody: 'ಮೇಲ್ಕಂಡ ವಿಷಯಕ್ಕೆ ಸಂಬಂಧಿಸಿದಂತೆ, ನನಗೆ ಪ್ರಸ್ತುತ [ವಯಸ್ಸು] ವರ್ಷ ವಯಸ್ಸಾಗಿದ್ದು, ವೃದ್ಧಾಪ್ಯದ ಕಾರಣದಿಂದ ಯಾವುದೇ ದುಡಿಮೆ ಇರುವುದಿಲ್ಲ. ನಾನು ಬಡತನ ರೇಖೆಗಿಂತ ಕೆಳಗಿರುವ (BPL) ಕುಟುಂಬಕ್ಕೆ ಸೇರಿದ್ದು, ಜೀವನ ನಿರ್ವಹಣೆಗೆ ಕಷ್ಟಕರವಾಗಿರುತ್ತದೆ.\n\nಆದ್ದರಿಂದ ಸರ್ಕಾರದ ನಿಯಮಾನುಸಾರ ನನಗೆ ವೃದ್ಧಾಪ್ಯ/ಸಂಧ್ಯಾ ಸುರಕ್ಷಾ ಪಿಂಚಣಿಯನ್ನು ಮಂಜೂರು ಮಾಡಿ ನನ್ನ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಜಮಾ ಮಾಡಿಕೊಡಬೇಕಾಗಿ ತಮ್ಮಲ್ಲಿ ಸವಿನಯ ಪ್ರಾರ್ಥನೆ.',
    defaultEnclosures: ['ವಯಸ್ಸಿನ ದೃಢೀಕರಣ ಪತ್ರ / ಆಧಾರ್ ಕಾರ್ಡ್', 'BPL ರೇಷನ್ ಕಾರ್ಡ್ ಜೆರಾಕ್ಸ್', 'ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್ ಜೆರಾಕ್ಸ್ ಪ್ರತಿ'],
  },

  // 3. Electricity Board (BESCOM / HESCOM / GESCOM / MESCOM / CESC)
  {
    id: 'elec_transformer',
    category: 'ವಿದ್ಯುತ್ ಇಲಾಖೆ (Electricity Board - ESCOM)',
    titleKn: '⚡ ಕೃಷಿ ಪಂಪ್‌ಸೆಟ್ ಟ್ರಾನ್ಸ್‌ಫಾರ್ಮರ್ (TC) ಸುಟ್ಟುಹೋಗಿದ್ದು ಬದಲಾಯಿಸಲು ಅರ್ಜಿ',
    officerTitle: 'ಮಾನ್ಯ ಸಹಾಯಕ ಕಾರ್ಯಪಾಲಕ ಇಂಜಿನಿಯರ್‌ಗಳು (AEE)',
    officeName: 'ವಿದ್ಯುತ್ ಸರಬರಾಜು ಕಂಪನಿ ನಿಯಮಿತ (ESCOM) ಉಪವಿಭಾಗ ಕಚೇರಿ',
    defaultSubject: 'ಜಮೀನಿನ ಕೃಷಿ ಪಂಪ್‌ಸೆಟ್ ಟ್ರಾನ್ಸ್‌ಫಾರ್ಮರ್ (TC) ಸುಟ್ಟುಹೋಗಿದ್ದು, ತಕ್ಷಣ ಹೊಸ TC ಅಳವಡಿಸಲು ಮನವಿ.',
    defaultReference: 'ಕೃಷಿ RR ಸಂಖ್ಯೆ: [RR ಸಂಖ್ಯೆ]',
    defaultBody: 'ಮೇಲ್ಕಂಡ ವಿಷಯಕ್ಕೆ ಸಂಬಂಧಿಸಿದಂತೆ, [ಗ್ರಾಮದ ಹೆಸರು] ಗ್ರಾಮದ ಸರ್ವೆ ನಂ: [ಸರ್ವೆ ನಂ] ನಲ್ಲಿರುವ ನಮ್ಮ ಕೃಷಿ ಪಂಪ್‌ಸೆಟ್‌ಗೆ ವಿದ್ಯುತ್ ಸಂಪರ್ಕ ಕಲ್ಪಿಸುವ ಟ್ರಾನ್ಸ್‌ಫಾರ್ಮರ್ ದಿನಾಂಕ: [ದಿನಾಂಕ] ರಂದು ಸುಟ್ಟುಹೋಗಿರುತ್ತದೆ. ಇದರಿಂದಾಗಿ ಬೆಳೆಗಳಿಗೆ ನೀರು ಹರಿಸಲು ಸಾಧ್ಯವಾಗದೆ ಬೆಳೆಗಳು ಒಣಗುವ ಸ್ಥಿತಿ ತಲುಪಿದೆ.\n\nರೈತರ ಹಿತದೃಷ್ಟಿಯಿಂದ ತಾವುಗಳು ದಯಮಾಡಿ ತುರ್ತಾಗಿ ಸುಟ್ಟುಹೋದ ಟ್ರಾನ್ಸ್‌ಫಾರ್ಮರ್ ಬದಲಾಯಿಸಿ, ಹೊಸ TC ಯನ್ನು ಅಳವಡಿಸಿ ವಿದ್ಯುತ್ ಪುನರ್ ಸ್ಥಾಪಿಸಿಕೊಡಬೇಕಾಗಿ ತಮ್ಮಲ್ಲಿ ಕಳಕಳಿಯ ಪ್ರಾರ್ಥನೆ.',
    defaultEnclosures: ['ವಿದ್ಯುತ್ RR ಸಂಖ್ಯೆ ರಶೀದಿ ಪ್ರತಿ', 'ಪಹಣಿ ಜೆರಾಕ್ಸ್', 'ಅರ್ಜಿದಾರರ ಆಧಾರ್ ಕಾರ್ಡ್'],
  },

  // 4. Police Station Presets
  {
    id: 'police_lost_item',
    category: 'ಪೊಲೀಸ್ ಇಲಾಖೆ (Police Station - PSI)',
    titleKn: '👮 ಮೊಬೈಲ್ / ಪ್ರಮುಖ ದಾಖಲೆಗಳು ಕಳೆದುಹೋದ ಬಗ್ಗೆ ದೂರು ಅರ್ಜಿ',
    officerTitle: 'ಮಾನ್ಯ ಪೊಲೀಸ್ ಸಬ್ ಇನ್ಸ್‌ಪೆಕ್ಟರ್ (PSI) ರವರು',
    officeName: 'ಪೊಲೀಸ್ ಠಾಣೆ',
    defaultSubject: 'ನನ್ನ ಮೊಬೈಲ್ ಫೋನ್ / ಪ್ರಮುಖ ದಾಖಲೆಗಳು ಕಳೆದುಹೋದ ಬಗ್ಗೆ ದೂರು (Lost Report) ನೀಡಿ ಸ್ವೀಕೃತಿ ಪತ್ರ ಕೋರಿಕೆ.',
    defaultReference: '',
    defaultBody: 'ಮೇಲ್ಕಂಡ ವಿಷಯಕ್ಕೆ ಸಂಬಂಧಿಸಿದಂತೆ, ನಾನು ದಿನಾಂಕ: [ದಿನಾಂಕ] ರಂದು [ಸ್ಥಳದ ಹೆಸರು] ಮಾರ್ಗವಾಗಿ ಸಂಚರಿಸುತ್ತಿದ್ದಾಗ, ನನ್ನ ಮೊಬೈಲ್ ಫೋನ್ (ಮಾದರಿ: [ಮೊಬೈಲ್ ಹೆಸರು], IMEI ಸಂಖ್ಯೆ: [IMEI ಸಂಖ್ಯೆ]) ಆಕಸ್ಮಿಕವಾಗಿ ಜಾರಿ ಕಳೆದುಹೋಗಿರುತ್ತದೆ. ಎಲ್ಲಾ ಕಡೆ ಹುಡುಕಾಡಿದರೂ ಪತ್ತೆಯಾಗಿರುವುದಿಲ್ಲ.\n\nಸದರಿ ಮೊಬೈಲ್ ದುರುಪಯೋಗವಾಗದಂತೆ ತಡೆಯಲು ಹಾಗೂ ಸಿಮ್ ಕಾರ್ಡ್ ಮರುಪಡೆಯಲು ಈ ದೂರು ಅರ್ಜಿಯನ್ನು ನೀಡುತ್ತಿದ್ದು, ದಯಮಾಡಿ ಇದರ ಸ್ವೀಕೃತಿ (Ack Slip) ನೀಡಬೇಕಾಗಿ ವಿನಂತಿ.',
    defaultEnclosures: ['ಮೊಬೈಲ್ ಬಿಲ್ ಜೆರಾಕ್ಸ್ ಪ್ರತಿ', 'ಅರ್ಜಿದಾರರ ಆಧಾರ್ ಕಾರ್ಡ್ ಜೆರಾಕ್ಸ್'],
  },

  // 5. RTI (Right to Information)
  {
    id: 'rti_form_a',
    category: 'ಮಾಹಿತಿ ಹಕ್ಕು ಕಾಯ್ದೆ (RTI 2005 - Form A)',
    titleKn: '📑 ಮಾಹಿತಿ ಹಕ್ಕು ಕಾಯ್ದೆ ೨೦೦೫ ರಡಿ ಮಾಹಿತಿ ಕೋರಿ ಅರ್ಜಿ (Form A)',
    officerTitle: 'ಮಾನ್ಯ ಸಾರ್ವಜನಿಕ ಮಾಹಿತಿ ಅಧಿಕಾರಿಗಳು (PIO)',
    officeName: 'ಸಾರ್ವಜನಿಕ ಪ್ರಾಧಿಕಾರದ ಕಚೇರಿ',
    defaultSubject: 'ಮಾಹಿತಿ ಹಕ್ಕು ಕಾಯ್ದೆ ೨೦೦೫ ರ ಕಲಂ ೬(೧) ರಡಿ ಅಗತ್ಯ ಮಾಹಿತಿ ಮತ್ತು ದಾಖಲೆಗಳನ್ನು ಒದಗಿಸುವಂತೆ ಕೋರಿ ಅರ್ಜಿ.',
    defaultReference: 'ಮಾಹಿತಿ ಹಕ್ಕು ಕಾಯ್ದೆ ೨೦೦೫ ನಮೂನೆ-ಎ',
    defaultBody: 'ಮೇಲ್ಕಂಡ ವಿಷಯಕ್ಕೆ ಸಂಬಂಧಿಸಿದಂತೆ, ನಾನು ಭಾರತದ ಪ್ರಜೆಯಾಗಿದ್ದು, ಮಾಹಿತಿ ಹಕ್ಕು ಕಾಯ್ದೆ ೨೦೦೫ ರ ಕಲಂ ೬(೧) ರನ್ವಯ ಕೆಳಕಂಡ ವಿಷಯಗಳಿಗೆ ಸಂಬಂಧಿಸಿದ ದೃಢೀಕೃತ ದಾಖಲೆಗಳನ್ನು/ಮಾಹಿತಿಯನ್ನು ನಿಗದಿತ ೩೦ ದಿನಗಳ ಕಾಲಮಿತಿಯೊಳಗೆ ಒದಗಿಸಿಕೊಡಬೇಕಾಗಿ ಕೋರುತ್ತೇನೆ:\n\n೧. [ಗ್ರಾಮ/ವಾರ್ಡ್‌ನಲ್ಲಿ ಕೈಗೊಂಡ ಕಾಮಗಾರಿಯ ಒಟ್ಟು ಮಂಜೂರಾದ ಅನುದಾನ ಮತ್ತು ವೆಚ್ಚದ ವಿವರ]\n೨. [ಕಾಮಗಾರಿಯ ವರ್ಕ್ ಆರ್ಡರ್ ಮತ್ತು ಗುತ್ತಿಗೆದಾರರ ವಿವರ]\n೩. [ಕಾಮಗಾರಿಯ ಅಂದಾಜು ಪಟ್ಟಿ ಮತ್ತು ಪೂರ್ಣಗೊಂಡಿರುವ ಪ್ರಮಾಣಪತ್ರದ ಪ್ರತಿ]\n\nಅರ್ಜಿ ಶುಲ್ಕವಾಗಿ ₹10/- ರೂ.ಗಳ ಕೋರ್ಟ್ ಫೀ ಸ್ಟಾಂಪ್/ಐಪಿಒ ಅನ್ನು ಈ ಅರ್ಜಿಗೆ ಲಗತ್ತಿಸಲಾಗಿದೆ.',
    defaultEnclosures: ['₹10/- ಮುಖಬೆಲೆಯ ಕೋರ್ಟ್ ಫೀ ಸ್ಟಾಂಪ್ / IPO', 'ಅರ್ಜಿದಾರರ ಗುರುತಿನ ಚೀಟಿ'],
  },

  // 6. Bank Manager
  {
    id: 'bank_kyc_atm',
    category: 'ಬ್ಯಾಂಕ್ ಶಾಖೆ (Bank Branch Manager)',
    titleKn: '🏦 ಹೊಸ ATM ಕಾರ್ಡ್ / KYC ಅಪ್ಡೇಟ್ ಕೋರಿ ಬ್ಯಾಂಕ್ ಪತ್ರ',
    officerTitle: 'ಮಾನ್ಯ ಶಾಖಾ ವ್ಯವಸ್ಥಾಪಕರು (Branch Manager)',
    officeName: 'ಬ್ಯಾಂಕ್ ಆಫ್ ಇಂಡಿಯಾ / ಸ್ಟೇಟ್ ಬ್ಯಾಂಕ್ / ಕೆನರಾ ಬ್ಯಾಂಕ್ ಶಾಖೆ',
    defaultSubject: 'ಉಳಿತಾಯ ಖಾತೆಗೆ ಹೊಸ ATM ಕಾರ್ಡ್ ನೀಡಲು ಮತ್ತು KYC ಅಪ್ಡೇಟ್ ಮಾಡಲು ಕೋರಿಕೆ.',
    defaultReference: 'ಖಾತೆ ಸಂಖ್ಯೆ (A/C No): [ಖಾತೆ ಸಂಖ್ಯೆ]',
    defaultBody: 'ಮೇಲ್ಕಂಡ ವಿಷಯಕ್ಕೆ ಸಂಬಂಧಿಸಿದಂತೆ, ನಾನು ತಮ್ಮ ಬ್ಯಾಂಕ್ ಶಾಖೆಯಲ್ಲಿ ಉಳಿತಾಯ ಖಾತೆ ಸಂಖ್ಯೆ: [ಖಾತೆ ಸಂಖ್ಯೆ] ಹೊಂದಿದ್ದು, ನನ್ನ ಹಿಂದಿನ ATM ಕಾರ್ಡ್ ಕಳೆದುಹೋಗಿರುವುದರಿಂದ / ಅವಧಿ ಮುಗಿದಿರುವುದರಿಂದ ಹೊಸ ಎಟಿಎಂ ಕಾರ್ಡ್ ಮಂಜೂರು ಮಾಡಬೇಕಾಗಿ ಕೋರುತ್ತೇನೆ.\n\nಜೊತೆಗೆ ನನ್ನ ಖಾತೆಗೆ ನವೀಕರಿಸಿದ ಆಧಾರ್ ಹಾಗೂ ಪ್ಯಾನ್ ಕಾರ್ಡ್ ಅನ್ನು ಲಿಂಕ್ ಮಾಡಿ ಕೆವೈಸಿ (KYC) ಅಪ್ಡೇಟ್ ಮಾಡಿಕೊಡಬೇಕಾಗಿ ವಿನಂತಿ.',
    defaultEnclosures: ['ಆಧಾರ್ ಕಾರ್ಡ್ & ಪ್ಯಾನ್ ಕಾರ್ಡ್ ಜೆರಾಕ್ಸ್', 'ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್ ಮೊದಲ ಪುಟದ ಪ್ರತಿ'],
  },
];

import jsPDF from 'jspdf';

export const GovtLetterComp: React.FC = () => {
  const { lang } = useLanguage();

  const letterPaperRef = useRef<HTMLDivElement>(null);
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>('gp_water');
  
  // Date & Place
  const [letterDate, setLetterDate] = useState<string>('2026-09-02');
  const [letterPlace, setLetterPlace] = useState<string>('ಬೆಂಗಳೂರು / ನಿಮ್ಮ ಊರು');

  // To Address
  const [officerTitle, setOfficerTitle] = useState<string>('ಮಾನ್ಯ ಪಂಚಾಯತ್ ಅಭಿವೃದ್ಧಿ ಅಧಿಕಾರಿಗಳು (PDO)');
  const [officeName, setOfficeName] = useState<string>('ಗ್ರಾಮ ಪಂಚಾಯತಿ ಕಚೇರಿ');
  const [officeTalukDist, setOfficeTalukDist] = useState<string>('ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ ಜಿಲ್ಲೆ');

  // From Address
  const [applicantName, setApplicantName] = useState<string>('ರಮೇಶ್ ಕುಮಾರ್');
  const [fatherName, setFatherName] = useState<string>('ಶಿವಣ್ಣ');
  const [applicantAddress, setApplicantAddress] = useState<string>('ಮನೆ ನಂ ೪೫, ಮುಖ್ಯ ರಸ್ತೆ, ದೊಡ್ಡಬಳ್ಳಾಪುರ ತಾಲೂಕು');
  const [applicantMobile, setApplicantMobile] = useState<string>('9876543210');

  // Letter Content
  const [subjectText, setSubjectText] = useState<string>('ಗ್ರಾಮದಲ್ಲಿ ಕುಡಿಯುವ ನೀರಿನ ಕೊಳವೆಬಾವಿ / ಪೈಪ್‌ಲೈನ್ ತಕ್ಷಣ ದುರಸ್ತಿ ಮಾಡಿಕೊಡುವಂತೆ ಕೋರಿ ಮನವಿ.');
  const [referenceText, setReferenceText] = useState<string>('');
  const [bodyText, setBodyText] = useState<string>(
    'ಮೇಲ್ಕಂಡ ವಿಷಯಕ್ಕೆ ಸಂಬಂಧಿಸಿದಂತೆ, ನಾನು ಈ ಗ್ರಾಮದ ನಿವಾಸಿಯಾಗಿದ್ದು, ನಮ್ಮ ಬಡಾವಣೆಯಲ್ಲಿ ಕಳೆದ ಕೆಲವು ದಿನಗಳಿಂದ ಕುಡಿಯುವ ನೀರಿನ ಕೊಳವೆಬಾವಿ/ಪೈಪ್‌ಲೈನ್ ಕೆಟ್ಟುಹೋಗಿದ್ದು, ಗ್ರಾಮಸ್ಥರಿಗೆ ಮತ್ತು ಜಾನುವಾರುಗಳಿಗೆ ಕುಡಿಯುವ ನೀರಿನ ತೀವ್ರ ಅಭಾವ ಉಂಟಾಗಿದೆ.\n\nಈ ಕುರಿತು ಸಾರ್ವಜನಿಕ ಹಿತದೃಷ್ಟಿಯಿಂದ ತಾವುಗಳು ದಯಮಾಡಿ ಸ್ಥಳ ಪರಿಶೀಲನೆ ನಡೆಸಿ, ನೀರು ಸರಬರಾಜು ಪೈಪ್‌ಲೈನ್ ಅನ್ನು ತುರ್ತಾಗಿ ದುರಸ್ತಿಗೊಳಿಸಿ ಕುಡಿಯುವ ನೀರಿನ ವ್ಯವಸ್ಥೆ ಕಲ್ಪಿಸಿಕೊಡಬೇಕಾಗಿ ತಮ್ಮಲ್ಲಿ ಸವಿನಯ ಪ್ರಾರ್ಥನೆ.'
  );
  const [enclosuresText, setEnclosuresText] = useState<string>('೧. ಅರ್ಜಿದಾರರ ಆಧಾರ್ ಕಾರ್ಡ್ ಜೆರಾಕ್ಸ್\n೨. ಸಮಸ್ಯೆಯಿರುವ ಜಾಗದ ಫೋಟೋ ಪ್ರತಿ');

  // Download Options State
  const [downloadFormat, setDownloadFormat] = useState<'a4_hd' | 'ultra_4k' | 'mobile_png' | 'pdf'>('a4_hd');
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  // Load Preset Template
  const handleSelectTemplate = (template: LetterTemplate) => {
    setSelectedTemplateId(template.id);
    setOfficerTitle(template.officerTitle);
    setOfficeName(template.officeName);
    setSubjectText(template.defaultSubject);
    setReferenceText(template.defaultReference);
    setBodyText(template.defaultBody);
    setEnclosuresText(template.defaultEnclosures.map((e, i) => `${i + 1}. ${e}`).join('\n'));
  };

  // Full Text Representation
  const fullLetterText = useMemo(() => {
    return `ದಿನಾಂಕ: ${letterDate}\nಸ್ಥಳ: ${letterPlace}\n\n` +
      `ಇವರಿಗೆ,\n${officerTitle},\n${officeName},\n${officeTalukDist}.\n\n` +
      `ಇವರಿಂದ,\n${applicantName} (ತಂದೆ: ${fatherName}),\n${applicantAddress},\nಮೊಬೈಲ್: ${applicantMobile}.\n\n` +
      `ಮಾನ್ಯರೇ,\n\n` +
      `ವಿಷಯ: ${subjectText}\n` +
      (referenceText ? `ಉಲ್ಲೇಖ: ${referenceText}\n\n` : `\n`) +
      `${bodyText}\n\n` +
      `ಲಗತ್ತಿಸಿರುವ ದಾಖಲೆಗಳು:\n${enclosuresText}\n\n` +
      `ವಂದನೆಗಳೊಂದಿಗೆ,\n\n` +
      `ತಮ್ಮ ವಿಶ್ವಾಸಿ,\n\n` +
      `( ${applicantName} )\n`;
  }, [letterDate, letterPlace, officerTitle, officeName, officeTalukDist, applicantName, fatherName, applicantAddress, applicantMobile, subjectText, referenceText, bodyText, enclosuresText]);

  // 📸 Multi-Resolution & Format Download Handler
  const handleDownload = async () => {
    if (!letterPaperRef.current) return;
    setIsDownloading(true);

    try {
      if (typeof document !== 'undefined' && document.fonts) {
        await document.fonts.ready;
      }

      let scale = 2.5; // Standard A4 (150-200 DPI)
      if (downloadFormat === 'ultra_4k') scale = 3.5; // Ultra-HD 4K (300+ DPI)
      if (downloadFormat === 'mobile_png') scale = 1.6; // Mobile fast share

      const canvas = await html2canvas(letterPaperRef.current, {
        scale: scale,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
      });

      if (downloadFormat === 'pdf') {
        // Generate Official A4 PDF Document
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4',
        });
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(`kannada-official-application-letter-${Date.now()}.pdf`);
      } else {
        // Download High-Resolution PNG
        const link = document.createElement('a');
        link.download = `kannada-official-application-letter-${downloadFormat}-${Date.now()}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      }
    } catch (err) {
      console.error('Download error:', err);
    } finally {
      setIsDownloading(false);
    }
  };

  // Copy Full Text
  const copyLetterText = () => {
    navigator.clipboard.writeText(fullLetterText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // 🖨️ Direct Browser Print
  const handlePrint = () => {
    window.print();
  };

  // 💬 WhatsApp Share with Exact HD Image & Link
  const shareToWhatsApp = async () => {
    if (!letterPaperRef.current) return;
    const siteUrl = typeof window !== 'undefined' ? `${window.location.origin}/letter-maker` : 'https://mahitichakra.com/letter-maker';

    const shareText = `🏛️ *ಕರ್ನಾಟಕ ಅಧಿಕೃತ ಮನವಿ / ದೂರು ಅರ್ಜಿ ಪತ್ರ*\n\n` +
      `📌 ವಿಷಯ: *${subjectText}*\n` +
      `👤 ಇವರಿಂದ: *${applicantName}* (${applicantMobile})\n` +
      `🏢 ಇವರಿಗೆ: *${officerTitle}, ${officeName}*\n\n` +
      `--------------------------------\n` +
      `📄 *ಅರ್ಜಿಯ ಪೂರ್ಣ ವಿವರ:*\n${bodyText.substring(0, 200)}...\n\n` +
      `--------------------------------\n` +
      `🌐 *ನೀವು ಸರ್ಕಾರಿ ಪತ್ರ/ಅರ್ಜಿ ತಯಾರಿಸಿ HD ಪ್ರಿಂಟ್ ಪಡೆಯಲು ಭೇಟಿ ನೀಡಿ:*\n👉 ${siteUrl}`;

    try {
      const canvas = await html2canvas(letterPaperRef.current, {
        scale: 2.5,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
      });

      canvas.toBlob(async (blob) => {
        if (blob && navigator.share && navigator.canShare) {
          const file = new File([blob], `govt-application-letter.png`, { type: 'image/png' });
          if (navigator.canShare({ files: [file] })) {
            try {
              await navigator.share({
                files: [file],
                title: 'ಸರ್ಕಾರಿ ಅರ್ಜಿ ಪತ್ರ',
                text: shareText,
              });
              return;
            } catch (err) {
              console.log('Share fallback', err);
            }
          }
        }

        const link = document.createElement('a');
        link.download = `kannada-official-application-letter-${Date.now()}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();

        const encoded = encodeURIComponent(shareText);
        window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
      }, 'image/png');
    } catch (err) {
      console.error('Share error:', err);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* 🔤 Google Noto Sans Kannada Official Font Embed */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Kannada:wght@400;500;600;700;800;900&display=swap');
        .kannada-letter-font {
          font-family: 'Noto Sans Kannada', 'Tiro Kannada', system-ui, -apple-system, sans-serif !important;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }
      `}</style>

      {/* 🌟 HERO HEADER BANNER */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl border-2 border-amber-400/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="flex items-center gap-4 relative z-10">
          <div className="shrink-0 filter drop-shadow-md">
            <GovtLetter3D className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-full shadow-xs">
              <Sparkles className="w-3 h-3" /> 100% LEGAL & OFFICIAL KARNATAKA GOVT APPLICATION GENERATOR
            </span>
            <h1 className="text-xl sm:text-3xl font-black tracking-tight text-white">
              {lang === 'kn' ? '🏛️ ಕರ್ನಾಟಕ ಸರ್ಕಾರಿ & ಸಾರ್ವಜನಿಕ ಅಧಿಕೃತ ಅರ್ಜಿ (ಪತ್ರ) ಮೇಕರ್' : '🏛️ Official Govt Application & Letter Generator'}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-slate-200">
              {lang === 'kn'
                ? 'ಗ್ರಾಮ ಪಂಚಾಯತ್, ತಹಶೀಲ್ದಾರ್, ಕರೆಂಟ್, ಪೊಲೀಸ್ & RTI ಸಮಸ್ಯೆಗಳಿಗೆ ನಿಖರ ನಿಯಮಗಳಂತೆ ಅಧಿಕೃತ ಪತ್ರ ರಚಿಸಿ!'
                : 'Generate official formal Kannada application letters for Gram Panchayat, Tahsildar, Electricity & Police complaints!'}
            </p>
          </div>
        </div>

        {/* TOP ACTION BUTTONS */}
        <div className="flex flex-wrap items-center gap-2.5 shrink-0 self-stretch md:self-auto">
          <button
            onClick={copyLetterText}
            className="bg-white/10 hover:bg-white/20 text-white border border-white/30 py-3.5 px-4 rounded-2xl font-black text-xs sm:text-sm transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-amber-300" />}
            <span>{isCopied ? 'ಕಾಪಿಯಾಗಿದೆ!' : 'ಪತ್ರ ಕಾಪಿ ಮಾಡಿ'}</span>
          </button>

          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="bg-amber-400 hover:bg-amber-500 text-slate-950 py-3.5 px-5 rounded-2xl font-black text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 flex-1 md:flex-initial disabled:opacity-50"
          >
            <Download className="w-5 h-5 text-slate-950" />
            <span>{isDownloading ? 'ರಚಿಸಲಾಗುತ್ತಿದೆ...' : 'HD ಡೌನ್‌ಲೋಡ್'}</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 🔮 2-COLUMN WORKSPACE: LEFT INPUT FORMS + RIGHT LIVE A4 PAPER PREVIEW */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT COLUMN: TEMPLATE SELECTOR & INPUT FIELDS (6 Cols) */}
        <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200 shadow-sm p-5 sm:p-7 space-y-5">
          
          {/* TEMPLATE SELECTOR ACCORDION / LIST */}
          <div className="space-y-2">
            <label className="text-xs font-black text-slate-900 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-blue-800" />
              <span>ಪತ್ರದ ವಿಷಯ / ಸಮಸ್ಯೆ ಆಯ್ಕೆ ಮಾಡಿ (Select Problem Template):</span>
            </label>

            <select
              value={selectedTemplateId}
              onChange={(e) => {
                const found = LETTER_TEMPLATES_CATALOG.find(t => t.id === e.target.value);
                if (found) handleSelectTemplate(found);
              }}
              className="w-full bg-slate-50 border border-slate-300 focus:border-blue-700 rounded-xl p-3 text-xs font-bold text-slate-900 shadow-xs"
            >
              {LETTER_TEMPLATES_CATALOG.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.titleKn} ({t.category})
                </option>
              ))}
            </select>
          </div>

          {/* DATE & PLACE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-600 block">ದಿನಾಂಕ (Date):</label>
              <input
                type="date"
                value={letterDate}
                onChange={(e) => setLetterDate(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl p-2 text-xs font-bold text-slate-900"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-600 block">ಸ್ಥಳ (Place):</label>
              <input
                type="text"
                value={letterPlace}
                onChange={(e) => setLetterPlace(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl p-2 text-xs font-bold text-slate-900"
              />
            </div>
          </div>

          {/* TO ADDRESS (ಇವರಿಗೆ) */}
          <div className="space-y-2.5 bg-blue-50/70 p-4 rounded-2xl border border-blue-200">
            <h3 className="text-xs font-black text-blue-950 flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-blue-800" />
              <span>ಇವರಿಗೆ (To Officer Details):</span>
            </h3>

            <div className="space-y-2">
              <input
                type="text"
                value={officerTitle}
                onChange={(e) => setOfficerTitle(e.target.value)}
                placeholder="ಅಧಿಕಾರಿಯ ಹುದ್ದೆ (ಉದಾ: ಮಾನ್ಯ ತಹಶೀಲ್ದಾರ್ ರವರು)"
                className="w-full bg-white border border-blue-300 rounded-xl p-2 text-xs font-bold text-slate-900"
              />
              <input
                type="text"
                value={officeName}
                onChange={(e) => setOfficeName(e.target.value)}
                placeholder="ಕಚೇರಿಯ ಹೆಸರು (ಉದಾ: ತಾಲೂಕು ಕಚೇರಿ)"
                className="w-full bg-white border border-blue-300 rounded-xl p-2 text-xs font-semibold text-slate-900"
              />
              <input
                type="text"
                value={officeTalukDist}
                onChange={(e) => setOfficeTalukDist(e.target.value)}
                placeholder="ತಾಲೂಕು & ಜಿಲ್ಲೆ (ಉದಾ: ದೊಡ್ಡಬಳ್ಳಾಪುರ, ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ)"
                className="w-full bg-white border border-blue-300 rounded-xl p-2 text-xs font-semibold text-slate-900"
              />
            </div>
          </div>

          {/* FROM ADDRESS (ಇವರಿಂದ) */}
          <div className="space-y-2.5 bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <h3 className="text-xs font-black text-slate-900 flex items-center gap-1.5">
              <User className="w-4 h-4 text-slate-700" />
              <span>ಇವರಿಂದ (Applicant Details):</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <input
                type="text"
                value={applicantName}
                onChange={(e) => setApplicantName(e.target.value)}
                placeholder="ಅರ್ಜಿದಾರರ ಪೂರ್ಣ ಹೆಸರು"
                className="w-full bg-white border border-slate-300 rounded-xl p-2 text-xs font-bold text-slate-900"
              />
              <input
                type="text"
                value={fatherName}
                onChange={(e) => setFatherName(e.target.value)}
                placeholder="ತಂದೆ / ಗಂಡನ ಹೆಸರು"
                className="w-full bg-white border border-slate-300 rounded-xl p-2 text-xs font-bold text-slate-900"
              />
            </div>

            <input
              type="text"
              value={applicantAddress}
              onChange={(e) => setApplicantAddress(e.target.value)}
              placeholder="ವಾಸದ ಪೂರ್ಣ ವಿಳಾಸ, ಗ್ರಾಮ/ವಾರ್ಡ್"
              className="w-full bg-white border border-slate-300 rounded-xl p-2 text-xs font-semibold text-slate-900"
            />

            <input
              type="text"
              value={applicantMobile}
              onChange={(e) => setApplicantMobile(e.target.value)}
              placeholder="ಮೊಬೈಲ್ ಸಂಖ್ಯೆ (10 ಅಂಕಿಗಳು)"
              className="w-full bg-white border border-slate-300 rounded-xl p-2 text-xs font-bold text-slate-900"
            />
          </div>

          {/* SUBJECT & BODY EDITORS */}
          <div className="space-y-3">
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-700 block">ವಿಷಯ (Subject):</label>
              <input
                type="text"
                value={subjectText}
                onChange={(e) => setSubjectText(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 focus:border-blue-700 rounded-xl p-2.5 text-xs font-black text-slate-900 shadow-inner"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-700 block">ಉಲ್ಲೇಖ (Reference - Optional):</label>
              <input
                type="text"
                value={referenceText}
                onChange={(e) => setReferenceText(e.target.value)}
                placeholder="ಉದಾ: ಸರ್ಕಾರದ ಆದೇಶ / ಹಿಂದಿನ ಅರ್ಜಿ ಸಂಖ್ಯೆ"
                className="w-full bg-slate-50 border border-slate-300 focus:border-blue-700 rounded-xl p-2 text-xs font-semibold text-slate-900 shadow-inner"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-700 block">ಪತ್ರದ ಮುಖ್ಯ ಒಡಲು (Letter Body):</label>
              <textarea
                rows={5}
                value={bodyText}
                onChange={(e) => setBodyText(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 focus:border-blue-700 rounded-xl p-2.5 text-xs font-medium text-slate-900 leading-relaxed custom-scrollbar shadow-inner"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-700 block">ಲಗತ್ತಿಸಿರುವ ದಾಖಲೆಗಳು (Enclosures):</label>
              <textarea
                rows={2}
                value={enclosuresText}
                onChange={(e) => setEnclosuresText(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 text-xs font-medium text-slate-900 leading-relaxed shadow-inner"
              />
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: REALISTIC A4 LETTER PREVIEW (6 Cols) */}
        <div className="lg:col-span-6 space-y-4">
          
          {/* 📐 DOWNLOAD SIZE & FORMAT SELECTOR BAR */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <span className="text-[11px] font-black text-slate-700 block">
              📏 ಡೌನ್‌ಲೋಡ್ ಸೈಜ್ & ಫಾರ್ಮ್ಯಾಟ್ ಆಯ್ಕೆ (Choose Download Size & Format):
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
              {[
                { id: 'a4_hd', label: '📄 A4 ಪ್ರಿಂಟ್ ಸೈಜ್', desc: 'Standard A4' },
                { id: 'ultra_4k', label: '🌟 ಅಲ್ಟ್ರಾ-HD 4K', desc: '300+ DPI' },
                { id: 'pdf', label: '📑 A4 PDF ಡೌನ್‌ಲೋಡ್', desc: 'Printable PDF' },
                { id: 'mobile_png', label: '💬 ಮೊಬೈಲ್ ಸೈಜ್', desc: 'Fast WhatsApp' },
              ].map((fmt) => (
                <button
                  key={fmt.id}
                  onClick={() => setDownloadFormat(fmt.id as any)}
                  className={`py-2 px-2 rounded-xl text-center border transition-all ${
                    downloadFormat === fmt.id
                      ? 'bg-blue-900 text-white border-blue-900 shadow-xs font-black'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 font-bold'
                  }`}
                >
                  <span className="text-[11px] block">{fmt.label}</span>
                  <span className="text-[9px] block opacity-80">{fmt.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* A4 PAPER PREVIEW CARD (Using official Noto Sans Kannada font & zero-crash layout) */}
          <div
            ref={letterPaperRef}
            className="kannada-letter-font bg-white rounded-2xl border-4 border-blue-950 shadow-2xl p-8 sm:p-10 space-y-5 text-slate-950 leading-relaxed relative select-none"
            style={{ minHeight: '860px' }}
          >
            
            {/* Top Seal Header Box */}
            <div className="text-center space-y-1 border-2 border-slate-300 bg-slate-50/80 p-3.5 rounded-xl">
              <span className="text-xs font-bold text-blue-950 tracking-wider">|| ಸತ್ಯಮೇವ ಜಯತೇ ||</span>
              <h2 className="text-sm sm:text-base font-black text-slate-950 tracking-wide">
                ಅಧಿಕೃತ ಸಾರ್ವಜನಿಕ ಮನವಿ / ದೂರು ಅರ್ಜಿ ಪತ್ರ
              </h2>
            </div>

            {/* Date & Place Top Right */}
            <div className="text-right text-xs sm:text-sm font-bold text-slate-700 space-y-0.5">
              <div>ದಿನಾಂಕ: {letterDate}</div>
              <div>ಸ್ಥಳ: {letterPlace}</div>
            </div>

            {/* To Address Block */}
            <div className="space-y-0.5 pt-1">
              <strong className="text-blue-950 block font-black text-sm sm:text-base">ಇವರಿಗೆ,</strong>
              <div className="pl-4 font-bold text-slate-950">{officerTitle}</div>
              <div className="pl-4 text-slate-700 font-medium">{officeName}</div>
              <div className="pl-4 text-slate-700 font-medium">{officeTalukDist}</div>
            </div>

            {/* From Address Block */}
            <div className="space-y-0.5 pt-1">
              <strong className="text-blue-950 block font-black text-sm sm:text-base">ಇವರಿಂದ,</strong>
              <div className="pl-4 font-bold text-slate-950">{applicantName} (ತಂದೆ: {fatherName})</div>
              <div className="pl-4 text-slate-700 font-medium">{applicantAddress}</div>
              <div className="pl-4 text-slate-700 font-medium">ಮೊಬೈಲ್: {applicantMobile}</div>
            </div>

            {/* Salutation & Subject */}
            <div className="space-y-2 pt-2">
              <strong className="text-blue-950 block font-black text-sm sm:text-base">ಮಾನ್ಯರೇ,</strong>
              
              <div className="bg-slate-100 p-3 rounded-xl border border-slate-300 font-black text-slate-950 text-sm sm:text-base shadow-2xs">
                ವಿಷಯ: {subjectText}
              </div>

              {referenceText && referenceText.trim().length > 0 && (
                <div className="text-xs sm:text-sm font-bold text-slate-700 pl-2 pt-0.5">
                  ಉಲ್ಲೇಖ: {referenceText}
                </div>
              )}
            </div>

            {/* Body */}
            <div className="text-slate-950 whitespace-pre-line leading-loose text-justify text-sm sm:text-base font-normal pt-1">
              {bodyText}
            </div>

            {/* Enclosures */}
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-300 text-xs sm:text-sm space-y-1 mt-4">
              <strong className="text-blue-950 font-bold block">ಲಗತ್ತಿಸಿರುವ ದಾಖಲೆಗಳು (Enclosures):</strong>
              <div className="whitespace-pre-line text-slate-700 pl-2 font-medium">
                {enclosuresText}
              </div>
            </div>

            {/* Closing & Signatures */}
            <div className="flex justify-between items-end pt-8 mt-6 border-t border-slate-200">
              <div className="text-xs sm:text-sm font-bold text-slate-800">
                ವಂದನೆಗಳೊಂದಿಗೆ,
              </div>

              <div className="text-right space-y-8">
                <span className="text-xs sm:text-sm font-bold text-slate-800 block">ತಮ್ಮ ವಿಶ್ವಾಸಿ,</span>
                <div className="text-sm sm:text-base font-black text-slate-950 border-t border-slate-900 pt-1">
                  ( {applicantName} )
                </div>
              </div>
            </div>

            {/* Official Footer Watermark */}
            <div className="text-center text-[10px] sm:text-xs text-slate-500 font-semibold pt-6 border-t border-slate-100">
              © ಮಾಹಿತಿ ಚಕ್ರ ಅಧಿಕೃತ ಪತ್ರ & ಅರ್ಜಿ ಮೇಕರ್ (Mahiti Chakra App) • All Rights Reserved
            </div>

          </div>

          {/* ACTION BUTTONS (DOWNLOAD, PRINT & WHATSAPP) */}
          <div className="space-y-2 pt-1">
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="w-full py-3.5 px-4 rounded-2xl bg-blue-950 hover:bg-black text-white font-black text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Download className="w-5 h-5 text-amber-400" />
              <span>
                {isDownloading
                  ? 'ರಚಿಸಲಾಗುತ್ತಿದೆ...'
                  : downloadFormat === 'pdf'
                  ? '📑 ಅಧಿಕೃತ A4 PDF ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ'
                  : `📸 ${downloadFormat === 'ultra_4k' ? 'Ultra-HD 4K' : 'A4 HD'} ಅರ್ಜಿ ಶೀಟ್ ಡೌನ್‌ಲೋಡ್ (PNG)`}
              </span>
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                onClick={handlePrint}
                className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs shadow-sm transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Printer className="w-4 h-4 text-amber-400" />
                <span>🖨️ ನೇರ ಪ್ರಿಂಟ್</span>
              </button>

              <button
                onClick={shareToWhatsApp}
                className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                <span>WhatsApp ಶೇರ್</span>
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

