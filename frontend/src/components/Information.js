import React from "react";
import { Link } from "react-router-dom";
const Information = (props) => {
  return (
    <Link
      to="/introduction"
      className="flex items-center gap-2 text-white w-[227px] h-[47px] border-white border-2 rounded-[25px] justify-center hover:bg-white hover:text-black"
    >
      <span>{props.children}</span>
      <span className="font-medium">{props.text}</span>
    </Link>
  );
};

export default Information;
