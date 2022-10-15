import logo from "../images/Login/logo.png";
import profilePicture from "../images/UserFeed/profilePicture.png";
const Navbar = () => {
  return (
    <div className="w-[100%] h-[80px] flex justify-between items-center shadow-[0_0px_15px_10px_rgba(0,0,0,0.1)]">
      <img src={logo} width="136px" height="72px" className="ml-[80px]" />
      <div className="flex mr-[80px] min-w-[400px] justify-between items-center">
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">Find travel pals</p>
        <p className="cursor-pointer">Messages</p>
        <img src={profilePicture} width="40px" height="40px" />
      </div>
    </div>
  );
};
export default Navbar;
