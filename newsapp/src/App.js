
import './App.css';
//rcc
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<News key='general' pageSize={20} country="in" category="general" />} />
            <Route path='/sports' element={<News key='sports' pageSize={20} country="in" category="sports" />} />
            <Route path='/business' element={<News key='business' pageSize={20} country="in" category="business" />} />
            <Route path='/general' element={<News key='general' pageSize={20} country="in" category="general" />} />
            <Route path='/health' element={<News key='health' pageSize={20} country="in" category="health" />} />
            <Route path='/entertainment' element={<News key='entertainment' pageSize={20} country="in" category="entertainment" />} />
            <Route path='/science' element={<News key='science' pageSize={20} country="in" category="science" />} />
            <Route path='/technology' element={<News key='technology' pageSize={20} country="in" category="technology" />} />
          </Routes>
        </div>
      </Router>
    )
  }
}
