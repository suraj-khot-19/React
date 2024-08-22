import React, { Component } from 'react'
import StateEx from './components/StateEx'
import PropsEx from './components/PropsEx'

export default class App extends Component {
  // passing br from class
  bd = "19/08/2001"
  render() {
    return (
      <div>
        <StateEx />
        <PropsEx name="suraj" email="suraj@gmail.com" bd={this.bd} />
      </div>
    )
  }
}

