import React, { useState } from 'react'

export default function Toggle(){
  const [on, setOn] = useState(false)
  return (
    <div>
      <p>State: <strong>{on ? 'ON' : 'OFF'}</strong></p>
      <button onClick={() => setOn(o => !o)}>Toggle</button>
    </div>
  )
}
