import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="h-[300px] w-full flex gap-10 px-20 items-center">
      <div className="flex flex-col gap-5">
        <h3 className="text-[20px] font-bold leading-[24px]">Travelpal</h3>
        <div className="flex flex-col gap-2">
          <Link to="/registration">Join now</Link>
          <Link to="/">Information for hosts</Link>
          <Link to="/">Become a host</Link>
          <Link to="/">Gift a Travelpal</Link>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Footer;
