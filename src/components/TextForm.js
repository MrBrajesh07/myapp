 
import React, { useState } from 'react';

export default function TextForm(props) {
 const handleUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText)
 }
 const handlelowClick = () =>{
    let newText = text.toLowerCase();
    setText(newText)
 }



  let [text, setText] = useState(''); // useState hook should be inside the component

  return (
    <>
    <div className='container'style={{color:props.mode === 'dark'?'white':'black'}} >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={(e) => setText(e.target.value)} // Update text state onChange 
          style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'dark' ? 'white' : 'black' }}

        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick} style={{color:props.mode === 'dark'?'white':'black'}} >Convert to uppercase</button>
      
      <button className="btn btn-primary mx-2" onClick={handlelowClick} style={{color:props.mode === 'dark'?'white':'black'}}  >Convert to Lower Case</button>
    </div>
    <div className="container my-2" style={{color:props.mode === 'dark'?'white':'black'}} >
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words, And {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something to preview it."}</p>

    </div>
    </>
  );
}
