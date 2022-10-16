import { useState, useRef, useEffect } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import data from "../../dummydata/data.json";
const Carousel = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = (useRef < null) | (HTMLDivElement > null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div
      className="my-12 mx-auto overflow-x-hidden md:max-w-[800px] lg:max-w-[1140px]"
      data-aos="fade-right"
    >
      <div className="relative overflow-hidden">
        <div className="mb-6 mt-2 flex justify-between">
          <h2 className="text-[24px] font-semibold leading-8 text-[#081944] sm:text-2xl">
            <span className="pl-2 text-[#a4bff8] sm:pl-0">Team</span> Behind
            BlueDuck
          </h2>
          <div className="mr-4 flex gap-4">
            <button
              onClick={movePrev}
              className={`z-10 m-0 h-10 w-10 rotate-45 rounded-lg bg-white p-0 text-center text-white transition-all duration-300 ease-in-out disabled:cursor-not-allowed ${
                !isDisabled("prev")
                  ? "hover:bg-blue-900/75 hover:opacity-100"
                  : ""
              }`}
              disabled={isDisabled("prev")}
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>

              <BsArrowLeftShort
                className={`h-10 w-10 -rotate-45 text-[#6187ff] ${
                  isDisabled("prev") ? "text-[#6187ff]/30" : ""
                }`}
                // color="#6187ff"
              />
              <span className="sr-only">Prev</span>
            </button>
            <button
              onClick={moveNext}
              className={`z-10 m-0 h-10 w-10 rotate-45 rounded-lg bg-white p-0 text-center text-white transition-all duration-300 ease-in-out disabled:cursor-not-allowed ${
                !isDisabled("next")
                  ? "hover:bg-blue-900/75 hover:opacity-100"
                  : ""
              }`}
              disabled={isDisabled("next")}
              type="button"
            >
              <BsArrowRightShort
                className={`h-10 w-10 -rotate-45 text-[#6187ff] hover:text-[#fff] ${
                  isDisabled("next") ? "text-[#6187ff]/30" : ""
                }`}
              />
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>
        <div
          ref={carousel}
          className="relative z-0 flex touch-pan-x snap-x snap-mandatory gap-1 overflow-hidden scroll-smooth"
        >
          {data.resources.map((resource, index) => {
            return (
              <div key={index}>
                <div className="relative h-64 w-64 snap-start text-center">
                  <div className="w-full">
                    <img
                      src={resource.imageUrl || ""}
                      alt={resource.title}
                      className="transform cursor-pointer transition duration-150 hover:scale-110"
                    />
                  </div>
                </div>
                <h2 className="text-lg text-[#081944]">{resource.fullName}</h2>
                <h3 className="text-sm font-bold text-[#6187ff]">
                  {resource.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
