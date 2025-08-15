import React from "react";
import Card from "../Cards/Cards.jsx";
import "./PopularDestinations.css";

function PopularDestinations() {
  return (
    <div>
      <h2>Popular Destinations</h2>
      <div className="card-container">
        <Card
          image="/images/paris.jpg"
          title="Paris"
          description="The city of lights, romance, and great croissants."
          price="$1,200"
        />
        <Card
          image="/images/tokyo.jpg"
          title="Tokyo"
          description="A vibrant blend of tradition and futuristic tech."
          price="$1,800"
        />
        <Card
          image="/images/newyork.jpg"
          title="New York"
          description="The city that never sleeps — and has great pizza."
          price="$1,500"
        />
      </div>
    </div>
  );
}

export default PopularDestinations;
