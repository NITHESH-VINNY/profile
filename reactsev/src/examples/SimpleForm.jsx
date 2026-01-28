import React, { useState } from 'react'

export default function SimpleForm(){
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(null)

  function submit(e){
    e.preventDefault()
    setSubmitted(name)
  }

  return (
    <form onSubmit={submit}>
      <label>
        Name: <input value={name} onChange={e => setName(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
      {submitted !== null && <p>Submitted: <strong>{submitted}</strong></p>}
    </form>
  )
}
