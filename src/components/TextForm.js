import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log('Uppercase Fire' + text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Convert to UpperCase","success");
    }

    const handleLoClick = ()=>{
      // console.log('Uppercase Fire' + text);
      let newtext = text.toLowerCase();
      setText(newtext);
      props.showAlert("Convert to LowerCase","success");
  }
    const handleOnChange = (event)=>{   
        // console.log('on change fire');
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // text="new text"//incorrect way for change value 
    // setText="new text"//correct way for change value 
    return (
        <>
    <div className="container">
        <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"    
          rows="9"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        </div>
        <button className="btn btn-primary my-2" onClick={handleUpClick}>Click to UpperCase</button>
        <button className="btn btn-primary my-2 mx-1" onClick={handleLoClick}>Click to LowerCase</button>

    </div>

    <div className="container">
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 *  text.split(" ").length } Minutes Read Time.</p>
        <h2>Text Preview</h2>
        <p>{text.length>0?text:'Enter something in the textbox about the preview it here.'}</p>
    </div>
    </>
  )
}
