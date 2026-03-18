import { useState, useLayoutEffect } from "react";

function initTheme() {
  const theme = localStorage.getItem("isDarkTheme");

  if (!theme) {
    if (globalThis.matchMedia("(prefers-color-scheme: dark)").matches) {
      localStorage.setItem("isDarkTheme", "dark");
      return true;
    } else {
      return false;
    }
  }

  return theme === "dark";
}

export function useDarkMode() {
    const [isDarkTheme, setIsDarkTheme] = useState(initTheme());

    useLayoutEffect(() => {
      if (isDarkTheme) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("isDarkTheme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.removeItem("isDarkTheme");
      }
    }, [isDarkTheme]);

    return setIsDarkTheme
}