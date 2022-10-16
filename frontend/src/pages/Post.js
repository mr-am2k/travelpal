import React from "react";
import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import Main from "../components/Post/Main";
import Footer from "../components/Global/Footer";
const Post = () => {
  const params = useParams();
  console.log(+params.id);
  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default Post;
