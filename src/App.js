import './App.css';
import Navbar from './Navbar';
import Chat from './Chat';
import React,{useState} from "react";
import Alert from './Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [darkmode, setDarkmode] = useState('light');
  const toggle=()=>{
    if(darkmode ==='light')
    {
      setDarkmode('dark');
      document.body.style.backgroundColor='#13284e';
    }
    else
    {
      setDarkmode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    <Router>
      <Navbar mode={darkmode} toggle={toggle}/>
      <Routes>
          <Route exact path="/About" element={<Alert></Alert>}/>
          // <Route exact path="/" element={<Chat heading="Enter The Text To Analyse" mode={darkmode}/>}/>
      </Routes>
      </Router>
    </>
  );
}
export default App;