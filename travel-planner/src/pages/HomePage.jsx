import React from "react";
import Home from "../components/Home/Home";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import PopularDestination from "../components/PopularDestination/PopularDestination";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer"


const HomePage = () => {
  return (
    <div>
      <Home />
      <HowItWorks />
      <PopularDestination />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HomePage;