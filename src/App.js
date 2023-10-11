import React, { useState } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Weather from './components/Weather';
import About from './components/About';
import './App.css'
import {
  BrowserRouter, 
  Route,
  Routes
} from "react-router-dom";
import Footer from './components/Footer';


function App() {
  const [mode, setMode] = useState('light');
  const [btnText, setbtnText] = useState('Enable Dark Mode')

  const appid = process.env.REACT_APP_API_KEY

  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      setbtnText('Enable Light Mode');
      document.body.style.backgroundColor = '#042743'; 
    }
    else{
      setMode('light');
      setbtnText('Enable Dark Mode');
      document.body.style.backgroundColor = '#ffffff';
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title=" GetWeatherInfo " mode={mode} btnText={btnText} toggleMode={toggleMode}/>
      <div className=" my-5">
        <Routes>
          <Route path="/" element={<Home mode={mode} />}></Route>
          <Route path="/weather" element={<Weather mode={mode} appid={appid} />}></Route>
          <Route path="/about" element={<About mode={mode} />}></Route>
        </Routes>
      </div>
      {/* <Footer/> */}
    </BrowserRouter>
    </>
  );
}

export default App;
