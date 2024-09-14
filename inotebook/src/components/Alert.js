import React from 'react'

export default function Alert(props) {
    return (
        <div className='mb-2' style={{ height: '50px' }}>
            {/* //both true then execute */}
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.msg}</strong>
            </div>}
        </div>

    )
}