import React, { useState } from 'react'


export default function LogIn() {
    const [screen, setScreen] = useState("login")
  return (
    <div>
        <input placeholder='email'/>
        <input placeholder='password'/>
    
    </div>
  )
}
