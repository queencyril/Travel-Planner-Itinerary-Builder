import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home"
import Destination from "./pages/Destination/Destination";
import Itinerary from "./pages/Itinerary/Itinerary";
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "70vh", padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/destination/:name" element={<Destination />} />
          <Route path="/itinerary" element={<Itinerary />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
