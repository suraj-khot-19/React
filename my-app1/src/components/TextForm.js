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
    function onClickClear() {
        setText('');
    }
    //in text area always gives us a event
    function handelOnChange(event) {
        // setText="hello"; incorrect way to handel state
        // setText("hello"); correct way to handel state

        //we can change what user is typing in textarea
        setText(event.target.value);
    };
    // Returns a stateful value, and a function to update it.
    const [text, setText] = useState("");
    return (
        <>
        <div className='container py-2'>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handelOnChange} rows="8"></textarea>
            </div>
            <button type="button" className="btn btn-primary mx-2" onClick={onClickUpper}>UpperCase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={onClickLower}>LowerCase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={onClickClear}>Clear</button>
        </div>
        <div className="container">
            <h3>Summery</h3>
            <p>{text.split(" ").length-1} words and {text.length} characters</p>
            <h3>preview</h3>
            <p>{text.length===0?"please enter text":text}</p>
        </div>
        </>
    )
}