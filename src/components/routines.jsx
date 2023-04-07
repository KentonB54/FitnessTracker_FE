import React, { useState, useEffect } from 'react'
import {
    getAllPublicRoutines
  } from '../api'
const Routines = () => {
    
    const [ publicRoutines, setPublicRoutines ] = useState([])


useEffect(() => {
    const fetchPublicRoutines = async () => {
        const result = await getAllPublicRoutines();
        setPublicRoutines(result)
    }
     fetchPublicRoutines()
}, []);

  return (
    <div>
        <h1>ALL PUBLIC ROUTINES</h1>
        {
            publicRoutines.map(pr => (
                <div className='routines--container'>
                    <div><span className='routine--titles'>Routine Name:</span> {pr.name}</div>
                    <div><span className='routine--titles'>Creator Name:</span> {pr.creatorName}</div>
                    <div><span className='routine--titles'>GOAL:</span> {pr.goal}</div>
                </div>
            ))
        }
    </div>
  )
}

export default Routines