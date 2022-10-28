import React from "react";
import heroImage from "../images/Home/hero.png";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsMap } from "react-icons/bs";
import Information from "./Information";
const Hero = () => {
  return (
    <div
      className="w-full h-auto md:h-[690px] flex items-center justify-center border-bl-[15px] border-br-[15px]"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="w-screen max-w-[930px] h-[400px] flex flex-col justify-center gap-7"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* TOP TEXT */}
        <p className="text-[30px] sm:text-[45px] md:text-[64px] font-bold leading-[78px] text-center text-white">
          Connect differently
        </p>
        {/* MIDDLE TEXT */}
        <p className="text-[18px] sm:text-[29px] md:text-[36px] font-normal leading-[44px] text-center text-white">
          Community for breaking barriers and meeting new cultures
        </p>
        {/* INFORMATIONS */}
        <div className="flex items-center justify-around w-[500px] mx-auto">
          <Information text="How it works?">
            <AiOutlineInfoCircle className="w-7 h-7" />
          </Information>
          <Information text="Discover offers">
            <BsMap className="w-7 h-7" />
          </Information>
        </div>
      </div>
    </div>
  );
};

export default Hero;
