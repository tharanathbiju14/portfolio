import React from "react";
import "./service.css"; // Import CSS file
import { FaPencilAlt, FaMobileAlt, FaPalette, FaBolt } from "react-icons/fa"; // Import icons

const Services = () => {
  const services = [
    {
      icon: <FaPencilAlt style={{ color: "#00CFFF" }} />,
      title: "UI & UX",
      description: "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
      color: "#00CFFF",
    },
    {
      icon: <FaMobileAlt style={{ color: "#A684FF" }} />,
      title: "Web & Mobile App",
      description: "Transforming ideas into exceptional web and mobile app experiences.",
      color: "#A684FF",
    },
    {
      icon: <FaPalette style={{ color: "#FF88F7" }} />,
      title: "Design & Creative",
      description: "Crafting visually stunning design that connects deeply with your audience.",
      color: "#FF88F7",
    },
    {
      icon: <FaBolt style={{ color: "#FFA600" }} />,
      title: "Development",
      description: "Bringing your vision to life with the latest technology and design trends.",
      color: "#FFA600",
    },
  ];

  return (
    <div className="services-container">
      <h2 className="section-title">WHAT I DO</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon" style={{ color: service.color }}>
              {service.icon}
            </div>
            <h3 style={{ color: service.color }}>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
