import React from "react";
import SuggestedCard from "./SuggestedCard";
import { Link } from "react-router-dom";
import face1 from "../images/Feed/feed1.png";
import face2 from "../images/Feed/feed2.png";
import face3 from "../images/Feed/feed3.png";
import face4 from "../images/Feed/feed4.png";
const Suggested = () => {
  const feedUsers = [
    {
      id: 0,
      fullName: "Thomas Hofberg",
      description:
        "I've been to so many places it the word but Sarajevo is absolutely my favourite city. Why? A year ago we stopped in Sarajevo for an overnight on the way to Montenegro with our kids...",
      imageUrl:
        "https://vicharkness.co.uk/wp-content/uploads/2019/03/aiface.png",
      image: face1,
      fade: "right",
    },
    {
      id: 1,
      fullName: "Zina Youani",
      description:
        "It was my birthday and me and my mother really looked forward to a special evening. When we arrived the boat was all…",
      imageUrl:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      image: face2,
      fade: "left",
    },
    {
      id: 2,
      fullName: "Yvonne Ross",
      description:
        "I've been to so many places it the word but Sarajevo is absolutely my favourite city. Why? A year ago we stopped in Sarajevo for an overnight on the way to Montenegro with our kids...",
      imageUrl:
        "http://www.faces-l.net/wp-content/uploads/2021/10/sedaguerses-1080x1080px-1024x1024.jpg",
      image: face3,
      fade: "right",
    },
    {
      id: 3,
      fullName: "Zara Daoudi",
      description:
        "I spent one month with Jood and it was one of the funniest, most exciting and happiest I ever had. She welcomed me so very warmly and soon introduced...",
      imageUrl: "https://kottke.org/plus/misc/images/ai-faces-01.jpg",
      image: face4,
      fade: "left",
    },
  ];
  return (
    <div className="w-full h-[1500px] flex flex-col gap-20 mt-10">
      <p className="text-center text-black text-[34px] leading-[59px] font-normal">
        Suggested feed
      </p>
      <div className="grid grid-cols-2 gap-[100px] mx-auto">
        {feedUsers.map((user) => {
          return (
            <SuggestedCard
              fullName={user.fullName}
              description={user.description}
              id={user.id}
              key={user.id}
              imageUrl={user.imageUrl}
              image={user.image}
            />
          );
        })}
      </div>
      <Link
        to="/feed"
        className="uppercase border-[#1774FF] border-2 text-[16px] leading-[20px] font-bold w-[307px] h-[53px] rounded-[25px] flex items-center justify-center text-[#1774FF] mx-auto hover:bg-[#1774ff] hover:text-white"
      >
        View more from travel feed
      </Link>
    </div>
  );
};

export default Suggested;
