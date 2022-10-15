import React from "react";
import logo from "../images/logo.png";
import { Link, Navigate } from "react-router-dom";
import { TbBooks } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
const Header = () => {
  const goHome = () => {
    <Navigate to="/" replace={true} />;
  };
  return (
    <div className="h-[105px] w-full flex justify-around px-20">
      {/* Lijeva strana */}
      <div className="w-[35%] h-full">
        {/* <Link to="/"> */}
        <img
          src={logo}
          className="w-[166px] h-[90px] cursor-pointer"
          alt="TravelPal"
          onClick={goHome}
        />
        {/* </Link> */}
      </div>
      {/* Desna strana */}
      <div className="w-[65%] h-full flex justify-end">
        {/* Tabs (hidden on mobile) */}
        <div className="w-full h-full flex items-center justify-end gap-5">
          <Link className="flex flex-col gap-1 items-center border-2" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#000"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <p className="font-[10px] font-normal leading-[12px]">Home</p>
          </Link>
          <Link
            className="flex flex-col gap-1 items-center border-2"
            to="/travel"
          >
            <TbBooks className="w-7 h-7" />
            <p className="font-[10px] font-normal leading-[12px]">Travel</p>
          </Link>
          <Link
            className="flex flex-col gap-1 items-center border-2"
            to="/login"
          >
            <AiOutlineUser className="w-7 h-7" />
            <p className="font-[10px] font-normal leading-[12px]">Login</p>
          </Link>
        </div>
        {/* Join now button */}
        <div className="w-1/2 ml-auto flex items-center justify-end">
          <button className="w-[120px] h-[45px] font-bold border-[#1774FF] rounded-[25px] border-2 flex items-end justify-center font-[10px] leading-[12px] text-[#1774ff] px-2 py-4 hover:bg-[#1774FF] hover:text-white">
            <Link to="/login">Join now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
