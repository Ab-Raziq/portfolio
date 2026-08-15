import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState( () => {
    return localStorage.getItem("darkMode") === "true"
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect (() =>{
    localStorage.setItem("darkMode" , darkMode)
  }, [darkMode])
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};