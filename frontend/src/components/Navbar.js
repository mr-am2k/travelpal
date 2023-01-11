import logo from "../images/Login/logo.png";
import profilePicture from "../images/UserFeed/profilePicture.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { MyContext } from "../context/context";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const ctx = useContext(MyContext);
  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };
  const logoutFunction = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    ctx.setLoggedIn(false);
    ctx.user({});
  };

  return (
    <div className="w-[100%] h-[80px] flex justify-between items-center shadow-[0_0px_15px_10px_rgba(0,0,0,0.1)]">
      <Link to="/userfeed">
        <img
          src={logo}
          width="136px"
          height="72px"
          className="lg:ml-[80px] ml-[40px]"
          alt="#"
        />
      </Link>
      <div className="flex lg:mr-[80px] mr-[40px] lg:min-w-[400px] justify-end lg:justify-between items-center relative">
        <Link to="/userfeed" className="hidden lg:block">
          Home
        </Link>
        <Link to="/travelfeed" className="hidden lg:block">
          Find travel pals
        </Link>
        <Link to="/messages" className="hidden lg:block">
          Messages
        </Link>
        <img
          className="cursor-pointer rounded-full w-[40px] h-[40px]"
          src={ctx.user.imageUrl}
          width="40px"
          height="40px"
          alt="#"
          onClick={toggleDropdown}
        />
        {dropdown ? (
          <div className="flex w-[300px] flex-col absolute right-0 top-[60px] bg-white px-[50px] drop-shadow-md">
            <h2 className="border-b-2 border-black py-[10px]">
              {ctx.user.firstName + " " + ctx.user.lastName}
            </h2>
            {/* navbartext moved to dropdown on mobile */}
            <Link
              to="/userfeed"
              className="py-[10px] text-[14px] cursor-pointer text-[#1774FF] lg:hidden block"
            >
              Home
            </Link>
            <Link
              to="/travelfeed"
              className="py-[10px] text-[14px] cursor-pointer text-[#1774FF] lg:hidden block"
            >
              Find travel pals
            </Link>
            <Link
              to="/messages"
              className="py-[10px] text-[14px] cursor-pointer text-[#1774FF] lg:hidden block"
            >
              Messages
            </Link>
            <Link
              to={{ pathname: "/profilepage" }}
              className="py-[10px] text-[14px] cursor-pointer"
            >
              Your profile
            </Link>
            <p className="py-[10px] text-[14px] cursor-pointer">Settings</p>
            <p className="py-[10px] text-[14px] cursor-pointer">
              Terms and conditions
            </p>
            <Link
              to={{ pathname: "/logout" }}
              className="py-[10px] text-[14px] cursor-pointer"
              onClick={logoutFunction}
            >
              Log out
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Navbar;
