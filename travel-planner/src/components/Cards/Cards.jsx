import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Cards.css";

const Card = ({ destination }) => {
  const navigate = useNavigate();
  const [bookmarked, setBookmarked] = useState(false);
  const [message, setMessage] = useState("");

  // Check if this destination is already bookmarked
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookmarks")) || [];
    const exists = saved.some((item) => item.id === destination.id);
    setBookmarked(exists);
  }, [destination.id]);

  // Toggle bookmark
  const toggleBookmark = () => {
    let saved = JSON.parse(localStorage.getItem("bookmarks")) || [];

    if (bookmarked) {
      saved = saved.filter((item) => item.id !== destination.id);
      setMessage("Removed from bookmarks");
    } else {
      saved.push(destination);
      setMessage("Saved to bookmarks");
    }

    localStorage.setItem("bookmarks", JSON.stringify(saved));
    setBookmarked(!bookmarked);

    // Clear message after 2 seconds
    setTimeout(() => setMessage(""), 2000);
  };

  // Navigate to DestinationPage with this destination
  const goToDestinationPage = () => {
    navigate("/destinationpage", { state: { destination } });
  };

  return (
    <div className="card">
      <img src={destination.image} alt={destination.name} className="card-img" />

      <div className="card-content">
        <h3 className="card-title">{destination.name}</h3>

        <div className="location-price">
          <p className="card-location">
            <FaMapMarkerAlt className="location-icon" /> {destination.location}
          </p>
          <p className="card-price">{destination.price}</p>
        </div>

        <hr className="divider" />

        <p className="card-description">{destination.description}</p>

        <div className="card-buttons">
          <button className="card-btn" onClick={goToDestinationPage}>
            View Details
          </button>
          <button className="card-btn save-btn" onClick={toggleBookmark}>
            {bookmarked ? <FaHeart color="red" /> : <FaRegHeart />}
          </button>
        </div>

        {message && <p className="bookmark-message">{message}</p>}
      </div>
    </div>
  );
};

export default Card;
