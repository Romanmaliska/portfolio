"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

import ContactMe from "./contactMe";

export default function Socialbar() {
  const pathName = usePathname();

  return (
    <footer className="flex place-content-around m-4 gap-4 sm:flex-col sm:fixed sm:bottom-10 sm:m-6">
      <Link href={`${pathName}?dialog=true`}>
        <FaEnvelope className="h-6 w-6 sm:h-8 sm:w-8 hover:text-blue" />
      </Link>
      <Suspense fallback={null}>
        <ContactMe />
      </Suspense>
      <a
        href="https://github.com/Romanmaliska"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="h-6 w-6 sm:h-8 sm:w-8 hover:text-blue" />
      </a>
      <a
        href="https://www.linkedin.com/in/rmaliska"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="h-6 w-6 sm:h-8 sm:w-8 hover:text-blue" />
      </a>
    </footer>
  );
}
