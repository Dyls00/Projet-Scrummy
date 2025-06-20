'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { userStoryPriorities } from '../../../lib/data';

export default function CreateStoryPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [effort, setEffort] = useState<number>(1);
  const [priority, setPriority] = useState('MUST');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newStory = { title, description, effort, priority };
    console.log('Nouvelle story :', newStory);

    // TODO : POST vers /api/stories
    router.push('/dashboard/stories');
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Créer une User Story</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <Input label="Titre" value={title} onChange={setTitle} />
        <Textarea label="Description" value={description} onChange={setDescription} />
        <NumberSelect label="Effort (1,2,3,5,8)" value={effort} options={[1, 2, 3, 5, 8]} onChange={setEffort} />
        <Select label="Priorité" value={priority} options={userStoryPriorities} onChange={setPriority} />
        <SubmitButton label="Créer la Story" />
      </form>
    </div>
  );
}

// Reusable UI components
const Input = ({ label, value, onChange }: any) => (
  <div>
    <label className="block mb-1">{label}</label>
    <input
      type="text"
      className="w-full border rounded px-3 py-2"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required
    />
  </div>
);

const Textarea = ({ label, value, onChange }: any) => (
  <div>
    <label className="block mb-1">{label}</label>
    <textarea
      className="w-full border rounded px-3 py-2"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required
    />
  </div>
);

const NumberSelect = ({ label, value, options, onChange }: any) => (
  <div>
    <label className="block mb-1">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full border rounded px-3 py-2"
    >
      {options.map((val: number) => (
        <option key={val} value={val}>
          {val}
        </option>
      ))}
    </select>
  </div>
);

const Select = ({ label, value, options, onChange }: any) => (
  <div>
    <label className="block mb-1">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border rounded px-3 py-2"
    >
      {options.map((val: string) => (
        <option key={val} value={val}>
          {val}
        </option>
      ))}
    </select>
  </div>
);

const SubmitButton = ({ label }: { label: string }) => (
  <button
    type="submit"
    className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 shadow"
  >
    {label}
  </button>
);
