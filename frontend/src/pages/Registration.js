import React from "react";
import img from "../images//Login/loginimage.png";
import logo from "../images/Login/logo.png";
import { useRef } from "react";
const Registration = () => {
  const name = useRef();
  const surname = useRef();
  const username = useRef();
  const passowrd = useRef();
  const number = useRef();
  const email = useRef();
  const age = useRef();
  const country = useRef();

  const handleRegistration = (event) => {
    event.preventDefault();
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div
        className="w-[60%] h-screen"
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="w-[40%] h-[80%] flex flex-col items-center justify-around mb-[70px]">
        <img src={logo} className="w-[200px]" />
        <h2 className="font-[24px]">Registration</h2>

        <form
          className="w-[60%] h-[60%] flex flex-col items-center justify-around"
          onSubmit={handleRegistration}
        >
          <div className="flex justify-between w-[100%]">
            <div className="flex flex-col w-[45%]">
              <label className="text-[#1774FF]">Username</label>
              <div className="h-[40px] flex flex-col">
                <input
                  ref={name}
                  className="border-b-2 border-[#1774FF] bg-transparent outline-0 h-[13px] focus:h-[20px] text-[12px] focus:h-[30px] focus:text-[15px] transition-all"
                />
              </div>
            </div>
            <div className="flex flex-col w-[50%]">
              <label className="text-[#1774FF]">Last name</label>
              <div className="h-[40px] flex flex-col">
                <input
                  ref={surname}
                  className="border-b-2 border-[#1774FF] bg-transparent outline-0 h-[13px] focus:h-[20px] text-[12px] focus:h-[30px] focus:text-[15px] transition-all"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[100%]">
            <label className="text-[#1774FF]">Username</label>
            <div className="h-[40px] flex flex-col">
              <input className="border-b-2 border-[#1774FF] bg-transparent outline-0 h-[13px] focus:h-[20px] text-[12px] focus:h-[30px] focus:text-[15px] transition-all" />
            </div>
          </div>
          <div className="flex flex-col w-[100%]">
            <label className="text-[#1774FF]">Password</label>
            <div className="h-[40px] flex flex-col">
              <input
                className="border-b-2 border-[#1774FF] bg-transparent outline-0 h-[13px] focus:h-[20px] text-[12px] focus:h-[30px] focus:text-[15px] transition-all"
                type="password"
              />
            </div>
          </div>
          <div className="flex justify-between w-[100%]">
            <div className="flex flex-col w-[45%]">
              <label className="text-[#1774FF]">Number</label>
              <div className="h-[40px] flex flex-col">
                <input className="border-b-2 border-[#1774FF] bg-transparent outline-0 h-[13px] focus:h-[20px] text-[12px] focus:h-[30px] focus:text-[15px] transition-all" />
              </div>
            </div>
            <div className="flex flex-col w-[50%]">
              <label className="text-[#1774FF]">Email</label>
              <div className="h-[40px] flex flex-col">
                <input className="border-b-2 border-[#1774FF] bg-transparent outline-0 h-[13px] focus:h-[20px] text-[12px] focus:h-[30px] focus:text-[15px] transition-all" />
              </div>
            </div>
          </div>
          <div className="flex justify-between w-[100%] ">
            <div className="flex flex-col w-[45%]">
              <label className="text-[#1774FF]">Age</label>
              <div className="h-[40px] flex flex-col">
                <input className="border-b-2 border-[#1774FF] bg-transparent outline-0 h-[13px] focus:h-[20px] text-[12px] focus:h-[30px] focus:text-[15px] transition-all" />
              </div>
            </div>
            <div className="flex flex-col w-[50%]">
              <label className="text-[#1774FF]">Country</label>
              <div className="h-[40px] flex flex-col">
                <input className="border-b-2 border-[#1774FF] bg-transparent outline-0 h-[13px] focus:h-[20px] text-[12px] focus:h-[30px] focus:text-[15px] transition-all" />
              </div>
            </div>
          </div>
          <button className="w-[150px] h-[40px] border-2 border-[#1774FF] rounded-3xl translate-y-[50px] text-[14px] font-bold text-[#1774FF]">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
