import Link from "next/link";
import ThemeSwitcher from "./themeSwitcher";

const links = ["Home", "Contact"];

export default function Navbar() {
  const generateHref = (link: string) =>
    link === "Home" ? "/" : `/${link.toLowerCase()}`;

  return (
    <nav className="flex items-center m-4 sm:m-6">
      <ThemeSwitcher />
      <div className="flex gap-4 ml-auto">
        {links.map((link) => (
          <Link
            className="relative text-lg font-semibold hover:text-blue before:transition-all before:duration-300 before:h-1 before:content-[''] before:absolute before:bg-blue before:w-0 before:bottom-0 hover:before:w-full"
            key={link}
            href={generateHref(link)}
          >
            {link}
          </Link>
        ))}
      </div>
    </nav>
  );
}
