import React, { useState } from 'react'

export default function ConditionalRender(){
  const [showMessage, setShowMessage] = useState(false)
  const [userType, setUserType] = useState('guest')

  return (
    <div>
      <button onClick={() => setShowMessage(!showMessage)}>
        {showMessage ? 'Hide' : 'Show'} Message
      </button>
      {showMessage && <p>Hello! This message is conditionally rendered.</p>}
      
      <div style={{ marginTop: '10px' }}>
        <label>
          User Type:
          <select value={userType} onChange={e => setUserType(e.target.value)}>
            <option>guest</option>
            <option>user</option>
            <option>admin</option>
          </select>
        </label>
        <p>
          {userType === 'admin' && '⭐ You are an admin!'}
          {userType === 'user' && '👤 You are a user.'}
          {userType === 'guest' && '👋 Welcome, guest!'}
        </p>
      </div>
    </div>
  )
}
