import ThemeSwitcher from "./themeSwitcher";

export default function Navbar() {
  const links = ["Home", "Projects", "Contact"];
  const IconProps = {
    className: "w-5 h-5 cursor-pointer",
  };

  return (
    <nav className="flex items-center m-4">
      <ThemeSwitcher />
      <div className="flex gap-4 ml-auto">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-lg font-semibold"
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}
