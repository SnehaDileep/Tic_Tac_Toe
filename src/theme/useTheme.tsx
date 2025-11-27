import { useEffect, useState } from "react";

// Define allowed theme types
export type Theme = "light" | "dark";

function useTheme() {
  // State that stores the current theme ("light" or "dark")
  // Load from localStorage first; if nothing is stored, default to "light"
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("theme") as Theme) || "light" // default: light
  );

  // Apply theme class to html element
  useEffect(() => {
    const root = document.documentElement;

    // Add or remove the "dark" class depending on the current theme
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    
    // Save the user's selected theme to localStorage so it persists
    localStorage.setItem("theme", theme); 
  }, [theme]);

  // Toggle between light and dark
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
}

export default useTheme;