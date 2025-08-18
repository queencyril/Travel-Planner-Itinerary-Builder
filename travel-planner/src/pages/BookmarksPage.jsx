import React, { useState, useEffect } from "react";
import Card from "../components/Cards/Cards";
import Footer from "../components/Footer/Footer";

export default function BookmarksPage() {
  const [bookmarks, setBookmarks] = useState([]);

  // Load bookmarks from localStorage when page loads
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarks(saved);
  }, []);

  // Function to clear all bookmarks
  const clearBookmarks = () => {
    localStorage.removeItem("bookmarks"); // remove all saved destinations
    setBookmarks([]); // update page immediately
  };

  return (
    <>

      <div className="bookmarks-page" style={{ padding: "2rem" }}>
        <h2>My Bookmarked Destinations</h2>

        {/* Clear All Bookmarks Button */}
        {bookmarks.length > 0 && (
          <button
            onClick={clearBookmarks}
            style={{
              padding: "0.5rem 1rem",
              marginBottom: "1rem",
              border: "none",
              backgroundColor: "#39f8e2",
              color: "#fff",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Clear All Bookmarks
          </button>
        )}

        {/* If no bookmarks */}
        {bookmarks.length === 0 ? (
          <p>No saved destinations yet! Go back to Home and save some.</p>
        ) : (
          <div className="card-container">
            {bookmarks.map((destination) => (
              <Card key={destination.id} destination={destination} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
