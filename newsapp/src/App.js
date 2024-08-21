import './App.css';
//rcc
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  //fetching api key from .env.local file
  const apiKey = process.env.REACT_APP_API_KEY;
  //setting page size
  const pageSize = 10;

  const [theme, setTheme] = useState('light');
  const [progress, setProgress] = useState(0);

  const mode = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.body.style.color = 'white';
      document.body.style.backgroundColor = 'black';
    }
    else {
      setTheme('light');
      document.body.style.color = 'black';
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <Router>
      <div>
        <Navbar mode={mode} theme={theme} />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route path='/' element={<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={pageSize} country="in" category="general" theme={theme} />} />
          <Route path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key='sports' pageSize={pageSize} country="in" category="sports" theme={theme} />} />
          <Route path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key='business' pageSize={pageSize} country="in" category="business" theme={theme} />} />
          <Route path='/general' element={<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={pageSize} country="in" category="general" theme={theme} />} />
          <Route path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key='health' pageSize={pageSize} country="in" category="health" theme={theme} />} />
          <Route path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key='entertainment' pageSize={pageSize} country="in" category="entertainment" theme={theme} />} />
          <Route path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key='science' pageSize={pageSize} country="in" category="science" theme={theme} />} />
          <Route path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key='technology' pageSize={pageSize} country="in" category="technology" theme={theme} />} />
        </Routes>
      </div>
    </Router>
  )
}
export default App;
