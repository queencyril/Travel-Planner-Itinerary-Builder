import React from "react";
import { FaMapMarkedAlt, FaPlane, FaHeart } from "react-icons/fa";
import "./HowItWorks.css";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <FaMapMarkedAlt />,
      title: "Choose Your Destination",
      description: "Select from our curated list of amazing travel destinations."
    },
    {
      id: 2,
      icon: <FaPlane />,
      title: "Book Your Trip",
      description: "Easily book flights, hotels, and tours in one place."
    },
    {
      id: 3,
      icon: <FaHeart />,
      title: "Enjoy Your Adventure",
      description: "Relax and explore while we take care of all the details."
    },
  ];

  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps-container">
        {steps.map((step) => (
          <div className="step-card" key={step.id}>
            <div className="step-icon">{step.icon}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
