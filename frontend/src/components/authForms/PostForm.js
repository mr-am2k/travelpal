import { countries } from "../../JSON/countries";

export const PostForm = () => {
  return (
    <form className="flex flex-col items-center w-[80%] py-[30px]">
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
            Title
          </label>
          <input
            type="date"
            id="departure_date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Departure date"
            required
          />
        </div>
        <div className="mb-6 w-[40%]">
          <label
            for="return_date"
            class="block mb-2 text-[18px] font-medium text-gray-600"
          >
            Title
          </label>
          <input
            type="date"
            id="return_date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Return date"
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
  );
};
