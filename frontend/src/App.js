import "./App.css";
import { useEffect, createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import UserFeed from "./pages/UserFeed";
import TravelFeed from "./pages/TravelFeed";
import PrivateRoute from "./routes/PrivateRoute";
export const Context = createContext({
  loggedIn: false,
  setLoggedIn: (loggedIn) => {},
});
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Context.Provider value={{ loggedIn, setLoggedIn }}>
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
          path="travelfeed"
          element={
            <PrivateRoute>
              <TravelFeed />
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
      </Routes>
    </Context.Provider>
  );
}

export default App;
