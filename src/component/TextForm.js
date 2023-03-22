import React ,{useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(prop) {

    // Declare a new state variable, which we'll call "text"
    const [text,setText] = useState("")
    // text="new text" worng way to inisalize value
    // setText("newtext") write wat to variable val define
    const handelUpClick=()=>{
        console.log("uppercase button clicked "+text)
        let newtext=text.toUpperCase()
        setText(newtext)
        prop.showAlert("Text convert UpperCase","sucess")
        
    }
    const handellcClick=()=>{
        console.log("to lowercase " + text)
        let newlow=text.toLowerCase()
        setText(newlow)
    }
    const handelclearClick=()=>{
        console.log("clear text")
        let clertext='';
        setText(clertext)
    }
    const handelonchange=(event)=>{
        console.log("textarea  clicked")
        setText(event.target.value)
    }
    const handeltlClick=()=> {
        let newstr = text.toLowerCase().split(' ');
        for (var i = 0; i < newstr.length; i++) {
            newstr[i] = newstr[i].charAt(0).toUpperCase() + newstr[i].slice(1);
            
        }
            let strjoin= newstr.join(' ');
            return (setText(strjoin))
        }

    const handelinverseClick=()=>{
        var ans = text.split('').map(function(c){
            return c === c.toUpperCase()
            ? c.toLowerCase()
            : c.toUpperCase()
          }).join('')
          
          setText(ans)
    }
    const handelcopy=()=>{
        let text=document.getElementById("mybox")
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value)
        prop.showAlert("copy to clipboard","sucess")
     }
    const handelrevovespace=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "));
        prop.showAlert("Remove extra Space","sucess")

    }
    

    const handeldownClick = () => {
        const link = document.createElement("a");
        const content = text;
        const file = new Blob([content], { type: 'text/plain' });
        link.href = URL.createObjectURL(file);
        link.download = "sample.txt";
        link.click();
        URL.revokeObjectURL(link.href);
        };


    
  return (
<>
   <div className='container' style={{color:prop.mode ==='dark'?'white':'black'
        }}>
    <h1>{prop.heading}</h1>
    <div className="mb-3 ">
        
        <textarea className="form-control my-3" style={{backgroundColor:prop.mode ==='dark'?'#dfd7d7':'white',color:prop.mode ==='dark'?'white':'black'
        }} value={text} onChange={handelonchange} id="mybox" rows="10"></textarea>
        <button className='btn btn-success mx-3' onClick={handelUpClick}>convert to uppercase</button>
        <button className='btn btn-primary m-3'  onClick={handellcClick}>convert to lowercase</button>
        <button className='btn btn-success m-3'  onClick={handelclearClick}>Clear</button>
        <button className='btn btn-primary m-3'  onClick={handeltlClick}>Title case </button>
        <button className='btn btn-success m-3'  onClick={handelinverseClick}>inVeRsE CaSe </button>
        <button className='btn btn-success m-3'  onClick={handelrevovespace}>Remove space </button>
        <button className='btn btn-success m-3'  onClick={handelcopy}>Copy to Clipboard </button>
        <button className='btn btn-primary m-3'  onClick={handeldownClick}>Download  file</button>
    </div>
   </div>
   <div className="container my-3" style={{color:prop.mode ==='dark'?'white':'black'
        }}>
    <h2>your Text summary is hear</h2>
    <p>words length : {text.split(" ").length}</p>
    <p>character length : {text.length}</p>
    <p>Reading time : {0.008 * text.split(" ").length} Minit  Read </p>
    <h3>Preview </h3>
    <p>{text.length>0?text:'Enter Somethig in the Textbox About To Preview hear'}</p>
   </div>
</>
  )
}

TextForm.propTypes={
    heading:PropTypes.string.isRequired,

}
