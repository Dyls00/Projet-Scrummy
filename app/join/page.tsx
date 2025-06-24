'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '../lib/supabaseClient';

export default function Join() {
  const [codeProjet, setCodeProjet] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!codeProjet.trim()) {
      setError('Veuillez entrer un code valide.');
      return;
    }

    // Recherche du projet par code
    const { data, error } = await supabase
      .from('projet')
      .select('id')
      .eq('code', codeProjet.trim())
      .single();

    if (error || !data) {
      setError('Code projet invalide ou introuvable.');
    } else {
      // Redirection vers dashboard avec l'id du projet en paramètre
      router.push(`/dashboard?id=${data.id}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center light min-h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 mt-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Entrer votre code ici
        </h2>

        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-2 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Entrer le code reçu"
            value={codeProjet}
            onChange={(e) => setCodeProjet(e.target.value)}
            autoFocus
          />

          {error && (
            <p className="text-red-600 text-sm mb-2">{error}</p>
          )}

          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-2 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
          >
            Accéder
          </button>
        </form>

        <div className="flex justify-center mt-4">
          <Link href="/" className="text-sm text-gray-600 hover:underline">
            Annuler
          </Link>
        </div>
      </div>
    </div>
  );
}
