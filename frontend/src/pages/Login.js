import React from "react";
import img from "../images/loginimage.png";
const Login = () => {
  return (
    <div className="w-[100%] h-screen flex">
      <div>LOGIN</div>
      <div className="h-[100%]">
        <img src={img} />
      </div>
    </div>
  );
};

export default Login;
