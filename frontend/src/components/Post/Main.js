import React, { useRef, useState } from "react";
import personImage from "../../images/Feed/feed6.png";
import star from "../../images/feedPostImages/star.png";
import SimpleImageSlider from "react-simple-image-slider";
import Comment from "./Comment";
const images = [
  {
    url: "https://i.natgeofe.com/n/45610619-0806-45f7-94c2-9f366df60aac/old-town-bascarsija-sarajevo.jpg",
  },
  {
    url: "https://wander-lush.org/wp-content/uploads/2019/03/Emily-Lush-Sarajevo-Old-Town-32.jpg",
  },
  {
    url: "https://www.back-packer.org/wp-content/uploads/sehensw%C3%BCrdigkeiten-in-sarajevo-reisef%C3%BChrer.jpg",
  },
];

const Main = (props) => {
  const commentRef = useRef();
  const [CommentsData, setCommentsData] = useState([
    {
      userId: 0,
      userName: "Yvonne Holq",
      comment:
        "Wow! What a story. Looking to visit Sarajevo as soon as possible",
    },
    {
      userId: 1,
      userName: "Zina Youanni",
      comment:
        "Wow! What a story. Looking to visit Sarajevo as soon as possible. Btw. bread looks delicious",
    },
    {
      userId: 2,
      userName: "Yvonne Holq",
      comment:
        "Wow! What a story. Looking to visit Sarajevo as soon as possible",
    },
    {
      userId: 3,
      userName: "Zina Youanni",
      comment:
        "Wow! What a story. Looking to visit Sarajevo as soon as possible. Btw. bread looks delicious",
    },
  ]);

  return (
    <div>
      <div className="w-[1100px] border-2 border-gray flex flex-col gap-5 shadow-[0_0px_15px_rgba(0,0,0,0.1)] rounded-[10px]">
        {/* HEAD PART */}
        <div className="flex justify-between py-5 px-7 items-center ">
          {/* LEFT SIDE  */}
          <span className="flex gap-5 items-center">
            <img
              src={personImage}
              alt="personIcon"
              className="w-[92px] h-[92px]"
            />
            <p>Melika Houssi</p>
          </span>
          <p>Bosnia and Herzegovina</p>
        </div>
        {/* DESCRIPTION */}
        <div className="px-7">
          <p>
            We did the free walking tour through Sarajevo, which lasted 2 1/2
            hours, and it was really great! Arna, our guide, was super well
            informed and made very interesting connections between history and
            the situation in Bosnia today. We can really recommend the tour,
            also for people who are not that interested in the history but want
            to learn more about the current Bosnia. We went with Arna for a
            drink after the tour, she took the time to answer all our questions
            and we had a very nice evening! One of the best experiences of our
            travels! We did the free walking tour through Sarajevo, which lasted
            2 1/2 hours, and it was really great! Arna, our guide, was super
            well informed and made very interesting connections between history
            and the situation in Bosnia today. We can really recommend the tour,
            also for people who are not that interested in the history but want
            to learn more about the current Bosnia. We went with Arna for a
            drink after the tour, she took the time to answer all our questions
            and we had a very nice evening! One of the best experiences of our
            travels!
          </p>
        </div>
        {/* SLIDER */}
        <div className="flex flex-col gap-5">
          <span className="flex items-center gap-2 px-7">
            <img src={star} alt="likeIcon" className="cursor-pointer" />
            <p>124 stars</p>
          </span>
          <div className="w-full h-[500px] mx-auto">
            <div className="w-full mx-auto">
              <SimpleImageSlider
                width={1100}
                height={550}
                images={images}
                showBullets={true}
                showNavs={true}
              />
            </div>
          </div>
          {/* COMMENTS */}
          <div className="flex flex-col gap-7 mt-10 px-7 h-[400px] overflow-y-scroll">
            <h3 className="text-[20px] font-semibold pt-4">Comments</h3>
            <div className="flex flex-col gap-5">
              {CommentsData.map((c) => {
                return (
                  <Comment
                    key={c.userId}
                    userId={c.userId}
                    userName={c.userName}
                    comment={c.comment}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="h-[100px] w-full shadow-[0_0px_15px_rgba(0,0,0,0.1)] flex gap-4 items-center px-5">
        {/* ADD COMMENT */}
        <div className="w-[900px] h-[70px] border-2">
          <input
            type="text"
            className="w-full h-full outline-none pl-4"
            placeholder="Write a comment"
            ref={commentRef}
          />
        </div>
        <button
          className="mx-auto bg-transparent border-none focus:border-none outline-none text-[#1774ff] text-[12px] font-bold leading-[15px]"
          onClick={() => {
            setCommentsData((data) => [
              ...data,
              {
                userId: CommentsData.length + 1,
                userName: "Test",
                comment: commentRef.current.value,
              },
            ]);
          }}
        >
          POST
        </button>
      </div>
    </div>
  );
};

export default Main;
