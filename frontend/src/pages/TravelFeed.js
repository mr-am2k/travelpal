import React from "react";
import HeroTravel from "../components/TravelFeed/HeroTravel";
import Navbar from "../components/Navbar";
import MainTravel from "../components/TravelFeed/MainTravel";
import Footer from "../components/Global/Footer";
const TravelFeed = () => {
  return (
    <div className="w-full h-[1000px] flex flex-col">
      <Navbar />
      <HeroTravel />
      <div className="w-[80%] mx-auto my-10 text-[20px] leading-[24px] font-normal text-center">
        <p>
          Thousands of Travelpal members are looking for a travel partner. New
          travel-mates added daily.
        </p>
      </div>
      <MainTravel />
      <Footer />
    </div>
  );
};

export default TravelFeed;
