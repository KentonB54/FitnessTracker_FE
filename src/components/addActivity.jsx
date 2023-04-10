import React, {useState} from 'react'
import {attachSingleATR} from '../api'
import { useParams, useNavigate } from 'react-router-dom'

const AddActivity = (props) => {
    const { routineId } = useParams()
    const { allActivities} = props
    const  navigate = useNavigate()
    console.log(allActivities)
    const [count, setCount] = useState('')
    const [duration, setDuration] = useState('')
    const [activityId, setActivityId] = useState('')

    //ADDING AN ACTIVITY
    const addActivity = async (e) => { 
        e.preventDefault()
        const result = await attachSingleATR(
            activityId, 
            count, 
            duration, 
            routineId
        )
        console.log(result)
        navigate('/MyRoutines')
        }

  return (

    <form className='newActivity--container' onSubmit={addActivity}>
      <h1>Add new activity to routine</h1>
      <select value={activityId} onChange={(e) => setActivityId(e.target.value)}>
        <option value=''>Select an activity</option>
        {allActivities.map((activity) => (
          <option key={activity.id} value={activity.id}>
            {activity.name}
          </option>
        ))}
      </select>
      <input 
      placeholder='count'
      value={count}
      onChange={e => setCount(e.target.value)}/>
      <input 
      placeholder='duration'
      value={duration}
      onChange={e => setDuration(e.target.value)}/> 
      <button>Submit</button>
    </form>
  )
}

export default AddActivity
