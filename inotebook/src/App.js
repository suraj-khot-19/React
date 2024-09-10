import './App.css';
import Home from './components/Home';
import About from './components/About';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NoteState from './context/note/NoteState';
import Alert from './components/Alert';
import React, { useState, useEffect } from 'react'
function App() {
  // state for alert
  const [alert, setalert] = useState('Hiiii');

  // to remove alert on top
  const removeAlert = () => {
    setTimeout(() => {
      setalert('');
    }, 2500);
  }

  // mouniting state
  useEffect(() => {
    removeAlert();
  }, [alert])

  return (
    <>
      <NoteState>
        <Router>
          <Nav />
          <Alert msg={alert} type='danger' />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
