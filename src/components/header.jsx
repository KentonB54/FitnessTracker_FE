import React from 'react'
import { Link } from 'react-router-dom'


const Header = (props) => {
const {
  loggedIn, 
  setLoggedIn,
  loggedInUser,
  setLoggedInUser
} = props
console.log(loggedInUser)
    const handleLogout = () => {
        localStorage.clear()
        setLoggedIn(false)
        setLoggedInUser('')
    }

  return (
    <div className='header--container'>
      <div className='user'>
      {!loggedIn ? '' : <h2>Welcome <span className='username'>{loggedInUser}</span></h2>}
      </div>
      {!loggedIn ? '' : <h1 onClick={handleLogout} ><Link to='/'>Logout</Link></h1> }
      {loggedIn ? '' : <h1><Link to='/Login'>Login</Link></h1> }
      {loggedIn ? '' : <h1><Link to='/Register'>Register</Link></h1> }
    </div>
  )
}

export default Header
