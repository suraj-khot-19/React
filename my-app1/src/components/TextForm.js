// this is how we using hooks in react(useState is called hook beacause of we are try to using it in a functional base component)
import React, { useState } from 'react'

export default function TextForm(prop) {
    function onClickUpper() {
        let newText = text.toUpperCase();
        setText(newText);
    }
    function onClickLower() {
        let newText = text.toLowerCase();
        setText(newText);
    }
    //in text area always gives us a event
    function handelOnChange(event) {
        // setText="hello"; incorrect way to handel state
        // setText("hello"); correct way to handel state

        //we can change what user is typing in textarea
        setText(event.target.value);
    };
    // Returns a stateful value, and a function to update it.
    const [text, setText] = useState("Enter Text Here");
    return (
        <div>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handelOnChange} rows="8"></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={onClickUpper}>UpperCase</button>
            <button type="button" className="btn btn-primary" onClick={onClickLower}>LowerCase</button>

        </div>
    )
}