import { APILINK } from '../config';
const token = localStorage.getItem('jwt')

// /users/register
export const registerUser = async (username, password) => {
    try {
        const response = await fetch(
          `${APILINK}/users/register`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              username,
              password
          })
        });
        const result = await response.json();

        return result
      } catch (err) {
        console.error(err);
      }
}

// /users/login
export const loginUser = async (username, password) => {
    try {
        const response = await fetch(
          `${APILINK}/users/login`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              username,
              password
          })
        });
        const result = await response.json();
        console.log(result)
            if (result && result.token) {
                localStorage.setItem("jwt", result.token)
            }
        return result
      } catch (err) {
        console.error(err);
      }
}

// /users/me
export const getUser = async () => {
        try {
            const response = await fetch(
            `${APILINK}/users/me`, {
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
                },
            });
          const result = await response.json();
          console.log(result);
          return result
        } catch (err) {
          console.error(err);
        }
}

// /users/:username/routines
export const getUsersRoutines = async (username) => {
    try {
        const response = await fetch(
        `${APILINK}/users/${username}/routines`, {
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            },
            });
        const result = await response.json();
        console.log(result);
        return result
      } catch (err) {
        console.error(err);
      }
}

// /routines
export const getAllPublicRoutines = async () => {
    try {
        const response = await fetch(
        `${APILINK}/routines`, {
          headers: {
          'Content-Type': 'application/json',
          },
        });
        
        const result = await response.json();
        return result
        } catch (err) {
        console.error(err);
        }
}

// /routines
export const createRoutine = async (name, goal, isPublic) => {
    try {
        const response = await fetch(
        `${APILINK}/routines`, {
          method: "POST",
          headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            name,
            goal,
            isPublic
          })
        });
        const result = await response.json();
        console.log(result);
        return result
      } catch (err) {
        console.error(err);
      }
}

// /routines/:routineId
export const updateRoutine = async (name, goal, routineId) => {
    try {
        const response = await fetch(
        `${APILINK}/routines/${routineId}`, {
          method: "PATCH",
          headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            name,
            goal
          })
        });
        const result = await response.json();
        console.log(result);
        return result
      } catch (err) {
        console.error(err);
      }
}

// /routines/:routineId
export const deleteRoutine = async (routineId) => {
    try {
        const response = await fetch(
        `${APILINK}/routines/${routineId}`, {
          method: "DELETE",
          headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
          },
        });
        const result = await response.json();
        console.log(result);
        return result
      } catch (err) {
        console.error(err);
      }
}

// /routines/:routineId/activities
export const attachSingleATR = async (
    activityId, 
    count, 
    duration, 
    routineId) => {
    try {
        const response = await fetch(
        `${APILINK}/routines/${routineId}/activities`, {
          method: "POST",
          headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            activityId,
            count, 
            duration
          })
        });
        const result = await response.json();
        console.log(result);
        return result
      } catch (err) {
        console.error(err);
      }
}

// /activities
export const getAllActivities = async () => {
    try {
        const response = await fetch(
        `${APILINK}/activities`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        const result = await response.json();
  
        return result
      } catch (err) {
        console.error(err);
      }
}

// /activities
export const createActivity = async (name, description) => {
    try {
        const response = await fetch(
        `${APILINK}/activities`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            name,
            description
          }) 
        });
    
        const result = await response.json();
    
        console.log(result);
        return result
      } catch (err) {
        console.error(err);
      }
}

//activities/:activityId
export const updateActivity = async (name, description) => {
    try {
        const response = await fetch(
        `${APILINK}/activities`, {
          headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
          },
          method: "PATCH",
          body: JSON.stringify({
            name,
            description
          })
        });
    
          const result = await response.json();
          console.log(result);
          return result
        } catch (err) {
        console.error(err);
        }
}

// /activities/:activityId/routines
export const publicRwithThatActivity = async (activityId) => {
    try {
        const response = await fetch(
        `${APILINK}/activities/${activityId}/routines`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const result = await response.json();
        console.log(result);
        return result
      } catch (err) {
        console.error(err);
      }
}

// /routine_activities/:routineActivityId
export const updateCountOrRoutineRA = async (count, duration, routineActivityId) => {
    try {
        const response = await fetch(
        `${APILINK}/routine_activities/${routineActivityId}`, {
          method: "PATCH",
          headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            count,
            duration
          })
        });
        const result = await response.json();
        console.log(result);
        return result
      } catch (err) {
        console.error(err);
      }
}

// /routine_activities/:routineActivityId
export const deleteRA = async (routineActivityId) => {
    try {
        const response = await fetch(
        `${APILINK}/routine_activities/${routineActivityId}`, {
          method: "DELETE",
          headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
          },
        });
        const result = await response.json();
        console.log(result);
        return result
      } catch (err) {
        console.error(err);
      }
}

