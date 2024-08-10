import React from 'react'

export default function Alert(props) {
    //fun to uppercase first char
    function upper(word){
        //at 0 upper and join word from 1 to end
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return (
        //both true then execute
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{upper(props.alert.type)} : {props.alert.msg}</strong>
        </div>
    )
}
