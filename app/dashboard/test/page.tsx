'use client'

import React from 'react'
import { supabase } from '../../lib/supabaseClient'

export default function HomePage() {
  const [data, setData] = React.useState<{ id: number; libelle: string }[]>([])

  React.useEffect(() => {
    const fetchData = async () => {
      const { data: someData, error } = await supabase
        .from('priorite')
        .select('*')

      if (error) console.error('Error fetching data:', error)
      else setData(someData)
    }

    fetchData()
  }, [])

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.libelle}</div>
      ))}
    </div>
  )
}
