import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <div className="flex flex-col w-[394px] h-[500px] gap-2">
      <div
        className="h-[317px] w-full rounded-tl-[20px] rounded-tr-[20px]"
        style={{
          backgroundImage: `url(https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60)`,
        }}
      ></div>
      <div className="flex justify-between">
        <h3 className="text-[20px] leading-[24px] font-medium">
          {props.title}
        </h3>
        <div className="flex text-yellow-500">
          <AiOutlineStar className="w-4 h-4" />
          <AiOutlineStar className="w-4 h-4" />
          <AiOutlineStar className="w-4 h-4" />
          <AiOutlineStar className="w-4 h-4" />
          <AiOutlineStar className="w-4 h-4" />
          <AiOutlineStar className="w-4 h-4" />
        </div>
        <p className="text-[12px] leading-[15px] font-light">
          ({props.ratingCount})
        </p>
      </div>
      <p className="font-light text-[16px] leading-[20px] text-black">
        {props.description}
      </p>
      <Link
        to={`/props.id`}
        className="w-[125px] h-[40px] mx-auto border-2 border-[#1774FF] text-[#1774FF] hover:bg-[#1774ff] hover:text-white rounded-[25px] flex items-center justify-center"
      >
        More...
      </Link>
    </div>
  );
};

export default Card;
