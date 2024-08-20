import React, { Component } from 'react'
import loading from './Settings.gif'
export default class Loader extends Component {
    render() {
        return (
            <div className='my-3'>
                <img src={loading} alt="loading" />
            </div>
        )
    }
}
