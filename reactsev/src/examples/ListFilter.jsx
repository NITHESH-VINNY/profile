import React, { useState } from 'react'

export default function ListFilter(){
  const [items] = useState(['React', 'Vue', 'Angular', 'Svelte', 'Next.js'])
  const [search, setSearch] = useState('')

  const filtered = items.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <input
        type="text"
        placeholder="Search frameworks..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <p>Found {filtered.length} item(s)</p>
      <ul>
        {filtered.length > 0 ? (
          filtered.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))
        ) : (
          <li style={{ color: '#999' }}>No results found</li>
        )}
      </ul>
    </div>
  )
}
