import React,{useState} from 'react'

export default function TextForm(props) {
    const[text, setText] = useState('Enter text here');
    const Update = ()=>{
        console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to Uppercase","success");
    }
    const Update2 = ()=>{
        console.log("Lowercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to Lowercase","success");
    }
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value)
    }
    const Update3 = ()=>{
        let newText = " ";
        setText(newText);
        props.showAlert("Text Cleared","success");
    }
    const Update4 = ()=>{
        let text = document.getElementById('TextArea');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied to Clipboard","success");
    }
    const Update5 = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed","success");
    }

    return (
        <>
        <div className='container' style = {{color: props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea style = {{backgroundColor: props.mode === 'dark'?'#13466e':'white',color: props.mode === 'dark'?'#152238':'black'}} className="my-Box my-3" id="TextArea" value={text} onChange={handleOnChange} rows="10" cols="150"></textarea>
            </div>
            <button disabled = {text.length === 0} className="btn btn-primary" onClick={Update}>Convert to Uppercase</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-3" onClick={Update2}>Convert to Lowercase</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-3" onClick={Update3}>Clear Text</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-3" onClick={Update4}>Copy Text</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-3" onClick={Update5}>Remove extra Spaces</button>
        </div>
        <div className="container my-3" style = {{color: props.mode === 'dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{ return element.length !== 0}).length} words {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{ return element.length !== 0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>

        </div>
           </>
    )
}
