import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";



function App() {
  const [mode,setmode] = useState("light")
  const [alert,setalert] = useState(null)

  const showalert =(message,type) =>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 1000);
  }

  const toggle = () => {
    if (mode==='light'){
      setmode('dark');
      document.body.style.background='grey';
      showalert("dark mode enabled","success");
    }
    else{
      setmode('light');
      document.body.style.background="white";
      showalert("light mode enabled","success");
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" aboutText="about us" mode={mode} toggle={toggle}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
        {/* <Routes> */}
          {/* <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm heading="Enter your text" mode={mode}/>} />   */}
          <TextForm heading="Enter your text" mode={mode}/>  
        {/* </Routes> */}
      </div>
    {/* </Router>   */}
    </>

  );
}

export default App;
