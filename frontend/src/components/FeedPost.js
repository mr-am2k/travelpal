import star from "../images/feedPostImages/star.png";
import higlightedStar from "../images/feedPostImages/higlightedStar.png";

import { useState } from "react";
const FeedPost = (props) => {
  const [postStared, setPostStared] = useState(false);
  return (
    <div className="w-[90%] md:w-[700px] shadow-[0_2px_10px_5px_rgba(0,0,0,0.1)] rounded-md mt-[30px]">
      <div className="flex items-center mt-[20px]">
        <img
          src={props.profilePicture}
          width="40px"
          height="40px"
          className="mr-[10px] ml-[20px] rounded-full w-[40px] h-[40px]"
          alt="profile"
        />
        <h2 className="text-[14px] font-bold">{props.name}</h2>
      </div>
      <div
        className="w-[100%] h-auto mt-[20px] bg-gray-200"
        style={{
          backgroundSize: "contain",
          backgroundImage: `url(${props.postImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img src={props.postImage} className="invisible" alt="post" />
      </div>
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
                alt="star"
              />
            ) : (
              <img
                src={star}
                width="22px"
                height="22px"
                className="mr-[10px] cursor-pointer"
                alt="star"
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
