import React from "react";
import Card from "../Cards/Cards";
// import Paris from '../../../public/assets/Paris.png'

const PopularDestinations = () => {
  const destinations = [
    {
      title: "Paris",
      description: "The city of lights and romance",
      image: "/assets/Paris.jpg" 
    },
    {
      title: "London",
      description: "Explore the UK capital with rich history",
      image: "/assets/London.jpg",
    },
    {
      title: "Dubai",
      description: "Luxury, shopping, and modern architecture",
      image: "/assets/Dubai.jpg",
    },
    {
      title: "Tokyo",
      description: "Tradition meets technology",
      image: "/assets/Greece.jpg",
    },
  ];

  return (
    <section>
      <h2>Popular Destinations</h2>
      <div className="cards">
        {destinations.map((place, index) => (
          <Card
            key={index}
            image={place.image}
            title={place.title}
            description={place.description}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularDestinations;
