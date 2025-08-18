import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import ItineraryPage from "./pages/ItineraryPage";
import DestinationPage from "./pages/DestinationPage";
import BookmarksPage from "./pages/BookmarksPage";


export default function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/itinerarypage" element={<ItineraryPage />} />
          <Route path="/destinationpage" element={<DestinationPage />} />
          <Route path="/destinationpage/:name" element={<DestinationPage />} />
          <Route path="/bookmarks" element={<BookmarksPage />} />
        </Routes>
      </main>
    </Router>
  );
}
