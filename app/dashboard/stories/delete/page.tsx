'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { mockUserStories } from '../../../lib/data';

export default function StoryListPage() {
  const router = useRouter();
  const itemsPerPage = 5;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(mockUserStories.length / itemsPerPage);
  const storiesToDisplay = mockUserStories.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const handleDelete = (id: string) => {
    // À remplacer par appel API DELETE
    console.log(`Story supprimée : ${id}`);
    alert(`Story ${id} supprimée (simulation)`);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Gestion des User Stories</h1>

      <div className="space-y-4 mb-8">
        {storiesToDisplay.map((story) => (
          <div key={story.id} className="border rounded-lg p-4 shadow-sm bg-white">
            <div className="flex justify-between items-center mb-1">
              <h2 className="text-lg font-semibold">{story.title}</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => router.push(`/dashboard/stories/edit?id=${story.id}`)}
                  className="text-sm px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  ✏️ Modifier
                </button>
                <button
                  onClick={() => handleDelete(story.id)}
                  className="text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  🗑️ Supprimer
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-1">{story.description}</p>
            <p className="text-xs text-gray-500">
              Effort : {story.effort} — Priorité : <span className="font-semibold">{story.priority}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2 mb-6">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          ⬅️ Précédent
        </button>
        <span className="text-sm">
          Page {page} / {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Suivant ➡️
        </button>
      </div>

      {/* Ajouter une story */}
      <div className="text-center mt-8">
        <button
          onClick={() => router.push('/dashboard/stories/create')}
          className="bg-indigo-600 text-white px-6 py-2 rounded-md shadow hover:bg-indigo-700 transition"
        >
          ➕ Ajouter une story
        </button>
      </div>
    </div>
  );
}
