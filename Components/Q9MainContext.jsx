import { useState } from "react";
import { Q9UseContext } from "../Components/Q9UseContext";
import React from "react";
import { ThemeContext } from "../Components/ThemeContext";

function Q9MainContext() {
  const [darkTheme, setTheme] = useState(true);

  function toggleTheme() {
    setTheme((prevTheme) => !prevTheme);
  }

  return (
    <div className="Mainsection">
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Q9UseContext />
      </ThemeContext.Provider>
    </div>
  );
}
export default Q9MainContext;
