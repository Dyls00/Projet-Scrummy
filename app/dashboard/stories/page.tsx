// app/project/[code]/stories/page.tsx (App Router)
import { mockUserStories } from '../../lib/data';
import React from 'react';

export default function UserStoriesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Liste des User Stories</h1>

      <div className="grid gap-4">
        {mockUserStories.map((story) => (
          <div
            key={story.id}
            className="border rounded-xl p-4 shadow bg-white hover:shadow-md transition"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold">{story.title}</h2>
              <span className={`text-sm px-2 py-1 rounded-full 
                ${getPriorityColor(story.priority)}`}>
                {story.priority}
              </span>
            </div>
            <p className="text-gray-600 mb-2">{story.description}</p>
            <div className="text-sm text-gray-500">
              Effort: {story.effort} — Reste à faire: {story.remainingEffort}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function getPriorityColor(priority: string) {
  switch (priority) {
    case 'MUST':
      return 'bg-red-100 text-red-800';
    case 'SHOULD':
      return 'bg-orange-100 text-orange-800';
    case 'COULD':
      return 'bg-yellow-100 text-yellow-800';
    case 'WOULD':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}
