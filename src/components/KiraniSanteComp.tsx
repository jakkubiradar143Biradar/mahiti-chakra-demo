"use client";

import React, { useState, useRef } from 'react';
import { useLanguage } from './LanguageContext';
import {
  ShoppingCart, Plus, Trash2, CheckCircle2, Download, Share2,
  Printer, Sparkles, Search, Check, RefreshCw, X, ChevronRight,
  ClipboardList, Package, ListChecks
} from 'lucide-react';
import { KiraniList3D } from './LiveAppIcons3D';

interface KiraniPresetItem {
  id: string;
  nameKn: string;
  nameEn: string;
  category: string;
  defaultUnit: string;
}

interface SelectedItem {
  id: string;
  nameKn: string;
  nameEn: string;
  quantity: number;
  unit: string;
  category: string;
  checked: boolean;
}

const PRESET_CATEGORIES = [
  { id: 'all', nameKn: '🌐 ಎಲ್ಲಾ ಸಾಮಗ್ರಿಗಳು', nameEn: 'All Items' },
  { id: 'grains', nameKn: '🌾 ಧಾನ್ಯ & ಬೇಳೆಕಾಳು', nameEn: 'Grains & Dals' },
  { id: 'oils', nameKn: '🛢️ ಎಣ್ಣೆ & ತುಪ್ಪ', nameEn: 'Oils & Ghee' },
  { id: 'spices', nameKn: '🌶️ ಮಸಾಲೆ ಪದಾರ್ಥಗಳು', nameEn: 'Spices & Masala' },
  { id: 'veggies', nameKn: '🥦 ತರಕಾರಿ & ಸೊಪ್ಪು', nameEn: 'Vegetables' },
  { id: 'dairy', nameKn: '🥛 ಹಾಲು, ಚಹಾ & ಕಾಫಿ', nameEn: 'Dairy & Beverages' },
  { id: 'cleaning', nameKn: '🧼 ಸೋಪು & ಕ್ಲೀನಿಂಗ್', nameEn: 'Cleaning & Bath' },
  { id: 'puja', nameKn: '🪔 ಪೂಜಾ ಸಾಮಗ್ರಿಗಳು', nameEn: 'Puja Items' },
  { id: 'dryfruits', nameKn: '🥜 ಡ್ರೈಫ್ರೂಟ್ಸ್ & ತಿಂಡಿ', nameEn: 'Dryfruits & Snacks' },
];

