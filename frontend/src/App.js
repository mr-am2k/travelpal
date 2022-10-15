import "./App.css";
import { useEffect, createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

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
        <Route path="about" element={<p>ABOUT</p>} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
