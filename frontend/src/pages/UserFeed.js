import Navbar from "../components/Navbar";
import FeedPost from "../components/FeedPost";
import { useState, useContext, useEffect } from "react";
import { MyContext } from "../context/context";
import { Navigate, useNavigate } from "react-router";
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
      <div>
        <div className="flex flex-col w-[75%] items-center">
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
          <FeedPost />
          <FeedPost />
          <FeedPost />
          <FeedPost />
        </div>
      </div>
    </>
  );
};

export default UserFeed;
