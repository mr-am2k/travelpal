import React from "react";
import img from "../images//Login/loginimage.png";
import logo from "../images/Login/logo.png";
import { useRef } from "react";
import { Link } from "react-router-dom";
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
        data-aos="fade"
        className="w-[60%] md:block hidden h-screen"
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        className="md:w-[40%] w-[80%] h-[80%] flex flex-col items-center justify-around mb-[70px]"
        data-aos="fade"
      >
        <img src={logo} className="w-[200px]" alt="#" />
        <h2 className="text-[20px] pb-[20px]">Registration</h2>

        <form
          className="md:w-[60%] sm:w-[70%] w-[90%] flex flex-col items-center justify-around"
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

          <div className="flex w-[100%] items-center justify-between pb-[10px]">
            <input type="date" ref={age} className="text-[#1774FF] w-[140px]" />

            <select
              ref={gender}
              name="Gender"
              required
              className="p-0 m-0 w-[30%]"
            >
              <option value="none" selected disabled hidden>
                GN
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="flex w-[100%] justify-between">
            <div className="flex flex-col w-[45%]">
              <label className="text-[#1774FF]">Phone</label>
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
          <button className="hover:bg-[#1b5349] text-white bg-[#1774FF] w-[150px] h-[40px] border-2 border-[#1774FF] rounded-3xl mt-[10px] text-[14px] font-bold">
            Register
          </button>
          <div className="flex mt-[20px]">
            <p className="text-[15px] text-[#757575] pr-[10px]">
              Already have account?
            </p>
            <Link
              to={{ pathname: "/login" }}
              className="text-[#1774FF] text-[15px] hover:text-[#1b5349]"
            >
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
