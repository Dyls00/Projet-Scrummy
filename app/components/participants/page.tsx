'use client'  // Important pour activer l’interactivité avec les boutons

import { useState } from 'react'

export default function ParticipantsPage() {
  const [participants, setParticipants] = useState([
    { id: 1, nom: 'Jean Dupont', role: 'Chef de projet' },
    { id: 2, nom: 'Alice Martin', role: 'Chef de projet' },
    { id: 3, nom: 'Paul Durand', role: 'Chef de projet' }
  ])

  const supprimerParticipant = (id: number) => {
    setParticipants(participants.filter(p => p.id !== id))
  }

  const modifierParticipant = (id: number) => {
    alert(`Modifier le participant avec l'ID ${id}`)
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Liste des participants</h1>
      <table className="min-w-full border border-gray-300 rounded-md overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-4 text-left">Pseudo</th>
            <th className="py-3 px-4 text-left">Roles</th>
            <th className="py-3 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {participants.map((participant) => (
            <tr key={participant.id} className="border-t border-gray-200">
              <td className="py-2 px-4">{participant.nom}</td>
              <td className="py-2 px-4">{participant.role}</td>
              <td className="py-2 px-4 space-x-2">
                <button
                  onClick={() => modifierParticipant(participant.id)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                >
                  Modifier
                </button>
                <button
                  onClick={() => supprimerParticipant(participant.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
          {participants.length === 0 && (
            <tr>
              <td colSpan={3} className="text-center py-4 text-gray-500">
                Aucun participant pour le moment.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
