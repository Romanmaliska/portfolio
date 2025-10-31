"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const IconProps = { 
    className: "cursor-pointer text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors", 
    width: 20, 
    height: 20 
  };

  return resolvedTheme === "dark" ? (
    <FaRegSun {...IconProps} onClick={() => setTheme("light")} />
  ) : (
    <FaRegMoon {...IconProps} onClick={() => setTheme("dark")} />
  );
}
