import React, { useState, useEffect } from 'react'
import { getUser, getUsersRoutines } from '../api'

const MyRoutines = () => {
  const [myRoutines, setMyRoutines] = useState([]);
  const [selectedRoutine, setSelectedRoutine] = useState(null);

  useEffect(() => {
    const fetchMyRoutines = async () => {
      const result = await getUsersRoutines();
      setMyRoutines(result);
      console.log(result);
    };
    fetchMyRoutines();
  }, []);

  return (
    <div>
      <h1>My Routines</h1>
      {myRoutines.map((routine) => (
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
  );
};

export default MyRoutines;