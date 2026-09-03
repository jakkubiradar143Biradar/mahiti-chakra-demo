"use client";

import React, { useState, useMemo } from 'react';
import { useLanguage } from './LanguageContext';
import {
  Sparkles, Download, Share2, Heart, Search, Star,
  Calendar, Award, User, RefreshCw, CheckCircle2, Bookmark,
  Layers, Palette, Smile
} from 'lucide-react';
import { BabyNames3D } from './LiveAppIcons3D';

export interface BabyNameItem {
  id: string;
  nameKn: string;
  nameEn: string;
  gender: 'boy' | 'girl';
  startingLetter: string;
  meaningKn: string;
  rashi: string;
  nakshatra: string;
  category: 'modern' | 'traditional' | 'god' | 'nature';
}

const BABY_NAMES_DATA: BabyNameItem[] = [
  // 👦 BOYS (ಗಂಡು ಮಕ್ಕಳು)
  { id: 'b1', nameKn: 'ಆರವ್', nameEn: 'Aarav', gender: 'boy', startingLetter: 'ಆ', meaningKn: 'ಶಾಂತಿಯುತ, ಬುದ್ಧಿವಂತ ಹಾಗೂ ಸದ್ಗುಣಿ', rashi: 'ಮೇಷ', nakshatra: 'ಕೃತಿಕಾ', category: 'modern' },
  { id: 'b2', nameKn: 'ಅದ್ವೈತ್', nameEn: 'Advait', gender: 'boy', startingLetter: 'ಅ', meaningKn: 'ಅನನ್ಯ, ಸರಿಸಾಟಿಯಿಲ್ಲದ, ಬ್ರಹ್ಮ ಸ್ವರೂಪ', rashi: 'ಮೇಷ', nakshatra: 'ಕೃತಿಕಾ', category: 'god' },
  { id: 'b3', nameKn: 'ಅನ್ವೇಷ್', nameEn: 'Anvesh', gender: 'boy', startingLetter: 'ಅ', meaningKn: 'ಸತ್ಯದ ಅನ್ವೇಷಕ, ಪ್ರೇಮಿ', rashi: 'ಮೇಷ', nakshatra: 'ಅಶ್ವಿನಿ', category: 'modern' },
  { id: 'b4', nameKn: 'ಭಾರ್ಗವ್', nameEn: 'Bhargav', gender: 'boy', startingLetter: 'ಭ', meaningKn: 'ಶಿವನ ಅಂಶ, ಪ್ರಕಾಶಮಾನ, ತೇಜಸ್ವಿ', rashi: 'ಧನುಸ್ಸು', nakshatra: 'ಮೂಲಾ', category: 'god' },
  { id: 'b5', nameKn: 'ಚಿರಾಗ್', nameEn: 'Chirag', gender: 'boy', startingLetter: 'ಚ', meaningKn: 'ಬೆಳಕು, ದೀಪ, ಕುಟುಂಬದ ಕೀರ್ತಿ', rashi: 'ಮೀನ', nakshatra: 'ರೇವತಿ', category: 'modern' },
  { id: 'b6', nameKn: 'ದಕ್ಷ್', nameEn: 'Daksh', gender: 'boy', startingLetter: 'ದ', meaningKn: 'ಸಾಮರ್ಥ್ಯವುಳ್ಳವನು, ಪರಿಣಿತ, ಶಿವನ ಭಕ್ತ', rashi: 'ಮೀನ', nakshatra: 'ಉತ್ತರಾಭಾದ್ರ', category: 'god' },
  { id: 'b7', nameKn: 'ಧ್ರುವ', nameEn: 'Dhruv', gender: 'boy', startingLetter: 'ಧ', meaningKn: 'ಸ್ಥಿರ, ಅಚಲ, ಆಕಾಶದ ಧ್ರುವ ತಾರೆ', rashi: 'ಧನುಸ್ಸು', nakshatra: 'ಪೂರ್ವಾಷಾಢ', category: 'traditional' },
  { id: 'b8', nameKn: 'ಗೌತಮ್', nameEn: 'Gautam', gender: 'boy', startingLetter: 'ಗ', meaningKn: 'ಅಜ್ಞಾನ ಕಳೆಯುವ ಬೆಳಕು, ಬುದ್ಧ', rashi: 'ಕುಂಭ', nakshatra: 'ಧನಿಷ್ಠಾ', category: 'traditional' },
  { id: 'b9', nameKn: 'ಹೃದಯ್', nameEn: 'Hruday', gender: 'boy', startingLetter: 'ಹ', meaningKn: 'ಪವಿತ್ರ ಹೃದಯವುಳ್ಳವನು, ಪ್ರೀತಿಪಾತ್ರ', rashi: 'ಕರ್ಕಾಟಕ', nakshatra: 'ಪುಷ್ಯ', category: 'modern' },
  { id: 'b10', nameKn: 'ಇಶಾನ್', nameEn: 'Ishaan', gender: 'boy', startingLetter: 'ಇ', meaningKn: 'ಈಶ್ವರ, ಸೂರ್ಯನ ಪ್ರಥಮ ಕಿರಣ', rashi: 'ಮೇಷ', nakshatra: 'ಕೃತಿಕಾ', category: 'god' },
  { id: 'b11', nameKn: 'ಜಯಂತ್', nameEn: 'Jayanth', gender: 'boy', startingLetter: 'ಜ', meaningKn: 'ವಿಜಯಶಾಲಿ, ಸದಾ ಗೆಲ್ಲುವವನು', rashi: 'ಮಕರ', nakshatra: 'ಉತ್ತರಾಷಾಢ', category: 'traditional' },
  { id: 'b12', nameKn: 'ಕುಶಾಲ್', nameEn: 'Kushal', gender: 'boy', startingLetter: 'ಕ', meaningKn: 'ಬುದ್ಧಿವಂತ, ಚತುರ, ಕ್ಷೇಮ', rashi: 'ಮಿಥುನ', nakshatra: 'ಪುನರ್ವಸು', category: 'modern' },
  { id: 'b13', nameKn: 'ಲವಿತ್', nameEn: 'Lavith', gender: 'boy', startingLetter: 'ಲ', meaningKn: 'ಶಿವನ ಅನುಗ್ರಹ, ಸುಂದರ ರೂಪ', rashi: 'ಮೇಷ', nakshatra: 'ಭರಣಿ', category: 'modern' },
  { id: 'b14', nameKn: 'ಮನೋಜ್', nameEn: 'Manoj', gender: 'boy', startingLetter: 'ಮ', meaningKn: 'ಪ್ರೀತಿಯ ಸಂಕೇತ, ಸುಂದರ ಮನಸ್ಸುಳ್ಳವನು', rashi: 'ಸಿಂಹ', nakshatra: 'ಮಘಾ', category: 'traditional' },
  { id: 'b15', nameKn: 'ನಿಕೇತ್', nameEn: 'Niketh', gender: 'boy', startingLetter: 'ನ', meaningKn: 'ಮನೆ, ಶಾಶ್ವತ ನೆಲೆ, ಆಶ್ರಯ', rashi: 'ವೃಶ್ಚಿಕ', nakshatra: 'ಅನುರಾಧ', category: 'modern' },
  { id: 'b16', nameKn: 'ಓಜಸ್', nameEn: 'Ojas', gender: 'boy', startingLetter: 'ಓ', meaningKn: 'ತೇಜಸ್ಸು, ಶಕ್ತಿ, ಅಪಾರ ಸಾಮರ್ಥ್ಯ', rashi: 'ವೃಷಭ', nakshatra: 'ರೋಹಿಣಿ', category: 'modern' },
  { id: 'b17', nameKn: 'ಪ್ರಣವ್', nameEn: 'Pranav', gender: 'boy', startingLetter: 'ಪ', meaningKn: 'ಓಂಕಾರ ಸ್ವರೂಪ, ಪವಿತ್ರ ಶಬ್ದ', rashi: 'ಕನ್ಯಾ', nakshatra: 'ಹಸ್ತಾ', category: 'god' },
  { id: 'b18', nameKn: 'ರೋಹಿತ್', nameEn: 'Rohit', gender: 'boy', startingLetter: 'ರ', meaningKn: 'ಸೂರ್ಯನ ಉದಯ ಕಾಲದ ಕೆಂಪು ಕಿರಣ', rashi: 'ತುಲಾ', nakshatra: 'ಸ್ವಾತಿ', category: 'traditional' },
  { id: 'b19', nameKn: 'ಸಮರ್ಥ್', nameEn: 'Samarth', gender: 'boy', startingLetter: 'ಸ', meaningKn: 'ಎಲ್ಲವನ್ನೂ ಸಾಧಿಸಬಲ್ಲ ಶಕ್ತಿಶಾಲಿ', rashi: 'ಕುಂಭ', nakshatra: 'ಶತಭಿಷಾ', category: 'modern' },
  { id: 'b20', nameKn: 'ತನ್ಮಯ್', nameEn: 'Tanmay', gender: 'boy', startingLetter: 'ತ', meaningKn: 'ಏಕಾಗ್ರತೆ, ತಲ್ಲೀನತೆ, ಧ್ಯಾನಸ್ಥ', rashi: 'ತುಲಾ', nakshatra: 'ವಿಶಾಖಾ', category: 'modern' },
  { id: 'b21', nameKn: 'ಉಜ್ವಲ್', nameEn: 'Ujjwal', gender: 'boy', startingLetter: 'ಉ', meaningKn: 'ಪ್ರಕಾಶಮಾನ ಭವಿಷ್ಯ, ಉಜ್ವಲ ಕೀರ್ತಿ', rashi: 'ವೃಷಭ', nakshatra: 'ಕೃತಿಕಾ', category: 'traditional' },
  { id: 'b22', nameKn: 'ವರುಣ್', nameEn: 'Varun', gender: 'boy', startingLetter: 'ವ', meaningKn: 'ಜಲದೇವತೆ, ಶುದ್ಧತೆ, ಶಾಂತಿ', rashi: 'ವೃಷಭ', nakshatra: 'ರೋಹಿಣಿ', category: 'nature' },
  { id: 'b23', nameKn: 'ವಿರಾಟ್', nameEn: 'Virat', gender: 'boy', startingLetter: 'ವ', meaningKn: 'ಶ್ರೇಷ್ಠ, ಭವ್ಯ, ಅತ್ಯಂತ ದೊಡ್ಡದು', rashi: 'ವೃಷಭ', nakshatra: 'ಮೃಗಶಿರಾ', category: 'modern' },
  { id: 'b24', nameKn: 'ಯಶ್', nameEn: 'Yash', gender: 'boy', startingLetter: 'ಯ', meaningKn: 'ಕೀರ್ತಿ, ಯಶಸ್ಸು, ವಿಜಯ', rashi: 'ವೃಶ್ಚಿಕ', nakshatra: 'ಜ್ಯೇಷ್ಠಾ', category: 'modern' },
  { id: 'b25', nameKn: 'ಶ್ರೇಯಸ್', nameEn: 'Shreyas', gender: 'boy', startingLetter: 'ಶ', meaningKn: 'ಉತ್ತಮ ಭವಿಷ್ಯ, ಶುಭ, ಶ್ರೇಷ್ಠತೆ', rashi: 'ಕುಂಭ', nakshatra: 'ಶತಭಿಷಾ', category: 'modern' },
  { id: 'b26', nameKn: 'ಅಮೋಘ್', nameEn: 'Amogh', gender: 'boy', startingLetter: 'ಅ', meaningKn: 'ಅಮೂಲ್ಯವಾದ, ಎಂದಿಗೂ ವಿಫಲವಾಗದ', rashi: 'ಮೇಷ', nakshatra: 'ಕೃತಿಕಾ', category: 'god' },
  { id: 'b27', nameKn: 'ಚೇತನ್', nameEn: 'Chetan', gender: 'boy', startingLetter: 'ಚ', meaningKn: 'ಚೈತನ್ಯ, ಪ್ರಾಣಶಕ್ತಿ, ಜಾಗೃತಿ', rashi: 'ಮೀನ', nakshatra: 'ಉತ್ತರಾಭಾದ್ರ', category: 'traditional' },
  { id: 'b28', nameKn: 'ದೀಪಕ್', nameEn: 'Deepak', gender: 'boy', startingLetter: 'ದ', meaningKn: 'ದೀಪದ ಜ್ಯೋತಿ, ದಾರಿದೀಪ', rashi: 'ಮೀನ', nakshatra: 'ಪೂರ್ವಾಭಾದ್ರ', category: 'traditional' },

  // 👧 GIRLS (ಹೆಣ್ಣು ಮಕ್ಕಳು)
  { id: 'g1', nameKn: 'ಅನ್ವಿತಾ', nameEn: 'Anvitha', gender: 'girl', startingLetter: 'ಅ', meaningKn: 'ದೇವತೆ, ಶುದ್ಧ ಮನಸ್ಸಿನವಳು, ಜ್ಞಾನವಂತೆ', rashi: 'ಮೇಷ', nakshatra: 'ಕೃತಿಕಾ', category: 'modern' },
  { id: 'g2', nameKn: 'ಅದಿತಿ', nameEn: 'Aditi', gender: 'girl', startingLetter: 'ಅ', meaningKn: 'ದೇವತೆಗಳ ತಾಯಿ, ಅನಂತ, ಮಿತಿಯಿಲ್ಲದವಳು', rashi: 'ಮೇಷ', nakshatra: 'ಅಶ್ವಿನಿ', category: 'traditional' },
  { id: 'g3', nameKn: 'ಭವ್ಯಾ', nameEn: 'Bhavya', gender: 'girl', startingLetter: 'ಭ', meaningKn: 'ಭವ್ಯವಾದ, ಸುಂದರ, ಮಂಗಳಕರ', rashi: 'ಧನುಸ್ಸು', nakshatra: 'ಮೂಲಾ', category: 'traditional' },
  { id: 'g4', nameKn: 'ಚೈತ್ರಾ', nameEn: 'Chaithra', gender: 'girl', startingLetter: 'ಚ', meaningKn: 'ಯುಗಾದಿಯ ಮೊದಲ ಮಾಸ, ವಸಂತ ಋತು', rashi: 'ಮೀನ', nakshatra: 'ರೇವತಿ', category: 'nature' },
  { id: 'g5', nameKn: 'ದಿಯಾ', nameEn: 'Diya', gender: 'girl', startingLetter: 'ದ', meaningKn: 'ಬೆಳಕಿನ ಹಣತೆ, ಶುಭ ದೀಪ', rashi: 'ಮೀನ', nakshatra: 'ಉತ್ತರಾಭಾದ್ರ', category: 'modern' },
  { id: 'g6', nameKn: 'ದೃಷ್ಠಿ', nameEn: 'Drishti', gender: 'girl', startingLetter: 'ದ', meaningKn: 'ದೃಷ್ಟಿ, ದಿವ್ಯ ದರ್ಶನ, ಸ್ಪಷ್ಟತೆ', rashi: 'ಮೀನ', nakshatra: 'ಉತ್ತರಾಭಾದ್ರ', category: 'modern' },
  { id: 'g7', nameKn: 'ಇಶಿಕಾ', nameEn: 'Ishika', gender: 'girl', startingLetter: 'ಇ', meaningKn: 'ಪವಿತ್ರ ಜಲಧಾರೆ, ಬಾಣ', rashi: 'ಮೇಷ', nakshatra: 'ಕೃತಿಕಾ', category: 'modern' },
  { id: 'g8', nameKn: 'ಕೃತಿ', nameEn: 'Kruti', gender: 'girl', startingLetter: 'ಕ', meaningKn: 'ಸುಂದರ ಸೃಷ್ಟಿ, ಕಲಾಕೃತಿ, ಸಾಧನೆ', rashi: 'ಮಿಥುನ', nakshatra: 'ಮೃಗಶಿರಾ', category: 'modern' },
  { id: 'g9', nameKn: 'ಲಾಸ್ಯಾ', nameEn: 'Lasya', gender: 'girl', startingLetter: 'ಲ', meaningKn: 'ಪಾರ್ವತಿ ದೇವಿಯ ನೃತ್ಯ, ನಯವಂತಿಕೆ', rashi: 'ಮೇಷ', nakshatra: 'ಭರಣಿ', category: 'god' },
  { id: 'g10', nameKn: 'ಮಾನ್ಯಾ', nameEn: 'Manya', gender: 'girl', startingLetter: 'ಮ', meaningKn: 'ಗೌರವಾನ್ವಿತಳು, ಪೂಜ್ಯಳು', rashi: 'ಸಿಂಹ', nakshatra: 'ಮಘಾ', category: 'modern' },
  { id: 'g11', nameKn: 'ನವ್ಯಾ', nameEn: 'Navya', gender: 'girl', startingLetter: 'ನ', meaningKn: 'ಹೊಸತನ, ಸದಾ ಯೌವನ, ತಾಜಾತನ', rashi: 'ವೃಶ್ಚಿಕ', nakshatra: 'ಅನುರಾಧ', category: 'modern' },
  { id: 'g12', nameKn: 'ಪ್ರಾಪ್ತಿ', nameEn: 'Prapti', gender: 'girl', startingLetter: 'ಪ', meaningKn: 'ಸಿದ್ಧಿ, ಬಯಸಿದ್ದು ದೊರಕುವುದು, ಶುಭ', rashi: 'ಕನ್ಯಾ', nakshatra: 'ಹಸ್ತಾ', category: 'modern' },
  { id: 'g13', nameKn: 'ರಿದ್ಧಿ', nameEn: 'Riddhi', gender: 'girl', startingLetter: 'ರ', meaningKn: 'ಸಂಪತ್ತು, ಗಣೇಶನ ಪತ್ನಿ, ಸಮೃದ್ಧಿ', rashi: 'ತುಲಾ', nakshatra: 'ಚಿತ್ತಾ', category: 'god' },
  { id: 'g14', nameKn: 'ಸಂಜನಾ', nameEn: 'Sanjana', gender: 'girl', startingLetter: 'ಸ', meaningKn: 'ಶಾಂತಿಯುತ, ಸೌಮ್ಯ, ಸೃಷ್ಟಿಕರ್ತೆ', rashi: 'ಕುಂಭ', nakshatra: 'ಶತಭಿಷಾ', category: 'modern' },
  { id: 'g15', nameKn: 'ತನ್ವಿ', nameEn: 'Tanvi', gender: 'girl', startingLetter: 'ತ', meaningKn: 'ಸುಂದರ ಶರೀರವುಳ್ಳವಳು, ಸುಕುಮಾರಿ', rashi: 'ತುಲಾ', nakshatra: 'ವಿಶಾಖಾ', category: 'modern' },
  { id: 'g16', nameKn: 'ಉರ್ವಿ', nameEn: 'Urvi', gender: 'girl', startingLetter: 'ಉ', meaningKn: 'ಭೂಮಿ, ತಾಯಿ ಪ್ರಕೃತಿ, ವಸುಂಧರೆ', rashi: 'ವೃಷಭ', nakshatra: 'ಕೃತಿಕಾ', category: 'nature' },
  { id: 'g17', nameKn: 'ವೈಷ್ಣವಿ', nameEn: 'Vaishnavi', gender: 'girl', startingLetter: 'ವ', meaningKn: 'ವಿಷ್ಣುವಿನ ಶಕ್ತಿ, ಲಕ್ಷ್ಮಿ ಸ್ವರೂಪಿಣಿ', rashi: 'ವೃಷಭ', nakshatra: 'ರೋಹಿಣಿ', category: 'god' },
  { id: 'g18', nameKn: 'ಯಶಸ್ವಿನಿ', nameEn: 'Yashaswini', gender: 'girl', startingLetter: 'ಯ', meaningKn: 'ಯಶಸ್ವಿ ಮಹಿಳೆ, ಕೀರ್ತಿವಂತೆ', rashi: 'ವೃಶ್ಚಿಕ', nakshatra: 'ಜ್ಯೇಷ್ಠಾ', category: 'traditional' },
  { id: 'g19', nameKn: 'ಕಾವ್ಯಾ', nameEn: 'Kavya', gender: 'girl', startingLetter: 'ಕ', meaningKn: 'ಸುಂದರ ಕವಿತೆ, ರಮಣೀಯ ಸಾಹಿತ್ಯ', rashi: 'ಮಿಥುನ', nakshatra: 'ಪುನರ್ವಸು', category: 'traditional' },
  { id: 'g20', nameKn: 'ಶ್ರೀಯಾ', nameEn: 'Shriya', gender: 'girl', startingLetter: 'ಶ', meaningKn: 'ಲಕ್ಷ್ಮಿ ದೇವಿ, ಶ್ರೇಷ್ಠ ಮಂಗಳ', rashi: 'ಕುಂಭ', nakshatra: 'ಧನಿಷ್ಠಾ', category: 'god' },
  { id: 'g21', nameKn: 'ಆರಾಧ್ಯ', nameEn: 'Aaradhya', gender: 'girl', startingLetter: 'ಆ', meaningKn: 'ಪೂಜಿಸಲ್ಪಡುವವಳು, ಆದರ್ಶ ಕನ್ಯೆ', rashi: 'ಮೇಷ', nakshatra: 'ಕೃತಿಕಾ', category: 'modern' },
  { id: 'g22', nameKn: 'ಖುಷಿ', nameEn: 'Khushi', gender: 'girl', startingLetter: 'ಖ', meaningKn: 'ಸದಾ ಸಂತೋಷ, ಆನಂದ, ನಗುಮುಖ', rashi: 'ಮಕರ', nakshatra: 'ಶ್ರವಣ', category: 'modern' },
];

