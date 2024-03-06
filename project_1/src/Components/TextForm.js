
import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUPClick =() =>{
    //   console.log("UpperCase was clicked" + text)
      let newText = text.toUpperCase();
      setText(newText)
    }

    const handleOnChange =(event) =>{
      console.log("On Change")
      setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here2');
     
    // text = "new text"; // Wrong way to change/ update the text
    //  setText = ("new text"); // correct way to change/ update the text

  return (

<div>
    <h1>{props.heading}</h1>
  <div className="mb-3">
  <textarea className="form-control" value = {text} onChange={handleOnChange}  id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary" onClick={handleUPClick}>Convert to UpperCase</button>
</div>

  )
}
