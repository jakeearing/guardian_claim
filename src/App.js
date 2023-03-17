import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './home';
import Claims from './claims';
import About from './about';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/> }/>
          <Route path="/claim" element={<Claims />} />
          <Route path="/about-us" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
