import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo" ><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>☰ Tharanadh</Link></div>
      <ul className="nav-links">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button className="cta-button"><a href="https://www.linkedin.com/in/tharanadhbiju"
      style={{ textDecoration: 'none', color: 'white' }}
            target="_blank"
            rel="noopener noreferrer">Get In Touch →</a></button>
    </nav>
  );
};

export default Navbar;
