import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet's default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const DestinationPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const destination = state?.destination || null;
  const startDate = state?.startDate || "";
  const endDate = state?.endDate || "";

  if (!destination) {
    return (
      <div style={{ padding: "2rem" }}>
        <p>No destination selected.</p>
        <button onClick={() => navigate(-1)}>⬅ Go Back</button>
      </div>
    );
  }

  // Default to Lagos if no lat/lng provided
  const lat = destination.lat || 6.5244;
  const lng = destination.lng || 3.3792;

  return (
    <div className="destination-page" style={{ padding: "2rem" }}>
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

      {/* Map Section */}
      <div
        style={{
          marginTop: "1rem",
          marginBottom: "1rem",
          width: "100%",
          height: "300px",
          border: "2px solid #ccc",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <MapContainer
          center={[lat, lng]}
          zoom={10}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[lat, lng]}>
            <Popup>{destination.name}</Popup>
          </Marker>
        </MapContainer>
      </div>

      <Link to="/itinerarypage" state={{ destination, startDate, endDate }}>
        <button>Generate Itinerary</button>
      </Link>
    </div>
  );
};

export default DestinationPage;
