import React, { useState } from 'react'
import { loginUser } from '../api'

const Login = (props) => {
    const {setLoggedIn} = props
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")

  const handleLogin = async (e) => {  
            e.preventDefault()
            const result = await loginUser(username, password)
            setLoggedIn(true)
            console.log(result)
    }

  return (
    <form onSubmit={handleLogin}>
        <h2>Login here!</h2>
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

export default Login