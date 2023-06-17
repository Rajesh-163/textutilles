
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light'){
     setMode('dark');
    }
    else{
     setMode('light');
    }
 }
  return (
  <> 
  <Navbar mode={mode} toggleMode={toggleMode}/>
  <Textform heading="Enter the txt to analyze"/>
  </>
  );
}

export default App;
