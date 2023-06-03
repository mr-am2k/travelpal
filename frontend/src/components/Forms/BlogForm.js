import { useState } from "react";
import { storageService } from "../../services/storageService";
import placeholderImg from "../../images/Posts/jk-placeholder-image.jpg";
import { Loading } from "../Global/Loading";
export const BlogForm = () => {
  const [imageLoading, setImageLoading] = useState(false);
  const [blogRequest, setBlogRequest] = useState({
    title: "",
    description: "",
    imageUrl: placeholderImg,
  });
  const onFormSubmit = () => {};
  const previewImage = async (image) => {
    setImageLoading(true);
    const url = await storageService.upload("blog", image[0]);
    setBlogRequest((prevState) => ({ ...prevState, imageUrl: url }));
    setImageLoading(false);
  };
  const setTitle = (title) => {
    setBlogRequest((e) => (prevState) => ({ ...prevState, title: title }));
  };
  return (
    <form
      onSubmit={(e) => onFormSubmit(e)}
      className="flex flex-col items-center w-[80%] py-[30px] overflow-y-auto"
    >
      <div className="flex justify-between w-full">
        <div className="mb-6 w-[45%]">
          <label
            HtmlFor="title"
            className="block mb-2 text-[18px] font-medium text-gray-600"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-6 w-[45%]">
          <label
            HtmlFor="description"
            className="block mb-2 text-[18px] font-medium text-gray-600"
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
      </div>
      <div className="mb-6 w-full">
        <label
          HtmlFor="title"
          className="block mb-2 text-[18px] font-medium text-gray-600"
        >
          Image
        </label>
        <input
          onChange={(e) => previewImage(e.target.files)}
          type="file"
          id="image"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Title"
          required
        />
      </div>
      {imageLoading ? (
        <Loading />
      ) : (
        <img
          src={blogRequest.imageUrl}
          alt="post-preview"
          width="500"
          height="100"
        />
      )}

      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[200px] px-5 py-2.5 mt-5 text-center"
      >
        Add post
      </button>
    </form>
  );
};
