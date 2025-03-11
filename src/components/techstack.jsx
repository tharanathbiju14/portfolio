import React from "react";
import "./techstack.css"; // Import the CSS file
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiMongodb, SiPostgresql, SiNextdotjs, SiNestjs } from "react-icons/si";

const TechStack = () => {
  return (
    <div className="tech-stack-container">
      <h2 className="tech-stack-title">MY TECH STACK</h2>
      <p className="tech-stack-description">
        My expertise spans a diverse range of <span className="highlight">technologies</span>, enabling me to deliver comprehensive and <span className="highlight-alt">cutting-edge solutions</span> across various platforms.
      </p>
      <div className="tech-icons-wrapper">
        <div className="tech-icons">
          {/* Duplicate the icons for smooth looping */}
          {[...Array(2)].map((_, index) => (
            <div key={index} className="tech-icons-set">
              <FaHtml5 className="tech-icon" />
              <FaCss3Alt className="tech-icon" />
              <FaJs className="tech-icon" />
              <SiTypescript className="tech-icon" />
              <FaReact className="tech-icon" />
              <SiNextdotjs className="tech-icon" />
              <FaNodeJs className="tech-icon" />
              {/* <SiNestjs className="tech-icon" /> */}
              <SiTailwindcss className="tech-icon" />
              {/* <SiMongodb className="tech-icon" /> */}
              {/* <SiPostgresql className="tech-icon" /> */}
              <FaGitAlt className="tech-icon" />
              {/* <FaJava className="tech-icon" /> */}
              {/* <FaPython className="tech-icon" /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
