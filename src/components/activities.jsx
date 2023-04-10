import React, { useState, useEffect } from 'react'
import { getAllActivities } from '../api';
import { useNavigate } from 'react-router-dom';

const Activities = (props) => {
  const navigate = useNavigate()
  const { allActivities, setAllActivities } = props
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchActivities = async () => {
      const result = await getAllActivities();
      setAllActivities(result)
      setLoading(false)
    }
    fetchActivities()
  }, [setAllActivities]);

  return (
    <div className='activity--page--container'>
      <h1 className='activity--title'>ACTIVITIES</h1>
      <button onClick={() => navigate('/PostActivity')}>
        Post new Activiy!
        </button>
      {loading ? (
        <div>Loading...</div>
      ) : allActivities ? (
        allActivities.map(activity => (
          <div className='activities--container' key={activity.id}>
            <div><span className='routine--titles'>Activity Name:</span> {activity.name}</div>
            <div><span className='routine--titles'>GOAL:</span> {activity.description}</div>
          </div>
        ))
      ) : (
        <div>No activities found.</div>
      )}
    </div>
  )
}

export default Activities