import profilePic1 from "../images/Feed/feed1.png";
import Navbar from "../components/Navbar";
const ProfilePage = (props) => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="w-[40%] h-[500px] flex flex-col items-center justify-around mt-[50px] border-r-2">
          <div className="flex flex-col items-center">
            <img src={profilePic1} />
            <h2 className="mt-[20px] font-bold">Zina Youanni</h2>
            <p>@zina</p>
          </div>
          <div className="flex flex-col items-center">
            <button className="font-medium">About</button>
            <button className="font-medium">Timeline</button>
          </div>
        </div>
        <div className="w-[60%] flex justify-center mt-[100px]">
          <div className="w-[70%]">
            <h2 className="font-bold">About</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
