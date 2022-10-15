import React, { createContext, useState } from "react";

export const MyContext = createContext({
  loggedIn: false,
  setLoggedIn: (loggedIn) => {},
  theme: "light",
  setTheme: (theme) => {},
  typeOfNavbar: "wide(default)",
  setTypeOfNavbar: (navbar) => {},
});

const ContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [theme, setTheme] = useState("light");
  const [typeOfNavbar, setTypeOfNavbar] = useState("wide(default)");

  return (
    <MyContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        theme,
        setTheme,
        typeOfNavbar,
        setTypeOfNavbar,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
