// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
// import About from './component/About';
import React ,{useState} from 'react'
import Alert from './component/Alert';
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  const [btntext,setBtnText]= useState("Enable Dark mode")
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
       msg:message,
       type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const [mode, setMode] = useState('light')
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor="#8a8a8b"
      setBtnText("Enable Light mode")
      showAlert("Dark mode is hase been Enable","success")
      document.title="Textutils-Dark mode Enable"
      //  
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white"
      setBtnText("Enable Dark mode")
      showAlert("Light mode is hase been Enable","success")
      document.title="Textutils-Light mode Enable"
    }
  }
  
 
  return (
    <>
    {/* <Router> */}
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}  btntext={btntext}/>
      {/* <Navbar /> */}
      <Alert alert={alert}/>
      <div className="container my-3"> 
      {/* <Routes> */}
          {/* <Route  exact path="/" element={<About/>}>  */}
          
          {/* </Route> */}
          {/* <Route  */}
          {/* path="/TextForm" element={ } */}
          <TextForm heading="Enter the text to convert " mode={mode} showAlert={showAlert}  />
          {/* > */}
            
          {/* </Route>
        </Routes>  */}
    
      {/* <About mode={mode} toggleMode={toggleMode} /> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;

