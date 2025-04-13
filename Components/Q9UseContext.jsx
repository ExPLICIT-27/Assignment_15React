import { ThemeContext, getThemeStyles } from "../Components/ThemeContext";
import { useContext } from "react";

export const Q9UseContext = () => {
  const darkTheme = useContext(ThemeContext);
  return (
    <div className="q9-use-context" style={getThemeStyles(darkTheme)}>
      Theme example
    </div>
  );
};
