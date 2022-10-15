import React from "react";
import { Link } from "react-router-dom";
const Prefooter = () => {
  return (
    <div className="w-full h-[300px] bg-[#284673] flex gap-10 justify-around items-center px-14 mt-10">
      {/* LEFT SIDE */}
      <div className="flex flex-col gap-4 text-[28px] leading-[44px] text-white">
        <h1 className="font-semibold">Your journey starts today right here</h1>
        <p className="font-normal">
          Join Travelpal community today to gain unique travel experiences.
        </p>
      </div>
      {/* RIGHT SIDE */}
      <Link
        to="/registration"
        className="w-[260px] h-[80px] bg-white text-[#1774ff] rounded-[50px] hover:bg-[#1774ff] hover:text-white flex items-center justify-center text-[23px] leading-[29px] font-bold"
      >
        Join Now
      </Link>
    </div>
  );
};

export default Prefooter;
