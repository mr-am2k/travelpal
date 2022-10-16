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
    ctx.setLoggedIn(false);
  };
  return (
    <div className="w-[100%] h-[80px] flex justify-between items-center shadow-[0_0px_15px_10px_rgba(0,0,0,0.1)]">
<<<<<<< HEAD
      <img
        src={logo}
        width="136px"
        height="72px"
        className="ml-[80px]"
        alt="#"
      />
      <div className="flex mr-[80px] min-w-[400px] justify-between items-center relative">
=======
      <Link to="/userfeed">
        <img
          src={logo}
          width="136px"
          height="72px"
          className="ml-[80px]"
          alt="#"
        />
      </Link>
      <div className="flex mr-[80px] min-w-[400px] justify-between items-center">
>>>>>>> 3c9c467164e656a4398d28de3deee3420b41f86a
        <Link to="/userfeed">Home</Link>
        <Link to="/travelfeed">Find travel pals</Link>
        <Link to="/messages">Messages</Link>
        <img
          className="cursor-pointer"
          src={profilePicture}
          width="40px"
          height="40px"
          alt="#"
          onClick={toggleDropdown}
        />
        {dropdown ? (
          <div className="flex flex-col absolute right-0 top-[60px] bg-white px-[50px] drop-shadow-md">
            <h2 className="border-b-2 border-black py-[10px]">Zina Youanni</h2>
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
