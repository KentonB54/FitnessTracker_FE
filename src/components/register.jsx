import React, { useState } from 'react'
import { attachSingleATR, registerUser } from '../api'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")

  const handleRegister = async (e) => {  
            e.preventDefault()
            if (password.length < 8) {
              alert('password must be at least 8 characters')
            }
            const result = await registerUser(username, password)
            console.log(result)
            if (result.token) {
              alert('successfully Registered!')
              navigate('/Login')
            }
    }
    

    return (
      <form onSubmit={handleRegister} className='register--container'>
        <h2>Register here!</h2>
        <input 
        placeholder='Username'
        type='text'
        value={username}
        onChange={e => setUsername(e.target.value)}
        />
        <input 
        placeholder='Password'
        type='password'
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