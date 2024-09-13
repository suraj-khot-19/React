import React from 'react'

function Alert(props) {
    return (
        <div style={{ height: '50px' }}>
            {props.msg && <div className={`alert alert-${props.type}`} role="alert">
                {props.msg}
            </div>
            }
        </div>
    )
}

export default Alert