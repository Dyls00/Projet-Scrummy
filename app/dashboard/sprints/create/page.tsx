'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateSprintPage() {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sprint = { title, description, startDate, endDate };
    console.log('Sprint créé :', sprint);

    // TODO : POST vers /api/sprints
    router.push('/dashboard/sprints');
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Créer un Sprint</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <FormField label="Titre" type="text" value={title} setValue={setTitle} />
        <FormField label="Description" type="textarea" value={description} setValue={setDescription} />
        <FormField label="Date de début" type="date" value={startDate} setValue={setStartDate} />
        <FormField label="Date de fin" type="date" value={endDate} setValue={setEndDate} />

        <div className="text-right">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Créer
          </button>
        </div>
      </form>
    </div>
  );
}

function FormField({ label, type, value, setValue }: any) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      {type === 'textarea' ? (
        <textarea
          className="w-full border rounded px-3 py-2 shadow-sm focus:outline-indigo-500"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
      ) : (
        <input
          type={type}
          className="w-full border rounded px-3 py-2 shadow-sm focus:outline-indigo-500"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
      )}
    </div>
  );
}
