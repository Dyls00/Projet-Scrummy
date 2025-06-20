'use client';

import React from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const projectName = 'ACME 1';
  const projectCode = 'V6GBB5';

  const Button = ({
    label,
    href,
    color,
  }: {
    label: string;
    href: string;
    color: string;
  }) => (
    <Link
      href={href}
      className={`block text-center text-white font-semibold py-2 px-4 rounded-xl shadow hover:opacity-90 transition ${color}`}
    >
      {label}
    </Link>
  );

  return (
    <div className="max-w-md mx-auto p-6 space-y-4">
      {/* Nom du projet */}
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold">{projectName}</h1>
        <p className="text-sm text-gray-500">Code : {projectCode}</p>
      </div>

      {/* Tabs Sprints / Stories */}
      <div className="flex justify-center space-x-4">
        <Link
          href="/dashboard/sprints"
          className="bg-gray-200 px-4 py-1 rounded-full text-sm hover:bg-gray-300"
        >
          Sprints
        </Link>
        <Link
          href="/dashboard/stories"
          className="bg-gray-200 px-4 py-1 rounded-full text-sm hover:bg-gray-300"
        >
          Stories
        </Link>
      </div>

      {/* Placeholder Graphique */}
      <div className="h-40 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl shadow-inner flex items-center justify-center text-gray-400">
        <span>Graphique à venir</span>
      </div>

      {/* Daily direct */}
      <div className="text-center">
        <Link
          href="/dashboard/daily"
          className="inline-block bg-black text-white text-sm px-4 py-2 rounded-full shadow hover:opacity-90"
        >
          📅 Voir les Dailys
        </Link>
      </div>

      {/* Boutons principaux */}
      <div className="space-y-2 mt-4">
        <Button label="Participer" href="/join/auth" color="bg-red-300" />
        <Button label="Participer au Daily" href="/dashboard/daily/productivite" color="bg-blue-300" />
        <Button label="Quitter la partie" href="/" color="bg-blue-500" />
        <Button label="Gérer les sprints" href="/dashboard/sprints/delete" color="bg-green-300" />
        <Button label="Gérer le Daily" href="/dashboard/daily/close" color="bg-green-400" />
        <Button label="Gérer les stories" href="/dashboard/stories/delete" color="bg-purple-300" />
        <Button label="Gérer les participants" href="/dashboard/participants" color="bg-yellow-300" />
      </div>
    </div>
  );
}
