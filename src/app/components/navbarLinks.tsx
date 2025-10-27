'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = ['Home', 'Contact'];

export default function NavbarLinks() {
  const pathName = usePathname();
  const path = pathName === '/' ? 'home' : pathName.substring(1);

  const generateHref = (link: string) =>
    link === 'Home' ? '/' : `/${link.toLowerCase()}`;

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            className={`relative text-lg font-semibold ${
              path === link.toLowerCase() ? 'text-blue' : 'text-white'
            } `}
            key={link}
            href={generateHref(link)}
          >
            {link}
          </Link>
        );
      })}
      <a
        href="https://todo.romanmaliska.dev"
        className={`relative text-lg font-semibold hover:text-blue before:transition-all before:duration-300 before:h-1 before:content-[''] before:absolute before:bg-blue before:w-0 before:bottom-0 hover:before:w-full`}
        target="blank"
      >
        To Do App
      </a>
    </>
  );
}