const PRESET_ITEMS: KiraniPresetItem[] = [
  // 🌾 ಧಾನ್ಯ & ಬೇಳೆಕಾಳು
  { id: 'g1', nameKn: 'ಅಕ್ಕಿ (Sona Masoori Rice)', nameEn: 'Rice', category: 'grains', defaultUnit: 'kg' },
  { id: 'g2', nameKn: 'ತೊಗರಿ ಬೇಳೆ (Toor Dal)', nameEn: 'Toor Dal', category: 'grains', defaultUnit: 'kg' },
  { id: 'g3', nameKn: 'ಹೆಸರು ಬೇಳೆ (Moong Dal)', nameEn: 'Moong Dal', category: 'grains', defaultUnit: 'g' },
  { id: 'g4', nameKn: 'ಉದ್ದಿನ ಬೇಳೆ (Urad Dal)', nameEn: 'Urad Dal', category: 'grains', defaultUnit: 'kg' },
  { id: 'g5', nameKn: 'ಕಡಲೆ ಬೇಳೆ (Chana Dal)', nameEn: 'Chana Dal', category: 'grains', defaultUnit: 'kg' },
  { id: 'g6', nameKn: 'ಗೋಧಿ ಹಿಟ್ಟು (Wheat Atta)', nameEn: 'Wheat Flour', category: 'grains', defaultUnit: 'kg' },
  { id: 'g7', nameKn: 'ರವೆ (Upma Rava)', nameEn: 'Rava', category: 'grains', defaultUnit: 'kg' },
  { id: 'g8', nameKn: 'ಮೈದಾ ಹಿಟ್ಟು (Maida)', nameEn: 'Maida', category: 'grains', defaultUnit: 'kg' },
  { id: 'g9', nameKn: 'ಅವಲಕ್ಕಿ (Poha)', nameEn: 'Poha', category: 'grains', defaultUnit: 'kg' },
  { id: 'g10', nameKn: 'ಹುರಿಗಡಲೆ (Roasted Gram)', nameEn: 'Roasted Gram', category: 'grains', defaultUnit: 'g' },
  { id: 'g11', nameKn: 'ಶಾವಿಗೆ (Vermicelli)', nameEn: 'Vermicelli', category: 'grains', defaultUnit: 'pkt' },
  { id: 'g12', nameKn: 'ರಾಗಿ ಹಿಟ್ಟು (Ragi Flour)', nameEn: 'Ragi Flour', category: 'grains', defaultUnit: 'kg' },

  // 🛢️ ಎಣ್ಣೆ & ತುಪ್ಪ
  { id: 'o1', nameKn: 'ಸೂರ್ಯಕಾಂತಿ ಎಣ್ಣೆ (Sunflower Oil)', nameEn: 'Sunflower Oil', category: 'oils', defaultUnit: 'L' },
  { id: 'o2', nameKn: 'ಕಡಲೆಕಾಯಿ ಎಣ್ಣೆ (Groundnut Oil)', nameEn: 'Groundnut Oil', category: 'oils', defaultUnit: 'L' },
  { id: 'o3', nameKn: 'ನಂದಿನಿ ತುಪ್ಪ (Nandini Ghee)', nameEn: 'Pure Ghee', category: 'oils', defaultUnit: 'g' },
  { id: 'o4', nameKn: 'ಕೊಬ್ಬರಿ ಎಣ್ಣೆ (Coconut Oil)', nameEn: 'Coconut Oil', category: 'oils', defaultUnit: 'L' },
  { id: 'o5', nameKn: 'ದೀಪದ ಎಣ್ಣೆ (Puja Lamp Oil)', nameEn: 'Puja Oil', category: 'oils', defaultUnit: 'L' },

  // 🌶️ ಮಸಾಲೆ ಪದಾರ್ಥಗಳು
  { id: 's1', nameKn: 'ಸಾಸಿವೆ (Mustard Seeds)', nameEn: 'Mustard', category: 'spices', defaultUnit: 'g' },
  { id: 's2', nameKn: 'ಜೀರಿಗೆ (Jeera / Cumin)', nameEn: 'Cumin', category: 'spices', defaultUnit: 'g' },
  { id: 's3', nameKn: 'ಅರಿಶಿನ ಪುಡಿ (Turmeric Powder)', nameEn: 'Turmeric Powder', category: 'spices', defaultUnit: 'g' },
  { id: 's4', nameKn: 'ಖಾರದ ಪುಡಿ (Chilli Powder)', nameEn: 'Chilli Powder', category: 'spices', defaultUnit: 'g' },
  { id: 's5', nameKn: 'ಧನಿಯಾ ಪುಡಿ (Coriander Powder)', nameEn: 'Coriander Powder', category: 'spices', defaultUnit: 'g' },
  { id: 's6', nameKn: 'ಸಾಂಬಾರ್ ಪುಡಿ (Sambar Powder)', nameEn: 'Sambar Powder', category: 'spices', defaultUnit: 'pkt' },
  { id: 's7', nameKn: 'ಗರಂ ಮಸಾಲಾ (Garam Masala)', nameEn: 'Garam Masala', category: 'spices', defaultUnit: 'g' },
  { id: 's8', nameKn: 'ಉಪ್ಪು (Salt)', nameEn: 'Salt', category: 'spices', defaultUnit: 'pkt' },
  { id: 's9', nameKn: 'ಸಕ್ಕರೆ (Sugar)', nameEn: 'Sugar', category: 'spices', defaultUnit: 'kg' },
  { id: 's10', nameKn: 'ಬೆಲ್ಲ (Jaggery)', nameEn: 'Jaggery', category: 'spices', defaultUnit: 'kg' },
  { id: 's11', nameKn: 'ಹುಣಸೆಹಣ್ಣು (Tamarind)', nameEn: 'Tamarind', category: 'spices', defaultUnit: 'g' },
  { id: 's12', nameKn: 'ಕಾಳುಮೆಣಸು (Black Pepper)', nameEn: 'Black Pepper', category: 'spices', defaultUnit: 'g' },
  { id: 's13', nameKn: 'ಏಲಕ್ಕಿ (Cardamom)', nameEn: 'Cardamom', category: 'spices', defaultUnit: 'g' },
  { id: 's14', nameKn: 'ಲವಂಗ (Cloves)', nameEn: 'Cloves', category: 'spices', defaultUnit: 'g' },
  { id: 's15', nameKn: 'ಇಂಗು (Asafoetida / Hing)', nameEn: 'Hing', category: 'spices', defaultUnit: 'piece' },

  // 🥦 ತರಕಾರಿ & ಸೊಪ್ಪು
  { id: 'v1', nameKn: 'ಈರುಳ್ಳಿ (Onions)', nameEn: 'Onions', category: 'veggies', defaultUnit: 'kg' },
  { id: 'v2', nameKn: 'ಆಲೂಗಡ್ಡೆ (Potatoes)', nameEn: 'Potatoes', category: 'veggies', defaultUnit: 'kg' },
  { id: 'v3', nameKn: 'ಟೊಮೆಟೊ (Tomatoes)', nameEn: 'Tomatoes', category: 'veggies', defaultUnit: 'kg' },
  { id: 'v4', nameKn: 'ಬೆಳ್ಳುಳ್ಳಿ (Garlic)', nameEn: 'Garlic', category: 'veggies', defaultUnit: 'g' },
  { id: 'v5', nameKn: 'ಶುಂಠಿ (Ginger)', nameEn: 'Ginger', category: 'veggies', defaultUnit: 'g' },
  { id: 'v6', nameKn: 'ಹಸಿಮೆಣಸಿನಕಾಯಿ (Green Chillies)', nameEn: 'Green Chillies', category: 'veggies', defaultUnit: 'g' },
  { id: 'v7', nameKn: 'ಕೊತ್ತಂಬರಿ ಸೊಪ್ಪು (Coriander Leaves)', nameEn: 'Coriander', category: 'veggies', defaultUnit: 'ಕಟ್ಟು' },
  { id: 'v8', nameKn: 'ಕರಿಬೇವಿನ ಸೊಪ್ಪು (Curry Leaves)', nameEn: 'Curry Leaves', category: 'veggies', defaultUnit: 'ಕಟ್ಟು' },
  { id: 'v9', nameKn: 'ಕ್ಯಾರೆಟ್ (Carrots)', nameEn: 'Carrots', category: 'veggies', defaultUnit: 'kg' },
  { id: 'v10', nameKn: 'ಬೀನ್ಸ್ (Beans)', nameEn: 'Beans', category: 'veggies', defaultUnit: 'kg' },
  { id: 'v11', nameKn: 'ತೆಂಗಿನಕಾಯಿ (Coconut)', nameEn: 'Coconut', category: 'veggies', defaultUnit: 'piece' },
  { id: 'v12', nameKn: 'ನಿಂಬೆಹಣ್ಣು (Lemon)', nameEn: 'Lemon', category: 'veggies', defaultUnit: 'piece' },

  // 🥛 ಹಾಲು, ಚಹಾ & ಕಾಫಿ
  { id: 'd1', nameKn: 'ಹಾಲು (Nandini Milk)', nameEn: 'Milk', category: 'dairy', defaultUnit: 'pkt' },
  { id: 'd2', nameKn: 'ಮೊಸರು (Curd)', nameEn: 'Curd', category: 'dairy', defaultUnit: 'pkt' },
  { id: 'd3', nameKn: 'ಚಹಾ ಪುಡಿ (Tea Powder)', nameEn: 'Tea Powder', category: 'dairy', defaultUnit: 'g' },
  { id: 'd4', nameKn: 'ಕಾಫಿ ಪುಡಿ (Coffee Powder)', nameEn: 'Coffee Powder', category: 'dairy', defaultUnit: 'g' },
  { id: 'd5', nameKn: 'ಪನ್ನೀರ್ (Paneer)', nameEn: 'Paneer', category: 'dairy', defaultUnit: 'g' },

  // 🧼 ಸೋಪು & ಕ್ಲೀನಿಂಗ್
  { id: 'c1', nameKn: 'ಸ್ನಾನದ ಸೋಪು (Bathing Soap)', nameEn: 'Bath Soap', category: 'cleaning', defaultUnit: 'piece' },
  { id: 'c2', nameKn: 'ಬಟ್ಟೆ ಸೋಪು / ಪೌಡರ್ (Washing Powder)', nameEn: 'Detergent', category: 'cleaning', defaultUnit: 'kg' },
  { id: 'c3', nameKn: 'ಪಾತ್ರೆ ತೊಳೆಯುವ ಸೋಪು (Dishwash Bar/Gel)', nameEn: 'Dishwash', category: 'cleaning', defaultUnit: 'piece' },
  { id: 'c4', nameKn: 'ಟೂತ್‌ಪೇಸ್ಟ್ (Toothpaste)', nameEn: 'Toothpaste', category: 'cleaning', defaultUnit: 'piece' },
  { id: 'c5', nameKn: 'ಶಾಂಪೂ (Shampoo)', nameEn: 'Shampoo', category: 'cleaning', defaultUnit: 'pkt' },
  { id: 'c6', nameKn: 'ಫಿನಾಯಿಲ್ / ಫ್ಲೋರ್ ಕ್ಲೀನರ್ (Floor Cleaner)', nameEn: 'Floor Cleaner', category: 'cleaning', defaultUnit: 'L' },

  // 🪔 ಪೂಜಾ ಸಾಮಗ್ರಿಗಳು
  { id: 'p1', nameKn: 'ಊದುಬತ್ತಿ (Agarbatti)', nameEn: 'Incense Sticks', category: 'puja', defaultUnit: 'pkt' },
  { id: 'p2', nameKn: 'ಕರ್ಪೂರ (Camphor)', nameEn: 'Camphor', category: 'puja', defaultUnit: 'pkt' },
  { id: 'p3', nameKn: 'ಹತ್ತಿ ಬತ್ತಿ (Cotton Wicks)', nameEn: 'Cotton Wicks', category: 'puja', defaultUnit: 'pkt' },
  { id: 'p4', nameKn: 'ಕುಂಕುಮ & ವಿಭೂತಿ (Kumkum / Vibhuti)', nameEn: 'Kumkum', category: 'puja', defaultUnit: 'pkt' },
  { id: 'p5', nameKn: 'ಅಡಿಕೆ & ವೀಳ್ಯದೆಲೆ (Betel Leaves & Nut)', nameEn: 'Betel Leaves', category: 'puja', defaultUnit: 'piece' },

  // 🥜 ಡ್ರೈಫ್ರೂಟ್ಸ್ & ತಿಂಡಿ
  { id: 'df1', nameKn: 'ಗೋಡಂಬಿ (Cashew Nuts)', nameEn: 'Cashews', category: 'dryfruits', defaultUnit: 'g' },
  { id: 'df2', nameKn: 'ದ್ರಾಕ್ಷಿ (Dry Raisins)', nameEn: 'Raisins', category: 'dryfruits', defaultUnit: 'g' },
  { id: 'df3', nameKn: 'ಬಾದಾಮಿ (Almonds)', nameEn: 'Almonds', category: 'dryfruits', defaultUnit: 'g' },
  { id: 'df4', nameKn: 'ಬಿಸ್ಕತ್ (Biscuits)', nameEn: 'Biscuits', category: 'dryfruits', defaultUnit: 'pkt' },
];

