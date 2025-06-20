'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { mockStoryToEdit, userStoryPriorities } from '../../../lib/data';

// ✅ Composant Select réutilisable avec style
type SelectProps<T extends string> = {
  label: string;
  value: T;
  options: ReadonlyArray<T>;
  onChange: (value: T) => void;
};

function Select<T extends string>({ label, value, options, onChange }: SelectProps<T>) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <select
        className="w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        value={value}
        onChange={e => onChange(e.target.value as T)}
      >
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

export default function EditStoryPage() {
  const router = useRouter();
  const [title, setTitle] = useState(mockStoryToEdit.title);
  const [description, setDescription] = useState(mockStoryToEdit.description);
  const [effort, setEffort] = useState<number>(mockStoryToEdit.effort);
  const [priority, setPriority] = useState(mockStoryToEdit.priority);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedStory = { ...mockStoryToEdit, title, description, effort, priority };
    console.log('Story modifiée :', updatedStory);

    // TODO : PUT /api/stories/[id]
    router.push('/dashboard/stories');
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Modifier une User Story</h1>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Titre */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Titre</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Titre de la story"
            className="w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Description détaillée"
            className="w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Effort */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Effort (1, 2, 3, 5, 8)</label>
          <select
            value={effort}
            onChange={e => setEffort(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {[1, 2, 3, 5, 8].map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        {/* Priorité */}
        <Select label="Priorité" value={priority} options={userStoryPriorities} onChange={setPriority} />

        {/* Bouton */}
        <div className="text-right">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-5 py-2 rounded-md font-medium hover:bg-indigo-700 transition"
          >
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  );
}