export const BabyNamesComp: React.FC = () => {
  const { lang } = useLanguage();

  // Filter States
  const [selectedGender, setSelectedGender] = useState<'all' | 'boy' | 'girl'>('all');
  const [selectedLetter, setSelectedLetter] = useState<string>('all');
  const [selectedRashi, setSelectedRashi] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [favorites, setFavorites] = useState<string[]>(['b1', 'g1']);
  const [showOnlyFavs, setShowOnlyFavs] = useState<boolean>(false);

  // Namakarana Card Generator Modal State
  const [selectedCardName, setSelectedCardName] = useState<BabyNameItem>(BABY_NAMES_DATA[0]);
  const [babyDob, setBabyDob] = useState<string>('2026-08-15');
  const [babyTob, setBabyTob] = useState<string>('ಬೆಳಿಗ್ಗೆ 09:15 AM');
  const [parentsName, setParentsName] = useState<string>('ಶ್ರೀಮತಿ ಶ್ವೇತಾ & ಶ್ರೀ ರವಿಕುಮಾರ್ ಗೌಡ');
  const [grandParents, setGrandParents] = useState<string>('ಶ್ರೀಮತಿ ಲಕ್ಷ್ಮಮ್ಮ & ಶ್ರೀ ಈಶ್ವರಪ್ಪ ಗೌಡ');
  const [customWish, setCustomWish] = useState<string>('ನಮ್ಮ ಮುದ್ದಾದ ಕಂದಮ್ಮನಿಗೆ ತಮ್ಮೆಲ್ಲರ ಪ್ರೀತಿಯ ಆಶೀರ್ವಾದವಿರಲಿ');

  // Toggle Favorite
  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(f => f !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  // Filtered List
  const filteredNames = useMemo(() => {
    return BABY_NAMES_DATA.filter((item) => {
      if (showOnlyFavs && !favorites.includes(item.id)) return false;
      if (selectedGender !== 'all' && item.gender !== selectedGender) return false;
      if (selectedLetter !== 'all' && item.startingLetter !== selectedLetter) return false;
      if (selectedRashi !== 'all' && item.rashi !== selectedRashi) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          item.nameKn.includes(q) ||
          item.nameEn.toLowerCase().includes(q) ||
          item.meaningKn.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [selectedGender, selectedLetter, selectedRashi, searchQuery, favorites, showOnlyFavs]);

  // 🎨 CANVAS GENERATOR FOR NAMAKARANA CARD (1000px x 1450px)
  const generateCanvas = (): HTMLCanvasElement => {
    const canvas = document.createElement('canvas');
    canvas.width = 1000;
    canvas.height = 1450;
    const ctx = canvas.getContext('2d');
    if (!ctx) return canvas;

    const isBoy = selectedCardName.gender === 'boy';

    // Background Gradient (Sky Blue for Boy, Princess Pink for Girl)
    const bgGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    if (isBoy) {
      bgGrad.addColorStop(0, '#eff6ff');
      bgGrad.addColorStop(0.3, '#ffffff');
      bgGrad.addColorStop(1, '#dbeafe');
    } else {
      bgGrad.addColorStop(0, '#fdf2f8');
      bgGrad.addColorStop(0.3, '#ffffff');
      bgGrad.addColorStop(1, '#fce7f3');
    }
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Ornate Borders
    ctx.strokeStyle = isBoy ? '#2563eb' : '#db2777';
    ctx.lineWidth = 8;
    ctx.strokeRect(25, 25, canvas.width - 50, canvas.height - 50);

    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2;
    ctx.strokeRect(35, 35, canvas.width - 70, canvas.height - 70);

    // Header Background Banner
    const headerGrad = ctx.createLinearGradient(40, 40, canvas.width - 80, 130);
    headerGrad.addColorStop(0, isBoy ? '#1e3a8a' : '#831843');
    headerGrad.addColorStop(1, isBoy ? '#2563eb' : '#db2777');
    ctx.fillStyle = headerGrad;
    ctx.fillRect(40, 40, canvas.width - 80, 110);

    // Header Title
    ctx.fillStyle = '#fde047';
    ctx.font = 'bold 22px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('|| ಶ್ರೀ ಕೃಷ್ಣಾಯ ನಮಃ ||', canvas.width / 2, 75);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 30px sans-serif';
    ctx.fillText('👶 ನಾಮಕರಣ ಸಂಭ್ರಮ & ಹೆಸರು ಘೋಷಣೆ', canvas.width / 2, 118);

    // Baby Avatar Circle Icon
    let y = 200;
    ctx.fillStyle = isBoy ? '#3b82f6' : '#ec4899';
    ctx.beginPath();
    ctx.arc(canvas.width / 2, y, 40, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.font = '36px sans-serif';
    ctx.fillText(isBoy ? '👶' : '👧', canvas.width / 2, y + 12);

    // "ನಮ್ಮ ಮುದ್ದಾದ ಕಂದಮ್ಮನ ಶುಭ ನಾಮಕರಣ"
    y += 75;
    ctx.fillStyle = '#475569';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText(isBoy ? 'ನಮ್ಮ ಪ್ರೀತಿಯ ಗಂಡು ಕಂದಮ್ಮನ ಶುಭ ಹೆಸರು:' : 'ನಮ್ಮ ಪ್ರೀತಿಯ ಹೆಣ್ಣು ಕಂದಮ್ಮನ ಶುಭ ಹೆಸರು:', canvas.width / 2, y);

    // GRAND BABY NAME BANNER
    y += 40;
    ctx.fillStyle = isBoy ? '#1e40af' : '#9d174d';
    ctx.fillRect(100, y, canvas.width - 200, 90);
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 3;
    ctx.strokeRect(100, y, canvas.width - 200, 90);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 48px sans-serif';
    ctx.fillText(`${selectedCardName.nameKn} (${selectedCardName.nameEn})`, canvas.width / 2, y + 60);

    // Meaning
    y += 135;
    ctx.fillStyle = '#78350f';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText(`✨ ಹೆಸರಿನ ಅರ್ಥ: "${selectedCardName.meaningKn}"`, canvas.width / 2, y);

    // Astrological Meta Table (Rashi, Nakshatra, DOB)
    y += 40;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(80, y, canvas.width - 160, 180);
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(80, y, canvas.width - 160, 180);

    const astroRows = [
      { l: '📅 ಜನ್ಮ ದಿನಾಂಕ & ಸಮಯ:', v: `${babyDob} | ${babyTob}` },
      { l: '⭐ ಜನ್ಮ ರಾಶಿ & ನಕ್ಷತ್ರ:', v: `${selectedCardName.rashi} ರಾಶಿ | ${selectedCardName.nakshatra}` },
      { l: '👨‍👩‍👧 ಪ್ರೀತಿಯ ತಂದೆ - ತಾಯಿ:', v: parentsName },
      { l: '👴👵 ಪ್ರೀತಿಯ ಅಜ್ಜ - ಅಜ್ಜಿ:', v: grandParents },
    ];

    let rowY = y + 38;
    astroRows.forEach((r, idx) => {
      ctx.textAlign = 'left';
      ctx.fillStyle = '#64748b';
      ctx.font = 'bold 16px sans-serif';
      ctx.fillText(r.l, 110, rowY);

      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 16px sans-serif';
      ctx.fillText(r.v, 390, rowY);

      if (idx < 3) {
        ctx.strokeStyle = '#f1f5f9';
        ctx.beginPath();
        ctx.moveTo(100, rowY + 12);
        ctx.lineTo(canvas.width - 100, rowY + 12);
        ctx.stroke();
      }
      rowY += 40;
    });

    // Custom Wish / Message
    y += 240;
    ctx.textAlign = 'center';
    ctx.fillStyle = isBoy ? '#1e3a8a' : '#831843';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText(`"${customWish}"`, canvas.width / 2, y);

    // Footer
    y += 80;
    ctx.fillStyle = '#64748b';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText('✨ ಮಾಹಿತಿ ಚಕ್ರ ಮಕ್ಕಳ ಹೆಸರು & ನಾಮಕರಣ ಪೋರ್ಟಲ್ (Mahiti Chakra App) ✨', canvas.width / 2, y);

    return canvas;
  };

  // Download Ultra-HD Card
  const downloadCardImage = () => {
    const canvas = generateCanvas();
    const link = document.createElement('a');
    link.download = `kannada-baby-name-${selectedCardName.nameEn}-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  // 📸 & 💬 SMART WHATSAPP & IMAGE SHARE WITH WEBSITE LINK
  const shareToWhatsApp = async () => {
    const canvas = generateCanvas();
    const siteUrl = typeof window !== 'undefined' ? `${window.location.origin}/baby-names` : 'https://mahiti-chakra-portal.vercel.app/baby-names';

    const shareText = `👶 *ನಾಮಕರಣ ಸಂಭ್ರಮ & ಮಗುವಿನ ಶುಭ ಹೆಸರು*\n|| ಶ್ರೀ ಕೃಷ್ಣಾಯ ನಮಃ ||\n\n` +
      `✨ ನಮ್ಮ ಪ್ರೀತಿಯ ಕಂದಮ್ಮನ ಹೆಸರು: *${selectedCardName.nameKn} (${selectedCardName.nameEn})*\n` +
      `📖 ಹೆಸರಿನ ಅರ್ಥ: *${selectedCardName.meaningKn}*\n` +
      `⭐ ರಾಶಿ & ನಕ್ಷತ್ರ: *${selectedCardName.rashi} | ${selectedCardName.nakshatra}*\n` +
      `📅 ಜನ್ಮ ದಿನಾಂಕ: *${babyDob} (${babyTob})*\n` +
      `👨‍👩‍👧 ಪೋಷಕರು: *${parentsName}*\n\n` +
      `💖 _${customWish}_\n` +
      `--------------------------------\n` +
      `🌐 *ಮಕ್ಕಳ ಸುಂದರ ಹೆಸರು & ನಾಮಕರಣ ಕಾರ್ಡ್ ರಚಿಸಿ:*\n👉 ${siteUrl}`;

    canvas.toBlob(async (blob) => {
      if (blob && navigator.share && navigator.canShare) {
        const file = new File([blob], `baby-naming-card-${Date.now()}.png`, { type: 'image/png' });
        if (navigator.canShare({ files: [file] })) {
          try {
            await navigator.share({
              files: [file],
              title: 'ಮಕ್ಕಳ ನಾಮಕರಣ ಕಾರ್ಡ್',
              text: shareText,
            });
            return;
          } catch (err) {
            console.log('Share canceled or fallback to link', err);
          }
        }
      }

      // Fallback: Download image and open WhatsApp link
      downloadCardImage();
      const encoded = encodeURIComponent(shareText);
      window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
    }, 'image/png');
  };

  return (
    <div className="space-y-6">
      
      {/* 🌟 HERO HEADER BANNER */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-pink-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl border-2 border-blue-400/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="flex items-center gap-4 relative z-10">
          <div className="shrink-0 filter drop-shadow-md">
            <BabyNames3D className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-full shadow-xs">
              <Sparkles className="w-3 h-3" /> 150+ KANNADA BABY NAMES WITH MEANINGS
            </span>
            <h1 className="text-xl sm:text-3xl font-black tracking-tight text-white">
              {lang === 'kn' ? '👶 ಕನ್ನಡ ಮಕ್ಕಳ ಸುಂದರ ಹೆಸರುಗಳು, ಅರ್ಥ & ನಾಮಕರಣ ಕಾರ್ಡ್' : '👶 Kannada Baby Names, Meanings & Naming Card'}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-blue-200">
              {lang === 'kn'
                ? 'ಗಂಡು/ಹೆಣ್ಣು ಮಕ್ಕಳ ರಾಶಿ, ನಕ್ಷತ್ರ & ಅಕ್ಷರ ಆಧಾರಿತ ಅರ್ಥಪೂರ್ಣ ಹೆಸರುಗಳನ್ನು ಹುಡುಕಿ Ultra-HD ನಾಮಕರಣ ಕಾರ್ಡ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ!'
                : 'Find meaningful Kannada baby names by Rashi, Nakshatra & letters, and create HD naming announcement cards!'}
            </p>
          </div>
        </div>

        <button
          onClick={downloadCardImage}
          className="bg-amber-400 hover:bg-amber-500 text-slate-950 py-3.5 px-6 rounded-2xl font-black text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center gap-2 shrink-0 self-stretch md:self-auto justify-center"
        >
          <Download className="w-5 h-5 text-slate-950" />
          <span>HD ನಾಮಕರಣ ಕಾರ್ಡ್</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* 🔮 2-COLUMN WORKSPACE: LEFT SEARCH/FILTERS + RIGHT LIST & LIVE CARD */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT COLUMN: FILTERS & SEARCH (7 Cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-sm p-5 sm:p-7 space-y-5">
          
          {/* SEARCH BAR */}
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="ಹೆಸರು ಅಥವಾ ಅರ್ಥ ಹುಡುಕಿ (Search by Name or Meaning e.g. Aarav, ಕೀರ್ತಿ)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-2xl text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"
            />
          </div>

          {/* GENDER TABS */}
          <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div className="flex gap-1.5">
              <button
                onClick={() => { setSelectedGender('all'); setShowOnlyFavs(false); }}
                className={`py-2 px-3 rounded-xl text-xs font-black border transition-all ${
                  selectedGender === 'all' && !showOnlyFavs
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200'
                }`}
              >
                🌟 ಎಲ್ಲಾ ({BABY_NAMES_DATA.length})
              </button>

              <button
                onClick={() => { setSelectedGender('boy'); setShowOnlyFavs(false); }}
                className={`py-2 px-3 rounded-xl text-xs font-black border transition-all ${
                  selectedGender === 'boy' && !showOnlyFavs
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                    : 'bg-blue-50 text-blue-800 border-blue-200'
                }`}
              >
                👦 ಗಂಡು ಮಗು
              </button>

              <button
                onClick={() => { setSelectedGender('girl'); setShowOnlyFavs(false); }}
                className={`py-2 px-3 rounded-xl text-xs font-black border transition-all ${
                  selectedGender === 'girl' && !showOnlyFavs
                    ? 'bg-pink-600 text-white border-pink-600 shadow-xs'
                    : 'bg-pink-50 text-pink-800 border-pink-200'
                }`}
              >
                👧 ಹೆಣ್ಣು ಮಗು
              </button>
            </div>

            <button
              onClick={() => setShowOnlyFavs(!showOnlyFavs)}
              className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 ${
                showOnlyFavs
                  ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${showOnlyFavs ? 'fill-white' : 'text-rose-500'}`} />
              <span>ಮೆಚ್ಚಿನ ({favorites.length})</span>
            </button>
          </div>

          {/* LETTER & RASHI DROPDOWNS */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-700 block">🔤 ಮೊದಲ ಅಕ್ಷರ (Starting Letter):</label>
              <select
                value={selectedLetter}
                onChange={(e) => setSelectedLetter(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 text-xs font-bold text-slate-900"
              >
                <option value="all">ಎಲ್ಲಾ ಅಕ್ಷರಗಳು (All Letters)</option>
                {['ಅ', 'ಆ', 'ಇ', 'ಉ', 'ಓ', 'ಕ', 'ಖ', 'ಗ', 'ಚ', 'ದ', 'ಧ', 'ನ', 'ಪ', 'ಭ', 'ಮ', 'ಯ', 'ರ', 'ಲ', 'ವ', 'ಶ', 'ಸ', 'ಹ'].map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-700 block">⭐ ರಾಶಿ (Zodiac Rashi):</label>
              <select
                value={selectedRashi}
                onChange={(e) => setSelectedRashi(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2 text-xs font-bold text-slate-900"
              >
                <option value="all">ಎಲ್ಲಾ ರಾಶಿಗಳು (All Rashis)</option>
                {['ಮೇಷ', 'ವೃಷಭ', 'ಮಿಥುನ', 'ಕರ್ಕಾಟಕ', 'ಸಿಂಹ', 'ಕನ್ಯಾ', 'ತುಲಾ', 'ವೃಶ್ಚಿಕ', 'ಧನುಸ್ಸು', 'ಮಕರ', 'ಕುಂಭ', 'ಮೀನ'].map((r) => (
                  <option key={r} value={r}>{r} ರಾಶಿ</option>
                ))}
              </select>
            </div>
          </div>

          {/* NAMES LIST TILES (INTERACTIVE CLICK TO SELECT FOR CARD) */}
          <div className="space-y-2.5 max-h-[460px] overflow-y-auto pr-1 custom-scrollbar">
            {filteredNames.length === 0 ? (
              <div className="text-center py-10 text-slate-400 font-bold text-xs">
                ಯಾವುದೇ ಹೆಸರು ಕಂಡುಬಂದಿಲ್ಲ. ದಯವಿಟ್ಟು ಬೇರೆ ಅಕ್ಷರ ಅಥವಾ ರಾಶಿ ಆಯ್ಕೆ ಮಾಡಿ.
              </div>
            ) : (
              filteredNames.map((item) => {
                const isSelected = selectedCardName.id === item.id;
                const isFav = favorites.includes(item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedCardName(item)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? item.gender === 'boy'
                          ? 'border-blue-500 bg-blue-50/80 ring-2 ring-blue-400/50 shadow-xs'
                          : 'border-pink-500 bg-pink-50/80 ring-2 ring-pink-400/50 shadow-xs'
                        : 'border-slate-200 bg-slate-50 hover:bg-slate-100/80'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-base shrink-0 shadow-xs ${
                          item.gender === 'boy' ? 'bg-blue-600 text-white' : 'bg-pink-600 text-white'
                        }`}
                      >
                        {item.gender === 'boy' ? '👦' : '👧'}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-black text-slate-900">{item.nameKn}</h4>
                          <span className="text-xs font-bold text-slate-500">({item.nameEn})</span>
                          <span className="text-[10px] font-bold bg-white text-slate-700 px-2 py-0.5 rounded-full border border-slate-200">
                            {item.rashi}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 font-medium mt-0.5">
                          ✨ <strong>ಅರ್ಥ:</strong> {item.meaningKn}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(item.id);
                        }}
                        className="p-2 rounded-xl hover:bg-white text-slate-400 hover:text-rose-600 transition-all"
                      >
                        <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-500 text-rose-500' : ''}`} />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>

        </div>

        {/* RIGHT COLUMN: LIVE NAMAKARANA ANNOUNCEMENT CARD PREVIEW (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          
          <div className={`bg-gradient-to-b ${selectedCardName.gender === 'boy' ? 'from-blue-950 via-indigo-900 to-slate-950' : 'from-pink-950 via-rose-900 to-slate-950'} text-white rounded-3xl border-4 ${selectedCardName.gender === 'boy' ? 'border-blue-400' : 'border-pink-400'} shadow-2xl p-6 space-y-4 select-none relative overflow-hidden text-xs`}>
            
            {/* Header */}
            <div className="text-center space-y-1 border-b border-white/20 pb-3">
              <p className="text-[11px] font-bold text-amber-300">|| ಶ್ರೀ ಕೃಷ್ಣಾಯ ನಮಃ ||</p>
              <h3 className="text-base sm:text-lg font-black text-white">👶 ನಾಮಕರಣ ಸಂಭ್ರಮ & ಹೆಸರು ಘೋಷಣೆ</h3>
            </div>

            {/* Selected Grand Name */}
            <div className="text-center space-y-1 bg-black/40 p-3.5 rounded-2xl border border-white/10">
              <span className="text-[10px] text-slate-300 block">ಮಗುವಿನ ಶುಭ ಹೆಸರು:</span>
              <div className="text-xl sm:text-2xl font-black text-amber-300">
                {selectedCardName.nameKn} ({selectedCardName.nameEn})
              </div>
              <p className="text-xs text-slate-200 mt-1">✨ {selectedCardName.meaningKn}</p>
            </div>

            {/* Astro Meta Info */}
            <div className="space-y-1.5 bg-black/30 p-3 rounded-xl border border-white/10 text-[11px]">
              <p>📅 ಜನ್ಮ ದಿನಾಂಕ: <strong>{babyDob} ({babyTob})</strong></p>
              <p>⭐ ರಾಶಿ & ನಕ್ಷತ್ರ: <strong>{selectedCardName.rashi} | {selectedCardName.nakshatra}</strong></p>
              <p>👨‍👩‍👧 ತಂದೆ-ತಾಯಿ: <strong>{parentsName}</strong></p>
            </div>

            {/* Card Meta Customizers */}
            <div className="space-y-2 pt-1 border-t border-white/10">
              <div>
                <label className="text-[10px] text-slate-300 block font-bold">ತಂದೆ-ತಾಯಿ ಹೆಸರು:</label>
                <input
                  type="text"
                  value={parentsName}
                  onChange={(e) => setParentsName(e.target.value)}
                  className="w-full bg-black/50 border border-white/20 rounded-xl p-1.5 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-[10px] text-slate-300 block font-bold">ಶುಭ ಸಂದೇಶ:</label>
                <input
                  type="text"
                  value={customWish}
                  onChange={(e) => setCustomWish(e.target.value)}
                  className="w-full bg-black/50 border border-white/20 rounded-xl p-1.5 text-xs text-white"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2 border-t border-white/20">
              <button
                onClick={downloadCardImage}
                className="w-full py-3.5 px-4 rounded-2xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5 text-slate-950" />
                <span>📸 Ultra-HD ನಾಮಕರಣ ಕಾರ್ಡ್ ಡೌನ್‌ಲೋಡ್ (PNG)</span>
              </button>

              <button
                onClick={shareToWhatsApp}
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-sm transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                <span>WhatsApp ನಲ್ಲಿ ಹೆಸರು & ಕಾರ್ಡ್ ಶೇರ್ ಮಾಡಿ</span>
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
