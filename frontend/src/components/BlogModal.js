import { BlogForm } from "../components/Forms/BlogForm";
export const BlogModal = (props) => {
  return (
    <div className="fixed top-0 z-50 w-full h-screen bg-white bg-opacity-20 backdrop-blur-md rounded drop-shadow-lg">
      <div className="flex flex-col justify-center items-center min-w-[300px] w-[80%] bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg border-2 border-[#1774FF]">
        <div className="w-full flex justify-end">
          <div
            className="h-6 flex justify-center items-center text-white text-[18px] font-medium px-2 bg-red-500 rounded-full mt-2 mr-2 hover:cursor-pointer"
            onClick={() => props.setModal(false)}
          >
            close
          </div>
        </div>
        <BlogForm />
      </div>
    </div>
  );
};
