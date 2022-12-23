import { useState } from "react";
import { Link } from "react-router-dom";
import { useHttp } from "../../customHooks/useHttp";
export const RegisterForm = () => {
  const [responseMsg, setResponseMsg] = useState("");
  const [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
  });
  const { data, loading, error, fetchData } = useHttp(
    "http://localhost:8080/api/v1/auth/register",
    "POST"
  );
  const setName = (e) => {
    setResponseMsg("");
    setUser((prevState) => ({ ...prevState, name: e.target.value }));
  };
  const setUsername = (e) => {
    setResponseMsg("");
    setUser((prevState) => ({ ...prevState, username: e.target.value }));
  };
  const setPassword = (e) => {
    setResponseMsg("");
    setUser((prevState) => ({ ...prevState, password: e.target.value }));
  };
  const setEmail = (e) => {
    setResponseMsg("");
    setUser((prevState) => ({ ...prevState, email: e.target.value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const requestUser = {
      firstName: user.name.split(" ")[0],
      lastName: user.name.split(" ")[1],
      username: user.username,
      password: user.password,
      email: user.email,
      role: "ROLE_USER",
    };
    fetchData(requestUser);
    setResponseMsg(data.message);
  };

  return (
    <>
      {responseMsg === "" ? (
        <div className="h-[10px]"></div>
      ) : (
        <h2 className="h-[10px] text-[11px] text-orange-600 font-bold">
          {responseMsg}
        </h2>
      )}
      <form
        className="md:w-[60%] sm:w-[70%] w-[90%] flex flex-col items-center justify-around"
        onSubmit={handleRegister}
      >
        <div className="flex flex-col w-[100%]">
          <label className="text-[#1774FF]">Full name</label>
          <div className="h-[40px] flex flex-col">
            <input
              required
              onChange={setName}
              className="border-b-2 border-[#1774FF] bg-transparent outline-0 h-[13px] focus:h-[20px] text-[12px] focus:h-[30px] focus:text-[15px] transition-all"
            />
          </div>
        </div>
        <div className="flex flex-col w-[100%]">
          <label className="text-[#1774FF]">Username</label>
          <div className="h-[40px] flex flex-col">
            <input
              required
              onChange={setUsername}
              className="border-b-2 border-[#1774FF] bg-transparent outline-0 h-[13px] focus:h-[20px] text-[12px] focus:h-[30px] focus:text-[15px] transition-all"
            />
          </div>
        </div>
        <div className="flex flex-col w-[100%]">
          <label className="text-[#1774FF]">Password</label>
          <div className="h-[40px] flex flex-col">
            <input
              required
              onChange={setPassword}
              className="border-b-2 border-[#1774FF] bg-transparent outline-0 h-[13px] focus:h-[20px] text-[12px] focus:h-[30px] focus:text-[15px] transition-all"
              type="password"
            />
          </div>
        </div>
        <div className="flex flex-col w-[100%]">
          <label className="text-[#1774FF]">Email</label>
          <div className="h-[40px] flex flex-col">
            <input
              required
              onChange={setEmail}
              className="border-b-2 border-[#1774FF] bg-transparent outline-0 h-[13px] focus:h-[20px] text-[12px] focus:h-[30px] focus:text-[15px] transition-all"
            />
          </div>
        </div>

        <div className="flex w-[100%] items-center justify-between pb-[10px]">
          <input type="date" className="text-[#1774FF] w-[140px]" />

          <select name="Gender" required className="p-0 m-0 w-[30%]">
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
              <input className="border-b-2 border-[#1774FF] bg-transparent outline-0 h-[13px] focus:h-[20px] text-[12px] focus:h-[30px] focus:text-[15px] transition-all" />
            </div>
          </div>
          <div className="flex flex-col w-[45%]">
            <label className="text-[#1774FF]">Country</label>
            <div className="h-[40px] flex flex-col">
              <input className="border-b-2 border-[#1774FF] bg-transparent outline-0 h-[13px] focus:h-[20px] text-[12px] focus:h-[30px] focus:text-[15px] transition-all" />
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
    </>
  );
};
