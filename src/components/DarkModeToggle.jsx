import React, { useEffect, useState } from "react";
import lightIcon from "../assets/light_mode.svg";
import darkIcon from "../assets/dark_mode.svg";

function getInitialDark() {
  try {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
  } catch (_) {}
  return (
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

export default function DarkModeToggle({ className = "" }) {
  // Initialize synchronously to avoid a flash or incorrect flip
  const [dark, setDark] = useState(getInitialDark);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark((prev) => !prev)}
      aria-label="Toggle dark mode"
      className={`inline-flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-600 w-9 h-9 text-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${className}`}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <img
        src={dark ? lightIcon : darkIcon}
        alt={dark ? "Light mode" : "Dark mode"}
        className="w-5 h-5"
        draggable={false}
      />
    </button>
  );
}
