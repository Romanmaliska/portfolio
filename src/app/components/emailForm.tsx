import { useState } from 'react';
import { MdSend } from 'react-icons/md';

import { z } from 'zod';

const emailSchema = z.object({
  email: z.string().email(),
  subject: z.string().min(2),
  message: z.string().min(10),
});

type User = z.infer<typeof emailSchema>;

type Props = {
  closeDialog: () => void;
};

export default function EmailForm({ closeDialog }: Props) {
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

  const sendEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    closeDialog();
    setFormData({ email: '', subject: '', message: '' });

    try {
      emailSchema.safeParse(formData);

      await fetch('/api/resend', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
    } catch {
      // no op
    }
  };

  return (
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
        className="rounded-md p-2 mb-4 dark:bg-dark"
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
        className="rounded-md p-2 mb-4 dark:bg-dark"
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
        className="rounded-md p-2 mb-4 resize-none dark:bg-dark"
        value={formData.message}
        onChange={handleChange}
      />
      <button
        onClick={sendEmail}
        className="flex justify-center items-center m-auto gap-4 w-1/3 border-2 rounded-md dark:border-blue p-1 uppercase text-xs sm:text-lg cursor-pointer dark:hover:text-blue hover:text-blue"
      >
        <span>Send</span>
        <MdSend />
      </button>
    </form>
  );
}
