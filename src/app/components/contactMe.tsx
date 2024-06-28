import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { MdOutlineCancel } from "react-icons/md";

import EmailForm from "./emailForm";

export default function ContactMe() {
  const hasDialog = useSearchParams().has("dialog");
  const router = useRouter();
  const pathName = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (hasDialog) dialogRef.current?.showModal();
    else dialogRef.current?.close();
  }, [hasDialog]);

  const closeDialog = () => {
    dialogRef.current?.close();
    router.push(`${pathName}`);
  };

  return (
    hasDialog && (
      <dialog
        ref={dialogRef}
        className="rounded-xl pt-3 px-6 w-full sm:max-w-screen-sm border-2 dark:border-blue backdrop:bg-gray-5"
      >
        <MdOutlineCancel
          className="ml-auto m-2 h-6 w-6 cursor-pointer dark:hover:text-blue hover:text-blue"
          onClick={closeDialog}
        />
        <EmailForm />
      </dialog>
    )
  );
}
