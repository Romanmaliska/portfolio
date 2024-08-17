import Link from "next/link";
import ThemeSwitcher from "./themeSwitcher";

const links = ["Home", "Contact"];

export default function Navbar() {
  const IconProps = {
    className: "w-5 h-5 cursor-pointer",
  };

  const generateHref = (link: string) =>
    link === "Home" ? "/" : `/${link.toLowerCase()}`;

  return (
    <nav className="flex items-center m-4 sm:m-6">
      <ThemeSwitcher />
      <div className="flex gap-4 ml-auto">
        {links.map((link) => (
          <Link
            className="text-lg font-semibold"
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
