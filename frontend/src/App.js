import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<p>ABOUT</p>} />
    </Routes>
  );
}

export default App;
