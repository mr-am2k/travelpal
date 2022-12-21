import { useState, useContext } from "react";
import { MyContext } from "../../context/context";
import { useNavigate } from "react-router";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const cx = useContext(MyContext);
  const navigate = useNavigate();
  const handleLogin = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:8080/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    });
    const responseData = await response.json();
    console.log(responseData);
    // const data =  res.json();

    // console.log(data);
    // cx.setLoggedIn(true);
    // localStorage.setItem("token", data.token);
    // navigate("/userfeed");

    // console.log(data.token);
    // console.log(cx.user);
    // console.log(data.returnObject);
    // console.log(cx.user);
    //if (data.token) {
    //  cx.setLoggedIn(true);
    //  cx.setUser(data.returnObject);
    //  localStorage.setItem("token", data.token);
    //  navigate("/userfeed");
    //}
  };

  return (
    <form
      className="w-[60%] md:w-[50%] h-[80%] md:h-[50%] flex flex-col items-center justify-around"
      onSubmit={handleLogin}
    >
      <div className="flex flex-col w-[100%] justify-end">
        <label className="text-[#1774FF]">Username</label>
        <div className="h-[40px] flex flex-col">
          <input
            className="border-b-2 outline-0 border-[#1774FF] bg-transparent h-[13px] text-[12px] focus:h-[30px] focus:text-[15px] w-[100%] transition-all"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
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
  );
};
