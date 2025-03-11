import Navbar from "./navbar";
import "./projects.css";

export default function Projects() {
  return (
    <>
      <Navbar/>
      <div className="projects-container">
        <h1 className="projects-title">Projects</h1>

        <div className="project">
          <div className="project-title">Medical Store Delivery App (UI Design)</div>
          <div className="project-details">
            <p>Designed the UI for a medical delivery app to streamline medicine ordering, tracking, and delivery.</p>
            <ul>
              <li>Created intuitive user flows for prescription uploads and real-time order tracking.</li>
              <li>Designed a clean, accessible interface with a focus on elderly users (large buttons, high contrast).</li>
              <li>Prototyped interactions for order confirmation, payment gateways, and delivery notifications using Figma.</li>
              <li><strong>Outcome:</strong> Reduced user onboarding time by 20% through simplified navigation.</li>
            </ul>
          </div>
        </div>

        <div className="project">
          <div className="project-title">Salon Parlor Online Booking System (UI/UX)</div>
          <div className="project-details">
            <p>Led the UI/UX design for a salon booking platform, enabling users to browse services, select stylists, and schedule appointments.</p>
            <ul>
              <li>Conducted user research to identify pain points in existing booking systems (e.g., cluttered layouts).</li>
              <li>Built wireframes and high-fidelity prototypes in Adobe XD, incorporating feedback from 50+ beta testers.</li>
              <li>Implemented a visual calendar widget and service filtering to improve booking efficiency.</li>
              <li><strong>Outcome:</strong> Increased booking conversion rates by 35% through streamlined user journeys.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}