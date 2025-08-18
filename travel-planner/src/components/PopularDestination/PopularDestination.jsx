import React from "react";
import Card from '../Cards/Cards'

const PopularDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Dubai",
      location: "United Arab Emirates",
      price: "$2,000",
      description: "Luxury shopping, ultramodern architecture, and vibrant nightlife.",
      image: "/assets/Dubai.jpg", // put this in /public/images
    },
    {
      id: 2,
      name: "Santorini",
      location: "Greece",
      price: "$1,200",
      description: "Famous for its stunning sunsets, whitewashed houses, and breathtaking sea views.",
      image: "/assets/Greece.jpg",
    },
    {
      id: 3,
      name: "London",
      location: "United Kingdom",
      price: "$1,800",
      description: "Explore Big Ben, the London Eye, and many more iconic landmarks.",
      image: "/assets/London.jpg",
    },
    {
      id: 4,
      name: "Paris",
      location: "France",
      price: "$1,600",
      description: "Known as the City of Light, Paris is famous for the Eiffel Tower, art, and romance.",
      image: "/assets/Paris.jpg",
    },
    {
      id: 5,
      name: "Dubai",
      location: "United Arab Emirates",
      price: "$2,000",
      description: "Luxury shopping, ultramodern architecture, and vibrant nightlife.",
      image: "/assets/Dubai.jpg", // put this in /public/images
    },
    {
      id: 6,
      name: "Santorini",
      location: "Greece",
      price: "$1,200",
      description: "Famous for its stunning sunsets, whitewashed houses, and breathtaking sea views.",
      image: "/assets/Greece.jpg",
    },
    {
      id: 7,
      name: "London",
      location: "United Kingdom",
      price: "$1,800",
      description: "Explore Big Ben, the London Eye, and many more iconic landmarks.",
      image: "/assets/London.jpg",
    },
    {
      id: 8,
      name: "Paris",
      location: "France",
      price: "$1,600",
      description: "Known as the City of Light, Paris is famous for the Eiffel Tower, art, and romance.",
      image: "/assets/Paris.jpg",
    },
    {
      id: 9,
      name: "Dubai",
      location: "United Arab Emirates",
      price: "$2,000",
      description: "Luxury shopping, ultramodern architecture, and vibrant nightlife.",
      image: "/assets/Dubai.jpg", // put this in /public/images
    },
    {
      id: 10,
      name: "Santorini",
      location: "Greece",
      price: "$1,200",
      description: "Famous for its stunning sunsets, whitewashed houses, and breathtaking sea views.",
      image: "/assets/Greece.jpg",
    },
    {
      id: 11,
      name: "London",
      location: "United Kingdom",
      price: "$1,800",
      description: "Explore Big Ben, the London Eye, and many more iconic landmarks.",
      image: "/assets/London.jpg",
    },
    {
      id: 12,
      name: "Paris",
      location: "France",
      price: "$1,600",
      description: "Known as the City of Light, Paris is famous for the Eiffel Tower, art, and romance.",
      image: "/assets/Paris.jpg",
    },
  ];

  return (
    <section className="popular-destinations">
      <h2>Popular Destinations</h2>
      <div className="card-container">
        {destinations.map((place) => (
          <Card key={place.id} destination={place} />
        ))}
      </div>
    </section>
  );
};

export default PopularDestinations;
