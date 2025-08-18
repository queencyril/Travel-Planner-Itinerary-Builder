import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Cards.css";

const Card = ({ destination }) => {
  return (
    <div className="card">
      <img src={destination.image} alt={destination.name} className="card-img" />

      <div className="card-content">
        <h3 className="card-title">{destination.name}</h3>

        {/* Location and Price on same line */}
        <div className="location-price">
          <p className="card-location">
            <FaMapMarkerAlt className="location-icon" /> {destination.location}
          </p>
          <p className="card-price">{destination.price}</p>
        </div>

        {/* Divider line */}
        <hr className="divider" />

        <p className="card-description">{destination.description}</p>

        <button className="card-btn">View Details</button>
      </div>
    </div>
  );
};

export default Card;
