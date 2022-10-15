import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import hungary from "../images/Posts/hungary.png";
import france from "../images/Posts/france.png";
import norway from "../images/Posts/norway.png";
import tokyo from "../images/Posts/tokyo.png";
import phillipines from "../images/Posts/phillipines.png";
import bih from "../images/Posts/bih.png";
const Hosts = () => {
  const cardInfo = [
    {
      id: 0,
      title: "Hungary | Janos",
      description:
        "Reconnect with nature while traveling through Hungarian villages.",
      ratingCount: 10,
      reviewStars: 5,
      fade: "right",
      imageUrl:
        "https://clockyourskills.com/wp-content/uploads/2020/10/Black-and-White-Generic-Delivery-Back-to-Business-Landscape-Flyer-8.png",
      image: hungary,
    },

    {
      id: 1,
      title: "France | Bordeaux",
      description: "Come to our home and feel Bordeaux at its finest.",
      ratingCount: 4,
      reviewStars: 5,
      fade: "up",
      imageUrl:
        "https://www.azamara.com/sites/default/files/heros/bordeaux-france.jpg",
      image: france,
    },
    {
      id: 2,
      title: "Norway | Bergen",
      description:
        "Ever wanted to see aurora live happening? This is great chance to.",
      ratingCount: 7,
      reviewStars: 5,
      fade: "up",
      imageUrl:
        "https://images.ctfassets.net/ihlmn42cjuv0/6UWuOcdYWt9FB4yps4kpOm/b01b13eaf2ee4bd3dbc5c85767f70be0/building-6908494.jpg?fit=fill&w=1346&h=838&fm=jpg&q=93",
      image: norway,
    },
    {
      id: 3,
      title: "Japan | Tokyo",
      description:
        "Visit the most populated city in the world and discover it fully.",
      ratingCount: 11,
      reviewStars: 5,
      fade: "left",
      imageUrl:
        "https://content.r9cdn.net/rimg/dimg/ca/7e/9ae1c4b2-city-21033-16c1b1c620d.jpg?crop=true&width=1020&height=498",
      image: tokyo,
    },
    {
      id: 4,
      title: "Philippines | Luzon",
      description:
        "Enjoy life in traditional life on our farm village in Luzon island",
      ratingCount: 4,
      reviewStars: 5,
      fade: "up",
      imageUrl:
        "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/09/luzunish-fbaaaa.jpg",
      image: phillipines,
    },
    {
      id: 5,
      title: "BiH | Jajce",
      description:
        "Come and visit royal city Jajce. See great waterfall at the heart of Jajce.",
      ratingCount: 7,
      reviewStars: 5,
      fade: "left",
      imageUrl:
        "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/fd/28/41.jpg",
      image: bih,
    },
  ];
  return (
    <div className="flex flex-col gap-10 w-full h-[1300px] pt-10">
      <p className="text-center text-black text-[34px] leading-[59px] font-normal">
        Find your host
      </p>
      <div
        className="grid grid-cols-3 gap-10 mx-auto"
        data-aos="fade-down"
        data-aos-duration={700}
      >
        {cardInfo.map((c) => {
          return (
            <Card
              key={c.id}
              title={c.title}
              description={c.description}
              ratingCount={c.ratingCount}
              reviewStars={c.reviewStars}
              fade={c.fade}
              imageUrl={c.imageUrl}
              image={c.image}
            />
          );
        })}
      </div>
      <Link
        to="/hosts"
        className="uppercase border-[#1774FF] border-2 text-[16px] leading-[20px] font-bold w-[307px] h-[53px] rounded-[25px] flex items-center justify-center text-[#1774FF] mx-auto hover:bg-[#1774ff] hover:text-white"
      >
        View full host list
      </Link>
    </div>
  );
};

export default Hosts;
