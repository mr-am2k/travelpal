import React from "react";
import { Link } from "react-router-dom";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
const Footer = () => {
  return (
    <div className="min-h-[300px] w-full flex justify-between pt-[30px] md:pt-[0px] gap-10 px-20 items-start md:items-center bg-[#0d1b31] text-white py-4">
      <div className="flex md:flex-row flex-col justify-between w-[70%]">
        <div className="flex flex-col gap-5 px-[5px]">
          <h3 className="text-[18px] md:text-[20px] font-bold leading-[24px]">
            Travelpal
          </h3>
          <div className="flex flex-col gap-2 text-[15px] md:text-[16px]">
            <Link to="/registration">Join now</Link>
            <Link to="/">Information for hosts</Link>
            <Link to="/">Become a host</Link>
            <Link to="/">Gift a Travelpal</Link>
          </div>
        </div>
        <div className="flex flex-col gap-5 mt-[40px] md:mt-[0px] px-[5px]">
          <h3 className="text-[18px] md:text-[20px] font-bold leading-[24px]">
            Our Community
          </h3>
          <div className="flex flex-col gap-2 text-[15px] md:text-[16px]">
            <Link to="/">Option 1</Link>
            <Link to="/">Option 2</Link>
            <Link to="/">Option 3</Link>
            <Link to="/">Option 4</Link>
          </div>
        </div>
        <div className="flex flex-col gap-5 mt-[40px] md:mt-[0px] px-[5px]">
          <h3 className="text-[18px] md:text-[20px] font-bold leading-[24px]">
            Information
          </h3>
          <div className="flex flex-col gap-2 text-[15px] md:text-[16px]">
            <Link to="/">Option 1</Link>
            <Link to="/">Option 2</Link>
            <Link to="/">Option 3</Link>
            <Link to="/">Option 4</Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col min-w-[180px] h-[160px] gap-10 ">
        <h3 className="text-[20px] md:text-[26px] font-bold leading-[24px]">
          Social Media
        </h3>
        <div className="flex flex-col md:flex-row gap-10">
          <Link to="/">
            <FiFacebook className="w-8 h-8" />
          </Link>
          <Link to="/">
            <FiTwitter className="w-8 h-8" />
          </Link>
          <Link to="/">
            <FiInstagram className="w-8 h-8" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
