import { useState } from "react";
import { countries } from "../../JSON/countries";
import axios from "axios";

export const PostForm = (props) => {
  const [travelPost, setTravelPost] = useState({
    title: "",
    description: "",
    placeOfDerparture: "",
    destination: "",
    departureDate: "",
    returnDate: "",
  });
  const [successMsg, setSuccessMsg] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const setTitle = (title) => {
    setTravelPost((prevState) => ({ ...prevState, title: title }));
  };
  const setDescription = (description) => {
    setTravelPost((prevState) => ({ ...prevState, description: description }));
  };
  const setPlaceOfDeparture = (departure) => {
    setTravelPost((prevState) => ({
      ...prevState,
      placeOfDerparture: departure,
    }));
  };
  const setDestination = (destination) => {
    setTravelPost((prevState) => ({ ...prevState, destination: destination }));
  };
  const setDepartureDate = (departureDate) => {
    setTravelPost((prevState) => ({
      ...prevState,
      departureDate: departureDate,
    }));
  };
  const setReturnDate = (returnDate) => {
    setTravelPost((prevState) => ({ ...prevState, returnDate: returnDate }));
  };
  const access_token = localStorage.getItem("access_token");
  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (access_token) {
      try {
        const response = await axios.post(
          `http://localhost:8080/api/v1/post`,
          travelPost,
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );
        setSuccessMsg("Succesfully added new post!");
        setTimeout(() => {
          setSuccessMsg(null);
        }, 4000);
      } catch (e) {
        setErrorMsg("Something went wrong please try again later");
        setTimeout(() => {
          setErrorMsg(null);
        }, 4000);
      }
    }
  };
  return (
    <>
      {successMsg && (
        <p className="px-5 rounded-md bg-green-400 text-white transition-all">
          {successMsg}
        </p>
      )}
      <form
        onSubmit={(e) => onFormSubmit(e)}
        className="flex flex-col items-center w-[80%] py-[30px]"
      >
        <div className="mb-6 w-full">
          <label
            for="title"
            class="block mb-2 text-[18px] font-medium text-gray-600"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Title"
            value={travelPost.title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-6 w-full">
          <label
            for="description"
            class="block mb-2 text-[18px] font-medium text-gray-600"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Description"
            value={travelPost.description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-between w-[100%]">
          <div className="mb-6 w-[40%]">
            <label
              for="departure"
              class="block mb-2 text-[18px] font-medium text-gray-600"
            >
              Departure
            </label>
            <select
              type="text"
              id="departure"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Departure"
              onChange={(e) => setPlaceOfDeparture(e.target.value)}
              required
            >
              <option selected disabled>
                Departure
              </option>
              {countries.map((country) => (
                <option value={country.name}>{country.name}</option>
              ))}
            </select>
          </div>
          <div className="mb-6 w-[40%]">
            <label
              for="destination"
              class="block mb-2 text-[18px] font-medium text-gray-600"
            >
              Destination
            </label>
            <select
              type="text"
              id="destination"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Destination"
              onChange={(e) => setDestination(e.target.value)}
              required
            >
              <option selected disabled>
                Destination
              </option>
              {countries.map((country) => (
                <option value={country.name}>{country.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex justify-between w-[100%]">
          <div className="mb-6 w-[40%]">
            <label
              for="departure_date"
              class="block mb-2 text-[18px] font-medium text-gray-600"
            >
              Departure date
            </label>
            <input
              type="date"
              id="departure_date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Departure date"
              value={travelPost.departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              required
            />
          </div>
          <div className="mb-6 w-[40%]">
            <label
              for="return_date"
              class="block mb-2 text-[18px] font-medium text-gray-600"
            >
              Return date
            </label>
            <input
              type="date"
              id="return_date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Return date"
              value={travelPost.returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[200px] px-5 py-2.5 mt-5 text-center"
        >
          Add post
        </button>
      </form>
    </>
  );
};
