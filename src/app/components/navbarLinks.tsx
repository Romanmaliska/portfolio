'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

const links = ['home', 'contact'] as const;

export default function NavbarLinks() {
  const pathName = usePathname();
  const path = pathName === '/' ? 'home' : pathName.substring(1);
  const t = useTranslations('Navigation');

  const generateHref = (link: string) =>
    link === 'home' ? '/' : `/${link.toLowerCase()}`;

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            className={`text-base font-medium transition-colors ${
              path === link.toLowerCase() 
                ? 'text-purple-600 dark:text-purple-400' 
                : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
            key={link}
            href={generateHref(link)}
          >
            {t(link)}
          </Link>
        );
      })}
      <a
        href="https://todo.romanmaliska.dev"
        className="text-base font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
        target="blank"
      >
        {t('todoApp')}
      </a>
    </>
  );
}
