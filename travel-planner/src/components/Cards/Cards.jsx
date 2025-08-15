import React from "react";
import "./PopularDestinations.css";

function Card({ image, title, description, price }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="price">{price}</p>
    </div>
  );
}

export default Card;
