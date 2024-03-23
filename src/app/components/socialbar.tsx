import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Socialbar() {
  return (
    <section className="flex flex-col gap-4 m-4 fixed bottom-10">
      <FaEnvelope className="h-8 w-8" />
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
    </section>
  );
}
