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

  const IconProps = { className: "cursor-pointer", width: 36, height: 36 };

  return resolvedTheme === "dark" ? (
    <FaRegSun {...IconProps} onClick={() => setTheme("light")} />
  ) : (
    <FaRegMoon {...IconProps} onClick={() => setTheme("dark")} />
  );
}
