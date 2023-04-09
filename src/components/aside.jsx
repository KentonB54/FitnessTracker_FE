import React from 'react'
import { Link } from 'react-router-dom'

const Aside = (props) => {
  const {loggedIn} = props
  return (
    <div className='aside--container'>
        <h1 className='aside--links'><Link to='/'>Home</Link></h1>
        <h1 className='aside--links'><Link to='/Activities'>Activities</Link></h1>
        {!loggedIn ? '' : <h1 className='aside--links'><Link to='/MyRoutines'>MyRoutines</Link></h1>}
        <h1 className='aside--links'><Link to='/Routines'>Routines</Link></h1>
    </div>
  )
}

export default Aside
