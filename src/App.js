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
  Aside
} from './components'

const App = () => {
  const [ loggedIn, setLoggedIn ] = useState(false)



  return (
  <Router>
        <Header setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>
        <div className='page--container'>
          <Aside />
          <div className='route--container'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Activities' element={<Activities />}/>
          <Route path='/MyRoutines' element={<MyRoutines />}/>
          <Route path='/Routines' element={<Routines />}/>
          <Route path='/Register' element={<Register />}/>
          <Route path='/Login' element={<Login setLoggedIn={setLoggedIn}/>}/>
        </Routes>
          </div>
        </div>
    </Router>
  );
}

export default App;
