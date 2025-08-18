import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaSun, FaUtensils, FaMoon } from "react-icons/fa";
import "./Itinerary.css";

export default function Itinerary() {
  const { state } = useLocation();
  const destination = state?.destination || "your destination";
  const location = state?.location || "unknown location";
  const price = state?.price || "N/A";
  const description = state?.description || "";
  const image = state?.image || "";

  const [numDays, setNumDays] = useState(3);

  const dayActivities = [
    "Visit main sights",
    "Local lunch & museum",
    "Scenic dinner",
    "Morning hike or city tour",
    "Try local cuisine",
    "Attend cultural show",
    "Relax at hotel or spa",
    "Shopping & souvenir hunting",
    "Sunset view & dinner"
  ];

  const generateItinerary = (days) => {
    const itinerary = [];
    for (let i = 0; i < days; i++) {
      itinerary.push({
        morning: dayActivities[i % dayActivities.length],
        afternoon: dayActivities[(i + 1) % dayActivities.length],
        evening: dayActivities[(i + 2) % dayActivities.length],
      });
    }
    return itinerary;
  };

  const itinerary = generateItinerary(numDays);

  return (
    <div className="itinerary-page">
      <h2>Itinerary for {destination}</h2>
      <img 
        src={image} 
        alt={destination} 
        className="itinerary-image"
      />
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Price:</strong> {price}</p>
      <p>{description}</p>

      <div className="num-days-input">
        <label>
          Number of days: 
          <input 
            type="number" 
            min="1" 
            max="14" 
            value={numDays} 
            onChange={(e) => setNumDays(parseInt(e.target.value))} 
          />
        </label>
      </div>

      <div className="days-container">
        {itinerary.map((day, index) => (
          <div className="day-card" key={index}>
            <h3>Day {index + 1}</h3>
            <ul>
              <li className="morning">
                <FaSun className="time-icon" /> Morning: {day.morning}
              </li>
              <li className="afternoon">
                <FaUtensils className="time-icon" /> Afternoon: {day.afternoon}
              </li>
              <li className="evening">
                <FaMoon className="time-icon" /> Evening: {day.evening}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
