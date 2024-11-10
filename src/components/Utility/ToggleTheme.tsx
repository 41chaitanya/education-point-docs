"use client";
import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

const ToggleTheme = () => {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    }
  }, []);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div
      className="dark:bg-[#333333] bg-[#F8F8F8] border-2 border-[#DDDDDD] p-2 rounded-xl hover:text-[#666666]  dark:hover:text-[#AAAAAA] focus:outline-none text-2xl"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? <FaMoon /> : <MdSunny />}
    </div>
  );
};

export default ToggleTheme;
