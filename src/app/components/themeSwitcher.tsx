"use client";

import { useTheme } from "next-themes";
import { FaRegMoon, FaRegSun } from "react-icons/fa";

export default function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();
  const IconProps = { className: "cursor-pointer", width: 36, height: 36 };

  return resolvedTheme === "dark" ? (
    <FaRegSun {...IconProps} onClick={() => setTheme("light")} />
  ) : (
    <FaRegMoon {...IconProps} onClick={() => setTheme("dark")} />
  );
}
