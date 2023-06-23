import React, { useState } from "react";
import HeroTravel from "../components/TravelFeed/HeroTravel";
import Navbar from "../components/Navbar";
import MainTravel from "../components/TravelFeed/MainTravel";
import Footer from "../components/Global/Footer";
import { PostModal } from "../components/Post/PostModal";
const TravelFeed = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-full flex flex-col relative">
      <Navbar />
      <HeroTravel />
      <div className="w-[80%] mx-auto my-10 text-[20px] leading-[24px] font-normal text-center">
        <p>
          Thousands of Travelpal members are looking for a travel partner. New travel-mates added
          daily.
        </p>
      </div>
      <MainTravel />
      {showModal && <PostModal setModal={setShowModal} />}
      <button
        id="open_modal"
        onClick={() => setShowModal(true)}
        className="fixed bottom-10 right-10 w-[35px] h-[35px] hover:scale-110 transform-all"
      >
        <svg
          width="35"
          height="35"
          viewBox="0 0 85 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M43 10L43 74" stroke="#1774FF" strokeWidth="20" strokeLinecap="round" />
          <path
            d="M10.9844 41.2504L74.9839 41"
            stroke="#1774FF"
            strokeWidth="20"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <Footer />
    </div>
  );
};

export default TravelFeed;
