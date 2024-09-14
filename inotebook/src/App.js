import './App.css';
import Home from './components/Home';
import About from './components/About';
import Nav from './components/Nav';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NoteState from './context/note/NoteState';
import Alert from './components/Alert';
import React, { useState } from 'react'
import UserDetails from './components/UserDetails';

function App() {
  //alert initialy null
  const [alert, setNewAlert] = useState(null);

  //function to show alert
  const setalert = (message, type) => {
    setNewAlert({
      msg: message,
      type: type,
    });

    //setting alert null in 1.5 sec
    setTimeout(() => {
      setalert(null);
    }, 2500);
  }

  return (
    <>
      <NoteState>
        <Router>
          <Nav />
          <Alert alert={alert} />
          <Routes>
            <Route path="/" element={<Home setalert={setalert} />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login setalert={setalert} />} />
            <Route path="/signup" element={<Signup setalert={setalert} />} />
            <Route path="/user" element={<UserDetails />} />
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
