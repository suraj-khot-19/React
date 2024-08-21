import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'//imrs
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
      //changing title
      document.title = "TextUtils-Dark";
      // changing titile in itervals
      // setInterval(() => {
      //   document.title = "TextUtils-Amazing";
      // }, 1500);
      // setInterval(() => {
      //   document.title = "TextUtils-download";
      // }, 2000);
    }
    else {
      setTheme('light');
      //universal setting
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      //alert
      showAlert("Light mode is enabled", "success");
      //changing title
      document.title = "TextUtils-Light";
    }
  }


  /*
   function removeBgClass() {
     document.body.classList.remove('bg-primary');
     document.body.classList.remove('bg-secondary');
     document.body.classList.remove('bg-success');
     document.body.classList.remove('bg-info');
     document.body.classList.remove('bg-danger');
     document.body.classList.remove('bg-warning');
   }
   function mode(cls) {
     removeBgClass();
     let temp = `bg-${cls}`;
     document.body.classList.add(temp);
   }
 */

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
      <Router>
        {/* content in every page  */}
        <Navbar title='TextUtils' home="Home" about="About" theme={theme} mode={mode} />
        <Alert alert={alert} />
        {/* routes */}
        <Routes>
          <Route path='/' element={<TextForm theme={theme} showAlert={showAlert} />} />
          <Route path='/about' element={<About mode={mode} theme={theme} />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;

