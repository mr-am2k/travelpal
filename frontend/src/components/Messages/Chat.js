import { useContext } from "react";
import { MyContext } from "../../context/context";
const Chat = (props) => {
  const cx = useContext(MyContext);
  if (props.chat) {
    const profileImg = props.chat.user.profileImg;
    return (
      <div className="px-[10px] w-[60%] h-[90%] mx-[10px] border-gray flex flex-col gap-3 shadow-[0_0px_15px_rgba(0,0,0,0.2)] rounded-[10px]">
        <p className="text-[18px] font-medium border-b-2 border-gray my-[10px] mx-[15px]">
          {props.chat.user.username}
        </p>
        {props.chat.messages.map((message) => {
          if (message.sender === "user") {
            return (
              <p className="bg-blue-500 w-[50%] rounded-md self-end text-white px-[10px] py-[5px]">
                {message.message}
              </p>
            );
          } else {
            return (
              <div className="flex items-center">
                <img src={profileImg} alt="#" width="35px" height="35px" />
                <p className="ml-[5px] bg-gray-200 w-[50%] rounded-md self-start px-[10px] py-[5px]">
                  {message.message}
                </p>
              </div>
            );
          }
        })}
      </div>
    );
  }
};
export default Chat;
