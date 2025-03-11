import React from "react";
import "./footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          <h2 className="footer-heading">Ready for lift-off?</h2>
          
          <p className="footer-text">
            Feel free to reach out if you want to start a project, collaborate, or simply have a chat.
          </p>

          {/* Buttons */}
          <div className="footer-buttons">
            <a href="mailto:tharanathbiju14@gmail.com" className="btn btn-primary">
              Get In Touch →
            </a>
            <a href="/about" className="btn btn-secondary">
              About me
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        
      </div>
    </footer>
  );
};

export default Footer;
