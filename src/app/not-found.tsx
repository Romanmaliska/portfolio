import Link from "next/link";
import { FaHome } from "react-icons/fa";

import Hero from "./components/ui/hero";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <Hero />
      <h1 className="leading-tight sm:leading-normal pb-4 sm:pb-8 text-4xl sm:text-7xl text-black dark:text-white font-semibold capitalize">
        Page Not Found
      </h1>
      <Link href="/">
        <button className="flex items-center justify-center gap-2 p-2 text-black dark:text-white font-semibold border-2 rounded-lg border-black dark:border-white hover:border-blue hover:text-blue dark:hover:border-blue dark:hover:text-blue">
          <FaHome />
          Return Home
        </button>
      </Link>
    </section>
  );
}
