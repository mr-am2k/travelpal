import profilePic1 from "../images/Feed/feed1.png";
import Navbar from "../components/Navbar";
import Stars from "../images/Stars.png";
import UserProfileIcons from "../components/UserProfileIcons";

import place1 from "../images/placeIcons/place1.png";
import place2 from "../images/placeIcons/place2.png";
import place3 from "../images/placeIcons/place3.png";
import place4 from "../images/placeIcons/place4.png";
const ProfilePage = (props) => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="w-[40%] h-[500px] flex flex-col items-center justify-around mt-[50px] border-r-2">
          <div className="flex flex-col items-center">
            <img src={profilePic1} />
            <h2 className="mt-[20px] font-bold">Zina Youanni</h2>
            <p>@zina</p>
          </div>
          <div className="flex flex-col items-center">
            <button className="font-medium">About</button>
            <button className="font-medium">Timeline</button>
          </div>
        </div>
        <div className="w-[60%] flex justify-center mt-[100px]">
          <div className="w-[70%]">
            <h2 className="font-bold text-[20px] border-b-2">About</h2>
            <div className="w-[100%] flex flex-wrap">
              <div className="w-[50%] h-[100px] py-[10px] text-[14px]">
                <p>
                  <span className="font-bold">Name:</span> Zinna Youanni
                </p>
                <p>
                  <span className="font-bold">Username:</span> @zinna
                </p>
                <p>
                  <span className="font-bold">From:</span> Algeria
                </p>
              </div>
              <div className="w-[50%] h-[100px] py-[10px] text-[14px]">
                <p>
                  <span className="font-bold">Age:</span> 21
                </p>
                <p>
                  <span className="font-bold">Rating:</span>
                </p>
                <img src={Stars} width="100px" />
              </div>
              <div className="flex flex-col w-[50%] h-[100px] py-[10px] text-[14px]">
                <h2 className="text-[18px] font-bold">Languages</h2>
                <p>&#x2022; English</p>
                <p>&#x2022; French</p>
                <p>&#x2022; Turkish</p>
              </div>
              <div className="flex flex-col w-[50%] h-[100px] py-[10px] text-[14px]">
                <h2 className="text-[18px] font-bold">Currently in</h2>
                <p>Algeria</p>
              </div>
              <div className="w-[100%] mt-[30px]">
                <h2 className="text-[16px] font-bold">Suggested places</h2>
                <div className="flex">
                  <UserProfileIcons image={place1} name="Sarajevo" country="" />
                  <UserProfileIcons image={place2} name="Sarajevo" country="" />
                  <UserProfileIcons image={place3} name="Sarajevo" country="" />
                  <UserProfileIcons image={place4} name="Sarajevo" country="" />
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
