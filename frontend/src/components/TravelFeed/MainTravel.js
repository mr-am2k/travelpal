import React from "react";
import Card from "./Card";
import face1 from "../../images/Feed/feed1.png";
import face2 from "../../images/Feed/feed2.png";
import face3 from "../../images/Feed/feed3.png";
import face4 from "../../images/Feed/feed4.png";
import face5 from "../../images/Feed/feed5.png";
const MainTravel = () => {
  const travelData = [
    {
      id: 0,
      fullName: "Jack Hoffberg",
      age: 28,
      destination: "Bali, Indonesia",
      date: "Dec 2022 - Jan 2022",
      description:
        "I am interested in meeting people who think they are different and unique, I would love to know you while sharing activates together.",
      image: face1,
    },
    {
      id: 1,
      fullName: "Zara Youani",
      age: 32,
      destination: "Cambodia",
      date: "Nov 2022 - Jan 2022",
      description:
        "Hi ! My name is Melanie and i'm a fifth-year labor law student from Paris. I love to eat, and discover new cultures through food. Traveling is the best... show more",
      image: face2,
    },
    {
      id: 2,
      fullName: "Muamer Hodžić",
      age: 31,
      destination: "Istanbul, Turkey",
      date: "Dec 2022 - Jan 2022",
      description:
        "Wanna improve myturkish during a stay in Turkey. If you're interested in meeting each other or travel together it would be great fun. See you.",
      image: face5,
    },
    {
      id: 3,
      fullName: "Lara Howie",
      age: 26,
      destination: "Bali, Indonesia",
      date: "Dec 2022 - Jan 2022",
      description:
        "I am interested in meeting people who think they are different and unique, I would love to know you while sharing activates together.",
      image: face4,
    },
    {
      id: 4,
      fullName: "Jack Hoffberg",
      age: 28,
      destination: "Bali, Indonesia",
      date: "Dec 2022 - Jan 2022",
      description:
        "I am interested in meeting people who think they are different and unique, I would love to know you while sharing activates together.",
      image: face1,
    },
    {
      id: 5,
      fullName: "Zara Youani",
      age: 32,
      destination: "Cambodia",
      date: "Nov 2022 - Jan 2022",
      description:
        "Hi ! My name is Melanie and i'm a fifth-year labor law student from Paris. I love to eat, and discover new cultures through food. Traveling is the best... show more",
      image: face2,
    },
    {
      id: 6,
      fullName: "Muamer Hodžić",
      age: 31,
      destination: "Istanbul, Turkey",
      date: "Dec 2022 - Jan 2022",
      description:
        "Wanna improve myturkish during a stay in Turkey. If you're interested in meeting each other or travel together it would be great fun. See you.",
      image: face5,
    },
    {
      id: 7,
      fullName: "Lara Howie",
      age: 26,
      destination: "Bali, Indonesia",
      date: "Dec 2022 - Jan 2022",
      description:
        "I am interested in meeting people who think they are different and unique, I would love to know you while sharing activates together.",
      image: face4,
    },
  ];
  return (
    <div className="w-[80%] flex gap-10 h-screen max-h-full mx-auto">
      {/* LEFT SIDE */}
      <div className="w-[360px] h-[570px] bg-white flex items-center justify-center rounded-[15px]">
        <form className="w-[95%] h-[95%] flex flex-col gap-4">
          <input
            type="text"
            for="country"
            placeholder="Country"
            className="text-black w-full h-[55px] outline-none border-2 pl-2 border-black rounded-[5px] placeholder:text-black"
          />
          <p className="text-[20px] font-normal leading-[24px]">Dates</p>
          <div className="flex gap-3">
            <span className="flex flex-col gap-2">
              <label>Start date</label>
              <input
                type="date"
                className="w-[160px] h-[43px] border-2 border-black outline-none rounded-[5px]"
                placeholder="none"
              />
            </span>
            <span className="flex flex-col gap-2 ">
              <label>End date</label>
              <input
                type="date"
                className="w-[160px] h-[43px] border-2 border-black outline-none rounded-[5px]"
                placeholder="none"
              />
            </span>
          </div>
          <span className="border-b-2 border-black flex flex-col gap-4 rounded-[5px] overflow-hidden">
            <label className="text-[20px] font-normal leading-[24px]">
              Languages
            </label>
            <input
              type="text"
              placeholder="Languages"
              className="outline-none w-[345px] h-[45px] pl-2 placeholder:text-black rounded-[5px]"
            />
          </span>
          <span className="flex flex-col gap-4">
            <label className="text-[20px] font-normal leading-[24px]">
              Ages
            </label>
            <span className="flex gap-2">
              <input
                type="text"
                placeholder="Ages from"
                className="outline-none w-[170px] h-[45px] pl-2 placeholder:text-black rounded-[5px] border-b-2 border-black"
              />
              <input
                type="text"
                placeholder="Ages to"
                className="outline-none w-[170px] h-[45px] pl-2 placeholder:text-black rounded-[5px] border-b-2 border-black"
              />
            </span>
          </span>
          <span className="flex flex-col gap-4">
            <label className="text-[20px] font-normal leading-[24px]">
              Gender
            </label>
            <span className="flex gap-2">
              <span className="flex gap-1">
                <input
                  type="checkbox"
                  className="w-[24px] h-[24px] border-1 border-black"
                />
                <label>Male</label>
              </span>
              <span className="flex gap-1">
                <input
                  type="checkbox"
                  className="w-[24px] h-[24px] border-1 border-black"
                />
                <label>Female</label>
              </span>
            </span>
          </span>
          <button
            type="submit"
            className="w-[150px] h-[40px] border-black border-2 text-black rounded-[40px] mx-auto"
          >
            Search...
          </button>
        </form>
      </div>
      {/* RIGHT SIDE */}
      <div className="flex flex-col gap-10 overflow-scroll">
        {travelData.map((d) => {
          return (
            <Card
              id={d.id}
              fullName={d.fullName}
              age={d.age}
              destination={d.destination}
              date={d.date}
              description={d.description}
              image={d.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MainTravel;
