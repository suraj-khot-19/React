import './App.css';
//rcc
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  //fetching api key from .env.local file
  apiKey = process.env.REACT_APP_API_KEY;
  //setting page size
  pageSize = this.pageSize;

  constructor() {
    super();
    this.state = {
      theme: 'light',
      progress: 0,
    }
    this.mode = this.mode.bind(this);
    console.log("api key:", this.apiKey);
    console.log("process:", process.env.REACT_APP_API_KEY)
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
            <Route path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='general' pageSize={this.pageSize} country="in" category="general" theme={this.state.theme} />} />
            <Route path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='sports' pageSize={this.pageSize} country="in" category="sports" theme={this.state.theme} />} />
            <Route path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='business' pageSize={this.pageSize} country="in" category="business" theme={this.state.theme} />} />
            <Route path='/general' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='general' pageSize={this.pageSize} country="in" category="general" theme={this.state.theme} />} />
            <Route path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='health' pageSize={this.pageSize} country="in" category="health" theme={this.state.theme} />} />
            <Route path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='entertainment' pageSize={this.pageSize} country="in" category="entertainment" theme={this.state.theme} />} />
            <Route path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='science' pageSize={this.pageSize} country="in" category="science" theme={this.state.theme} />} />
            <Route path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='technology' pageSize={this.pageSize} country="in" category="technology" theme={this.state.theme} />} />
          </Routes>
        </div>
      </Router>
    )
  }
}
