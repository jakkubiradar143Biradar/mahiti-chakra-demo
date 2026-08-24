"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { Notebook, Plus, Trash2, CheckCircle2, Circle } from 'lucide-react';

interface NoteItem {
  id: string;
  text: string;
  completed: boolean;
}

export const QuickNotesComp: React.FC = () => {
  const { lang } = useLanguage();
  const [notes, setNotes] = useState<NoteItem[]>([]);
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('user_quick_notes');
    if (saved) {
      try {
        setNotes(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    } else {
      setNotes([
        { id: '1', text: 'ಅಕ್ಕಿ 25 ಕೆಜಿ ಚೀಲ ಕೊಡುವುದು', completed: false },
        { id: '2', text: 'ಚಿನ್ನದ ಲೈವ್ ಬೆಲೆ ಪರಿಶೀಲಿಸುವುದು', completed: true },
      ]);
    }
  }, []);

  const saveNotes = (updated: NoteItem[]) => {
    setNotes(updated);
    localStorage.setItem('user_quick_notes', JSON.stringify(updated));
  };

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.trim()) return;
    const created: NoteItem = {
      id: 'note-' + Date.now(),
      text: newNote.trim(),
      completed: false,
    };
    saveNotes([created, ...notes]);
    setNewNote('');
  };

  const toggleComplete = (id: string) => {
    const updated = notes.map((n) => (n.id === id ? { ...n, completed: !n.completed } : n));
    saveNotes(updated);
  };

  const deleteNote = (id: string) => {
    const updated = notes.filter((n) => n.id !== id);
    saveNotes(updated);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center shadow-md">
            <Notebook className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              {lang === 'kn' ? '📝 ಮಾಡಬೇಕಾದ ಕೆಲಸಗಳ ಪಟ್ಟಿ & ದಿನಸಿ ನೋಟ್ಸ್ (Daily Quick Notes)' : '📝 Daily Quick Notes & Shopping List'}
            </h2>
            <p className="text-xs text-slate-500">
              {lang === 'kn' ? 'ನಿಮ್ಮ ದಿನನಿತ್ಯದ ಸಣ್ಣ ಟಿಪ್ಪಣಿಗಳು ಮತ್ತು ದಿನಸಿ ಲಿಸ್ಟ್ ಅನ್ನು ನಿಮ್ಮ ಮೊಬೈಲ್‌ನಲ್ಲೇ ಸುರಕ್ಷಿತವಾಗಿ ಉಚಿತವಾಗಿ ಇಟ್ಟುಕೊಳ್ಳಿ' : 'Save your shopping lists and daily tasks privately on your device'}
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleAddNote} className="flex gap-2">
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder={lang === 'kn' ? 'ಹೊಸ ಕೆಲಸ ಅಥವಾ ದಿನಸಿ ಸಾಮಗ್ರಿ ಸೇರಿಸಿ...' : 'Add a new shopping item or task...'}
          className="flex-grow bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
        <button
          type="submit"
          className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold text-xs shadow flex items-center gap-1 shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>{lang === 'kn' ? 'ಸೇರಿಸಿ' : 'Add'}</span>
        </button>
      </form>

      <div className="space-y-2 text-xs">
        {notes.map((note) => (
          <div
            key={note.id}
            className={`p-3 rounded-xl border flex items-center justify-between gap-3 transition-all ${
              note.completed ? 'bg-slate-50 border-slate-200 opacity-60' : 'bg-amber-50/40 border-amber-200'
            }`}
          >
            <button
              onClick={() => toggleComplete(note.id)}
              className="flex items-center gap-2.5 text-left flex-grow cursor-pointer"
            >
              {note.completed ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              ) : (
                <Circle className="w-4 h-4 text-amber-600 shrink-0" />
              )}
              <span className={`font-semibold ${note.completed ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                {note.text}
              </span>
            </button>

            <button
              onClick={() => deleteNote(note.id)}
              className="text-slate-400 hover:text-rose-600 p-1 transition-colors"
              title="Delete Note"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
