'use client';

import { mockSprints } from '../../lib/data';
import React, { useState } from 'react';

export default function SprintsPage() {
  const itemsPerPage = 5;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(mockSprints.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const paginatedSprints = mockSprints.slice(start, start + itemsPerPage);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Liste des Sprints</h1>

      <div className="grid gap-4 mb-6">
        {paginatedSprints.map((sprint) => (
          <div
            key={sprint.id}
            className="border rounded-xl p-4 shadow bg-white hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-blue-600">{sprint.title}</h2>
            <p className="text-gray-600 mb-2">{sprint.description}</p>
            <div className="text-sm text-gray-500">
              📅 {formatDate(sprint.startDate)} → {formatDate(sprint.endDate)}<br />
              🧠 Capacité : {sprint.capacity} points
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-3">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          ⬅️ Précédent
        </button>

        <span className="text-sm text-gray-700">
          Page {page} / {totalPages}
        </span>

        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
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
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}
