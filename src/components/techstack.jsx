import React from "react";
import "./techstack.css";
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
  const techIcons = [
    <FaHtml5 className="tech-icon" key="html" />,
    <FaCss3Alt className="tech-icon" key="css" />,
    <FaJs className="tech-icon" key="js" />,
    <SiTypescript className="tech-icon" key="ts" />,
    <FaReact className="tech-icon" key="react" />,
    <SiNextdotjs className="tech-icon" key="next" />,
    <FaNodeJs className="tech-icon" key="node" />,
    <SiTailwindcss className="tech-icon" key="tailwind" />,
    <FaGitAlt className="tech-icon" key="git" />,
  ];

  return (
    <div className="tech-stack-container">
      <h2 className="tech-stack-title">MY TECH STACK</h2>
      <p className="tech-stack-description">
        My expertise spans a diverse range of <span className="highlight">technologies</span>, enabling me to deliver comprehensive and <span className="highlight-alt">cutting-edge solutions</span> across various platforms.
      </p>
      <div className="tech-icons-wrapper">
        <div className="tech-icons">
          {/* First set of icons */}
          <div className="tech-icons-set">
            {techIcons.map((icon, index) => (
              React.cloneElement(icon, { key: `first-${index}` })
            ))}
          </div>
          {/* Second set of icons for seamless looping */}
          <div className="tech-icons-set">
            {techIcons.map((icon, index) => (
              React.cloneElement(icon, { key: `second-${index}` })
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;