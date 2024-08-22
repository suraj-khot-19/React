import React, { Component } from 'react'

export default class PropsEx extends Component {
    render() {
        return (
            <>
                <div style={{ margin: '50px' }}>
                    <h1>Exapmle of props</h1>
                    <p>name : {this.props.name}</p>
                    <p>email : {this.props.email}</p>
                    <p>password : {this.props.pass ?? "you forgot to add prop pass haaaaa"}</p>
                    <p>birth-date : {this.props.bd}</p>
                </div>
            </>
        )
    }
}
