// ThemeContext.js
import React from "react";

export const ThemeContext = React.createContext();

export const getThemeStyles = (darkTheme) => ({
  backgroundColor: darkTheme ? "black" : "white",
  color: darkTheme ? "white" : "black",
  padding: "20px",
  margin: "20px",
});
