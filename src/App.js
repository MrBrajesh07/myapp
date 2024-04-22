


import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';

function App() {
  const [mode, setMode] = useState('light'); // Setting default mode to light
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    // Clear the alert after a timeout
    setTimeout(() => {
      setAlert(null);
    }, 3000); // 3 seconds timeout
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", 'success');
    }
  };

  return (
    <div>
      <Navbar title="Text Utils" mode={mode} />
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleMode} />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Mode Change</label>
      </div>
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter your text to analyse below" mode={mode}/>
        <About />
      </div>
    </div>
  );
}

export default App;



