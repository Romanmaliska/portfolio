import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { MdSend, MdOutlineCancel } from "react-icons/md";

import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const hasDialog = useSearchParams().has("dialog");
  const router = useRouter();
  const pathName = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const serviceId = "service_5viof7z";
  const templatId = "template_vh9yaog";
  const publicKey = "TYWb7dJ6bKlYXdBKk";
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    if (hasDialog) dialogRef.current?.showModal();
    else dialogRef.current?.close();
  }, [hasDialog]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const sendEmail = () => {
    try {
      emailjs.send(serviceId, templatId, formData, {
        publicKey: publicKey,
        limitRate: { throttle: 1000 },
      });
    } catch {
      // no op
    }
  };

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
          onClick={closeDialog}
          className="ml-auto m-2 h-6 w-6"
        />
        <form className="flex flex-col gap-2 pb-8">
          <label htmlFor="email" className="px-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="john@email.com"
            required
            minLength={4}
            className="rounded-md p-2 mb-4 dark:bg-dark "
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="subject" className="px-2">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            placeholder="Subject"
            required
            minLength={2}
            className="rounded-md p-2 mb-4 dark:bg-dark "
            value={formData.subject}
            onChange={handleChange}
          />
          <label htmlFor="message" className="px-2">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your message..."
            required
            minLength={10}
            rows={4}
            className="rounded-md p-2 mb-4 resize-none dark:bg-dark "
            value={formData.message}
            onChange={handleChange}
          />
          <button
            onClick={sendEmail}
            className="inline-block align-middle w-1/2 border-2 rounded-md dark:border-blue p-1 uppercase text-xs sm:text-lg"
          >
            Send{" "}
            <MdSend className="inline-block align-middle text-xs sm:text-lg" />
          </button>
        </form>
      </dialog>
    )
  );
}
