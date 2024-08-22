import React, { Component } from 'react'

export default class StateEx extends Component {
    //to use state we need to create constructor
    constructor() {
        super();
        this.state = {
            clicked1: false,
            clicked2: false,
        }
        // For a given function, creates a bound function that has the same body as the original function. The this object of the bound function is associated with the specified object, and has the specified initial parameters.
        this.changeClick1 = this.changeClick1.bind(this);
        this.changeClick2 = this.changeClick2.bind(this);
    }
    changeClick1() {
        this.setState({ clicked1: !this.state.clicked1 })
    }
    changeClick2() {
        this.setState({ clicked2: !this.state.clicked2 })
    }
    render() {
        return (
            <>
                <div style={{ margin: '60px' }}>
                    <h1>Example of State</h1>
                    {/* ex1 */}
                    <div>
                        <p>{this.state.clicked1 ? "You already clicked1 btn" : "you are unclicked1 btn"}</p>
                        <button onClick={this.changeClick1}>Click Me To Change State</button>
                        <br />
                    </div>
                    {/* ex2 */}
                    <div>
                        <br />
                        <button onClick={this.changeClick2}>{this.state.clicked2 ? "Clicked" : "click"}</button>
                    </div>
                </div>
            </>
        )
    }
}
