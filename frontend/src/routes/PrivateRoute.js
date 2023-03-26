import React from "react";
import { MyContext } from "../context/context";
import { useContext } from "react";
import { Navigate } from "react-router";
const PrivateRoute = ({ children }) => {
  const ctx = useContext(MyContext);
  const token = localStorage.getItem("access_token");
  console.log(ctx.loggedIn);
  return !ctx.loggedIn ? <Navigate to="/login" /> : children;
};

export default PrivateRoute;
