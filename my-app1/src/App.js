import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'//imrs
function App() {
  //set light initialy
  const [theme, setTheme] = useState('light');

  //fun to toogle theme
  function mode() {
    if (theme === 'light') {
      setTheme('dark');
      //universal setting onw set for all
      document.body.style.backgroundColor = '#041630'
      document.body.style.color = 'white'
    }
    else {
      setTheme('light');
      //universal setting
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
    }
  }
  return (
    <>
      <Navbar title='TextUtils' home="Home" about="About" theme={theme} mode={mode} />
      <TextForm theme={theme}/>
      {/* <About /> */}
    </>
  );
}

export default App;
