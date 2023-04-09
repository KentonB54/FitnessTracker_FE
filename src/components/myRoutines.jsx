import React, { useState, useEffect } from 'react'
import { getUsersRoutines } from '../api'
import {  useNavigate } from 'react-router-dom';

const MyRoutines = (props) => {
  const { loggedInUser, loggedIn } = props
  const [myRoutines, setMyRoutines] = useState([]);
  const [selectedRoutine, setSelectedRoutine] = useState(null);
  const navigate =  useNavigate();


  useEffect(() => {
    const fetchMyRoutines = async () => {
      const result = await getUsersRoutines(loggedInUser);
      setMyRoutines(result);
      console.log(result);
    };
    fetchMyRoutines();
  }, [loggedInUser]);

  useEffect(() => {
    if (!loggedIn) {
      navigate('/login');
    }
  }, [loggedIn, navigate]);
   
  return (
    <div>
      <div className='myRoutines--title'>
        <h1>My Routines</h1>
        <button onClick={() => navigate('/PostRoutine')}>
        Post new Routine!
        </button>
      </div>
      { myRoutines.map((routine) => (
        <div className='routines--container' key={routine.id}>
          <div>
            <span className='routine--titles'>Routine Name:</span> {routine.name}
          </div>
          <div>
            <span className='routine--titles'>Creator Name:</span> {routine.creatorName}
          </div>
          <div>
            <span className='routine--titles'>GOAL:</span> {routine.goal}
          </div>
          <button className='activities--button'>Edit routine</button>
          <button className='activities--button'>Delete routine</button>
          <button className='activities--button'>Add activity</button>
          <button
            className='activities--button'
            onClick={() => setSelectedRoutine(selectedRoutine === routine.id ? null : routine.id)}
          >
            {selectedRoutine === routine.id ? "Hide activities" : "Show activities"}
          </button>
          {selectedRoutine === routine.id && (
            <div>
              {routine.activities.map((activity) => (
                <div>
                  <h3 className='ACTIVITY--TITLE'>ACTIVITY</h3>
                  <div>Activity name: {activity.name}</div>
                  <div>Activity description: {activity.description}</div>
                  <div>Activity count: {activity.count} reps</div>
                  <div>Activity duration: {activity.duration} minutes</div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
};

export default MyRoutines;