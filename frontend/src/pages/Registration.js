import React from "react";
import img from "../images//Login/loginimage.png";
import logo from "../images/Login/logo.png";
import { RegisterForm } from "../components/Forms/RegisterForm";
const Registration = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div
        data-aos="fade-right"
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
        <h2 className="text-[20px] md:text-[25px]">Registration</h2>

        <RegisterForm />
      </div>
    </div>
  );
};

export default Registration;
