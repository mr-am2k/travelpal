import Navbar from "../components/Navbar";
import FeedPost from "../components/FeedPost";
import { useState, useContext, useEffect } from "react";
import { MyContext } from "../context/context";
import { Navigate, useNavigate } from "react-router";
import UserProfileIcons from "../components/UserProfileIcons";
import profilePic1 from "../images/Feed/feed1.png";
import profilePic2 from "../images/Feed/feed2.png";
import profilePic3 from "../images/Feed/feed3.png";
import profilePic4 from "../images/Feed/feed4.png";
const UserFeed = () => {
  const navigate = useNavigate();
  const ctx = useContext(MyContext);
  //useEffect(() => {
  //  if (!ctx.loggedIn) {
  //    navigate("/login");
  //  }
  //});
  const [filterActive, setFilterActive] = useState(false);
  return (
    <>
      <Navbar />
      <div className="flex lg:flex-row flex-col flex-col-reverse items-center lg:items-start w-[100%]">
        <div className="flex flex-col w-[100%] md:w-[75%] items-center">
          <div className="w-[700px] flex justify-between pt-[50px]">
            <h2 className="text-[20px] font-bold">User feed</h2>
            <div className="text-[11px] font-medium pl-[14px] pr-[14px] rounded-3xl shadow-[0_0px_10px_5px_rgba(0,0,0,0.1)] flex items-center">
              {filterActive ? (
                <div className="flex">
                  <h2
                    className="pr-[10px] cursor-pointer"
                    onClick={() => {
                      setFilterActive(false);
                    }}
                  >
                    Filter by country:
                  </h2>
                  <input
                    placeholder="Enter country"
                    className="border-b border-[#757575] outline-none"
                  />
                </div>
              ) : (
                <h2
                  onClick={() => {
                    setFilterActive(true);
                  }}
                  className="cursor-pointer"
                >
                  Filter by country
                </h2>
              )}
            </div>
          </div>

          <FeedPost
            name="John Wick"
            postImage="https://img.traveltriangle.com/blog/wp-content/uploads/2014/11/cover-for-Places-To-Visit-In-August-In-The-World.jpg"
            profilePicture="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          />
          <FeedPost
            name="John Wick"
            postImage="https://blog.thomascook.in/wp-content/uploads/2020/08/humayun-tomb-delhi-banner.jpg"
            profilePicture="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          />
          <FeedPost
            name="John Wick"
            postImage="https://cdn.thecrazytourist.com/wp-content/uploads/2015/03/shutterstock_1218765286.jpg"
            profilePicture="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          />
          <FeedPost
            name="John Wick"
            postImage="https://www.revv.co.in/blogs/wp-content/uploads/2020/03/places-to-visit-in-west-india.jpg"
            profilePicture="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          />
        </div>
        <div className="lg:w-[200px] w-[100%] flex flex-col items-center">
          <h2 className="text-[16px] font-bold pt-[50px] pb-[50px]">
            Connect with travelers
          </h2>
          <div className="lg:w-[150px] w-[100%] no-scrollbar overflow-x-auto flex lg:flex-wrap gap-2 justify-center lg:justify-between">
            <UserProfileIcons
              name="Don John"
              country="Spain"
              image={profilePic1}
            />
            <UserProfileIcons
              name="Olive Yew"
              country="UK"
              image={profilePic2}
            />
            <UserProfileIcons
              name="Zara You"
              country="Algeria"
              image={profilePic3}
            />
            <UserProfileIcons
              name="Don John"
              country="Spain"
              image={profilePic4}
            />
            <UserProfileIcons
              name="Kim Martini"
              country="Spain"
              image={profilePic3}
            />
            <UserProfileIcons
              name="Don John"
              country="Spain"
              image={profilePic1}
            />
            <UserProfileIcons
              name="Olive Yew"
              country="UK"
              image={profilePic2}
            />
            <UserProfileIcons
              name="Zara You"
              country="Algeria"
              image={profilePic3}
            />
            <UserProfileIcons
              name="Don John"
              country="Spain"
              image={profilePic4}
            />
            <UserProfileIcons
              name="Kim Martini"
              country="Spain"
              image={profilePic3}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserFeed;
