import React, { useState } from "react";
import "./App.css"; 
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
 


function App() {
  const [mode, setMode] = useState('light');
  const [mode1, setMode1] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');  
      document.body.style.backgroundColor = '#3e3e3e';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled!","success");
      document.title = 'Dicover - Home[Dark Mode]';
      setInterval(() => {
        document.title = 'Install Discover';

      }, 2000);
      setInterval(() => {
        document.title = 'Virus Found';
      }, 1700);
      setInterval(() => {
        document.title = 'Memory Full';
      }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled!","success");
      document.title = 'Dicover - Home';
    }
  }

  const toggleMode2 = () =>{
    if(mode1 === 'light'){
      setMode1('success');  
      document.body.style.backgroundColor = 'green';
      document.body.style.color = 'white';
      showAlert("Green mode has been enabled!","success");
      document.title = 'Dicover - Home[Green Mode]';
    }
    else{
      setMode1('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled!","success");
      document.title = 'Dicover - Home';

    }
  }

  return (
    <>
    <Router>
      <Navbar title="Abhishek" mode={mode} mode1={mode1} toggleMode={toggleMode} toggleMode2={toggleMode2}/>
      <Alert alert={alert}/> 
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm heading="Enter here text :- " showAlert={showAlert}/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>       
      </div>
      </Router>
    </>
  );
}

export default App;
