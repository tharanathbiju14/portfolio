import React from 'react'
import './homepage.css'
import Services from '../components/service';
import TechStack from '../components/techstack';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';
import { TfiAngleDoubleRight } from "react-icons/tfi";

const Homepage = () => {
  return (
    <div className="container">
    {/* Navbar */}
    <nav className="navbar">
      <div className="logo">Tharanadh</div>
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

    {/* Hero Section */}
    <header className="hero">
      <h1>
        Focused on <span className="gray-text">impact</span> and <br />
        <span className="gray-text">results-driven</span> <span>designs</span>
      </h1>
      <p>
        I specialize in creating User Experiences and Aesthetic
        Websites that not only stand out but also drive meaningful impact,
        connecting people with startups and growing companies.
      </p>
      <Services/>
      <TechStack/>
      <Footer/>
    </header>
  </div>
);
};

export default Homepage