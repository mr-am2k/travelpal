import Card from "./Card";
import face1 from "../../images/Feed/feed1.png";
import face2 from "../../images/Feed/feed2.png";
import face4 from "../../images/Feed/feed4.png";
import face5 from "../../images/Feed/feed5.png";
import { useEffect, useState } from "react";
import axios from "axios";
const MainTravel = () => {
  const access_token = localStorage.getItem("access_token");
  const [travelPosts, setTravelPosts] = useState([]);
  const [lastPage, setLastPage] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [filterParams, setFilterParams] = useState({
    pageNumber: pageNumber,
    destination: "",
    //startDate: "",
    //endDate: "",
  });
  const queryString = Object.keys(filterParams)
    .map((key) => {
      return (
        encodeURIComponent(key) + "=" + encodeURIComponent(filterParams[key])
      );
    })
    .join("&");
  console.log(queryString);
  const getPosts = async (pageNumber) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/post?pageNumber=${pageNumber}`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      setTravelPosts((prevState) => [
        ...prevState,
        ...response.data?.data[0].content,
      ]);
      setLastPage(response.data?.data[0].last);
      if (response.data?.data[0].last === false) {
        setPageNumber((prevState) => prevState + 1);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const filterPosts = async () => {
    setPageNumber(0);
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/post?${queryString}`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      setTravelPosts(response.data?.data[0].content);
      setLastPage(response.data?.data[0].last);
      if (response.data?.data[0].last === false) {
        setPageNumber((prevState) => prevState + 1);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const loadMore = () => {
    getPosts(pageNumber);
  };
  useEffect(() => {
    getPosts(0);
  }, []);
  console.log(travelPosts, "  ", lastPage);
  console.log(travelPosts);
  return (
    <div className="w-[90%] max-w-[1980px] flex flex-col md:flex-row justify-around items-center md:items-start max-h-full mx-auto my-10">
      {/* LEFT SIDE */}
      <div className="flex w-[80%] md:w-[300px] lg:w-[320px] xl:[380px] h-[570px] bg-white items-center justify-center rounded-[15px] border-2 border-gray shadow-[0_4px_15px_3px_rgba(0,0,0,0.15)]">
        <form className="w-[95%] h-[95%] flex flex-col gap-4">
          <input
            type="text"
            placeholder="Country"
            className="text-black w-full h-[40px] outline-none border-2 pl-2 border-slate-300 rounded-[5px] placeholder:text-black"
          />
          <p className="text-[19px] font-medium leading-[24px]">Dates</p>
          <div className="flex justify-between">
            <span className="flex flex-col gap-2 w-[45%]">
              <label>Start date</label>
              <input
                type="date"
                className="w-[100%] h-[40px] border-2 border-slate-300 outline-none rounded-[5px]"
                placeholder="none"
              />
            </span>
            <span className="flex flex-col gap-2 w-[45%]">
              <label>End date</label>
              <input
                type="date"
                className="w-[100%] h-[40px] border-2 border-slate-300 outline-none rounded-[5px]"
                placeholder="none"
              />
            </span>
          </div>
          <span className="flex flex-col gap-4">
            <label className="text-[19px] font-medium leading-[24px]">
              Languages
            </label>
            <input
              type="text"
              placeholder="Languages"
              className="text-black w-full h-[40px] outline-none border-2 pl-2 border-slate-300 rounded-[5px] placeholder:text-black"
            />
          </span>
          <span className="flex flex-col gap-4">
            <label className="text-[19px] font-medium leading-[24px]">
              Ages
            </label>
            <span className="flex justify-between items-center">
              <input
                type="text"
                placeholder="Ages from"
                className="w-[45%] h-[40px] border-2 border-slate-300 outline-none rounded-[5px] placeholder:text-black pl-[5px]"
              />
              <p>-</p>
              <input
                type="text"
                placeholder="Ages to"
                className="w-[45%] h-[40px] border-2 border-slate-300 outline-none rounded-[5px] placeholder:text-black pl-[5px]"
              />
            </span>
          </span>
          <span className="flex flex-col gap-4">
            <label className="text-[19px] font-medium leading-[24px]">
              Gender
            </label>
            <span className="flex justify-around">
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
            className="w-[150px] h-[40px] border-[#1774ff] border-2 text-[#1774ff] rounded-[40px] font-medium mx-auto mt-[10px] hover:bg-[#1774ff] hover:text-white transition-all"
          >
            Search...
          </button>
        </form>
      </div>
      {/* RIGHT SIDE */}
      <div className="flex flex-col gap-10 items-center mt-[50px] md:mt-0">
        {travelPosts?.map((d) => {
          return (
            <Card
              key={d.id}
              id={d.id}
              fullName={`${d.user.firstName} ${d.user.lastName}`}
              age={""}
              destination={d.destination}
              date={`${d.departureDate} - ${d.returnDate}`}
              description={d.description}
              image={d.user.imageUrl}
            />
          );
        })}
        {!lastPage && (
          <h2
            className="cursor-pointer hover:text-[#1774ff]"
            onClick={() => loadMore()}
          >
            Load more...
          </h2>
        )}
      </div>
    </div>
  );
};

export default MainTravel;
