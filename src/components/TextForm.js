import { useState } from "react"
import React  from 'react'

export default function TextForm(props) {
    const handleUpper = () => {
        let newtext = text.toUpperCase()
        setText(newtext)
    }
    const handlelower = () => {
        let newtext = text.toLowerCase()
        setText(newtext)
    }
    const handleclear = () => {
        let newtext = ""
        setText(newtext)
    }
    const handleinverse = () => {
        let newtext = ""
        for (let i=text.length-1;i>=0;i--){
            newtext+=text[i]
        }
        setText(newtext)
    }
    const handlecopy = () => {
        let coptext = document.getElementById("myBox");
        coptext.select();
        navigator.clipboard.writeText(coptext.value);
    }
    const speakspeech = () => {
        let msg = new SpeechSynthesisUtterance()
        msg.text = text
        window.speechSynthesis.speak(msg)

    }
    const handleonchange =(event) => {
        setText(event.target.value)
    }
    const [text,setText] = useState("Enter the text");
  return (
    <>
    <div>
        <h1 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleonchange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpper}>convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handlelower}>convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={speakspeech}>speak</button>
        <button className="btn btn-primary mx-2" onClick={handleclear}>clear</button>
        <button className="btn btn-primary mx-2" onClick={handleinverse}>inverse</button>
        <button className="btn btn-primary mx-2" onClick={handlecopy}>copy text</button>
        
    </div>
    <div className="container my-3">
        <h3 style={{color:props.mode==='light'?'black':'white'}}>Text summary</h3>
        <p>{text.split(" ").length} words, {text.length} charcters, {text.split("\n").length} sentence</p>
        <h3 style={{color:props.mode==='light'?'black':'white'}}>preview</h3>
        <p>{text}</p>
    </div>

    </>


  )
}
