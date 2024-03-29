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
      const response = await axios.post(`http://localhost:8080/api/v1/auth/login`, {
        username: username,
        password: password,
      });
      localStorage.setItem("refresh_token", response.data.refreshToken);
      localStorage.setItem("access_token", response.data.accessToken);
    } catch (e) {
      setResponseMsg(e.response.data.message);
    }

    try {
      const response = await axios.get(`http://localhost:8080/api/v1/users/user`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      cx.setUser(response.data);
      cx.setLoggedIn(true);
      navigate("/userfeed");
    } catch (e) {
      console.log(e.response.data.message);
    }
  };

  return (
    <>
      {responseMsg ? (
        <h2 className="text-[12px] text-orange-600 font-bold mt-[-5px]">{responseMsg}</h2>
      ) : (
        ""
      )}
      <form
        className="w-[90%] sm:w-[70%] h-[80%] md:h-[50%] flex flex-col items-center justify-around"
        onSubmit={handleLogin}
      >
        <div className="flex flex-col w-[100%] justify-end">
          <label className="text-[#1774FF] text-[18px]">Username</label>
          <div className="h-[40px] flex flex-col">
            <input
              required
              id="login_username"
              className="border-b-2 outline-0 border-[#1774FF] bg-transparent invalid:h-[15px] invalid:text-[15px] h-[30px] focus:h-[30px] text-[17px] focus:text-[17px] w-[100%] transition-all"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col w-[100%]">
          <label className="text-[#1774FF] text-[18px]">Password</label>
          <div className="h-[40px] flex flex-col">
            <input
              required
              id="login_password"
              className="border-b-2 outline-0 border-[#1774FF] bg-transparent invalid:h-[15px] invalid:text-[15px] h-[30px] focus:h-[30px] text-[17px] focus:text-[17px] transition-all"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
            />
          </div>
        </div>
        <button
          id="login_button"
          className="hover:bg-[#1b5349] text-white bg-[#1774FF] w-[150px] h-[40px] border-2 border-[#1774FF] rounded-3xl mt-[10px] text-[16px] font-bold"
        >
          Log in
        </button>
      </form>
    </>
  );
};
