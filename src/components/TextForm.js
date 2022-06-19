import React, { useState } from 'react'


export default function TextForm(props) {
    
    
    const [text, setText] = useState("enter text here");
    const handleupClick = () => {
        console.log("upper case was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("text converted in to uppercase");
        
    }
    const handleLoClick = () => {
        console.log("upper case was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("text converted in to lowercase");
    }
    const handleSpaceClick = () => {
        
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("extra space removed");
    }
    const handleOnChange = (event) => {

        setText(event.target.value);
    }
    
    
    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">{props.heading}</label>
                    <textarea className="form-control container" id="myBox" rows="3" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }} ></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-1"  onClick={handleupClick}    disabled = {text.length === 0}>Convert to uppercase</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}     disabled = {text.length === 0}>Convert to lowercase</button>
                <button className="btn btn-primary mx-2 my-1 " onClick={handleSpaceClick} disabled = {text.length === 0}>Remove extra space</button>
            </div>
            <div className="container">
                <h2>summary</h2>
                <p> characters : {text.length}  and words : {text.split(" ").filter((element => {return element.length != 0})).length}</p>
                
            </div>
        </>
            )
}
