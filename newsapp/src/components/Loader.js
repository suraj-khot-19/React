import React, { Component } from 'react'
import loading from './Settings.gif'
export default class Loader extends Component {
    render() {
        return (
            <div>
                <img src={loading} alt="loading" />
            </div>
        )
    }
}