import './App.css';
import About from './components/About';
import Alert from './components/Alert';
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
      //alert
      showAlert("Dark mode is enabled", "success");
    }
    else {
      setTheme('light');
      //universal setting
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      //alert
      showAlert("Light mode is enabled", "success");
    }
  }


  //alert initialy null
  const [alert, setalert] = useState(null);
  //function to show alert
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    //setting alert null in 1.5 sec
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  return (
    <>
      <Navbar title='TextUtils' home="Home" about="About" theme={theme} mode={mode} />
      <Alert alert={alert} />
      <TextForm theme={theme} showAlert={showAlert} />
      {/* <About /> */}
    </>
  );
}

export default App;
