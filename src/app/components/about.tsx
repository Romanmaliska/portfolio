import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('Homepage');

  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Hero Section */}
      <div className="float-animate">
        <p className="text-xl sm:text-2xl text-purple-600 dark:text-purple-400 font-medium mb-4">
          {t('greeting')}
        </p>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl text-slate-900 dark:text-white font-bold mb-8 capitalize tracking-tight">
          {t('name')}
        </h1>
      </div>

      <div>
        <div className="flex flex-col gap-6 rounded-2xl bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 p-6 sm:p-8 shadow-lg transition-all duration-300 hover:bg-white/90 dark:hover:bg-white/10 hover:border-slate-300/50 dark:hover:border-white/20">
          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
            {t('intro')}
          </p>

          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
            {t('nature')}
          </p>

          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
            {t('welcome')}
          </p>
        </div>
      </div>
    </div>
  );
}
