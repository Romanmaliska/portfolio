"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import { MdSend, MdCancelScheduleSend } from "react-icons/md";

export default function ContactMe() {
  const hasDialog = useSearchParams().has("dialog");
  const router = useRouter();

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
    router.push("/");
  };

  return (
    hasDialog && (
      <dialog
        ref={dialogRef}
        className="rounded-xl px-6 py-12 w-full sm:max-w-screen-sm border-2 dark:border-blue backdrop:bg-gray-5"
      >
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
        </form>
        <section className="flex gap-4">
          <button
            onClick={closeDialog}
            className="w-1/2 border-2 rounded-md dark:border-blue p-1 uppercase text-xs sm:text-lg"
          >
            Cancel <MdCancelScheduleSend className="inline" />
          </button>
          <button
            onClick={sendEmail}
            className="w-1/2 border-2 rounded-md dark:border-blue p-1 uppercase text-xs sm:text-lg "
          >
            Send <MdSend className="inline" />
          </button>
        </section>
      </dialog>
    )
  );
}
