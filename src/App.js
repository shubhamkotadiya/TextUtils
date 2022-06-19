import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";





function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (msg) => {setAlert({message : msg})
                              setTimeout(() => {
                                setAlert(null)
                              }, 1500);}
const [mode,setMode] = useState('light');
const toggleMode = ()=> {
  if (mode==='light') {
    setMode('dark');
    document.body.style.backgroundColor = 'grey';
    showAlert("dark mode has been enabled");
  } else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("light mode has been enabled");
  }
}
  return (
    <>
    <Router>
  <Navbar about="about us" title="TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert = {alert}/>
  <div className="container my-3">
  <Routes>
          <Route exact path="/about"  element={<About />} />  
                                            
           <Route exact path="/" element={<TextForm heading="Enter the text to analyze" showAlert = {showAlert} mode={mode} />}/>
          
          
        </Routes>
        
   
    </div>
    
    </Router>

    
    </>
  );
}

export default App;
