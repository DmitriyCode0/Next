import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded"
    >
      {isDarkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};

export default ThemeToggle;
