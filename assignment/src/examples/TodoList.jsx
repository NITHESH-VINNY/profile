import React, { useState } from 'react'

export default function TodoList(){
  const [items, setItems] = useState([])
  const [text, setText] = useState('')

  function add(){
    if(!text.trim()) return
    setItems(i => [...i, text.trim()])
    setText('')
  }

  function remove(idx){
    setItems(i => i.filter((_,k) => k !== idx))
  }

  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="New item" />
      <button onClick={add}>Add</button>
      <ul>
        {items.map((it, idx) => (
          <li key={idx}>{it} <button onClick={() => remove(idx)}>Remove</button></li>
        ))}
      </ul>
    </div>
  )
}
