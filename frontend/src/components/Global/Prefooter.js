import React from "react";
import { Link } from "react-router-dom";
const Prefooter = () => {
  return (
    <div className="w-full h-[350px] md:h-[300px] bg-[#284673] flex flex-col md:flex-row gap-10 justify-around items-center px-14 mt-10 py-[20px]">
      {/* LEFT SIDE */}
      <div className="flex flex-col gap-4 text-[28px] leading-[44px] text-white">
        <h1 className="font-semibold text-[24px] md:text-[28px] text-center md:text-start">
          Your journey starts today right here
        </h1>
        <p className="font-normal text-[20px] md:text-[24px] text-center md:text-start">
          Join Travelpal community today to gain unique travel experiences.
        </p>
      </div>
      {/* RIGHT SIDE */}
      <Link
        to="/registration"
        className="md:w-[260px] w-[180px] md:h-[80px] h-[60px] bg-white text-[#1774ff] rounded-[50px] hover:bg-[#1774ff] hover:text-white flex items-center justify-center text-[18px] md:text-[23px] leading-[29px] font-bold"
      >
        Join Now
      </Link>
    </div>
  );
};

export default Prefooter;
