import React from "react";
const SuggestedCard = ({
  fullName,
  description,
  id,
  imageUrl,
  image,
  fade,
}) => {
  return (
    <div>
      <div
        className="w-[300px] sm:w-[580px] h-[500px] sm:h-[555px] snap-center mb-[4px] xl:mt-[120px] mx-[10px] rounded-[25px] border-[#AAA] border-2 relative flex flex-col gap-5"
        data-aos={`fade-${fade}`}
      >
        {/* PICTURE */}
        <img
          src={image}
          alt="personLogo"
          className="w-[154px] h-[155px] sm:w-[204px] sm:h-[205px] rounded-full mx-auto absolute -top-20 left-0 right-0"
        />
        {/* NAME */}
        <div className="flex flex-col gap-3 mt-auto h-[405px]">
          <div className="flex flex-col text-center gap-2">
            <h3 className="text-[14px] sm:text-[22px] font-bold leading-[29px]">
              {fullName}
            </h3>
            <p className="text-[14px] sm:text-[18px] font-light">Traveler</p>
          </div>
          {/* DESCRIPTION */}
          <p className="text-[16px] sm:text-[20px] font-thin leading-[29px] text-center mt-6 max-w-[500px] px-[5px] mx-auto">
            {description}
          </p>
          {/* READ MORE */}
          <p className="text-[#1477ff] text-[16px] sm:text-[20px] font-normal leading-[29px] text-center mt-auto mb-14">
            read more...
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuggestedCard;
