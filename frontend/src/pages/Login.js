import React from "react";
import img from "../images//Login/loginimage.png";
import logo from "../images/Login/logo.png";
import { useState, useContext } from "react";
import { MyContext } from "../context/context";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const cx = useContext(MyContext);
  const navigate = useNavigate();
  const handleLogin = (event) => {
    setEmail("");
    setPassword("");
    event.preventDefault();
    fetch("http://localhost:3000/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((res) => {
        // const data =  res.json();
        return res.json();
        // console.log(data);
        // cx.setLoggedIn(true);
        // localStorage.setItem("token", data.token);
        // navigate("/userfeed");
      })
      .then((data) => {
        // console.log(data.token);
        // console.log(cx.user);
        // console.log(data.returnObject);
        // console.log(cx.user);
        if (data.token) {
          cx.setLoggedIn(true);
          cx.setUser(data.returnObject);
          localStorage.setItem("token", data.token);
          navigate("/userfeed");
        }
      });

    // console.log(await response.json());
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div
        data-aos="fade-up"
        className="md:w-[40%] w-[80%] h-[50%] flex flex-col items-center justify-around"
      >
        <img src={logo} className="w-[200px]" alt="#" />
        <h2 className="text-[18px] md:text-[20px] pb-[20px]">Login</h2>

        <form
          className="w-[60%] md:w-[50%] h-[80%] md:h-[50%] flex flex-col items-center justify-around"
          onSubmit={handleLogin}
        >
          <div className="flex flex-col w-[100%] justify-end">
            <label className="text-[#1774FF]">Email</label>
            <div className="h-[40px] flex flex-col">
              <input
                className="border-b-2 outline-0 border-[#1774FF] bg-transparent h-[13px] text-[12px] focus:h-[30px] focus:text-[15px] w-[100%] transition-all"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex flex-col w-[100%]">
            <label className="text-[#1774FF]">Password</label>
            <div className="h-[40px] flex flex-col">
              <input
                className="border-b-2 outline-0 border-[#1774FF] bg-transparent h-[13px] focus:h-[20px] text-[12px] focus:h-[30px] focus:text-[15px] transition-all"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
              />
            </div>
          </div>
          <button className="hover:bg-[#1b5349] text-white bg-[#1774FF] w-[150px] h-[40px] border-2 border-[#1774FF] rounded-3xl mt-[10px] text-[14px] font-bold">
            Log in
          </button>
        </form>
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
