import React from "react";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export function ThemeContextProvider(props) {
  const [theme, setTheme] = useState("autumn");

  const changeTheme = (theme) => {
    if (!["summer", "spring", "autumn", "winter"].includes(theme)) {
      return;
    }

    setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
