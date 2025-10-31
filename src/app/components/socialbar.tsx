'use client';

import { useRef, ViewTransition } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import EmailForm from '@/app/components/emailForm';

type Props = { isOnContactPage?: boolean };

export default function Socialbar({ isOnContactPage }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const t = useTranslations('ContactPage');

  const openDialog = () => {
    if ('startViewTransition' in document) {
      document.startViewTransition(() => {
        dialogRef.current?.showModal();
      });
    } else {
      dialogRef.current?.showModal();
    }
  };

  return (
    <div
      className={
        isOnContactPage
          ? 'flex flex-col items-center justify-center min-h-10 py-12'
          : ''
      }
    >
      <ViewTransition name="socialbar">
        {isOnContactPage && (
          <h1 className="text-3xl md:text-5xl font-bold mb-12 text-slate-900 dark:text-white">{t('title')}</h1>
        )}
        <div
          className={
            isOnContactPage
              ? 'flex gap-8 items-center justify-center p-6 rounded-2xl bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 shadow-lg'
              : 'flex place-content-around m-4 gap-4 sm:flex-col sm:fixed sm:bottom-10 sm:right-6 sm:p-4 sm:rounded-2xl sm:bg-white/80 sm:dark:bg-white/5 sm:backdrop-blur-xl sm:border sm:border-slate-200/50 sm:dark:border-white/10 sm:shadow-lg'
          }
        >
          <div
            className={
              isOnContactPage
                ? 'p-4 rounded-xl bg-white/50 dark:bg-white/5 hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-110'
                : 'p-2 sm:p-3 rounded-xl bg-white/50 dark:bg-white/5 hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-110'
            }
            onClick={openDialog}
          >
            <FaEnvelope
              className={
                isOnContactPage
                  ? 'h-10 w-10 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors'
                  : 'h-5 w-5 sm:h-6 sm:w-6 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors'
              }
            />
          </div>
          <a
            href="https://github.com/Romanmaliska"
            target="_blank"
            rel="noopener noreferrer"
            className={
              isOnContactPage
                ? 'p-4 rounded-xl bg-white/50 dark:bg-white/5 hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110'
                : 'p-2 sm:p-3 rounded-xl bg-white/50 dark:bg-white/5 hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110'
            }
          >
            <FaGithub
              className={
                isOnContactPage
                  ? 'h-10 w-10 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors'
                  : 'h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors'
              }
            />
          </a>
          <a
            href="https://www.linkedin.com/in/rmaliska"
            target="_blank"
            rel="noopener noreferrer"
            className={
              isOnContactPage
                ? 'p-4 rounded-xl bg-white/50 dark:bg-white/5 hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110'
                : 'p-2 sm:p-3 rounded-xl bg-white/50 dark:bg-white/5 hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110'
            }
          >
            <FaLinkedin
              className={
                isOnContactPage
                  ? 'h-10 w-10 text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 transition-colors'
                  : 'h-5 w-5 sm:h-6 sm:w-6 text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 transition-colors'
              }
            />
          </a>

          <EmailForm dialogRef={dialogRef} />
        </div>
      </ViewTransition>
    </div>
  );
}
