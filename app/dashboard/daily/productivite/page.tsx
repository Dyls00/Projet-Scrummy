'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { mockProductivityContext } from '../../../lib/data';
import Link from 'next/link';

export default function GiveProductivityPage() {
  const router = useRouter();
  const [selectedStory, setSelectedStory] = useState(mockProductivityContext.storiesOfDay[0]);

  const handleSubmit = () => {
    // À remplacer par un appel API
    alert(`Vous avez sélectionné : ${selectedStory}`);
    router.push('/dashboard/daily'); // ou autre redirection
  };

  return (
    <div className="max-w-xs mx-auto p-6 rounded-xl shadow bg-white text-center space-y-6">
      <div>
        <h1 className="text-xl font-bold">{mockProductivityContext.projectName}</h1>
        <p className="text-sm text-gray-500">Code : {mockProductivityContext.code}</p>
      </div>

      <div className="text-left">
        <label className="block text-sm font-medium text-gray-700 mb-2">Story du jour :</label>
        <div className="relative">
          <select
            value={selectedStory}
            onChange={(e) => setSelectedStory(e.target.value)}
            className="block w-full border border-gray-300 rounded-md px-3 py-2 pr-8 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {mockProductivityContext.storiesOfDay.map((story, idx) => (
              <option key={idx} value={story}>
                {story}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-3">
        <Link href='/dashboard/daily/productivite/valider'>
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-400 hover:bg-blue-500 text-white py-2 rounded-md shadow font-semibold"
          >
            Donner sa productivité
          </button>
        </Link>
        <button
          onClick={() => router.back()}
          className="w-full bg-blue-100 hover:bg-blue-200 text-blue-800 py-2 rounded-md font-medium"
        >
          Retour
        </button>
      </div>
    </div>
  );
}
