import React from "react";
import { AiTwotoneStar, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
const Card = (props) => {
  const fields = [];
  const emptyF = [];
  for (let i = 0; i < props.reviewStars; i++) {
    fields.push(<AiTwotoneStar className="w-5 h-5" key={i} />);
  }
  for (let i = 0; i < 5 - props.reviewStars; i++) {
    emptyF.push(<AiOutlineStar className="w-5 h-5" key={i} />);
  }
  return (
    <div className="flex flex-col w-[394px] h-[500px] gap-2 bg-white rounded-[20px] boxShadowC overflow-hidden">
      <div
        className="h-[317px] w-full "
        style={{
          backgroundImage: `url(${props.imageUrl})`,
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
          {/* {props.reviewStars &&
            [...Array(+props.reviewStars)].map((e, i) => (
              <AiTwotoneStar className="w-5 h-5" key={i} />
            ))}
          {props.reviewStars &&
            [...Array(5 - +props.reviewStars)].map((e, i) => (
              <AiOutlineStar className="w-5 h-5" key={i} />
            ))} */}
          {fields.map((f) => f)}
          {emptyF.map((f) => f)}
          <p className="text-[12px] leading-[15px] font-light text-black my-auto">
            (10)
          </p>
        </div>
      </div>
      <p className="font-light text-[16px] leading-[20px] text-black px-3 py-1">
        {props.description}
      </p>
      <Link
        to={`/${props.id}`}
        className="w-[125px] h-[40px] px-3 mx-auto border-2 hover:border-[#1774FF] hover:text-[#1774FF] bg-[#1774ff] hover:bg-white text-white rounded-[25px] flex items-center justify-center my-auto"
      >
        More...
      </Link>
    </div>
  );
};

export default Card;
