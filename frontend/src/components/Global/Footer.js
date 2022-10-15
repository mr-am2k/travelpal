import React from "react";
import { Link } from "react-router-dom";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
const Footer = () => {
  return (
    <div className="h-[300px] w-full flex gap-10 px-20 items-center bg-[#0d1b31] text-white">
      <div className="flex justify-between w-[60%]">
        <div className="flex flex-col gap-5">
          <h3 className="text-[20px] font-bold leading-[24px]">Travelpal</h3>
          <div className="flex flex-col gap-2">
            <Link to="/registration">Join now</Link>
            <Link to="/">Information for hosts</Link>
            <Link to="/">Become a host</Link>
            <Link to="/">Gift a Travelpal</Link>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-[20px] font-bold leading-[24px]">
            Our Community
          </h3>
          <div className="flex flex-col gap-2">
            <Link to="/">Option 1</Link>
            <Link to="/">Option 2</Link>
            <Link to="/">Option 3</Link>
            <Link to="/">Option 4</Link>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-[20px] font-bold leading-[24px]">Information</h3>
          <div className="flex flex-col gap-2">
            <Link to="/">Option 1</Link>
            <Link to="/">Option 2</Link>
            <Link to="/">Option 3</Link>
            <Link to="/">Option 4</Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[40%] h-[160px] gap-10 pl-10">
        <h3 className="text-[30px] font-bold leading-[24px]">Social Media</h3>
        <div className="flex gap-10">
          <Link to="/">
            <FiFacebook className="w-10 h-10" />
          </Link>
          <Link to="/">
            <FiTwitter className="w-10 h-10" />
          </Link>
          <Link to="/">
            <FiInstagram className="w-10 h-10" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
