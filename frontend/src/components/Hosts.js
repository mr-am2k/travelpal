import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
const Hosts = () => {
  const [postData, setPostData] = useState();
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.response);
        setPostData(data.response);
      });
  }, []);

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
        {postData &&
          postData.map((c) => {
            return (
              <Card
                key={c._id}
                id={c._id}
                title={c.title}
                description={c.description}
                ratingCount={c.ratingCount}
                reviewStars={c.reviewStars}
                fade={c.fade}
                imageUrl={c.photos[0]}
                // image={c.image}
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
