'use client' // si tu es dans le dossier /app

import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'

export default function Roles() {
  const [roles, setRoles] = useState<any[]>([])

  useEffect(() => {
    const fetchRoles = async () => {
      const { data, error } = await supabase.from('priorite').select('*')
      if (error) console.error(error)
      else setRoles(data)
    }

    fetchRoles()
  }, [])

  return (
    <div>
      <h2 className="text-xl font-bold">Roles</h2>
      <ul>
        {roles.map(role => (
          <li key={role.id}>{role.libelle}</li>
        ))}
      </ul>
    </div>
  )
}
