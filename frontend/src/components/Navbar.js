import logo from "../images/Login/logo.png";
import profilePicture from "../images/UserFeed/profilePicture.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-[100%] h-[80px] flex justify-between items-center shadow-[0_0px_15px_10px_rgba(0,0,0,0.1)]">
      <img
        src={logo}
        width="136px"
        height="72px"
        className="ml-[80px]"
        alt="#"
      />
      <div className="flex mr-[80px] min-w-[400px] justify-between items-center">
        <Link to="/userfeed"></Link>
        <Link to="/travelfeed">Find travel pals</Link>
        <Link to="/messages">Messages</Link>
        <img src={profilePicture} width="40px" height="40px" alt="#" />
      </div>
    </div>
  );
};
export default Navbar;
