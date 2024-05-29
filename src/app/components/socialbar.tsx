import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

import ContactMe from "./contactMe";

export default function Socialbar() {
  return (
    <section className="flex flex-col gap-4 m-4 fixed bottom-10">
      <Link href="/?dialog=true">
        <FaEnvelope className="h-8 w-8" />
      </Link>
      <a
        href="https://github.com/Romanmaliska"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="h-8 w-8" />
      </a>
      <a
        href="https://www.linkedin.com/in/rmaliska"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="h-8 w-8" />
      </a>
      <ContactMe />
    </section>
  );
}
