import { cookies } from 'next/headers';

import { getRequestConfig } from 'next-intl/server';

const supportedLocales = ['en', 'cs'];

export default getRequestConfig(async () => {
  const store = await cookies();
  const cookieLocale = store.get('locale')?.value || 'en';
  const locale = supportedLocales.includes(cookieLocale) ? cookieLocale : 'en';

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
