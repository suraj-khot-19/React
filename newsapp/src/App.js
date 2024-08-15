
import './App.css';
//rcc
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      theme: 'light',
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
  render() {
    return (
      <Router>
        <div>
          <Navbar mode={this.mode} theme={this.state.theme} />
          <Routes>
            <Route path='/' element={<News key='general' pageSize={20} country="in" category="general" theme={this.state.theme} />} />
            <Route path='/sports' element={<News key='sports' pageSize={20} country="in" category="sports" theme={this.state.theme} />} />
            <Route path='/business' element={<News key='business' pageSize={20} country="in" category="business" theme={this.state.theme} />} />
            <Route path='/general' element={<News key='general' pageSize={20} country="in" category="general" theme={this.state.theme} />} />
            <Route path='/health' element={<News key='health' pageSize={20} country="in" category="health" theme={this.state.theme} />} />
            <Route path='/entertainment' element={<News key='entertainment' pageSize={20} country="in" category="entertainment" theme={this.state.theme} />} />
            <Route path='/science' element={<News key='science' pageSize={20} country="in" category="science" theme={this.state.theme} />} />
            <Route path='/technology' element={<News key='technology' pageSize={20} country="in" category="technology" theme={this.state.theme} />} />
          </Routes>
        </div>
      </Router>
    )
  }
}
