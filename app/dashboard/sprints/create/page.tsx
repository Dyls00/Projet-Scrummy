'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabaseClient';

export default function CreateSprintPage() {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [projectId, setProjectId] = useState<number | null>(null);
  const [projects, setProjects] = useState<{ id: number; titre: string }[]>([]);

  // Récupère les projets disponibles
  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase.from('projet').select('id, titre');
      if (!error && data) {
        setProjects(data);
      } else {
        console.error('Erreur chargement projets :', error);
      }
    };
    fetchProjects();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!projectId) {
      alert('Veuillez sélectionner un projet.');
      return;
    }

    const { error } = await supabase.from('sprint').insert([
      {
        nom: title,
        decription: description,
        date_debut: startDate,
        date_fin: endDate,
        id_projet: projectId,
      },
    ]);

    if (error) {
      console.error('Erreur Supabase :', error);
      alert('Erreur lors de la création du sprint.');
    } else {
      alert('Sprint créé avec succès !');
      router.push('/dashboard/sprints');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Créer un Sprint</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <FormField label="Titre" type="text" value={title} setValue={setTitle} />
        <FormField label="Description" type="textarea" value={description} setValue={setDescription} />
        <FormField label="Date de début" type="date" value={startDate} setValue={setStartDate} />
        <FormField label="Date de fin" type="date" value={endDate} setValue={setEndDate} />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Projet lié</label>
          <select
            value={projectId ?? ''}
            onChange={(e) => setProjectId(Number(e.target.value))}
            className="w-full border rounded px-3 py-2 shadow-sm"
            required
          >
            <option value="" disabled>-- Sélectionnez un projet --</option>
            {projects.map((p) => (
              <option key={p.id} value={p.id}>
                {p.titre}
              </option>
            ))}
          </select>
        </div>

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
