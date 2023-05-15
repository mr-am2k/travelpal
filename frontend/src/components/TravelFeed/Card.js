import React from "react";
import { BsMap, BsCalendarDate, BsInfoCircle } from "react-icons/bs";

const Card = ({ id, fullName, description, age, destination, date, image }) => {
  return (
    <div className="w-[80%] md:w-[380px] lg:w-[450px] xl:w-[800px] flex flex-col md:flex-row items-center gap-3 shadow-[0_4px_15px_3px_rgba(0,0,0,0.15)] rounded-[10px] cursor-pointer border-2 border-gray">
      {/* PICTURE */}
      <div className="p-[10px]">
        <img src={image} alt="#" className="w-[75px] h-[75px]" />
      </div>
      {/* TEXT */}
      <div className="w-[90%] h-full flex flex-col gap-3 my-auto py-4">
        <span className="flex gap-2 text-[17px] leading-[22px] font-medium">
          <p>{fullName}</p>
          <p>({age})</p>
        </span>
        <span className="flex gap-2">
          <BsMap className="w-[18px] h-[18px]" />
          <p className="text-[17px] leading-[22px] font-normal">
            {destination}
          </p>
        </span>
        <span className="flex gap-2">
          <BsCalendarDate className="w-[18px] h-[18px]" />
          <p className="text-[18px] leading-[22px] font-normal">{date}</p>
        </span>
        <span className="flex gap-2">
          <BsInfoCircle className="w-[30px] h-[30px]" />
          <p className="text-[17px] leading-[22px] font-normal text-slate-700">
            {description}
          </p>
        </span>
      </div>
    </div>
  );
};

export default Card;
