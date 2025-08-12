import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function Destination() {
  const { state } = useLocation();
  const destination = state?.destination || "";
  const startDate = state?.startDate || "";
  const endDate = state?.endDate || "";

  return (
    <div className="destination-page">
      <h2>{destination ? `Results for "${destination}"` : "Destination"}</h2>

      {destination ? (
        <>
          <p>Dates: {startDate || "—"} to {endDate || "—"}</p>
          <p>(This is a placeholder results page. Later we'll show places and images here.)</p>

          {/* Map placeholder */}
          <div style={{
            marginTop: "1rem",
            marginBottom: "1rem",
            width: "100%",
            height: "300px",
            border: "2px solid #ccc",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#666",
            fontSize: "1.1rem",
            backgroundColor: "#f8f8f8"
          }}>
            Google Map will appear here
          </div>

          <Link to="/itinerary" state={{ destination, startDate, endDate }}>
            <button>Generate Itinerary</button>
          </Link>
        </>
      ) : (
        <p>No search yet. Go back to Home and try the search form.</p>
      )}
    </div>
  );
}
