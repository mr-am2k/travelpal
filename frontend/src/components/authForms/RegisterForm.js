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
    country: "",
    dateOfBirth: "",
    gender: "",
  });
  const { data, fetchData } = useHttp(
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
  const setCountry = (e) => {
    setResponseMsg("");
    setUser((prevState) => ({ ...prevState, country: e.target.value }));
  };
  const setBirth = (e) => {
    setResponseMsg("");
    setUser((prevState) => ({ ...prevState, dateOfBirth: e.target.value }));
  };
  const setGender = (e) => {
    setResponseMsg("");
    setUser((prevState) => ({ ...prevState, gender: e.target.value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const requestUser = {
      firstName: user.name.split(" ")[0],
      lastName: user.name.split(" ")[1],
      username: user.username,
      password: user.password,
      email: user.email,
      dateOfBirth: user.dateOfBirth,
      gender: 0,
      country: user.country,
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
        className="w-[90%] sm:w-[70%] flex flex-col items-center justify-around"
        onSubmit={handleRegister}
      >
        <div className="flex flex-col w-[100%]">
          <label className="text-[#1774FF] text-[18px]">Full name</label>
          <div className="h-[40px] flex flex-col">
            <input
              required
              onChange={setName}
              className="border-b-2 border-[#1774FF] bg-transparent outline-0 invalid:h-[15px] invalid:text-[15px] h-[30px] focus:h-[30px] text-[17px] focus:text-[17px] transition-all"
            />
          </div>
        </div>
        <div className="flex flex-col w-[100%]">
          <label className="text-[#1774FF] text-[18px]">Username</label>
          <div className="h-[40px] flex flex-col">
            <input
              required
              onChange={setUsername}
              className="border-b-2 border-[#1774FF] bg-transparent outline-0 invalid:h-[15px] invalid:text-[15px] h-[30px] focus:h-[30px] text-[17px] focus:text-[17px] transition-all"
            />
          </div>
        </div>
        <div className="flex flex-col w-[100%]">
          <label className="text-[#1774FF] text-[18px]">Password</label>
          <div className="h-[40px] flex flex-col">
            <input
              required
              onChange={setPassword}
              className="border-b-2 border-[#1774FF] bg-transparent outline-0 invalid:h-[15px] invalid:text-[15px] h-[30px] focus:h-[30px] text-[17px] focus:text-[17px] transition-all"
              type="password"
            />
          </div>
        </div>
        <div className="flex flex-col w-[100%]">
          <label className="text-[#1774FF] text-[18px]">Email</label>
          <div className="h-[40px] flex flex-col">
            <input
              required
              onChange={setEmail}
              className="border-b-2 border-[#1774FF] bg-transparent outline-0 invalid:h-[15px] invalid:text-[15px] h-[30px] focus:h-[30px] text-[17px] focus:text-[17px] transition-all"
            />
          </div>
        </div>

        <div className="flex w-[100%] items-center justify-between pb-[10px]">
          <input
            type="date"
            className="text-[#1774FF] w-[140px] text-[18px]"
            onChange={setBirth}
          />

          <select
            name="Gender"
            required
            className="p-0 m-0 w-[30%] text-[#1774FF]"
            onChange={setGender}
          >
            <option value="none" selected disabled hidden>
              GN
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="flex flex-col w-[100%]">
          <label className="text-[#1774FF] text-[18px]">Country</label>
          <div className="h-[40px] flex flex-col">
            <input
              required
              onChange={setCountry}
              className="border-b-2 border-[#1774FF] bg-transparent outline-0 invalid:h-[15px] invalid:text-[15px] h-[30px] focus:h-[30px] text-[17px] focus:text-[17px] transition-all"
            />
          </div>
        </div>
        <button className="hover:bg-[#1b5349] text-white bg-[#1774FF] w-[150px] h-[40px] border-2 border-[#1774FF] rounded-3xl mt-[10px] text-[17px] font-bold">
          Register
        </button>
        <div className="flex mt-[20px]">
          <p className="text-[17px] text-[#757575] pr-[10px]">
            Already have account?
          </p>
          <Link
            to={{ pathname: "/login" }}
            className="text-[#1774FF] text-[17px] hover:text-[#1b5349]"
          >
            Log in
          </Link>
        </div>
      </form>
    </>
  );
};
