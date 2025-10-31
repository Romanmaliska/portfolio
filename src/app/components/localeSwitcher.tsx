'use client';

import { useState, useTransition, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const getLocale = () => {
  return (
    document?.cookie
      ?.split('; ')
      ?.find((c) => c.startsWith('locale'))
      ?.split('=')[1] ?? 'en'
  );
};

const toggleLocale = (locale: string) => {
  return locale === 'cs' ? 'en' : 'cs';
};

export default function LocaleSwitcher() {
  const router = useRouter();
  const [locale, setLocale] = useState('en');
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setLocale(getLocale());
  }, []);

  const handleLocaleChange = () => {
    const newLocale = toggleLocale(locale);
    setLocale(newLocale);

    startTransition(() => {
      document.cookie = `locale=${newLocale}; path=/; max-age=31536000`; // 1 year
      router.refresh();
    });
  };

  return (
    <div className="flex gap-2 items-center ml-4">
      <button
        key={locale}
        onClick={handleLocaleChange}
        disabled={isPending}
        className="px-3 py-1 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all disabled:opacity-50"
        aria-label={`Switch to ${locale.toUpperCase()}`}
      >
        <span>{toggleLocale(locale).toUpperCase()}</span>
      </button>
    </div>
  );
}
