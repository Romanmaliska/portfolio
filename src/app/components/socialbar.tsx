import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Socialbar() {
  return (
    <section className="flex flex-col gap-4 m-4 fixed bottom-10">
      <FaEnvelope className="h-8 w-8" />
      <a href="https://github.com/Romanmaliska" rel="noopener noreferrer">
        <FaGithub className="h-8 w-8" />
      </a>
      <a
        href="https://sk.linkedin.com/in/roman-mali%C5%A1ka-a1a11b17a"
        className="font-semibold text-lg˝"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="h-8 w-8" />
      </a>
    </section>
  );
}
