import Navbar from "../components/Navbar";
import Stars from "../images/Stars.png";
import UserProfileIcons from "../components/UserProfileIcons";
import { useContext, useState } from "react";
import { MyContext } from "../context/context";
import { storageService } from "../services/storageService";
import axios from "axios";
import place1 from "../images/placeIcons/place1.png";
import place2 from "../images/placeIcons/place2.png";
import place3 from "../images/placeIcons/place3.png";
import place4 from "../images/placeIcons/place4.png";
const ProfilePage = (props) => {
  const ctx = useContext(MyContext);
  const [profileImage, setProfileImage] = useState(ctx.user.imageUrl);
  const [loading, setLoading] = useState(false);
  const updateProfileImage = async (image) => {
    setLoading(true);
    const access_token = localStorage.getItem("access_token");
    const url = await storageService.upload("profilePics", image[0]);
    setProfileImage(url);
    try {
      const response = await axios.put(
        `http://localhost:8080/api/v1/users`,
        {
          id: ctx.user.id,
          firstName: ctx.user.firstName,
          lastName: ctx.user.lastName,
          email: ctx.user.email,
          country: ctx.user.country,
          dateOfBirth: ctx.user.dateOfBirth,
          gender: ctx.user.gender,
          imageUrl: url,
        },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center md:flex-row">
        <div className="w-[100%] md:w-[40%] h-[500px] flex flex-col items-center justify-around md:mt-[50px] border-r-2">
          <div className="flex flex-col items-center">
            <div
              style={{
                backgroundImage: `url(${profileImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-[186px] h-[186px] md:w-[286px] md:h-[286px] rounded-full flex justify-center items-center relative"
            >
              <label
                htmlFor="file-upload"
                className="hover:opacity-100 opacity-20 w-full h-full flex justify-center items-center absolute top-0 left-0 rounded-full cursor-pointer transition-all"
              >
                <span className="bg-white rounded-full p-2 cursor-pointer">
                  {!loading ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6 text-gray-800"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  ) : (
                    <svg
                      aria-hidden="true"
                      class="w-8 h-8 mr-2 text-gray-200 animate-spin fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  )}
                </span>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={(e) => updateProfileImage(e.target.files)}
                />
              </label>
            </div>
            <h2 className="mt-[20px] font-bold">
              {ctx.user.firstName} {ctx.user.lastName}
            </h2>
            <p>@{ctx.user.username}</p>
          </div>
        </div>
        <div className="w-[95%] md:w-[60%] flex justify-center md:mt-[100px]">
          <div className="w-[95%] md:w-[70%]">
            <h2 className="font-bold text-[20px] border-b-2 pb-[10px]">
              About
            </h2>
            <div className="w-[100%] flex flex-wrap justify-between pt-[20px]">
              <div className="h-[100px] py-[10px] text-[14px] mx-[10px]">
                <p>
                  <span className="font-bold">Name:</span> {ctx.user.firstName}{" "}
                  {ctx.user.lastName}
                </p>
                <p>
                  <span className="font-bold">Username:</span> @
                  {ctx.user.username}
                </p>
                <p>
                  <span className="font-bold">From:</span> {ctx.user.country}
                </p>
              </div>
              <div className="h-[100px] py-[10px] text-[14px] mx-[10px]">
                <p>
                  <span className="font-bold">Age:</span> 24
                </p>
                <p>
                  <span className="font-bold">Rating:</span>
                </p>
                <img src={Stars} width="100px" alt="star" />
              </div>
              <div className="flex flex-col h-[100px] py-[10px] text-[14px] mx-[10px]">
                <h2 className="text-[18px] font-bold">Languages</h2>
                <p>&#x2022; English</p>
                <p>&#x2022; French</p>
                <p>&#x2022; Turkish</p>
              </div>
              <div className="flex flex-col h-[100px] py-[10px] text-[14px] mx-[10px]">
                <h2 className="text-[18px] font-bold">Currently in</h2>
                <p>{ctx.user.country}</p>
              </div>
              <div className="w-[100%] mt-[30px]">
                <h2 className="text-[16px] font-bold">Suggested places</h2>
                <div className="flex justify-around">
                  <UserProfileIcons image={place1} name="Sarajevo" country="" />
                  <UserProfileIcons image={place2} name="Morocco" country="" />
                  <UserProfileIcons image={place3} name="Lisabon" country="" />
                  <UserProfileIcons image={place4} name="Vienna" country="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
