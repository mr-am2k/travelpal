import profilePicture from "../images/UserFeed/profilePicture.png";
import postImage1 from "../images/feedPostImages/postImage1.png";
import star from "../images/feedPostImages/star.png";
import higlightedStar from "../images/feedPostImages/higlightedStar.png";

import { useState } from "react";
const FeedPost = () => {
  const [postStared, setPostStared] = useState(false);
  return (
    <div className="w-[700px] shadow-[0_2px_10px_5px_rgba(0,0,0,0.1)] rounded-md mt-[30px]">
      <div className="flex items-center mt-[20px]">
        <img
          src={profilePicture}
          width="40px"
          height="40px"
          className="mr-[10px] ml-[20px]"
        />
        <h2 className="text-[14px] font-bold">Melika Houssi</h2>
      </div>
      <div
        className="w-[100%] h-[400px] mt-[20px]"
        style={{
          backgroundImage: `url(${postImage1})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="w-[100%] mt-[10px] mb-[10px] flex items-center justify-between">
        <div className="flex ml-[20px]">
          <div
            onClick={() => {
              setPostStared(!postStared);
            }}
          >
            {postStared ? (
              <img
                src={higlightedStar}
                width="22px"
                height="22px"
                className="mr-[10px] cursor-pointer"
              />
            ) : (
              <img
                src={star}
                width="22px"
                height="22px"
                className="mr-[10px] cursor-pointer"
              />
            )}
          </div>
          <h2 className="text-[14px] font-bold">128 star</h2>
        </div>
        <h2 className="mr-[20px] font-thin text-[14px] text-[#757575]">
          Bosnia and Herzegovina
        </h2>
      </div>
      <h2 className="pl-[20px] pr-[20px] pt-[5px] pb-[5px] text-[14px] font-medium">
        We did the free walking tour through Sarajevo, which lasted 2 1/2 hours,
        and it was really great! Arna, our guide, was super well informed and
        made very interesting connections...
      </h2>
      <h2 className="text-[#757575] text-[14px] ml-[20px] pt-[10px] pb-[30px]">
        Show Comments
      </h2>
    </div>
  );
};

export default FeedPost;
