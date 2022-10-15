import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Hosts from "../components/Hosts";
import Suggested from "../components/Suggested";
const Home = () => {
  return (
    <div className="w-screen max-w-[100%] flex flex-col overflow-hidden">
      <Header />
      <Hero />
      <Hosts />
      <Suggested />
    </div>
  );
};

export default Home;