export const KiraniSanteComp: React.FC = () => {
  const { lang } = useLanguage();
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([
    { id: 'g1', nameKn: 'ಅಕ್ಕಿ (Sona Masoori Rice)', nameEn: 'Rice', quantity: 5, unit: 'kg', category: 'grains', checked: false },
    { id: 'g2', nameKn: 'ತೊಗರಿ ಬೇಳೆ (Toor Dal)', nameEn: 'Toor Dal', quantity: 1, unit: 'kg', category: 'grains', checked: false },
    { id: 'o1', nameKn: 'ಸೂರ್ಯಕಾಂತಿ ಎಣ್ಣೆ (Sunflower Oil)', nameEn: 'Sunflower Oil', quantity: 2, unit: 'L', category: 'oils', checked: false },
    { id: 's9', nameKn: 'ಸಕ್ಕರೆ (Sugar)', nameEn: 'Sugar', quantity: 2, unit: 'kg', category: 'spices', checked: false },
    { id: 'v1', nameKn: 'ಈರುಳ್ಳಿ (Onions)', nameEn: 'Onions', quantity: 2, unit: 'kg', category: 'veggies', checked: false },
  ]);

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showAddCustomModal, setShowAddCustomModal] = useState<boolean>(false);
  const [showPreviewModal, setShowPreviewModal] = useState<boolean>(false);

  // Custom Item Form State
  const [customName, setCustomName] = useState('');
  const [customQty, setCustomQty] = useState<number>(1);
  const [customUnit, setCustomUnit] = useState<string>('kg');
  const [customCategory, setCustomCategory] = useState<string>('grains');

  const printAreaRef = useRef<HTMLDivElement | null>(null);

  // Toggle item in selected list
  const togglePresetItem = (preset: KiraniPresetItem) => {
    const exists = selectedItems.find((item) => item.id === preset.id);
    if (exists) {
      setSelectedItems(selectedItems.filter((item) => item.id !== preset.id));
    } else {
      setSelectedItems([
        ...selectedItems,
        {
          id: preset.id,
          nameKn: preset.nameKn,
          nameEn: preset.nameEn,
          quantity: preset.defaultUnit === 'g' ? 250 : 1,
          unit: preset.defaultUnit,
          category: preset.category,
          checked: false,
        },
      ]);
    }
  };

  // Update item quantity
  const updateQuantity = (id: string, newQty: number) => {
    if (newQty <= 0) {
      setSelectedItems(selectedItems.filter((i) => i.id !== id));
    } else {
      setSelectedItems(
        selectedItems.map((i) => (i.id === id ? { ...i, quantity: newQty } : i))
      );
    }
  };

  // Update item unit
  const updateUnit = (id: string, newUnit: string) => {
    setSelectedItems(
      selectedItems.map((i) => (i.id === id ? { ...i, unit: newUnit } : i))
    );
  };

  // Add custom manual item
  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customName.trim()) return;

    const newItem: SelectedItem = {
      id: `custom-${Date.now()}`,
      nameKn: customName.trim(),
      nameEn: customName.trim(),
      quantity: customQty,
      unit: customUnit,
      category: customCategory,
      checked: false,
    };

    setSelectedItems([...selectedItems, newItem]);
    setCustomName('');
    setCustomQty(1);
    setShowAddCustomModal(false);
  };

  // Generate and Download Canvas Image
  const downloadAsImage = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 300 + selectedItems.length * 40;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Background Gradient
    const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    grad.addColorStop(0, '#f8fafc');
    grad.addColorStop(1, '#ffffff');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Header Background
    ctx.fillStyle = '#d97706';
    ctx.fillRect(0, 0, canvas.width, 110);

    // Header Title
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 30px sans-serif';
    ctx.fillText('🛍️ ಕಿರಣಿ & ಸಂತೆ ಸಾಮಗ್ರಿಗಳ ಪಟ್ಟಿ', 40, 50);

    // Subtitle & Date
    ctx.font = '16px sans-serif';
    const dateStr = `ದಿನಾಂಕ: ${new Date().toLocaleDateString('kn-IN', { day: 'numeric', month: 'long', year: 'numeric' })} | ಒಟ್ಟು: ${selectedItems.length} ಸಾಮಗ್ರಿಗಳು`;
    ctx.fillText(dateStr, 40, 85);

    // Items list
    ctx.fillStyle = '#0f172a';
    let y = 160;
    selectedItems.forEach((item, idx) => {
      // Checkbox square
      ctx.strokeStyle = '#d97706';
      ctx.lineWidth = 2;
      ctx.strokeRect(40, y - 18, 20, 20);

      // Item Name
      ctx.font = 'bold 18px sans-serif';
      ctx.fillStyle = '#1e293b';
      ctx.fillText(`${idx + 1}. ${item.nameKn}`, 75, y);

      // Qty & Unit Pill
      ctx.font = 'bold 18px sans-serif';
      ctx.fillStyle = '#b45309';
      ctx.fillText(`${item.quantity} ${item.unit}`, 650, y);

      // Separator line
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(40, y + 12);
      ctx.lineTo(760, y + 12);
      ctx.stroke();

      y += 40;
    });

    // Footer
    ctx.fillStyle = '#64748b';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText('✨ ಧನ್ಯವಾದಗಳು! - ಮಾಹಿತಿ ಚಕ್ರ (Mahiti Chakra App)', 40, y + 35);

    // Trigger Download
    const link = document.createElement('a');
    link.download = `kirani-sante-list-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  // 📸 & 💬 SMART WHATSAPP & IMAGE SHARE WITH WEBSITE LINK
  const shareToWhatsApp = async () => {
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 300 + selectedItems.length * 40;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Background Gradient
    const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    grad.addColorStop(0, '#f8fafc');
    grad.addColorStop(1, '#ffffff');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Header Background
    ctx.fillStyle = '#d97706';
    ctx.fillRect(0, 0, canvas.width, 110);

    // Header Title
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 30px sans-serif';
    ctx.fillText('🛍️ ಕಿರಣಿ & ಸಂತೆ ಸಾಮಗ್ರಿಗಳ ಪಟ್ಟಿ', 40, 50);

    // Subtitle & Date
    ctx.font = '16px sans-serif';
    const dateStr = `ದಿನಾಂಕ: ${new Date().toLocaleDateString('kn-IN', { day: 'numeric', month: 'long', year: 'numeric' })} | ಒಟ್ಟು: ${selectedItems.length} ಸಾಮಗ್ರಿಗಳು`;
    ctx.fillText(dateStr, 40, 85);

    // Items list
    ctx.fillStyle = '#0f172a';
    let y = 160;
    selectedItems.forEach((item, idx) => {
      // Checkbox square
      ctx.strokeStyle = '#d97706';
      ctx.lineWidth = 2;
      ctx.strokeRect(40, y - 18, 20, 20);

      // Item Name
      ctx.font = 'bold 18px sans-serif';
      ctx.fillStyle = '#1e293b';
      ctx.fillText(`${idx + 1}. ${item.nameKn}`, 75, y);

      // Qty & Unit Pill
      ctx.font = 'bold 18px sans-serif';
      ctx.fillStyle = '#b45309';
      ctx.fillText(`${item.quantity} ${item.unit}`, 650, y);

      // Separator line
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(40, y + 12);
      ctx.lineTo(760, y + 12);
      ctx.stroke();

      y += 40;
    });

    // Footer
    ctx.fillStyle = '#64748b';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText('✨ ಧನ್ಯವಾದಗಳು! - ಮಾಹಿತಿ ಚಕ್ರ (Mahiti Chakra App)', 40, y + 35);

    const today = new Date().toLocaleDateString('kn-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    const siteUrl = typeof window !== 'undefined' ? `${window.location.origin}/kirani-sante` : 'https://mahitichakra.com/kirani-sante';
    
    let text = `🛍️ *ಕಿರಣಿ & ಸಂತೆ ಸಾಮಗ್ರಿಗಳ ಪಟ್ಟಿ* (${today})\n\n`;
    selectedItems.forEach((item, idx) => {
      text += `${idx + 1}. ${item.nameKn}: *${item.quantity} ${item.unit}*\n`;
    });
    text += `\n✨ ಒಟ್ಟು ಸಾಮಗ್ರಿಗಳು: ${selectedItems.length} ಐಟಂಗಳು\n\n🌐 *ಉಚಿತವಾಗಿ ಸಂತೆ ಲಿಸ್ಟ್ ತಯಾರಿಸಿ:*\n👉 ${siteUrl}`;

    // Try Web Share API with Image File (Mobile WhatsApp Image Sharing)
    canvas.toBlob(async (blob) => {
      if (blob && navigator.share && navigator.canShare) {
        const file = new File([blob], `kirani-sante-list-${Date.now()}.png`, { type: 'image/png' });
        if (navigator.canShare({ files: [file] })) {
          try {
            await navigator.share({
              files: [file],
              title: 'ಕಿರಣಿ & ಸಂತೆ ಸಾಮಗ್ರಿಗಳ ಪಟ್ಟಿ',
              text: text,
            });
            return;
          } catch (err) {
            console.log('Share canceled or fallback to link', err);
          }
        }
      }

      // Fallback for Desktop/Browser: Download Image & Open WhatsApp
      downloadAsImage();
      const encoded = encodeURIComponent(text);
      window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
    }, 'image/png');
  };

  const filteredPresets = PRESET_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.nameKn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.nameEn.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      
      {/* 🌟 HEADER BANNER */}
      <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 rounded-3xl p-6 sm:p-8 text-slate-950 shadow-xl border-2 border-amber-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="flex items-center gap-4 relative z-10">
          <div className="shrink-0 filter drop-shadow-md">
            <KiraniList3D className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase bg-slate-950 text-amber-400 px-2.5 py-0.5 rounded-full shadow-xs">
              <Sparkles className="w-3 h-3" /> 100% SMART SHOPPING LIST
            </span>
            <h1 className="text-xl sm:text-3xl font-black tracking-tight text-slate-950">
              {lang === 'kn' ? '🛍️ ಕಿರಣಿ ಸಂತೆ ಲಿಸ್ಟ್ ಮೇಕರ್' : '🛍️ Smart Grocery & Sante Shopping List'}
            </h1>
            <p className="text-xs sm:text-sm font-bold text-amber-950">
              {lang === 'kn'
                ? 'ಧಾನ್ಯ, ಎಣ್ಣೆ, ಮಸಾಲೆ, ತರಕಾರಿಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಿ 1-ಕ್ಲಿಕ್‌ನಲ್ಲಿ HD ಲಿಸ್ಟ್ ಇಮೇಜ್ & WhatsApp ಶೇರ್ ಮಾಡಿ!'
                : 'Select groceries & vegetables, customize quantities, and generate an HD checklist card!'}
            </p>
          </div>
        </div>

        {/* TOP COUNTER BADGE */}
        <div className="bg-slate-950 text-white p-4 rounded-2xl border border-amber-400/40 shadow-md text-center min-w-[140px] shrink-0 self-stretch md:self-auto">
          <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider block">ಆಯ್ಕೆ ಮಾಡಿದ ಐಟಂಗಳು</span>
          <span className="text-3xl font-black text-white">{selectedItems.length}</span>
          <span className="text-[10px] text-slate-400 block mt-0.5">ಸಾಮಗ್ರಿಗಳು</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 🔮 MAIN 2-COLUMN WORKSPACE: LEFT PRESETS + RIGHT ACTIVE LIST */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT COLUMN: 100+ PRESET SELECTOR (7 Cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-sm p-5 sm:p-6 space-y-4">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
            <div>
              <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
                <Package className="w-5 h-5 text-amber-600" />
                <span>{lang === 'kn' ? '1. ಸಾಮಗ್ರಿಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಿ' : '1. Select Items to Add'}</span>
              </h2>
              <p className="text-xs text-slate-500">ಕ್ಲಿಕ್ ಮಾಡುವ ಮೂಲಕ ಸುಲಭವಾಗಿ ನಿಮ್ಮ ಲಿಸ್ಟ್‌ಗೆ ಸೇರಿಸಿ</p>
            </div>

            <button
              onClick={() => setShowAddCustomModal(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs shadow-sm transition-transform active:scale-95 shrink-0"
            >
              <Plus className="w-4 h-4" />
              <span>+ ಹೊಸ ಪದಾರ್ಥ ಸೇರಿಸಿ</span>
            </button>
          </div>

          {/* SEARCH BAR */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={lang === 'kn' ? 'ಸಾಮಗ್ರಿ ಹೆಸರು ಹುಡುಕಿ (ಉದಾ: ಅಕ್ಕಿ, ಬೇಳೆ, ಎಣ್ಣೆ, ಸಕ್ಕರೆ)...' : 'Search item (e.g. Rice, Oil, Sugar)...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-2.5 pl-10 pr-4 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
            />
          </div>

          {/* CATEGORY FILTER PILLS */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full no-scrollbar">
            {PRESET_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all shrink-0 border ${
                  activeCategory === cat.id
                    ? 'bg-slate-950 text-amber-400 border-slate-950 shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {lang === 'kn' ? cat.nameKn : cat.nameEn}
              </button>
            ))}
          </div>

          {/* PRESETS GRID TILES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[480px] overflow-y-auto pr-1 custom-scrollbar">
            {filteredPresets.map((preset) => {
              const isSelected = selectedItems.some((i) => i.id === preset.id);
              return (
                <button
                  key={preset.id}
                  onClick={() => togglePresetItem(preset)}
                  className={`p-3 rounded-2xl border text-left transition-all flex items-center justify-between gap-2 group ${
                    isSelected
                      ? 'bg-amber-500/10 border-amber-400 text-slate-950 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-100/80'
                  }`}
                >
                  <div className="min-w-0">
                    <span className="text-xs font-bold block truncate group-hover:text-amber-700">
                      {preset.nameKn}
                    </span>
                    <span className="text-[10px] text-slate-500 block">
                      Default: {preset.defaultUnit}
                    </span>
                  </div>

                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 ${
                    isSelected ? 'bg-amber-500 text-slate-950 font-black shadow-xs' : 'border border-slate-300 text-slate-400'
                  }`}>
                    {isSelected ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>
              );
            })}
          </div>

        </div>

        {/* RIGHT COLUMN: ACTIVE SHOPPING CART LIST (5 Cols) */}
        <div className="lg:col-span-5 bg-white rounded-3xl border-2 border-amber-300/80 shadow-md p-5 sm:p-6 space-y-4">
          
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <ListChecks className="w-5 h-5 text-amber-600" />
              <h2 className="text-base font-black text-slate-900">
                {lang === 'kn' ? '2. ಸಂತೆ ಲಿಸ್ಟ್ ಪರಿಶೀಲನೆ' : '2. Your Shopping List'}
              </h2>
            </div>

            {selectedItems.length > 0 && (
              <button
                onClick={() => setSelectedItems([])}
                className="text-[11px] font-bold text-rose-600 hover:underline flex items-center gap-1"
              >
                <Trash2 className="w-3 h-3" />
                <span>ಖಾಲಿ ಮಾಡಿ</span>
              </button>
            )}
          </div>

          {/* ACTIVE ITEMS CONTAINER */}
          {selectedItems.length > 0 ? (
            <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1 custom-scrollbar">
              {selectedItems.map((item, idx) => (
                <div
                  key={item.id}
                  className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-2 shadow-2xs"
                >
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-black text-slate-900 block truncate">
                      {idx + 1}. {item.nameKn}
                    </span>
                  </div>

                  {/* Quantity & Unit Stepper */}
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - (item.unit === 'g' ? 250 : 1))}
                      className="w-6 h-6 rounded-lg bg-white border border-slate-300 text-slate-700 font-black text-xs hover:bg-slate-200 flex items-center justify-center"
                    >
                      -
                    </button>

                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, Math.max(1, Number(e.target.value)))}
                      className="w-12 text-center bg-white border border-slate-300 rounded-lg text-xs font-black py-0.5 text-slate-900 focus:outline-none"
                    />

                    <select
                      value={item.unit}
                      onChange={(e) => updateUnit(item.id, e.target.value)}
                      className="bg-white border border-slate-300 rounded-lg text-[10px] font-bold py-1 px-1 text-slate-800 focus:outline-none"
                    >
                      <option value="kg">kg</option>
                      <option value="g">g</option>
                      <option value="L">L</option>
                      <option value="pkt">pkt</option>
                      <option value="piece">piece</option>
                      <option value="ಕಟ್ಟು">ಕಟ್ಟು</option>
                    </select>

                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + (item.unit === 'g' ? 250 : 1))}
                      className="w-6 h-6 rounded-lg bg-white border border-slate-300 text-slate-700 font-black text-xs hover:bg-slate-200 flex items-center justify-center"
                    >
                      +
                    </button>

                    <button
                      onClick={() => setSelectedItems(selectedItems.filter((i) => i.id !== item.id))}
                      className="w-6 h-6 rounded-lg text-rose-500 hover:bg-rose-50 flex items-center justify-center"
                      title="Remove"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center space-y-2 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/50">
              <ShoppingCart className="w-10 h-10 text-slate-300 mx-auto" />
              <p className="text-xs font-bold text-slate-500">
                ಇನ್ನೂ ಯಾವುದೇ ಸಾಮಗ್ರಿ ಸೇರಿಸಿಲ್ಲ.<br />ಎಡಬದಿಯಿಂದ ಕ್ಲಿಕ್ ಮಾಡಿ ಸೇರಿಸಿ.
              </p>
            </div>
          )}

          {/* ACTION BUTTONS: GENERATE HD IMAGE & WHATSAPP */}
          {selectedItems.length > 0 && (
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <button
                onClick={() => setShowPreviewModal(true)}
                className="w-full py-3 px-4 rounded-2xl bg-slate-950 hover:bg-slate-900 text-amber-400 font-black text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>📸 ಪ್ರೀಮಿಯಂ ಲಿಸ್ಟ್ ಕಾರ್ಡ್ ನೋಡಿ & ಡೌನ್‌ಲೋಡ್ (Preview HD Card)</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={downloadAsImage}
                  className="py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs shadow-sm transition-all active:scale-95 flex items-center justify-center gap-1.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Image Download</span>
                </button>

                <button
                  onClick={shareToWhatsApp}
                  className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-sm transition-all active:scale-95 flex items-center justify-center gap-1.5"
                >
                  <Share2 className="w-4 h-4" />
                  <span>WhatsApp Share</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>

      {/* ========================================================================= */}
      {/* 📸 MODAL: PREMIUM VISUAL CARD PREVIEW */}
      {/* ========================================================================= */}
      {showPreviewModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-5 relative animate-fadeIn">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span>ಕಿರಣಿ & ಸಂತೆ ಪ್ರೀಮಿಯಂ ಲಿಸ್ಟ್ ಕಾರ್ಡ್</span>
              </h3>
              <button
                onClick={() => setShowPreviewModal(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* AESTHETIC SHOPPING CARD TO PREVIEW / PRINT */}
            <div ref={printAreaRef} className="bg-gradient-to-b from-amber-50/80 to-white p-5 rounded-2xl border-2 border-amber-300 shadow-sm space-y-4">
              
              <div className="border-b-2 border-amber-400 pb-3 flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-black text-slate-950">🛍️ ಕಿರಣಿ & ಸಂತೆ ಸಾಮಗ್ರಿಗಳ ಪಟ್ಟಿ</h4>
                  <span className="text-[10px] text-amber-900 font-bold">
                    ದಿನಾಂಕ: {new Date().toLocaleDateString('kn-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                </div>
                <span className="text-xs font-black bg-amber-400 text-slate-950 px-2.5 py-1 rounded-full">
                  {selectedItems.length} Items
                </span>
              </div>

              <div className="space-y-2 max-h-[280px] overflow-y-auto pr-1">
                {selectedItems.map((item, idx) => (
                  <div key={item.id} className="flex items-center justify-between text-xs py-1 border-b border-slate-200/60 font-bold">
                    <span className="text-slate-900 flex items-center gap-2">
                      <span className="w-4 h-4 rounded border border-amber-500 inline-block" />
                      {idx + 1}. {item.nameKn}
                    </span>
                    <span className="text-amber-800 font-black">
                      {item.quantity} {item.unit}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-center text-[10px] text-slate-500 font-bold border-t border-amber-200">
                ✨ ಧನ್ಯವಾದಗಳು! - ಮಾಹಿತಿ ಚಕ್ರ (Mahiti Chakra Portal)
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={downloadAsImage}
                className="py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs shadow-md transition-transform active:scale-95 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>HD Image Download ➔</span>
              </button>

              <button
                onClick={shareToWhatsApp}
                className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-md transition-transform active:scale-95 flex items-center justify-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                <span>WhatsApp Share ➔</span>
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ➕ MODAL: ADD CUSTOM ITEM */}
      {/* ========================================================================= */}
      {showAddCustomModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-sm font-black text-slate-900 flex items-center gap-2">
                <Plus className="w-4 h-4 text-amber-600" />
                <span>ಹೊಸ ಸಾಮಗ್ರಿ ಸೇರಿಸಿ (Add Custom Item)</span>
              </h3>
              <button onClick={() => setShowAddCustomModal(false)} className="text-slate-400 hover:text-slate-800">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddCustom} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">ಸಾಮಗ್ರಿಯ ಹೆಸರು (Item Name)</label>
                <input
                  type="text"
                  required
                  placeholder="ಉದಾ: ಕೊಬ್ಬರಿ ಮಿಠಾಯಿ, ಬಾದಾಮಿ ಹಾಲು..."
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">ಪ್ರಮಾಣ (Quantity)</label>
                  <input
                    type="number"
                    min={1}
                    value={customQty}
                    onChange={(e) => setCustomQty(Math.max(1, Number(e.target.value)))}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">ಅಳತೆ (Unit)</label>
                  <select
                    value={customUnit}
                    onChange={(e) => setCustomUnit(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                  >
                    <option value="kg">kg</option>
                    <option value="g">g</option>
                    <option value="L">L</option>
                    <option value="pkt">pkt</option>
                    <option value="piece">piece</option>
                    <option value="ಕಟ್ಟು">ಕಟ್ಟು</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs rounded-xl shadow-md transition-transform active:scale-95"
              >
                + ಲಿಸ್ಟ್‌ಗೆ ಸೇರಿಸಿ (Add to List)
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
