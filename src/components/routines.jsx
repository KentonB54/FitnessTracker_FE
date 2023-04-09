import React, { useState, useEffect } from 'react'
import { getAllPublicRoutines } from '../api'

const Routines = () => {
  const [publicRoutines, setPublicRoutines] = useState([]);
  const [selectedRoutine, setSelectedRoutine] = useState(null);

  useEffect(() => {
    const fetchPublicRoutines = async () => {
      const result = await getAllPublicRoutines();
      setPublicRoutines(result);
    }
    fetchPublicRoutines();
  }, []);

  return (
    <div>
      <h1>ALL PUBLIC ROUTINES</h1>
      {publicRoutines.map((pr) => (
        <div className='routines--container' key={pr.id}>
          <div>
            <span className='routine--titles'>Routine Name:</span> {pr.name}
          </div>
          <div>
            <span className='routine--titles'>Creator Name:</span> {pr.creatorName}
          </div>
          <div>
            <span className='routine--titles'>GOAL:</span> {pr.goal}
          </div>

          <button
            className='activities--button'
            onClick={() => setSelectedRoutine(
                           selectedRoutine === pr.id ? null : pr.id
                    )
            }>
            {selectedRoutine === pr.id ? 'Hide activities' : 'Show activities'}
          </button>

          {selectedRoutine === pr.id && (
            <div className='attachedActivities--container'>
              {pr.activities.map((activity) => (
                <div key={activity.id}>
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

export default Routines;