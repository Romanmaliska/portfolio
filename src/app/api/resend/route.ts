import { Resend } from 'resend';
import { EmailTemplate } from '@/app/components/emailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email, subject, message } = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: 'Form <onboarding@resend.dev>',
      to: ['maliskaroman@gmail.com'],
      subject,
      react: EmailTemplate({ email, subject, message }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
