import React, { useEffect } from "react";
import Header from "../components/Global/Header";
import Prefooter from "../components/Global/Prefooter";
import Hero from "../components/Hero";
import Hosts from "../components/Hosts";
import Suggested from "../components/Suggested";
import Footer from "../components/Global/Footer";
import { MyContext } from "../context/context";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
const Home = () => {
  const cx = useContext(MyContext);
  const navigate = useNavigate();
  console.log(cx);
  useEffect(() => {
    toast("Successfully registered!");
    if (cx.loggedIn) navigate("/userfeed");
  });
  return (
    <div className="w-screen max-w-[100%] flex flex-col overflow-hidden">
      <Header />
      <Hero />
      <Hosts />
      <Suggested />
      <Prefooter />
      <Footer />
    </div>
  );
};

export default Home;
