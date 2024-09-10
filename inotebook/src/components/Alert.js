import React from 'react'

function Alert(props) {
    return (
        props.msg ? <div className={`alert alert-${props.type}`} role="alert">
            {props.msg}
        </div> : <div></div>
    )
}

export default Alert