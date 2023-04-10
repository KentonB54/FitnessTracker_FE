import React, {useState, useEffect} from "react";
import { createRoutine } from "../api";
import { useNavigate } from "react-router-dom";

const PostRoutine = (props) => {
    const {loggedIn, loggedInUser} = props
    const [name, setName] = useState('')
    const [goal, setGoal] = useState('')
    const [isPublic, setIsPublic] = useState(false)

    const navigate = useNavigate()
    function handleCheckboxChange() {
      setIsPublic(!isPublic);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await createRoutine(
            name,
            goal,
            isPublic ? true : false,
        )
        console.log(result)
        console.log(loggedInUser)
         navigate('/MyRoutines')
    }

    useEffect(() => {
        if (!loggedIn) {
          navigate('/login');
        }
      }, [loggedIn, navigate]);

    return (
    <form className="postRoutine--container" onSubmit={handleSubmit}>
        <h1>My routines tab</h1>
        <h2>Post new routine here</h2>
        <input 
        placeholder="name of routine"
        type="text"
        onChange={e => setName(e.target.value)}
        />
        <input 
        placeholder="goal"
        type="text"
        onChange={e => setGoal(e.target.value)}
        />
            <div className="checkbox--routine">
                <h4>share as a public routine?</h4>
            <input
            type="checkbox"
            checked={isPublic}
            onChange={handleCheckboxChange}
            />
            </div>
        <button>Post</button>
    </form>
    )
}

export default PostRoutine