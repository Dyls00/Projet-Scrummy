'use client'

import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import Link from 'next/link'

// Génère un code de 6 lettres majuscules
function generateProjectCode(length = 6) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

export default function CreateProjet() {
  const [titre, setTitre] = useState('')
  const [name, setName] = useState<string | null>(null)
  const [userRole, setUserRole] = useState<string[]>(['Chef de projet'])

  const handleCheckbox = (role: string) => {
    setUserRole(prev =>
      prev.includes(role)
        ? prev.filter(r => r !== role)
        : [...prev, role]
    )
  }

  const handleSubmit = async () => {
    if (!titre || !name || userRole.length === 0) {
      alert("Veuillez remplir tous les champs obligatoires")
      return
    }

    const code = generateProjectCode()

    // Étape 1 : créer le projet
    const { data: projetData, error: projetError } = await supabase
      .from('projet')
      .insert([{ titre, code }])
      .select('id')

    if (projetError || !projetData || projetData.length === 0) {
      console.error('Erreur lors de la création du projet :', projetError)
      alert("Erreur lors de la création du projet")
      return
    }

    const projetId = projetData[0].id

    // Étape 2 : créer l'utilisateur avec pseudo + rôles
    const { error: userError } = await supabase.from('user').insert([
      {
        name,
        id_projet: projetId,
        roles: userRole,
        valide: true,
      }
    ])

    if (userError) {
      console.error('Erreur lors de la création de l’utilisateur :', userError)
      alert("Erreur lors de la création de l’utilisateur")
      return
    }

    alert('Projet créé avec succès ! Voici votre code : ' + code)
    window.location.href = '/dashboard' // Redirige vers la page de test
  }

  return (
    <div className="bg-white p-10 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-6">Créer un projet</h2>

      <div className="grid grid-cols-1 gap-6 mb-6">
        <div>
          <label className="block text-gray-700 mb-2">Titre</label>
          <input
            type="text"
            value={titre}
            onChange={e => setTitre(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Titre du projet"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Votre Pseudo</label>
          <input
            type="text"
            value={name ?? ''}
            onChange={e => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Votre pseudo"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Vos rôles</label>
          {['Chef de projet', 'Product-owner', 'Scrum-master', 'Team/dev'].map(role => (
            <div key={role} className="flex items-center mb-1">
              <input
                type="checkbox"
                id={role}
                checked={userRole.includes(role)}
                onChange={() => handleCheckbox(role)}
                className="w-4 h-4"
              />
              <label htmlFor={role} className="ml-2 text-sm text-gray-800">
                {role}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleSubmit}
          className="px-5 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Enregistrer
        </button>
        <Link href="/">
          <button className="px-5 py-2 border border-gray-300 rounded">
            Annuler
          </button>
        </Link>
      </div>
    </div>
  )
}
