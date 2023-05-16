import React from "react";
import img from "../images//Login/loginimage.png";
import logo from "../images/Login/logo.png";
import { Link } from "react-router-dom";
import { LoginForm } from "../components/Forms/LoginForm";

const Login = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div
        data-aos="fade-right"
        className="w-[60%] h-screen md:block hidden"
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        data-aos="fade"
        className="md:w-[40%] w-[80%] h-[50%] flex flex-col items-center justify-around"
      >
        <img src={logo} className="w-[200px]" alt="#" />
        <h2 className="text-[20px] md:text-[25px] pb-[15px]">Login</h2>

        <LoginForm />
        <div className="flex mt-[20px]">
          <p className="text-[17px] text-[#757575] pr-[10px]">
            Don’t have account?
          </p>
          <Link
            to={{ pathname: "/registration" }}
            className="text-[#1774FF] text-[17px] hover:text-[#1b5349]"
          >
            Create one
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
