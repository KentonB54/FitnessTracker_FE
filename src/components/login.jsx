import React, { useState } from 'react'
import { loginUser } from '../api'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
    const {setLoggedIn, setLoggedInUser} = props
    const navigate = useNavigate()
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")

  const handleLogin = async (e) => {  
            e.preventDefault()
            const result = await loginUser(username, password)
            if(result.token) {
            setLoggedIn(true)
            setLoggedInUser(username)
            navigate('/MyRoutines')
            console.log(result)
            } else {
              alert('incorrect credentials')
            }
    }

  return (
    <form onSubmit={handleLogin} className='login--container'>
        <h2>Login here!</h2>
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

export default Login