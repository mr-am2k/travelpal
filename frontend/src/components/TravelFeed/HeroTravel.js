import React from "react";
import heroImg from "../../images/Feed/TravelFeed/heropic.png";
const HeroTravel = () => {
  return (
    <div
      className="w-full bg-red-300 flex flex-col gap-4 items-center justify-center text-white py-[20px]"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      <div className="w-[60%] mx-auto flex flex-col gap-4">
        <h2 className="text-[48px] font-bold leading-[60px] text-center">
          Find your travel pal in the moment
        </h2>
        <h4 className="text-[20px] text-center w-[65%] mx-auto">
          Planning a trip? Want someone to share the journey with? Your travel
          companion is just a click away.
        </h4>
      </div>
    </div>
  );
};

export default HeroTravel;
