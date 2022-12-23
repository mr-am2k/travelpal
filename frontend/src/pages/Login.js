import React from "react";
import img from "../images//Login/loginimage.png";
import logo from "../images/Login/logo.png";
import { Link } from "react-router-dom";
import { LoginForm } from "../components/authForms/LoginForm";

const Login = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div
        data-aos="fade-up"
        className="md:w-[40%] w-[80%] h-[50%] flex flex-col items-center justify-around"
      >
        <img src={logo} className="w-[200px]" alt="#" />
        <h2 className="text-[18px] md:text-[20px] pb-[20px]">Login</h2>

        <LoginForm />
        <div className="flex mt-[20px]">
          <p className="text-[15px] text-[#757575] pr-[10px]">
            Don’t have account?
          </p>
          <Link
            to={{ pathname: "/registration" }}
            className="text-[#1774FF] text-[15px] hover:text-[#1b5349]"
          >
            Create one
          </Link>
        </div>
      </div>
      <div
        data-aos="fade-in"
        className="w-[60%] h-screen md:block hidden"
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default Login;
