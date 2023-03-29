import { useState, useContext } from "react";
import { MyContext } from "../../context/context";
import { useNavigate } from "react-router";
import axios from "axios";
export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [responseMsg, setResponseMsg] = useState(null);
  const cx = useContext(MyContext);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const access_token = localStorage.getItem("access_token");
    try {
      const response = await axios.post(
        `http://localhost:8080/api/v1/auth/login`,
        {
          username: username,
          password: password,
        }
      );
      localStorage.setItem("refresh_token", response.data.refreshToken);
      localStorage.setItem("access_token", response.data.accessToken);
    } catch (e) {
      setResponseMsg(e.response.data.message);
      console.log(e.response.data.message);
    }

    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/users/user`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      cx.user = response.data;
      cx.loggedIn = true;
      navigate("/userfeed");
    } catch (e) {
      console.log(e.response.data.message);
    }
  };

  return (
    <>
      {!responseMsg ? (
        <div className="h-[10px]"></div>
      ) : (
        <h2 className="h-[10px] text-[11px] text-orange-600 font-bold">
          {responseMsg}
        </h2>
      )}
      <form
        className="w-[90%] sm:w-[70%] h-[80%] md:h-[50%] flex flex-col items-center justify-around"
        onSubmit={handleLogin}
      >
        <div className="flex flex-col w-[100%] justify-end">
          <label className="text-[#1774FF]">Username</label>
          <div className="h-[40px] flex flex-col">
            <input
              required
              className="border-b-2 outline-0 border-[#1774FF] bg-transparent invalid:h-[13px] invalid:text-[12px] h-[25px] focus:h-[25px] text-[15px] focus:text-[15px] w-[100%] transition-all"
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
              required
              className="border-b-2 outline-0 border-[#1774FF] bg-transparent invalid:h-[13px] invalid:text-[12px] h-[25px] focus:h-[25px] focus:text-[15px] text-[15px] transition-all"
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
    </>
  );
};
