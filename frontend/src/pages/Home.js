import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Hosts from "../components/Hosts";
const Home = () => {
  return (
    <div className="w-screen max-w-[100%] flex flex-col overflow-hidden">
      <Header />
      <Hero />
      {/* HOME */}
      <Hosts />
    </div>
  );
};

export default Home;
