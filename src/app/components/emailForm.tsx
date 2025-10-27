import { useState } from 'react';
import { MdOutlineCancel, MdSend, MdError } from 'react-icons/md';

import { z } from 'zod';

const emailSchema = z.object({
  email: z.string().email(),
  subject: z.string().min(2),
  message: z.string().min(10),
});

type User = z.infer<typeof emailSchema>;

type Props = {
  dialogRef: React.RefObject<HTMLDialogElement | null>;
};

export default function EmailForm({ dialogRef }: Props) {
  const [error, setError] = useState<z.typeToFlattenedError<User> | null>(null);
  const [formData, setFormData] = useState<User>({
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const blurredFieldId = e.target.id as keyof User;
    const result = emailSchema.safeParse(formData);

    if (!result.success) {
      const { fieldErrors, formErrors } = result.error.flatten();

      const currentFieldErrors: Partial<Record<keyof User, string[]>> = {
        ...error?.fieldErrors,
      };

      // Add or update the error for the field that just blurred
      const blurredFieldError = fieldErrors[blurredFieldId];
      if (blurredFieldError) {
        currentFieldErrors[blurredFieldId] = blurredFieldError;
      } else {
        delete currentFieldErrors[blurredFieldId];
      }

      setError({
        fieldErrors: currentFieldErrors,
        formErrors,
      });
    } else {
      setError(null);
    }
  };

  const handleCloseDialog = () => {
    setError(null);
    setFormData({ email: '', subject: '', message: '' });
    if ('startViewTransition' in document) {
      document.startViewTransition(() => {
        dialogRef.current?.close();
      });
    } else {
      dialogRef.current?.close();
    }
  };

  const sendEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const result = emailSchema.safeParse(formData);

      if (!result.success) {
        setError(result.error.flatten());
        return;
      }

      await fetch('/api/resend', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      handleCloseDialog();
    } catch {
      // no op
    }
  };

  return (
    <dialog
      ref={dialogRef}
      style={{ viewTransitionName: 'email-dialog' }}
      className="rounded-xl pt-3 px-6 w-full sm:max-w-screen-sm border-2 dark:border-blue backdrop:bg-gray-5"
    >
      <MdOutlineCancel
        className="ml-auto m-2 h-6 w-6 cursor-pointer dark:hover:text-blue hover:text-blue"
        onClick={handleCloseDialog}
      />
      <form className="flex flex-col gap-4 pb-8">
        <div className="flex flex-col gap-4 pb-8">
          <label htmlFor="email" className="px-2">
            Email
          </label>
          <div className="relative">
            <input
              id="email"
              type="email"
              placeholder="john@email.com"
              required
              minLength={4}
              className="rounded-md p-2 w-full dark:bg-dark"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {error?.fieldErrors.email && (
              <p className="flex gap-2 items-center text-sm right-0 absolute text-red-500">
                <MdError />
                {error.fieldErrors.email[0]}
              </p>
            )}
          </div>
          <label htmlFor="subject" className="px-2">
            Subject
          </label>
          <div className="relative">
            <input
              id="subject"
              type="text"
              placeholder="Subject"
              required
              minLength={2}
              className="rounded-md p-2 w-full dark:bg-dark"
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {error?.fieldErrors.subject && (
              <p className="flex gap-2 items-center text-sm right-0 absolute text-red-500">
                <MdError />
                {error.fieldErrors.subject[0]}
              </p>
            )}
          </div>
          <label htmlFor="message" className="px-2">
            Message
          </label>
          <div className="relative">
            <textarea
              id="message"
              placeholder="Your message..."
              required
              minLength={10}
              rows={4}
              className="rounded-md p-2 resize-none w-full dark:bg-dark"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {error?.fieldErrors.message && (
              <p className="flex gap-2 items-center text-sm right-0 absolute text-red-500">
                <MdError />
                {error.fieldErrors.message[0]}
              </p>
            )}
          </div>
        </div>
        <button
          onClick={sendEmail}
          disabled={!!error}
          className="flex justify-center items-center m-auto gap-4 w-1/3 border-2 rounded-md dark:border-blue p-1 uppercase text-xs sm:text-lg cursor-pointer dark:hover:text-blue hover:text-blue"
        >
          <span>Send</span>
          <MdSend />
        </button>
      </form>
    </dialog>
  );
}
