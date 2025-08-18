import React from "react";
import { useLocation, Link } from "react-router-dom";


const DestinationPage = () => {
  const { state } = useLocation();
  const destination = state?.destination || null;
  const startDate = state?.startDate || "";
  const endDate = state?.endDate || "";

  return (
    <div>
      <div className="destination-page" style={{ padding: "2rem" }}>
        {destination ? (
          <>
            <h2>{destination.name}</h2>
            <p><strong>Location:</strong> {destination.location}</p>
            <p><strong>Price:</strong> {destination.price}</p>
            <p>{destination.description}</p>
            <img
              src={destination.image}
              alt={destination.name}
              style={{ width: "100%", maxWidth: "600px", borderRadius: "8px" }}
            />

            {startDate && endDate && (
              <p>
                <strong>Trip Dates:</strong> {startDate} — {endDate}
              </p>
            )}

            <div
              style={{
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
              }}
            >
              Google Map will appear here
            </div>

            <Link
              to="/itinerarypage"
              state={{ destination, startDate, endDate }}
            >
              <button>Generate Itinerary</button>
            </Link>
          </>
        ) : (
          <p>No destination selected. Go back and pick a place.</p>
        )}
      </div>
    </div>
  );
};

export default DestinationPage;
