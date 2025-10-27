'use client';

import { useRef, ViewTransition } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import EmailForm from '@/app/components/emailForm';

type Props = { isOnContactPage?: boolean };

export default function Socialbar({ isOnContactPage }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

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
          ? 'flex flex-col items-center justify-center min-h-10'
          : ''
      }
    >
      <ViewTransition name="socialbar">
        {isOnContactPage && (
          <h1 className="text-xl md:text-4xl font-bold m-8 md:m-12">Get in Touch</h1>
        )}
        <div
          className={
            isOnContactPage
              ? 'flex gap-8 items-center justify-center'
              : 'flex place-content-around m-4 gap-4 sm:flex-col sm:fixed sm:bottom-10 sm:m-6'
          }
        >
          <FaEnvelope
            className={
              isOnContactPage
                ? 'h-12 w-12 transition-colors hover:text-blue'
                : 'h-6 w-6 sm:h-8 sm:w-8 hover:text-blue'
            }
            onClick={openDialog}
          />
          <a
            href="https://github.com/Romanmaliska"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              className={
                isOnContactPage
                  ? 'h-12 w-12 transition-colors hover:text-blue'
                  : 'h-6 w-6 sm:h-8 sm:w-8 hover:text-blue'
              }
            />
          </a>
          <a
            href="https://www.linkedin.com/in/rmaliska"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              className={
                isOnContactPage
                  ? 'h-12 w-12 transition-colors hover:text-blue'
                  : 'h-6 w-6 sm:h-8 sm:w-8 hover:text-blue'
              }
            />
          </a>
          <EmailForm dialogRef={dialogRef} />
        </div>
      </ViewTransition>
    </div>
  );
}
