import Navbar from "../components/Navbar";
import Chat from "../components/Messages/Chat";
import AllChats from "../components/Messages/AllChats";
import face1 from "../images/Feed/feed1.png";
import face2 from "../images/Feed/feed2.png";
import { useState } from "react";
const dummyMsg = [
  {
    user: {
      profileImg: face1,
      username: "Zara You",
    },
    messages: [
      { sender: "user", message: "hey" },
      { sender: "user", message: "how are you" },
      {
        sender: "Zara You",
        message: "I'm good, thanks for asking. How about you?",
      },
    ],
  },
  {
    user: {
      profileImg: face2,
      username: "Kim Martini",
    },
    messages: [
      { sender: "user", message: "Hi there, how's your day going so far?" },
      {
        sender: "Kim Martini",
        message: "It's going pretty well, thanks for asking. How about you?",
      },
      {
        sender: "user",
        message: "I'm good, thanks for asking. How about you?",
      },
      {
        sender: "Kim Martini",
        message: "Not too bad, thanks. What are your plans for the weekend?",
      },
    ],
  },
];

const Messages = () => {
  const [activeChat, setActiveChat] = useState();

  return (
    <div className="h-screen">
      <Navbar />
      <div className="h-[80%] flex justify-center items-center">
        <AllChats messages={dummyMsg} setActiveChat={setActiveChat} />
        <Chat chat={activeChat} />
      </div>
    </div>
  );
};
export default Messages;
