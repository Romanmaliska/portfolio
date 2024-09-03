import ThemeSwitcher from "./themeSwitcher";
import NavbarLinks from "./navbarLinks";

export default function Navbar() {
  return (
    <nav className="flex items-center m-4 sm:m-6">
      <ThemeSwitcher />
      <div className="flex gap-4 ml-auto">
        <NavbarLinks />
      </div>
    </nav>
  );
}
