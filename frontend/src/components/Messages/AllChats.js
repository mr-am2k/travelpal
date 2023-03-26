import { MyContext } from "../../context/context";
import { useContext } from "react";
const AllChats = (props) => {
  const cx = useContext(MyContext);

  const setActiveChat = (messages) => {
    props.setActiveChat(messages);
  };

  return (
    <div className="w-[300px] h-[90%] border-gray flex flex-col gap-3 shadow-[0_0px_15px_rgba(0,0,0,0.2)] rounded-[10px] mr-[20px]">
      <p className="text-[18px] font-medium border-b-2 border-gray my-[10px] mx-[15px]">
        {cx.user.username}
      </p>
      {props.messages.map((message) => {
        return (
          <div
            className="flex px-[10px] hover:bg-blue-500 rounded-md mx-[5px] cursor-pointer"
            onClick={() => setActiveChat(message)}
          >
            <img
              src={message.user.profileImg}
              alt="#"
              width="50px"
              height="50px"
            />
            <div className="px-[10px] overflow-hidden m-auto">
              <p className="pl-[5px] text-[13px] font-medium m-auto whitespace-nowrap text-ellipsis overflow-hidden">
                {message.user.username}
              </p>
              <p className="pl-[5px] text-[12px] m-auto whitespace-nowrap text-ellipsis overflow-hidden">
                {message.messages[message.messages.length - 1].message}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default AllChats;
