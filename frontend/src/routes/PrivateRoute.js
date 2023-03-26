import React from "react";
import { MyContext } from "../context/context";
import { useContext } from "react";
import { Navigate } from "react-router";
const PrivateRoute = ({ children }) => {
  const ctx = useContext(MyContext);
  console.log(ctx.loggedIn);
  return !ctx.loggedIn ? <Navigate to="/login" /> : children;
};

export default PrivateRoute;
