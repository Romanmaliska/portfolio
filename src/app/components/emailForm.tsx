import { useState } from 'react';
import { MdOutlineCancel, MdSend, MdError } from 'react-icons/md';
import { useTranslations } from 'next-intl';

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
  const t = useTranslations('ContactPage');
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

  const sendEmail = async (
    e?: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>,
  ) => {
    e?.preventDefault();

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
      className="rounded-2xl p-8 w-full sm:max-w-screen-sm bg-white/95 dark:bg-slate-800/90 backdrop-blur-2xl border border-slate-200/50 dark:border-white/20 shadow-2xl backdrop:bg-slate-900/50 backdrop:backdrop-blur-sm"
    >
      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleCloseDialog}
          className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-800"
        >
          <MdOutlineCancel className="h-5 w-5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" />
        </button>
      </div>

      <form
        className="flex flex-col gap-6"
        onSubmit={(e) => {
          e.preventDefault();
          sendEmail(e as any);
        }}
      >
        <div className="flex flex-col gap-6">
          <div className="relative">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              {t('emailLabel')}
            </label>
            <input
              id="email"
              type="email"
              placeholder={t('emailPlaceholder')}
              required
              minLength={4}
              className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
              value={formData.email}
              autoFocus
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {error?.fieldErrors.email && (
              <p className="flex gap-2 items-center absolute right-0 text-sm mt-2 text-red-500 dark:text-red-400">
                <MdError />
                {error.fieldErrors.email[0]}
              </p>
            )}
          </div>

          <div className="relative">
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              {t('subjectLabel')}
            </label>
            <input
              id="subject"
              type="text"
              placeholder={t('subjectPlaceholder')}
              required
              minLength={2}
              className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {error?.fieldErrors.subject && (
              <p className="flex gap-2 items-center absolute right-0 text-sm mt-2 text-red-500 dark:text-red-400">
                <MdError />
                {error.fieldErrors.subject[0]}
              </p>
            )}
          </div>

          <div className="relative pb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              {t('messageLabel')}
            </label>
            <textarea
              id="message"
              placeholder={t('messagePlaceholder')}
              required
              minLength={10}
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-500 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {error?.fieldErrors.message && (
              <p className="flex gap-2 items-center absolute right-0 text-sm mt-2 text-red-500 dark:text-red-400">
                <MdError />
                {error.fieldErrors.message[0]}
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={!!error && Object.keys(error.fieldErrors || {}).length > 0}
          className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-800"
        >
          <span className="flex items-center justify-center gap-2">
            {t('sendButton')}
            <MdSend />
          </span>
        </button>
      </form>
    </dialog>
  );
}
