import React, { useState } from 'react'
import { registerUser } from '../api'

const Register = () => {
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")

  const handleRegister = async (e) => {  
            e.preventDefault()
            const result = await registerUser(username, password)
            console.log(result)
    }


  return (
    <form onSubmit={handleRegister}>
        <h2>Register a new user here!</h2>
        <input 
        placeholder='Username'
        type='text'
        value={username}
        onChange={e => setUsername(e.target.value)}
        />
        <input 
        placeholder='Password'
        type='text'
        value={password}
        onChange={e => setPassword(e.target.value)}
        />
        <button type='submit' placeholder='submit'>
             submit
        </button>
    </form>
  )
}

export default Register