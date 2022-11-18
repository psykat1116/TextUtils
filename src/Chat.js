import React , {useState} from 'react'

export default function Chat(props) {

    const handleUppercase=()=>{
        let newText=Text.toUpperCase();
        setText(newText);
    }

    const handleLowercase=()=>{
        let newText=Text.toLowerCase();
        setText(newText);
    }

    const handleCleartext=()=>{
        setText('');
    }

    const handleCopy=()=>{
        // let text=document.getElementById("exampleFormControlTextarea1");
        // text.select()
        navigator.clipboard.writeText(Text);
    }

    const handleExtraspace=()=>{
        let text=Text.split(/[ ]+/)
        setText(text.join(" "))
    }

    const handleOnchange=(event)=>{
        setText(event.target.value);
    }

    const [Text, setText] = useState('');

    return(
        <>
        <div className="mb-3 mt-3 container" style={{color:props.mode==='light'?'black':'white'}}>
            <h3>{props.heading}</h3>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" value={Text} onChange={handleOnchange} placeholder="Enter The Text"></textarea>
            <button type="button" className="btn btn-primary mt-3 mx-1" onClick={handleUppercase}>Convert To Upper Case</button>
            <button type="button" className="btn btn-primary mt-3 mx-1" onClick={handleLowercase}>Convert To Lower Case</button>
            <button type="button" className="btn btn-primary mt-3 mx-1" onClick={handleCleartext}>Clear Text</button>
            <button type="button" className="btn btn-primary mt-3 mx-1" onClick={handleCopy}>Copy Text</button>
            <button type="button" className="btn btn-primary mt-3 mx-1" onClick={handleExtraspace}>Remove Extra Spaces</button>
        </div>
        <div className="container my-2" style={{color:props.mode==='light'?'black':'white'}}>
            <h5> Your Content Summary </h5>
            <p>No Of Characters {Text.length} , No of Words {Text.split(/\s+/).filter((e)=>{return e.length!==0}).length} , No of sentences {Text.split(". ").filter((e)=>{return e.length!==0}).length}</p>
            <p>Approximatly {0.008*Text.split(" ").filter((e)=>{return e.length!==0}).length} Minutes Needed To Read </p>
            <h2>Preview</h2>
            <p>{Text.length>0?Text:'Nothing For Preview'}</p>
        </div>
        </>
    )
};
