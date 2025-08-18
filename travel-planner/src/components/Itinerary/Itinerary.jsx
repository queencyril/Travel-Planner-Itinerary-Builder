import React from "react";
import { useLocation } from "react-router-dom";

export default function Itinerary() {
  const { state } = useLocation();
  const destination = state?.destination || "your destination";
  const startDate = state?.startDate || "start";
  const endDate = state?.endDate || "end";

  return (
    <div className="itinerary-page">
      <h2>Itinerary for {destination}</h2>
      <p>Dates: {startDate} — {endDate}</p>

      <div className="day">
        <h3>Day 1</h3>
        <ul>
          <li>Morning: Visit main sights</li>
          <li>Afternoon: Local lunch & museum</li>
          <li>Evening: Scenic dinner</li>
        </ul>
      </div>

      <p>(This page is a placeholder — later we’ll auto-generate each day from places API.)</p>
    </div>
  );
}
