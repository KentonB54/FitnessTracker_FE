import React, { useState, useEffect } from 'react'
import { getAllActivities } from '../api';

const Activities = () => {
  const [ allActivities, setAllActivities ] = useState([])

  useEffect(() => {
    const fetchActivities = async () => {
        const result = await getAllActivities();
        setAllActivities(result)
    }
     fetchActivities()
}, []);

  return (
    <div className='activity--page--container'>
      <h1 className='activity--title'>ACTIVITIES</h1>
      {
      allActivities.map(activity => (
        <div className='activities--container'>
          <div><span className='routine--titles'>Activity Name:</span> {activity.name}</div>
          <div><span className='routine--titles'>GOAL:</span> {activity.description}</div>
        </div>
      ))
      }
    </div>
  )
}

export default Activities