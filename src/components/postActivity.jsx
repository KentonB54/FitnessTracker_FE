import React, {useState} from 'react'
import {createActivity} from '../api'
import { useNavigate } from 'react-router-dom'

const PostActivity = () => {
const [name, setName] = useState('')
const [description, setDescription] = useState('')
const navigate = useNavigate()

const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await createActivity(
        name,
        description
    )
    if (result.error) {
        alert(`${name} has already been created`)
        return
    }
    console.log(result)
    navigate('/Activities')
    alert(`${name} added to activities`)
}

  return (
    <form className="postRoutine--container" onSubmit={handleSubmit}>
        <h2>Post new Activity here</h2>
        <input 
        placeholder="name of Activity"
        type="text"
        onChange={e => setName(e.target.value)}
        />
        <input 
        placeholder="description"
        type="text"
        onChange={e => setDescription(e.target.value)}
        />
        <button>Post</button>
    </form>
  )
}

export default PostActivity
