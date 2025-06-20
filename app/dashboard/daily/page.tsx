'use client';

import { useState } from 'react';
import { mockDailys } from '../../lib/data';
import React from 'react';

export default function DailyPage() {
  const itemsPerPage = 3;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(mockDailys.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const currentDailys = mockDailys.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Historique des Dailys</h1>

      {currentDailys.map((daily) => (
        <div key={daily.date} className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            📅 {formatDate(daily.date)}
          </h2>

          <div className="grid gap-4">
            {daily.entries.map((entry, idx) => (
              <div
                key={idx}
                className="border rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition"
              >
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-md font-bold text-indigo-600">{entry.participantName}</h3>
                  <span className="text-sm text-gray-500 italic">{entry.qcmType.toUpperCase()}</span>
                </div>

                <p className="text-sm text-gray-800 mb-1">
                  🧩 Story : <span className="font-medium">{entry.storyTitle}</span>
                </p>

                <p className="text-sm text-gray-600">
                  ⚙️ Productivité : {entry.productivity} pts
                </p>

                <p className="text-sm text-gray-600">
                  🎲 Aléa : <span className="italic">{entry.alea}</span>
                </p>

                <p className="text-sm text-gray-600">
                  ✅ Validation :{' '}
                  <span className={entry.valid ? 'text-green-600' : 'text-red-600'}>
                    {entry.valid ? 'Réussie' : 'Échouée'}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="flex justify-center items-center gap-3 mt-8">
        <button
          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
          disabled={page === 1}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          ⬅️ Précédent
        </button>

        <span className="text-sm text-gray-700">
          Page {page} / {totalPages}
        </span>

        <button
          onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
          disabled={page === totalPages}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Suivant ➡️
        </button>
      </div>
    </div>
  );
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}
