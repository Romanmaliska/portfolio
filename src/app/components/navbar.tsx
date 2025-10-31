import ThemeSwitcher from "@/app/components/themeSwitcher";
import NavbarLinks from "@/app/components/navbarLinks";
import LocaleSwitcher from "@/app/components/localeSwitcher";

export default function Navbar() {
  return (
    <nav className="sticky top-4 z-50 mx-4 sm:mx-6 mt-4 sm:mt-6">
      <div className="flex items-center px-6 py-3 rounded-2xl bg-white/80 dark:bg-white/5 backdrop-blur-2xl border border-slate-200/50 dark:border-white/10 shadow-lg transition-all duration-300 hover:bg-white/90 dark:hover:bg-white/10 hover:border-slate-300/50 dark:hover:border-white/20">
        <ThemeSwitcher />
        <LocaleSwitcher />
        <div className="flex gap-6 ml-auto">
          <NavbarLinks />
        </div>
      </div>
    </nav>
  );
}
