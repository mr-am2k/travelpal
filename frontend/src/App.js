import "./App.css";
import { useEffect, createContext, useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import UserFeed from "./pages/UserFeed";
import TravelFeed from "./pages/TravelFeed";
import PrivateRoute from "./routes/PrivateRoute";
import Post from "./pages/Post";
import Messages from "./pages/Messages";
import ProfilePage from "./pages/ProfilePage";
import { refreshAccessToken } from "./functions/refreshToken";
import ContextProvider, { MyContext } from "./context/context";

import axios from "axios";

function App() {
  const cx = useContext(MyContext);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const getUserData = async () => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/users/user`,
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );
        cx.loggedIn = true;
        cx.user = response.data;
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    const minute = 60000;

    refreshAccessToken();
    getUserData();
    console.log("run");
    setInterval(refreshAccessToken, minute * 4);
  }, []);

  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route
          path="userfeed"
          element={
            <PrivateRoute>
              <UserFeed />
            </PrivateRoute>
          }
        />
        <Route
          path="post/:id"
          element={
            <PrivateRoute>
              <Post />
            </PrivateRoute>
          }
        />
        <Route
          path="travelfeed"
          element={
            <PrivateRoute>
              <TravelFeed />
            </PrivateRoute>
          }
        />
        <Route
          path="messages"
          element={
            <PrivateRoute>
              <Messages />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={
            <PrivateRoute>
              <UserFeed />
            </PrivateRoute>
          }
        />
        <Route
          path="profilepage"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
      </Routes>
    </ContextProvider>
  );
}

export default App;
