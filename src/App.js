// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Academics from './components/Academics';
import Admissions from './components/Admissions';
import Faculty from './components/Faculty';
import Students from './components/Students';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/academics" element={<Academics/>} />
          <Route path="/admissions" element={<Admissions/>} />
          <Route path="/faculty" element={<Faculty/>} />
          <Route path="/students" element={<Students/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/contact" element={<ContactUs/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
