import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import picture1 from "../images/Home/Hosts/picture-1.png";
const Hosts = () => {
  return (
    <div className="flex flex-col gap-5 w-full h-[900px] pt-10">
      <p className="text-center text-black text-[48px] leading-[59px] font-normal">
        Find your host
      </p>
      <div>
        <Card
          title="Hungary | Janos"
          description="Reconnect with nature while traveling through Hungarian villages."
          ratingCount={10}
          reviewStars={5}
        ></Card>
      </div>
      <Link to="/hosts"></Link>
    </div>
  );
};

export default Hosts;
