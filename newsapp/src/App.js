import './App.css';
//rcc
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      theme: 'light',
      progress: 0,
    }
    this.mode = this.mode.bind(this);
  }

  mode() {
    if (this.state.theme === 'light') {
      this.setState({
        theme: 'dark',
      });
      document.body.style.color = 'white';
      document.body.style.backgroundColor = 'black';
    }
    else {
      this.setState({
        theme: 'light',
      });
      document.body.style.color = 'black';
      document.body.style.backgroundColor = 'white';
    }
  }

  //to seeting progress
  setProgress = (progress) => {
    this.setState({
      progress: progress
    })
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar mode={this.mode} theme={this.state.theme} />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route path='/' element={<News setProgress={this.setProgress} key='general' pageSize={10} country="in" category="general" theme={this.state.theme} />} />
            <Route path='/sports' element={<News setProgress={this.setProgress} key='sports' pageSize={10} country="in" category="sports" theme={this.state.theme} />} />
            <Route path='/business' element={<News setProgress={this.setProgress} key='business' pageSize={10} country="in" category="business" theme={this.state.theme} />} />
            <Route path='/general' element={<News setProgress={this.setProgress} key='general' pageSize={10} country="in" category="general" theme={this.state.theme} />} />
            <Route path='/health' element={<News setProgress={this.setProgress} key='health' pageSize={10} country="in" category="health" theme={this.state.theme} />} />
            <Route path='/entertainment' element={<News setProgress={this.setProgress} key='entertainment' pageSize={10} country="in" category="entertainment" theme={this.state.theme} />} />
            <Route path='/science' element={<News setProgress={this.setProgress} key='science' pageSize={10} country="in" category="science" theme={this.state.theme} />} />
            <Route path='/technology' element={<News setProgress={this.setProgress} key='technology' pageSize={10} country="in" category="technology" theme={this.state.theme} />} />
          </Routes>
        </div>
      </Router>
    )
  }
}
