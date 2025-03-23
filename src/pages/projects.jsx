import Navbar from "./navbar";
import "./projects.css";

export default function Projects() {
  return (
    <>
      <Navbar />
      <div className="projects-container">
        <h1 className="projects-title">Projects</h1>

        <div className="project">
          <div className="project-title">
            Mangalya Event Management(UI Design)
          </div>
          <div className="project-details">
            Designed a responsive and user-friendly website for Mangalya Event
            Management, focusing on an intuitive user experience and modern
            aesthetics.
            <ul>
              <li>
                Created wireframes and prototypes using Figma/Adobe XD/Sketch{" "}
              </li>
              <li>
                Developed a visually appealing interface with a strong emphasis
                on usability.
              </li>
              <li>
                Ensured a mobile-friendly and responsive design for seamless
                user experience.
              </li>
              <a
                href="https://www.behance.net/gallery/222023085/Mangalya-event-management-website"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="button">View</button>
              </a>
            </ul>
          </div>
        </div>

        <div className="project">
          <div className="project-title">
            Sushi Restaurant (Homepage UI Design)
          </div>
          <div className="project-details">
            Designed a visually engaging homepage for a sushi restaurant,
            incorporating a modern and elegant aesthetic to enhance user
            engagement.
            <ul>
              <li>
                Designed wireframes and mockups using Figma/Adobe XD/Sketch.
              </li>
              <li>
                Focused on a sleek, Japanese-inspired UI with smooth navigation.
              </li>
              <li>
                Implemented a responsive layout for an optimal experience on all
                devices.
              </li>
              <a
                href="https://www.behance.net/gallery/222041783/sushi-restaurant"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="button">View</button>
              </a>
            </ul>
          </div>
        </div>

        <div className="project">
          <div className="project-title">
            Medical Store Delivery website (UI Design)
          </div>
          <div className="project-details">
            <p>
              Designed the UI for a medical delivery app to streamline medicine
              ordering, tracking, and delivery.
            </p>
            <ul>
              <li>
                Created intuitive user flows for prescription uploads and
                real-time order tracking.
              </li>
              <li>
                Designed a clean, accessible interface with a focus on elderly
                users (large buttons, high contrast).
              </li>
              <li>
                Prototyped interactions for order confirmation, payment
                gateways, and delivery notifications using Figma.
              </li>
              <li>
                <strong>Outcome:</strong> Reduced user onboarding time by 20%
                through simplified navigation.
              </li>
              <a
                href="https://www.behance.net/gallery/222042123/medical-store-admin-login-and-dashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="button">View</button>
              </a>
            </ul>
          </div>
        </div>

        <div className="project">
          <div className="project-title">
            Salon Parlor Online Booking System (UI/UX)
          </div>
          <div className="project-details">
            <p>
              Led the UI/UX design for a salon booking platform, enabling users
              to browse services, select stylists, and schedule appointments.
            </p>
            <ul>
              <li>
                Conducted user research to identify pain points in existing
                booking systems (e.g., cluttered layouts).
              </li>
              <li>
                Built wireframes and high-fidelity prototypes in Adobe XD,
                incorporating feedback from 50+ beta testers.
              </li>
              <li>
                Implemented a visual calendar widget and service filtering to
                improve booking efficiency.
              </li>
              <li>
                <strong>Outcome:</strong> Increased booking conversion rates by
                35% through streamlined user journeys.
              </li>
              <button className="button">view</button>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
