import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { 
  Home,
  Activities,
  MyRoutines,
  Routines,
  Header,
  Login,
  Register,
  Aside,
  PostRoutine
} from './components'

const App = () => {
  const [ loggedIn, setLoggedIn ] = useState(false)
  const [ loggedInUser, setLoggedInUser ] = useState('')


  return (
  <Router>
        <Header setLoggedIn={setLoggedIn} loggedIn={loggedIn} loggedInUser={loggedInUser}/>
        <div className='page--container'>
          <Aside loggedIn={loggedIn}/>
          <div className='route--container'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Activities' element={<Activities />}/>
          <Route path='/MyRoutines' element={<MyRoutines loggedInUser={loggedInUser} loggedIn={loggedIn}/>}/>
          <Route path='/Routines' element={<Routines />}/>
          <Route path='/Register' element={<Register />}/>
          <Route path='/PostRoutine' element={<PostRoutine loggedIn={loggedIn} loggedInUser={loggedInUser}/>}/>
          <Route path='/Login' element={<Login setLoggedIn={setLoggedIn} setLoggedInUser={setLoggedInUser}/>}/>
        </Routes>
          </div>
        </div>
    </Router>
  );
}

export default App;
