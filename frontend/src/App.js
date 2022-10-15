import "./App.css";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<p>HOME </p>} />
      <Route path="about" element={<p>ABOUT</p>} />
    </Routes>
  );
}

export default App;
