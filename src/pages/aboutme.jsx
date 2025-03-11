import React from "react";
import ProfilePic from "../components/(Memphis) - Web designer software designer software developer.png";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import "./aboutme.css"; 

const AboutMe = () => {
  return (
    <>
      <Navbar />

      {/* About Me Section */}
      <div className="aboutme-container">
        <div className="aboutme-image-wrapper">
          <img src={ProfilePic} alt="Tharanadh Biju" className="aboutme-image" />
        </div>
        <div className="aboutme-text-wrapper">
          <h1 className="aboutme-name">Tharanadh Biju</h1>
          <h2 className="aboutme-role">Front-End Developer</h2>
          <p className="aboutme-description">
            I have a Bachelor's degree in Electronics and Communication Engineering and a strong passion for web development. 
            With expertise in React.js, I build dynamic and user-friendly interfaces that provide seamless experiences.
          </p>
          <p className="aboutme-description">
            My journey into web development has been driven by a desire to create intuitive, engaging digital experiences. 
            I have experience working on multiple projects, including e-commerce platforms and interactive UI/UX designs.
          </p>
          <p className="aboutme-description">
            In my free time, I enjoy gaming, exploring new web technologies, and contributing to open-source projects. 
            I am always open to networking and discussing innovative ideas.
          </p>
          <a
            href="https://www.linkedin.com/in/tharanadhbiju"
            className="aboutme-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let's connect on LinkedIn
          </a>
        </div>
      </div>

      {/* Additional Content Section */}
      <div className="extra-content-container">
        <div className="impact-section">
          <h2 className="impact-title">Impact First</h2>
          <p className="impact-text">
            I believe that success isn’t just about creating visually stunning designs or following the latest trends. 
            It’s about making a real, tangible difference in the lives of users and the businesses I work with. 
            This is why I prioritize Impact First in everything I do.
          </p>
        </div>

        <div className="communication-section">
          <h2 className="communication-title">Focus on Communication</h2>
          <p className="communication-text">
            I believe that effective communication is the foundation of every successful project. 
            Design isn’t just about aesthetics or functionality; it’s about understanding and translating 
            complex ideas into intuitive, user-friendly experiences.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
