import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./home";
import Navbar from './navBar';
import About from "./about";
import AllNews from './allnews';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-news" element={<AllNews />} />
          <Route path="/about" element={<About />} />
        
        </Routes>
      </Router>
    </>
  );
}

export default App;
