import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { Link } from "react-router-dom";
const Card = (props) => {
  console.log(props.imageUrl);
  return (
    <div
      className="flex flex-col w-[394px] h-[500px] gap-2 bg-white rounded-[20px] boxShadowC overflow-hidden"
      data-aos={`fade-${props.fade}`}
      data-aos-duration="300"
    >
      <div
        className="h-[317px] w-full "
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="flex justify-between px-3">
        <h3 className="text-[20px] leading-[24px] font-medium">
          {props.title}
        </h3>
        <div className="flex text-yellow-500">
          <AiTwotoneStar className="w-5 h-5" />
          <AiTwotoneStar className="w-5 h-5" />
          <AiTwotoneStar className="w-5 h-5" />
          <AiTwotoneStar className="w-5 h-5" />
          <AiTwotoneStar className="w-5 h-5" />
          <AiTwotoneStar className="w-5 h-5" />
          <p className="text-[12px] leading-[15px] font-light text-black my-auto">
            ({props.ratingCount})
          </p>
        </div>
      </div>
      <p className="font-light text-[16px] leading-[20px] text-black px-3 py-1">
        {props.description}
      </p>
      <Link
        to={`/props.id`}
        className="w-[125px] h-[40px] px-3 mx-auto border-2 hover:border-[#1774FF] hover:text-[#1774FF] bg-[#1774ff] hover:bg-white text-white rounded-[25px] flex items-center justify-center my-auto"
      >
        More...
      </Link>
    </div>
  );
};

export default Card;
