'use client'

import { useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation' // 👈 Importer le hook
import Link from 'next/link'

export default function CreateUserForm() {
  const supabase = createClientComponentClient()
  const router = useRouter() // 👈 Initialiser le router

  const [name, setName] = useState('')
  const [roles, setRoles] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const idProjet = 1
  const valide = true

  const handleCheckboxChange = (role: string) => {
    if (roles.includes(role)) {
      setRoles(roles.filter((r) => r !== role))
    } else {
      setRoles([...roles, role])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.from('user').insert({
      name: name.trim(),
      roles,
      valide,
      id_projet: idProjet,
    })

    if (error) {
      setError(error.message)
    } else {
      // ✅ Redirection après succès
      router.push('/dashboard')
    }

    setLoading(false)
  }

  return (
    <div className="max-w-xl mt-15 mx-auto px-6 py-12 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-semibold text-center mb-4">Bienvenue !</h1>
      <h2 className="text-2xl font-semibold text-center mb-4">Veuillez indiquer un pseudo !</h2>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block font-medium mb-1"></label>
          <input
            id="name"
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder='Entrez votre pseudo'
          />
        </div>

        <div>
          <label className="block font-medium mb-2">Rôles</label>
          {['Chef de projet', 'Product-owner', 'Scrum-master', 'Team'].map((role) => (
            <div key={role} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={role}
                checked={roles.includes(role)}
                onChange={() => handleCheckboxChange(role)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor={role} className="ml-2 text-sm text-gray-700">{role}</label>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <button
            type="submit"
            disabled={loading}
            className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700 disabled:opacity-50"
          >
            {loading ? 'Enregistrement...' : 'Enregistrer'}
          </button>
          <Link href="/" className="text-sm text-gray-600 hover:underline">Annuler</Link>
        </div>
      </form>
    </div>
  )
}
