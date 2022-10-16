import React from "react";
import image from "../../images/Feed/feed2.png";
const Comment = () => {
  return (
    <div className="flex gap-4 items-center">
      <img src={image} alt="#commentPersonLogo" className="w-[42px] h-[42px]" />
      <span className="flex flex-col gap-1 p-2 rounded-[5px] shadow-[0_0px_15px_rgba(0,0,0,0.1)] rounded-[10px] bg-[#F8F8F8]">
        <p className="font-bold">Yvonne Holq</p>
        <p>Wow. What a story. Looking to visit Sarajevo as soon as possible</p>
      </span>
    </div>
  );
};

export default Comment;
