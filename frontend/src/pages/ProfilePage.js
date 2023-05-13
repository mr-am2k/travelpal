import Navbar from "../components/Navbar";
import Stars from "../images/Stars.png";
import UserProfileIcons from "../components/UserProfileIcons";
import { useContext } from "react";
import { MyContext } from "../context/context";

import place1 from "../images/placeIcons/place1.png";
import place2 from "../images/placeIcons/place2.png";
import place3 from "../images/placeIcons/place3.png";
import place4 from "../images/placeIcons/place4.png";
const ProfilePage = (props) => {
  const ctx = useContext(MyContext);

  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="w-[40%] h-[500px] flex flex-col items-center justify-around mt-[50px] border-r-2">
          <div className="flex flex-col items-center">
            <div
              style={{
                backgroundImage: `url(${ctx.user.imageUrl})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-[286px] h-[286px] rounded-full"
            ></div>
            <h2 className="mt-[20px] font-bold">
              {ctx.user.firstName} {ctx.user.lastName}
            </h2>
            <p>@{ctx.user.username}</p>
          </div>
          <div className="flex flex-col items-center">
            <button className="font-medium">About</button>
            <button className="font-medium">Timeline</button>
          </div>
        </div>
        <div className="w-[60%] flex justify-center mt-[100px]">
          <div className="w-[70%]">
            <h2 className="font-bold text-[20px] border-b-2 pb-[10px]">
              About
            </h2>
            <div className="w-[100%] flex flex-wrap pt-[20px]">
              <div className="w-[50%] h-[100px] py-[10px] text-[14px] ">
                <p>
                  <span className="font-bold">Name:</span> {ctx.user.firstName}{" "}
                  {ctx.user.lastName}
                </p>
                <p>
                  <span className="font-bold">Username:</span> @
                  {ctx.user.username}
                </p>
                <p>
                  <span className="font-bold">From:</span> {ctx.user.country}
                </p>
              </div>
              <div className="w-[50%] h-[100px] py-[10px] text-[14px]">
                <p>
                  <span className="font-bold">Age:</span> 24
                </p>
                <p>
                  <span className="font-bold">Rating:</span>
                </p>
                <img src={Stars} width="100px" alt="star" />
              </div>
              <div className="flex flex-col w-[50%] h-[100px] py-[10px] text-[14px]">
                <h2 className="text-[18px] font-bold">Languages</h2>
                <p>&#x2022; English</p>
                <p>&#x2022; French</p>
                <p>&#x2022; Turkish</p>
              </div>
              <div className="flex flex-col w-[50%] h-[100px] py-[10px] text-[14px]">
                <h2 className="text-[18px] font-bold">Currently in</h2>
                <p>{ctx.user.country}</p>
              </div>
              <div className="w-[100%] mt-[30px]">
                <h2 className="text-[16px] font-bold">Suggested places</h2>
                <div className="flex">
                  <UserProfileIcons image={place1} name="Sarajevo" country="" />
                  <UserProfileIcons image={place2} name="Morocco" country="" />
                  <UserProfileIcons image={place3} name="Lisabon" country="" />
                  <UserProfileIcons image={place4} name="Vienna" country="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
