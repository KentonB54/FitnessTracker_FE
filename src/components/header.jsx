import React from 'react'
import { Link } from 'react-router-dom'


const Header = (props) => {
const {loggedIn, setLoggedIn} = props

    const handleLogout = () => {
        localStorage.clear()
        setLoggedIn(false)
    }

  return (
    <div className='header--container'>
       {!loggedIn ? '' : <h1 onClick={handleLogout} ><Link to='/'>Logout</Link></h1> }
        <h1><Link to='/Login'>Login</Link></h1>
        <h1><Link to='/Register'>Register</Link></h1>
    </div>
  )
}

export default Header
