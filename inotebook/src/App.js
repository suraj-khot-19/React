import './App.css';
import Home from './components/Home';
import About from './components/About';
import Nav from './components/Nav';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NoteState from './context/note/NoteState';
import Alert from './components/Alert';
import React, { useState, useEffect } from 'react'

function App() {
  // state for alert
  const [alert, setalert] = useState({ msg: 'Welcome To I-NoteBook App', type: 'warning' });

  // to remove alert on top
  const removeAlert = () => {
    setTimeout(() => {
      setalert({ msg: '', type: '' });
    }, 3500);
  }

  // mouniting state
  useEffect(() => {
    removeAlert();
  }, [alert]);

  return (
    <>
      <NoteState>
        <Router>
          <Nav />
          <Alert msg={alert.msg} type={alert.type} />
          <Routes>
            <Route path="/" element={<Home setalert={setalert} />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login setalert={setalert} />} />
            <Route path="/signup" element={<Signup setalert={setalert} />} />
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
