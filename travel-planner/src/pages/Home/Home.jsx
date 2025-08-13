import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css'
import bgVid from '../../assets/bgVid.mp4'


export default function Home() {
  const navigate = useNavigate();
  const [destination, setDestination] = React.useState("");
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // For now pass search data via navigation state to Destination page
    navigate("/destination", { state: { destination, startDate, endDate } });
  }

  return (
     <div className="landing-container">
      

    <div className="home">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={bgVid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <section className="hero">
        <div className="hero-content">
          <h2>Let's Plan Your Trips</h2>
          <h1>Together...</h1>
          <p>Live your best moments</p>

          <form className="search-form" onSubmit={handleSubmit}>
            <input
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Where are you going? e.g. Paris"
              aria-label="destination"
              required
              className="input-value"
            />

            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              aria-label="start date"
            />

            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              aria-label="end date"
            />

            <button type="submit">Search</button>
          </form>
        </div>
      </section>

      <section className="popular">
        <h2>Popular destinations (placeholders)</h2>
        <div className="cards">
          <div className="card">Paris</div>
          <div className="card">Lagos</div>
          <div className="card">New York</div>
        </div>
      </section>
    </div>
    </div>
  );
}
