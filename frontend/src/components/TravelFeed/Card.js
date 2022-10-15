import React from "react";
import { BsMap, BsCalendarDate, BsInfoCircle } from "react-icons/bs";

const Card = ({ id, fullName, description, age, destination, date, image }) => {
  return (
    <div className="w-[775px] h-[290px] flex gap-3 shadow-[0_4px_15px_3px_rgba(0,0,0,0.15)] rounded-[10px] cursor-pointer">
      {/* PICTURE */}
      <div className="w-[15%] h-[90%] flex justify-center my-auto ">
        <img src={image} alt="#" className="w-[95px] h-[95px]" />
      </div>
      {/* TEXT */}
      <div className="w-[80%] h-full flex flex-col gap-3 my-auto py-4">
        <span className="flex gap-2 text-[18px] leading-[22px] font-medium">
          <p>{fullName}</p>
          <p>({age})</p>
        </span>
        <span className="flex gap-2">
          <BsMap className="w-[21px] h-[21px]" />
          <p className="text-[18px] leading-[22px] font-normal">
            {destination}
          </p>
        </span>
        <span className="flex gap-2">
          <BsCalendarDate className="w-[21px] h-[21px]" />
          <p className="text-[18px] leading-[22px] font-normal">{date}</p>
        </span>
        <span className="flex gap-2">
          <BsInfoCircle className="w-[41px] h-[41px]" />
          <p className="text-[18px] leading-[22px] font-normal">
            {description}
          </p>
        </span>
      </div>
    </div>
  );
};

export default Card;
