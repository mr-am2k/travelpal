import "./App.css";
import { useEffect, createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
<<<<<<< HEAD
import UserFeed from "./pages/UserFeed";
=======
export const Context = createContext({
  loggedIn: false,
  setLoggedIn: (loggedIn) => {},
});
>>>>>>> ea1e64c045e5a2d69eeecb06a9f0945f674524a8
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
<<<<<<< HEAD
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<p>ABOUT</p>} />
      <Route path="login" element={<Login />} />
      <Route path="registration" element={<Registration />} />
      <Route path="userfeed" element={<UserFeed />} />
    </Routes>
=======
    <Context.Provider value={{ loggedIn, setLoggedIn }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<p>ABOUT</p>} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
      </Routes>
    </Context.Provider>
>>>>>>> ea1e64c045e5a2d69eeecb06a9f0945f674524a8
  );
}

export default App;
