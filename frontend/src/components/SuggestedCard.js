import React from "react";
import feed1 from "../images/Feed/feed1.png";
const SuggestedCard = ({
  fullName,
  description,
  id,
  imageUrl,
  image,
  fade,
}) => {
  return (
    <div
      className="w-[580px] h-[555px] rounded-[25px] border-[#AAA] border-2 relative flex flex-col gap-5"
      data-aos={`fade-${fade}`}
    >
      {/* PICTURE */}
      <img
        src={image}
        alt="personLogo"
        className="w-[204px] h-[205px] rounded-full mx-auto absolute -top-20 left-0 right-0"
      />
      {/* NAME */}
      <div className="flex flex-col gap-3 mt-auto h-[405px]">
        <div className="flex flex-col text-center gap-2">
          <h3 className="text-[24px] font-bold leading-[29px]">{fullName}</h3>
          <p className="text-[24px] font-light">Traveler</p>
        </div>
        {/* DESCRIPTION */}
        <p className="text-[24px] font-thin leading-[29px] text-center mt-6 w-[500px] mx-auto">
          {description}
        </p>
        {/* READ MORE */}
        <p className="text-[#1477ff] text-[24px] font-normal leading-[29px] text-center mt-auto mb-14">
          read more...
        </p>
      </div>
    </div>
  );
};

export default SuggestedCard;
