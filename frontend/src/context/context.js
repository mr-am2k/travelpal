import React, { createContext, useState } from "react";

export const MyContext = createContext({
  loggedIn: false,
  setLoggedIn: () => {},
  user: {},
  setUser: () => {},
});

const ContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  console.log(loggedIn, "context");

  return (
    <MyContext.Provider value={{ loggedIn, setLoggedIn, user, setUser }}>
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
