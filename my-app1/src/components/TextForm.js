// this is how we using hooks in react(useState is called hook beacause of we are try to using it in a functional base component)
import React, { useState } from 'react'

export default function TextForm(prop) {
    //in text area always gives us a event
    function handelOnChange(event) {
        // setText="hello"; incorrect way to handel state
        // setText("hello"); correct way to handel state

        //we can change what user is typing in textarea
        setText(event.target.value);
    };
    // Returns a stateful value, and a function to update it.
    const [text, setText] = useState("");

    //upper case
    function onClickUpper() {
        let newText = text.toUpperCase();
        setText(newText);
    }
    //lower case
    function onClickLower() {
        let newText = text.toLowerCase();
        setText(newText);
    }
    //clear text
    function onClickClear() {
        setText('');
    }
    //copy text
    const [copy, setCopy] = useState("Copy");
    function onClickCopy() {
        let newText = document.getElementById('exampleTextarea1');
        // newText.select();
        copy === 'Copy' ? setCopy("Copied") : setCopy("Copy");
        navigator.clipboard.writeText(newText.value);
    }
    //remove extra space
    function onClickRemoveExtraSpace() {
        //using regix with space>2
        //Split a string into substrings using the specified separator and return them as an array.
        let newText = text.split(/[  ]+/);
        //dds all the elements of an array into a string, separated by the specified separator string.
        setText(newText.join(" "));
    }
    return (
        <>
            <div className="container">
                <h3>Enter Text Below</h3>
                <div>
                    <div className="mb-3">
                        <textarea className="form-control" id="exampleTextarea1" style={{ color: prop.theme === 'light' ? 'black' : 'white', backgroundColor: prop.theme === 'dark' ? 'grey' : 'white' }} value={text} onChange={handelOnChange} rows="8"></textarea>
                    </div>
                    <button type="button" className="btn btn-primary mx-2" onClick={onClickUpper}>UpperCase</button>
                    <button type="button" className="btn btn-primary mx-2" onClick={onClickLower}>LowerCase</button>
                    <button type="button" className="btn btn-primary mx-2" onClick={onClickClear}>Clear</button>
                    <button type="button" className="btn btn-primary mx-2" onClick={onClickCopy}>{copy} Text</button>
                    <button type="button" className="btn btn-primary mx-2" onClick={onClickRemoveExtraSpace}>Remove Extra Space</button>
                </div>
                <div className="container">
                    <h3>Summery</h3>
                    <p>{text.split(" ").length - 1} words and {text.length} characters</p>
                    <h3>preview</h3>
                    <p>{text.length === 0 ? "Please Enter Text To Preview" : text}</p>
                </div>
            </div>
        </>
    )
}