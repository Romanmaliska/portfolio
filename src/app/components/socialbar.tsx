'use client';

import { useRef } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdOutlineCancel } from 'react-icons/md';
import EmailForm from './emailForm';

export default function Socialbar() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openDialog = () => dialogRef.current?.showModal();
  const closeDialog = () => dialogRef.current?.close();

  return (
    <footer className="flex place-content-around m-4 gap-4 sm:flex-col sm:fixed sm:bottom-10 sm:m-6">
      <FaEnvelope
        className="h-6 w-6 sm:h-8 sm:w-8 hover:text-blue"
        onClick={openDialog}
      />
      <dialog
        ref={dialogRef}
        className="rounded-xl pt-3 px-6 w-full sm:max-w-screen-sm border-2 dark:border-blue backdrop:bg-gray-5"
      >
        <MdOutlineCancel
          className="ml-auto m-2 h-6 w-6 cursor-pointer dark:hover:text-blue hover:text-blue"
          onClick={closeDialog}
        />
        <EmailForm closeDialog={closeDialog} />
      </dialog>
      <a
        href="https://github.com/Romanmaliska"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="h-6 w-6 sm:h-8 sm:w-8 hover:text-blue" />
      </a>
      <a
        href="https://www.linkedin.com/in/rmaliska"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="h-6 w-6 sm:h-8 sm:w-8 hover:text-blue" />
      </a>
    </footer>
  );
}
