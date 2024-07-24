// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <>
    {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">School Name</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/academics">Academics</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/admissions">Admissions</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/faculty">Faculty</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/students">Students</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/gallery">Gallery</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
 */}







    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">School Name</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About Us</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/academics">Academics</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/admissions">Admissions</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/faculty">Faculty</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/students">Students</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/gallery">Gallery</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact Us</Link>
      </li>
     
     
    </ul>
   
  </div>
</nav>


    </>
  );
};

export default Navbar;
