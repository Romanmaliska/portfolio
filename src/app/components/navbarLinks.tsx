"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = ["Home", "Contact"];

export default function NavbarLinks() {
  const pathName = usePathname();

  const generateHref = (link: string) =>
    link === "Home" ? "/" : `/${link.toLowerCase()}`;

  return (
    <>
      {links.map((link) => {
        const isCurrentLink = pathName === generateHref(link);

        return (
          <Link
            className={`relative text-lg font-semibold ${
              isCurrentLink ? "text-blue" : ""
            } hover:text-blue before:transition-all before:duration-300 before:h-1 before:content-[''] before:absolute before:bg-blue before:w-0 before:bottom-0 hover:before:w-full`}
            key={link}
            href={generateHref(link)}
          >
            {link}
          </Link>
        );
      })}
    </>
  );
}
