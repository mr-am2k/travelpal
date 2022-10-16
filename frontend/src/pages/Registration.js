import React from "react";
import img from "../images//Login/loginimage.png";
import logo from "../images/Login/logo.png";
import { useRef } from "react";
const Registration = () => {
  const name = useRef();

  const fullname = useRef();
  const username = useRef();
  const password = useRef();
  const phoneNumber = useRef();
  const email = useRef();
  const age = useRef();
  const country = useRef();
  const gender = useRef();

  const handleRegistration = async (event) => {
    event.preventDefault();

    //const fullname = fullname.current.value;
    console.log(fullname.current.value);
    const fullnameA = fullname.current.value.split(" ");
    const user = {
      firstName: fullnameA[0],
      lastName: fullnameA[1],
      username: username.current.value,
      passwordHash: password.current.value,
      phoneNumber: phoneNumber.current.value,
      email: email.current.value,
      dateOfBirth: age.current.value,
      country: country.current.value,
      //gender here
    };
    console.log(user);
    const response = await fetch("http://localhost:3000/api/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    console.log(await response.json());
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
        <img src={logo} className="w-[200px]" alt="#" />
        <h2 className="text-[20px] pb-[20px]">Registration</h2>

        <form
          className="w-[60%]  flex flex-col items-center justify-around"
          onSubmit={handleRegistration}
        >
          <div className="flex flex-col w-[100%]">
            <label className="text-[#1774FF]">Full name</label>
            <div className="h-[40px] flex flex-col">
              <input
                ref={fullname}
                className="border-b-2 border-[#1774FF] bg-transparent outline-0 h-[13px] focus:h-[20px] text-[12px] focus:h-[30px] focus:text-[15px] transition-all"
              />
            </div>
          </div>
          <div className="flex flex-col w-[100%]">
            <label className="text-[#1774FF]">Username</label>
            <div className="h-[40px] flex flex-col">
              <input
                ref={username}
                className="border-b-2 border-[#1774FF] bg-transparent outline-0 h-[13px] focus:h-[20px] text-[12px] focus:h-[30px] focus:text-[15px] transition-all"
              />
            </div>
          </div>
          <div className="flex flex-col w-[100%]">
            <label className="text-[#1774FF]">Password</label>
            <div className="h-[40px] flex flex-col">
              <input
                ref={password}
                className="border-b-2 border-[#1774FF] bg-transparent outline-0 h-[13px] focus:h-[20px] text-[12px] focus:h-[30px] focus:text-[15px] transition-all"
                type="password"
              />
            </div>
          </div>
          <div className="flex flex-col w-[100%]">
            <label className="text-[#1774FF]">Email</label>
            <div className="h-[40px] flex flex-col">
              <input
                ref={email}
                className="border-b-2 border-[#1774FF] bg-transparent outline-0 h-[13px] focus:h-[20px] text-[12px] focus:h-[30px] focus:text-[15px] transition-all"
              />
            </div>
          </div>
          //unfinished
          <div className="flex flex-col w-[100%]">
            <label className="text-[#1774FF]">Gender</label>
            <div className="h-[40px] flex flex-col">
              <input
                type="checkbox"
                ref={gender}
                className="border-b-2 border-[#1774FF] bg-transparent outline-0 h-[13px] focus:h-[20px] text-[12px] focus:h-[30px] focus:text-[15px] transition-all"
              />
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              ></input>
            </div>
          </div>
          <div className="flex w-[100%]">
            <label className="text-[#1774FF]">Date of birth:</label>
            <div className="h-[40px]">
              <input
                type="date"
                ref={age}
                className="text-[#1774FF] order-b-2 border-[#1774FF] bg-transparent outline-0 h-[13px] focus:h-[20px] text-[14px] pl-[20px]"
              />
            </div>
          </div>
          <div className="flex w-[100%] justify-between">
            <div className="flex flex-col w-[45%]">
              <label className="text-[#1774FF]">Phone number</label>
              <div className="h-[40px] flex flex-col">
                <input
                  ref={phoneNumber}
                  className="border-b-2 border-[#1774FF] bg-transparent outline-0 h-[13px] focus:h-[20px] text-[12px] focus:h-[30px] focus:text-[15px] transition-all"
                />
              </div>
            </div>
            <div className="flex flex-col w-[45%]">
              <label className="text-[#1774FF]">Country</label>
              <div className="h-[40px] flex flex-col">
                <input
                  ref={country}
                  className="border-b-2 border-[#1774FF] bg-transparent outline-0 h-[13px] focus:h-[20px] text-[12px] focus:h-[30px] focus:text-[15px] transition-all"
                />
              </div>
            </div>
          </div>
          <button className="hover:bg-[#1b5349] w-[150px] h-[40px] text-white rounded-3xl translate-y-[50px] text-[14px] font-bold bg-[#1774FF]">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
