import Link from 'next/link';

const links = ['Home'];

export default function NavbarLinks() {
  const generateHref = (link: string) =>
    link === 'Home' ? '/' : `/${link.toLowerCase()}`;

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            className={`relative text-lg font-semibold text-blue before:transition-all before:duration-300 before:h-1 before:content-[''] before:absolute before:bg-blue before:w-0 before:bottom-0 hover:before:w-full`}
            key={link}
            href={generateHref(link)}
          >
            {link}
          </Link>
        );
      })}
      <a
        href="https://todo.maliskaroman.lol"
        className={`relative text-lg font-semibold hover:text-blue before:transition-all before:duration-300 before:h-1 before:content-[''] before:absolute before:bg-blue before:w-0 before:bottom-0 hover:before:w-full`}
      >
        Another To Do App
      </a>
    </>
  );
}
